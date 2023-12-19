import { Fees, Hash, Lgnt, LocType, LogionNodeApiClass, UUID } from "@logion/node-api";

export interface LegalOfficerCaseCostParameters {
    readonly description: string;
    readonly legalFee: Lgnt;
    readonly locType: LocType;
    readonly metadata: number;
    readonly links: number;
    readonly collectionCostParameters: CollectionCostParameters;
    readonly files: LocFileCostParameters[];
    readonly items: CollectionItemCostParameters[];
    readonly records: TokensRecordCostParameters[];
}

export interface CollectionCostParameters {
    readonly custom: boolean;
    readonly protectedValue: bigint;
    readonly customValueFee: Lgnt;
    readonly customCollectionItemFee: Lgnt;
    readonly customTokensRecordFee: Lgnt;
}

export const ZERO_COLLECTION_COST_PARAMETERS: CollectionCostParameters = {
    custom: false,
    protectedValue: 0n,
    customValueFee: Lgnt.zero(),
    customCollectionItemFee: Lgnt.zero(),
    customTokensRecordFee: Lgnt.zero(),
};

export const DEFAULT_STANDARD_COLLECTION_COST_PARAMETERS: CollectionCostParameters = {
    custom: false,
    protectedValue: 2500000n,
    customValueFee: Lgnt.zero(),
    customCollectionItemFee: Lgnt.zero(),
    customTokensRecordFee: Lgnt.zero(),
};

export const DEFAULT_CUSTOM_COLLECTION_COST_PARAMETERS: CollectionCostParameters = {
    custom: true,
    protectedValue: 0n,
    customValueFee: Lgnt.from(3000n),
    customCollectionItemFee: Lgnt.from(1500n),
    customTokensRecordFee: Lgnt.from(1500n),
};

export interface LocFileCostParameters {
    readonly description: string;
    readonly size: bigint;
}

export const DEFAULT_FILE_SIZE = 1024n * 1024n; // 1 MB

export const DEFAULT_FILE: LocFileCostParameters = {
    description: "A file",
    size: DEFAULT_FILE_SIZE,
};

export interface CollectionItemCostParameters {
    items: bigint;
    totalFileSize: bigint;
    tokenSupply: bigint;
}

export const DEFAULT_ITEM: CollectionItemCostParameters = {
    items: 20n,
    tokenSupply: 1n,
    totalFileSize: DEFAULT_FILE_SIZE,
};

export interface TokensRecordCostParameters {
    records: bigint;
    totalFileSize: bigint;
}

export const DEFAULT_RECORD: TokensRecordCostParameters = {
    records: 5n,
    totalFileSize: DEFAULT_FILE_SIZE,
};

export const DEFAULT_LGNT_EURO_RATE = 20; // 20 LGNT = 1 EUR

export interface CollectionFees {
    readonly valueFee: Lgnt;
    readonly collectionItemFee: Lgnt;
    readonly tokensRecordFee: Lgnt;
}

export interface ConnectionParameters {
    api: LogionNodeApiClass;
    origin: string;
}

export class LegalOfficerCaseCost {

    static defaultIdentityLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Identity LOC",
            legalFee: Lgnt.from(160n),
            locType: "Identity",
            metadata: 1,
            links: 1,
            collectionCostParameters: ZERO_COLLECTION_COST_PARAMETERS,
            files: [ DEFAULT_FILE ],
            items: [],
            records: [],
        });
    }

    static defaultTransactionLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Transaction LOC",
            legalFee: Lgnt.from(2000n),
            locType: "Transaction",
            metadata: 1,
            links: 1,
            collectionCostParameters: ZERO_COLLECTION_COST_PARAMETERS,
            files: [ DEFAULT_FILE ],
            items: [],
            records: [],
        });
    }

    static defaultCollectionLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Collection LOC",
            legalFee: Lgnt.from(2000n),
            locType: "Collection",
            metadata: 1,
            links: 1,
            collectionCostParameters: DEFAULT_STANDARD_COLLECTION_COST_PARAMETERS,
            files: [ DEFAULT_FILE ],
            items: [ DEFAULT_ITEM ],
            records: [ DEFAULT_RECORD ],
        });
    }

    constructor(parameters: LegalOfficerCaseCostParameters, fees?: Fees, collectionFees?: CollectionFees) {
        this.parameters = parameters;
        if(fees && collectionFees) {
            this._fees = fees;
            this._collectionFees = collectionFees;
        } else {
            this._fees = Fees.zero();

            this._collectionFees = {
                valueFee: Lgnt.zero(),
                collectionItemFee: Lgnt.zero(),
                tokensRecordFee: Lgnt.zero(),
            };
        }
    }

    readonly parameters: LegalOfficerCaseCostParameters;

    get fees() {
        return this._fees;
    }

    private _fees: Fees;

    get collectionFees(): CollectionFees {
        return this._collectionFees;
    }

    private _collectionFees: CollectionFees;

    async computeFees(connection: ConnectionParameters, lgntEuroRate: number) {
        const { api, origin } = connection;

        const metadataInclusionFees = await api.fees.estimateWithoutStorage({
            origin,
            submittable: api.polkadot.tx.logionLoc.addMetadata(
                api.adapters.toLocId(new UUID()),
                api.adapters.toPalletLogionLocMetadataItem({
                    name: Hash.of("Some name"),
                    value: Hash.of("Some value"),
                    submitter: api.queries.getValidAccountId(origin, "Polkadot"),
                })
            ),
        });

        const linkInclusionFees = await api.fees.estimateWithoutStorage({
            origin,
            submittable: api.polkadot.tx.logionLoc.addLink(
                api.adapters.toLocId(new UUID()),
                api.adapters.toPalletLogionLocLocLinkParams({
                    id: new UUID(),
                    nature: Hash.of("Some nature"),
                    submitter: api.queries.getValidAccountId(origin, "Polkadot"),
                })
            ),
        });

        this._collectionFees = this.computeCollectionFees(lgntEuroRate);

        const fileFees = await this.filesFees(api, origin);
        const itemsFees = await this.itemsFees(api, origin);
        const recordsFees = await this.recordsFees(api, origin);
        const creationFees = await this.creationFees(api, origin);

        const legalFee = new Fees({
            inclusionFee: Lgnt.zero(),
            legalFee: this.parameters.legalFee,
        });

        const valueFees = new Fees({
            inclusionFee: Lgnt.zero(),
            valueFee: this._collectionFees.valueFee,
        });

        this._fees = Fees.addAll(
            metadataInclusionFees.multiply(BigInt(this.parameters.metadata)),
            linkInclusionFees.multiply(BigInt(this.parameters.links)),
            fileFees,
            creationFees,
            legalFee,
            valueFees,
            itemsFees,
            recordsFees,
        );
    }

    private async filesFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = Fees.zero();
        for(const file of this.parameters.files) {
            const fileFees = await api.fees.estimateWithStorage({
                origin,
                submittable: api.polkadot.tx.logionLoc.addFile(
                    api.adapters.toLocId(new UUID()),
                    api.adapters.toPalletLogionLocFile({
                        hash: Hash.of(""),
                        nature: Hash.of("Some nature"),
                        size: file.size,
                        submitter: api.queries.getValidAccountId(origin, "Polkadot"),
                    }),
                ),
                size: file.size,
            });
            total = total.add(fileFees);
        }
        return total;
    }

    private async creationFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        if(this.parameters.locType === "Transaction") {
            return api.fees.estimateWithoutStorage({
                origin,
                submittable: api.polkadot.tx.logionLoc.createPolkadotTransactionLoc(
                    api.adapters.toLocId(new UUID()),
                    origin,
                    this.parameters.legalFee.canonical,
                    api.adapters.toPalletLogionLocItemsParams({
                        metadata: [],
                        files: [],
                        links: [],
                    }),
                ),
            });
        } else if(this.parameters.locType === "Collection") {
            return api.fees.estimateWithoutStorage({
                origin,
                submittable: api.polkadot.tx.logionLoc.createPolkadotTransactionLoc(
                    api.adapters.toLocId(new UUID()),
                    origin,
                    this.parameters.legalFee.canonical,
                    api.adapters.toPalletLogionLocItemsParams({
                        metadata: [],
                        files: [],
                        links: [],
                    }),
                ),
            });
        } else if(this.parameters.locType === "Identity") {
            return api.fees.estimateWithoutStorage({
                origin,
                submittable: api.polkadot.tx.logionLoc.createPolkadotTransactionLoc(
                    api.adapters.toLocId(new UUID()),
                    origin,
                    this.parameters.legalFee.canonical,
                    api.adapters.toPalletLogionLocItemsParams({
                        metadata: [],
                        files: [],
                        links: [],
                    }),
                ),
            });
        } else {
            throw new Error(`Unsupported LOC type ${ this.parameters.locType }`);
        }
    }

    private computeCollectionFees(lgntEuroRate: number): CollectionFees {
        if(this.parameters.collectionCostParameters.custom) {
            return {
                valueFee: this.parameters.collectionCostParameters.customValueFee,
                collectionItemFee: this.parameters.collectionCostParameters.customCollectionItemFee,
                tokensRecordFee: this.parameters.collectionCostParameters.customTokensRecordFee,
            };
        } else {
            const valueFee = this.valueFee(this.parameters.collectionCostParameters.protectedValue, lgntEuroRate);
            const collectionItemFee = valueFee.divide(2n);
            const tokensRecordFee = collectionItemFee;
            return { valueFee, collectionItemFee, tokensRecordFee };
        }
    }

    private valueFee(protectedValue: bigint, lgntEuroRate: number) {
        let euroValueFee;
        if(protectedValue <= 50000n) {
            euroValueFee = Number(protectedValue) * 0.002;
        } else if(protectedValue > 50000n && protectedValue <= 150000n) {
            euroValueFee = Number(protectedValue) * 0.0018;
        } else if(protectedValue > 150000n && protectedValue <= 300000n) {
            euroValueFee = Number(protectedValue) * 0.0016;
        } else if(protectedValue > 300000n && protectedValue <= 600000n) {
            euroValueFee = Number(protectedValue) * 0.0014;
        } else if(protectedValue > 600000n && protectedValue <= 1200000n) {
            euroValueFee = Number(protectedValue) * 0.0012;
        } else if(protectedValue > 1200000n && protectedValue <= 2500000n) {
            euroValueFee = Number(protectedValue) * 0.0006;
        } else {
            euroValueFee = Number(protectedValue) * 0.0003;
        }
        return Lgnt.fromFiat(Math.ceil(euroValueFee), lgntEuroRate);
    }

    private async itemsFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = Fees.zero();
        for(const item of this.parameters.items) {
            const submittable = api.polkadot.tx.logionLoc.addCollectionItem(
                api.adapters.toLocId(new UUID()),
                api.adapters.toH256(Hash.of("")),
                api.adapters.toH256(Hash.of("")),
                [
                    api.adapters.toCollectionItemFile({
                        contentType: Hash.of("text/plain"),
                        hash: Hash.of(""),
                        name: Hash.of(""),
                        size: item.totalFileSize,
                    })
                ],
                null,
                true,
                [],
            );
            const itemFee = await api.fees.estimateAddCollectionItem({
                origin,
                collectionItemFee: this._collectionFees.collectionItemFee,
                numOfEntries: 1n,
                submittable,
                tokenIssuance: item.tokenSupply,
                totSize: item.totalFileSize,
            });
            const itemFees = itemFee.multiply(item.items);
            total = total.add(itemFees);
        }
        return total;
    }

    private async recordsFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = Fees.zero();
        for(const record of this.parameters.records) {
            const submittable = api.polkadot.tx.logionLoc.addTokensRecord(
                api.adapters.toLocId(new UUID()),
                api.adapters.toH256(Hash.of("")),
                api.adapters.toH256(Hash.of("")),
                [
                    api.adapters.toCollectionItemFile({
                        contentType: Hash.of("text/plain"),
                        hash: Hash.of(""),
                        name: Hash.of(""),
                        size: record.totalFileSize,
                    })
                ],
            );
            const recordFee = await api.fees.estimateAddTokensRecord({
                origin,
                tokensRecordFee: this._collectionFees.tokensRecordFee,
                numOfEntries: 1n,
                submittable,
                totSize: record.totalFileSize,
            });
            const recordFees = recordFee.multiply(record.records);
            total = total.add(recordFees);
        }
        return total;
    }
}

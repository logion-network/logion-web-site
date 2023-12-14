import { Currency, Fees, Hash, LocType, LogionNodeApiClass, Numbers, UUID, buildApiClass } from "@logion/node-api";

export interface LegalOfficerCaseCostParameters {
    readonly description: string;
    readonly legalFee: bigint;
    readonly locType: LocType;
    readonly metadata: number;
    readonly links: number;
    readonly protectedValue: bigint;
    readonly files: LocFileCostParameters[];
    readonly items: CollectionItemCostParameters[];
    readonly records: TokensRecordCostParameters[];
}

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
    totalFileSize: bigint;
    tokenSupply: bigint;
}

export const DEFAULT_ITEM: CollectionItemCostParameters = {
    tokenSupply: 1n,
    totalFileSize: DEFAULT_FILE_SIZE,
};

export interface TokensRecordCostParameters {
    totalFileSize: bigint;
}

export const DEFAULT_RECORD: TokensRecordCostParameters = {
    totalFileSize: DEFAULT_FILE_SIZE,
};

export const LGNT_EURO_RATE = 20; // 20 LGNT = 1 EUR

export interface CollectionFees {
    readonly valueFee: bigint;
    readonly collectionItemFee: bigint;
    readonly tokensRecordFee: bigint;
}

export class LegalOfficerCaseCost {

    static defaultIdentityLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Identity LOC",
            legalFee: Currency.toCanonicalAmount(Currency.nLgnt(160n)),
            locType: "Identity",
            metadata: 1,
            links: 1,
            protectedValue: 0n,
            files: [ DEFAULT_FILE ],
            items: [],
            records: [],
        });
    }

    static defaultTransactionLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Transaction LOC",
            legalFee: Currency.toCanonicalAmount(Currency.nLgnt(2000n)),
            locType: "Transaction",
            metadata: 1,
            links: 1,
            protectedValue: 0n,
            files: [ DEFAULT_FILE ],
            items: [],
            records: [],
        });
    }

    static defaultCollectionLocCost(): LegalOfficerCaseCost {
        return new LegalOfficerCaseCost({
            description: "Collection LOC",
            legalFee: Currency.toCanonicalAmount(Currency.nLgnt(2000n)),
            locType: "Collection",
            metadata: 1,
            links: 1,
            protectedValue: 2500000n,
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
            this._fees = new Fees({ inclusionFee: 0n });

            this._collectionFees = {
                valueFee: 0n,
                collectionItemFee: 0n,
                tokensRecordFee: 0n,
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

    async computeFees() {
        const api = await buildApiClass("wss://dev-rpc01.logion.network");
        const origin = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";

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

        this._collectionFees = this.computeCollectionFees();

        const fileFees = await this.filesFees(api, origin);
        const itemsFees = await this.itemsFees(api, origin);
        const recordsFees = await this.recordsFees(api, origin);
        const creationFees = await this.creationFees(api, origin);

        const legalFee = new Fees({
            inclusionFee: 0n,
            legalFee: this.parameters.legalFee,
        });

        const valueFees = new Fees({
            inclusionFee: 0n,
            valueFee: this.valueFee(this.parameters.protectedValue),
        });

        this._fees = LegalOfficerCaseCost.addFees(
            LegalOfficerCaseCost.multiplyFees(metadataInclusionFees, BigInt(this.parameters.metadata)),
            LegalOfficerCaseCost.multiplyFees(linkInclusionFees, BigInt(this.parameters.links)),
            fileFees,
            creationFees,
            legalFee,
            valueFees,
            itemsFees,
            recordsFees,
        );
    }

    private async filesFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = new Fees({ inclusionFee: 0n });
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
            total = LegalOfficerCaseCost.addFees(total, fileFees);
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
                    this.parameters.legalFee,
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
                    this.parameters.legalFee,
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
                    this.parameters.legalFee,
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

    // TODO move to node-api
    static multiplyFees(fees: Fees, times: bigint): Fees {
        return new Fees({
            inclusionFee: this.multiplyFee(fees.inclusionFee, times)!,
            certificateFee: this.multiplyFee(fees.certificateFee, times),
            collectionItemFee: this.multiplyFee(fees.collectionItemFee, times),
            legalFee: this.multiplyFee(fees.legalFee, times),
            storageFee: this.multiplyFee(fees.storageFee, times),
            tokensRecordFee: this.multiplyFee(fees.tokensRecordFee, times),
            valueFee: this.multiplyFee(fees.valueFee, times),
        });
    }

    private static multiplyFee(fee: bigint | undefined, times: bigint): bigint | undefined {
        if(fee !== undefined) {
            return fee * times;
        } else {
            return undefined;
        }
    }

    // TODO move to node-api
    static addFees(...terms: Fees[]): Fees {
        let total = new Fees({ inclusionFee: 0n });
        for(const fee of terms) {
            total = new Fees({
                inclusionFee: this.addFee(total.inclusionFee, fee.inclusionFee)!,
                certificateFee: this.addFee(total.certificateFee, fee.certificateFee),
                collectionItemFee: this.addFee(total.collectionItemFee, fee.collectionItemFee),
                legalFee: this.addFee(total.legalFee, fee.legalFee),
                storageFee: this.addFee(total.storageFee, fee.storageFee),
                tokensRecordFee: this.addFee(total.tokensRecordFee, fee.tokensRecordFee),
                valueFee: this.addFee(total.valueFee, fee.valueFee),
            });
        }
        return total;
    }

    private static addFee(fee1: bigint | undefined, fee2: bigint | undefined): bigint | undefined {
        if(fee1 !== undefined && fee2 !== undefined) {
            return fee1 + fee2;
        } else if(fee1 !== undefined && fee2 === undefined) {
            return fee1;
        } else if(fee1 === undefined && fee2 !== undefined) {
            return fee2;
        } else {
            return undefined;
        }
    }

    private computeCollectionFees(): CollectionFees {
        const valueFee = this.valueFee(this.parameters.protectedValue);
        const collectionItemFee = BigInt(Math.ceil(Number(valueFee) / 2));
        const tokensRecordFee = collectionItemFee;
        return { valueFee, collectionItemFee, tokensRecordFee };
    }

    private valueFee(protectedValue: bigint) {
        if(protectedValue <= 50000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.002);
        } else if(protectedValue > 50000n && protectedValue <= 150000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0018);
        } else if(protectedValue > 150000n && protectedValue <= 300000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0016);
        } else if(protectedValue > 300000n && protectedValue <= 600000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0014);
        } else if(protectedValue > 600000n && protectedValue <= 1200000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0012);
        } else if(protectedValue > 1200000n && protectedValue <= 2500000n) {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0006);
        } else {
            return LegalOfficerCaseCost.euroToLgnt(Number(protectedValue) * 0.0003);
        }
    }

    private async itemsFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = new Fees({ inclusionFee: 0n });
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
            const itemFees = await api.fees.estimateAddCollectionItem({
                origin,
                collectionItemFee: this._collectionFees.collectionItemFee,
                numOfEntries: 1n,
                submittable,
                tokenIssuance: item.tokenSupply,
                totSize: item.totalFileSize,
            });
            total = LegalOfficerCaseCost.addFees(total, itemFees);
        }
        return total;
    }

    private async recordsFees(api: LogionNodeApiClass, origin: string): Promise<Fees> {
        let total = new Fees({ inclusionFee: 0n });
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
            const recordFees = await api.fees.estimateAddTokensRecord({
                origin,
                tokensRecordFee: this._collectionFees.tokensRecordFee,
                numOfEntries: 1n,
                submittable,
                totSize: record.totalFileSize,
            });
            total = LegalOfficerCaseCost.addFees(total, recordFees);
        }
        return total;
    }

    static euroToLgnt(amount: number): bigint {
        const converted = amount * LGNT_EURO_RATE;
        return Currency.toCanonicalAmount(Currency.nLgnt(BigInt(Math.ceil(converted))));
    }

    static lgntToEuro(lgnt: bigint): number {
        return Currency.toPrefixedNumberAmount(lgnt).convertTo(Numbers.NONE).coefficient.toNumber() / LGNT_EURO_RATE;
    }
}

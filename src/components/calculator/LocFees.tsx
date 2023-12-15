import { Form } from "react-bootstrap";
import AmountInputGroup from "./AmountInputGroup";
import "./LocFees.css";
import { Fees } from "@logion/node-api";
import { ReactNode } from "react";

export interface Props {
    title: ReactNode;
    fees: Fees;
    showCollectionFees: boolean;
}

export default function LocFees(props: Props) {
    return (
        <div className="LocFees">
            { props.title }

            <Form.Group controlId="inclusion">
                <Form.Label>Inclusion fee</Form.Label>
                <AmountInputGroup
                    amount={ props.fees.inclusionFee }
                    disabled={ true }
                />
                <Form.Text muted>Extrinsics handling fee</Form.Text>
            </Form.Group>
            <Form.Group controlId="inclusion">
                <Form.Label>Legal fee</Form.Label>
                <AmountInputGroup
                    amount={ props.fees.legalFee }
                    disabled={ true }
                />
                <Form.Text muted>Legal Officer's fee</Form.Text>
            </Form.Group>
            <Form.Group controlId="storage">
                <Form.Label>Storage fee</Form.Label>
                <AmountInputGroup
                    amount={ props.fees.storageFee }
                    disabled={ true }
                />
                <Form.Text muted>Files storage fee</Form.Text>
            </Form.Group>
            {
                props.showCollectionFees &&
                <>
                <Form.Group controlId="certificate">
                    <Form.Label>Certificate fee</Form.Label>
                    <AmountInputGroup
                        amount={ props.fees.certificateFee }
                        disabled={ true }
                    />
                    <Form.Text muted>Infrastructure fee linked to the availability of a certificate linked to an item; depends on token supply</Form.Text>
                </Form.Group>
                <Form.Group controlId="value">
                    <Form.Label>Value fee</Form.Label>
                    <AmountInputGroup
                        amount={ props.fees.valueFee }
                        disabled={ true }
                    />
                    <Form.Text muted>Fee linked to the protected value and collected on LOC closing</Form.Text>
                </Form.Group>
                <Form.Group controlId="collectionItem">
                    <Form.Label>Collection item fee</Form.Label>
                    <AmountInputGroup
                        amount={ props.fees.collectionItemFee }
                        disabled={ true }
                    />
                    <Form.Text muted>Fee linked to the protected value and collected on each item addition</Form.Text>
                </Form.Group>
                <Form.Group controlId="tokensRecord">
                    <Form.Label>Tokens record fee</Form.Label>
                    <AmountInputGroup
                        amount={ props.fees.tokensRecordFee }
                        disabled={ true }
                    />
                    <Form.Text muted>Fee linked to the protected value and collected on each record addition</Form.Text>
                </Form.Group>
                </>
            }
            <Form.Group controlId="total">
                <Form.Label>Total fee</Form.Label>
                <AmountInputGroup
                    amount={ props.fees.totalFee }
                    disabled={ true }
                />
            </Form.Group>
        </div>
    );
}

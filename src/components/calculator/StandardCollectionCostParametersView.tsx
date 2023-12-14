import { Form, InputGroup } from "react-bootstrap";
import DebounceFormControl from "./DebounceFormControl";
import AmountInputGroup from "./AmountInputGroup";
import { useCalculatorContext } from "./CalculatorContext";
import { LegalOfficerCaseCost } from "./LegalOfficerCaseCost";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function StandardCollectionCostParametersView(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    return (
        <div className="StandardCollectionCostParametersView">
            <Form.Group controlId="protectedValue">
                <Form.Label>Protected value</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.loc.parameters.collectionCostParameters.protectedValue.toString() }
                        onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                            custom: false,
                            protectedValue: BigInt(value)
                        }) }
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="fee">
                <Form.Label>Value fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.valueFee }
                    disabled={ true }
                />
            </Form.Group>
            <Form.Group controlId="collectionItemFee">
                <Form.Label>Collection item fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.collectionItemFee }
                    disabled={ true }
                />
            </Form.Group>
            <Form.Group controlId="tokensRecordFee">
                <Form.Label>Tokens record fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.tokensRecordFee }
                    disabled={ true }
                />
            </Form.Group>
        </div>
    );
}

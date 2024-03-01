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
            <h4>LOC</h4>
            <Form.Group controlId="fee">
                <Form.Label>Protected value</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.loc.parameters.collectionCostParameters.protectedValue.toString() }
                        onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                            ...props.loc.parameters.collectionCostParameters,
                            custom: false,
                            protectedValue: BigInt(value)
                        }) }
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
                <Form.Text muted>The value being protected expressed in euros<br /></Form.Text>
                <Form.Label>Value fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.valueFee }
                    disabled={ true }
                />
                <Form.Text muted><p>Fee linked to the protected value and collected on LOC closing</p></Form.Text>
            </Form.Group>
            <h4>Collection Item</h4>
            <Form.Group controlId="collectionItemFee">
                <Form.Label>Protected value</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.loc.parameters.collectionCostParameters.protectedCollectionItemValue.toString() }
                        onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                            ...props.loc.parameters.collectionCostParameters,
                            custom: false,
                            protectedCollectionItemValue: BigInt(value)
                        }) }
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
                <Form.Text muted>The value being protected expressed in euros<br /></Form.Text>
                <Form.Label>Fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.collectionItemFee }
                    disabled={ true }
                />
                <Form.Text muted><p>Fee linked to the protected value and collected on each item addition</p></Form.Text>
            </Form.Group>
            <h4>Tokens Record</h4>
            <Form.Group controlId="tokensRecordFee">
                <Form.Label>Protected value</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.loc.parameters.collectionCostParameters.protectedTokensRecordValue.toString() }
                        onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                            ...props.loc.parameters.collectionCostParameters,
                            custom: false,
                            protectedTokensRecordValue: BigInt(value)
                        }) }
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
                <Form.Text muted>The value being protected expressed in euros<br /></Form.Text>
                <Form.Label>Fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.collectionFees.tokensRecordFee }
                    disabled={ true }
                />
                <Form.Text muted><p>Fee linked to the protected value and collected on each record addition</p></Form.Text>
            </Form.Group>
        </div>
    );
}

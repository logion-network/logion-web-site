import { Form } from "react-bootstrap";
import AmountInputGroup from "./AmountInputGroup";
import { useCalculatorContext } from "./CalculatorContext";
import { LegalOfficerCaseCost } from "./LegalOfficerCaseCost";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function CustomCollectionCostParametersView(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    return (
        <div className="CustomCollectionCostParametersView">
            <Form.Group controlId="fee">
                <Form.Label>Custom value fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.parameters.collectionCostParameters.customValueFee }
                    onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                        ...props.loc.parameters.collectionCostParameters,
                        customValueFee: value,
                    }) }
                    disabled={ updating }
                />
            </Form.Group>
            <Form.Group controlId="collectionItemFee">
                <Form.Label>Custom collection item fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.parameters.collectionCostParameters.customCollectionItemFee }
                    onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                        ...props.loc.parameters.collectionCostParameters,
                        customCollectionItemFee: value,
                    }) }
                    disabled={ updating }
                />
            </Form.Group>
            <Form.Group controlId="tokensRecordFee">
                <Form.Label>Custom tokens record fee</Form.Label>
                <AmountInputGroup
                    amount={ props.loc.parameters.collectionCostParameters.customTokensRecordFee }
                    onChange={ value => updateLocCost(props.index, "collectionCostParameters", {
                        ...props.loc.parameters.collectionCostParameters,
                        customTokensRecordFee: value,
                    }) }
                    disabled={ updating }
                />
            </Form.Group>
        </div>
    );
}

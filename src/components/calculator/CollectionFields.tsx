import { Form, InputGroup } from "react-bootstrap";
import { LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import DebounceFormControl from "./DebounceFormControl";
import Title3 from "./Title3";
import CollectionItems from "./CollectionItems";
import { useCalculatorContext } from "./CalculatorContext";
import AmountInputGroup from "./AmountInputGroup";
import TokensRecords from "./TokensRecords";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function CollectionFields(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    return (
        <div className="CollectionFields">
            <Title3>Collection</Title3>

            <Form.Group controlId="protectedValue">
                <Form.Label>Protected value</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.loc.parameters.protectedValue.toString() }
                        onChange={ value => updateLocCost(props.index, "protectedValue", BigInt(value)) }
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

            <CollectionItems
                index={ props.index }
                loc={ props.loc }
            />

            <TokensRecords
                index={ props.index }
                loc={ props.loc }
            />
        </div>
    );
}

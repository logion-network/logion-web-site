import { useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { LegalOfficerCaseCost, TokensRecordCostParameters } from "./LegalOfficerCaseCost";
import "./TokensRecordView.css";
import DebounceFormControl from "./DebounceFormControl";
import { useCalculatorContext } from "./CalculatorContext";

export interface Props {
    locIndex: number;
    loc: LegalOfficerCaseCost;
    itemIndex: number;
    record: TokensRecordCostParameters;
}

export default function TokensRecordView(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    const removeRecord = useCallback(() => {
        updateLocCost(props.locIndex, "records", props.loc.parameters.records.filter((_, index) => index !== props.itemIndex));
    }, [ props, updateLocCost ]);

    const replaceItem = useCallback((newRecord: TokensRecordCostParameters) => {
        updateLocCost(props.locIndex, "records", props.loc.parameters.records.map((item, index) => {
            if(index !== props.itemIndex) {
                return item;
            } else {
                return newRecord;
            }
        }));
    }, [ props, updateLocCost ]);

    return (
        <div className="TokensRecordView">
            <h4>Tokens record #{ props.itemIndex + 1 }</h4>

            <Form.Group controlId="size">
                <Form.Label>Total file size</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.record.totalFileSize.toString() }
                        onChange={ value => replaceItem({
                            ...props.record,
                            totalFileSize: BigInt(value),
                        })}
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>Bytes</InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Button onClick={ removeRecord } variant="danger">Remove record</Button>
        </div>
    );
}
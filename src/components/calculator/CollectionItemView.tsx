import { useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { CollectionItemCostParameters, LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import "./CollectionItemView.css";
import DebounceFormControl from "./DebounceFormControl";
import { useCalculatorContext } from "./CalculatorContext";

export interface Props {
    locIndex: number;
    loc: LegalOfficerCaseCost;
    itemIndex: number;
    item: CollectionItemCostParameters;
}

export default function CollectionItemView(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    const removeItem = useCallback(() => {
        updateLocCost(props.locIndex, "items", props.loc.parameters.items.filter((_, index) => index !== props.itemIndex));
    }, [ props, updateLocCost ]);

    const replaceItem = useCallback((newItem: CollectionItemCostParameters) => {
        updateLocCost(props.locIndex, "items", props.loc.parameters.items.map((item, index) => {
            if(index !== props.itemIndex) {
                return item;
            } else {
                return newItem;
            }
        }));
    }, [ props, updateLocCost ]);

    return (
        <div className="CollectionItemView">
            <h4>Collection Item #{ props.itemIndex + 1 }</h4>

            <Form.Group controlId="size">
                <Form.Label>Total file size</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.item.totalFileSize.toString() }
                        onChange={ value => replaceItem({
                            ...props.item,
                            totalFileSize: BigInt(value),
                        })}
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>Bytes</InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="supply">
                <Form.Label>Token supply</Form.Label>
                <DebounceFormControl
                    value={ props.item.tokenSupply.toString() }
                    onChange={ value => replaceItem({
                        ...props.item,
                        tokenSupply: BigInt(value),
                    })}
                    disabled={ updating }
                    type="number"
                />
            </Form.Group>

            <Button onClick={ removeItem } variant="danger">Remove item</Button>
        </div>
    );
}

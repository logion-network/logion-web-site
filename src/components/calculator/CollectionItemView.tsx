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
            <h4>Collection item group #{ props.itemIndex + 1 }</h4>

            <Form.Group controlId="items">
                <Form.Label>Number of items</Form.Label>
                <DebounceFormControl
                    value={ props.item.items.toString() }
                    onChange={ value => replaceItem({
                        ...props.item,
                        items: BigInt(value),
                    })}
                    disabled={ updating }
                    type="number"
                />
                <Form.Text muted>Number of items in this group</Form.Text>
            </Form.Group>
            <Form.Group controlId="size">
                <Form.Label>Total file size per item</Form.Label>
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
                <Form.Text muted>The sum of the size of all the files of this group's items.</Form.Text>
            </Form.Group>
            <Form.Group controlId="supply">
                <Form.Label>Token supply per item</Form.Label>
                <DebounceFormControl
                    value={ props.item.tokenSupply.toString() }
                    onChange={ value => replaceItem({
                        ...props.item,
                        tokenSupply: BigInt(value),
                    })}
                    disabled={ updating }
                    type="number"
                />
                <Form.Text muted>If no token is attached to the items, set the value to zero; with NFT's, set the value to 1; with fungible tokens set the value to the supply of the token. This value impacts certificate fees.</Form.Text>
            </Form.Group>

            <Button onClick={ removeItem } variant="danger">Remove item group</Button>
        </div>
    );
}

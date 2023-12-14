import { Button } from "react-bootstrap";
import Center from "../Center";
import { useCalculatorContext } from "./CalculatorContext";
import { DEFAULT_ITEM, LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import Title3 from "./Title3";
import { useCallback } from "react";
import CollectionItemView from "./CollectionItemView";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function CollectionItems(props: Props) {
    const { updateLocCost } = useCalculatorContext();

    const addDefaultItem = useCallback(() => {
        updateLocCost(props.index, "items", [ ...props.loc.parameters.items, DEFAULT_ITEM ]);
    }, [ updateLocCost, props.index, props.loc.parameters.items ]);

    return (
        <div className="CollectionItems">
            <Title3>Collection Items</Title3>
            { props.loc.parameters.items.length === 0 && <p>You can add collection items by clicking on the button below.</p> }
            { props.loc.parameters.items.map((item, index) => (
                <CollectionItemView
                    key={ index }
                    locIndex={ props.index }
                    loc={ props.loc }
                    itemIndex={ index }
                    item={ item }
                />
            ))}
            <Center>
                <Button onClick={ addDefaultItem }>Add item</Button>
            </Center>
        </div>
    );
}

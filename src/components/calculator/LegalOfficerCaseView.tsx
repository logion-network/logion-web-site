import { Button, Form } from "react-bootstrap";
import { useCalculatorContext } from "./CalculatorContext";
import AmountInputGroup from "./AmountInputGroup";
import { useCallback, useMemo } from "react";
import LocFees from "./LocFees";
import CollectionFields from "./CollectionFields";
import LocFiles from "./LocFiles";
import DebounceFormControl from "./DebounceFormControl";
import Title2 from "./Title2";
import Title3 from "./Title3";

export interface Props {
    index: number;
    removeActiveKey: () => void;
    title: string;
}

export default function LegalOfficerCaseView(props: Props) {
    const { locs, removeLocCost, updateLocCost, updating } = useCalculatorContext();

    const loc = useMemo(() => locs[props.index], [ locs, props.index ]);

    const onChangeLegalFee = useMemo(() => {
        if(loc.parameters.locType === "Identity") {
            return undefined;
        } else {
            return (value: bigint) => updateLocCost(props.index, "legalFee", value);
        }
    }, [ loc.parameters.locType, updateLocCost, props.index ]);

    const onRemove = useCallback(() => {
        props.removeActiveKey();
        removeLocCost(props.index);
    }, [ props, removeLocCost ]);

    return (
        <div className="LegalOfficerCaseView">
            <Title2 hide>{ props.title }</Title2>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    value={ loc.parameters.description }
                    onChange={ e => updateLocCost(props.index, "description", e.target.value, false)}
                    disabled={ updating }
                />
            </Form.Group>
            <Form.Group controlId="legalFee">
                <Form.Label>Legal fee</Form.Label>
                <AmountInputGroup
                    amount={ loc.parameters.legalFee }
                    onChange={ onChangeLegalFee }
                    disabled={ loc.parameters.locType === "Identity" }
                />
                <Form.Text muted>Legal Officer's fee, may be discussed with the LO for Transaction and Collection LOCs; default value is 160 for Identity LOCs and 2000 for other types</Form.Text>
            </Form.Group>
            <Form.Group controlId="metadata">
                <Form.Label>Number of public data items</Form.Label>
                <DebounceFormControl
                    value={ loc.parameters.metadata.toString() }
                    onChange={ value => updateLocCost(props.index, "metadata", Number(value))}
                    type="number"
                    disabled={ updating }
                />
            </Form.Group>
            <Form.Group controlId="links">
                <Form.Label>Number of links</Form.Label>
                <DebounceFormControl
                    value={ loc.parameters.links.toString() }
                    onChange={ value => updateLocCost(props.index, "links", Number(value))}
                    type="number"
                    disabled={ updating }
                />
            </Form.Group>
            <LocFiles
                index={ props.index }
                loc={ loc }
            />
            {
                loc.parameters.locType === "Collection" &&
                <CollectionFields
                    index={ props.index }
                    loc={ loc }
                />
            }
            <LocFees
                title={ <Title3>LOC #{ props.index + 1 } fees</Title3> }
                fees={ loc.fees }
                showCollectionFees={ loc.parameters.locType === "Collection" }
            />
            <Button onClick={ onRemove } variant="danger">Remove LOC</Button>
        </div>
    );
}

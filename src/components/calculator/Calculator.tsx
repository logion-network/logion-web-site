import { Accordion, Form, InputGroup } from "react-bootstrap";
import { useCalculatorContext } from "./CalculatorContext";
import LegalOfficerCaseView from "./LegalOfficerCaseView";
import AddLocButtons from "./AddLocButtons";
import NoLocsHelp from "./NoLocsHelp";
import LocFees from "./LocFees";
import Title2 from "./Title2";
import { useMemo, useState } from "react";
import LayoutControl from "./LayoutControl";

export default function Calculator() {
    const { locs, total, euroTotal } = useCalculatorContext();
    const [ activeKey, setActiveKey ] = useState<string[]>([]);

    const allAccodionKeys = useMemo(() => {
        return locs.map((_, index) => index.toString());
    }, [ locs ]);

    return (
        <div className="Calculator">
            { locs.length === 0 && <NoLocsHelp /> }
            { locs.length >= 1 && <LayoutControl allAccodionKeys={ allAccodionKeys } setActiveKey={ setActiveKey } /> }
            <Accordion
                alwaysOpen
                activeKey={ activeKey }
                onSelect={ eventKey => setActiveKey(eventKey as string[]) }
            >
                { locs.map((loc, index) => (
                    <Accordion.Item eventKey={ index.toString() }>
                        <Accordion.Header>LOC #{ index + 1 } - { loc.parameters.description }</Accordion.Header>
                        <Accordion.Body>
                            <LegalOfficerCaseView
                                key={ index }
                                index={ index }
                                removeActiveKey={ () => setActiveKey(activeKey.filter(key => key !== index.toString())) }
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            <AddLocButtons/>
            <LocFees
                title={ <Title2>Total fees</Title2> }
                fees={ total }
                showCollectionFees={ locs.find(loc => loc.parameters.locType === "Collection") !== undefined }
            />
            <Form.Group controlId="total">
                <Form.Label>Estimated fiat cost</Form.Label>
                <InputGroup>
                    <Form.Control
                        value={ euroTotal }
                        readOnly={ true }
                        disabled={ true }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </div>
    );
}

import { Accordion, Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { useCalculatorContext } from "./CalculatorContext";
import LegalOfficerCaseView from "./LegalOfficerCaseView";
import AddLocButtons from "./AddLocButtons";
import NoLocsHelp from "./NoLocsHelp";
import LocFees from "./LocFees";
import Title2 from "./Title2";
import { useCallback, useMemo, useState } from "react";
import LayoutControl from "./LayoutControl";
import { LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import DebounceFormControl from "./DebounceFormControl";
import "./Calculator.css";
import Center from "../Center";

function locTitle(index: number, loc: LegalOfficerCaseCost) {
    return `LOC #${ index + 1 } - ${ loc.parameters.description }`;
}

export default function Calculator() {
    const { locs, total, lgntEuroRate, setLgntEuroRate, updating, connection, removeLocCost } = useCalculatorContext();
    const [ activeKey, setActiveKey ] = useState<string[]>([]);

    const allAccodionKeys = useMemo(() => {
        return locs.map((_, index) => index.toString());
    }, [ locs ]);

    const onRemove = useCallback((index: number) => {
        setActiveKey(activeKey.filter(key => key !== index.toString()));
        removeLocCost(index);
    }, [ activeKey, removeLocCost ]);

    if(!connection) {
        return (
            <Center>
                <Spinner/>
                <p>Connecting to Logion...</p>
            </Center>
        );
    }

    return (
        <div className="Calculator">
            <Form.Group controlId="lgntEuroRate">
                <Form.Label>LGNT/EUR conversion rate</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ lgntEuroRate.toString() }
                        onChange={ value => setLgntEuroRate(Number(value)) }
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>LGNT</InputGroup.Text>
                </InputGroup>
                <Form.Text muted>Number of LGNTs per euro, default is 20</Form.Text>
            </Form.Group>
            <Form.Group controlId="lgntValue">
                <Form.Label>LGNT value</Form.Label>
                <InputGroup>
                    <Form.Control
                        value={ 1 / lgntEuroRate }
                        readOnly={ true }
                        disabled={ true }
                        type="number"
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <div className="top-bar">
                { locs.length === 0 && <NoLocsHelp /> }
                { locs.length >= 1 && <LayoutControl allAccodionKeys={ allAccodionKeys } setActiveKey={ setActiveKey } /> }
            </div>

            <Accordion
                alwaysOpen
                activeKey={ activeKey }
                onSelect={ eventKey => setActiveKey(eventKey as string[]) }
            >
                { locs.map((loc, index) => (
                    <Accordion.Item eventKey={ index.toString() } key={ index }>
                        <Accordion.Header>
                            <span className="loc-description">{ locTitle(index, loc) }</span>
                            <Button onClick={ () => onRemove(index) } variant="danger">Remove</Button>
                        </Accordion.Header>
                        <Accordion.Body>
                            <LegalOfficerCaseView
                                key={ index }
                                index={ index }
                                title={ locTitle(index, loc) }
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
                <Form.Label>Total fees (fiat)</Form.Label>
                <InputGroup>
                    <Form.Control
                        value={ total.totalFee.convertToFiat(lgntEuroRate) }
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

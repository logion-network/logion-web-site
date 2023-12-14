import { Form, InputGroup } from "react-bootstrap";
import { useCalculatorContext } from "./CalculatorContext";
import LegalOfficerCaseView from "./LegalOfficerCaseView";
import AddLocButtons from "./AddLocButtons";
import NoLocsHelp from "./NoLocsHelp";
import LocFees from "./LocFees";
import Title2 from "./Title2";

export default function Calculator() {
    const { locs, total, euroTotal } = useCalculatorContext();

    return (
        <div className="Calculator">
            { locs.length === 0 && <NoLocsHelp /> }
            { locs.map((_, index) => <LegalOfficerCaseView key={ index } index={ index } />) }
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

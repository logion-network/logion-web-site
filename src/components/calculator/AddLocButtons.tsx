import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";
import { useCalculatorContext } from "./CalculatorContext";
import { useCallback, useState } from "react";
import { LocType } from "@logion/node-api";
import { LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import "./AddLocButtons.css";

export default function AddLocButtons() {
    const { addLocCost } = useCalculatorContext();
    const [ adding, setAdding ] = useState(false);

    const addLoc = useCallback(async (locType: LocType) => {
        setAdding(true);
        try {
            if(locType === "Identity") {
                await addLocCost(LegalOfficerCaseCost.defaultIdentityLocCost());
            } else if(locType === "Transaction") {
                await addLocCost(LegalOfficerCaseCost.defaultTransactionLocCost());
            } else if(locType === "Collection") {
                await addLocCost(LegalOfficerCaseCost.defaultCollectionLocCost());
            } else {
                throw new Error("");
            }
        } finally {
            setAdding(false);
        }
    }, [ addLocCost ]);

    return (
        <div className="AddLocButtons">
            <ButtonToolbar>
                <ButtonGroup className="me-2">
                    <Button onClick={ () => addLoc("Identity") } disabled={ adding }>Add an ID LOC</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                    <Button onClick={ () => addLoc("Transaction") } disabled={ adding }>Add a Transaction LOC</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2">
                    <Button onClick={ () => addLoc("Collection") } disabled={ adding }>Add a Collection LOC</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
}

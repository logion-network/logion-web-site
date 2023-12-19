import { useCallback } from "react";
import { Button } from "react-bootstrap";
import { DEFAULT_FILE, LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import LocFileView from "./LocFileView";
import Title3 from "./Title3";
import Center from "../Center";
import { useCalculatorContext } from "./CalculatorContext";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function LocFiles(props: Props) {
    const { updateLocCost } = useCalculatorContext();

    const addDefaultFile = useCallback(() => {
        updateLocCost(props.index, "files", [ ...props.loc.parameters.files, DEFAULT_FILE ]);
    }, [ updateLocCost, props.index, props.loc.parameters.files ]);

    return (
        <div className="LocFiles">
            <Title3>Files</Title3>
            { props.loc.parameters.files.length === 0 && <p>You can add files by clicking on the button below.</p> }
            { props.loc.parameters.files.map((file, index) => (
                <LocFileView
                    key={ index }
                    locIndex={ props.index }
                    loc={ props.loc }
                    fileIndex={ index }
                    file={ file }
                />
            ))}
            <Center>
                <Button onClick={ addDefaultFile }>Add file</Button>
            </Center>
        </div>
    );
}

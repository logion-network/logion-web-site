import { useCallback } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { LegalOfficerCaseCost, LocFileCostParameters } from "./LegalOfficerCaseCost";
import "./LocFileView.css";
import DebounceFormControl from "./DebounceFormControl";
import { useCalculatorContext } from "./CalculatorContext";

export interface Props {
    locIndex: number;
    loc: LegalOfficerCaseCost;
    fileIndex: number;
    file: LocFileCostParameters;
}

export default function LocFileView(props: Props) {
    const { updateLocCost, updating } = useCalculatorContext();

    const removeFile = useCallback(() => {
        updateLocCost(props.locIndex, "files", props.loc.parameters.files.filter((_, index) => index !== props.fileIndex));
    }, [ props, updateLocCost ]);

    const replaceFile = useCallback((newFile: LocFileCostParameters) => {
        updateLocCost(props.locIndex, "files", props.loc.parameters.files.map((file, index) => {
            if(index !== props.fileIndex) {
                return file;
            } else {
                return newFile;
            }
        }));
    }, [ props, updateLocCost ]);

    return (
        <div className="LocFileView">
            <h4>File #{ props.fileIndex + 1 }</h4>

            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <DebounceFormControl
                    value={ props.file.description }
                    onChange={ value => replaceFile({
                        ...props.file,
                        description: value,
                    })}
                    disabled={ updating }
                />
            </Form.Group>
            <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <InputGroup>
                    <DebounceFormControl
                        value={ props.file.size.toString() }
                        onChange={ value => replaceFile({
                            ...props.file,
                            size: BigInt(value),
                        })}
                        disabled={ updating }
                        type="number"
                    />
                    <InputGroup.Text>Bytes</InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Button onClick={ removeFile } variant="danger">Remove file</Button>
        </div>
    );
}

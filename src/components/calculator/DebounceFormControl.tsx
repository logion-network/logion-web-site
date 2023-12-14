import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export interface Props {
    value: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    readOnly?: boolean;
    type?: string;
    format?: boolean;
}

export default function DebounceFormControl(props: Props) {
    const [ newValue, setNewValue ] = useState(props.value);

    useEffect(() => {
        if(props.onChange !== undefined && newValue !== props.value) {
            const timeoutId = setTimeout(() => {
                props.onChange!(newValue);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [ newValue, props ]);

    return (
        <Form.Control
            value={ props.onChange ? newValue : props.value }
            onChange={ e => setNewValue(e.target.value) }
            disabled={ props.disabled }
            readOnly={ props.readOnly }
            type={ props.type }
        />
    );
}

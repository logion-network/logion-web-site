import { Lgnt } from "@logion/node-api";
import { useCallback, useMemo } from "react";
import { InputGroup } from "react-bootstrap";
import DebounceFormControl from "./DebounceFormControl";

export interface Props {
    amount?: Lgnt;
    readOnly?: boolean;
    onChange?: (value: Lgnt) => void;
    disabled?: boolean;
}

export default function AmountInputGroup(props: Props) {
    const value = useMemo(() => props.amount?.toPrefixedNumber().coefficient.unnormalize() || "0", [ props.amount ]);

    const onChange = useCallback((value: string) => {
        if(props.onChange) {
            const nLgnt = Number(value);
            props.onChange(Lgnt.from(nLgnt));
        }
    }, [ props ]);

    return (
        <InputGroup>
            <DebounceFormControl
                value={ value }
                readOnly={ props.readOnly }
                disabled={ props.disabled }
                onChange={ props.onChange ? onChange : undefined }
                type="number"
                format
            />
            <InputGroup.Text>{ Lgnt.CODE }</InputGroup.Text>
        </InputGroup>
    );
}

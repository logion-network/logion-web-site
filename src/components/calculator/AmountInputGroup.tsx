import { Currency, Numbers } from "@logion/node-api";
import { useCallback, useMemo } from "react";
import { InputGroup } from "react-bootstrap";
import DebounceFormControl from "./DebounceFormControl";

export interface Props {
    amount?: bigint;
    readOnly?: boolean;
    onChange?: (value: bigint) => void;
    disabled?: boolean;
}

export default function AmountInputGroup(props: Props) {
    const prefixed = useMemo(() => Currency.toPrefixedNumberAmount(props.amount || 0n), [ props.amount ]);
    const value = useMemo(() => prefixed.convertTo(Numbers.NONE).coefficient.unnormalize(), [ prefixed ]);

    const onChange = useCallback((value: string) => {
        if(props.onChange) {
            const nLgnt = Number(value);
            props.onChange(Currency.toCanonicalAmount(Currency_nLgnt(nLgnt)));
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
            <InputGroup.Text>{ Currency.SYMBOL }</InputGroup.Text>
        </InputGroup>
    );
}

// TODO fix node-api
export function Currency_nLgnt(lgntAmount: number): Numbers.PrefixedNumber {
    return new Numbers.PrefixedNumber(lgntAmount.toString(), Numbers.NONE);
}

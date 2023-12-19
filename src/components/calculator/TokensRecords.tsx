import { Button } from "react-bootstrap";
import Center from "../Center";
import { useCalculatorContext } from "./CalculatorContext";
import { DEFAULT_ITEM, LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import Title3 from "./Title3";
import { useCallback } from "react";
import TokensRecordView from "./TokensRecordView";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function TokensRecords(props: Props) {
    const { updateLocCost } = useCalculatorContext();

    const addDefaultRecord = useCallback(() => {
        updateLocCost(props.index, "records", [ ...props.loc.parameters.records, DEFAULT_ITEM ]);
    }, [ updateLocCost, props.index, props.loc.parameters.records ]);

    return (
        <div className="TokensRecords">
            <Title3>Tokens Records</Title3>
            { props.loc.parameters.records.length === 0 && <p>You can add tokens records by clicking on the button below.</p> }
            { props.loc.parameters.records.map((record, index) => (
                <TokensRecordView
                    key={ index }
                    locIndex={ props.index }
                    loc={ props.loc }
                    itemIndex={ index }
                    record={ record }
                />
            ))}
            <Center>
                <Button onClick={ addDefaultRecord }>Add record</Button>
            </Center>
        </div>
    );
}

import { Button } from "react-bootstrap";
import { DEFAULT_CUSTOM_COLLECTION_COST_PARAMETERS, DEFAULT_STANDARD_COLLECTION_COST_PARAMETERS, LegalOfficerCaseCost } from "./LegalOfficerCaseCost";
import Title3 from "./Title3";
import CollectionItems from "./CollectionItems";
import TokensRecords from "./TokensRecords";
import "./CollectionFields.css";
import StandardCollectionCostParametersView from "./StandardCollectionCostParametersView";
import { useCalculatorContext } from "./CalculatorContext";
import { useCallback } from "react";
import CustomCollectionCostParametersView from "./CustomCollectionCostParametersView";

export interface Props {
    index: number;
    loc: LegalOfficerCaseCost;
}

export default function CollectionFields(props: Props) {
    const { updateLocCost } = useCalculatorContext();

    const switchToCustom = useCallback(() => {
        updateLocCost(props.index, "collectionCostParameters", DEFAULT_CUSTOM_COLLECTION_COST_PARAMETERS);
    }, [ props.index, updateLocCost ]);

    const switchToStandard = useCallback(() => {
        updateLocCost(props.index, "collectionCostParameters", DEFAULT_STANDARD_COLLECTION_COST_PARAMETERS);
    }, [ props.index, updateLocCost ]);

    return (
        <div className="CollectionFields">
            <Title3>Collection</Title3>

            <p>You have the possibility to either 1) apply standard collection fees which are function
                of the protected value (expressed in euros) or 2) apply custom collection fees.
            </p>

            <p><strong>If you choose to use
                custom collection fees, make sure they have been accepted first by the Legal Officer in charge,
                otherwise your LOC may get rejected.</strong></p>

            <div className="cost-parameters">
            {
                !props.loc.parameters.collectionCostParameters.custom &&
                <StandardCollectionCostParametersView { ...props } />
            }
            {
                props.loc.parameters.collectionCostParameters.custom &&
                <CustomCollectionCostParametersView { ...props } />
            }
            </div>

            {
                !props.loc.parameters.collectionCostParameters.custom &&
                <Button onClick={ switchToCustom }>I will negotiate custom collection fees</Button>
            }
            {
                props.loc.parameters.collectionCostParameters.custom &&
                <Button onClick={ switchToStandard }>I will use standard collection fees</Button>
            }

            <CollectionItems
                index={ props.index }
                loc={ props.loc }
            />

            <TokensRecords
                index={ props.index }
                loc={ props.loc }
            />
        </div>
    );
}

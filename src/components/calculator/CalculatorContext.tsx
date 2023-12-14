import { createContext, Context, useContext, useReducer, ReactNode, useCallback, useEffect } from 'react';
import { LegalOfficerCaseCost, LegalOfficerCaseCostParameters } from './LegalOfficerCaseCost';
import { Fees } from '@logion/node-api';

export interface CalculatorContextState {
    locs: LegalOfficerCaseCost[];
    addLocCost: (cost: LegalOfficerCaseCost) => Promise<void>;
    removeLocCost: (index: number) => void;
    updateLocCost: (index: number, key: keyof LegalOfficerCaseCostParameters, value: unknown, computeFees?: boolean) => Promise<void>;
    total: Fees;
    euroTotal: number;
    updating: boolean;
}

type ActionType = "SET_ADD_LOC_COST"
    | "ADD_LOC_COST"
    | "SET_REMOVE_LOC_COST"
    | "REMOVE_LOC_COST"
    | "SET_UPDATE_LOC_COST"
    | "UPDATE_LOC_COST"
    | "SET_UPDATING"
;

interface Action {
    type: ActionType;
    addLocCost?: (cost: LegalOfficerCaseCost) => Promise<void>;
    removeLocCost?: (index: number) => void;
    updateLocCost?: (index: number, key: keyof LegalOfficerCaseCostParameters, value: unknown, computeFees?: boolean) => Promise<void>;
    newCost?: LegalOfficerCaseCost;
    index?: number;
    updating?: boolean;
}

function reducer(state: CalculatorContextState, action: Action): CalculatorContextState {
    if(action.type === "SET_ADD_LOC_COST") {
        return {
            ...state,
            addLocCost: action.addLocCost!,
        };
    } else if(action.type === "ADD_LOC_COST") {
        const locs = [
            ...state.locs,
            action.newCost!
        ];
        return {
            ...state,
            ...costsState(locs),
        };
    } else if(action.type === "SET_REMOVE_LOC_COST") {
        return {
            ...state,
            removeLocCost: action.removeLocCost!,
        };
    } else if(action.type === "REMOVE_LOC_COST") {
        const locs = state.locs.filter((_, index) => index !== action.index);
        return {
            ...state,
            ...costsState(locs),
        };
    } else if(action.type === "SET_UPDATE_LOC_COST") {
        return {
            ...state,
            updateLocCost: action.updateLocCost!,
        };
    } else if(action.type === "UPDATE_LOC_COST") {
        const index = action.index!;
        const newCost = action.newCost!;
        const locs = state.locs.map((loc, locIndex) => {
            if(locIndex === index) {
                return newCost;
            } else {
                return loc;
            }
        });
        return {
            ...state,
            ...costsState(locs),
        };
    } else if(action.type === "SET_UPDATING") {
        return {
            ...state,
            updating: action.updating!,
        };
    } else {
        throw new Error(`Unsupported action type ${ action.type }`);
    }
}

function costsState(locs: LegalOfficerCaseCost[]) {
    const total = locs.map(cost => cost.fees).reduce((prev, cur) => LegalOfficerCaseCost.addFees(prev, cur), new Fees({ inclusionFee: 0n }));
    const euroTotal = LegalOfficerCaseCost.lgntToEuro(total.totalFee);
    return {
        locs,
        total,
        euroTotal,
    };
}

const INITIAL_STATE: CalculatorContextState = {
    locs: [],
    total: new Fees({ inclusionFee: 0n }),
    euroTotal: 0,
    addLocCost: () => { throw new Error("Not implemented yet") },
    removeLocCost: () => { throw new Error("Not implemented yet") },
    updateLocCost: () => { throw new Error("Not implemented yet") },
    updating: false,
};

const CalculatorContext: Context<CalculatorContextState> = createContext<CalculatorContextState>(INITIAL_STATE);

export interface Props {
    children: ReactNode;
}

export default function CalculatorContextProvider(props: Props) {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

    const addLocCost = useCallback(async (newCost: LegalOfficerCaseCost) => {
        dispatch({
            type: "SET_UPDATING",
            updating: true,
        });
        await newCost.computeFees();
        dispatch({
            type: 'ADD_LOC_COST',
            newCost,
        });
        dispatch({
            type: "SET_UPDATING",
            updating: false,
        });
    }, [  ]);

    useEffect(() => {
        if(addLocCost !== state.addLocCost) {
            dispatch({
                type: "SET_ADD_LOC_COST",
                addLocCost,
            })
        }
    }, [ state, addLocCost ]);

    const removeLocCost = useCallback((index: number) => {
        dispatch({
            type: 'REMOVE_LOC_COST',
            index,
        });
    }, [  ]);

    useEffect(() => {
        if(removeLocCost !== state.removeLocCost) {
            dispatch({
                type: "SET_REMOVE_LOC_COST",
                removeLocCost,
            })
        }
    }, [ state, removeLocCost ]);

    const updateLocCost = useCallback(async (index: number, key: keyof LegalOfficerCaseCostParameters, value: unknown, computeFees?: boolean) => {
        const withFees = computeFees === undefined || computeFees;
        let newCost: LegalOfficerCaseCost;
        try {
            if(withFees) {
                dispatch({
                    type: "SET_UPDATING",
                    updating: true,
                });

                newCost = new LegalOfficerCaseCost({
                    ...state.locs[index].parameters,
                    [key]: value,
                });
                await newCost.computeFees();
            } else {
                newCost = new LegalOfficerCaseCost({
                    ...state.locs[index].parameters,
                    [key]: value,
                }, state.locs[index].fees, state.locs[index].collectionFees);
            }
            dispatch({
                type: 'UPDATE_LOC_COST',
                index,
                newCost,
            });
        } finally {
            if(withFees) {
                dispatch({
                    type: "SET_UPDATING",
                    updating: false,
                });
            }
        }
    }, [ state.locs ]);

    useEffect(() => {
        if(updateLocCost !== state.updateLocCost) {
            dispatch({
                type: "SET_UPDATE_LOC_COST",
                updateLocCost,
            })
        }
    }, [ state, updateLocCost ]);

    return <CalculatorContext.Provider value={state}>
        { props.children }
    </CalculatorContext.Provider>;
}

export function useCalculatorContext() {
    return useContext(CalculatorContext);
}

import { createContext, Context, useContext, useReducer, ReactNode, useCallback, useEffect } from 'react';
import { ConnectionParameters, DEFAULT_LGNT_EURO_RATE, LegalOfficerCaseCost, LegalOfficerCaseCostParameters } from './LegalOfficerCaseCost';
import { Fees, LogionNodeApiClass, ValidAccountId } from '@logion/node-api';

const ENDPOINTS = ["wss://para-rpc01.logion.network", "wss://para-rpc02.logion.network"];
const ORIGIN = ValidAccountId.polkadot("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY");

export interface CalculatorContextState {
    locs: LegalOfficerCaseCost[];
    addLocCost: (cost: LegalOfficerCaseCost) => Promise<void>;
    removeLocCost: (index: number) => void;
    updateLocCost: (index: number, key: keyof LegalOfficerCaseCostParameters, value: unknown, computeFees?: boolean) => Promise<void>;
    total: Fees;
    updating: boolean;
    lgntEuroRate: number;
    setLgntEuroRate: (lgntEuroRate: number) => void;
    connection?: ConnectionParameters;
}

type ActionType = "SET_ADD_LOC_COST"
    | "ADD_LOC_COST"
    | "SET_REMOVE_LOC_COST"
    | "REMOVE_LOC_COST"
    | "SET_UPDATE_LOC_COST"
    | "UPDATE_LOC_COST"
    | "SET_UPDATING"
    | "SET_LGNT_EURO_RATE"
    | "SET_SET_LGNT_EURO_RATE"
    | "CONNECT"
;

interface Action {
    type: ActionType;
    addLocCost?: (cost: LegalOfficerCaseCost) => Promise<void>;
    removeLocCost?: (index: number) => void;
    updateLocCost?: (index: number, key: keyof LegalOfficerCaseCostParameters, value: unknown, computeFees?: boolean) => Promise<void>;
    newCost?: LegalOfficerCaseCost;
    index?: number;
    updating?: boolean;
    lgntEuroRate?: number;
    setLgntEuroRate?: (lgntEuroRate: number) => void;
    locs?: LegalOfficerCaseCost[];
    connection?: ConnectionParameters;
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
    } else if(action.type === "SET_SET_LGNT_EURO_RATE") {
        return {
            ...state,
            setLgntEuroRate: action.setLgntEuroRate!,
        };
    } else if(action.type === "SET_LGNT_EURO_RATE") {
        return {
            ...state,
            lgntEuroRate: action.lgntEuroRate!,
            ...costsState(action.locs!),
        };
    } else if(action.type === "CONNECT") {
        return {
            ...state,
            connection: action.connection!,
        };
    } else {
        throw new Error(`Unsupported action type ${ action.type }`);
    }
}

function costsState(locs: LegalOfficerCaseCost[]) {
    const total = locs.map(cost => cost.fees).reduce((prev, cur) => prev.add(cur), Fees.zero());
    return {
        locs,
        total,
    };
}

const INITIAL_STATE: CalculatorContextState = {
    locs: [],
    total: Fees.zero(),
    addLocCost: () => { throw new Error("Not implemented yet") },
    removeLocCost: () => { throw new Error("Not implemented yet") },
    updateLocCost: () => { throw new Error("Not implemented yet") },
    updating: false,
    lgntEuroRate: DEFAULT_LGNT_EURO_RATE,
    setLgntEuroRate: () => { throw new Error("Not implemented yet") },
};

const CalculatorContext: Context<CalculatorContextState> = createContext<CalculatorContextState>(INITIAL_STATE);

export interface Props {
    children: ReactNode;
}

let connecting = false;

export default function CalculatorContextProvider(props: Props) {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE);

    useEffect(() => {
        if(!connecting) {
            connecting = true;
            (async function() {
                const api = await LogionNodeApiClass.connect(ENDPOINTS);
                const origin = ORIGIN;
                dispatch({
                    type: "CONNECT",
                    connection: { api, origin },
                })
            })();
        }
    }, []);

    const addLocCost = useCallback(async (newCost: LegalOfficerCaseCost) => {
        if(state.connection) {
            dispatch({
                type: "SET_UPDATING",
                updating: true,
            });
            await newCost.computeFees(state.connection, state.lgntEuroRate);
            dispatch({
                type: 'ADD_LOC_COST',
                newCost,
            });
            dispatch({
                type: "SET_UPDATING",
                updating: false,
            });
        }
    }, [ state.connection, state.lgntEuroRate ]);

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
        if(state.connection) {
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
                    await newCost.computeFees(state.connection, state.lgntEuroRate);
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
        }
    }, [ state.connection, state.locs, state.lgntEuroRate ]);

    useEffect(() => {
        if(updateLocCost !== state.updateLocCost) {
            dispatch({
                type: "SET_UPDATE_LOC_COST",
                updateLocCost,
            })
        }
    }, [ state, updateLocCost ]);

    const setLgntEuroRate = useCallback(async (lgntEuroRate: number) => {
        if(state.connection) {
            dispatch({
                type: "SET_UPDATING",
                updating: true,
            });
            try {
                const locs = [ ...state.locs ];
                for(const cost of locs) {
                    if(cost.parameters.locType === "Collection") {
                        await cost.computeFees(state.connection, lgntEuroRate);
                    }
                }
                dispatch({
                    type: 'SET_LGNT_EURO_RATE',
                    lgntEuroRate,
                    locs,
                });
            } finally {
                dispatch({
                    type: "SET_UPDATING",
                    updating: false,
                });
            }
        }
    }, [ state.connection, state.locs ]);

    useEffect(() => {
        if(setLgntEuroRate !== state.setLgntEuroRate) {
            dispatch({
                type: "SET_SET_LGNT_EURO_RATE",
                setLgntEuroRate,
            })
        }
    }, [ state, setLgntEuroRate ]);

    return <CalculatorContext.Provider value={state}>
        { props.children }
    </CalculatorContext.Provider>;
}

export function useCalculatorContext() {
    return useContext(CalculatorContext);
}

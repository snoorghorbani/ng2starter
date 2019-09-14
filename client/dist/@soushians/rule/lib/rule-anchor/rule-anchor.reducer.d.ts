import { RuleAnchorsAction } from "./rule-anchor.actions";
export interface State {
    active: boolean;
}
export declare const initialState: State;
export declare function Reducer(state: State, action: RuleAnchorsAction): State;
export declare const getAnchorsActivityState: (state: State) => boolean;

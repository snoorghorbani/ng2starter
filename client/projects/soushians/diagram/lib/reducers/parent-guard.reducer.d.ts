import { ParentGuardAction } from '../actions';
export interface State {
    route: string;
    result: boolean;
}
export declare const initialState: State;
export declare function ParentGuardReducer(state: State, action: ParentGuardAction): State;
export declare var getParentRoutingGuard: (state: State) => State;

import { Action } from "@ngrx/store";
export interface State {
    number: number;
}
export declare const initialState: State;
export declare function Reducer(state: State, action: Action): State;
export interface SocketState {
    change: State;
}
export declare const SocketReducer: {
    change: typeof Reducer;
};
export interface AppState {
    socket: SocketState;
}

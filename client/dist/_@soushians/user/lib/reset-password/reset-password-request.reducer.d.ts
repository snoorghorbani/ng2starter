import { ResetPasswordRequestAction } from "./reset-password-request.actions";
export interface State {
    numberOfRequested: number;
    lastRequestedTime: string;
    disable: boolean;
}
export declare const initialState: State;
export declare function reducer(state: State, action: ResetPasswordRequestAction): State;
export declare var getNumberOfRequeseted: (state: State) => number;
export declare var getStatus: (state: State) => boolean;

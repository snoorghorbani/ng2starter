import { responseStatusTypes } from "@soushians/shared";
import { ChangePasswordAction } from "./change-password.actions";
export interface State {
    status: responseStatusTypes;
}
export declare const initialState: State;
export declare function reducer(state: State, action: ChangePasswordAction): State;
export declare var getStatus: (state: State) => responseStatusTypes;

import { UserModel } from "../models";
import { UserAction } from "./user.actions";
export interface State {
    loaded: boolean;
    data: UserModel;
}
export declare const initialState: State;
export declare function userReducer(state: State, action: UserAction): State;
export declare const getUser: (state: State) => UserModel;

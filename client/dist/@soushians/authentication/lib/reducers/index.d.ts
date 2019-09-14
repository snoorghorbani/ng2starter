import { MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
import { UserModel } from "../models/user.model";
export interface AuthenticationState {
    userStatus: userReducer.State;
}
export interface FeatureState {
    "authentication": AuthenticationState;
}
export declare const AuthenticationReducers: {
    userStatus: typeof userReducer.UserReducer;
};
export declare const selectAuthenticationState: MemoizedSelector<object, AuthenticationState, import("@ngrx/store").DefaultProjectorFn<AuthenticationState>>;
export declare const selectAuthState: MemoizedSelector<object, userReducer.State, import("@ngrx/store").DefaultProjectorFn<userReducer.State>>;
export declare const getLoggedIn: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const getUser: MemoizedSelector<object, UserModel, import("@ngrx/store").DefaultProjectorFn<UserModel>>;

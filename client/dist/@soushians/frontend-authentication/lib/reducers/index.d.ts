import { MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
import { UserModel } from "../models/user.model";
export { UserModel };
export interface FrontendAuthenticationState {
    userStatus: userReducer.State;
}
export interface FeatureState {
    "frontend-authentication": FrontendAuthenticationState;
}
export declare const FrontendAuthenticationReducers: {
    userStatus: typeof userReducer.UserReducer;
};
export declare const selectFrontendAuthenticationState: MemoizedSelector<object, FrontendAuthenticationState, import("@ngrx/store").DefaultProjectorFn<FrontendAuthenticationState>>;
export declare const selectAuthState: MemoizedSelector<object, userReducer.State, import("@ngrx/store").DefaultProjectorFn<userReducer.State>>;
export declare const getFrontendAuthenticationState: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const getFrontendUser: MemoizedSelector<object, UserModel, import("@ngrx/store").DefaultProjectorFn<UserModel>>;

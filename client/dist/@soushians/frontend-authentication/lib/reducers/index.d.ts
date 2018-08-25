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
export declare const selectFrontendAuthenticationState: MemoizedSelector<object, FrontendAuthenticationState>;
export declare const selectAuthState: MemoizedSelector<object, userReducer.State>;
export declare const getFrontendAuthenticationState: MemoizedSelector<object, boolean>;
export declare const getFrontendUser: MemoizedSelector<object, UserModel>;

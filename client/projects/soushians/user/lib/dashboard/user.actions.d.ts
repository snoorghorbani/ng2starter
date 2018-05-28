import { Action } from "@ngrx/store";
import { UserModel } from "../models";
export declare enum UserActionTypes {
    USER_SELECTED = "[USER] USER_SELECTED",
    REFRESH_USER_INFO = "[USER] REFRESH_USER_INFO",
}
export declare class UserSelectedAction implements Action {
    payload: UserModel;
    readonly type: UserActionTypes;
    constructor(payload: UserModel);
}
export declare class RefreshUserInfoAction implements Action {
    payload: UserModel;
    readonly type: UserActionTypes;
    constructor(payload: UserModel);
}
export declare type UserAction = UserSelectedAction | RefreshUserInfoAction;

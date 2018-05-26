import { Action } from '@ngrx/store';
import { ResetPasswordRequestModel } from '../models';
export declare enum ResetPasswordRequestActionTypes {
    GET_RESET_PASSWORD_LINK = "[USER][PASSWORD] GET_RESET_PASSWORD_LINK",
    RESET_PASSWORD_LINK_REQUEST_START = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START",
    RESET_PASSWORD_LINK_REQUEST_SUCCEED = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED",
    RESET_PASSWORD_LINK_REQUEST_FAILED = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED",
    DISABLE_GET_LINK = "[USER][PASSWORD] DISABLE_GET_LINK",
    ENABLE_GET_LINK = "[USER][PASSWORD] ENABLE_GET_LINK",
    MAXIMUM_TRY_HAPPEND = "[USER][PASSWORD] MAXIMUM_TRY_HAPPEND",
    PASSWORD_CHANGED_SUCCEED = "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED = "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
}
export declare class GetResetPasswordLink implements Action {
    payload: ResetPasswordRequestModel.Request;
    readonly type: ResetPasswordRequestActionTypes;
    constructor(payload: ResetPasswordRequestModel.Request);
}
export declare class ResetPasswordLinkRequestStart implements Action {
    payload: ResetPasswordRequestModel.Request;
    readonly type: ResetPasswordRequestActionTypes;
    constructor(payload: ResetPasswordRequestModel.Request);
}
export declare class ResetPasswordLinkRequestSucceed implements Action {
    readonly type: ResetPasswordRequestActionTypes;
    constructor();
}
export declare class ResetPasswordLinkRequestFailed implements Action {
    readonly type: ResetPasswordRequestActionTypes;
    constructor();
}
export declare class DisableGetLink implements Action {
    readonly type: ResetPasswordRequestActionTypes;
}
export declare class EnableGetLink implements Action {
    readonly type: ResetPasswordRequestActionTypes;
}
export declare class MaximumTryHappend implements Action {
    readonly type: ResetPasswordRequestActionTypes;
}
export declare class PasswordChangedSucceed implements Action {
    readonly type: ResetPasswordRequestActionTypes;
}
export declare class PasswordChangedFailed implements Action {
    payload: string;
    readonly type: ResetPasswordRequestActionTypes;
    constructor(payload: string);
}
export declare type ResetPasswordRequestAction = GetResetPasswordLink | ResetPasswordLinkRequestStart | ResetPasswordLinkRequestFailed | DisableGetLink | ResetPasswordLinkRequestSucceed | EnableGetLink | MaximumTryHappend | PasswordChangedSucceed | PasswordChangedFailed;

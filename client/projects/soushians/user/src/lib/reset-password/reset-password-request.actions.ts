import { Action } from '@ngrx/store';

import { ResetPasswordRequestModel } from '../models';

export enum ResetPasswordRequestActionTypes {
        GET_RESET_PASSWORD_LINK             = '[USER][PASSWORD] GET_RESET_PASSWORD_LINK',
        RESET_PASSWORD_LINK_REQUEST_START   = '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START',
        RESET_PASSWORD_LINK_REQUEST_SUCCEED = '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED',
        RESET_PASSWORD_LINK_REQUEST_FAILED  = '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED',
        DISABLE_GET_LINK                    = '[USER][PASSWORD] DISABLE_GET_LINK',
        ENABLE_GET_LINK                     = '[USER][PASSWORD] ENABLE_GET_LINK',
        MAXIMUM_TRY_HAPPEND                 = '[USER][PASSWORD] MAXIMUM_TRY_HAPPEND',
        PASSWORD_CHANGED_SUCCEED            = '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
        PASSWORD_CHANGED_FAILED             = '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
}

export class GetResetPasswordLink implements Action {
        readonly type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
        constructor(public payload: ResetPasswordRequestModel.Request) { }
}
export class ResetPasswordLinkRequestStart implements Action {
        readonly type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
        constructor(public payload: ResetPasswordRequestModel.Request) { }
}
export class ResetPasswordLinkRequestSucceed implements Action {
        readonly type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
        constructor() { }
}
export class ResetPasswordLinkRequestFailed implements Action {
        readonly type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
        constructor() { }
}
export class DisableGetLink implements Action {
        readonly type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
}
export class EnableGetLink implements Action {
        readonly type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
}
export class MaximumTryHappend implements Action {
        readonly type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
}
export class PasswordChangedSucceed implements Action {
        readonly type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
}
export class PasswordChangedFailed implements Action {
        readonly type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
        constructor(public payload: string) { }
}


export type ResetPasswordRequestAction =
        GetResetPasswordLink
        | ResetPasswordLinkRequestStart
        | ResetPasswordLinkRequestFailed
        | DisableGetLink
        | ResetPasswordLinkRequestSucceed
        | EnableGetLink
        | MaximumTryHappend
        | PasswordChangedSucceed
        | PasswordChangedFailed;

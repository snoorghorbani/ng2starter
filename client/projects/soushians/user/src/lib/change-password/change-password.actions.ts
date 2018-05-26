import { Action } from '@ngrx/store';
import { ChangePasswordModel } from '../models';

export enum ChangePasswordActionTypes {
        CHANGE_PASSWORD          = '[USER][PASSWORD] CHANGE_PASSWORD',
        PASSWORD_CHANGED_START   = '[USER][PASSWORD] PASSWORD_CHANGED_START',
        PASSWORD_CHANGED_SUCCEED = '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
        PASSWORD_CHANGED_FAILED  = '[USER][PASSWORD] PASSWORD_CHANGED_FAILED'
}

export class ChangePassword implements Action {
        readonly type = ChangePasswordActionTypes.CHANGE_PASSWORD;
        constructor(public payload: ChangePasswordModel.Request) { }
}
export class ChangePasswordStart implements Action {
        readonly type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
        constructor(public payload: ChangePasswordModel.Request) { }
}
export class ChangePasswordSucceed implements Action {
        readonly type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
        constructor(public payload: ChangePasswordModel.Response) { }
}
export class ChangePasswordFailed implements Action {
        readonly type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
}

export type ChangePasswordAction =
            ChangePassword
          | ChangePasswordStart
          | ChangePasswordSucceed
          | ChangePasswordFailed;

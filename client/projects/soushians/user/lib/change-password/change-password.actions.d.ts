import { Action } from '@ngrx/store';
import { ChangePasswordModel } from '../models';
export declare enum ChangePasswordActionTypes {
    CHANGE_PASSWORD = "[USER][PASSWORD] CHANGE_PASSWORD",
    PASSWORD_CHANGED_START = "[USER][PASSWORD] PASSWORD_CHANGED_START",
    PASSWORD_CHANGED_SUCCEED = "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED = "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
}
export declare class ChangePassword implements Action {
    payload: ChangePasswordModel.Request;
    readonly type: ChangePasswordActionTypes;
    constructor(payload: ChangePasswordModel.Request);
}
export declare class ChangePasswordStart implements Action {
    payload: ChangePasswordModel.Request;
    readonly type: ChangePasswordActionTypes;
    constructor(payload: ChangePasswordModel.Request);
}
export declare class ChangePasswordSucceed implements Action {
    payload: ChangePasswordModel.Response;
    readonly type: ChangePasswordActionTypes;
    constructor(payload: ChangePasswordModel.Response);
}
export declare class ChangePasswordFailed implements Action {
    readonly type: ChangePasswordActionTypes;
}
export declare type ChangePasswordAction = ChangePassword | ChangePasswordStart | ChangePasswordSucceed | ChangePasswordFailed;

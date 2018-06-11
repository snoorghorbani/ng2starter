import { Action } from "@ngrx/store";
import { Signin_ApiModel } from "../models";
export declare enum SignInActionTypes {
    WHO_AM_I = "[Auth] who am i",
    SIGNIN = "[Auth] Signin",
    DO_SIGNOUT = "[Auth] Do Signout",
    SIGNOUT = "[Auth] Signout",
    SIGNIN_SUCCEED = "[Auth] Signin Success",
    SIGNIN_FAILURE = "[Auth] Signin Failure",
    SIGNIN_REDIRECT = "[Auth] Signin Redirect",
}
export declare class WhoAmIAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class Signin implements Action {
    payload: Signin_ApiModel.Request;
    readonly type: SignInActionTypes;
    constructor(payload: Signin_ApiModel.Request);
}
export declare class SigninSecceed implements Action {
    payload: any;
    readonly type: SignInActionTypes;
    constructor(payload: any);
}
export declare class SigninFailed implements Action {
    payload: any;
    readonly type: SignInActionTypes;
    constructor(payload: any);
}
export declare class SigninRedirect implements Action {
    readonly type: SignInActionTypes;
}
export declare class DoSignoutAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class SignoutAction implements Action {
    readonly type: SignInActionTypes;
}
export declare type SigninAction = WhoAmIAction | Signin | SigninSecceed | SigninFailed | SigninRedirect | DoSignoutAction | SignoutAction;

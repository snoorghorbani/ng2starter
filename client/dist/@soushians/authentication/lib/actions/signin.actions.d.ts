import { Action } from "@ngrx/store";
import { Signin_ApiModel } from "../models";
export declare enum SignInActionTypes {
    WHO_AM_I = "[AUTHENTICATION] who am i",
    SIGNUP = "[AUTHENTICATION][SIGNUP] start",
    SIGNUP_SUCCEED = "[AUTHENTICATION][SIGNUP] Success",
    SIGNUP_FAILURE = "[AUTHENTICATION][SIGNUP] Failure",
    SIGNIN = "[AUTHENTICATION] Signin",
    DO_SIGNOUT = "[AUTHENTICATION] Do Signout",
    SIGNOUT = "[AUTHENTICATION] Signout",
    SIGNIN_SUCCEED = "[AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE = "[AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT = "[AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED = "[AUTHENTICATION][Signin] Required"
}
export declare class WhoAmIAction implements Action {
    readonly type = SignInActionTypes.WHO_AM_I;
}
/**
 * 	sign up
 */
export declare class Signup implements Action {
    payload: Signin_ApiModel.Request;
    readonly type = SignInActionTypes.SIGNUP;
    constructor(payload: Signin_ApiModel.Request);
}
export declare class SignupSecceed implements Action {
    payload: any;
    readonly type = SignInActionTypes.SIGNUP_SUCCEED;
    constructor(payload: any);
}
export declare class SignupFailed implements Action {
    payload: any;
    readonly type = SignInActionTypes.SIGNUP_FAILURE;
    constructor(payload: any);
}
/**
 * Sign in
 */
export declare class Signin implements Action {
    payload: Signin_ApiModel.Request;
    readonly type = SignInActionTypes.SIGNIN;
    constructor(payload: Signin_ApiModel.Request);
}
export declare class SigninSecceed implements Action {
    payload: any;
    readonly type = SignInActionTypes.SIGNIN_SUCCEED;
    constructor(payload: any);
}
export declare class SigninFailed implements Action {
    payload: any;
    readonly type = SignInActionTypes.SIGNIN_FAILURE;
    constructor(payload: any);
}
export declare class SigninRedirect implements Action {
    readonly type = SignInActionTypes.SIGNIN_REDIRECT;
}
export declare class DoSignoutAction implements Action {
    readonly type = SignInActionTypes.DO_SIGNOUT;
}
export declare class SignoutAction implements Action {
    readonly type = SignInActionTypes.SIGNOUT;
}
export declare class SigninRequiredAction implements Action {
    readonly type = SignInActionTypes.SIGNIN_REQUIRED;
}
export declare type SigninAction = WhoAmIAction | Signup | SignupSecceed | SignupFailed | Signin | SigninSecceed | SigninFailed | SigninRedirect | DoSignoutAction | SignoutAction | SigninRequiredAction;

import { Action } from "@ngrx/store";
export declare enum SignInActionTypes {
    WHO_AM_I = "[FRONTEND_AUTHENTICATION] who am i",
    SIGNIN = "[FRONTEND_AUTHENTICATION] Signin",
    DO_SIGNOUT = "[FRONTEND_AUTHENTICATION] Do Signout",
    SIGNOUT = "[FRONTEND_AUTHENTICATION] Signout",
    SIGNIN_SUCCEED = "[FRONTEND_AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE = "[FRONTEND_AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT = "[FRONTEND_AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED = "[FRONTEND_AUTHENTICATION][Signin] Required"
}
export declare class WhoAmIAction implements Action {
    readonly type: SignInActionTypes;
}
export declare class Signin implements Action {
    payload: any;
    readonly type: SignInActionTypes;
    constructor(payload: any);
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
export declare class SigninRequiredAction implements Action {
    readonly type: SignInActionTypes;
}
export declare type SigninAction = WhoAmIAction | Signin | SigninSecceed | SigninFailed | SigninRedirect | DoSignoutAction | SignoutAction | SigninRequiredAction;

import { Action } from "@ngrx/store";

export enum SignInActionTypes {
	WHO_AM_I = "[FRONTEND_AUTHENTICATION] who am i",
	SIGNIN = "[FRONTEND_AUTHENTICATION] Signin",
	DO_SIGNOUT = "[FRONTEND_AUTHENTICATION] Do Signout",
	SIGNOUT = "[FRONTEND_AUTHENTICATION] Signout",
	SIGNIN_SUCCEED = "[FRONTEND_AUTHENTICATION][Signin] Success",
	SIGNIN_FAILURE = "[FRONTEND_AUTHENTICATION][Signin] Failure",
	SIGNIN_REDIRECT = "[FRONTEND_AUTHENTICATION][Signin] Redirect",
	SIGNIN_REQUIRED = "[FRONTEND_AUTHENTICATION][Signin] Required"
}

export class WhoAmIAction implements Action {
	readonly type = SignInActionTypes.WHO_AM_I;
}
export class Signin implements Action {
	readonly type = SignInActionTypes.SIGNIN;
	constructor(public payload: any) {}
}

export class SigninSecceed implements Action {
	readonly type = SignInActionTypes.SIGNIN_SUCCEED;
	constructor(public payload: any) {}
}

export class SigninFailed implements Action {
	readonly type = SignInActionTypes.SIGNIN_FAILURE;
	constructor(public payload: any) {}
}

export class SigninRedirect implements Action {
	readonly type = SignInActionTypes.SIGNIN_REDIRECT;
}

export class DoSignoutAction implements Action {
	readonly type = SignInActionTypes.DO_SIGNOUT;
}

export class SignoutAction implements Action {
	readonly type = SignInActionTypes.SIGNOUT;
}

export class SigninRequiredAction implements Action {
	readonly type = SignInActionTypes.SIGNIN_REQUIRED;
}

export type SigninAction =
	| WhoAmIAction
	| Signin
	| SigninSecceed
	| SigninFailed
	| SigninRedirect
	| DoSignoutAction
	| SignoutAction
	| SigninRequiredAction;

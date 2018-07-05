import { Action } from "@ngrx/store";

import { Signin_ApiModel } from "../models";

export enum SignInActionTypes {
	WHO_AM_I = "[AUTHENTICATION] who am i",
	SIGNIN = "[AUTHENTICATION] Signin",
	DO_SIGNOUT = "[AUTHENTICATION] Do Signout",
	SIGNOUT = "[AUTHENTICATION] Signout",
	SIGNIN_SUCCEED = "[AUTHENTICATION][Signin] Success",
	SIGNIN_FAILURE = "[AUTHENTICATION][Signin] Failure",
	SIGNIN_REDIRECT = "[AUTHENTICATION][Signin] Redirect",
	SIGNIN_REQUIRED = "[AUTHENTICATION][Signin] Required"
}

export class WhoAmIAction implements Action {
	readonly type = SignInActionTypes.WHO_AM_I;
}
export class Signin implements Action {
	readonly type = SignInActionTypes.SIGNIN;
	constructor(public payload: Signin_ApiModel.Request) {}
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

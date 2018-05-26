import { Action } from "@ngrx/store";
import { Signin_ApiModel } from "../models";

export enum SignInActionTypes {
	SIGNIN = "[Auth] Signin",
	SIGNOUT = "[Auth] Signout",
	SIGNIN_SUCCEED = "[Auth] Signin Success",
	SIGNIN_FAILURE = "[Auth] Signin Failure",
	SIGNIN_REDIRECT = "[Auth] Signin Redirect"
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

export class SignoutAction implements Action {
	readonly type = SignInActionTypes.SIGNOUT;
}

export type SigninAction = Signin | SigninSecceed | SigninFailed | SigninRedirect | SignoutAction;

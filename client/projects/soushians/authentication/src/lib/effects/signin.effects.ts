import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import {
	SignoutAction,
	SignInActionTypes,
	SigninSecceed,
	SigninFailed,
	SigninRedirect,
	Signin
} from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
import { Signin_ApiModel } from "../models";

@Injectable()
export class SigninEffects {
	constructor(private actions$: Actions, private router: Router, public signinService: SigninService) {}

	@Effect()
	whoAmI$ = this.actions$
		.ofType(SignInActionTypes.WHO_AM_I)
		.pipe(
			switchMap(() => this.signinService.whoAmI()),
			map(user => new SigninSecceed(user)),
			catchError(error => Observable.of(new SigninFailed(error)))
		);

	@Effect()
	preSignUpStart$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN)
		.pipe(
			switchMap((action: Signin) => this.signinService.signin(action.payload)),
			map(user => new SigninSecceed(user)),
			catchError(error => Observable.of(new SigninFailed(error)))
		);

	@Effect({ dispatch: false })
	SigninSucceed$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_SUCCEED)
		.pipe(tap((data: any) => this.router.navigate([ "/" ])));

	@Effect() AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());

	@Effect()
	DoSignout$ = this.actions$
		.ofType(SignInActionTypes.DO_SIGNOUT)
		.pipe(switchMap(data => this.signinService.signout()), map(() => new SignoutAction()));

	// TODO
	@Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));

	@Effect({ dispatch: false })
	redirectToLoginPage$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
		.pipe(tap(authed => this.router.navigate([ "auth/signin" ])));
}

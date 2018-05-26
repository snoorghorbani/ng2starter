import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import { SignInActionTypes, SigninSecceed, SigninFailed, SigninRedirect, Signin } from "../actions/signin.actions";
// import * as AuthActions from '../actions';

//import {  } from '../reducers';
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
import { Signin_ApiModel } from "../models";

@Injectable()
export class SigninEffects {
	constructor(private actions$: Actions, private router: Router, public signinService: SigninService) {}

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

	@Effect({ dispatch: false })
	redirectToLoginPage$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
		.pipe(tap(authed => this.router.navigate([ "auth/signin" ])));

	// TODO:
	// @Effect({ dispatch: false })
	// signout$ = this.actions$
	// 	.ofType(SignInActionTypes.SIGNOUT)
	// 	.map((data) => this.signinService.signout().subscribe((response) => null));
}

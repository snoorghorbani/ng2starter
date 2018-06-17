﻿import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap, pluck } from "rxjs/operators";

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
import { SigninContainerComponent } from "../smart-components/signin-container";
import { MatBottomSheet } from "@angular/material";
import { AuthenticationConfigurationService } from "../services/authentication-configuration.service";

@Injectable()
export class SigninEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		public signinService: SigninService,
		public configurationService: AuthenticationConfigurationService,
		private bottomSheet: MatBottomSheet
	) {}

	@Effect()
	whoAmI$ = this.actions$
		.ofType(SignInActionTypes.WHO_AM_I)
		.pipe(
			switchMap(() => this.signinService.whoAmI()),
			map(user => new SigninSecceed(user)),
			catchError(error => Observable.of(new SigninFailed(error)))
		);

	@Effect()
	Signin$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN)
		.pipe(
			pluck("payload"),
			switchMap(payload => this.signinService.signin(payload)),
			map(user => new SigninSecceed(user)),
			catchError(error => Observable.of(new SigninFailed(error)))
		);

	@Effect({ dispatch: false })
	SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(
		tap((data: any) => {
			const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
				panelClass: "clear-mat-card-box"
			});
			signinBottomSheetRef.instance.signedIn$.subscribe(() => {
				signinBottomSheetRef.dismiss();
			});
			return signinBottomSheetRef;
		})
	);

	@Effect({ dispatch: false })
	SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
		tap((data: any) => {
			debugger;
			if (location.pathname.indexOf("signin") > -1) this.router.navigate([ "/" ]);
		})
	);

	@Effect() AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());

	@Effect()
	DoSignout$ = this.actions$
		.ofType(SignInActionTypes.DO_SIGNOUT)
		.pipe(switchMap(data => this.signinService.signout()), map(() => new SignoutAction()));

	// TODO
	@Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));

	@Effect({ dispatch: false })
	redirectToLoginPage$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_REDIRECT)
		.pipe(tap(authed => this.router.navigate([ "auth/signin" ])));

	@Effect({ dispatch: false })
	redirectAfterSignout$ = this.actions$
		.ofType(SignInActionTypes.SIGNOUT)
		.pipe(
			tap(authed => this.router.navigate([ this.configurationService.config$.getValue().afterSignoutRedirectTo ]))
		);
}

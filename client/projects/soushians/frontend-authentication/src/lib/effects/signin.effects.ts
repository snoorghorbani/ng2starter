﻿import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap, pluck } from "rxjs/operators";
import { of } from "rxjs";

import {
	SignoutAction,
	SignInActionTypes,
	SigninSecceed,
	SigninFailed,
	SigninRedirect,
	Signin
} from "../actions/signin.actions";
import { FrontendSigninService } from "../services/signin.service";
import { SigninContainerComponent } from "../smart-components/signin-container";
import { MatBottomSheet } from "@angular/material";
import { FrontendAuthenticationConfigurationService } from "../services/frontend-authentication-configuration.service";

@Injectable()
export class SigninEffects {
	constructor(
		private actions$: Actions,
		private router: Router,
		public frontendSigninService: FrontendSigninService,
		public configurationService: FrontendAuthenticationConfigurationService,
		private bottomSheet: MatBottomSheet
	) {}

	@Effect()
	whoAmI$ = this.actions$.pipe(
		ofType(SignInActionTypes.WHO_AM_I),
		switchMap(() => this.frontendSigninService.whoAmI()),
		map(user => new SigninSecceed(user)),
		catchError(error => of(new SigninFailed(error)))
	);

	@Effect()
	Signin$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN),
		pluck("payload"),
		switchMap(payload => this.frontendSigninService.signin(payload)),
		map(user => new SigninSecceed(user)),
		catchError(error => of(new SigninFailed(error)))
	);

	@Effect({ dispatch: false })
	SignInRequired$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN_REQUIRED),
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
	SigninSucceed$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN_SUCCEED),
		tap((data: any) => {
			debugger;
			if (location.pathname.indexOf("signin") > -1) this.router.navigate([ "/" ]);
		})
	);

	@Effect()
	DoSignout$ = this.actions$.pipe(
		ofType(SignInActionTypes.DO_SIGNOUT),
		switchMap(data =>
			this.frontendSigninService.signout().pipe(
				map(() => new SignoutAction()),
				catchError(err => {
					// TODO: dispatch valid action
					debugger;
					return of(err);
				})
			)
		)
	);

	// TODO
	// @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));

	@Effect({ dispatch: false })
	redirectToLoginPage$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN_REDIRECT),
		tap(authed => this.router.navigate([ "auth/signin" ]))
	);

	@Effect({ dispatch: false })
	redirectAfterSignout$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNOUT),
		tap(authed => this.router.navigate([ this.configurationService.config$.getValue().afterSignoutRedirectTo ]))
	);
}

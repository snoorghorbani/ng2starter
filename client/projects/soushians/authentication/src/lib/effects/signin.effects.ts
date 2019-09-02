import { Injectable } from "@angular/core";
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
	Signin,
	SignupSecceed,
	SignupFailed
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
	whoAmI$ = this.actions$.pipe(
		ofType(SignInActionTypes.WHO_AM_I),
		switchMap(() =>
			this.signinService
				.whoAmI()
				.pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))
		)
	);

	@Effect()
	Signin$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN),
		pluck("payload"),
		switchMap(payload =>
			this.signinService
				.signin(payload)
				.pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))
		)
	);

	@Effect()
	signup$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNUP),
		pluck("payload"),
		switchMap(payload =>
			this.signinService
				.signup(payload)
				.pipe(map(user => new SignupSecceed(user)), catchError(error => of(new SignupFailed(error))))
		)
	);

	@Effect({ dispatch: false })
	signupSucceed$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNUP_SUCCEED),
		tap(() => {
			debugger;
			this.router.navigate([ "auth/signin" ]);
		})
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
			if (location.pathname.indexOf("signin") > -1) this.router.navigate([ "/" ]);
		})
	);

	@Effect()
	AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map(() => new NewCaptcha()));

	@Effect()
	DoSignout$ = this.actions$.pipe(
		ofType(SignInActionTypes.DO_SIGNOUT),
		switchMap(data =>
			this.signinService.signout().pipe(
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

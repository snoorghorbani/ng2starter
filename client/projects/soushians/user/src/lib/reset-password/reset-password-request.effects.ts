import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { switchMap, map, takeUntil, delay, catchError } from "rxjs/operators";

import { ResetPasswordRequestModel } from "../models";

import {
	ResetPasswordRequestActionTypes,
	DisableGetLink,
	EnableGetLink,
	MaximumTryHappend,
	ResetPasswordLinkRequestStart,
	ResetPasswordLinkRequestSucceed,
	ResetPasswordLinkRequestFailed
} from "./reset-password-request.actions";
import { PasswordService } from "../services/password.service";

@Injectable()
export class ResetPasswordRequestEffects {
	constructor(private actions$: Actions<any>, private passwordService: PasswordService) {}

	@Effect()
	ResetPasswordRequest$ = this.actions$.ofType(ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK).pipe(
		map(action => action.payload),
		// switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.isValidResetPasswordRequest()),
		// map((isValid: boolean) => isValid ? new ResetPasswordLinkRequestStart(data) : new MaximumTryHappend())
		map(data => new ResetPasswordLinkRequestStart(data))
	);

	@Effect()
	MaximumTryHappend$ = this.actions$
		.ofType(
			ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND,
			ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START
		)
		.pipe(map(() => new DisableGetLink()));

	@Effect()
	enableAfterTime$ = this.actions$
		.ofType(ResetPasswordRequestActionTypes.DISABLE_GET_LINK)
		.pipe(
			takeUntil(this.actions$.ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND)),
			delay(3 * 1000),
			map(() => new EnableGetLink())
		);

	@Effect()
	RequestResetPasswordLink$ = this.actions$
		.ofType(ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
		.pipe(
			map(action => action.payload),
			switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.requestResetPasswordLink(data)),
			map(() => new ResetPasswordLinkRequestSucceed()),
			catchError(() => Observable.of(new ResetPasswordLinkRequestFailed()))
		);
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { switchMap, map, takeUntil, delay, catchError, pluck } from "rxjs/operators";

import { ResetPasswordRequestModel } from "../models/reset-password-request.model";

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
	ResetPasswordRequest$ = this.actions$.pipe(
		ofType(ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK),
		pluck("payload"),
		// switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.isValidResetPasswordRequest()),
		// map((isValid: boolean) => isValid ? new ResetPasswordLinkRequestStart(data) : new MaximumTryHappend())
		map((data: any) => new ResetPasswordLinkRequestStart(data))
	);

	@Effect()
	MaximumTryHappend$ = this.actions$.pipe(
		ofType(
			ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND,
			ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START
		),
		map(() => new DisableGetLink())
	);

	@Effect()
	enableAfterTime$ = this.actions$.pipe(
		ofType(ResetPasswordRequestActionTypes.DISABLE_GET_LINK),
		takeUntil(this.actions$.pipe(ofType(ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND))),
		delay(3 * 1000),
		map(() => new EnableGetLink())
	);

	@Effect()
	RequestResetPasswordLink$ = this.actions$.pipe(
		ofType(ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START),
		pluck("payload"),
		switchMap((data: ResetPasswordRequestModel.Request) => this.passwordService.requestResetPasswordLink(data)),
		map(() => new ResetPasswordLinkRequestSucceed()),
		catchError(() => of(new ResetPasswordLinkRequestFailed()))
	);
}

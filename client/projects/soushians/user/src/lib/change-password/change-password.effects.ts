import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, pluck } from "rxjs/operators";

import { ChangePasswordModel } from "../models/change-password.model";

import { PasswordService } from "../services/password.service";
import {
	ChangePasswordActionTypes,
	ChangePasswordStart,
	ChangePasswordSucceed,
	ChangePasswordFailed
} from "./change-password.actions";

@Injectable()
export class ChangePasswordEffects {
	constructor(private actions$: Actions<any>, private router: Router, private passwordService: PasswordService) {}

	@Effect()
	ChangePasswordRequest$ = this.actions$.pipe(
		ofType(ChangePasswordActionTypes.CHANGE_PASSWORD),
		pluck("payload"),
		map((data: any) => new ChangePasswordStart(data))
	);

	@Effect()
	RequestChangePasswordLink$ = this.actions$.pipe(
		ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START),
		pluck("payload"),
		switchMap((data: ChangePasswordModel.Request) => {
			return this.passwordService
				.changePassword(data)
				.map(res => new ChangePasswordSucceed(res))
				.catch(() => of(new ChangePasswordFailed()));
		})
	);

	//@Effect()
	//    ResetPassword$ = this.actions$
	//        .ofType(ResetPasswordActionTypes.RESET_PASSWORD)
	//        .map(toPayload)
	//        .map((data) => new ResetPasswordStart(data));
	//
	//    @Effect()
	//    ResetPasswordLink$ = this.actions$
	//        .ofType(ResetPasswordActionTypes.RESET_PASSWORD_START)
	//        .map(toPayload)
	//        .switchMap((data: ResetPasswordModel.Request) => {
	//            return this.passwordService.resetPassword(data)
	//                .map(() => new ResetPasswordSucceed())
	//                .catch(() => of(new ResetPasswordFailed()))
	//        });
}

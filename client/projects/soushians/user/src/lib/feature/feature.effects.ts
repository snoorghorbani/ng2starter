import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

import { SignInActionTypes } from "@soushians/authentication";

import { UserService } from "../services/user.service";
import { GetProfile, GetProfileSucceed } from "../profile-view/profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";
import { UserModel } from "../models/user.model";

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: UserService) {}

	// @Effect()
	// updateProfileInformation$ = this.actions$.pipe(
	// ofType(SignInActionTypes.SIGNIN_SUCCEED),
	// 	map(action => action.payload),
	// 	map(user => {
	// 		return new GetProfileSucceed(user);
	// 	})
	// );
	@Effect()
	getAccountInfo$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN_SUCCEED),
		map(() => {
			return new GetProfile();
		})
	);
	@Effect()
	signout$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNOUT),
		map(() => new RefreshUserInfoAction({} as UserModel))
	);
}

﻿import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { map } from "rxjs/operators";

import { SignInActionTypes } from "@soushians/authentication";

import { UserService } from "../services/user.service";
import { GetProfile, GetProfileSucceed } from "../profile-view/profile-view.actions";

@Injectable()
export class UserEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: UserService) {}

	@Effect()
	updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
		map(action => action.payload),
		map(user => {
			debugger;
			return new GetProfileSucceed(user);
		})
	);
	@Effect()
	getProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
		map(() => {
			return new GetProfile();
		})
	);
}

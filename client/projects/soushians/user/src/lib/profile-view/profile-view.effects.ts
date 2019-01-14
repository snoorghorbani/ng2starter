import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError, pluck } from "rxjs/operators";

import { UserService } from "../services/user.service";
import { EditProfile_ApiModel } from "../models/profile-edit.model";
import { ProfileViewActionTypes, GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";

@Injectable()
export class ProfileViewEffects {
	constructor(private actions$: Actions<any>, private userService: UserService) {}

	@Effect()
	ProfileRequest$ = this.actions$.pipe(
		ofType(ProfileViewActionTypes.GET_PROFILE),
		pluck("payload"),
		map(data => new GetProfileStart())
	);

	@Effect()
	getProfile$ = this.actions$.pipe(
		ofType(ProfileViewActionTypes.GET_PROFILE_START),
		pluck("payload"),
		switchMap((data: EditProfile_ApiModel.Request) =>
			this.userService
				.getAccountInfo()
				.pipe(map(res => new GetProfileSucceed(res)), catchError(() => of(new GetProfileFailed())))
		)
	);

	@Effect()
	refreshUserInfo$ = this.actions$.pipe(
		ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED),
		pluck("payload"),
		map((data: any) => new RefreshUserInfoAction(data))
	);
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError } from "rxjs/operators";

import { UserService } from "../services/user.service";
import { EditProfile_ApiModel } from "../models";
import { ProfileViewActionTypes, GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";

@Injectable()
export class ProfileViewEffects {
	constructor(private actions$: Actions<any>, private userService: UserService) {}

	@Effect()
	ProfileRequest$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE)
		.pipe(map(action => action.payload), map(data => new GetProfileStart()));

	@Effect()
	getProfile$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE_START)
		.pipe(
			map(action => action.payload),
			switchMap((data: EditProfile_ApiModel.Request) =>
				this.userService
					.getAccountInfo()
					.pipe(
						map(res => new GetProfileSucceed(res)),
						catchError(() => Observable.of(new GetProfileFailed()))
					)
			)
		);

	@Effect()
	refreshUserInfo$ = this.actions$
		.ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
		.pipe(map(action => action.payload), map(data => new RefreshUserInfoAction(data)));
}

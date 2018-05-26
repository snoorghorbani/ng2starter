import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, catchError, switchMap } from "rxjs/operators";

import { UserService } from "../services/user.service";
import { EditProfile_ApiModel } from "../models";
import {
	EditProfileActionTypes,
	EditProfileStart,
	EditProfileSucceed,
	EditProfileFailed
} from "./edit-profile.actions";
import { GetProfile } from "../profile-view/profile-view.actions";

@Injectable()
export class EditProfileEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: UserService) {}

	@Effect()
	EditProfileRequest$ = this.actions$
		.ofType(EditProfileActionTypes.EDIT_PROFILE)
		.pipe(map(action => action.payload), map(data => new EditProfileStart(data)));

	@Effect()
	RequestEditProfileLink$ = this.actions$
		.ofType(EditProfileActionTypes.EDIT_PROFILE_START)
		.pipe(
			map(action => action.payload),
			switchMap((data: EditProfile_ApiModel.Request) => this.service.editProfile(data)),
			map(res => new EditProfileSucceed(res)),
			catchError(() => of(new EditProfileFailed()))
		);
	// .switchMap((data: EditProfile_ApiModel.Request) => {
	// 	return this.service
	// 		.editProfile(data)
	// 		.map((res) => new EditProfileSucceed(res))
	// 		.catch(() => Observable.of(new EditProfileFailed()));
	// });

	@Effect()
	goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(
		map(() => {
			this.router.navigate([ "/user/profile" ]);
			return new GetProfile();
		})
	);
}

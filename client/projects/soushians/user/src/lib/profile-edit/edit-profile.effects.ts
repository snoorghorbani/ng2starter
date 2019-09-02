import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap, pluck } from "rxjs/operators";

import { UserService } from "../services/user.service";
import { EditProfile_ApiModel } from "../models/profile-edit.model";
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
	EditProfileRequest$ = this.actions$.pipe(
		ofType(EditProfileActionTypes.EDIT_PROFILE),
		pluck("payload"),
		map((data: any) => new EditProfileStart(data))
	);

	@Effect()
	RequestEditProfileLink$ = this.actions$.pipe(
		ofType(EditProfileActionTypes.EDIT_PROFILE_START),
		pluck("payload"),
		switchMap((data: EditProfile_ApiModel.Request) => this.service.editProfile(data)),
		map(res => new EditProfileSucceed(res)),
		catchError(() => of(new EditProfileFailed()))
	);
	// .switchMap((data: EditProfile_ApiModel.Request) => {
	// 	return this.service
	// 		.editProfile(data)
	// 		.map((res) => new EditProfileSucceed(res))
	// 		.catch(() => of(new EditProfileFailed()));
	// });

	@Effect()
	goToView$ = this.actions$.pipe(
		ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED),
		map(() => {
			this.router.navigate([ "/user/profile" ]);
			return new GetProfile();
		})
	);
}

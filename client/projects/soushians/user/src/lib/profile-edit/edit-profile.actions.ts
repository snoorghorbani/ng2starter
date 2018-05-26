import { Action } from "@ngrx/store";

import { EditProfile_ApiModel, UserModel } from "../models";

export enum EditProfileActionTypes {
	EDIT_PROFILE = "[USER][PASSWORD] EDIT_PROFILE",
	EDIT_PROFILE_START = "[USER][PASSWORD] EDIT_PROFILE_START",
	EDIT_PROFILE_SUCCEED = "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
	EDIT_PROFILE_FAILED = "[USER][PASSWORD] EDIT_PROFILE_FAILED"
}

export class EditProfile implements Action {
	readonly type = EditProfileActionTypes.EDIT_PROFILE;
	constructor(public payload: EditProfile_ApiModel.Request) { }
}
export class EditProfileStart implements Action {
	readonly type = EditProfileActionTypes.EDIT_PROFILE_START;
	constructor(public payload: EditProfile_ApiModel.Request) { }
}
export class EditProfileSucceed implements Action {
	readonly type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
	constructor(public payload: UserModel) { }
}
export class EditProfileFailed implements Action {
	readonly type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
}

export type EditProfileAction =
	| EditProfile
	| EditProfileStart
	| EditProfileSucceed
	| EditProfileFailed;

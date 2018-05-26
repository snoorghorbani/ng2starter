import { Action } from "@ngrx/store";

import { ChangePasswordModel } from "../models";
import { ProfileViewModel } from "../models";

export enum ProfileViewActionTypes {
	GET_PROFILE = "[USER][PROFILE] GET_PROFILE",
	GET_PROFILE_START = "[USER][PROFILE] GET_PROFILE_START",
	GET_PROFILE_SUCCEED = "[USER][PROFILE] GET_PROFILE_SUCCEED",
	GET_PROFILE_FAILED = "[USER][PROFILE] GET_PROFILE_FAILED"
}

export class GetProfile implements Action {
	readonly type = ProfileViewActionTypes.GET_PROFILE;
}
export class GetProfileStart implements Action {
	readonly type = ProfileViewActionTypes.GET_PROFILE_START;
}
export class GetProfileSucceed implements Action {
	readonly type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
	constructor(public payload: ProfileViewModel.Response) {}
}
export class GetProfileFailed implements Action {
	readonly type = ProfileViewActionTypes.GET_PROFILE_FAILED;
}

export type ProfileViewAction = GetProfile | GetProfileStart | GetProfileSucceed | GetProfileFailed;

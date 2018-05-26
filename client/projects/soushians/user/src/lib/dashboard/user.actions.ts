import { Action } from "@ngrx/store";

import { UserModel } from "../models";

export enum UserActionTypes {
	USER_SELECTED = "[USER] USER_SELECTED",
	REFRESH_USER_INFO = "[USER] REFRESH_USER_INFO"
}

export class UserSelectedAction implements Action {
	readonly type = UserActionTypes.USER_SELECTED;
	constructor(public payload: UserModel) {}
}

export class RefreshUserInfoAction implements Action {
	readonly type = UserActionTypes.REFRESH_USER_INFO;
	constructor(public payload: UserModel) {}
}

export type UserAction = UserSelectedAction | RefreshUserInfoAction;

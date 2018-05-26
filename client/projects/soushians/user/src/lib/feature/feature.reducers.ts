import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";
import { UserModel, ProfileViewModel } from "../models";
import { ChangePassword, ChangePasswordFailed, ChangePasswordStart, ChangePasswordSucceed } from "../change-password";
import {
	DisableGetLink,
	EnableGetLink,
	GetResetPasswordLink,
	MaximumTryHappend,
	PasswordChangedFailed,
	PasswordChangedSucceed,
	ResetPasswordLinkRequestFailed,
	ResetPasswordLinkRequestStart,
	ResetPasswordLinkRequestSucceed
} from "../reset-password";
import { EditProfile, EditProfileFailed, EditProfileStart, EditProfileSucceed } from "../profile-edit";
import { RefreshUserInfoAction, UserSelectedAction } from "../dashboard";
import { SearchFailed, SearchStartAction, SearchSucceed } from "../search-account";

//TODO : remove these lines
//import {
//        Login, LoginSuccess, LoginFailure, LoginRedirect, LogoutAction
//} from "../actions"
//import { CaptchaAction } from "../actions"

import * as userReducer from "../dashboard/user.reducer";
import * as resetPasswordRequestReducer from "../reset-password/reset-password-request.reducer";
import * as changePassword from "../change-password/change-password.reducer";
import * as editProfileReducer from "../profile-edit/edit-profile.reducer";
import * as searchReducer from "../search-account/search.reducer";

export interface UserState {
	user: userReducer.State;
	resetPasswordRequest: resetPasswordRequestReducer.State;
	searchView: searchReducer.State;
	changePassword: changePassword.State;
	editProfile: editProfileReducer.State;
}

export const UserReducers = {
	user: userReducer.userReducer,
	resetPasswordRequest: resetPasswordRequestReducer.reducer,
	changePassword: changePassword.reducer,
	searchView: searchReducer.reducer,
	editProfile: editProfileReducer.reducer
};

export interface FeatureState {
	"user": UserState;
}

//#region selectors

export const selectFeatureState = createFeatureSelector<UserState>("user");

export const getUserInforamtionStatus = createSelector(selectFeatureState, (state: UserState) => state.user.loaded);
export const isSignedIn = createSelector(selectFeatureState, (state: UserState) => state.user.loaded);

export const selectResetPasswordRequestState = createSelector(
	selectFeatureState,
	(state: UserState) => state.resetPasswordRequest
);
export const getNumberOfRequeseted = createSelector(
	selectResetPasswordRequestState,
	resetPasswordRequestReducer.getNumberOfRequeseted
);
export const getResetPasswordRequestStatus = createSelector(
	selectResetPasswordRequestState,
	resetPasswordRequestReducer.getStatus
);

//#region user
export const selectUserInformaionState = createSelector(selectFeatureState, (state: UserState) => state.user);
export const getUser = createSelector(selectUserInformaionState, userReducer.getUser);
//#endregion

//#region search
export const selectSearchState = createSelector(selectFeatureState, (state: UserState) => state.searchView);
export const getSearchStatus = createSelector(selectSearchState, searchReducer.getStatus);
export const getUserInfo = createSelector(selectSearchState, searchReducer.getUserInfo);
//#endregion

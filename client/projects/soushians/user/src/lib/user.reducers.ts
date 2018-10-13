import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./dashboard/account.reducer";
import { getAccountInfo as _getAccountInfo } from "./dashboard/account.reducer";
import * as resetPasswordRequestReducer from "./reset-password/reset-password-request.reducer";
import * as changePassword from "./change-password/change-password.reducer";
import * as editProfileReducer from "./profile-edit/edit-profile.reducer";
import * as searchReducer from "./search-account/search.reducer";
import { UserModel } from "./models/user.model";
import { responseStatusTypes } from "@soushians/shared";

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

export interface AppState {
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
export const getAccountInfo = createSelector(selectUserInformaionState, _getAccountInfo);
//#endregion

//#region search
export const selectSearchState = createSelector(selectFeatureState, (state: UserState) => state.searchView);
export const getSearchStatus = createSelector(selectSearchState, searchReducer.getStatus);
//#endregion

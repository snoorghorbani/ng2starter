import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

// import * as userReducer from "../dashboard/user.reducer";
// import * as resetPasswordRequestReducer from "../reset-password/reset-password-request.reducer";
// import * as changePassword from "../change-password/change-password.reducer";
// import * as editProfileReducer from "../profile-edit/edit-profile.reducer";
// import * as searchReducer from "../search-account/search.reducer";

export interface FormState {
	// user: userReducer.State;
	// resetPasswordRequest: resetPasswordRequestReducer.State;
	// searchView: searchReducer.State;
	// changePassword: changePassword.State;
	// editProfile: editProfileReducer.State;
}

export const FormReducers = {
	// user: userReducer.userReducer,
	// resetPasswordRequest: resetPasswordRequestReducer.reducer,
	// changePassword: changePassword.reducer,
	// searchView: searchReducer.reducer,
	// editProfile: editProfileReducer.reducer
};

export interface MainContainerState {
	"form": FormState;
}

//#region selectors

export const selectFeatureState = createFeatureSelector<FormState>("user");

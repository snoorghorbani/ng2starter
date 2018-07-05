import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as userReducer from "./user.reducer";

import { UserModel } from "../models/user.model";

export interface FrontendAuthenticationState {
	userStatus: userReducer.State;
}

export interface FeatureState {
	"frontend-authentication": FrontendAuthenticationState;
}

export const FrontendAuthenticationReducers = {
	userStatus: userReducer.UserReducer
};

//#region selectors

export const selectFrontendAuthenticationState = createFeatureSelector<FrontendAuthenticationState>(
	"frontend-authentication"
);

export const selectAuthState = createSelector(
	selectFrontendAuthenticationState,
	(state: FrontendAuthenticationState) => state.userStatus
);

export const getFrontendAuthenticationState = createSelector(selectAuthState, userReducer.getLoggedIn);
export const getFrontendUser = createSelector(selectAuthState, userReducer.getUser);

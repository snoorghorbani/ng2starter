import { createSelector, createFeatureSelector, MemoizedSelector } from "@ngrx/store";

import * as userReducer from "./user.reducer";
// import * as captchaReducer from "./captcha.reducer";

import { UserModel } from "../models/user.model";

export interface AuthenticationState {
	userStatus: userReducer.State;
	// captcha: captchaReducer.State;
}

export interface FeatureState {
	"authentication": AuthenticationState;
}

export const AuthenticationReducers = {
	userStatus: userReducer.UserReducer
	// captcha: captchaReducer.CaptchaReducer
};

//#region selectors

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>("authentication");

export const selectAuthState = createSelector(
	selectAuthenticationState,
	(state: AuthenticationState) => state.userStatus
);

export const getLoggedIn = createSelector(selectAuthState, userReducer.getLoggedIn);
export const getUser = createSelector(selectAuthState, userReducer.getUser);

// export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
// 	return state.captcha;
// });

// export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);

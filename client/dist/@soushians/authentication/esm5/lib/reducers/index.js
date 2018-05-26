/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
/**
 * @record
 */
export function AuthenticationState() { }
function AuthenticationState_tsickle_Closure_declarations() {
    /** @type {?} */
    AuthenticationState.prototype.userStatus;
}
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.authentication;
}
export var /** @type {?} */ AuthenticationReducers = {
    userStatus: userReducer.UserReducer
};
//#region selectors
export var /** @type {?} */ selectAuthenticationState = createFeatureSelector("authentication");
export var /** @type {?} */ selectAuthState = createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
export var /** @type {?} */ getLoggedIn = createSelector(selectAuthState, userReducer.getLoggedIn);
export var /** @type {?} */ getUser = createSelector(selectAuthState, userReducer.getUser);
// export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
// 	return state.captcha;
// });
// export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);
//# sourceMappingURL=index.js.map

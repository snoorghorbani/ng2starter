/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as userReducer from "../dashboard/user.reducer";
import * as resetPasswordRequestReducer from "../reset-password/reset-password-request.reducer";
import * as changePassword from "../change-password/change-password.reducer";
import * as editProfileReducer from "../profile-edit/edit-profile.reducer";
import * as searchReducer from "../search-account/search.reducer";
/**
 * @record
 */
export function UserState() { }
function UserState_tsickle_Closure_declarations() {
    /** @type {?} */
    UserState.prototype.user;
    /** @type {?} */
    UserState.prototype.resetPasswordRequest;
    /** @type {?} */
    UserState.prototype.searchView;
    /** @type {?} */
    UserState.prototype.changePassword;
    /** @type {?} */
    UserState.prototype.editProfile;
}
export const /** @type {?} */ UserReducers = {
    user: userReducer.userReducer,
    resetPasswordRequest: resetPasswordRequestReducer.reducer,
    changePassword: changePassword.reducer,
    searchView: searchReducer.reducer,
    editProfile: editProfileReducer.reducer
};
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.user;
}
//#region selectors
export const /** @type {?} */ selectFeatureState = createFeatureSelector("user");
export const /** @type {?} */ getUserInforamtionStatus = createSelector(selectFeatureState, (state) => state.user.loaded);
export const /** @type {?} */ isSignedIn = createSelector(selectFeatureState, (state) => state.user.loaded);
export const /** @type {?} */ selectResetPasswordRequestState = createSelector(selectFeatureState, (state) => state.resetPasswordRequest);
export const /** @type {?} */ getNumberOfRequeseted = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getNumberOfRequeseted);
export const /** @type {?} */ getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getStatus);
//#region user
export const /** @type {?} */ selectUserInformaionState = createSelector(selectFeatureState, (state) => state.user);
export const /** @type {?} */ getUser = createSelector(selectUserInformaionState, userReducer.getUser);
//#endregion
//#region search
export const /** @type {?} */ selectSearchState = createSelector(selectFeatureState, (state) => state.searchView);
export const /** @type {?} */ getSearchStatus = createSelector(selectSearchState, searchReducer.getStatus);
export const /** @type {?} */ getUserInfo = createSelector(selectSearchState, searchReducer.getUserInfo);
//#endregion
//# sourceMappingURL=feature.reducers.js.map

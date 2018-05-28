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
export var /** @type {?} */ UserReducers = {
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
export var /** @type {?} */ selectFeatureState = createFeatureSelector("user");
export var /** @type {?} */ getUserInforamtionStatus = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
export var /** @type {?} */ isSignedIn = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
export var /** @type {?} */ selectResetPasswordRequestState = createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
export var /** @type {?} */ getNumberOfRequeseted = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getNumberOfRequeseted);
export var /** @type {?} */ getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getStatus);
//#region user
export var /** @type {?} */ selectUserInformaionState = createSelector(selectFeatureState, function (state) { return state.user; });
export var /** @type {?} */ getUser = createSelector(selectUserInformaionState, userReducer.getUser);
//#endregion
//#region search
export var /** @type {?} */ selectSearchState = createSelector(selectFeatureState, function (state) { return state.searchView; });
export var /** @type {?} */ getSearchStatus = createSelector(selectSearchState, searchReducer.getStatus);
export var /** @type {?} */ getUserInfo = createSelector(selectSearchState, searchReducer.getUserInfo);
//#endregion
//# sourceMappingURL=feature.reducers.js.map

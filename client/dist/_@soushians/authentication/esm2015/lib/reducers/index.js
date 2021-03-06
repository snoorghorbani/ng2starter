/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
/**
 * @record
 */
export function AuthenticationState() { }
if (false) {
    /** @type {?} */
    AuthenticationState.prototype.userStatus;
}
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.authentication;
}
/** @type {?} */
export const AuthenticationReducers = {
    userStatus: userReducer.UserReducer
    // captcha: captchaReducer.CaptchaReducer
};
//#region selectors
/** @type {?} */
export const selectAuthenticationState = createFeatureSelector("authentication");
/** @type {?} */
export const selectAuthState = createSelector(selectAuthenticationState, (state) => state.userStatus);
/** @type {?} */
export const getLoggedIn = createSelector(selectAuthState, userReducer.getLoggedIn);
/** @type {?} */
export const getUser = createSelector(selectAuthState, userReducer.getUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUV0RixPQUFPLEtBQUssV0FBVyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzlDLHlDQUdDOzs7SUFGQSx5Q0FBOEI7Ozs7O0FBSS9CLGtDQUVDOzs7SUFEQSxzQ0FBc0M7OztBQUd2QyxNQUFNLE9BQU8sc0JBQXNCLEdBQUc7SUFDckMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxXQUFXO0lBQ25DLHlDQUF5QztDQUN6Qzs7O0FBSUQsTUFBTSxPQUFPLHlCQUF5QixHQUFHLHFCQUFxQixDQUFzQixnQkFBZ0IsQ0FBQzs7QUFFckcsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQzVDLHlCQUF5QixFQUN6QixDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQ2hEOztBQUVELE1BQU0sT0FBTyxXQUFXLEdBQUcsY0FBYyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDOztBQUNuRixNQUFNLE9BQU8sT0FBTyxHQUFHLGNBQWMsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXIucmVkdWNlclwiO1xyXG4vLyBpbXBvcnQgKiBhcyBjYXB0Y2hhUmVkdWNlciBmcm9tIFwiLi9jYXB0Y2hhLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiYXV0aGVudGljYXRpb25cIjogQXV0aGVudGljYXRpb25TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgPSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuVXNlclJlZHVjZXJcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5DYXB0Y2hhUmVkdWNlclxyXG59O1xyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhlbnRpY2F0aW9uU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8QXV0aGVudGljYXRpb25TdGF0ZT4oXCJhdXRoZW50aWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlclN0YXR1c1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRVc2VyKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzZWxlY3RDYXB0Y2hhU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLCAoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4gc3RhdGUuY2FwdGNoYTtcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q2FwdGNoYSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdENhcHRjaGFTdGF0ZSwgY2FwdGNoYVJlZHVjZXIuZ2V0Q2FwdGNoYSk7XHJcbiJdfQ==
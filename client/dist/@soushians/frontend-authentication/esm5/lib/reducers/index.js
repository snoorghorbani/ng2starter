/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as userReducer from "./user.reducer";
import { UserModel } from "../models/user.model";
export { UserModel };
/**
 * @record
 */
export function FrontendAuthenticationState() { }
if (false) {
    /** @type {?} */
    FrontendAuthenticationState.prototype.userStatus;
}
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /* Skipping unnamed member:
    "frontend-authentication": FrontendAuthenticationState;*/
}
/** @type {?} */
export var FrontendAuthenticationReducers = {
    userStatus: userReducer.UserReducer
};
//#region selectors
/** @type {?} */
export var selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.userStatus; };
/** @type {?} */
export var selectAuthState = createSelector(selectFrontendAuthenticationState, (ɵ0));
/** @type {?} */
export var getFrontendAuthenticationState = createSelector(selectAuthState, userReducer.getLoggedIn);
/** @type {?} */
export var getFrontendUser = createSelector(selectAuthState, userReducer.getUser);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUV0RixPQUFPLEtBQUssV0FBVyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Ozs7QUFFckIsaURBRUM7OztJQURBLGlEQUE4Qjs7Ozs7QUFHL0Isa0NBRUM7Ozs7OztBQUVELE1BQU0sS0FBTyw4QkFBOEIsR0FBRztJQUM3QyxVQUFVLEVBQUUsV0FBVyxDQUFDLFdBQVc7Q0FDbkM7OztBQUlELE1BQU0sS0FBTyxpQ0FBaUMsR0FBRyxxQkFBcUIsQ0FDckUseUJBQXlCLENBQ3pCOzs7OztBQUlBLFVBQUMsS0FBa0MsSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQWhCLENBQWdCOztBQUZ6RCxNQUFNLEtBQU8sZUFBZSxHQUFHLGNBQWMsQ0FDNUMsaUNBQWlDLE9BRWpDOztBQUVELE1BQU0sS0FBTyw4QkFBOEIsR0FBRyxjQUFjLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUM7O0FBQ3RHLE1BQU0sS0FBTyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlci5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuZXhwb3J0IHsgVXNlck1vZGVsIH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImZyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI6IEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZyb250ZW5kQXV0aGVudGljYXRpb25SZWR1Y2VycyA9IHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5Vc2VyUmVkdWNlclxyXG59O1xyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGU+KFxyXG5cdFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSxcclxuXHQoc3RhdGU6IEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlclN0YXR1c1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEF1dGhTdGF0ZSwgdXNlclJlZHVjZXIuZ2V0TG9nZ2VkSW4pO1xyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRlbmRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRVc2VyKTtcclxuIl19
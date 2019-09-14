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
export const FrontendAuthenticationReducers = {
    userStatus: userReducer.UserReducer
};
//#region selectors
/** @type {?} */
export const selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.userStatus;
/** @type {?} */
export const selectAuthState = createSelector(selectFrontendAuthenticationState, (ɵ0));
/** @type {?} */
export const getFrontendAuthenticationState = createSelector(selectAuthState, userReducer.getLoggedIn);
/** @type {?} */
export const getFrontendUser = createSelector(selectAuthState, userReducer.getUser);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUV0RixPQUFPLEtBQUssV0FBVyxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUM7Ozs7QUFFckIsaURBRUM7OztJQURBLGlEQUE4Qjs7Ozs7QUFHL0Isa0NBRUM7Ozs7OztBQUVELE1BQU0sT0FBTyw4QkFBOEIsR0FBRztJQUM3QyxVQUFVLEVBQUUsV0FBVyxDQUFDLFdBQVc7Q0FDbkM7OztBQUlELE1BQU0sT0FBTyxpQ0FBaUMsR0FBRyxxQkFBcUIsQ0FDckUseUJBQXlCLENBQ3pCOzs7OztBQUlBLENBQUMsS0FBa0MsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVU7O0FBRnpELE1BQU0sT0FBTyxlQUFlLEdBQUcsY0FBYyxDQUM1QyxpQ0FBaUMsT0FFakM7O0FBRUQsTUFBTSxPQUFPLDhCQUE4QixHQUFHLGNBQWMsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7QUFDdEcsTUFBTSxPQUFPLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgeyBVc2VyTW9kZWwgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzID0ge1xyXG5cdHVzZXJTdGF0dXM6IHVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyXHJcbn07XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4oXHJcblx0XCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyU3RhdHVzXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRGcm9udGVuZFVzZXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoU3RhdGUsIHVzZXJSZWR1Y2VyLmdldFVzZXIpO1xyXG4iXX0=
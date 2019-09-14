/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as userReducer from "./dashboard/account.reducer";
import { getAccountInfo as _getAccountInfo } from "./dashboard/account.reducer";
import * as resetPasswordRequestReducer from "./reset-password/reset-password-request.reducer";
import * as changePassword from "./change-password/change-password.reducer";
import * as editProfileReducer from "./profile-edit/edit-profile.reducer";
import * as searchReducer from "./search-account/search.reducer";
/**
 * @record
 */
export function UserState() { }
if (false) {
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
/** @type {?} */
export const UserReducers = {
    user: userReducer.userReducer,
    resetPasswordRequest: resetPasswordRequestReducer.reducer,
    changePassword: changePassword.reducer,
    searchView: searchReducer.reducer,
    editProfile: editProfileReducer.reducer
};
/**
 * @record
 */
export function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.user;
}
//#region selectors
/** @type {?} */
export const selectFeatureState = createFeatureSelector("user");
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.user.loaded;
/** @type {?} */
export const getUserInforamtionStatus = createSelector(selectFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.user.loaded;
/** @type {?} */
export const isSignedIn = createSelector(selectFeatureState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.resetPasswordRequest;
/** @type {?} */
export const selectResetPasswordRequestState = createSelector(selectFeatureState, (ɵ2));
/** @type {?} */
export const getNumberOfRequeseted = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getNumberOfRequeseted);
/** @type {?} */
export const getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, resetPasswordRequestReducer.getStatus);
//#region user
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.user;
/** @type {?} */
export const selectUserInformaionState = createSelector(selectFeatureState, (ɵ3));
/** @type {?} */
export const getAccountInfo = createSelector(selectUserInformaionState, _getAccountInfo);
//#endregion
//#region search
const ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.searchView;
/** @type {?} */
export const selectSearchState = createSelector(selectFeatureState, (ɵ4));
/** @type {?} */
export const getSearchStatus = createSelector(selectSearchState, searchReducer.getStatus);
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi91c2VyLnJlZHVjZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUN0RixPQUFPLEtBQUssV0FBVyxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLElBQUksZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEYsT0FBTyxLQUFLLDJCQUEyQixNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxjQUFjLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxLQUFLLGtCQUFrQixNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxhQUFhLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFJakUsK0JBTUM7OztJQUxBLHlCQUF3Qjs7SUFDeEIseUNBQXdEOztJQUN4RCwrQkFBZ0M7O0lBQ2hDLG1DQUFxQzs7SUFDckMsZ0NBQXNDOzs7QUFHdkMsTUFBTSxPQUFPLFlBQVksR0FBRztJQUMzQixJQUFJLEVBQUUsV0FBVyxDQUFDLFdBQVc7SUFDN0Isb0JBQW9CLEVBQUUsMkJBQTJCLENBQUMsT0FBTztJQUN6RCxjQUFjLEVBQUUsY0FBYyxDQUFDLE9BQU87SUFDdEMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxPQUFPO0lBQ2pDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO0NBQ3ZDOzs7O0FBRUQsOEJBRUM7OztJQURBLHdCQUFrQjs7OztBQUtuQixNQUFNLE9BQU8sa0JBQWtCLEdBQUcscUJBQXFCLENBQVksTUFBTSxDQUFDOzs7OztBQUVDLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNOztBQUFsSCxNQUFNLE9BQU8sd0JBQXdCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixPQUEwQzs7Ozs7QUFDdEQsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU07O0FBQXBHLE1BQU0sT0FBTyxVQUFVLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixPQUEwQzs7Ozs7QUFJcEcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9COztBQUZqRCxNQUFNLE9BQU8sK0JBQStCLEdBQUcsY0FBYyxDQUM1RCxrQkFBa0IsT0FFbEI7O0FBQ0QsTUFBTSxPQUFPLHFCQUFxQixHQUFHLGNBQWMsQ0FDbEQsK0JBQStCLEVBQy9CLDJCQUEyQixDQUFDLHFCQUFxQixDQUNqRDs7QUFDRCxNQUFNLE9BQU8sNkJBQTZCLEdBQUcsY0FBYyxDQUMxRCwrQkFBK0IsRUFDL0IsMkJBQTJCLENBQUMsU0FBUyxDQUNyQzs7Ozs7O0FBRzJFLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7O0FBQTVHLE1BQU0sT0FBTyx5QkFBeUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLE9BQW1DOztBQUM3RyxNQUFNLE9BQU8sY0FBYyxHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsRUFBRSxlQUFlLENBQUM7Ozs7Ozs7QUFJcEIsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTs7QUFBMUcsTUFBTSxPQUFPLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsT0FBeUM7O0FBQzNHLE1BQU0sT0FBTyxlQUFlLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gYXMgX2dldEFjY291bnRJbmZvIH0gZnJvbSBcIi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIgZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBlZGl0UHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHNlYXJjaFJlZHVjZXIgZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLlN0YXRlO1xyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuU3RhdGU7XHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5TdGF0ZTtcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQuU3RhdGU7XHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWR1Y2VycyA9IHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci51c2VyUmVkdWNlcixcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIsXHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLnJlZHVjZXIsXHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5yZWR1Y2VyLFxyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJ1c2VyXCI6IFVzZXJTdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxVc2VyU3RhdGU+KFwidXNlclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mb3JhbXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RGZWF0dXJlU3RhdGUsXHJcblx0KHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlc2V0UGFzc3dvcmRSZXF1ZXN0XHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzXHJcbik7XHJcblxyXG4vLyNyZWdpb24gdXNlclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlLCBfZ2V0QWNjb3VudEluZm8pO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBzZWFyY2hcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlYXJjaFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoVmlldyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTZWFyY2hTdGF0ZSwgc2VhcmNoUmVkdWNlci5nZXRTdGF0dXMpO1xyXG4vLyNlbmRyZWdpb25cclxuIl19
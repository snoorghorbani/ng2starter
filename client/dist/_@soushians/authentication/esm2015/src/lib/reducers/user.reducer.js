/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SignInActionTypes } from "../actions/signin.actions";
import { UserModel } from "../models/user.model";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.loggedIn;
    /** @type {?} */
    State.prototype.user;
}
/** @type {?} */
export const initialState = {
    loggedIn: false,
    user: new UserModel({ Id: 1 })
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SignInActionTypes.SIGNIN_SUCCEED: {
            return Object.assign({}, state, { loggedIn: true, user: action.payload });
        }
        case SignInActionTypes.SIGNOUT: {
            return Object.assign({}, state, { loggedIn: false, user: new UserModel() });
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
/** @type {?} */
export const getLoggedIn = (state) => state.loggedIn;
/** @type {?} */
export const getUser = (state) => state.user;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9saWIvcmVkdWNlcnMvdXNlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBRWpELDJCQUdDOzs7SUFGQSx5QkFBa0I7O0lBQ2xCLHFCQUFnQjs7O0FBR2pCLE1BQU0sT0FBTyxZQUFZLEdBQVU7SUFDbEMsUUFBUSxFQUFFLEtBQUs7SUFDZixJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDOUI7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFvQjtJQUNyRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0Qyx5QkFDSSxLQUFLLElBQ1IsUUFBUSxFQUFFLElBQUksRUFDZCxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDbkI7U0FDRjtRQUVELEtBQUssaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0IseUJBQ0ksS0FBSyxJQUNSLFFBQVEsRUFBRSxLQUFLLEVBQ2YsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFLElBQ3BCO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7OztBQUdELE1BQU0sT0FBTyxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFROztBQUMzRCxNQUFNLE9BQU8sT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25pbkFjdGlvbiwgU2lnbkluQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vYWN0aW9ucy9zaWduaW4uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvZ2dlZEluOiBib29sZWFuO1xyXG5cdHVzZXI6IFVzZXJNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9nZ2VkSW46IGZhbHNlLFxyXG5cdHVzZXI6IG5ldyBVc2VyTW9kZWwoeyBJZDogMSB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNpZ25pbkFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nZ2VkSW46IHRydWUsXHJcblx0XHRcdFx0dXNlcjogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdFx0dXNlcjogbmV3IFVzZXJNb2RlbCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW4gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sb2dnZWRJbjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS51c2VyO1xyXG4vLyNlbmRyZWdpb25cclxuIl19
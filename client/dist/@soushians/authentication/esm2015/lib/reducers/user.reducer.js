/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SignInActionTypes } from "../actions/signin.actions";
import { UserModel } from "../models/user.model";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.loggedIn;
    /** @type {?} */
    State.prototype.user;
}
export const /** @type {?} */ initialState = {
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
export const /** @type {?} */ getLoggedIn = (state) => state.loggedIn;
export const /** @type {?} */ getUser = (state) => state.user;
//#endregion

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy91c2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7O0FBT2pELE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQVU7SUFDbEMsUUFBUSxFQUFFLEtBQUs7SUFDZixJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDOUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxzQkFBc0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFvQjtJQUNyRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFLLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sbUJBQ0YsS0FBSyxJQUNSLFFBQVEsRUFBRSxJQUFJLEVBQ2QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFFRCxLQUFLLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sbUJBQ0YsS0FBSyxJQUNSLFFBQVEsRUFBRSxLQUFLLEVBQ2YsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFLElBQ3BCO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOztBQUdELE1BQU0sQ0FBQyx1QkFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7QUFDNUQsTUFBTSxDQUFDLHVCQUFNLE9BQU8sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25pbkFjdGlvbiwgU2lnbkluQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi4vYWN0aW9ucy9zaWduaW4uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvZ2dlZEluOiBib29sZWFuO1xyXG5cdHVzZXI6IFVzZXJNb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9nZ2VkSW46IGZhbHNlLFxyXG5cdHVzZXI6IG5ldyBVc2VyTW9kZWwoeyBJZDogMSB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNpZ25pbkFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nZ2VkSW46IHRydWUsXHJcblx0XHRcdFx0dXNlcjogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRjYXNlIFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdFx0dXNlcjogbmV3IFVzZXJNb2RlbCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW4gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sb2dnZWRJbjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS51c2VyO1xyXG4vLyNlbmRyZWdpb25cclxuIl19
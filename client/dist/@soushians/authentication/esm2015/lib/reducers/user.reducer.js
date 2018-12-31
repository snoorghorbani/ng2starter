/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { SignInActionTypes } from "../actions/signin.actions";
import { UserModel } from "../models/user.model";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.loggedIn;
/** @type {?} */
State.prototype.user;
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
/** @type {?} */
export const getLoggedIn = (state) => state.loggedIn;
/** @type {?} */
export const getUser = (state) => state.user;
//#endregion

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy91c2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7QUFPakQsYUFBYSxZQUFZLEdBQVU7SUFDbEMsUUFBUSxFQUFFLEtBQUs7SUFDZixJQUFJLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Q0FDOUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQW9CO0lBQ3JFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLHlCQUNJLEtBQUssSUFDUixRQUFRLEVBQUUsSUFBSSxFQUNkLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtTQUNGO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQix5QkFDSSxLQUFLLElBQ1IsUUFBUSxFQUFFLEtBQUssRUFDZixJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUUsSUFDcEI7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7O0FBR0QsYUFBYSxXQUFXLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7O0FBQzVELGFBQWEsT0FBTyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbmluQWN0aW9uLCBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9nZ2VkSW46IGJvb2xlYW47XHJcblx0dXNlcjogVXNlck1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2dnZWRJbjogZmFsc2UsXHJcblx0dXNlcjogbmV3IFVzZXJNb2RlbCh7IElkOiAxIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2lnbmluQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VyOiBuZXcgVXNlck1vZGVsKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJbiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxvZ2dlZEluO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnVzZXI7XHJcbi8vI2VuZHJlZ2lvblxyXG4iXX0=
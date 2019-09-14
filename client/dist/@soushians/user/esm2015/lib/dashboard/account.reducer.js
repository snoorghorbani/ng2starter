/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserModel } from "../models/user.model";
import { UserActionTypes } from "./user.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = new UserModel();
/** @type {?} */
export const initialState = {
    loaded: false,
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionTypes.USER_SELECTED: {
            return Object.assign({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return Object.assign({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export const getAccountInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0QsMkJBR0M7OztJQUZBLHVCQUFnQjs7SUFDaEIscUJBQWdCOztXQUlWLElBQUksU0FBUyxFQUFFOztBQUZ0QixNQUFNLE9BQU8sWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxJQUFpQjtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQWtCO0lBQ25FLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNuQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksRUFDWixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDbkI7U0FDRjtRQUNELEtBQUssZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdkMseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7O0FBRUQsTUFBTSxPQUFPLGNBQWM7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkYXRhOiBVc2VyTW9kZWw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkYXRhOiBuZXcgVXNlck1vZGVsKClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
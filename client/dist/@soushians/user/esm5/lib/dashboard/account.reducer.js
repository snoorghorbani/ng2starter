/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ɵ0 = new UserModel();
/** @type {?} */
export var initialState = {
    loaded: false,
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActionTypes.USER_SELECTED: {
            return tslib_1.__assign({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return tslib_1.__assign({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var getAccountInfo = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdELDJCQUdDOzs7SUFGQSx1QkFBZ0I7O0lBQ2hCLHFCQUFnQjs7U0FJVixJQUFJLFNBQVMsRUFBRTs7QUFGdEIsTUFBTSxLQUFPLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksSUFBaUI7Q0FDckI7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBb0IsRUFBRSxNQUFrQjtJQUF4QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUMvQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbkMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFDRCxLQUFLLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZDLDRCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxFQUNaLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7QUFDRixDQUFDOztBQUVELE1BQU0sS0FBTyxjQUFjOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkYXRhOiBVc2VyTW9kZWw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkYXRhOiBuZXcgVXNlck1vZGVsKClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
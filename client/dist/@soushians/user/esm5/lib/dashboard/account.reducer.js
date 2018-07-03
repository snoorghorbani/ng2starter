/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UserModel } from "../models";
import { UserActionTypes } from "./user.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.data;
}
export var /** @type {?} */ initialState = {
    loaded: false,
    data: new UserModel()
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
export var /** @type {?} */ getAccountInfo = function (state) { return state.data; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFNN0QsTUFBTSxDQUFDLHFCQUFNLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxJQUFJLFNBQVMsRUFBRTtDQUNyQixDQUFDOzs7Ozs7QUFFRixNQUFNLHNCQUFzQixLQUFvQixFQUFFLE1BQWtCO0lBQXhDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQy9DLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFDRCxLQUFLLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEO0FBRUQsTUFBTSxDQUFDLHFCQUFNLGNBQWMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkYXRhOiBVc2VyTW9kZWw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkYXRhOiBuZXcgVXNlck1vZGVsKClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ProfileViewModel } from "../models";
import { SearchActionTypes } from "./search.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.status;
/** @type {?} */
State.prototype.data;
/** @type {?} */
export var initialState = {
    status: "pristine",
    data: /** @type {?} */ ({})
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SearchActionTypes.SEARCH: {
            return tslib_1.__assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return tslib_1.__assign({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return tslib_1.__assign({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return tslib_1.__assign({}, state, { status: "failed" });
        }
        case SearchActionTypes.CLEAR_SEARCHED_USER: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var getStatus = function (state) { return state.status; };
/** @type {?} */
export var getAccountInfo = function (state) { return state.data; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFnQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7O0FBTW5FLFdBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0lBQ2xCLElBQUksb0JBQUUsRUFBK0IsQ0FBQTtDQUNyQyxDQUFDOzs7Ozs7QUFDRixNQUFNLGtCQUFrQixLQUFvQixFQUFFLE1BQW9CO0lBQTFDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLDRCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsT0FBTyxFQUNmLElBQUksRUFBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUNwQztTQUNGO1FBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7U0FDRjtRQUNELEtBQUssaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtTQUNGO1FBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyQyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFFBQVEsSUFDZjtTQUNGO1FBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sWUFBWSxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7Q0FDRDs7QUFFRCxXQUFXLFNBQVMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxDQUFDOztBQUN0RCxXQUFXLGNBQWMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hBY3Rpb25UeXBlcywgU2VhcmNoQWN0aW9uIH0gZnJvbSBcIi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IHt9IGFzIFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2VhcmNoQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIixcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG5leHBvcnQgdmFyIGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
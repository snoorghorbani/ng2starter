/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProfileViewModel } from "../models/profile-view.model";
import { SearchActionTypes } from "./search.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.status;
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = ({});
/** @type {?} */
export const initialState = {
    status: "pristine",
    data: (/** @type {?} */ (ɵ0))
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case SearchActionTypes.SEARCH: {
            return Object.assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return Object.assign({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return Object.assign({}, state, { status: "failed" });
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
export var getStatus = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.status);
/** @type {?} */
export var getAccountInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBZ0IsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUVuRSwyQkFHQzs7O0lBRkEsdUJBQTRCOztJQUM1QixxQkFBZ0M7O1dBSTFCLENBQUEsRUFBRSxDQUE2Qjs7QUFGdEMsTUFBTSxPQUFPLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsdUJBQStCO0NBQ3JDOzs7Ozs7QUFDRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBb0I7SUFDakUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLEVBQ2YsSUFBSSxFQUFFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQ3BDO1NBQ0Y7UUFDRCxLQUFLLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN0Qyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsRUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1NBQ0Y7UUFDRCxLQUFLLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUNmO1NBQ0Y7UUFDRCxLQUFLLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDM0MsT0FBTyxZQUFZLENBQUM7U0FDcEI7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7O0FBRUQsTUFBTSxLQUFLLFNBQVM7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTs7QUFDckQsTUFBTSxLQUFLLGNBQWM7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hBY3Rpb24gfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YToge30gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTZWFyY2hBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbmV4cG9ydCB2YXIgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
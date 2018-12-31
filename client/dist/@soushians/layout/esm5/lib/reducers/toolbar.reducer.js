/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ToolbarActionTypes } from "../actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.mode;
/** @type {?} */
State.prototype.enableComfortableMode;
/** @type {?} */
State.prototype.comfortableModeHaveBeenDone;
/** @type {?} */
State.prototype.visibility;
/** @type {?} */
var initialState = {
    mode: "compact",
    enableComfortableMode: false,
    comfortableModeHaveBeenDone: false,
    visibility: true
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            if (!state.visibility)
                return tslib_1.__assign({}, state, { mode: "hide" });
            return tslib_1.__assign({}, state, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            if (!state.visibility)
                return tslib_1.__assign({}, state, { mode: "hide" });
            return tslib_1.__assign({}, state, { mode: state.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            if (!state.visibility)
                return tslib_1.__assign({}, state, { mode: "hide" });
            return tslib_1.__assign({}, state, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            if (!state.visibility)
                return tslib_1.__assign({}, state, { mode: "hide" });
            return tslib_1.__assign({}, state, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            if (!state.visibility)
                return tslib_1.__assign({}, state, { mode: "hide" });
            return tslib_1.__assign({}, state, { mode: "compact", enableComfortableMode: false });
        case ToolbarActionTypes.VISIBLE:
            return tslib_1.__assign({}, state, { mode: "compact", visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return tslib_1.__assign({}, state, { mode: "hide", visibility: false });
        default:
            return state;
    }
}
/** @type {?} */
export var getToolbarMode = function (state) { return state.mode; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFTaEUsSUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxFQUFFLFNBQVM7SUFDZixxQkFBcUIsRUFBRSxLQUFLO0lBQzVCLDJCQUEyQixFQUFFLEtBQUs7SUFDbEMsVUFBVSxFQUFFLElBQUk7Q0FDaEIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLGtCQUFrQixDQUFDLE9BQU87WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO2dCQUNwQiw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sSUFDWDtZQUNILDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxJQUNkO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxXQUFXO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDcEIsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQzVEO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDcEIsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLFNBQVMsSUFDZDtRQUNILEtBQUssa0JBQWtCLENBQUMsdUJBQXVCO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDcEIsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCw0QkFDSSxLQUFLLElBQ1IscUJBQXFCLEVBQUUsSUFBSSxJQUMxQjtRQUNILEtBQUssa0JBQWtCLENBQUMsd0JBQXdCO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDcEIsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCw0QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLFNBQVMsRUFDZixxQkFBcUIsRUFBRSxLQUFLLElBQzNCO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxPQUFPO1lBQzlCLDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxFQUNmLFVBQVUsRUFBRSxJQUFJLElBQ2Y7UUFDSCxLQUFLLGtCQUFrQixDQUFDLFNBQVM7WUFDaEMsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLEVBQ1osVUFBVSxFQUFFLEtBQUssSUFDaEI7UUFDSDtZQUNDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRDs7QUFFRCxXQUFhLGNBQWMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9vbGJhckFjdGlvblR5cGVzLCBUb29sYmFyQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRtb2RlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCI7XHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBib29sZWFuO1xyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogYm9vbGVhbjtcclxuXHR2aXNpYmlsaXR5OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2UsXHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBmYWxzZSxcclxuXHR2aXNpYmlsaXR5OiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUb29sYmFyQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBzdGF0ZS5lbmFibGVDb21mb3J0YWJsZU1vZGUgPyBcImNvbWZvcnRhYmxlXCIgOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcInN1bW1hcnlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJoaWRlXCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb29sYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1vZGU7XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ToolbarActionTypes } from "../actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.mode;
    /** @type {?} */
    State.prototype.enableComfortableMode;
    /** @type {?} */
    State.prototype.comfortableModeHaveBeenDone;
    /** @type {?} */
    State.prototype.visibility;
}
var /** @type {?} */ initialState = {
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
            return tslib_1.__assign({}, state, { visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return tslib_1.__assign({}, state, { visibility: false });
        default:
            return state;
    }
}
export var /** @type {?} */ getToolbarMode = function (state) { return state.mode; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBU2hFLHFCQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLEVBQUUsU0FBUztJQUNmLHFCQUFxQixFQUFFLEtBQUs7SUFDNUIsMkJBQTJCLEVBQUUsS0FBSztJQUNsQyxVQUFVLEVBQUUsSUFBSTtDQUNoQixDQUFDOzs7Ozs7QUFFRixNQUFNLGtCQUFrQixLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCxNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxJQUNkO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxXQUFXO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDckIsTUFBTSxzQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sSUFDWDtZQUNILE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUM1RDtRQUNILEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCxNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxJQUNkO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUI7WUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUNyQixNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxJQUNYO1lBQ0gsTUFBTSxzQkFDRixLQUFLLElBQ1IscUJBQXFCLEVBQUUsSUFBSSxJQUMxQjtRQUNILEtBQUssa0JBQWtCLENBQUMsd0JBQXdCO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDckIsTUFBTSxzQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sSUFDWDtZQUNILE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxTQUFTLEVBQ2YscUJBQXFCLEVBQUUsS0FBSyxJQUMzQjtRQUNILEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixNQUFNLHNCQUNGLEtBQUssSUFDUixVQUFVLEVBQUUsSUFBSSxJQUNmO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxTQUFTO1lBQ2hDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLFVBQVUsRUFBRSxLQUFLLElBQ2hCO1FBQ0g7WUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Q0FDRDtBQUVELE1BQU0sQ0FBQyxxQkFBTSxjQUFjLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iXX0=
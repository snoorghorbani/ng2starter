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
            return tslib_1.__assign({}, state, { mode: "compact", visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return tslib_1.__assign({}, state, { mode: "hide", visibility: false });
        default:
            return state;
    }
}
export var /** @type {?} */ getToolbarMode = function (state) { return state.mode; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBU2hFLHFCQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLEVBQUUsU0FBUztJQUNmLHFCQUFxQixFQUFFLEtBQUs7SUFDNUIsMkJBQTJCLEVBQUUsS0FBSztJQUNsQyxVQUFVLEVBQUUsSUFBSTtDQUNoQixDQUFDOzs7Ozs7QUFFRixNQUFNLGtCQUFrQixLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCxNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxJQUNkO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyxXQUFXO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDckIsTUFBTSxzQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sSUFDWDtZQUNILE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUM1RDtRQUNILEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQ3JCLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLElBQ1g7WUFDSCxNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxJQUNkO1FBQ0gsS0FBSyxrQkFBa0IsQ0FBQyx1QkFBdUI7WUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2dCQUNyQixNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxJQUNYO1lBQ0gsTUFBTSxzQkFDRixLQUFLLElBQ1IscUJBQXFCLEVBQUUsSUFBSSxJQUMxQjtRQUNILEtBQUssa0JBQWtCLENBQUMsd0JBQXdCO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztnQkFDckIsTUFBTSxzQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sSUFDWDtZQUNILE1BQU0sc0JBQ0YsS0FBSyxJQUNSLElBQUksRUFBRSxTQUFTLEVBQ2YscUJBQXFCLEVBQUUsS0FBSyxJQUMzQjtRQUNILEtBQUssa0JBQWtCLENBQUMsT0FBTztZQUM5QixNQUFNLHNCQUNGLEtBQUssSUFDUixJQUFJLEVBQUUsU0FBUyxFQUNmLFVBQVUsRUFBRSxJQUFJLElBQ2Y7UUFDSCxLQUFLLGtCQUFrQixDQUFDLFNBQVM7WUFDaEMsTUFBTSxzQkFDRixLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sRUFDWixVQUFVLEVBQUUsS0FBSyxJQUNoQjtRQUNIO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0NBQ0Q7QUFFRCxNQUFNLENBQUMscUJBQU0sY0FBYyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb29sYmFyQWN0aW9uVHlwZXMsIFRvb2xiYXJBY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG1vZGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIjtcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGJvb2xlYW47XHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBib29sZWFuO1xyXG5cdHZpc2liaWxpdHk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZSxcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGZhbHNlLFxyXG5cdHZpc2liaWxpdHk6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFRvb2xiYXJBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkNPTVBBQ1Q6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkNPTVBPUlRBQkxFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IHN0YXRlLmVuYWJsZUNvbWZvcnRhYmxlTW9kZSA/IFwiY29tZm9ydGFibGVcIiA6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5TVU1NQVJZOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwic3VtbWFyeVwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5FTkFCTEVfQ09NRk9SVEFCTEVfTU9ERTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRcdFx0XHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLklOVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImhpZGVcIixcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvb2xiYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubW9kZTtcclxuIl19
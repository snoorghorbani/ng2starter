/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as source from "../actions/source.action";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
var ɵ0 = [];
/** @type {?} */
var initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case source.SourceActionTypes.SOURCE_SUBMIT:
            return tslib_1.__assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return tslib_1.__assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return tslib_1.__assign({}, state);
        default:
            return state;
    }
}
/** @type {?} */
export var getSourceListData = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBR25ELDJCQUVDOzs7SUFEQSxxQkFBb0I7O1NBSWQsRUFBRTs7SUFESCxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBb0IsRUFBRSxNQUFzQjtJQUE1QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUMxQyw0QkFDSSxLQUFLLEVBQ1A7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUI7WUFDbEQsNEJBQ0ksS0FBSyxFQUNQO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CO1lBQ2pELDRCQUNJLEtBQUssRUFDUDtRQUVIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNGLENBQUM7O0FBRUQsTUFBTSxLQUFPLGlCQUFpQjs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzb3VyY2UgZnJvbSBcIi4uL2FjdGlvbnMvc291cmNlLmFjdGlvblwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBTb3VyY2VNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBzb3VyY2UuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2Ugc291cmNlLlNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvdXJjZUxpc3REYXRhID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
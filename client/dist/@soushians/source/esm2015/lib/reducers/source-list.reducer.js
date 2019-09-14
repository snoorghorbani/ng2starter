/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as source from "../actions/source.action";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    switch (action.type) {
        case source.SourceActionTypes.SOURCE_SUBMIT:
            return Object.assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return Object.assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return Object.assign({}, state);
        default:
            return state;
    }
}
/** @type {?} */
export const getSourceListData = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFHbkQsMkJBRUM7OztJQURBLHFCQUFvQjs7V0FJZCxFQUFFOztNQURILFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXNCO0lBQ25FLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLHlCQUNJLEtBQUssRUFDUDtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjtZQUNsRCx5QkFDSSxLQUFLLEVBQ1A7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0I7WUFDakQseUJBQ0ksS0FBSyxFQUNQO1FBRUg7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLE9BQU8saUJBQWlCOzs7O0FBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzb3VyY2UgZnJvbSBcIi4uL2FjdGlvbnMvc291cmNlLmFjdGlvblwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBTb3VyY2VNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBzb3VyY2UuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2Ugc291cmNlLlNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvdXJjZUxpc3REYXRhID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
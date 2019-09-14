/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EditDiagramApiModel } from "../models/edit-diagram-api.model";
import { EditDiagramActionTypes } from "../actions/edit-diagram.actions";
console.log(EditDiagramApiModel);
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
const ɵ0 = ({ Result: {} });
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
export function Reducer(state = initialState, action) {
    switch (action.type) {
        case EditDiagramActionTypes.EDIT_DIAGRAM: {
            return Object.assign({}, state, { status: "dirty", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
            return Object.assign({}, state, { status: "pending", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
            return Object.assign({}, state, { status: "succeed" });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export const EditDiagramInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvZWRpdC1kaWFncmFtLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7QUFDakMsMkJBR0M7OztJQUZBLHVCQUE0Qjs7SUFDNUIscUJBQW1DOztXQUk3QixDQUFBLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFnQzs7QUFGckQsTUFBTSxPQUFPLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsdUJBQThDO0NBQ3BEOzs7Ozs7QUFDRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBMEI7SUFDdkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekMseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLEVBQ2YsSUFBSSxFQUFFLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQ3ZDO1NBQ0Y7UUFDRCxLQUFLLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDL0MseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLElBQUksRUFBRSxJQUFJLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUN2QztTQUNGO1FBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2pELHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUNoQjtTQUNGO1FBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hELHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUNmO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7O0FBRUQsTUFBTSxPQUFPLGVBQWU7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEVkaXREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BY3Rpb25UeXBlcywgRWRpdERpYWdyYW1BY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnMvZWRpdC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEVkaXREaWFncmFtQXBpTW9kZWwpO1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiB7IFJlc3VsdDoge30gfSBhcyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEVkaXREaWFncmFtQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBFZGl0RGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
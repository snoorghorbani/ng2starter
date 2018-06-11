/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DiagramsActionTypes } from "../actions";
import { GetDiagramsApiModel } from "../models";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.diagram;
}
export var /** @type {?} */ initialState = {
    loaded: false,
    diagram: new GetDiagramsApiModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function diagramReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DiagramsActionTypes.GET_DIAGRAM: {
            return tslib_1.__assign({}, state, { loaded: true });
        }
        case DiagramsActionTypes.GET_DIAGRAM_START: {
            return tslib_1.__assign({}, state, { loaded: true });
        }
        default: {
            return state;
        }
    }
}
export var /** @type {?} */ DiagramInfo = function (state) { return state.diagram; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9kaWFncmFtcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFrQixNQUFNLFlBQVksQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7Ozs7Ozs7O0FBTWhELE1BQU0sQ0FBQyxxQkFBTSxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7Q0FDM0MsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx5QkFBeUIsS0FBb0IsRUFBRSxNQUFzQjtJQUE1QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUNsRCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFLLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RDLE1BQU0sc0JBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBRVg7U0FDRjtRQUNELEtBQUssbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM1QyxNQUFNLHNCQUNGLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxJQUVYO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEO0FBRUQsTUFBTSxDQUFDLHFCQUFNLFdBQVcsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhZ3JhbXNBY3Rpb25UeXBlcywgRGlhZ3JhbXNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiBuZXcgR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZSgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZ3JhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGlhZ3JhbXNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyAgZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtO1xyXG4iXX0=
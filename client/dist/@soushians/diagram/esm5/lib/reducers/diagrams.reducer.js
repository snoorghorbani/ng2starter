/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";
import { DiagramsActionTypes } from "../actions/diagrams.actions";
console.log(GetDiagramsApiModel);
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.loaded;
/** @type {?} */
State.prototype.diagram;
/** @type {?} */
export var initialState = {
    loaded: false,
    diagram: {
        Result: []
    }
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
/** @type {?} */
export var DiagramInfo = function (state) { return state.diagram; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9kaWFncmFtcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQU1qQyxXQUFhLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRTtRQUNSLE1BQU0sRUFBRSxFQUFFO0tBQ1Y7Q0FDRCxDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDbEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBRVg7U0FDRjtRQUNELEtBQUssbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzQyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFFWDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7Q0FDRDs7QUFFRCxXQUFhLFdBQVcsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBEaWFncmFtc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdldERpYWdyYW1zQXBpTW9kZWwpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiB7XHJcblx0XHRSZXN1bHQ6IFtdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERpYWdyYW1zQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export const initialState = {
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
export function diagramReducer(state = initialState, action) {
    switch (action.type) {
        case DiagramsActionTypes.GET_DIAGRAM: {
            return Object.assign({}, state, { loaded: true });
        }
        case DiagramsActionTypes.GET_DIAGRAM_START: {
            return Object.assign({}, state, { loaded: true });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export const DiagramInfo = (state) => state.diagram;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9kaWFncmFtcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFFbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FBTWpDLGFBQWEsWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFO1FBQ1IsTUFBTSxFQUFFLEVBQUU7S0FDVjtDQUNELENBQUM7Ozs7OztBQUVGLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUMxRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFFWDtTQUNGO1FBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxJQUVYO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOztBQUVELGFBQWEsV0FBVyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBEaWFncmFtc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdldERpYWdyYW1zQXBpTW9kZWwpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiB7XHJcblx0XHRSZXN1bHQ6IFtdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERpYWdyYW1zQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";
import { DiagramsActionTypes } from "../actions/diagrams.actions";
console.log(GetDiagramsApiModel);
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.diagram;
}
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
export const DiagramInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.diagram);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9kaWFncmFtcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFFbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOzs7O0FBRWpDLDJCQUdDOzs7SUFGQSx1QkFBZ0I7O0lBQ2hCLHdCQUFzQzs7O0FBRXZDLE1BQU0sT0FBTyxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtLQUNWO0NBQ0Q7Ozs7OztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUMxRSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFFWDtTQUNGO1FBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNDLHlCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsSUFBSSxJQUVYO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtBQUNGLENBQUM7O0FBRUQsTUFBTSxPQUFPLFdBQVc7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNBY3Rpb25UeXBlcywgRGlhZ3JhbXNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhHZXREaWFncmFtc0FwaU1vZGVsKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkaWFncmFtOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGlhZ3JhbToge1xyXG5cdFx0UmVzdWx0OiBbXVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWFncmFtUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBEaWFncmFtc0FjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU06IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyBkaWFncmFtOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vICBkaWFncmFtOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaWFncmFtSW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpYWdyYW07XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export var DiagramInfo = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.diagram; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ3JhbXMucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9kaWFncmFtcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7OztBQUVqQywyQkFHQzs7O0lBRkEsdUJBQWdCOztJQUNoQix3QkFBc0M7OztBQUV2QyxNQUFNLEtBQU8sWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFO1FBQ1IsTUFBTSxFQUFFLEVBQUU7S0FDVjtDQUNEOzs7Ozs7QUFFRCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFDbEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBRVg7U0FDRjtRQUNELEtBQUssbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzQyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFFWDtTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLEtBQUssQ0FBQztTQUNiO0tBQ0Q7QUFDRixDQUFDOztBQUVELE1BQU0sS0FBTyxXQUFXOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNBY3Rpb25UeXBlcywgRGlhZ3JhbXNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhHZXREaWFncmFtc0FwaU1vZGVsKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkaWFncmFtOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGlhZ3JhbToge1xyXG5cdFx0UmVzdWx0OiBbXVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWFncmFtUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBEaWFncmFtc0FjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU06IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyBkaWFncmFtOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vICBkaWFncmFtOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaWFncmFtSW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpYWdyYW07XHJcbiJdfQ==
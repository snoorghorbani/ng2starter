/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { AddDiagramActionTypes } from "../actions/add-diagram.actions";
console.log(AddDiagramApiModel);
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.status;
/** @type {?} */
State.prototype.data;
/** @type {?} */
export var initialState = {
    status: "pristine",
    data: { Result: {} }
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function addDiagramReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AddDiagramActionTypes.ADD_DIAGRAM: {
            return tslib_1.__assign({}, state, { status: "dirty", data: new AddDiagramApiModel.Request() });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_START: {
            return tslib_1.__assign({}, state, { status: "pending", data: new AddDiagramApiModel.Request() });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED: {
            return tslib_1.__assign({}, state, { status: "succeed" });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_FAILED: {
            return tslib_1.__assign({}, state, { status: "failed" });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
export var AddDiagramInfo = function (state) { return state.data; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9hZGQtZGlhZ3JhbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFxQixxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQUtoQyxXQUFhLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0NBQ3BCLENBQUM7Ozs7OztBQUNGLE1BQU0sNEJBQTRCLEtBQW9CLEVBQUUsTUFBeUI7SUFBL0Msc0JBQUEsRUFBQSxvQkFBb0I7SUFDckQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUsscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLEVBQ2YsSUFBSSxFQUFFLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQ3JDO1NBQ0Y7UUFDRCxLQUFLLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0MsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLElBQUksRUFBRSxJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxJQUNyQztTQUNGO1FBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9DLDRCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUVoQjtTQUNGO1FBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlDLDRCQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUVmO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEOztBQUVELFdBQWEsY0FBYyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQWN0aW9ucywgQWRkRGlhZ3JhbUFjdGlvblR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvYWRkLWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coQWRkRGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IGFueTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiB7IFJlc3VsdDoge30gfVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlhZ3JhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWRkRGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU06IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHRcdC8vIGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlhc2RmYXNkZmxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
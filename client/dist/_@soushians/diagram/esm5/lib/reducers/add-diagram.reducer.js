/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { AddDiagramActionTypes } from "../actions/add-diagram.actions";
console.log(AddDiagramApiModel);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9hZGQtZGlhZ3JhbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFxQixxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7OztBQUNoQywyQkFHQzs7O0lBRkEsdUJBQTRCOztJQUM1QixxQkFBVTs7O0FBRVgsTUFBTSxLQUFPLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0NBQ3BCOzs7Ozs7QUFDRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBb0IsRUFBRSxNQUF5QjtJQUEvQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUNyRCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2Qyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFDckM7U0FDRjtRQUNELEtBQUsscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3Qyw0QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsRUFDakIsSUFBSSxFQUFFLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQ3JDO1NBQ0Y7UUFDRCxLQUFLLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDL0MsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLElBRWhCO1NBQ0Y7UUFDRCxLQUFLLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUMsNEJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBRWY7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sY0FBYyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFjdGlvbnMsIEFkZERpYWdyYW1BY3Rpb25UeXBlcyB9IGZyb20gXCIuLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEFkZERpYWdyYW1BcGlNb2RlbCk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH1cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFkZERpYWdyYW1BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0XHQvLyBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHRcdC8vICBkaWFncmFtOiBhY3Rpb24ucGF5YXNkZmFzZGZsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
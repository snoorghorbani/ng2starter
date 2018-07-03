/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AddDiagramActionTypes } from "../actions";
import { AddDiagramApiModel } from "../models";
console.log(AddDiagramApiModel);
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.status;
    /** @type {?} */
    State.prototype.data;
}
export const /** @type {?} */ initialState = {
    status: "pristine",
    data: { Result: {} }
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function addDiagramReducer(state = initialState, action) {
    switch (action.type) {
        case AddDiagramActionTypes.ADD_DIAGRAM: {
            return Object.assign({}, state, { status: "dirty", data: new AddDiagramApiModel.Request() });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_START: {
            return Object.assign({}, state, { status: "pending", data: new AddDiagramApiModel.Request() });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED: {
            return Object.assign({}, state, { status: "succeed" });
        }
        case AddDiagramActionTypes.ADD_DIAGRAM_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        default: {
            return state;
        }
    }
}
export const /** @type {?} */ AddDiagramInfo = (state) => state.data;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9hZGQtZGlhZ3JhbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sWUFBWSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FBS2hDLE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtDQUNwQixDQUFDOzs7Ozs7QUFDRixNQUFNLDRCQUE0QixLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXlCO0lBQ2hGLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUsscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsTUFBTSxtQkFDRixLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFDckM7U0FDRjtRQUNELEtBQUsscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM5QyxNQUFNLG1CQUNGLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxFQUNqQixJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFDckM7U0FDRjtRQUNELEtBQUsscUJBQXFCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNoRCxNQUFNLG1CQUNGLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUVoQjtTQUNGO1FBQ0QsS0FBSyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9DLE1BQU0sbUJBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBRWY7U0FDRjtRQUVELFNBQVMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7QUFFRCxNQUFNLENBQUMsdUJBQU0sY0FBYyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLCBBZGREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEFkZERpYWdyYW1BcGlNb2RlbCk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBhbnk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH1cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFkZERpYWdyYW1BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0XHQvLyBkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHRcdC8vICBkaWFncmFtOiBhY3Rpb24ucGF5YXNkZmFzZGZsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFkZERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
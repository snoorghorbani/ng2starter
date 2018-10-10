/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EditDiagramApiModel } from "../models/edit-diagram-api.model";
import { EditDiagramActionTypes } from "../actions/edit-diagram.actions";
console.log(EditDiagramApiModel);
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.status;
/** @type {?} */
State.prototype.data;
/** @type {?} */
export const initialState = {
    status: "pristine",
    data: /** @type {?} */ ({ Result: {} })
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
export const EditDiagramInfo = (state) => state.data;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kaWFncmFtLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvcmVkdWNlcnMvZWRpdC1kaWFncmFtLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBc0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUFLakMsYUFBYSxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxvQkFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQWtDLENBQUE7Q0FDcEQsQ0FBQzs7Ozs7O0FBQ0YsTUFBTSxrQkFBa0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUEwQjtJQUN2RSxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6Qyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixJQUFJLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFDdkM7U0FDRjtRQUNELEtBQUssc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMvQyx5QkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsRUFDakIsSUFBSSxFQUFFLElBQUksbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQ3ZDO1NBQ0Y7UUFDRCxLQUFLLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDakQseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLElBQ2hCO1NBQ0Y7UUFDRCxLQUFLLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDaEQseUJBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBQ2Y7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDYjtLQUNEO0NBQ0Q7O0FBRUQsYUFBYSxlQUFlLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uVHlwZXMsIEVkaXREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhFZGl0RGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH0gYXMgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0RGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIl19
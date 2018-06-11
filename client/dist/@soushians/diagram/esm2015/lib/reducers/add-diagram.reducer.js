/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { AddDiagramActionTypes } from "../actions";
import { AddDiagramApiModel } from "../models";
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
    data: new AddDiagramApiModel.Request()
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWRpYWdyYW0ucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9hZGQtZGlhZ3JhbS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sWUFBWSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7QUFNL0MsTUFBTSxDQUFDLHVCQUFNLFlBQVksR0FBVTtJQUNsQyxNQUFNLEVBQUUsVUFBVTtJQUNsQixJQUFJLEVBQUUsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Q0FDdEMsQ0FBQzs7Ozs7O0FBRUYsTUFBTSw0QkFBNEIsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUF5QjtJQUNoRixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFLLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3hDLE1BQU0sbUJBQ0YsS0FBSyxJQUNSLE1BQU0sRUFBRSxPQUFPLEVBQ2YsSUFBSSxFQUFFLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQ3JDO1NBQ0Y7UUFDRCxLQUFLLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUMsTUFBTSxtQkFDRixLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsRUFDakIsSUFBSSxFQUFFLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQ3JDO1NBQ0Y7UUFDRCxLQUFLLHFCQUFxQixDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDaEQsTUFBTSxtQkFDRixLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFFaEI7U0FDRjtRQUNELEtBQUsscUJBQXFCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvQyxNQUFNLG1CQUNGLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUVmO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7S0FDRDtDQUNEO0FBRUQsTUFBTSxDQUFDLHVCQUFNLGNBQWMsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BY3Rpb25UeXBlcywgQWRkRGlhZ3JhbUFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3Q7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREaWFncmFtUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBZGREaWFncmFtQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdFx0Ly8gZGF0YTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0XHQvLyAgZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iXX0=
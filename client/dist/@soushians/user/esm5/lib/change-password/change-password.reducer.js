/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangePasswordActionTypes } from "./change-password.actions";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.status;
}
/** @type {?} */
export var initialState = {
    status: "pristine"
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ChangePasswordActionTypes.CHANGE_PASSWORD: {
            return {
                status: "dirty"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_START: {
            return {
                status: "pending"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED: {
            return {
                status: "succeed"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED: {
            return {
                status: "failed"
            };
        }
        default: {
            return initialState;
        }
    }
}
/** @type {?} */
export var getStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXdCLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFNUYsMkJBRUM7OztJQURBLHVCQUE0Qjs7O0FBRTdCLE1BQU0sS0FBTyxZQUFZLEdBQVU7SUFDbEMsTUFBTSxFQUFFLFVBQVU7Q0FDbEI7Ozs7OztBQUNELE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBb0IsRUFBRSxNQUE0QjtJQUFsRCxzQkFBQSxFQUFBLG9CQUFvQjtJQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQyxPQUFPO2dCQUNOLE1BQU0sRUFBRSxPQUFPO2FBQ2YsQ0FBQztTQUNGO1FBQ0QsS0FBSyx5QkFBeUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3RELE9BQU87Z0JBQ04sTUFBTSxFQUFFLFNBQVM7YUFDakIsQ0FBQztTQUNGO1FBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3hELE9BQU87Z0JBQ04sTUFBTSxFQUFFLFNBQVM7YUFDakIsQ0FBQztTQUNGO1FBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZELE9BQU87Z0JBQ04sTUFBTSxFQUFFLFFBQVE7YUFDaEIsQ0FBQztTQUNGO1FBRUQsT0FBTyxDQUFDLENBQUM7WUFDUixPQUFPLFlBQVksQ0FBQztTQUNwQjtLQUNEO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQUssU0FBUzs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iXX0=
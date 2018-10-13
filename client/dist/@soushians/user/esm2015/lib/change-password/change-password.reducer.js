/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangePasswordActionTypes } from "./change-password.actions";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.status;
}
export const /** @type {?} */ initialState = {
    status: "pristine"
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
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
export var /** @type {?} */ getStatus = (state) => state.status;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXdCLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUs1RixNQUFNLENBQUMsdUJBQU0sWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0NBQ2xCLENBQUM7Ozs7OztBQUNGLE1BQU0sa0JBQWtCLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBNEI7SUFDekUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoRCxNQUFNLENBQUM7Z0JBQ04sTUFBTSxFQUFFLE9BQU87YUFDZixDQUFDO1NBQ0Y7UUFDRCxLQUFLLHlCQUF5QixDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDO2dCQUNOLE1BQU0sRUFBRSxTQUFTO2FBQ2pCLENBQUM7U0FDRjtRQUNELEtBQUsseUJBQXlCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUM7Z0JBQ04sTUFBTSxFQUFFLFNBQVM7YUFDakIsQ0FBQztTQUNGO1FBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3hELE1BQU0sQ0FBQztnQkFDTixNQUFNLEVBQUUsUUFBUTthQUNoQixDQUFDO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3BCO0tBQ0Q7Q0FDRDtBQUVELE1BQU0sQ0FBQyxxQkFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iXX0=
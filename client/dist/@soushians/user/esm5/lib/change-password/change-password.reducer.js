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
export var /** @type {?} */ initialState = {
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
export var /** @type {?} */ getStatus = function (state) { return state.status; };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXdCLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUs1RixNQUFNLENBQUMscUJBQU0sWUFBWSxHQUFVO0lBQ2xDLE1BQU0sRUFBRSxVQUFVO0NBQ2xCLENBQUM7Ozs7OztBQUNGLE1BQU0sa0JBQWtCLEtBQW9CLEVBQUUsTUFBNEI7SUFBbEQsc0JBQUEsRUFBQSxvQkFBb0I7SUFDM0MsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNoRCxNQUFNLENBQUM7Z0JBQ04sTUFBTSxFQUFFLE9BQU87YUFDZixDQUFDO1NBQ0Y7UUFDRCxLQUFLLHlCQUF5QixDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDO2dCQUNOLE1BQU0sRUFBRSxTQUFTO2FBQ2pCLENBQUM7U0FDRjtRQUNELEtBQUsseUJBQXlCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUM7Z0JBQ04sTUFBTSxFQUFFLFNBQVM7YUFDakIsQ0FBQztTQUNGO1FBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQ3hELE1BQU0sQ0FBQztnQkFDTixNQUFNLEVBQUUsUUFBUTthQUNoQixDQUFDO1NBQ0Y7UUFFRCxTQUFTLENBQUM7WUFDVCxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQ3BCO0tBQ0Q7Q0FDRDtBQUVELE1BQU0sQ0FBQyxxQkFBSSxTQUFTLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRBY3Rpb24sIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IENoYW5nZVBhc3N3b3JkQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiJdfQ==
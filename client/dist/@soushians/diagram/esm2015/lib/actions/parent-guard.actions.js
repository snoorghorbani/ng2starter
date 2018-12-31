/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ParentGuardActionTypes = {
    "ASK_FROM_PARENT_GUARD": "[USER][GUARD] ASK_FROM_PARENT_GUARD",
    "PARENT_GUARD_APPROVED": "[USER][GUARD] PARENT_GUARD_APPROVED",
    "PARENT_GUARD_REJECTED": "[USER][GUARD] PARENT_GUARD_REJECTED",
};
export { ParentGuardActionTypes };
export class AskFromParentGuardAction {
    constructor() {
        this.type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
    }
}
if (false) {
    /** @type {?} */
    AskFromParentGuardAction.prototype.type;
}
export class ParentGuardApprovedAction {
    constructor() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
    }
}
if (false) {
    /** @type {?} */
    ParentGuardApprovedAction.prototype.type;
}
export class ParentGuardRejectedAction {
    constructor() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
    }
}
if (false) {
    /** @type {?} */
    ParentGuardRejectedAction.prototype.type;
}
/** @typedef {?} */
var ParentGuardAction;
export { ParentGuardAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWd1YXJkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9wYXJlbnQtZ3VhcmQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyx5QkFBMEIscUNBQXFDO0lBQy9ELHlCQUEwQixxQ0FBcUM7SUFDL0QseUJBQTBCLHFDQUFxQzs7O0FBR2hFLE1BQU0sT0FBTyx3QkFBd0I7O1FBQ3BDLFlBQWdCLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDOztDQUU3RDs7Ozs7QUFDRCxNQUFNLE9BQU8seUJBQXlCOztRQUNyQyxZQUFnQixzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQzs7Q0FDN0Q7Ozs7O0FBQ0QsTUFBTSxPQUFPLHlCQUF5Qjs7UUFDckMsWUFBZ0Isc0JBQXNCLENBQUMscUJBQXFCLENBQUM7O0NBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBQYXJlbnRHdWFyZEFjdGlvblR5cGVzIHtcclxuXHRcIkFTS19GUk9NX1BBUkVOVF9HVUFSRFwiID0gXCJbVVNFUl1bR1VBUkRdIEFTS19GUk9NX1BBUkVOVF9HVUFSRFwiLFxyXG5cdFwiUEFSRU5UX0dVQVJEX0FQUFJPVkVEXCIgPSBcIltVU0VSXVtHVUFSRF0gUEFSRU5UX0dVQVJEX0FQUFJPVkVEXCIsXHJcblx0XCJQQVJFTlRfR1VBUkRfUkVKRUNURURcIiA9IFwiW1VTRVJdW0dVQVJEXSBQQVJFTlRfR1VBUkRfUkVKRUNURURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXNrRnJvbVBhcmVudEd1YXJkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFyZW50R3VhcmRBY3Rpb25UeXBlcy5BU0tfRlJPTV9QQVJFTlRfR1VBUkQ7XHJcblx0Ly8gY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTGlua1JlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJlbnRHdWFyZEFwcHJvdmVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUGFyZW50R3VhcmRBY3Rpb25UeXBlcy5QQVJFTlRfR1VBUkRfQVBQUk9WRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhcmVudEd1YXJkUmVqZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYXJlbnRHdWFyZEFjdGlvblR5cGVzLlBBUkVOVF9HVUFSRF9SRUpFQ1RFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGFyZW50R3VhcmRBY3Rpb24gPSBBc2tGcm9tUGFyZW50R3VhcmRBY3Rpb24gfCBQYXJlbnRHdWFyZEFwcHJvdmVkQWN0aW9uIHwgUGFyZW50R3VhcmRSZWplY3RlZEFjdGlvbjtcclxuIl19
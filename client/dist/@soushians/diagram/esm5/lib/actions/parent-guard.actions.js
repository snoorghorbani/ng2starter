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
var AskFromParentGuardAction = /** @class */ (function () {
    function AskFromParentGuardAction() {
        this.type = ParentGuardActionTypes.ASK_FROM_PARENT_GUARD;
    }
    return AskFromParentGuardAction;
}());
export { AskFromParentGuardAction };
if (false) {
    /** @type {?} */
    AskFromParentGuardAction.prototype.type;
}
var ParentGuardApprovedAction = /** @class */ (function () {
    function ParentGuardApprovedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_APPROVED;
    }
    return ParentGuardApprovedAction;
}());
export { ParentGuardApprovedAction };
if (false) {
    /** @type {?} */
    ParentGuardApprovedAction.prototype.type;
}
var ParentGuardRejectedAction = /** @class */ (function () {
    function ParentGuardRejectedAction() {
        this.type = ParentGuardActionTypes.PARENT_GUARD_REJECTED;
    }
    return ParentGuardRejectedAction;
}());
export { ParentGuardRejectedAction };
if (false) {
    /** @type {?} */
    ParentGuardRejectedAction.prototype.type;
}
/** @typedef {?} */
var ParentGuardAction;
export { ParentGuardAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LWd1YXJkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9wYXJlbnQtZ3VhcmQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyx5QkFBMEIscUNBQXFDO0lBQy9ELHlCQUEwQixxQ0FBcUM7SUFDL0QseUJBQTBCLHFDQUFxQzs7O0FBR2hFLElBQUE7O1FBQ0MsWUFBZ0Isc0JBQXNCLENBQUMscUJBQXFCLENBQUM7O21DQVQ5RDtJQVdDLENBQUE7QUFIRCxvQ0FHQzs7Ozs7QUFDRCxJQUFBOztRQUNDLFlBQWdCLHNCQUFzQixDQUFDLHFCQUFxQixDQUFDOztvQ0FiOUQ7SUFjQyxDQUFBO0FBRkQscUNBRUM7Ozs7O0FBQ0QsSUFBQTs7UUFDQyxZQUFnQixzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQzs7b0NBaEI5RDtJQWlCQyxDQUFBO0FBRkQscUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBhcmVudEd1YXJkQWN0aW9uVHlwZXMge1xyXG5cdFwiQVNLX0ZST01fUEFSRU5UX0dVQVJEXCIgPSBcIltVU0VSXVtHVUFSRF0gQVNLX0ZST01fUEFSRU5UX0dVQVJEXCIsXHJcblx0XCJQQVJFTlRfR1VBUkRfQVBQUk9WRURcIiA9IFwiW1VTRVJdW0dVQVJEXSBQQVJFTlRfR1VBUkRfQVBQUk9WRURcIixcclxuXHRcIlBBUkVOVF9HVUFSRF9SRUpFQ1RFRFwiID0gXCJbVVNFUl1bR1VBUkRdIFBBUkVOVF9HVUFSRF9SRUpFQ1RFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBc2tGcm9tUGFyZW50R3VhcmRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYXJlbnRHdWFyZEFjdGlvblR5cGVzLkFTS19GUk9NX1BBUkVOVF9HVUFSRDtcclxuXHQvLyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRMaW5rUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhcmVudEd1YXJkQXBwcm92ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQYXJlbnRHdWFyZEFjdGlvblR5cGVzLlBBUkVOVF9HVUFSRF9BUFBST1ZFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFyZW50R3VhcmRSZWplY3RlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFBhcmVudEd1YXJkQWN0aW9uVHlwZXMuUEFSRU5UX0dVQVJEX1JFSkVDVEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQYXJlbnRHdWFyZEFjdGlvbiA9IEFza0Zyb21QYXJlbnRHdWFyZEFjdGlvbiB8IFBhcmVudEd1YXJkQXBwcm92ZWRBY3Rpb24gfCBQYXJlbnRHdWFyZFJlamVjdGVkQWN0aW9uO1xyXG4iXX0=
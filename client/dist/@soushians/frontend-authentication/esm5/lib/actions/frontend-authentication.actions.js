/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FrontendAuthenticationActionTypes = {
    PROGRESSING_STARTED: "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED",
    PROGRESSING_FINISHED: "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED",
    FAILED_HAPPENED: "[FRONTEND_AUTHENTICATION] FAILED_HAPPENED",
};
export { FrontendAuthenticationActionTypes };
var ProgressingStarted = /** @class */ (function () {
    function ProgressingStarted() {
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
    return ProgressingStarted;
}());
export { ProgressingStarted };
function ProgressingStarted_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressingStarted.prototype.type;
}
var ProgressingFinished = /** @class */ (function () {
    function ProgressingFinished() {
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
    return ProgressingFinished;
}());
export { ProgressingFinished };
function ProgressingFinished_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressingFinished.prototype.type;
}
var FailedHappened = /** @class */ (function () {
    function FailedHappened(payload) {
        this.payload = payload;
        this.type = "[FRONTEND_AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
    return FailedHappened;
}());
export { FailedHappened };
function FailedHappened_tsickle_Closure_declarations() {
    /** @type {?} */
    FailedHappened.prototype.type;
    /** @type {?} */
    FailedHappened.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozt5QkFHdUIsK0NBQStDOzBCQUM5QyxnREFBZ0Q7cUJBQ3JELDJDQUEyQzs7O0FBRzlELElBQUE7Ozs7NkJBUkE7SUFVQyxDQUFBO0FBRkQsOEJBRUM7Ozs7O0FBQ0QsSUFBQTs7Ozs4QkFYQTtJQWFDLENBQUE7QUFGRCwrQkFFQzs7Ozs7QUFDRCxJQUFBO0lBRUMsd0JBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO3lCQWhCcEM7SUFpQkMsQ0FBQTtBQUhELDBCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMge1xyXG5cdFBST0dSRVNTSU5HX1NUQVJURUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfU1RBUlRFRFwiLFxyXG5cdFBST0dSRVNTSU5HX0ZJTklTSEVEID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX0ZJTklTSEVEXCIsXHJcblx0RkFJTEVEX0hBUFBFTkVEID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIEZBSUxFRF9IQVBQRU5FRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ1N0YXJ0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfU1RBUlRFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdGaW5pc2hlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19GSU5JU0hFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRmFpbGVkSGFwcGVuZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuRkFJTEVEX0hBUFBFTkVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb24gPSBQcm9ncmVzc2luZ1N0YXJ0ZWQgfCBQcm9ncmVzc2luZ0ZpbmlzaGVkIHwgRmFpbGVkSGFwcGVuZWQ7XHJcbiJdfQ==
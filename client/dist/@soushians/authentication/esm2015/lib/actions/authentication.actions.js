/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var AuthenticationActionTypes = {
    PROGRESSING_STARTED: '[AUTHENTICATION] PROGRESSING_STARTED',
    PROGRESSING_FINISHED: '[AUTHENTICATION] PROGRESSING_FINISHED',
    FAILED_HAPPENED: '[AUTHENTICATION] FAILED_HAPPENED',
};
export { AuthenticationActionTypes };
export class ProgressingStarted {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
}
if (false) {
    /** @type {?} */
    ProgressingStarted.prototype.type;
}
export class ProgressingFinished {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
}
if (false) {
    /** @type {?} */
    ProgressingFinished.prototype.type;
}
export class FailedHappened {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
}
if (false) {
    /** @type {?} */
    FailedHappened.prototype.type;
    /** @type {?} */
    FailedHappened.prototype.payload;
}
/** @typedef {?} */
var AuthenticationAction;
export { AuthenticationAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9hdXRoZW50aWNhdGlvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdDLHFCQUFzQixzQ0FBc0M7SUFDNUQsc0JBQXVCLHVDQUF1QztJQUM5RCxpQkFBa0Isa0NBQWtDOzs7QUFHckQsTUFBTSxPQUFPLGtCQUFrQjs7UUFDOUIsNkVBQThEOztDQUM5RDs7Ozs7QUFDRCxNQUFNLE9BQU8sbUJBQW1COztRQUMvQiwrRUFBK0Q7O0NBQy9EOzs7OztBQUNELE1BQU0sT0FBTyxjQUFjOzs7O0lBRTFCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLHFFQUEwRDtLQUN2QjtDQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMge1xyXG5cdFBST0dSRVNTSU5HX1NUQVJURUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19TVEFSVEVEJyxcclxuXHRQUk9HUkVTU0lOR19GSU5JU0hFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX0ZJTklTSEVEJyxcclxuXHRGQUlMRURfSEFQUEVORUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBGQUlMRURfSEFQUEVORUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ1N0YXJ0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX1NUQVJURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nRmluaXNoZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX0ZJTklTSEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRIYXBwZW5lZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuRkFJTEVEX0hBUFBFTkVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uQWN0aW9uID0gUHJvZ3Jlc3NpbmdTdGFydGVkIHwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB8IEZhaWxlZEhhcHBlbmVkO1xyXG4iXX0=
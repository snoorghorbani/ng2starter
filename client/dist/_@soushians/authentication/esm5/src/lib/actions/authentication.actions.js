/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var AuthenticationActionTypes = {
    PROGRESSING_STARTED: '[AUTHENTICATION] PROGRESSING_STARTED',
    PROGRESSING_FINISHED: '[AUTHENTICATION] PROGRESSING_FINISHED',
    FAILED_HAPPENED: '[AUTHENTICATION] FAILED_HAPPENED',
};
export { AuthenticationActionTypes };
var ProgressingStarted = /** @class */ (function () {
    function ProgressingStarted() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
    return ProgressingStarted;
}());
export { ProgressingStarted };
if (false) {
    /** @type {?} */
    ProgressingStarted.prototype.type;
}
var ProgressingFinished = /** @class */ (function () {
    function ProgressingFinished() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
    return ProgressingFinished;
}());
export { ProgressingFinished };
if (false) {
    /** @type {?} */
    ProgressingFinished.prototype.type;
}
var FailedHappened = /** @class */ (function () {
    function FailedHappened(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
    return FailedHappened;
}());
export { FailedHappened };
if (false) {
    /** @type {?} */
    FailedHappened.prototype.type;
    /** @type {?} */
    FailedHappened.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJzcmMvbGliL2FjdGlvbnMvYXV0aGVudGljYXRpb24uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHQyxxQkFBc0Isc0NBQXNDO0lBQzVELHNCQUF1Qix1Q0FBdUM7SUFDOUQsaUJBQWtCLGtDQUFrQzs7O0FBR3JEO0lBQUE7UUFDVSxTQUFJLG9FQUFpRDtJQUMvRCxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURBLGtDQUE4RDs7QUFFL0Q7SUFBQTtRQUNVLFNBQUksc0VBQWtEO0lBQ2hFLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREEsbUNBQStEOztBQUVoRTtJQUVDLHdCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLDREQUE2QztJQUN4QixDQUFDO0lBQ3BDLHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSw4QkFBMEQ7O0lBQzlDLGlDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMge1xyXG5cdFBST0dSRVNTSU5HX1NUQVJURUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19TVEFSVEVEJyxcclxuXHRQUk9HUkVTU0lOR19GSU5JU0hFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX0ZJTklTSEVEJyxcclxuXHRGQUlMRURfSEFQUEVORUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBGQUlMRURfSEFQUEVORUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ1N0YXJ0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX1NUQVJURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nRmluaXNoZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX0ZJTklTSEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRIYXBwZW5lZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuRkFJTEVEX0hBUFBFTkVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uQWN0aW9uID0gUHJvZ3Jlc3NpbmdTdGFydGVkIHwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB8IEZhaWxlZEhhcHBlbmVkO1xyXG4iXX0=
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
/** @typedef {?} */
var AuthenticationAction;
export { AuthenticationAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9hdXRoZW50aWNhdGlvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdDLHFCQUFzQixzQ0FBc0M7SUFDNUQsc0JBQXVCLHVDQUF1QztJQUM5RCxpQkFBa0Isa0NBQWtDOzs7QUFHckQsSUFBQTs7UUFDQyw2RUFBOEQ7OzZCQVQvRDtJQVVDLENBQUE7QUFGRCw4QkFFQzs7Ozs7QUFDRCxJQUFBOztRQUNDLCtFQUErRDs7OEJBWmhFO0lBYUMsQ0FBQTtBQUZELCtCQUVDOzs7OztBQUNELElBQUE7SUFFQyx3QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEL0IscUVBQTBEO0tBQ3ZCO3lCQWhCcEM7SUFpQkMsQ0FBQTtBQUhELDBCQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX1NUQVJURUQnLFxyXG5cdFBST0dSRVNTSU5HX0ZJTklTSEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRUQnLFxyXG5cdEZBSUxFRF9IQVBQRU5FRCA9ICdbQVVUSEVOVElDQVRJT05dIEZBSUxFRF9IQVBQRU5FRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfU1RBUlRFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdGaW5pc2hlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfRklOSVNIRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZhaWxlZEhhcHBlbmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25BY3Rpb24gPSBQcm9ncmVzc2luZ1N0YXJ0ZWQgfCBQcm9ncmVzc2luZ0ZpbmlzaGVkIHwgRmFpbGVkSGFwcGVuZWQ7XHJcbiJdfQ==
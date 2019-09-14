/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AuthenticationActionTypes = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vIiwic291cmNlcyI6WyJsaWIvYWN0aW9ucy9hdXRoZW50aWNhdGlvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdDLHFCQUFzQixzQ0FBc0M7SUFDNUQsc0JBQXVCLHVDQUF1QztJQUM5RCxpQkFBa0Isa0NBQWtDOzs7QUFHckQsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNVLFNBQUksb0VBQWlEO0lBQy9ELENBQUM7Q0FBQTs7O0lBREEsa0NBQThEOztBQUUvRCxNQUFNLE9BQU8sbUJBQW1CO0lBQWhDO1FBQ1UsU0FBSSxzRUFBa0Q7SUFDaEUsQ0FBQztDQUFBOzs7SUFEQSxtQ0FBK0Q7O0FBRWhFLE1BQU0sT0FBTyxjQUFjOzs7O0lBRTFCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksNERBQTZDO0lBQ3hCLENBQUM7Q0FDbkM7OztJQUZBLDhCQUEwRDs7SUFDOUMsaUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX1NUQVJURUQnLFxyXG5cdFBST0dSRVNTSU5HX0ZJTklTSEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRUQnLFxyXG5cdEZBSUxFRF9IQVBQRU5FRCA9ICdbQVVUSEVOVElDQVRJT05dIEZBSUxFRF9IQVBQRU5FRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfU1RBUlRFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdGaW5pc2hlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfRklOSVNIRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZhaWxlZEhhcHBlbmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25BY3Rpb24gPSBQcm9ncmVzc2luZ1N0YXJ0ZWQgfCBQcm9ncmVzc2luZ0ZpbmlzaGVkIHwgRmFpbGVkSGFwcGVuZWQ7XHJcbiJdfQ==
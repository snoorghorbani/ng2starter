/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function ProgressingStarted_tsickle_Closure_declarations() {
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
function ProgressingFinished_tsickle_Closure_declarations() {
    /** @type {?} */
    ProgressingFinished.prototype.type;
}
var FailedHappened = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function FailedHappened(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
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
//# sourceMappingURL=authentication.actions.js.map

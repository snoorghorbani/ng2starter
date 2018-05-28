/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
export { SourceActionTypes };
var SourceSubmit = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function SourceSubmit(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
    return SourceSubmit;
}());
export { SourceSubmit };
function SourceSubmit_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmit.prototype.type;
    /** @type {?} */
    SourceSubmit.prototype.payload;
}
var SourceSubmitSucceed = /** @class */ (function () {
    function SourceSubmitSucceed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
    return SourceSubmitSucceed;
}());
export { SourceSubmitSucceed };
function SourceSubmitSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmitSucceed.prototype.type;
}
var SourceSubmitFailed = /** @class */ (function () {
    function SourceSubmitFailed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
    return SourceSubmitFailed;
}());
export { SourceSubmitFailed };
function SourceSubmitFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}
//# sourceMappingURL=source.action.js.map

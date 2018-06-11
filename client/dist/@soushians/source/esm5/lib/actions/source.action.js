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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7bUJBSWlCLHdCQUF3QjsyQkFDaEIsZ0NBQWdDOzBCQUNqQywrQkFBK0I7OztBQUd2RCxJQUFBO0lBRUMsc0JBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4QyxpQkFBaUIsQ0FBQyxhQUFhO0tBQ2E7dUJBWDdEO0lBWUMsQ0FBQTtBQUhELHdCQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLHFCQUFxQjs7OEJBZHhEO0lBZUMsQ0FBQTtBQUZELCtCQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxvQkFBb0I7OzZCQWpCdkQ7SUFrQkMsQ0FBQTtBQUZELDhCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNvdXJjZUFjdGlvblR5cGVzIHtcclxuXHRTT1VSQ0VfU1VCTUlUID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0XCIsXHJcblx0U09VUkNFX1NVQk1JVF9TVUNDRUVEID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0IHN1Y2NlZWRcIixcclxuXHRTT1VSQ0VfU1VCTUlUX0ZBSUxFRCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdCBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0U3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IFNvdXJjZVN1Ym1pdCB8IFNvdXJjZVN1Ym1pdFN1Y2NlZWQgfCBTb3VyY2VTdWJtaXRGYWlsZWQ7XHJcbiJdfQ==
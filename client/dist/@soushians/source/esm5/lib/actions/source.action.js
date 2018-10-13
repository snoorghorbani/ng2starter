/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}
/** @typedef {?} */
var Actions;
export { Actions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxlQUFnQix3QkFBd0I7SUFDeEMsdUJBQXdCLGdDQUFnQztJQUN4RCxzQkFBdUIsK0JBQStCOzs7QUFHdkQsSUFBQTtJQUVDLHNCQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsaUJBQWlCLENBQUMsYUFBYTtLQUNhO3VCQVg3RDtJQVlDLENBQUE7QUFIRCx3QkFHQzs7Ozs7OztBQUNELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxxQkFBcUI7OzhCQWR4RDtJQWVDLENBQUE7QUFGRCwrQkFFQzs7Ozs7QUFDRCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsb0JBQW9COzs2QkFqQnZEO0lBa0JDLENBQUE7QUFGRCw4QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTb3VyY2VBY3Rpb25UeXBlcyB7XHJcblx0U09VUkNFX1NVQk1JVCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfU1VDQ0VFRCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdCBzdWNjZWVkXCIsXHJcblx0U09VUkNFX1NVQk1JVF9GQUlMRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPSBTb3VyY2VTdWJtaXQgfCBTb3VyY2VTdWJtaXRTdWNjZWVkIHwgU291cmNlU3VibWl0RmFpbGVkO1xyXG4iXX0=
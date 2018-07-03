/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
export { SourceActionTypes };
export class SourceSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
}
function SourceSubmit_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmit.prototype.type;
    /** @type {?} */
    SourceSubmit.prototype.payload;
}
export class SourceSubmitSucceed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
}
function SourceSubmitSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmitSucceed.prototype.type;
}
export class SourceSubmitFailed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
}
function SourceSubmitFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7bUJBSWlCLHdCQUF3QjsyQkFDaEIsZ0NBQWdDOzBCQUNqQywrQkFBK0I7OztBQUd2RCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7b0JBRHhDLGlCQUFpQixDQUFDLGFBQWE7S0FDYTtDQUM1RDs7Ozs7OztBQUNELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLHFCQUFxQjs7Q0FDdkQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsb0JBQW9COztDQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTb3VyY2VBY3Rpb25UeXBlcyB7XHJcblx0U09VUkNFX1NVQk1JVCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfU1VDQ0VFRCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdCBzdWNjZWVkXCIsXHJcblx0U09VUkNFX1NVQk1JVF9GQUlMRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPSBTb3VyY2VTdWJtaXQgfCBTb3VyY2VTdWJtaXRTdWNjZWVkIHwgU291cmNlU3VibWl0RmFpbGVkO1xyXG4iXX0=
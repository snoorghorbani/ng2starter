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
export class SourceSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
}
if (false) {
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
if (false) {
    /** @type {?} */
    SourceSubmitSucceed.prototype.type;
}
export class SourceSubmitFailed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}
/** @typedef {?} */
var Actions;
export { Actions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxlQUFnQix3QkFBd0I7SUFDeEMsdUJBQXdCLGdDQUFnQztJQUN4RCxzQkFBdUIsK0JBQStCOzs7QUFHdkQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFeEIsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEeEQsWUFBZ0IsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0tBQ1k7Q0FDNUQ7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sbUJBQW1COztRQUMvQixZQUFnQixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQzs7Q0FDeEQ7Ozs7O0FBQ0QsTUFBTSxPQUFPLGtCQUFrQjs7UUFDOUIsWUFBZ0IsaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7O0NBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNvdXJjZUFjdGlvblR5cGVzIHtcclxuXHRTT1VSQ0VfU1VCTUlUID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0XCIsXHJcblx0U09VUkNFX1NVQk1JVF9TVUNDRUVEID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0IHN1Y2NlZWRcIixcclxuXHRTT1VSQ0VfU1VCTUlUX0ZBSUxFRCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdCBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0U3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgU291cmNlU3VibWl0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IFNvdXJjZVN1Ym1pdCB8IFNvdXJjZVN1Ym1pdFN1Y2NlZWQgfCBTb3VyY2VTdWJtaXRGYWlsZWQ7XHJcbiJdfQ==
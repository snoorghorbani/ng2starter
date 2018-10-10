/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][GetPage] start",
    SUCCEED: "[PAGE][API][GetPage] succeed",
    FAILED: "[PAGE][API][GetPage] failed",
};
export { GET_PAGE_ACTION_TYPES };
export class GetPageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetPageStartAction.prototype.type;
    /** @type {?} */
    GetPageStartAction.prototype.payload;
}
export class GetPageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetPageSucceedAction.prototype.type;
    /** @type {?} */
    GetPageSucceedAction.prototype.payload;
}
export class GetPageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetPageFailedAction.prototype.type;
    /** @type {?} */
    GetPageFailedAction.prototype.payload;
}
/** @typedef {?} */
var GetPageActions;
export { GetPageActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLDRCQUE0QjtJQUNwQyxTQUFVLDhCQUE4QjtJQUN4QyxRQUFTLDZCQUE2Qjs7O0FBR3ZDLE1BQU07Ozs7SUFFTCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTs7S0FBSTtDQUN0Qzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXOztLQUFJO0NBQ3pDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bR2V0UGFnZV0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1BBR0VdW0FQSV1bR2V0UGFnZV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFBhZ2VBY3Rpb25zID0gR2V0UGFnZVN0YXJ0QWN0aW9uIHwgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gfCBHZXRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const DELETE_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][DELETE] start",
    SUCCEED: "[PAGE][API][DELETE] succeed",
    FAILED: "[PAGE][API][DELETE] failed",
};
export { DELETE_PAGE_ACTION_TYPES };
export class DeletePageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
}
function DeletePageStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DeletePageStartAction.prototype.type;
    /** @type {?} */
    DeletePageStartAction.prototype.payload;
}
export class DeletePageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
    }
}
function DeletePageSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DeletePageSucceedAction.prototype.type;
    /** @type {?} */
    DeletePageSucceedAction.prototype.payload;
}
export class DeletePageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
}
function DeletePageFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DeletePageFailedAction.prototype.type;
    /** @type {?} */
    DeletePageFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FLUywyQkFBMkI7YUFDekIsNkJBQTZCO1lBQzlCLDRCQUE0Qjs7O0FBR3RDLE1BQU07Ozs7SUFFTCxZQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTs7S0FBSTtDQUN0Qzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXOztLQUFJO0NBQ3pDOzs7Ozs7O0FBQ0QsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERlbGV0ZVBhZ2VBY3Rpb25zID0gRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIHwgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gfCBEZWxldGVQYWdlRmFpbGVkQWN0aW9uO1xyXG4iXX0=
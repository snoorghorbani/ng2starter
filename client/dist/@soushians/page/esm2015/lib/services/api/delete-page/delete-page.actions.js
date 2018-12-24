/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var DELETE_PAGE_ACTION_TYPES = {
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
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    DeletePageFailedAction.prototype.type;
    /** @type {?} */
    DeletePageFailedAction.prototype.payload;
}
/** @typedef {?} */
var DeletePageActions;
export { DeletePageActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxPQUFRLDJCQUEyQjtJQUNuQyxTQUFVLDZCQUE2QjtJQUN2QyxRQUFTLDRCQUE0Qjs7O0FBR3RDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbEMsb0RBQStDO0tBQ1Q7Q0FDdEM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRW5DLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFEckMsd0RBQWlEO0tBQ1I7Q0FDekM7Ozs7Ozs7QUFDRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBRWxDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLHNEQUFnRDtLQUNiO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIERFTEVURV9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0RFTEVURV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERlbGV0ZVBhZ2VBY3Rpb25zID0gRGVsZXRlUGFnZVN0YXJ0QWN0aW9uIHwgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gfCBEZWxldGVQYWdlRmFpbGVkQWN0aW9uO1xyXG4iXX0=
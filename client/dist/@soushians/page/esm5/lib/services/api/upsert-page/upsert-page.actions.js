/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var UPSERT_PAGE_ACTION_TYPES = {
    START: "[UPSERT_PAGE][API][UpsertPage] start",
    SUCCEED: "[UPSERT_PAGE][API][UpsertPage] succeed",
    FAILED: "[UPSERT_PAGE][API][UpsertPage] failed",
};
export { UPSERT_PAGE_ACTION_TYPES };
var UpsertPageStartAction = /** @class */ (function () {
    function UpsertPageStartAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] start" /* START */;
    }
    return UpsertPageStartAction;
}());
export { UpsertPageStartAction };
function UpsertPageStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertPageStartAction.prototype.type;
    /** @type {?} */
    UpsertPageStartAction.prototype.payload;
}
var UpsertPageSucceedAction = /** @class */ (function () {
    function UpsertPageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] succeed" /* SUCCEED */;
    }
    return UpsertPageSucceedAction;
}());
export { UpsertPageSucceedAction };
function UpsertPageSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertPageSucceedAction.prototype.type;
    /** @type {?} */
    UpsertPageSucceedAction.prototype.payload;
}
var UpsertPageFailedAction = /** @class */ (function () {
    function UpsertPageFailedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_PAGE][API][UpsertPage] failed" /* FAILED */;
    }
    return UpsertPageFailedAction;
}());
export { UpsertPageFailedAction };
function UpsertPageFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UpsertPageFailedAction.prototype.type;
    /** @type {?} */
    UpsertPageFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FNUyxzQ0FBc0M7YUFDcEMsd0NBQXdDO1lBQ3pDLHVDQUF1Qzs7O0FBR2pELElBQUE7SUFFQywrQkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVzs7S0FBSTtnQ0FiMUM7SUFjQyxDQUFBO0FBSEQsaUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsaUNBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7O0tBQUk7a0NBakIxQztJQWtCQyxDQUFBO0FBSEQsbUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsZ0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztLQUFJO2lDQXJCcEM7SUFzQkMsQ0FBQTtBQUhELGtDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRQYWdlQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1BBR0VdW0FQSV1bVXBzZXJ0UGFnZV0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRQYWdlU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9QQUdFX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFBhZ2VBY3Rpb25zID0gVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIHwgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iXX0=
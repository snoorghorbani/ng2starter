/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var UPSERT_GRID_ACTION_TYPES = {
    START: "[UPSERT_GRID][API][UpsertGrid] start",
    SUCCEED: "[UPSERT_GRID][API][UpsertGrid] succeed",
    FAILED: "[UPSERT_GRID][API][UpsertGrid] failed",
};
export { UPSERT_GRID_ACTION_TYPES };
var UpsertGridStartAction = /** @class */ (function () {
    function UpsertGridStartAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
    }
    return UpsertGridStartAction;
}());
export { UpsertGridStartAction };
if (false) {
    /** @type {?} */
    UpsertGridStartAction.prototype.type;
    /** @type {?} */
    UpsertGridStartAction.prototype.payload;
}
var UpsertGridSucceedAction = /** @class */ (function () {
    function UpsertGridSucceedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
    }
    return UpsertGridSucceedAction;
}());
export { UpsertGridSucceedAction };
if (false) {
    /** @type {?} */
    UpsertGridSucceedAction.prototype.type;
    /** @type {?} */
    UpsertGridSucceedAction.prototype.payload;
}
var UpsertGridFailedAction = /** @class */ (function () {
    function UpsertGridFailedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
    }
    return UpsertGridFailedAction;
}());
export { UpsertGridFailedAction };
if (false) {
    /** @type {?} */
    UpsertGridFailedAction.prototype.type;
    /** @type {?} */
    UpsertGridFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLHNDQUFzQztJQUM5QyxTQUFVLHdDQUF3QztJQUNsRCxRQUFTLHVDQUF1Qzs7O0FBR2pEO0lBRUMsK0JBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxzREFBa0M7SUFDUCxDQUFDO0lBQzFDLDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxxQ0FBK0M7O0lBQ25DLHdDQUF5Qjs7QUFFdEM7SUFFQyxpQ0FBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQ1QixTQUFJLDBEQUFvQztJQUNULENBQUM7SUFDMUMsOEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHVDQUFpRDs7SUFDckMsMENBQXlCOztBQUV0QztJQUVDLGdDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLHdEQUFtQztJQUNkLENBQUM7SUFDcEMsNkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHNDQUFnRDs7SUFDcEMseUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iXX0=
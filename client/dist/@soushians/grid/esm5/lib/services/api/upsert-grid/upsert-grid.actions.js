/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @typedef {?} */
var UpsertGridActions;
export { UpsertGridActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLHNDQUFzQztJQUM5QyxTQUFVLHdDQUF3QztJQUNsRCxRQUFTLHVDQUF1Qzs7O0FBR2pELElBQUE7SUFFQywrQkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQURyQywrREFBK0M7S0FDTjtnQ0FiMUM7SUFjQyxDQUFBO0FBSEQsaUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsaUNBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFEckMsbUVBQWlEO0tBQ1I7a0NBakIxQztJQWtCQyxDQUFBO0FBSEQsbUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsZ0NBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLGlFQUFnRDtLQUNiO2lDQXJCcEM7SUFzQkMsQ0FBQTtBQUhELGtDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iXX0=
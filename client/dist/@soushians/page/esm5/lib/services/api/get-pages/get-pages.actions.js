/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_PAGES_ACTION_TYPES = {
    START: "[GET_PAGES][API][GetPages] start",
    SUCCEED: "[GET_PAGES][API][GetPages] succeed",
    FAILED: "[GET_PAGES][API][GetPages] failed",
};
export { GET_PAGES_ACTION_TYPES };
var GetPagesStartAction = /** @class */ (function () {
    function GetPagesStartAction() {
        this.type = "[GET_PAGES][API][GetPages] start" /* START */;
    }
    return GetPagesStartAction;
}());
export { GetPagesStartAction };
if (false) {
    /** @type {?} */
    GetPagesStartAction.prototype.type;
}
var GetPagesSucceedAction = /** @class */ (function () {
    function GetPagesSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
    }
    return GetPagesSucceedAction;
}());
export { GetPagesSucceedAction };
if (false) {
    /** @type {?} */
    GetPagesSucceedAction.prototype.type;
    /** @type {?} */
    GetPagesSucceedAction.prototype.payload;
}
var GetPagesFailedAction = /** @class */ (function () {
    function GetPagesFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
    }
    return GetPagesFailedAction;
}());
export { GetPagesFailedAction };
if (false) {
    /** @type {?} */
    GetPagesFailedAction.prototype.type;
    /** @type {?} */
    GetPagesFailedAction.prototype.payload;
}
/** @typedef {?} */
var GetPagesActions;
export { GetPagesActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLGtDQUFrQztJQUMxQyxTQUFVLG9DQUFvQztJQUM5QyxRQUFTLG1DQUFtQzs7O0FBRzdDLElBQUE7Ozs7OEJBWEE7SUFhQyxDQUFBO0FBRkQsK0JBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhOztLQUFJO2dDQWhCNUM7SUFpQkMsQ0FBQTtBQUhELGlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDhCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7S0FBSTsrQkFwQnBDO0lBcUJDLENBQUE7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1wYWdlcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlc0FjdGlvbnMgPSBHZXRQYWdlc1N0YXJ0QWN0aW9uIHwgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZXNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
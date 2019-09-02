/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GET_PAGES_ACTION_TYPES = {
    START: "[GET_PAGES][API][GetPages] start",
    SUCCEED: "[GET_PAGES][API][GetPages] succeed",
    FAILED: "[GET_PAGES][API][GetPages] failed",
};
export { GET_PAGES_ACTION_TYPES };
export class GetPagesStartAction {
    constructor() {
        this.type = "[GET_PAGES][API][GetPages] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesStartAction.prototype.type;
}
export class GetPagesSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesSucceedAction.prototype.type;
    /** @type {?} */
    GetPagesSucceedAction.prototype.payload;
}
export class GetPagesFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_PAGES][API][GetPages] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetPagesFailedAction.prototype.type;
    /** @type {?} */
    GetPagesFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLGtDQUFrQztJQUMxQyxTQUFVLG9DQUFvQztJQUM5QyxRQUFTLG1DQUFtQzs7O0FBRzdDLE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDVSxTQUFJLGtEQUFnQztJQUM5QyxDQUFDO0NBQUE7OztJQURBLG1DQUE2Qzs7QUFFOUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksc0RBQWtDO0lBQ0wsQ0FBQztDQUMzQzs7O0lBRkEscUNBQStDOztJQUNuQyx3Q0FBMkI7O0FBRXhDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFFaEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxvREFBaUM7SUFDWixDQUFDO0NBQ25DOzs7SUFGQSxvQ0FBOEM7O0lBQ2xDLHVDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1wYWdlcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlc0FjdGlvbnMgPSBHZXRQYWdlc1N0YXJ0QWN0aW9uIHwgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZXNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
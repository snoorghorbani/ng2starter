/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function GetPagesStartAction_tsickle_Closure_declarations() {
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
function GetPagesSucceedAction_tsickle_Closure_declarations() {
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
function GetPagesFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetPagesFailedAction.prototype.type;
    /** @type {?} */
    GetPagesFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FNUyxrQ0FBa0M7YUFDaEMsb0NBQW9DO1lBQ3JDLG1DQUFtQzs7O0FBRzdDLE1BQU07Ozs7Q0FFTDs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTs7S0FBSTtDQUMzQzs7Ozs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7S0FBSTtDQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZXNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1wYWdlcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9QQUdFU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfUEFHRVNdW0FQSV1bR2V0UGFnZXNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlc0FjdGlvbnMgPSBHZXRQYWdlc1N0YXJ0QWN0aW9uIHwgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZXNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_GRIDS_ACTION_TYPES = {
    START: "[GET_GRIDS][API][GetGrids] start",
    SUCCEED: "[GET_GRIDS][API][GetGrids] succeed",
    FAILED: "[GET_GRIDS][API][GetGrids] failed",
};
export { GET_GRIDS_ACTION_TYPES };
export class GetGridsStartAction {
    constructor() {
        this.type = "[GET_GRIDS][API][GetGrids] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsStartAction.prototype.type;
}
export class GetGridsSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsSucceedAction.prototype.type;
    /** @type {?} */
    GetGridsSucceedAction.prototype.payload;
}
export class GetGridsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    GetGridsFailedAction.prototype.type;
    /** @type {?} */
    GetGridsFailedAction.prototype.payload;
}
/** @typedef {?} */
var GetGridsActions;
export { GetGridsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWRzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLGtDQUFrQztJQUMxQyxTQUFVLG9DQUFvQztJQUM5QyxRQUFTLG1DQUFtQzs7O0FBRzdDLE1BQU0sT0FBTyxtQkFBbUI7O1FBQy9CLDJEQUE2Qzs7Q0FDN0M7Ozs7O0FBQ0QsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUVqQyxZQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRHZDLCtEQUErQztLQUNKO0NBQzNDOzs7Ozs7O0FBQ0QsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUVoQyxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQiw2REFBOEM7S0FDWDtDQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var GET_GRIDS_ACTION_TYPES = {
    START: "[GET_GRIDS][API][GetGrids] start",
    SUCCEED: "[GET_GRIDS][API][GetGrids] succeed",
    FAILED: "[GET_GRIDS][API][GetGrids] failed",
};
export { GET_GRIDS_ACTION_TYPES };
var GetGridsStartAction = /** @class */ (function () {
    function GetGridsStartAction() {
        this.type = "[GET_GRIDS][API][GetGrids] start" /* START */;
    }
    return GetGridsStartAction;
}());
export { GetGridsStartAction };
function GetGridsStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetGridsStartAction.prototype.type;
}
var GetGridsSucceedAction = /** @class */ (function () {
    function GetGridsSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
    }
    return GetGridsSucceedAction;
}());
export { GetGridsSucceedAction };
function GetGridsSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetGridsSucceedAction.prototype.type;
    /** @type {?} */
    GetGridsSucceedAction.prototype.payload;
}
var GetGridsFailedAction = /** @class */ (function () {
    function GetGridsFailedAction(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
    }
    return GetGridsFailedAction;
}());
export { GetGridsFailedAction };
function GetGridsFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetGridsFailedAction.prototype.type;
    /** @type {?} */
    GetGridsFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWRzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FNUyxrQ0FBa0M7YUFDaEMsb0NBQW9DO1lBQ3JDLG1DQUFtQzs7O0FBRzdDLElBQUE7Ozs7OEJBWEE7SUFhQyxDQUFBO0FBRkQsK0JBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhOztLQUFJO2dDQWhCNUM7SUFpQkMsQ0FBQTtBQUhELGlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLDhCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7S0FBSTsrQkFwQnBDO0lBcUJDLENBQUE7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function GetPagesStartAction_tsickle_Closure_declarations() {
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
function GetPagesSucceedAction_tsickle_Closure_declarations() {
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
function GetPagesFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetPagesFailedAction.prototype.type;
    /** @type {?} */
    GetPagesFailedAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2VzLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1wYWdlcy9nZXQtcGFnZXMuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FNUyxrQ0FBa0M7YUFDaEMsb0NBQW9DO1lBQ3JDLG1DQUFtQzs7O0FBRzdDLElBQUE7Ozs7OEJBWEE7SUFhQyxDQUFBO0FBRkQsK0JBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjs7S0FBSTtnQ0FoQmpEO0lBaUJDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQyw4QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7K0JBcEJwQztJQXFCQyxDQUFBO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldFBhZ2VzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtcGFnZXMubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9QQUdFU11bQVBJXVtHZXRQYWdlc10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR0VUX1BBR0VTXVtBUEldW0dldFBhZ2VzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFBhZ2VzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9QQUdFU19BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZXNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRVNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlc0FjdGlvbnMgPSBHZXRQYWdlc1N0YXJ0QWN0aW9uIHwgR2V0UGFnZXNTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZXNGYWlsZWRBY3Rpb247XHJcbiJdfQ==
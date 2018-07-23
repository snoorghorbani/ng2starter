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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXBhZ2UvdXBzZXJ0LXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7V0FNUyxzQ0FBc0M7YUFDcEMsd0NBQXdDO1lBQ3pDLHVDQUF1Qzs7O0FBR2pELElBQUE7SUFFQywrQkFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7O0tBQUk7Z0NBYi9DO0lBY0MsQ0FBQTtBQUhELGlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGlDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjs7S0FBSTtrQ0FqQi9DO0lBa0JDLENBQUE7QUFIRCxtQ0FHQzs7Ozs7OztBQUNELElBQUE7SUFFQyxnQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7aUNBckJwQztJQXNCQyxDQUFBO0FBSEQsa0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC1wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9QQUdFXVtBUEldW1Vwc2VydFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfUEFHRV1bQVBJXVtVcHNlcnRQYWdlXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1BBR0VfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYWdlTW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFBhZ2VGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfUEFHRV9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFBhZ2VBY3Rpb25zID0gVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIHwgVXBzZXJ0UGFnZVN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRQYWdlRmFpbGVkQWN0aW9uO1xyXG4iXX0=
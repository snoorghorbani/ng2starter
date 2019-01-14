/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var UPSERT_WIDGET_ACTION_TYPES = {
    START: "[UPSERT_WIDGET][API][UpsertWidget] start",
    SUCCEED: "[UPSERT_WIDGET][API][UpsertWidget] succeed",
    FAILED: "[UPSERT_WIDGET][API][UpsertWidget] failed",
};
export { UPSERT_WIDGET_ACTION_TYPES };
var UpsertWidgetStartAction = /** @class */ (function () {
    function UpsertWidgetStartAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
    }
    return UpsertWidgetStartAction;
}());
export { UpsertWidgetStartAction };
if (false) {
    /** @type {?} */
    UpsertWidgetStartAction.prototype.type;
    /** @type {?} */
    UpsertWidgetStartAction.prototype.payload;
}
var UpsertWidgetSucceedAction = /** @class */ (function () {
    function UpsertWidgetSucceedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
    }
    return UpsertWidgetSucceedAction;
}());
export { UpsertWidgetSucceedAction };
if (false) {
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.payload;
}
var UpsertWidgetFailedAction = /** @class */ (function () {
    function UpsertWidgetFailedAction(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
    }
    return UpsertWidgetFailedAction;
}());
export { UpsertWidgetFailedAction };
if (false) {
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLE9BQVEsMENBQTBDO0lBQ2xELFNBQVUsNENBQTRDO0lBQ3RELFFBQVMsMkNBQTJDOzs7QUFHckQ7SUFFQyxpQ0FBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsU0FBSSwwREFBb0M7SUFDRixDQUFDO0lBQ2pELDhCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSx1Q0FBaUQ7O0lBQ3JDLDBDQUFnQzs7QUFFN0M7SUFFQyxtQ0FBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsU0FBSSw4REFBc0M7SUFDSixDQUFDO0lBQ2pELGdDQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSx5Q0FBbUQ7O0lBQ3ZDLDRDQUFnQzs7QUFFN0M7SUFFQyxrQ0FBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSw0REFBcUM7SUFDaEIsQ0FBQztJQUNwQywrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsd0NBQWtEOztJQUN0QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LXdpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0V2lkZ2V0QWN0aW9ucyA9IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uIHwgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIl19
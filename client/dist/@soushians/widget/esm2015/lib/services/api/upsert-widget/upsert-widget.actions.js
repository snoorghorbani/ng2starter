/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const UPSERT_WIDGET_ACTION_TYPES = {
    START: "[UPSERT_WIDGET][API][UpsertWidget] start",
    SUCCEED: "[UPSERT_WIDGET][API][UpsertWidget] succeed",
    FAILED: "[UPSERT_WIDGET][API][UpsertWidget] failed",
};
export { UPSERT_WIDGET_ACTION_TYPES };
export class UpsertWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetStartAction.prototype.type;
    /** @type {?} */
    UpsertWidgetStartAction.prototype.payload;
}
export class UpsertWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetSucceedAction.prototype.payload;
}
export class UpsertWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.type;
    /** @type {?} */
    UpsertWidgetFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLE9BQVEsMENBQTBDO0lBQ2xELFNBQVUsNENBQTRDO0lBQ3RELFFBQVMsMkNBQTJDOzs7QUFHckQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLDBEQUFvQztJQUNGLENBQUM7Q0FDaEQ7OztJQUZBLHVDQUFpRDs7SUFDckMsMENBQWdDOztBQUU3QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXJDLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksOERBQXNDO0lBQ0osQ0FBQztDQUNoRDs7O0lBRkEseUNBQW1EOztJQUN2Qyw0Q0FBZ0M7O0FBRTdDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSw0REFBcUM7SUFDaEIsQ0FBQztDQUNuQzs7O0lBRkEsd0NBQWtEOztJQUN0QywyQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LXdpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfV0lER0VUXVtBUEldW1Vwc2VydFdpZGdldF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0V2lkZ2V0QWN0aW9ucyA9IFVwc2VydFdpZGdldFN0YXJ0QWN0aW9uIHwgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIl19
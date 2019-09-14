/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DELETE_WIDGET_ACTION_TYPES = {
    START: "[DELETE_WIDGET][API][DeleteWidget] start",
    SUCCEED: "[DELETE_WIDGET][API][DeleteWidget] succeed",
    FAILED: "[DELETE_WIDGET][API][DeleteWidget] failed",
};
export { DELETE_WIDGET_ACTION_TYPES };
export class DeleteWidgetStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetStartAction.prototype.type;
    /** @type {?} */
    DeleteWidgetStartAction.prototype.payload;
}
export class DeleteWidgetSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.payload;
}
export class DeleteWidgetFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLE9BQVEsMENBQTBDO0lBQ2xELFNBQVUsNENBQTRDO0lBQ3RELFFBQVMsMkNBQTJDOzs7QUFHckQsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLDBEQUFvQztJQUNELENBQUM7Q0FDakQ7OztJQUZBLHVDQUFpRDs7SUFDckMsMENBQWdDOztBQUU3QyxNQUFNLE9BQU8seUJBQXlCOzs7O0lBRXJDLFlBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRG5DLFNBQUksOERBQXNDO0lBQ0gsQ0FBQztDQUNqRDs7O0lBRkEseUNBQW1EOztJQUN2Qyw0Q0FBZ0M7O0FBRTdDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFFcEMsWUFBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsU0FBSSw0REFBcUM7SUFDRixDQUFDO0NBQ2pEOzs7SUFGQSx3Q0FBa0Q7O0lBQ3RDLDJDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0RFTEVURV9XSURHRVRdW0FQSV1bRGVsZXRlV2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVXaWRnZXRBY3Rpb25zID0gRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24gfCBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uIHwgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iXX0=
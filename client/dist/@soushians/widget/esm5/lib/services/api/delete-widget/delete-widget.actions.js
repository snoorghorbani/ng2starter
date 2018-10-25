/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var DELETE_WIDGET_ACTION_TYPES = {
    START: "[DELETE_WIDGET][API][DeleteWidget] start",
    SUCCEED: "[DELETE_WIDGET][API][DeleteWidget] succeed",
    FAILED: "[DELETE_WIDGET][API][DeleteWidget] failed",
};
export { DELETE_WIDGET_ACTION_TYPES };
var DeleteWidgetStartAction = /** @class */ (function () {
    function DeleteWidgetStartAction(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] start" /* START */;
    }
    return DeleteWidgetStartAction;
}());
export { DeleteWidgetStartAction };
if (false) {
    /** @type {?} */
    DeleteWidgetStartAction.prototype.type;
    /** @type {?} */
    DeleteWidgetStartAction.prototype.payload;
}
var DeleteWidgetSucceedAction = /** @class */ (function () {
    function DeleteWidgetSucceedAction(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] succeed" /* SUCCEED */;
    }
    return DeleteWidgetSucceedAction;
}());
export { DeleteWidgetSucceedAction };
if (false) {
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetSucceedAction.prototype.payload;
}
var DeleteWidgetFailedAction = /** @class */ (function () {
    function DeleteWidgetFailedAction(payload) {
        this.payload = payload;
        this.type = "[DELETE_WIDGET][API][DeleteWidget] failed" /* FAILED */;
    }
    return DeleteWidgetFailedAction;
}());
export { DeleteWidgetFailedAction };
if (false) {
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.type;
    /** @type {?} */
    DeleteWidgetFailedAction.prototype.payload;
}
/** @typedef {?} */
var DeleteWidgetActions;
export { DeleteWidgetActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2RlbGV0ZS13aWRnZXQvZGVsZXRlLXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLE9BQVEsMENBQTBDO0lBQ2xELFNBQVUsNENBQTRDO0lBQ3RELFFBQVMsMkNBQTJDOzs7QUFHckQsSUFBQTtJQUVDLGlDQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUQ1QyxtRUFBaUQ7S0FDQTtrQ0FabEQ7SUFhQyxDQUFBO0FBSEQsbUNBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRUMsbUNBQW1CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRDVDLHVFQUFtRDtLQUNGO29DQWhCbEQ7SUFpQkMsQ0FBQTtBQUhELHFDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGtDQUFtQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUQ1QyxxRUFBa0Q7S0FDRDttQ0FwQmxEO0lBcUJDLENBQUE7QUFIRCxvQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gREVMRVRFX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0RFTEVURV9XSURHRVRdW0FQSV1bRGVsZXRlV2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbREVMRVRFX1dJREdFVF1bQVBJXVtEZWxldGVXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlV2lkZ2V0U3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERFTEVURV9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVXaWRnZXRBY3Rpb25zID0gRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24gfCBEZWxldGVXaWRnZXRTdWNjZWVkQWN0aW9uIHwgRGVsZXRlV2lkZ2V0RmFpbGVkQWN0aW9uO1xyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_WIDGET_ACTION_TYPES = {
    START: "[WIDGET][API][GetWidget] start",
    SUCCEED: "[WIDGET][API][GetWidget] succeed",
    FAILED: "[WIDGET][API][GetWidget] failed",
};
export { GET_WIDGET_ACTION_TYPES };
var GetWidgetStartAction = /** @class */ (function () {
    function GetWidgetStartAction(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] start" /* START */;
    }
    return GetWidgetStartAction;
}());
export { GetWidgetStartAction };
if (false) {
    /** @type {?} */
    GetWidgetStartAction.prototype.type;
    /** @type {?} */
    GetWidgetStartAction.prototype.payload;
}
var GetWidgetSucceedAction = /** @class */ (function () {
    function GetWidgetSucceedAction(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] succeed" /* SUCCEED */;
    }
    return GetWidgetSucceedAction;
}());
export { GetWidgetSucceedAction };
if (false) {
    /** @type {?} */
    GetWidgetSucceedAction.prototype.type;
    /** @type {?} */
    GetWidgetSucceedAction.prototype.payload;
}
var GetWidgetFailedAction = /** @class */ (function () {
    function GetWidgetFailedAction(payload) {
        this.payload = payload;
        this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
    }
    return GetWidgetFailedAction;
}());
export { GetWidgetFailedAction };
if (false) {
    /** @type {?} */
    GetWidgetFailedAction.prototype.type;
    /** @type {?} */
    GetWidgetFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXdpZGdldC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1DLE9BQVEsZ0NBQWdDO0lBQ3hDLFNBQVUsa0NBQWtDO0lBQzVDLFFBQVMsaUNBQWlDOzs7QUFHM0M7SUFFQyw4QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxnREFBaUM7SUFDVCxDQUFDO0lBQ3ZDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxvQ0FBOEM7O0lBQ2xDLHVDQUFzQjs7QUFFbkM7SUFFQyxnQ0FBbUIsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFEbkMsU0FBSSxvREFBbUM7SUFDRCxDQUFDO0lBQ2pELDZCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxzQ0FBZ0Q7O0lBQ3BDLHlDQUFnQzs7QUFFN0M7SUFFQywrQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxrREFBa0M7SUFDYixDQUFDO0lBQ3BDLDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxxQ0FBK0M7O0lBQ25DLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltXSURHRVRdW0FQSV1bR2V0V2lkZ2V0XSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldFdpZGdldEFjdGlvbnMgPSBHZXRXaWRnZXRTdGFydEFjdGlvbiB8IEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBHZXRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiJdfQ==
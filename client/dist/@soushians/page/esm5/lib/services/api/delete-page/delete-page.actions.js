/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var DELETE_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][DELETE] start",
    SUCCEED: "[PAGE][API][DELETE] succeed",
    FAILED: "[PAGE][API][DELETE] failed",
};
export { DELETE_PAGE_ACTION_TYPES };
var DeletePageStartAction = /** @class */ (function () {
    function DeletePageStartAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
    return DeletePageStartAction;
}());
export { DeletePageStartAction };
if (false) {
    /** @type {?} */
    DeletePageStartAction.prototype.type;
    /** @type {?} */
    DeletePageStartAction.prototype.payload;
}
var DeletePageSucceedAction = /** @class */ (function () {
    function DeletePageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
    }
    return DeletePageSucceedAction;
}());
export { DeletePageSucceedAction };
if (false) {
    /** @type {?} */
    DeletePageSucceedAction.prototype.type;
    /** @type {?} */
    DeletePageSucceedAction.prototype.payload;
}
var DeletePageFailedAction = /** @class */ (function () {
    function DeletePageFailedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
    return DeletePageFailedAction;
}());
export { DeletePageFailedAction };
if (false) {
    /** @type {?} */
    DeletePageFailedAction.prototype.type;
    /** @type {?} */
    DeletePageFailedAction.prototype.payload;
}
/** @typedef {?} */
var DeletePageActions;
export { DeletePageActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxPQUFRLDJCQUEyQjtJQUNuQyxTQUFVLDZCQUE2QjtJQUN2QyxRQUFTLDRCQUE0Qjs7O0FBR3RDLElBQUE7SUFFQywrQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbEMsb0RBQStDO0tBQ1Q7Z0NBWnZDO0lBYUMsQ0FBQTtBQUhELGlDQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGlDQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRHJDLHdEQUFpRDtLQUNSO2tDQWhCMUM7SUFpQkMsQ0FBQTtBQUhELG1DQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVDLGdDQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixzREFBZ0Q7S0FDYjtpQ0FwQnBDO0lBcUJDLENBQUE7QUFIRCxrQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bREVMRVRFXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVQYWdlQWN0aW9ucyA9IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB8IERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uIHwgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbjtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DELETE_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][DELETE] start",
    SUCCEED: "[PAGE][API][DELETE] succeed",
    FAILED: "[PAGE][API][DELETE] failed",
};
export { DELETE_PAGE_ACTION_TYPES };
export class DeletePageStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] start" /* START */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageStartAction.prototype.type;
    /** @type {?} */
    DeletePageStartAction.prototype.payload;
}
export class DeletePageSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] succeed" /* SUCCEED */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageSucceedAction.prototype.type;
    /** @type {?} */
    DeletePageSucceedAction.prototype.payload;
}
export class DeletePageFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][DELETE] failed" /* FAILED */;
    }
}
if (false) {
    /** @type {?} */
    DeletePageFailedAction.prototype.type;
    /** @type {?} */
    DeletePageFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZGVsZXRlLXBhZ2UvZGVsZXRlLXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxPQUFRLDJCQUEyQjtJQUNuQyxTQUFVLDZCQUE2QjtJQUN2QyxRQUFTLDRCQUE0Qjs7O0FBR3RDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSwyQ0FBa0M7SUFDVixDQUFDO0NBQ3RDOzs7SUFGQSxxQ0FBK0M7O0lBQ25DLHdDQUFzQjs7QUFFbkMsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVuQyxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksK0NBQW9DO0lBQ1QsQ0FBQztDQUN6Qzs7O0lBRkEsdUNBQWlEOztJQUNyQywwQ0FBeUI7O0FBRXRDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSw2Q0FBbUM7SUFDZCxDQUFDO0NBQ25DOzs7SUFGQSxzQ0FBZ0Q7O0lBQ3BDLHlDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1BBR0VdW0FQSV1bREVMRVRFXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbUEFHRV1bQVBJXVtERUxFVEVdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlUGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gREVMRVRFX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEZWxldGVQYWdlQWN0aW9ucyA9IERlbGV0ZVBhZ2VTdGFydEFjdGlvbiB8IERlbGV0ZVBhZ2VTdWNjZWVkQWN0aW9uIHwgRGVsZXRlUGFnZUZhaWxlZEFjdGlvbjtcclxuIl19
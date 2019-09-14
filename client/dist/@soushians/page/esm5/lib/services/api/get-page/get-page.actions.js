/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_PAGE_ACTION_TYPES = {
    START: "[PAGE][API][GetPage] start",
    SUCCEED: "[PAGE][API][GetPage] succeed",
    FAILED: "[PAGE][API][GetPage] failed",
};
export { GET_PAGE_ACTION_TYPES };
var GetPageStartAction = /** @class */ (function () {
    function GetPageStartAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] start" /* START */;
    }
    return GetPageStartAction;
}());
export { GetPageStartAction };
if (false) {
    /** @type {?} */
    GetPageStartAction.prototype.type;
    /** @type {?} */
    GetPageStartAction.prototype.payload;
}
var GetPageSucceedAction = /** @class */ (function () {
    function GetPageSucceedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] succeed" /* SUCCEED */;
    }
    return GetPageSucceedAction;
}());
export { GetPageSucceedAction };
if (false) {
    /** @type {?} */
    GetPageSucceedAction.prototype.type;
    /** @type {?} */
    GetPageSucceedAction.prototype.payload;
}
var GetPageFailedAction = /** @class */ (function () {
    function GetPageFailedAction(payload) {
        this.payload = payload;
        this.type = "[PAGE][API][GetPage] failed" /* FAILED */;
    }
    return GetPageFailedAction;
}());
export { GetPageFailedAction };
if (false) {
    /** @type {?} */
    GetPageFailedAction.prototype.type;
    /** @type {?} */
    GetPageFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXBhZ2UuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LXBhZ2UvZ2V0LXBhZ2UuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLDRCQUE0QjtJQUNwQyxTQUFVLDhCQUE4QjtJQUN4QyxRQUFTLDZCQUE2Qjs7O0FBR3ZDO0lBRUMsNEJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksNENBQStCO0lBQ1AsQ0FBQztJQUN2Qyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0NBQTRDOztJQUNoQyxxQ0FBc0I7O0FBRW5DO0lBRUMsOEJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxnREFBaUM7SUFDTixDQUFDO0lBQzFDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxvQ0FBOEM7O0lBQ2xDLHVDQUF5Qjs7QUFFdEM7SUFFQyw2QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSw4Q0FBZ0M7SUFDWCxDQUFDO0lBQ3BDLDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxtQ0FBNkM7O0lBQ2pDLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0UGFnZUFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LXBhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbUEFHRV1bQVBJXVtHZXRQYWdlXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltQQUdFXVtBUEldW0dldFBhZ2VdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UGFnZVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfUEFHRV9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFnZU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQYWdlRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1BBR0VfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRQYWdlQWN0aW9ucyA9IEdldFBhZ2VTdGFydEFjdGlvbiB8IEdldFBhZ2VTdWNjZWVkQWN0aW9uIHwgR2V0UGFnZUZhaWxlZEFjdGlvbjtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var GET_GRID_ACTION_TYPES = {
    START: "[GRID][API][GetGrid] start",
    SUCCEED: "[GRID][API][GetGrid] succeed",
    FAILED: "[GRID][API][GetGrid] failed",
};
export { GET_GRID_ACTION_TYPES };
var GetGridStartAction = /** @class */ (function () {
    function GetGridStartAction(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] start" /* START */;
    }
    return GetGridStartAction;
}());
export { GetGridStartAction };
if (false) {
    /** @type {?} */
    GetGridStartAction.prototype.type;
    /** @type {?} */
    GetGridStartAction.prototype.payload;
}
var GetGridSucceedAction = /** @class */ (function () {
    function GetGridSucceedAction(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
    }
    return GetGridSucceedAction;
}());
export { GetGridSucceedAction };
if (false) {
    /** @type {?} */
    GetGridSucceedAction.prototype.type;
    /** @type {?} */
    GetGridSucceedAction.prototype.payload;
}
var GetGridFailedAction = /** @class */ (function () {
    function GetGridFailedAction(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
    }
    return GetGridFailedAction;
}());
export { GetGridFailedAction };
if (false) {
    /** @type {?} */
    GetGridFailedAction.prototype.type;
    /** @type {?} */
    GetGridFailedAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWQuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNQyxPQUFRLDRCQUE0QjtJQUNwQyxTQUFVLDhCQUE4QjtJQUN4QyxRQUFTLDZCQUE2Qjs7O0FBR3ZDO0lBRUMsNEJBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHpCLFNBQUksNENBQStCO0lBQ1AsQ0FBQztJQUN2Qyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0NBQTRDOztJQUNoQyxxQ0FBc0I7O0FBRW5DO0lBRUMsOEJBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxnREFBaUM7SUFDTixDQUFDO0lBQzFDLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxvQ0FBOEM7O0lBQ2xDLHVDQUF5Qjs7QUFFdEM7SUFFQyw2QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSw4Q0FBZ0M7SUFDWCxDQUFDO0lBQ3BDLDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxtQ0FBNkM7O0lBQ2pDLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkQWN0aW9ucyA9IEdldEdyaWRTdGFydEFjdGlvbiB8IEdldEdyaWRTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZEZhaWxlZEFjdGlvbjtcclxuIl19
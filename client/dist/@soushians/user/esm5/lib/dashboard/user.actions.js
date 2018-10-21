/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var UserActionTypes = {
    USER_SELECTED: "[USER] USER_SELECTED",
    REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
};
export { UserActionTypes };
var UserSelectedAction = /** @class */ (function () {
    function UserSelectedAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.USER_SELECTED;
    }
    return UserSelectedAction;
}());
export { UserSelectedAction };
function UserSelectedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    UserSelectedAction.prototype.type;
    /** @type {?} */
    UserSelectedAction.prototype.payload;
}
var RefreshUserInfoAction = /** @class */ (function () {
    function RefreshUserInfoAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
    return RefreshUserInfoAction;
}());
export { RefreshUserInfoAction };
function RefreshUserInfoAction_tsickle_Closure_declarations() {
    /** @type {?} */
    RefreshUserInfoAction.prototype.type;
    /** @type {?} */
    RefreshUserInfoAction.prototype.payload;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O21CQUtpQixzQkFBc0I7dUJBQ2xCLDBCQUEwQjs7O0FBRy9DLElBQUE7SUFFQyw0QkFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsZUFBZSxDQUFDLGFBQWE7S0FDSjs2QkFYMUM7SUFZQyxDQUFBO0FBSEQsOEJBR0M7Ozs7Ozs7QUFFRCxJQUFBO0lBRUMsK0JBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7b0JBRHJCLGVBQWUsQ0FBQyxpQkFBaUI7S0FDUjtnQ0FoQjFDO0lBaUJDLENBQUE7QUFIRCxpQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdFVTRVJfU0VMRUNURUQgPSBcIltVU0VSXSBVU0VSX1NFTEVDVEVEXCIsXHJcblx0UkVGUkVTSF9VU0VSX0lORk8gPSBcIltVU0VSXSBSRUZSRVNIX1VTRVJfSU5GT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VsZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBVc2VyU2VsZWN0ZWRBY3Rpb24gfCBSZWZyZXNoVXNlckluZm9BY3Rpb247XHJcbiJdfQ==
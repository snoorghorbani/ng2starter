/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
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
if (false) {
    /** @type {?} */
    RefreshUserInfoAction.prototype.type;
    /** @type {?} */
    RefreshUserInfoAction.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsZUFBZ0Isc0JBQXNCO0lBQ3RDLG1CQUFvQiwwQkFBMEI7OztBQUcvQztJQUVDLDRCQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO0lBQ04sQ0FBQztJQUMxQyx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEsa0NBQThDOztJQUNsQyxxQ0FBeUI7O0FBR3RDO0lBRUMsK0JBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFENUIsU0FBSSxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNWLENBQUM7SUFDMUMsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZBLHFDQUFrRDs7SUFDdEMsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJBY3Rpb25UeXBlcyB7XHJcblx0VVNFUl9TRUxFQ1RFRCA9IFwiW1VTRVJdIFVTRVJfU0VMRUNURURcIixcclxuXHRSRUZSRVNIX1VTRVJfSU5GTyA9IFwiW1VTRVJdIFJFRlJFU0hfVVNFUl9JTkZPXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZWxlY3RlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVXNlckluZm9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IFVzZXJTZWxlY3RlZEFjdGlvbiB8IFJlZnJlc2hVc2VySW5mb0FjdGlvbjtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const UserActionTypes = {
    USER_SELECTED: "[USER] USER_SELECTED",
    REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
};
export { UserActionTypes };
export class UserSelectedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.USER_SELECTED;
    }
}
if (false) {
    /** @type {?} */
    UserSelectedAction.prototype.type;
    /** @type {?} */
    UserSelectedAction.prototype.payload;
}
export class RefreshUserInfoAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
}
if (false) {
    /** @type {?} */
    RefreshUserInfoAction.prototype.type;
    /** @type {?} */
    RefreshUserInfoAction.prototype.payload;
}
/** @typedef {?} */
var UserAction;
export { UserAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsZUFBZ0Isc0JBQXNCO0lBQ3RDLG1CQUFvQiwwQkFBMEI7OztBQUcvQyxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsZUFBZSxDQUFDLGFBQWE7S0FDSjtDQUN6Qzs7Ozs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO29CQURyQixlQUFlLENBQUMsaUJBQWlCO0tBQ1I7Q0FDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJBY3Rpb25UeXBlcyB7XHJcblx0VVNFUl9TRUxFQ1RFRCA9IFwiW1VTRVJdIFVTRVJfU0VMRUNURURcIixcclxuXHRSRUZSRVNIX1VTRVJfSU5GTyA9IFwiW1VTRVJdIFJFRlJFU0hfVVNFUl9JTkZPXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZWxlY3RlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVXNlckluZm9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IFVzZXJTZWxlY3RlZEFjdGlvbiB8IFJlZnJlc2hVc2VySW5mb0FjdGlvbjtcclxuIl19
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsZUFBZ0Isc0JBQXNCO0lBQ3RDLG1CQUFvQiwwQkFBMEI7OztBQUcvQyxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztvQkFEckIsZUFBZSxDQUFDLGFBQWE7S0FDSjtDQUN6Qzs7Ozs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO29CQURyQixlQUFlLENBQUMsaUJBQWlCO0tBQ1I7Q0FDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRVU0VSX1NFTEVDVEVEID0gXCJbVVNFUl0gVVNFUl9TRUxFQ1RFRFwiLFxyXG5cdFJFRlJFU0hfVVNFUl9JTkZPID0gXCJbVVNFUl0gUkVGUkVTSF9VU0VSX0lORk9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlbGVjdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VySW5mb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gVXNlclNlbGVjdGVkQWN0aW9uIHwgUmVmcmVzaFVzZXJJbmZvQWN0aW9uO1xyXG4iXX0=
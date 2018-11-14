/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ChangePasswordActionTypes = {
    CHANGE_PASSWORD: "[USER][PASSWORD] CHANGE_PASSWORD",
    PASSWORD_CHANGED_START: "[USER][PASSWORD] PASSWORD_CHANGED_START",
    PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
};
export { ChangePasswordActionTypes };
export class ChangePassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
}
if (false) {
    /** @type {?} */
    ChangePassword.prototype.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}
export class ChangePasswordStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
}
if (false) {
    /** @type {?} */
    ChangePasswordStart.prototype.type;
    /** @type {?} */
    ChangePasswordStart.prototype.payload;
}
export class ChangePasswordSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ChangePasswordSucceed.prototype.type;
    /** @type {?} */
    ChangePasswordSucceed.prototype.payload;
}
export class ChangePasswordFailed {
    constructor() {
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ChangePasswordFailed.prototype.type;
}
/** @typedef {?} */
var ChangePasswordAction;
export { ChangePasswordAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlDLGlCQUFrQixrQ0FBa0M7SUFDcEQsd0JBQXlCLHlDQUF5QztJQUNsRSwwQkFBMkIsMkNBQTJDO0lBQ3RFLHlCQUEwQiwwQ0FBMEM7OztBQUdyRSxNQUFNLE9BQU8sY0FBYzs7OztJQUUxQixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUR2RCxZQUFnQix5QkFBeUIsQ0FBQyxlQUFlLENBQUM7S0FDQztDQUMzRDs7Ozs7OztBQUNELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFL0IsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEdkQsWUFBZ0IseUJBQXlCLENBQUMsc0JBQXNCLENBQUM7S0FDTjtDQUMzRDs7Ozs7OztBQUNELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEeEQsWUFBZ0IseUJBQXlCLENBQUMsd0JBQXdCLENBQUM7S0FDUDtDQUM1RDs7Ozs7OztBQUNELE1BQU0sT0FBTyxvQkFBb0I7O1FBQ2hDLFlBQWdCLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDOztDQUNsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG5cdENIQU5HRV9QQVNTV09SRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBDSEFOR0VfUEFTU1dPUkRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1RBUlRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkQWN0aW9uID0gQ2hhbmdlUGFzc3dvcmQgfCBDaGFuZ2VQYXNzd29yZFN0YXJ0IHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkIHwgQ2hhbmdlUGFzc3dvcmRGYWlsZWQ7XHJcbiJdfQ==
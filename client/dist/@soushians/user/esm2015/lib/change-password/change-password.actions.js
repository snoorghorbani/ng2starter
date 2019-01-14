/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ChangePasswordActionTypes = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlDLGlCQUFrQixrQ0FBa0M7SUFDcEQsd0JBQXlCLHlDQUF5QztJQUNsRSwwQkFBMkIsMkNBQTJDO0lBQ3RFLHlCQUEwQiwwQ0FBMEM7OztBQUdyRSxNQUFNLE9BQU8sY0FBYzs7OztJQUUxQixZQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQUQ5QyxTQUFJLEdBQUcseUJBQXlCLENBQUMsZUFBZSxDQUFDO0lBQ0EsQ0FBQztDQUMzRDs7O0lBRkEsOEJBQTBEOztJQUM5QyxpQ0FBMkM7O0FBRXhELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFFL0IsWUFBbUIsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUFEOUMsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDO0lBQ1AsQ0FBQztDQUMzRDs7O0lBRkEsbUNBQWlFOztJQUNyRCxzQ0FBMkM7O0FBRXhELE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFFakMsWUFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEL0MsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHdCQUF3QixDQUFDO0lBQ1IsQ0FBQztDQUM1RDs7O0lBRkEscUNBQW1FOztJQUN2RCx3Q0FBNEM7O0FBRXpELE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVSxTQUFJLEdBQUcseUJBQXlCLENBQUMsdUJBQXVCLENBQUM7SUFDbkUsQ0FBQztDQUFBOzs7SUFEQSxvQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2hhbmdlLXBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIHtcclxuXHRDSEFOR0VfUEFTU1dPUkQgPSBcIltVU0VSXVtQQVNTV09SRF0gQ0hBTkdFX1BBU1NXT1JEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NUQVJUXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9IENoYW5nZVBhc3N3b3JkIHwgQ2hhbmdlUGFzc3dvcmRTdGFydCB8IENoYW5nZVBhc3N3b3JkU3VjY2VlZCB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iXX0=
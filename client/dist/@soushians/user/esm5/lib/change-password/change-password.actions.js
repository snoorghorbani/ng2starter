/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ChangePasswordActionTypes = {
    CHANGE_PASSWORD: '[USER][PASSWORD] CHANGE_PASSWORD',
    PASSWORD_CHANGED_START: '[USER][PASSWORD] PASSWORD_CHANGED_START',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};
export { ChangePasswordActionTypes };
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
    return ChangePassword;
}());
export { ChangePassword };
if (false) {
    /** @type {?} */
    ChangePassword.prototype.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}
var ChangePasswordStart = /** @class */ (function () {
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
export { ChangePasswordStart };
if (false) {
    /** @type {?} */
    ChangePasswordStart.prototype.type;
    /** @type {?} */
    ChangePasswordStart.prototype.payload;
}
var ChangePasswordSucceed = /** @class */ (function () {
    function ChangePasswordSucceed(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return ChangePasswordSucceed;
}());
export { ChangePasswordSucceed };
if (false) {
    /** @type {?} */
    ChangePasswordSucceed.prototype.type;
    /** @type {?} */
    ChangePasswordSucceed.prototype.payload;
}
var ChangePasswordFailed = /** @class */ (function () {
    function ChangePasswordFailed() {
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return ChangePasswordFailed;
}());
export { ChangePasswordFailed };
if (false) {
    /** @type {?} */
    ChangePasswordFailed.prototype.type;
}
/** @typedef {?} */
var ChangePasswordAction;
export { ChangePasswordAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUlRLGlCQUEyQixrQ0FBa0M7SUFDN0Qsd0JBQTJCLHlDQUF5QztJQUNwRSwwQkFBMkIsMkNBQTJDO0lBQ3RFLHlCQUEyQiwwQ0FBMEM7OztBQUc3RSxJQUFBO0lBRVEsd0JBQW1CLE9BQW9DO1FBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO29CQUR2Qyx5QkFBeUIsQ0FBQyxlQUFlO0tBQ0c7eUJBWnBFO0lBYUMsQ0FBQTtBQUhELDBCQUdDOzs7Ozs7O0FBQ0QsSUFBQTtJQUVRLDZCQUFtQixPQUFvQztRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2QjtvQkFEdkMseUJBQXlCLENBQUMsc0JBQXNCO0tBQ0o7OEJBaEJwRTtJQWlCQyxDQUFBO0FBSEQsK0JBR0M7Ozs7Ozs7QUFDRCxJQUFBO0lBRVEsK0JBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4Qyx5QkFBeUIsQ0FBQyx3QkFBd0I7S0FDTDtnQ0FwQnJFO0lBcUJDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUNELElBQUE7O29CQUN3Qix5QkFBeUIsQ0FBQyx1QkFBdUI7OytCQXZCekU7SUF3QkMsQ0FBQTtBQUZELGdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG4gICAgICAgIENIQU5HRV9QQVNTV09SRCAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIENIQU5HRV9QQVNTV09SRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9XHJcbiAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3RhcnRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iXX0=
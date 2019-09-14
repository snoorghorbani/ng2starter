/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var CaptchaActionTypes = {
    GET_CAPTCHA: "[CAPTCHA][GET] GET_CAPTCHA",
    GET_CAPTCHA_START: "[CAPTCHA][GET] GET_CAPTCHA_START",
    GET_CAPTCHA_SUCCEED: "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
    GET_CAPTCHA_FAILED: "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
};
export { CaptchaActionTypes };
var GetCaptchaAction = /** @class */ (function () {
    function GetCaptchaAction() {
        this.type = CaptchaActionTypes.GET_CAPTCHA;
        // constructor(public payload: CaptchaModel) { }
    }
    return GetCaptchaAction;
}());
export { GetCaptchaAction };
if (false) {
    /** @type {?} */
    GetCaptchaAction.prototype.type;
}
var GetCaptchaStartAction = /** @class */ (function () {
    function GetCaptchaStartAction(payload) {
        this.payload = payload;
        this.type = CaptchaActionTypes.GET_CAPTCHA_START;
    }
    return GetCaptchaStartAction;
}());
export { GetCaptchaStartAction };
if (false) {
    /** @type {?} */
    GetCaptchaStartAction.prototype.type;
    /** @type {?} */
    GetCaptchaStartAction.prototype.payload;
}
var GetCaptchaSucceedAction = /** @class */ (function () {
    function GetCaptchaSucceedAction() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
    }
    return GetCaptchaSucceedAction;
}());
export { GetCaptchaSucceedAction };
if (false) {
    /** @type {?} */
    GetCaptchaSucceedAction.prototype.type;
}
var GetCaptchaFailedAction = /** @class */ (function () {
    function GetCaptchaFailedAction() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
    }
    return GetCaptchaFailedAction;
}());
export { GetCaptchaFailedAction };
if (false) {
    /** @type {?} */
    GetCaptchaFailedAction.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUMsYUFBYyw0QkFBNEI7SUFDMUMsbUJBQW9CLGtDQUFrQztJQUN0RCxxQkFBc0Isb0NBQW9DO0lBQzFELG9CQUFxQixtQ0FBbUM7OztBQUd6RDtJQUFBO1FBQ1UsU0FBSSxHQUFHLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztRQUMvQyxnREFBZ0Q7SUFDakQsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQSxnQ0FBK0M7O0FBR2hEO0lBRUMsK0JBQW1CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFEL0IsU0FBSSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO0lBQ1QsQ0FBQztJQUM5Qyw0QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkEscUNBQXFEOztJQUN6Qyx3Q0FBNEI7O0FBRXpDO0lBQUE7UUFDVSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDeEQsQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSx1Q0FBdUQ7O0FBRXhEO0lBQUE7UUFDVSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7SUFDdkQsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQSxzQ0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jYXB0Y2hhLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBDYXB0Y2hhQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DQVBUQ0hBID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQVwiLFxyXG5cdEdFVF9DQVBUQ0hBX1NUQVJUID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQV9TVEFSVFwiLFxyXG5cdEdFVF9DQVBUQ0hBX1NVQ0NFRUQgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBX1NVQ0NFRURcIixcclxuXHRHRVRfQ0FQVENIQV9GQUlMRUQgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBO1xyXG5cdC8vIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXB0Y2hhTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEFfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcHRjaGFNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEFfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDYXB0Y2hhQWN0aW9ucyA9IEdldENhcHRjaGFBY3Rpb24gfCBHZXRDYXB0Y2hhU3RhcnRBY3Rpb24gfCBHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbiB8IEdldENhcHRjaGFGYWlsZWRBY3Rpb247XHJcbiJdfQ==
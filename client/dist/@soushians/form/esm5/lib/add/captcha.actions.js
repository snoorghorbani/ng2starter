/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    }
    return GetCaptchaAction;
}());
export { GetCaptchaAction };
function GetCaptchaAction_tsickle_Closure_declarations() {
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
function GetCaptchaStartAction_tsickle_Closure_declarations() {
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
function GetCaptchaSucceedAction_tsickle_Closure_declarations() {
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
function GetCaptchaFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetCaptchaFailedAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQU1lLDRCQUE0Qjt1QkFDdEIsa0NBQWtDO3lCQUNoQyxvQ0FBb0M7d0JBQ3JDLG1DQUFtQzs7O0FBR3pELElBQUE7O29CQUNpQixrQkFBa0IsQ0FBQyxXQUFXOzsyQkFiL0M7SUFlQyxDQUFBO0FBSEQsNEJBR0M7Ozs7O0FBQ0QsSUFBQTtJQUVDLCtCQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUR4QixrQkFBa0IsQ0FBQyxpQkFBaUI7S0FDUDtnQ0FsQjlDO0lBbUJDLENBQUE7QUFIRCxpQ0FHQzs7Ozs7OztBQUNELElBQUE7O29CQUNpQixrQkFBa0IsQ0FBQyxtQkFBbUI7O2tDQXJCdkQ7SUFzQkMsQ0FBQTtBQUZELG1DQUVDOzs7OztBQUNELElBQUE7O29CQUNpQixrQkFBa0IsQ0FBQyxrQkFBa0I7O2lDQXhCdEQ7SUF5QkMsQ0FBQTtBQUZELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2FwdGNoYS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQ2FwdGNoYUFjdGlvblR5cGVzIHtcclxuXHRHRVRfQ0FQVENIQSA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFcIixcclxuXHRHRVRfQ0FQVENIQV9TVEFSVCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfU1RBUlRcIixcclxuXHRHRVRfQ0FQVENIQV9TVUNDRUVEID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQV9TVUNDRUVEXCIsXHJcblx0R0VUX0NBUFRDSEFfRkFJTEVEID0gXCJbQ0FQVENIQV1bR0VUXSBHRVRfQ0FQVENIQV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQTtcclxuXHQvLyBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FwdGNoYU1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDYXB0Y2hhTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2FwdGNoYUFjdGlvblR5cGVzLkdFVF9DQVBUQ0hBX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbnMgPSBHZXRDYXB0Y2hhQWN0aW9uIHwgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uIHwgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24gfCBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uO1xyXG4iXX0=
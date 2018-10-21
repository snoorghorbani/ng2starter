/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const CaptchaActionTypes = {
    GET_CAPTCHA: "[CAPTCHA][GET] GET_CAPTCHA",
    GET_CAPTCHA_START: "[CAPTCHA][GET] GET_CAPTCHA_START",
    GET_CAPTCHA_SUCCEED: "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
    GET_CAPTCHA_FAILED: "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
};
export { CaptchaActionTypes };
export class GetCaptchaAction {
    constructor() {
        this.type = CaptchaActionTypes.GET_CAPTCHA;
    }
}
function GetCaptchaAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetCaptchaAction.prototype.type;
}
export class GetCaptchaStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CaptchaActionTypes.GET_CAPTCHA_START;
    }
}
function GetCaptchaStartAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetCaptchaStartAction.prototype.type;
    /** @type {?} */
    GetCaptchaStartAction.prototype.payload;
}
export class GetCaptchaSucceedAction {
    constructor() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
    }
}
function GetCaptchaSucceedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetCaptchaSucceedAction.prototype.type;
}
export class GetCaptchaFailedAction {
    constructor() {
        this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
    }
}
function GetCaptchaFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    GetCaptchaFailedAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL2FkZC9jYXB0Y2hhLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2lCQU1lLDRCQUE0Qjt1QkFDdEIsa0NBQWtDO3lCQUNoQyxvQ0FBb0M7d0JBQ3JDLG1DQUFtQzs7O0FBR3pELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLFdBQVc7O0NBRTlDOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFxQjtRQUFyQixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUR4QixrQkFBa0IsQ0FBQyxpQkFBaUI7S0FDUDtDQUM3Qzs7Ozs7OztBQUNELE1BQU07O29CQUNXLGtCQUFrQixDQUFDLG1CQUFtQjs7Q0FDdEQ7Ozs7O0FBQ0QsTUFBTTs7b0JBQ1csa0JBQWtCLENBQUMsa0JBQWtCOztDQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NhcHRjaGEubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENhcHRjaGFBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NBUFRDSEEgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBXCIsXHJcblx0R0VUX0NBUFRDSEFfU1RBUlQgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBX1NUQVJUXCIsXHJcblx0R0VUX0NBUFRDSEFfU1VDQ0VFRCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfU1VDQ0VFRFwiLFxyXG5cdEdFVF9DQVBUQ0hBX0ZBSUxFRCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEE7XHJcblx0Ly8gY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcHRjaGFNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FwdGNoYU1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEFfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcHRjaGFBY3Rpb25zID0gR2V0Q2FwdGNoYUFjdGlvbiB8IEdldENhcHRjaGFTdGFydEFjdGlvbiB8IEdldENhcHRjaGFTdWNjZWVkQWN0aW9uIHwgR2V0Q2FwdGNoYUZhaWxlZEFjdGlvbjtcclxuIl19
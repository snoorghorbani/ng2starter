/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
    /**
     * @param {?} payload
     */
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
    return ChangePassword;
}());
export { ChangePassword };
function ChangePassword_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePassword.prototype.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}
var ChangePasswordStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
export { ChangePasswordStart };
function ChangePasswordStart_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordStart.prototype.type;
    /** @type {?} */
    ChangePasswordStart.prototype.payload;
}
var ChangePasswordSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ChangePasswordSucceed(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return ChangePasswordSucceed;
}());
export { ChangePasswordSucceed };
function ChangePasswordSucceed_tsickle_Closure_declarations() {
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
function ChangePasswordFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordFailed.prototype.type;
}
//# sourceMappingURL=change-password.actions.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ChangePasswordActionTypes = {
    CHANGE_PASSWORD: '[USER][PASSWORD] CHANGE_PASSWORD',
    PASSWORD_CHANGED_START: '[USER][PASSWORD] PASSWORD_CHANGED_START',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
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
function ChangePassword_tsickle_Closure_declarations() {
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
function ChangePasswordStart_tsickle_Closure_declarations() {
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
function ChangePasswordSucceed_tsickle_Closure_declarations() {
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
function ChangePasswordFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    ChangePasswordFailed.prototype.type;
}
//# sourceMappingURL=change-password.actions.js.map

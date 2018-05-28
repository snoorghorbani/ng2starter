/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ResetPasswordRequestActionTypes = {
    GET_RESET_PASSWORD_LINK: '[USER][PASSWORD] GET_RESET_PASSWORD_LINK',
    RESET_PASSWORD_LINK_REQUEST_START: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START',
    RESET_PASSWORD_LINK_REQUEST_SUCCEED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED',
    RESET_PASSWORD_LINK_REQUEST_FAILED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED',
    DISABLE_GET_LINK: '[USER][PASSWORD] DISABLE_GET_LINK',
    ENABLE_GET_LINK: '[USER][PASSWORD] ENABLE_GET_LINK',
    MAXIMUM_TRY_HAPPEND: '[USER][PASSWORD] MAXIMUM_TRY_HAPPEND',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};
export { ResetPasswordRequestActionTypes };
export class GetResetPasswordLink {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
    }
}
function GetResetPasswordLink_tsickle_Closure_declarations() {
    /** @type {?} */
    GetResetPasswordLink.prototype.type;
    /** @type {?} */
    GetResetPasswordLink.prototype.payload;
}
export class ResetPasswordLinkRequestStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
    }
}
function ResetPasswordLinkRequestStart_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.type;
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.payload;
}
export class ResetPasswordLinkRequestSucceed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
    }
}
function ResetPasswordLinkRequestSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordLinkRequestSucceed.prototype.type;
}
export class ResetPasswordLinkRequestFailed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
    }
}
function ResetPasswordLinkRequestFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    ResetPasswordLinkRequestFailed.prototype.type;
}
export class DisableGetLink {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
    }
}
function DisableGetLink_tsickle_Closure_declarations() {
    /** @type {?} */
    DisableGetLink.prototype.type;
}
export class EnableGetLink {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
    }
}
function EnableGetLink_tsickle_Closure_declarations() {
    /** @type {?} */
    EnableGetLink.prototype.type;
}
export class MaximumTryHappend {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
    }
}
function MaximumTryHappend_tsickle_Closure_declarations() {
    /** @type {?} */
    MaximumTryHappend.prototype.type;
}
export class PasswordChangedSucceed {
    constructor() {
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
}
function PasswordChangedSucceed_tsickle_Closure_declarations() {
    /** @type {?} */
    PasswordChangedSucceed.prototype.type;
}
export class PasswordChangedFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
    }
}
function PasswordChangedFailed_tsickle_Closure_declarations() {
    /** @type {?} */
    PasswordChangedFailed.prototype.type;
    /** @type {?} */
    PasswordChangedFailed.prototype.payload;
}
//# sourceMappingURL=reset-password-request.actions.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export const /** @type {?} */ NEW_CAPTCHA = '[captcha] new captcha';
export const /** @type {?} */ TOKEN_REQUESTED = '[captcha] token_requested';
export const /** @type {?} */ TOKEN_RECEIVED = '[captcha] token_received';
export const /** @type {?} */ CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
export const /** @type {?} */ CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
export const /** @type {?} */ CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
export const /** @type {?} */ CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
export class NewCaptcha {
    constructor() {
        this.type = NEW_CAPTCHA;
    }
}
function NewCaptcha_tsickle_Closure_declarations() {
    /** @type {?} */
    NewCaptcha.prototype.type;
}
export class TokenRequested {
    constructor() {
        this.type = TOKEN_REQUESTED;
    }
}
function TokenRequested_tsickle_Closure_declarations() {
    /** @type {?} */
    TokenRequested.prototype.type;
}
export class TokenReceived {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TOKEN_RECEIVED;
    }
}
function TokenReceived_tsickle_Closure_declarations() {
    /** @type {?} */
    TokenReceived.prototype.type;
    /** @type {?} */
    TokenReceived.prototype.payload;
}
export class CaptchaImageRequested {
    constructor() {
        this.type = CAPTCHA_IMAGE_REQUESTED;
    }
}
function CaptchaImageRequested_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaImageRequested.prototype.type;
}
export class CaptchaImageLoaded {
    constructor() {
        this.type = CAPTCHA_IMAGE_LOADED;
    }
}
function CaptchaImageLoaded_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaImageLoaded.prototype.type;
}
export class CaptchaEntered {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CAPTCHA_ENTERED;
    }
}
function CaptchaEntered_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaEntered.prototype.type;
    /** @type {?} */
    CaptchaEntered.prototype.payload;
}
export class ClearCaptcha {
    constructor() {
        this.type = CLEAR_CAPTCHA;
    }
}
function ClearCaptcha_tsickle_Closure_declarations() {
    /** @type {?} */
    ClearCaptcha.prototype.type;
}
//# sourceMappingURL=captcha.actions.js.map

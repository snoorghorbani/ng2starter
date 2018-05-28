/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var /** @type {?} */ NEW_CAPTCHA = '[captcha] new captcha';
export var /** @type {?} */ TOKEN_REQUESTED = '[captcha] token_requested';
export var /** @type {?} */ TOKEN_RECEIVED = '[captcha] token_received';
export var /** @type {?} */ CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
export var /** @type {?} */ CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
export var /** @type {?} */ CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
export var /** @type {?} */ CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
var NewCaptcha = /** @class */ (function () {
    function NewCaptcha() {
        this.type = NEW_CAPTCHA;
    }
    return NewCaptcha;
}());
export { NewCaptcha };
function NewCaptcha_tsickle_Closure_declarations() {
    /** @type {?} */
    NewCaptcha.prototype.type;
}
var TokenRequested = /** @class */ (function () {
    function TokenRequested() {
        this.type = TOKEN_REQUESTED;
    }
    return TokenRequested;
}());
export { TokenRequested };
function TokenRequested_tsickle_Closure_declarations() {
    /** @type {?} */
    TokenRequested.prototype.type;
}
var TokenReceived = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function TokenReceived(payload) {
        this.payload = payload;
        this.type = TOKEN_RECEIVED;
    }
    return TokenReceived;
}());
export { TokenReceived };
function TokenReceived_tsickle_Closure_declarations() {
    /** @type {?} */
    TokenReceived.prototype.type;
    /** @type {?} */
    TokenReceived.prototype.payload;
}
var CaptchaImageRequested = /** @class */ (function () {
    function CaptchaImageRequested() {
        this.type = CAPTCHA_IMAGE_REQUESTED;
    }
    return CaptchaImageRequested;
}());
export { CaptchaImageRequested };
function CaptchaImageRequested_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaImageRequested.prototype.type;
}
var CaptchaImageLoaded = /** @class */ (function () {
    function CaptchaImageLoaded() {
        this.type = CAPTCHA_IMAGE_LOADED;
    }
    return CaptchaImageLoaded;
}());
export { CaptchaImageLoaded };
function CaptchaImageLoaded_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaImageLoaded.prototype.type;
}
var CaptchaEntered = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function CaptchaEntered(payload) {
        this.payload = payload;
        this.type = CAPTCHA_ENTERED;
    }
    return CaptchaEntered;
}());
export { CaptchaEntered };
function CaptchaEntered_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaEntered.prototype.type;
    /** @type {?} */
    CaptchaEntered.prototype.payload;
}
var ClearCaptcha = /** @class */ (function () {
    function ClearCaptcha() {
        this.type = CLEAR_CAPTCHA;
    }
    return ClearCaptcha;
}());
export { ClearCaptcha };
function ClearCaptcha_tsickle_Closure_declarations() {
    /** @type {?} */
    ClearCaptcha.prototype.type;
}
//# sourceMappingURL=captcha.actions.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var NEW_CAPTCHA = '[captcha] new captcha';
/** @type {?} */
export var TOKEN_REQUESTED = '[captcha] token_requested';
/** @type {?} */
export var TOKEN_RECEIVED = '[captcha] token_received';
/** @type {?} */
export var CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
/** @type {?} */
export var CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
/** @type {?} */
export var CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
/** @type {?} */
export var CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
var NewCaptcha = /** @class */ (function () {
    function NewCaptcha() {
        this.type = NEW_CAPTCHA;
    }
    return NewCaptcha;
}());
export { NewCaptcha };
if (false) {
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
if (false) {
    /** @type {?} */
    TokenRequested.prototype.type;
}
var TokenReceived = /** @class */ (function () {
    function TokenReceived(payload) {
        this.payload = payload;
        this.type = TOKEN_RECEIVED;
    }
    return TokenReceived;
}());
export { TokenReceived };
if (false) {
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
if (false) {
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
if (false) {
    /** @type {?} */
    CaptchaImageLoaded.prototype.type;
}
var CaptchaEntered = /** @class */ (function () {
    function CaptchaEntered(payload) {
        this.payload = payload;
        this.type = CAPTCHA_ENTERED;
    }
    return CaptchaEntered;
}());
export { CaptchaEntered };
if (false) {
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
if (false) {
    /** @type {?} */
    ClearCaptcha.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2NhcHRjaGEuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sS0FBTyxXQUFXLEdBQUcsdUJBQXVCOztBQUNsRCxNQUFNLEtBQU8sZUFBZSxHQUFHLDJCQUEyQjs7QUFDMUQsTUFBTSxLQUFPLGNBQWMsR0FBRywwQkFBMEI7O0FBQ3hELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxtQ0FBbUM7O0FBQzFFLE1BQU0sS0FBTyxvQkFBb0IsR0FBRyxnQ0FBZ0M7O0FBQ3BFLE1BQU0sS0FBTyxlQUFlLEdBQUcsMkJBQTJCOztBQUMxRCxNQUFNLEtBQU8sYUFBYSxHQUFHLHlCQUF5QjtBQUV0RDtJQUFBO1FBQ2lCLFNBQUksR0FBRyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFETywwQkFBNEI7O0FBRXBDO0lBQUE7UUFDaUIsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURPLDhCQUFnQzs7QUFFeEM7SUFFUSx1QkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUQ3QixTQUFJLEdBQUcsY0FBYyxDQUFDO0lBQ1csQ0FBQztJQUNuRCxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRk8sNkJBQStCOztJQUNuQixnQ0FBMEI7O0FBRTlDO0lBQUE7UUFDaUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBQ2hELENBQUM7SUFBRCw0QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRE8scUNBQXdDOztBQUVoRDtJQUFBO1FBQ2lCLFNBQUksR0FBRyxvQkFBb0IsQ0FBQztJQUM3QyxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7OztJQURPLGtDQUFxQzs7QUFFN0M7SUFFUSx3QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUNNLENBQUM7SUFDL0MscUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZPLDhCQUFnQzs7SUFDcEIsaUNBQXNCOztBQUUxQztJQUFBO1FBQ2lCLFNBQUksR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFETyw0QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBUb2tlbk1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfQ0FQVENIQSA9ICdbY2FwdGNoYV0gbmV3IGNhcHRjaGEnO1xyXG5leHBvcnQgY29uc3QgVE9LRU5fUkVRVUVTVEVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgVE9LRU5fUkVDRUlWRUQgPSAnW2NhcHRjaGFdIHRva2VuX3JlY2VpdmVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEID0gJ1tjYXB0Y2hhXSBjYXB0Y2hhX2ltYWdlX3JlcXVlc3RlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX0xPQURFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9sb2FkZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9FTlRFUkVEID0gJ1tjYXB0Y2hhXSBDQVBUQ0hBX0VOVEVSRUQnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0FQVENIQSA9ICdbY2FwdGNoYV0gQ0xFQVJfQ0FQVENIQSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IE5FV19DQVBUQ0hBO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2tlblJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFRPS0VOX1JFUVVFU1RFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZWNlaXZlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFRPS0VOX1JFQ0VJVkVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUb2tlbk1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUltYWdlUmVxdWVzdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9JTUFHRV9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZUxvYWRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfTE9BREVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhRW50ZXJlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfRU5URVJFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJDYXB0Y2hhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgdHlwZSBDYXB0Y2hhQWN0aW9uID1cclxuICAgICAgICB8IE5ld0NhcHRjaGFcclxuICAgICAgICB8IFRva2VuUmVxdWVzdGVkXHJcbiAgICAgICAgfCBUb2tlblJlY2VpdmVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VSZXF1ZXN0ZWRcclxuICAgICAgICB8IENhcHRjaGFJbWFnZUxvYWRlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUVudGVyZWRcclxuICAgICAgICB8IENsZWFyQ2FwdGNoYTsiXX0=
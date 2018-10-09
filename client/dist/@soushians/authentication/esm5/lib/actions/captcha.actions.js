/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @typedef {?} */
var CaptchaAction;
export { CaptchaAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2NhcHRjaGEuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQWEsV0FBVyxHQUFHLHVCQUF1QixDQUFDOztBQUNuRCxXQUFhLGVBQWUsR0FBRywyQkFBMkIsQ0FBQzs7QUFDM0QsV0FBYSxjQUFjLEdBQUcsMEJBQTBCLENBQUM7O0FBQ3pELFdBQWEsdUJBQXVCLEdBQUcsbUNBQW1DLENBQUM7O0FBQzNFLFdBQWEsb0JBQW9CLEdBQUcsZ0NBQWdDLENBQUM7O0FBQ3JFLFdBQWEsZUFBZSxHQUFHLDJCQUEyQixDQUFDOztBQUMzRCxXQUFhLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztBQUV2RCxJQUFBOztvQkFDd0IsV0FBVzs7cUJBYm5DO0lBY0MsQ0FBQTtBQUZELHNCQUVDOzs7OztBQUNELElBQUE7O29CQUN3QixlQUFlOzt5QkFoQnZDO0lBaUJDLENBQUE7QUFGRCwwQkFFQzs7Ozs7QUFDRCxJQUFBO0lBRVEsdUJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7b0JBRHRCLGNBQWM7S0FDYTt3QkFwQm5EO0lBcUJDLENBQUE7QUFIRCx5QkFHQzs7Ozs7OztBQUNELElBQUE7O29CQUN3Qix1QkFBdUI7O2dDQXZCL0M7SUF3QkMsQ0FBQTtBQUZELGlDQUVDOzs7OztBQUNELElBQUE7O29CQUN3QixvQkFBb0I7OzZCQTFCNUM7SUEyQkMsQ0FBQTtBQUZELDhCQUVDOzs7OztBQUNELElBQUE7SUFFUSx3QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBRGxCLGVBQWU7S0FDUTt5QkE5Qi9DO0lBK0JDLENBQUE7QUFIRCwwQkFHQzs7Ozs7OztBQUNELElBQUE7O29CQUN3QixhQUFhOzt1QkFqQ3JDO0lBa0NDLENBQUE7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFRva2VuTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBuZXcgY2FwdGNoYSc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIHRva2VuX3JlcXVlc3RlZCc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRUNFSVZFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVjZWl2ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfSU1BR0VfTE9BREVEID0gJ1tjYXB0Y2hhXSBjYXB0Y2hhX2ltYWdlX2xvYWRlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0VOVEVSRUQgPSAnW2NhcHRjaGFdIENBUFRDSEFfRU5URVJFRCc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBDTEVBUl9DQVBUQ0hBJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdDYXB0Y2hhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gTkVXX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVxdWVzdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2tlblJlY2VpdmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVDRUlWRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRva2VuTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VSZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUltYWdlTG9hZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9JTUFHRV9MT0FERUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFFbnRlcmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9FTlRFUkVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhckNhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DQVBUQ0hBO1xyXG59XHJcbmV4cG9ydCB0eXBlIENhcHRjaGFBY3Rpb24gPVxyXG4gICAgICAgIHwgTmV3Q2FwdGNoYVxyXG4gICAgICAgIHwgVG9rZW5SZXF1ZXN0ZWRcclxuICAgICAgICB8IFRva2VuUmVjZWl2ZWRcclxuICAgICAgICB8IENhcHRjaGFJbWFnZVJlcXVlc3RlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlTG9hZGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhRW50ZXJlZFxyXG4gICAgICAgIHwgQ2xlYXJDYXB0Y2hhOyJdfQ==
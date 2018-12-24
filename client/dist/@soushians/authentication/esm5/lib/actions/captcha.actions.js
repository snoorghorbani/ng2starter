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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2NhcHRjaGEuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLFdBQWEsV0FBVyxHQUFHLHVCQUF1QixDQUFDOztBQUNuRCxXQUFhLGVBQWUsR0FBRywyQkFBMkIsQ0FBQzs7QUFDM0QsV0FBYSxjQUFjLEdBQUcsMEJBQTBCLENBQUM7O0FBQ3pELFdBQWEsdUJBQXVCLEdBQUcsbUNBQW1DLENBQUM7O0FBQzNFLFdBQWEsb0JBQW9CLEdBQUcsZ0NBQWdDLENBQUM7O0FBQ3JFLFdBQWEsZUFBZSxHQUFHLDJCQUEyQixDQUFDOztBQUMzRCxXQUFhLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQztBQUV2RCxJQUFBOztRQUNRLFlBQWdCLFdBQVcsQ0FBQzs7cUJBYnBDO0lBY0MsQ0FBQTtBQUZELHNCQUVDOzs7OztBQUNELElBQUE7O1FBQ1EsWUFBZ0IsZUFBZSxDQUFDOzt5QkFoQnhDO0lBaUJDLENBQUE7QUFGRCwwQkFFQzs7Ozs7QUFDRCxJQUFBO0lBRVEsdUJBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFEdEMsWUFBZ0IsY0FBYyxDQUFDO0tBQ1k7d0JBcEJuRDtJQXFCQyxDQUFBO0FBSEQseUJBR0M7Ozs7Ozs7QUFDRCxJQUFBOztRQUNRLFlBQWdCLHVCQUF1QixDQUFDOztnQ0F2QmhEO0lBd0JDLENBQUE7QUFGRCxpQ0FFQzs7Ozs7QUFDRCxJQUFBOztRQUNRLFlBQWdCLG9CQUFvQixDQUFDOzs2QkExQjdDO0lBMkJDLENBQUE7QUFGRCw4QkFFQzs7Ozs7QUFDRCxJQUFBO0lBRVEsd0JBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRGxDLFlBQWdCLGVBQWUsQ0FBQztLQUNPO3lCQTlCL0M7SUErQkMsQ0FBQTtBQUhELDBCQUdDOzs7Ozs7O0FBQ0QsSUFBQTs7UUFDUSxZQUFnQixhQUFhLENBQUM7O3VCQWpDdEM7SUFrQ0MsQ0FBQTtBQUZELHdCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0NBUFRDSEEgPSAnW2NhcHRjaGFdIG5ldyBjYXB0Y2hhJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZWNlaXZlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9MT0FERUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfRU5URVJFRCA9ICdbY2FwdGNoYV0gQ0FQVENIQV9FTlRFUkVEJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUFRDSEEgPSAnW2NhcHRjaGFdIENMRUFSX0NBUFRDSEEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBORVdfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVjZWl2ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRUNFSVZFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9rZW5Nb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZVJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VMb2FkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX0xPQURFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVudGVyZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0VOVEVSRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyQ2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbiA9XHJcbiAgICAgICAgfCBOZXdDYXB0Y2hhXHJcbiAgICAgICAgfCBUb2tlblJlcXVlc3RlZFxyXG4gICAgICAgIHwgVG9rZW5SZWNlaXZlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlUmVxdWVzdGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VMb2FkZWRcclxuICAgICAgICB8IENhcHRjaGFFbnRlcmVkXHJcbiAgICAgICAgfCBDbGVhckNhcHRjaGE7Il19
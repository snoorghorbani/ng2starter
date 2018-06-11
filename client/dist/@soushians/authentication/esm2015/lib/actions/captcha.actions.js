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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hY3Rpb25zL2NhcHRjaGEuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsTUFBTSxDQUFDLHVCQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztBQUNuRCxNQUFNLENBQUMsdUJBQU0sZUFBZSxHQUFHLDJCQUEyQixDQUFDO0FBQzNELE1BQU0sQ0FBQyx1QkFBTSxjQUFjLEdBQUcsMEJBQTBCLENBQUM7QUFDekQsTUFBTSxDQUFDLHVCQUFNLHVCQUF1QixHQUFHLG1DQUFtQyxDQUFDO0FBQzNFLE1BQU0sQ0FBQyx1QkFBTSxvQkFBb0IsR0FBRyxnQ0FBZ0MsQ0FBQztBQUNyRSxNQUFNLENBQUMsdUJBQU0sZUFBZSxHQUFHLDJCQUEyQixDQUFDO0FBQzNELE1BQU0sQ0FBQyx1QkFBTSxhQUFhLEdBQUcseUJBQXlCLENBQUM7QUFFdkQsTUFBTTs7b0JBQ2tCLFdBQVc7O0NBQ2xDOzs7OztBQUNELE1BQU07O29CQUNrQixlQUFlOztDQUN0Qzs7Ozs7QUFDRCxNQUFNOzs7O0lBRUUsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFEdEIsY0FBYztLQUNhO0NBQ2xEOzs7Ozs7O0FBQ0QsTUFBTTs7b0JBQ2tCLHVCQUF1Qjs7Q0FDOUM7Ozs7O0FBQ0QsTUFBTTs7b0JBQ2tCLG9CQUFvQjs7Q0FDM0M7Ozs7O0FBQ0QsTUFBTTs7OztJQUVFLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQURsQixlQUFlO0tBQ1E7Q0FDOUM7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDa0IsYUFBYTs7Q0FDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBUb2tlbk1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBORVdfQ0FQVENIQSA9ICdbY2FwdGNoYV0gbmV3IGNhcHRjaGEnO1xyXG5leHBvcnQgY29uc3QgVE9LRU5fUkVRVUVTVEVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgVE9LRU5fUkVDRUlWRUQgPSAnW2NhcHRjaGFdIHRva2VuX3JlY2VpdmVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEID0gJ1tjYXB0Y2hhXSBjYXB0Y2hhX2ltYWdlX3JlcXVlc3RlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX0xPQURFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9sb2FkZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9FTlRFUkVEID0gJ1tjYXB0Y2hhXSBDQVBUQ0hBX0VOVEVSRUQnO1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0FQVENIQSA9ICdbY2FwdGNoYV0gQ0xFQVJfQ0FQVENIQSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IE5FV19DQVBUQ0hBO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2tlblJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFRPS0VOX1JFUVVFU1RFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZWNlaXZlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFRPS0VOX1JFQ0VJVkVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUb2tlbk1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUltYWdlUmVxdWVzdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9JTUFHRV9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZUxvYWRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfTE9BREVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhRW50ZXJlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfRU5URVJFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJDYXB0Y2hhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0xFQVJfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgdHlwZSBDYXB0Y2hhQWN0aW9uID1cclxuICAgICAgICB8IE5ld0NhcHRjaGFcclxuICAgICAgICB8IFRva2VuUmVxdWVzdGVkXHJcbiAgICAgICAgfCBUb2tlblJlY2VpdmVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VSZXF1ZXN0ZWRcclxuICAgICAgICB8IENhcHRjaGFJbWFnZUxvYWRlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUVudGVyZWRcclxuICAgICAgICB8IENsZWFyQ2FwdGNoYTsiXX0=
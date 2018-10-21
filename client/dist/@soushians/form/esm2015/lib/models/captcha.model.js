/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class CaptchaModel {
    /**
     * @param {?=} __0
     */
    constructor({ captchaImg, captchaCode } = {}) {
        this.captchaImg = `${captchaImg}?${Math.random()}`;
        this.captchaCode = captchaCode || "";
    }
}
function CaptchaModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CaptchaModel.prototype.captchaImg;
    /** @type {?} */
    CaptchaModel.prototype.captchaCode;
}
export var UpsertCaptchaApiModel;
(function (UpsertCaptchaApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.Captcha.captchaCode;
        }
    }
    UpsertCaptchaApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Captcha;
    }
    class Response {
        constructor() { }
    }
    UpsertCaptchaApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTTs7OztJQUdMLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxLQUFxRCxFQUFFO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksRUFBRSxDQUFDO0tBQ3JDO0NBQ0Q7Ozs7Ozs7QUFFRCxNQUFNLEtBQVcscUJBQXFCO0FBQXRDLFdBQWlCLHFCQUFxQjtJQUNyQzs7OztRQUVDLFlBQVksWUFBb0QsRUFBRTtZQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7Ozs7UUFDRCxjQUFjO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ2hDO0tBQ0Q7SUFSWSw2QkFBTzs7Ozs7SUFTcEI7UUFFQyxpQkFBaUI7S0FDakI7SUFIWSw4QkFBUTs7Ozs7R0FWTCxxQkFBcUIsS0FBckIscUJBQXFCLFFBY3JDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhTW9kZWwge1xyXG5cdGNhcHRjaGFJbWc6IHN0cmluZztcclxuXHRjYXB0Y2hhQ29kZTogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHsgY2FwdGNoYUltZywgY2FwdGNoYUNvZGUgfTogeyBjYXB0Y2hhSW1nPzogc3RyaW5nOyBjYXB0Y2hhQ29kZT86IHN0cmluZzsgfSA9IHt9KSB7XHJcblx0XHR0aGlzLmNhcHRjaGFJbWcgPSBgJHtjYXB0Y2hhSW1nfT8ke01hdGgucmFuZG9tKCl9YDtcclxuXHRcdHRoaXMuY2FwdGNoYUNvZGUgPSBjYXB0Y2hhQ29kZSB8fCBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRDYXB0Y2hhQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdENhcHRjaGE6IENhcHRjaGFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogUGFydGlhbDxVcHNlcnRDYXB0Y2hhQXBpTW9kZWwuUmVxdWVzdD4gPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLkNhcHRjaGEuY2FwdGNoYUNvZGU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IENhcHRjaGFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0fVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
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
    if (false) {
        /** @type {?} */
        Request.prototype.Captcha;
    }
    class Response {
        constructor() { }
    }
    UpsertCaptchaApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHeEIsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEtBQXFELEVBQUU7UUFDM0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxFQUFFLENBQUM7S0FDckM7Q0FDRDs7Ozs7OztBQUVELE1BQU0sS0FBVyxxQkFBcUI7QUFBdEMsV0FBaUIscUJBQXFCO0lBQ3JDLE1BQWEsT0FBTzs7OztRQUVuQixZQUFZLFlBQW9ELEVBQUU7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFOzs7O1FBQ0QsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDaEM7S0FDRDtJQVJZLDZCQUFPOzs7OztJQVNwQixNQUFhLFFBQVE7UUFFcEIsaUJBQWlCO0tBQ2pCO0lBSFksOEJBQVE7Ozs7O0dBVkwscUJBQXFCLEtBQXJCLHFCQUFxQixRQWNyQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYU1vZGVsIHtcclxuXHRjYXB0Y2hhSW1nOiBzdHJpbmc7XHJcblx0Y2FwdGNoYUNvZGU6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IGNhcHRjaGFJbWcsIGNhcHRjaGFDb2RlIH06IHsgY2FwdGNoYUltZz86IHN0cmluZzsgY2FwdGNoYUNvZGU/OiBzdHJpbmc7IH0gPSB7fSkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhSW1nID0gYCR7Y2FwdGNoYUltZ30/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0XHR0aGlzLmNhcHRjaGFDb2RlID0gY2FwdGNoYUNvZGUgfHwgXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRDYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0Q2FwdGNoYUFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5DYXB0Y2hhLmNhcHRjaGFDb2RlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdH1cclxufVxyXG4iXX0=
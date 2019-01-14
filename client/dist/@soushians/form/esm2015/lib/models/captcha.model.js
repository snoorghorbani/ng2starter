/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxPQUFPLFlBQVk7Ozs7SUFHeEIsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEtBQXFELEVBQUU7UUFDM0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNEOzs7SUFOQSxrQ0FBbUI7O0lBQ25CLG1DQUFvQjs7QUFPckIsTUFBTSxLQUFXLHFCQUFxQixDQWNyQztBQWRELFdBQWlCLHFCQUFxQjtJQUNyQyxNQUFhLE9BQU87Ozs7UUFFbkIsWUFBWSxZQUFvRCxFQUFFO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDOzs7O1FBQ0QsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDakMsQ0FBQztLQUNEO0lBUlksNkJBQU8sVUFRbkIsQ0FBQTs7O1FBUEEsMEJBQXNCOztJQVF2QixNQUFhLFFBQVE7UUFFcEIsZ0JBQWdCLENBQUM7S0FDakI7SUFIWSw4QkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBcUI7O0FBR3ZCLENBQUMsRUFkZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWNyQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYU1vZGVsIHtcclxuXHRjYXB0Y2hhSW1nOiBzdHJpbmc7XHJcblx0Y2FwdGNoYUNvZGU6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IGNhcHRjaGFJbWcsIGNhcHRjaGFDb2RlIH06IHsgY2FwdGNoYUltZz86IHN0cmluZzsgY2FwdGNoYUNvZGU/OiBzdHJpbmc7IH0gPSB7fSkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhSW1nID0gYCR7Y2FwdGNoYUltZ30/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0XHR0aGlzLmNhcHRjaGFDb2RlID0gY2FwdGNoYUNvZGUgfHwgXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRDYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0Q2FwdGNoYUFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5DYXB0Y2hhLmNhcHRjaGFDb2RlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdH1cclxufVxyXG4iXX0=
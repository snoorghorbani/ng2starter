/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CaptchaModel = /** @class */ (function () {
    function CaptchaModel(_a) {
        var _b = _a === void 0 ? {} : _a, captchaImg = _b.captchaImg, captchaCode = _b.captchaCode;
        this.captchaImg = captchaImg + "?" + Math.random();
        this.captchaCode = captchaCode || "";
    }
    return CaptchaModel;
}());
export { CaptchaModel };
if (false) {
    /** @type {?} */
    CaptchaModel.prototype.captchaImg;
    /** @type {?} */
    CaptchaModel.prototype.captchaCode;
}
export var UpsertCaptchaApiModel;
(function (UpsertCaptchaApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this.Captcha.captchaCode;
        };
        return Request;
    }());
    UpsertCaptchaApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Captcha;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertCaptchaApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBQTtJQUdDLHNCQUFZLEVBQWdGO1lBQWhGLDRCQUFnRixFQUE5RSwwQkFBVSxFQUFFLDRCQUFXO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQU0sVUFBVSxTQUFJLElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxFQUFFLENBQUM7S0FDckM7dUJBUEY7SUFRQyxDQUFBO0FBUEQsd0JBT0M7Ozs7Ozs7QUFFRCxNQUFNLEtBQVcscUJBQXFCO0FBQXRDLFdBQWlCLHFCQUFxQjtJQUNyQyxJQUFBO1FBRUMsaUJBQVksU0FBc0Q7WUFBdEQsMEJBQUEsRUFBQSxjQUFzRDtZQUFsRSxpQkFFQztZQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztTQUNwRTs7OztRQUNELGdDQUFjOzs7UUFBZDtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDaEM7c0JBbEJIO1FBbUJFLENBQUE7SUFSWSw2QkFBTzs7Ozs7SUFTcEIsSUFBQTtRQUVDO1NBQWlCO3VCQXRCbkI7UUF1QkUsQ0FBQTtJQUhZLDhCQUFROzs7OztHQVZMLHFCQUFxQixLQUFyQixxQkFBcUIsUUFjckMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIENhcHRjaGFNb2RlbCB7XHJcblx0Y2FwdGNoYUltZzogc3RyaW5nO1xyXG5cdGNhcHRjaGFDb2RlOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoeyBjYXB0Y2hhSW1nLCBjYXB0Y2hhQ29kZSB9OiB7IGNhcHRjaGFJbWc/OiBzdHJpbmc7IGNhcHRjaGFDb2RlPzogc3RyaW5nOyB9ID0ge30pIHtcclxuXHRcdHRoaXMuY2FwdGNoYUltZyA9IGAke2NhcHRjaGFJbWd9PyR7TWF0aC5yYW5kb20oKX1gO1xyXG5cdFx0dGhpcy5jYXB0Y2hhQ29kZSA9IGNhcHRjaGFDb2RlIHx8IFwiXCI7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydENhcHRjaGFBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Q2FwdGNoYTogQ2FwdGNoYU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFVwc2VydENhcHRjaGFBcGlNb2RlbC5SZXF1ZXN0PiA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuQ2FwdGNoYS5jYXB0Y2hhQ29kZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogQ2FwdGNoYU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7IH1cclxuXHR9XHJcbn1cclxuIl19
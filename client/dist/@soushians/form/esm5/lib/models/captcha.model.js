/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var _this = this;
            if (initValue === void 0) { initValue = {}; }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvY2FwdGNoYS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0E7SUFHQyxzQkFBWSxFQUFnRjtZQUFoRiw0QkFBZ0YsRUFBOUUsMEJBQVUsRUFBRSw0QkFBVztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFNLFVBQVUsU0FBSSxJQUFJLENBQUMsTUFBTSxFQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkEsa0NBQW1COztJQUNuQixtQ0FBb0I7O0FBT3JCLE1BQU0sS0FBVyxxQkFBcUIsQ0FjckM7QUFkRCxXQUFpQixxQkFBcUI7SUFDckM7UUFFQyxpQkFBWSxTQUFzRDtZQUFsRSxpQkFFQztZQUZXLDBCQUFBLEVBQUEsY0FBc0Q7WUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1FBQ3JFLENBQUM7Ozs7UUFDRCxnQ0FBYzs7O1FBQWQ7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ2pDLENBQUM7UUFDRixjQUFDO0lBQUQsQ0FBQyxBQVJELElBUUM7SUFSWSw2QkFBTyxVQVFuQixDQUFBOzs7UUFQQSwwQkFBc0I7O0lBUXZCO1FBRUM7UUFBZ0IsQ0FBQztRQUNsQixlQUFDO0lBQUQsQ0FBQyxBQUhELElBR0M7SUFIWSw4QkFBUSxXQUdwQixDQUFBOzs7UUFGQSwwQkFBcUI7O0FBR3ZCLENBQUMsRUFkZ0IscUJBQXFCLEtBQXJCLHFCQUFxQixRQWNyQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYU1vZGVsIHtcclxuXHRjYXB0Y2hhSW1nOiBzdHJpbmc7XHJcblx0Y2FwdGNoYUNvZGU6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IGNhcHRjaGFJbWcsIGNhcHRjaGFDb2RlIH06IHsgY2FwdGNoYUltZz86IHN0cmluZzsgY2FwdGNoYUNvZGU/OiBzdHJpbmc7IH0gPSB7fSkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhSW1nID0gYCR7Y2FwdGNoYUltZ30/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0XHR0aGlzLmNhcHRjaGFDb2RlID0gY2FwdGNoYUNvZGUgfHwgXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRDYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0Q2FwdGNoYUFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5DYXB0Y2hhLmNhcHRjaGFDb2RlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var FailedLoginReportModel;
(function (FailedLoginReportModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return;
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FailedLoginReportModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Username;
    }
    var Response = /** @class */ (function () {
        function Response() {
            this.data = [];
        }
        return Response;
    }());
    FailedLoginReportModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.data;
    }
})(FailedLoginReportModel || (FailedLoginReportModel = {}));
//# sourceMappingURL=failed-login-report.model.js.map

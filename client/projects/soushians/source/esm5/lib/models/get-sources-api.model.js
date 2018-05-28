/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var GetSourcesApiModel;
(function (GetSourcesApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetSourcesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetSourcesApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetSourcesApiModel || (GetSourcesApiModel = {}));
//# sourceMappingURL=get-sources-api.model.js.map

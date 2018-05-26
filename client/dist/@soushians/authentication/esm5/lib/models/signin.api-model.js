/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var Signin_ApiModel;
(function (Signin_ApiModel) {
    var Request = /** @class */ (function () {
        function Request() {
        }
        return Request;
    }());
    Signin_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        /**
         * @param {?} params
         */
        function Response(params) {
            var _this = this;
            Object.keys(params).forEach(function (key) { return (((_this))[key] = ((params))[key]); });
        }
        /**
         * @return {?}
         */
        Response.prototype.extractData = function () {
            return this.Result.User;
        };
        return Response;
    }());
    Signin_ApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(Signin_ApiModel || (Signin_ApiModel = {}));
//# sourceMappingURL=signin.api-model.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var Signin_ApiModel;
(function (Signin_ApiModel) {
    class Request {
    }
    Signin_ApiModel.Request = Request;
    class Response {
        /**
         * @param {?} params
         */
        constructor(params) {
            Object.keys(params).forEach(key => ((/** @type {?} */ (this))[key] = (/** @type {?} */ (params))[key]));
        }
        /**
         * @return {?}
         */
        extractData() {
            return this.Result.User;
        }
    }
    Signin_ApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(Signin_ApiModel || (Signin_ApiModel = {}));
//# sourceMappingURL=signin.api-model.js.map

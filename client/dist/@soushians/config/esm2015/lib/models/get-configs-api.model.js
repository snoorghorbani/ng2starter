/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (/** @type {?} */ (this))[key] = (/** @type {?} */ (initValue))[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetConfigsApiModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    GetConfigsApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetConfigsApiModel || (GetConfigsApiModel = {}));
//# sourceMappingURL=get-configs-api.model.js.map

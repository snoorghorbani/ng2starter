/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetDiagramsApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.diagram;
    }
    class Response {
        constructor() { }
    }
    GetDiagramsApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetDiagramsApiModel || (GetDiagramsApiModel = {}));
//# sourceMappingURL=get-diagrams-api.model.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var FailedLoginReportModel;
(function (FailedLoginReportModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return;
        }
    }
    FailedLoginReportModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Username;
    }
    class Response {
        constructor() {
            this.data = [];
        }
    }
    FailedLoginReportModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.data;
    }
})(FailedLoginReportModel || (FailedLoginReportModel = {}));
//# sourceMappingURL=failed-login-report.model.js.map

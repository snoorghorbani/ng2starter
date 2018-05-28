/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditConfigApiModel;
(function (EditConfigApiModel) {
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
            debugger;
            return {
                Name: this.Name,
                Config: this.Config
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl('', [Validators.required]),
                Config: new FormGroup({}),
            });
        }
    }
    EditConfigApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.Config;
    }
    class Response {
        constructor() {
        }
    }
    EditConfigApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditConfigApiModel || (EditConfigApiModel = {}));
//# sourceMappingURL=edit-config-api.model.js.map

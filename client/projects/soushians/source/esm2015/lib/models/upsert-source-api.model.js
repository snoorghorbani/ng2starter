/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
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
            return {
                _id: this._id,
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                _id: new FormControl("", [Validators.required]),
                Endpoint: new FormControl("", [Validators.required]),
                Interval: new FormControl("", [Validators.required]),
                IsActive: new FormControl("false", [Validators.required]),
                Thresholds: new FormArray([])
            });
        }
    }
    UpsertSourceApiModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.Endpoint;
        /** @type {?} */
        Request.prototype.Interval;
        /** @type {?} */
        Request.prototype.IsActive;
        /** @type {?} */
        Request.prototype.Thresholds;
    }
    class Response {
        constructor() { }
    }
    UpsertSourceApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));
//# sourceMappingURL=upsert-source-api.model.js.map

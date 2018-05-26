/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
export var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
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
            return {
                _id: this._id,
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    Endpoint: new FormControl("", [Validators.required]),
                    Interval: new FormControl("", [Validators.required]),
                    IsActive: new FormControl("false", [Validators.required]),
                    Thresholds: new FormArray([])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
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
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertSourceApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));
//# sourceMappingURL=upsert-source-api.model.js.map

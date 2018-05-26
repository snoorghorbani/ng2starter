/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?} params
         */
        function Request(params) {
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestQueryParams = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    IsActive: new FormControl("true", [Validators.required]),
                    Route: new FormControl("", [Validators.required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditDiagramApiModel.Response = Response;
    function Response_tsickle_Closure_declarations() {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditDiagramApiModel || (EditDiagramApiModel = {}));
//# sourceMappingURL=edit-diagram-api.model.js.map

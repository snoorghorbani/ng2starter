import * as tslib_1 from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";
export var ProfileViewModel;
(function (ProfileViewModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new FormGroup({
                    Username: new FormControl("", [Validators.minLength(8), Validators.required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ProfileViewModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Email;
    }
    var Response = /** @class */ (function (_super) {
        tslib_1.__extends(Response, _super);
        function Response() {
            return _super.call(this) || this;
        }
        return Response;
    }(UserModel));
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));
//# sourceMappingURL=profile-view.model.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";
export var ProfileViewModel;
(function (ProfileViewModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
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
            return new FormGroup({
                Username: new FormControl("", [Validators.minLength(8), Validators.required])
            });
        }
    }
    ProfileViewModel.Request = Request;
    function Request_tsickle_Closure_declarations() {
        /** @type {?} */
        Request.prototype.Email;
    }
    class Response extends UserModel {
        constructor() {
            super();
        }
    }
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));
//# sourceMappingURL=profile-view.model.js.map

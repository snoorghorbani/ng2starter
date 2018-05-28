/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Signin } from "../../actions";
import { AuthenticationConfigurationService } from "../../services/authentication-configuration.service";
var SigninContainerComponent = /** @class */ (function () {
    /**
     * @param {?} configurationService
     * @param {?} store
     */
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    SigninContainerComponent.prototype.signIn = function (formValue) {
        this.store.dispatch(new Signin(formValue));
    };
    return SigninContainerComponent;
}());
export { SigninContainerComponent };
SigninContainerComponent.decorators = [
    { type: Component, args: [{
                template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
            },] },
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = function () { return [
    { type: AuthenticationConfigurationService },
    { type: Store }
]; };
function SigninContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninContainerComponent.prototype.formId$;
    /** @type {?} */
    SigninContainerComponent.prototype.configurationService;
    /** @type {?} */
    SigninContainerComponent.prototype.store;
}
//# sourceMappingURL=signin-container.component.js.map

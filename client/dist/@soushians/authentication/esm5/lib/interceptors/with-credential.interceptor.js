/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { AuthenticationConfigurationService } from "../services/authentication-configuration.service";
var WithCredentialInterceptor = /** @class */ (function () {
    /**
     * @param {?} configurationService
     */
    function WithCredentialInterceptor(configurationService) {
        this.configurationService = configurationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    WithCredentialInterceptor.prototype.intercept = function (request, next) {
        // if (!this.configurationService.config.env.production)
        ((request)).withCredentials = true;
        return next.handle(request);
    };
    return WithCredentialInterceptor;
}());
export { WithCredentialInterceptor };
WithCredentialInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WithCredentialInterceptor.ctorParameters = function () { return [
    { type: AuthenticationConfigurationService }
]; };
function WithCredentialInterceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    WithCredentialInterceptor.prototype.configurationService;
}
//# sourceMappingURL=with-credential.interceptor.js.map

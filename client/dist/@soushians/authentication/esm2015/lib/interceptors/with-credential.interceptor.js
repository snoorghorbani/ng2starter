/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { AuthenticationConfigurationService } from "../services/authentication-configuration.service";
export class WithCredentialInterceptor {
    /**
     * @param {?} configurationService
     */
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // if (!this.configurationService.config.env.production)
        (/** @type {?} */ (request)).withCredentials = true;
        return next.handle(request);
    }
}
WithCredentialInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WithCredentialInterceptor.ctorParameters = () => [
    { type: AuthenticationConfigurationService }
];
function WithCredentialInterceptor_tsickle_Closure_declarations() {
    /** @type {?} */
    WithCredentialInterceptor.prototype.configurationService;
}
//# sourceMappingURL=with-credential.interceptor.js.map

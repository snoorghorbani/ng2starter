/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { FormConfigurationService } from "./form-configuration.service";
var FormUtilityService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    function FormUtilityService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    return FormUtilityService;
}());
export { FormUtilityService };
FormUtilityService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FormUtilityService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
]; };
function FormUtilityService_tsickle_Closure_declarations() {
    /** @type {?} */
    FormUtilityService.prototype.responseCache;
    /** @type {?} */
    FormUtilityService.prototype.http;
    /** @type {?} */
    FormUtilityService.prototype.store;
    /** @type {?} */
    FormUtilityService.prototype.configurationService;
}
//# sourceMappingURL=form-utility.service.js.map

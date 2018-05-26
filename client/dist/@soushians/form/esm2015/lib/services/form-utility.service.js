/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { FormConfigurationService } from "./form-configuration.service";
export class FormUtilityService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
}
FormUtilityService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FormUtilityService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FormConfigurationService }
];
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

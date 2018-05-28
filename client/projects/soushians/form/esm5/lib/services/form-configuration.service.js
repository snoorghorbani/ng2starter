/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFormModuleConfig } from "@soushians/config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../form.config";
import * as i0 from "@angular/core";
import * as i1 from "../form.config";
import * as i2 from "@ngrx/store";
var FormConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function FormConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getFormModuleConfig).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(FormConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return FormConfigurationService;
}());
export { FormConfigurationService };
FormConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FormConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
]; };
/** @nocollapse */ FormConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: FormConfigurationService, providedIn: "root" });
function FormConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    FormConfigurationService.prototype._config;
    /** @type {?} */
    FormConfigurationService.prototype.config$;
    /** @type {?} */
    FormConfigurationService.prototype.store;
}
//# sourceMappingURL=form-configuration.service.js.map

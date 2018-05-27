/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { getAuthenticationModuleConfig } from "@soushians/config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../authentication.config";
import * as i0 from "@angular/core";
import * as i1 from "../authentication.config";
import * as i2 from "@ngrx/store";
var AuthenticationConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function AuthenticationConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getAuthenticationModuleConfig).subscribe(function (storeConfig) {
            if (!storeConfig)
                return;
            _this._config = Object.assign({}, _this._config, storeConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(AuthenticationConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticationConfigurationService;
}());
export { AuthenticationConfigurationService };
AuthenticationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
]; };
/** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
function AuthenticationConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    AuthenticationConfigurationService.prototype._config;
    /** @type {?} */
    AuthenticationConfigurationService.prototype.config$;
    /** @type {?} */
    AuthenticationConfigurationService.prototype.store;
}
//# sourceMappingURL=authentication-configuration.service.js.map

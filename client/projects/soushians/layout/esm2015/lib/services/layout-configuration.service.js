/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { getlayoutModuleConfig } from "@soushians/config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../layout.config";
import { UpdateLayoutConfigAction } from "../actions";
import * as i0 from "@angular/core";
import * as i1 from "../layout.config";
import * as i2 from "@ngrx/store";
export class LayoutConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getlayoutModuleConfig).subscribe(config => {
            if (!config)
                return;
            this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            this._config = Object.assign({}, this._config, config.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
LayoutConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
LayoutConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ LayoutConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(i0.inject(i1.MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: LayoutConfigurationService, providedIn: "root" });
function LayoutConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    LayoutConfigurationService.prototype._config;
    /** @type {?} */
    LayoutConfigurationService.prototype.config$;
    /** @type {?} */
    LayoutConfigurationService.prototype.store;
}
//# sourceMappingURL=layout-configuration.service.js.map

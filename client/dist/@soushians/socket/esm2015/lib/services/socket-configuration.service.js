/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject } from "rxjs";
import { Inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getSocketModuleConfig } from "@soushians/config";
import { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "../socket.config";
export class SocketConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getSocketModuleConfig).subscribe((userConfig) => {
            if (!userConfig) {
                return;
            }
            this._config = Object.assign({}, this._config, userConfig.Config);
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
SocketConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SocketConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
function SocketConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketConfigurationService.prototype._config;
    /** @type {?} */
    SocketConfigurationService.prototype.config$;
    /** @type {?} */
    SocketConfigurationService.prototype.store;
}
//# sourceMappingURL=socket-configuration.service.js.map

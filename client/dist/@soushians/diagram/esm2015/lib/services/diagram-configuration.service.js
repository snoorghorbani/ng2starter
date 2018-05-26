/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../diagram.config";
export class DiagramConfigurationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
DiagramConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
];
function DiagramConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramConfigurationService.prototype._config;
}
//# sourceMappingURL=diagram-configuration.service.js.map

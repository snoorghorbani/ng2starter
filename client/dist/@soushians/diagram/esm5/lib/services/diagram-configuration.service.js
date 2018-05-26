/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../diagram.config";
var DiagramConfigurationService = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return DiagramConfigurationService;
}());
export { DiagramConfigurationService };
DiagramConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
]; };
function DiagramConfigurationService_tsickle_Closure_declarations() {
    /** @type {?} */
    DiagramConfigurationService.prototype._config;
}
//# sourceMappingURL=diagram-configuration.service.js.map

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function ConfigModuleConfig() { }
function ConfigModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ConfigModuleConfig.prototype.dev_api_host;
    /** @type {?|undefined} */
    ConfigModuleConfig.prototype.prod_api_host;
    /** @type {?|undefined} */
    ConfigModuleConfig.prototype.env;
}
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    dev_api_host: 'http://localhost:3000',
    prod_api_host: 'http://5.196.149.107:3000',
    env: {
        production: false
    }
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken('UserModuleConfig');
//# sourceMappingURL=config.config.js.map

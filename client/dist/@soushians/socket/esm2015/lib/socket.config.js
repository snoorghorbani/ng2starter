/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function SocketModuleConfig() { }
function SocketModuleConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketModuleConfig.prototype.development_uri;
    /** @type {?} */
    SocketModuleConfig.prototype.production_uri;
    /** @type {?|undefined} */
    SocketModuleConfig.prototype.env;
}
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    }
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("SocketModuleConfig");
//# sourceMappingURL=socket.config.js.map

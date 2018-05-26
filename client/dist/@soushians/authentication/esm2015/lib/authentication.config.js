/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function AuthenticationModuleConfig() { }
function AuthenticationModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.forms;
    /** @type {?} */
    AuthenticationModuleConfig.prototype.env;
}
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        signOut: "",
        signIn: "",
        userInformation: ""
    },
    forms: {
        signIn: ""
    },
    env: {
        production: false
    }
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
//# sourceMappingURL=authentication.config.js.map

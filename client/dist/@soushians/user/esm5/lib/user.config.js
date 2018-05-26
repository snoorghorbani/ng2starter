/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function UserModuleConfig() { }
function UserModuleConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    UserModuleConfig.prototype.endpoints;
    /** @type {?} */
    UserModuleConfig.prototype.forms;
    /** @type {?} */
    UserModuleConfig.prototype.dashboardLinks;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        //resetPasswordRequest: '',
        changePassword: "",
        editProfile: "",
        getUserInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: []
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");
//# sourceMappingURL=user.config.js.map

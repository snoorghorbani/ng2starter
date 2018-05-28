/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as config from "../actions/config.action";
/**
 * @record
 */
export function State() { }
function State_tsickle_Closure_declarations() {
    /** @type {?} */
    State.prototype.data;
}
var ɵ0 = [];
var /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case config.ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object.assign({}, state, { data: action.payload });
        case config.ConfigActionTypes.UPDATE_CONFIG:
            return Object.assign({}, state, { data: state.data.map(function (config) {
                    debugger;
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
export var /** @type {?} */ getConfigs = function (state) { return state.data; };
export var /** @type {?} */ getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
export var /** @type {?} */ getAuthenticationModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "authentication_module_config"; }); };
export var /** @type {?} */ getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
export var /** @type {?} */ getlayoutModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "layout_config"; })); };
export var /** @type {?} */ getConfigModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
export var /** @type {?} */ getFormModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
export var /** @type {?} */ getSocketModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };
export { ɵ0 };
//# sourceMappingURL=config-list.reducer.js.map

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
const ɵ0 = [];
const /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    switch (action.type) {
        case config.ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object.assign({}, state, { data: action.payload });
        case config.ConfigActionTypes.UPDATE_CONFIG:
            return Object.assign({}, state, { data: state.data.map(config => {
                    debugger;
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
export const /** @type {?} */ getConfigs = (state) => state.data;
export const /** @type {?} */ getAppConfig = (state) => state.data.find(config => config.Name == "app_config");
export const /** @type {?} */ getAuthenticationModuleConfig = (state) => state.data.find(config => config.Name == "authentication_module_config");
export const /** @type {?} */ getUserModuleConfig = (state) => state.data.find(config => config.Name == "user_module_config");
export const /** @type {?} */ getlayoutModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "layout_config"));
export const /** @type {?} */ getConfigModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "config_module_config"));
export const /** @type {?} */ getFormModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "form_module_config"));
export const /** @type {?} */ getSocketModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "socket_module_config"));
export { ɵ0 };
//# sourceMappingURL=config-list.reducer.js.map

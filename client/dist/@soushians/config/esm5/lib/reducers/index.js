/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as configList from "./config-list.reducer";
import { ConfigLoadedFailedAction } from "../actions";
/**
 * @record
 */
export function ConfigState() { }
function ConfigState_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigState.prototype.list;
}
ConfigLoadedFailedAction;
export var /** @type {?} */ ConfigReducers = {
    list: configList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
function FeatureState_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureState.prototype.configs;
}
//#region selectors
export var /** @type {?} */ selectConfigState = createFeatureSelector("config");
//#endregion
export var /** @type {?} */ getConfigListState = createSelector(selectConfigState, function (state) { return state.list; });
export var /** @type {?} */ getConfigs = createSelector(getConfigListState, configList.getConfigs);
export var /** @type {?} */ getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
export var /** @type {?} */ getAuthenticationModuleConfig = createSelector(getConfigListState, configList.getAuthenticationModuleConfig);
export var /** @type {?} */ getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
export var /** @type {?} */ getlayoutModuleConfig = createSelector(getConfigListState, configList.getlayoutModuleConfig);
export var /** @type {?} */ getConfigModuleConfig = createSelector(getConfigListState, configList.getConfigModuleConfig);
export var /** @type {?} */ getFormModuleConfig = createSelector(getConfigListState, configList.getFormModuleConfig);
export var /** @type {?} */ getSocketModuleConfig = createSelector(getConfigListState, configList.getSocketModuleConfig);
//# sourceMappingURL=index.js.map

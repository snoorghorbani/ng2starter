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
export const /** @type {?} */ ConfigReducers = {
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
export const /** @type {?} */ selectConfigState = createFeatureSelector("config");
//#endregion
export const /** @type {?} */ getConfigListState = createSelector(selectConfigState, (state) => state.list);
export const /** @type {?} */ getConfigs = createSelector(getConfigListState, configList.getConfigs);
export const /** @type {?} */ getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
export const /** @type {?} */ getAuthenticationModuleConfig = createSelector(getConfigListState, configList.getAuthenticationModuleConfig);
export const /** @type {?} */ getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
export const /** @type {?} */ getlayoutModuleConfig = createSelector(getConfigListState, configList.getlayoutModuleConfig);
export const /** @type {?} */ getConfigModuleConfig = createSelector(getConfigListState, configList.getConfigModuleConfig);
export const /** @type {?} */ getFormModuleConfig = createSelector(getConfigListState, configList.getFormModuleConfig);
export const /** @type {?} */ getSocketModuleConfig = createSelector(getConfigListState, configList.getSocketModuleConfig);
//# sourceMappingURL=index.js.map

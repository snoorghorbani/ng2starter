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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQTZCLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7QUFJakYsd0JBQXdCLENBQUM7QUFDekIsTUFBTSxDQUFDLHVCQUFNLGNBQWMsR0FBRztJQUM3QixJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDeEIsQ0FBQzs7Ozs7Ozs7OztBQVFGLE1BQU0sQ0FBQyx1QkFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUMsQ0FBQzs7QUFJOUUsTUFBTSxDQUFDLHVCQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsdUJBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEYsTUFBTSxDQUFDLHVCQUFNLFlBQVksR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3hGLE1BQU0sQ0FBQyx1QkFBTSw2QkFBNkIsR0FBRyxjQUFjLENBQzFELGtCQUFrQixFQUNsQixVQUFVLENBQUMsNkJBQTZCLENBQ3hDLENBQUM7QUFDRixNQUFNLENBQUMsdUJBQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RHLE1BQU0sQ0FBQyx1QkFBTSxxQkFBcUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDMUcsTUFBTSxDQUFDLHVCQUFNLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUMxRyxNQUFNLENBQUMsdUJBQU0sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3RHLE1BQU0sQ0FBQyx1QkFBTSxxQkFBcUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldGxheW91dE1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIl19
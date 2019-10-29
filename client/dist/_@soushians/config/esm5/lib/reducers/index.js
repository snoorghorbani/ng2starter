/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as configList from "./config-list.reducer";
/**
 * @record
 */
export function ConfigState() { }
if (false) {
    /** @type {?} */
    ConfigState.prototype.list;
}
/** @type {?} */
export var ConfigReducers = {
    list: configList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.configs;
}
//#region selectors
/** @type {?} */
export var selectConfigState = createFeatureSelector("config");
//#endregion
/** @type {?} */
export var getConfigListState = createSelector(selectConfigState, function (state) { return state.list; });
/** @type {?} */
export var getConfigs = createSelector(getConfigListState, configList.getConfigs);
/** @type {?} */
export var getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
/** @type {?} */
export var getAuthenticationModuleConfig = createSelector(getConfigListState, configList.getAuthenticationModuleConfig);
/** @type {?} */
export var getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
/** @type {?} */
export var getConfigModuleConfig = createSelector(getConfigListState, configList.getConfigModuleConfig);
/** @type {?} */
export var getFormModuleConfig = createSelector(getConfigListState, configList.getFormModuleConfig);
/** @type {?} */
export var getSocketModuleConfig = createSelector(getConfigListState, configList.getSocketModuleConfig);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7OztBQUVwRCxpQ0FFQzs7O0lBREEsMkJBQXVCOzs7QUFFeEIsTUFBTSxLQUFPLGNBQWMsR0FBRztJQUM3QixJQUFJLEVBQUUsVUFBVSxDQUFDLE9BQU87Q0FDeEI7Ozs7QUFFRCxrQ0FFQzs7O0lBREEsK0JBQXVCOzs7O0FBS3hCLE1BQU0sS0FBTyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUM7OztBQUk3RSxNQUFNLEtBQU8sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLEVBQVYsQ0FBVSxDQUFDOztBQUN2RyxNQUFNLEtBQU8sVUFBVSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDOztBQUNuRixNQUFNLEtBQU8sWUFBWSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDOztBQUN2RixNQUFNLEtBQU8sNkJBQTZCLEdBQUcsY0FBYyxDQUMxRCxrQkFBa0IsRUFDbEIsVUFBVSxDQUFDLDZCQUE2QixDQUN4Qzs7QUFDRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs7QUFDckcsTUFBTSxLQUFPLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUM7O0FBQ3pHLE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDOztBQUNyRyxNQUFNLEtBQU8scUJBQXFCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGNvbmZpZ0xpc3QgZnJvbSBcIi4vY29uZmlnLWxpc3QucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24sIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0YXRlIHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlN0YXRlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyk7XHJcbiJdfQ==
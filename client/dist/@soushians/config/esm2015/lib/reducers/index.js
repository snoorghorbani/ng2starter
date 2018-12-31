/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as configList from "./config-list.reducer";
/**
 * @record
 */
export function ConfigState() { }
/** @type {?} */
ConfigState.prototype.list;
/** @type {?} */
export const ConfigReducers = {
    list: configList.Reducer
};
/**
 * @record
 */
export function FeatureState() { }
/** @type {?} */
FeatureState.prototype.configs;
/** @type {?} */
export const selectConfigState = createFeatureSelector("config");
/** @type {?} */
export const getConfigListState = createSelector(selectConfigState, (state) => state.list);
/** @type {?} */
export const getConfigs = createSelector(getConfigListState, configList.getConfigs);
/** @type {?} */
export const getAppConfig = createSelector(getConfigListState, configList.getAppConfig);
/** @type {?} */
export const getAuthenticationModuleConfig = createSelector(getConfigListState, configList.getAuthenticationModuleConfig);
/** @type {?} */
export const getUserModuleConfig = createSelector(getConfigListState, configList.getUserModuleConfig);
/** @type {?} */
export const getConfigModuleConfig = createSelector(getConfigListState, configList.getConfigModuleConfig);
/** @type {?} */
export const getFormModuleConfig = createSelector(getConfigListState, configList.getFormModuleConfig);
/** @type {?} */
export const getSocketModuleConfig = createSelector(getConfigListState, configList.getSocketModuleConfig);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9yZWR1Y2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFdEYsT0FBTyxLQUFLLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7QUFLcEQsYUFBYSxjQUFjLEdBQUc7SUFDN0IsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPO0NBQ3hCLENBQUM7Ozs7Ozs7O0FBUUYsYUFBYSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBYyxRQUFRLENBQUMsQ0FBQzs7QUFJOUUsYUFBYSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBQ3hHLGFBQWEsVUFBVSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBQ3BGLGFBQWEsWUFBWSxHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBQ3hGLGFBQWEsNkJBQTZCLEdBQUcsY0FBYyxDQUMxRCxrQkFBa0IsRUFDbEIsVUFBVSxDQUFDLDZCQUE2QixDQUN4QyxDQUFDOztBQUNGLGFBQWEsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUN0RyxhQUFhLHFCQUFxQixHQUFHLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7QUFDMUcsYUFBYSxtQkFBbUIsR0FBRyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBQ3RHLGFBQWEscUJBQXFCLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgY29uZmlnTGlzdCBmcm9tIFwiLi9jb25maWctbGlzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3RhdGUge1xyXG5cdGxpc3Q6IGNvbmZpZ0xpc3QuU3RhdGU7XHJcbn1cclxuZXhwb3J0IGNvbnN0IENvbmZpZ1JlZHVjZXJzID0ge1xyXG5cdGxpc3Q6IGNvbmZpZ0xpc3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiY29uZmlnc1wiOiBDb25maWdTdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbmZpZ1N0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPENvbmZpZ1N0YXRlPihcImNvbmZpZ1wiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0xpc3RTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdENvbmZpZ1N0YXRlLCAoc3RhdGU6IENvbmZpZ1N0YXRlKSA9PiBzdGF0ZS5saXN0KTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlncyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBcHBDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0QXBwQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0Z2V0Q29uZmlnTGlzdFN0YXRlLFxyXG5cdGNvbmZpZ0xpc3QuZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0VXNlck1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIl19
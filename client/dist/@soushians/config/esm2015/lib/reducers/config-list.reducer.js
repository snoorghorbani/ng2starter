/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as config from "../actions/config.action";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = [];
/** @type {?} */
const initialState = {
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
            return Object.assign({}, state, { data: state.data.map((/**
                 * @param {?} config
                 * @return {?}
                 */
                config => {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                })) });
        default:
            return state;
    }
}
/** @type {?} */
export const getConfigs = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
/** @type {?} */
export const getAppConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "app_config")));
/** @type {?} */
export const getAuthenticationModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "authentication_module_config")));
/** @type {?} */
export const getUserModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "user_module_config")));
/** @type {?} */
export const getConfigModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "config_module_config")))));
/** @type {?} */
export const getFormModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "form_module_config")))));
/** @type {?} */
export const getSocketModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "socket_module_config")))));
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2NvbmZpZy1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFbkQsMkJBRUM7OztJQURBLHFCQUFZOztXQUlOLEVBQUU7O01BREgsWUFBWSxHQUFVO0lBQzNCLElBQUksSUFBSTtDQUNSOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBc0I7SUFDbkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjtZQUNsRCx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUMxQyx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzt3QkFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUM1RSxPQUFPLE1BQU0sQ0FBQztnQkFDZixDQUFDLEVBQUMsSUFDRDtRQUNIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNGLENBQUM7O0FBRUQsTUFBTSxPQUFPLFVBQVU7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTs7QUFDdEQsTUFBTSxPQUFPLFlBQVk7Ozs7QUFBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBQyxDQUFBOztBQUNwRyxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUM3RCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7QUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksOEJBQThCLEVBQUMsQ0FBQTs7QUFDekUsTUFBTSxPQUFPLG1CQUFtQjs7OztBQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7QUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQUMsQ0FBQTs7QUFDbkgsTUFBTSxPQUFPLHFCQUFxQjs7OztBQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDckQsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFDLEVBQU8sQ0FBQTs7QUFDeEUsTUFBTSxPQUFPLG1CQUFtQjs7OztBQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDbkQsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFDLEVBQU8sQ0FBQTs7QUFDdEUsTUFBTSxPQUFPLHFCQUFxQjs7OztBQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDckQsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFDLEVBQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vYWN0aW9ucy9jb25maWcuYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogY29uZmlnLkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEubWFwKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpIGNvbmZpZy5Db25maWcgPSBhY3Rpb24ucGF5bG9hZC5Db25maWc7XHJcblx0XHRcdFx0XHRyZXR1cm4gY29uZmlnO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlncyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbmV4cG9ydCBjb25zdCBnZXRBcHBDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXBwX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXV0aGVudGljYXRpb25fbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwidXNlcl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiY29uZmlnX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybU1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImZvcm1fbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJzb2NrZXRfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbiJdfQ==
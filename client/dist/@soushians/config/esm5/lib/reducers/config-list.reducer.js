/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as config from "../actions/config.action";
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
var ɵ0 = [];
/** @type {?} */
var initialState = {
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
            return tslib_1.__assign({}, state, { data: action.payload });
        case config.ConfigActionTypes.UPDATE_CONFIG:
            return tslib_1.__assign({}, state, { data: state.data.map((/**
                 * @param {?} config
                 * @return {?}
                 */
                function (config) {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                })) });
        default:
            return state;
    }
}
/** @type {?} */
export var getConfigs = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });
/** @type {?} */
export var getAppConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data.find((/**
 * @param {?} config
 * @return {?}
 */
function (config) { return config.Name == "app_config"; })); });
/** @type {?} */
export var getAuthenticationModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.data.find((/**
     * @param {?} config
     * @return {?}
     */
    function (config) { return config.Name == "authentication_module_config"; }));
});
/** @type {?} */
export var getUserModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data.find((/**
 * @param {?} config
 * @return {?}
 */
function (config) { return config.Name == "user_module_config"; })); });
/** @type {?} */
export var getConfigModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
function (config) { return config.Name == "config_module_config"; })))); });
/** @type {?} */
export var getFormModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
function (config) { return config.Name == "form_module_config"; })))); });
/** @type {?} */
export var getSocketModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
function (config) { return config.Name == "socket_module_config"; })))); });
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2NvbmZpZy1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRW5ELDJCQUVDOzs7SUFEQSxxQkFBWTs7U0FJTixFQUFFOztJQURILFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUI7WUFDbEQsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUMxQixJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO3dCQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzVFLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsRUFBQyxJQUNEO1FBQ0g7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0YsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sVUFBVTs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUE7O0FBQ3RELE1BQU0sS0FBTyxZQUFZOzs7O0FBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7QUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWSxFQUEzQixDQUEyQixFQUFDLEVBQXRELENBQXNELENBQUE7O0FBQ3BHLE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUFDLEtBQVk7SUFDekQsT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7SUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksOEJBQThCLEVBQTdDLENBQTZDLEVBQUM7QUFBeEUsQ0FBd0UsQ0FBQTs7QUFDekUsTUFBTSxLQUFPLG1CQUFtQjs7OztBQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFuQyxDQUFtQyxFQUFDLEVBQTlELENBQThELENBQUE7O0FBQ25ILE1BQU0sS0FBTyxxQkFBcUI7Ozs7QUFBRyxVQUFDLEtBQVksV0FDakQsbUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O0FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFyQyxDQUFxQyxFQUFDLEVBQU8sR0FBQSxDQUFBOztBQUN4RSxNQUFNLEtBQU8sbUJBQW1COzs7O0FBQUcsVUFBQyxLQUFZLFdBQy9DLG1CQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztBQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0IsRUFBbkMsQ0FBbUMsRUFBQyxFQUFPLEdBQUEsQ0FBQTs7QUFDdEUsTUFBTSxLQUFPLHFCQUFxQjs7OztBQUFHLFVBQUMsS0FBWSxXQUNqRCxtQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7QUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksc0JBQXNCLEVBQXJDLENBQXFDLEVBQUMsRUFBTyxHQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uL2FjdGlvbnMvY29uZmlnLmFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGNvbmZpZy5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLm1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iXX0=
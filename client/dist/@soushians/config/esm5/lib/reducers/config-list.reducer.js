/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as config from "../actions/config.action";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.data;
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
            return tslib_1.__assign({}, state, { data: state.data.map(function (config) {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
/** @type {?} */
export var getConfigs = function (state) { return state.data; };
/** @type {?} */
export var getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
/** @type {?} */
export var getAuthenticationModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
};
/** @type {?} */
export var getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
/** @type {?} */
export var getConfigModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
/** @type {?} */
export var getFormModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
/** @type {?} */
export var getSocketModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2NvbmZpZy1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O1NBTzVDLEVBQUU7O0FBRFQsSUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNwQixLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUI7WUFDbEQsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjtRQUNILEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDMUMsNEJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU07b0JBQzFCLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7d0JBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDNUUsT0FBTyxNQUFNLENBQUM7aUJBQ2QsQ0FBQyxJQUNEO1FBQ0g7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0Q7O0FBRUQsV0FBYSxVQUFVLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQzs7QUFDdkQsV0FBYSxZQUFZLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWSxFQUEzQixDQUEyQixDQUFDLEVBQXRELENBQXNELENBQUM7O0FBQ3JHLFdBQWEsNkJBQTZCLEdBQUcsVUFBQyxLQUFZO0lBQ3pELE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLDhCQUE4QixFQUE3QyxDQUE2QyxDQUFDO0FBQXhFLENBQXdFLENBQUM7O0FBQzFFLFdBQWEsbUJBQW1CLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQW5DLENBQW1DLENBQUMsRUFBOUQsQ0FBOEQsQ0FBQzs7QUFDcEgsV0FBYSxxQkFBcUIsR0FBRyxVQUFDLEtBQVksWUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFyQyxDQUFxQyxDQUFRLElBQUEsQ0FBQzs7QUFDekUsV0FBYSxtQkFBbUIsR0FBRyxVQUFDLEtBQVksWUFDL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFuQyxDQUFtQyxDQUFRLElBQUEsQ0FBQzs7QUFDdkUsV0FBYSxxQkFBcUIsR0FBRyxVQUFDLEtBQVksWUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLHNCQUFzQixFQUFyQyxDQUFxQyxDQUFRLElBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vYWN0aW9ucy9jb25maWcuYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogY29uZmlnLkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEubWFwKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpIGNvbmZpZy5Db25maWcgPSBhY3Rpb24ucGF5bG9hZC5Db25maWc7XHJcblx0XHRcdFx0XHRyZXR1cm4gY29uZmlnO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlncyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbmV4cG9ydCBjb25zdCBnZXRBcHBDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXBwX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXV0aGVudGljYXRpb25fbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwidXNlcl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiY29uZmlnX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybU1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImZvcm1fbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJzb2NrZXRfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbiJdfQ==
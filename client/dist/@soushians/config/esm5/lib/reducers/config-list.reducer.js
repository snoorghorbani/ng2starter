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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2NvbmZpZy1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O1NBTzVDLEVBQUU7O0FBRFQsSUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxrQkFBa0IsS0FBb0IsRUFBRSxNQUFzQjtJQUE1QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDcEIsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCO1lBQ2xELDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDbkI7UUFDSCxLQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO1lBQzFDLDRCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNO29CQUMxQixJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO3dCQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzVFLE9BQU8sTUFBTSxDQUFDO2lCQUNkLENBQUMsSUFDRDtRQUNIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELFdBQWEsVUFBVSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUM7O0FBQ3ZELFdBQWEsWUFBWSxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBM0IsQ0FBMkIsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDOztBQUNyRyxXQUFhLDZCQUE2QixHQUFHLFVBQUMsS0FBWTtJQUN6RCxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSw4QkFBOEIsRUFBN0MsQ0FBNkMsQ0FBQztBQUF4RSxDQUF3RSxDQUFDOztBQUMxRSxXQUFhLG1CQUFtQixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQixFQUFuQyxDQUFtQyxDQUFDLEVBQTlELENBQThELENBQUM7O0FBQ3BILFdBQWEscUJBQXFCLEdBQUcsVUFBQyxLQUFZLFlBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxzQkFBc0IsRUFBckMsQ0FBcUMsQ0FBUSxJQUFBLENBQUM7O0FBQ3pFLFdBQWEsbUJBQW1CLEdBQUcsVUFBQyxLQUFZLFlBQy9DLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0IsRUFBbkMsQ0FBbUMsQ0FBUSxJQUFBLENBQUM7O0FBQ3ZFLFdBQWEscUJBQXFCLEdBQUcsVUFBQyxLQUFZLFlBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksSUFBSSxzQkFBc0IsRUFBckMsQ0FBcUMsQ0FBUSxJQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSBcIi4uL2FjdGlvbnMvY29uZmlnLmFjdGlvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogYW55W107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGNvbmZpZy5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLkNPTkZJR19MT0FERURfU1VDQ0VFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuVVBEQVRFX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBzdGF0ZS5kYXRhLm1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as config from "../actions/config.action";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.data;
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
            return Object.assign({}, state, { data: state.data.map(config => {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
/** @type {?} */
export const getConfigs = (state) => state.data;
/** @type {?} */
export const getAppConfig = (state) => state.data.find(config => config.Name == "app_config");
/** @type {?} */
export const getAuthenticationModuleConfig = (state) => state.data.find(config => config.Name == "authentication_module_config");
/** @type {?} */
export const getUserModuleConfig = (state) => state.data.find(config => config.Name == "user_module_config");
/** @type {?} */
export const getConfigModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "config_module_config"));
/** @type {?} */
export const getFormModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "form_module_config"));
/** @type {?} */
export const getSocketModuleConfig = (state) => /** @type {?} */ (state.data.find(config => config.Name == "socket_module_config"));
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpc3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL3JlZHVjZXJzL2NvbmZpZy1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7V0FPNUMsRUFBRTs7QUFEVCxNQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUixDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBc0I7SUFDbkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssTUFBTSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQjtZQUNsRCx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO1FBQ0gsS0FBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUMxQyx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUM3QixJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO3dCQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQzVFLE9BQU8sTUFBTSxDQUFDO2lCQUNkLENBQUMsSUFDRDtRQUNIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELGFBQWEsVUFBVSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUN2RCxhQUFhLFlBQVksR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxDQUFDOztBQUNyRyxhQUFhLDZCQUE2QixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLDhCQUE4QixDQUFDLENBQUM7O0FBQzFFLGFBQWEsbUJBQW1CLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxvQkFBb0IsQ0FBQyxDQUFDOztBQUNwSCxhQUFhLHFCQUFxQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsbUJBQ3JELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxzQkFBc0IsQ0FBUSxDQUFBLENBQUM7O0FBQ3pFLGFBQWEsbUJBQW1CLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRSxtQkFDbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFvQixDQUFRLENBQUEsQ0FBQzs7QUFDdkUsYUFBYSxxQkFBcUIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFLG1CQUNyRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksc0JBQXNCLENBQVEsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBjb25maWcuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5tYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb25maWcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCkgY29uZmlnLkNvbmZpZyA9IGFjdGlvbi5wYXlsb2FkLkNvbmZpZztcclxuXHRcdFx0XHRcdHJldHVybiBjb25maWc7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuZXhwb3J0IGNvbnN0IGdldEFwcENvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhcHBfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJ1c2VyX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJjb25maWdfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiZm9ybV9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInNvY2tldF9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuIl19
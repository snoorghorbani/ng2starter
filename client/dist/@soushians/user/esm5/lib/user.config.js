/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function UserModuleConfig() { }
function UserModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    UserModuleConfig.prototype.env;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.dashboardLinks;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.responseToUserInfo;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.mapUserDisplayName;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "user/module/frontend/server/did/not/set",
        server: "user/module/server/did/not/set"
    },
    endpoints: {
        // resetPasswordRequest: '',
        changePassword: "",
        editProfile: "",
        getAccountInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: [],
    responseToUserInfo: function (user$) { return user$; },
    mapUserDisplayName: function (user$) {
        return user$.map(function (user) {
            debugger;
            return user.Username;
        });
    }
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Qi9DLE1BQU0sQ0FBQyxxQkFBTSxxQkFBcUIsR0FBcUI7SUFDdEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHlDQUF5QztRQUMxRCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0QsU0FBUyxFQUFFOztRQUVWLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsY0FBYyxFQUFFLEVBQUU7UUFDbEIsa0JBQWtCLEVBQUUsRUFBRTtLQUV0QjtJQUNELEtBQUssRUFBRTtRQUNOLFlBQVksRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsa0JBQWtCLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSztJQUNwQyxrQkFBa0IsRUFBRSxVQUFDLEtBQUs7UUFDekIsT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNkLFFBQVEsQ0FBQztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3JCLENBQUM7SUFIRixDQUdFO0NBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBQyxxQkFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6IHN0cmluZztcclxuXHRcdGNoYW5nZVBhc3N3b3JkPzogc3RyaW5nO1xyXG5cdFx0ZWRpdFByb2ZpbGU/OiBzdHJpbmc7XHJcblx0XHRnZXRBY2NvdW50SW5mbz86IHN0cmluZztcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbj86IHN0cmluZztcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBzdHJpbmc7XHJcblx0fTtcclxuXHRkYXNoYm9hcmRMaW5rcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRyZXNwb25zZVRvVXNlckluZm8/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0bWFwVXNlckRpc3BsYXlOYW1lPzogKHVzZXI6IE9ic2VydmFibGU8YW55PikgPT4gT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwidXNlci9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwidXNlci9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6ICcnLFxyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRlZGl0UHJvZmlsZTogXCJcIixcclxuXHRcdGdldEFjY291bnRJbmZvOiBcIlwiLFxyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBcIlwiXHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiAnJyxcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IFwiXCJcclxuXHR9LFxyXG5cdGRhc2hib2FyZExpbmtzOiBbXSxcclxuXHRyZXNwb25zZVRvVXNlckluZm86ICh1c2VyJCkgPT4gdXNlciQsXHJcblx0bWFwVXNlckRpc3BsYXlOYW1lOiAodXNlciQpID0+XHJcblx0XHR1c2VyJC5tYXAoKHVzZXIpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHJldHVybiB1c2VyLlVzZXJuYW1lO1xyXG5cdFx0fSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFVzZXJNb2R1bGVDb25maWc+KFwiVXNlck1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
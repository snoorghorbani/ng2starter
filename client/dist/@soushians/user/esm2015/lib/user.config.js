/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function UserModuleConfig() { }
/** @type {?|undefined} */
UserModuleConfig.prototype.server;
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
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
    server: "frontend_server",
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
    responseToUserInfo: (user$) => user$,
    mapUserDisplayName: (user$) => user$.map((user) => {
        debugger;
        return user.Username;
    })
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0IvQyxhQUFhLHFCQUFxQixHQUFxQjtJQUN0RCxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSx5Q0FBeUM7UUFDMUQsTUFBTSxFQUFFLGdDQUFnQztLQUN4QztJQUNELFNBQVMsRUFBRTs7UUFFVixjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGtCQUFrQixFQUFFLEVBQUU7S0FFdEI7SUFDRCxLQUFLLEVBQUU7UUFDTixZQUFZLEVBQUUsRUFBRTtLQUNoQjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO0lBQ3BDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDN0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2xCLFFBQVEsQ0FBQztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUNyQixDQUFDO0NBQ0gsQ0FBQzs7QUFFRixhQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFtQixrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlck1vZHVsZUNvbmZpZyB7XHJcblx0c2VydmVyPzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6IHN0cmluZztcclxuXHRcdGNoYW5nZVBhc3N3b3JkPzogc3RyaW5nO1xyXG5cdFx0ZWRpdFByb2ZpbGU/OiBzdHJpbmc7XHJcblx0XHRnZXRBY2NvdW50SW5mbz86IHN0cmluZztcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbj86IHN0cmluZztcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBzdHJpbmc7XHJcblx0fTtcclxuXHRkYXNoYm9hcmRMaW5rcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRyZXNwb25zZVRvVXNlckluZm8/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0bWFwVXNlckRpc3BsYXlOYW1lPzogKHVzZXI6IE9ic2VydmFibGU8YW55PikgPT4gT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdHNlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcInVzZXIvbW9kdWxlL2Zyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcInVzZXIvbW9kdWxlL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiAnJyxcclxuXHRcdGNoYW5nZVBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0ZWRpdFByb2ZpbGU6IFwiXCIsXHJcblx0XHRnZXRBY2NvdW50SW5mbzogXCJcIixcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbjogXCJcIlxyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogJycsXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBcIlwiXHJcblx0fSxcclxuXHRkYXNoYm9hcmRMaW5rczogW10sXHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiAodXNlciQpID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogKHVzZXIkKSA9PlxyXG5cdFx0dXNlciQubWFwKCh1c2VyKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRyZXR1cm4gdXNlci5Vc2VybmFtZTtcclxuXHRcdH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVc2VyTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
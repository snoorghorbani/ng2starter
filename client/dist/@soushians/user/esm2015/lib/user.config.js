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
    UserModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.dashboardLinks;
    /** @type {?} */
    UserModuleConfig.prototype.responseToUserInfo;
    /** @type {?} */
    UserModuleConfig.prototype.mapUserDisplayName;
}
export const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        //resetPasswordRequest: '',
        changePassword: "",
        editProfile: "",
        getUserInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: [],
    responseToUserInfo: user$ => user$,
    mapUserDisplayName: user$ => user$.map(user => user.DisplayName)
};
export const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUIvQyxNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQXFCO0lBQ3RELFNBQVMsRUFBRTs7UUFFVixjQUFjLEVBQUUsRUFBRTtRQUNsQixXQUFXLEVBQUUsRUFBRTtRQUNmLFdBQVcsRUFBRSxFQUFFO1FBQ2Ysa0JBQWtCLEVBQUUsRUFBRTtLQUV0QjtJQUNELEtBQUssRUFBRTtRQUNOLFlBQVksRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLO0lBQ2xDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Q0FDaEUsQ0FBQztBQUVGLE1BQU0sQ0FBQyx1QkFBTSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsa0JBQWtCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdC8vcmVzZXRQYXNzd29yZFJlcXVlc3Q6IHN0cmluZztcclxuXHRcdGNoYW5nZVBhc3N3b3JkPzogc3RyaW5nO1xyXG5cdFx0ZWRpdFByb2ZpbGU/OiBzdHJpbmc7XHJcblx0XHRnZXRVc2VySW5mbz86IHN0cmluZztcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbj86IHN0cmluZztcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBzdHJpbmc7XHJcblx0fTtcclxuXHRkYXNoYm9hcmRMaW5rcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRyZXNwb25zZVRvVXNlckluZm86IHsgKHVzZXI6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8VXNlck1vZGVsPiB9O1xyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogeyAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxzdHJpbmc+IH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHQvL3Jlc2V0UGFzc3dvcmRSZXF1ZXN0OiAnJyxcclxuXHRcdGNoYW5nZVBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0ZWRpdFByb2ZpbGU6IFwiXCIsXHJcblx0XHRnZXRVc2VySW5mbzogXCJcIixcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbjogXCJcIlxyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogJycsXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBcIlwiXHJcblx0fSxcclxuXHRkYXNoYm9hcmRMaW5rczogW10sXHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiB1c2VyJCA9PiB1c2VyJCxcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU6IHVzZXIkID0+IHVzZXIkLm1hcCh1c2VyID0+IHVzZXIuRGlzcGxheU5hbWUpXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVc2VyTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
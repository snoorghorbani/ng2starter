/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
import { map } from "rxjs/operators";
/**
 * @record
 */
export function UserModuleConfig() { }
if (false) {
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
}
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
        // resetPassword: '',
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: [],
    responseToUserInfo: user$ => user$,
    mapUserDisplayName: user$ => user$.pipe(map(user => user.Username))
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvdXNlci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJDLHNDQXlCQzs7O0lBeEJBLGtDQUFnQjs7SUFDaEIsK0JBSUU7O0lBQ0YscUNBT0U7O0lBQ0YsaUNBRUU7O0lBQ0YsMENBSUk7O0lBQ0osOENBQXNFOztJQUN0RSw4Q0FBbUU7OztBQUdwRSxNQUFNLE9BQU8scUJBQXFCLEdBQXFCO0lBQ3RELE1BQU0sRUFBRSxpQkFBaUI7SUFDekIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHlDQUF5QztRQUMxRCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0QsU0FBUyxFQUFFOztRQUVWLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsY0FBYyxFQUFFLEVBQUU7UUFDbEIsa0JBQWtCLEVBQUUsRUFBRTtRQUN0QixxQkFBcUI7S0FDckI7SUFDRCxLQUFLLEVBQUU7UUFDTixZQUFZLEVBQUUsRUFBRTtLQUNoQjtJQUNELGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSztJQUNsQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ25FOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBbUIsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRzZXJ2ZXI/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdFx0c2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0XHRlZGl0UHJvZmlsZT86IHN0cmluZztcclxuXHRcdGdldEFjY291bnRJbmZvPzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uPzogc3RyaW5nO1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGRhc2hib2FyZExpbmtzPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbz86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0c2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwidXNlci9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwidXNlci9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6ICcnLFxyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRlZGl0UHJvZmlsZTogXCJcIixcclxuXHRcdGdldEFjY291bnRJbmZvOiBcIlwiLFxyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBcIlwiXHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiAnJyxcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IFwiXCJcclxuXHR9LFxyXG5cdGRhc2hib2FyZExpbmtzOiBbXSxcclxuXHRyZXNwb25zZVRvVXNlckluZm86IHVzZXIkID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogdXNlciQgPT4gdXNlciQucGlwZShtYXAodXNlciA9PiB1c2VyLlVzZXJuYW1lKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFVzZXJNb2R1bGVDb25maWc+KFwiVXNlck1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
import { of } from "rxjs";
/**
 * @record
 */
export function AuthenticationModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.mode;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.token;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.server;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.env;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.signupValidator;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.afterSignin;
    /** @type {?|undefined} */
    AuthenticationModuleConfig.prototype.responseToUser;
}
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
    mode: "cookie-base",
    token: {
        time: 24 * 12 * 60 * 60
    },
    server: "frontend_server",
    endpoints: {
        signOut: "",
        signIn: "",
        signUp: "",
        whoAmI: ""
    },
    forms: {
        signIn: "",
        signUp: ""
    },
    env: {
        production: false,
        frontend_server: "auth/module/frontend_server/did/not/set",
        server: "auth/module/server/did/not/set"
    },
    afterSignoutRedirectTo: "/",
    signupValidator: value => of(true),
    afterSignin: (user) => { },
    responseToUser: user => user
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUV0QyxnREEwQkM7OztJQXpCRywwQ0FBYzs7SUFDZCwyQ0FFRTs7SUFDRiw0Q0FBZ0I7O0lBQ2hCLCtDQUtFOztJQUNGLDJDQUdFOztJQUNGLHlDQUlFOztJQUNGLDREQUFnQzs7SUFDaEMscURBQXNEOztJQUN0RCxpREFBa0M7O0lBQ2xDLG9EQUFvQzs7O0FBSXhDLE1BQU0sT0FBTyxxQkFBcUIsR0FBK0I7SUFDN0QsSUFBSSxFQUFFLGFBQWE7SUFDbkIsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7S0FDMUI7SUFDRCxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxHQUFHLEVBQUU7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUseUNBQXlDO1FBQzFELE1BQU0sRUFBRSxnQ0FBZ0M7S0FDM0M7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDO0lBQzFCLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUk7Q0FDL0I7O0FBRUQsTUFBTSxPQUFPLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUE2QixjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG4gICAgbW9kZT86IHN0cmluZzsgLy8gXCJ0b2tlbi1iYXNlXCIgfCBcImNvb2tpZS1iYXNlXCI7XHJcbiAgICB0b2tlbj86IHtcclxuICAgICAgICB0aW1lOiBudW1iZXJcclxuICAgIH07XHJcbiAgICBzZXJ2ZXI/OiBzdHJpbmc7XHJcbiAgICBlbmRwb2ludHM/OiB7XHJcbiAgICAgICAgc2lnbk91dD86IHN0cmluZztcclxuICAgICAgICBzaWduSW4/OiBzdHJpbmc7XHJcbiAgICAgICAgc2lnblVwPzogc3RyaW5nO1xyXG4gICAgICAgIHdob0FtST86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBmb3Jtcz86IHtcclxuICAgICAgICBzaWduSW46IHN0cmluZztcclxuICAgICAgICBzaWduVXA6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBlbnY/OiB7XHJcbiAgICAgICAgcHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICAgICAgICBmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuICAgICAgICBzZXJ2ZXI6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBhZnRlclNpZ25vdXRSZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgc2lnbnVwVmFsaWRhdG9yPzogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICBhZnRlclNpZ25pbj86ICh1c2VyOiBhbnkpID0+IHZvaWQ7XHJcbiAgICByZXNwb25zZVRvVXNlcj86ICh1c2VyOiBhbnkpID0+IGFueTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG4gICAgbW9kZTogXCJjb29raWUtYmFzZVwiLFxyXG4gICAgdG9rZW46IHtcclxuICAgICAgICB0aW1lOiAyNCAqIDEyICogNjAgKiA2MFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXJcIixcclxuICAgIGVuZHBvaW50czoge1xyXG4gICAgICAgIHNpZ25PdXQ6IFwiXCIsXHJcbiAgICAgICAgc2lnbkluOiBcIlwiLFxyXG4gICAgICAgIHNpZ25VcDogXCJcIixcclxuICAgICAgICB3aG9BbUk6IFwiXCJcclxuICAgIH0sXHJcbiAgICBmb3Jtczoge1xyXG4gICAgICAgIHNpZ25JbjogXCJcIixcclxuICAgICAgICBzaWduVXA6IFwiXCJcclxuICAgIH0sXHJcbiAgICBlbnY6IHtcclxuICAgICAgICBwcm9kdWN0aW9uOiBmYWxzZSxcclxuICAgICAgICBmcm9udGVuZF9zZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcbiAgICAgICAgc2VydmVyOiBcImF1dGgvbW9kdWxlL3NlcnZlci9kaWQvbm90L3NldFwiXHJcbiAgICB9LFxyXG4gICAgYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCIsXHJcbiAgICBzaWdudXBWYWxpZGF0b3I6IHZhbHVlID0+IG9mKHRydWUpLFxyXG4gICAgYWZ0ZXJTaWduaW46ICh1c2VyKSA9PiB7IH0sXHJcbiAgICByZXNwb25zZVRvVXNlcjogdXNlciA9PiB1c2VyXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZz4oXCJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
import { of } from "rxjs";
/**
 * @record
 */
export function AuthenticationModuleConfig() { }
/** @type {?} */
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
/** @type {?} */
export var MODULE_DEFAULT_CONFIG = {
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
    signupValidator: function (value) { return of(true); }
};
/** @type {?} */
export var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJ0QyxXQUFhLHFCQUFxQixHQUErQjtJQUM3RCxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxHQUFHLEVBQUU7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUseUNBQXlDO1FBQzFELE1BQU0sRUFBRSxnQ0FBZ0M7S0FDM0M7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLGVBQWUsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRO0NBQ3JDLENBQUM7O0FBRUYsV0FBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBNkIsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG4gICAgc2VydmVyOiBzdHJpbmcsXHJcbiAgICBlbmRwb2ludHM/OiB7XHJcbiAgICAgICAgc2lnbk91dD86IHN0cmluZztcclxuICAgICAgICBzaWduSW4/OiBzdHJpbmc7XHJcbiAgICAgICAgc2lnblVwPzogc3RyaW5nO1xyXG4gICAgICAgIHdob0FtST86IHN0cmluZztcclxuICAgIH07XHJcbiAgICBmb3Jtcz86IHtcclxuICAgICAgICBzaWduSW46IHN0cmluZztcclxuICAgICAgICBzaWduVXA6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBlbnY/OiB7XHJcbiAgICAgICAgcHJvZHVjdGlvbjogYm9vbGVhbjtcclxuICAgICAgICBmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuICAgICAgICBzZXJ2ZXI6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBhZnRlclNpZ25vdXRSZWRpcmVjdFRvPzogc3RyaW5nO1xyXG4gICAgc2lnbnVwVmFsaWRhdG9yPzogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG4gICAgc2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG4gICAgZW5kcG9pbnRzOiB7XHJcbiAgICAgICAgc2lnbk91dDogXCJcIixcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiLFxyXG4gICAgICAgIHdob0FtSTogXCJcIlxyXG4gICAgfSxcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgICAgc2lnbkluOiBcIlwiLFxyXG4gICAgICAgIHNpZ25VcDogXCJcIlxyXG4gICAgfSxcclxuICAgIGVudjoge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuICAgICAgICBzZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuICAgIH0sXHJcbiAgICBhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIixcclxuICAgIHNpZ251cFZhbGlkYXRvcjogdmFsdWUgPT4gb2YodHJ1ZSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPihcIk1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
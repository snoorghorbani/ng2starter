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
export const MODULE_DEFAULT_CONFIG = {
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
    signupValidator: value => of(true)
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJ0QyxhQUFhLHFCQUFxQixHQUErQjtJQUM3RCxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxHQUFHLEVBQUU7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUseUNBQXlDO1FBQzFELE1BQU0sRUFBRSxnQ0FBZ0M7S0FDM0M7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLGVBQWUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDckMsQ0FBQzs7QUFFRixhQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUE2QixjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcbiAgICBzZXJ2ZXI6IHN0cmluZyxcclxuICAgIGVuZHBvaW50cz86IHtcclxuICAgICAgICBzaWduT3V0Pzogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25Jbj86IHN0cmluZztcclxuICAgICAgICBzaWduVXA/OiBzdHJpbmc7XHJcbiAgICAgICAgd2hvQW1JPzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGZvcm1zPzoge1xyXG4gICAgICAgIHNpZ25Jbjogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25VcDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGVudj86IHtcclxuICAgICAgICBwcm9kdWN0aW9uOiBib29sZWFuO1xyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG4gICAgICAgIHNlcnZlcjogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICBzaWdudXBWYWxpZGF0b3I/OiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcbiAgICBzZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyXCIsXHJcbiAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICBzaWduT3V0OiBcIlwiLFxyXG4gICAgICAgIHNpZ25JbjogXCJcIixcclxuICAgICAgICBzaWduVXA6IFwiXCIsXHJcbiAgICAgICAgd2hvQW1JOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZm9ybXM6IHtcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZW52OiB7XHJcbiAgICAgICAgcHJvZHVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgZnJvbnRlbmRfc2VydmVyOiBcImF1dGgvbW9kdWxlL2Zyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG4gICAgICAgIHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG4gICAgfSxcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG86IFwiL1wiLFxyXG4gICAgc2lnbnVwVmFsaWRhdG9yOiB2YWx1ZSA9PiBvZih0cnVlKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iXX0=
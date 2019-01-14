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
export var MODULE_DEFAULT_CONFIG = {
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
    signupValidator: function (value) { return of(true); },
    afterSignin: function (user) { },
    responseToUser: function (user) { return user; }
};
/** @type {?} */
export var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUV0QyxnREEwQkM7OztJQXpCRywwQ0FBYzs7SUFDZCwyQ0FFRTs7SUFDRiw0Q0FBZ0I7O0lBQ2hCLCtDQUtFOztJQUNGLDJDQUdFOztJQUNGLHlDQUlFOztJQUNGLDREQUFnQzs7SUFDaEMscURBQXNEOztJQUN0RCxpREFBa0M7O0lBQ2xDLG9EQUFvQzs7O0FBSXhDLE1BQU0sS0FBTyxxQkFBcUIsR0FBK0I7SUFDN0QsSUFBSSxFQUFFLGFBQWE7SUFDbkIsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7S0FDMUI7SUFDRCxNQUFNLEVBQUUsaUJBQWlCO0lBQ3pCLFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxFQUFFO1FBQ1gsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ2I7SUFDRCxHQUFHLEVBQUU7UUFDRCxVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUseUNBQXlDO1FBQzFELE1BQU0sRUFBRSxnQ0FBZ0M7S0FDM0M7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLGVBQWUsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRO0lBQ2xDLFdBQVcsRUFBRSxVQUFDLElBQUksSUFBTyxDQUFDO0lBQzFCLGNBQWMsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJO0NBQy9COztBQUVELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBNkIsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7IC8vIFwidG9rZW4tYmFzZVwiIHwgXCJjb29raWUtYmFzZVwiO1xyXG4gICAgdG9rZW4/OiB7XHJcbiAgICAgICAgdGltZTogbnVtYmVyXHJcbiAgICB9O1xyXG4gICAgc2VydmVyPzogc3RyaW5nO1xyXG4gICAgZW5kcG9pbnRzPzoge1xyXG4gICAgICAgIHNpZ25PdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2lnbkluPzogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25VcD86IHN0cmluZztcclxuICAgICAgICB3aG9BbUk/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgZm9ybXM/OiB7XHJcbiAgICAgICAgc2lnbkluOiBzdHJpbmc7XHJcbiAgICAgICAgc2lnblVwOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgZW52Pzoge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IGJvb2xlYW47XHJcbiAgICAgICAgZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcbiAgICAgICAgc2VydmVyOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIHNpZ251cFZhbGlkYXRvcj86ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgYWZ0ZXJTaWduaW4/OiAodXNlcjogYW55KSA9PiB2b2lkO1xyXG4gICAgcmVzcG9uc2VUb1VzZXI/OiAodXNlcjogYW55KSA9PiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IHtcclxuICAgIG1vZGU6IFwiY29va2llLWJhc2VcIixcclxuICAgIHRva2VuOiB7XHJcbiAgICAgICAgdGltZTogMjQgKiAxMiAqIDYwICogNjBcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyXCIsXHJcbiAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICBzaWduT3V0OiBcIlwiLFxyXG4gICAgICAgIHNpZ25JbjogXCJcIixcclxuICAgICAgICBzaWduVXA6IFwiXCIsXHJcbiAgICAgICAgd2hvQW1JOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZm9ybXM6IHtcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZW52OiB7XHJcbiAgICAgICAgcHJvZHVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgZnJvbnRlbmRfc2VydmVyOiBcImF1dGgvbW9kdWxlL2Zyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG4gICAgICAgIHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG4gICAgfSxcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG86IFwiL1wiLFxyXG4gICAgc2lnbnVwVmFsaWRhdG9yOiB2YWx1ZSA9PiBvZih0cnVlKSxcclxuICAgIGFmdGVyU2lnbmluOiAodXNlcikgPT4geyB9LFxyXG4gICAgcmVzcG9uc2VUb1VzZXI6IHVzZXIgPT4gdXNlclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iXX0=
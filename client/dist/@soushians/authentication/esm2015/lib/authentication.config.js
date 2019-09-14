/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const ɵ0 = /**
 * @param {?} value
 * @return {?}
 */
value => of(true), ɵ1 = /**
 * @param {?} user
 * @return {?}
 */
user => { }, ɵ2 = /**
 * @param {?} user
 * @return {?}
 */
user => user;
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
    mode: "cookie-base",
    token: {
        time: 24 * 12 * 60 * 60
    },
    server: "frontend_server",
    endpoints: {
        signOut: "",
        signOutMethod: "get",
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
    signupValidator: (ɵ0),
    afterSignin: (ɵ1),
    responseToUser: (ɵ2)
};
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUV0QyxnREEwQkM7OztJQXpCQSwwQ0FBYzs7SUFDZCwyQ0FFRTs7SUFDRiw0Q0FBZ0I7O0lBQ2hCLCtDQU1FOztJQUNGLDJDQUdFOztJQUNGLHlDQUlFOztJQUNGLDREQUFnQzs7SUFDaEMscURBQXNEOztJQUN0RCxpREFBa0M7O0lBQ2xDLG9EQUFvQzs7Ozs7O0FBMEJuQixLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Ozs7QUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDOzs7O0FBQ1IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJOztBQXpCN0IsTUFBTSxPQUFPLHFCQUFxQixHQUErQjtJQUNoRSxJQUFJLEVBQUUsYUFBYTtJQUNuQixLQUFLLEVBQUU7UUFDTixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtLQUN2QjtJQUNELE1BQU0sRUFBRSxpQkFBaUI7SUFDekIsU0FBUyxFQUFFO1FBQ1YsT0FBTyxFQUFFLEVBQUU7UUFDWCxhQUFhLEVBQUUsS0FBSztRQUNwQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7S0FDVjtJQUNELEdBQUcsRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGVBQWUsRUFBRSx5Q0FBeUM7UUFDMUQsTUFBTSxFQUFFLGdDQUFnQztLQUN4QztJQUNELHNCQUFzQixFQUFFLEdBQUc7SUFDM0IsZUFBZSxNQUFtQjtJQUNsQyxXQUFXLE1BQWE7SUFDeEIsY0FBYyxNQUFjO0NBQzVCOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBNkIsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIHtcclxuXHRtb2RlPzogc3RyaW5nOyAvLyBcInRva2VuLWJhc2VcIiB8IFwiY29va2llLWJhc2VcIjtcclxuXHR0b2tlbj86IHtcclxuXHRcdHRpbWU6IG51bWJlcjtcclxuXHR9O1xyXG5cdHNlcnZlcj86IHN0cmluZztcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRzaWduT3V0Pzogc3RyaW5nO1xyXG5cdFx0c2lnbk91dE1ldGhvZD86IHN0cmluZztcclxuXHRcdHNpZ25Jbj86IHN0cmluZztcclxuXHRcdHNpZ25VcD86IHN0cmluZztcclxuXHRcdHdob0FtST86IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0c2lnbkluOiBzdHJpbmc7XHJcblx0XHRzaWduVXA6IHN0cmluZztcclxuXHR9O1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbz86IHN0cmluZztcclxuXHRzaWdudXBWYWxpZGF0b3I/OiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRhZnRlclNpZ25pbj86ICh1c2VyOiBhbnkpID0+IHZvaWQ7XHJcblx0cmVzcG9uc2VUb1VzZXI/OiAodXNlcjogYW55KSA9PiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG5cdG1vZGU6IFwiY29va2llLWJhc2VcIixcclxuXHR0b2tlbjoge1xyXG5cdFx0dGltZTogMjQgKiAxMiAqIDYwICogNjBcclxuXHR9LFxyXG5cdHNlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXJcIixcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHNpZ25PdXQ6IFwiXCIsXHJcblx0XHRzaWduT3V0TWV0aG9kOiBcImdldFwiLFxyXG5cdFx0c2lnbkluOiBcIlwiLFxyXG5cdFx0c2lnblVwOiBcIlwiLFxyXG5cdFx0d2hvQW1JOiBcIlwiXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0c2lnbkluOiBcIlwiLFxyXG5cdFx0c2lnblVwOiBcIlwiXHJcblx0fSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImF1dGgvbW9kdWxlL2Zyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcImF1dGgvbW9kdWxlL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIixcclxuXHRzaWdudXBWYWxpZGF0b3I6IHZhbHVlID0+IG9mKHRydWUpLFxyXG5cdGFmdGVyU2lnbmluOiB1c2VyID0+IHsgfSxcclxuXHRyZXNwb25zZVRvVXNlcjogdXNlciA9PiB1c2VyXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZz4oXCJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
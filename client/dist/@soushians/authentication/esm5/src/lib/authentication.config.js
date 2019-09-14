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
    signupValidator: function (value) { return of(true); },
    afterSignin: function (user) { },
    responseToUser: function (user) { return user; }
};
/** @type {?} */
export var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9saWIvYXV0aGVudGljYXRpb24uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFdEMsZ0RBMEJDOzs7SUF6QkEsMENBQWM7O0lBQ2QsMkNBRUU7O0lBQ0YsNENBQWdCOztJQUNoQiwrQ0FNRTs7SUFDRiwyQ0FHRTs7SUFDRix5Q0FJRTs7SUFDRiw0REFBZ0M7O0lBQ2hDLHFEQUFzRDs7SUFDdEQsaURBQWtDOztJQUNsQyxvREFBb0M7OztBQUdyQyxNQUFNLEtBQU8scUJBQXFCLEdBQStCO0lBQ2hFLElBQUksRUFBRSxhQUFhO0lBQ25CLEtBQUssRUFBRTtRQUNOLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQ3ZCO0lBQ0QsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixTQUFTLEVBQUU7UUFDVixPQUFPLEVBQUUsRUFBRTtRQUNYLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtLQUNWO0lBQ0QsS0FBSyxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtLQUNWO0lBQ0QsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHlDQUF5QztRQUMxRCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0Qsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixlQUFlLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUTtJQUNsQyxXQUFXLEVBQUUsVUFBQSxJQUFJLElBQUssQ0FBQztJQUN2QixjQUFjLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSTtDQUM1Qjs7QUFFRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQTZCLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcblx0bW9kZT86IHN0cmluZzsgLy8gXCJ0b2tlbi1iYXNlXCIgfCBcImNvb2tpZS1iYXNlXCI7XHJcblx0dG9rZW4/OiB7XHJcblx0XHR0aW1lOiBudW1iZXI7XHJcblx0fTtcclxuXHRzZXJ2ZXI/OiBzdHJpbmc7XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0c2lnbk91dD86IHN0cmluZztcclxuXHRcdHNpZ25PdXRNZXRob2Q/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHRzaWduVXA/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdFx0c2lnblVwOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0XHRzZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcblx0c2lnbnVwVmFsaWRhdG9yPzogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0YWZ0ZXJTaWduaW4/OiAodXNlcjogYW55KSA9PiB2b2lkO1xyXG5cdHJlc3BvbnNlVG9Vc2VyPzogKHVzZXI6IGFueSkgPT4gYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IHtcclxuXHRtb2RlOiBcImNvb2tpZS1iYXNlXCIsXHJcblx0dG9rZW46IHtcclxuXHRcdHRpbWU6IDI0ICogMTIgKiA2MCAqIDYwXHJcblx0fSxcclxuXHRzZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyXCIsXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRzaWduT3V0OiBcIlwiLFxyXG5cdFx0c2lnbk91dE1ldGhvZDogXCJnZXRcIixcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHNpZ25VcDogXCJcIixcclxuXHRcdHdob0FtSTogXCJcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHNpZ25VcDogXCJcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuXHRcdHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCIsXHJcblx0c2lnbnVwVmFsaWRhdG9yOiB2YWx1ZSA9PiBvZih0cnVlKSxcclxuXHRhZnRlclNpZ25pbjogdXNlciA9PiB7fSxcclxuXHRyZXNwb25zZVRvVXNlcjogdXNlciA9PiB1c2VyXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZz4oXCJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
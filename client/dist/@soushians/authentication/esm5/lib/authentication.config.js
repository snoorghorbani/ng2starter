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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QnRDLFdBQWEscUJBQXFCLEdBQStCO0lBQzdELElBQUksRUFBRSxhQUFhO0lBQ25CLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQzFCO0lBQ0QsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixTQUFTLEVBQUU7UUFDUCxPQUFPLEVBQUUsRUFBRTtRQUNYLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtLQUNiO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtLQUNiO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHlDQUF5QztRQUMxRCxNQUFNLEVBQUUsZ0NBQWdDO0tBQzNDO0lBQ0Qsc0JBQXNCLEVBQUUsR0FBRztJQUMzQixlQUFlLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUTtJQUNsQyxXQUFXLEVBQUUsVUFBQyxJQUFJLEtBQVE7SUFDMUIsY0FBYyxFQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxFQUFKLENBQUk7Q0FDL0IsQ0FBQzs7QUFFRixXQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUE2QixjQUFjLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcbiAgICBtb2RlPzogc3RyaW5nOyAvLyBcInRva2VuLWJhc2VcIiB8IFwiY29va2llLWJhc2VcIjtcclxuICAgIHRva2VuPzoge1xyXG4gICAgICAgIHRpbWU6IG51bWJlclxyXG4gICAgfTtcclxuICAgIHNlcnZlcj86IHN0cmluZztcclxuICAgIGVuZHBvaW50cz86IHtcclxuICAgICAgICBzaWduT3V0Pzogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25Jbj86IHN0cmluZztcclxuICAgICAgICBzaWduVXA/OiBzdHJpbmc7XHJcbiAgICAgICAgd2hvQW1JPzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGZvcm1zPzoge1xyXG4gICAgICAgIHNpZ25Jbjogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25VcDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGVudj86IHtcclxuICAgICAgICBwcm9kdWN0aW9uOiBib29sZWFuO1xyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG4gICAgICAgIHNlcnZlcjogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICBzaWdudXBWYWxpZGF0b3I/OiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIGFmdGVyU2lnbmluPzogKHVzZXI6IGFueSkgPT4gdm9pZDtcclxuICAgIHJlc3BvbnNlVG9Vc2VyPzogKHVzZXI6IGFueSkgPT4gYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcbiAgICBtb2RlOiBcImNvb2tpZS1iYXNlXCIsXHJcbiAgICB0b2tlbjoge1xyXG4gICAgICAgIHRpbWU6IDI0ICogMTIgKiA2MCAqIDYwXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG4gICAgZW5kcG9pbnRzOiB7XHJcbiAgICAgICAgc2lnbk91dDogXCJcIixcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiLFxyXG4gICAgICAgIHdob0FtSTogXCJcIlxyXG4gICAgfSxcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgICAgc2lnbkluOiBcIlwiLFxyXG4gICAgICAgIHNpZ25VcDogXCJcIlxyXG4gICAgfSxcclxuICAgIGVudjoge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuICAgICAgICBzZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuICAgIH0sXHJcbiAgICBhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIixcclxuICAgIHNpZ251cFZhbGlkYXRvcjogdmFsdWUgPT4gb2YodHJ1ZSksXHJcbiAgICBhZnRlclNpZ25pbjogKHVzZXIpID0+IHsgfSxcclxuICAgIHJlc3BvbnNlVG9Vc2VyOiB1c2VyID0+IHVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPihcIk1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function FrontendAuthenticationModuleConfig() { }
function FrontendAuthenticationModuleConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.env;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
}
export var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        signIn: "/api/user/signin",
        signOut: "/api/user/signout",
        whoAmI: "/api/user/account/profile"
    },
    forms: {
        signIn: "5a951cfbfd791632a09b3bc6"
    },
    env: {
        production: false,
        frontend_server: "auth/module/frontend/server/not/set",
        server: "auth/module/server/not/set"
    },
    afterSignoutRedirectTo: "/"
};
export var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQW1CL0MsTUFBTSxDQUFDLHFCQUFNLHFCQUFxQixHQUF1QztJQUN4RSxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsTUFBTSxFQUFFLDJCQUEyQjtLQUNuQztJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSwwQkFBMEI7S0FDbEM7SUFDRCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUscUNBQXFDO1FBQ3RELE1BQU0sRUFBRSw0QkFBNEI7S0FDcEM7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0NBQzNCLENBQUM7QUFFRixNQUFNLENBQUMscUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFDLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRzaWduT3V0Pzogc3RyaW5nO1xyXG5cdFx0c2lnbkluPzogc3RyaW5nO1xyXG5cdFx0d2hvQW1JPzogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRzaWduSW46IHN0cmluZztcclxuXHR9O1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHNpZ25JbjogXCIvYXBpL3VzZXIvc2lnbmluXCIsXHJcblx0XHRzaWduT3V0OiBcIi9hcGkvdXNlci9zaWdub3V0XCIsXHJcblx0XHR3aG9BbUk6IFwiL2FwaS91c2VyL2FjY291bnQvcHJvZmlsZVwiXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0c2lnbkluOiBcIjVhOTUxY2ZiZmQ3OTE2MzJhMDliM2JjNlwiXHJcblx0fSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImF1dGgvbW9kdWxlL2Zyb250ZW5kL3NlcnZlci9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvc2VydmVyL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iXX0=
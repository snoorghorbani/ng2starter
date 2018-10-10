/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function FrontendAuthenticationModuleConfig() { }
/** @type {?|undefined} */
FrontendAuthenticationModuleConfig.prototype.endpoints;
/** @type {?|undefined} */
FrontendAuthenticationModuleConfig.prototype.forms;
/** @type {?|undefined} */
FrontendAuthenticationModuleConfig.prototype.env;
/** @type {?|undefined} */
FrontendAuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
/** @type {?} */
export const MODULE_DEFAULT_CONFIG = {
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
/** @type {?} */
export const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBbUIvQyxhQUFhLHFCQUFxQixHQUF1QztJQUN4RSxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsTUFBTSxFQUFFLDJCQUEyQjtLQUNuQztJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSwwQkFBMEI7S0FDbEM7SUFDRCxHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUscUNBQXFDO1FBQ3RELE1BQU0sRUFBRSw0QkFBNEI7S0FDcEM7SUFDRCxzQkFBc0IsRUFBRSxHQUFHO0NBQzNCLENBQUM7O0FBRUYsYUFBYSxtQkFBbUIsR0FBRyxJQUFJLGNBQWMsQ0FBcUMsY0FBYyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHNpZ25PdXQ/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdFx0c2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0c2lnbkluOiBcIi9hcGkvdXNlci9zaWduaW5cIixcclxuXHRcdHNpZ25PdXQ6IFwiL2FwaS91c2VyL3NpZ25vdXRcIixcclxuXHRcdHdob0FtSTogXCIvYXBpL3VzZXIvYWNjb3VudC9wcm9maWxlXCJcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRzaWduSW46IFwiNWE5NTFjZmJmZDc5MTYzMmEwOWIzYmM2XCJcclxuXHR9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL25vdC9zZXRcIixcclxuXHRcdHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvbm90L3NldFwiXHJcblx0fSxcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZz4oXCJNb2R1bGVDb25maWdcIik7XHJcbiJdfQ==
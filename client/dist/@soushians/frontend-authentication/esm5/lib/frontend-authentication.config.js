/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from "@angular/core";
/**
 * @record
 */
export function FrontendAuthenticationModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.env;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
}
/** @type {?} */
export var MODULE_DEFAULT_CONFIG = {
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
export var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFL0Msd0RBZUM7OztJQWRBLHVEQUlFOztJQUNGLG1EQUVFOztJQUNGLGlEQUlFOztJQUNGLG9FQUFnQzs7O0FBR2pDLE1BQU0sS0FBTyxxQkFBcUIsR0FBdUM7SUFDeEUsU0FBUyxFQUFFO1FBQ1YsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLE1BQU0sRUFBRSwyQkFBMkI7S0FDbkM7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsMEJBQTBCO0tBQ2xDO0lBQ0QsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHFDQUFxQztRQUN0RCxNQUFNLEVBQUUsNEJBQTRCO0tBQ3BDO0lBQ0Qsc0JBQXNCLEVBQUUsR0FBRztDQUMzQjs7QUFFRCxNQUFNLEtBQU8sbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0c2lnbk91dD86IHN0cmluZztcclxuXHRcdHNpZ25Jbj86IHN0cmluZztcclxuXHRcdHdob0FtST86IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0c2lnbkluOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0XHRzZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRzaWduSW46IFwiL2FwaS91c2VyL3NpZ25pblwiLFxyXG5cdFx0c2lnbk91dDogXCIvYXBpL3VzZXIvc2lnbm91dFwiLFxyXG5cdFx0d2hvQW1JOiBcIi9hcGkvdXNlci9hY2NvdW50L3Byb2ZpbGVcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCI1YTk1MWNmYmZkNzkxNjMyYTA5YjNiYzZcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZC9zZXJ2ZXIvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcImF1dGgvbW9kdWxlL3NlcnZlci9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG86IFwiL1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPihcIk1vZHVsZUNvbmZpZ1wiKTtcclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, filter, switchMap } from "rxjs/operators";
import { UserActionTypes } from "@soushians/user";
import { FrontendSigninService } from "./services/signin.service";
import { SigninSecceed } from "./actions/signin.actions";
var FrontendAuthenticationModuleEffects = /** @class */ (function () {
    function FrontendAuthenticationModuleEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.goToList$ = this.actions$.ofType(UserActionTypes.REFRESH_USER_INFO).pipe(map(function (action) { return action.payload; }), filter(function (user) { return user.Token != null; }), switchMap(function (user) {
            return _this.service.signin(user.Token).map(function (_user) {
                return new SigninSecceed(_user);
            });
        }));
    }
    FrontendAuthenticationModuleEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FrontendAuthenticationModuleEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: FrontendSigninService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], FrontendAuthenticationModuleEffects.prototype, "goToList$", void 0);
    return FrontendAuthenticationModuleEffects;
}());
export { FrontendAuthenticationModuleEffects };
if (false) {
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.goToList$;
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.actions$;
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBSXhELDZDQUFvQixRQUFzQixFQUFVLE9BQThCO1FBQWxGLGlCQUF1RjtRQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7eUJBR3RFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQWxCLENBQWtCLENBQUMsRUFDbEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQ3hDLE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEMsQ0FBQztRQUZGLENBRUUsQ0FDRixDQUNEO0tBWHNGOztnQkFGdkYsVUFBVTs7OztnQkFSRixPQUFPO2dCQUtQLHFCQUFxQjs7O1FBTzVCLE1BQU0sRUFBRTs7OzhDQWpCVjs7U0FjYSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kU2lnbmluU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlY2NlZWQgfSBmcm9tIFwiLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IEZyb250ZW5kU2lnbmluU2VydmljZSkgeyB9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9MaXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTykucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0ZmlsdGVyKHVzZXIgPT4gdXNlci5Ub2tlbiAhPSBudWxsKSxcclxuXHRcdHN3aXRjaE1hcCh1c2VyID0+XHJcblx0XHRcdHRoaXMuc2VydmljZS5zaWduaW4odXNlci5Ub2tlbikubWFwKF91c2VyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFNpZ25pblNlY2NlZWQoX3VzZXIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cdCk7XHJcbn1cclxuIl19
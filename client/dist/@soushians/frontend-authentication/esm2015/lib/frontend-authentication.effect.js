/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, filter, switchMap } from "rxjs/operators";
import { UserActionTypes } from "@soushians/user";
import { FrontendSigninService } from "./services/signin.service";
import { SigninSecceed } from "./actions/signin.actions";
export class FrontendAuthenticationModuleEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.goToList$ = this.actions$.pipe(ofType(UserActionTypes.REFRESH_USER_INFO), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), filter((/**
         * @param {?} user
         * @return {?}
         */
        user => user.Token != null)), switchMap((/**
         * @param {?} user
         * @return {?}
         */
        user => this.service.signin(user.Token).map((/**
         * @param {?} _user
         * @return {?}
         */
        _user => {
            return new SigninSecceed(_user);
        })))));
    }
}
FrontendAuthenticationModuleEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FrontendAuthenticationModuleEffects.ctorParameters = () => [
    { type: Actions },
    { type: FrontendSigninService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], FrontendAuthenticationModuleEffects.prototype, "goToList$", void 0);
if (false) {
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.goToList$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationModuleEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationModuleEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3pELE1BQU0sT0FBTyxtQ0FBbUM7Ozs7O0lBQy9DLFlBQW9CLFFBQXNCLEVBQVUsT0FBOEI7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBR2xGLGNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFNLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQzdCLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFDLEVBQ2xDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLEVBQ0YsQ0FDRCxDQUFDO0lBWm1GLENBQUM7OztZQUZ0RixVQUFVOzs7O1lBUkYsT0FBTztZQUtQLHFCQUFxQjs7QUFRN0I7SUFEQyxNQUFNLEVBQUU7O3NFQVVQOzs7SUFWRix3REFVRTs7Ozs7SUFaVSx1REFBOEI7Ozs7O0lBQUUsc0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kU2lnbmluU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlY2NlZWQgfSBmcm9tIFwiLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHNlcnZpY2U6IEZyb250ZW5kU2lnbmluU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub0xpc3QkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPGFueT4oVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPKSxcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0ZmlsdGVyKHVzZXIgPT4gdXNlci5Ub2tlbiAhPSBudWxsKSxcclxuXHRcdHN3aXRjaE1hcCh1c2VyID0+XHJcblx0XHRcdHRoaXMuc2VydmljZS5zaWduaW4odXNlci5Ub2tlbikubWFwKF91c2VyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFNpZ25pblNlY2NlZWQoX3VzZXIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cdCk7XHJcbn1cclxuIl19
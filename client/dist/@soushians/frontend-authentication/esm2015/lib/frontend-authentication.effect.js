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
export class FrontendAuthenticationModuleEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.goToList$ = this.actions$.ofType(UserActionTypes.REFRESH_USER_INFO).pipe(map(action => action.payload), filter(user => user.Token != null), switchMap(user => this.service.signin(user.Token).map(_user => {
            return new SigninSecceed(_user);
        })));
    }
}
FrontendAuthenticationModuleEffects.decorators = [
    { type: Injectable },
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
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.actions$;
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHekQsTUFBTTs7Ozs7SUFDTCxZQUFvQixRQUFzQixFQUFVLE9BQThCO1FBQTlELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUF1Qjt5QkFHdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUN2RSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEMsQ0FBQyxDQUNGLENBQ0Q7S0FYc0Y7OztZQUZ2RixVQUFVOzs7O1lBUkYsT0FBTztZQUtQLHFCQUFxQjs7O0lBTzVCLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VjY2VlZCB9IGZyb20gXCIuL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogRnJvbnRlbmRTaWduaW5TZXJ2aWNlKSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub0xpc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRmaWx0ZXIodXNlciA9PiB1c2VyLlRva2VuICE9IG51bGwpLFxyXG5cdFx0c3dpdGNoTWFwKHVzZXIgPT5cclxuXHRcdFx0dGhpcy5zZXJ2aWNlLnNpZ25pbih1c2VyLlRva2VuKS5tYXAoX3VzZXIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU2lnbmluU2VjY2VlZChfdXNlcik7XHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iXX0=
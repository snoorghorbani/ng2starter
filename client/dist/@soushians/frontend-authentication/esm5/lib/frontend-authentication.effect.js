/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            return _this.service.signin(user.Token).map(function (user) {
                return new SigninSecceed(user);
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
function FrontendAuthenticationModuleEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.goToList$;
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.actions$;
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBSXhELDZDQUFvQixRQUFzQixFQUFVLE9BQThCO1FBQWxGLGlCQUFzRjtRQUFsRSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7eUJBR3RFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDdkUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDN0IsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQWxCLENBQWtCLENBQUMsRUFDbEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQixDQUFDO1FBRkYsQ0FFRSxDQUNGLENBQ0Q7S0FYcUY7O2dCQUZ0RixVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AscUJBQXFCOzs7UUFPNUIsTUFBTSxFQUFFOzs7OENBakJWOztTQWNhLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VjY2VlZCB9IGZyb20gXCIuL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogRnJvbnRlbmRTaWduaW5TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRnb1RvTGlzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk8pLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdGZpbHRlcih1c2VyID0+IHVzZXIuVG9rZW4gIT0gbnVsbCksXHJcblx0XHRzd2l0Y2hNYXAodXNlciA9PlxyXG5cdFx0XHR0aGlzLnNlcnZpY2Uuc2lnbmluKHVzZXIuVG9rZW4pLm1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFNpZ25pblNlY2NlZWQodXNlcik7XHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iXX0=
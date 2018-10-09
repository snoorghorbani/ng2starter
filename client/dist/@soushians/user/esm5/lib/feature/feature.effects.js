/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { SignInActionTypes } from "@soushians/authentication";
import { UserService } from "../services/user.service";
import { GetProfile } from "../profile-view/profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard";
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        // @Effect()
        // updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
        // 	map(action => action.payload),
        // 	map(user => {
        // 		return new GetProfileSucceed(user);
        // 	})
        // );
        this.getAccountInfo$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(function () {
            return new GetProfile();
        }));
        this.signout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(map(function () { return new RefreshUserInfoAction(/** @type {?} */ ({})); }));
    }
    UserEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: UserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "getAccountInfo$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], UserEffects.prototype, "signout$", void 0);
    return UserEffects;
}());
export { UserEffects };
if (false) {
    /** @type {?} */
    UserEffects.prototype.getAccountInfo$;
    /** @type {?} */
    UserEffects.prototype.signout$;
    /** @type {?} */
    UserEffects.prototype.actions$;
    /** @type {?} */
    UserEffects.prototype.router;
    /** @type {?} */
    UserEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLHNDQUFzQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFLcEQscUJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQTVFLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTs7Ozs7Ozs7K0JBVTlFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDNUUsR0FBRyxDQUFDO1lBQ0gsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FDRjt3QkFFVSxJQUFJLENBQUMsUUFBUTthQUN0QixNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUkscUJBQXFCLG1CQUFDLEVBQWUsRUFBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7S0FsQnVDOztnQkFGcEcsVUFBVTs7OztnQkFWRixPQUFPO2dCQUpQLE1BQU07Z0JBU04sV0FBVzs7O1FBZ0JsQixNQUFNLEVBQUU7Ozs7UUFNUixNQUFNLEVBQUU7OztzQkFoQ1Y7O1NBZ0JhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUsIEdldFByb2ZpbGVTdWNjZWVkIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIHVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHQvLyBcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0bWFwKHVzZXIgPT4ge1xyXG5cdC8vIFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHVzZXIpO1xyXG5cdC8vIFx0fSlcclxuXHQvLyApO1xyXG5cdEBFZmZlY3QoKVxyXG5cdGdldEFjY291bnRJbmZvJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblx0QEVmZmVjdCgpXHJcblx0c2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbih7fSBhcyBVc2VyTW9kZWwpKSk7XHJcbn1cclxuIl19
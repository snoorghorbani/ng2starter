/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { ProfileViewActionTypes, GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard/user.actions";
export class ProfileViewEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new GetProfileStart())));
        this.getProfile$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.userService
            .getAccountInfo()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetProfileSucceed(res))), catchError((/**
         * @return {?}
         */
        () => of(new GetProfileFailed())))))));
        this.refreshUserInfo$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => new RefreshUserInfoAction(data))));
    }
}
ProfileViewEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProfileViewEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "getProfile$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Object)
], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
if (false) {
    /** @type {?} */
    ProfileViewEffects.prototype.ProfileRequest$;
    /** @type {?} */
    ProfileViewEffects.prototype.getProfile$;
    /** @type {?} */
    ProfileViewEffects.prototype.refreshUserInfo$;
    /**
     * @type {?}
     * @private
     */
    ProfileViewEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProfileViewEffects.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM5QixZQUFvQixRQUFzQixFQUFVLFdBQXdCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUc1RSxvQkFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLEVBQUUsRUFBQyxDQUNsQyxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLEVBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUzs7OztRQUFDLENBQUMsSUFBa0MsRUFBRSxFQUFFLENBQ2hELElBQUksQ0FBQyxXQUFXO2FBQ2QsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFDNUYsQ0FDRCxDQUFDO1FBR0YscUJBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUNsRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUc7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUNuRCxDQUFDO0lBekI2RSxDQUFDOzs7WUFGaEYsVUFBVTs7OztZQVZGLE9BQU87WUFLUCxXQUFXOztBQVVuQjtJQURDLE1BQU0sRUFBRTs7MkRBS1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7dURBU1A7QUFHRjtJQURDLE1BQU0sRUFBRTs7NERBS1A7OztJQXZCRiw2Q0FLRTs7SUFFRix5Q0FTRTs7SUFFRiw4Q0FLRTs7Ozs7SUF6QlUsc0NBQThCOzs7OztJQUFFLHlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdBY3Rpb25UeXBlcywgR2V0UHJvZmlsZVN0YXJ0LCBHZXRQcm9maWxlU3VjY2VlZCwgR2V0UHJvZmlsZUZhaWxlZCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlld0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcChkYXRhID0+IG5ldyBHZXRQcm9maWxlU3RhcnQoKSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRQcm9maWxlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0dGhpcy51c2VyU2VydmljZVxyXG5cdFx0XHRcdC5nZXRBY2NvdW50SW5mbygpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQocmVzKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldFByb2ZpbGVGYWlsZWQoKSkpKVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHJlZnJlc2hVc2VySW5mbyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdG1hcCgoZGF0YTogYW55KSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKGRhdGEpKVxyXG5cdCk7XHJcbn1cclxuIl19
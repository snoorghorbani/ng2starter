/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.ProfileRequest$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE), pluck("payload"), map(data => new GetProfileStart()));
        this.getProfile$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_START), pluck("payload"), switchMap((data) => this.userService
            .getAccountInfo()
            .pipe(map(res => new GetProfileSucceed(res)), catchError(() => of(new GetProfileFailed())))));
        this.refreshUserInfo$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED), pluck("payload"), map((data) => new RefreshUserInfoAction(data)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM5QixZQUFvQixRQUFzQixFQUFVLFdBQXdCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUc1RSxvQkFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUNsQyxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDL0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLEVBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUyxDQUFDLENBQUMsSUFBa0MsRUFBRSxFQUFFLENBQ2hELElBQUksQ0FBQyxXQUFXO2FBQ2QsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVGLENBQ0QsQ0FBQztRQUdGLHFCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsRUFDbEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDbkQsQ0FBQztJQXpCNkUsQ0FBQzs7O1lBRmhGLFVBQVU7Ozs7WUFWRixPQUFPO1lBS1AsV0FBVzs7QUFVbkI7SUFEQyxNQUFNLEVBQUU7OzJEQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O3VEQVNQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7OzREQUtQOzs7SUF2QkYsNkNBS0U7O0lBRUYseUNBU0U7O0lBRUYsOENBS0U7Ozs7O0lBekJVLHNDQUE4Qjs7Ozs7SUFBRSx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRSksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoZGF0YSA9PiBuZXcgR2V0UHJvZmlsZVN0YXJ0KCkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0UHJvZmlsZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdHRoaXMudXNlclNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0QWNjb3VudEluZm8oKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXRQcm9maWxlRmFpbGVkKCkpKSlcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRyZWZyZXNoVXNlckluZm8kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKGRhdGE6IGFueSkgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbihkYXRhKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
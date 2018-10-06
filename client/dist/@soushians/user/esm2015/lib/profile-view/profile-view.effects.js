/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
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
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(map(action => action.payload), map(data => new GetProfileStart()));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(map(action => action.payload), switchMap((data) => this.userService
            .getAccountInfo()
            .pipe(map(res => new GetProfileSucceed(res)), catchError(() => Observable.of(new GetProfileFailed())))));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(map(action => action.payload), map(data => new RefreshUserInfoAction(data)));
    }
}
ProfileViewEffects.decorators = [
    { type: Injectable },
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
    /** @type {?} */
    ProfileViewEffects.prototype.actions$;
    /** @type {?} */
    ProfileViewEffects.prototype.userService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3LmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRSxNQUFNOzs7OztJQUNMLFlBQW9CLFFBQXNCLEVBQVUsV0FBd0I7UUFBeEQsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhOytCQUcxRCxJQUFJLENBQUMsUUFBUTthQUM3QixNQUFNLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDO2FBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDOzJCQUczRCxJQUFJLENBQUMsUUFBUTthQUN6QixNQUFNLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUM7YUFDaEQsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDN0IsU0FBUyxDQUFDLENBQUMsSUFBa0MsRUFBRSxFQUFFLENBQ2hELElBQUksQ0FBQyxXQUFXO2FBQ2QsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FDSixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQ3ZELENBQ0YsQ0FDRDtnQ0FHaUIsSUFBSSxDQUFDLFFBQVE7YUFDOUIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO2FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBekJIOzs7WUFGaEYsVUFBVTs7OztZQVZGLE9BQU87WUFLUCxXQUFXOzs7SUFTbEIsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFOzs7O0lBZVIsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdBY3Rpb25UeXBlcywgR2V0UHJvZmlsZVN0YXJ0LCBHZXRQcm9maWxlU3VjY2VlZCwgR2V0UHJvZmlsZUZhaWxlZCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlld0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0UHJvZmlsZVN0YXJ0KCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0UHJvZmlsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLnVzZXJTZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0QWNjb3VudEluZm8oKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEdldFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHJlZnJlc2hVc2VySW5mbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKGRhdGEpKSk7XHJcbn1cclxuIl19
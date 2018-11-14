/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { EditProfileActionTypes, EditProfileStart, EditProfileSucceed, EditProfileFailed } from "./edit-profile.actions";
import { GetProfile } from "../profile-view/profile-view.actions";
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new EditProfileStart(data); }));
        this.RequestEditProfileLink$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.editProfile(data); }), map(function (res) { return new EditProfileSucceed(res); }), catchError(function () { return of(new EditProfileFailed()); }));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(map(function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
    EditProfileEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EditProfileEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: UserService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "goToView$", void 0);
    return EditProfileEffects;
}());
export { EditProfileEffects };
if (false) {
    /** @type {?} */
    EditProfileEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    EditProfileEffects.prototype.RequestEditProfileLink$;
    /** @type {?} */
    EditProfileEffects.prototype.goToView$;
    /** @type {?} */
    EditProfileEffects.prototype.actions$;
    /** @type {?} */
    EditProfileEffects.prototype.router;
    /** @type {?} */
    EditProfileEffects.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUNOLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7SUFJakUsNEJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQWhHLGlCQUFvRztRQUFoRixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7bUNBRzFFLElBQUksQ0FBQyxRQUFRO2FBQ2pDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUM7YUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO3VDQUdwRCxJQUFJLENBQUMsUUFBUTthQUNyQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7YUFDakQsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxVQUFDLElBQWtDLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxFQUNqRixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUFDLEVBQ3ZDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQzdDOzs7Ozs7O3lCQVNVLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUNqRixHQUFHLENBQUM7WUFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLGVBQWUsQ0FBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FDRjtLQTdCbUc7O2dCQUZwRyxVQUFVOzs7O2dCQWRGLE9BQU87Z0JBSFAsTUFBTTtnQkFPTixXQUFXOzs7UUFjbEIsTUFBTSxFQUFFOzs7O1FBS1IsTUFBTSxFQUFFOzs7O1FBZ0JSLE1BQU0sRUFBRTs7OzZCQTNDVjs7U0FtQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuXHRFZGl0UHJvZmlsZVN0YXJ0LFxyXG5cdEVkaXRQcm9maWxlU3VjY2VlZCxcclxuXHRFZGl0UHJvZmlsZUZhaWxlZFxyXG59IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEVkaXRQcm9maWxlU3RhcnQoZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UmVxdWVzdEVkaXRQcm9maWxlTGluayQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS5lZGl0UHJvZmlsZShkYXRhKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHQpO1xyXG5cdC8vIC5zd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHQvLyBcdHJldHVybiB0aGlzLnNlcnZpY2VcclxuXHQvLyBcdFx0LmVkaXRQcm9maWxlKGRhdGEpXHJcblx0Ly8gXHRcdC5tYXAoKHJlcykgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKVxyXG5cdC8vIFx0XHQuY2F0Y2goKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKTtcclxuXHQvLyB9KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub1ZpZXckID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
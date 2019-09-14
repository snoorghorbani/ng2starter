/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap, pluck } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { EditProfileActionTypes, EditProfileStart, EditProfileSucceed, EditProfileFailed } from "./edit-profile.actions";
import { GetProfile } from "../profile-view/profile-view.actions";
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE), pluck("payload"), map(function (data) { return new EditProfileStart(data); }));
        this.RequestEditProfileLink$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_START), pluck("payload"), switchMap(function (data) { return _this.service.editProfile(data); }), map(function (res) { return new EditProfileSucceed(res); }), catchError(function () { return of(new EditProfileFailed()); }));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED), map(function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
    EditProfileEffects.decorators = [
        { type: Injectable }
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
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQ04sc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWxFO0lBRUMsNEJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQWhHLGlCQUFvRztRQUFoRixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEcsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsRUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQzlDLENBQUM7UUFHRiw0QkFBdUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQ2pELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUyxDQUFDLFVBQUMsSUFBa0MsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUE5QixDQUE4QixDQUFDLEVBQ2pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQUMsRUFDdkMsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FDN0MsQ0FBQzs7Ozs7OztRQVNGLGNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLEVBQ25ELEdBQUcsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUUsZUFBZSxDQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQS9CaUcsQ0FBQzs7Z0JBRnBHLFVBQVU7Ozs7Z0JBZEYsT0FBTztnQkFIUCxNQUFNO2dCQU9OLFdBQVc7O0lBZW5CO1FBREMsTUFBTSxFQUFFOzttRUFLUDtJQUdGO1FBREMsTUFBTSxFQUFFOzt1RUFPUDtJQVNGO1FBREMsTUFBTSxFQUFFOzt5REFPUDtJQUNILHlCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FqQ1ksa0JBQWtCOzs7SUFHOUIsaURBS0U7O0lBRUYscURBT0U7O0lBUUYsdUNBT0U7Ozs7O0lBL0JVLHNDQUE4Qjs7Ozs7SUFBRSxvQ0FBc0I7Ozs7O0lBQUUscUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuXHRFZGl0UHJvZmlsZVN0YXJ0LFxyXG5cdEVkaXRQcm9maWxlU3VjY2VlZCxcclxuXHRFZGl0UHJvZmlsZUZhaWxlZFxyXG59IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRSksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKGRhdGE6IGFueSkgPT4gbmV3IEVkaXRQcm9maWxlU3RhcnQoZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UmVxdWVzdEVkaXRQcm9maWxlTGluayQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0bWFwKHJlcyA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEKSxcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
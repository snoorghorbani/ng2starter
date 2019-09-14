/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class EditProfileEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        (data) => new EditProfileStart(data))));
        this.RequestEditProfileLink$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.service.editProfile(data))), map((/**
         * @param {?} res
         * @return {?}
         */
        res => new EditProfileSucceed(res))), catchError((/**
         * @return {?}
         */
        () => of(new EditProfileFailed()))));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED), map((/**
         * @return {?}
         */
        () => {
            this.router.navigate(["/user/profile"]);
            return new GetProfile();
        })));
    }
}
EditProfileEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditProfileEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: UserService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQ04sc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2xFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUM5QixZQUFvQixRQUFzQixFQUFVLE1BQWMsRUFBVSxPQUFvQjtRQUE1RSxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEcsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsRUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FDOUMsQ0FBQztRQUdGLDRCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsRUFDakQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixTQUFTOzs7O1FBQUMsQ0FBQyxJQUFrQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUNqRixHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQ3ZDLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsRUFBQyxDQUM3QyxDQUFDOzs7Ozs7O1FBU0YsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixNQUFNLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsRUFDbkQsR0FBRzs7O1FBQUMsR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxlQUFlLENBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBL0JpRyxDQUFDOzs7WUFGcEcsVUFBVTs7OztZQWRGLE9BQU87WUFIUCxNQUFNO1lBT04sV0FBVzs7QUFlbkI7SUFEQyxNQUFNLEVBQUU7OytEQUtQO0FBR0Y7SUFEQyxNQUFNLEVBQUU7O21FQU9QO0FBU0Y7SUFEQyxNQUFNLEVBQUU7O3FEQU9QOzs7SUE3QkYsaURBS0U7O0lBRUYscURBT0U7O0lBUUYsdUNBT0U7Ozs7O0lBL0JVLHNDQUE4Qjs7Ozs7SUFBRSxvQ0FBc0I7Ozs7O0lBQUUscUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuXHRFZGl0UHJvZmlsZVN0YXJ0LFxyXG5cdEVkaXRQcm9maWxlU3VjY2VlZCxcclxuXHRFZGl0UHJvZmlsZUZhaWxlZFxyXG59IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRSksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRtYXAoKGRhdGE6IGFueSkgPT4gbmV3IEVkaXRQcm9maWxlU3RhcnQoZGF0YSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UmVxdWVzdEVkaXRQcm9maWxlTGluayQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0bWFwKHJlcyA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEKSxcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiJdfQ==
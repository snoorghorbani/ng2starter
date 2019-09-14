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
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new EditProfileStart(data); })));
        this.RequestEditProfileLink$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.service.editProfile(data); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return new EditProfileSucceed(res); })), catchError((/**
         * @return {?}
         */
        function () { return of(new EditProfileFailed()); })));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED), map((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1wcm9maWxlLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQ04sc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWxFO0lBRUMsNEJBQW9CLFFBQXNCLEVBQVUsTUFBYyxFQUFVLE9BQW9CO1FBQWhHLGlCQUFvRztRQUFoRixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHaEcsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsRUFDM0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHOzs7O1FBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQzlDLENBQUM7UUFHRiw0QkFBdUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEVBQ2pELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsU0FBUzs7OztRQUFDLFVBQUMsSUFBa0MsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUE5QixDQUE4QixFQUFDLEVBQ2pGLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsRUFDdkMsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUM3QyxDQUFDOzs7Ozs7O1FBU0YsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixNQUFNLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsRUFDbkQsR0FBRzs7O1FBQUM7WUFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLGVBQWUsQ0FBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUNGLENBQUM7SUEvQmlHLENBQUM7O2dCQUZwRyxVQUFVOzs7O2dCQWRGLE9BQU87Z0JBSFAsTUFBTTtnQkFPTixXQUFXOztJQWVuQjtRQURDLE1BQU0sRUFBRTs7bUVBS1A7SUFHRjtRQURDLE1BQU0sRUFBRTs7dUVBT1A7SUFTRjtRQURDLE1BQU0sRUFBRTs7eURBT1A7SUFDSCx5QkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLGtCQUFrQjs7O0lBRzlCLGlEQUtFOztJQUVGLHFEQU9FOztJQVFGLHVDQU9FOzs7OztJQS9CVSxzQ0FBOEI7Ozs7O0lBQUUsb0NBQXNCOzs7OztJQUFFLHFDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEUpLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0bWFwKChkYXRhOiBhbnkpID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmVkaXRQcm9maWxlKGRhdGEpKSxcclxuXHRcdG1hcChyZXMgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdCk7XHJcblx0Ly8gLnN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuc2VydmljZVxyXG5cdC8vIFx0XHQuZWRpdFByb2ZpbGUoZGF0YSlcclxuXHQvLyBcdFx0Lm1hcCgocmVzKSA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpXHJcblx0Ly8gXHRcdC5jYXRjaCgoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpO1xyXG5cdC8vIH0pO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnb1RvVmlldyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCksXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL3VzZXIvcHJvZmlsZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iXX0=
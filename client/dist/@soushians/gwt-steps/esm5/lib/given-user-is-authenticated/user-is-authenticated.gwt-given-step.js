/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { UserFacadeService } from "@soushians/user";
import { GwtStepTypes } from "@soushians/rule";
import { GivenUserIsAuthenticatedStepComponent } from "./step-component/given-user-is-authenticated-step.component";
var IfUserIsAuthenticatedGwtGivenStep = /** @class */ (function () {
    function IfUserIsAuthenticatedGwtGivenStep(injector) {
        this.injector = injector;
        this.stepComponent = GivenUserIsAuthenticatedStepComponent;
        debugger;
        this.id = "if_user_is_authenticated";
        this.name = "if user is authenticated";
        this.description = "هنگامی که کاربر احراز هویت کرده است";
        this.type = GwtStepTypes.Given;
        this.store = this.injector.get(Store);
        this.userFacadeService = this.injector.get(UserFacadeService);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    IfUserIsAuthenticatedGwtGivenStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        return this.userFacadeService.getDisplayName().pipe(map(function (userDispalyName) {
            debugger;
            return !!userDispalyName;
        }));
    };
    return IfUserIsAuthenticatedGwtGivenStep;
}());
export { IfUserIsAuthenticatedGwtGivenStep };
function IfUserIsAuthenticatedGwtGivenStep_tsickle_Closure_declarations() {
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.id;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.name;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.opposite;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.description;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.type;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.params;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.stepComponent;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.store;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.userFacadeService;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVwSCxJQUFBO0lBVUMsMkNBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7NkJBSHJCLHFDQUFxQztRQUlwRCxRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsRUFBRSxHQUFHLDBCQUEwQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQ0FBcUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM5RDs7Ozs7O0lBQ0Qsd0RBQVk7Ozs7O0lBQVosVUFBYSxNQUE2QyxFQUFFLFVBQXNCO1FBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNsRCxHQUFHLENBQUMsVUFBQSxlQUFlO1lBQ2xCLFFBQVEsQ0FBQztZQUNULE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1NBQ3pCLENBQUMsQ0FDRixDQUFDO0tBQ0Y7NENBckNGO0lBc0NDLENBQUE7QUEzQkQsNkNBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAsIEd3dFN0ZXBUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMgfSBmcm9tIFwiLi91c2VyLWlzLWF1dGhlbnRpY2F0ZWQuZ3d0LWdpdmVuLXN0ZXAtcGFyYW1zXCI7XHJcbmltcG9ydCB7IEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQtc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZlVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvcHBvc2l0ZTogYm9vbGVhbjtcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHR5cGU6IEd3dFN0ZXBUeXBlcztcclxuXHRwYXJhbXM6IHsgcm9sZTogXCJcIiB9O1xyXG5cdHN0ZXBDb21wb25lbnQgPSBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50O1xyXG5cdHN0b3JlOiBTdG9yZTxhbnk+O1xyXG5cdHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuaWQgPSBcImlmX3VzZXJfaXNfYXV0aGVudGljYXRlZFwiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcItmH2Ybar9in2YXbjCDaqdmHINqp2KfYsdio2LEg2KfYrdix2KfYsiDZh9mI24zYqiDaqdix2K/ZhyDYp9iz2KpcIjtcclxuXHRcdHRoaXMudHlwZSA9IEd3dFN0ZXBUeXBlcy5HaXZlbjtcclxuXHRcdHRoaXMuc3RvcmUgPSB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcblx0XHR0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoVXNlckZhY2FkZVNlcnZpY2UpO1xyXG5cdH1cclxuXHRpbnRlcnBlcmF0b3IocGFyYW1zOiBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyRGlzcGFseU5hbWUgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiAhIXVzZXJEaXNwYWx5TmFtZTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
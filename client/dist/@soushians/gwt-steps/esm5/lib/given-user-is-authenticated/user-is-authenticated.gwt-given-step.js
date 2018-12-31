/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
if (false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVwSCxJQUFBO0lBVUMsMkNBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIckMscUJBQWdCLHFDQUFxQyxDQUFDO1FBSXJELFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsMEJBQTBCLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLHFDQUFxQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzlEOzs7Ozs7SUFDRCx3REFBWTs7Ozs7SUFBWixVQUFhLE1BQTZDLEVBQUUsVUFBc0I7UUFDakYsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNsRCxHQUFHLENBQUMsVUFBQSxlQUFlO1lBQ2xCLFFBQVEsQ0FBQztZQUNULE9BQU8sQ0FBQyxDQUFDLGVBQWUsQ0FBQztTQUN6QixDQUFDLENBQ0YsQ0FBQztLQUNGOzRDQXJDRjtJQXNDQyxDQUFBO0FBM0JELDZDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwLCBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4vdXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLXBhcmFtc1wiO1xyXG5pbXBvcnQgeyBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RlcC1jb21wb25lbnQvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSWZVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwIGltcGxlbWVudHMgR3d0U3RlcDxVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiB7IHJvbGU6IFwiXCIgfTtcclxuXHRzdGVwQ29tcG9uZW50ID0gR2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudDtcclxuXHRzdG9yZTogU3RvcmU8YW55PjtcclxuXHR1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmlkID0gXCJpZl91c2VyX2lzX2F1dGhlbnRpY2F0ZWRcIjtcclxuXHRcdHRoaXMubmFtZSA9IFwiaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLZh9mG2q/Yp9mF24wg2qnZhyDaqdin2LHYqNixINin2K3Ysdin2LIg2YfZiNuM2Kog2qnYsdiv2Ycg2KfYs9iqXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuR2l2ZW47XHJcblx0XHR0aGlzLnN0b3JlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFVzZXJGYWNhZGVTZXJ2aWNlKTtcclxuXHR9XHJcblx0aW50ZXJwZXJhdG9yKHBhcmFtczogVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdFx0cmV0dXJuIHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKS5waXBlKFxyXG5cdFx0XHRtYXAodXNlckRpc3BhbHlOYW1lID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gISF1c2VyRGlzcGFseU5hbWU7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=
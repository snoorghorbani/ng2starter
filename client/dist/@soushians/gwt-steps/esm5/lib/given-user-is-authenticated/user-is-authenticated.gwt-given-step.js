/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.userFacadeService.getDisplayName().pipe(map((/**
         * @param {?} userDispalyName
         * @return {?}
         */
        function (userDispalyName) {
            debugger;
            return !!userDispalyName;
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFrQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUVwSDtJQVVDLDJDQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSHJDLGtCQUFhLEdBQUcscUNBQXFDLENBQUM7UUFJckQsUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRywwQkFBMEIsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcscUNBQXFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBQ0Qsd0RBQVk7Ozs7O0lBQVosVUFBYSxNQUE2QyxFQUFFLFVBQXNCO1FBQ2pGLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbEQsR0FBRzs7OztRQUFDLFVBQUEsZUFBZTtZQUNsQixRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNILENBQUM7SUFDRix3Q0FBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7Ozs7SUExQkEsK0NBQVc7O0lBQ1gsaURBQWE7O0lBQ2IscURBQWtCOztJQUNsQix3REFBb0I7O0lBQ3BCLGlEQUFtQjs7SUFDbkIsbURBQXFCOztJQUNyQiwwREFBc0Q7O0lBQ3RELGtEQUFrQjs7SUFDbEIsOERBQXFDOztJQUN6QixxREFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCwgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcyB9IGZyb20gXCIuL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC1wYXJhbXNcIjtcclxuaW1wb3J0IHsgR2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElmVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcCBpbXBsZW1lbnRzIEd3dFN0ZXA8VXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9wcG9zaXRlOiBib29sZWFuO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dHlwZTogR3d0U3RlcFR5cGVzO1xyXG5cdHBhcmFtczogeyByb2xlOiBcIlwiIH07XHJcblx0c3RlcENvbXBvbmVudCA9IEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnQ7XHJcblx0c3RvcmU6IFN0b3JlPGFueT47XHJcblx0dXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5pZCA9IFwiaWZfdXNlcl9pc19hdXRoZW50aWNhdGVkXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBcImlmIHVzZXIgaXMgYXV0aGVudGljYXRlZFwiO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IFwi2YfZhtqv2KfZhduMINqp2Ycg2qnYp9ix2KjYsSDYp9it2LHYp9iyINmH2YjbjNiqINqp2LHYr9mHINin2LPYqlwiO1xyXG5cdFx0dGhpcy50eXBlID0gR3d0U3RlcFR5cGVzLkdpdmVuO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHRcdHRoaXMudXNlckZhY2FkZVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChVc2VyRmFjYWRlU2VydmljZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHJldHVybiB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkucGlwZShcclxuXHRcdFx0bWFwKHVzZXJEaXNwYWx5TmFtZSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuICEhdXNlckRpc3BhbHlOYW1lO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
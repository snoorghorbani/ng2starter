/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import { getAccountInfo } from "@soushians/user";
import { GwtStepTypes } from "@soushians/rule";
import { IfUserHaveRoleGwtGivenStepComponent } from "./step-component/operation-gwt-step.component";
/**
 * @record
 */
export function IfUserHaveRoleGwtGivenStepParams() { }
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStepParams.prototype.role;
}
export class IfUserHaveRoleGwtGivenStep {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.stepComponent = IfUserHaveRoleGwtGivenStepComponent;
        this.id = "if_user_have_role_given_step";
        this.name = "if user have role given step";
        this.description = "هنگامی که کاربر نقش .. را ندارد";
        this.type = GwtStepTypes.Given;
        this.store = this.injector.get(Store);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    interperator(params, elementRef) {
        /** @type {?} */
        const user$ = this.store
            .select(getAccountInfo)
            .pipe(filter(user => !!user.Roles), filter(user => user.Roles.length > 0));
        return user$.pipe(map(user => {
            debugger;
            return !((/** @type {?} */ (user))).Roles.map(item => item.toLowerCase()).includes(params.role.toLowerCase());
        }));
    }
}
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.id;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.name;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.opposite;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.description;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.type;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.params;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.stepComponent;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.store;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1oYXZlLXJvbGUuZ3d0LWdpdmVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi9pZi11c2VyLWhhdmUtcm9sZS91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFnQixNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFXLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBRXBHLHNEQUVDOzs7SUFEQSxnREFBYTs7QUFHZCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBU3RDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGckMsa0JBQWEsR0FBRyxtQ0FBbUMsQ0FBQztRQUduRCxJQUFJLENBQUMsRUFBRSxHQUFHLDhCQUE4QixDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQ0FBaUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFDRCxZQUFZLENBQUMsTUFBd0MsRUFBRSxVQUFzQjs7Y0FDdEUsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUM7YUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ2pHLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDSCxDQUFDO0NBQ0Q7OztJQTFCQSx3Q0FBVzs7SUFDWCwwQ0FBYTs7SUFDYiw4Q0FBa0I7O0lBQ2xCLGlEQUFvQjs7SUFDcEIsMENBQW1COztJQUNuQiw0Q0FBcUI7O0lBQ3JCLG1EQUFvRDs7SUFDcEQsMkNBQWtCOztJQUNOLDhDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwLCBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5pbXBvcnQgeyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3N0ZXAtY29tcG9uZW50L29wZXJhdGlvbi1nd3Qtc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXMge1xyXG5cdHJvbGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwIGltcGxlbWVudHMgR3d0U3RlcDxJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9wcG9zaXRlOiBib29sZWFuO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dHlwZTogR3d0U3RlcFR5cGVzO1xyXG5cdHBhcmFtczogeyByb2xlOiBcIlwiIH07XHJcblx0c3RlcENvbXBvbmVudCA9IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50O1xyXG5cdHN0b3JlOiBTdG9yZTxhbnk+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuaWQgPSBcImlmX3VzZXJfaGF2ZV9yb2xlX2dpdmVuX3N0ZXBcIjtcclxuXHRcdHRoaXMubmFtZSA9IFwiaWYgdXNlciBoYXZlIHJvbGUgZ2l2ZW4gc3RlcFwiO1xyXG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IFwi2YfZhtqv2KfZhduMINqp2Ycg2qnYp9ix2KjYsSDZhtmC2LQgLi4g2LHYpyDZhtiv2KfYsdivXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuR2l2ZW47XHJcblx0XHR0aGlzLnN0b3JlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cdH1cclxuXHRpbnRlcnBlcmF0b3IocGFyYW1zOiBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdFx0Y29uc3QgdXNlciQgPSB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QWNjb3VudEluZm8pXHJcblx0XHRcdC5waXBlKGZpbHRlcih1c2VyID0+ICEhdXNlci5Sb2xlcyksIGZpbHRlcih1c2VyID0+IHVzZXIuUm9sZXMubGVuZ3RoID4gMCkpO1xyXG5cdFx0cmV0dXJuIHVzZXIkLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gISh1c2VyIGFzIGFueSkuUm9sZXMubWFwKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyhwYXJhbXMucm9sZS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function IfUserHaveRoleGwtGivenStepParams_tsickle_Closure_declarations() {
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
        const /** @type {?} */ user$ = this.store
            .select(getAccountInfo)
            .pipe(filter(user => !!user.Roles), filter(user => user.Roles.length > 0));
        return user$.pipe(map(user => {
            debugger;
            return !(/** @type {?} */ (user)).Roles.map(item => item.toLowerCase()).includes(params.role.toLowerCase());
        }));
    }
}
function IfUserHaveRoleGwtGivenStep_tsickle_Closure_declarations() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1oYXZlLXJvbGUuZ3d0LWdpdmVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi9pZi11c2VyLWhhdmUtcm9sZS91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFnQixNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFXLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7Ozs7QUFNcEcsTUFBTTs7OztJQVNMLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7NkJBRnJCLG1DQUFtQztRQUdsRCxJQUFJLENBQUMsRUFBRSxHQUFHLDhCQUE4QixDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQ0FBaUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7Ozs7O0lBQ0QsWUFBWSxDQUFDLE1BQXdDLEVBQUUsVUFBc0I7UUFDNUUsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUM7YUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsUUFBUSxDQUFDO1lBQ1QsTUFBTSxDQUFDLENBQUMsbUJBQUMsSUFBVyxFQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDaEcsQ0FBQyxDQUNGLENBQUM7S0FDRjtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAsIEd3dFN0ZXBUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RlcC1jb21wb25lbnQvb3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB7XHJcblx0cm9sZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiB7IHJvbGU6IFwiXCIgfTtcclxuXHRzdGVwQ29tcG9uZW50ID0gSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQ7XHJcblx0c3RvcmU6IFN0b3JlPGFueT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5pZCA9IFwiaWZfdXNlcl9oYXZlX3JvbGVfZ2l2ZW5fc3RlcFwiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJpZiB1c2VyIGhhdmUgcm9sZSBnaXZlbiBzdGVwXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLZh9mG2q/Yp9mF24wg2qnZhyDaqdin2LHYqNixINmG2YLYtCAuLiDYsdinINmG2K/Yp9ix2K9cIjtcclxuXHRcdHRoaXMudHlwZSA9IEd3dFN0ZXBUeXBlcy5HaXZlbjtcclxuXHRcdHRoaXMuc3RvcmUgPSB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0XHRjb25zdCB1c2VyJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBY2NvdW50SW5mbylcclxuXHRcdFx0LnBpcGUoZmlsdGVyKHVzZXIgPT4gISF1c2VyLlJvbGVzKSwgZmlsdGVyKHVzZXIgPT4gdXNlci5Sb2xlcy5sZW5ndGggPiAwKSk7XHJcblx0XHRyZXR1cm4gdXNlciQucGlwZShcclxuXHRcdFx0bWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiAhKHVzZXIgYXMgYW55KS5Sb2xlcy5tYXAoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHBhcmFtcy5yb2xlLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19
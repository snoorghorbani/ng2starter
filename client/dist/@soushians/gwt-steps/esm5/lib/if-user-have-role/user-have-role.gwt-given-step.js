/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
/** @type {?} */
IfUserHaveRoleGwtGivenStepParams.prototype.role;
var IfUserHaveRoleGwtGivenStep = /** @class */ (function () {
    function IfUserHaveRoleGwtGivenStep(injector) {
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
    IfUserHaveRoleGwtGivenStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        /** @type {?} */
        var user$ = this.store
            .select(getAccountInfo)
            .pipe(filter(function (user) { return !!user.Roles; }), filter(function (user) { return user.Roles.length > 0; }));
        return user$.pipe(map(function (user) {
            debugger;
            return !(/** @type {?} */ (user)).Roles.map(function (item) { return item.toLowerCase(); }).includes(params.role.toLowerCase());
        }));
    };
    return IfUserHaveRoleGwtGivenStep;
}());
export { IfUserHaveRoleGwtGivenStep };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1oYXZlLXJvbGUuZ3d0LWdpdmVuLXN0ZXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy8iLCJzb3VyY2VzIjpbImxpYi9pZi11c2VyLWhhdmUtcm9sZS91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFnQixNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUFXLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXhELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7O0FBTXBHLElBQUE7SUFTQyxvQ0FBbUIsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUZyQyxxQkFBZ0IsbUNBQW1DLENBQUM7UUFHbkQsSUFBSSxDQUFDLEVBQUUsR0FBRyw4QkFBOEIsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsaUNBQWlDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7OztJQUNELGlEQUFZOzs7OztJQUFaLFVBQWEsTUFBd0MsRUFBRSxVQUFzQjs7UUFDNUUsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQVosQ0FBWSxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2hCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxRQUFRLENBQUM7WUFDVCxPQUFPLENBQUMsbUJBQUMsSUFBVyxFQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDaEcsQ0FBQyxDQUNGLENBQUM7S0FDRjtxQ0F4Q0Y7SUF5Q0MsQ0FBQTtBQTNCRCxzQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCwgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9vcGVyYXRpb24tZ3d0LXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zIHtcclxuXHRyb2xlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcCBpbXBsZW1lbnRzIEd3dFN0ZXA8SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvcHBvc2l0ZTogYm9vbGVhbjtcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHR5cGU6IEd3dFN0ZXBUeXBlcztcclxuXHRwYXJhbXM6IHsgcm9sZTogXCJcIiB9O1xyXG5cdHN0ZXBDb21wb25lbnQgPSBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcENvbXBvbmVudDtcclxuXHRzdG9yZTogU3RvcmU8YW55PjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmlkID0gXCJpZl91c2VyX2hhdmVfcm9sZV9naXZlbl9zdGVwXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBcImlmIHVzZXIgaGF2ZSByb2xlIGdpdmVuIHN0ZXBcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcItmH2Ybar9in2YXbjCDaqdmHINqp2KfYsdio2LEg2YbZgti0IC4uINix2Kcg2YbYr9in2LHYr1wiO1xyXG5cdFx0dGhpcy50eXBlID0gR3d0U3RlcFR5cGVzLkdpdmVuO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHR9XHJcblx0aW50ZXJwZXJhdG9yKHBhcmFtczogSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHRcdGNvbnN0IHVzZXIkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIodXNlciA9PiAhIXVzZXIuUm9sZXMpLCBmaWx0ZXIodXNlciA9PiB1c2VyLlJvbGVzLmxlbmd0aCA+IDApKTtcclxuXHRcdHJldHVybiB1c2VyJC5waXBlKFxyXG5cdFx0XHRtYXAodXNlciA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuICEodXNlciBhcyBhbnkpLlJvbGVzLm1hcChpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXMocGFyYW1zLnJvbGUudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=
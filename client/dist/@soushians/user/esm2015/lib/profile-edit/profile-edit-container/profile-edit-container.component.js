/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { getAppConfig } from "@soushians/config";
import * as FeatureReducer from "../../user.reducers";
import { EditProfile } from "../edit-profile.actions";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { map, filter } from "rxjs/operators";
export class ProfileEditContainerComponent {
    /**
     * @param {?} store
     * @param {?} configService
     */
    constructor(store, configService) {
        this.store = store;
        this.configService = configService;
        this.userInforamation$ = this.store.select(FeatureReducer.getAccountInfo);
        this.roles$ = this.store
            .select(getAppConfig)
            .pipe(filter(config => config != undefined), map(config => config.Config.Roles));
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfile(data) {
        this.store.dispatch(new EditProfile(data));
    }
}
ProfileEditContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit-contianer",
                template: `<profile-edit
                (submited)='updateProfile($event)'
                [userInfo]="userInforamation$ | async"
                [roles]="roles$"
				[groups]="groups | async"
				[formId]="(config$|async)?.forms.profile_edit"
              ></profile-edit>`
            },] },
];
/** @nocollapse */
ProfileEditContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];
if (false) {
    /** @type {?} */
    ProfileEditContainerComponent.prototype.userInforamation$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.groups;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.config$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.store;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.configService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxPQUFPLEtBQUssY0FBYyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVyRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTdDLE1BQU07Ozs7O0lBTUwsWUFBb0IsS0FBcUMsRUFBVSxhQUF1QztRQUF0RixVQUFLLEdBQUwsS0FBSyxDQUFnQztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUN6RyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O1FBR2xGLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztLQUMxQzs7OztJQUVELFFBQVEsTUFBSzs7Ozs7SUFFYixhQUFhLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzNDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7OytCQU1vQjthQUM5Qjs7OztZQXJCUSxLQUFLO1lBUUwsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlIH0gZnJvbSBcIi4uL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXQtY29udGlhbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8cHJvZmlsZS1lZGl0XHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSd1cGRhdGVQcm9maWxlKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbdXNlckluZm9dPVwidXNlckluZm9yYW1hdGlvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbcm9sZXNdPVwicm9sZXMkXCJcclxuXHRcdFx0XHRbZ3JvdXBzXT1cImdyb3VwcyB8IGFzeW5jXCJcclxuXHRcdFx0XHRbZm9ybUlkXT1cIihjb25maWckfGFzeW5jKT8uZm9ybXMucHJvZmlsZV9lZGl0XCJcclxuICAgICAgICAgICAgICA+PC9wcm9maWxlLWVkaXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXJJbmZvcmFtYXRpb24kOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0cm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8VXNlck1vZHVsZUNvbmZpZz47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnJvbGVzJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZCksIG1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcykpO1xyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gb2YoWyBcInRlc3QxXCIsIFwidGVzdDJcIiBdKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlUHJvZmlsZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0UHJvZmlsZShkYXRhKSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
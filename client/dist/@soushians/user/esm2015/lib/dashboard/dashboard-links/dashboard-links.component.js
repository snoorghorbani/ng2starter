/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
export class DashboardLinksComponent {
    /**
     * @param {?} userConfigurationService
     * @param {?} store
     */
    constructor(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.pipe(map(data => data.dashboardLinks));
        this.links = [
            {
                title: "مشاهده حساب کاربری",
                route: "/user/panel/profile",
                // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                icon: "person"
            }
        ];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
DashboardLinksComponent.decorators = [
    { type: Component, args: [{
                selector: "user-dashboard-links",
                template: `<div fxLayout='row' fxLayoutWrap id="con">
    <button fxFlex="31" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>
        <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>{{link.icon}}</mat-icon>
            <h3 class='title'>{{link.title}}</h3>
            <div class='description'>{{link.description}}</div>
        </div>
    </button>
    <button fxFlex="31" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>
        <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>{{link.icon}}</mat-icon>
            <h3 class='title'>{{link.title}}</h3>
            <div class='description'>{{link.description}}</div>
        </div>
    </button>
</div>`,
                styles: [`#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}`]
            },] },
];
/** @nocollapse */
DashboardLinksComponent.ctorParameters = () => [
    { type: UserConfigurationService },
    { type: Store }
];
if (false) {
    /** @type {?} */
    DashboardLinksComponent.prototype.links;
    /** @type {?} */
    DashboardLinksComponent.prototype.links$;
    /** @type {?} */
    DashboardLinksComponent.prototype.userConfigurationService;
    /** @type {?} */
    DashboardLinksComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBR3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBc0JyQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUduQyxZQUFvQix3QkFBa0QsRUFBVSxLQUFpQjtRQUE3RSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNoRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWjtnQkFDQyxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixLQUFLLEVBQUUscUJBQXFCOztnQkFFNUIsSUFBSSxFQUFFLFFBQVE7YUFDZDtTQVFELENBQUM7S0FDRjs7OztJQUVELGVBQWUsTUFBSzs7O1lBMUNwQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7T0FlSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxxU0FBcVMsQ0FBQzthQUMvUzs7OztZQXZCUSx3QkFBd0I7WUFDeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWRhc2hib2FyZC1saW5rc1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dFdyYXAgaWQ9XCJjb25cIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyQgfCBhc3luYyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY29uIFtmeGZsZXhde21hcmdpbi1yaWdodDoyNXB4fTpob3N0e3dpZHRoOjEwMCU7cGFkZGluZzoyNXB4IDI1cHggMH1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjQ4cHg7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1idXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW4tYm90dG9tOjI1cHh9LnRpdGxle21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjVweH0uZGVzY3JpcHRpb257b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjkwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRsaW5rczogYW55W107XHJcblx0bGlua3MkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLmxpbmtzJCA9IHRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoZGF0YSA9PiBkYXRhLmRhc2hib2FyZExpbmtzKSk7XHJcblx0XHR0aGlzLmxpbmtzID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwi2YXYtNin2YfYr9mHINit2LPYp9ioINqp2KfYsdio2LHbjFwiLFxyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Byb2ZpbGVcIixcclxuXHRcdFx0XHQvLyBkZXNjcmlwdGlvbjogXCLZhNmI2LHZhSDYp9uM2b7Ys9mI2YUg2YXYqtmGINiz2KfYrtiq2q/bjCDYqNinINiq2YjZhNuM2K8g2LPYp9iv2q/bjCDZhtin2YXZgdmH2YjZhVwiLFxyXG5cdFx0XHRcdGljb246IFwicGVyc29uXCJcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAsXHJcblx0XHRcdC8vIHtcclxuXHRcdFx0Ly8gXHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0Ly8gXHR0aXRsZTogXCLYqti624zbjNixINqp2YTZhdmHINi52KjZiNixXCIsXHJcblx0XHRcdC8vIFx0Ly8gZGVzY3JpcHRpb246IFwi2YTZiNix2YUg2KfbjNm+2LPZiNmFINmF2KrZhiDYs9in2K7Yqtqv24wg2KjYpyDYqtmI2YTbjNivINiz2KfYr9qv24wg2YbYp9mF2YHZh9mI2YVcIixcclxuXHRcdFx0Ly8gXHRpY29uOiBcInNlY3VyaXR5XCJcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIl19
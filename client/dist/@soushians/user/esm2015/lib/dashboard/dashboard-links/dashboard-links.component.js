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
                template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n</div>",
                styles: ["#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
            }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBR3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBR25DLFlBQW9CLHdCQUFrRCxFQUFVLEtBQWlCO1FBQTdFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaO2dCQUNDLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLEtBQUssRUFBRSxxQkFBcUI7O2dCQUU1QixJQUFJLEVBQUUsUUFBUTthQUNkO1NBUUQsQ0FBQztLQUNGOzs7O0lBRUQsZUFBZSxNQUFLOzs7WUEzQnBCLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywyMkJBQStDOzthQUUvQzs7OztZQVJRLHdCQUF3QjtZQUN4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWxpbmtzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0bGlua3M6IGFueVtdO1xyXG5cdGxpbmtzJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQ29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5saW5rcyQgPSB0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5kYXNoYm9hcmRMaW5rcykpO1xyXG5cdFx0dGhpcy5saW5rcyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcItmF2LTYp9mH2K/ZhyDYrdiz2KfYqCDaqdin2LHYqNix24xcIixcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wcm9maWxlXCIsXHJcblx0XHRcdFx0Ly8gZGVzY3JpcHRpb246IFwi2YTZiNix2YUg2KfbjNm+2LPZiNmFINmF2KrZhiDYs9in2K7Yqtqv24wg2KjYpyDYqtmI2YTbjNivINiz2KfYr9qv24wg2YbYp9mF2YHZh9mI2YVcIixcclxuXHRcdFx0XHRpY29uOiBcInBlcnNvblwiXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gLFxyXG5cdFx0XHQvLyB7XHJcblx0XHRcdC8vIFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcGFzc3dvcmQvY2hhbmdlXCIsXHJcblx0XHRcdC8vIFx0dGl0bGU6IFwi2KrYutuM24zYsSDaqdmE2YXZhyDYudio2YjYsVwiLFxyXG5cdFx0XHQvLyBcdC8vIGRlc2NyaXB0aW9uOiBcItmE2YjYsdmFINin24zZvtiz2YjZhSDZhdiq2YYg2LPYp9iu2Krar9uMINio2Kcg2KrZiNmE24zYryDYs9in2K/ar9uMINmG2KfZhdmB2YfZiNmFXCIsXHJcblx0XHRcdC8vIFx0aWNvbjogXCJzZWN1cml0eVwiXHJcblx0XHRcdC8vIH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiJdfQ==
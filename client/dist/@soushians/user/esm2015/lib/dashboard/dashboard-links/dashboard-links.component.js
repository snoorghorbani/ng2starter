/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            // ,
            // {
            // 	route: "/user/panel/password/change",
            // 	title: "تغییر کلمه عبور",
            // 	// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
            // 	icon: "security"
            // }
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
    /**
     * @type {?}
     * @private
     */
    DashboardLinksComponent.prototype.userConfigurationService;
    /**
     * @type {?}
     * @private
     */
    DashboardLinksComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBR3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBR25DLFlBQW9CLHdCQUFrRCxFQUFVLEtBQWlCO1FBQTdFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaO2dCQUNDLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLEtBQUssRUFBRSxxQkFBcUI7O2dCQUU1QixJQUFJLEVBQUUsUUFBUTthQUNkO1lBQ0QsSUFBSTtZQUNKLElBQUk7WUFDSix5Q0FBeUM7WUFDekMsNkJBQTZCO1lBQzdCLG9FQUFvRTtZQUNwRSxvQkFBb0I7WUFDcEIsSUFBSTtTQUNKLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZSxLQUFJLENBQUM7OztZQTNCcEIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDIyQkFBK0M7O2FBRS9DOzs7O1lBUlEsd0JBQXdCO1lBQ3hCLEtBQUs7Ozs7SUFTYix3Q0FBYTs7SUFDYix5Q0FBMEI7Ozs7O0lBQ2QsMkRBQTBEOzs7OztJQUFFLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWRhc2hib2FyZC1saW5rc1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdGxpbmtzOiBhbnlbXTtcclxuXHRsaW5rcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMubGlua3MkID0gdGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChkYXRhID0+IGRhdGEuZGFzaGJvYXJkTGlua3MpKTtcclxuXHRcdHRoaXMubGlua3MgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCLZhdi02KfZh9iv2Ycg2K3Ys9in2Kgg2qnYp9ix2KjYsduMXCIsXHJcblx0XHRcdFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcHJvZmlsZVwiLFxyXG5cdFx0XHRcdC8vIGRlc2NyaXB0aW9uOiBcItmE2YjYsdmFINin24zZvtiz2YjZhSDZhdiq2YYg2LPYp9iu2Krar9uMINio2Kcg2KrZiNmE24zYryDYs9in2K/ar9uMINmG2KfZhdmB2YfZiNmFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJwZXJzb25cIlxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICxcclxuXHRcdFx0Ly8ge1xyXG5cdFx0XHQvLyBcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHQvLyBcdHRpdGxlOiBcItiq2LrbjNuM2LEg2qnZhNmF2Ycg2LnYqNmI2LFcIixcclxuXHRcdFx0Ly8gXHQvLyBkZXNjcmlwdGlvbjogXCLZhNmI2LHZhSDYp9uM2b7Ys9mI2YUg2YXYqtmGINiz2KfYrtiq2q/bjCDYqNinINiq2YjZhNuM2K8g2LPYp9iv2q/bjCDZhtin2YXZgdmH2YjZhVwiLFxyXG5cdFx0XHQvLyBcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHQvLyB9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iXX0=
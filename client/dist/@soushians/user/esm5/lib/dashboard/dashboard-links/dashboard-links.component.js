/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { UserConfigurationService } from "../../services/user-configuration.service";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.pipe(map(function (data) { return data.dashboardLinks; }));
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
    DashboardLinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DashboardLinksComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-dashboard-links",
                    template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n</div>",
                    styles: ["#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                }] }
    ];
    /** @nocollapse */
    DashboardLinksComponent.ctorParameters = function () { return [
        { type: UserConfigurationService },
        { type: Store }
    ]; };
    return DashboardLinksComponent;
}());
export { DashboardLinksComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBR3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDO0lBUUMsaUNBQW9CLHdCQUFrRCxFQUFVLEtBQWlCO1FBQTdFLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaO2dCQUNDLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLEtBQUssRUFBRSxxQkFBcUI7O2dCQUU1QixJQUFJLEVBQUUsUUFBUTthQUNkO1lBQ0QsSUFBSTtZQUNKLElBQUk7WUFDSix5Q0FBeUM7WUFDekMsNkJBQTZCO1lBQzdCLG9FQUFvRTtZQUNwRSxvQkFBb0I7WUFDcEIsSUFBSTtTQUNKLENBQUM7SUFDSCxDQUFDOzs7O0lBRUQsaURBQWU7OztJQUFmLGNBQW1CLENBQUM7O2dCQTNCcEIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDIyQkFBK0M7O2lCQUUvQzs7OztnQkFSUSx3QkFBd0I7Z0JBQ3hCLEtBQUs7O0lBK0JkLDhCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F2QlksdUJBQXVCOzs7SUFDbkMsd0NBQWE7O0lBQ2IseUNBQTBCOzs7OztJQUNkLDJEQUEwRDs7Ozs7SUFBRSx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtbGlua3NcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRsaW5rczogYW55W107XHJcblx0bGlua3MkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLmxpbmtzJCA9IHRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoZGF0YSA9PiBkYXRhLmRhc2hib2FyZExpbmtzKSk7XHJcblx0XHR0aGlzLmxpbmtzID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwi2YXYtNin2YfYr9mHINit2LPYp9ioINqp2KfYsdio2LHbjFwiLFxyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Byb2ZpbGVcIixcclxuXHRcdFx0XHQvLyBkZXNjcmlwdGlvbjogXCLZhNmI2LHZhSDYp9uM2b7Ys9mI2YUg2YXYqtmGINiz2KfYrtiq2q/bjCDYqNinINiq2YjZhNuM2K8g2LPYp9iv2q/bjCDZhtin2YXZgdmH2YjZhVwiLFxyXG5cdFx0XHRcdGljb246IFwicGVyc29uXCJcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAsXHJcblx0XHRcdC8vIHtcclxuXHRcdFx0Ly8gXHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0Ly8gXHR0aXRsZTogXCLYqti624zbjNixINqp2YTZhdmHINi52KjZiNixXCIsXHJcblx0XHRcdC8vIFx0Ly8gZGVzY3JpcHRpb246IFwi2YTZiNix2YUg2KfbjNm+2LPZiNmFINmF2KrZhiDYs9in2K7Yqtqv24wg2KjYpyDYqtmI2YTbjNivINiz2KfYr9qv24wg2YbYp9mF2YHZh9mI2YVcIixcclxuXHRcdFx0Ly8gXHRpY29uOiBcInNlY3VyaXR5XCJcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, HostBinding } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { trigger, state, transition, animate, style } from "@angular/animations";
import { ConfigModel } from "@soushians/config";
import { UserFacadeService } from "@soushians/user";
import { getShowMainSidenav, getMainSideNavMode, getShowSecondSidebarStatus, getSecondSidebarMode, getLayoutMode, getLayoutToolbarMode, getFullscreenMode } from "../../reducers/index";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { ChangeSideNavMode, ChangeSecondSidenavMode, CloseSecondSidenavAction, CloseSidenavAction } from "../../actions/layout";
var NgsLayoutMainComponent = /** @class */ (function () {
    function NgsLayoutMainComponent(store, router, configService, translateService, userFacadeService) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.translateService = translateService;
        this.userFacadeService = userFacadeService;
        this.showSidebarMenu = new BehaviorSubject(true);
        this.width = 100;
        this._set_i18n_resource();
        this.configService.config$.subscribe(function (config) {
            _this.theme = config.theme;
            _this.theme_A = config.theme == "theme_A";
            _this.theme_B = config.theme == "theme_B";
        });
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select(function (s) { return ((/** @type {?} */ (s))).user.user.data; });
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav);
        this.mainSidenavMode = this.store.select(getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode);
        this.mode$ = this.isFullscreen$.map(function (mode) { return (mode ? "invisible" : "visible"); });
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode);
        this.router.events.filter(function (data) { return data instanceof NavigationEnd; }).subscribe(function (event) {
            /** @type {?} */
            var hideSituations = [
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signin",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/register",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/verification",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(function (i) { return i; }))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        });
    }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    NgsLayoutMainComponent.prototype.onSecondSidebarClosedStart = 
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSecondSidenavAction());
    };
    /**
     * @return {?}
     */
    NgsLayoutMainComponent.prototype.onSidebarClosedStart = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSidenavAction());
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    NgsLayoutMainComponent.prototype._set_i18n_resource = /**
     * private methods
     * @return {?}
     */
    function () {
        this.translateService.setTranslation("en", {
            __signin: "Signin",
            __signup: "Signup",
            __account_mangement: "Account",
            __signout: "Signout"
        });
        this.translateService.setTranslation("fa", {
            __signin: "ورود",
            __signup: "ثبت نام",
            __account_mangement: "مدریت کاربری",
            __signout: "خروج"
        });
    };
    NgsLayoutMainComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-main",
                    template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\r\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\r\n  <layout-toolbar  *ngIf=\"theme == 'theme_A'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\r\n  <layout-toolbar-b *ngIf=\"theme == 'theme_B'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar-b>\r\n  \r\n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\r\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\r\n      <mat-nav-list>\r\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\r\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\r\n      <mat-nav-list fxLayout='column'>\r\n      </mat-nav-list>\r\n    </mat-sidenav> -->\r\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\r\n      <div fxFlex='0 0 100'>\r\n        <router-outlet></router-outlet>\r\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\r\n          <router-outlet name=\"footer_A\"></router-outlet>\r\n          <router-outlet name=\"footer_B\"></router-outlet>\r\n          <app-footer [app-config]=\"app_config\"></app-footer>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>",
                    animations: [
                        trigger("mode", [
                            state("visible", style({ transform: "scaleY(1) translateY(0)" })),
                            state("invisible", style({ height: "0", transform: "scaleY(0) translateY(100%)" })),
                            transition("visible => invisible", [animate("1000ms")]),
                            transition("invisible => visible", [animate("1000ms")])
                        ])
                    ],
                    styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:.3s}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"]
                }] }
    ];
    /** @nocollapse */
    NgsLayoutMainComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router },
        { type: LayoutConfigurationService },
        { type: TranslateService },
        { type: UserFacadeService }
    ]; };
    NgsLayoutMainComponent.propDecorators = {
        app_config: [{ type: Input, args: ["app-config",] }],
        mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }],
        theme_A: [{ type: HostBinding, args: ["class.theme_A",] }],
        theme_B: [{ type: HostBinding, args: ["class.theme_B",] }]
    };
    return NgsLayoutMainComponent;
}());
export { NgsLayoutMainComponent };
if (false) {
    /** @type {?} */
    NgsLayoutMainComponent.prototype.app_config;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mode$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.user$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.displayName$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.isFullscreen$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.progressStatus$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showSidebarMenu;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showMainSidenav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mainSidenavMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.layoutMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.width;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showSecondSidenav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.secondSidenavMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mainSideNav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme_A;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme_B;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.userFacadeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRCxPQUFPLEVBRU4sa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCO0lBaUNDLGdDQUNTLEtBQTBCLEVBQzFCLE1BQWMsRUFDZCxhQUF5QyxFQUN6Qyxn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QUErQzs7Ozs7SUFFOUMsdUNBQWtDOzs7OztJQUNsQyx3Q0FBc0I7Ozs7O0lBQ3RCLCtDQUFpRDs7Ozs7SUFDakQsa0RBQTBDOzs7OztJQUMxQyxtREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtbWFpblwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vbWFpbi5jb21wb25lbnQuc2Nzc1wiIF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW52aXNpYmxlID0+IHZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1haW5Db21wb25lbnQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRtb2RlJDogT2JzZXJ2YWJsZTxcInZpc2libGVcIiB8IFwiaW52aXNpYmxlXCI+O1xyXG5cdHRoZW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0FcIikgdGhlbWVfQTogYm9vbGVhbjtcclxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy50aGVtZV9CXCIpIHRoZW1lX0I6IGJvb2xlYW47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5fc2V0X2kxOG5fcmVzb3VyY2UoKTtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHR0aGlzLnRoZW1lID0gY29uZmlnLnRoZW1lO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0EgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9BXCI7XHJcblx0XHRcdHRoaXMudGhlbWVfQiA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0JcIjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2lkZU5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcChtb2RlID0+IChtb2RlID8gXCJpbnZpc2libGVcIiA6IFwidmlzaWJsZVwiKSk7XHJcblxyXG5cdFx0Ly8jcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNlY29uZFNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5cdFx0Ly8jZW5kcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cclxuXHRcdHRoaXMubGF5b3V0TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dE1vZGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5maWx0ZXIoZGF0YSA9PiBkYXRhIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0Y29uc3QgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoaSA9PiBpKSkgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dChmYWxzZSk7XHJcblx0XHRcdGVsc2UgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dCh0cnVlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gbmdBZnRlclZpZXdJbml0KCkge1xyXG5cdC8vIFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlTGF5b3V0KFwid2l0aC1tYXJnaW5cIikpO1xyXG5cdC8vIH1cclxuXHJcblx0b25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHRvblNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9zZXRfaTE4bl9yZXNvdXJjZSgpIHtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImVuXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwiU2lnbmluXCIsXHJcblx0XHRcdF9fc2lnbnVwOiBcIlNpZ251cFwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcIkFjY291bnRcIixcclxuXHRcdFx0X19zaWdub3V0OiBcIlNpZ25vdXRcIlxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0VHJhbnNsYXRpb24oXCJmYVwiLCB7XHJcblx0XHRcdF9fc2lnbmluOiBcItmI2LHZiNivXCIsXHJcblx0XHRcdF9fc2lnbnVwOiBcItir2KjYqiDZhtin2YVcIixcclxuXHRcdFx0X19hY2NvdW50X21hbmdlbWVudDogXCLZhdiv2LHbjNiqINqp2KfYsdio2LHbjFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwi2K7YsdmI2KxcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
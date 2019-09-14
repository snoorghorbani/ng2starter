/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.configService.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.theme = config.theme;
            _this.theme_A = config.theme == "theme_A";
            _this.theme_B = config.theme == "theme_B";
        }));
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return ((/** @type {?} */ (s))).user.user.data; }));
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav);
        this.mainSidenavMode = this.store.select(getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode);
        this.mode$ = this.isFullscreen$.map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (mode ? "invisible" : "visible"); }));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode);
        this.router.events.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data instanceof NavigationEnd; })).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var hideSituations = [
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signin",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/register",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/verification",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i; })))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        }));
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
            __account_mangement: "مدیریت کاربری",
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
        mainSideNav: [{ type: ViewChild, args: ["mainSideNav", { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRCxPQUFPLEVBRU4sa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCO0lBaUNDLGdDQUNTLEtBQTBCLEVBQzFCLE1BQWMsRUFDZCxhQUF5QyxFQUN6Qyxn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Q3hELHVEQUEwQzs7SUFDMUMsNkNBQXFFOztJQUNyRSx5Q0FBK0M7O0lBQy9DLHlDQUErQzs7Ozs7SUFFOUMsdUNBQWtDOzs7OztJQUNsQyx3Q0FBc0I7Ozs7O0lBQ3RCLCtDQUFpRDs7Ozs7SUFDakQsa0RBQTBDOzs7OztJQUMxQyxtREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtbWFpblwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9tYWluLmNvbXBvbmVudC5zY3NzXCJdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJtb2RlXCIsIFtcclxuXHRcdFx0c3RhdGUoXCJ2aXNpYmxlXCIsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInNjYWxlWSgxKSB0cmFuc2xhdGVZKDApXCIgfSkpLFxyXG5cdFx0XHRzdGF0ZShcImludmlzaWJsZVwiLCBzdHlsZSh7IGhlaWdodDogXCIwXCIsIHRyYW5zZm9ybTogXCJzY2FsZVkoMCkgdHJhbnNsYXRlWSgxMDAlKVwiIH0pKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInZpc2libGUgPT4gaW52aXNpYmxlXCIsIFthbmltYXRlKFwiMTAwMG1zXCIpXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbYW5pbWF0ZShcIjEwMDBtc1wiKV0pXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1haW5Db21wb25lbnQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRtb2RlJDogT2JzZXJ2YWJsZTxcInZpc2libGVcIiB8IFwiaW52aXNpYmxlXCI+O1xyXG5cdHRoZW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIsIHsgc3RhdGljOiBmYWxzZSB9KSBtYWluU2lkZU5hdjogRWxlbWVudFJlZjtcclxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy50aGVtZV9BXCIpIHRoZW1lX0E6IGJvb2xlYW47XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQlwiKSB0aGVtZV9COiBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuX3NldF9pMThuX3Jlc291cmNlKCk7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0dGhpcy50aGVtZSA9IGNvbmZpZy50aGVtZTtcclxuXHRcdFx0dGhpcy50aGVtZV9BID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQVwiO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0IgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9CXCI7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiAocyBhcyBhbnkpLnVzZXIudXNlci5kYXRhKTtcclxuXHRcdHRoaXMuZGlzcGxheU5hbWUkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5tYWluU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cdFx0dGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyTW9kZSk7XHJcblxyXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cdFx0dGhpcy5tb2RlJCA9IHRoaXMuaXNGdWxsc2NyZWVuJC5tYXAobW9kZSA9PiAobW9kZSA/IFwiaW52aXNpYmxlXCIgOiBcInZpc2libGVcIikpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zZWNvbmRTaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuXHRcdC8vI2VuZHJlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHJcblx0XHR0aGlzLmxheW91dE1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRNb2RlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuZmlsdGVyKGRhdGEgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0IGhpZGVTaXR1YXRpb25zID0gW1xyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ25pblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC9yZWdpc3RlclwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC92ZXJpZmljYXRpb25cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvdXNlci9wYXNzd29yZC9yZXNldFwiXHJcblx0XHRcdF07XHJcblx0XHRcdGlmIChoaWRlU2l0dWF0aW9ucy5zb21lKGkgPT4gaSkpIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQoZmFsc2UpO1xyXG5cdFx0XHRlbHNlIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQvLyBcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUxheW91dChcIndpdGgtbWFyZ2luXCIpKTtcclxuXHQvLyB9XHJcblxyXG5cdG9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0b25TaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfc2V0X2kxOG5fcmVzb3VyY2UoKSB7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0VHJhbnNsYXRpb24oXCJlblwiLCB7XHJcblx0XHRcdF9fc2lnbmluOiBcIlNpZ25pblwiLFxyXG5cdFx0XHRfX3NpZ251cDogXCJTaWdudXBcIixcclxuXHRcdFx0X19hY2NvdW50X21hbmdlbWVudDogXCJBY2NvdW50XCIsXHJcblx0XHRcdF9fc2lnbm91dDogXCJTaWdub3V0XCJcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZmFcIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCLZiNix2YjYr1wiLFxyXG5cdFx0XHRfX3NpZ251cDogXCLYq9io2Kog2YbYp9mFXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwi2YXYr9uM2LHbjNiqINqp2KfYsdio2LHbjFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwi2K7YsdmI2KxcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
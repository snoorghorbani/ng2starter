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
export class NgsLayoutMainComponent {
    /**
     * @param {?} store
     * @param {?} router
     * @param {?} configService
     * @param {?} translateService
     * @param {?} userFacadeService
     */
    constructor(store, router, configService, translateService, userFacadeService) {
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
        config => {
            this.theme = config.theme;
            this.theme_A = config.theme == "theme_A";
            this.theme_B = config.theme == "theme_B";
        }));
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select((/**
         * @param {?} s
         * @return {?}
         */
        s => ((/** @type {?} */ (s))).user.user.data));
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav);
        this.mainSidenavMode = this.store.select(getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode);
        this.mode$ = this.isFullscreen$.map((/**
         * @param {?} mode
         * @return {?}
         */
        mode => (mode ? "invisible" : "visible")));
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
        data => data instanceof NavigationEnd)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            /** @type {?} */
            const hideSituations = [
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signin",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/register",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/verification",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some((/**
             * @param {?} i
             * @return {?}
             */
            i => i)))
                this.showSidebarMenu.next(false);
            else
                this.showSidebarMenu.next(true);
        }));
    }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    onSecondSidebarClosedStart() {
        this.store.dispatch(new CloseSecondSidenavAction());
    }
    /**
     * @return {?}
     */
    onSidebarClosedStart() {
        this.store.dispatch(new CloseSidenavAction());
    }
    /**
     * private methods
     * @return {?}
     */
    _set_i18n_resource() {
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
    }
}
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
NgsLayoutMainComponent.ctorParameters = () => [
    { type: Store },
    { type: Router },
    { type: LayoutConfigurationService },
    { type: TranslateService },
    { type: UserFacadeService }
];
NgsLayoutMainComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }],
    mainSideNav: [{ type: ViewChild, args: ["mainSideNav", { static: false },] }],
    theme_A: [{ type: HostBinding, args: ["class.theme_A",] }],
    theme_B: [{ type: HostBinding, args: ["class.theme_B",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBR3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRCxPQUFPLEVBRU4sa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLGtCQUFrQixFQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBZTlCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7O0lBb0JsQyxZQUNTLEtBQTBCLEVBQzFC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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3dQdXNoIH0gZnJvbSBcIkBhbmd1bGFyL3NlcnZpY2Utd29ya2VyXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdFNpZGVuYXZDb250YWluZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSwgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRGZWF0dXJlU3RhdGUsXHJcblx0Z2V0U2hvd01haW5TaWRlbmF2LFxyXG5cdGdldE1haW5TaWRlTmF2TW9kZSxcclxuXHRnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyxcclxuXHRnZXRTZWNvbmRTaWRlYmFyTW9kZSxcclxuXHRnZXRMYXlvdXRNb2RlLFxyXG5cdGdldExheW91dFRvb2xiYXJNb2RlLFxyXG5cdGdldEZ1bGxzY3JlZW5Nb2RlXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0Q2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUsXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2xheW91dFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LW1haW5cIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL21haW4uY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFtcIi4vbWFpbi5jb21wb25lbnQuc2Nzc1wiXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbYW5pbWF0ZShcIjEwMDBtc1wiKV0pLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW52aXNpYmxlID0+IHZpc2libGVcIiwgW2FuaW1hdGUoXCIxMDAwbXNcIildKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNYWluQ29tcG9uZW50IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc6IENvbmZpZ01vZGVsPGFueT47XHJcblx0bW9kZSQ6IE9ic2VydmFibGU8XCJ2aXNpYmxlXCIgfCBcImludmlzaWJsZVwiPjtcclxuXHR0aGVtZTogc3RyaW5nO1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGlzcGxheU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0aXNGdWxsc2NyZWVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRwcm9ncmVzc1N0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2hvd1NpZGViYXJNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHQvLyB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRtYWluU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHRsYXlvdXRNb2RlOiBPYnNlcnZhYmxlPFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzZWNvbmRTaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBWaWV3Q2hpbGQoXCJtYWluU2lkZU5hdlwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLl9zZXRfaTE4bl9yZXNvdXJjZSgpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdHRoaXMudGhlbWUgPSBjb25maWcudGhlbWU7XHJcblx0XHRcdHRoaXMudGhlbWVfQSA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0FcIjtcclxuXHRcdFx0dGhpcy50aGVtZV9CID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQlwiO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRjb25zdCBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X3NldF9pMThuX3Jlc291cmNlKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZW5cIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCJTaWduaW5cIixcclxuXHRcdFx0X19zaWdudXA6IFwiU2lnbnVwXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwiQWNjb3VudFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwiU2lnbm91dFwiXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImZhXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwi2YjYsdmI2K9cIixcclxuXHRcdFx0X19zaWdudXA6IFwi2KvYqNiqINmG2KfZhVwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcItmF2K/bjNix24zYqiDaqdin2LHYqNix24xcIixcclxuXHRcdFx0X19zaWdub3V0OiBcItiu2LHZiNisXCJcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
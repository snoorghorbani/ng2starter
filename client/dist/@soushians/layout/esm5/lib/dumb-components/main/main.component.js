/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, HostBinding } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { TranslateService } from '@ngx-translate/core';
import { ConfigModel } from "@soushians/config";
import { getShowMainSidenav, getMainSideNavMode, getShowSecondSidebarStatus, getSecondSidebarMode, getLayoutMode, getLayoutToolbarMode, getFullscreenMode } from "../../reducers";
import { CloseSecondSidenavAction, ChangeSecondSidenavMode, CloseSidenavAction, ChangeSideNavMode } from "../../actions";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { UserFacadeService } from "@soushians/user";
import { trigger, state, transition, animate, style } from "@angular/animations";
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
        this.user$ = this.store.select(function (s) { return (/** @type {?} */ (s)).user.user.data; });
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
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signin",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/register",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/verification",
                (/** @type {?} */ (event)).urlAfterRedirects == "/user/password/reset"
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
    /**
     * @return {?}
     */
    NgsLayoutMainComponent.prototype.onSecondSidebarClosedStart = /**
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
        this.translateService.setTranslation('en', {
            __signin: 'Signin',
            __signup: 'Signup',
            __account_mangement: 'Account',
            __signout: 'Signout'
        });
        this.translateService.setTranslation('fa', {
            __signin: 'ورود',
            __signup: 'ثبت نام',
            __account_mangement: 'مدریت کاربری',
            __signout: 'خروج'
        });
    };
    NgsLayoutMainComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-main",
                    template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar  *ngIf=\"theme == 'theme_A'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  <layout-toolbar-b *ngIf=\"theme == 'theme_B'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar-b>\n  \n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\n          <router-outlet name=\"footer_A\"></router-outlet>\n          <router-outlet name=\"footer_B\"></router-outlet>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                    styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:.3s}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"],
                    animations: [
                        trigger("mode", [
                            state("visible", style({ transform: "scaleY(1) translateY(0)" })),
                            state("invisible", style({ height: "0", transform: "scaleY(0) translateY(100%)" })),
                            transition("visible => invisible", [animate("1000ms")]),
                            transition("invisible => visible", [animate("1000ms")])
                        ])
                    ]
                },] },
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
    /** @type {?} */
    NgsLayoutMainComponent.prototype.store;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.router;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.configService;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.translateService;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.userFacadeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sbUJBQW1CLENBQUM7QUFHOUQsT0FBTyxFQUVOLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsMEJBQTBCLEVBQzFCLG9CQUFvQixFQUNwQixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFFTix3QkFBd0IsRUFDeEIsdUJBQXVCLEVBRXZCLGtCQUFrQixFQUNsQixpQkFBaUIsRUFHakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDekYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUE4RGhGLGdDQUNTLE9BQ0EsUUFDQSxlQUNBLGtCQUNBO1FBTFQsaUJBeUNDO1FBeENRLFVB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SyxDQUFDLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQzs0QkFDakUsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7NEJBQ25GLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUN2RCxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDdkQsQ0FBQztxQkFDRjtpQkFDRDs7OztnQkF6RVEsS0FBSztnQkFITCxNQUFNO2dCQWlDTiwwQkFBMEI7Z0JBMUIxQixnQkFBZ0I7Z0JBMkJoQixpQkFBaUI7Ozs2QkE0Q3hCLEtBQUssU0FBQyxZQUFZOzhCQWdCbEIsU0FBUyxTQUFDLGFBQWE7MEJBQ3ZCLFdBQVcsU0FBQyxlQUFlOzBCQUMzQixXQUFXLFNBQUMsZUFBZTs7aUNBakc3Qjs7U0E4RWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3dQdXNoIH0gZnJvbSBcIkBhbmd1bGFyL3NlcnZpY2Utd29ya2VyXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdFNpZGVuYXZDb250YWluZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciAgKm5nSWY9XCJ0aGVtZSA9PSAndGhlbWVfQSdcIiBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICA8bGF5b3V0LXRvb2xiYXItYiAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9CJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyLWI+XHJcbiAgXHJcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBpZD1cImxheW91dC1zaWRuYXZcIiBbY2xhc3NOYW1lXT1cImxheW91dE1vZGUgfCBhc3luY1wiPlxyXG4gICAgPG1hdC1zaWRlbmF2IFttb2RlXT1cIm1haW5TaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dNYWluU2lkZW5hdiB8IGFzeW5jJyAjc2lkZWJhciAoY2xvc2VkU3RhcnQpPVwib25TaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgIDxuZ3MtbGF5b3V0LW1haW4tbWVudSBbYXV0aGVudGljYXRlZF09J3Nob3dTaWRlYmFyTWVudScgKGNsb3NlU2lkZWJhcik9XCJzaWRlYmFyLmNsb3NlKClcIiAoY2xpY2spPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPjwvbmdzLWxheW91dC1tYWluLW1lbnU+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuICAgIDwhLS0gPG1hdC1zaWRlbmF2IFttb2RlXT1cInNlY29uZFNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd1NlY29uZFNpZGVuYXYgfCBhc3luYycgKGNsb3NlZFN0YXJ0KT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIlxyXG4gICAgICBwb3NpdGlvbj1cImVuZFwiICNzZWNvbmRfc2lkZWJhciBjbGFzcz1cInNlY29uZF9zaWRlYmFyXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3QgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj4gLS0+XHJcbiAgICA8ZGl2IGZ4RmxleExheW91dD0nY29sdW1uJyBpZD1cImFwcC1tYWluLWNvbnRhaW5lclwiIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICA8ZGl2IGZ4RmxleD0nMCAwIDEwMCc+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxmb290ZXIgW0Btb2RlXT1cIm1vZGUkIHwgYXN5bmNcIiBydWxlQW5jaG9yPVwibGF5b3V0X2Zvb3RlclwiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOi4zc30ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgW2FuaW1hdGUoXCIxMDAwbXNcIildKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImludmlzaWJsZSA9PiB2aXNpYmxlXCIsIFthbmltYXRlKFwiMTAwMG1zXCIpXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dGhlbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly8gdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLl9zZXRfaTE4bl9yZXNvdXJjZSgpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKChjb25maWcpID0+IHtcclxuXHRcdFx0dGhpcy50aGVtZSA9IGNvbmZpZy50aGVtZTtcclxuXHRcdFx0dGhpcy50aGVtZV9BID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQVwiO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0IgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9CXCI7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHMpID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcCgobW9kZSkgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcigoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoKGkpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X3NldF9pMThuX3Jlc291cmNlKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKCdlbicsIHtcclxuXHRcdFx0X19zaWduaW46ICdTaWduaW4nLFxyXG5cdFx0XHRfX3NpZ251cDogJ1NpZ251cCcsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6ICdBY2NvdW50JyxcclxuXHRcdFx0X19zaWdub3V0OiAnU2lnbm91dCdcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKCdmYScsIHtcclxuXHRcdFx0X19zaWduaW46ICfZiNix2YjYrycsXHJcblx0XHRcdF9fc2lnbnVwOiAn2KvYqNiqINmG2KfZhScsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6ICfZhdiv2LHbjNiqINqp2KfYsdio2LHbjCcsXHJcblx0XHRcdF9fc2lnbm91dDogJ9iu2LHZiNisJ1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, HostBinding } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFFTixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMxQixvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ2xCLE1BQU0sc0JBQXNCLENBQUM7O0lBOEQ3QixnQ0FDUyxPQUNBLFFBQ0EsZUFDQSxrQkFDQTtRQUxULGlCQXlDQztRQXhDUSxVQUFLLEdBQUwsS0FBSztRQUNMLFdBQU0sR0FBTixNQUFNO1FBQ04sa0JBQWEsR0FBYixhQUFhO1FBQ2IscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixzQkFBaUIsR0FBakIsaUJBQWlCOytCQWpCUixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUM7cUJBS25DLEdBQUc7UUFjVixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxtQkFBQyxDQUFRLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDOztRQUc5RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O1FBR2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxZQUFZLGFBQWEsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7O1lBQy9FLElBQU0sY0FBYyxHQUFHO2dCQUN0QixtQkFBQyxLQUFzQixFQUFDLENBQUMsaUJBQWlCLElBQUksY0FBYztnQkFDNUQsbUJBQUMsS0FBc0IsRUFBQyxDQUFDLGlCQUFpQixJQUFJLHVCQUF1QjtnQkFDckUsbUJBQUMsS0FBc0IsRUFBQyxDQUFDLGlCQUFpQixJQUFJLDJCQUEyQjtnQkFDekUsbUJBQUMsS0FBc0IsRUFBQyxDQUFDLGlCQUFpQixJQUFJLHNCQUFzQjthQUNwRSxDQUFDO1lBQ0YsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQztnQkFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Z0JBQzdELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDLENBQUMsQ0FBQztLQUNIO0lBRUQsc0JBQXNCO0lBQ3RCLHlEQUF5RDtJQUN6RCxJQUFJOzs7O0lBRUosMkRBQTBCOzs7SUFBMUI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUNwRDs7OztJQUVELHFEQUFvQjs7O0lBQXBCO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7S0FDOUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtREFBa0I7Ozs7SUFBbEI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUMxQyxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixtQkFBbUIsRUFBRSxTQUFTO1lBQzlCLFNBQVMsRUFBRSxTQUFTO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO1lBQzFDLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLG1CQUFtQixFQUFFLGNBQWM7WUFDbkMsU0FBUyxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO0tBQ0g7O2dCQW5JRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwrMURBMkJKO29CQUNOLE1BQU0sRUFBRSxDQUFDLGtlQUFrZSxDQUFDO29CQUM1ZSxVQUFVLEVBQUU7d0JBQ1gsT0FBTyxDQUFDLE1BQU0sRUFBRTs0QkFDZixLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUM7NEJBQ2pFLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDOzRCQUNuRixVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQzs0QkFDekQsVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUM7eUJBQ3pELENBQUM7cUJBQ0Y7aUJBQ0Q7Ozs7Z0JBcEVRLEtBQUs7Z0JBSEwsTUFBTTtnQkF3Qk4sMEJBQTBCO2dCQWpCMUIsZ0JBQWdCO2dCQUloQixpQkFBaUI7Ozs2QkE4RHhCLEtBQUssU0FBQyxZQUFZOzhCQWdCbEIsU0FBUyxTQUFDLGFBQWE7MEJBQ3ZCLFdBQVcsU0FBQyxlQUFlOzBCQUMzQixXQUFXLFNBQUMsZUFBZTs7aUNBNUY3Qjs7U0F5RWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3dQdXNoIH0gZnJvbSBcIkBhbmd1bGFyL3NlcnZpY2Utd29ya2VyXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdFNpZGVuYXZDb250YWluZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSwgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRGZWF0dXJlU3RhdGUsXHJcblx0Z2V0U2hvd01haW5TaWRlbmF2LFxyXG5cdGdldE1haW5TaWRlTmF2TW9kZSxcclxuXHRnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyxcclxuXHRnZXRTZWNvbmRTaWRlYmFyTW9kZSxcclxuXHRnZXRMYXlvdXRNb2RlLFxyXG5cdGdldExheW91dFRvb2xiYXJNb2RlLFxyXG5cdGdldEZ1bGxzY3JlZW5Nb2RlXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0Q2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUsXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2xheW91dFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LW1haW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI21haW5TaWRlTmF2IFtuZ0NsYXNzXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCIgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsc2NyZWVuJCB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyICAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9BJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIDxsYXlvdXQtdG9vbGJhci1iICpuZ0lmPVwidGhlbWUgPT0gJ3RoZW1lX0InXCIgW3VzZXJdPVwidXNlciQgfCBhc3luY1wiIFtkaXNwbGF5TmFtZV09XCJkaXNwbGF5TmFtZSQgfCBhc3luY1wiIFtzaG93U2lkZWJhck1lbnVdPSdzaG93U2lkZWJhck1lbnUgfCBhc3luYycgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvbGF5b3V0LXRvb2xiYXItYj5cclxuICBcclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGlkPVwibGF5b3V0LXNpZG5hdlwiIFtjbGFzc05hbWVdPVwibGF5b3V0TW9kZSB8IGFzeW5jXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3RlciBbQG1vZGVdPVwibW9kZSQgfCBhc3luY1wiIHJ1bGVBbmNob3I9XCJsYXlvdXRfZm9vdGVyXCI+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0FcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0JcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8YXBwLWZvb3RlciBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9hcHAtZm9vdGVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjcHVyY2hhc2UtZmFiLWJ1dHRvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MjNweDtsZWZ0OjMxcHh9bWQtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0ud2l0aC1tYXJnaW4gI2FwcC1tYWluLWNvbnRhaW5lcnttYXJnaW4tdG9wOjI1cHg7cGFkZGluZy1yaWdodDoyNXB4O3BhZGRpbmctbGVmdDoyNXB4fS5zZWNvbmRfc2lkZWJhcnt3aWR0aDozODBweH0ubW9yZS1kZXRhaWx7bWFyZ2luOjhweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxMHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk2JTtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246LjNzfS5tb3JlLWRldGFpbDpob3ZlcntiYWNrZ3JvdW5kOiNlZWV9Zm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7bWFyZ2luLXRvcDoyNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dGhlbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly8gdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLl9zZXRfaTE4bl9yZXNvdXJjZSgpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdHRoaXMudGhlbWUgPSBjb25maWcudGhlbWU7XHJcblx0XHRcdHRoaXMudGhlbWVfQSA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0FcIjtcclxuXHRcdFx0dGhpcy50aGVtZV9CID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQlwiO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRjb25zdCBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X3NldF9pMThuX3Jlc291cmNlKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZW5cIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCJTaWduaW5cIixcclxuXHRcdFx0X19zaWdudXA6IFwiU2lnbnVwXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwiQWNjb3VudFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwiU2lnbm91dFwiXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImZhXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwi2YjYsdmI2K9cIixcclxuXHRcdFx0X19zaWdudXA6IFwi2KvYqNiqINmG2KfZhVwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcItmF2K/YsduM2Kog2qnYp9ix2KjYsduMXCIsXHJcblx0XHRcdF9fc2lnbm91dDogXCLYrtix2YjYrFwiXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
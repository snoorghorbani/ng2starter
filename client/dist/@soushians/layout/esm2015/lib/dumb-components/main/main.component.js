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
        this.configService.config$.subscribe(config => {
            this.theme = config.theme;
            this.theme_A = config.theme == "theme_A";
            this.theme_B = config.theme == "theme_B";
        });
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select(s => (/** @type {?} */ (s)).user.user.data);
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav);
        this.mainSidenavMode = this.store.select(getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode);
        this.mode$ = this.isFullscreen$.map(mode => (mode ? "invisible" : "visible"));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode);
        this.router.events.filter(data => data instanceof NavigationEnd).subscribe(event => {
            /** @type {?} */
            const hideSituations = [
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signin",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/register",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/verification",
                (/** @type {?} */ (event)).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(i => i))
                this.showSidebarMenu.next(false);
            else
                this.showSidebarMenu.next(true);
        });
    }
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
            __account_mangement: "مدریت کاربری",
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
    mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFFTixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMxQixvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFlOUIsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7SUFvQmxDLFlBQ1MsT0FDQSxRQUNBLGVB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RUFBRSw0QkFBNEIsRUFBRSxDQUFDLENBQUM7d0JBQ25GLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFDO3dCQUN6RCxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQztxQkFDekQsQ0FBQztpQkFDRjs7YUFDRDs7OztZQXpDUSxLQUFLO1lBSEwsTUFBTTtZQXdCTiwwQkFBMEI7WUFqQjFCLGdCQUFnQjtZQUloQixpQkFBaUI7Ozt5QkFtQ3hCLEtBQUssU0FBQyxZQUFZOzBCQWdCbEIsU0FBUyxTQUFDLGFBQWE7c0JBQ3ZCLFdBQVcsU0FBQyxlQUFlO3NCQUMzQixXQUFXLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gXCJAYW5ndWxhci9zZXJ2aWNlLXdvcmtlclwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UsIFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0RmVhdHVyZVN0YXRlLFxyXG5cdGdldFNob3dNYWluU2lkZW5hdixcclxuXHRnZXRNYWluU2lkZU5hdk1vZGUsXHJcblx0Z2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsXHJcblx0Z2V0U2Vjb25kU2lkZWJhck1vZGUsXHJcblx0Z2V0TGF5b3V0TW9kZSxcclxuXHRnZXRMYXlvdXRUb29sYmFyTW9kZSxcclxuXHRnZXRGdWxsc2NyZWVuTW9kZVxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdENoYW5nZVNpZGVOYXZNb2RlLFxyXG5cdENoYW5nZVNlY29uZFNpZGVuYXZNb2RlLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9tYWluLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9tYWluLmNvbXBvbmVudC5zY3NzXCIgXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dGhlbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly8gdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLl9zZXRfaTE4bl9yZXNvdXJjZSgpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdHRoaXMudGhlbWUgPSBjb25maWcudGhlbWU7XHJcblx0XHRcdHRoaXMudGhlbWVfQSA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0FcIjtcclxuXHRcdFx0dGhpcy50aGVtZV9CID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQlwiO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRjb25zdCBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X3NldF9pMThuX3Jlc291cmNlKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZW5cIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCJTaWduaW5cIixcclxuXHRcdFx0X19zaWdudXA6IFwiU2lnbnVwXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwiQWNjb3VudFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwiU2lnbm91dFwiXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImZhXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwi2YjYsdmI2K9cIixcclxuXHRcdFx0X19zaWdudXA6IFwi2KvYqNiqINmG2KfZhVwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcItmF2K/YsduM2Kog2qnYp9ix2KjYsduMXCIsXHJcblx0XHRcdF9fc2lnbm91dDogXCLYrtix2YjYrFwiXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19
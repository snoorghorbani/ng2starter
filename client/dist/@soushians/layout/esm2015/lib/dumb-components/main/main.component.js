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
                template: `<div #mainSideNav [ngClass]="toolbarAnimationState | async" [class.fullscreen]="isFullscreen$ | async">
  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color="primary" mode="query"></mat-progress-bar> -->
  <layout-toolbar  *ngIf="theme == 'theme_A'" [user]="user$ | async" [displayName]="displayName$ | async" [showSidebarMenu]='showSidebarMenu | async' [app-config]="app_config"></layout-toolbar>
  <layout-toolbar-b *ngIf="theme == 'theme_B'" [user]="user$ | async" [displayName]="displayName$ | async" [showSidebarMenu]='showSidebarMenu | async' [app-config]="app_config"></layout-toolbar-b>
  
  <mat-sidenav-container id="layout-sidnav" [className]="layoutMode | async">
    <mat-sidenav [mode]="mainSidenavMode | async" [opened]='showMainSidenav | async' #sidebar (closedStart)="onSidebarClosedStart()">
      <mat-nav-list>
        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)="sidebar.close()" (click)="onSecondSidebarClosedStart()"></ngs-layout-main-menu>
      </mat-nav-list>
    </mat-sidenav>
    <!-- <mat-sidenav [mode]="secondSidenavMode | async" [opened]='showSecondSidenav | async' (closedStart)="onSecondSidebarClosedStart()"
      position="end" #second_sidebar class="second_sidebar">
      <mat-nav-list fxLayout='column'>
      </mat-nav-list>
    </mat-sidenav> -->
    <div fxFlexLayout='column' id="app-main-container" fxLayoutAlign='center center'>
      <div fxFlex='0 0 100'>
        <router-outlet></router-outlet>
        <footer [@mode]="mode$ | async" ruleAnchor="layout_footer">
          <router-outlet name="footer_A"></router-outlet>
          <router-outlet name="footer_B"></router-outlet>
          <app-footer [app-config]="app_config"></app-footer>
        </footer>
      </div>
    </div>
  </mat-sidenav-container>
</div>`,
                styles: [`#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:.3s}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFFTixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLDBCQUEwQixFQUMxQixvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQ04saUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsa0JBQWtCLEVBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUEwQzlCLE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7O0lBb0JsQyxZQUNTLE9BQ0EsUUFDQSxlQUNBLGtCQUNBO1FBSkEsVUFBSyxHQUFMLEtBQUs7UUFDTCxXQUFNLEdBQU4sTUFBTTtRQUNOLGtCQUFhLEdBQWIsYUFBYTtRQUNiLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQWpCMUIsdUJBQWtCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSzVDLGFBQVEsR0FBRyxDQUFDO1FBY1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBQyxDQUFRLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztRQUc5RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7O1FBR2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTs7WUFDbEYsTUFBTSxjQUFjLEdBQUc7Z0JBQ3RCLG1CQUFDLEtBQXNCLEVBQUMsQ0FBQyxpQkFBaUIsSUFBSSxjQUFjO2dCQUM1RCxtQkFBQyxLQUFzQixFQUFDLENBQUMsaUJBQWlCLElBQUksdUJBQXVCO2dCQUNyRSxtQkFBQyxLQUFzQixFQUFDLENBQUMsaUJBQWlCLElBQUksMkJBQTJCO2dCQUN6RSxtQkFBQyxLQUFzQixFQUFDLENBQUMsaUJBQWlCLElBQUksc0JBQXNCO2FBQ3BFLENBQUM7WUFDRixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2dCQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7S0FDSDs7OztJQU1ELDBCQUEwQjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUNwRDs7OztJQUVELG9CQUFvQjtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLENBQUMsQ0FBQztLQUM5Qzs7Ozs7SUFLRCxrQkFBa0I7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDMUMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixTQUFTLEVBQUUsU0FBUztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRTtZQUMxQyxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsU0FBUztZQUNuQixtQkFBbUIsRUFBRSxjQUFjO1lBQ25DLFNBQVMsRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQztLQUNIOzs7WUFuSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJCSjtnQkFDTixNQUFNLEVBQUUsQ0FBQyxrZUFBa2UsQ0FBQztnQkFDNWUsVUFBVSxFQUFFO29CQUNYLE9BQU8sQ0FBQyxNQUFNLEVBQUU7d0JBQ2YsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO3dCQUNqRSxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQzt3QkFDbkYsVUFBVSxDQUFDLHNCQUFzQixFQUFFLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUM7d0JBQ3pELFVBQVUsQ0FBQyxzQkFBc0IsRUFBRSxDQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFDO3FCQUN6RCxDQUFDO2lCQUNGO2FBQ0Q7Ozs7WUFwRVEsS0FBSztZQUhMLE1BQU07WUF3Qk4sMEJBQTBCO1lBakIxQixnQkFBZ0I7WUFJaEIsaUJBQWlCOzs7eUJBOER4QixLQUFLLFNBQUMsWUFBWTswQkFnQmxCLFNBQVMsU0FBQyxhQUFhO3NCQUN2QixXQUFXLFNBQUMsZUFBZTtzQkFDM0IsV0FBVyxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtbWFpblwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjbWFpblNpZGVOYXYgW25nQ2xhc3NdPVwidG9vbGJhckFuaW1hdGlvblN0YXRlIHwgYXN5bmNcIiBbY2xhc3MuZnVsbHNjcmVlbl09XCJpc0Z1bGxzY3JlZW4kIHwgYXN5bmNcIj5cclxuICA8IS0tIDxtYXQtcHJvZ3Jlc3MtYmFyICpuZ0lmPSdwcm9ncmVzc1N0YXR1cyQgfCBhc3luYycgY29sb3I9XCJwcmltYXJ5XCIgbW9kZT1cInF1ZXJ5XCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPiAtLT5cclxuICA8bGF5b3V0LXRvb2xiYXIgICpuZ0lmPVwidGhlbWUgPT0gJ3RoZW1lX0EnXCIgW3VzZXJdPVwidXNlciQgfCBhc3luY1wiIFtkaXNwbGF5TmFtZV09XCJkaXNwbGF5TmFtZSQgfCBhc3luY1wiIFtzaG93U2lkZWJhck1lbnVdPSdzaG93U2lkZWJhck1lbnUgfCBhc3luYycgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvbGF5b3V0LXRvb2xiYXI+XHJcbiAgPGxheW91dC10b29sYmFyLWIgKm5nSWY9XCJ0aGVtZSA9PSAndGhlbWVfQidcIiBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhci1iPlxyXG4gIFxyXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgaWQ9XCJsYXlvdXQtc2lkbmF2XCIgW2NsYXNzTmFtZV09XCJsYXlvdXRNb2RlIHwgYXN5bmNcIj5cclxuICAgIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJtYWluU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93TWFpblNpZGVuYXYgfCBhc3luYycgI3NpZGViYXIgKGNsb3NlZFN0YXJ0KT1cIm9uU2lkZWJhckNsb3NlZFN0YXJ0KClcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdD5cclxuICAgICAgICA8bmdzLWxheW91dC1tYWluLW1lbnUgW2F1dGhlbnRpY2F0ZWRdPSdzaG93U2lkZWJhck1lbnUnIChjbG9zZVNpZGViYXIpPVwic2lkZWJhci5jbG9zZSgpXCIgKGNsaWNrKT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIj48L25ncy1sYXlvdXQtbWFpbi1tZW51PlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+XHJcbiAgICA8IS0tIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJzZWNvbmRTaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dTZWNvbmRTaWRlbmF2IHwgYXN5bmMnIChjbG9zZWRTdGFydCk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCJcclxuICAgICAgcG9zaXRpb249XCJlbmRcIiAjc2Vjb25kX3NpZGViYXIgY2xhc3M9XCJzZWNvbmRfc2lkZWJhclwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0IGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+IC0tPlxyXG4gICAgPGRpdiBmeEZsZXhMYXlvdXQ9J2NvbHVtbicgaWQ9XCJhcHAtbWFpbi1jb250YWluZXJcIiBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgPGRpdiBmeEZsZXg9JzAgMCAxMDAnPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8Zm9vdGVyIFtAbW9kZV09XCJtb2RlJCB8IGFzeW5jXCIgcnVsZUFuY2hvcj1cImxheW91dF9mb290ZXJcIj5cclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQlwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgIDxhcHAtZm9vdGVyIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2FwcC1mb290ZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNwdXJjaGFzZS1mYWItYnV0dG9ue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyM3B4O2xlZnQ6MzFweH1tZC1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50fS53aXRoLW1hcmdpbiAjYXBwLW1haW4tY29udGFpbmVye21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXJpZ2h0OjI1cHg7cGFkZGluZy1sZWZ0OjI1cHh9LnNlY29uZF9zaWRlYmFye3dpZHRoOjM4MHB4fS5tb3JlLWRldGFpbHttYXJnaW46OHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTYlO2JvcmRlcjoxcHggc29saWQgI2RlZGVkZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjouM3N9Lm1vcmUtZGV0YWlsOmhvdmVye2JhY2tncm91bmQ6I2VlZX1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTttYXJnaW4tdG9wOjI1cHg7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxfWBdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJtb2RlXCIsIFtcclxuXHRcdFx0c3RhdGUoXCJ2aXNpYmxlXCIsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInNjYWxlWSgxKSB0cmFuc2xhdGVZKDApXCIgfSkpLFxyXG5cdFx0XHRzdGF0ZShcImludmlzaWJsZVwiLCBzdHlsZSh7IGhlaWdodDogXCIwXCIsIHRyYW5zZm9ybTogXCJzY2FsZVkoMCkgdHJhbnNsYXRlWSgxMDAlKVwiIH0pKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInZpc2libGUgPT4gaW52aXNpYmxlXCIsIFsgYW5pbWF0ZShcIjEwMDBtc1wiKSBdKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImludmlzaWJsZSA9PiB2aXNpYmxlXCIsIFsgYW5pbWF0ZShcIjEwMDBtc1wiKSBdKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNYWluQ29tcG9uZW50IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc6IENvbmZpZ01vZGVsPGFueT47XHJcblx0bW9kZSQ6IE9ic2VydmFibGU8XCJ2aXNpYmxlXCIgfCBcImludmlzaWJsZVwiPjtcclxuXHR0aGVtZTogc3RyaW5nO1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGlzcGxheU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0aXNGdWxsc2NyZWVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRwcm9ncmVzc1N0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2hvd1NpZGViYXJNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHQvLyB1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRtYWluU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHRsYXlvdXRNb2RlOiBPYnNlcnZhYmxlPFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzZWNvbmRTaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBWaWV3Q2hpbGQoXCJtYWluU2lkZU5hdlwiKSBtYWluU2lkZU5hdjogRWxlbWVudFJlZjtcclxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy50aGVtZV9BXCIpIHRoZW1lX0E6IGJvb2xlYW47XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQlwiKSB0aGVtZV9COiBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuX3NldF9pMThuX3Jlc291cmNlKCk7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0dGhpcy50aGVtZSA9IGNvbmZpZy50aGVtZTtcclxuXHRcdFx0dGhpcy50aGVtZV9BID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQVwiO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0IgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9CXCI7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiAocyBhcyBhbnkpLnVzZXIudXNlci5kYXRhKTtcclxuXHRcdHRoaXMuZGlzcGxheU5hbWUkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5tYWluU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cdFx0dGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyTW9kZSk7XHJcblxyXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cdFx0dGhpcy5tb2RlJCA9IHRoaXMuaXNGdWxsc2NyZWVuJC5tYXAobW9kZSA9PiAobW9kZSA/IFwiaW52aXNpYmxlXCIgOiBcInZpc2libGVcIikpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zZWNvbmRTaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuXHRcdC8vI2VuZHJlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHJcblx0XHR0aGlzLmxheW91dE1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRNb2RlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuZmlsdGVyKGRhdGEgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0IGhpZGVTaXR1YXRpb25zID0gW1xyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ25pblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC9yZWdpc3RlclwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC92ZXJpZmljYXRpb25cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvdXNlci9wYXNzd29yZC9yZXNldFwiXHJcblx0XHRcdF07XHJcblx0XHRcdGlmIChoaWRlU2l0dWF0aW9ucy5zb21lKGkgPT4gaSkpIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQoZmFsc2UpO1xyXG5cdFx0XHRlbHNlIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQvLyBcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUxheW91dChcIndpdGgtbWFyZ2luXCIpKTtcclxuXHQvLyB9XHJcblxyXG5cdG9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0b25TaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfc2V0X2kxOG5fcmVzb3VyY2UoKSB7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0VHJhbnNsYXRpb24oXCJlblwiLCB7XHJcblx0XHRcdF9fc2lnbmluOiBcIlNpZ25pblwiLFxyXG5cdFx0XHRfX3NpZ251cDogXCJTaWdudXBcIixcclxuXHRcdFx0X19hY2NvdW50X21hbmdlbWVudDogXCJBY2NvdW50XCIsXHJcblx0XHRcdF9fc2lnbm91dDogXCJTaWdub3V0XCJcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZmFcIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCLZiNix2YjYr1wiLFxyXG5cdFx0XHRfX3NpZ251cDogXCLYq9io2Kog2YbYp9mFXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwi2YXYr9ix24zYqiDaqdin2LHYqNix24xcIixcclxuXHRcdFx0X19zaWdub3V0OiBcItiu2LHZiNisXCJcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { ConfigModel } from "@soushians/config";
import { getShowMainSidenav, getMainSideNavMode, getShowSecondSidebarStatus, getSecondSidebarMode, getLayoutMode, getLayoutToolbarMode, getFullscreenMode } from "../../reducers";
import { CloseSecondSidenavAction, ChangeSecondSidenavMode, CloseSidenavAction, ChangeSideNavMode } from "../../actions";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
import { UserFacadeService } from "@soushians/user";
import { trigger, state, transition, animate, style } from "@angular/animations";
export class MainComponent {
    /**
     * @param {?} store
     * @param {?} router
     * @param {?} configService
     * @param {?} userFacadeService
     */
    constructor(store, router, configService, userFacadeService) {
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.userFacadeService = userFacadeService;
        this.showSidebarMenu = new BehaviorSubject(true);
        this.width = 100;
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
            var /** @type {?} */ hideSituations = [
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
        this.layoutMode.subscribe(mode => {
            if (!this.mainSideNav)
                return;
            (/** @type {?} */ (this.mainSideNav.nativeElement)).className = "";
            (/** @type {?} */ (this.mainSideNav.nativeElement)).classList.add(mode);
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
}
MainComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-main",
                template: `<div #mainSideNav [className]="toolbarAnimationState | async" [class.fullscreen]="isFullscreen$ | async">
  
  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color="primary" mode="query"></mat-progress-bar> -->
  <layout-toolbar [user]="user$ | async" [displayName]="displayName$ | async" [showSidebarMenu]='showSidebarMenu | async' [app-config]="app_config"></layout-toolbar>
  
  <mat-sidenav-container id="layout-sidnav">
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
        <footer [@mode]="mode$ | async">
          <router-outlet name="footer_A"></router-outlet>
          <router-outlet name="footer_B"></router-outlet>
          <app-footer [app-config]="app_config"></app-footer>
        </footer>
      </div>
    </div>
  </mat-sidenav-container>
</div>`,
                styles: [`#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}`],
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
MainComponent.ctorParameters = () => [
    { type: Store },
    { type: Router },
    { type: LayoutConfigurationService },
    { type: UserFacadeService }
];
MainComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }],
    mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }]
};
function MainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MainComponent.prototype.app_config;
    /** @type {?} */
    MainComponent.prototype.mode$;
    /** @type {?} */
    MainComponent.prototype.user$;
    /** @type {?} */
    MainComponent.prototype.displayName$;
    /** @type {?} */
    MainComponent.prototype.isFullscreen$;
    /** @type {?} */
    MainComponent.prototype.progressStatus$;
    /** @type {?} */
    MainComponent.prototype.showSidebarMenu;
    /** @type {?} */
    MainComponent.prototype.showMainSidenav;
    /** @type {?} */
    MainComponent.prototype.mainSidenavMode;
    /** @type {?} */
    MainComponent.prototype.layoutMode;
    /** @type {?} */
    MainComponent.prototype.width;
    /** @type {?} */
    MainComponent.prototype.showSecondSidenav;
    /** @type {?} */
    MainComponent.prototype.secondSidenavMode;
    /** @type {?} */
    MainComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    MainComponent.prototype.mainSideNav;
    /** @type {?} */
    MainComponent.prototype.store;
    /** @type {?} */
    MainComponent.prototype.router;
    /** @type {?} */
    MainComponent.prototype.configService;
    /** @type {?} */
    MainComponent.prototype.userFacadeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdkMsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxtQkFBbUIsQ0FBQztBQUc5RCxPQUFPLEVBRU4sa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiwwQkFBMEIsRUFDMUIsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUVOLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFFdkIsa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUdqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBMENqRixNQUFNOzs7Ozs7O0lBa0JMLFlBQ1MsT0FDQSxRQUNBLGVBQ0E7UUFIQSxVQUFLLEdBQUwsS0FBSztRQUNMLFdBQU0sR0FBTixNQUFNO1FBQ04sa0JBQWEsR0FBYixhQUFhO1FBQ2Is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dGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbY2xhc3NOYW1lXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCIgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsc2NyZWVuJCB8IGFzeW5jXCI+XHJcbiAgXHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIFxyXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgaWQ9XCJsYXlvdXQtc2lkbmF2XCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3RlciBbQG1vZGVdPVwibW9kZSQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX0ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW52aXNpYmxlID0+IHZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRtb2RlJDogT2JzZXJ2YWJsZTxcInZpc2libGVcIiB8IFwiaW52aXNpYmxlXCI+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGlzcGxheU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0aXNGdWxsc2NyZWVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRwcm9ncmVzc1N0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2hvd1NpZGViYXJNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHQvL3VzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHR2YXIgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoaSA9PiBpKSkgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dChmYWxzZSk7XHJcblx0XHRcdGVsc2UgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dCh0cnVlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubGF5b3V0TW9kZS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcblx0XHRcdGlmICghdGhpcy5tYWluU2lkZU5hdikgcmV0dXJuO1xyXG5cdFx0XHQodGhpcy5tYWluU2lkZU5hdi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc05hbWUgPSBcIlwiO1xyXG5cdFx0XHQodGhpcy5tYWluU2lkZU5hdi5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jbGFzc0xpc3QuYWRkKG1vZGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iXX0=
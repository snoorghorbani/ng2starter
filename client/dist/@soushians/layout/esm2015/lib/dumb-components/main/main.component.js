/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { ConfigModel } from "@soushians/config";
import { getShowMainSidenav, getMainSideNavMode, getShowSecondSidebarStatus, getSecondSidebarMode, getLayoutMode, getLayoutToolbarMode } from "../../reducers";
import { CloseSecondSidenavAction, ChangeSecondSidenavMode, ChangeSideNavMode, CloseSidenavAction } from "../../actions";
export class MainComponent {
    /**
     * @param {?} store
     * @param {?} router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.showSidebarMenu = new BehaviorSubject(true);
        this.width = 100;
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select((s) => (/** @type {?} */ (s)).user.user.data);
        this.user$.subscribe((data) => {
            debugger;
        });
        this.showMainSidenav = this.store.select(getShowMainSidenav);
        this.mainSidenavMode = this.store.select(getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode);
        this.router.events.filter((data) => data instanceof NavigationEnd).subscribe((event) => {
            var /** @type {?} */ hideSituations = [
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signin",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/register",
                (/** @type {?} */ (event)).urlAfterRedirects == "/auth/signup/verification",
                (/** @type {?} */ (event)).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some((i) => i))
                this.showSidebarMenu.next(false);
            else
                this.showSidebarMenu.next(true);
        });
        this.layoutMode.subscribe((mode) => {
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
                template: `<div #mainSideNav [className]="toolbarAnimationState | async">
  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color="primary" mode="query"></mat-progress-bar> -->
  <layout-toolbar [user]="user$ | async" [showSidebarMenu]='showSidebarMenu | async' [app-config]="app_config"></layout-toolbar>
  
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
        <router-outlet name="footer_A"></router-outlet>
        <router-outlet name="footer_B"></router-outlet>
        <footer>
          <app-footer [app-config]="app_config"></app-footer>
        </footer>
      </div>
    </div>
  </mat-sidenav-container>
</div>`,
                styles: [`#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}`]
            },] },
];
/** @nocollapse */
MainComponent.ctorParameters = () => [
    { type: Store },
    { type: Router }
];
MainComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }],
    mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }]
};
function MainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MainComponent.prototype.user$;
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
    MainComponent.prototype.app_config;
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
}
//# sourceMappingURL=main.component.js.map

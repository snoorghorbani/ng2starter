/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostListener, Inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { UserModel } from "@soushians/user";
import * as fromLayout from "../../reducers";
import { SignoutAction, OpenSecondSidenavAction, CloseSecondSidenavAction, CloseSidenavAction, OpenSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, ChangeToolbatToSummaryModeAction } from "../../actions";
import { getShowSecondSidebarStatus, getLayoutToolbar } from "../../reducers";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";
export class ToolbarMenuComponent {
    /**
     * @param {?} document
     * @param {?} _location
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(document, _location, store, configurationService) {
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(config => (this.config = config));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
        this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
        this.toolbarAnimationState = this.store.select(fromLayout.getLayoutToolbarMode);
        this.menuItems$ = this.configurationService.config$.map(config => config.menuItems);
        fromEvent(this.document.body, "scroll").subscribe(() => {
            let /** @type {?} */ scrolledAmount = this.document.body.scrollTop;
            let /** @type {?} */ scrollToTop = scrolledAmount - this.lastScroll < 0 && this.document.body.scrollHeight - scrolledAmount < 100;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            this.lastScroll = this.document.body.scrollTop;
            if (scrolledAmount == 0) {
                if (this.config.mode == "comfortable")
                    return;
                this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 128 || scrollToTop) {
                if (this.config.mode == "compact")
                    return;
                this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (this.config.mode == "summary")
                    return;
                this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        });
    }
    /**
     * @return {?}
     */
    onWindowScroll() {
        // of(1)
    }
    /**
     * @return {?}
     */
    signout() {
        this.store.dispatch(new SignoutAction());
    }
    /**
     * @return {?}
     */
    goback() {
        this._location.back();
    }
    /**
     * @return {?}
     */
    toggleSecondSidebar() {
        let /** @type {?} */ action;
        this.showSecondSidenav.subscribe(state => {
            action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        let /** @type {?} */ action;
        this.showMainSidenav.subscribe(state => {
            action = state ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    }
}
ToolbarMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-toolbar",
                template: `<mat-toolbar [@toolbarAnimation]="toolbarAnimationState | async">
  <mat-toolbar-row>
    <app-logo-container fxFlex="none" fxLayoutAlign="end center"></app-logo-container>

    <button type="button" *ngIf='showSidebarMenu' (click)="toggleMainSidebar()" mat-icon-button fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>menu</mat-icon>
    </button>
    <span id='app-name'>
      {{app_config?.Config.AppTitle}}
    </span>
    <app-title fxFlex fxLayoutAlign="start center"></app-title>
    <app-search-box fxFlex fxLayoutAlign="end center"></app-search-box>
    
    <button *ngIf="!user.DisplayName" mat-button routerLink="auth/signin">
      ورود
    </button>
    <button *ngIf="user.Username" mat-button [matMenuTriggerFor]="toolbarMenu1">
      <mat-icon>account_circle</mat-icon>
      <span>
        {{user?.Username}}
      </span>
    </button>
    <mat-menu #toolbarMenu1>
      <button routerLink='/user/panel' mat-menu-item>
        <mat-icon>fingerprint</mat-icon>
        <span>
          مدیریت کاربری
        </span>
      </button>
      <button (click)='signout()' mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>خروج</span>
      </button>
    </mat-menu>
    <button mat-icon-button type="button" (click)="toggleSecondSidebar()" fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>notifications</mat-icon>
    </button>
    <button mat-icon-button (click)='goback()'>
      <mat-icon>arrow_back</mat-icon>
    </button>
    
  </mat-toolbar-row>
  <mat-toolbar-row>
    <button mat-button 
    *ngFor="let menu of menuItems$ | async"
    routerLinkActive="active"
    [routerLink]="[menu.route]" 
    >
    <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->
    <span>{{menu.title}}</span>
  </button>
</mat-toolbar-row>
</mat-toolbar>`,
                styles: [``],
                animations: [
                    trigger("toolbarAnimation", [
                        state("comfortable", style({
                            backgroundColor: "rgba(119,181,63,1)",
                            color: "rgba(256,256,256,1)",
                            height: "33vh",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                        })),
                        state("compact", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("summary", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "-64px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        transition("comfortable => compact", animate("400ms ease-in")),
                        transition("comfortable => summary", animate("400ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("400ms ease-out")),
                        transition("compact => comfortable", animate("400ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ])
                ]
            },] },
];
/** @nocollapse */
ToolbarMenuComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Location },
    { type: Store },
    { type: LayoutConfigurationService }
];
ToolbarMenuComponent.propDecorators = {
    showSidebarMenu: [{ type: Input }],
    app_config: [{ type: Input, args: ["app-config",] }],
    user: [{ type: Input }],
    onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
};
function ToolbarMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSecondSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSidebarMenu;
    /** @type {?} */
    ToolbarMenuComponent.prototype.app_config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.user;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showMainSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.menuItems$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.lastScroll;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.document;
    /** @type {?} */
    ToolbarMenuComponent.prototype._location;
    /** @type {?} */
    ToolbarMenuComponent.prototype.store;
    /** @type {?} */
    ToolbarMenuComponent.prototype.configurationService;
}
//# sourceMappingURL=toolbar-menu.component.js.map

import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostListener, NgModule, LOCALE_ID, HostBinding, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getConfigs, NgsConfigModule } from '@soushians/config';
import 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SigninService, DoSignoutAction } from '@soushians/authentication';
import { map, combineLatest, withLatestFrom } from 'rxjs/operators';
import { getAccountInfo, UserFacadeService } from '@soushians/user';
import { Location, CommonModule } from '@angular/common';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { __decorate, __metadata } from 'tslib';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { RuleModule } from '@soushians/rule';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const OPEN_SIDENAV = "[Layout] Open Sidenav";
/** @type {?} */
const CLOSE_SIDENAV = "[Layout] Close Sidenav";
/** @enum {string} */
var LayoutActionTypes = {
    UPDATE_LAYOUT_CONFIG: "[Layout] UPDATE_LAYOUT_CONFIG",
    DO_SIGNOUT: "[Layout] do signout",
    TITLE_CHANGED: "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT: "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE: "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR: "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR: "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE: "[Layout] Change second sidenav mode",
    FULLSCREEN: "[Layout] FULLSCREEN",
    EXIT_FULLSCREEN: "[Layout] EXIT_FULLSCREEN",
    TOGGLE_FULLSCREEN: "[Layout] TOGGLE_FULLSCREEN",
};
class UpdateLayoutConfigAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    }
}
class OpenSidenavAction {
    constructor() {
        this.type = OPEN_SIDENAV;
    }
}
class CloseSidenavAction {
    constructor() {
        this.type = CLOSE_SIDENAV;
    }
}
class ChangeLayout {
    /**
     * @param {?} name
     */
    constructor(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
}
class ChangeSideNavMode {
    /**
     * @param {?} mode
     */
    constructor(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
}
class ChangeSecondSidenavMode {
    /**
     * @param {?} mode
     */
    constructor(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
}
class DoSignoutAction$1 {
    constructor() {
        this.type = LayoutActionTypes.DO_SIGNOUT;
    }
}
class TitleChangedAction {
    /**
     * @param {?} title
     */
    constructor(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
}
class OpenSecondSidenavAction {
    constructor() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
}
class CloseSecondSidenavAction {
    constructor() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
}
class FullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.FULLSCREEN;
    }
}
class ExitFullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.EXIT_FULLSCREEN;
    }
}
class ToggleFullscreenAction {
    constructor() {
        this.type = LayoutActionTypes.TOGGLE_FULLSCREEN;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: [],
    signoutAction: /** @type {?} */ ({}),
    fullscreen: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state$$1 = initialState, action) {
    switch (action.type) {
        case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            /** @type {?} */
            const _state = {};
            Object.keys(action.payload).forEach(k => {
                if (k in state$$1)
                    _state[k] = action.payload[k];
            });
            return Object.assign({}, state$$1, _state);
        case CLOSE_SIDENAV:
            return Object.assign({}, state$$1, { showMainSidenav: false });
        case OPEN_SIDENAV:
            return Object.assign({}, state$$1, { showMainSidenav: true });
        case LayoutActionTypes.TITLE_CHANGED:
            return Object.assign({}, state$$1, { title: action.title });
        case LayoutActionTypes.CHANGE_LAYOUT:
            return Object.assign({}, state$$1, { layoutMode: action.name });
        case LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return Object.assign({}, state$$1, { mainSideNavMode: action.mode });
        case LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return Object.assign({}, state$$1, { showSecondSideNav: false });
        case LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return Object.assign({}, state$$1, { showSecondSideNav: true });
        case LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return Object.assign({}, state$$1, { secondSideNavMode: action.mode });
        case LayoutActionTypes.FULLSCREEN:
            return Object.assign({}, state$$1, { fullscreen: true });
        case LayoutActionTypes.EXIT_FULLSCREEN:
            return Object.assign({}, state$$1, { fullscreen: false });
        // case layout.LayoutActionTypes.TOGGLE_FULLSCREEN:
        // 	return {
        // 		...state,
        // 		fullscreen: state.fullscreen === true ? false : true
        // 	};
        default:
            return state$$1;
    }
}
/** @type {?} */
const getTitle = (state$$1) => state$$1.title;
/** @type {?} */
const getShowMainSidenav = (state$$1) => state$$1.showMainSidenav;
/** @type {?} */
const getMainSideNavMode = (state$$1) => state$$1.mainSideNavMode;
/** @type {?} */
const getLayoutMode = (state$$1) => state$$1.layoutMode;
/** @type {?} */
const getShowSecondSidebarStatus = (state$$1) => state$$1.showSecondSideNav;
/** @type {?} */
const getSecondSidebarMode = (state$$1) => state$$1.secondSideNavMode;
/** @type {?} */
const getFullscreenMode = (state$$1) => state$$1.fullscreen;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ToolbarActionTypes = {
    COMPORTABLE: "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT: "[Layout][TOOLBAR] COMPACT",
    SUMMARY: "[Layout][TOOLBAR] SUMMARY",
    ENABLE_COMFORTABLE_MODE: "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
    DISBALE_COMFORTABLE_MODE: "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
    VISIBLE: "[Layout][TOOLBAR] VISIBLE",
    INVISIBLE: "[Layout][TOOLBAR] INVISIBLE",
};
class ChangeToolbatToComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
}
class ChangeToolbatToCompactModeAction {
    constructor() {
        this.type = ToolbarActionTypes.COMPACT;
    }
}
class ChangeToolbatToSummaryModeAction {
    constructor() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
}
class EnableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
}
class DisableComfortableModeAction {
    constructor() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
}
class VisibleToolbarAction {
    constructor() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
}
class InvisibleToolbarAction {
    constructor() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$1 = {
    mode: "compact",
    enableComfortableMode: false,
    comfortableModeHaveBeenDone: false,
    visibility: true
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer$1(state$$1 = initialState$1, action) {
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            if (!state$$1.visibility)
                return Object.assign({}, state$$1, { mode: "hide" });
            return Object.assign({}, state$$1, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            if (!state$$1.visibility)
                return Object.assign({}, state$$1, { mode: "hide" });
            return Object.assign({}, state$$1, { mode: state$$1.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            if (!state$$1.visibility)
                return Object.assign({}, state$$1, { mode: "hide" });
            return Object.assign({}, state$$1, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            if (!state$$1.visibility)
                return Object.assign({}, state$$1, { mode: "hide" });
            return Object.assign({}, state$$1, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            if (!state$$1.visibility)
                return Object.assign({}, state$$1, { mode: "hide" });
            return Object.assign({}, state$$1, { mode: "compact", enableComfortableMode: false });
        case ToolbarActionTypes.VISIBLE:
            return Object.assign({}, state$$1, { mode: "compact", visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return Object.assign({}, state$$1, { mode: "hide", visibility: false });
        default:
            return state$$1;
    }
}
/** @type {?} */
const getToolbarMode = (state$$1) => state$$1.mode;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LayoutReducers = {
    layout: Reducer,
    toolbar: Reducer$1
};
/** @type {?} */
const selectLayoutState = createFeatureSelector("layout");
/** @type {?} */
const getLayout = createSelector(selectLayoutState, (state$$1) => state$$1.layout);
/** @type {?} */
const getTitle$1 = createSelector(getLayout, getTitle);
/** @type {?} */
const getShowMainSidenav$1 = createSelector(getLayout, getShowMainSidenav);
/** @type {?} */
const getMainSideNavMode$1 = createSelector(getLayout, getMainSideNavMode);
/** @type {?} */
const getLayoutMode$1 = createSelector(getLayout, getLayoutMode);
/** @type {?} */
const getShowSecondSidebarStatus$1 = createSelector(getLayout, getShowSecondSidebarStatus);
/** @type {?} */
const getSecondSidebarMode$1 = createSelector(getLayout, getSecondSidebarMode);
/** @type {?} */
const getFullscreenMode$1 = createSelector(getLayout, getFullscreenMode);
/** @type {?} */
const getLayoutToolbar = createSelector(selectLayoutState, (state$$1) => state$$1.toolbar);
/** @type {?} */
const getLayoutToolbarMode = createSelector(getLayoutToolbar, getToolbarMode);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const menu_item_authorization_operator = function ([routes, user]) {
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter(route => user.Roles.some(userRole => route.roles.indexOf(userRole) > -1));
    }
};
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
    theme: "theme_B",
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    // | "push" | "side",
    mainSideNavMode: "over",
    // | "push" | "side",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "with-margin",
    // | "without-margin" | "default",
    title: "",
    menuItems: [],
    signoutAction: /** @type {?} */ ({}),
    menu_item_authorization_operator
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store
            .select(getConfigs)
            .map(configs => configs.find(config => config.Name == "layout_config"))
            .subscribe(config => {
            if (!config)
                return;
            this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            this._config = Object.assign({}, this._config, config.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
LayoutConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
LayoutConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ LayoutConfigurationService.ngInjectableDef = defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: LayoutConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MainMenuComponent {
    /**
     * @param {?} store
     * @param {?} signinService
     * @param {?} configurationService
     */
    constructor(store, signinService, configurationService) {
        this.store = store;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.closeSidebar = new EventEmitter();
        this.user$ = this.store.select(getAccountInfo);
        this._observe_on_layout_config_and_filter_routes();
    }
    /**
     * @return {?}
     */
    _observe_on_layout_config_and_filter_routes() {
        this.routes$ = this.configurationService.config$.pipe(map(config => config.menuItems), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    }
}
MainMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-layout-main-menu",
                template: `<mat-list class="main-menu-container">
  <div *ngIf="authenticated | async">
    <a *ngFor="let item of routes$ | async" (click)="closeSidebar.emit()" routerLinkActive="active" mat-list-item [routerLink]="[item.route]">
      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>
      <span mdLine>{{item.title}}</span>
    </a>
  </div>
</mat-list>`,
                styles: [`.active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}`],
                animations: [
                    trigger("childMenu", [
                        state("inactive", style({
                            // transform: 'scale(1)',
                            height: "0px",
                            opacity: "0"
                        })),
                        state("active", style({
                            // transform: 'scale(1.1)',
                            height: "48px",
                            opacity: "1"
                        })),
                        transition("inactive => active", animate("100ms ease-in")),
                        transition("active => inactive", animate("100ms ease-out"))
                    ]),
                    trigger("menuItem", [
                        state("inactive", style({
                            height: "48px"
                        })),
                        state("active", style({
                            height: "100px"
                        })),
                        transition("inactive => active", animate("100ms ease-in")),
                        transition("active => inactive", animate("100ms ease-out"))
                    ])
                ]
            },] },
];
/** @nocollapse */
MainMenuComponent.ctorParameters = () => [
    { type: Store },
    { type: SigninService },
    { type: LayoutConfigurationService }
];
MainMenuComponent.propDecorators = {
    closeSidebar: [{ type: Output }],
    authenticated: [{ type: Input }],
    customerMobileInput: [{ type: ViewChild, args: ["customerMobileInput",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SearchBoxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-search-box',
                template: `<div class="search-box">
  <!--<td-search-box class="search-box-container" backIcon="arrow_back" placeholder="جستجو" [showUnderline]="false" [debounce]="500" [alwaysVisible]="false"
                 (searchDebounce)="searchInputTerm = $event" (search)="searchInputTerm = $event" (clear)="searchInputTerm = ''">
  </td-search-box>-->
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LogoContainerComponent {
    /**
     * @param {?} sdf
     */
    constructor(sdf) {
        this.sdf = sdf;
    }
}
LogoContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "app-logo-container",
                template: `
<!--<img class="logoTypeAnimation" src='../../../assets/images/logo-type.png' />-->`,
                styles: [`.logoAnimation{height:36px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}`]
            },] },
];
/** @nocollapse */
LogoContainerComponent.ctorParameters = () => [
    { type: LayoutConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToolbarMenuComponent {
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
        this.toolbarAnimationState = "compact";
        this.menuAnimationState = "compact";
        this.logoAnimationState = "compact";
        this.titleAnimationState = "compact";
        this.anchorsMode = false;
        this.user$ = this.store.select(getAccountInfo);
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(config => (this.config = config));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe(state$$1 => {
            setTimeout(() => (this.menuAnimationState = state$$1), 1);
            setTimeout(() => (this.logoAnimationState = state$$1), 1);
            setTimeout(() => (this.titleAnimationState = state$$1), 1);
            setTimeout(() => (this.toolbarAnimationState = state$$1), 1);
        });
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe(() => {
            /** @type {?} */
            const scrolledAmount = this.document.body.scrollTop;
            /** @type {?} */
            const scrollToTop = scrolledAmount - this.lastScroll < 0 && this.document.body.scrollHeight - scrolledAmount < 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            this.lastScroll = this.document.body.scrollTop;
            if (!this.config.visibility)
                return;
            if (scrolledAmount == 0) {
                if (this.config.mode == "comfortable")
                    return;
                this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 200 || scrollToTop) {
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
        this.store.dispatch(new DoSignoutAction$1());
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
        /** @type {?} */
        let action;
        this.showSecondSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        /** @type {?} */
        let action;
        this.showMainSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    _observe_on_layout_config_and_filter_routes() {
        this.menuItems$ = this.configurationService.config$.pipe(map(config => config.menuItems), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    }
}
ToolbarMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-toolbar",
                template: `<mat-toolbar [@toolbarAnimation]="toolbarAnimationState">
  <mat-toolbar-row id="firstToolbar">
    <!-- <div id="background"></div> -->
    <img [@logoAnimation]="logoAnimationState" id="logo" routerLink='/' src='assets/images/shatel-logo.png' />

    <button type="button" *ngIf='showSidebarMenu && false' (click)="toggleMainSidebar()" mat-icon-button fxFlex="nogrow" fxLayoutAlign="center center">
      <mat-icon>menu</mat-icon>
    </button>
    <span [@titleAnimation]="titleAnimationState" id='app-name'>
      {{app_config?.Config.AppTitle}}
    </span>
    <app-title fxFlex fxLayoutAlign="start center"></app-title>
    <app-search-box fxFlex fxLayoutAlign="end center"></app-search-box>


    <button *ngIf="!displayName" mat-button routerLink="auth/signin">
      ورود
    </button>
    <button *ngIf="!displayName" mat-button routerLink="auth/signup">
      ثبت نام
    </button>
    <button *ngIf="displayName" mat-icon-button [matMenuTriggerFor]="toolbarMenu1">
      <mat-icon>account_circle</mat-icon>
    </button>
    <mat-menu #toolbarMenu1 class="rtl-dir">
      <div id="acccountName">
        {{displayName}}
      </div>
      <button routerLink='/user/panel' mat-menu-item class="rtl-dir">
        <mat-icon>fingerprint</mat-icon>
        <span>
          مدیریت کاربری
        </span>
      </button>
      <button (click)='signout()' mat-menu-item class="rtl-dir">
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
    <div id="secondToolbar" [@menuAnimation]="menuAnimationState">
      <router-outlet name="ngs-layout-before-toolbar-menu"></router-outlet>
      <button mat-button *ngFor="let menu of menuItems$ | async" routerLinkActive="active" [routerLink]="[menu.route]">
        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->
        <span>{{menu.title}}</span>
      </button>
      <router-outlet name="ngs-layout-after-toolbar-menu"></router-outlet>
    </div>
  </mat-toolbar-row>
</mat-toolbar>`,
                styles: [`mat-toolbar{background-color:#fff!important;top:0;box-shadow:rgba(0,0,0,.5) 1px 1px 3px!important}#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important}#secondToolbar.active{opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}`],
                animations: [
                    trigger("logoAnimation", [
                        state("comfortable", style({
                            width: "90px",
                            height: "90px",
                            top: "50px",
                            right: "calc(50% - 50px)"
                        })),
                        state("compact", style({
                            width: "36px",
                            height: "36px",
                            top: "13px",
                            right: "13px"
                        })),
                        state("summary", style({
                            width: "36px",
                            height: "36px",
                            top: "76px",
                            right: "10px"
                        })),
                        state("hide", style({
                            width: "0",
                            height: "0",
                            top: "76px",
                            right: "10px"
                        })),
                        transition("comfortable => compact", animate("800ms ease-out")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-out"))
                    ]),
                    trigger("menuAnimation", [
                        state("comfortable", style({
                            right: "50%",
                            transform: "translateX(50%)",
                            bottom: "25px"
                        })),
                        state("compact", style({
                            right: "45px",
                            transform: "translateX(0)",
                            bottom: "13px"
                        })),
                        state("summary", style({
                            right: "75px",
                            transform: "translateX(0)",
                            bottom: "14px"
                        })),
                        state("hide", style({
                            right: "75px",
                            transform: "translateX(0)",
                            bottom: "14px"
                        })),
                        transition("comfortable => compact", animate("800ms ease-in")),
                        transition("comfortable => hide", animate("400ms ease-in")),
                        transition("hide => comfortable", animate("600ms ease-in")),
                        transition("compact => hide", animate("400ms ease-in")),
                        transition("hide => compact", animate("600ms ease-in")),
                        transition("summary => hide", animate("400ms ease-in")),
                        transition("hide => summary", animate("600ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ]),
                    trigger("titleAnimation", [
                        state("comfortable", style({
                            "margin-right": "0px",
                            "font-size": "larger",
                            "font-weight": "bolder",
                            transform: "translateX(50%)",
                            right: "calc(50%)",
                            bottom: "75px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("compact", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            transform: "translateX(0)",
                            right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("summary", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            transform: "translateX(0)",
                            right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("hide", style({
                            "margin-right": "0px",
                            "font-size": "1px",
                            "font-weight": "bolder",
                            transform: "translateX(0)",
                            right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        transition("comfortable => compact", animate("850ms ease-out")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ]),
                    trigger("toolbarAnimation", [
                        state("comfortable", style({
                            // backgroundColor: "rgba(119,181,63,1)",
                            backgroundColor: "rgba(256,256,256,1)",
                            color: "rgba(30,30,30,1)",
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
                        state("hide", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "-128px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        transition("comfortable => compact", animate("800ms ease-in")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
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
    displayName: [{ type: Input }],
    onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: "app-footer",
                template: `<div fxLayoutAlign="center center" class="footer-text">
    {{app_config?.Config.FooterCopyright}}
</div>`,
                styles: [`:host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}`]
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];
FooterComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TitleComponent {
    /**
     * @param {?} store
     * @param {?} router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.mapper = [];
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
        // });
        this.title$ = this.store.select(getTitle$1);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var title = "";
                this.mapper.forEach(mapper => {
                    /** @type {?} */
                    let res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                this.store.dispatch(new TitleChangedAction("" + title || ""));
            }
        });
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: "app-title",
                template: `<div id="title">
    {{title$ | async}}
</div>`,
                styles: [`#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}`]
            },] },
];
/** @nocollapse */
TitleComponent.ctorParameters = () => [
    { type: Store },
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgsLayoutMainComponent {
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
        this.showSidebarMenu = new BehaviorSubject$1(true);
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
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode$1);
        this.mode$ = this.isFullscreen$.map(mode => (mode ? "invisible" : "visible"));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LayoutEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} store
     */
    constructor(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(() => new DoSignoutAction()));
        this.fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(map(() => new InvisibleToolbarAction()));
        this.exit_fullscreen$ = this.actions$
            .ofType(LayoutActionTypes.EXIT_FULLSCREEN)
            .pipe(map(() => new VisibleToolbarAction()));
        this.fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(withLatestFrom(this.store.select(getFullscreenMode$1)), map(([action, toolbarMode]) => {
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
}
LayoutEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LayoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: Store }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LayoutEffects.prototype, "DoSignout$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LayoutEffects.prototype, "fullscreen$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LayoutEffects.prototype, "exit_fullscreen$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LayoutEffects.prototype, "fullscren_toolbar$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToolbarMenuThemeBComponent {
    /**
     * @param {?} document
     * @param {?} _location
     * @param {?} store
     * @param {?} translateService
     * @param {?} configurationService
     */
    constructor(document, _location, store, translateService, configurationService) {
        this.document = document;
        this._location = _location;
        this.store = store;
        this.translateService = translateService;
        this.configurationService = configurationService;
        this.toolbarAnimationState = "compact";
        this.menuAnimationState = "compact";
        this.logoAnimationState = "compact";
        this.titleAnimationState = "compact";
        this.anchorsMode = false;
        this.user$ = this.store.select(getAccountInfo);
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(config => (this.config = config));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe(state$$1 => {
            setTimeout(() => (this.menuAnimationState = state$$1), 1);
            setTimeout(() => (this.logoAnimationState = state$$1), 1);
            setTimeout(() => (this.titleAnimationState = state$$1), 1);
            setTimeout(() => (this.toolbarAnimationState = state$$1), 1);
        });
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe(() => {
            /** @type {?} */
            let scrolledAmount = this.document.body.scrollTop;
            /** @type {?} */
            let scrollToTop = scrolledAmount - this.lastScroll < 0 &&
                this.document.body.scrollHeight - document.body.offsetHeight - scrolledAmount > 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            this.lastScroll = scrolledAmount;
            if (!this.config.visibility)
                return;
            if (scrolledAmount == 0) {
                if (this.config.mode == "comfortable")
                    return;
                this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 150 || scrollToTop) {
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
        this.store.dispatch(new DoSignoutAction$1());
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
        /** @type {?} */
        let action;
        this.showSecondSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        /** @type {?} */
        let action;
        this.showMainSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    _observe_on_layout_config_and_filter_routes() {
        this.menuItems$ = this.configurationService.config$.pipe(map(config => config.menuItems), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    }
}
ToolbarMenuThemeBComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-toolbar-b",
                template: `<mat-toolbar dir="rtl" color="primary" [@toolbarAnimation]="toolbarAnimationState">
  <mat-toolbar-row dir="rtl" id="firstToolbar">
    <!-- <div id="background"></div> -->
    <img [@logoAnimation]="logoAnimationState" id="logo" routerLink='/' src='assets/logos/logo-type.png' />

    <button type="button" *ngIf='showSidebarMenu && false' (click)="toggleMainSidebar()" mat-icon-button fxFlex="nogrow"
      fxLayoutAlign="center center">
      <mat-icon>menu</mat-icon>
    </button>
    <span [@titleAnimation]="titleAnimationState" id='app-name'>
      {{app_config?.Config.AppTitle}}
    </span>
    <app-title fxFlex fxLayoutAlign="start center"></app-title>
    <app-search-box fxFlex fxLayoutAlign="end center"></app-search-box>


    <button *ngIf="!displayName" mat-button routerLink="auth/signin">
      <span [translate]="'__signin'"></span>
    </button>
    <button translate *ngIf="!displayName" mat-button routerLink="auth/signup">
      {{'__signup' | translate}}
    </button>
    <button *ngIf="displayName" mat-icon-button [matMenuTriggerFor]="toolbarMenu1">
      <mat-icon>account_circle</mat-icon>
    </button>
    <mat-menu #toolbarMenu1 class="rtl-dir">
      <div id="acccountName">
        {{displayName}}
      </div>
      <button routerLink='/user/panel' mat-menu-item class="rtl-dir">
        <mat-icon>fingerprint</mat-icon>
        <span translate="__account_mangement">
        </span>
      </button>
      <button (click)='signout()' mat-menu-item class="rtl-dir">
        <mat-icon>exit_to_app</mat-icon>
        <span translate>__signout</span>
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
    <div id="secondToolbar" [@menuAnimation]="menuAnimationState">
      <router-outlet name="ngs-layout-before-toolbar-menu"></router-outlet>
      <button mat-button *ngFor="let menu of menuItems$ | async" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->
        <span>{{menu.title}}</span>
      </button>
      <router-outlet name="ngs-layout-after-toolbar-menu"></router-outlet>
    </div>
  </mat-toolbar-row>
</mat-toolbar>`,
                styles: [`#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}`],
                animations: [
                    trigger("logoAnimation", [
                        state("comfortable", style({
                            height: "48px",
                            top: "50px",
                            right: "calc(50% - 50px)"
                        })),
                        state("compact", style({
                            height: "36px",
                            top: "13px",
                            right: "13px"
                        })),
                        state("summary", style({
                            height: "36px",
                            top: "57px",
                            right: "10px"
                        })),
                        state("hide", style({
                            width: "0",
                            height: "0",
                            top: "57px",
                            right: "10px"
                        })),
                        transition("comfortable => compact", animate("800ms ease-out")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-out"))
                    ]),
                    trigger("menuAnimation", [
                        state("comfortable", style({
                            right: "50%",
                            transform: "translateX(50%)",
                            bottom: "0"
                        })),
                        state("compact", style({
                            right: "50%",
                            transform: "translateX(50%)",
                            bottom: "0"
                        })),
                        state("summary", style({
                            right: "165px",
                            transform: "translateX(0)",
                            bottom: "0"
                        })),
                        state("hide", style({
                            right: "165px",
                            transform: "translateX(0)",
                            bottom: "0"
                        })),
                        transition("comfortable => compact", animate("800ms ease-in-out")),
                        transition("comfortable => hide", animate("400ms ease-in-out")),
                        transition("hide => comfortable", animate("600ms ease-in-out")),
                        transition("compact => hide", animate("400ms ease-in-out")),
                        transition("hide => compact", animate("600ms ease-in-out")),
                        transition("summary => hide", animate("400ms ease-in-out")),
                        transition("hide => summary", animate("600ms ease-in-out")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in-out"))
                    ]),
                    trigger("titleAnimation", [
                        state("comfortable", style({
                            "margin-right": "0px",
                            "font-size": "larger",
                            "font-weight": "bolder",
                            transform: "translateX(50%)",
                            right: "calc(50%)",
                            bottom: "165px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("compact", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            right: "50%",
                            transform: "translateX(50%)",
                            bottom: "51px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("summary", style({
                            "margin-right": "0px",
                            "font-size": "16px",
                            "font-weight": "bolder",
                            transform: "translateX(50%)",
                            right: "50%",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        state("hide", style({
                            "margin-right": "0px",
                            "font-size": "1px",
                            "font-weight": "bolder",
                            // transform: "translateX(0)",
                            // right: "60px",
                            bottom: "79px",
                            position: "absolute",
                            padding: 0
                        })),
                        transition("comfortable => compact", animate("850ms ease-out")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ]),
                    trigger("toolbarAnimation", [
                        state("comfortable", style({
                            // backgroundColor: "rgba(119,181,63,1)",
                            backgroundColor: "rgba(256,256,256,1)",
                            color: "rgba(30,30,30,1)",
                            height: "33vh",
                            top: "0",
                        })),
                        state("compact", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "0",
                        })),
                        state("summary", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-50px",
                        })),
                        state("hide", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-100px",
                        })),
                        transition("comfortable => compact", animate("800ms ease-in")),
                        transition("comfortable => hide", animate("800ms ease-in")),
                        transition("hide => comfortable", animate("800ms ease-in")),
                        transition("compact => hide", animate("800ms ease-in")),
                        transition("hide => compact", animate("800ms ease-in")),
                        transition("summary => hide", animate("800ms ease-in")),
                        transition("hide => summary", animate("800ms ease-in")),
                        // transition("comfortable => summary", animate("800ms ease-in")),
                        transition("summary => compact", animate("400ms ease-out")),
                        transition("summary => comfortable", animate("800ms ease-out")),
                        transition("compact => comfortable", animate("800ms ease-out")),
                        transition("compact => summary", animate("400ms ease-in"))
                    ])
                ]
            },] },
];
/** @nocollapse */
ToolbarMenuThemeBComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Location },
    { type: Store },
    { type: TranslateService },
    { type: LayoutConfigurationService }
];
ToolbarMenuThemeBComponent.propDecorators = {
    showSidebarMenu: [{ type: Input }],
    app_config: [{ type: Input, args: ["app-config",] }],
    user: [{ type: Input }],
    displayName: [{ type: Input }],
    onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgsLayoutModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [
                { provide: LOCALE_ID, useValue: "en en-US" },
                { provide: MODULE_CONFIG_TOKEN, useValue: config }
            ]
        };
    }
}
NgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BrowserModule,
                    RouterModule,
                    FormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    RouterModule,
                    TranslateModule,
                    NgsConfigModule,
                    RuleModule
                ],
                declarations: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    ToolbarMenuThemeBComponent,
                    FooterComponent,
                    TitleComponent,
                    NgsLayoutMainComponent
                ],
                exports: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    ToolbarMenuThemeBComponent,
                    FooterComponent,
                    TitleComponent,
                    NgsLayoutMainComponent
                ]
            },] },
];
class RootNgsLayoutModule {
}
RootNgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsLayoutModule,
                    StoreModule.forFeature("layout", LayoutReducers),
                    EffectsModule.forFeature([LayoutEffects])
                ],
                exports: [NgsLayoutModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var LayoutOutlets = {
    // TODO: remove in next major version : 6.0.45
    ngs_layout_toolbar_menu: "ngs-layout-after-toolbar-menu",
    ngs_layout_after_toolbar_menu: "ngs-layout-after-toolbar-menu",
    ngs_layout_before_toolbar_menu: "ngs-layout-before-toolbar-menu",
    footer_B: "footer_B",
    footer_A: "footer_A",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, VisibleToolbarAction, FullscreenAction, ExitFullscreenAction, InvisibleToolbarAction, ToggleFullscreenAction, NgsLayoutMainComponent, LayoutOutlets, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵh, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, SearchBoxComponent as ɵd, TitleComponent as ɵi, ToolbarMenuThemeBComponent as ɵg, ToolbarMenuComponent as ɵf, LayoutEffects as ɵn, LayoutReducers as ɵj, Reducer as ɵl, Reducer$1 as ɵm, LayoutConfigurationService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbW9kZWxzL2xheW91dC1vdXRsZXRzLmVudW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIixcclxuXHRGVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBGVUxMU0NSRUVOXCIsXHJcblx0RVhJVF9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBFWElUX0ZVTExTQ1JFRU5cIixcclxuXHRUT0dHTEVfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gVE9HR0xFX0ZVTExTQ1JFRU5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEV4aXRGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBFeGl0RnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGVcclxuXHR8IFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0Y29uc3QgX3N0YXRlID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdGlmIChrIGluIHN0YXRlKSBfc3RhdGVba10gPSBhY3Rpb24ucGF5bG9hZFtrXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uX3N0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Ly8gY2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU46XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0ZnVsbHNjcmVlbjogc3RhdGUuZnVsbHNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmZ1bGxzY3JlZW47XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbj86IEFjdGlvbjtcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcj86IChbcm91dGVzLCB1c2VyXTogW2FueSwgYW55XSkgPT4gYW55W107XHJcblx0dGhlbWU/OiBzdHJpbmc7IC8vIFwidGhlbWVfQVwiIHwgXCJ0aGVtZV9CXCI7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yID0gZnVuY3Rpb24gKFtyb3V0ZXMsIHVzZXJdKSB7XHJcblx0aWYgKCF1c2VyLlJvbGVzKSByZXR1cm4gW107XHJcblx0aWYgKHVzZXIuUm9sZXMubGVuZ3RoID09IDApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvdXRlcy5maWx0ZXIocm91dGUgPT4gdXNlci5Sb2xlcy5zb21lKHVzZXJSb2xlID0+IHJvdXRlLnJvbGVzLmluZGV4T2YodXNlclJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsID0ge1xyXG5cdHRoZW1lOiBcInRoZW1lX0JcIixcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy8gfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vIHwgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJ3aXRoLW1hcmdpblwiLCAvLyB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW1xyXG5cdF0sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4oXCJMYXlvdXRNb2R1bGVDb25maWdNb2RlbFwiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDb25maWdzIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0Ly8gcHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRDb25maWdNb2RlbDtcclxuXHRwcml2YXRlIF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRDb25maWdzKVxyXG5cdFx0XHQubWFwKGNvbmZpZ3MgPT4gY29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImxheW91dF9jb25maWdcIikpXHJcblx0XHRcdC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbihjb25maWcuQ29uZmlnKSk7XHJcblx0XHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWcuQ29uZmlnKTtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtbGF5b3V0LW1haW4tbWVudVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1saXN0IGNsYXNzPVwibWFpbi1tZW51LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJhdXRoZW50aWNhdGVkIHwgYXN5bmNcIj5cclxuICAgIDxhICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdXRlcyQgfCBhc3luY1wiIChjbGljayk9XCJjbG9zZVNpZGViYXIuZW1pdCgpXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIG1hdC1saXN0LWl0ZW0gW3JvdXRlckxpbmtdPVwiW2l0ZW0ucm91dGVdXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7aXRlbS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8c3BhbiBtZExpbmU+e3tpdGVtLnRpdGxlfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWxpc3Q+YCxcclxuXHRzdHlsZXM6IFtgLmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0ubWF0LWxpc3QtaXRlbS5hY3RpdmUgbWF0LWljb257Y29sb3I6IzAwNzJhZX1hLm1hdC1saXN0LWl0ZW0uY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9I2NsZWFyVXNlck1lbnVJdGVte3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTNweDt0b3A6MTNweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwiY2hpbGRNZW51XCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwcHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjFcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVJdGVtXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIGNsb3NlU2lkZWJhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBhdXRoZW50aWNhdGVkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Y3VzdG9tZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdHJvdXRlcyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0QFZpZXdDaGlsZChcImN1c3RvbWVyTW9iaWxlSW5wdXRcIikgY3VzdG9tZXJNb2JpbGVJbnB1dDogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMucm91dGVzJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGBcclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5sb2dvQW5pbWF0aW9ue2hlaWdodDozNnB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtdG9vbGJhclwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93IGlkPVwiZmlyc3RUb29sYmFyXCI+XHJcbiAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPSdhc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWdudXBcIj5cclxuICAgICAgw5jCq8OYwqjDmMKqIMOZwobDmMKnw5nChVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgPGRpdiBpZD1cImFjY2NvdW50TmFtZVwiPlxyXG4gICAgICAgIHt7ZGlzcGxheU5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+w5jCrsOYwrHDmcKIw5jCrDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTZWNvbmRTaWRlYmFyKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9J2dvYmFjaygpJz5cclxuICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kVG9vbGJhclwiIFtAbWVudUFuaW1hdGlvbl09XCJtZW51QW5pbWF0aW9uU3RhdGVcIj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgICA8IS0tIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7bWVudS5pY29ufX08L21hdC1pY29uPiAtLT5cclxuICAgICAgICA8c3Bhbj57e21lbnUudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWFmdGVyLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYG1hdC10b29sYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZiFpbXBvcnRhbnQ7dG9wOjA7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC41KSAxcHggMXB4IDNweCFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXJ7dHJhbnNpdGlvbjpub25lO3Bvc2l0aW9uOmFic29sdXRlfSNzZWNvbmRUb29sYmFyIGJ1dHRvbntvcGFjaXR5Oi42O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTouNjVlbSFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXIuYWN0aXZle29wYWNpdHk6MX0jbG9nb3t0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50fWJ1dHRvbi5ydGwtZGlye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fSNhY2Njb3VudE5hbWV7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6MjBweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkZXJ9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMjVweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNDVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE0cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidGl0bGVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwibGFyZ2VyXCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMXB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjg1MG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRvb2xiYXJBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTE5LDE4MSw2MywxKVwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBcInJnYmEoMzAsMzAsMzAsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzM3ZoXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEyOHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTY0cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItMTI4cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51QW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdGxvZ29BbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0dGl0bGVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUl0ZW1zJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0bGFzdFNjcm9sbDogbnVtYmVyO1xyXG5cdGNvbmZpZzogdG9vbGJhclN0YXRlO1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8dG9vbGJhclN0YXRlPjtcclxuXHRhbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyKTtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubWVudUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2dvQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cclxuXHRcdGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmJvZHksIFwic2Nyb2xsXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPCAzMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMjAwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIlwiICsgdGl0bGUgfHwgXCJcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3dQdXNoIH0gZnJvbSBcIkBhbmd1bGFyL3NlcnZpY2Utd29ya2VyXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdFNpZGVuYXYsIE1hdFNpZGVuYXZDb250YWluZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSwgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRGZWF0dXJlU3RhdGUsXHJcblx0Z2V0U2hvd01haW5TaWRlbmF2LFxyXG5cdGdldE1haW5TaWRlTmF2TW9kZSxcclxuXHRnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyxcclxuXHRnZXRTZWNvbmRTaWRlYmFyTW9kZSxcclxuXHRnZXRMYXlvdXRNb2RlLFxyXG5cdGdldExheW91dFRvb2xiYXJNb2RlLFxyXG5cdGdldEZ1bGxzY3JlZW5Nb2RlXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0Q2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUsXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2xheW91dFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LW1haW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI21haW5TaWRlTmF2IFtuZ0NsYXNzXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCIgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsc2NyZWVuJCB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyICAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9BJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIDxsYXlvdXQtdG9vbGJhci1iICpuZ0lmPVwidGhlbWUgPT0gJ3RoZW1lX0InXCIgW3VzZXJdPVwidXNlciQgfCBhc3luY1wiIFtkaXNwbGF5TmFtZV09XCJkaXNwbGF5TmFtZSQgfCBhc3luY1wiIFtzaG93U2lkZWJhck1lbnVdPSdzaG93U2lkZWJhck1lbnUgfCBhc3luYycgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvbGF5b3V0LXRvb2xiYXItYj5cclxuICBcclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGlkPVwibGF5b3V0LXNpZG5hdlwiIFtjbGFzc05hbWVdPVwibGF5b3V0TW9kZSB8IGFzeW5jXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3RlciBbQG1vZGVdPVwibW9kZSQgfCBhc3luY1wiIHJ1bGVBbmNob3I9XCJsYXlvdXRfZm9vdGVyXCI+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0FcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0JcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8YXBwLWZvb3RlciBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9hcHAtZm9vdGVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjcHVyY2hhc2UtZmFiLWJ1dHRvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MjNweDtsZWZ0OjMxcHh9bWQtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0ud2l0aC1tYXJnaW4gI2FwcC1tYWluLWNvbnRhaW5lcnttYXJnaW4tdG9wOjI1cHg7cGFkZGluZy1yaWdodDoyNXB4O3BhZGRpbmctbGVmdDoyNXB4fS5zZWNvbmRfc2lkZWJhcnt3aWR0aDozODBweH0ubW9yZS1kZXRhaWx7bWFyZ2luOjhweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxMHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk2JTtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246LjNzfS5tb3JlLWRldGFpbDpob3ZlcntiYWNrZ3JvdW5kOiNlZWV9Zm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7bWFyZ2luLXRvcDoyNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dGhlbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly8gdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLl9zZXRfaTE4bl9yZXNvdXJjZSgpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdHRoaXMudGhlbWUgPSBjb25maWcudGhlbWU7XHJcblx0XHRcdHRoaXMudGhlbWVfQSA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0FcIjtcclxuXHRcdFx0dGhpcy50aGVtZV9CID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQlwiO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRjb25zdCBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X3NldF9pMThuX3Jlc291cmNlKCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldFRyYW5zbGF0aW9uKFwiZW5cIiwge1xyXG5cdFx0XHRfX3NpZ25pbjogXCJTaWduaW5cIixcclxuXHRcdFx0X19zaWdudXA6IFwiU2lnbnVwXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwiQWNjb3VudFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwiU2lnbm91dFwiXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImZhXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwiw5nCiMOYwrHDmcKIw5jCr1wiLFxyXG5cdFx0XHRfX3NpZ251cDogXCLDmMKrw5jCqMOYwqogw5nChsOYwqfDmcKFXCIsXHJcblx0XHRcdF9fYWNjb3VudF9tYW5nZW1lbnQ6IFwiw5nChcOYwq/DmMKxw5vCjMOYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMXCIsXHJcblx0XHRcdF9fc2lnbm91dDogXCLDmMKuw5jCscOZwojDmMKsXCJcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLnBpcGUobWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKS5waXBlKFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpKSxcclxuXHRcdG1hcCgoWyBhY3Rpb24sIHRvb2xiYXJNb2RlIF0pID0+IHtcclxuXHRcdFx0aWYgKHRvb2xiYXJNb2RlKSByZXR1cm4gbmV3IEV4aXRGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIG5ldyBGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGZyb20gfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21cIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21FdmVudFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC10b29sYmFyLWJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBkaXI9XCJydGxcIiBjb2xvcj1cInByaW1hcnlcIiBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlXCI+XHJcbiAgPG1hdC10b29sYmFyLXJvdyBkaXI9XCJydGxcIiBpZD1cImZpcnN0VG9vbGJhclwiPlxyXG4gICAgPCEtLSA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PiAtLT5cclxuICAgIDxpbWcgW0Bsb2dvQW5pbWF0aW9uXT1cImxvZ29BbmltYXRpb25TdGF0ZVwiIGlkPVwibG9nb1wiIHJvdXRlckxpbms9Jy8nIHNyYz0nYXNzZXRzL2xvZ29zL2xvZ28tdHlwZS5wbmcnIC8+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9J3Nob3dTaWRlYmFyTWVudSAmJiBmYWxzZScgKGNsaWNrKT1cInRvZ2dsZU1haW5TaWRlYmFyKClcIiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCJcclxuICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBbQHRpdGxlQW5pbWF0aW9uXT1cInRpdGxlQW5pbWF0aW9uU3RhdGVcIiBpZD0nYXBwLW5hbWUnPlxyXG4gICAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5BcHBUaXRsZX19XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YXBwLXRpdGxlIGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+PC9hcHAtdGl0bGU+XHJcbiAgICA8YXBwLXNlYXJjaC1ib3ggZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCI+PC9hcHAtc2VhcmNoLWJveD5cclxuXHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbmluXCI+XHJcbiAgICAgIDxzcGFuIFt0cmFuc2xhdGVdPVwiJ19fc2lnbmluJ1wiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiB0cmFuc2xhdGUgKm5nSWY9XCIhZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCJhdXRoL3NpZ251cFwiPlxyXG4gICAgICB7eydfX3NpZ251cCcgfCB0cmFuc2xhdGV9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgPGRpdiBpZD1cImFjY2NvdW50TmFtZVwiPlxyXG4gICAgICAgIHt7ZGlzcGxheU5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuIHRyYW5zbGF0ZT1cIl9fYWNjb3VudF9tYW5nZW1lbnRcIj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuIHRyYW5zbGF0ZT5fX3NpZ25vdXQ8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGRpdiBpZD1cInNlY29uZFRvb2xiYXJcIiBbQG1lbnVBbmltYXRpb25dPVwibWVudUFuaW1hdGlvblN0YXRlXCI+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWJlZm9yZS10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51SXRlbXMkIHwgYXN5bmNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cIntleGFjdDp0cnVlfVwiPlxyXG4gICAgICAgIDwhLS0gPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3ttZW51Lmljb259fTwvbWF0LWljb24+IC0tPlxyXG4gICAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYWZ0ZXItdG9vbGJhci1tZW51XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwvbWF0LXRvb2xiYXI+YCxcclxuXHRzdHlsZXM6IFtgI3NlY29uZFRvb2xiYXJ7dHJhbnNpdGlvbjpub25lO3Bvc2l0aW9uOmFic29sdXRlfSNzZWNvbmRUb29sYmFyIGJ1dHRvbntvcGFjaXR5Oi42O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTouNjVlbSFpbXBvcnRhbnQ7aGVpZ2h0OjUwcHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXIgYnV0dG9uLmFjdGl2ZXtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmY3NDAwO29wYWNpdHk6MX0jbG9nb3t0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50fWJ1dHRvbi5ydGwtZGlye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fSNhY2Njb3VudE5hbWV7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6MjBweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkZXJ9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNTdweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1N3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTY1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTY1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE2NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjUxcHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHQvLyByaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdC8vIGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNTBweFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMDBweFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudVRoZW1lQkNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSBzY3JvbGxlZEFtb3VudCA+IDMwMDtcclxuXHRcdFx0Ly8gbGV0IHNjcm9sbFRvVG9wID0gc2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGwgPSBzY3JvbGxlZEFtb3VudDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMTUwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBMT0NBTEVfSUQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOZ3NMYXlvdXRNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS10aGVtZS1iL3Rvb2xiYXItbWVudS10aGVtZS1iXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0VHJhbnNsYXRlTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0UnVsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHROZ3NMYXlvdXRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHROZ3NMYXlvdXRNYWluQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NMYXlvdXRNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogXCJlbiBlbi1VU1wiIH0sXHJcblx0XHRcdFx0eyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiIsImV4cG9ydCBlbnVtIExheW91dE91dGxldHMge1xyXG5cdC8vIFRPRE86IHJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24gOiA2LjAuNDVcclxuXHRuZ3NfbGF5b3V0X3Rvb2xiYXJfbWVudSA9IFwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIixcclxuXHRuZ3NfbGF5b3V0X2FmdGVyX3Rvb2xiYXJfbWVudSA9IFwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIixcclxuXHRuZ3NfbGF5b3V0X2JlZm9yZV90b29sYmFyX21lbnUgPSBcIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiLFxyXG5cdGZvb3Rlcl9CID0gXCJmb290ZXJfQlwiLFxyXG5cdGZvb3Rlcl9BID0gXCJmb290ZXJfQVwiXHJcbn1cclxuIl0sIm5hbWVzIjpbIkRvU2lnbm91dEFjdGlvbiIsInN0YXRlIiwibGF5b3V0LkxheW91dEFjdGlvblR5cGVzIiwibGF5b3V0LkNMT1NFX1NJREVOQVYiLCJsYXlvdXQuT1BFTl9TSURFTkFWIiwiaW5pdGlhbFN0YXRlIiwiUmVkdWNlciIsImxheW91dC5SZWR1Y2VyIiwiZnJvbVRvb2xiYXIuUmVkdWNlciIsImdldFRpdGxlIiwibGF5b3V0LmdldFRpdGxlIiwiZ2V0U2hvd01haW5TaWRlbmF2IiwibGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImdldE1haW5TaWRlTmF2TW9kZSIsImxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUiLCJnZXRMYXlvdXRNb2RlIiwibGF5b3V0LmdldExheW91dE1vZGUiLCJnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImdldFNlY29uZFNpZGViYXJNb2RlIiwibGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlIiwiZ2V0RnVsbHNjcmVlbk1vZGUiLCJsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUiLCJmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSIsImZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRl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
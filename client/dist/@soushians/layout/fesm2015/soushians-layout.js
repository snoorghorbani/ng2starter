import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostBinding, HostListener, NgModule, LOCALE_ID, defineInjectable, inject } from '@angular/core';
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
const LayoutActionTypes = {
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
const ToolbarActionTypes = {
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
    menuItems: [
        {
            route: "/",
            icon: "multiline_chart",
            roles: ["Admin", "User"],
            title: "صفحه اصلی"
        },
        {
            route: "/configs",
            icon: "settings",
            roles: ["Admin"],
            title: "تنظیمات"
        },
        {
            route: "/source",
            icon: "device_hub",
            roles: ["Admin"],
            title: "آدرس سرویس ها"
        }
    ],
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
                this.store.dispatch(new TitleChangedAction("/ " + title || ""));
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
     * @param {?} userFacadeService
     */
    constructor(store, router, configService, userFacadeService) {
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.userFacadeService = userFacadeService;
        this.showSidebarMenu = new BehaviorSubject$1(true);
        this.width = 100;
        this.configService.config$.subscribe((config) => {
            debugger;
            this.theme = config.theme;
            this.theme_A = config.theme == "theme_A";
            this.theme_B = config.theme == "theme_B";
        });
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select((s) => (/** @type {?} */ (s)).user.user.data);
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode$1);
        this.mode$ = this.isFullscreen$.map((mode) => (mode ? "invisible" : "visible"));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
        this.router.events.filter((data) => data instanceof NavigationEnd).subscribe((event) => {
            /** @type {?} */
            const hideSituations = [
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


    <button *ngIf="!displayName" mat-button routerLink="auth/signin" i18n="@@signin">
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
                            right: "75px",
                            transform: "translateX(0)",
                            bottom: "0"
                        })),
                        state("hide", style({
                            right: "75px",
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
                            bottom: "75px",
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
                { provide: LOCALE_ID, useValue: 'en en-US' },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const LayoutOutlets = {
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

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, VisibleToolbarAction, FullscreenAction, ExitFullscreenAction, InvisibleToolbarAction, ToggleFullscreenAction, NgsLayoutMainComponent, LayoutOutlets, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵh, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, NgsLayoutMainComponent as ɵj, SearchBoxComponent as ɵd, TitleComponent as ɵi, ToolbarMenuThemeBComponent as ɵg, ToolbarMenuComponent as ɵf, LayoutEffects as ɵn, LayoutReducers as ɵk, Reducer as ɵl, Reducer$1 as ɵm, LayoutConfigurationService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbW9kZWxzL2xheW91dC1vdXRsZXRzLmVudW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIixcclxuXHRGVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBGVUxMU0NSRUVOXCIsXHJcblx0RVhJVF9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBFWElUX0ZVTExTQ1JFRU5cIixcclxuXHRUT0dHTEVfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gVE9HR0xFX0ZVTExTQ1JFRU5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEV4aXRGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBFeGl0RnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGVcclxuXHR8IFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0Y29uc3QgX3N0YXRlID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdGlmIChrIGluIHN0YXRlKSBfc3RhdGVba10gPSBhY3Rpb24ucGF5bG9hZFtrXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uX3N0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Ly8gY2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU46XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0ZnVsbHNjcmVlbjogc3RhdGUuZnVsbHNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmZ1bGxzY3JlZW47XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbj86IEFjdGlvbjtcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcj86IChbcm91dGVzLCB1c2VyXTogW2FueSwgYW55XSkgPT4gYW55W107XHJcblx0dGhlbWU/OiBzdHJpbmc7IC8vIFwidGhlbWVfQVwiIHwgXCJ0aGVtZV9CXCI7XHJcbn1cclxuXHJcbmNvbnN0IG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yID0gZnVuY3Rpb24gKFtyb3V0ZXMsIHVzZXJdKSB7XHJcblx0aWYgKCF1c2VyLlJvbGVzKSByZXR1cm4gW107XHJcblx0aWYgKHVzZXIuUm9sZXMubGVuZ3RoID09IDApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvdXRlcy5maWx0ZXIocm91dGUgPT4gdXNlci5Sb2xlcy5zb21lKHVzZXJSb2xlID0+IHJvdXRlLnJvbGVzLmluZGV4T2YodXNlclJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsID0ge1xyXG5cdHRoZW1lOiBcInRoZW1lX0JcIixcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy8gfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vIHwgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJ3aXRoLW1hcmdpblwiLCAvLyB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvXCIsXHJcblx0XHRcdGljb246IFwibXVsdGlsaW5lX2NoYXJ0XCIsXHJcblx0XHRcdHJvbGVzOiBbXCJBZG1pblwiLCBcIlVzZXJcIl0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwrXDmcKBw5jCrcOZwocgw5jCp8OYwrXDmcKEw5vCjFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvY29uZmlnc1wiLFxyXG5cdFx0XHRpY29uOiBcInNldHRpbmdzXCIsXHJcblx0XHRcdHJvbGVzOiBbXCJBZG1pblwiXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvc291cmNlXCIsXHJcblx0XHRcdGljb246IFwiZGV2aWNlX2h1YlwiLFxyXG5cdFx0XHRyb2xlczogW1wiQWRtaW5cIl0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwqLDmMKvw5jCscOYwrMgw5jCs8OYwrHDmcKIw5vCjMOYwrMgw5nCh8OYwqdcIlxyXG5cdFx0fVxyXG5cdF0sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4oXCJMYXlvdXRNb2R1bGVDb25maWdNb2RlbFwiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDb25maWdzIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0Ly8gcHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRDb25maWdNb2RlbDtcclxuXHRwcml2YXRlIF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRDb25maWdzKVxyXG5cdFx0XHQubWFwKGNvbmZpZ3MgPT4gY29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImxheW91dF9jb25maWdcIikpXHJcblx0XHRcdC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbihjb25maWcuQ29uZmlnKSk7XHJcblx0XHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWcuQ29uZmlnKTtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtbGF5b3V0LW1haW4tbWVudVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1saXN0IGNsYXNzPVwibWFpbi1tZW51LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJhdXRoZW50aWNhdGVkIHwgYXN5bmNcIj5cclxuICAgIDxhICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdXRlcyQgfCBhc3luY1wiIChjbGljayk9XCJjbG9zZVNpZGViYXIuZW1pdCgpXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIG1hdC1saXN0LWl0ZW0gW3JvdXRlckxpbmtdPVwiW2l0ZW0ucm91dGVdXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7aXRlbS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8c3BhbiBtZExpbmU+e3tpdGVtLnRpdGxlfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWxpc3Q+YCxcclxuXHRzdHlsZXM6IFtgLmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0ubWF0LWxpc3QtaXRlbS5hY3RpdmUgbWF0LWljb257Y29sb3I6IzAwNzJhZX1hLm1hdC1saXN0LWl0ZW0uY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9I2NsZWFyVXNlck1lbnVJdGVte3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTNweDt0b3A6MTNweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwiY2hpbGRNZW51XCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwcHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjFcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVJdGVtXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIGNsb3NlU2lkZWJhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBhdXRoZW50aWNhdGVkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Y3VzdG9tZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdHJvdXRlcyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0QFZpZXdDaGlsZChcImN1c3RvbWVyTW9iaWxlSW5wdXRcIikgY3VzdG9tZXJNb2JpbGVJbnB1dDogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMucm91dGVzJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGBcclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5sb2dvQW5pbWF0aW9ue2hlaWdodDozNnB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtdG9vbGJhclwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93IGlkPVwiZmlyc3RUb29sYmFyXCI+XHJcbiAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPSdhc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWdudXBcIj5cclxuICAgICAgw5jCq8OYwqjDmMKqIMOZwobDmMKnw5nChVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgPGRpdiBpZD1cImFjY2NvdW50TmFtZVwiPlxyXG4gICAgICAgIHt7ZGlzcGxheU5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+w5jCrsOYwrHDmcKIw5jCrDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTZWNvbmRTaWRlYmFyKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9J2dvYmFjaygpJz5cclxuICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kVG9vbGJhclwiIFtAbWVudUFuaW1hdGlvbl09XCJtZW51QW5pbWF0aW9uU3RhdGVcIj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgICA8IS0tIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7bWVudS5pY29ufX08L21hdC1pY29uPiAtLT5cclxuICAgICAgICA8c3Bhbj57e21lbnUudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWFmdGVyLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYG1hdC10b29sYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZiFpbXBvcnRhbnQ7dG9wOjA7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC41KSAxcHggMXB4IDNweCFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXJ7dHJhbnNpdGlvbjpub25lO3Bvc2l0aW9uOmFic29sdXRlfSNzZWNvbmRUb29sYmFyIGJ1dHRvbntvcGFjaXR5Oi42O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTouNjVlbSFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXIuYWN0aXZle29wYWNpdHk6MX0jbG9nb3t0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50fWJ1dHRvbi5ydGwtZGlye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fSNhY2Njb3VudE5hbWV7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6MjBweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkZXJ9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMjVweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNDVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE0cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidGl0bGVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwibGFyZ2VyXCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMXB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjg1MG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRvb2xiYXJBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTE5LDE4MSw2MywxKVwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBcInJnYmEoMzAsMzAsMzAsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzM3ZoXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEyOHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTY0cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItMTI4cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51QW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdGxvZ29BbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0dGl0bGVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUl0ZW1zJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0bGFzdFNjcm9sbDogbnVtYmVyO1xyXG5cdGNvbmZpZzogdG9vbGJhclN0YXRlO1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8dG9vbGJhclN0YXRlPjtcclxuXHRhbmNob3JzTW9kZSA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyKTtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubWVudUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2dvQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cclxuXHRcdGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmJvZHksIFwic2Nyb2xsXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPCAzMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMjAwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIi8gXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciAgKm5nSWY9XCJ0aGVtZSA9PSAndGhlbWVfQSdcIiBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICA8bGF5b3V0LXRvb2xiYXItYiAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9CJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyLWI+XHJcbiAgXHJcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBpZD1cImxheW91dC1zaWRuYXZcIiBbY2xhc3NOYW1lXT1cImxheW91dE1vZGUgfCBhc3luY1wiPlxyXG4gICAgPG1hdC1zaWRlbmF2IFttb2RlXT1cIm1haW5TaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dNYWluU2lkZW5hdiB8IGFzeW5jJyAjc2lkZWJhciAoY2xvc2VkU3RhcnQpPVwib25TaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgIDxuZ3MtbGF5b3V0LW1haW4tbWVudSBbYXV0aGVudGljYXRlZF09J3Nob3dTaWRlYmFyTWVudScgKGNsb3NlU2lkZWJhcik9XCJzaWRlYmFyLmNsb3NlKClcIiAoY2xpY2spPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPjwvbmdzLWxheW91dC1tYWluLW1lbnU+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuICAgIDwhLS0gPG1hdC1zaWRlbmF2IFttb2RlXT1cInNlY29uZFNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd1NlY29uZFNpZGVuYXYgfCBhc3luYycgKGNsb3NlZFN0YXJ0KT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIlxyXG4gICAgICBwb3NpdGlvbj1cImVuZFwiICNzZWNvbmRfc2lkZWJhciBjbGFzcz1cInNlY29uZF9zaWRlYmFyXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3QgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj4gLS0+XHJcbiAgICA8ZGl2IGZ4RmxleExheW91dD0nY29sdW1uJyBpZD1cImFwcC1tYWluLWNvbnRhaW5lclwiIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICA8ZGl2IGZ4RmxleD0nMCAwIDEwMCc+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxmb290ZXIgW0Btb2RlXT1cIm1vZGUkIHwgYXN5bmNcIiBydWxlQW5jaG9yPVwibGF5b3V0X2Zvb3RlclwiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOi4zc30ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgW2FuaW1hdGUoXCIxMDAwbXNcIildKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImludmlzaWJsZSA9PiB2aXNpYmxlXCIsIFthbmltYXRlKFwiMTAwMG1zXCIpXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dGhlbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly8gdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblx0QEhvc3RCaW5kaW5nKFwiY2xhc3MudGhlbWVfQVwiKSB0aGVtZV9BOiBib29sZWFuO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0JcIikgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy50aGVtZSA9IGNvbmZpZy50aGVtZTtcclxuXHRcdFx0dGhpcy50aGVtZV9BID0gY29uZmlnLnRoZW1lID09IFwidGhlbWVfQVwiO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0IgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9CXCI7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHMpID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcCgobW9kZSkgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcigoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoKGkpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLnBpcGUobWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKS5waXBlKFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpKSxcclxuXHRcdG1hcCgoWyBhY3Rpb24sIHRvb2xiYXJNb2RlIF0pID0+IHtcclxuXHRcdFx0aWYgKHRvb2xiYXJNb2RlKSByZXR1cm4gbmV3IEV4aXRGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIG5ldyBGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGZyb20gfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21cIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21FdmVudFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC10b29sYmFyLWJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBkaXI9XCJydGxcIiBjb2xvcj1cInByaW1hcnlcIiBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlXCI+XHJcbiAgPG1hdC10b29sYmFyLXJvdyBkaXI9XCJydGxcIiBpZD1cImZpcnN0VG9vbGJhclwiPlxyXG4gICAgPCEtLSA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PiAtLT5cclxuICAgIDxpbWcgW0Bsb2dvQW5pbWF0aW9uXT1cImxvZ29BbmltYXRpb25TdGF0ZVwiIGlkPVwibG9nb1wiIHJvdXRlckxpbms9Jy8nIHNyYz0nYXNzZXRzL2xvZ29zL2xvZ28tdHlwZS5wbmcnIC8+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9J3Nob3dTaWRlYmFyTWVudSAmJiBmYWxzZScgKGNsaWNrKT1cInRvZ2dsZU1haW5TaWRlYmFyKClcIiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCJcclxuICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBbQHRpdGxlQW5pbWF0aW9uXT1cInRpdGxlQW5pbWF0aW9uU3RhdGVcIiBpZD0nYXBwLW5hbWUnPlxyXG4gICAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5BcHBUaXRsZX19XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YXBwLXRpdGxlIGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+PC9hcHAtdGl0bGU+XHJcbiAgICA8YXBwLXNlYXJjaC1ib3ggZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCI+PC9hcHAtc2VhcmNoLWJveD5cclxuXHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbmluXCIgaTE4bj1cIkBAc2lnbmluXCI+XHJcbiAgICAgIMOZwojDmMKxw5nCiMOYwq9cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbnVwXCI+XHJcbiAgICAgIMOYwqvDmMKow5jCqiDDmcKGw5jCp8OZwoVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImRpc3BsYXlOYW1lXCIgbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTEgY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJhY2Njb3VudE5hbWVcIj5cclxuICAgICAgICB7e2Rpc3BsYXlOYW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGRpdiBpZD1cInNlY29uZFRvb2xiYXJcIiBbQG1lbnVBbmltYXRpb25dPVwibWVudUFuaW1hdGlvblN0YXRlXCI+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWJlZm9yZS10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51SXRlbXMkIHwgYXN5bmNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtdPVwiW21lbnUucm91dGVdXCI+XHJcbiAgICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgICAgPHNwYW4+e3ttZW51LnRpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj5gLFxyXG5cdHN0eWxlczogW2Ajc2Vjb25kVG9vbGJhcnt0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I3NlY29uZFRvb2xiYXIgYnV0dG9ue29wYWNpdHk6LjY7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Zm9udC1zaXplOi42NWVtIWltcG9ydGFudDtoZWlnaHQ6NTBweCFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH0jc2Vjb25kVG9vbGJhciBidXR0b24uYWN0aXZle2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZjc0MDA7b3BhY2l0eToxfSNsb2dve3RyYW5zaXRpb246bm9uZTtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnR9YnV0dG9uLnJ0bC1kaXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9I2FjY2NvdW50TmFtZXtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcn1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1N3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjU3cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNTFweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjFweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdC8vIHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4NTBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0b29sYmFyQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDExOSwxODEsNjMsMSlcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRjb2xvcjogXCJyZ2JhKDMwLDMwLDMwLDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzN2aFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdC8vIGJveFNoYWRvdzogXCIwcHggMXB4IDNweCByZ2JhKDAsMCwwLDApXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi01MHB4XCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTEwMHB4XCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50IHtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRASW5wdXQoKSBzaG93U2lkZWJhck1lbnU7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnO1xyXG5cdEBJbnB1dCgpIHVzZXI6IFVzZXJNb2RlbDtcclxuXHRASW5wdXQoKSBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRsb2dvQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdHRpdGxlQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVJdGVtcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGxhc3RTY3JvbGw6IG51bWJlcjtcclxuXHRjb25maWc6IHRvb2xiYXJTdGF0ZTtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPHRvb2xiYXJTdGF0ZT47XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhcik7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLm1lbnVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9nb0FuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50aXRsZUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHJcblx0XHRmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5ib2R5LCBcInNjcm9sbFwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRsZXQgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRsZXQgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJlxyXG5cdFx0XHRcdHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHNjcm9sbGVkQW1vdW50ID4gMzAwO1xyXG5cdFx0XHQvLyBsZXQgc2Nyb2xsVG9Ub3AgPSBzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDA7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbCA9IHNjcm9sbGVkQW1vdW50O1xyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLnZpc2liaWxpdHkpIHJldHVybjtcclxuXHRcdFx0aWYgKHNjcm9sbGVkQW1vdW50ID09IDApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbWZvcnRhYmxlXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsZWRBbW91bnQgPCAxNTAgfHwgc2Nyb2xsVG9Ub3ApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbXBhY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwic3VtbWFyeVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcImJvZHk6c2Nyb2xsXCIsIFtdKVxyXG5cdG9uV2luZG93U2Nyb2xsKCkge1xyXG5cdFx0Ly8gb2YoMSlcclxuXHR9XHJcblx0c2lnbm91dCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERvU2lnbm91dEFjdGlvbigpKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxuXHR0b2dnbGVTZWNvbmRTaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHR0b2dnbGVNYWluU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdF9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKSB7XHJcblx0XHR0aGlzLm1lbnVJdGVtcyQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcubWVudUl0ZW1zKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXIkKSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIExPQ0FMRV9JRCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NDb25maWdNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xvZ28tY29udGFpbmVyL2xvZ28tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sYmFyTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRFZmZlY3RzIH0gZnJvbSBcIi4vbGF5b3V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRSdWxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IExheW91dE1vZHVsZUNvbmZpZ01vZGVsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBMT0NBTEVfSUQsIHVzZVZhbHVlOiAnZW4gZW4tVVMnIH0sXHJcblx0XHRcdFx0eyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1dXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NMYXlvdXRNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwibGF5b3V0XCIsIExheW91dFJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbTGF5b3V0RWZmZWN0c10pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbTmdzTGF5b3V0TW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7IH1cclxuIiwiZXhwb3J0IGVudW0gTGF5b3V0T3V0bGV0cyB7XHJcblx0Ly8gVE9ETzogcmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbiA6IDYuMC40NVxyXG5cdG5nc19sYXlvdXRfdG9vbGJhcl9tZW51ID0gXCJuZ3MtbGF5b3V0LWFmdGVyLXRvb2xiYXItbWVudVwiLFxyXG5cdG5nc19sYXlvdXRfYWZ0ZXJfdG9vbGJhcl9tZW51ID0gXCJuZ3MtbGF5b3V0LWFmdGVyLXRvb2xiYXItbWVudVwiLFxyXG5cdG5nc19sYXlvdXRfYmVmb3JlX3Rvb2xiYXJfbWVudSA9IFwibmdzLWxheW91dC1iZWZvcmUtdG9vbGJhci1tZW51XCIsXHJcblx0Zm9vdGVyX0IgPSBcImZvb3Rlcl9CXCIsXHJcblx0Zm9vdGVyX0EgPSBcImZvb3Rlcl9BXCJcclxufVxyXG4iXSwibmFtZXMiOlsic3RhdGUiLCJsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMiLCJsYXlvdXQuQ0xPU0VfU0lERU5BViIsImxheW91dC5PUEVOX1NJREVOQVYiLCJpbml0aWFsU3RhdGUiLCJsYXlvdXQuUmVkdWNlciIsImZyb21Ub29sYmFyLlJlZHVjZXIiLCJnZXRUaXRsZSIsImxheW91dC5nZXRUaXRsZSIsImdldFNob3dNYWluU2lkZW5hdiIsImxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJnZXRNYWluU2lkZU5hdk1vZGUiLCJsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlIiwiZ2V0TGF5b3V0TW9kZSIsImxheW91dC5nZXRMYXlvdXRNb2RlIiwiZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJnZXRTZWNvbmRTaWRlYmFyTW9kZSIsImxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSIsImdldEZ1bGxzY3JlZW5Nb2RlIiwibGF5b3V0LmdldEZ1bGxzY3JlZW5Nb2RlIiwiZnJvbVRvb2xiYXIuZ2V0VG9vbGJhck1vZGUiLCJmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUiLCJEb1NpZ25vdXRBY3Rpb24iLCJCZWhhdmlvclN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsTUFBYSxZQUFZLEdBQUcsdUJBQXVCLENBQUM7O0FBQ3BELE1BQWEsYUFBYSxHQUFHLHdCQUF3QixDQUFDOzs7SUFHckQsc0JBQXVCLCtCQUErQjtJQUN0RCxZQUFhLHFCQUFxQjtJQUNsQyxlQUFnQix3QkFBd0I7SUFDeEMsZUFBZ0Isd0JBQXdCO0lBQ3hD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
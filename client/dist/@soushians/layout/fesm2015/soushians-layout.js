import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostBinding, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
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
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
const /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
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
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
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
            const /** @type {?} */ _state = {};
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
const /** @type {?} */ getTitle = (state$$1) => state$$1.title;
const /** @type {?} */ getShowMainSidenav = (state$$1) => state$$1.showMainSidenav;
const /** @type {?} */ getMainSideNavMode = (state$$1) => state$$1.mainSideNavMode;
const /** @type {?} */ getLayoutMode = (state$$1) => state$$1.layoutMode;
const /** @type {?} */ getShowSecondSidebarStatus = (state$$1) => state$$1.showSecondSideNav;
const /** @type {?} */ getSecondSidebarMode = (state$$1) => state$$1.secondSideNavMode;
const /** @type {?} */ getFullscreenMode = (state$$1) => state$$1.fullscreen;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$1 = {
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
const /** @type {?} */ getToolbarMode = (state$$1) => state$$1.mode;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ LayoutReducers = {
    layout: Reducer,
    toolbar: Reducer$1
};
//#region selectors
const /** @type {?} */ selectLayoutState = createFeatureSelector("layout");
//#endregion
const /** @type {?} */ getLayout = createSelector(selectLayoutState, (state$$1) => state$$1.layout);
const /** @type {?} */ getTitle$1 = createSelector(getLayout, getTitle);
const /** @type {?} */ getShowMainSidenav$1 = createSelector(getLayout, getShowMainSidenav);
const /** @type {?} */ getMainSideNavMode$1 = createSelector(getLayout, getMainSideNavMode);
const /** @type {?} */ getLayoutMode$1 = createSelector(getLayout, getLayoutMode);
const /** @type {?} */ getShowSecondSidebarStatus$1 = createSelector(getLayout, getShowSecondSidebarStatus);
const /** @type {?} */ getSecondSidebarMode$1 = createSelector(getLayout, getSecondSidebarMode);
const /** @type {?} */ getFullscreenMode$1 = createSelector(getLayout, getFullscreenMode);
//#region toolbar
const /** @type {?} */ getLayoutToolbar = createSelector(selectLayoutState, (state$$1) => state$$1.toolbar);
const /** @type {?} */ getLayoutToolbarMode = createSelector(getLayoutToolbar, getToolbarMode);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ menu_item_authorization_operator = function ([routes, user]) {
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter(route => user.Roles.some(userRole => route.roles.indexOf(userRole) > -1));
    }
};
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    theme: "theme_B",
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    //| "push" | "side",
    mainSideNavMode: "over",
    //| "push" | "side",
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
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
                styles: [`.shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}`]
            },] },
];
/** @nocollapse */
LogoContainerComponent.ctorParameters = () => [
    { type: LayoutConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            let /** @type {?} */ scrolledAmount = this.document.body.scrollTop;
            let /** @type {?} */ scrollToTop = scrolledAmount - this.lastScroll < 0 &&
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
        let /** @type {?} */ action;
        this.showSecondSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        let /** @type {?} */ action;
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
                styles: [`mat-toolbar{background-color:#fff!important;height:100px!important;top:0;box-shadow:rgba(0,0,0,.5) 1px 1px 3px!important}#firstToolbar{color:#333}#secondToolbar{transition:all;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:all;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}`],
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
                            boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                        })),
                        state("compact", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("summary", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-50px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("hide", style({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-100px",
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
                var /** @type {?} */ title = "";
                this.mapper.forEach(mapper => {
                    let /** @type {?} */ res = mapper(event);
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
 * @suppress {checkTypes} checked by tsc
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
            this.theme_A = config.theme == 'theme_A';
            this.theme_B = config.theme == 'theme_B';
        });
        this.store.dispatch(new ChangeSideNavMode('push'));
        this.user$ = this.store.select((s) => (/** @type {?} */ (s)).user.user.data);
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode$1);
        this.mode$ = this.isFullscreen$.map((mode) => (mode ? 'invisible' : 'visible'));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode('push'));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
        this.router.events.filter((data) => data instanceof NavigationEnd).subscribe((event) => {
            var /** @type {?} */ hideSituations = [
                (/** @type {?} */ (event)).urlAfterRedirects == '/auth/signin',
                (/** @type {?} */ (event)).urlAfterRedirects == '/auth/signup/register',
                (/** @type {?} */ (event)).urlAfterRedirects == '/auth/signup/verification',
                (/** @type {?} */ (event)).urlAfterRedirects == '/user/password/reset'
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
                selector: 'layout-main',
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
                styles: [`#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}`],
                animations: [
                    trigger('mode', [
                        state('visible', style({ transform: 'scaleY(1) translateY(0)' })),
                        state('invisible', style({ height: '0', transform: 'scaleY(0) translateY(100%)' })),
                        transition('visible => invisible', [animate('1000ms')]),
                        transition('invisible => visible', [animate('1000ms')])
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
    app_config: [{ type: Input, args: ['app-config',] }],
    mainSideNav: [{ type: ViewChild, args: ['mainSideNav',] }],
    theme_A: [{ type: HostBinding, args: ['class.theme_B',] }],
    theme_B: [{ type: HostBinding, args: ['class.theme_B',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
            let /** @type {?} */ scrolledAmount = this.document.body.scrollTop;
            let /** @type {?} */ scrollToTop = scrolledAmount - this.lastScroll < 0 &&
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
        let /** @type {?} */ action;
        this.showSecondSidenav.subscribe(state$$1 => {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    }
    /**
     * @return {?}
     */
    toggleMainSidebar() {
        let /** @type {?} */ action;
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
                template: `<mat-toolbar color="primary" [@toolbarAnimation]="toolbarAnimationState">
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
                styles: [`#firstToolbar{color:#333}#secondToolbar{transition:all;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:all;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}`],
                animations: [
                    trigger("logoAnimation", [
                        state("comfortable", style({
                            width: "60px",
                            height: "auto",
                            top: "50px",
                            right: "calc(50% - 50px)"
                        })),
                        state("compact", style({
                            width: "36px",
                            height: "auto",
                            top: "13px",
                            right: "13px"
                        })),
                        state("summary", style({
                            width: "36px",
                            height: "auto",
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
                            boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                        })),
                        state("compact", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("summary", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-50px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        state("hide", style({
                            // backgroundColor: "rgba(256,256,256,1)",
                            height: "100px",
                            top: "-100px",
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
 * @suppress {checkTypes} checked by tsc
 */
class NgsLayoutModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, VisibleToolbarAction, FullscreenAction, ExitFullscreenAction, InvisibleToolbarAction, ToggleFullscreenAction, NgsLayoutMainComponent, LayoutOutlets, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵh, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, NgsLayoutMainComponent as ɵj, SearchBoxComponent as ɵd, TitleComponent as ɵi, ToolbarMenuThemeBComponent as ɵg, ToolbarMenuComponent as ɵf, LayoutEffects as ɵn, LayoutReducers as ɵk, Reducer as ɵl, Reducer$1 as ɵm, LayoutConfigurationService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbW9kZWxzL2xheW91dC1vdXRsZXRzLmVudW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIixcclxuXHRGVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBGVUxMU0NSRUVOXCIsXHJcblx0RVhJVF9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBFWElUX0ZVTExTQ1JFRU5cIixcclxuXHRUT0dHTEVfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gVE9HR0xFX0ZVTExTQ1JFRU5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEV4aXRGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBFeGl0RnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGVcclxuXHR8IFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0Y29uc3QgX3N0YXRlID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdGlmIChrIGluIHN0YXRlKSBfc3RhdGVba10gPSBhY3Rpb24ucGF5bG9hZFtrXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uX3N0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Ly8gY2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU46XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0ZnVsbHNjcmVlbjogc3RhdGUuZnVsbHNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmZ1bGxzY3JlZW47XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbj86IEFjdGlvbjtcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcj86IChbIHJvdXRlcywgdXNlciBdOiBbYW55LCBhbnldKSA9PiBhbnlbXTtcclxuXHR0aGVtZSA6IFwidGhlbWVfQVwiIHwgXCJ0aGVtZV9CXCJcclxufVxyXG5cclxuY29uc3QgbWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IgPSBmdW5jdGlvbihbIHJvdXRlcywgdXNlciBdKSB7XHJcblx0aWYgKCF1c2VyLlJvbGVzKSByZXR1cm4gW107XHJcblx0aWYgKHVzZXIuUm9sZXMubGVuZ3RoID09IDApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvdXRlcy5maWx0ZXIocm91dGUgPT4gdXNlci5Sb2xlcy5zb21lKHVzZXJSb2xlID0+IHJvdXRlLnJvbGVzLmluZGV4T2YodXNlclJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsID0ge1xyXG5cdHRoZW1lOiBcInRoZW1lX0JcIixcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy98IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy98IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwid2l0aC1tYXJnaW5cIiwgLy8gfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL1wiLFxyXG5cdFx0XHRpY29uOiBcIm11bHRpbGluZV9jaGFydFwiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIsIFwiVXNlclwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwrXDmcKBw5jCrcOZwocgw5jCp8OYwrXDmcKEw5vCjFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvY29uZmlnc1wiLFxyXG5cdFx0XHRpY29uOiBcInNldHRpbmdzXCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9zb3VyY2VcIixcclxuXHRcdFx0aWNvbjogXCJkZXZpY2VfaHViXCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMKiw5jCr8OYwrHDmMKzIMOYwrPDmMKxw5nCiMObwozDmMKzIMOZwofDmMKnXCJcclxuXHRcdH1cclxuXHRdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KFwiTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWxcIik7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q29uZmlncyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdC8vIHByaXZhdGUgX2NvbmZpZzogTGF5b3V0Q29uZmlnTW9kZWw7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRNb2R1bGVDb25maWdNb2RlbDtcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0Q29uZmlncylcclxuXHRcdFx0Lm1hcChjb25maWdzID0+IGNvbmZpZ3MuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0aWYgKCFjb25maWcpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24oY29uZmlnLkNvbmZpZykpO1xyXG5cdFx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWxheW91dC1tYWluLW1lbnVcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtbGlzdCBjbGFzcz1cIm1haW4tbWVudS1jb250YWluZXJcIj5cclxuICA8ZGl2ICpuZ0lmPVwiYXV0aGVudGljYXRlZCB8IGFzeW5jXCI+XHJcbiAgICA8YSAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3V0ZXMkIHwgYXN5bmNcIiAoY2xpY2spPVwiY2xvc2VTaWRlYmFyLmVtaXQoKVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBtYXQtbGlzdC1pdGVtIFtyb3V0ZXJMaW5rXT1cIltpdGVtLnJvdXRlXVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e2l0ZW0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4gbWRMaW5lPnt7aXRlbS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L21hdC1saXN0PmAsXHJcblx0c3R5bGVzOiBbYC5hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9Lm1hdC1saXN0LWl0ZW0uYWN0aXZlIG1hdC1pY29ue2NvbG9yOiMwMDcyYWV9YS5tYXQtbGlzdC1pdGVtLmNoaWxke21hcmdpbi1yaWdodDoyMHB4fSNjbGVhclVzZXJNZW51SXRlbXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjEzcHg7dG9wOjEzcHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImNoaWxkTWVudVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIxXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51SXRlbVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBjbG9zZVNpZGViYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgYXV0aGVudGljYXRlZDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGN1c3RvbWVyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRyb3V0ZXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJjdXN0b21lck1vYmlsZUlucHV0XCIpIGN1c3RvbWVyTW9iaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIHNpZ25pblNlcnZpY2U6IFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblx0fVxyXG5cdF9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlcyQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcubWVudUl0ZW1zKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXIkKSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1ib3gnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuICA8IS0tPHRkLXNlYXJjaC1ib3ggY2xhc3M9XCJzZWFyY2gtYm94LWNvbnRhaW5lclwiIGJhY2tJY29uPVwiYXJyb3dfYmFja1wiIHBsYWNlaG9sZGVyPVwiw5jCrMOYwrPDmMKqw5jCrMOZwohcIiBbc2hvd1VuZGVybGluZV09XCJmYWxzZVwiIFtkZWJvdW5jZV09XCI1MDBcIiBbYWx3YXlzVmlzaWJsZV09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgKHNlYXJjaERlYm91bmNlKT1cInNlYXJjaElucHV0VGVybSA9ICRldmVudFwiIChzZWFyY2gpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKGNsZWFyKT1cInNlYXJjaElucHV0VGVybSA9ICcnXCI+XHJcbiAgPC90ZC1zZWFyY2gtYm94Pi0tPlxyXG48L2Rpdj5gLFxyXG4gICAgICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1sb2dvLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgXHJcbjwhLS08aW1nIGNsYXNzPVwibG9nb1R5cGVBbmltYXRpb25cIiBzcmM9Jy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby10eXBlLnBuZycgLz4tLT5gLFxyXG5cdHN0eWxlczogW2Auc2hhdGVsTG9nb0FuaW1hdGlvbntoZWlnaHQ6MzVweDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjJ9I2JhY2tncm91bmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDt3aWR0aDozMDBweDtoZWlnaHQ6NzBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2RmOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIGZyb21MYXlvdXQgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7XHJcblx0RG9TaWdub3V0QWN0aW9uLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cywgZ2V0TGF5b3V0VG9vbGJhciB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSBhcyB0b29sYmFyU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlXCI+XHJcbiAgPG1hdC10b29sYmFyLXJvdyBpZD1cImZpcnN0VG9vbGJhclwiPlxyXG4gICAgPCEtLSA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PiAtLT5cclxuICAgIDxpbWcgW0Bsb2dvQW5pbWF0aW9uXT1cImxvZ29BbmltYXRpb25TdGF0ZVwiIGlkPVwibG9nb1wiIHJvdXRlckxpbms9Jy8nIHNyYz0nYXNzZXRzL2ltYWdlcy9zaGF0ZWwtbG9nby5wbmcnIC8+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9J3Nob3dTaWRlYmFyTWVudSAmJiBmYWxzZScgKGNsaWNrKT1cInRvZ2dsZU1haW5TaWRlYmFyKClcIiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBbQHRpdGxlQW5pbWF0aW9uXT1cInRpdGxlQW5pbWF0aW9uU3RhdGVcIiBpZD0nYXBwLW5hbWUnPlxyXG4gICAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5BcHBUaXRsZX19XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YXBwLXRpdGxlIGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+PC9hcHAtdGl0bGU+XHJcbiAgICA8YXBwLXNlYXJjaC1ib3ggZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCI+PC9hcHAtc2VhcmNoLWJveD5cclxuXHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbmluXCI+XHJcbiAgICAgIMOZwojDmMKxw5nCiMOYwq9cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbnVwXCI+XHJcbiAgICAgIMOYwqvDmMKow5jCqiDDmcKGw5jCp8OZwoVcclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImRpc3BsYXlOYW1lXCIgbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTEgY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJhY2Njb3VudE5hbWVcIj5cclxuICAgICAgICB7e2Rpc3BsYXlOYW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGRpdiBpZD1cInNlY29uZFRvb2xiYXJcIiBbQG1lbnVBbmltYXRpb25dPVwibWVudUFuaW1hdGlvblN0YXRlXCI+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWJlZm9yZS10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51SXRlbXMkIHwgYXN5bmNcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW3JvdXRlckxpbmtdPVwiW21lbnUucm91dGVdXCI+XHJcbiAgICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgICAgPHNwYW4+e3ttZW51LnRpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj5gLFxyXG5cdHN0eWxlczogW2BtYXQtdG9vbGJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmYhaW1wb3J0YW50O2hlaWdodDoxMDBweCFpbXBvcnRhbnQ7dG9wOjA7Ym94LXNoYWRvdzpyZ2JhKDAsMCwwLC41KSAxcHggMXB4IDNweCFpbXBvcnRhbnR9I2ZpcnN0VG9vbGJhcntjb2xvcjojMzMzfSNzZWNvbmRUb29sYmFye3RyYW5zaXRpb246YWxsO3Bvc2l0aW9uOmFic29sdXRlfSNzZWNvbmRUb29sYmFyIGJ1dHRvbntvcGFjaXR5Oi42O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTouNjVlbSFpbXBvcnRhbnQ7aGVpZ2h0OjUwcHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXIgYnV0dG9uLmFjdGl2ZXtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmY3NDAwO29wYWNpdHk6MX0jbG9nb3t0cmFuc2l0aW9uOmFsbDtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnR9YnV0dG9uLnJ0bC1kaXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9I2FjY2NvdW50TmFtZXtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcn1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCI5MHB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMzZweFwiLFxyXG5cclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNTdweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1N3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidGl0bGVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwibGFyZ2VyXCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjUxcHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHQvLyByaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNTBweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMDBweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudUNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSBzY3JvbGxlZEFtb3VudCA+IDMwMDtcclxuXHRcdFx0Ly8gbGV0IHNjcm9sbFRvVG9wID0gc2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGwgPSBzY3JvbGxlZEFtb3VudDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMTUwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIi8gXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgU3dQdXNoIH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBnZXRBcHBDb25maWcgfSBmcm9tICdAc291c2hpYW5zL2NvbmZpZyc7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ0Bzb3VzaGlhbnMvdXNlcic7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XHJcblxyXG5pbXBvcnQge1xyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUsXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVNpZGVOYXZNb2RlLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZUxheW91dFxyXG59IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gJ0Bzb3VzaGlhbnMvdXNlcic7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdsYXlvdXQtbWFpbicsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciAgKm5nSWY9XCJ0aGVtZSA9PSAndGhlbWVfQSdcIiBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICA8bGF5b3V0LXRvb2xiYXItYiAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9CJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyLWI+XHJcbiAgXHJcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBpZD1cImxheW91dC1zaWRuYXZcIiBbY2xhc3NOYW1lXT1cImxheW91dE1vZGUgfCBhc3luY1wiPlxyXG4gICAgPG1hdC1zaWRlbmF2IFttb2RlXT1cIm1haW5TaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dNYWluU2lkZW5hdiB8IGFzeW5jJyAjc2lkZWJhciAoY2xvc2VkU3RhcnQpPVwib25TaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgIDxuZ3MtbGF5b3V0LW1haW4tbWVudSBbYXV0aGVudGljYXRlZF09J3Nob3dTaWRlYmFyTWVudScgKGNsb3NlU2lkZWJhcik9XCJzaWRlYmFyLmNsb3NlKClcIiAoY2xpY2spPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPjwvbmdzLWxheW91dC1tYWluLW1lbnU+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuICAgIDwhLS0gPG1hdC1zaWRlbmF2IFttb2RlXT1cInNlY29uZFNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd1NlY29uZFNpZGVuYXYgfCBhc3luYycgKGNsb3NlZFN0YXJ0KT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIlxyXG4gICAgICBwb3NpdGlvbj1cImVuZFwiICNzZWNvbmRfc2lkZWJhciBjbGFzcz1cInNlY29uZF9zaWRlYmFyXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3QgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj4gLS0+XHJcbiAgICA8ZGl2IGZ4RmxleExheW91dD0nY29sdW1uJyBpZD1cImFwcC1tYWluLWNvbnRhaW5lclwiIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICA8ZGl2IGZ4RmxleD0nMCAwIDEwMCc+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxmb290ZXIgW0Btb2RlXT1cIm1vZGUkIHwgYXN5bmNcIiBydWxlQW5jaG9yPVwibGF5b3V0X2Zvb3RlclwiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX0ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcignbW9kZScsIFtcclxuXHRcdFx0c3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKSB0cmFuc2xhdGVZKDApJyB9KSksXHJcblx0XHRcdHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IGhlaWdodDogJzAnLCB0cmFuc2Zvcm06ICdzY2FsZVkoMCkgdHJhbnNsYXRlWSgxMDAlKScgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGludmlzaWJsZScsIFsgYW5pbWF0ZSgnMTAwMG1zJykgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgWyBhbmltYXRlKCcxMDAwbXMnKSBdKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNYWluQ29tcG9uZW50IHtcclxuXHRASW5wdXQoJ2FwcC1jb25maWcnKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPCd2aXNpYmxlJyB8ICdpbnZpc2libGUnPjtcclxuXHR0aGVtZTpzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPCdzaWRlJyB8ICdvdmVyJyB8ICdwdXNoJz47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTwnd2l0aC1tYXJnaW4nIHwgJ3dpdGhvdXQtbWFyZ2luJyB8ICdkZWZhdWx0Jz47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8J3NpZGUnIHwgJ292ZXInIHwgJ3B1c2gnPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKCdtYWluU2lkZU5hdicpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cdEBIb3N0QmluZGluZygnY2xhc3MudGhlbWVfQicpIHRoZW1lX0E6IGJvb2xlYW47XHJcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy50aGVtZV9CJykgdGhlbWVfQjogYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoKGNvbmZpZykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy50aGVtZSA9IGNvbmZpZy50aGVtZTtcclxuXHRcdFx0dGhpcy50aGVtZV9BID0gY29uZmlnLnRoZW1lID09ICd0aGVtZV9BJztcclxuXHRcdFx0dGhpcy50aGVtZV9CID0gY29uZmlnLnRoZW1lID09ICd0aGVtZV9CJztcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2lkZU5hdk1vZGUoJ3B1c2gnKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHMpID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcCgobW9kZSkgPT4gKG1vZGUgPyAnaW52aXNpYmxlJyA6ICd2aXNpYmxlJykpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKCdwdXNoJykpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcigoZGF0YSkgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuXHRcdFx0dmFyIGhpZGVTaXR1YXRpb25zID0gW1xyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSAnL2F1dGgvc2lnbmluJyxcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gJy9hdXRoL3NpZ251cC9yZWdpc3RlcicsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09ICcvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uJyxcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gJy91c2VyL3Bhc3N3b3JkL3Jlc2V0J1xyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZSgoaSkgPT4gaSkpIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQoZmFsc2UpO1xyXG5cdFx0XHRlbHNlIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQvLyBcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUxheW91dChcIndpdGgtbWFyZ2luXCIpKTtcclxuXHQvLyB9XHJcblxyXG5cdG9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0b25TaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRG9TaWdub3V0QWN0aW9uIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7XHJcblx0TGF5b3V0QWN0aW9uVHlwZXMsXHJcblx0SW52aXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRWaXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRFeGl0RnVsbHNjcmVlbkFjdGlvbixcclxuXHRGdWxsc2NyZWVuQWN0aW9uXHJcbn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldEZ1bGxzY3JlZW5Nb2RlIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExheW91dEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKSBEb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IERvU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTikucGlwZShtYXAoKCkgPT4gbmV3IEludmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRleGl0X2Z1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVuX3Rvb2xiYXIkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU4pLnBpcGUoXHJcblx0XHR3aXRoTGF0ZXN0RnJvbSh0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSkpLFxyXG5cdFx0bWFwKChbIGFjdGlvbiwgdG9vbGJhck1vZGUgXSkgPT4ge1xyXG5cdFx0XHRpZiAodG9vbGJhck1vZGUpIHJldHVybiBuZXcgRXhpdEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIGZyb21MYXlvdXQgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7XHJcblx0RG9TaWdub3V0QWN0aW9uLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cywgZ2V0TGF5b3V0VG9vbGJhciB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSBhcyB0b29sYmFyU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXItYlwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93IGlkPVwiZmlyc3RUb29sYmFyXCI+XHJcbiAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPSdhc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG5cclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWdudXBcIj5cclxuICAgICAgw5jCq8OYwqjDmMKqIMOZwobDmMKnw5nChVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgPGRpdiBpZD1cImFjY2NvdW50TmFtZVwiPlxyXG4gICAgICAgIHt7ZGlzcGxheU5hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bC1kaXJcIj5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+w5jCrsOYwrHDmcKIw5jCrDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTZWNvbmRTaWRlYmFyKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9J2dvYmFjaygpJz5cclxuICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kVG9vbGJhclwiIFtAbWVudUFuaW1hdGlvbl09XCJtZW51QW5pbWF0aW9uU3RhdGVcIj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgICA8IS0tIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7bWVudS5pY29ufX08L21hdC1pY29uPiAtLT5cclxuICAgICAgICA8c3Bhbj57e21lbnUudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtbGF5b3V0LWFmdGVyLXRvb2xiYXItbWVudVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYCNmaXJzdFRvb2xiYXJ7Y29sb3I6IzMzM30jc2Vjb25kVG9vbGJhcnt0cmFuc2l0aW9uOmFsbDtwb3NpdGlvbjphYnNvbHV0ZX0jc2Vjb25kVG9vbGJhciBidXR0b257b3BhY2l0eTouNjtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxzYW5zLXNlcmlmIWltcG9ydGFudDtmb250LXNpemU6LjY1ZW0haW1wb3J0YW50O2hlaWdodDo1MHB4IWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAhaW1wb3J0YW50fSNzZWNvbmRUb29sYmFyIGJ1dHRvbi5hY3RpdmV7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmNzQwMDtvcGFjaXR5OjF9I2xvZ297dHJhbnNpdGlvbjphbGw7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50fWJ1dHRvbi5ydGwtZGlye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fSNhY2Njb3VudE5hbWV7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6MjBweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkZXJ9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcImF1dG9cIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjU3cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjBcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNTdweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51QW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRpdGxlQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcImxhcmdlclwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI1MXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMXB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ly8gcmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjg1MG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRvb2xiYXJBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTE5LDE4MSw2MywxKVwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBcInJnYmEoMzAsMzAsMzAsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzM3ZoXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTUwcHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItMTAwcHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51QW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdGxvZ29BbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0dGl0bGVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUl0ZW1zJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0bGFzdFNjcm9sbDogbnVtYmVyO1xyXG5cdGNvbmZpZzogdG9vbGJhclN0YXRlO1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8dG9vbGJhclN0YXRlPjtcclxuXHRhbmNob3JzTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyKTtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubWVudUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2dvQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cclxuXHRcdGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmJvZHksIFwic2Nyb2xsXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdGxldCBzY3JvbGxlZEFtb3VudCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHRcdGxldCBzY3JvbGxUb1RvcCA9XHJcblx0XHRcdFx0c2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwICYmXHJcblx0XHRcdFx0dGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPiAzMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gc2Nyb2xsZWRBbW91bnQ7XHJcblx0XHRcdGlmICghdGhpcy5jb25maWcudmlzaWJpbGl0eSkgcmV0dXJuO1xyXG5cdFx0XHRpZiAoc2Nyb2xsZWRBbW91bnQgPT0gMCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tZm9ydGFibGVcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxlZEFtb3VudCA8IDE1MCB8fCBzY3JvbGxUb1RvcCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tcGFjdFwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJzdW1tYXJ5XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwiYm9keTpzY3JvbGxcIiwgW10pXHJcblx0b25XaW5kb3dTY3JvbGwoKSB7XHJcblx0XHQvLyBvZigxKVxyXG5cdH1cclxuXHRzaWdub3V0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRG9TaWdub3V0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG5cdHRvZ2dsZVNlY29uZFNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdHRvZ2dsZU1haW5TaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMubWVudUl0ZW1zJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NDb25maWdNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xvZ28tY29udGFpbmVyL2xvZ28tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sYmFyTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5nc0xheW91dE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRFZmZlY3RzIH0gZnJvbSBcIi4vbGF5b3V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWJcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRSdWxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVUaGVtZUJDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE5nc0xheW91dE1haW5Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IExheW91dE1vZHVsZUNvbmZpZ01vZGVsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJsYXlvdXRcIiwgTGF5b3V0UmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgTGF5b3V0RWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NMYXlvdXRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7fVxyXG4iLCJleHBvcnQgZW51bSBMYXlvdXRPdXRsZXRzIHtcclxuXHQvLyBUT0RPOiByZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uIDogNi4wLjQ1XHJcblx0bmdzX2xheW91dF90b29sYmFyX21lbnUgPSBcIm5ncy1sYXlvdXQtYWZ0ZXItdG9vbGJhci1tZW51XCIsXHJcblx0bmdzX2xheW91dF9hZnRlcl90b29sYmFyX21lbnUgPSBcIm5ncy1sYXlvdXQtYWZ0ZXItdG9vbGJhci1tZW51XCIsXHJcblx0bmdzX2xheW91dF9iZWZvcmVfdG9vbGJhcl9tZW51ID0gXCJuZ3MtbGF5b3V0LWJlZm9yZS10b29sYmFyLW1lbnVcIixcclxuXHRmb290ZXJfQiA9IFwiZm9vdGVyX0JcIixcclxuXHRmb290ZXJfQSA9IFwiZm9vdGVyX0FcIlxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdGF0ZSIsImxheW91dC5MYXlvdXRBY3Rpb25UeXBlcyIsImxheW91dC5DTE9TRV9TSURFTkFWIiwibGF5b3V0Lk9QRU5fU0lERU5BViIsImluaXRpYWxTdGF0ZSIsImxheW91dC5SZWR1Y2VyIiwiZnJvbVRvb2xiYXIuUmVkdWNlciIsImdldFRpdGxlIiwibGF5b3V0LmdldFRpdGxlIiwiZ2V0U2hvd01haW5TaWRlbmF2IiwibGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImdldE1haW5TaWRlTmF2TW9kZSIsImxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUiLCJnZXRMYXlvdXRNb2RlIiwibGF5b3V0LmdldExheW91dE1vZGUiLCJnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImdldFNlY29uZFNpZGViYXJNb2RlIiwibGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlIiwiZ2V0RnVsbHNjcmVlbk1vZGUiLCJsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUiLCJmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSIsImZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2IiwiZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSIsIkRvU2lnbm91dEFjdGlvbiIsIkJlaGF2aW9yU3ViamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU8sdUJBQU0sWUFBWSxHQUFHLHVCQUF1QixDQUFDO0FBQ3BELEFBQU8sdUJBQU0sYUFBYSxH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
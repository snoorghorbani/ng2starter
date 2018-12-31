import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { getConfigs, NgsConfigModule } from '@soushians/config';
import { __decorate, __metadata } from 'tslib';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { SigninService, DoSignoutAction } from '@soushians/authentication';
import { RuleModule } from '@soushians/rule';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostListener, NgModule, LOCALE_ID, HostBinding, defineInjectable, inject } from '@angular/core';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { Location, CommonModule } from '@angular/common';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { getAccountInfo, UserFacadeService } from '@soushians/user';
import { map, combineLatest, withLatestFrom } from 'rxjs/operators';

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
            },] }
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
                template: "<mat-list class=\"main-menu-container\">\r\n  <div *ngIf=\"authenticated | async\">\r\n    <a *ngFor=\"let item of routes$ | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\r\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\r\n      <span mdLine>{{item.title}}</span>\r\n    </a>\r\n  </div>\r\n</mat-list>",
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
                ],
                styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"]
            }] }
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
                template: "<div class=\"search-box\">\r\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\r\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\r\n  </td-search-box>-->\r\n</div>",
                styles: [""]
            }] }
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
                template: "\r\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                styles: [".logoAnimation{height:36px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
            }] }
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
                template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\r\n  <mat-toolbar-row id=\"firstToolbar\">\r\n    <!-- <div id=\"background\"></div> -->\r\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/images/shatel-logo.png' />\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\r\n      {{app_config?.Config.AppTitle}}\r\n    </span>\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n\r\n\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\r\n      \u0648\u0631\u0648\u062F\r\n    </button>\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\r\n      \u062B\u0628\u062A \u0646\u0627\u0645\r\n    </button>\r\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\r\n      <div id=\"acccountName\">\r\n        {{displayName}}\r\n      </div>\r\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n        <span>\r\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\r\n        </span>\r\n      </button>\r\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>\u062E\u0631\u0648\u062C</span>\r\n      </button>\r\n    </mat-menu>\r\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)='goback()'>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\r\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\r\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLink]=\"[menu.route]\">\r\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\r\n        <span>{{menu.title}}</span>\r\n      </button>\r\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>",
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
                ],
                styles: ["mat-toolbar{background-color:#fff!important;top:0;box-shadow:rgba(0,0,0,.5) 1px 1px 3px!important}#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important}#secondToolbar.active{opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"]
            }] }
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
                template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\r\n    {{app_config?.Config.FooterCopyright}}\r\n</div>",
                styles: [":host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
            }] }
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
                template: "<div id=\"title\">\r\n    {{title$ | async}}\r\n</div>",
                styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
            }] }
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
    { type: Injectable }
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
                template: "<mat-toolbar dir=\"rtl\" color=\"primary\" [@toolbarAnimation]=\"toolbarAnimationState\">\r\n  <mat-toolbar-row dir=\"rtl\" id=\"firstToolbar\">\r\n    <!-- <div id=\"background\"></div> -->\r\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/logos/logo-type.png' />\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\"\r\n      fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\r\n      {{app_config?.Config.AppTitle}}\r\n    </span>\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n\r\n\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\r\n      <span [translate]=\"'__signin'\"></span>\r\n    </button>\r\n    <button translate *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\r\n      {{'__signup' | translate}}\r\n    </button>\r\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\r\n      <div id=\"acccountName\">\r\n        {{displayName}}\r\n      </div>\r\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n        <span translate=\"__account_mangement\">\r\n        </span>\r\n      </button>\r\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span translate>__signout</span>\r\n      </button>\r\n    </mat-menu>\r\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)='goback()'>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\r\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\r\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\r\n        <span>{{menu.title}}</span>\r\n      </button>\r\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>",
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
                ],
                styles: ["#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"]
            }] }
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
            },] }
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
            },] }
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

//# sourceMappingURL=soushians-layout.js.map
import { __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, ViewChild, Output, EventEmitter, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getlayoutModuleConfig, NgsConfigModule } from '@soushians/config';
import 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SigninService, DoSignoutAction } from '@soushians/authentication';
import { Location, CommonModule } from '@angular/common';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { UserFacadeService } from '@soushians/user';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
var /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
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
};
var UpdateLayoutConfigAction = /** @class */ (function () {
    function UpdateLayoutConfigAction(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    }
    return UpdateLayoutConfigAction;
}());
var OpenSidenavAction = /** @class */ (function () {
    function OpenSidenavAction() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
var CloseSidenavAction = /** @class */ (function () {
    function CloseSidenavAction() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
var ChangeLayout = /** @class */ (function () {
    function ChangeLayout(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
    return ChangeLayout;
}());
var ChangeSideNavMode = /** @class */ (function () {
    function ChangeSideNavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
    return ChangeSideNavMode;
}());
var ChangeSecondSidenavMode = /** @class */ (function () {
    function ChangeSecondSidenavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
    return ChangeSecondSidenavMode;
}());
var DoSignoutAction$1 = /** @class */ (function () {
    function DoSignoutAction$$1() {
        this.type = LayoutActionTypes.DO_SIGNOUT;
    }
    return DoSignoutAction$$1;
}());
var TitleChangedAction = /** @class */ (function () {
    function TitleChangedAction(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
    return TitleChangedAction;
}());
var OpenSecondSidenavAction = /** @class */ (function () {
    function OpenSecondSidenavAction() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
    return OpenSecondSidenavAction;
}());
var CloseSecondSidenavAction = /** @class */ (function () {
    function CloseSecondSidenavAction() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
    return CloseSecondSidenavAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: [],
    signoutAction: /** @type {?} */ ({})
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = initialState; }
    switch (action.type) {
        case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            return __assign({}, state$$1, action.payload);
        case CLOSE_SIDENAV:
            return __assign({}, state$$1, { showMainSidenav: false });
        case OPEN_SIDENAV:
            return __assign({}, state$$1, { showMainSidenav: true });
        case LayoutActionTypes.TITLE_CHANGED:
            return __assign({}, state$$1, { title: action.title });
        case LayoutActionTypes.CHANGE_LAYOUT:
            return __assign({}, state$$1, { layoutMode: action.name });
        case LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return __assign({}, state$$1, { mainSideNavMode: action.mode });
        case LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return __assign({}, state$$1, { showSecondSideNav: false });
        case LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return __assign({}, state$$1, { showSecondSideNav: true });
        case LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return __assign({}, state$$1, { secondSideNavMode: action.mode });
        default:
            return state$$1;
    }
}
var /** @type {?} */ getTitle = function (state$$1) { return state$$1.title; };
var /** @type {?} */ getShowMainSidenav = function (state$$1) { return state$$1.showMainSidenav; };
var /** @type {?} */ getMainSideNavMode = function (state$$1) { return state$$1.mainSideNavMode; };
var /** @type {?} */ getLayoutMode = function (state$$1) { return state$$1.layoutMode; };
var /** @type {?} */ getShowSecondSidebarStatus = function (state$$1) { return state$$1.showSecondSideNav; };
var /** @type {?} */ getSecondSidebarMode = function (state$$1) { return state$$1.secondSideNavMode; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
var ChangeToolbatToComfortableModeAction = /** @class */ (function () {
    function ChangeToolbatToComfortableModeAction() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
    return ChangeToolbatToComfortableModeAction;
}());
var ChangeToolbatToCompactModeAction = /** @class */ (function () {
    function ChangeToolbatToCompactModeAction() {
        this.type = ToolbarActionTypes.COMPACT;
    }
    return ChangeToolbatToCompactModeAction;
}());
var ChangeToolbatToSummaryModeAction = /** @class */ (function () {
    function ChangeToolbatToSummaryModeAction() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
    return ChangeToolbatToSummaryModeAction;
}());
var EnableComfortableModeAction = /** @class */ (function () {
    function EnableComfortableModeAction() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
    return EnableComfortableModeAction;
}());
var DisableComfortableModeAction = /** @class */ (function () {
    function DisableComfortableModeAction() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
    return DisableComfortableModeAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$1 = {
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
function Reducer$1(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = initialState$1; }
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            if (!state$$1.visibility)
                return __assign({}, state$$1, { mode: "hide" });
            return __assign({}, state$$1, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            if (!state$$1.visibility)
                return __assign({}, state$$1, { mode: "hide" });
            return __assign({}, state$$1, { mode: state$$1.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            if (!state$$1.visibility)
                return __assign({}, state$$1, { mode: "hide" });
            return __assign({}, state$$1, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            if (!state$$1.visibility)
                return __assign({}, state$$1, { mode: "hide" });
            return __assign({}, state$$1, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            if (!state$$1.visibility)
                return __assign({}, state$$1, { mode: "hide" });
            return __assign({}, state$$1, { mode: "compact", enableComfortableMode: false });
        case ToolbarActionTypes.VISIBLE:
            return __assign({}, state$$1, { visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return __assign({}, state$$1, { visibility: false });
        default:
            return state$$1;
    }
}
var /** @type {?} */ getToolbarMode = function (state$$1) { return state$$1.mode; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LayoutReducers = {
    layout: Reducer,
    toolbar: Reducer$1
};
//#region selectors
var /** @type {?} */ selectLayoutState = createFeatureSelector("layout");
//#endregion
var /** @type {?} */ getLayout = createSelector(selectLayoutState, function (state$$1) { return state$$1.layout; });
var /** @type {?} */ getTitle$1 = createSelector(getLayout, getTitle);
var /** @type {?} */ getShowMainSidenav$1 = createSelector(getLayout, getShowMainSidenav);
var /** @type {?} */ getMainSideNavMode$1 = createSelector(getLayout, getMainSideNavMode);
var /** @type {?} */ getLayoutMode$1 = createSelector(getLayout, getLayoutMode);
var /** @type {?} */ getShowSecondSidebarStatus$1 = createSelector(getLayout, getShowSecondSidebarStatus);
var /** @type {?} */ getSecondSidebarMode$1 = createSelector(getLayout, getSecondSidebarMode);
//#region toolbar
var /** @type {?} */ getLayoutToolbar = createSelector(selectLayoutState, function (state$$1) { return state$$1.toolbar; });
var /** @type {?} */ getLayoutToolbarMode = createSelector(getLayoutToolbar, getToolbarMode);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
    signoutAction: /** @type {?} */ ({})
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutConfigurationService = /** @class */ (function () {
    function LayoutConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getlayoutModuleConfig).subscribe(function (config) {
            if (!config)
                return;
            _this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            _this._config = Object.assign({}, _this._config, config.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(LayoutConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    LayoutConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    LayoutConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: LayoutConfigurationService, providedIn: "root" });
    return LayoutConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(store, signinService, configurationService) {
        this.store = store;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.closeSidebar = new EventEmitter();
        this.routes = this.configurationService.config$.map(function (config) { return config.menuItems; });
    }
    MainMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-layout-main-menu",
                    template: "<mat-list class=\"main-menu-container\">\n  <div *ngIf=\"authenticated | async\">\n    <a *ngFor=\"let item of routes | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\n      <span mdLine>{{item.title}}</span>\n    </a>\n  </div>\n</mat-list>",
                    styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"],
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
    MainMenuComponent.ctorParameters = function () { return [
        { type: Store },
        { type: SigninService },
        { type: LayoutConfigurationService }
    ]; };
    MainMenuComponent.propDecorators = {
        closeSidebar: [{ type: Output }],
        authenticated: [{ type: Input }],
        customerMobileInput: [{ type: ViewChild, args: ["customerMobileInput",] }]
    };
    return MainMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
    }
    /**
     * @return {?}
     */
    SearchBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SearchBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-search-box',
                    template: "<div class=\"search-box\">\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\n  </td-search-box>-->\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return []; };
    return SearchBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoContainerComponent = /** @class */ (function () {
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    LogoContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-logo-container",
                    template: "\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                    styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
                },] },
    ];
    /** @nocollapse */
    LogoContainerComponent.ctorParameters = function () { return [
        { type: LayoutConfigurationService }
    ]; };
    return LogoContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToolbarMenuComponent = /** @class */ (function () {
    function ToolbarMenuComponent(document, _location, store, configurationService) {
        var _this = this;
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.toolbarAnimationState = "compact";
        this.menuAnimationState = "compact";
        this.logoAnimationState = "compact";
        this.titleAnimationState = "compact";
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(function (config) { return (_this.config = config); });
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe(function (state$$1) {
            _this.menuAnimationState = state$$1;
            _this.logoAnimationState = state$$1;
            setTimeout(function () {
                _this.titleAnimationState = state$$1;
            }, 1);
            setTimeout(function () {
                _this.toolbarAnimationState = state$$1;
            }, 1);
        });
        // setTimeout(() => {
        // 	this.menuAnimationState = "compact";
        // }, 4000);
        this.menuItems$ = this.configurationService.config$.map(function (config) { return config.menuItems; });
        fromEvent(this.document.body, "scroll").subscribe(function () {
            var /** @type {?} */ scrolledAmount = _this.document.body.scrollTop;
            var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 100;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = _this.document.body.scrollTop;
            if (scrolledAmount == 0) {
                if (_this.config.mode == "comfortable")
                    return;
                _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 128 || scrollToTop) {
                if (_this.config.mode == "compact")
                    return;
                _this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (_this.config.mode == "summary")
                    return;
                _this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        });
    }
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.onWindowScroll = /**
     * @return {?}
     */
    function () {
        // of(1)
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.signout = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DoSignoutAction$1());
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.goback = /**
     * @return {?}
     */
    function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleSecondSidebar = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ action;
        this.showSecondSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleMainSidebar = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ action;
        this.showMainSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    };
    ToolbarMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-toolbar",
                    template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row>\n      <!-- <div id=\"background\"></div> -->\n      <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"displayName\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{displayName}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <button mat-button \n      *ngFor=\"let menu of menuItems$ | async\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[menu.route]\">\n      <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n      <span>{{menu.title}}</span>\n    </button>\n  </div>\n</mat-toolbar-row>\n</mat-toolbar>",
                    styles: ["#secondToolbar{transition:all;position:absolute;padding-right:25px}#logo{transition:all;position:absolute}#app-name{padding-right:8px}"],
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
                            transition("comfortable => compact", animate("800ms ease-out")),
                            // transition("comfortable => summary", animate("800ms ease-in")),
                            transition("summary => compact", animate("400ms ease-out")),
                            transition("summary => comfortable", animate("800ms ease-out")),
                            transition("compact => comfortable", animate("800ms ease-out")),
                            transition("compact => summary", animate("800ms ease-out"))
                        ]),
                        trigger("menuAnimation", [
                            state("comfortable", style({
                                "padding-right": "calc(50% - 195px)",
                                bottom: "25px"
                            })),
                            state("compact", style({
                                "padding-right": "25px",
                                bottom: "13px"
                            })),
                            state("summary", style({
                                "padding-right": "25px",
                                bottom: "14px"
                            })),
                            transition("comfortable => compact", animate("800ms ease-in")),
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
                            transition("comfortable => compact", animate("850ms ease-out")),
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
    ToolbarMenuComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Location },
        { type: Store },
        { type: LayoutConfigurationService }
    ]; };
    ToolbarMenuComponent.propDecorators = {
        showSidebarMenu: [{ type: Input }],
        app_config: [{ type: Input, args: ["app-config",] }],
        user: [{ type: Input }],
        displayName: [{ type: Input }],
        onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
    };
    return ToolbarMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    FooterComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-footer",
                    template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\n    {{app_config?.Config.FooterCopyright}}\n</div>",
                    styles: [":host{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent.propDecorators = {
        app_config: [{ type: Input, args: ["app-config",] }]
    };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TitleComponent = /** @class */ (function () {
    function TitleComponent(store, router) {
        var _this = this;
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
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                var /** @type {?} */ title = "";
                _this.mapper.forEach(function (mapper) {
                    var /** @type {?} */ res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                _this.store.dispatch(new TitleChangedAction("/ " + title || ""));
            }
        });
    }
    TitleComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-title",
                    template: "<div id=\"title\">\n    {{title$ | async}}\n</div>",
                    styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                },] },
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return TitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainComponent = /** @class */ (function () {
    function MainComponent(store, router, configService, userFacadeService) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.userFacadeService = userFacadeService;
        this.showSidebarMenu = new BehaviorSubject$1(true);
        this.width = 100;
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select(function (s) { return (/** @type {?} */ (s)).user.user.data; });
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
        this.router.events.filter(function (data) { return data instanceof NavigationEnd; }).subscribe(function (event) {
            var /** @type {?} */ hideSituations = [
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
        this.layoutMode.subscribe(function (mode) {
            if (!_this.mainSideNav)
                return;
            (/** @type {?} */ (_this.mainSideNav.nativeElement)).className = "";
            (/** @type {?} */ (_this.mainSideNav.nativeElement)).classList.add(mode);
        });
    }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    MainComponent.prototype.onSecondSidebarClosedStart = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSecondSidenavAction());
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.onSidebarClosedStart = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSidenavAction());
    };
    MainComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-main",
                    template: "<div #mainSideNav [className]=\"toolbarAnimationState | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <router-outlet name=\"footer_A\"></router-outlet>\n        <router-outlet name=\"footer_B\"></router-outlet>\n        <footer>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                    styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}"]
                },] },
    ];
    /** @nocollapse */
    MainComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router },
        { type: LayoutConfigurationService },
        { type: UserFacadeService }
    ]; };
    MainComponent.propDecorators = {
        app_config: [{ type: Input, args: ["app-config",] }],
        mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }]
    };
    return MainComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(function () { return new DoSignoutAction(); }));
    }
    LayoutEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LayoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "DoSignout$", void 0);
    return LayoutEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsLayoutModule = /** @class */ (function () {
    function NgsLayoutModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsLayoutModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
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
                        NgsConfigModule
                    ],
                    declarations: [
                        MainMenuComponent,
                        SearchBoxComponent,
                        LogoContainerComponent,
                        ToolbarMenuComponent,
                        FooterComponent,
                        TitleComponent,
                        MainComponent
                    ],
                    exports: [
                        MainMenuComponent,
                        SearchBoxComponent,
                        LogoContainerComponent,
                        ToolbarMenuComponent,
                        FooterComponent,
                        TitleComponent,
                        MainComponent
                    ]
                },] },
    ];
    return NgsLayoutModule;
}());
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
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
    return RootNgsLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵg, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, MainComponent as ɵi, SearchBoxComponent as ɵd, TitleComponent as ɵh, ToolbarMenuComponent as ɵf, LayoutEffects as ɵk, LayoutReducers as ɵj, LayoutConfigurationService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9QRU5fU0lERU5BViA9IFwiW0xheW91dF0gT3BlbiBTaWRlbmF2XCI7XHJcbmV4cG9ydCBjb25zdCBDTE9TRV9TSURFTkFWID0gXCJbTGF5b3V0XSBDbG9zZSBTaWRlbmF2XCI7XHJcblxyXG5leHBvcnQgZW51bSBMYXlvdXRBY3Rpb25UeXBlcyB7XHJcblx0VVBEQVRFX0xBWU9VVF9DT05GSUcgPSBcIltMYXlvdXRdIFVQREFURV9MQVlPVVRfQ09ORklHXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0xheW91dF0gZG8gc2lnbm91dFwiLFxyXG5cdFRJVExFX0NIQU5HRUQgPSBcIltMQVlPVVRdIFRJVExFX0NIQU5HRURcIixcclxuXHRDSEFOR0VfTEFZT1VUID0gXCJbTGF5b3V0XSBDaGFuZ2UgTGF5b3V0XCIsXHJcblx0Q0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIG1haW4gc2lkZW5hdiBtb2RlXCIsXHJcblx0T1BFTl9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gT3BlbiBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENMT1NFX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBDbG9zZSBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2Ugc2Vjb25kIHNpZGVuYXYgbW9kZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogTGF5b3V0Q29uZmlnTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gT1BFTl9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ0xPU0VfU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZUxheW91dCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2lkZU5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNlY29uZFNpZGVuYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPVxyXG5cdHwgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uXHJcblx0fCBPcGVuU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTaWRlbmF2QWN0aW9uXHJcblx0fCBDaGFuZ2VTaWRlTmF2TW9kZVxyXG5cdHwgQ2hhbmdlTGF5b3V0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFRpdGxlQ2hhbmdlZEFjdGlvblxyXG5cdHwgT3BlblNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGU7XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIGV4dGVuZHMgTGF5b3V0Q29uZmlnTW9kZWwge31cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5hY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuQ0xPU0VfU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuT1BFTl9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGl0bGU6IGFjdGlvbi50aXRsZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsYXlvdXRNb2RlOiBhY3Rpb24ubmFtZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlY29uZFNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhck1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb25zID1cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcblx0fCBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IFZpc2libGVUb29sYmFyQWN0aW9uXHJcblx0fCBJbnZpc2libGVUb29sYmFyTW9kZUFjdGlvbjtcclxuIiwiaW1wb3J0IHsgVG9vbGJhckFjdGlvblR5cGVzLCBUb29sYmFyQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRtb2RlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCI7XHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBib29sZWFuO1xyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogYm9vbGVhbjtcclxuXHR2aXNpYmlsaXR5OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2UsXHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBmYWxzZSxcclxuXHR2aXNpYmlsaXR5OiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUb29sYmFyQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBzdGF0ZS5lbmFibGVDb21mb3J0YWJsZU1vZGUgPyBcImNvbWZvcnRhYmxlXCIgOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcInN1bW1hcnlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb29sYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1vZGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi9sYXlvdXQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tVG9vbGJhciBmcm9tIFwiLi90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGUge1xyXG5cdGxheW91dDogbGF5b3V0LlN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UmVkdWNlcnMgPSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuUmVkdWNlcixcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5SZWR1Y2VyXHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRsYXlvdXQ6IExheW91dFN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0U3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TGF5b3V0U3RhdGU+KFwibGF5b3V0XCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLmxheW91dCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRUaXRsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRMYXlvdXRNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZyBleHRlbmRzIExheW91dENvbmZpZ01vZGVsIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBMYXlvdXRNb2R1bGVDb25maWcgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcIndpdGgtbWFyZ2luXCIsIC8vIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9cIixcclxuXHRcdFx0aWNvbjogXCJtdWx0aWxpbmVfY2hhcnRcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiLCBcIlVzZXJcIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMK1w5nCgcOYwq3DmcKHIMOYwqfDmMK1w5nChMObwoxcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL2NvbmZpZ3NcIixcclxuXHRcdFx0aWNvbjogXCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvc291cmNlXCIsXHJcblx0XHRcdGljb246IFwiZGV2aWNlX2h1YlwiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCosOYwq/DmMKxw5jCsyDDmMKzw5jCscOZwojDm8KMw5jCsyDDmcKHw5jCp1wiXHJcblx0XHR9XHJcblx0XSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb25cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPExheW91dE1vZHVsZUNvbmZpZz4oXCJMYXlvdXRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdC8vIHByaXZhdGUgX2NvbmZpZzogTGF5b3V0Q29uZmlnTW9kZWw7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBhbnk7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dE1vZHVsZUNvbmZpZz4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRsYXlvdXRNb2R1bGVDb25maWcpLnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24oY29uZmlnLkNvbmZpZykpO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1sYXlvdXQtbWFpbi1tZW51XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWxpc3QgY2xhc3M9XCJtYWluLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cImF1dGhlbnRpY2F0ZWQgfCBhc3luY1wiPlxyXG4gICAgPGEgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm91dGVzIHwgYXN5bmNcIiAoY2xpY2spPVwiY2xvc2VTaWRlYmFyLmVtaXQoKVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBtYXQtbGlzdC1pdGVtIFtyb3V0ZXJMaW5rXT1cIltpdGVtLnJvdXRlXVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e2l0ZW0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4gbWRMaW5lPnt7aXRlbS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L21hdC1saXN0PmAsXHJcblx0c3R5bGVzOiBbYC5hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9Lm1hdC1saXN0LWl0ZW0uYWN0aXZlIG1hdC1pY29ue2NvbG9yOiMwMDcyYWV9YS5tYXQtbGlzdC1pdGVtLmNoaWxke21hcmdpbi1yaWdodDoyMHB4fSNjbGVhclVzZXJNZW51SXRlbXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjEzcHg7dG9wOjEzcHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImNoaWxkTWVudVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIxXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51SXRlbVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBjbG9zZVNpZGViYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGF1dGhlbnRpY2F0ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGN1c3RvbWVyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRyb3V0ZXM6IGFueSA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpO1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY3VzdG9tZXJNb2JpbGVJbnB1dFwiKSBjdXN0b21lck1vYmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGBcclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5zaGF0ZWxMb2dvQW5pbWF0aW9ue2hlaWdodDozNXB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlXCI+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgICAgPCEtLSA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PiAtLT5cclxuICAgICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPScuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG4gICAgXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTE+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gXHJcbiAgICAgICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiXHJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxyXG4gICAgICBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYCNzZWNvbmRUb29sYmFye3RyYW5zaXRpb246YWxsO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmctcmlnaHQ6MjVweH0jbG9nb3t0cmFuc2l0aW9uOmFsbDtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcInBhZGRpbmctcmlnaHRcIjogXCJjYWxjKDUwJSAtIDE5NXB4KVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjI1cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwicGFkZGluZy1yaWdodFwiOiBcIjI1cHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcInBhZGRpbmctcmlnaHRcIjogXCIyNXB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRpdGxlQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcImxhcmdlclwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4NTBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMjhweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRsb2dvQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdHRpdGxlQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVJdGVtcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGxhc3RTY3JvbGw6IG51bWJlcjtcclxuXHRjb25maWc6IHRvb2xiYXJTdGF0ZTtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPHRvb2xiYXJTdGF0ZT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhcik7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLm1lbnVBbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHR0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcclxuXHRcdFx0fSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcblx0XHRcdH0sIDEpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdC8vIFx0dGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBcImNvbXBhY3RcIjtcclxuXHRcdC8vIH0sIDQwMDApO1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLm1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyk7XHJcblx0XHRmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5ib2R5LCBcInNjcm9sbFwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRsZXQgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRsZXQgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPCAxMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0aWYgKHNjcm9sbGVkQW1vdW50ID09IDApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbWZvcnRhYmxlXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsZWRBbW91bnQgPCAxMjggfHwgc2Nyb2xsVG9Ub3ApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbXBhY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwic3VtbWFyeVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcImJvZHk6c2Nyb2xsXCIsIFtdKVxyXG5cdG9uV2luZG93U2Nyb2xsKCkge1xyXG5cdFx0Ly8gb2YoMSlcclxuXHR9XHJcblx0c2lnbm91dCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERvU2lnbm91dEFjdGlvbigpKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxuXHR0b2dnbGVTZWNvbmRTaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHR0b2dnbGVNYWluU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIi8gXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gXCJAYW5ndWxhci9zZXJ2aWNlLXdvcmtlclwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgZ2V0VXNlckluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbY2xhc3NOYW1lXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIFxyXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgaWQ9XCJsYXlvdXQtc2lkbmF2XCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQlwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX0ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zZWNvbmRTaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuXHRcdC8vI2VuZHJlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHJcblx0XHR0aGlzLmxheW91dE1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRNb2RlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuZmlsdGVyKGRhdGEgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdHZhciBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlLnN1YnNjcmliZShtb2RlID0+IHtcclxuXHRcdFx0aWYgKCF0aGlzLm1haW5TaWRlTmF2KSByZXR1cm47XHJcblx0XHRcdCh0aGlzLm1haW5TaWRlTmF2Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTmFtZSA9IFwiXCI7XHJcblx0XHRcdCh0aGlzLm1haW5TaWRlTmF2Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQpLmNsYXNzTGlzdC5hZGQobW9kZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQvLyBcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUxheW91dChcIndpdGgtbWFyZ2luXCIpKTtcclxuXHQvLyB9XHJcblxyXG5cdG9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0b25TaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRBY3Rpb25UeXBlcyB9IGZyb20gXCIuL2FjdGlvbnMvbGF5b3V0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IE5nc0NvbmZpZ01vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0UmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTGF5b3V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xvZ28tY29udGFpbmVyL2xvZ28tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sYmFyTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRFZmZlY3RzIH0gZnJvbSBcIi4vbGF5b3V0LmVmZmVjdHNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHROZ3NDb25maWdNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0TWFpbk1lbnVDb21wb25lbnQsXHJcblx0XHRTZWFyY2hCb3hDb21wb25lbnQsXHJcblx0XHRMb2dvQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE1haW5Db21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHRNYWluQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBMYXlvdXRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJEb1NpZ25vdXRBY3Rpb24iLCJzdGF0ZSIsImxheW91dC5MYXlvdXRBY3Rpb25UeXBlcyIsImxheW91dC5DTE9TRV9TSURFTkFWIiwibGF5b3V0Lk9QRU5fU0lERU5BViIsImluaXRpYWxTdGF0ZSIsImxheW91dC5SZWR1Y2VyIiwiZnJvbVRvb2xiYXIuUmVkdWNlciIsImdldFRpdGxlIiwibGF5b3V0LmdldFRpdGxlIiwiZ2V0U2hvd01haW5TaWRlbmF2IiwibGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImdldE1haW5TaWRlTmF2TW9kZSIsImxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUiLCJnZXRMYXlvdXRNb2RlIiwibGF5b3V0LmdldExheW91dE1vZGUiLCJnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImdldFNlY29uZFNpZGViYXJNb2RlIiwibGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlIiwiZnJvbVRvb2xiYXIuZ2V0VG9vbGJhck1vZGUiLCJmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUiLCJCZWhhdmlvclN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEFBQU8scUJBQU0sWUFBWSxHQUFHLHVCQUF1QixDQUFDO0FBQ3BELEFBQU8scUJBQU0sYUFBYSxHQUFHLHdCQUF3QixDQUFDOzs7MEJBRzlCLCtCQUErQjtnQkFDekMscUJBQXFCO21CQUNsQix3QkFBd0I7bUJBQ3hCLHdCQUF3QjsrQkFDWixtQ0FBbUM7eUJBQ3pDLDhCQUE4QjswQkFDN0IsK0JBQStCO2dDQUN6QixxQ0FBcUM7O0FBR25FLElBQUE7SUFFQyxrQ0FBbUIsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7b0JBRDdCLGlCQUFpQixDQUFDLG9CQUFvQjtLQUNMO21DQW5CbEQ7SUFvQkMsQ0FBQTtBQUhELElBSUE7O29CQUNpQixZQUFZOzs0QkF0QjdCO0lBdUJDLENBQUE7QUFGRCxJQUlBOztvQkFDaUIsYUFBYTs7NkJBMUI5QjtJQTJCQyxDQUFBO0FBRkQsSUFJQTtJQUVDLHNCQUFtQixJQUFrRDtRQUFsRCxT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
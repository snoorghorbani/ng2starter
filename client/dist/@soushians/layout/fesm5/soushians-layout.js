import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getlayoutModuleConfig, NgsConfigModule } from '@soushians/config';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SigninService } from '@soushians/authentication';
import { Location, CommonModule } from '@angular/common';
import { DOCUMENT, BrowserModule } from '@angular/platform-browser';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
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
    SIGNOUT: "[Layout] signout",
    TITLE_CHANGED: "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT: "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE: "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR: "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR: "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE: "[Layout] Change second sidenav mode",
};
var UpdateLayoutConfigAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} name
     */
    function ChangeLayout(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
    return ChangeLayout;
}());
var ChangeSideNavMode = /** @class */ (function () {
    /**
     * @param {?} mode
     */
    function ChangeSideNavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
    return ChangeSideNavMode;
}());
var ChangeSecondSidenavMode = /** @class */ (function () {
    /**
     * @param {?} mode
     */
    function ChangeSecondSidenavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
    return ChangeSecondSidenavMode;
}());
var SignoutAction = /** @class */ (function () {
    function SignoutAction() {
        this.type = LayoutActionTypes.SIGNOUT;
    }
    return SignoutAction;
}());
var TitleChangedAction = /** @class */ (function () {
    /**
     * @param {?} title
     */
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
    menuItems: []
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
            return Object.assign({}, state$$1, action.payload);
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
    comfortableModeHaveBeenDone: false
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
            return Object.assign({}, state$$1, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            return Object.assign({}, state$$1, { mode: state$$1.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            return Object.assign({}, state$$1, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            return Object.assign({}, state$$1, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            return Object.assign({}, state$$1, { mode: "compact", enableComfortableMode: false });
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
    ]
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
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
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutConfigurationService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainMenuComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} signinService
     * @param {?} configurationService
     */
    function MainMenuComponent(store, signinService, configurationService) {
        this.store = store;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.closeSidebar = new EventEmitter();
        this.routes = this.configurationService.config$.map(function (config) { return config.menuItems; });
    }
    return MainMenuComponent;
}());
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
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    return SearchBoxComponent;
}());
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-search-box',
                template: "<div class=\"search-box\">\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\n  </td-search-box>-->\n</div>",
                styles: [""]
            },] },
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoContainerComponent = /** @class */ (function () {
    /**
     * @param {?} sdf
     */
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    return LogoContainerComponent;
}());
LogoContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "app-logo-container",
                template: "<div id=\"background\"></div>\n  <img class=\"shatelLogoAnimation\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
            },] },
];
/** @nocollapse */
LogoContainerComponent.ctorParameters = function () { return [
    { type: LayoutConfigurationService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToolbarMenuComponent = /** @class */ (function () {
    /**
     * @param {?} document
     * @param {?} _location
     * @param {?} store
     * @param {?} configurationService
     */
    function ToolbarMenuComponent(document, _location, store, configurationService) {
        var _this = this;
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(function (config) { return (_this.config = config); });
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.menuItems$ = this.configurationService.config$.map(function (config) { return config.menuItems; });
        fromEvent(this.document.body, "scroll").subscribe(function () {
            var /** @type {?} */ scrolledAmount = _this.document.body.scrollTop;
            var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 100;
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
    ToolbarMenuComponent.prototype.onWindowScroll = function () {
        // of(1)
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.signout = function () {
        this.store.dispatch(new SignoutAction());
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.goback = function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleSecondSidebar = function () {
        var /** @type {?} */ action;
        this.showSecondSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleMainSidebar = function () {
        var /** @type {?} */ action;
        this.showMainSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    };
    return ToolbarMenuComponent;
}());
ToolbarMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-toolbar",
                template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState | async\">\n  <mat-toolbar-row>\n    <app-logo-container fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-logo-container>\n\n    <button type=\"button\" *ngIf='showSidebarMenu' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n    <button *ngIf=\"!user.DisplayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"user.Username\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{user?.Username}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <button mat-button \n    *ngFor=\"let menu of menuItems$ | async\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"[menu.route]\" \n    >\n    <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n    <span>{{menu.title}}</span>\n  </button>\n</mat-toolbar-row>\n</mat-toolbar>",
                styles: [""],
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
    onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
};

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
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TitleComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} router
     */
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
    return TitleComponent;
}());
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-title',
                template: "<div id=\"title\">\n    {{title$ | async}}\n</div>",
                styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
            },] },
];
/** @nocollapse */
TitleComponent.ctorParameters = function () { return [
    { type: Store },
    { type: Router }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} router
     */
    function MainComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.showSidebarMenu = new BehaviorSubject$1(true);
        this.width = 100;
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select(function (s) { return ((s)).user.user.data; });
        this.user$.subscribe(function (data) {
            debugger;
        });
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
                ((event)).urlAfterRedirects == "/auth/signin",
                ((event)).urlAfterRedirects == "/auth/signup/register",
                ((event)).urlAfterRedirects == "/auth/signup/verification",
                ((event)).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(function (i) { return i; }))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        });
        this.layoutMode.subscribe(function (mode) {
            if (!_this.mainSideNav)
                return;
            ((_this.mainSideNav.nativeElement)).className = "";
            ((_this.mainSideNav.nativeElement)).classList.add(mode);
        });
    }
    /**
     * @return {?}
     */
    MainComponent.prototype.onSecondSidebarClosedStart = function () {
        this.store.dispatch(new CloseSecondSidenavAction());
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.onSidebarClosedStart = function () {
        this.store.dispatch(new CloseSidenavAction());
    };
    return MainComponent;
}());
MainComponent.decorators = [
    { type: Component, args: [{
                selector: "layout-main",
                template: "<div #mainSideNav [className]=\"toolbarAnimationState | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <router-outlet name=\"footer_A\"></router-outlet>\n        <router-outlet name=\"footer_B\"></router-outlet>\n        <footer>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}"]
            },] },
];
/** @nocollapse */
MainComponent.ctorParameters = function () { return [
    { type: Store },
    { type: Router }
]; };
MainComponent.propDecorators = {
    app_config: [{ type: Input, args: ["app-config",] }],
    mainSideNav: [{ type: ViewChild, args: ["mainSideNav",] }]
};

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
    NgsLayoutModule.forRoot = function (config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsLayoutModule;
}());
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
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
    }
    return RootNgsLayoutModule;
}());
RootNgsLayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [NgsLayoutModule, StoreModule.forFeature("layout", LayoutReducers)],
                exports: [NgsLayoutModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵg, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, MainComponent as ɵi, SearchBoxComponent as ɵd, TitleComponent as ɵh, ToolbarMenuComponent as ɵf, LayoutReducers as ɵj, LayoutConfigurationService as ɵc };
//# sourceMappingURL=soushians-layout.js.map

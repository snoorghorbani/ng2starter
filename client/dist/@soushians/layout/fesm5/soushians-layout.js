import { __read, __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, ViewChild, HostListener, NgModule, defineInjectable, inject } from '@angular/core';
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
    FULLSCREEN: "[Layout] FULLSCREEN",
    EXIT_FULLSCREEN: "[Layout] EXIT_FULLSCREEN",
    TOGGLE_FULLSCREEN: "[Layout] TOGGLE_FULLSCREEN",
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
var FullscreenAction = /** @class */ (function () {
    function FullscreenAction() {
        this.type = LayoutActionTypes.FULLSCREEN;
    }
    return FullscreenAction;
}());
var ExitFullscreenAction = /** @class */ (function () {
    function ExitFullscreenAction() {
        this.type = LayoutActionTypes.EXIT_FULLSCREEN;
    }
    return ExitFullscreenAction;
}());
var ToggleFullscreenAction = /** @class */ (function () {
    function ToggleFullscreenAction() {
        this.type = LayoutActionTypes.TOGGLE_FULLSCREEN;
    }
    return ToggleFullscreenAction;
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
    signoutAction: /** @type {?} */ ({}),
    fullscreen: false
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
            var /** @type {?} */ _state_1 = {};
            Object.keys(action.payload).forEach(function (k) {
                if (k in state$$1)
                    _state_1[k] = action.payload[k];
            });
            return __assign({}, state$$1, _state_1);
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
        case LayoutActionTypes.FULLSCREEN:
            return __assign({}, state$$1, { fullscreen: true });
        case LayoutActionTypes.EXIT_FULLSCREEN:
            return __assign({}, state$$1, { fullscreen: false });
        // case layout.LayoutActionTypes.TOGGLE_FULLSCREEN:
        // 	return {
        // 		...state,
        // 		fullscreen: state.fullscreen === true ? false : true
        // 	};
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
var /** @type {?} */ getFullscreenMode = function (state$$1) { return state$$1.fullscreen; };

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
var VisibleToolbarAction = /** @class */ (function () {
    function VisibleToolbarAction() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
    return VisibleToolbarAction;
}());
var InvisibleToolbarAction = /** @class */ (function () {
    function InvisibleToolbarAction() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
    return InvisibleToolbarAction;
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
            return __assign({}, state$$1, { mode: "compact", visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return __assign({}, state$$1, { mode: "hide", visibility: false });
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
var /** @type {?} */ getFullscreenMode$1 = createSelector(getLayout, getFullscreenMode);
//#region toolbar
var /** @type {?} */ getLayoutToolbar = createSelector(selectLayoutState, function (state$$1) { return state$$1.toolbar; });
var /** @type {?} */ getLayoutToolbarMode = createSelector(getLayoutToolbar, getToolbarMode);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ menu_item_authorization_operator = function (_a) {
    var _b = __read(_a, 2), routes = _b[0], user = _b[1];
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter(function (route) { return user.Roles.some(function (userRole) { return route.roles.indexOf(userRole) > -1; }); });
    }
};
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
    signoutAction: /** @type {?} */ ({}),
    menu_item_authorization_operator: menu_item_authorization_operator
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");

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
        this.store
            .select(getConfigs)
            .map(function (configs) { return configs.find(function (config) { return config.Name == "layout_config"; }); })
            .subscribe(function (config) {
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
        this.user$ = this.store.select(getAccountInfo);
        this._observe_on_layout_config_and_filter_routes();
    }
    /**
     * @return {?}
     */
    MainMenuComponent.prototype._observe_on_layout_config_and_filter_routes = /**
     * @return {?}
     */
    function () {
        this.routes$ = this.configurationService.config$.pipe(map(function (config) { return config.menuItems; }), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
    MainMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-layout-main-menu",
                    template: "<mat-list class=\"main-menu-container\">\n  <div *ngIf=\"authenticated | async\">\n    <a *ngFor=\"let item of routes$ | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\n      <span mdLine>{{item.title}}</span>\n    </a>\n  </div>\n</mat-list>",
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
        this.anchorsMode = false;
        this.user$ = this.store.select(getAccountInfo);
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(function (config) { return (_this.config = config); });
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe(function (state$$1) {
            setTimeout(function () { return (_this.menuAnimationState = state$$1); }, 1);
            setTimeout(function () { return (_this.logoAnimationState = state$$1); }, 1);
            setTimeout(function () { return (_this.titleAnimationState = state$$1); }, 1);
            setTimeout(function () { return (_this.toolbarAnimationState = state$$1); }, 1);
        });
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe(function () {
            var /** @type {?} */ scrolledAmount = _this.document.body.scrollTop;
            var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 &&
                _this.document.body.scrollHeight - document.body.offsetHeight - scrolledAmount > 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = scrolledAmount;
            if (!_this.config.visibility)
                return;
            if (scrolledAmount == 0) {
                if (_this.config.mode == "comfortable")
                    return;
                _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 200 || scrollToTop) {
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
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype._observe_on_layout_config_and_filter_routes = /**
     * @return {?}
     */
    function () {
        this.menuItems$ = this.configurationService.config$.pipe(map(function (config) { return config.menuItems; }), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
    ToolbarMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-toolbar",
                    template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row>\n      <!-- <div id=\"background\"></div> -->\n      <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"displayName\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{displayName}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <button mat-button \n      *ngFor=\"let menu of menuItems$ | async\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[menu.route]\">\n      <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n      <span>{{menu.title}}</span>\n    </button>\n  </div>\n</mat-toolbar-row>\n</mat-toolbar>",
                    styles: ["#logo,#secondToolbar{transition:all;position:absolute}#app-name{padding-right:8px}"],
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
                    styles: [":host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
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
        this.isFullscreen$ = this.store.select(getFullscreenMode$1);
        this.mode$ = this.isFullscreen$.map(function (mode) { return (mode ? "invisible" : "visible"); });
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
                    template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\n          <router-outlet name=\"footer_A\"></router-outlet>\n          <router-outlet name=\"footer_B\"></router-outlet>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                    styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"],
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
    function LayoutEffects(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(function () { return new DoSignoutAction(); }));
        this.fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(map(function () { return new InvisibleToolbarAction(); }));
        this.exit_fullscreen$ = this.actions$
            .ofType(LayoutActionTypes.EXIT_FULLSCREEN)
            .pipe(map(function () { return new VisibleToolbarAction(); }));
        this.fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(withLatestFrom(this.store.select(getFullscreenMode$1)), map(function (_a) {
            var _b = __read(_a, 2), action = _b[0], toolbarMode = _b[1];
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        }));
    }
    LayoutEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LayoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: Store }
    ]; };
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
                        NgsConfigModule,
                        RuleModule
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

export { LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, VisibleToolbarAction, FullscreenAction, ExitFullscreenAction, InvisibleToolbarAction, ToggleFullscreenAction, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FooterComponent as ɵg, LogoContainerComponent as ɵe, MainMenuComponent as ɵa, MainComponent as ɵi, SearchBoxComponent as ɵd, TitleComponent as ɵh, ToolbarMenuComponent as ɵf, LayoutEffects as ɵm, LayoutReducers as ɵj, Reducer as ɵk, Reducer$1 as ɵl, LayoutConfigurationService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT1BFTl9TSURFTkFWID0gXCJbTGF5b3V0XSBPcGVuIFNpZGVuYXZcIjtcclxuZXhwb3J0IGNvbnN0IENMT1NFX1NJREVOQVYgPSBcIltMYXlvdXRdIENsb3NlIFNpZGVuYXZcIjtcclxuXHJcbmV4cG9ydCBlbnVtIExheW91dEFjdGlvblR5cGVzIHtcclxuXHRVUERBVEVfTEFZT1VUX0NPTkZJRyA9IFwiW0xheW91dF0gVVBEQVRFX0xBWU9VVF9DT05GSUdcIixcclxuXHRET19TSUdOT1VUID0gXCJbTGF5b3V0XSBkbyBzaWdub3V0XCIsXHJcblx0VElUTEVfQ0hBTkdFRCA9IFwiW0xBWU9VVF0gVElUTEVfQ0hBTkdFRFwiLFxyXG5cdENIQU5HRV9MQVlPVVQgPSBcIltMYXlvdXRdIENoYW5nZSBMYXlvdXRcIixcclxuXHRDSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2UgbWFpbiBzaWRlbmF2IG1vZGVcIixcclxuXHRPUEVOX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBPcGVuIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0xPU0VfU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIENsb3NlIFNlY29uZCBTaWRlYmFyXCIsXHJcblx0Q0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBzZWNvbmQgc2lkZW5hdiBtb2RlXCIsXHJcblx0RlVMTFNDUkVFTiA9IFwiW0xheW91dF0gRlVMTFNDUkVFTlwiLFxyXG5cdEVYSVRfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gRVhJVF9GVUxMU0NSRUVOXCIsXHJcblx0VE9HR0xFX0ZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIFRPR0dMRV9GVUxMU0NSRUVOXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPExheW91dE1vZHVsZUNvbmZpZ01vZGVsPikge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBPUEVOX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDTE9TRV9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlTGF5b3V0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTaWRlTmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGl0bGVDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgdGl0bGU6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFeGl0RnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPVxyXG5cdHwgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uXHJcblx0fCBPcGVuU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTaWRlbmF2QWN0aW9uXHJcblx0fCBDaGFuZ2VTaWRlTmF2TW9kZVxyXG5cdHwgQ2hhbmdlTGF5b3V0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFRpdGxlQ2hhbmdlZEFjdGlvblxyXG5cdHwgT3BlblNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgRnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgRXhpdEZ1bGxzY3JlZW5BY3Rpb25cclxuXHR8IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlXHJcblx0fCBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uO1xyXG4iLCJpbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4uL2FjdGlvbnMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c2hvd01haW5TaWRlbmF2PzogYm9vbGVhbjtcclxuXHRzaG93U2Vjb25kU2lkZU5hdj86IGJvb2xlYW47XHJcblx0c2Vjb25kU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWFpblNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1lbnVJdGVtcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHRyb2xlczogc3RyaW5nW107XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRzaG93TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0c3RpY2t5TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0bGF5b3V0TW9kZT86IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiO1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHNpZ25vdXRBY3Rpb246IEFjdGlvbjtcclxuXHRmdWxsc2NyZWVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRmdWxsc2NyZWVuOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogbGF5b3V0LkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc6XHJcblx0XHRcdGNvbnN0IF9zdGF0ZSA9IHt9O1xyXG5cdFx0XHRPYmplY3Qua2V5cyhhY3Rpb24ucGF5bG9hZCkuZm9yRWFjaChrID0+IHtcclxuXHRcdFx0XHRpZiAoayBpbiBzdGF0ZSkgX3N0YXRlW2tdID0gYWN0aW9uLnBheWxvYWRba107XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdC4uLl9zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuQ0xPU0VfU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuT1BFTl9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0dGl0bGU6IGFjdGlvbi50aXRsZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX0xBWU9VVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsYXlvdXRNb2RlOiBhY3Rpb24ubmFtZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9NQUlOX1NJREVOQVZFX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bWFpblNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNlY29uZFNpZGVOYXZNb2RlOiBhY3Rpb24ubW9kZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdC8vIGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOOlxyXG5cdFx0Ly8gXHRyZXR1cm4ge1xyXG5cdFx0Ly8gXHRcdC4uLnN0YXRlLFxyXG5cdFx0Ly8gXHRcdGZ1bGxzY3JlZW46IHN0YXRlLmZ1bGxzY3JlZW4gPT09IHRydWUgPyBmYWxzZSA6IHRydWVcclxuXHRcdC8vIFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudGl0bGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tYWluU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd1NlY29uZFNpZGVOYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNlY29uZFNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5mdWxsc2NyZWVuO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFRvb2xiYXJBY3Rpb25UeXBlcyB7XHJcblx0Q09NUE9SVEFCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIENPTVBPUlRBQkxFXCIsXHJcblx0Q09NUEFDVCA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUEFDVFwiLFxyXG5cdFNVTU1BUlkgPSBcIltMYXlvdXRdW1RPT0xCQVJdIFNVTU1BUllcIixcclxuXHRFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRU5BQkxFX0NPTUZPUlRBQkxFX01PREVcIixcclxuXHRESVNCQUxFX0NPTUZPUlRBQkxFX01PREUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdFZJU0lCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIFZJU0lCTEVcIixcclxuXHRJTlZJU0lCTEUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIElOVklTSUJMRVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkNPTVBBQ1Q7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5FTkFCTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZpc2libGVUb29sYmFyQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEludmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCB0eXBlIFRvb2xiYXJBY3Rpb25zID1cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcblx0fCBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IFZpc2libGVUb29sYmFyQWN0aW9uXHJcblx0fCBJbnZpc2libGVUb29sYmFyQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBUb29sYmFyQWN0aW9uVHlwZXMsIFRvb2xiYXJBY3Rpb25zIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG1vZGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIjtcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGJvb2xlYW47XHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBib29sZWFuO1xyXG5cdHZpc2liaWxpdHk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZSxcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGZhbHNlLFxyXG5cdHZpc2liaWxpdHk6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFRvb2xiYXJBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkNPTVBBQ1Q6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkNPTVBPUlRBQkxFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IHN0YXRlLmVuYWJsZUNvbWZvcnRhYmxlTW9kZSA/IFwiY29tZm9ydGFibGVcIiA6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5TVU1NQVJZOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwic3VtbWFyeVwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5FTkFCTEVfQ09NRk9SVEFCTEVfTU9ERTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRcdFx0XHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLklOVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImhpZGVcIixcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRvb2xiYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubW9kZTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuL2xheW91dC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21Ub29sYmFyIGZyb20gXCIuL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRTdGF0ZSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuU3RhdGU7XHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXRSZWR1Y2VycyA9IHtcclxuXHRsYXlvdXQ6IGxheW91dC5SZWR1Y2VyLFxyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlJlZHVjZXJcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdGxheW91dDogTGF5b3V0U3RhdGU7XHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RMYXlvdXRTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxMYXlvdXRTdGF0ZT4oXCJsYXlvdXRcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXQgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUubGF5b3V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFRpdGxlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93TWFpblNpZGVuYXYgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldE1haW5TaWRlTmF2TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldExheW91dE1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHJcbi8vI3JlZ2lvbiB0b29sYmFyXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS50b29sYmFyKTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dFRvb2xiYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0VG9vbGJhciwgZnJvbVRvb2xiYXIuZ2V0VG9vbGJhck1vZGUpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB7XHJcblx0c2hvd01haW5TaWRlbmF2PzogYm9vbGVhbjtcclxuXHRzaG93U2Vjb25kU2lkZU5hdj86IGJvb2xlYW47XHJcblx0c2Vjb25kU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWFpblNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1lbnVJdGVtcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHRyb2xlczogc3RyaW5nW107XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRzaG93TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0c3RpY2t5TGVmdE5hdkJhcj86IGJvb2xlYW47XHJcblx0bGF5b3V0TW9kZT86IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiO1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHNpZ25vdXRBY3Rpb24/OiBBY3Rpb247XHJcblx0bWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3I/OiAoWyByb3V0ZXMsIHVzZXIgXTogW2FueSwgYW55XSkgPT4gYW55W107XHJcbn1cclxuXHJcbmNvbnN0IG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yID0gZnVuY3Rpb24oWyByb3V0ZXMsIHVzZXIgXSkge1xyXG5cdGlmICghdXNlci5Sb2xlcykgcmV0dXJuIFtdO1xyXG5cdGlmICh1c2VyLlJvbGVzLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiByb3V0ZXMuZmlsdGVyKHJvdXRlID0+IHVzZXIuUm9sZXMuc29tZSh1c2VyUm9sZSA9PiByb3V0ZS5yb2xlcy5pbmRleE9mKHVzZXJSb2xlKSA+IC0xKSk7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCA9IHtcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlLFxyXG5cdHNlY29uZFNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy98IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy98IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwid2l0aC1tYXJnaW5cIiwgLy8gfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIixcclxuXHR0aXRsZTogXCJcIixcclxuXHRtZW51SXRlbXM6IFtcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL1wiLFxyXG5cdFx0XHRpY29uOiBcIm11bHRpbGluZV9jaGFydFwiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIsIFwiVXNlclwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwrXDmcKBw5jCrcOZwocgw5jCp8OYwrXDmcKEw5vCjFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvY29uZmlnc1wiLFxyXG5cdFx0XHRpY29uOiBcInNldHRpbmdzXCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9zb3VyY2VcIixcclxuXHRcdFx0aWNvbjogXCJkZXZpY2VfaHViXCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMKiw5jCr8OYwrHDmMKzIMOYwrPDmMKxw5nCiMObwozDmMKzIMOZwofDmMKnXCJcclxuXHRcdH1cclxuXHRdLFxyXG5cdHNpZ25vdXRBY3Rpb246IHt9IGFzIEFjdGlvbixcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KFwiTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWxcIik7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q29uZmlncyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdC8vIHByaXZhdGUgX2NvbmZpZzogTGF5b3V0Q29uZmlnTW9kZWw7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRNb2R1bGVDb25maWdNb2RlbDtcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0Q29uZmlncylcclxuXHRcdFx0Lm1hcChjb25maWdzID0+IGNvbmZpZ3MuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0aWYgKCFjb25maWcpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24oY29uZmlnLkNvbmZpZykpO1xyXG5cdFx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgVXNlck1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWxheW91dC1tYWluLW1lbnVcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtbGlzdCBjbGFzcz1cIm1haW4tbWVudS1jb250YWluZXJcIj5cclxuICA8ZGl2ICpuZ0lmPVwiYXV0aGVudGljYXRlZCB8IGFzeW5jXCI+XHJcbiAgICA8YSAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3V0ZXMkIHwgYXN5bmNcIiAoY2xpY2spPVwiY2xvc2VTaWRlYmFyLmVtaXQoKVwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBtYXQtbGlzdC1pdGVtIFtyb3V0ZXJMaW5rXT1cIltpdGVtLnJvdXRlXVwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e2l0ZW0uaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4gbWRMaW5lPnt7aXRlbS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gIDwvZGl2PlxyXG48L21hdC1saXN0PmAsXHJcblx0c3R5bGVzOiBbYC5hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xNSl9Lm1hdC1saXN0LWl0ZW0uYWN0aXZlIG1hdC1pY29ue2NvbG9yOiMwMDcyYWV9YS5tYXQtbGlzdC1pdGVtLmNoaWxke21hcmdpbi1yaWdodDoyMHB4fSNjbGVhclVzZXJNZW51SXRlbXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjEzcHg7dG9wOjEzcHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImNoaWxkTWVudVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjBcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMS4xKScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIxXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51SXRlbVwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaW5hY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiNDhweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBjbG9zZVNpZGViYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgYXV0aGVudGljYXRlZDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGN1c3RvbWVyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRyb3V0ZXMkOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJjdXN0b21lck1vYmlsZUlucHV0XCIpIGN1c3RvbWVyTW9iaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIHNpZ25pblNlcnZpY2U6IFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblx0fVxyXG5cdF9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKSB7XHJcblx0XHR0aGlzLnJvdXRlcyQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcubWVudUl0ZW1zKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXIkKSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAnYXBwLXNlYXJjaC1ib3gnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlYXJjaC1ib3hcIj5cclxuICA8IS0tPHRkLXNlYXJjaC1ib3ggY2xhc3M9XCJzZWFyY2gtYm94LWNvbnRhaW5lclwiIGJhY2tJY29uPVwiYXJyb3dfYmFja1wiIHBsYWNlaG9sZGVyPVwiw5jCrMOYwrPDmMKqw5jCrMOZwohcIiBbc2hvd1VuZGVybGluZV09XCJmYWxzZVwiIFtkZWJvdW5jZV09XCI1MDBcIiBbYWx3YXlzVmlzaWJsZV09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgKHNlYXJjaERlYm91bmNlKT1cInNlYXJjaElucHV0VGVybSA9ICRldmVudFwiIChzZWFyY2gpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKGNsZWFyKT1cInNlYXJjaElucHV0VGVybSA9ICcnXCI+XHJcbiAgPC90ZC1zZWFyY2gtYm94Pi0tPlxyXG48L2Rpdj5gLFxyXG4gICAgICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1sb2dvLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgXHJcbjwhLS08aW1nIGNsYXNzPVwibG9nb1R5cGVBbmltYXRpb25cIiBzcmM9Jy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby10eXBlLnBuZycgLz4tLT5gLFxyXG5cdHN0eWxlczogW2Auc2hhdGVsTG9nb0FuaW1hdGlvbntoZWlnaHQ6MzVweDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjJ9I2JhY2tncm91bmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDt3aWR0aDozMDBweDtoZWlnaHQ6NzBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2RmOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0TGlzdGVuZXIsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbVwiO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvZnJvbUV2ZW50XCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIGZyb21MYXlvdXQgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7XHJcblx0RG9TaWdub3V0QWN0aW9uLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cywgZ2V0TGF5b3V0VG9vbGJhciB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSBhcyB0b29sYmFyU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdG9vbGJhci5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IG1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LXRvb2xiYXJcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBbQHRvb2xiYXJBbmltYXRpb25dPVwidG9vbGJhckFuaW1hdGlvblN0YXRlXCI+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgICAgPCEtLSA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPjwvZGl2PiAtLT5cclxuICAgICAgPGltZyBbQGxvZ29BbmltYXRpb25dPVwibG9nb0FuaW1hdGlvblN0YXRlXCIgaWQ9XCJsb2dvXCIgcm91dGVyTGluaz0nLycgc3JjPScuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NoYXRlbC1sb2dvLnBuZycgLz5cclxuXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj0nc2hvd1NpZGViYXJNZW51ICYmIGZhbHNlJyAoY2xpY2spPVwidG9nZ2xlTWFpblNpZGViYXIoKVwiIG1hdC1pY29uLWJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIFtAdGl0bGVBbmltYXRpb25dPVwidGl0bGVBbmltYXRpb25TdGF0ZVwiIGlkPSdhcHAtbmFtZSc+XHJcbiAgICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkFwcFRpdGxlfX1cclxuICAgIDwvc3Bhbj5cclxuICAgIDxhcHAtdGl0bGUgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj48L2FwcC10aXRsZT5cclxuICAgIDxhcHAtc2VhcmNoLWJveCBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIj48L2FwcC1zZWFyY2gtYm94PlxyXG4gICAgXHJcblxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gcm91dGVyTGluaz1cImF1dGgvc2lnbmluXCI+XHJcbiAgICAgIMOZwojDmMKxw5nCiMOYwq9cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwidG9vbGJhck1lbnUxXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHt7ZGlzcGxheU5hbWV9fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxtYXQtbWVudSAjdG9vbGJhck1lbnUxPlxyXG4gICAgICA8YnV0dG9uIHJvdXRlckxpbms9Jy91c2VyL3BhbmVsJyBtYXQtbWVudS1pdGVtPlxyXG4gICAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICDDmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPSdzaWdub3V0KCknIG1hdC1tZW51LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1pY29uPmV4aXRfdG9fYXBwPC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj7DmMKuw5jCscOZwojDmMKsPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVNlY29uZFNpZGViYXIoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT0nZ29iYWNrKCknPlxyXG4gICAgICA8bWF0LWljb24+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIFxyXG4gIDwvbWF0LXRvb2xiYXItcm93PlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kVG9vbGJhclwiIFtAbWVudUFuaW1hdGlvbl09XCJtZW51QW5pbWF0aW9uU3RhdGVcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFxyXG4gICAgICAqbmdGb3I9XCJsZXQgbWVudSBvZiBtZW51SXRlbXMkIHwgYXN5bmNcIlxyXG4gICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcclxuICAgICAgW3JvdXRlckxpbmtdPVwiW21lbnUucm91dGVdXCI+XHJcbiAgICAgIDwhLS0gPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3ttZW51Lmljb259fTwvbWF0LWljb24+IC0tPlxyXG4gICAgICA8c3Bhbj57e21lbnUudGl0bGV9fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L21hdC10b29sYmFyLXJvdz5cclxuPC9tYXQtdG9vbGJhcj5gLFxyXG5cdHN0eWxlczogW2AjbG9nbywjc2Vjb25kVG9vbGJhcnt0cmFuc2l0aW9uOmFsbDtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHh9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMjVweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNDVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE0cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidGl0bGVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwibGFyZ2VyXCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMXB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjg1MG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRvb2xiYXJBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMTE5LDE4MSw2MywxKVwiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBcInJnYmEoMzAsMzAsMzAsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzM3ZoXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEyOHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTY0cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItMTI4cHhcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhck1lbnVDb21wb25lbnQge1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpIHNob3dTaWRlYmFyTWVudTtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblx0QElucHV0KCkgdXNlcjogVXNlck1vZGVsO1xyXG5cdEBJbnB1dCgpIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51QW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdGxvZ29BbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0dGl0bGVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUl0ZW1zJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0bGFzdFNjcm9sbDogbnVtYmVyO1xyXG5cdGNvbmZpZzogdG9vbGJhclN0YXRlO1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8dG9vbGJhclN0YXRlPjtcclxuXHRhbmNob3JzTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG5cdFx0cHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyKTtcclxuXHRcdHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubWVudUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5sb2dvQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRpdGxlQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cclxuXHRcdGZyb21FdmVudCh0aGlzLmRvY3VtZW50LmJvZHksIFwic2Nyb2xsXCIpLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdGxldCBzY3JvbGxlZEFtb3VudCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHRcdGxldCBzY3JvbGxUb1RvcCA9XHJcblx0XHRcdFx0c2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwICYmXHJcblx0XHRcdFx0dGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPiAzMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gc2Nyb2xsZWRBbW91bnQ7XHJcblx0XHRcdGlmICghdGhpcy5jb25maWcudmlzaWJpbGl0eSkgcmV0dXJuO1xyXG5cdFx0XHRpZiAoc2Nyb2xsZWRBbW91bnQgPT0gMCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tZm9ydGFibGVcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxlZEFtb3VudCA8IDIwMCB8fCBzY3JvbGxUb1RvcCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tcGFjdFwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJzdW1tYXJ5XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwiYm9keTpzY3JvbGxcIiwgW10pXHJcblx0b25XaW5kb3dTY3JvbGwoKSB7XHJcblx0XHQvLyBvZigxKVxyXG5cdH1cclxuXHRzaWdub3V0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRG9TaWdub3V0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG5cdHRvZ2dsZVNlY29uZFNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdHRvZ2dsZU1haW5TaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMubWVudUl0ZW1zJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvb3RlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwiZm9vdGVyLXRleHRcIj5cclxuICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkZvb3RlckNvcHlyaWdodH19XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7cGFkZGluZzo4cHg7b3ZlcmZsb3c6aGlkZGVufS5mb290ZXItdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MTJweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFRpdGxlQ2hhbmdlZEFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0VGl0bGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC10aXRsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cInRpdGxlXCI+XHJcbiAgICB7e3RpdGxlJCB8IGFzeW5jfX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3RpdGxle21hcmdpbi1yaWdodDotMzBweDtmb250LXdlaWdodDpib2xkZXI7Zm9udC1zaXplOjEzcHg7cGFkZGluZzoxOHB4IDQwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IHtcclxuXHR0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRtYXBwZXI6IHsgKHZhbDogTmF2aWdhdGlvbkVuZCk6IHN0cmluZyB9W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMubWFwcGVyID0gW107XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdwcm9maWxlLWVkaXQnKSkgPyAnw5nCiMObwozDmMKxw5jCp8ObwozDmMK0IMOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3N1Y2Nlc3MtcGF5bWVudC1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5nCvsOYwrHDmMKvw5jCp8OYwq7DmMKqIMOZwofDmMKnw5vCjCDDmcKFw5nCiMOZwoHDmcKCJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2ZhaWxlZC1sb2dpbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCrsOYwrfDmMKnw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnYWN0aXZlLXNlc3Npb24taW5mbycpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCqMOYwrPDmMKqw5nChyDDmcKBw5jCucOYwqfDmcKEJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Nlc3Npb24tZGV0YWlsLXJlcG9ydCcpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCp8OYwqrDmMK1w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZGFpbHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOYwrHDmcKIw5jCssOYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdtb250aGx5LXNlc3Npb24tcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOYwqrDmMKsw5nChcObwozDmMK5w5vCjCDDmcKFw5jCp8OZwofDmMKnw5nChsOZwocnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5zdGFydHNXaXRoKCcvcGFja2FnZXMvdXNlci1wYWNrYWdlcycpKSA/ICfDmcKEw5vCjMOYwrPDmMKqIMOZwr7DmsKpw5vCjMOYwqwgw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnL2NoYW5nZS1wYXNzd29yZCcpKSA/ICfDmMKqw5jCusObwozDm8KMw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdHRoaXMudGl0bGUkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VGl0bGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcclxuXHRcdFx0XHR0aGlzLm1hcHBlci5mb3JFYWNoKG1hcHBlciA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gbWFwcGVyKGV2ZW50KTtcclxuXHRcdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGl0bGUgPSByZXM7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUaXRsZUNoYW5nZWRBY3Rpb24oXCIvIFwiICsgdGl0bGUgfHwgXCJcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICBcclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGlkPVwibGF5b3V0LXNpZG5hdlwiIFtjbGFzc05hbWVdPVwibGF5b3V0TW9kZSB8IGFzeW5jXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3RlciBbQG1vZGVdPVwibW9kZSQgfCBhc3luY1wiIHJ1bGVBbmNob3I9XCJsYXlvdXRfZm9vdGVyXCI+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0FcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0JcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8YXBwLWZvb3RlciBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9hcHAtZm9vdGVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjcHVyY2hhc2UtZmFiLWJ1dHRvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MjNweDtsZWZ0OjMxcHh9bWQtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0ud2l0aC1tYXJnaW4gI2FwcC1tYWluLWNvbnRhaW5lcnttYXJnaW4tdG9wOjI1cHg7cGFkZGluZy1yaWdodDoyNXB4O3BhZGRpbmctbGVmdDoyNXB4fS5zZWNvbmRfc2lkZWJhcnt3aWR0aDozODBweH0ubW9yZS1kZXRhaWx7bWFyZ2luOjhweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxMHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk2JTtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlfS5tb3JlLWRldGFpbDpob3ZlcntiYWNrZ3JvdW5kOiNlZWV9Zm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7bWFyZ2luLXRvcDoyNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiAocyBhcyBhbnkpLnVzZXIudXNlci5kYXRhKTtcclxuXHRcdHRoaXMuZGlzcGxheU5hbWUkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5tYWluU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cdFx0dGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyTW9kZSk7XHJcblxyXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cdFx0dGhpcy5tb2RlJCA9IHRoaXMuaXNGdWxsc2NyZWVuJC5tYXAobW9kZSA9PiAobW9kZSA/IFwiaW52aXNpYmxlXCIgOiBcInZpc2libGVcIikpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zZWNvbmRTaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuXHRcdC8vI2VuZHJlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHJcblx0XHR0aGlzLmxheW91dE1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRNb2RlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuZmlsdGVyKGRhdGEgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdHZhciBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLnBpcGUobWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKS5waXBlKFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpKSxcclxuXHRcdG1hcCgoWyBhY3Rpb24sIHRvb2xiYXJNb2RlIF0pID0+IHtcclxuXHRcdFx0aWYgKHRvb2xiYXJNb2RlKSByZXR1cm4gbmV3IEV4aXRGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIG5ldyBGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0UnVsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0TWFpbk1lbnVDb21wb25lbnQsXHJcblx0XHRTZWFyY2hCb3hDb21wb25lbnQsXHJcblx0XHRMb2dvQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE1haW5Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IExheW91dE1vZHVsZUNvbmZpZ01vZGVsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJsYXlvdXRcIiwgTGF5b3V0UmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgTGF5b3V0RWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NMYXlvdXRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRG9TaWdub3V0QWN0aW9uIiwic3RhdGUiLCJsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMiLCJsYXlvdXQuQ0xPU0VfU0lERU5BViIsImxheW91dC5PUEVOX1NJREVOQVYiLCJpbml0aWFsU3RhdGUiLCJsYXlvdXQuUmVkdWNlciIsImZyb21Ub29sYmFyLlJlZHVjZXIiLCJnZXRUaXRsZSIsImxheW91dC5nZXRUaXRsZSIsImdldFNob3dNYWluU2lkZW5hdiIsImxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJnZXRNYWluU2lkZU5hdk1vZGUiLCJsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlIiwiZ2V0TGF5b3V0TW9kZSIsImxheW91dC5nZXRMYXlvdXRNb2RlIiwiZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJnZXRTZWNvbmRTaWRlYmFyTW9kZSIsImxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSIsImdldEZ1bGxzY3JlZW5Nb2RlIiwibGF5b3V0LmdldEZ1bGxzY3JlZW5Nb2RlIiwiZnJvbVRvb2xiYXIuZ2V0VG9vbGJhck1vZGUiLCJmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUiLCJCZWhhdmlvclN1YmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFH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
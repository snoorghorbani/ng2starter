import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, Output, Input, ViewChild, HostListener, HostBinding, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { DOCUMENT, Location, CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { getConfigs, NgsConfigModule } from '@soushians/config';
import { __assign, __read, __decorate, __metadata } from 'tslib';
import 'rxjs/Observable';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SigninService, DoSignoutAction as DoSignoutAction$1 } from '@soushians/authentication';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, combineLatest, withLatestFrom } from 'rxjs/operators';
import { getAccountInfo, UserFacadeService } from '@soushians/user';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { RuleModule } from '@soushians/rule';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var OPEN_SIDENAV = "[Layout] Open Sidenav";
/** @type {?} */
var CLOSE_SIDENAV = "[Layout] Close Sidenav";
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
if (false) {
    /** @type {?} */
    UpdateLayoutConfigAction.prototype.type;
    /** @type {?} */
    UpdateLayoutConfigAction.prototype.payload;
}
var OpenSidenavAction = /** @class */ (function () {
    function OpenSidenavAction() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
if (false) {
    /** @type {?} */
    OpenSidenavAction.prototype.type;
}
var CloseSidenavAction = /** @class */ (function () {
    function CloseSidenavAction() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
if (false) {
    /** @type {?} */
    CloseSidenavAction.prototype.type;
}
var ChangeLayout = /** @class */ (function () {
    function ChangeLayout(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
    return ChangeLayout;
}());
if (false) {
    /** @type {?} */
    ChangeLayout.prototype.type;
    /** @type {?} */
    ChangeLayout.prototype.name;
}
var ChangeSideNavMode = /** @class */ (function () {
    function ChangeSideNavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
    return ChangeSideNavMode;
}());
if (false) {
    /** @type {?} */
    ChangeSideNavMode.prototype.type;
    /** @type {?} */
    ChangeSideNavMode.prototype.mode;
}
var ChangeSecondSidenavMode = /** @class */ (function () {
    function ChangeSecondSidenavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
    return ChangeSecondSidenavMode;
}());
if (false) {
    /** @type {?} */
    ChangeSecondSidenavMode.prototype.type;
    /** @type {?} */
    ChangeSecondSidenavMode.prototype.mode;
}
var DoSignoutAction = /** @class */ (function () {
    function DoSignoutAction() {
        this.type = LayoutActionTypes.DO_SIGNOUT;
    }
    return DoSignoutAction;
}());
if (false) {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
var TitleChangedAction = /** @class */ (function () {
    function TitleChangedAction(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
    return TitleChangedAction;
}());
if (false) {
    /** @type {?} */
    TitleChangedAction.prototype.type;
    /** @type {?} */
    TitleChangedAction.prototype.title;
}
var OpenSecondSidenavAction = /** @class */ (function () {
    function OpenSecondSidenavAction() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
    return OpenSecondSidenavAction;
}());
if (false) {
    /** @type {?} */
    OpenSecondSidenavAction.prototype.type;
}
var CloseSecondSidenavAction = /** @class */ (function () {
    function CloseSecondSidenavAction() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
    return CloseSecondSidenavAction;
}());
if (false) {
    /** @type {?} */
    CloseSecondSidenavAction.prototype.type;
}
var FullscreenAction = /** @class */ (function () {
    function FullscreenAction() {
        this.type = LayoutActionTypes.FULLSCREEN;
    }
    return FullscreenAction;
}());
if (false) {
    /** @type {?} */
    FullscreenAction.prototype.type;
}
var ExitFullscreenAction = /** @class */ (function () {
    function ExitFullscreenAction() {
        this.type = LayoutActionTypes.EXIT_FULLSCREEN;
    }
    return ExitFullscreenAction;
}());
if (false) {
    /** @type {?} */
    ExitFullscreenAction.prototype.type;
}
var ToggleFullscreenAction = /** @class */ (function () {
    function ToggleFullscreenAction() {
        this.type = LayoutActionTypes.TOGGLE_FULLSCREEN;
    }
    return ToggleFullscreenAction;
}());
if (false) {
    /** @type {?} */
    ToggleFullscreenAction.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?|undefined} */
    State.prototype.showMainSidenav;
    /** @type {?|undefined} */
    State.prototype.showSecondSideNav;
    /** @type {?|undefined} */
    State.prototype.secondSideNavMode;
    /** @type {?|undefined} */
    State.prototype.mainSideNavMode;
    /** @type {?|undefined} */
    State.prototype.menuItems;
    /** @type {?|undefined} */
    State.prototype.showLeftNavBar;
    /** @type {?|undefined} */
    State.prototype.stickyLeftNavBar;
    /** @type {?|undefined} */
    State.prototype.layoutMode;
    /** @type {?|undefined} */
    State.prototype.title;
    /** @type {?} */
    State.prototype.signoutAction;
    /** @type {?} */
    State.prototype.fullscreen;
}
/** @type {?} */
var initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: [],
    signoutAction: (/** @type {?} */ ({})),
    fullscreen: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            /** @type {?} */
            var _state_1 = {};
            Object.keys(action.payload).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                if (k in state)
                    _state_1[k] = action.payload[k];
            }));
            return __assign({}, state, _state_1);
        case CLOSE_SIDENAV:
            return __assign({}, state, { showMainSidenav: false });
        case OPEN_SIDENAV:
            return __assign({}, state, { showMainSidenav: true });
        case LayoutActionTypes.TITLE_CHANGED:
            return __assign({}, state, { title: action.title });
        case LayoutActionTypes.CHANGE_LAYOUT:
            return __assign({}, state, { layoutMode: action.name });
        case LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return __assign({}, state, { mainSideNavMode: action.mode });
        case LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return __assign({}, state, { showSecondSideNav: false });
        case LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return __assign({}, state, { showSecondSideNav: true });
        case LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return __assign({}, state, { secondSideNavMode: action.mode });
        case LayoutActionTypes.FULLSCREEN:
            return __assign({}, state, { fullscreen: true });
        case LayoutActionTypes.EXIT_FULLSCREEN:
            return __assign({}, state, { fullscreen: false });
        // case layout.LayoutActionTypes.TOGGLE_FULLSCREEN:
        // 	return {
        // 		...state,
        // 		fullscreen: state.fullscreen === true ? false : true
        // 	};
        default:
            return state;
    }
}
/** @type {?} */
var getShowSidenav = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showMainSidenav; });
/** @type {?} */
var getTitle = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.title; });
/** @type {?} */
var getShowMainSidenav = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showMainSidenav; });
/** @type {?} */
var getMainSideNavMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.mainSideNavMode; });
/** @type {?} */
var getLayoutMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.layoutMode; });
/** @type {?} */
var getShowSecondSidebarStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.showSecondSideNav; });
/** @type {?} */
var getSecondSidebarMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.secondSideNavMode; });
/** @type {?} */
var getFullscreenMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.fullscreen; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    ChangeToolbatToComfortableModeAction.prototype.type;
}
var ChangeToolbatToCompactModeAction = /** @class */ (function () {
    function ChangeToolbatToCompactModeAction() {
        this.type = ToolbarActionTypes.COMPACT;
    }
    return ChangeToolbatToCompactModeAction;
}());
if (false) {
    /** @type {?} */
    ChangeToolbatToCompactModeAction.prototype.type;
}
var ChangeToolbatToSummaryModeAction = /** @class */ (function () {
    function ChangeToolbatToSummaryModeAction() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
    return ChangeToolbatToSummaryModeAction;
}());
if (false) {
    /** @type {?} */
    ChangeToolbatToSummaryModeAction.prototype.type;
}
var EnableComfortableModeAction = /** @class */ (function () {
    function EnableComfortableModeAction() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
    return EnableComfortableModeAction;
}());
if (false) {
    /** @type {?} */
    EnableComfortableModeAction.prototype.type;
}
var DisableComfortableModeAction = /** @class */ (function () {
    function DisableComfortableModeAction() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
    return DisableComfortableModeAction;
}());
if (false) {
    /** @type {?} */
    DisableComfortableModeAction.prototype.type;
}
var VisibleToolbarAction = /** @class */ (function () {
    function VisibleToolbarAction() {
        this.type = ToolbarActionTypes.VISIBLE;
    }
    return VisibleToolbarAction;
}());
if (false) {
    /** @type {?} */
    VisibleToolbarAction.prototype.type;
}
var InvisibleToolbarAction = /** @class */ (function () {
    function InvisibleToolbarAction() {
        this.type = ToolbarActionTypes.INVISIBLE;
    }
    return InvisibleToolbarAction;
}());
if (false) {
    /** @type {?} */
    InvisibleToolbarAction.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$1() { }
if (false) {
    /** @type {?} */
    State$1.prototype.mode;
    /** @type {?} */
    State$1.prototype.enableComfortableMode;
    /** @type {?} */
    State$1.prototype.comfortableModeHaveBeenDone;
    /** @type {?} */
    State$1.prototype.visibility;
}
/** @type {?} */
var initialState$1 = {
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
function Reducer$1(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            if (!state.visibility)
                return __assign({}, state, { mode: "hide" });
            return __assign({}, state, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            if (!state.visibility)
                return __assign({}, state, { mode: "hide" });
            return __assign({}, state, { mode: state.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            if (!state.visibility)
                return __assign({}, state, { mode: "hide" });
            return __assign({}, state, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            if (!state.visibility)
                return __assign({}, state, { mode: "hide" });
            return __assign({}, state, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            if (!state.visibility)
                return __assign({}, state, { mode: "hide" });
            return __assign({}, state, { mode: "compact", enableComfortableMode: false });
        case ToolbarActionTypes.VISIBLE:
            return __assign({}, state, { mode: "compact", visibility: true });
        case ToolbarActionTypes.INVISIBLE:
            return __assign({}, state, { mode: "hide", visibility: false });
        default:
            return state;
    }
}
/** @type {?} */
var getToolbarMode = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.mode; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LayoutState() { }
if (false) {
    /** @type {?} */
    LayoutState.prototype.layout;
    /** @type {?} */
    LayoutState.prototype.toolbar;
}
/** @type {?} */
var LayoutReducers = {
    layout: Reducer,
    toolbar: Reducer$1
};
/**
 * @record
 */
function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.layout;
    /** @type {?} */
    FeatureState.prototype.toolbar;
}
//#region selectors
/** @type {?} */
var selectLayoutState = createFeatureSelector("layout");
//#endregion
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.layout; };
/** @type {?} */
var getLayout = createSelector(selectLayoutState, (ɵ0));
/** @type {?} */
var getTitle$1 = createSelector(getLayout, getTitle);
/** @type {?} */
var getShowMainSidenav$1 = createSelector(getLayout, getShowMainSidenav);
/** @type {?} */
var getMainSideNavMode$1 = createSelector(getLayout, getMainSideNavMode);
/** @type {?} */
var getLayoutMode$1 = createSelector(getLayout, getLayoutMode);
/** @type {?} */
var getShowSecondSidebarStatus$1 = createSelector(getLayout, getShowSecondSidebarStatus);
/** @type {?} */
var getSecondSidebarMode$1 = createSelector(getLayout, getSecondSidebarMode);
/** @type {?} */
var getFullscreenMode$1 = createSelector(getLayout, getFullscreenMode);
//#region toolbar
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.toolbar; };
/** @type {?} */
var getLayoutToolbar = createSelector(selectLayoutState, (ɵ1));
/** @type {?} */
var getLayoutToolbarMode = createSelector(getLayoutToolbar, getToolbarMode);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LayoutModuleConfigModel() { }
if (false) {
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.showMainSidenav;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.showSecondSideNav;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.secondSideNavMode;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.mainSideNavMode;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.menuItems;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.showLeftNavBar;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.stickyLeftNavBar;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.layoutMode;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.title;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.signoutAction;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.menu_item_authorization_operator;
    /** @type {?|undefined} */
    LayoutModuleConfigModel.prototype.theme;
}
/** @type {?} */
var menu_item_authorization_operator = (/**
 * @param {?} __0
 * @return {?}
 */
function (_a) {
    var _b = __read(_a, 2), routes = _b[0], user = _b[1];
    if (!user.Roles)
        return [];
    if (user.Roles.length == 0) {
        return [];
    }
    else {
        return routes.filter((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return user.Roles.some((/**
         * @param {?} userRole
         * @return {?}
         */
        function (userRole) { return route.roles.indexOf(userRole) > -1; })); }));
    }
});
var ɵ0$1 = menu_item_authorization_operator;
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
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
    signoutAction: (/** @type {?} */ ({})),
    menu_item_authorization_operator: menu_item_authorization_operator
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("LayoutModuleConfigModel");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .map((/**
         * @param {?} configs
         * @return {?}
         */
        function (configs) { return configs.find((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.Name == "layout_config"; })); }))
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            if (!config)
                return;
            _this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            _this._config = Object.assign({}, _this._config, config.Config);
            _this.config$.next(_this._config);
        }));
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
                },] }
    ];
    /** @nocollapse */
    LayoutConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: LayoutConfigurationService, providedIn: "root" });
    return LayoutConfigurationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutConfigurationService.prototype._config;
    /** @type {?} */
    LayoutConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    LayoutConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.routes$ = this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.menuItems; })), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
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
    MainMenuComponent.ctorParameters = function () { return [
        { type: Store },
        { type: SigninService },
        { type: LayoutConfigurationService }
    ]; };
    MainMenuComponent.propDecorators = {
        closeSidebar: [{ type: Output }],
        authenticated: [{ type: Input }],
        customerMobileInput: [{ type: ViewChild, args: ["customerMobileInput", { static: false },] }]
    };
    return MainMenuComponent;
}());
if (false) {
    /** @type {?} */
    MainMenuComponent.prototype.closeSidebar;
    /** @type {?} */
    MainMenuComponent.prototype.authenticated;
    /** @type {?} */
    MainMenuComponent.prototype.user$;
    /** @type {?} */
    MainMenuComponent.prototype.customerStatus$;
    /** @type {?} */
    MainMenuComponent.prototype.routes$;
    /** @type {?} */
    MainMenuComponent.prototype.customerMobileInput;
    /**
     * @type {?}
     * @private
     */
    MainMenuComponent.prototype.store;
    /** @type {?} */
    MainMenuComponent.prototype.signinService;
    /** @type {?} */
    MainMenuComponent.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"search-box\">\r\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\r\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\r\n  </td-search-box>-->\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SearchBoxComponent.ctorParameters = function () { return []; };
    return SearchBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoContainerComponent = /** @class */ (function () {
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    LogoContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-logo-container",
                    template: "\r\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                    styles: [".logoAnimation{height:36px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
                }] }
    ];
    /** @nocollapse */
    LogoContainerComponent.ctorParameters = function () { return [
        { type: LayoutConfigurationService }
    ]; };
    return LogoContainerComponent;
}());
if (false) {
    /** @type {?} */
    LogoContainerComponent.prototype.toolbarAnimationState;
    /**
     * @type {?}
     * @private
     */
    LogoContainerComponent.prototype.sdf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.menuAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.logoAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.titleAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.toolbarAnimationState = state); }), 1);
        }));
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var scrolledAmount = _this.document.body.scrollTop;
            /** @type {?} */
            var scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = _this.document.body.scrollTop;
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
        }));
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
        this.store.dispatch(new DoSignoutAction());
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
        /** @type {?} */
        var action;
        this.showSecondSidenav.subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        }));
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleMainSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action;
        this.showMainSidenav.subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            action = state ? new CloseSidenavAction() : new OpenSidenavAction();
        }));
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype._observe_on_layout_config_and_filter_routes = /**
     * @return {?}
     */
    function () {
        this.menuItems$ = this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.menuItems; })), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
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
if (false) {
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSecondSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showSidebarMenu;
    /** @type {?} */
    ToolbarMenuComponent.prototype.app_config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.user;
    /** @type {?} */
    ToolbarMenuComponent.prototype.displayName;
    /** @type {?} */
    ToolbarMenuComponent.prototype.user$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.showMainSidenav;
    /** @type {?} */
    ToolbarMenuComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.menuAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.logoAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.titleAnimationState;
    /** @type {?} */
    ToolbarMenuComponent.prototype.menuItems$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.lastScroll;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config;
    /** @type {?} */
    ToolbarMenuComponent.prototype.config$;
    /** @type {?} */
    ToolbarMenuComponent.prototype.anchorsMode;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuComponent.prototype._location;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuComponent.prototype.store;
    /** @type {?} */
    ToolbarMenuComponent.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\r\n    {{app_config?.Config.FooterCopyright}}\r\n</div>",
                    styles: [":host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
                }] }
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent.propDecorators = {
        app_config: [{ type: Input, args: ["app-config",] }]
    };
    return FooterComponent;
}());
if (false) {
    /** @type {?} */
    FooterComponent.prototype.app_config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var title = "";
                _this.mapper.forEach((/**
                 * @param {?} mapper
                 * @return {?}
                 */
                function (mapper) {
                    /** @type {?} */
                    var res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                }));
                _this.store.dispatch(new TitleChangedAction("" + title || ""));
            }
        }));
    }
    TitleComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-title",
                    template: "<div id=\"title\">\r\n    {{title$ | async}}\r\n</div>",
                    styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                }] }
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return TitleComponent;
}());
if (false) {
    /** @type {?} */
    TitleComponent.prototype.title$;
    /** @type {?} */
    TitleComponent.prototype.mapper;
    /**
     * @type {?}
     * @private
     */
    TitleComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    TitleComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgsLayoutMainComponent = /** @class */ (function () {
    function NgsLayoutMainComponent(store, router, configService, translateService, userFacadeService) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.configService = configService;
        this.translateService = translateService;
        this.userFacadeService = userFacadeService;
        this.showSidebarMenu = new BehaviorSubject$1(true);
        this.width = 100;
        this._set_i18n_resource();
        this.configService.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.theme = config.theme;
            _this.theme_A = config.theme == "theme_A";
            _this.theme_B = config.theme == "theme_B";
        }));
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return ((/** @type {?} */ (s))).user.user.data; }));
        this.displayName$ = this.userFacadeService.getDisplayName();
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.isFullscreen$ = this.store.select(getFullscreenMode$1);
        this.mode$ = this.isFullscreen$.map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (mode ? "invisible" : "visible"); }));
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
        this.router.events.filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data instanceof NavigationEnd; })).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var hideSituations = [
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signin",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/register",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/auth/signup/verification",
                ((/** @type {?} */ (event))).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i; })))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        }));
    }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    NgsLayoutMainComponent.prototype.onSecondSidebarClosedStart = 
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSecondSidenavAction());
    };
    /**
     * @return {?}
     */
    NgsLayoutMainComponent.prototype.onSidebarClosedStart = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new CloseSidenavAction());
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    NgsLayoutMainComponent.prototype._set_i18n_resource = /**
     * private methods
     * @return {?}
     */
    function () {
        this.translateService.setTranslation("en", {
            __signin: "Signin",
            __signup: "Signup",
            __account_mangement: "Account",
            __signout: "Signout"
        });
        this.translateService.setTranslation("fa", {
            __signin: "ورود",
            __signup: "ثبت نام",
            __account_mangement: "مدیریت کاربری",
            __signout: "خروج"
        });
    };
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
    NgsLayoutMainComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router },
        { type: LayoutConfigurationService },
        { type: TranslateService },
        { type: UserFacadeService }
    ]; };
    NgsLayoutMainComponent.propDecorators = {
        app_config: [{ type: Input, args: ["app-config",] }],
        mainSideNav: [{ type: ViewChild, args: ["mainSideNav", { static: false },] }],
        theme_A: [{ type: HostBinding, args: ["class.theme_A",] }],
        theme_B: [{ type: HostBinding, args: ["class.theme_B",] }]
    };
    return NgsLayoutMainComponent;
}());
if (false) {
    /** @type {?} */
    NgsLayoutMainComponent.prototype.app_config;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mode$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.user$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.displayName$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.isFullscreen$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.progressStatus$;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showSidebarMenu;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showMainSidenav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mainSidenavMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.layoutMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.width;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.showSecondSidenav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.secondSidenavMode;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.mainSideNav;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme_A;
    /** @type {?} */
    NgsLayoutMainComponent.prototype.theme_B;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    NgsLayoutMainComponent.prototype.userFacadeService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$, router, store) {
        this.actions$ = actions$;
        this.router = router;
        this.store = store;
        this.DoSignout$ = this.actions$.pipe(ofType(LayoutActionTypes.DO_SIGNOUT), map((/**
         * @return {?}
         */
        function () { return new DoSignoutAction$1(); })));
        this.fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.FULLSCREEN), map((/**
         * @return {?}
         */
        function () { return new InvisibleToolbarAction(); })));
        this.exit_fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.EXIT_FULLSCREEN), map((/**
         * @return {?}
         */
        function () { return new VisibleToolbarAction(); })));
        this.fullscren_toolbar$ = this.actions$.pipe(ofType(LayoutActionTypes.TOGGLE_FULLSCREEN), withLatestFrom(this.store.select(getFullscreenMode$1)), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), action = _b[0], toolbarMode = _b[1];
            if (toolbarMode)
                return new ExitFullscreenAction();
            else
                return new FullscreenAction();
        })));
    }
    LayoutEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    LayoutEffects.prototype.DoSignout$;
    /** @type {?} */
    LayoutEffects.prototype.fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.exit_fullscreen$;
    /** @type {?} */
    LayoutEffects.prototype.fullscren_toolbar$;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LayoutEffects.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToolbarMenuThemeBComponent = /** @class */ (function () {
    function ToolbarMenuThemeBComponent(document, _location, store, translateService, configurationService) {
        var _this = this;
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
        this.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.store.select(getLayoutToolbarMode).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.menuAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.logoAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.titleAnimationState = state); }), 1);
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this.toolbarAnimationState = state); }), 1);
        }));
        this._observe_on_layout_config_and_filter_routes();
        fromEvent(this.document.body, "scroll").subscribe((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var scrolledAmount = _this.document.body.scrollTop;
            /** @type {?} */
            var scrollToTop = scrolledAmount - _this.lastScroll < 0 &&
                _this.document.body.scrollHeight - document.body.offsetHeight - scrolledAmount > 300;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = scrolledAmount;
            if (!_this.config.visibility)
                return;
            if (scrolledAmount == 0) {
                if (_this.config.mode == "comfortable")
                    return;
                _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 150 || scrollToTop) {
                if (_this.config.mode == "compact")
                    return;
                _this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (_this.config.mode == "summary")
                    return;
                _this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        }));
    }
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.onWindowScroll = /**
     * @return {?}
     */
    function () {
        // of(1)
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.signout = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DoSignoutAction());
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.goback = /**
     * @return {?}
     */
    function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.toggleSecondSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action;
        this.showSecondSidenav.subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        }));
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype.toggleMainSidebar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var action;
        this.showMainSidenav.subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            action = state ? new CloseSidenavAction() : new OpenSidenavAction();
        }));
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuThemeBComponent.prototype._observe_on_layout_config_and_filter_routes = /**
     * @return {?}
     */
    function () {
        this.menuItems$ = this.configurationService.config$.pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.menuItems; })), combineLatest(this.user$), map(this.configurationService.config$.getValue().menu_item_authorization_operator));
    };
    ToolbarMenuThemeBComponent.decorators = [
        { type: Component, args: [{
                    selector: "layout-toolbar-b",
                    template: "<mat-toolbar dir=\"rtl\" color=\"primary\" [@toolbarAnimation]=\"toolbarAnimationState\">\r\n  <mat-toolbar-row dir=\"rtl\" id=\"firstToolbar\">\r\n    <!-- <div id=\"background\"></div> -->\r\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/logos/logo-type.png' />\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\"\r\n      fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\r\n      {{app_config?.Config.AppTitle}}\r\n    </span>\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n\r\n\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\r\n      <span [translate]=\"'__signin'\"></span>\r\n    </button>\r\n    <button translate *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\r\n      {{'__signup' | translate}}\r\n    </button>\r\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\r\n      <div id=\"acccountName\">\r\n        {{displayName}}\r\n      </div>\r\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n        <span translate=\"__account_mangement\">\r\n        </span>\r\n      </button>\r\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span translate>__signout</span>\r\n      </button>\r\n    </mat-menu>\r\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)='goback()'>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\r\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\r\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" [routerLink]=\"menu.route\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\r\n        <span>{{menu.title}}</span>\r\n      </button>\r\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>",
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
    ToolbarMenuThemeBComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Location },
        { type: Store },
        { type: TranslateService },
        { type: LayoutConfigurationService }
    ]; };
    ToolbarMenuThemeBComponent.propDecorators = {
        showSidebarMenu: [{ type: Input }],
        app_config: [{ type: Input, args: ["app-config",] }],
        user: [{ type: Input }],
        displayName: [{ type: Input }],
        onWindowScroll: [{ type: HostListener, args: ["body:scroll", [],] }]
    };
    return ToolbarMenuThemeBComponent;
}());
if (false) {
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showSecondSidenav;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showSidebarMenu;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.app_config;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.user;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.displayName;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.user$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.showMainSidenav;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.toolbarAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.menuAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.logoAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.titleAnimationState;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.menuItems$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.lastScroll;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.config;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.config$;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.anchorsMode;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuThemeBComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuThemeBComponent.prototype._location;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuThemeBComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ToolbarMenuThemeBComponent.prototype.translateService;
    /** @type {?} */
    ToolbarMenuThemeBComponent.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            providers: [
                { provide: LOCALE_ID, useValue: "en en-US" },
                { provide: MODULE_CONFIG_TOKEN, useValue: config }
            ]
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
    return NgsLayoutModule;
}());
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.layout = "8.0.10";
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
    /** @nocollapse */
    RootNgsLayoutModule.ctorParameters = function () { return []; };
    return RootNgsLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChangeLayout, ChangeSecondSidenavMode, ChangeSideNavMode, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, CloseSecondSidenavAction, CloseSidenavAction, DisableComfortableModeAction, EnableComfortableModeAction, ExitFullscreenAction, FullscreenAction, InvisibleToolbarAction, LayoutActionTypes, LayoutOutlets, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG, NgsLayoutMainComponent, NgsLayoutModule, OpenSecondSidenavAction, OpenSidenavAction, RootNgsLayoutModule, TitleChangedAction, ToggleFullscreenAction, VisibleToolbarAction, MainMenuComponent as ɵa, LayoutConfigurationService as ɵc, SearchBoxComponent as ɵd, LogoContainerComponent as ɵe, ToolbarMenuComponent as ɵf, ToolbarMenuThemeBComponent as ɵg, FooterComponent as ɵh, TitleComponent as ɵi, LayoutReducers as ɵj, Reducer as ɵl, Reducer$1 as ɵm, LayoutEffects as ɵn };
//# sourceMappingURL=soushians-layout.js.map

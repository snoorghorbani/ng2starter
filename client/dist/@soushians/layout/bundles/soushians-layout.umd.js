(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/animations'), require('@soushians/authentication'), require('rxjs/operators'), require('@soushians/user'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs/observable/fromEvent'), require('@angular/router'), require('rxjs'), require('@ngx-translate/core'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/do'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@ngrx/effects'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material'), require('@soushians/rule')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@ngrx/store', '@angular/core', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/animations', '@soushians/authentication', 'rxjs/operators', '@soushians/user', '@angular/common', '@angular/platform-browser', 'rxjs/observable/fromEvent', '@angular/router', 'rxjs', '@ngx-translate/core', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@ngrx/effects', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material', '@soushians/rule'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.layout = {}),null,global.ng.core,global.rxjs.BehaviorSubject,null,global.ng.animations,null,global.rxjs.operators,null,global.ng.common,global.ng.platformBrowser,global.rxjs['observable/fromEvent'],global.ng.router,global.rxjs,null,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/do'],global.rxjs['add/operator/catch'],global.rxjs['add/observable/empty'],null,global.ng.forms,global.ng.common.http,global.ng['flex-layout'],global.ng.material,null));
}(this, (function (exports,i2,i0,BehaviorSubject,config,animations,authentication,operators,user,common,platformBrowser,fromEvent,router,rxjs,core,map,mergeMap,_do,_catch,empty,effects,forms,http,flexLayout,material,rule) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    var DoSignoutAction = /** @class */ (function () {
        function DoSignoutAction() {
            this.type = LayoutActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        signoutAction: /** @type {?} */ ({}),
        fullscreen: false
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
                /** @type {?} */
                var _state_1 = {};
                Object.keys(action.payload).forEach(function (k) {
                    if (k in state)
                        _state_1[k] = action.payload[k];
                });
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
    var getTitle = function (state) { return state.title; };
    /** @type {?} */
    var getShowMainSidenav = function (state) { return state.showMainSidenav; };
    /** @type {?} */
    var getMainSideNavMode = function (state) { return state.mainSideNavMode; };
    /** @type {?} */
    var getLayoutMode = function (state) { return state.layoutMode; };
    /** @type {?} */
    var getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
    /** @type {?} */
    var getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
    /** @type {?} */
    var getFullscreenMode = function (state) { return state.fullscreen; };

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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        if (state === void 0) {
            state = initialState$1;
        }
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
    var getToolbarMode = function (state) { return state.mode; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LayoutReducers = {
        layout: Reducer,
        toolbar: Reducer$1
    };
    /** @type {?} */
    var selectLayoutState = i2.createFeatureSelector("layout");
    /** @type {?} */
    var getLayout = i2.createSelector(selectLayoutState, function (state) { return state.layout; });
    /** @type {?} */
    var getTitle$1 = i2.createSelector(getLayout, getTitle);
    /** @type {?} */
    var getShowMainSidenav$1 = i2.createSelector(getLayout, getShowMainSidenav);
    /** @type {?} */
    var getMainSideNavMode$1 = i2.createSelector(getLayout, getMainSideNavMode);
    /** @type {?} */
    var getLayoutMode$1 = i2.createSelector(getLayout, getLayoutMode);
    /** @type {?} */
    var getShowSecondSidebarStatus$1 = i2.createSelector(getLayout, getShowSecondSidebarStatus);
    /** @type {?} */
    var getSecondSidebarMode$1 = i2.createSelector(getLayout, getSecondSidebarMode);
    /** @type {?} */
    var getFullscreenMode$1 = i2.createSelector(getLayout, getFullscreenMode);
    /** @type {?} */
    var getLayoutToolbar = i2.createSelector(selectLayoutState, function (state) { return state.toolbar; });
    /** @type {?} */
    var getLayoutToolbarMode = i2.createSelector(getLayoutToolbar, getToolbarMode);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var menu_item_authorization_operator = function (_a) {
        var _b = __read(_a, 2), routes = _b[0], user$$1 = _b[1];
        if (!user$$1.Roles)
            return [];
        if (user$$1.Roles.length == 0) {
            return [];
        }
        else {
            return routes.filter(function (route) { return user$$1.Roles.some(function (userRole) { return route.roles.indexOf(userRole) > -1; }); });
        }
    };
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
        signoutAction: /** @type {?} */ ({}),
        menu_item_authorization_operator: menu_item_authorization_operator
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("LayoutModuleConfigModel");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutConfigurationService = /** @class */ (function () {
        function LayoutConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new BehaviorSubject.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store
                .select(config.getConfigs)
                .map(function (configs) { return configs.find(function (config$$1) { return config$$1.Name == "layout_config"; }); })
                .subscribe(function (config$$1) {
                if (!config$$1)
                    return;
                _this.store.dispatch(new UpdateLayoutConfigAction(config$$1.Config));
                _this._config = Object.assign({}, _this._config, config$$1.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(LayoutConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        LayoutConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        LayoutConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: LayoutConfigurationService, providedIn: "root" });
        return LayoutConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MainMenuComponent = /** @class */ (function () {
        function MainMenuComponent(store, signinService, configurationService) {
            this.store = store;
            this.signinService = signinService;
            this.configurationService = configurationService;
            this.closeSidebar = new i0.EventEmitter();
            this.user$ = this.store.select(user.getAccountInfo);
            this._observe_on_layout_config_and_filter_routes();
        }
        /**
         * @return {?}
         */
        MainMenuComponent.prototype._observe_on_layout_config_and_filter_routes = /**
         * @return {?}
         */
            function () {
                this.routes$ = this.configurationService.config$.pipe(operators.map(function (config$$1) { return config$$1.menuItems; }), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
            };
        MainMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-layout-main-menu",
                        template: "<mat-list class=\"main-menu-container\">\n  <div *ngIf=\"authenticated | async\">\n    <a *ngFor=\"let item of routes$ | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\n      <span mdLine>{{item.title}}</span>\n    </a>\n  </div>\n</mat-list>",
                        styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"],
                        animations: [
                            animations.trigger("childMenu", [
                                animations.state("inactive", animations.style({
                                    // transform: 'scale(1)',
                                    height: "0px",
                                    opacity: "0"
                                })),
                                animations.state("active", animations.style({
                                    // transform: 'scale(1.1)',
                                    height: "48px",
                                    opacity: "1"
                                })),
                                animations.transition("inactive => active", animations.animate("100ms ease-in")),
                                animations.transition("active => inactive", animations.animate("100ms ease-out"))
                            ]),
                            animations.trigger("menuItem", [
                                animations.state("inactive", animations.style({
                                    height: "48px"
                                })),
                                animations.state("active", animations.style({
                                    height: "100px"
                                })),
                                animations.transition("inactive => active", animations.animate("100ms ease-in")),
                                animations.transition("active => inactive", animations.animate("100ms ease-out"))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        MainMenuComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: authentication.SigninService },
                { type: LayoutConfigurationService }
            ];
        };
        MainMenuComponent.propDecorators = {
            closeSidebar: [{ type: i0.Output }],
            authenticated: [{ type: i0.Input }],
            customerMobileInput: [{ type: i0.ViewChild, args: ["customerMobileInput",] }]
        };
        return MainMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            { type: i0.Component, args: [{
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LogoContainerComponent = /** @class */ (function () {
        function LogoContainerComponent(sdf) {
            this.sdf = sdf;
        }
        LogoContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-logo-container",
                        template: "\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                        styles: [".logoAnimation{height:36px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
                    },] },
        ];
        /** @nocollapse */
        LogoContainerComponent.ctorParameters = function () {
            return [
                { type: LayoutConfigurationService }
            ];
        };
        return LogoContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this.user$ = this.store.select(user.getAccountInfo);
            this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            this.config$ = this.store.select(getLayoutToolbar);
            this.config$.subscribe(function (config$$1) { return (_this.config = config$$1); });
            this.lastScroll = this.document.body.scrollTop;
            this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
            this.showMainSidenav = this.store.select(getShowMainSidenav$1);
            this.store.select(getLayoutToolbarMode).subscribe(function (state) {
                setTimeout(function () { return (_this.menuAnimationState = state); }, 1);
                setTimeout(function () { return (_this.logoAnimationState = state); }, 1);
                setTimeout(function () { return (_this.titleAnimationState = state); }, 1);
                setTimeout(function () { return (_this.toolbarAnimationState = state); }, 1);
            });
            this._observe_on_layout_config_and_filter_routes();
            fromEvent.fromEvent(this.document.body, "scroll").subscribe(function () {
                /** @type {?} */
                var scrolledAmount = _this.document.body.scrollTop;
                /** @type {?} */
                var scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 300;
                // let scrollToTop = scrolledAmount - this.lastScroll < 0;
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
                this.showSecondSidenav.subscribe(function (state) {
                    action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
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
                /** @type {?} */
                var action;
                this.showMainSidenav.subscribe(function (state) {
                    action = state ? new CloseSidenavAction() : new OpenSidenavAction();
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
                this.menuItems$ = this.configurationService.config$.pipe(operators.map(function (config$$1) { return config$$1.menuItems; }), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
            };
        ToolbarMenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "layout-toolbar",
                        template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row id=\"firstToolbar\">\n    <!-- <div id=\"background\"></div> -->\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/images/shatel-logo.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n\n\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\n      \u062B\u0628\u062A \u0646\u0627\u0645\n    </button>\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\n      <div id=\"acccountName\">\n        {{displayName}}\n      </div>\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLink]=\"[menu.route]\">\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n        <span>{{menu.title}}</span>\n      </button>\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>",
                        styles: ["mat-toolbar{background-color:#fff!important;top:0;box-shadow:rgba(0,0,0,.5) 1px 1px 3px!important}#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important}#secondToolbar.active{opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"],
                        animations: [
                            animations.trigger("logoAnimation", [
                                animations.state("comfortable", animations.style({
                                    width: "90px",
                                    height: "90px",
                                    top: "50px",
                                    right: "calc(50% - 50px)"
                                })),
                                animations.state("compact", animations.style({
                                    width: "36px",
                                    height: "36px",
                                    top: "13px",
                                    right: "13px"
                                })),
                                animations.state("summary", animations.style({
                                    width: "36px",
                                    height: "36px",
                                    top: "76px",
                                    right: "10px"
                                })),
                                animations.state("hide", animations.style({
                                    width: "0",
                                    height: "0",
                                    top: "76px",
                                    right: "10px"
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-out")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-out"))
                            ]),
                            animations.trigger("menuAnimation", [
                                animations.state("comfortable", animations.style({
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    bottom: "25px"
                                })),
                                animations.state("compact", animations.style({
                                    right: "45px",
                                    transform: "translateX(0)",
                                    bottom: "13px"
                                })),
                                animations.state("summary", animations.style({
                                    right: "75px",
                                    transform: "translateX(0)",
                                    bottom: "14px"
                                })),
                                animations.state("hide", animations.style({
                                    right: "75px",
                                    transform: "translateX(0)",
                                    bottom: "14px"
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-in")),
                                animations.transition("comfortable => hide", animations.animate("400ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("600ms ease-in")),
                                animations.transition("compact => hide", animations.animate("400ms ease-in")),
                                animations.transition("hide => compact", animations.animate("600ms ease-in")),
                                animations.transition("summary => hide", animations.animate("400ms ease-in")),
                                animations.transition("hide => summary", animations.animate("600ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ]),
                            animations.trigger("titleAnimation", [
                                animations.state("comfortable", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "larger",
                                    "font-weight": "bolder",
                                    transform: "translateX(50%)",
                                    right: "calc(50%)",
                                    bottom: "75px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("compact", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "16px",
                                    "font-weight": "bolder",
                                    transform: "translateX(0)",
                                    right: "60px",
                                    bottom: "79px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("summary", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "16px",
                                    "font-weight": "bolder",
                                    transform: "translateX(0)",
                                    right: "60px",
                                    bottom: "79px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("hide", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "1px",
                                    "font-weight": "bolder",
                                    transform: "translateX(0)",
                                    right: "60px",
                                    bottom: "79px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.transition("comfortable => compact", animations.animate("850ms ease-out")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ]),
                            animations.trigger("toolbarAnimation", [
                                animations.state("comfortable", animations.style({
                                    // backgroundColor: "rgba(119,181,63,1)",
                                    backgroundColor: "rgba(256,256,256,1)",
                                    color: "rgba(30,30,30,1)",
                                    height: "33vh",
                                    top: "0",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                                })),
                                animations.state("compact", animations.style({
                                    backgroundColor: "rgba(256,256,256,1)",
                                    height: "128px",
                                    top: "0",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                })),
                                animations.state("summary", animations.style({
                                    backgroundColor: "rgba(256,256,256,1)",
                                    height: "128px",
                                    top: "-64px",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                })),
                                animations.state("hide", animations.style({
                                    backgroundColor: "rgba(256,256,256,1)",
                                    height: "128px",
                                    top: "-128px",
                                    boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-in")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        ToolbarMenuComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [platformBrowser.DOCUMENT,] }] },
                { type: common.Location },
                { type: i2.Store },
                { type: LayoutConfigurationService }
            ];
        };
        ToolbarMenuComponent.propDecorators = {
            showSidebarMenu: [{ type: i0.Input }],
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            user: [{ type: i0.Input }],
            displayName: [{ type: i0.Input }],
            onWindowScroll: [{ type: i0.HostListener, args: ["body:scroll", [],] }]
        };
        return ToolbarMenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            { type: i0.Component, args: [{
                        selector: "app-footer",
                        template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\n    {{app_config?.Config.FooterCopyright}}\n</div>",
                        styles: [":host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
                    },] },
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        FooterComponent.propDecorators = {
            app_config: [{ type: i0.Input, args: ["app-config",] }]
        };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TitleComponent = /** @class */ (function () {
        function TitleComponent(store, router$$1) {
            var _this = this;
            this.store = store;
            this.router = router$$1;
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
                if (event instanceof router.NavigationEnd) {
                    /** @type {?} */
                    var title = "";
                    _this.mapper.forEach(function (mapper) {
                        /** @type {?} */
                        var res = mapper(event);
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
            { type: i0.Component, args: [{
                        selector: "app-title",
                        template: "<div id=\"title\">\n    {{title$ | async}}\n</div>",
                        styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                    },] },
        ];
        /** @nocollapse */
        TitleComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: router.Router }
            ];
        };
        return TitleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgsLayoutMainComponent = /** @class */ (function () {
        function NgsLayoutMainComponent(store, router$$1, configService, translateService, userFacadeService) {
            var _this = this;
            this.store = store;
            this.router = router$$1;
            this.configService = configService;
            this.translateService = translateService;
            this.userFacadeService = userFacadeService;
            this.showSidebarMenu = new rxjs.BehaviorSubject(true);
            this.width = 100;
            this._set_i18n_resource();
            this.configService.config$.subscribe(function (config$$1) {
                _this.theme = config$$1.theme;
                _this.theme_A = config$$1.theme == "theme_A";
                _this.theme_B = config$$1.theme == "theme_B";
            });
            this.store.dispatch(new ChangeSideNavMode("push"));
            this.user$ = this.store.select(function (s) { return ( /** @type {?} */(s)).user.user.data; });
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
            this.router.events.filter(function (data) { return data instanceof router.NavigationEnd; }).subscribe(function (event) {
                /** @type {?} */
                var hideSituations = [
                    ( /** @type {?} */(event)).urlAfterRedirects == "/auth/signin",
                    ( /** @type {?} */(event)).urlAfterRedirects == "/auth/signup/register",
                    ( /** @type {?} */(event)).urlAfterRedirects == "/auth/signup/verification",
                    ( /** @type {?} */(event)).urlAfterRedirects == "/user/password/reset"
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
        NgsLayoutMainComponent.prototype.onSecondSidebarClosedStart = /**
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
                    __account_mangement: "مدریت کاربری",
                    __signout: "خروج"
                });
            };
        NgsLayoutMainComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "layout-main",
                        template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar  *ngIf=\"theme == 'theme_A'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  <layout-toolbar-b *ngIf=\"theme == 'theme_B'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar-b>\n  \n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\n          <router-outlet name=\"footer_A\"></router-outlet>\n          <router-outlet name=\"footer_B\"></router-outlet>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                        styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:.3s}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"],
                        animations: [
                            animations.trigger("mode", [
                                animations.state("visible", animations.style({ transform: "scaleY(1) translateY(0)" })),
                                animations.state("invisible", animations.style({ height: "0", transform: "scaleY(0) translateY(100%)" })),
                                animations.transition("visible => invisible", [animations.animate("1000ms")]),
                                animations.transition("invisible => visible", [animations.animate("1000ms")])
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        NgsLayoutMainComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: router.Router },
                { type: LayoutConfigurationService },
                { type: core.TranslateService },
                { type: user.UserFacadeService }
            ];
        };
        NgsLayoutMainComponent.propDecorators = {
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            mainSideNav: [{ type: i0.ViewChild, args: ["mainSideNav",] }],
            theme_A: [{ type: i0.HostBinding, args: ["class.theme_A",] }],
            theme_B: [{ type: i0.HostBinding, args: ["class.theme_B",] }]
        };
        return NgsLayoutMainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LayoutEffects = /** @class */ (function () {
        function LayoutEffects(actions$, router$$1, store) {
            this.actions$ = actions$;
            this.router = router$$1;
            this.store = store;
            this.DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(operators.map(function () { return new authentication.DoSignoutAction(); }));
            this.fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(operators.map(function () { return new InvisibleToolbarAction(); }));
            this.exit_fullscreen$ = this.actions$
                .ofType(LayoutActionTypes.EXIT_FULLSCREEN)
                .pipe(operators.map(function () { return new VisibleToolbarAction(); }));
            this.fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(operators.withLatestFrom(this.store.select(getFullscreenMode$1)), operators.map(function (_a) {
                var _b = __read(_a, 2), action = _b[0], toolbarMode = _b[1];
                if (toolbarMode)
                    return new ExitFullscreenAction();
                else
                    return new FullscreenAction();
            }));
        }
        LayoutEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        LayoutEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: i2.Store }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LayoutEffects.prototype, "DoSignout$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LayoutEffects.prototype, "fullscreen$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LayoutEffects.prototype, "exit_fullscreen$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LayoutEffects.prototype, "fullscren_toolbar$", void 0);
        return LayoutEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this.user$ = this.store.select(user.getAccountInfo);
            this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            this.config$ = this.store.select(getLayoutToolbar);
            this.config$.subscribe(function (config$$1) { return (_this.config = config$$1); });
            this.lastScroll = this.document.body.scrollTop;
            this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
            this.showMainSidenav = this.store.select(getShowMainSidenav$1);
            this.store.select(getLayoutToolbarMode).subscribe(function (state) {
                setTimeout(function () { return (_this.menuAnimationState = state); }, 1);
                setTimeout(function () { return (_this.logoAnimationState = state); }, 1);
                setTimeout(function () { return (_this.titleAnimationState = state); }, 1);
                setTimeout(function () { return (_this.toolbarAnimationState = state); }, 1);
            });
            this._observe_on_layout_config_and_filter_routes();
            fromEvent.fromEvent(this.document.body, "scroll").subscribe(function () {
                /** @type {?} */
                var scrolledAmount = _this.document.body.scrollTop;
                /** @type {?} */
                var scrollToTop = scrolledAmount - _this.lastScroll < 0 &&
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
            });
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
                this.showSecondSidenav.subscribe(function (state) {
                    action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
                });
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
                this.showMainSidenav.subscribe(function (state) {
                    action = state ? new CloseSidenavAction() : new OpenSidenavAction();
                });
                this.store.dispatch(action);
            };
        /**
         * @return {?}
         */
        ToolbarMenuThemeBComponent.prototype._observe_on_layout_config_and_filter_routes = /**
         * @return {?}
         */
            function () {
                this.menuItems$ = this.configurationService.config$.pipe(operators.map(function (config$$1) { return config$$1.menuItems; }), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
            };
        ToolbarMenuThemeBComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "layout-toolbar-b",
                        template: "<mat-toolbar dir=\"rtl\" color=\"primary\" [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row dir=\"rtl\" id=\"firstToolbar\">\n    <!-- <div id=\"background\"></div> -->\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/logos/logo-type.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\"\n      fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n\n\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      <span [translate]=\"'__signin'\"></span>\n    </button>\n    <button translate *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\n      {{'__signup' | translate}}\n    </button>\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n    </button>\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\n      <div id=\"acccountName\">\n        {{displayName}}\n      </div>\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>fingerprint</mat-icon>\n        <span translate=\"__account_mangement\">\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span translate>__signout</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLink]=\"[menu.route]\">\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n        <span>{{menu.title}}</span>\n      </button>\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>",
                        styles: ["#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"],
                        animations: [
                            animations.trigger("logoAnimation", [
                                animations.state("comfortable", animations.style({
                                    height: "48px",
                                    top: "50px",
                                    right: "calc(50% - 50px)"
                                })),
                                animations.state("compact", animations.style({
                                    height: "36px",
                                    top: "13px",
                                    right: "13px"
                                })),
                                animations.state("summary", animations.style({
                                    height: "36px",
                                    top: "57px",
                                    right: "10px"
                                })),
                                animations.state("hide", animations.style({
                                    width: "0",
                                    height: "0",
                                    top: "57px",
                                    right: "10px"
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-out")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-out"))
                            ]),
                            animations.trigger("menuAnimation", [
                                animations.state("comfortable", animations.style({
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    bottom: "0"
                                })),
                                animations.state("compact", animations.style({
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    bottom: "0"
                                })),
                                animations.state("summary", animations.style({
                                    right: "165px",
                                    transform: "translateX(0)",
                                    bottom: "0"
                                })),
                                animations.state("hide", animations.style({
                                    right: "165px",
                                    transform: "translateX(0)",
                                    bottom: "0"
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-in-out")),
                                animations.transition("comfortable => hide", animations.animate("400ms ease-in-out")),
                                animations.transition("hide => comfortable", animations.animate("600ms ease-in-out")),
                                animations.transition("compact => hide", animations.animate("400ms ease-in-out")),
                                animations.transition("hide => compact", animations.animate("600ms ease-in-out")),
                                animations.transition("summary => hide", animations.animate("400ms ease-in-out")),
                                animations.transition("hide => summary", animations.animate("600ms ease-in-out")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in-out"))
                            ]),
                            animations.trigger("titleAnimation", [
                                animations.state("comfortable", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "larger",
                                    "font-weight": "bolder",
                                    transform: "translateX(50%)",
                                    right: "calc(50%)",
                                    bottom: "165px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("compact", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "16px",
                                    "font-weight": "bolder",
                                    right: "50%",
                                    transform: "translateX(50%)",
                                    bottom: "51px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("summary", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "16px",
                                    "font-weight": "bolder",
                                    transform: "translateX(50%)",
                                    right: "50%",
                                    bottom: "79px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.state("hide", animations.style({
                                    "margin-right": "0px",
                                    "font-size": "1px",
                                    "font-weight": "bolder",
                                    // transform: "translateX(0)",
                                    // right: "60px",
                                    bottom: "79px",
                                    position: "absolute",
                                    padding: 0
                                })),
                                animations.transition("comfortable => compact", animations.animate("850ms ease-out")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ]),
                            animations.trigger("toolbarAnimation", [
                                animations.state("comfortable", animations.style({
                                    // backgroundColor: "rgba(119,181,63,1)",
                                    backgroundColor: "rgba(256,256,256,1)",
                                    color: "rgba(30,30,30,1)",
                                    height: "33vh",
                                    top: "0",
                                })),
                                animations.state("compact", animations.style({
                                    // backgroundColor: "rgba(256,256,256,1)",
                                    height: "100px",
                                    top: "0",
                                })),
                                animations.state("summary", animations.style({
                                    // backgroundColor: "rgba(256,256,256,1)",
                                    height: "100px",
                                    top: "-50px",
                                })),
                                animations.state("hide", animations.style({
                                    // backgroundColor: "rgba(256,256,256,1)",
                                    height: "100px",
                                    top: "-100px",
                                })),
                                animations.transition("comfortable => compact", animations.animate("800ms ease-in")),
                                animations.transition("comfortable => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => comfortable", animations.animate("800ms ease-in")),
                                animations.transition("compact => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => compact", animations.animate("800ms ease-in")),
                                animations.transition("summary => hide", animations.animate("800ms ease-in")),
                                animations.transition("hide => summary", animations.animate("800ms ease-in")),
                                // transition("comfortable => summary", animate("800ms ease-in")),
                                animations.transition("summary => compact", animations.animate("400ms ease-out")),
                                animations.transition("summary => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => comfortable", animations.animate("800ms ease-out")),
                                animations.transition("compact => summary", animations.animate("400ms ease-in"))
                            ])
                        ]
                    },] },
        ];
        /** @nocollapse */
        ToolbarMenuThemeBComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [platformBrowser.DOCUMENT,] }] },
                { type: common.Location },
                { type: i2.Store },
                { type: core.TranslateService },
                { type: LayoutConfigurationService }
            ];
        };
        ToolbarMenuThemeBComponent.propDecorators = {
            showSidebarMenu: [{ type: i0.Input }],
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            user: [{ type: i0.Input }],
            displayName: [{ type: i0.Input }],
            onWindowScroll: [{ type: i0.HostListener, args: ["body:scroll", [],] }]
        };
        return ToolbarMenuThemeBComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            function (config$$1) {
                return {
                    ngModule: RootNgsLayoutModule,
                    providers: [
                        { provide: i0.LOCALE_ID, useValue: "en en-US" },
                        { provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }
                    ]
                };
            };
        NgsLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            router.RouterModule,
                            forms.FormsModule,
                            http.HttpClientModule,
                            flexLayout.FlexLayoutModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSnackBarModule,
                            material.MatSidenavModule,
                            material.MatExpansionModule,
                            material.MatSelectModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatRadioModule,
                            material.MatInputModule,
                            material.MatToolbarModule,
                            material.MatDatepickerModule,
                            material.MatProgressBarModule,
                            router.RouterModule,
                            core.TranslateModule,
                            config.NgsConfigModule,
                            rule.RuleModule
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
        return NgsLayoutModule;
    }());
    var RootNgsLayoutModule = /** @class */ (function () {
        function RootNgsLayoutModule() {
        }
        RootNgsLayoutModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsLayoutModule,
                            i2.StoreModule.forFeature("layout", LayoutReducers),
                            effects.EffectsModule.forFeature([LayoutEffects])
                        ],
                        exports: [NgsLayoutModule]
                    },] },
        ];
        return RootNgsLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

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

    exports.LayoutActionTypes = LayoutActionTypes;
    exports.TitleChangedAction = TitleChangedAction;
    exports.OpenSidenavAction = OpenSidenavAction;
    exports.CloseSidenavAction = CloseSidenavAction;
    exports.ChangeSideNavMode = ChangeSideNavMode;
    exports.ChangeLayout = ChangeLayout;
    exports.CloseSecondSidenavAction = CloseSecondSidenavAction;
    exports.ChangeSecondSidenavMode = ChangeSecondSidenavMode;
    exports.OpenSecondSidenavAction = OpenSecondSidenavAction;
    exports.ChangeToolbatToComfortableModeAction = ChangeToolbatToComfortableModeAction;
    exports.ChangeToolbatToCompactModeAction = ChangeToolbatToCompactModeAction;
    exports.DisableComfortableModeAction = DisableComfortableModeAction;
    exports.EnableComfortableModeAction = EnableComfortableModeAction;
    exports.VisibleToolbarAction = VisibleToolbarAction;
    exports.FullscreenAction = FullscreenAction;
    exports.ExitFullscreenAction = ExitFullscreenAction;
    exports.InvisibleToolbarAction = InvisibleToolbarAction;
    exports.ToggleFullscreenAction = ToggleFullscreenAction;
    exports.NgsLayoutMainComponent = NgsLayoutMainComponent;
    exports.LayoutOutlets = LayoutOutlets;
    exports.NgsLayoutModule = NgsLayoutModule;
    exports.RootNgsLayoutModule = RootNgsLayoutModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵh = FooterComponent;
    exports.ɵe = LogoContainerComponent;
    exports.ɵa = MainMenuComponent;
    exports.ɵj = NgsLayoutMainComponent;
    exports.ɵd = SearchBoxComponent;
    exports.ɵi = TitleComponent;
    exports.ɵg = ToolbarMenuThemeBComponent;
    exports.ɵf = ToolbarMenuComponent;
    exports.ɵo = LayoutEffects;
    exports.ɵk = LayoutReducers;
    exports.ɵm = Reducer;
    exports.ɵn = Reducer$1;
    exports.ɵc = LayoutConfigurationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51LXRoZW1lLWIvdG9vbGJhci1tZW51LXRoZW1lLWIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbW9kZWxzL2xheW91dC1vdXRsZXRzLmVudW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9QRU5fU0lERU5BViA9IFwiW0xheW91dF0gT3BlbiBTaWRlbmF2XCI7XHJcbmV4cG9ydCBjb25zdCBDTE9TRV9TSURFTkFWID0gXCJbTGF5b3V0XSBDbG9zZSBTaWRlbmF2XCI7XHJcblxyXG5leHBvcnQgZW51bSBMYXlvdXRBY3Rpb25UeXBlcyB7XHJcblx0VVBEQVRFX0xBWU9VVF9DT05GSUcgPSBcIltMYXlvdXRdIFVQREFURV9MQVlPVVRfQ09ORklHXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0xheW91dF0gZG8gc2lnbm91dFwiLFxyXG5cdFRJVExFX0NIQU5HRUQgPSBcIltMQVlPVVRdIFRJVExFX0NIQU5HRURcIixcclxuXHRDSEFOR0VfTEFZT1VUID0gXCJbTGF5b3V0XSBDaGFuZ2UgTGF5b3V0XCIsXHJcblx0Q0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIG1haW4gc2lkZW5hdiBtb2RlXCIsXHJcblx0T1BFTl9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gT3BlbiBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENMT1NFX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBDbG9zZSBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2Ugc2Vjb25kIHNpZGVuYXYgbW9kZVwiLFxyXG5cdEZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIEZVTExTQ1JFRU5cIixcclxuXHRFWElUX0ZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIEVYSVRfRlVMTFNDUkVFTlwiLFxyXG5cdFRPR0dMRV9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBUT0dHTEVfRlVMTFNDUkVFTlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gT1BFTl9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ0xPU0VfU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZUxheW91dCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2lkZU5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNlY29uZFNpZGVuYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgY2xhc3MgRXhpdEZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID1cclxuXHR8IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvblxyXG5cdHwgT3BlblNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2hhbmdlU2lkZU5hdk1vZGVcclxuXHR8IENoYW5nZUxheW91dFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBUaXRsZUNoYW5nZWRBY3Rpb25cclxuXHR8IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IEZ1bGxzY3JlZW5BY3Rpb25cclxuXHR8IEV4aXRGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZVxyXG5cdHwgVG9nZ2xlRnVsbHNjcmVlbkFjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuLi9hY3Rpb25zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uOiBBY3Rpb247XHJcblx0ZnVsbHNjcmVlbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0ZnVsbHNjcmVlbjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGxheW91dC5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHOlxyXG5cdFx0XHRjb25zdCBfc3RhdGUgPSB7fTtcclxuXHRcdFx0T2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLmZvckVhY2goayA9PiB7XHJcblx0XHRcdFx0aWYgKGsgaW4gc3RhdGUpIF9zdGF0ZVtrXSA9IGFjdGlvbi5wYXlsb2FkW2tdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5fc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkNMT1NFX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0Lk9QRU5fU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRpdGxlOiBhY3Rpb24udGl0bGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bGF5b3V0TW9kZTogYWN0aW9uLm5hbWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5TaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWNvbmRTaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHQvLyBjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRmdWxsc2NyZWVuOiBzdGF0ZS5mdWxsc2NyZWVuID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXHJcblx0XHQvLyBcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnRpdGxlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubWFpblNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dTZWNvbmRTaWRlTmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zZWNvbmRTaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZnVsbHNjcmVlbjtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBUb29sYmFyQWN0aW9uVHlwZXMge1xyXG5cdENPTVBPUlRBQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QT1JUQUJMRVwiLFxyXG5cdENPTVBBQ1QgPSBcIltMYXlvdXRdW1RPT0xCQVJdIENPTVBBQ1RcIixcclxuXHRTVU1NQVJZID0gXCJbTGF5b3V0XVtUT09MQkFSXSBTVU1NQVJZXCIsXHJcblx0RU5BQkxFX0NPTUZPUlRBQkxFX01PREUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0RElTQkFMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBESVNCQUxFX0NPTUZPUlRBQkxFX01PREVcIixcclxuXHRWSVNJQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBWSVNJQkxFXCIsXHJcblx0SU5WSVNJQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBJTlZJU0lCTEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkNPTVBPUlRBQkxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5TVU1NQVJZO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBWaXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBJbnZpc2libGVUb29sYmFyQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLklOVklTSUJMRTtcclxufVxyXG5leHBvcnQgdHlwZSBUb29sYmFyQWN0aW9ucyA9XHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG5cdHwgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBWaXNpYmxlVG9vbGJhckFjdGlvblxyXG5cdHwgSW52aXNpYmxlVG9vbGJhckFjdGlvbjtcclxuIiwiaW1wb3J0IHsgVG9vbGJhckFjdGlvblR5cGVzLCBUb29sYmFyQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRtb2RlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCI7XHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBib29sZWFuO1xyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogYm9vbGVhbjtcclxuXHR2aXNpYmlsaXR5OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2UsXHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBmYWxzZSxcclxuXHR2aXNpYmlsaXR5OiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUb29sYmFyQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBzdGF0ZS5lbmFibGVDb21mb3J0YWJsZU1vZGUgPyBcImNvbWZvcnRhYmxlXCIgOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcInN1bW1hcnlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJoaWRlXCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb29sYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1vZGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi9sYXlvdXQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tVG9vbGJhciBmcm9tIFwiLi90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGUge1xyXG5cdGxheW91dDogbGF5b3V0LlN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UmVkdWNlcnMgPSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuUmVkdWNlcixcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5SZWR1Y2VyXHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRsYXlvdXQ6IExheW91dFN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0U3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TGF5b3V0U3RhdGU+KFwibGF5b3V0XCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLmxheW91dCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRUaXRsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRMYXlvdXRNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRGdWxsc2NyZWVuTW9kZSk7XHJcblxyXG4vLyNyZWdpb24gdG9vbGJhclxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dFRvb2xiYXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUudG9vbGJhcik7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dFRvb2xiYXIsIGZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uPzogQWN0aW9uO1xyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yPzogKFtyb3V0ZXMsIHVzZXJdOiBbYW55LCBhbnldKSA9PiBhbnlbXTtcclxuXHR0aGVtZT86IHN0cmluZzsgLy8gXCJ0aGVtZV9BXCIgfCBcInRoZW1lX0JcIjtcclxufVxyXG5cclxuY29uc3QgbWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IgPSBmdW5jdGlvbiAoW3JvdXRlcywgdXNlcl0pIHtcclxuXHRpZiAoIXVzZXIuUm9sZXMpIHJldHVybiBbXTtcclxuXHRpZiAodXNlci5Sb2xlcy5sZW5ndGggPT0gMCkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB1c2VyLlJvbGVzLnNvbWUodXNlclJvbGUgPT4gcm91dGUucm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPiAtMSkpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgPSB7XHJcblx0dGhlbWU6IFwidGhlbWVfQlwiLFxyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWUsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvLyB8IFwicHVzaFwiIHwgXCJzaWRlXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIiwgLy8gfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcIndpdGgtbWFyZ2luXCIsIC8vIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXHJcblx0XSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0bWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3JcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPExheW91dE1vZHVsZUNvbmZpZ01vZGVsPihcIkxheW91dE1vZHVsZUNvbmZpZ01vZGVsXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldENvbmZpZ3MgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHQvLyBwcml2YXRlIF9jb25maWc6IExheW91dENvbmZpZ01vZGVsO1xyXG5cdHByaXZhdGUgX2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dE1vZHVsZUNvbmZpZ01vZGVsPih0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldENvbmZpZ3MpXHJcblx0XHRcdC5tYXAoY29uZmlncyA9PiBjb25maWdzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwibGF5b3V0X2NvbmZpZ1wiKSlcclxuXHRcdFx0LnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRcdGlmICghY29uZmlnKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uKGNvbmZpZy5Db25maWcpKTtcclxuXHRcdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1sYXlvdXQtbWFpbi1tZW51XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWxpc3QgY2xhc3M9XCJtYWluLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cImF1dGhlbnRpY2F0ZWQgfCBhc3luY1wiPlxyXG4gICAgPGEgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm91dGVzJCB8IGFzeW5jXCIgKGNsaWNrKT1cImNsb3NlU2lkZWJhci5lbWl0KClcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgbWF0LWxpc3QtaXRlbSBbcm91dGVyTGlua109XCJbaXRlbS5yb3V0ZV1cIj5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3tpdGVtLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuIG1kTGluZT57e2l0ZW0udGl0bGV9fTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuPC9tYXQtbGlzdD5gLFxyXG5cdHN0eWxlczogW2AuYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTUpfS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSBtYXQtaWNvbntjb2xvcjojMDA3MmFlfWEubWF0LWxpc3QtaXRlbS5jaGlsZHttYXJnaW4tcmlnaHQ6MjBweH0jY2xlYXJVc2VyTWVudUl0ZW17cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxM3B4O3RvcDoxM3B4fWBdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJjaGlsZE1lbnVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImluYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUl0ZW1cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImluYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51Q29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgY2xvc2VTaWRlYmFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGF1dGhlbnRpY2F0ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRjdXN0b21lclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0cm91dGVzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY3VzdG9tZXJNb2JpbGVJbnB1dFwiKSBjdXN0b21lck1vYmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gtYm94JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWFyY2gtYm94XCI+XHJcbiAgPCEtLTx0ZC1zZWFyY2gtYm94IGNsYXNzPVwic2VhcmNoLWJveC1jb250YWluZXJcIiBiYWNrSWNvbj1cImFycm93X2JhY2tcIiBwbGFjZWhvbGRlcj1cIsOYwqzDmMKzw5jCqsOYwqzDmcKIXCIgW3Nob3dVbmRlcmxpbmVdPVwiZmFsc2VcIiBbZGVib3VuY2VdPVwiNTAwXCIgW2Fsd2F5c1Zpc2libGVdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgIChzZWFyY2hEZWJvdW5jZSk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoc2VhcmNoKT1cInNlYXJjaElucHV0VGVybSA9ICRldmVudFwiIChjbGVhcik9XCJzZWFyY2hJbnB1dFRlcm0gPSAnJ1wiPlxyXG4gIDwvdGQtc2VhcmNoLWJveD4tLT5cclxuPC9kaXY+YCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtbG9nby1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYFxyXG48IS0tPGltZyBjbGFzcz1cImxvZ29UeXBlQW5pbWF0aW9uXCIgc3JjPScuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tdHlwZS5wbmcnIC8+LS0+YCxcclxuXHRzdHlsZXM6IFtgLmxvZ29BbmltYXRpb257aGVpZ2h0OjM2cHg7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoyfSNiYWNrZ3JvdW5ke3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6MzAwcHg7aGVpZ2h0OjcwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db250YWluZXJDb21wb25lbnQge1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNkZjogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGZyb20gfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21cIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21FdmVudFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC10b29sYmFyXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgW0B0b29sYmFyQW5pbWF0aW9uXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZVwiPlxyXG4gIDxtYXQtdG9vbGJhci1yb3cgaWQ9XCJmaXJzdFRvb2xiYXJcIj5cclxuICAgIDwhLS0gPGRpdiBpZD1cImJhY2tncm91bmRcIj48L2Rpdj4gLS0+XHJcbiAgICA8aW1nIFtAbG9nb0FuaW1hdGlvbl09XCJsb2dvQW5pbWF0aW9uU3RhdGVcIiBpZD1cImxvZ29cIiByb3V0ZXJMaW5rPScvJyBzcmM9J2Fzc2V0cy9pbWFnZXMvc2hhdGVsLWxvZ28ucG5nJyAvPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPSdzaG93U2lkZWJhck1lbnUgJiYgZmFsc2UnIChjbGljayk9XCJ0b2dnbGVNYWluU2lkZWJhcigpXCIgbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gW0B0aXRsZUFuaW1hdGlvbl09XCJ0aXRsZUFuaW1hdGlvblN0YXRlXCIgaWQ9J2FwcC1uYW1lJz5cclxuICAgICAge3thcHBfY29uZmlnPy5Db25maWcuQXBwVGl0bGV9fVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGFwcC10aXRsZSBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPjwvYXBwLXRpdGxlPlxyXG4gICAgPGFwcC1zZWFyY2gtYm94IGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiPjwvYXBwLXNlYXJjaC1ib3g+XHJcblxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCJhdXRoL3NpZ25pblwiPlxyXG4gICAgICDDmcKIw5jCscOZwojDmMKvXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCJhdXRoL3NpZ251cFwiPlxyXG4gICAgICDDmMKrw5jCqMOYwqogw5nChsOYwqfDmcKFXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJkaXNwbGF5TmFtZVwiIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwidG9vbGJhck1lbnUxXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hY2NvdW50X2NpcmNsZTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxtYXQtbWVudSAjdG9vbGJhck1lbnUxIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiYWNjY291bnROYW1lXCI+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHJvdXRlckxpbms9Jy91c2VyL3BhbmVsJyBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsLWRpclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5maW5nZXJwcmludDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICDDmcKFw5jCr8ObwozDmMKxw5vCjMOYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPSdzaWdub3V0KCknIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmV4aXRfdG9fYXBwPC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj7DmMKuw5jCscOZwojDmMKsPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVNlY29uZFNpZGViYXIoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT0nZ29iYWNrKCknPlxyXG4gICAgICA8bWF0LWljb24+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLWxheW91dC1iZWZvcmUtdG9vbGJhci1tZW51XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKm5nRm9yPVwibGV0IG1lbnUgb2YgbWVudUl0ZW1zJCB8IGFzeW5jXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIFtyb3V0ZXJMaW5rXT1cIlttZW51LnJvdXRlXVwiPlxyXG4gICAgICAgIDwhLS0gPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3ttZW51Lmljb259fTwvbWF0LWljb24+IC0tPlxyXG4gICAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYWZ0ZXItdG9vbGJhci1tZW51XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwvbWF0LXRvb2xiYXI+YCxcclxuXHRzdHlsZXM6IFtgbWF0LXRvb2xiYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmIWltcG9ydGFudDt0b3A6MDtib3gtc2hhZG93OnJnYmEoMCwwLDAsLjUpIDFweCAxcHggM3B4IWltcG9ydGFudH0jc2Vjb25kVG9vbGJhcnt0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I3NlY29uZFRvb2xiYXIgYnV0dG9ue29wYWNpdHk6LjY7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Zm9udC1zaXplOi42NWVtIWltcG9ydGFudH0jc2Vjb25kVG9vbGJhci5hY3RpdmV7b3BhY2l0eToxfSNsb2dve3RyYW5zaXRpb246bm9uZTtwb3NpdGlvbjphYnNvbHV0ZX0jYXBwLW5hbWV7cGFkZGluZy1yaWdodDo4cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsc2Fucy1zZXJpZiFpbXBvcnRhbnR9YnV0dG9uLnJ0bC1kaXJ7ZGlyZWN0aW9uOnJ0bCFpbXBvcnRhbnR9I2FjY2NvdW50TmFtZXtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcn1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCI5MHB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjc2cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIyNXB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI0NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxNHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMjhweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudUNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRjb25zdCBzY3JvbGxUb1RvcCA9XHJcblx0XHRcdFx0c2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwICYmIHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBzY3JvbGxlZEFtb3VudCA8IDMwMDtcclxuXHRcdFx0Ly8gbGV0IHNjcm9sbFRvVG9wID0gc2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRpZiAoIXRoaXMuY29uZmlnLnZpc2liaWxpdHkpIHJldHVybjtcclxuXHRcdFx0aWYgKHNjcm9sbGVkQW1vdW50ID09IDApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbWZvcnRhYmxlXCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsZWRBbW91bnQgPCAyMDAgfHwgc2Nyb2xsVG9Ub3ApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcImNvbXBhY3RcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwic3VtbWFyeVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcihcImJvZHk6c2Nyb2xsXCIsIFtdKVxyXG5cdG9uV2luZG93U2Nyb2xsKCkge1xyXG5cdFx0Ly8gb2YoMSlcclxuXHR9XHJcblx0c2lnbm91dCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERvU2lnbm91dEFjdGlvbigpKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5fbG9jYXRpb24uYmFjaygpO1xyXG5cdH1cclxuXHR0b2dnbGVTZWNvbmRTaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNlY29uZFNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHR0b2dnbGVNYWluU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdF9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKSB7XHJcblx0XHR0aGlzLm1lbnVJdGVtcyQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0bWFwKGNvbmZpZyA9PiBjb25maWcubWVudUl0ZW1zKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXIkKSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC1mb290ZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cImZvb3Rlci10ZXh0XCI+XHJcbiAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5Gb290ZXJDb3B5cmlnaHR9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O3BhZGRpbmc6OHB4O292ZXJmbG93OmhpZGRlbn0uZm9vdGVyLXRleHR7cG9zaXRpb246cmVsYXRpdmU7dG9wOjEycHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBUaXRsZUNoYW5nZWRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFRpdGxlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtdGl0bGVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJ0aXRsZVwiPlxyXG4gICAge3t0aXRsZSQgfCBhc3luY319XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCN0aXRsZXttYXJnaW4tcmlnaHQ6LTMwcHg7Zm9udC13ZWlnaHQ6Ym9sZGVyO2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmc6MThweCA0MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCB7XHJcblx0dGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0bWFwcGVyOiB7ICh2YWw6IE5hdmlnYXRpb25FbmQpOiBzdHJpbmcgfVtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHR0aGlzLm1hcHBlciA9IFtdO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgncHJvZmlsZS1lZGl0JykpID8gJ8OZwojDm8KMw5jCscOYwqfDm8KMw5jCtCDDmMKnw5jCt8OZwoTDmMKnw5jCucOYwqfDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdzdWNjZXNzLXBheW1lbnQtcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOZwr7DmMKxw5jCr8OYwqfDmMKuw5jCqiDDmcKHw5jCp8Obwowgw5nChcOZwojDmcKBw5nCgicgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdmYWlsZWQtbG9naW4tcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOYwq7DmMK3w5jCp8OZwofDmMKnJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2FjdGl2ZS1zZXNzaW9uLWluZm8nKSkgPyAnw5jCrMOYwrLDmMKmw5vCjMOYwqfDmMKqIMOYwqjDmMKzw5jCqsOZwocgw5nCgcOYwrnDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdzZXNzaW9uLWRldGFpbC1yZXBvcnQnKSkgPyAnw5jCrMOYwrLDmMKmw5vCjMOYwqfDmMKqIMOYwqfDmMKqw5jCtcOYwqfDmcKEJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2RhaWx5LXNlc3Npb24tcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOYwqrDmMKsw5nChcObwozDmMK5w5vCjCDDmMKxw5nCiMOYwrLDmMKnw5nChsOZwocnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnbW9udGhseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5nChcOYwqfDmcKHw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuc3RhcnRzV2l0aCgnL3BhY2thZ2VzL3VzZXItcGFja2FnZXMnKSkgPyAnw5nChMObwozDmMKzw5jCqiDDmcK+w5rCqcObwozDmMKsIMOZwofDmMKnJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJy9jaGFuZ2UtcGFzc3dvcmQnKSkgPyAnw5jCqsOYwrrDm8KMw5vCjMOYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHR0aGlzLnRpdGxlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFRpdGxlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG5cdFx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XHJcblx0XHRcdFx0dGhpcy5tYXBwZXIuZm9yRWFjaChtYXBwZXIgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJlcyA9IG1hcHBlcihldmVudCk7XHJcblx0XHRcdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRpdGxlID0gcmVzO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVGl0bGVDaGFuZ2VkQWN0aW9uKFwiLyBcIiArIHRpdGxlIHx8IFwiXCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gXCJAYW5ndWxhci9zZXJ2aWNlLXdvcmtlclwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UsIFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0RmVhdHVyZVN0YXRlLFxyXG5cdGdldFNob3dNYWluU2lkZW5hdixcclxuXHRnZXRNYWluU2lkZU5hdk1vZGUsXHJcblx0Z2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsXHJcblx0Z2V0U2Vjb25kU2lkZWJhck1vZGUsXHJcblx0Z2V0TGF5b3V0TW9kZSxcclxuXHRnZXRMYXlvdXRUb29sYmFyTW9kZSxcclxuXHRnZXRGdWxsc2NyZWVuTW9kZVxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdENoYW5nZVNpZGVOYXZNb2RlLFxyXG5cdENoYW5nZVNlY29uZFNpZGVuYXZNb2RlLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciAgKm5nSWY9XCJ0aGVtZSA9PSAndGhlbWVfQSdcIiBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICA8bGF5b3V0LXRvb2xiYXItYiAqbmdJZj1cInRoZW1lID09ICd0aGVtZV9CJ1wiIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyLWI+XHJcbiAgXHJcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBpZD1cImxheW91dC1zaWRuYXZcIiBbY2xhc3NOYW1lXT1cImxheW91dE1vZGUgfCBhc3luY1wiPlxyXG4gICAgPG1hdC1zaWRlbmF2IFttb2RlXT1cIm1haW5TaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dNYWluU2lkZW5hdiB8IGFzeW5jJyAjc2lkZWJhciAoY2xvc2VkU3RhcnQpPVwib25TaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0PlxyXG4gICAgICAgIDxuZ3MtbGF5b3V0LW1haW4tbWVudSBbYXV0aGVudGljYXRlZF09J3Nob3dTaWRlYmFyTWVudScgKGNsb3NlU2lkZWJhcik9XCJzaWRlYmFyLmNsb3NlKClcIiAoY2xpY2spPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiPjwvbmdzLWxheW91dC1tYWluLW1lbnU+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj5cclxuICAgIDwhLS0gPG1hdC1zaWRlbmF2IFttb2RlXT1cInNlY29uZFNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd1NlY29uZFNpZGVuYXYgfCBhc3luYycgKGNsb3NlZFN0YXJ0KT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIlxyXG4gICAgICBwb3NpdGlvbj1cImVuZFwiICNzZWNvbmRfc2lkZWJhciBjbGFzcz1cInNlY29uZF9zaWRlYmFyXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3QgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgIDwvbWF0LW5hdi1saXN0PlxyXG4gICAgPC9tYXQtc2lkZW5hdj4gLS0+XHJcbiAgICA8ZGl2IGZ4RmxleExheW91dD0nY29sdW1uJyBpZD1cImFwcC1tYWluLWNvbnRhaW5lclwiIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICA8ZGl2IGZ4RmxleD0nMCAwIDEwMCc+XHJcbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDxmb290ZXIgW0Btb2RlXT1cIm1vZGUkIHwgYXN5bmNcIiBydWxlQW5jaG9yPVwibGF5b3V0X2Zvb3RlclwiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOi4zc30ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW52aXNpYmxlID0+IHZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1haW5Db21wb25lbnQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRtb2RlJDogT2JzZXJ2YWJsZTxcInZpc2libGVcIiB8IFwiaW52aXNpYmxlXCI+O1xyXG5cdHRoZW1lOiBzdHJpbmc7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vIHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cdEBIb3N0QmluZGluZyhcImNsYXNzLnRoZW1lX0FcIikgdGhlbWVfQTogYm9vbGVhbjtcclxuXHRASG9zdEJpbmRpbmcoXCJjbGFzcy50aGVtZV9CXCIpIHRoZW1lX0I6IGJvb2xlYW47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5fc2V0X2kxOG5fcmVzb3VyY2UoKTtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHR0aGlzLnRoZW1lID0gY29uZmlnLnRoZW1lO1xyXG5cdFx0XHR0aGlzLnRoZW1lX0EgPSBjb25maWcudGhlbWUgPT0gXCJ0aGVtZV9BXCI7XHJcblx0XHRcdHRoaXMudGhlbWVfQiA9IGNvbmZpZy50aGVtZSA9PSBcInRoZW1lX0JcIjtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2lkZU5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcChtb2RlID0+IChtb2RlID8gXCJpbnZpc2libGVcIiA6IFwidmlzaWJsZVwiKSk7XHJcblxyXG5cdFx0Ly8jcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNlY29uZFNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5cdFx0Ly8jZW5kcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cclxuXHRcdHRoaXMubGF5b3V0TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dE1vZGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5maWx0ZXIoZGF0YSA9PiBkYXRhIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0Y29uc3QgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoaSA9PiBpKSkgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dChmYWxzZSk7XHJcblx0XHRcdGVsc2UgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dCh0cnVlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gbmdBZnRlclZpZXdJbml0KCkge1xyXG5cdC8vIFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlTGF5b3V0KFwid2l0aC1tYXJnaW5cIikpO1xyXG5cdC8vIH1cclxuXHJcblx0b25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHRvblNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9zZXRfaTE4bl9yZXNvdXJjZSgpIHtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5zZXRUcmFuc2xhdGlvbihcImVuXCIsIHtcclxuXHRcdFx0X19zaWduaW46IFwiU2lnbmluXCIsXHJcblx0XHRcdF9fc2lnbnVwOiBcIlNpZ251cFwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcIkFjY291bnRcIixcclxuXHRcdFx0X19zaWdub3V0OiBcIlNpZ25vdXRcIlxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uuc2V0VHJhbnNsYXRpb24oXCJmYVwiLCB7XHJcblx0XHRcdF9fc2lnbmluOiBcIsOZwojDmMKxw5nCiMOYwq9cIixcclxuXHRcdFx0X19zaWdudXA6IFwiw5jCq8OYwqjDmMKqIMOZwobDmMKnw5nChVwiLFxyXG5cdFx0XHRfX2FjY291bnRfbWFuZ2VtZW50OiBcIsOZwoXDmMKvw5jCscObwozDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFwiLFxyXG5cdFx0XHRfX3NpZ25vdXQ6IFwiw5jCrsOYwrHDmcKIw5jCrFwiXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEb1NpZ25vdXRBY3Rpb24gfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMYXlvdXRBY3Rpb25UeXBlcyxcclxuXHRJbnZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdFZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdEV4aXRGdWxsc2NyZWVuQWN0aW9uLFxyXG5cdEZ1bGxzY3JlZW5BY3Rpb25cclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0RnVsbHNjcmVlbk1vZGUgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0QEVmZmVjdCgpIERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgRG9TaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVlbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOKS5waXBlKG1hcCgoKSA9PiBuZXcgSW52aXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGV4aXRfZnVsbHNjcmVlbiQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTilcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgVmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZW5fdG9vbGJhciQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTikucGlwZShcclxuXHRcdHdpdGhMYXRlc3RGcm9tKHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKSksXHJcblx0XHRtYXAoKFsgYWN0aW9uLCB0b29sYmFyTW9kZSBdKSA9PiB7XHJcblx0XHRcdGlmICh0b29sYmFyTW9kZSkgcmV0dXJuIG5ldyBFeGl0RnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0XHRlbHNlIHJldHVybiBuZXcgRnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtdG9vbGJhci1iXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgZGlyPVwicnRsXCIgY29sb3I9XCJwcmltYXJ5XCIgW0B0b29sYmFyQW5pbWF0aW9uXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZVwiPlxyXG4gIDxtYXQtdG9vbGJhci1yb3cgZGlyPVwicnRsXCIgaWQ9XCJmaXJzdFRvb2xiYXJcIj5cclxuICAgIDwhLS0gPGRpdiBpZD1cImJhY2tncm91bmRcIj48L2Rpdj4gLS0+XHJcbiAgICA8aW1nIFtAbG9nb0FuaW1hdGlvbl09XCJsb2dvQW5pbWF0aW9uU3RhdGVcIiBpZD1cImxvZ29cIiByb3V0ZXJMaW5rPScvJyBzcmM9J2Fzc2V0cy9sb2dvcy9sb2dvLXR5cGUucG5nJyAvPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPSdzaG93U2lkZWJhck1lbnUgJiYgZmFsc2UnIChjbGljayk9XCJ0b2dnbGVNYWluU2lkZWJhcigpXCIgbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiXHJcbiAgICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gW0B0aXRsZUFuaW1hdGlvbl09XCJ0aXRsZUFuaW1hdGlvblN0YXRlXCIgaWQ9J2FwcC1uYW1lJz5cclxuICAgICAge3thcHBfY29uZmlnPy5Db25maWcuQXBwVGl0bGV9fVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGFwcC10aXRsZSBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPjwvYXBwLXRpdGxlPlxyXG4gICAgPGFwcC1zZWFyY2gtYm94IGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiPjwvYXBwLXNlYXJjaC1ib3g+XHJcblxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCJhdXRoL3NpZ25pblwiPlxyXG4gICAgICA8c3BhbiBbdHJhbnNsYXRlXT1cIidfX3NpZ25pbidcIj48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHJhbnNsYXRlICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWdudXBcIj5cclxuICAgICAge3snX19zaWdudXAnIHwgdHJhbnNsYXRlfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImRpc3BsYXlOYW1lXCIgbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTEgY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJhY2Njb3VudE5hbWVcIj5cclxuICAgICAgICB7e2Rpc3BsYXlOYW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3BhbiB0cmFuc2xhdGU9XCJfX2FjY291bnRfbWFuZ2VtZW50XCI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPSdzaWdub3V0KCknIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGwtZGlyXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmV4aXRfdG9fYXBwPC9tYXQtaWNvbj5cclxuICAgICAgICA8c3BhbiB0cmFuc2xhdGU+X19zaWdub3V0PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LW1lbnU+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZVNlY29uZFNpZGViYXIoKVwiIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT0nZ29iYWNrKCknPlxyXG4gICAgICA8bWF0LWljb24+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLWxheW91dC1iZWZvcmUtdG9vbGJhci1tZW51XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gKm5nRm9yPVwibGV0IG1lbnUgb2YgbWVudUl0ZW1zJCB8IGFzeW5jXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIFtyb3V0ZXJMaW5rXT1cIlttZW51LnJvdXRlXVwiPlxyXG4gICAgICAgIDwhLS0gPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3ttZW51Lmljb259fTwvbWF0LWljb24+IC0tPlxyXG4gICAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy1sYXlvdXQtYWZ0ZXItdG9vbGJhci1tZW51XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwvbWF0LXRvb2xiYXI+YCxcclxuXHRzdHlsZXM6IFtgI3NlY29uZFRvb2xiYXJ7dHJhbnNpdGlvbjpub25lO3Bvc2l0aW9uOmFic29sdXRlfSNzZWNvbmRUb29sYmFyIGJ1dHRvbntvcGFjaXR5Oi42O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50O2ZvbnQtc2l6ZTouNjVlbSFpbXBvcnRhbnQ7aGVpZ2h0OjUwcHghaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9I3NlY29uZFRvb2xiYXIgYnV0dG9uLmFjdGl2ZXtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmY3NDAwO29wYWNpdHk6MX0jbG9nb3t0cmFuc2l0aW9uOm5vbmU7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLHNhbnMtc2VyaWYhaW1wb3J0YW50fWJ1dHRvbi5ydGwtZGlye2RpcmVjdGlvbjpydGwhaW1wb3J0YW50fSNhY2Njb3VudE5hbWV7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6MjBweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDpib2xkZXJ9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcImxvZ29BbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1MHB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCJjYWxjKDUwJSAtIDUwcHgpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjEzcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNTdweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBcIixcclxuXHRcdFx0XHRcdHRvcDogXCI1N3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVBbmltYXRpb25cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbWZvcnRhYmxlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTY1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTY1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW4tb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pbi1vdXRcIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pbi1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE2NXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjUxcHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNTAlXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHQvLyByaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHQvLyBib3hTaGFkb3c6IFwiMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdC8vIGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTAwcHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNTBweFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMDBweFwiLFxyXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudVRoZW1lQkNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSBzY3JvbGxlZEFtb3VudCA+IDMwMDtcclxuXHRcdFx0Ly8gbGV0IHNjcm9sbFRvVG9wID0gc2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGwgPSBzY3JvbGxlZEFtb3VudDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMTUwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBMT0NBTEVfSUQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOZ3NMYXlvdXRNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJ1bGVNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS10aGVtZS1iL3Rvb2xiYXItbWVudS10aGVtZS1iXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0VHJhbnNsYXRlTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0UnVsZU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHROZ3NMYXlvdXRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51VGhlbWVCQ29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHROZ3NMYXlvdXRNYWluQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzTGF5b3V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NMYXlvdXRNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTE9DQUxFX0lELCB1c2VWYWx1ZTogXCJlbiBlbi1VU1wiIH0sXHJcblx0XHRcdFx0eyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiIsImV4cG9ydCBlbnVtIExheW91dE91dGxldHMge1xyXG5cdC8vIFRPRE86IHJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24gOiA2LjAuNDVcclxuXHRuZ3NfbGF5b3V0X3Rvb2xiYXJfbWVudSA9IFwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIixcclxuXHRuZ3NfbGF5b3V0X2FmdGVyX3Rvb2xiYXJfbWVudSA9IFwibmdzLWxheW91dC1hZnRlci10b29sYmFyLW1lbnVcIixcclxuXHRuZ3NfbGF5b3V0X2JlZm9yZV90b29sYmFyX21lbnUgPSBcIm5ncy1sYXlvdXQtYmVmb3JlLXRvb2xiYXItbWVudVwiLFxyXG5cdGZvb3Rlcl9CID0gXCJmb290ZXJfQlwiLFxyXG5cdGZvb3Rlcl9BID0gXCJmb290ZXJfQVwiXHJcbn1cclxuIl0sIm5hbWVzIjpbImxheW91dC5MYXlvdXRBY3Rpb25UeXBlcyIsImxheW91dC5DTE9TRV9TSURFTkFWIiwibGF5b3V0Lk9QRU5fU0lERU5BViIsImluaXRpYWxTdGF0ZSIsImxheW91dC5SZWR1Y2VyIiwiZnJvbVRvb2xiYXIuUmVkdWNlciIsImNyZWF0ZUZlYXR1cmVTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwiZ2V0VGl0bGUiLCJsYXlvdXQuZ2V0VGl0bGUiLCJnZXRTaG93TWFpblNpZGVuYXYiLCJsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2IiwiZ2V0TWFpblNpZGVOYXZNb2RlIiwibGF5b3V0LmdldE1haW5TaWRlTmF2TW9kZSIsImdldExheW91dE1vZGUiLCJsYXlvdXQuZ2V0TGF5b3V0TW9kZSIsImdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzIiwibGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzIiwiZ2V0U2Vjb25kU2lkZWJhck1vZGUiLCJsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUiLCJnZXRGdWxsc2NyZWVuTW9kZSIsImxheW91dC5nZXRGdWxsc2NyZWVuTW9kZSIsImZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlIiwidXNlciIsIkluamVjdGlvblRva2VuIiwiQmVoYXZpb3JTdWJqZWN0IiwiZ2V0Q29uZmlncyIsImNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsIkV2ZW50RW1pdHRlciIsImdldEFjY291bnRJbmZvIiwibWFwIiwiY29tYmluZUxhdGVzdCIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJTaWduaW5TZXJ2aWNlIiwiT3V0cHV0IiwiSW5wdXQiLCJWaWV3Q2hpbGQiLCJmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImZyb21MYXlvdXQuZ2V0TGF5b3V0VG9vbGJhck1vZGUiLCJmcm9tRXZlbnQiLCJET0NVTUVOVCIsIkxvY2F0aW9uIiwiSG9zdExpc3RlbmVyIiwicm91dGVyIiwiTmF2aWdhdGlvbkVuZCIsIlJvdXRlciIsIlRyYW5zbGF0ZVNlcnZpY2UiLCJVc2VyRmFjYWRlU2VydmljZSIsIkhvc3RCaW5kaW5nIiwiRG9TaWdub3V0QWN0aW9uIiwid2l0aExhdGVzdEZyb20iLCJBY3Rpb25zIiwiRWZmZWN0IiwiTE9DQUxFX0lEIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIlRyYW5zbGF0ZU1vZHVsZSIsIk5nc0NvbmZpZ01vZHVsZSIsIlJ1bGVNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxD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
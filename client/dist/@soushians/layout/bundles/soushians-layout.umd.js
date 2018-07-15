(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/animations'), require('@soushians/authentication'), require('rxjs/operators'), require('@soushians/user'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs/observable/fromEvent'), require('@angular/router'), require('rxjs'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/do'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@ngrx/effects'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material'), require('@soushians/rule')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@ngrx/store', '@angular/core', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/animations', '@soushians/authentication', 'rxjs/operators', '@soushians/user', '@angular/common', '@angular/platform-browser', 'rxjs/observable/fromEvent', '@angular/router', 'rxjs', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@ngrx/effects', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material', '@soushians/rule'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.layout = {}),null,global.ng.core,global.rxjs.BehaviorSubject,null,global.ng.animations,null,global.rxjs.operators,null,global.ng.common,global.ng.platformBrowser,global.rxjs['observable/fromEvent'],global.ng.router,global.rxjs,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/do'],global.rxjs['add/operator/catch'],global.rxjs['add/observable/empty'],null,global.ng.forms,global.ng.common.http,global.ng['flex-layout'],global.ng.material,null));
}(this, (function (exports,i2,i0,BehaviorSubject,config,animations,authentication,operators,user,common,platformBrowser,fromEvent,router,rxjs,map,mergeMap,_do,_catch,empty,effects,forms,http,flexLayout,material,rule) { 'use strict';

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
    var UpdateLayoutConfigAction = (function () {
        function UpdateLayoutConfigAction(payload) {
            this.payload = payload;
            this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
        }
        return UpdateLayoutConfigAction;
    }());
    var OpenSidenavAction = (function () {
        function OpenSidenavAction() {
            this.type = OPEN_SIDENAV;
        }
        return OpenSidenavAction;
    }());
    var CloseSidenavAction = (function () {
        function CloseSidenavAction() {
            this.type = CLOSE_SIDENAV;
        }
        return CloseSidenavAction;
    }());
    var ChangeLayout = (function () {
        function ChangeLayout(name) {
            this.name = name;
            this.type = LayoutActionTypes.CHANGE_LAYOUT;
        }
        return ChangeLayout;
    }());
    var ChangeSideNavMode = (function () {
        function ChangeSideNavMode(mode) {
            this.mode = mode;
            this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
        }
        return ChangeSideNavMode;
    }());
    var ChangeSecondSidenavMode = (function () {
        function ChangeSecondSidenavMode(mode) {
            this.mode = mode;
            this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
        }
        return ChangeSecondSidenavMode;
    }());
    var DoSignoutAction = (function () {
        function DoSignoutAction() {
            this.type = LayoutActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
    }());
    var TitleChangedAction = (function () {
        function TitleChangedAction(title) {
            this.title = title;
            this.type = LayoutActionTypes.TITLE_CHANGED;
        }
        return TitleChangedAction;
    }());
    var OpenSecondSidenavAction = (function () {
        function OpenSecondSidenavAction() {
            this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
        }
        return OpenSecondSidenavAction;
    }());
    var CloseSecondSidenavAction = (function () {
        function CloseSecondSidenavAction() {
            this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
        }
        return CloseSecondSidenavAction;
    }());
    var FullscreenAction = (function () {
        function FullscreenAction() {
            this.type = LayoutActionTypes.FULLSCREEN;
        }
        return FullscreenAction;
    }());
    var ExitFullscreenAction = (function () {
        function ExitFullscreenAction() {
            this.type = LayoutActionTypes.EXIT_FULLSCREEN;
        }
        return ExitFullscreenAction;
    }());
    var ToggleFullscreenAction = (function () {
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
    function Reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
                var /** @type {?} */ _state_1 = {};
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
    var /** @type {?} */ getTitle = function (state) { return state.title; };
    var /** @type {?} */ getShowMainSidenav = function (state) { return state.showMainSidenav; };
    var /** @type {?} */ getMainSideNavMode = function (state) { return state.mainSideNavMode; };
    var /** @type {?} */ getLayoutMode = function (state) { return state.layoutMode; };
    var /** @type {?} */ getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
    var /** @type {?} */ getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
    var /** @type {?} */ getFullscreenMode = function (state) { return state.fullscreen; };

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
    var ChangeToolbatToComfortableModeAction = (function () {
        function ChangeToolbatToComfortableModeAction() {
            this.type = ToolbarActionTypes.COMPORTABLE;
        }
        return ChangeToolbatToComfortableModeAction;
    }());
    var ChangeToolbatToCompactModeAction = (function () {
        function ChangeToolbatToCompactModeAction() {
            this.type = ToolbarActionTypes.COMPACT;
        }
        return ChangeToolbatToCompactModeAction;
    }());
    var ChangeToolbatToSummaryModeAction = (function () {
        function ChangeToolbatToSummaryModeAction() {
            this.type = ToolbarActionTypes.SUMMARY;
        }
        return ChangeToolbatToSummaryModeAction;
    }());
    var EnableComfortableModeAction = (function () {
        function EnableComfortableModeAction() {
            this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
        }
        return EnableComfortableModeAction;
    }());
    var DisableComfortableModeAction = (function () {
        function DisableComfortableModeAction() {
            this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
        }
        return DisableComfortableModeAction;
    }());
    var VisibleToolbarAction = (function () {
        function VisibleToolbarAction() {
            this.type = ToolbarActionTypes.VISIBLE;
        }
        return VisibleToolbarAction;
    }());
    var InvisibleToolbarAction = (function () {
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
    var /** @type {?} */ getToolbarMode = function (state) { return state.mode; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ LayoutReducers = {
        layout: Reducer,
        toolbar: Reducer$1
    };
    //#region selectors
    var /** @type {?} */ selectLayoutState = i2.createFeatureSelector("layout");
    //#endregion
    var /** @type {?} */ getLayout = i2.createSelector(selectLayoutState, function (state) { return state.layout; });
    var /** @type {?} */ getTitle$1 = i2.createSelector(getLayout, getTitle);
    var /** @type {?} */ getShowMainSidenav$1 = i2.createSelector(getLayout, getShowMainSidenav);
    var /** @type {?} */ getMainSideNavMode$1 = i2.createSelector(getLayout, getMainSideNavMode);
    var /** @type {?} */ getLayoutMode$1 = i2.createSelector(getLayout, getLayoutMode);
    var /** @type {?} */ getShowSecondSidebarStatus$1 = i2.createSelector(getLayout, getShowSecondSidebarStatus);
    var /** @type {?} */ getSecondSidebarMode$1 = i2.createSelector(getLayout, getSecondSidebarMode);
    var /** @type {?} */ getFullscreenMode$1 = i2.createSelector(getLayout, getFullscreenMode);
    //#region toolbar
    var /** @type {?} */ getLayoutToolbar = i2.createSelector(selectLayoutState, function (state) { return state.toolbar; });
    var /** @type {?} */ getLayoutToolbarMode = i2.createSelector(getLayoutToolbar, getToolbarMode);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ menu_item_authorization_operator = function (_a) {
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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("LayoutModuleConfigModel");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutConfigurationService = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var MainMenuComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var SearchBoxComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var LogoContainerComponent = (function () {
        function LogoContainerComponent(sdf) {
            this.sdf = sdf;
        }
        LogoContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-logo-container",
                        template: "\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                        styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
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
     * @suppress {checkTypes} checked by tsc
     */
    var ToolbarMenuComponent = (function () {
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
                var /** @type {?} */ action;
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
                var /** @type {?} */ action;
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
                        template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\n  <mat-toolbar-row>\n      <!-- <div id=\"background\"></div> -->\n      <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"displayName\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{displayName}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\n      <button mat-button \n      *ngFor=\"let menu of menuItems$ | async\"\n      routerLinkActive=\"active\"\n      [routerLink]=\"[menu.route]\">\n      <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n      <span>{{menu.title}}</span>\n    </button>\n  </div>\n</mat-toolbar-row>\n</mat-toolbar>",
                        styles: ["#logo,#secondToolbar{transition:all;position:absolute}#app-name{padding-right:8px}"],
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
     * @suppress {checkTypes} checked by tsc
     */
    var FooterComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var TitleComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var MainComponent = (function () {
        function MainComponent(store, router$$1, configService, userFacadeService) {
            var _this = this;
            this.store = store;
            this.router = router$$1;
            this.configService = configService;
            this.userFacadeService = userFacadeService;
            this.showSidebarMenu = new rxjs.BehaviorSubject(true);
            this.width = 100;
            this.store.dispatch(new ChangeSideNavMode("push"));
            this.user$ = this.store.select(function (s) { return ((s)).user.user.data; });
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
            { type: i0.Component, args: [{
                        selector: "layout-main",
                        template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\n          <router-outlet name=\"footer_A\"></router-outlet>\n          <router-outlet name=\"footer_B\"></router-outlet>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                        styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"],
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
        MainComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: router.Router },
                { type: LayoutConfigurationService },
                { type: user.UserFacadeService }
            ];
        };
        MainComponent.propDecorators = {
            app_config: [{ type: i0.Input, args: ["app-config",] }],
            mainSideNav: [{ type: i0.ViewChild, args: ["mainSideNav",] }]
        };
        return MainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgsLayoutModule = (function () {
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
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
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
                            config.NgsConfigModule,
                            rule.RuleModule
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
    var RootNgsLayoutModule = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    //components

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
    exports.NgsLayoutModule = NgsLayoutModule;
    exports.RootNgsLayoutModule = RootNgsLayoutModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵg = FooterComponent;
    exports.ɵe = LogoContainerComponent;
    exports.ɵa = MainMenuComponent;
    exports.ɵi = MainComponent;
    exports.ɵd = SearchBoxComponent;
    exports.ɵh = TitleComponent;
    exports.ɵf = ToolbarMenuComponent;
    exports.ɵm = LayoutEffects;
    exports.ɵj = LayoutReducers;
    exports.ɵk = Reducer;
    exports.ɵl = Reducer$1;
    exports.ɵc = LayoutConfigurationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIixcclxuXHRGVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBGVUxMU0NSRUVOXCIsXHJcblx0RVhJVF9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBFWElUX0ZVTExTQ1JFRU5cIixcclxuXHRUT0dHTEVfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gVE9HR0xFX0ZVTExTQ1JFRU5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEV4aXRGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBFeGl0RnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGVcclxuXHR8IFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0Y29uc3QgX3N0YXRlID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdGlmIChrIGluIHN0YXRlKSBfc3RhdGVba10gPSBhY3Rpb24ucGF5bG9hZFtrXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uX3N0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Ly8gY2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU46XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0ZnVsbHNjcmVlbjogc3RhdGUuZnVsbHNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmZ1bGxzY3JlZW47XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbj86IEFjdGlvbjtcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcj86IChbIHJvdXRlcywgdXNlciBdOiBbYW55LCBhbnldKSA9PiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgbWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IgPSBmdW5jdGlvbihbIHJvdXRlcywgdXNlciBdKSB7XHJcblx0aWYgKCF1c2VyLlJvbGVzKSByZXR1cm4gW107XHJcblx0aWYgKHVzZXIuUm9sZXMubGVuZ3RoID09IDApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvdXRlcy5maWx0ZXIocm91dGUgPT4gdXNlci5Sb2xlcy5zb21lKHVzZXJSb2xlID0+IHJvdXRlLnJvbGVzLmluZGV4T2YodXNlclJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWUsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJ3aXRoLW1hcmdpblwiLCAvLyB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvXCIsXHJcblx0XHRcdGljb246IFwibXVsdGlsaW5lX2NoYXJ0XCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiwgXCJVc2VyXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCtcOZwoHDmMKtw5nChyDDmMKnw5jCtcOZwoTDm8KMXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9jb25maWdzXCIsXHJcblx0XHRcdGljb246IFwic2V0dGluZ3NcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqpcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL3NvdXJjZVwiLFxyXG5cdFx0XHRpY29uOiBcImRldmljZV9odWJcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwqLDmMKvw5jCscOYwrMgw5jCs8OYwrHDmcKIw5vCjMOYwrMgw5nCh8OYwqdcIlxyXG5cdFx0fVxyXG5cdF0sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4oXCJMYXlvdXRNb2R1bGVDb25maWdNb2RlbFwiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDb25maWdzIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0Ly8gcHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRDb25maWdNb2RlbDtcclxuXHRwcml2YXRlIF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRDb25maWdzKVxyXG5cdFx0XHQubWFwKGNvbmZpZ3MgPT4gY29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImxheW91dF9jb25maWdcIikpXHJcblx0XHRcdC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbihjb25maWcuQ29uZmlnKSk7XHJcblx0XHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWcuQ29uZmlnKTtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtbGF5b3V0LW1haW4tbWVudVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1saXN0IGNsYXNzPVwibWFpbi1tZW51LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJhdXRoZW50aWNhdGVkIHwgYXN5bmNcIj5cclxuICAgIDxhICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdXRlcyQgfCBhc3luY1wiIChjbGljayk9XCJjbG9zZVNpZGViYXIuZW1pdCgpXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIG1hdC1saXN0LWl0ZW0gW3JvdXRlckxpbmtdPVwiW2l0ZW0ucm91dGVdXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7aXRlbS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8c3BhbiBtZExpbmU+e3tpdGVtLnRpdGxlfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWxpc3Q+YCxcclxuXHRzdHlsZXM6IFtgLmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0ubWF0LWxpc3QtaXRlbS5hY3RpdmUgbWF0LWljb257Y29sb3I6IzAwNzJhZX1hLm1hdC1saXN0LWl0ZW0uY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9I2NsZWFyVXNlck1lbnVJdGVte3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTNweDt0b3A6MTNweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwiY2hpbGRNZW51XCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwcHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjFcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVJdGVtXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIGNsb3NlU2lkZWJhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBhdXRoZW50aWNhdGVkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Y3VzdG9tZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdHJvdXRlcyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0QFZpZXdDaGlsZChcImN1c3RvbWVyTW9iaWxlSW5wdXRcIikgY3VzdG9tZXJNb2JpbGVJbnB1dDogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMucm91dGVzJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGBcclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5zaGF0ZWxMb2dvQW5pbWF0aW9ue2hlaWdodDozNXB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtdG9vbGJhclwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgICA8aW1nIFtAbG9nb0FuaW1hdGlvbl09XCJsb2dvQW5pbWF0aW9uU3RhdGVcIiBpZD1cImxvZ29cIiByb3V0ZXJMaW5rPScvJyBzcmM9Jy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2hhdGVsLWxvZ28ucG5nJyAvPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPSdzaG93U2lkZWJhck1lbnUgJiYgZmFsc2UnIChjbGljayk9XCJ0b2dnbGVNYWluU2lkZWJhcigpXCIgbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gW0B0aXRsZUFuaW1hdGlvbl09XCJ0aXRsZUFuaW1hdGlvblN0YXRlXCIgaWQ9J2FwcC1uYW1lJz5cclxuICAgICAge3thcHBfY29uZmlnPy5Db25maWcuQXBwVGl0bGV9fVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGFwcC10aXRsZSBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPjwvYXBwLXRpdGxlPlxyXG4gICAgPGFwcC1zZWFyY2gtYm94IGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiPjwvYXBwLXNlYXJjaC1ib3g+XHJcbiAgICBcclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTE+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gXHJcbiAgICAgICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiXHJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxyXG4gICAgICBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYCNsb2dvLCNzZWNvbmRUb29sYmFye3RyYW5zaXRpb246YWxsO3Bvc2l0aW9uOmFic29sdXRlfSNhcHAtbmFtZXtwYWRkaW5nLXJpZ2h0OjhweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCI5MHB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjc2cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIyNXB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI0NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxNHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMjhweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudUNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSBzY3JvbGxlZEFtb3VudCA+IDMwMDtcclxuXHRcdFx0Ly8gbGV0IHNjcm9sbFRvVG9wID0gc2Nyb2xsZWRBbW91bnQgLSB0aGlzLmxhc3RTY3JvbGwgPCAwO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGwgPSBzY3JvbGxlZEFtb3VudDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMjAwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIi8gXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gXCJAYW5ndWxhci9zZXJ2aWNlLXdvcmtlclwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0RmVhdHVyZVN0YXRlLFxyXG5cdGdldFNob3dNYWluU2lkZW5hdixcclxuXHRnZXRNYWluU2lkZU5hdk1vZGUsXHJcblx0Z2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsXHJcblx0Z2V0U2Vjb25kU2lkZWJhck1vZGUsXHJcblx0Z2V0TGF5b3V0TW9kZSxcclxuXHRnZXRMYXlvdXRUb29sYmFyTW9kZSxcclxuXHRnZXRGdWxsc2NyZWVuTW9kZVxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVNlY29uZFNpZGVuYXZNb2RlLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VMYXlvdXRcclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LW1haW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI21haW5TaWRlTmF2IFtuZ0NsYXNzXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCIgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsc2NyZWVuJCB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIFxyXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgaWQ9XCJsYXlvdXQtc2lkbmF2XCIgW2NsYXNzTmFtZV09XCJsYXlvdXRNb2RlIHwgYXN5bmNcIj5cclxuICAgIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJtYWluU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93TWFpblNpZGVuYXYgfCBhc3luYycgI3NpZGViYXIgKGNsb3NlZFN0YXJ0KT1cIm9uU2lkZWJhckNsb3NlZFN0YXJ0KClcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdD5cclxuICAgICAgICA8bmdzLWxheW91dC1tYWluLW1lbnUgW2F1dGhlbnRpY2F0ZWRdPSdzaG93U2lkZWJhck1lbnUnIChjbG9zZVNpZGViYXIpPVwic2lkZWJhci5jbG9zZSgpXCIgKGNsaWNrKT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIj48L25ncy1sYXlvdXQtbWFpbi1tZW51PlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+XHJcbiAgICA8IS0tIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJzZWNvbmRTaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dTZWNvbmRTaWRlbmF2IHwgYXN5bmMnIChjbG9zZWRTdGFydCk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCJcclxuICAgICAgcG9zaXRpb249XCJlbmRcIiAjc2Vjb25kX3NpZGViYXIgY2xhc3M9XCJzZWNvbmRfc2lkZWJhclwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0IGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+IC0tPlxyXG4gICAgPGRpdiBmeEZsZXhMYXlvdXQ9J2NvbHVtbicgaWQ9XCJhcHAtbWFpbi1jb250YWluZXJcIiBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgPGRpdiBmeEZsZXg9JzAgMCAxMDAnPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8Zm9vdGVyIFtAbW9kZV09XCJtb2RlJCB8IGFzeW5jXCIgcnVsZUFuY2hvcj1cImxheW91dF9mb290ZXJcIj5cclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQVwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJmb290ZXJfQlwiPjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICAgIDxhcHAtZm9vdGVyIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2FwcC1mb290ZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNwdXJjaGFzZS1mYWItYnV0dG9ue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToyM3B4O2xlZnQ6MzFweH1tZC1wcm9ncmVzcy1iYXJ7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50fS53aXRoLW1hcmdpbiAjYXBwLW1haW4tY29udGFpbmVye21hcmdpbi10b3A6MjVweDtwYWRkaW5nLXJpZ2h0OjI1cHg7cGFkZGluZy1sZWZ0OjI1cHh9LnNlY29uZF9zaWRlYmFye3dpZHRoOjM4MHB4fS5tb3JlLWRldGFpbHttYXJnaW46OHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwYWRkaW5nOjEwcHg7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6OTYlO2JvcmRlcjoxcHggc29saWQgI2RlZGVkZTtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjphbGwgLjNzIGVhc2V9Lm1vcmUtZGV0YWlsOmhvdmVye2JhY2tncm91bmQ6I2VlZX1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTttYXJnaW4tdG9wOjI1cHg7YmFja2dyb3VuZC1jb2xvcjojZjFmMWYxfWBdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJtb2RlXCIsIFtcclxuXHRcdFx0c3RhdGUoXCJ2aXNpYmxlXCIsIHN0eWxlKHsgdHJhbnNmb3JtOiBcInNjYWxlWSgxKSB0cmFuc2xhdGVZKDApXCIgfSkpLFxyXG5cdFx0XHRzdGF0ZShcImludmlzaWJsZVwiLCBzdHlsZSh7IGhlaWdodDogXCIwXCIsIHRyYW5zZm9ybTogXCJzY2FsZVkoMCkgdHJhbnNsYXRlWSgxMDAlKVwiIH0pKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInZpc2libGUgPT4gaW52aXNpYmxlXCIsIFsgYW5pbWF0ZShcIjEwMDBtc1wiKSBdKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImludmlzaWJsZSA9PiB2aXNpYmxlXCIsIFsgYW5pbWF0ZShcIjEwMDBtc1wiKSBdKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc6IENvbmZpZ01vZGVsPGFueT47XHJcblx0bW9kZSQ6IE9ic2VydmFibGU8XCJ2aXNpYmxlXCIgfCBcImludmlzaWJsZVwiPjtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRpc3BsYXlOYW1lJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGlzRnVsbHNjcmVlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0cHJvZ3Jlc3NTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNob3dTaWRlYmFyTWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XHJcblx0Ly91c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRtYWluU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHRsYXlvdXRNb2RlOiBPYnNlcnZhYmxlPFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzZWNvbmRTaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBWaWV3Q2hpbGQoXCJtYWluU2lkZU5hdlwiKSBtYWluU2lkZU5hdjogRWxlbWVudFJlZjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2lkZU5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChzID0+IChzIGFzIGFueSkudXNlci51c2VyLmRhdGEpO1xyXG5cdFx0dGhpcy5kaXNwbGF5TmFtZSQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCk7XHJcblx0XHR0aGlzLnNob3dNYWluU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLm1haW5TaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldE1haW5TaWRlTmF2TW9kZSk7XHJcblx0XHR0aGlzLnRvb2xiYXJBbmltYXRpb25TdGF0ZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXJNb2RlKTtcclxuXHJcblx0XHR0aGlzLmlzRnVsbHNjcmVlbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSk7XHJcblx0XHR0aGlzLm1vZGUkID0gdGhpcy5pc0Z1bGxzY3JlZW4kLm1hcChtb2RlID0+IChtb2RlID8gXCJpbnZpc2libGVcIiA6IFwidmlzaWJsZVwiKSk7XHJcblxyXG5cdFx0Ly8jcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGUoXCJwdXNoXCIpKTtcclxuXHRcdHRoaXMuc2hvd1NlY29uZFNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcblx0XHR0aGlzLnNlY29uZFNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5cdFx0Ly8jZW5kcmVnaW9uIG1hbmFnZSBzZWNvbmQgc2lkZWJhclxyXG5cclxuXHRcdHRoaXMubGF5b3V0TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dE1vZGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5maWx0ZXIoZGF0YSA9PiBkYXRhIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0dmFyIGhpZGVTaXR1YXRpb25zID0gW1xyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ25pblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC9yZWdpc3RlclwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi9hdXRoL3NpZ251cC92ZXJpZmljYXRpb25cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvdXNlci9wYXNzd29yZC9yZXNldFwiXHJcblx0XHRcdF07XHJcblx0XHRcdGlmIChoaWRlU2l0dWF0aW9ucy5zb21lKGkgPT4gaSkpIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQoZmFsc2UpO1xyXG5cdFx0XHRlbHNlIHRoaXMuc2hvd1NpZGViYXJNZW51Lm5leHQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHQvLyBcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZUxheW91dChcIndpdGgtbWFyZ2luXCIpKTtcclxuXHQvLyB9XHJcblxyXG5cdG9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0b25TaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRG9TaWdub3V0QWN0aW9uIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7XHJcblx0TGF5b3V0QWN0aW9uVHlwZXMsXHJcblx0SW52aXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRWaXNpYmxlVG9vbGJhckFjdGlvbixcclxuXHRFeGl0RnVsbHNjcmVlbkFjdGlvbixcclxuXHRGdWxsc2NyZWVuQWN0aW9uXHJcbn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldEZ1bGxzY3JlZW5Nb2RlIH0gZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExheW91dEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKSBEb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IERvU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTikucGlwZShtYXAoKCkgPT4gbmV3IEludmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRleGl0X2Z1bGxzY3JlZW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVuX3Rvb2xiYXIkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU4pLnBpcGUoXHJcblx0XHR3aXRoTGF0ZXN0RnJvbSh0aGlzLnN0b3JlLnNlbGVjdChnZXRGdWxsc2NyZWVuTW9kZSkpLFxyXG5cdFx0bWFwKChbIGFjdGlvbiwgdG9vbGJhck1vZGUgXSkgPT4ge1xyXG5cdFx0XHRpZiAodG9vbGJhck1vZGUpIHJldHVybiBuZXcgRXhpdEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdFx0ZWxzZSByZXR1cm4gbmV3IEZ1bGxzY3JlZW5BY3Rpb24oKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NDb25maWdNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xvZ28tY29udGFpbmVyL2xvZ28tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sYmFyTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGl0bGVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRFZmZlY3RzIH0gZnJvbSBcIi4vbGF5b3V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUnVsZU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRSdWxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMiLCJsYXlvdXQuQ0xPU0VfU0lERU5BViIsImxheW91dC5PUEVOX1NJREVOQVYiLCJpbml0aWFsU3RhdGUiLCJsYXlvdXQuUmVkdWNlciIsImZyb21Ub29sYmFyLlJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldFRpdGxlIiwibGF5b3V0LmdldFRpdGxlIiwiZ2V0U2hvd01haW5TaWRlbmF2IiwibGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImdldE1haW5TaWRlTmF2TW9kZSIsImxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUiLCJnZXRMYXlvdXRNb2RlIiwibGF5b3V0LmdldExheW91dE1vZGUiLCJnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImdldFNlY29uZFNpZGViYXJNb2RlIiwibGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlIiwiZ2V0RnVsbHNjcmVlbk1vZGUiLCJsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUiLCJmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSIsInVzZXIiLCJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsImdldENvbmZpZ3MiLCJjb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJFdmVudEVtaXR0ZXIiLCJnZXRBY2NvdW50SW5mbyIsIm1hcCIsImNvbWJpbmVMYXRlc3QiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiU2lnbmluU2VydmljZSIsIk91dHB1dCIsIklucHV0IiwiVmlld0NoaWxkIiwiZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlIiwiZnJvbUV2ZW50IiwiRE9DVU1FTlQiLCJMb2NhdGlvbiIsIkhvc3RMaXN0ZW5lciIsInJvdXRlciIsIk5hdmlnYXRpb25FbmQiLCJSb3V0ZXIiLCJVc2VyRmFjYWRlU2VydmljZSIsIkRvU2lnbm91dEFjdGlvbiIsIndpdGhMYXRlc3RGcm9tIiwiQWN0aW9ucyIsIkVmZmVjdCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdExpc3RNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJOZ3NDb25maWdNb2R1bGUiLCJSdWxlTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWixDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUks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
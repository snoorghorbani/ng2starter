(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/animations'), require('@soushians/authentication'), require('rxjs/operators'), require('@soushians/user'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs/observable/fromEvent'), require('@angular/router'), require('rxjs'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/do'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@ngrx/effects'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@ngrx/store', '@angular/core', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/animations', '@soushians/authentication', 'rxjs/operators', '@soushians/user', '@angular/common', '@angular/platform-browser', 'rxjs/observable/fromEvent', '@angular/router', 'rxjs', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@ngrx/effects', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.layout = {}),null,global.ng.core,global.rxjs.BehaviorSubject,null,global.ng.animations,null,global.rxjs.operators,null,global.ng.common,global.ng.platformBrowser,global.rxjs['observable/fromEvent'],global.ng.router,global.rxjs,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/do'],global.rxjs['add/operator/catch'],global.rxjs['add/observable/empty'],null,global.ng.forms,global.ng.common.http,global.ng['flex-layout'],global.ng.material));
}(this, (function (exports,i2,i0,BehaviorSubject,config,animations,authentication,operators,user,common,platformBrowser,fromEvent,router,rxjs,map,mergeMap,_do,_catch,empty,effects,forms,http,flexLayout,material) { 'use strict';

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
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
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
                var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 300;
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
                        template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <footer [@mode]=\"mode$ | async\">\n          <router-outlet name=\"footer_A\"></router-outlet>\n          <router-outlet name=\"footer_B\"></router-outlet>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
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
                            config.NgsConfigModule
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9QRU5fU0lERU5BViA9IFwiW0xheW91dF0gT3BlbiBTaWRlbmF2XCI7XHJcbmV4cG9ydCBjb25zdCBDTE9TRV9TSURFTkFWID0gXCJbTGF5b3V0XSBDbG9zZSBTaWRlbmF2XCI7XHJcblxyXG5leHBvcnQgZW51bSBMYXlvdXRBY3Rpb25UeXBlcyB7XHJcblx0VVBEQVRFX0xBWU9VVF9DT05GSUcgPSBcIltMYXlvdXRdIFVQREFURV9MQVlPVVRfQ09ORklHXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0xheW91dF0gZG8gc2lnbm91dFwiLFxyXG5cdFRJVExFX0NIQU5HRUQgPSBcIltMQVlPVVRdIFRJVExFX0NIQU5HRURcIixcclxuXHRDSEFOR0VfTEFZT1VUID0gXCJbTGF5b3V0XSBDaGFuZ2UgTGF5b3V0XCIsXHJcblx0Q0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIG1haW4gc2lkZW5hdiBtb2RlXCIsXHJcblx0T1BFTl9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gT3BlbiBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENMT1NFX1NFQ09ORF9TSURFQkFSID0gXCJbTGF5b3V0XSBDbG9zZSBTZWNvbmQgU2lkZWJhclwiLFxyXG5cdENIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFID0gXCJbTGF5b3V0XSBDaGFuZ2Ugc2Vjb25kIHNpZGVuYXYgbW9kZVwiLFxyXG5cdEZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIEZVTExTQ1JFRU5cIixcclxuXHRFWElUX0ZVTExTQ1JFRU4gPSBcIltMYXlvdXRdIEVYSVRfRlVMTFNDUkVFTlwiLFxyXG5cdFRPR0dMRV9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBUT0dHTEVfRlVMTFNDUkVFTlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gT1BFTl9TSURFTkFWO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvc2VTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ0xPU0VfU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZUxheW91dCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IFwid2l0aC1tYXJnaW5cIiB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlU2lkZU5hdk1vZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNlY29uZFNpZGVuYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIG1vZGU6IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIikge31cclxufVxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLlRJVExFX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNMT1NFX1NFQ09ORF9TSURFQkFSO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgY2xhc3MgRXhpdEZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5FWElUX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID1cclxuXHR8IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvblxyXG5cdHwgT3BlblNpZGVuYXZBY3Rpb25cclxuXHR8IENsb3NlU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2hhbmdlU2lkZU5hdk1vZGVcclxuXHR8IENoYW5nZUxheW91dFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBUaXRsZUNoYW5nZWRBY3Rpb25cclxuXHR8IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb25cclxuXHR8IEZ1bGxzY3JlZW5BY3Rpb25cclxuXHR8IEV4aXRGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZVxyXG5cdHwgVG9nZ2xlRnVsbHNjcmVlbkFjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuLi9hY3Rpb25zL2xheW91dFwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uOiBBY3Rpb247XHJcblx0ZnVsbHNjcmVlbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzaG93TWFpblNpZGVuYXY6IGZhbHNlLFxyXG5cdHNob3dTZWNvbmRTaWRlTmF2OiBmYWxzZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0bWFpblNpZGVOYXZNb2RlOiBcIm92ZXJcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0ZnVsbHNjcmVlbjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGxheW91dC5BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLlVQREFURV9MQVlPVVRfQ09ORklHOlxyXG5cdFx0XHRjb25zdCBfc3RhdGUgPSB7fTtcclxuXHRcdFx0T2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLmZvckVhY2goayA9PiB7XHJcblx0XHRcdFx0aWYgKGsgaW4gc3RhdGUpIF9zdGF0ZVtrXSA9IGFjdGlvbi5wYXlsb2FkW2tdO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHQuLi5fc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkNMT1NFX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgbGF5b3V0Lk9QRU5fU0lERU5BVjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93TWFpblNpZGVuYXY6IHRydWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHRpdGxlOiBhY3Rpb24udGl0bGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkNIQU5HRV9MQVlPVVQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bGF5b3V0TW9kZTogYWN0aW9uLm5hbWVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTUFJTl9TSURFTkFWRV9NT0RFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1haW5TaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5PUEVOX1NFQ09ORF9TSURFQkFSOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dTZWNvbmRTaWRlTmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzZWNvbmRTaWRlTmF2TW9kZTogYWN0aW9uLm1vZGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU46XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZnVsbHNjcmVlbjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHQvLyBjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTjpcclxuXHRcdC8vIFx0cmV0dXJuIHtcclxuXHRcdC8vIFx0XHQuLi5zdGF0ZSxcclxuXHRcdC8vIFx0XHRmdWxsc2NyZWVuOiBzdGF0ZS5mdWxsc2NyZWVuID09PSB0cnVlID8gZmFsc2UgOiB0cnVlXHJcblx0XHQvLyBcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NpZGVuYXYgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93TWFpblNpZGVuYXY7XHJcbmV4cG9ydCBjb25zdCBnZXRUaXRsZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnRpdGxlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubWFpblNpZGVOYXZNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dTZWNvbmRTaWRlTmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0U2Vjb25kU2lkZWJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zZWNvbmRTaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZnVsbHNjcmVlbjtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBUb29sYmFyQWN0aW9uVHlwZXMge1xyXG5cdENPTVBPUlRBQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QT1JUQUJMRVwiLFxyXG5cdENPTVBBQ1QgPSBcIltMYXlvdXRdW1RPT0xCQVJdIENPTVBBQ1RcIixcclxuXHRTVU1NQVJZID0gXCJbTGF5b3V0XVtUT09MQkFSXSBTVU1NQVJZXCIsXHJcblx0RU5BQkxFX0NPTUZPUlRBQkxFX01PREUgPSBcIltMYXlvdXRdW1RPT0xCQVJdIEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0RElTQkFMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBESVNCQUxFX0NPTUZPUlRBQkxFX01PREVcIixcclxuXHRWSVNJQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBWSVNJQkxFXCIsXHJcblx0SU5WSVNJQkxFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBJTlZJU0lCTEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkNPTVBPUlRBQkxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5TVU1NQVJZO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVDb21mb3J0YWJsZU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBWaXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5WSVNJQkxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBJbnZpc2libGVUb29sYmFyQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLklOVklTSUJMRTtcclxufVxyXG5leHBvcnQgdHlwZSBUb29sYmFyQWN0aW9ucyA9XHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb25cclxuXHR8IENoYW5nZVRvb2xiYXRUb0NvbXBhY3RNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG5cdHwgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBWaXNpYmxlVG9vbGJhckFjdGlvblxyXG5cdHwgSW52aXNpYmxlVG9vbGJhckFjdGlvbjtcclxuIiwiaW1wb3J0IHsgVG9vbGJhckFjdGlvblR5cGVzLCBUb29sYmFyQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRtb2RlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCI7XHJcblx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBib29sZWFuO1xyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogYm9vbGVhbjtcclxuXHR2aXNpYmlsaXR5OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2UsXHJcblx0Y29tZm9ydGFibGVNb2RlSGF2ZUJlZW5Eb25lOiBmYWxzZSxcclxuXHR2aXNpYmlsaXR5OiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBUb29sYmFyQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QQUNUOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBzdGF0ZS5lbmFibGVDb21mb3J0YWJsZU1vZGUgPyBcImNvbWZvcnRhYmxlXCIgOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcInN1bW1hcnlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRU5BQkxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5ESVNCQUxFX0NPTUZPUlRBQkxFX01PREU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0ZW5hYmxlQ29tZm9ydGFibGVNb2RlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJoaWRlXCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb29sYmFyTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1vZGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi9sYXlvdXQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tVG9vbGJhciBmcm9tIFwiLi90b29sYmFyLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3RhdGUge1xyXG5cdGxheW91dDogbGF5b3V0LlN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0UmVkdWNlcnMgPSB7XHJcblx0bGF5b3V0OiBsYXlvdXQuUmVkdWNlcixcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5SZWR1Y2VyXHJcbn07XHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRsYXlvdXQ6IExheW91dFN0YXRlO1xyXG5cdHRvb2xiYXI6IGZyb21Ub29sYmFyLlN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TGF5b3V0U3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8TGF5b3V0U3RhdGU+KFwibGF5b3V0XCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLmxheW91dCk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRUaXRsZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd01haW5TaWRlbmF2ID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYWluU2lkZU5hdk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRMYXlvdXRNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0U2Vjb25kU2lkZWJhck1vZGUpO1xyXG5leHBvcnQgY29uc3QgZ2V0RnVsbHNjcmVlbk1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRGdWxsc2NyZWVuTW9kZSk7XHJcblxyXG4vLyNyZWdpb24gdG9vbGJhclxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dFRvb2xiYXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RMYXlvdXRTdGF0ZSwgKHN0YXRlOiBMYXlvdXRTdGF0ZSkgPT4gc3RhdGUudG9vbGJhcik7XHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dFRvb2xiYXIsIGZyb21Ub29sYmFyLmdldFRvb2xiYXJNb2RlKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwge1xyXG5cdHNob3dNYWluU2lkZW5hdj86IGJvb2xlYW47XHJcblx0c2hvd1NlY29uZFNpZGVOYXY/OiBib29sZWFuO1xyXG5cdHNlY29uZFNpZGVOYXZNb2RlPzogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiO1xyXG5cdG1haW5TaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtZW51SXRlbXM/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0cm9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0c2hvd0xlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdHN0aWNreUxlZnROYXZCYXI/OiBib29sZWFuO1xyXG5cdGxheW91dE1vZGU/OiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIjtcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRzaWdub3V0QWN0aW9uPzogQWN0aW9uO1xyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yPzogKFsgcm91dGVzLCB1c2VyIF06IFthbnksIGFueV0pID0+IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvciA9IGZ1bmN0aW9uKFsgcm91dGVzLCB1c2VyIF0pIHtcclxuXHRpZiAoIXVzZXIuUm9sZXMpIHJldHVybiBbXTtcclxuXHRpZiAodXNlci5Sb2xlcy5sZW5ndGggPT0gMCkge1xyXG5cdFx0cmV0dXJuIFtdO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiB1c2VyLlJvbGVzLnNvbWUodXNlclJvbGUgPT4gcm91dGUucm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPiAtMSkpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZSxcclxuXHRzZWNvbmRTaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsIC8vfCBcInB1c2hcIiB8IFwic2lkZVwiLFxyXG5cdHNob3dMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRzdGlja3lMZWZ0TmF2QmFyOiBmYWxzZSxcclxuXHRsYXlvdXRNb2RlOiBcIndpdGgtbWFyZ2luXCIsIC8vIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCIsXHJcblx0dGl0bGU6IFwiXCIsXHJcblx0bWVudUl0ZW1zOiBbXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9cIixcclxuXHRcdFx0aWNvbjogXCJtdWx0aWxpbmVfY2hhcnRcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiLCBcIlVzZXJcIiBdLFxyXG5cdFx0XHR0aXRsZTogXCLDmMK1w5nCgcOYwq3DmcKHIMOYwqfDmMK1w5nChMObwoxcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL2NvbmZpZ3NcIixcclxuXHRcdFx0aWNvbjogXCJzZXR0aW5nc1wiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvc291cmNlXCIsXHJcblx0XHRcdGljb246IFwiZGV2aWNlX2h1YlwiLFxyXG5cdFx0XHRyb2xlczogWyBcIkFkbWluXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCosOYwq/DmMKxw5jCsyDDmMKzw5jCscOZwojDm8KMw5jCsyDDmcKHw5jCp1wiXHJcblx0XHR9XHJcblx0XSxcclxuXHRzaWdub3V0QWN0aW9uOiB7fSBhcyBBY3Rpb24sXHJcblx0bWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3JcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPExheW91dE1vZHVsZUNvbmZpZ01vZGVsPihcIkxheW91dE1vZHVsZUNvbmZpZ01vZGVsXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldENvbmZpZ3MgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHQvLyBwcml2YXRlIF9jb25maWc6IExheW91dENvbmZpZ01vZGVsO1xyXG5cdHByaXZhdGUgX2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dE1vZHVsZUNvbmZpZ01vZGVsPih0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldENvbmZpZ3MpXHJcblx0XHRcdC5tYXAoY29uZmlncyA9PiBjb25maWdzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwibGF5b3V0X2NvbmZpZ1wiKSlcclxuXHRcdFx0LnN1YnNjcmliZShjb25maWcgPT4ge1xyXG5cdFx0XHRcdGlmICghY29uZmlnKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uKGNvbmZpZy5Db25maWcpKTtcclxuXHRcdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1sYXlvdXQtbWFpbi1tZW51XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWxpc3QgY2xhc3M9XCJtYWluLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgPGRpdiAqbmdJZj1cImF1dGhlbnRpY2F0ZWQgfCBhc3luY1wiPlxyXG4gICAgPGEgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm91dGVzJCB8IGFzeW5jXCIgKGNsaWNrKT1cImNsb3NlU2lkZWJhci5lbWl0KClcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgbWF0LWxpc3QtaXRlbSBbcm91dGVyTGlua109XCJbaXRlbS5yb3V0ZV1cIj5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+e3tpdGVtLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDxzcGFuIG1kTGluZT57e2l0ZW0udGl0bGV9fTwvc3Bhbj5cclxuICAgIDwvYT5cclxuICA8L2Rpdj5cclxuPC9tYXQtbGlzdD5gLFxyXG5cdHN0eWxlczogW2AuYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTUpfS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSBtYXQtaWNvbntjb2xvcjojMDA3MmFlfWEubWF0LWxpc3QtaXRlbS5jaGlsZHttYXJnaW4tcmlnaHQ6MjBweH0jY2xlYXJVc2VyTWVudUl0ZW17cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxM3B4O3RvcDoxM3B4fWBdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJjaGlsZE1lbnVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImluYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0Ly8gdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogXCIwXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEuMSknLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUl0ZW1cIiwgW1xyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImluYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQ4cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiYWN0aXZlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW5hY3RpdmUgPT4gYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImFjdGl2ZSA9PiBpbmFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51Q29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgY2xvc2VTaWRlYmFyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIGF1dGhlbnRpY2F0ZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRjdXN0b21lclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0cm91dGVzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuXHRAVmlld0NoaWxkKFwiY3VzdG9tZXJNb2JpbGVJbnB1dFwiKSBjdXN0b21lck1vYmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuX29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ2FwcC1zZWFyY2gtYm94JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWFyY2gtYm94XCI+XHJcbiAgPCEtLTx0ZC1zZWFyY2gtYm94IGNsYXNzPVwic2VhcmNoLWJveC1jb250YWluZXJcIiBiYWNrSWNvbj1cImFycm93X2JhY2tcIiBwbGFjZWhvbGRlcj1cIsOYwqzDmMKzw5jCqsOYwqzDmcKIXCIgW3Nob3dVbmRlcmxpbmVdPVwiZmFsc2VcIiBbZGVib3VuY2VdPVwiNTAwXCIgW2Fsd2F5c1Zpc2libGVdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgIChzZWFyY2hEZWJvdW5jZSk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoc2VhcmNoKT1cInNlYXJjaElucHV0VGVybSA9ICRldmVudFwiIChjbGVhcik9XCJzZWFyY2hJbnB1dFRlcm0gPSAnJ1wiPlxyXG4gIDwvdGQtc2VhcmNoLWJveD4tLT5cclxuPC9kaXY+YCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtbG9nby1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYFxyXG48IS0tPGltZyBjbGFzcz1cImxvZ29UeXBlQW5pbWF0aW9uXCIgc3JjPScuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28tdHlwZS5wbmcnIC8+LS0+YCxcclxuXHRzdHlsZXM6IFtgLnNoYXRlbExvZ29BbmltYXRpb257aGVpZ2h0OjM1cHg7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoyfSNiYWNrZ3JvdW5ke3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7d2lkdGg6MzAwcHg7aGVpZ2h0OjcwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db250YWluZXJDb21wb25lbnQge1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNkZjogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGZyb20gfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21cIjtcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL2Zyb21FdmVudFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBmcm9tTGF5b3V0IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG5cdERvU2lnbm91dEFjdGlvbixcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTaWRlbmF2QWN0aW9uLFxyXG5cdE9wZW5TaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsIGdldExheW91dFRvb2xiYXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhdGUgYXMgdG9vbGJhclN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Rvb2xiYXIucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBtYXAsIGNvbWJpbmVMYXRlc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC10b29sYmFyXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgW0B0b29sYmFyQW5pbWF0aW9uXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZVwiPlxyXG4gIDxtYXQtdG9vbGJhci1yb3c+XHJcbiAgICAgIDwhLS0gPGRpdiBpZD1cImJhY2tncm91bmRcIj48L2Rpdj4gLS0+XHJcbiAgICAgIDxpbWcgW0Bsb2dvQW5pbWF0aW9uXT1cImxvZ29BbmltYXRpb25TdGF0ZVwiIGlkPVwibG9nb1wiIHJvdXRlckxpbms9Jy8nIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaGF0ZWwtbG9nby5wbmcnIC8+XHJcblxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9J3Nob3dTaWRlYmFyTWVudSAmJiBmYWxzZScgKGNsaWNrKT1cInRvZ2dsZU1haW5TaWRlYmFyKClcIiBtYXQtaWNvbi1idXR0b24gZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8c3BhbiBbQHRpdGxlQW5pbWF0aW9uXT1cInRpdGxlQW5pbWF0aW9uU3RhdGVcIiBpZD0nYXBwLW5hbWUnPlxyXG4gICAgICB7e2FwcF9jb25maWc/LkNvbmZpZy5BcHBUaXRsZX19XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8YXBwLXRpdGxlIGZ4RmxleCBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+PC9hcHAtdGl0bGU+XHJcbiAgICA8YXBwLXNlYXJjaC1ib3ggZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCI+PC9hcHAtc2VhcmNoLWJveD5cclxuICAgIFxyXG5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCJhdXRoL3NpZ25pblwiPlxyXG4gICAgICDDmcKIw5jCscOZwojDmMKvXHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJkaXNwbGF5TmFtZVwiIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cInRvb2xiYXJNZW51MVwiPlxyXG4gICAgICA8bWF0LWljb24+YWNjb3VudF9jaXJjbGU8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7e2Rpc3BsYXlOYW1lfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8bWF0LW1lbnUgI3Rvb2xiYXJNZW51MT5cclxuICAgICAgPGJ1dHRvbiByb3V0ZXJMaW5rPScvdXNlci9wYW5lbCcgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZmluZ2VycHJpbnQ8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgw5nChcOYwq/Dm8KMw5jCscObwozDmMKqIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT0nc2lnbm91dCgpJyBtYXQtbWVudS1pdGVtPlxyXG4gICAgICAgIDxtYXQtaWNvbj5leGl0X3RvX2FwcDwvbWF0LWljb24+XHJcbiAgICAgICAgPHNwYW4+w5jCrsOYwrHDmcKIw5jCrDwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVTZWNvbmRTaWRlYmFyKClcIiBmeEZsZXg9XCJub2dyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICA8bWF0LWljb24+bm90aWZpY2F0aW9uczwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9J2dvYmFjaygpJz5cclxuICAgICAgPG1hdC1pY29uPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICBcclxuICA8L21hdC10b29sYmFyLXJvdz5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgPGRpdiBpZD1cInNlY29uZFRvb2xiYXJcIiBbQG1lbnVBbmltYXRpb25dPVwibWVudUFuaW1hdGlvblN0YXRlXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBcclxuICAgICAgKm5nRm9yPVwibGV0IG1lbnUgb2YgbWVudUl0ZW1zJCB8IGFzeW5jXCJcclxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXHJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIlttZW51LnJvdXRlXVwiPlxyXG4gICAgICA8IS0tIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7bWVudS5pY29ufX08L21hdC1pY29uPiAtLT5cclxuICAgICAgPHNwYW4+e3ttZW51LnRpdGxlfX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9tYXQtdG9vbGJhci1yb3c+XHJcbjwvbWF0LXRvb2xiYXI+YCxcclxuXHRzdHlsZXM6IFtgI2xvZ28sI3NlY29uZFRvb2xiYXJ7dHJhbnNpdGlvbjphbGw7cG9zaXRpb246YWJzb2x1dGV9I2FwcC1uYW1le3BhZGRpbmctcmlnaHQ6OHB4fWBdLFxyXG5cdGFuaW1hdGlvbnM6IFtcclxuXHRcdHRyaWdnZXIoXCJsb2dvQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjkwcHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCI5MHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNTBweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUgLSA1MHB4KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIxM3B4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxM3B4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcInN1bW1hcnlcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjc2cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjBcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwXCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiNzZweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJtZW51QW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjUwJVwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjI1cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjQ1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxNHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI3NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjE0cHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gaGlkZVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHQvLyB0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2Utb3V0XCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1pblwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcInRpdGxlQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcImxhcmdlclwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNTAlKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiY2FsYyg1MCUpXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxNnB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZGVyXCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNjBweFwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc5cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiaGlkZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjFweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4NTBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0b29sYmFyQW5pbWF0aW9uXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21mb3J0YWJsZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDExOSwxODEsNjMsMSlcIixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRjb2xvcjogXCJyZ2JhKDMwLDMwLDMwLDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMzN2aFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDApXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEyOHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi02NHB4XCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEyOHB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiLTEyOHB4XCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNZW51Q29tcG9uZW50IHtcclxuXHRzaG93U2Vjb25kU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRASW5wdXQoKSBzaG93U2lkZWJhck1lbnU7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnO1xyXG5cdEBJbnB1dCgpIHVzZXI6IFVzZXJNb2RlbDtcclxuXHRASW5wdXQoKSBkaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHRvb2xiYXJBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bWVudUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRsb2dvQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdHRpdGxlQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVJdGVtcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGxhc3RTY3JvbGw6IG51bWJlcjtcclxuXHRjb25maWc6IHRvb2xiYXJTdGF0ZTtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPHRvb2xiYXJTdGF0ZT47XHJcblx0YW5jaG9yc01vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuXHRcdHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhcik7XHJcblx0XHR0aGlzLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLm1lbnVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMubG9nb0FuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50aXRsZUFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHJcblx0XHRmcm9tRXZlbnQodGhpcy5kb2N1bWVudC5ib2R5LCBcInNjcm9sbFwiKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRsZXQgc2Nyb2xsZWRBbW91bnQgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0XHRsZXQgc2Nyb2xsVG9Ub3AgPVxyXG5cdFx0XHRcdHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMCAmJiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZWRBbW91bnQgPCAzMDA7XHJcblx0XHRcdC8vIGxldCBzY3JvbGxUb1RvcCA9IHNjcm9sbGVkQW1vdW50IC0gdGhpcy5sYXN0U2Nyb2xsIDwgMDtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0aWYgKCF0aGlzLmNvbmZpZy52aXNpYmlsaXR5KSByZXR1cm47XHJcblx0XHRcdGlmIChzY3JvbGxlZEFtb3VudCA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21mb3J0YWJsZVwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbGVkQW1vdW50IDwgMjAwIHx8IHNjcm9sbFRvVG9wKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJjb21wYWN0XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWcubW9kZSA9PSBcInN1bW1hcnlcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb1N1bW1hcnlNb2RlQWN0aW9uKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEBIb3N0TGlzdGVuZXIoXCJib2R5OnNjcm9sbFwiLCBbXSlcclxuXHRvbldpbmRvd1Njcm9sbCgpIHtcclxuXHRcdC8vIG9mKDEpXHJcblx0fVxyXG5cdHNpZ25vdXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEb1NpZ25vdXRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcclxuXHR9XHJcblx0dG9nZ2xlU2Vjb25kU2lkZWJhcigpIHtcclxuXHRcdGxldCBhY3Rpb247XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0dG9nZ2xlTWFpblNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0YWN0aW9uID0gc3RhdGUgPyBuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkgOiBuZXcgT3BlblNpZGVuYXZBY3Rpb24oKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG5cdH1cclxuXHRfb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCkge1xyXG5cdFx0dGhpcy5tZW51SXRlbXMkID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLm1lbnVJdGVtcyksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VyJCksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcilcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9vdGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJmb290ZXItdGV4dFwiPlxyXG4gICAge3thcHBfY29uZmlnPy5Db25maWcuRm9vdGVyQ29weXJpZ2h0fX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U1ZTVlNTtwYWRkaW5nOjhweDtvdmVyZmxvdzpoaWRkZW59LmZvb3Rlci10ZXh0e3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoxMnB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgIHt7dGl0bGUkIHwgYXN5bmN9fVxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjdGl0bGV7bWFyZ2luLXJpZ2h0Oi0zMHB4O2ZvbnQtd2VpZ2h0OmJvbGRlcjtmb250LXNpemU6MTNweDtwYWRkaW5nOjE4cHggNDBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQge1xyXG5cdHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdG1hcHBlcjogeyAodmFsOiBOYXZpZ2F0aW9uRW5kKTogc3RyaW5nIH1bXTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0dGhpcy5tYXBwZXIgPSBbXTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Byb2ZpbGUtZWRpdCcpKSA/ICfDmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwownIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmcK+w5jCscOYwq/DmMKnw5jCrsOYwqogw5nCh8OYwqfDm8KMIMOZwoXDmcKIw5nCgcOZwoInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKuw5jCt8OYwqfDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKow5jCs8OYwqrDmcKHIMOZwoHDmMK5w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ8OYwqzDmMKyw5jCpsObwozDmMKnw5jCqiDDmMKnw5jCqsOYwrXDmMKnw5nChCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdkYWlseS1zZXNzaW9uLXJlcG9ydCcpKSA/ICfDmsKvw5jCssOYwqfDmMKxw5jCtCDDmMKqw5jCrMOZwoXDm8KMw5jCucObwowgw5jCscOZwojDmMKyw5jCp8OZwobDmcKHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOZwoXDmMKnw5nCh8OYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ8OZwoTDm8KMw5jCs8OYwqogw5nCvsOawqnDm8KMw5jCrCDDmcKHw5jCpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ8OYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsScgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0dGhpcy50aXRsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRUaXRsZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuXHRcdFx0XHR2YXIgdGl0bGUgPSBcIlwiO1xyXG5cdFx0XHRcdHRoaXMubWFwcGVyLmZvckVhY2gobWFwcGVyID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXMgPSBtYXBwZXIoZXZlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aXRsZSA9IHJlcztcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFRpdGxlQ2hhbmdlZEFjdGlvbihcIi8gXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN3UHVzaCB9IGZyb20gXCJAYW5ndWxhci9zZXJ2aWNlLXdvcmtlclwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTaWRlbmF2LCBNYXRTaWRlbmF2Q29udGFpbmVyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0RmVhdHVyZVN0YXRlLFxyXG5cdGdldFNob3dNYWluU2lkZW5hdixcclxuXHRnZXRNYWluU2lkZU5hdk1vZGUsXHJcblx0Z2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMsXHJcblx0Z2V0U2Vjb25kU2lkZWJhck1vZGUsXHJcblx0Z2V0TGF5b3V0TW9kZSxcclxuXHRnZXRMYXlvdXRUb29sYmFyTW9kZSxcclxuXHRnZXRGdWxsc2NyZWVuTW9kZVxyXG59IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENoYW5nZVNlY29uZFNpZGVuYXZNb2RlLFxyXG5cdE9wZW5TZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTaWRlTmF2TW9kZSxcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VMYXlvdXRcclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSwgc3R5bGUgfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGF5b3V0LW1haW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI21haW5TaWRlTmF2IFtuZ0NsYXNzXT1cInRvb2xiYXJBbmltYXRpb25TdGF0ZSB8IGFzeW5jXCIgW2NsYXNzLmZ1bGxzY3JlZW5dPVwiaXNGdWxsc2NyZWVuJCB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8bWF0LXByb2dyZXNzLWJhciAqbmdJZj0ncHJvZ3Jlc3NTdGF0dXMkIHwgYXN5bmMnIGNvbG9yPVwicHJpbWFyeVwiIG1vZGU9XCJxdWVyeVwiPjwvbWF0LXByb2dyZXNzLWJhcj4gLS0+XHJcbiAgPGxheW91dC10b29sYmFyIFt1c2VyXT1cInVzZXIkIHwgYXN5bmNcIiBbZGlzcGxheU5hbWVdPVwiZGlzcGxheU5hbWUkIHwgYXN5bmNcIiBbc2hvd1NpZGViYXJNZW51XT0nc2hvd1NpZGViYXJNZW51IHwgYXN5bmMnIFthcHAtY29uZmlnXT1cImFwcF9jb25maWdcIj48L2xheW91dC10b29sYmFyPlxyXG4gIFxyXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgaWQ9XCJsYXlvdXQtc2lkbmF2XCIgW2NsYXNzTmFtZV09XCJsYXlvdXRNb2RlIHwgYXN5bmNcIj5cclxuICAgIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJtYWluU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93TWFpblNpZGVuYXYgfCBhc3luYycgI3NpZGViYXIgKGNsb3NlZFN0YXJ0KT1cIm9uU2lkZWJhckNsb3NlZFN0YXJ0KClcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdD5cclxuICAgICAgICA8bmdzLWxheW91dC1tYWluLW1lbnUgW2F1dGhlbnRpY2F0ZWRdPSdzaG93U2lkZWJhck1lbnUnIChjbG9zZVNpZGViYXIpPVwic2lkZWJhci5jbG9zZSgpXCIgKGNsaWNrKT1cIm9uU2Vjb25kU2lkZWJhckNsb3NlZFN0YXJ0KClcIj48L25ncy1sYXlvdXQtbWFpbi1tZW51PlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+XHJcbiAgICA8IS0tIDxtYXQtc2lkZW5hdiBbbW9kZV09XCJzZWNvbmRTaWRlbmF2TW9kZSB8IGFzeW5jXCIgW29wZW5lZF09J3Nob3dTZWNvbmRTaWRlbmF2IHwgYXN5bmMnIChjbG9zZWRTdGFydCk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCJcclxuICAgICAgcG9zaXRpb249XCJlbmRcIiAjc2Vjb25kX3NpZGViYXIgY2xhc3M9XCJzZWNvbmRfc2lkZWJhclwiPlxyXG4gICAgICA8bWF0LW5hdi1saXN0IGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgICA8L21hdC1uYXYtbGlzdD5cclxuICAgIDwvbWF0LXNpZGVuYXY+IC0tPlxyXG4gICAgPGRpdiBmeEZsZXhMYXlvdXQ9J2NvbHVtbicgaWQ9XCJhcHAtbWFpbi1jb250YWluZXJcIiBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgPGRpdiBmeEZsZXg9JzAgMCAxMDAnPlxyXG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8Zm9vdGVyIFtAbW9kZV09XCJtb2RlJCB8IGFzeW5jXCI+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0FcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldCBuYW1lPVwiZm9vdGVyX0JcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgICA8YXBwLWZvb3RlciBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9hcHAtZm9vdGVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjcHVyY2hhc2UtZmFiLWJ1dHRvbntwb3NpdGlvbjpmaXhlZDtib3R0b206MjNweDtsZWZ0OjMxcHh9bWQtcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0ud2l0aC1tYXJnaW4gI2FwcC1tYWluLWNvbnRhaW5lcnttYXJnaW4tdG9wOjI1cHg7cGFkZGluZy1yaWdodDoyNXB4O3BhZGRpbmctbGVmdDoyNXB4fS5zZWNvbmRfc2lkZWJhcnt3aWR0aDozODBweH0ubW9yZS1kZXRhaWx7bWFyZ2luOjhweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzoxMHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjk2JTtib3JkZXI6MXB4IHNvbGlkICNkZWRlZGU7b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC4zcyBlYXNlfS5tb3JlLWRldGFpbDpob3ZlcntiYWNrZ3JvdW5kOiNlZWV9Zm9vdGVye2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7bWFyZ2luLXRvcDoyNXB4O2JhY2tncm91bmQtY29sb3I6I2YxZjFmMX1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibW9kZVwiLCBbXHJcblx0XHRcdHN0YXRlKFwidmlzaWJsZVwiLCBzdHlsZSh7IHRyYW5zZm9ybTogXCJzY2FsZVkoMSkgdHJhbnNsYXRlWSgwKVwiIH0pKSxcclxuXHRcdFx0c3RhdGUoXCJpbnZpc2libGVcIiwgc3R5bGUoeyBoZWlnaHQ6IFwiMFwiLCB0cmFuc2Zvcm06IFwic2NhbGVZKDApIHRyYW5zbGF0ZVkoMTAwJSlcIiB9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJ2aXNpYmxlID0+IGludmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbnZpc2libGUgPT4gdmlzaWJsZVwiLCBbIGFuaW1hdGUoXCIxMDAwbXNcIikgXSlcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XHJcblx0QElucHV0KFwiYXBwLWNvbmZpZ1wiKSBhcHBfY29uZmlnOiBDb25maWdNb2RlbDxhbnk+O1xyXG5cdG1vZGUkOiBPYnNlcnZhYmxlPFwidmlzaWJsZVwiIHwgXCJpbnZpc2libGVcIj47XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkaXNwbGF5TmFtZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRpc0Z1bGxzY3JlZW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHByb2dyZXNzU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRzaG93U2lkZWJhck1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xyXG5cdC8vdXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRzaG93TWFpblNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0bWFpblNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0bGF5b3V0TW9kZTogT2JzZXJ2YWJsZTxcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIj47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2Vjb25kU2lkZW5hdk1vZGU6IE9ic2VydmFibGU8XCJzaWRlXCIgfCBcIm92ZXJcIiB8IFwicHVzaFwiPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAVmlld0NoaWxkKFwibWFpblNpZGVOYXZcIikgbWFpblNpZGVOYXY6IEVsZW1lbnRSZWY7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNpZGVOYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QocyA9PiAocyBhcyBhbnkpLnVzZXIudXNlci5kYXRhKTtcclxuXHRcdHRoaXMuZGlzcGxheU5hbWUkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpO1xyXG5cdFx0dGhpcy5zaG93TWFpblNpZGVuYXYgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5tYWluU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRNYWluU2lkZU5hdk1vZGUpO1xyXG5cdFx0dGhpcy50b29sYmFyQW5pbWF0aW9uU3RhdGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRUb29sYmFyTW9kZSk7XHJcblxyXG5cdFx0dGhpcy5pc0Z1bGxzY3JlZW4kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cdFx0dGhpcy5tb2RlJCA9IHRoaXMuaXNGdWxsc2NyZWVuJC5tYXAobW9kZSA9PiAobW9kZSA/IFwiaW52aXNpYmxlXCIgOiBcInZpc2libGVcIikpO1xyXG5cclxuXHRcdC8vI3JlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVNlY29uZFNpZGVuYXZNb2RlKFwicHVzaFwiKSk7XHJcblx0XHR0aGlzLnNob3dTZWNvbmRTaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMpO1xyXG5cdFx0dGhpcy5zZWNvbmRTaWRlbmF2TW9kZSA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuXHRcdC8vI2VuZHJlZ2lvbiBtYW5hZ2Ugc2Vjb25kIHNpZGViYXJcclxuXHJcblx0XHR0aGlzLmxheW91dE1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRMYXlvdXRNb2RlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuZmlsdGVyKGRhdGEgPT4gZGF0YSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdHZhciBoaWRlU2l0dWF0aW9ucyA9IFtcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWduaW5cIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvcmVnaXN0ZXJcIixcclxuXHRcdFx0XHQoZXZlbnQgYXMgTmF2aWdhdGlvbkVuZCkudXJsQWZ0ZXJSZWRpcmVjdHMgPT0gXCIvYXV0aC9zaWdudXAvdmVyaWZpY2F0aW9uXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIlxyXG5cdFx0XHRdO1xyXG5cdFx0XHRpZiAoaGlkZVNpdHVhdGlvbnMuc29tZShpID0+IGkpKSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KGZhbHNlKTtcclxuXHRcdFx0ZWxzZSB0aGlzLnNob3dTaWRlYmFyTWVudS5uZXh0KHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0Ly8gXHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VMYXlvdXQoXCJ3aXRoLW1hcmdpblwiKSk7XHJcblx0Ly8gfVxyXG5cclxuXHRvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdG9uU2lkZWJhckNsb3NlZFN0YXJ0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2xvc2VTaWRlbmF2QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IERvU2lnbm91dEFjdGlvbiB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdExheW91dEFjdGlvblR5cGVzLFxyXG5cdEludmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0VmlzaWJsZVRvb2xiYXJBY3Rpb24sXHJcblx0RXhpdEZ1bGxzY3JlZW5BY3Rpb24sXHJcblx0RnVsbHNjcmVlbkFjdGlvblxyXG59IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRGdWxsc2NyZWVuTW9kZSB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRARWZmZWN0KCkgRG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBEb1NpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU4pLnBpcGUobWFwKCgpID0+IG5ldyBJbnZpc2libGVUb29sYmFyQWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZXhpdF9mdWxsc2NyZWVuJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBWaXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGZ1bGxzY3Jlbl90b29sYmFyJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOKS5waXBlKFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnVsbHNjcmVlbk1vZGUpKSxcclxuXHRcdG1hcCgoWyBhY3Rpb24sIHRvb2xiYXJNb2RlIF0pID0+IHtcclxuXHRcdFx0aWYgKHRvb2xiYXJNb2RlKSByZXR1cm4gbmV3IEV4aXRGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHRcdGVsc2UgcmV0dXJuIG5ldyBGdWxsc2NyZWVuQWN0aW9uKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgTmdzQ29uZmlnTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuL2xheW91dC5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9nb0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sb2dvLWNvbnRhaW5lci9sb2dvLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG9vbGJhck1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvdG9vbGJhci1tZW51L3Rvb2xiYXItbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0RWZmZWN0cyB9IGZyb20gXCIuL2xheW91dC5lZmZlY3RzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmdzQ29uZmlnTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1haW5NZW51Q29tcG9uZW50LFxyXG5cdFx0U2VhcmNoQm94Q29tcG9uZW50LFxyXG5cdFx0TG9nb0NvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFRvb2xiYXJNZW51Q29tcG9uZW50LFxyXG5cdFx0Rm9vdGVyQ29tcG9uZW50LFxyXG5cdFx0VGl0bGVDb21wb25lbnQsXHJcblx0XHRNYWluQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0xheW91dE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzTGF5b3V0TW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImxheW91dFwiLCBMYXlvdXRSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMYXlvdXRFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0xheW91dE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzTGF5b3V0TW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMiLCJsYXlvdXQuQ0xPU0VfU0lERU5BViIsImxheW91dC5PUEVOX1NJREVOQVYiLCJpbml0aWFsU3RhdGUiLCJsYXlvdXQuUmVkdWNlciIsImZyb21Ub29sYmFyLlJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldFRpdGxlIiwibGF5b3V0LmdldFRpdGxlIiwiZ2V0U2hvd01haW5TaWRlbmF2IiwibGF5b3V0LmdldFNob3dNYWluU2lkZW5hdiIsImdldE1haW5TaWRlTmF2TW9kZSIsImxheW91dC5nZXRNYWluU2lkZU5hdk1vZGUiLCJnZXRMYXlvdXRNb2RlIiwibGF5b3V0LmdldExheW91dE1vZGUiLCJnZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyIsImdldFNlY29uZFNpZGViYXJNb2RlIiwibGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlIiwiZ2V0RnVsbHNjcmVlbk1vZGUiLCJsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUiLCJmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSIsInVzZXIiLCJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsImdldENvbmZpZ3MiLCJjb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJFdmVudEVtaXR0ZXIiLCJnZXRBY2NvdW50SW5mbyIsIm1hcCIsImNvbWJpbmVMYXRlc3QiLCJDb21wb25lbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiU2lnbmluU2VydmljZSIsIk91dHB1dCIsIklucHV0IiwiVmlld0NoaWxkIiwiZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJmcm9tTGF5b3V0LmdldExheW91dFRvb2xiYXJNb2RlIiwiZnJvbUV2ZW50IiwiRE9DVU1FTlQiLCJMb2NhdGlvbiIsIkhvc3RMaXN0ZW5lciIsInJvdXRlciIsIk5hdmlnYXRpb25FbmQiLCJSb3V0ZXIiLCJVc2VyRmFjYWRlU2VydmljZSIsIkRvU2lnbm91dEFjdGlvbiIsIndpdGhMYXRlc3RGcm9tIiwiQWN0aW9ucyIsIkVmZmVjdCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQnJvd3Nlck1vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdExpc3RNb2R1bGUiLCJNYXRNZW51TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJOZ3NDb25maWdNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBWU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQTtBQUVELHdCQVUyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFL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
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWxheW91dC51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2FjdGlvbnMvbGF5b3V0LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvcmVkdWNlcnMvbGF5b3V0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9hY3Rpb25zL3Rvb2xiYXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2xheW91dC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9sYXlvdXQvbGliL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2xheW91dC9saWIvbGF5b3V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvbGF5b3V0L2xpYi9sYXlvdXQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xheW91dC5jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPUEVOX1NJREVOQVYgPSBcIltMYXlvdXRdIE9wZW4gU2lkZW5hdlwiO1xyXG5leHBvcnQgY29uc3QgQ0xPU0VfU0lERU5BViA9IFwiW0xheW91dF0gQ2xvc2UgU2lkZW5hdlwiO1xyXG5cclxuZXhwb3J0IGVudW0gTGF5b3V0QWN0aW9uVHlwZXMge1xyXG5cdFVQREFURV9MQVlPVVRfQ09ORklHID0gXCJbTGF5b3V0XSBVUERBVEVfTEFZT1VUX0NPTkZJR1wiLFxyXG5cdERPX1NJR05PVVQgPSBcIltMYXlvdXRdIGRvIHNpZ25vdXRcIixcclxuXHRUSVRMRV9DSEFOR0VEID0gXCJbTEFZT1VUXSBUSVRMRV9DSEFOR0VEXCIsXHJcblx0Q0hBTkdFX0xBWU9VVCA9IFwiW0xheW91dF0gQ2hhbmdlIExheW91dFwiLFxyXG5cdENIQU5HRV9NQUlOX1NJREVOQVZFX01PREUgPSBcIltMYXlvdXRdIENoYW5nZSBtYWluIHNpZGVuYXYgbW9kZVwiLFxyXG5cdE9QRU5fU0VDT05EX1NJREVCQVIgPSBcIltMYXlvdXRdIE9wZW4gU2Vjb25kIFNpZGViYXJcIixcclxuXHRDTE9TRV9TRUNPTkRfU0lERUJBUiA9IFwiW0xheW91dF0gQ2xvc2UgU2Vjb25kIFNpZGViYXJcIixcclxuXHRDSEFOR0VfU0VDT05EX1NJREVOQVZfTU9ERSA9IFwiW0xheW91dF0gQ2hhbmdlIHNlY29uZCBzaWRlbmF2IG1vZGVcIixcclxuXHRGVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBGVUxMU0NSRUVOXCIsXHJcblx0RVhJVF9GVUxMU0NSRUVOID0gXCJbTGF5b3V0XSBFWElUX0ZVTExTQ1JFRU5cIixcclxuXHRUT0dHTEVfRlVMTFNDUkVFTiA9IFwiW0xheW91dF0gVE9HR0xFX0ZVTExTQ1JFRU5cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBkYXRlTGF5b3V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVVBEQVRFX0xBWU9VVF9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8TGF5b3V0TW9kdWxlQ29uZmlnTW9kZWw+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IE9QRU5fU0lERU5BVjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3NlU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENMT1NFX1NJREVOQVY7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VMYXlvdXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBcIndpdGgtbWFyZ2luXCIgfCBcIndpdGhvdXQtbWFyZ2luXCIgfCBcImRlZmF1bHRcIikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVNpZGVOYXZNb2RlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbW9kZTogXCJvdmVyXCIgfCBcInB1c2hcIiB8IFwic2lkZVwiKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkNIQU5HRV9TRUNPTkRfU0lERU5BVl9NT0RFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RlOiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCIpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5USVRMRV9DSEFOR0VEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLk9QRU5fU0VDT05EX1NJREVCQVI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBMYXlvdXRBY3Rpb25UeXBlcy5DTE9TRV9TRUNPTkRfU0lERUJBUjtcclxufVxyXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IExheW91dEFjdGlvblR5cGVzLkZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEV4aXRGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuRVhJVF9GVUxMU0NSRUVOO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVGdWxsc2NyZWVuQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU47XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9XHJcblx0fCBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb25cclxuXHR8IE9wZW5TaWRlbmF2QWN0aW9uXHJcblx0fCBDbG9zZVNpZGVuYXZBY3Rpb25cclxuXHR8IENoYW5nZVNpZGVOYXZNb2RlXHJcblx0fCBDaGFuZ2VMYXlvdXRcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgVGl0bGVDaGFuZ2VkQWN0aW9uXHJcblx0fCBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvblxyXG5cdHwgQ2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uXHJcblx0fCBGdWxsc2NyZWVuQWN0aW9uXHJcblx0fCBFeGl0RnVsbHNjcmVlbkFjdGlvblxyXG5cdHwgQ2hhbmdlU2Vjb25kU2lkZW5hdk1vZGVcclxuXHR8IFRvZ2dsZUZ1bGxzY3JlZW5BY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGxheW91dCBmcm9tIFwiLi4vYWN0aW9ucy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbjogQWN0aW9uO1xyXG5cdGZ1bGxzY3JlZW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c2hvd01haW5TaWRlbmF2OiBmYWxzZSxcclxuXHRzaG93U2Vjb25kU2lkZU5hdjogZmFsc2UsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLFxyXG5cdG1haW5TaWRlTmF2TW9kZTogXCJvdmVyXCIsXHJcblx0c2hvd0xlZnROYXZCYXI6IGZhbHNlLFxyXG5cdHN0aWNreUxlZnROYXZCYXI6IGZhbHNlLFxyXG5cdGxheW91dE1vZGU6IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW10sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdGZ1bGxzY3JlZW46IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBsYXlvdXQuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5VUERBVEVfTEFZT1VUX0NPTkZJRzpcclxuXHRcdFx0Y29uc3QgX3N0YXRlID0ge307XHJcblx0XHRcdE9iamVjdC5rZXlzKGFjdGlvbi5wYXlsb2FkKS5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHRcdGlmIChrIGluIHN0YXRlKSBfc3RhdGVba10gPSBhY3Rpb24ucGF5bG9hZFtrXTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0Li4uX3N0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5DTE9TRV9TSURFTkFWOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHNob3dNYWluU2lkZW5hdjogZmFsc2VcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIGxheW91dC5PUEVOX1NJREVOQVY6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd01haW5TaWRlbmF2OiB0cnVlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVElUTEVfQ0hBTkdFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnRpdGxlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5DSEFOR0VfTEFZT1VUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxheW91dE1vZGU6IGFjdGlvbi5uYW1lXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX01BSU5fU0lERU5BVkVfTU9ERTpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtYWluU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0xPU0VfU0VDT05EX1NJREVCQVI6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2hvd1NlY29uZFNpZGVOYXY6IGZhbHNlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuT1BFTl9TRUNPTkRfU0lERUJBUjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzaG93U2Vjb25kU2lkZU5hdjogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuQ0hBTkdFX1NFQ09ORF9TSURFTkFWX01PREU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c2Vjb25kU2lkZU5hdk1vZGU6IGFjdGlvbi5tb2RlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGxheW91dC5MYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgbGF5b3V0LkxheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTjpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0Ly8gY2FzZSBsYXlvdXQuTGF5b3V0QWN0aW9uVHlwZXMuVE9HR0xFX0ZVTExTQ1JFRU46XHJcblx0XHQvLyBcdHJldHVybiB7XHJcblx0XHQvLyBcdFx0Li4uc3RhdGUsXHJcblx0XHQvLyBcdFx0ZnVsbHNjcmVlbjogc3RhdGUuZnVsbHNjcmVlbiA9PT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dTaWRlbmF2ID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2hvd01haW5TaWRlbmF2O1xyXG5leHBvcnQgY29uc3QgZ2V0VGl0bGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS50aXRsZTtcclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNob3dNYWluU2lkZW5hdjtcclxuZXhwb3J0IGNvbnN0IGdldE1haW5TaWRlTmF2TW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm1haW5TaWRlTmF2TW9kZTtcclxuZXhwb3J0IGNvbnN0IGdldExheW91dE1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zaG93U2Vjb25kU2lkZU5hdjtcclxuZXhwb3J0IGNvbnN0IGdldFNlY29uZFNpZGViYXJNb2RlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc2Vjb25kU2lkZU5hdk1vZGU7XHJcbmV4cG9ydCBjb25zdCBnZXRGdWxsc2NyZWVuTW9kZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmZ1bGxzY3JlZW47XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gVG9vbGJhckFjdGlvblR5cGVzIHtcclxuXHRDT01QT1JUQUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gQ09NUE9SVEFCTEVcIixcclxuXHRDT01QQUNUID0gXCJbTGF5b3V0XVtUT09MQkFSXSBDT01QQUNUXCIsXHJcblx0U1VNTUFSWSA9IFwiW0xheW91dF1bVE9PTEJBUl0gU1VNTUFSWVwiLFxyXG5cdEVOQUJMRV9DT01GT1JUQUJMRV9NT0RFID0gXCJbTGF5b3V0XVtUT09MQkFSXSBFTkFCTEVfQ09NRk9SVEFCTEVfTU9ERVwiLFxyXG5cdERJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERSA9IFwiW0xheW91dF1bVE9PTEJBUl0gRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFXCIsXHJcblx0VklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gVklTSUJMRVwiLFxyXG5cdElOVklTSUJMRSA9IFwiW0xheW91dF1bVE9PTEJBUl0gSU5WSVNJQkxFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5DT01QT1JUQUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuU1VNTUFSWTtcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29tZm9ydGFibGVNb2RlQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVG9vbGJhckFjdGlvblR5cGVzLkRJU0JBTEVfQ09NRk9SVEFCTEVfTU9ERTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmlzaWJsZVRvb2xiYXJBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUb29sYmFyQWN0aW9uVHlwZXMuVklTSUJMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlVG9vbGJhckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRvb2xiYXJBY3Rpb25UeXBlcy5JTlZJU0lCTEU7XHJcbn1cclxuZXhwb3J0IHR5cGUgVG9vbGJhckFjdGlvbnMgPVxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uXHJcblx0fCBDaGFuZ2VUb29sYmF0VG9Db21wYWN0TW9kZUFjdGlvblxyXG5cdHwgQ2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxuXHR8IEVuYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgRGlzYWJsZUNvbWZvcnRhYmxlTW9kZUFjdGlvblxyXG5cdHwgVmlzaWJsZVRvb2xiYXJBY3Rpb25cclxuXHR8IEludmlzaWJsZVRvb2xiYXJBY3Rpb247XHJcbiIsImltcG9ydCB7IFRvb2xiYXJBY3Rpb25UeXBlcywgVG9vbGJhckFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bW9kZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiO1xyXG5cdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogYm9vbGVhbjtcclxuXHRjb21mb3J0YWJsZU1vZGVIYXZlQmVlbkRvbmU6IGJvb2xlYW47XHJcblx0dmlzaWJpbGl0eTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRtb2RlOiBcImNvbXBhY3RcIixcclxuXHRlbmFibGVDb21mb3J0YWJsZU1vZGU6IGZhbHNlLFxyXG5cdGNvbWZvcnRhYmxlTW9kZUhhdmVCZWVuRG9uZTogZmFsc2UsXHJcblx0dmlzaWJpbGl0eTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVG9vbGJhckFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUEFDVDpcclxuXHRcdFx0aWYgKCFzdGF0ZS52aXNpYmlsaXR5KVxyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRcdG1vZGU6IFwiaGlkZVwiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRtb2RlOiBcImNvbXBhY3RcIlxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuQ09NUE9SVEFCTEU6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogc3RhdGUuZW5hYmxlQ29tZm9ydGFibGVNb2RlID8gXCJjb21mb3J0YWJsZVwiIDogXCJjb21wYWN0XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlNVTU1BUlk6XHJcblx0XHRcdGlmICghc3RhdGUudmlzaWJpbGl0eSlcclxuXHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0XHRtb2RlOiBcImhpZGVcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJzdW1tYXJ5XCJcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLkVOQUJMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuRElTQkFMRV9DT01GT1JUQUJMRV9NT0RFOlxyXG5cdFx0XHRpZiAoIXN0YXRlLnZpc2liaWxpdHkpXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdFx0bW9kZTogXCJoaWRlXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdGVuYWJsZUNvbWZvcnRhYmxlTW9kZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgVG9vbGJhckFjdGlvblR5cGVzLlZJU0lCTEU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bW9kZTogXCJjb21wYWN0XCIsXHJcblx0XHRcdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBUb29sYmFyQWN0aW9uVHlwZXMuSU5WSVNJQkxFOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG1vZGU6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdHZpc2liaWxpdHk6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9vbGJhck1vZGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5tb2RlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBsYXlvdXQgZnJvbSBcIi4vbGF5b3V0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbVRvb2xiYXIgZnJvbSBcIi4vdG9vbGJhci5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN0YXRlIHtcclxuXHRsYXlvdXQ6IGxheW91dC5TdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExheW91dFJlZHVjZXJzID0ge1xyXG5cdGxheW91dDogbGF5b3V0LlJlZHVjZXIsXHJcblx0dG9vbGJhcjogZnJvbVRvb2xiYXIuUmVkdWNlclxyXG59O1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0bGF5b3V0OiBMYXlvdXRTdGF0ZTtcclxuXHR0b29sYmFyOiBmcm9tVG9vbGJhci5TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdExheW91dFN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPExheW91dFN0YXRlPihcImxheW91dFwiKTtcclxuXHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldExheW91dCA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdExheW91dFN0YXRlLCAoc3RhdGU6IExheW91dFN0YXRlKSA9PiBzdGF0ZS5sYXlvdXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRpdGxlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0VGl0bGUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNob3dNYWluU2lkZW5hdiA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNob3dNYWluU2lkZW5hdik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWFpblNpZGVOYXZNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRNb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXQsIGxheW91dC5nZXRTaG93U2Vjb25kU2lkZWJhclN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWNvbmRTaWRlYmFyTW9kZSA9IGNyZWF0ZVNlbGVjdG9yKGdldExheW91dCwgbGF5b3V0LmdldFNlY29uZFNpZGViYXJNb2RlKTtcclxuZXhwb3J0IGNvbnN0IGdldEZ1bGxzY3JlZW5Nb2RlID0gY3JlYXRlU2VsZWN0b3IoZ2V0TGF5b3V0LCBsYXlvdXQuZ2V0RnVsbHNjcmVlbk1vZGUpO1xyXG5cclxuLy8jcmVnaW9uIHRvb2xiYXJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMYXlvdXRUb29sYmFyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TGF5b3V0U3RhdGUsIChzdGF0ZTogTGF5b3V0U3RhdGUpID0+IHN0YXRlLnRvb2xiYXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0TGF5b3V0VG9vbGJhck1vZGUgPSBjcmVhdGVTZWxlY3RvcihnZXRMYXlvdXRUb29sYmFyLCBmcm9tVG9vbGJhci5nZXRUb29sYmFyTW9kZSk7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dE1vZHVsZUNvbmZpZ01vZGVsIHtcclxuXHRzaG93TWFpblNpZGVuYXY/OiBib29sZWFuO1xyXG5cdHNob3dTZWNvbmRTaWRlTmF2PzogYm9vbGVhbjtcclxuXHRzZWNvbmRTaWRlTmF2TW9kZT86IFwib3ZlclwiIHwgXCJwdXNoXCIgfCBcInNpZGVcIjtcclxuXHRtYWluU2lkZU5hdk1vZGU/OiBcIm92ZXJcIiB8IFwicHVzaFwiIHwgXCJzaWRlXCI7XHJcblx0bWVudUl0ZW1zPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHNob3dMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRzdGlja3lMZWZ0TmF2QmFyPzogYm9vbGVhbjtcclxuXHRsYXlvdXRNb2RlPzogXCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI7XHJcblx0dGl0bGU/OiBzdHJpbmc7XHJcblx0c2lnbm91dEFjdGlvbj86IEFjdGlvbjtcclxuXHRtZW51X2l0ZW1fYXV0aG9yaXphdGlvbl9vcGVyYXRvcj86IChbIHJvdXRlcywgdXNlciBdOiBbYW55LCBhbnldKSA9PiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgbWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IgPSBmdW5jdGlvbihbIHJvdXRlcywgdXNlciBdKSB7XHJcblx0aWYgKCF1c2VyLlJvbGVzKSByZXR1cm4gW107XHJcblx0aWYgKHVzZXIuUm9sZXMubGVuZ3RoID09IDApIHtcclxuXHRcdHJldHVybiBbXTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHJvdXRlcy5maWx0ZXIocm91dGUgPT4gdXNlci5Sb2xlcy5zb21lKHVzZXJSb2xlID0+IHJvdXRlLnJvbGVzLmluZGV4T2YodXNlclJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsID0ge1xyXG5cdHNob3dNYWluU2lkZW5hdjogZmFsc2UsXHJcblx0c2hvd1NlY29uZFNpZGVOYXY6IHRydWUsXHJcblx0c2Vjb25kU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRtYWluU2lkZU5hdk1vZGU6IFwib3ZlclwiLCAvL3wgXCJwdXNoXCIgfCBcInNpZGVcIixcclxuXHRzaG93TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0c3RpY2t5TGVmdE5hdkJhcjogZmFsc2UsXHJcblx0bGF5b3V0TW9kZTogXCJ3aXRoLW1hcmdpblwiLCAvLyB8IFwid2l0aG91dC1tYXJnaW5cIiB8IFwiZGVmYXVsdFwiLFxyXG5cdHRpdGxlOiBcIlwiLFxyXG5cdG1lbnVJdGVtczogW1xyXG5cdFx0e1xyXG5cdFx0XHRyb3V0ZTogXCIvXCIsXHJcblx0XHRcdGljb246IFwibXVsdGlsaW5lX2NoYXJ0XCIsXHJcblx0XHRcdHJvbGVzOiBbIFwiQWRtaW5cIiwgXCJVc2VyXCIgXSxcclxuXHRcdFx0dGl0bGU6IFwiw5jCtcOZwoHDmMKtw5nChyDDmMKnw5jCtcOZwoTDm8KMXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHJvdXRlOiBcIi9jb25maWdzXCIsXHJcblx0XHRcdGljb246IFwic2V0dGluZ3NcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqpcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cm91dGU6IFwiL3NvdXJjZVwiLFxyXG5cdFx0XHRpY29uOiBcImRldmljZV9odWJcIixcclxuXHRcdFx0cm9sZXM6IFsgXCJBZG1pblwiIF0sXHJcblx0XHRcdHRpdGxlOiBcIsOYwqLDmMKvw5jCscOYwrMgw5jCs8OYwrHDmcKIw5vCjMOYwrMgw5nCh8OYwqdcIlxyXG5cdFx0fVxyXG5cdF0sXHJcblx0c2lnbm91dEFjdGlvbjoge30gYXMgQWN0aW9uLFxyXG5cdG1lbnVfaXRlbV9hdXRob3JpemF0aW9uX29wZXJhdG9yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4oXCJMYXlvdXRNb2R1bGVDb25maWdNb2RlbFwiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRDb25maWdzIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVMYXlvdXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdNb2RlbCB9IGZyb20gXCIuLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0Ly8gcHJpdmF0ZSBfY29uZmlnOiBMYXlvdXRDb25maWdNb2RlbDtcclxuXHRwcml2YXRlIF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ01vZGVsO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXRNb2R1bGVDb25maWdNb2RlbD4odGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRDb25maWdzKVxyXG5cdFx0XHQubWFwKGNvbmZpZ3MgPT4gY29uZmlncy5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImxheW91dF9jb25maWdcIikpXHJcblx0XHRcdC5zdWJzY3JpYmUoY29uZmlnID0+IHtcclxuXHRcdFx0XHRpZiAoIWNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUxheW91dENvbmZpZ0FjdGlvbihjb25maWcuQ29uZmlnKSk7XHJcblx0XHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWcuQ29uZmlnKTtcclxuXHRcdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xheW91dC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtbGF5b3V0LW1haW4tbWVudVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1saXN0IGNsYXNzPVwibWFpbi1tZW51LWNvbnRhaW5lclwiPlxyXG4gIDxkaXYgKm5nSWY9XCJhdXRoZW50aWNhdGVkIHwgYXN5bmNcIj5cclxuICAgIDxhICpuZ0Zvcj1cImxldCBpdGVtIG9mIHJvdXRlcyQgfCBhc3luY1wiIChjbGljayk9XCJjbG9zZVNpZGViYXIuZW1pdCgpXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIG1hdC1saXN0LWl0ZW0gW3JvdXRlckxpbmtdPVwiW2l0ZW0ucm91dGVdXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPnt7aXRlbS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8c3BhbiBtZExpbmU+e3tpdGVtLnRpdGxlfX08L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWxpc3Q+YCxcclxuXHRzdHlsZXM6IFtgLmFjdGl2ZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjE1KX0ubWF0LWxpc3QtaXRlbS5hY3RpdmUgbWF0LWljb257Y29sb3I6IzAwNzJhZX1hLm1hdC1saXN0LWl0ZW0uY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9I2NsZWFyVXNlck1lbnVJdGVte3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTNweDt0b3A6MTNweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwiY2hpbGRNZW51XCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIwcHhcIixcclxuXHRcdFx0XHRcdG9wYWNpdHk6IFwiMFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJhY3RpdmVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyB0cmFuc2Zvcm06ICdzY2FsZSgxLjEpJyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCIsXHJcblx0XHRcdFx0XHRvcGFjaXR5OiBcIjFcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJpbmFjdGl2ZSA9PiBhY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiYWN0aXZlID0+IGluYWN0aXZlXCIsIGFuaW1hdGUoXCIxMDBtcyBlYXNlLW91dFwiKSlcclxuXHRcdF0pLFxyXG5cdFx0dHJpZ2dlcihcIm1lbnVJdGVtXCIsIFtcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJpbmFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0OHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImFjdGl2ZVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMDBweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImluYWN0aXZlID0+IGFjdGl2ZVwiLCBhbmltYXRlKFwiMTAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJhY3RpdmUgPT4gaW5hY3RpdmVcIiwgYW5pbWF0ZShcIjEwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIGNsb3NlU2lkZWJhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBhdXRoZW50aWNhdGVkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Y3VzdG9tZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdHJvdXRlcyQ6IE9ic2VydmFibGU8YW55PjtcclxuXHJcblx0QFZpZXdDaGlsZChcImN1c3RvbWVyTW9iaWxlSW5wdXRcIikgY3VzdG9tZXJNb2JpbGVJbnB1dDogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLl9vYnNlcnZlX29uX2xheW91dF9jb25maWdfYW5kX2ZpbHRlcl9yb3V0ZXMoKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMucm91dGVzJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoLWJveCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VhcmNoLWJveFwiPlxyXG4gIDwhLS08dGQtc2VhcmNoLWJveCBjbGFzcz1cInNlYXJjaC1ib3gtY29udGFpbmVyXCIgYmFja0ljb249XCJhcnJvd19iYWNrXCIgcGxhY2Vob2xkZXI9XCLDmMKsw5jCs8OYwqrDmMKsw5nCiFwiIFtzaG93VW5kZXJsaW5lXT1cImZhbHNlXCIgW2RlYm91bmNlXT1cIjUwMFwiIFthbHdheXNWaXNpYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAoc2VhcmNoRGVib3VuY2UpPVwic2VhcmNoSW5wdXRUZXJtID0gJGV2ZW50XCIgKHNlYXJjaCk9XCJzZWFyY2hJbnB1dFRlcm0gPSAkZXZlbnRcIiAoY2xlYXIpPVwic2VhcmNoSW5wdXRUZXJtID0gJydcIj5cclxuICA8L3RkLXNlYXJjaC1ib3g+LS0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWxvZ28tY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGBcclxuPCEtLTxpbWcgY2xhc3M9XCJsb2dvVHlwZUFuaW1hdGlvblwiIHNyYz0nLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLXR5cGUucG5nJyAvPi0tPmAsXHJcblx0c3R5bGVzOiBbYC5zaGF0ZWxMb2dvQW5pbWF0aW9ue2hlaWdodDozNXB4O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn0jYmFja2dyb3VuZHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3dpZHRoOjMwMHB4O2hlaWdodDo3MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dvQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZGY6IExheW91dENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tXCI7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgZnJvbUxheW91dCBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuXHREb1NpZ25vdXRBY3Rpb24sXHJcblx0T3BlblNlY29uZFNpZGVuYXZBY3Rpb24sXHJcblx0Q2xvc2VTZWNvbmRTaWRlbmF2QWN0aW9uLFxyXG5cdENsb3NlU2lkZW5hdkFjdGlvbixcclxuXHRPcGVuU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VUb29sYmF0VG9Db21mb3J0YWJsZU1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24sXHJcblx0Q2hhbmdlVG9vbGJhdFRvU3VtbWFyeU1vZGVBY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLCBnZXRMYXlvdXRUb29sYmFyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYXlvdXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIGFzIHRvb2xiYXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy90b29sYmFyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsYXlvdXQtdG9vbGJhclwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIFtAdG9vbGJhckFuaW1hdGlvbl09XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGVcIj5cclxuICA8bWF0LXRvb2xiYXItcm93PlxyXG4gICAgICA8IS0tIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+IC0tPlxyXG4gICAgICA8aW1nIFtAbG9nb0FuaW1hdGlvbl09XCJsb2dvQW5pbWF0aW9uU3RhdGVcIiBpZD1cImxvZ29cIiByb3V0ZXJMaW5rPScvJyBzcmM9Jy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2hhdGVsLWxvZ28ucG5nJyAvPlxyXG5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPSdzaG93U2lkZWJhck1lbnUgJiYgZmFsc2UnIChjbGljayk9XCJ0b2dnbGVNYWluU2lkZWJhcigpXCIgbWF0LWljb24tYnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHNwYW4gW0B0aXRsZUFuaW1hdGlvbl09XCJ0aXRsZUFuaW1hdGlvblN0YXRlXCIgaWQ9J2FwcC1uYW1lJz5cclxuICAgICAge3thcHBfY29uZmlnPy5Db25maWcuQXBwVGl0bGV9fVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGFwcC10aXRsZSBmeEZsZXggZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPjwvYXBwLXRpdGxlPlxyXG4gICAgPGFwcC1zZWFyY2gtYm94IGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiPjwvYXBwLXNlYXJjaC1ib3g+XHJcbiAgICBcclxuXHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc3BsYXlOYW1lXCIgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiYXV0aC9zaWduaW5cIj5cclxuICAgICAgw5nCiMOYwrHDmcKIw5jCr1xyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZGlzcGxheU5hbWVcIiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJ0b29sYmFyTWVudTFcIj5cclxuICAgICAgPG1hdC1pY29uPmFjY291bnRfY2lyY2xlPC9tYXQtaWNvbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge3tkaXNwbGF5TmFtZX19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPG1hdC1tZW51ICN0b29sYmFyTWVudTE+XHJcbiAgICAgIDxidXR0b24gcm91dGVyTGluaz0nL3VzZXIvcGFuZWwnIG1hdC1tZW51LWl0ZW0+XHJcbiAgICAgICAgPG1hdC1pY29uPmZpbmdlcnByaW50PC9tYXQtaWNvbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIMOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIChjbGljayk9J3NpZ25vdXQoKScgbWF0LW1lbnUtaXRlbT5cclxuICAgICAgICA8bWF0LWljb24+ZXhpdF90b19hcHA8L21hdC1pY29uPlxyXG4gICAgICAgIDxzcGFuPsOYwq7DmMKxw5nCiMOYwqw8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidG9nZ2xlU2Vjb25kU2lkZWJhcigpXCIgZnhGbGV4PVwibm9ncm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgPG1hdC1pY29uPm5vdGlmaWNhdGlvbnM8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPSdnb2JhY2soKSc+XHJcbiAgICAgIDxtYXQtaWNvbj5hcnJvd19iYWNrPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgPC9tYXQtdG9vbGJhci1yb3c+XHJcbiAgPG1hdC10b29sYmFyLXJvdz5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRUb29sYmFyXCIgW0BtZW51QW5pbWF0aW9uXT1cIm1lbnVBbmltYXRpb25TdGF0ZVwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gXHJcbiAgICAgICpuZ0Zvcj1cImxldCBtZW51IG9mIG1lbnVJdGVtcyQgfCBhc3luY1wiXHJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxyXG4gICAgICBbcm91dGVyTGlua109XCJbbWVudS5yb3V0ZV1cIj5cclxuICAgICAgPCEtLSA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj57e21lbnUuaWNvbn19PC9tYXQtaWNvbj4gLS0+XHJcbiAgICAgIDxzcGFuPnt7bWVudS50aXRsZX19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LXRvb2xiYXItcm93PlxyXG48L21hdC10b29sYmFyPmAsXHJcblx0c3R5bGVzOiBbYCNsb2dvLCNzZWNvbmRUb29sYmFye3RyYW5zaXRpb246YWxsO3Bvc2l0aW9uOmFic29sdXRlfSNhcHAtbmFtZXtwYWRkaW5nLXJpZ2h0OjhweH1gXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKFwibG9nb0FuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCI5MHB4XCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiOTBweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjUwcHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlIC0gNTBweClcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tcGFjdFwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHdpZHRoOiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzNnB4XCIsXHJcblx0XHRcdFx0XHR0b3A6IFwiMTNweFwiLFxyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiMTNweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJzdW1tYXJ5XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0d2lkdGg6IFwiMzZweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjM2cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCI3NnB4XCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCIxMHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHR3aWR0aDogXCIwXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjc2cHhcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjEwcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2Utb3V0XCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwibWVudUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI1MCVcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIyNXB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImNvbXBhY3RcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRyaWdodDogXCI0NXB4XCIsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjEzcHhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiMTRweFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0cmlnaHQ6IFwiNzVweFwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCIxNHB4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tZm9ydGFibGVcIiwgYW5pbWF0ZShcIjYwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBoaWRlXCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNjAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGhpZGVcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaGlkZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI2MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0Ly8gdHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21wYWN0XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJzdW1tYXJ5ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLW91dFwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJjb21wYWN0ID0+IHN1bW1hcnlcIiwgYW5pbWF0ZShcIjQwMG1zIGVhc2UtaW5cIikpXHJcblx0XHRdKSxcclxuXHRcdHRyaWdnZXIoXCJ0aXRsZUFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCJsYXJnZXJcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDUwJSlcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcImNhbGMoNTAlKVwiLFxyXG5cdFx0XHRcdFx0Ym90dG9tOiBcIjc1cHhcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0XCJtYXJnaW4tcmlnaHRcIjogXCIwcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC1zaXplXCI6IFwiMTZweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXdlaWdodFwiOiBcImJvbGRlclwiLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcclxuXHRcdFx0XHRcdHJpZ2h0OiBcIjYwcHhcIixcclxuXHRcdFx0XHRcdGJvdHRvbTogXCI3OXB4XCIsXHJcblx0XHRcdFx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdFwibWFyZ2luLXJpZ2h0XCI6IFwiMHB4XCIsXHJcblx0XHRcdFx0XHRcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRzdGF0ZShcclxuXHRcdFx0XHRcImhpZGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHRcIm1hcmdpbi1yaWdodFwiOiBcIjBweFwiLFxyXG5cdFx0XHRcdFx0XCJmb250LXNpemVcIjogXCIxcHhcIixcclxuXHRcdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogXCJib2xkZXJcIixcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXHJcblx0XHRcdFx0XHRyaWdodDogXCI2MHB4XCIsXHJcblx0XHRcdFx0XHRib3R0b206IFwiNzlweFwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiODUwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSksXHJcblx0XHR0cmlnZ2VyKFwidG9vbGJhckFuaW1hdGlvblwiLCBbXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwiY29tZm9ydGFibGVcIixcclxuXHRcdFx0XHRzdHlsZSh7XHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgxMTksMTgxLDYzLDEpXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTYsMjU2LDI1NiwxKVwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwicmdiYSgzMCwzMCwzMCwxKVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMzdmhcIixcclxuXHRcdFx0XHRcdHRvcDogXCIwXCIsXHJcblx0XHRcdFx0XHRib3hTaGFkb3c6IFwiMXB4IDFweCAzcHggcmdiYSgwLDAsMCwwKVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJjb21wYWN0XCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIjBcIixcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogXCIxcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSlcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCksXHJcblx0XHRcdHN0YXRlKFxyXG5cdFx0XHRcdFwic3VtbWFyeVwiLFxyXG5cdFx0XHRcdHN0eWxlKHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NiwyNTYsMjU2LDEpXCIsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IFwiMTI4cHhcIixcclxuXHRcdFx0XHRcdHRvcDogXCItNjRweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0c3RhdGUoXHJcblx0XHRcdFx0XCJoaWRlXCIsXHJcblx0XHRcdFx0c3R5bGUoe1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU2LDI1NiwyNTYsMSlcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIxMjhweFwiLFxyXG5cdFx0XHRcdFx0dG9wOiBcIi0xMjhweFwiLFxyXG5cdFx0XHRcdFx0Ym94U2hhZG93OiBcIjFweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KVwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbWZvcnRhYmxlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tZm9ydGFibGUgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbWZvcnRhYmxlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImNvbXBhY3QgPT4gaGlkZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdHRyYW5zaXRpb24oXCJoaWRlID0+IGNvbXBhY3RcIiwgYW5pbWF0ZShcIjgwMG1zIGVhc2UtaW5cIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBoaWRlXCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcImhpZGUgPT4gc3VtbWFyeVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1pblwiKSksXHJcblx0XHRcdC8vIHRyYW5zaXRpb24oXCJjb21mb3J0YWJsZSA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI4MDBtcyBlYXNlLWluXCIpKSxcclxuXHRcdFx0dHJhbnNpdGlvbihcInN1bW1hcnkgPT4gY29tcGFjdFwiLCBhbmltYXRlKFwiNDAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwic3VtbWFyeSA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBjb21mb3J0YWJsZVwiLCBhbmltYXRlKFwiODAwbXMgZWFzZS1vdXRcIikpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiY29tcGFjdCA9PiBzdW1tYXJ5XCIsIGFuaW1hdGUoXCI0MDBtcyBlYXNlLWluXCIpKVxyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyTWVudUNvbXBvbmVudCB7XHJcblx0c2hvd1NlY29uZFNpZGVuYXY6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KCkgc2hvd1NpZGViYXJNZW51O1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZztcclxuXHRASW5wdXQoKSB1c2VyOiBVc2VyTW9kZWw7XHJcblx0QElucHV0KCkgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHNob3dNYWluU2lkZW5hdjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR0b29sYmFyQW5pbWF0aW9uU3RhdGU6IFwiY29tZm9ydGFibGVcIiB8IFwiY29tcGFjdFwiIHwgXCJzdW1tYXJ5XCIgfCBcImhpZGVcIiA9IFwiY29tcGFjdFwiO1xyXG5cdG1lbnVBbmltYXRpb25TdGF0ZTogXCJjb21mb3J0YWJsZVwiIHwgXCJjb21wYWN0XCIgfCBcInN1bW1hcnlcIiB8IFwiaGlkZVwiID0gXCJjb21wYWN0XCI7XHJcblx0bG9nb0FuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHR0aXRsZUFuaW1hdGlvblN0YXRlOiBcImNvbWZvcnRhYmxlXCIgfCBcImNvbXBhY3RcIiB8IFwic3VtbWFyeVwiIHwgXCJoaWRlXCIgPSBcImNvbXBhY3RcIjtcclxuXHRtZW51SXRlbXMkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRsYXN0U2Nyb2xsOiBudW1iZXI7XHJcblx0Y29uZmlnOiB0b29sYmFyU3RhdGU7XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTx0b29sYmFyU3RhdGU+O1xyXG5cdGFuY2hvcnNNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcblx0XHRwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24sXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldExheW91dFRvb2xiYXIpO1xyXG5cdFx0dGhpcy5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHR0aGlzLmxhc3RTY3JvbGwgPSB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRTaG93TWFpblNpZGVuYXYpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiAodGhpcy5tZW51QW5pbWF0aW9uU3RhdGUgPSBzdGF0ZSksIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvZ29BbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudGl0bGVBbmltYXRpb25TdGF0ZSA9IHN0YXRlKSwgMSk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gKHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gc3RhdGUpLCAxKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fb2JzZXJ2ZV9vbl9sYXlvdXRfY29uZmlnX2FuZF9maWx0ZXJfcm91dGVzKCk7XHJcblxyXG5cdFx0ZnJvbUV2ZW50KHRoaXMuZG9jdW1lbnQuYm9keSwgXCJzY3JvbGxcIikuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0bGV0IHNjcm9sbGVkQW1vdW50ID0gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuXHRcdFx0bGV0IHNjcm9sbFRvVG9wID1cclxuXHRcdFx0XHRzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDAgJiYgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCAtIHNjcm9sbGVkQW1vdW50IDwgMzAwO1xyXG5cdFx0XHQvLyBsZXQgc2Nyb2xsVG9Ub3AgPSBzY3JvbGxlZEFtb3VudCAtIHRoaXMubGFzdFNjcm9sbCA8IDA7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbCA9IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblx0XHRcdGlmICghdGhpcy5jb25maWcudmlzaWJpbGl0eSkgcmV0dXJuO1xyXG5cdFx0XHRpZiAoc2Nyb2xsZWRBbW91bnQgPT0gMCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tZm9ydGFibGVcIikgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVRvb2xiYXRUb0NvbWZvcnRhYmxlTW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxlZEFtb3VudCA8IDIwMCB8fCBzY3JvbGxUb1RvcCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZy5tb2RlID09IFwiY29tcGFjdFwiKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlVG9vbGJhdFRvQ29tcGFjdE1vZGVBY3Rpb24oKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlnLm1vZGUgPT0gXCJzdW1tYXJ5XCIpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VUb29sYmF0VG9TdW1tYXJ5TW9kZUFjdGlvbigpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKFwiYm9keTpzY3JvbGxcIiwgW10pXHJcblx0b25XaW5kb3dTY3JvbGwoKSB7XHJcblx0XHQvLyBvZigxKVxyXG5cdH1cclxuXHRzaWdub3V0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRG9TaWdub3V0QWN0aW9uKCkpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XHJcblx0fVxyXG5cdHRvZ2dsZVNlY29uZFNpZGViYXIoKSB7XHJcblx0XHRsZXQgYWN0aW9uO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdi5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHRhY3Rpb24gPSBzdGF0ZSA/IG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSA6IG5ldyBPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcblx0fVxyXG5cdHRvZ2dsZU1haW5TaWRlYmFyKCkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2LnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdGFjdGlvbiA9IHN0YXRlID8gbmV3IENsb3NlU2lkZW5hdkFjdGlvbigpIDogbmV3IE9wZW5TaWRlbmF2QWN0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuXHR9XHJcblx0X29ic2VydmVfb25fbGF5b3V0X2NvbmZpZ19hbmRfZmlsdGVyX3JvdXRlcygpIHtcclxuXHRcdHRoaXMubWVudUl0ZW1zJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5tZW51SXRlbXMpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlciQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWVudV9pdGVtX2F1dGhvcml6YXRpb25fb3BlcmF0b3IpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvb3RlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwiZm9vdGVyLXRleHRcIj5cclxuICAgIHt7YXBwX2NvbmZpZz8uQ29uZmlnLkZvb3RlckNvcHlyaWdodH19XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2JvcmRlci10b3A6MXB4IHNvbGlkICNlNWU1ZTU7cGFkZGluZzo4cHg7b3ZlcmZsb3c6aGlkZGVufS5mb290ZXItdGV4dHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MTJweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoXCJhcHAtY29uZmlnXCIpIGFwcF9jb25maWc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IFRpdGxlQ2hhbmdlZEFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0VGl0bGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGUsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImFwcC10aXRsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cInRpdGxlXCI+XHJcbiAgICB7e3RpdGxlJCB8IGFzeW5jfX1cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3RpdGxle21hcmdpbi1yaWdodDotMzBweDtmb250LXdlaWdodDpib2xkZXI7Zm9udC1zaXplOjEzcHg7cGFkZGluZzoxOHB4IDQwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IHtcclxuXHR0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRtYXBwZXI6IHsgKHZhbDogTmF2aWdhdGlvbkVuZCk6IHN0cmluZyB9W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMubWFwcGVyID0gW107XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdwcm9maWxlLWVkaXQnKSkgPyAnw5nCiMObwozDmMKxw5jCp8ObwozDmMK0IMOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3N1Y2Nlc3MtcGF5bWVudC1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5nCvsOYwrHDmMKvw5jCp8OYwq7DmMKqIMOZwofDmMKnw5vCjCDDmcKFw5nCiMOZwoHDmcKCJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2ZhaWxlZC1sb2dpbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCrsOYwrfDmMKnw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnYWN0aXZlLXNlc3Npb24taW5mbycpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCqMOYwrPDmMKqw5nChyDDmcKBw5jCucOYwqfDmcKEJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ3Nlc3Npb24tZGV0YWlsLXJlcG9ydCcpKSA/ICfDmMKsw5jCssOYwqbDm8KMw5jCp8OYwqogw5jCp8OYwqrDmMK1w5jCp8OZwoQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZGFpbHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAnw5rCr8OYwrLDmMKnw5jCscOYwrQgw5jCqsOYwqzDmcKFw5vCjMOYwrnDm8KMIMOYwrHDmcKIw5jCssOYwqfDmcKGw5nChycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdtb250aGx5LXNlc3Npb24tcmVwb3J0JykpID8gJ8Oawq/DmMKyw5jCp8OYwrHDmMK0IMOYwqrDmMKsw5nChcObwozDmMK5w5vCjCDDmcKFw5jCp8OZwofDmMKnw5nChsOZwocnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5zdGFydHNXaXRoKCcvcGFja2FnZXMvdXNlci1wYWNrYWdlcycpKSA/ICfDmcKEw5vCjMOYwrPDmMKqIMOZwr7DmsKpw5vCjMOYwqwgw5nCh8OYwqcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnL2NoYW5nZS1wYXNzd29yZCcpKSA/ICfDmMKqw5jCusObwozDm8KMw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdHRoaXMudGl0bGUkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VGl0bGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcclxuXHRcdFx0XHR0aGlzLm1hcHBlci5mb3JFYWNoKG1hcHBlciA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gbWFwcGVyKGV2ZW50KTtcclxuXHRcdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGl0bGUgPSByZXM7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUaXRsZUNoYW5nZWRBY3Rpb24oXCIvIFwiICsgdGl0bGUgfHwgXCJcIikpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTd1B1c2ggfSBmcm9tIFwiQGFuZ3VsYXIvc2VydmljZS13b3JrZXJcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U2lkZW5hdiwgTWF0U2lkZW5hdkNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEZlYXR1cmVTdGF0ZSxcclxuXHRnZXRTaG93TWFpblNpZGVuYXYsXHJcblx0Z2V0TWFpblNpZGVOYXZNb2RlLFxyXG5cdGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzLFxyXG5cdGdldFNlY29uZFNpZGViYXJNb2RlLFxyXG5cdGdldExheW91dE1vZGUsXHJcblx0Z2V0TGF5b3V0VG9vbGJhck1vZGUsXHJcblx0Z2V0RnVsbHNjcmVlbk1vZGVcclxufSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0Q2hhbmdlVG9vbGJhdFRvQ29tZm9ydGFibGVNb2RlQWN0aW9uLFxyXG5cdENsb3NlU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZSxcclxuXHRPcGVuU2Vjb25kU2lkZW5hdkFjdGlvbixcclxuXHRDbG9zZVNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlU2lkZU5hdk1vZGUsXHJcblx0T3BlblNpZGVuYXZBY3Rpb24sXHJcblx0Q2hhbmdlTGF5b3V0XHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTGF5b3V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbGF5b3V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUsIHN0eWxlIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxheW91dC1tYWluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNtYWluU2lkZU5hdiBbbmdDbGFzc109XCJ0b29sYmFyQW5pbWF0aW9uU3RhdGUgfCBhc3luY1wiIFtjbGFzcy5mdWxsc2NyZWVuXT1cImlzRnVsbHNjcmVlbiQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1wcm9ncmVzcy1iYXIgKm5nSWY9J3Byb2dyZXNzU3RhdHVzJCB8IGFzeW5jJyBjb2xvcj1cInByaW1hcnlcIiBtb2RlPVwicXVlcnlcIj48L21hdC1wcm9ncmVzcy1iYXI+IC0tPlxyXG4gIDxsYXlvdXQtdG9vbGJhciBbdXNlcl09XCJ1c2VyJCB8IGFzeW5jXCIgW2Rpc3BsYXlOYW1lXT1cImRpc3BsYXlOYW1lJCB8IGFzeW5jXCIgW3Nob3dTaWRlYmFyTWVudV09J3Nob3dTaWRlYmFyTWVudSB8IGFzeW5jJyBbYXBwLWNvbmZpZ109XCJhcHBfY29uZmlnXCI+PC9sYXlvdXQtdG9vbGJhcj5cclxuICBcclxuICA8bWF0LXNpZGVuYXYtY29udGFpbmVyIGlkPVwibGF5b3V0LXNpZG5hdlwiIFtjbGFzc05hbWVdPVwibGF5b3V0TW9kZSB8IGFzeW5jXCI+XHJcbiAgICA8bWF0LXNpZGVuYXYgW21vZGVdPVwibWFpblNpZGVuYXZNb2RlIHwgYXN5bmNcIiBbb3BlbmVkXT0nc2hvd01haW5TaWRlbmF2IHwgYXN5bmMnICNzaWRlYmFyIChjbG9zZWRTdGFydCk9XCJvblNpZGViYXJDbG9zZWRTdGFydCgpXCI+XHJcbiAgICAgIDxtYXQtbmF2LWxpc3Q+XHJcbiAgICAgICAgPG5ncy1sYXlvdXQtbWFpbi1tZW51IFthdXRoZW50aWNhdGVkXT0nc2hvd1NpZGViYXJNZW51JyAoY2xvc2VTaWRlYmFyKT1cInNpZGViYXIuY2xvc2UoKVwiIChjbGljayk9XCJvblNlY29uZFNpZGViYXJDbG9zZWRTdGFydCgpXCI+PC9uZ3MtbGF5b3V0LW1haW4tbWVudT5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PlxyXG4gICAgPCEtLSA8bWF0LXNpZGVuYXYgW21vZGVdPVwic2Vjb25kU2lkZW5hdk1vZGUgfCBhc3luY1wiIFtvcGVuZWRdPSdzaG93U2Vjb25kU2lkZW5hdiB8IGFzeW5jJyAoY2xvc2VkU3RhcnQpPVwib25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKVwiXHJcbiAgICAgIHBvc2l0aW9uPVwiZW5kXCIgI3NlY29uZF9zaWRlYmFyIGNsYXNzPVwic2Vjb25kX3NpZGViYXJcIj5cclxuICAgICAgPG1hdC1uYXYtbGlzdCBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgPC9tYXQtbmF2LWxpc3Q+XHJcbiAgICA8L21hdC1zaWRlbmF2PiAtLT5cclxuICAgIDxkaXYgZnhGbGV4TGF5b3V0PSdjb2x1bW4nIGlkPVwiYXBwLW1haW4tY29udGFpbmVyXCIgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgIDxkaXYgZnhGbGV4PScwIDAgMTAwJz5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPGZvb3RlciBbQG1vZGVdPVwibW9kZSQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9BXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQgbmFtZT1cImZvb3Rlcl9CXCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgICAgPGFwcC1mb290ZXIgW2FwcC1jb25maWddPVwiYXBwX2NvbmZpZ1wiPjwvYXBwLWZvb3Rlcj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI3B1cmNoYXNlLWZhYi1idXR0b257cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjIzcHg7bGVmdDozMXB4fW1kLXByb2dyZXNzLWJhcntwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnR9LndpdGgtbWFyZ2luICNhcHAtbWFpbi1jb250YWluZXJ7bWFyZ2luLXRvcDoyNXB4O3BhZGRpbmctcmlnaHQ6MjVweDtwYWRkaW5nLWxlZnQ6MjVweH0uc2Vjb25kX3NpZGViYXJ7d2lkdGg6MzgwcHh9Lm1vcmUtZGV0YWlse21hcmdpbjo4cHg7Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MTBweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo5NiU7Ym9yZGVyOjFweCBzb2xpZCAjZGVkZWRlO291dGxpbmU6MDtjdXJzb3I6cG9pbnRlcjt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZX0ubW9yZS1kZXRhaWw6aG92ZXJ7YmFja2dyb3VuZDojZWVlfWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZTVlNWU1O21hcmdpbi10b3A6MjVweDtiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjF9YF0sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcihcIm1vZGVcIiwgW1xyXG5cdFx0XHRzdGF0ZShcInZpc2libGVcIiwgc3R5bGUoeyB0cmFuc2Zvcm06IFwic2NhbGVZKDEpIHRyYW5zbGF0ZVkoMClcIiB9KSksXHJcblx0XHRcdHN0YXRlKFwiaW52aXNpYmxlXCIsIHN0eWxlKHsgaGVpZ2h0OiBcIjBcIiwgdHJhbnNmb3JtOiBcInNjYWxlWSgwKSB0cmFuc2xhdGVZKDEwMCUpXCIgfSkpLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwidmlzaWJsZSA9PiBpbnZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pLFxyXG5cdFx0XHR0cmFuc2l0aW9uKFwiaW52aXNpYmxlID0+IHZpc2libGVcIiwgWyBhbmltYXRlKFwiMTAwMG1zXCIpIF0pXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG5cdEBJbnB1dChcImFwcC1jb25maWdcIikgYXBwX2NvbmZpZzogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRtb2RlJDogT2JzZXJ2YWJsZTxcInZpc2libGVcIiB8IFwiaW52aXNpYmxlXCI+O1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGlzcGxheU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0aXNGdWxsc2NyZWVuJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRwcm9ncmVzc1N0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0c2hvd1NpZGViYXJNZW51ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0cnVlKTtcclxuXHQvL3VzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0c2hvd01haW5TaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG1haW5TaWRlbmF2TW9kZTogT2JzZXJ2YWJsZTxcInNpZGVcIiB8IFwib3ZlclwiIHwgXCJwdXNoXCI+O1xyXG5cdGxheW91dE1vZGU6IE9ic2VydmFibGU8XCJ3aXRoLW1hcmdpblwiIHwgXCJ3aXRob3V0LW1hcmdpblwiIHwgXCJkZWZhdWx0XCI+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdHNob3dTZWNvbmRTaWRlbmF2OiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHNlY29uZFNpZGVuYXZNb2RlOiBPYnNlcnZhYmxlPFwic2lkZVwiIHwgXCJvdmVyXCIgfCBcInB1c2hcIj47XHJcblx0dG9vbGJhckFuaW1hdGlvblN0YXRlOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QFZpZXdDaGlsZChcIm1haW5TaWRlTmF2XCIpIG1haW5TaWRlTmF2OiBFbGVtZW50UmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBMYXlvdXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTaWRlTmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHMgPT4gKHMgYXMgYW55KS51c2VyLnVzZXIuZGF0YSk7XHJcblx0XHR0aGlzLmRpc3BsYXlOYW1lJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKTtcclxuXHRcdHRoaXMuc2hvd01haW5TaWRlbmF2ID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0U2hvd01haW5TaWRlbmF2KTtcclxuXHRcdHRoaXMubWFpblNpZGVuYXZNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TWFpblNpZGVOYXZNb2RlKTtcclxuXHRcdHRoaXMudG9vbGJhckFuaW1hdGlvblN0YXRlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0VG9vbGJhck1vZGUpO1xyXG5cclxuXHRcdHRoaXMuaXNGdWxsc2NyZWVuJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKTtcclxuXHRcdHRoaXMubW9kZSQgPSB0aGlzLmlzRnVsbHNjcmVlbiQubWFwKG1vZGUgPT4gKG1vZGUgPyBcImludmlzaWJsZVwiIDogXCJ2aXNpYmxlXCIpKTtcclxuXHJcblx0XHQvLyNyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VTZWNvbmRTaWRlbmF2TW9kZShcInB1c2hcIikpO1xyXG5cdFx0dGhpcy5zaG93U2Vjb25kU2lkZW5hdiA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFNob3dTZWNvbmRTaWRlYmFyU3RhdHVzKTtcclxuXHRcdHRoaXMuc2Vjb25kU2lkZW5hdk1vZGUgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRTZWNvbmRTaWRlYmFyTW9kZSk7XHJcblx0XHQvLyNlbmRyZWdpb24gbWFuYWdlIHNlY29uZCBzaWRlYmFyXHJcblxyXG5cdFx0dGhpcy5sYXlvdXRNb2RlID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0TGF5b3V0TW9kZSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihkYXRhID0+IGRhdGEgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHR2YXIgaGlkZVNpdHVhdGlvbnMgPSBbXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbmluXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3JlZ2lzdGVyXCIsXHJcblx0XHRcdFx0KGV2ZW50IGFzIE5hdmlnYXRpb25FbmQpLnVybEFmdGVyUmVkaXJlY3RzID09IFwiL2F1dGgvc2lnbnVwL3ZlcmlmaWNhdGlvblwiLFxyXG5cdFx0XHRcdChldmVudCBhcyBOYXZpZ2F0aW9uRW5kKS51cmxBZnRlclJlZGlyZWN0cyA9PSBcIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCJcclxuXHRcdFx0XTtcclxuXHRcdFx0aWYgKGhpZGVTaXR1YXRpb25zLnNvbWUoaSA9PiBpKSkgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dChmYWxzZSk7XHJcblx0XHRcdGVsc2UgdGhpcy5zaG93U2lkZWJhck1lbnUubmV4dCh0cnVlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gbmdBZnRlclZpZXdJbml0KCkge1xyXG5cdC8vIFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlTGF5b3V0KFwid2l0aC1tYXJnaW5cIikpO1xyXG5cdC8vIH1cclxuXHJcblx0b25TZWNvbmRTaWRlYmFyQ2xvc2VkU3RhcnQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbG9zZVNlY29uZFNpZGVuYXZBY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHRvblNpZGViYXJDbG9zZWRTdGFydCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENsb3NlU2lkZW5hdkFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEb1NpZ25vdXRBY3Rpb24gfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMYXlvdXRBY3Rpb25UeXBlcyxcclxuXHRJbnZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdFZpc2libGVUb29sYmFyQWN0aW9uLFxyXG5cdEV4aXRGdWxsc2NyZWVuQWN0aW9uLFxyXG5cdEZ1bGxzY3JlZW5BY3Rpb25cclxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0RnVsbHNjcmVlbk1vZGUgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0QEVmZmVjdCgpIERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgRG9TaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0ZnVsbHNjcmVlbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5GVUxMU0NSRUVOKS5waXBlKG1hcCgoKSA9PiBuZXcgSW52aXNpYmxlVG9vbGJhckFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGV4aXRfZnVsbHNjcmVlbiQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKExheW91dEFjdGlvblR5cGVzLkVYSVRfRlVMTFNDUkVFTilcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgVmlzaWJsZVRvb2xiYXJBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRmdWxsc2NyZW5fdG9vbGJhciQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShMYXlvdXRBY3Rpb25UeXBlcy5UT0dHTEVfRlVMTFNDUkVFTikucGlwZShcclxuXHRcdHdpdGhMYXRlc3RGcm9tKHRoaXMuc3RvcmUuc2VsZWN0KGdldEZ1bGxzY3JlZW5Nb2RlKSksXHJcblx0XHRtYXAoKFsgYWN0aW9uLCB0b29sYmFyTW9kZSBdKSA9PiB7XHJcblx0XHRcdGlmICh0b29sYmFyTW9kZSkgcmV0dXJuIG5ldyBFeGl0RnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0XHRlbHNlIHJldHVybiBuZXcgRnVsbHNjcmVlbkFjdGlvbigpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IE5nc0NvbmZpZ01vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0UmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgTGF5b3V0TW9kdWxlQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9sYXlvdXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IE1haW5NZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlYXJjaEJveENvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ29Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbG9nby1jb250YWluZXIvbG9nby1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvb2xiYXJNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3Rvb2xiYXItbWVudS90b29sYmFyLW1lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dEVmZmVjdHMgfSBmcm9tIFwiLi9sYXlvdXQuZWZmZWN0c1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRCcm93c2VyTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE5nc0NvbmZpZ01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRNYWluTWVudUNvbXBvbmVudCxcclxuXHRcdFNlYXJjaEJveENvbXBvbmVudCxcclxuXHRcdExvZ29Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRUb29sYmFyTWVudUNvbXBvbmVudCxcclxuXHRcdEZvb3RlckNvbXBvbmVudCxcclxuXHRcdFRpdGxlQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0TWFpbk1lbnVDb21wb25lbnQsXHJcblx0XHRTZWFyY2hCb3hDb21wb25lbnQsXHJcblx0XHRMb2dvQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0VG9vbGJhck1lbnVDb21wb25lbnQsXHJcblx0XHRGb290ZXJDb21wb25lbnQsXHJcblx0XHRUaXRsZUNvbXBvbmVudCxcclxuXHRcdE1haW5Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NMYXlvdXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IExheW91dE1vZHVsZUNvbmZpZ01vZGVsKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0xheW91dE1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJsYXlvdXRcIiwgTGF5b3V0UmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgTGF5b3V0RWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NMYXlvdXRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0xheW91dE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsibGF5b3V0LkxheW91dEFjdGlvblR5cGVzIiwibGF5b3V0LkNMT1NFX1NJREVOQVYiLCJsYXlvdXQuT1BFTl9TSURFTkFWIiwiaW5pdGlhbFN0YXRlIiwibGF5b3V0LlJlZHVjZXIiLCJmcm9tVG9vbGJhci5SZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJnZXRUaXRsZSIsImxheW91dC5nZXRUaXRsZSIsImdldFNob3dNYWluU2lkZW5hdiIsImxheW91dC5nZXRTaG93TWFpblNpZGVuYXYiLCJnZXRNYWluU2lkZU5hdk1vZGUiLCJsYXlvdXQuZ2V0TWFpblNpZGVOYXZNb2RlIiwiZ2V0TGF5b3V0TW9kZSIsImxheW91dC5nZXRMYXlvdXRNb2RlIiwiZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJsYXlvdXQuZ2V0U2hvd1NlY29uZFNpZGViYXJTdGF0dXMiLCJnZXRTZWNvbmRTaWRlYmFyTW9kZSIsImxheW91dC5nZXRTZWNvbmRTaWRlYmFyTW9kZSIsImdldEZ1bGxzY3JlZW5Nb2RlIiwibGF5b3V0LmdldEZ1bGxzY3JlZW5Nb2RlIiwiZnJvbVRvb2xiYXIuZ2V0VG9vbGJhck1vZGUiLCJ1c2VyIiwiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJnZXRDb25maWdzIiwiY29uZmlnIiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwiRXZlbnRFbWl0dGVyIiwiZ2V0QWNjb3VudEluZm8iLCJtYXAiLCJjb21iaW5lTGF0ZXN0IiwiQ29tcG9uZW50IiwidHJpZ2dlciIsInN0YXRlIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0ZSIsIlNpZ25pblNlcnZpY2UiLCJPdXRwdXQiLCJJbnB1dCIsIlZpZXdDaGlsZCIsImZyb21MYXlvdXQuZ2V0U2hvd01haW5TaWRlbmF2IiwiZnJvbUxheW91dC5nZXRMYXlvdXRUb29sYmFyTW9kZSIsImZyb21FdmVudCIsIkRPQ1VNRU5UIiwiTG9jYXRpb24iLCJIb3N0TGlzdGVuZXIiLCJyb3V0ZXIiLCJOYXZpZ2F0aW9uRW5kIiwiUm91dGVyIiwiVXNlckZhY2FkZVNlcnZpY2UiLCJEb1NpZ25vdXRBY3Rpb24iLCJ3aXRoTGF0ZXN0RnJvbSIsIkFjdGlvbnMiLCJFZmZlY3QiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiTmdzQ29uZmlnTW9kdWxlIiwiU3RvcmVN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
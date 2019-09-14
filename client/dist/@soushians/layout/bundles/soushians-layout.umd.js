(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@ngrx/store'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@ngrx/effects'), require('@angular/material'), require('@ngx-translate/core'), require('@soushians/config'), require('rxjs/Observable'), require('@angular/animations'), require('@soushians/authentication'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('@soushians/user'), require('rxjs/observable/fromEvent'), require('rxjs'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/do'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@soushians/rule')) :
    typeof define === 'function' && define.amd ? define('@soushians/layout', ['exports', '@angular/core', '@angular/platform-browser', '@ngrx/store', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@ngrx/effects', '@angular/material', '@ngx-translate/core', '@soushians/config', 'rxjs/Observable', '@angular/animations', '@soushians/authentication', 'rxjs/BehaviorSubject', 'rxjs/operators', '@soushians/user', 'rxjs/observable/fromEvent', 'rxjs', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/do', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@soushians/rule'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.layout = {}), global.ng.core, global.ng.platformBrowser, global.store, global.ng.common, global.ng.router, global.ng.forms, global.ng.common.http, global.ng['flex-layout'], global.effects, global.ng.material, global.core$1, global.config, global.rxjs.Observable, global.ng.animations, global.authentication, global.rxjs.BehaviorSubject, global.rxjs.operators, global.user, global.rxjs['observable/fromEvent'], global.rxjs, global.rxjs['add/operator/map'], global.rxjs['add/operator/mergeMap'], global.rxjs['add/operator/do'], global.rxjs['add/operator/catch'], global.rxjs['add/observable/empty'], global.rule));
}(this, function (exports, core, platformBrowser, store, common, router, forms, http, flexLayout, effects, material, core$1, config, Observable, animations, authentication, BehaviorSubject, operators, user, fromEvent, rxjs, map, mergeMap, _do, _catch, empty, rule) { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var selectLayoutState = store.createFeatureSelector("layout");
    //#endregion
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.layout; };
    /** @type {?} */
    var getLayout = store.createSelector(selectLayoutState, (ɵ0));
    /** @type {?} */
    var getTitle$1 = store.createSelector(getLayout, getTitle);
    /** @type {?} */
    var getShowMainSidenav$1 = store.createSelector(getLayout, getShowMainSidenav);
    /** @type {?} */
    var getMainSideNavMode$1 = store.createSelector(getLayout, getMainSideNavMode);
    /** @type {?} */
    var getLayoutMode$1 = store.createSelector(getLayout, getLayoutMode);
    /** @type {?} */
    var getShowSecondSidebarStatus$1 = store.createSelector(getLayout, getShowSecondSidebarStatus);
    /** @type {?} */
    var getSecondSidebarMode$1 = store.createSelector(getLayout, getSecondSidebarMode);
    /** @type {?} */
    var getFullscreenMode$1 = store.createSelector(getLayout, getFullscreenMode);
    //#region toolbar
    var ɵ1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.toolbar; };
    /** @type {?} */
    var getLayoutToolbar = store.createSelector(selectLayoutState, (ɵ1));
    /** @type {?} */
    var getLayoutToolbarMode = store.createSelector(getLayoutToolbar, getToolbarMode);

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
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("LayoutModuleConfigModel");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        LayoutConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        /** @nocollapse */ LayoutConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN), core.ɵɵinject(store.Store)); }, token: LayoutConfigurationService, providedIn: "root" });
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
            this.closeSidebar = new core.EventEmitter();
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
            this.routes$ = this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.menuItems; })), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
        };
        MainMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "ngs-layout-main-menu",
                        template: "<mat-list class=\"main-menu-container\">\r\n  <div *ngIf=\"authenticated | async\">\r\n    <a *ngFor=\"let item of routes$ | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\r\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\r\n      <span mdLine>{{item.title}}</span>\r\n    </a>\r\n  </div>\r\n</mat-list>",
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
                        ],
                        styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"]
                    }] }
        ];
        /** @nocollapse */
        MainMenuComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: authentication.SigninService },
            { type: LayoutConfigurationService }
        ]; };
        MainMenuComponent.propDecorators = {
            closeSidebar: [{ type: core.Output }],
            authenticated: [{ type: core.Input }],
            customerMobileInput: [{ type: core.ViewChild, args: ["customerMobileInput", { static: false },] }]
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
            { type: core.Component, args: [{
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
            { type: core.Component, args: [{
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
            this.user$ = this.store.select(user.getAccountInfo);
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
            fromEvent.fromEvent(this.document.body, "scroll").subscribe((/**
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
            this.menuItems$ = this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.menuItems; })), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
        };
        ToolbarMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "layout-toolbar",
                        template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState\">\r\n  <mat-toolbar-row id=\"firstToolbar\">\r\n    <!-- <div id=\"background\"></div> -->\r\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/images/shatel-logo.png' />\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\r\n      {{app_config?.Config.AppTitle}}\r\n    </span>\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n\r\n\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\r\n      \u0648\u0631\u0648\u062F\r\n    </button>\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\r\n      \u062B\u0628\u062A \u0646\u0627\u0645\r\n    </button>\r\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\r\n      <div id=\"acccountName\">\r\n        {{displayName}}\r\n      </div>\r\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n        <span>\r\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\r\n        </span>\r\n      </button>\r\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span>\u062E\u0631\u0648\u062C</span>\r\n      </button>\r\n    </mat-menu>\r\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)='goback()'>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\r\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\r\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" routerLinkActive=\"active\" [routerLink]=\"[menu.route]\">\r\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\r\n        <span>{{menu.title}}</span>\r\n      </button>\r\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>",
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
                        ],
                        styles: ["mat-toolbar{background-color:#fff!important;top:0;box-shadow:rgba(0,0,0,.5) 1px 1px 3px!important}#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important}#secondToolbar.active{opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"]
                    }] }
        ];
        /** @nocollapse */
        ToolbarMenuComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: common.Location },
            { type: store.Store },
            { type: LayoutConfigurationService }
        ]; };
        ToolbarMenuComponent.propDecorators = {
            showSidebarMenu: [{ type: core.Input }],
            app_config: [{ type: core.Input, args: ["app-config",] }],
            user: [{ type: core.Input }],
            displayName: [{ type: core.Input }],
            onWindowScroll: [{ type: core.HostListener, args: ["body:scroll", [],] }]
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
            { type: core.Component, args: [{
                        selector: "app-footer",
                        template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\r\n    {{app_config?.Config.FooterCopyright}}\r\n</div>",
                        styles: [":host{border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        FooterComponent.propDecorators = {
            app_config: [{ type: core.Input, args: ["app-config",] }]
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
        function TitleComponent(store, router$1) {
            var _this = this;
            this.store = store;
            this.router = router$1;
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
                if (event instanceof router.NavigationEnd) {
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
            { type: core.Component, args: [{
                        selector: "app-title",
                        template: "<div id=\"title\">\r\n    {{title$ | async}}\r\n</div>",
                        styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                    }] }
        ];
        /** @nocollapse */
        TitleComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.Router }
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
        function NgsLayoutMainComponent(store, router$1, configService, translateService, userFacadeService) {
            var _this = this;
            this.store = store;
            this.router = router$1;
            this.configService = configService;
            this.translateService = translateService;
            this.userFacadeService = userFacadeService;
            this.showSidebarMenu = new rxjs.BehaviorSubject(true);
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
            function (data) { return data instanceof router.NavigationEnd; })).subscribe((/**
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
            { type: core.Component, args: [{
                        selector: "layout-main",
                        template: "<div #mainSideNav [ngClass]=\"toolbarAnimationState | async\" [class.fullscreen]=\"isFullscreen$ | async\">\r\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\r\n  <layout-toolbar  *ngIf=\"theme == 'theme_A'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\r\n  <layout-toolbar-b *ngIf=\"theme == 'theme_B'\" [user]=\"user$ | async\" [displayName]=\"displayName$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar-b>\r\n  \r\n  <mat-sidenav-container id=\"layout-sidnav\" [className]=\"layoutMode | async\">\r\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\r\n      <mat-nav-list>\r\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\r\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\r\n      <mat-nav-list fxLayout='column'>\r\n      </mat-nav-list>\r\n    </mat-sidenav> -->\r\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\r\n      <div fxFlex='0 0 100'>\r\n        <router-outlet></router-outlet>\r\n        <footer [@mode]=\"mode$ | async\" ruleAnchor=\"layout_footer\">\r\n          <router-outlet name=\"footer_A\"></router-outlet>\r\n          <router-outlet name=\"footer_B\"></router-outlet>\r\n          <app-footer [app-config]=\"app_config\"></app-footer>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </mat-sidenav-container>\r\n</div>",
                        animations: [
                            animations.trigger("mode", [
                                animations.state("visible", animations.style({ transform: "scaleY(1) translateY(0)" })),
                                animations.state("invisible", animations.style({ height: "0", transform: "scaleY(0) translateY(100%)" })),
                                animations.transition("visible => invisible", [animations.animate("1000ms")]),
                                animations.transition("invisible => visible", [animations.animate("1000ms")])
                            ])
                        ],
                        styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:.3s}.more-detail:hover{background:#eee}footer{border-top:1px solid #e5e5e5;margin-top:25px;background-color:#f1f1f1}"]
                    }] }
        ];
        /** @nocollapse */
        NgsLayoutMainComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: router.Router },
            { type: LayoutConfigurationService },
            { type: core$1.TranslateService },
            { type: user.UserFacadeService }
        ]; };
        NgsLayoutMainComponent.propDecorators = {
            app_config: [{ type: core.Input, args: ["app-config",] }],
            mainSideNav: [{ type: core.ViewChild, args: ["mainSideNav", { static: false },] }],
            theme_A: [{ type: core.HostBinding, args: ["class.theme_A",] }],
            theme_B: [{ type: core.HostBinding, args: ["class.theme_B",] }]
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
            this.DoSignout$ = this.actions$.pipe(effects.ofType(LayoutActionTypes.DO_SIGNOUT), operators.map((/**
             * @return {?}
             */
            function () { return new authentication.DoSignoutAction(); })));
            this.fullscreen$ = this.actions$.pipe(effects.ofType(LayoutActionTypes.FULLSCREEN), operators.map((/**
             * @return {?}
             */
            function () { return new InvisibleToolbarAction(); })));
            this.exit_fullscreen$ = this.actions$.pipe(effects.ofType(LayoutActionTypes.EXIT_FULLSCREEN), operators.map((/**
             * @return {?}
             */
            function () { return new VisibleToolbarAction(); })));
            this.fullscren_toolbar$ = this.actions$.pipe(effects.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN), operators.withLatestFrom(this.store.select(getFullscreenMode$1)), operators.map((/**
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LayoutEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: store.Store }
        ]; };
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
            this.user$ = this.store.select(user.getAccountInfo);
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
            fromEvent.fromEvent(this.document.body, "scroll").subscribe((/**
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
            this.menuItems$ = this.configurationService.config$.pipe(operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.menuItems; })), operators.combineLatest(this.user$), operators.map(this.configurationService.config$.getValue().menu_item_authorization_operator));
        };
        ToolbarMenuThemeBComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "layout-toolbar-b",
                        template: "<mat-toolbar dir=\"rtl\" color=\"primary\" [@toolbarAnimation]=\"toolbarAnimationState\">\r\n  <mat-toolbar-row dir=\"rtl\" id=\"firstToolbar\">\r\n    <!-- <div id=\"background\"></div> -->\r\n    <img [@logoAnimation]=\"logoAnimationState\" id=\"logo\" routerLink='/' src='assets/logos/logo-type.png' />\r\n\r\n    <button type=\"button\" *ngIf='showSidebarMenu && false' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\"\r\n      fxLayoutAlign=\"center center\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span [@titleAnimation]=\"titleAnimationState\" id='app-name'>\r\n      {{app_config?.Config.AppTitle}}\r\n    </span>\r\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\r\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\r\n\r\n\r\n    <button *ngIf=\"!displayName\" mat-button routerLink=\"auth/signin\">\r\n      <span [translate]=\"'__signin'\"></span>\r\n    </button>\r\n    <button translate *ngIf=\"!displayName\" mat-button routerLink=\"auth/signup\">\r\n      {{'__signup' | translate}}\r\n    </button>\r\n    <button *ngIf=\"displayName\" mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">\r\n      <mat-icon>account_circle</mat-icon>\r\n    </button>\r\n    <mat-menu #toolbarMenu1 class=\"rtl-dir\">\r\n      <div id=\"acccountName\">\r\n        {{displayName}}\r\n      </div>\r\n      <button routerLink='/user/panel' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>fingerprint</mat-icon>\r\n        <span translate=\"__account_mangement\">\r\n        </span>\r\n      </button>\r\n      <button (click)='signout()' mat-menu-item class=\"rtl-dir\">\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        <span translate>__signout</span>\r\n      </button>\r\n    </mat-menu>\r\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\r\n      <mat-icon>notifications</mat-icon>\r\n    </button>\r\n    <button mat-icon-button (click)='goback()'>\r\n      <mat-icon>arrow_back</mat-icon>\r\n    </button>\r\n\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row>\r\n    <div id=\"secondToolbar\" [@menuAnimation]=\"menuAnimationState\">\r\n      <router-outlet name=\"ngs-layout-before-toolbar-menu\"></router-outlet>\r\n      <button mat-button *ngFor=\"let menu of menuItems$ | async\" [routerLink]=\"menu.route\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n        <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\r\n        <span>{{menu.title}}</span>\r\n      </button>\r\n      <router-outlet name=\"ngs-layout-after-toolbar-menu\"></router-outlet>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>",
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
                        ],
                        styles: ["#secondToolbar{transition:none;position:absolute}#secondToolbar button{opacity:.6;font-family:iran-sans-bold,sans-serif!important;font-size:.65em!important;height:50px!important;border-radius:0!important}#secondToolbar button.active{border-bottom:2px solid #ff7400;opacity:1}#logo{transition:none;position:absolute}#app-name{padding-right:8px;font-family:iran-sans-bold,sans-serif!important}button.rtl-dir{direction:rtl!important}#acccountName{display:block;text-align:right;padding-right:20px;font-size:14px;font-weight:bolder}"]
                    }] }
        ];
        /** @nocollapse */
        ToolbarMenuThemeBComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: common.Location },
            { type: store.Store },
            { type: core$1.TranslateService },
            { type: LayoutConfigurationService }
        ]; };
        ToolbarMenuThemeBComponent.propDecorators = {
            showSidebarMenu: [{ type: core.Input }],
            app_config: [{ type: core.Input, args: ["app-config",] }],
            user: [{ type: core.Input }],
            displayName: [{ type: core.Input }],
            onWindowScroll: [{ type: core.HostListener, args: ["body:scroll", [],] }]
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
                    { provide: core.LOCALE_ID, useValue: "en en-US" },
                    { provide: MODULE_CONFIG_TOKEN, useValue: config }
                ]
            };
        };
        NgsLayoutModule.decorators = [
            { type: core.NgModule, args: [{
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
                            core$1.TranslateModule,
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
            { type: core.NgModule, args: [{
                        imports: [
                            NgsLayoutModule,
                            store.StoreModule.forFeature("layout", LayoutReducers),
                            effects.EffectsModule.forFeature([LayoutEffects])
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

    exports.ChangeLayout = ChangeLayout;
    exports.ChangeSecondSidenavMode = ChangeSecondSidenavMode;
    exports.ChangeSideNavMode = ChangeSideNavMode;
    exports.ChangeToolbatToComfortableModeAction = ChangeToolbatToComfortableModeAction;
    exports.ChangeToolbatToCompactModeAction = ChangeToolbatToCompactModeAction;
    exports.CloseSecondSidenavAction = CloseSecondSidenavAction;
    exports.CloseSidenavAction = CloseSidenavAction;
    exports.DisableComfortableModeAction = DisableComfortableModeAction;
    exports.EnableComfortableModeAction = EnableComfortableModeAction;
    exports.ExitFullscreenAction = ExitFullscreenAction;
    exports.FullscreenAction = FullscreenAction;
    exports.InvisibleToolbarAction = InvisibleToolbarAction;
    exports.LayoutActionTypes = LayoutActionTypes;
    exports.LayoutOutlets = LayoutOutlets;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.NgsLayoutMainComponent = NgsLayoutMainComponent;
    exports.NgsLayoutModule = NgsLayoutModule;
    exports.OpenSecondSidenavAction = OpenSecondSidenavAction;
    exports.OpenSidenavAction = OpenSidenavAction;
    exports.RootNgsLayoutModule = RootNgsLayoutModule;
    exports.TitleChangedAction = TitleChangedAction;
    exports.ToggleFullscreenAction = ToggleFullscreenAction;
    exports.VisibleToolbarAction = VisibleToolbarAction;
    exports.ɵa = MainMenuComponent;
    exports.ɵc = LayoutConfigurationService;
    exports.ɵd = SearchBoxComponent;
    exports.ɵe = LogoContainerComponent;
    exports.ɵf = ToolbarMenuComponent;
    exports.ɵg = ToolbarMenuThemeBComponent;
    exports.ɵh = FooterComponent;
    exports.ɵi = TitleComponent;
    exports.ɵj = LayoutReducers;
    exports.ɵl = Reducer;
    exports.ɵm = Reducer$1;
    exports.ɵn = LayoutEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-layout.umd.js.map

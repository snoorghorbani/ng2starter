(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/forms'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@ngrx/store'), require('@ngrx/effects'), require('@soushians/form'), require('rxjs/operators'), require('rxjs'), require('@soushians/shared'), require('@soushians/authentication'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('rxjs/Observable')) :
    typeof define === 'function' && define.amd ? define('@soushians/user', ['exports', '@angular/core', '@angular/common', '@angular/router', '@angular/forms', '@angular/common/http', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material', '@ngrx/store', '@ngrx/effects', '@soushians/form', 'rxjs/operators', 'rxjs', '@soushians/shared', '@soushians/authentication', 'rxjs/BehaviorSubject', '@soushians/config', 'rxjs/Observable'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.user = {}), global.ng.core, global.ng.common, global.ng.router, global.ng.forms, global.ng.common.http, global.ng['flex-layout'], global.ng.platformBrowser.animations, global.ng.material, global.store, global.effects, global.form, global.rxjs.operators, global.rxjs, global.shared, global.authentication, global.rxjs.BehaviorSubject, global.config, global.rxjs.Observable));
}(this, function (exports, core, common, router, forms, http, flexLayout, animations, material, store, effects, form, operators, rxjs, shared, authentication, BehaviorSubject, config, Observable) { 'use strict';

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
    var UserModel = /** @class */ (function () {
        function UserModel() {
            this.Roles = [];
            this.Groups = [];
        }
        return UserModel;
    }());
    if (false) {
        /** @type {?} */
        UserModel.prototype._id;
        /** @type {?} */
        UserModel.prototype.DisplayName;
        /** @type {?} */
        UserModel.prototype.Email;
        /** @type {?} */
        UserModel.prototype.Roles;
        /** @type {?} */
        UserModel.prototype.Groups;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function UserModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        UserModuleConfig.prototype.server;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.env;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.forms;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.dashboardLinks;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.responseToUserInfo;
        /** @type {?|undefined} */
        UserModuleConfig.prototype.mapUserDisplayName;
    }
    var ɵ0 = /**
     * @param {?} user$
     * @return {?}
     */
    function (user$) { return user$; }, ɵ1 = /**
     * @param {?} user$
     * @return {?}
     */
    function (user$) { return user$.pipe(operators.map((/**
     * @param {?} user
     * @return {?}
     */
    function (user) { return user.Username; }))); };
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        server: "frontend_server",
        env: {
            production: false,
            frontend_server: "user/module/frontend/server/did/not/set",
            server: "user/module/server/did/not/set"
        },
        endpoints: {
            // resetPasswordRequest: '',
            changePassword: "",
            editProfile: "",
            getAccountInfo: "",
            profileInformation: ""
            // resetPassword: '',
        },
        forms: {
            profile_edit: ""
        },
        dashboardLinks: [],
        responseToUserInfo: (ɵ0),
        mapUserDisplayName: (ɵ1)
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("UserModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserConfigurationService = /** @class */ (function () {
        function UserConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new BehaviorSubject.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getUserModuleConfig).subscribe((/**
             * @param {?} userConfig
             * @return {?}
             */
            function (userConfig) {
                if (!userConfig)
                    return;
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            }));
        }
        Object.defineProperty(UserConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        UserConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        UserConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        /** @nocollapse */ UserConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN), core.ɵɵinject(store.Store)); }, token: UserConfigurationService, providedIn: "root" });
        return UserConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserConfigurationService.prototype._config;
        /** @type {?} */
        UserConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        UserConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProfileViewActionTypes = {
        GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
        GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
        GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
        GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
    };
    var GetProfile = /** @class */ (function () {
        function GetProfile() {
            this.type = ProfileViewActionTypes.GET_PROFILE;
        }
        return GetProfile;
    }());
    if (false) {
        /** @type {?} */
        GetProfile.prototype.type;
    }
    var GetProfileStart = /** @class */ (function () {
        function GetProfileStart() {
            this.type = ProfileViewActionTypes.GET_PROFILE_START;
        }
        return GetProfileStart;
    }());
    if (false) {
        /** @type {?} */
        GetProfileStart.prototype.type;
    }
    var GetProfileSucceed = /** @class */ (function () {
        function GetProfileSucceed(payload) {
            this.payload = payload;
            this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
        }
        return GetProfileSucceed;
    }());
    if (false) {
        /** @type {?} */
        GetProfileSucceed.prototype.type;
        /** @type {?} */
        GetProfileSucceed.prototype.payload;
    }
    var GetProfileFailed = /** @class */ (function () {
        function GetProfileFailed() {
            this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
        }
        return GetProfileFailed;
    }());
    if (false) {
        /** @type {?} */
        GetProfileFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var UserActionTypes = {
        USER_SELECTED: "[USER] USER_SELECTED",
        REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
    };
    var UserSelectedAction = /** @class */ (function () {
        function UserSelectedAction(payload) {
            this.payload = payload;
            this.type = UserActionTypes.USER_SELECTED;
        }
        return UserSelectedAction;
    }());
    if (false) {
        /** @type {?} */
        UserSelectedAction.prototype.type;
        /** @type {?} */
        UserSelectedAction.prototype.payload;
    }
    var RefreshUserInfoAction = /** @class */ (function () {
        function RefreshUserInfoAction(payload) {
            this.payload = payload;
            this.type = UserActionTypes.REFRESH_USER_INFO;
        }
        return RefreshUserInfoAction;
    }());
    if (false) {
        /** @type {?} */
        RefreshUserInfoAction.prototype.type;
        /** @type {?} */
        RefreshUserInfoAction.prototype.payload;
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
        /** @type {?} */
        State.prototype.loaded;
        /** @type {?} */
        State.prototype.data;
    }
    var ɵ0$1 = new UserModel();
    /** @type {?} */
    var initialState = {
        loaded: false,
        data: ɵ0$1
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function userReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case UserActionTypes.USER_SELECTED: {
                return __assign({}, state, { loaded: true, data: action.payload });
            }
            case UserActionTypes.REFRESH_USER_INFO: {
                return __assign({}, state, { loaded: true, data: action.payload });
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getAccountInfo = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.data; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileViewModel;
    (function (ProfileViewModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return {};
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        Username: new forms.FormControl("", [forms.Validators.minLength(8), forms.Validators.required])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        ProfileViewModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.Email;
        }
        var Response = /** @class */ (function (_super) {
            __extends(Response, _super);
            function Response() {
                return _super.call(this) || this;
            }
            return Response;
        }(UserModel));
        ProfileViewModel.Response = Response;
    })(ProfileViewModel || (ProfileViewModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditProfile_ApiModel;
    (function (EditProfile_ApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            Request.prototype.getRequestBody = /**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            function () {
                return (/** @type {?} */ (this));
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        Email: new forms.FormControl(null, [forms.Validators.required]),
                        Roles: new forms.FormControl(null, [forms.Validators.required]),
                        Groups: new forms.FormControl(null, [forms.Validators.required])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditProfile_ApiModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.Email;
            /** @type {?} */
            Request.prototype.Roles;
            /** @type {?} */
            Request.prototype.Groups;
        }
        var Response = /** @class */ (function () {
            function Response(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @return {?}
             */
            Response.prototype.extractData = /**
             * @return {?}
             */
            function () {
                return this.Result.User;
            };
            return Response;
        }());
        EditProfile_ApiModel.Response = Response;
        if (false) {
            /** @type {?} */
            Response.prototype.Result;
        }
    })(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserService = /** @class */ (function () {
        function UserService(http, store, configurationService) {
            var _this = this;
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.configurationService.config$.subscribe((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return (_this.config = config); }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.store.dispatch(new GetProfile());
            }), 999);
        }
        /**
         * @return {?}
         */
        UserService.prototype.getAccountInfo = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.profileInformation != ""; })), operators.take(1), operators.combineLatest(this.store.select(authentication.getUser)), operators.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), config = _b[0], user = _b[1];
                return user != undefined;
            })), operators.switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), config = _b[0], user = _b[1];
                return _this.http
                    .get(shared.stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                    user: user || {}
                }))
                    .let(config.responseToUserInfo)
                    .pipe(operators.map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    /** @type {?} */
                    var _user = Object.assign({}, response);
                    if (_user.Role) {
                        _user.Roles = [_user.Role];
                    }
                    return _user;
                })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return rxjs.of(false); })));
            })));
        };
        /**
         * @param {?} data
         * @return {?}
         */
        UserService.prototype.editProfile = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var model = new EditProfile_ApiModel.Request(data);
            return this.http
                .put(shared.stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
                .pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return new EditProfile_ApiModel.Response(response).extractData(); })));
        };
        // TODO: remove
        // TODO: remove
        /**
         * @param {?} data
         * @return {?}
         */
        UserService.prototype.getInfo = 
        // TODO: remove
        /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var model = new ProfileViewModel.Request(data);
            return this.http
                .get(shared.stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
                .pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; })));
        };
        /**
         * @param {?} role
         * @return {?}
         */
        UserService.prototype.is_role = /**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            return this.store
                .select(getAccountInfo)
                .pipe(operators.filter((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user && user.Roles != undefined; })), operators.take(1), operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.Roles.indexOf(role) > -1; })));
        };
        UserService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: UserConfigurationService }
        ]; };
        /** @nocollapse */ UserService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(UserConfigurationService)); }, token: UserService, providedIn: "root" });
        return UserService;
    }());
    if (false) {
        /** @type {?} */
        UserService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        UserService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        UserService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        UserService.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EditProfileActionTypes = {
        EDIT_PROFILE: "[USER][PASSWORD] EDIT_PROFILE",
        EDIT_PROFILE_START: "[USER][PASSWORD] EDIT_PROFILE_START",
        EDIT_PROFILE_SUCCEED: "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
        EDIT_PROFILE_FAILED: "[USER][PASSWORD] EDIT_PROFILE_FAILED",
    };
    var EditProfile = /** @class */ (function () {
        function EditProfile(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE;
        }
        return EditProfile;
    }());
    if (false) {
        /** @type {?} */
        EditProfile.prototype.type;
        /** @type {?} */
        EditProfile.prototype.payload;
    }
    var EditProfileStart = /** @class */ (function () {
        function EditProfileStart(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE_START;
        }
        return EditProfileStart;
    }());
    if (false) {
        /** @type {?} */
        EditProfileStart.prototype.type;
        /** @type {?} */
        EditProfileStart.prototype.payload;
    }
    var EditProfileSucceed = /** @class */ (function () {
        function EditProfileSucceed(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
        }
        return EditProfileSucceed;
    }());
    if (false) {
        /** @type {?} */
        EditProfileSucceed.prototype.type;
        /** @type {?} */
        EditProfileSucceed.prototype.payload;
    }
    var EditProfileFailed = /** @class */ (function () {
        function EditProfileFailed() {
            this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
        }
        return EditProfileFailed;
    }());
    if (false) {
        /** @type {?} */
        EditProfileFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EditProfileEffects = /** @class */ (function () {
        function EditProfileEffects(actions$, router, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            this.EditProfileRequest$ = this.actions$.pipe(effects.ofType(EditProfileActionTypes.EDIT_PROFILE), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new EditProfileStart(data); })));
            this.RequestEditProfileLink$ = this.actions$.pipe(effects.ofType(EditProfileActionTypes.EDIT_PROFILE_START), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.service.editProfile(data); })), operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new EditProfileSucceed(res); })), operators.catchError((/**
             * @return {?}
             */
            function () { return rxjs.of(new EditProfileFailed()); })));
            // .switchMap((data: EditProfile_ApiModel.Request) => {
            // 	return this.service
            // 		.editProfile(data)
            // 		.map((res) => new EditProfileSucceed(res))
            // 		.catch(() => of(new EditProfileFailed()));
            // });
            this.goToView$ = this.actions$.pipe(effects.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED), operators.map((/**
             * @return {?}
             */
            function () {
                _this.router.navigate(["/user/profile"]);
                return new GetProfile();
            })));
        }
        EditProfileEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        EditProfileEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: UserService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditProfileEffects.prototype, "goToView$", void 0);
        return EditProfileEffects;
    }());
    if (false) {
        /** @type {?} */
        EditProfileEffects.prototype.EditProfileRequest$;
        /** @type {?} */
        EditProfileEffects.prototype.RequestEditProfileLink$;
        /** @type {?} */
        EditProfileEffects.prototype.goToView$;
        /**
         * @type {?}
         * @private
         */
        EditProfileEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        EditProfileEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        EditProfileEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileViewEffects = /** @class */ (function () {
        function ProfileViewEffects(actions$, userService) {
            var _this = this;
            this.actions$ = actions$;
            this.userService = userService;
            this.ProfileRequest$ = this.actions$.pipe(effects.ofType(ProfileViewActionTypes.GET_PROFILE), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new GetProfileStart(); })));
            this.getProfile$ = this.actions$.pipe(effects.ofType(ProfileViewActionTypes.GET_PROFILE_START), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.userService
                    .getAccountInfo()
                    .pipe(operators.map((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return new GetProfileSucceed(res); })), operators.catchError((/**
                 * @return {?}
                 */
                function () { return rxjs.of(new GetProfileFailed()); })));
            })));
            this.refreshUserInfo$ = this.actions$.pipe(effects.ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED), operators.pluck("payload"), operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new RefreshUserInfoAction(data); })));
        }
        ProfileViewEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ProfileViewEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: UserService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "getProfile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
        return ProfileViewEffects;
    }());
    if (false) {
        /** @type {?} */
        ProfileViewEffects.prototype.ProfileRequest$;
        /** @type {?} */
        ProfileViewEffects.prototype.getProfile$;
        /** @type {?} */
        ProfileViewEffects.prototype.refreshUserInfo$;
        /**
         * @type {?}
         * @private
         */
        ProfileViewEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        ProfileViewEffects.prototype.userService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserEffects = /** @class */ (function () {
        function UserEffects(actions$, router, service) {
            this.actions$ = actions$;
            this.router = router;
            this.service = service;
            // @Effect()
            // updateProfileInformation$ = this.actions$.pipe(
            // ofType(SignInActionTypes.SIGNIN_SUCCEED),
            // 	map(action => action.payload),
            // 	map(user => {
            // 		return new GetProfileSucceed(user);
            // 	})
            // );
            this.getAccountInfo$ = this.actions$.pipe(effects.ofType(authentication.SignInActionTypes.SIGNIN_SUCCEED), operators.map((/**
             * @return {?}
             */
            function () {
                return new GetProfile();
            })));
            this.signout$ = this.actions$.pipe(effects.ofType(authentication.SignInActionTypes.SIGNOUT), operators.map((/**
             * @return {?}
             */
            function () { return new RefreshUserInfoAction((/** @type {?} */ ({}))); })));
        }
        UserEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UserEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: UserService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UserEffects.prototype, "getAccountInfo$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UserEffects.prototype, "signout$", void 0);
        return UserEffects;
    }());
    if (false) {
        /** @type {?} */
        UserEffects.prototype.getAccountInfo$;
        /** @type {?} */
        UserEffects.prototype.signout$;
        /**
         * @type {?}
         * @private
         */
        UserEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        UserEffects.prototype.router;
        /**
         * @type {?}
         * @private
         */
        UserEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ResetPasswordRequestActionTypes = {
        GET_RESET_PASSWORD_LINK: "[USER][PASSWORD] GET_RESET_PASSWORD_LINK",
        RESET_PASSWORD_LINK_REQUEST_START: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START",
        RESET_PASSWORD_LINK_REQUEST_SUCCEED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED",
        RESET_PASSWORD_LINK_REQUEST_FAILED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED",
        DISABLE_GET_LINK: "[USER][PASSWORD] DISABLE_GET_LINK",
        ENABLE_GET_LINK: "[USER][PASSWORD] ENABLE_GET_LINK",
        MAXIMUM_TRY_HAPPEND: "[USER][PASSWORD] MAXIMUM_TRY_HAPPEND",
        PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
        PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
    };
    var GetResetPasswordLink = /** @class */ (function () {
        function GetResetPasswordLink(payload) {
            this.payload = payload;
            this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
        }
        return GetResetPasswordLink;
    }());
    if (false) {
        /** @type {?} */
        GetResetPasswordLink.prototype.type;
        /** @type {?} */
        GetResetPasswordLink.prototype.payload;
    }
    var ResetPasswordLinkRequestStart = /** @class */ (function () {
        function ResetPasswordLinkRequestStart(payload) {
            this.payload = payload;
            this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
        }
        return ResetPasswordLinkRequestStart;
    }());
    if (false) {
        /** @type {?} */
        ResetPasswordLinkRequestStart.prototype.type;
        /** @type {?} */
        ResetPasswordLinkRequestStart.prototype.payload;
    }
    var ResetPasswordLinkRequestSucceed = /** @class */ (function () {
        function ResetPasswordLinkRequestSucceed() {
            this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
        }
        return ResetPasswordLinkRequestSucceed;
    }());
    if (false) {
        /** @type {?} */
        ResetPasswordLinkRequestSucceed.prototype.type;
    }
    var ResetPasswordLinkRequestFailed = /** @class */ (function () {
        function ResetPasswordLinkRequestFailed() {
            this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
        }
        return ResetPasswordLinkRequestFailed;
    }());
    if (false) {
        /** @type {?} */
        ResetPasswordLinkRequestFailed.prototype.type;
    }
    var DisableGetLink = /** @class */ (function () {
        function DisableGetLink() {
            this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
        }
        return DisableGetLink;
    }());
    if (false) {
        /** @type {?} */
        DisableGetLink.prototype.type;
    }
    var EnableGetLink = /** @class */ (function () {
        function EnableGetLink() {
            this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
        }
        return EnableGetLink;
    }());
    if (false) {
        /** @type {?} */
        EnableGetLink.prototype.type;
    }
    var MaximumTryHappend = /** @class */ (function () {
        function MaximumTryHappend() {
            this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
        }
        return MaximumTryHappend;
    }());
    if (false) {
        /** @type {?} */
        MaximumTryHappend.prototype.type;
    }
    var PasswordChangedSucceed = /** @class */ (function () {
        function PasswordChangedSucceed() {
            this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
        }
        return PasswordChangedSucceed;
    }());
    if (false) {
        /** @type {?} */
        PasswordChangedSucceed.prototype.type;
    }
    var PasswordChangedFailed = /** @class */ (function () {
        function PasswordChangedFailed(payload) {
            this.payload = payload;
            this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
        }
        return PasswordChangedFailed;
    }());
    if (false) {
        /** @type {?} */
        PasswordChangedFailed.prototype.type;
        /** @type {?} */
        PasswordChangedFailed.prototype.payload;
    }

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
        State$1.prototype.numberOfRequested;
        /** @type {?} */
        State$1.prototype.lastRequestedTime;
        /** @type {?} */
        State$1.prototype.disable;
    }
    /** @type {?} */
    var initialState$1 = {
        numberOfRequested: 0,
        lastRequestedTime: null,
        disable: false
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) { state = initialState$1; }
        switch (action.type) {
            case ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
                return __assign({}, state);
            }
            case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
                return __assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
            }
            case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
                return __assign({}, state);
            }
            case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
                return __assign({}, state, { disable: true });
            }
            case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
                return __assign({}, state, { disable: false });
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getNumberOfRequeseted = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.numberOfRequested; });
    /** @type {?} */
    var getStatus = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.disable; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ChangePasswordActionTypes = {
        CHANGE_PASSWORD: "[USER][PASSWORD] CHANGE_PASSWORD",
        PASSWORD_CHANGED_START: "[USER][PASSWORD] PASSWORD_CHANGED_START",
        PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
        PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
    };
    var ChangePassword = /** @class */ (function () {
        function ChangePassword(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
        }
        return ChangePassword;
    }());
    if (false) {
        /** @type {?} */
        ChangePassword.prototype.type;
        /** @type {?} */
        ChangePassword.prototype.payload;
    }
    var ChangePasswordStart = /** @class */ (function () {
        function ChangePasswordStart(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
        }
        return ChangePasswordStart;
    }());
    if (false) {
        /** @type {?} */
        ChangePasswordStart.prototype.type;
        /** @type {?} */
        ChangePasswordStart.prototype.payload;
    }
    var ChangePasswordSucceed = /** @class */ (function () {
        function ChangePasswordSucceed(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
        }
        return ChangePasswordSucceed;
    }());
    if (false) {
        /** @type {?} */
        ChangePasswordSucceed.prototype.type;
        /** @type {?} */
        ChangePasswordSucceed.prototype.payload;
    }
    var ChangePasswordFailed = /** @class */ (function () {
        function ChangePasswordFailed() {
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
        }
        return ChangePasswordFailed;
    }());
    if (false) {
        /** @type {?} */
        ChangePasswordFailed.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State$2() { }
    if (false) {
        /** @type {?} */
        State$2.prototype.status;
    }
    /** @type {?} */
    var initialState$2 = {
        status: "pristine"
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$1(state, action) {
        if (state === void 0) { state = initialState$2; }
        switch (action.type) {
            case ChangePasswordActionTypes.CHANGE_PASSWORD: {
                return {
                    status: "dirty"
                };
            }
            case ChangePasswordActionTypes.PASSWORD_CHANGED_START: {
                return {
                    status: "pending"
                };
            }
            case ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED: {
                return {
                    status: "succeed"
                };
            }
            case ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED: {
                return {
                    status: "failed"
                };
            }
            default: {
                return initialState$2;
            }
        }
    }
    /** @type {?} */
    var getStatus$1 = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.status; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State$3() { }
    if (false) {
        /** @type {?} */
        State$3.prototype.status;
    }
    /** @type {?} */
    var initialState$3 = {
        status: "pristine"
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$2(state, action) {
        if (state === void 0) { state = initialState$3; }
        switch (action.type) {
            case EditProfileActionTypes.EDIT_PROFILE: {
                return {
                    status: "dirty"
                };
            }
            case EditProfileActionTypes.EDIT_PROFILE_START: {
                return {
                    status: "pending"
                };
            }
            case EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
                return {
                    status: "succeed"
                };
            }
            case EditProfileActionTypes.EDIT_PROFILE_FAILED: {
                return {
                    status: "failed"
                };
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getStatus$2 = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.status; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SearchActionTypes = {
        SEARCH: "[USER][SEARCH] SEARCH",
        SEARCH_START: "[USER][SEARCH] SEARCH_START",
        SEARCH_SUCCEED: "[USER][SEARCH] SEARCH_SUCCEED",
        SEARCH_FAILED: "[USER][SEARCH] SEARCH_FAILED",
        CLEAR_SEARCHED_USER: "[USER][SEARCH] CLEAR_SEARCHED_USER",
    };
    var Search = /** @class */ (function () {
        function Search(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH;
        }
        return Search;
    }());
    if (false) {
        /** @type {?} */
        Search.prototype.type;
        /** @type {?} */
        Search.prototype.payload;
    }
    var SearchStartAction = /** @class */ (function () {
        function SearchStartAction(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH_START;
        }
        return SearchStartAction;
    }());
    if (false) {
        /** @type {?} */
        SearchStartAction.prototype.type;
        /** @type {?} */
        SearchStartAction.prototype.payload;
    }
    var SearchSucceed = /** @class */ (function () {
        function SearchSucceed(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH_SUCCEED;
        }
        return SearchSucceed;
    }());
    if (false) {
        /** @type {?} */
        SearchSucceed.prototype.type;
        /** @type {?} */
        SearchSucceed.prototype.payload;
    }
    var SearchFailed = /** @class */ (function () {
        function SearchFailed() {
            this.type = SearchActionTypes.SEARCH_FAILED;
        }
        return SearchFailed;
    }());
    if (false) {
        /** @type {?} */
        SearchFailed.prototype.type;
    }
    var ClearSearchedUser = /** @class */ (function () {
        function ClearSearchedUser() {
            this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
        }
        return ClearSearchedUser;
    }());
    if (false) {
        /** @type {?} */
        ClearSearchedUser.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function State$4() { }
    if (false) {
        /** @type {?} */
        State$4.prototype.status;
        /** @type {?} */
        State$4.prototype.data;
    }
    var ɵ0$2 = ({});
    /** @type {?} */
    var initialState$4 = {
        status: "pristine",
        data: (/** @type {?} */ (ɵ0$2))
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer$3(state, action) {
        if (state === void 0) { state = initialState$4; }
        switch (action.type) {
            case SearchActionTypes.SEARCH: {
                return __assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
            }
            case SearchActionTypes.SEARCH_START: {
                return __assign({}, state, { status: "pending" });
            }
            case SearchActionTypes.SEARCH_SUCCEED: {
                return __assign({}, state, { status: "succeed", data: action.payload });
            }
            case SearchActionTypes.SEARCH_FAILED: {
                return __assign({}, state, { status: "failed" });
            }
            case SearchActionTypes.CLEAR_SEARCHED_USER: {
                return initialState$4;
            }
            default: {
                return state;
            }
        }
    }
    /** @type {?} */
    var getStatus$3 = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.status; });
    /** @type {?} */
    var getAccountInfo$1 = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.data; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function UserState() { }
    if (false) {
        /** @type {?} */
        UserState.prototype.user;
        /** @type {?} */
        UserState.prototype.resetPasswordRequest;
        /** @type {?} */
        UserState.prototype.searchView;
        /** @type {?} */
        UserState.prototype.changePassword;
        /** @type {?} */
        UserState.prototype.editProfile;
    }
    /** @type {?} */
    var UserReducers = {
        user: userReducer,
        resetPasswordRequest: reducer,
        changePassword: reducer$1,
        searchView: reducer$3,
        editProfile: reducer$2
    };
    /**
     * @record
     */
    function AppState() { }
    if (false) {
        /** @type {?} */
        AppState.prototype.user;
    }
    //#region selectors
    /** @type {?} */
    var selectFeatureState = store.createFeatureSelector("user");
    var ɵ0$3 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.user.loaded; };
    /** @type {?} */
    var getUserInforamtionStatus = store.createSelector(selectFeatureState, (ɵ0$3));
    var ɵ1$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.user.loaded; };
    /** @type {?} */
    var isSignedIn = store.createSelector(selectFeatureState, (ɵ1$1));
    var ɵ2 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.resetPasswordRequest; };
    /** @type {?} */
    var selectResetPasswordRequestState = store.createSelector(selectFeatureState, (ɵ2));
    /** @type {?} */
    var getNumberOfRequeseted$1 = store.createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
    /** @type {?} */
    var getResetPasswordRequestStatus = store.createSelector(selectResetPasswordRequestState, getStatus);
    //#region user
    var ɵ3 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.user; };
    /** @type {?} */
    var selectUserInformaionState = store.createSelector(selectFeatureState, (ɵ3));
    /** @type {?} */
    var getAccountInfo$2 = store.createSelector(selectUserInformaionState, getAccountInfo);
    //#endregion
    //#region search
    var ɵ4 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.searchView; };
    /** @type {?} */
    var selectSearchState = store.createSelector(selectFeatureState, (ɵ4));
    /** @type {?} */
    var getSearchStatus = store.createSelector(selectSearchState, getStatus$3);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchComponent = /** @class */ (function () {
        function SearchComponent(store) {
            this.store = store;
            this.formGroup = ProfileViewModel.Request.formGroup;
            this.userDataLoaded$ = new rxjs.BehaviorSubject(false);
            this.userNotFound$ = new rxjs.BehaviorSubject(false);
            this.user = this.store.select(getAccountInfo$2);
            this.userStatus$ = this.store.select(getSearchStatus);
        }
        /**
         * @return {?}
         */
        SearchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.userStatus$.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); }));
        };
        /**
         * @return {?}
         */
        SearchComponent.prototype.search = /**
         * @return {?}
         */
        function () {
            if (!this.formGroup.valid)
                return;
            this.store.dispatch(new Search(this.formGroup.value));
        };
        SearchComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "search",
                        template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\r\n        </div>\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).Email}} -->\r\n        </div>\r\n      </div>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SearchComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return SearchComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchComponent.prototype.user;
        /** @type {?} */
        SearchComponent.prototype.userStatus$;
        /** @type {?} */
        SearchComponent.prototype.formGroup;
        /** @type {?} */
        SearchComponent.prototype.userDataLoaded$;
        /** @type {?} */
        SearchComponent.prototype.userNotFound$;
        /**
         * @type {?}
         * @private
         */
        SearchComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangePasswordComponent = /** @class */ (function () {
        function ChangePasswordComponent() {
            this.submited = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ChangePasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ChangePasswordComponent.prototype.submit = /**
         * @return {?}
         */
        function () { };
        /**
         * @return {?}
         */
        ChangePasswordComponent.prototype.changePassword = /**
         * @return {?}
         */
        function () {
            if (!this.formGroup.valid)
                return;
            this.submited.emit(this.formGroup.value);
        };
        ChangePasswordComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "user-change-password",
                        template: "<div fxFlex=\"450px\">\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-form-field fxFlexFill>\r\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlexFill>\r\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n      <mat-card-actions fxLayoutAlign=\"center center\">\r\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\r\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ChangePasswordComponent.ctorParameters = function () { return []; };
        ChangePasswordComponent.propDecorators = {
            formGroup: [{ type: core.Input }],
            submited: [{ type: core.Output }]
        };
        return ChangePasswordComponent;
    }());
    if (false) {
        /** @type {?} */
        ChangePasswordComponent.prototype.formGroup;
        /** @type {?} */
        ChangePasswordComponent.prototype.submited;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileEditComponent = /** @class */ (function () {
        function ProfileEditComponent(router) {
            this.router = router;
            this.submited = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        ProfileEditComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} form
         * @return {?}
         */
        ProfileEditComponent.prototype.editProfile = /**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            if (!form.valid)
                return;
            this.submited.emit(form.value);
        };
        /**
         * @return {?}
         */
        ProfileEditComponent.prototype.goback = /**
         * @return {?}
         */
        function () {
            this.router.navigate([".."]);
        };
        ProfileEditComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "profile-edit",
                        template: "<div fxFlex=\"450px\">\r\n\r\n  \r\n  <ngs-form-view #form [id]=\"formId\" [card]=\"true\" (accept)=\"editProfile(form.formGroup)\" (cancel)=\"goback()\" ></ngs-form-view>\r\n  <!-- <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" routerLink=\"..\" mat-button color=\"primary\">\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form> -->\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ProfileEditComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        ProfileEditComponent.propDecorators = {
            submited: [{ type: core.Output }],
            userInfo: [{ type: core.Input }],
            formId: [{ type: core.Input }],
            roles$: [{ type: core.Input, args: ["roles",] }],
            groups: [{ type: core.Input }]
        };
        return ProfileEditComponent;
    }());
    if (false) {
        /** @type {?} */
        ProfileEditComponent.prototype.submited;
        /** @type {?} */
        ProfileEditComponent.prototype.userInfo;
        /** @type {?} */
        ProfileEditComponent.prototype.formId;
        /** @type {?} */
        ProfileEditComponent.prototype.roles$;
        /** @type {?} */
        ProfileEditComponent.prototype.groups;
        /**
         * @type {?}
         * @private
         */
        ProfileEditComponent.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardLinksComponent = /** @class */ (function () {
        function DashboardLinksComponent(userConfigurationService, store) {
            this.userConfigurationService = userConfigurationService;
            this.store = store;
            this.links$ = this.userConfigurationService.config$.pipe(operators.map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.dashboardLinks; })));
            this.links = [
                {
                    title: "مشاهده حساب کاربری",
                    route: "/user/panel/profile",
                    // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                    icon: "person"
                }
                // ,
                // {
                // 	route: "/user/panel/password/change",
                // 	title: "تغییر کلمه عبور",
                // 	// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                // 	icon: "security"
                // }
            ];
        }
        /**
         * @return {?}
         */
        DashboardLinksComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () { };
        DashboardLinksComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "user-dashboard-links",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n      <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                      <mat-icon>person</mat-icon>\r\n                      <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</span>\r\n                    </mat-card-title>\r\n                 \r\n                  </mat-card-header>\r\n          <div fxLayout='row' fxLayoutWrap id=\"con\">\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n</div>\r\n</mat-card>\r\n</div>\r\n</div>",
                        styles: ["#con [fxflex]{margin-right:25px}:host{width:100%}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                    }] }
        ];
        /** @nocollapse */
        DashboardLinksComponent.ctorParameters = function () { return [
            { type: UserConfigurationService },
            { type: store.Store }
        ]; };
        return DashboardLinksComponent;
    }());
    if (false) {
        /** @type {?} */
        DashboardLinksComponent.prototype.links;
        /** @type {?} */
        DashboardLinksComponent.prototype.links$;
        /**
         * @type {?}
         * @private
         */
        DashboardLinksComponent.prototype.userConfigurationService;
        /**
         * @type {?}
         * @private
         */
        DashboardLinksComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordRequestComponent = /** @class */ (function () {
        function ResetPasswordRequestComponent(snackBar) {
            this.snackBar = snackBar;
            this.submitted = new core.EventEmitter();
            this.maximumResendingHappend$ = new BehaviorSubject.BehaviorSubject(false);
            this.timer$ = Observable.Observable.timer(0, 100).pipe(operators.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i + 1; })), operators.takeWhile((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i * 100 <= 3000; })), operators.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return 3000 - i * 100; })));
        }
        Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
            set: /**
             * @param {?} isPending
             * @return {?}
             */
            function (isPending) {
                if (isPending) {
                    this.formGroup.disable();
                }
                this.formGroup.enable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ResetPasswordRequestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.numberOfRequested.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data > 2) {
                    _this.maximumResendingHappend$.next(true);
                }
            }));
        };
        /**
         * @return {?}
         */
        ResetPasswordRequestComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            if (this.formGroup.valid) {
                this.submitted.emit(this.formGroup.value);
                /** @type {?} */
                var message = this.maximumResendingHappend$.getValue()
                    ? "عدم امکان ..."
                    : "پیامک جدید برای شما ارسال گردید.";
                this.snackBar.open(message, "", {
                    duration: 3000
                });
            }
        };
        ResetPasswordRequestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "user-reset-password-request",
                        template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\r\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\r\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\r\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\r\n      </mat-radio-group>\r\n      <mat-form-field fxFlexFill>\r\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\r\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\r\n        <span *ngIf='!(canRequestPin | async)'>\r\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\r\n        </span>\r\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\r\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\r\n        </div>\r\n        <div *ngIf='(maximumResendingHappend$ | async)'>\r\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\r\n        </div>-->\r\n      </button>\r\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ResetPasswordRequestComponent.ctorParameters = function () { return [
            { type: material.MatSnackBar }
        ]; };
        ResetPasswordRequestComponent.propDecorators = {
            submitted: [{ type: core.Output }],
            formGroup: [{ type: core.Input }],
            numberOfRequested: [{ type: core.Input }],
            canRequestPin: [{ type: core.Input }],
            pending: [{ type: core.Input }]
        };
        return ResetPasswordRequestComponent;
    }());
    if (false) {
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.submitted;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.formGroup;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.numberOfRequested;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.canRequestPin;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.timer$;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.maximumResendingHappend$;
        /** @type {?} */
        ResetPasswordRequestComponent.prototype.snackBar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureContainerComponent = /** @class */ (function () {
        function FeatureContainerComponent(route, store) {
            var _this = this;
            this.route = route;
            this.store = store;
            this.route.params.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                /** @type {?} */
                var model = new ProfileViewModel.Request((/** @type {?} */ ({ Email: params.Email })));
                _this.store.dispatch(new Search(model));
            }));
        }
        FeatureContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        /** @nocollapse */
        FeatureContainerComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return FeatureContainerComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FeatureContainerComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        FeatureContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangePasswordModel;
    (function (ChangePasswordModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                var _this = this;
                if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
                Object.keys(initValue).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return (_this[key] = initValue[key]); }));
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
            function () {
                return {
                    Password: this.Password
                };
            };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */
                function () {
                    return new forms.FormGroup({
                        Password: new forms.FormControl(null, [forms.Validators.required, forms.Validators.minLength(7)]),
                        Confirm: new forms.FormControl(null, [forms.Validators.required, shared.MatchValidator("Password")])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        ChangePasswordModel.Request = Request;
        if (false) {
            /** @type {?} */
            Request.prototype.Username;
            /** @type {?} */
            Request.prototype.Password;
        }
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        ChangePasswordModel.Response = Response;
    })(ChangePasswordModel || (ChangePasswordModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChangePasswordContainerComponent = /** @class */ (function () {
        function ChangePasswordContainerComponent(route, store) {
            this.route = route;
            this.store = store;
            this.formGroup = ChangePasswordModel.Request.formGroup;
            this.ChangePasswordModel = new ChangePasswordModel.Request();
        }
        /**
         * @return {?}
         */
        ChangePasswordContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.store.select(getAccountInfo$2).subscribe((/**
             * @param {?} userInfo
             * @return {?}
             */
            function (userInfo) {
                if (!userInfo)
                    return;
                // TODO:
                // this.ChangePasswordModel.Username = userInfo.Username;
            }));
        };
        /**
         * @param {?} event
         * @return {?}
         */
        ChangePasswordContainerComponent.prototype.changePassword = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
            this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
        };
        ChangePasswordContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                    }] }
        ];
        /** @nocollapse */
        ChangePasswordContainerComponent.ctorParameters = function () { return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ]; };
        return ChangePasswordContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        ChangePasswordContainerComponent.prototype.formGroup;
        /** @type {?} */
        ChangePasswordContainerComponent.prototype.ChangePasswordModel;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordContainerComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        ChangePasswordContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileEditContainerComponent = /** @class */ (function () {
        function ProfileEditContainerComponent(store, configService) {
            this.store = store;
            this.configService = configService;
            this.userInforamation$ = this.store.select(getAccountInfo$2);
            this.roles$ = this.store
                .select(config.getAppConfig)
                .pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config != undefined; })), operators.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.Config.Roles; })));
            // TODO:
            // this.groups = this.diagramService.getGroups();
            this.groups = rxjs.of(["test1", "test2"]);
            this.config$ = this.configService.config$;
        }
        /**
         * @return {?}
         */
        ProfileEditContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} data
         * @return {?}
         */
        ProfileEditContainerComponent.prototype.updateProfile = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this.store.dispatch(new EditProfile(data));
        };
        ProfileEditContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "profile-edit-contianer",
                        template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [userInfo]=\"userInforamation$ | async\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
                    }] }
        ];
        /** @nocollapse */
        ProfileEditContainerComponent.ctorParameters = function () { return [
            { type: store.Store },
            { type: UserConfigurationService }
        ]; };
        return ProfileEditContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        ProfileEditContainerComponent.prototype.userInforamation$;
        /** @type {?} */
        ProfileEditContainerComponent.prototype.roles$;
        /** @type {?} */
        ProfileEditContainerComponent.prototype.groups;
        /** @type {?} */
        ProfileEditContainerComponent.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        ProfileEditContainerComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        ProfileEditContainerComponent.prototype.configService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DashboardContainerComponent = /** @class */ (function () {
        // is_agent : Observable<boolean>;
        function DashboardContainerComponent(store) {
            this.store = store;
            this.user$ = this.store.select(getAccountInfo);
            // this.is_agent = signinService.is_agent();
        }
        /**
         * @return {?}
         */
        DashboardContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        DashboardContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "user-dashboard-container",
                        template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\r\n<div fxLayoutAlign=\"center\">\r\n    <router-outlet></router-outlet>\r\n</div>",
                        styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                    }] }
        ];
        /** @nocollapse */
        DashboardContainerComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return DashboardContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        DashboardContainerComponent.prototype.user$;
        /**
         * @type {?}
         * @private
         */
        DashboardContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileComponent = /** @class */ (function () {
        function ProfileComponent() {
            this.info = [];
        }
        Object.defineProperty(ProfileComponent.prototype, "information", {
            set: /**
             * @param {?} information
             * @return {?}
             */
            function (information) {
                var _this = this;
                if (!information)
                    return;
                Object.keys(information).forEach((/**
                 * @param {?} k
                 * @return {?}
                 */
                function (k) { return _this.info.push([k, information[k]]); }));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ProfileComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        ProfileComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "user-profile",
                        template: "<div fxFlex=\"450px\">\r\n  <router-outlet name=\"ngs-user-profile-view\"></router-outlet>\r\n  <router-outlet></router-outlet>\r\n  <!-- <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content *ngIf='dataStatus$ | async'>\r\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\r\n            <p fxFlex='40'>{{item[0]}}</p>\r\n            <p fxFlex='60'>{{item[1]}}</p>\r\n        </div>\r\n     \r\n    </mat-card-content>\r\n\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n    </mat-card-actions>\r\n  </mat-card> -->\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(information | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>roles</p>\r\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\r\n      </div> -->\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\r\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\r\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{sex$ | async}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\r\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\r\n      </div> -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ProfileComponent.ctorParameters = function () { return []; };
        ProfileComponent.propDecorators = {
            information: [{ type: core.Input }],
            dataStatus$: [{ type: core.Input }]
        };
        return ProfileComponent;
    }());
    if (false) {
        /** @type {?} */
        ProfileComponent.prototype.dataStatus$;
        /** @type {?} */
        ProfileComponent.prototype.info;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ProfileContainerComponent = /** @class */ (function () {
        function ProfileContainerComponent(store) {
            this.store = store;
            this.data$ = this.store.select(getAccountInfo$2);
            this.dataStatus$ = this.store.select(getUserInforamtionStatus);
        }
        /**
         * @return {?}
         */
        ProfileContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        ProfileContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<user-profile\n                [information]=\"data$ | async\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
                    }] }
        ];
        /** @nocollapse */
        ProfileContainerComponent.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return ProfileContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        ProfileContainerComponent.prototype.data$;
        /** @type {?} */
        ProfileContainerComponent.prototype.dataStatus$;
        /**
         * @type {?}
         * @private
         */
        ProfileContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsUserModule = /** @class */ (function () {
        function NgsUserModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsUserModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            return {
                ngModule: RootNgsUserModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
            };
        };
        NgsUserModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule,
                            form.NgsFormModule
                        ],
                        declarations: [
                            SearchComponent,
                            ProfileComponent,
                            ChangePasswordComponent,
                            ProfileEditComponent,
                            ProfileContainerComponent,
                            DashboardLinksComponent,
                            ResetPasswordRequestComponent,
                            FeatureContainerComponent,
                            DashboardContainerComponent,
                            ChangePasswordContainerComponent,
                            ProfileEditContainerComponent
                        ],
                        exports: []
                    },] }
        ];
        return NgsUserModule;
    }());
    var RootNgsUserModule = /** @class */ (function () {
        function RootNgsUserModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.user = "8.0.10";
        }
        RootNgsUserModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsUserModule,
                            store.StoreModule.forFeature("user", UserReducers),
                            effects.EffectsModule.forFeature([
                                // ResetPasswordRequestEffects,
                                EditProfileEffects,
                                // ChangePasswordEffects,
                                ProfileViewEffects,
                                // SearchEffects,
                                UserEffects
                            ])
                        ]
                    },] }
        ];
        /** @nocollapse */
        RootNgsUserModule.ctorParameters = function () { return []; };
        return RootNgsUserModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "user/panel",
            component: DashboardContainerComponent,
            children: [
                {
                    path: "",
                    component: DashboardLinksComponent
                },
                {
                    path: "profile",
                    component: ProfileContainerComponent
                },
                {
                    path: "profile/edit",
                    component: ProfileEditContainerComponent
                }
                // {
                // 	path: "password/change",
                // 	component: ChangePasswordContainerComponent
                // }
            ]
        },
        {
            path: "admin/user",
            children: [
                // { path: "managment", component: SearchComponent },
                {
                    path: ":Email",
                    component: FeatureContainerComponent,
                    children: [
                        {
                            path: "profile-edit",
                            component: ProfileEditContainerComponent
                        }
                        // {
                        // 	path: "change-password",
                        // 	component: ChangePasswordContainerComponent
                        // }
                    ]
                }
            ]
        }
    ];
    /** @type {?} */
    var NgsUserRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var NgsUserModuleOutlets = {
        ngs_user_profile_view: "ngs-user-profile-view",
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserFacadeService = /** @class */ (function () {
        function UserFacadeService(store, configService) {
            this.store = store;
            this.configService = configService;
        }
        /**
         * @return {?}
         */
        UserFacadeService.prototype.getDisplayName = /**
         * @return {?}
         */
        function () {
            return this.store.select(getAccountInfo$2).let(this.configService.config$.getValue().mapUserDisplayName);
            // .pipe(filter(displayName => displayName !== undefined));
        };
        /**
         * @return {?}
         */
        UserFacadeService.prototype.getInfo = /**
         * @return {?}
         */
        function () {
            return this.store.select(getAccountInfo$2);
        };
        UserFacadeService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        UserFacadeService.ctorParameters = function () { return [
            { type: store.Store },
            { type: UserConfigurationService }
        ]; };
        /** @nocollapse */ UserFacadeService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(core.ɵɵinject(store.Store), core.ɵɵinject(UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
        return UserFacadeService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserFacadeService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        UserFacadeService.prototype.configService;
    }

    exports.NgsUserModule = NgsUserModule;
    exports.NgsUserModuleOutlets = NgsUserModuleOutlets;
    exports.NgsUserRoutingModule = NgsUserRoutingModule;
    exports.UserActionTypes = UserActionTypes;
    exports.UserFacadeService = UserFacadeService;
    exports.UserModel = UserModel;
    exports.UserService = UserService;
    exports.getAccountInfo = getAccountInfo$2;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵb = RootNgsUserModule;
    exports.ɵba = ProfileViewEffects;
    exports.ɵbb = UserEffects;
    exports.ɵc = routes;
    exports.ɵd = UserReducers;
    exports.ɵf = selectFeatureState;
    exports.ɵg = selectUserInformaionState;
    exports.ɵh = SearchComponent;
    exports.ɵi = ProfileComponent;
    exports.ɵj = ChangePasswordComponent;
    exports.ɵk = ProfileEditComponent;
    exports.ɵl = ProfileContainerComponent;
    exports.ɵm = DashboardLinksComponent;
    exports.ɵn = UserConfigurationService;
    exports.ɵo = ResetPasswordRequestComponent;
    exports.ɵp = FeatureContainerComponent;
    exports.ɵq = DashboardContainerComponent;
    exports.ɵr = ChangePasswordContainerComponent;
    exports.ɵs = ProfileEditContainerComponent;
    exports.ɵt = userReducer;
    exports.ɵu = getAccountInfo;
    exports.ɵv = reducer;
    exports.ɵw = reducer$1;
    exports.ɵx = reducer$3;
    exports.ɵy = reducer$2;
    exports.ɵz = EditProfileEffects;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-user.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('@angular/material'), require('rxjs/operators'), require('@ngrx/store'), require('@soushians/shared'), require('@soushians/config'), require('@angular/material/snack-bar'), require('@angular/common'), require('@angular/router'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@ngrx/effects'), require('@soushians/form'), require('rxjs/add/operator/do')) :
    typeof define === 'function' && define.amd ? define('@soushians/authentication', ['exports', '@angular/core', '@angular/common/http', 'rxjs', '@angular/material', 'rxjs/operators', '@ngrx/store', '@soushians/shared', '@soushians/config', '@angular/material/snack-bar', '@angular/common', '@angular/router', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/forms', '@ngrx/effects', '@soushians/form', 'rxjs/add/operator/do'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians.authentication = {}), global.ng.core, global.ng.common.http, global.rxjs, global.ng.material, global.rxjs.operators, global.store, global.shared, global.config, global.ng.material['snack-bar'], global.ng.common, global.ng.router, global.ng['flex-layout'], global.ng.platformBrowser.animations, global.ng.forms, global.effects, global.form));
}(this, function (exports, core, http, rxjs, material, operators, store, shared, config, snackBar, common, router, flexLayout, animations, forms, effects, form) { 'use strict';

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
        function UserModel(params) {
            var _this = this;
            // IdentificationNo: string;
            // IdentifierType: string;
            // RegisterDate: string;
            // UserType: string;
            this.Roles = [];
            params &&
                Object.keys(params).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    if (key in params)
                        ((/** @type {?} */ (_this)))[key] = params[key];
                }));
        }
        return UserModel;
    }());
    if (false) {
        /** @type {?} */
        UserModel.prototype._id;
        /** @type {?} */
        UserModel.prototype.Username;
        /** @type {?} */
        UserModel.prototype.Email;
        /** @type {?} */
        UserModel.prototype.Roles;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var SignInActionTypes = {
        WHO_AM_I: "[AUTHENTICATION] who am i",
        SIGNUP: "[AUTHENTICATION][SIGNUP] start",
        SIGNUP_SUCCEED: "[AUTHENTICATION][SIGNUP] Success",
        SIGNUP_FAILURE: "[AUTHENTICATION][SIGNUP] Failure",
        SIGNIN: "[AUTHENTICATION] Signin",
        DO_SIGNOUT: "[AUTHENTICATION] Do Signout",
        SIGNOUT: "[AUTHENTICATION] Signout",
        SIGNIN_SUCCEED: "[AUTHENTICATION][Signin] Success",
        SIGNIN_FAILURE: "[AUTHENTICATION][Signin] Failure",
        SIGNIN_REDIRECT: "[AUTHENTICATION][Signin] Redirect",
        SIGNIN_REQUIRED: "[AUTHENTICATION][Signin] Required",
    };
    var WhoAmIAction = /** @class */ (function () {
        function WhoAmIAction() {
            this.type = SignInActionTypes.WHO_AM_I;
        }
        return WhoAmIAction;
    }());
    if (false) {
        /** @type {?} */
        WhoAmIAction.prototype.type;
    }
    /**
     * 	sign up
     */
    var /**
     * 	sign up
     */
    Signup = /** @class */ (function () {
        function Signup(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNUP;
        }
        return Signup;
    }());
    if (false) {
        /** @type {?} */
        Signup.prototype.type;
        /** @type {?} */
        Signup.prototype.payload;
    }
    var SignupSecceed = /** @class */ (function () {
        function SignupSecceed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNUP_SUCCEED;
        }
        return SignupSecceed;
    }());
    if (false) {
        /** @type {?} */
        SignupSecceed.prototype.type;
        /** @type {?} */
        SignupSecceed.prototype.payload;
    }
    var SignupFailed = /** @class */ (function () {
        function SignupFailed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNUP_FAILURE;
        }
        return SignupFailed;
    }());
    if (false) {
        /** @type {?} */
        SignupFailed.prototype.type;
        /** @type {?} */
        SignupFailed.prototype.payload;
    }
    /**
     * Sign in
     */
    var /**
     * Sign in
     */
    Signin = /** @class */ (function () {
        function Signin(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN;
        }
        return Signin;
    }());
    if (false) {
        /** @type {?} */
        Signin.prototype.type;
        /** @type {?} */
        Signin.prototype.payload;
    }
    var SigninSecceed = /** @class */ (function () {
        function SigninSecceed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_SUCCEED;
        }
        return SigninSecceed;
    }());
    if (false) {
        /** @type {?} */
        SigninSecceed.prototype.type;
        /** @type {?} */
        SigninSecceed.prototype.payload;
    }
    var SigninFailed = /** @class */ (function () {
        function SigninFailed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_FAILURE;
        }
        return SigninFailed;
    }());
    if (false) {
        /** @type {?} */
        SigninFailed.prototype.type;
        /** @type {?} */
        SigninFailed.prototype.payload;
    }
    var SigninRedirect = /** @class */ (function () {
        function SigninRedirect() {
            this.type = SignInActionTypes.SIGNIN_REDIRECT;
        }
        return SigninRedirect;
    }());
    if (false) {
        /** @type {?} */
        SigninRedirect.prototype.type;
    }
    var DoSignoutAction = /** @class */ (function () {
        function DoSignoutAction() {
            this.type = SignInActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
    }());
    if (false) {
        /** @type {?} */
        DoSignoutAction.prototype.type;
    }
    var SignoutAction = /** @class */ (function () {
        function SignoutAction() {
            this.type = SignInActionTypes.SIGNOUT;
        }
        return SignoutAction;
    }());
    if (false) {
        /** @type {?} */
        SignoutAction.prototype.type;
    }
    var SigninRequiredAction = /** @class */ (function () {
        function SigninRequiredAction() {
            this.type = SignInActionTypes.SIGNIN_REQUIRED;
        }
        return SigninRequiredAction;
    }());
    if (false) {
        /** @type {?} */
        SigninRequiredAction.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AuthenticationModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.mode;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.token;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.server;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.forms;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.env;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.signupValidator;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.afterSignin;
        /** @type {?|undefined} */
        AuthenticationModuleConfig.prototype.responseToUser;
    }
    var ɵ0 = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { return rxjs.of(true); }, ɵ1 = /**
     * @param {?} user
     * @return {?}
     */
    function (user) { }, ɵ2 = /**
     * @param {?} user
     * @return {?}
     */
    function (user) { return user; };
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        mode: "cookie-base",
        token: {
            time: 24 * 12 * 60 * 60
        },
        server: "frontend_server",
        endpoints: {
            signOut: "",
            signOutMethod: "get",
            signIn: "",
            signUp: "",
            whoAmI: ""
        },
        forms: {
            signIn: "",
            signUp: ""
        },
        env: {
            production: false,
            frontend_server: "auth/module/frontend_server/did/not/set",
            server: "auth/module/server/did/not/set"
        },
        afterSignoutRedirectTo: "/",
        signupValidator: (ɵ0),
        afterSignin: (ɵ1),
        responseToUser: (ɵ2)
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("ModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationConfigurationService = /** @class */ (function () {
        function AuthenticationConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getAuthenticationModuleConfig).subscribe((/**
             * @param {?} storeConfig
             * @return {?}
             */
            function (storeConfig) {
                if (!storeConfig)
                    return;
                _this._config = Object.assign({}, _this._config, storeConfig.Config);
                _this.config$.next(_this._config);
            }));
        }
        Object.defineProperty(AuthenticationConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        AuthenticationConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        AuthenticationConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN), core.ɵɵinject(store.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
        return AuthenticationConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AuthenticationConfigurationService.prototype._config;
        /** @type {?} */
        AuthenticationConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        AuthenticationConfigurationService.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AuthenticationActionTypes = {
        PROGRESSING_STARTED: '[AUTHENTICATION] PROGRESSING_STARTED',
        PROGRESSING_FINISHED: '[AUTHENTICATION] PROGRESSING_FINISHED',
        FAILED_HAPPENED: '[AUTHENTICATION] FAILED_HAPPENED',
    };
    var ProgressingStarted = /** @class */ (function () {
        function ProgressingStarted() {
            this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
        }
        return ProgressingStarted;
    }());
    if (false) {
        /** @type {?} */
        ProgressingStarted.prototype.type;
    }
    var ProgressingFinished = /** @class */ (function () {
        function ProgressingFinished() {
            this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
        }
        return ProgressingFinished;
    }());
    if (false) {
        /** @type {?} */
        ProgressingFinished.prototype.type;
    }
    var FailedHappened = /** @class */ (function () {
        function FailedHappened(payload) {
            this.payload = payload;
            this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
        }
        return FailedHappened;
    }());
    if (false) {
        /** @type {?} */
        FailedHappened.prototype.type;
        /** @type {?} */
        FailedHappened.prototype.payload;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NEW_CAPTCHA = '[captcha] new captcha';
    /** @type {?} */
    var TOKEN_REQUESTED = '[captcha] token_requested';
    /** @type {?} */
    var TOKEN_RECEIVED = '[captcha] token_received';
    /** @type {?} */
    var CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
    /** @type {?} */
    var CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
    /** @type {?} */
    var CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
    /** @type {?} */
    var CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
    var NewCaptcha = /** @class */ (function () {
        function NewCaptcha() {
            this.type = NEW_CAPTCHA;
        }
        return NewCaptcha;
    }());
    if (false) {
        /** @type {?} */
        NewCaptcha.prototype.type;
    }
    var TokenRequested = /** @class */ (function () {
        function TokenRequested() {
            this.type = TOKEN_REQUESTED;
        }
        return TokenRequested;
    }());
    if (false) {
        /** @type {?} */
        TokenRequested.prototype.type;
    }
    var TokenReceived = /** @class */ (function () {
        function TokenReceived(payload) {
            this.payload = payload;
            this.type = TOKEN_RECEIVED;
        }
        return TokenReceived;
    }());
    if (false) {
        /** @type {?} */
        TokenReceived.prototype.type;
        /** @type {?} */
        TokenReceived.prototype.payload;
    }
    var CaptchaImageRequested = /** @class */ (function () {
        function CaptchaImageRequested() {
            this.type = CAPTCHA_IMAGE_REQUESTED;
        }
        return CaptchaImageRequested;
    }());
    if (false) {
        /** @type {?} */
        CaptchaImageRequested.prototype.type;
    }
    var CaptchaImageLoaded = /** @class */ (function () {
        function CaptchaImageLoaded() {
            this.type = CAPTCHA_IMAGE_LOADED;
        }
        return CaptchaImageLoaded;
    }());
    if (false) {
        /** @type {?} */
        CaptchaImageLoaded.prototype.type;
    }
    var CaptchaEntered = /** @class */ (function () {
        function CaptchaEntered(payload) {
            this.payload = payload;
            this.type = CAPTCHA_ENTERED;
        }
        return CaptchaEntered;
    }());
    if (false) {
        /** @type {?} */
        CaptchaEntered.prototype.type;
        /** @type {?} */
        CaptchaEntered.prototype.payload;
    }
    var ClearCaptcha = /** @class */ (function () {
        function ClearCaptcha() {
            this.type = CLEAR_CAPTCHA;
        }
        return ClearCaptcha;
    }());
    if (false) {
        /** @type {?} */
        ClearCaptcha.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COOKIE_NAME = "ngs-authentication";
    var SigninService = /** @class */ (function () {
        function SigninService(http, store, configurationService, snackBar) {
            var _this = this;
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.snackBar = snackBar;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.store.dispatch(new WhoAmIAction()); }), 300);
        }
        /**
         * @param {?} model
         * @return {?}
         */
        SigninService.prototype.signup = /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.signUp != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.post(config.env[config.server] + config.endpoints.signUp, model);
            })), operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var user = Object.assign({}, response.Result);
                if (user.Role) {
                    user.Roles = [user.Role];
                }
                return user;
            })));
        };
        /**
         * @param {?} model
         * @return {?}
         */
        SigninService.prototype.signin = /**
         * @param {?} model
         * @return {?}
         */
        function (model) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.signIn != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.post(config.env[config.server] + config.endpoints.signIn, model); })), operators.map(this.configurationService.config.responseToUser), operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                if (user.Role) {
                    user.Roles = [user.Role];
                }
                return user;
            })), operators.tap((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                if (_this.configurationService.config.mode == "token-base")
                    shared.Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), _this.configurationService.config.token.time);
            })), operators.tap((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return _this.configurationService.config.afterSignin(user); })));
        };
        // TODO:
        // TODO:
        /**
         * @return {?}
         */
        SigninService.prototype.signout = 
        // TODO:
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = this.configurationService.config;
            /** @type {?} */
            var tokenObject = JSON.parse(shared.Cookie.getCookie(COOKIE_NAME));
            /** @type {?} */
            var endpoint = shared.stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
            /** @type {?} */
            var method = config.endpoints.signOutMethod || "get";
            if (["get", "put", "post", "patch", "delete"].indexOf(method) === -1) {
                rxjs.throwError(method + " is not valid http method. [ @starter/authentication/signinservice/singout ]");
            }
            return this.http[method](endpoint).pipe(operators.tap((/**
             * @return {?}
             */
            function () {
                shared.Cookie.deleteCookie(COOKIE_NAME);
            })));
        };
        /**
         * @return {?}
         */
        SigninService.prototype.whoAmI = /**
         * @return {?}
         */
        function () {
            var _this = this;
            debugger;
            /** @type {?} */
            var user = { Token: "--" };
            if (this.configurationService.config.mode == "token-base") {
                try {
                    user = JSON.parse(shared.Cookie.getCookie(COOKIE_NAME));
                }
                catch (error) { }
            }
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.whoAmI != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                return _this.http.get(shared.stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user: user }));
            })));
        };
        SigninService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        SigninService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: AuthenticationConfigurationService },
            { type: material.MatSnackBar }
        ]; };
        /** @nocollapse */ SigninService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SigninService_Factory() { return new SigninService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(AuthenticationConfigurationService), core.ɵɵinject(snackBar.MatSnackBar)); }, token: SigninService, providedIn: "root" });
        return SigninService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SigninService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        SigninService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        SigninService.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        SigninService.prototype.snackBar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SigninContainerComponent = /** @class */ (function () {
        function SigninContainerComponent(configurationService, store) {
            this.configurationService = configurationService;
            this.store = store;
            this.signedIn$ = new core.EventEmitter();
            this.formId$ = this.configurationService.config$.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.forms.signIn; }));
        }
        /**
         * @param {?} formValue
         * @return {?}
         */
        SigninContainerComponent.prototype.signIn = /**
         * @param {?} formValue
         * @return {?}
         */
        function (formValue) {
            this.store.dispatch(new Signin(formValue));
            this.signedIn$.emit(true);
        };
        SigninContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                    }] }
        ];
        /** @nocollapse */
        SigninContainerComponent.ctorParameters = function () { return [
            { type: AuthenticationConfigurationService },
            { type: store.Store }
        ]; };
        SigninContainerComponent.propDecorators = {
            signedIn$: [{ type: core.Output }]
        };
        return SigninContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        SigninContainerComponent.prototype.formId$;
        /** @type {?} */
        SigninContainerComponent.prototype.signedIn$;
        /**
         * @type {?}
         * @private
         */
        SigninContainerComponent.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        SigninContainerComponent.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationContainerComponent = /** @class */ (function () {
        function AuthenticationContainerComponent() {
        }
        AuthenticationContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n          <router-outlet></router-outlet>\n        "
                    }] }
        ];
        return AuthenticationContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignupContainerComponent = /** @class */ (function () {
        function SignupContainerComponent(configurationService, store, snackBar) {
            this.configurationService = configurationService;
            this.store = store;
            this.snackBar = snackBar;
            this.signedUp$ = new core.EventEmitter();
            this.formId$ = this.configurationService.config$.map((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.forms.signUp; }));
        }
        /**
         * @param {?} formValue
         * @return {?}
         */
        SignupContainerComponent.prototype.signup = /**
         * @param {?} formValue
         * @return {?}
         */
        function (formValue) {
            var _this = this;
            this.configurationService.config$
                .pipe(operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.signupValidator(formValue); })))
                .subscribe((/**
             * @param {?} validation
             * @return {?}
             */
            function (validation) {
                if (validation) {
                    _this.store.dispatch(new Signup(formValue));
                    _this.signedUp$.emit(true);
                }
                else {
                    _this.snackBar.open("رمز عبور یکسان نیست", null, {
                        duration: 2222
                    });
                }
            }));
        };
        SignupContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n        <auth-signup \n                [formId]='(formId$ | async)'\n                (signedup)=\"signup($event)\"\n        ></auth-signup>\n  "
                    }] }
        ];
        /** @nocollapse */
        SignupContainerComponent.ctorParameters = function () { return [
            { type: AuthenticationConfigurationService },
            { type: store.Store },
            { type: material.MatSnackBar }
        ]; };
        SignupContainerComponent.propDecorators = {
            signedUp$: [{ type: core.Output }]
        };
        return SignupContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        SignupContainerComponent.prototype.formId$;
        /** @type {?} */
        SignupContainerComponent.prototype.signedUp$;
        /**
         * @type {?}
         * @private
         */
        SignupContainerComponent.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        SignupContainerComponent.prototype.store;
        /**
         * @type {?}
         * @private
         */
        SignupContainerComponent.prototype.snackBar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "auth",
            component: AuthenticationContainerComponent,
            children: [
                {
                    path: "signin",
                    // canActivate: [ SigninGuard ],
                    component: SigninContainerComponent
                },
                {
                    path: "signup",
                    // canActivate: [ SigninGuard ],
                    component: SignupContainerComponent
                }
            ]
        }
    ];
    /** @type {?} */
    var AuthenticationRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SigninComponent = /** @class */ (function () {
        function SigninComponent() {
            this.signedin = new core.EventEmitter();
        }
        /**
         * @param {?} formGroup
         * @return {?}
         */
        SigninComponent.prototype.signin = /**
         * @param {?} formGroup
         * @return {?}
         */
        function (formGroup) {
            if (!formGroup.valid)
                return;
            this.signedin.emit(formGroup.value);
        };
        SigninComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "auth-signin",
                        template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signin($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SigninComponent.ctorParameters = function () { return []; };
        SigninComponent.propDecorators = {
            signedin: [{ type: core.Output }],
            formId: [{ type: core.Input }]
        };
        return SigninComponent;
    }());
    if (false) {
        /** @type {?} */
        SigninComponent.prototype.signedin;
        /** @type {?} */
        SigninComponent.prototype.formId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { environment } from "../../../environments/environment";
    var WithCredentialInterceptor = /** @class */ (function () {
        function WithCredentialInterceptor(configurationService) {
            this.configurationService = configurationService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        WithCredentialInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        function (request, next) {
            // if (!this.configurationService.config.env.production)
            ((/** @type {?} */ (request))).withCredentials = true;
            return next.handle(request);
        };
        WithCredentialInterceptor.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        WithCredentialInterceptor.ctorParameters = function () { return [
            { type: AuthenticationConfigurationService }
        ]; };
        return WithCredentialInterceptor;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        WithCredentialInterceptor.prototype.configurationService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UnauthorizedInterceptor = /** @class */ (function () {
        function UnauthorizedInterceptor(router, store // private signinService: SigninService
        ) {
            this.router = router;
            this.store = store;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        UnauthorizedInterceptor.prototype.intercept = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        function (request, next) {
            var _this = this;
            return next
                .handle(request)
                .map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event instanceof http.HttpResponse)
                    return event;
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                if (!(err instanceof http.HttpErrorResponse))
                    return rxjs.throwError(err);
                if (err.status != 401)
                    return rxjs.throwError(err);
                if (err.url.includes("logout"))
                    return rxjs.throwError(err);
                if (err.url.includes("user/account/profile"))
                    return rxjs.throwError(err);
                _this.store.dispatch(new SignoutAction());
                return rxjs.throwError("Unauthorized");
            }));
        };
        UnauthorizedInterceptor.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UnauthorizedInterceptor.ctorParameters = function () { return [
            { type: router.Router },
            { type: store.Store }
        ]; };
        return UnauthorizedInterceptor;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UnauthorizedInterceptor.prototype.router;
        /**
         * @type {?}
         * @private
         */
        UnauthorizedInterceptor.prototype.store;
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
        State.prototype.loggedIn;
        /** @type {?} */
        State.prototype.user;
    }
    /** @type {?} */
    var initialState = {
        loggedIn: false,
        user: new UserModel({ Id: 1 })
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function UserReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case SignInActionTypes.SIGNIN_SUCCEED: {
                return __assign({}, state, { loggedIn: true, user: action.payload });
            }
            case SignInActionTypes.SIGNOUT: {
                return __assign({}, state, { loggedIn: false, user: new UserModel() });
            }
            default: {
                return state;
            }
        }
    }
    //#region  selectors
    /** @type {?} */
    var getLoggedIn = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loggedIn; });
    /** @type {?} */
    var getUser = (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.user; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AuthenticationState() { }
    if (false) {
        /** @type {?} */
        AuthenticationState.prototype.userStatus;
    }
    /**
     * @record
     */
    function FeatureState() { }
    if (false) {
        /** @type {?} */
        FeatureState.prototype.authentication;
    }
    /** @type {?} */
    var AuthenticationReducers = {
        userStatus: UserReducer
        // captcha: captchaReducer.CaptchaReducer
    };
    //#region selectors
    /** @type {?} */
    var selectAuthenticationState = store.createFeatureSelector("authentication");
    var ɵ0$1 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.userStatus; };
    /** @type {?} */
    var selectAuthState = store.createSelector(selectAuthenticationState, (ɵ0$1));
    /** @type {?} */
    var getLoggedIn$1 = store.createSelector(selectAuthState, getLoggedIn);
    /** @type {?} */
    var getUser$1 = store.createSelector(selectAuthState, getUser);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SigninEffects = /** @class */ (function () {
        function SigninEffects(actions$, router, signinService, configurationService, bottomSheet) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.signinService = signinService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.whoAmI$ = this.actions$.pipe(effects.ofType(SignInActionTypes.WHO_AM_I), operators.switchMap((/**
             * @return {?}
             */
            function () {
                return _this.signinService
                    .whoAmI()
                    .pipe(operators.map((/**
                 * @param {?} user
                 * @return {?}
                 */
                function (user) { return new SigninSecceed(user); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(new SigninFailed(error)); })));
            })));
            this.Signin$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                return _this.signinService
                    .signin(payload)
                    .pipe(operators.map((/**
                 * @param {?} user
                 * @return {?}
                 */
                function (user) { return new SigninSecceed(user); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(new SigninFailed(error)); })));
            })));
            this.signup$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNUP), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) {
                return _this.signinService
                    .signup(payload)
                    .pipe(operators.map((/**
                 * @param {?} user
                 * @return {?}
                 */
                function (user) { return new SignupSecceed(user); })), operators.catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return rxjs.of(new SignupFailed(error)); })));
            })));
            this.signupSucceed$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNUP_SUCCEED), operators.tap((/**
             * @return {?}
             */
            function () {
                debugger;
                _this.router.navigate(["auth/signin"]);
            })));
            this.SignInRequired$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN_REQUIRED), operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
                    panelClass: "clear-mat-card-box"
                });
                signinBottomSheetRef.instance.signedIn$.subscribe((/**
                 * @return {?}
                 */
                function () {
                    signinBottomSheetRef.dismiss();
                }));
                return signinBottomSheetRef;
            })));
            this.SigninSucceed$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN_SUCCEED), operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (location.pathname.indexOf("signin") > -1)
                    _this.router.navigate(["/"]);
            })));
            this.AfterSigninFiled$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN_FAILURE), operators.map((/**
             * @return {?}
             */
            function () { return new NewCaptcha(); })));
            this.DoSignout$ = this.actions$.pipe(effects.ofType(SignInActionTypes.DO_SIGNOUT), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.signinService.signout().pipe(operators.map((/**
                 * @return {?}
                 */
                function () { return new SignoutAction(); })), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    // TODO: dispatch valid action
                    debugger;
                    return rxjs.of(err);
                })));
            })));
            // TODO
            // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
            this.redirectToLoginPage$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN_REDIRECT), operators.tap((/**
             * @param {?} authed
             * @return {?}
             */
            function (authed) { return _this.router.navigate(["auth/signin"]); })));
            this.redirectAfterSignout$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNOUT), operators.tap((/**
             * @param {?} authed
             * @return {?}
             */
            function (authed) { return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]); })));
        }
        SigninEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SigninEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: router.Router },
            { type: SigninService },
            { type: AuthenticationConfigurationService },
            { type: material.MatBottomSheet }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "whoAmI$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "Signin$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "signup$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "signupSucceed$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "SignInRequired$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "SigninSucceed$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "AfterSigninFiled$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "DoSignout$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "redirectToLoginPage$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], SigninEffects.prototype, "redirectAfterSignout$", void 0);
        return SigninEffects;
    }());
    if (false) {
        /** @type {?} */
        SigninEffects.prototype.whoAmI$;
        /** @type {?} */
        SigninEffects.prototype.Signin$;
        /** @type {?} */
        SigninEffects.prototype.signup$;
        /** @type {?} */
        SigninEffects.prototype.signupSucceed$;
        /** @type {?} */
        SigninEffects.prototype.SignInRequired$;
        /** @type {?} */
        SigninEffects.prototype.SigninSucceed$;
        /** @type {?} */
        SigninEffects.prototype.AfterSigninFiled$;
        /** @type {?} */
        SigninEffects.prototype.DoSignout$;
        /** @type {?} */
        SigninEffects.prototype.redirectToLoginPage$;
        /** @type {?} */
        SigninEffects.prototype.redirectAfterSignout$;
        /**
         * @type {?}
         * @private
         */
        SigninEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        SigninEffects.prototype.router;
        /** @type {?} */
        SigninEffects.prototype.signinService;
        /** @type {?} */
        SigninEffects.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        SigninEffects.prototype.bottomSheet;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationEffects = /** @class */ (function () {
        function AuthenticationEffects(actions$) {
            this.actions$ = actions$;
            this.dispachProgressingStarted$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN), operators.map((/**
             * @return {?}
             */
            function () { return new ProgressingStarted(); })));
            this.dispachProgressingFinished$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), operators.map((/**
             * @return {?}
             */
            function () { return new ProgressingFinished(); })));
        }
        AuthenticationEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuthenticationEffects.ctorParameters = function () { return [
            { type: effects.Actions }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
        return AuthenticationEffects;
    }());
    if (false) {
        /** @type {?} */
        AuthenticationEffects.prototype.dispachProgressingStarted$;
        /** @type {?} */
        AuthenticationEffects.prototype.dispachProgressingFinished$;
        /**
         * @type {?}
         * @private
         */
        AuthenticationEffects.prototype.actions$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignupComponent = /** @class */ (function () {
        function SignupComponent() {
            this.signedup = new core.EventEmitter();
        }
        /**
         * @param {?} formGroup
         * @return {?}
         */
        SignupComponent.prototype.signup = /**
         * @param {?} formGroup
         * @return {?}
         */
        function (formGroup) {
            if (!formGroup.valid)
                return;
            this.signedup.emit(formGroup.value);
        };
        SignupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "auth-signup",
                        template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signup($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        SignupComponent.ctorParameters = function () { return []; };
        SignupComponent.propDecorators = {
            signedup: [{ type: core.Output }],
            formId: [{ type: core.Input }]
        };
        return SignupComponent;
    }());
    if (false) {
        /** @type {?} */
        SignupComponent.prototype.signedup;
        /** @type {?} */
        SignupComponent.prototype.formId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SigninGuard = /** @class */ (function () {
        function SigninGuard(store) {
            this.store = store;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        SigninGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        function (route, state) {
            return this.store.select(getLoggedIn$1).take(1).map((/**
             * @param {?} authed
             * @return {?}
             */
            function (authed) { return !authed; }));
        };
        SigninGuard.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SigninGuard.ctorParameters = function () { return [
            { type: store.Store }
        ]; };
        return SigninGuard;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SigninGuard.prototype.store;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsAuthenticationModule = /** @class */ (function () {
        function NgsAuthenticationModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsAuthenticationModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            if (config === void 0) { config = (/** @type {?} */ ({})); }
            return {
                ngModule: RootNgsAuthenticationModule,
                providers: [
                    { provide: MODULE_CONFIG_TOKEN, useValue: config },
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: UnauthorizedInterceptor,
                        multi: true
                    },
                    {
                        provide: http.HTTP_INTERCEPTORS,
                        useClass: WithCredentialInterceptor,
                        multi: true
                    },
                    SigninService
                ]
            };
        };
        NgsAuthenticationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
                            material.MatBottomSheetModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatRadioModule,
                            material.MatInputModule,
                            material.MatToolbarModule,
                            material.MatDatepickerModule,
                            material.MatProgressBarModule,
                            animations.BrowserAnimationsModule,
                            forms.ReactiveFormsModule,
                            forms.FormsModule,
                            form.NgsFormModule
                        ],
                        declarations: [
                            SigninContainerComponent,
                            SigninComponent,
                            AuthenticationContainerComponent,
                            SignupContainerComponent,
                            SignupComponent
                        ],
                        entryComponents: [SigninContainerComponent],
                        providers: [SigninGuard],
                        exports: []
                    },] }
        ];
        return NgsAuthenticationModule;
    }());
    var RootNgsAuthenticationModule = /** @class */ (function () {
        function RootNgsAuthenticationModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.authentication = "8.0.10";
        }
        RootNgsAuthenticationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature("authentication", AuthenticationReducers),
                            effects.EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                            AuthenticationRoutingModule,
                            NgsAuthenticationModule
                        ]
                    },] }
        ];
        /** @nocollapse */
        RootNgsAuthenticationModule.ctorParameters = function () { return []; };
        return RootNgsAuthenticationModule;
    }());

    exports.DoSignoutAction = DoSignoutAction;
    exports.NgsAuthenticationModule = NgsAuthenticationModule;
    exports.SignInActionTypes = SignInActionTypes;
    exports.SigninContainerComponent = SigninContainerComponent;
    exports.SigninRequiredAction = SigninRequiredAction;
    exports.SigninService = SigninService;
    exports.UserModel = UserModel;
    exports.getUser = getUser$1;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵb = RootNgsAuthenticationModule;
    exports.ɵc = AuthenticationReducers;
    exports.ɵd = selectAuthenticationState;
    exports.ɵe = selectAuthState;
    exports.ɵh = AuthenticationConfigurationService;
    exports.ɵi = SigninComponent;
    exports.ɵj = AuthenticationContainerComponent;
    exports.ɵk = SignupContainerComponent;
    exports.ɵl = SignupComponent;
    exports.ɵm = SigninGuard;
    exports.ɵn = UserReducer;
    exports.ɵo = getUser;
    exports.ɵp = SigninEffects;
    exports.ɵq = AuthenticationEffects;
    exports.ɵr = AuthenticationRoutingModule;
    exports.ɵs = UnauthorizedInterceptor;
    exports.ɵt = WithCredentialInterceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-authentication.umd.js.map

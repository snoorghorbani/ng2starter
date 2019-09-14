(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/core'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/material'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@ngrx/effects'), require('@soushians/form'), require('rxjs'), require('rxjs/operators'), require('@angular/material/snack-bar'), require('@soushians/user')) :
    typeof define === 'function' && define.amd ? define('@soushians/frontend-authentication', ['exports', '@ngrx/store', '@angular/core', '@angular/common', '@angular/router', '@angular/common/http', '@angular/flex-layout', '@angular/material', '@angular/platform-browser/animations', '@angular/forms', '@ngrx/effects', '@soushians/form', 'rxjs', 'rxjs/operators', '@angular/material/snack-bar', '@soushians/user'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians['frontend-authentication'] = {}), global.store, global.ng.core, global.ng.common, global.ng.router, global.ng.common.http, global.ng['flex-layout'], global.ng.material, global.ng.platformBrowser.animations, global.ng.forms, global.effects, global.form, global.rxjs, global.rxjs.operators, global.ng.material['snack-bar'], global.user));
}(this, function (exports, store, core, common, router, http, flexLayout, material, animations, forms, effects, form, rxjs, operators, snackBar, user) { 'use strict';

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
        WHO_AM_I: "[FRONTEND_AUTHENTICATION] who am i",
        SIGNIN: "[FRONTEND_AUTHENTICATION] Signin",
        DO_SIGNOUT: "[FRONTEND_AUTHENTICATION] Do Signout",
        SIGNOUT: "[FRONTEND_AUTHENTICATION] Signout",
        SIGNIN_SUCCEED: "[FRONTEND_AUTHENTICATION][Signin] Success",
        SIGNIN_FAILURE: "[FRONTEND_AUTHENTICATION][Signin] Failure",
        SIGNIN_REDIRECT: "[FRONTEND_AUTHENTICATION][Signin] Redirect",
        SIGNIN_REQUIRED: "[FRONTEND_AUTHENTICATION][Signin] Required",
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
    var Signin = /** @class */ (function () {
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
                debugger;
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
    function FrontendAuthenticationState() { }
    if (false) {
        /** @type {?} */
        FrontendAuthenticationState.prototype.userStatus;
    }
    /**
     * @record
     */
    function FeatureState() { }
    if (false) {
        /* Skipping unnamed member:
        "frontend-authentication": FrontendAuthenticationState;*/
    }
    /** @type {?} */
    var FrontendAuthenticationReducers = {
        userStatus: UserReducer
    };
    //#region selectors
    /** @type {?} */
    var selectFrontendAuthenticationState = store.createFeatureSelector("frontend-authentication");
    var ɵ0 = /**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.userStatus; };
    /** @type {?} */
    var selectAuthState = store.createSelector(selectFrontendAuthenticationState, (ɵ0));
    /** @type {?} */
    var getFrontendAuthenticationState = store.createSelector(selectAuthState, getLoggedIn);
    /** @type {?} */
    var getFrontendUser = store.createSelector(selectAuthState, getUser);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FrontendAuthenticationContainerComponent = /** @class */ (function () {
        function FrontendAuthenticationContainerComponent() {
        }
        FrontendAuthenticationContainerComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n          <router-outlet></router-outlet>\n        "
                    }] }
        ];
        return FrontendAuthenticationContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function FrontendAuthenticationModuleConfig() { }
    if (false) {
        /** @type {?|undefined} */
        FrontendAuthenticationModuleConfig.prototype.endpoints;
        /** @type {?|undefined} */
        FrontendAuthenticationModuleConfig.prototype.forms;
        /** @type {?|undefined} */
        FrontendAuthenticationModuleConfig.prototype.env;
        /** @type {?|undefined} */
        FrontendAuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
    }
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        endpoints: {
            signIn: "/api/user/signin",
            signOut: "/api/user/signout",
            whoAmI: "/api/user/account/profile"
        },
        forms: {
            signIn: "5a951cfbfd791632a09b3bc6"
        },
        env: {
            production: false,
            frontend_server: "auth/module/frontend/server/not/set",
            server: "auth/module/server/not/set"
        },
        afterSignoutRedirectTo: "/"
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new core.InjectionToken("ModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FrontendAuthenticationConfigurationService = /** @class */ (function () {
        function FrontendAuthenticationConfigurationService(configFile, store) {
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getFrontendAuthenticationModuleConfig).subscribe(storeConfig => {
            // 	if (!storeConfig) return;
            // 	this._config = Object.assign({}, this._config, storeConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(FrontendAuthenticationConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */
            function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        FrontendAuthenticationConfigurationService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FrontendAuthenticationConfigurationService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ]; };
        /** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(core.ɵɵinject(MODULE_CONFIG_TOKEN), core.ɵɵinject(store.Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });
        return FrontendAuthenticationConfigurationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FrontendAuthenticationConfigurationService.prototype._config;
        /** @type {?} */
        FrontendAuthenticationConfigurationService.prototype.config$;
        /**
         * @type {?}
         * @private
         */
        FrontendAuthenticationConfigurationService.prototype.store;
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
            { type: FrontendAuthenticationConfigurationService },
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
    /** @type {?} */
    var routes = [
        {
            path: "auth/frontend",
            component: FrontendAuthenticationContainerComponent,
            children: [
                {
                    path: "signin",
                    // canActivate: [ SigninGuard ],
                    component: SigninContainerComponent
                }
            ]
        }
    ];
    /** @type {?} */
    var FrontendAuthenticationRoutingModule = router.RouterModule.forChild(routes);

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
    // import { WhoAmIAction } from "../actions";
    var FrontendSigninService = /** @class */ (function () {
        function FrontendSigninService(http, store, configurationService, snackBar) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.snackBar = snackBar;
            // setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
        }
        /**
         * @param {?} token
         * @return {?}
         */
        FrontendSigninService.prototype.signin = /**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            var _this = this;
            this.configurationService.config$.subscribe((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                debugger;
            }));
            return this.configurationService.config$.pipe(operators.filter((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return config.endpoints.signIn != ""; })), operators.take(1), operators.switchMap((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return _this.http.post(config.env.frontend_server + config.endpoints.signIn, { token: token }); })), operators.map((/**
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
         * @return {?}
         */
        FrontendSigninService.prototype.signout = /**
         * @return {?}
         */
        function () {
            return this.http
                .get(this.configurationService.config.env.frontend_server +
                this.configurationService.config.endpoints.signOut)
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; }));
        };
        /**
         * @return {?}
         */
        FrontendSigninService.prototype.whoAmI = /**
         * @return {?}
         */
        function () {
            return this.http
                .get(this.configurationService.config.env.frontend_server + this.configurationService.config.endpoints.whoAmI)
                .map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return response; }));
        };
        FrontendSigninService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FrontendSigninService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: FrontendAuthenticationConfigurationService },
            { type: material.MatSnackBar }
        ]; };
        /** @nocollapse */ FrontendSigninService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(core.ɵɵinject(http.HttpClient), core.ɵɵinject(store.Store), core.ɵɵinject(FrontendAuthenticationConfigurationService), core.ɵɵinject(snackBar.MatSnackBar)); }, token: FrontendSigninService, providedIn: "root" });
        return FrontendSigninService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        FrontendSigninService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        FrontendSigninService.prototype.store;
        /**
         * @type {?}
         * @private
         */
        FrontendSigninService.prototype.configurationService;
        /**
         * @type {?}
         * @private
         */
        FrontendSigninService.prototype.snackBar;
    }
    /** @type {?} */
    var FrontendSigninServiceStub = {};

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SigninEffects = /** @class */ (function () {
        function SigninEffects(actions$, router, frontendSigninService, configurationService, bottomSheet) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router;
            this.frontendSigninService = frontendSigninService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.whoAmI$ = this.actions$.pipe(effects.ofType(SignInActionTypes.WHO_AM_I), operators.switchMap((/**
             * @return {?}
             */
            function () { return _this.frontendSigninService.whoAmI(); })), operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new SigninFailed(error)); })));
            this.Signin$ = this.actions$.pipe(effects.ofType(SignInActionTypes.SIGNIN), operators.pluck("payload"), operators.switchMap((/**
             * @param {?} payload
             * @return {?}
             */
            function (payload) { return _this.frontendSigninService.signin(payload); })), operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rxjs.of(new SigninFailed(error)); })));
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
                debugger;
                if (location.pathname.indexOf("signin") > -1)
                    _this.router.navigate(["/"]);
            })));
            this.DoSignout$ = this.actions$.pipe(effects.ofType(SignInActionTypes.DO_SIGNOUT), operators.switchMap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return _this.frontendSigninService.signout().pipe(operators.map((/**
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
            { type: FrontendSigninService },
            { type: FrontendAuthenticationConfigurationService },
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
        SigninEffects.prototype.SignInRequired$;
        /** @type {?} */
        SigninEffects.prototype.SigninSucceed$;
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
        SigninEffects.prototype.frontendSigninService;
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
    var FrontendAuthenticationModuleEffects = /** @class */ (function () {
        function FrontendAuthenticationModuleEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.goToList$ = this.actions$.pipe(effects.ofType(user.UserActionTypes.REFRESH_USER_INFO), operators.map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return action.payload; })), operators.filter((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.Token != null; })), operators.switchMap((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                return _this.service.signin(user.Token).map((/**
                 * @param {?} _user
                 * @return {?}
                 */
                function (_user) {
                    return new SigninSecceed(_user);
                }));
            })));
        }
        FrontendAuthenticationModuleEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FrontendAuthenticationModuleEffects.ctorParameters = function () { return [
            { type: effects.Actions },
            { type: FrontendSigninService }
        ]; };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FrontendAuthenticationModuleEffects.prototype, "goToList$", void 0);
        return FrontendAuthenticationModuleEffects;
    }());
    if (false) {
        /** @type {?} */
        FrontendAuthenticationModuleEffects.prototype.goToList$;
        /**
         * @type {?}
         * @private
         */
        FrontendAuthenticationModuleEffects.prototype.actions$;
        /**
         * @type {?}
         * @private
         */
        FrontendAuthenticationModuleEffects.prototype.service;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgsFrontendAuthenticationModule = /** @class */ (function () {
        function NgsFrontendAuthenticationModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsFrontendAuthenticationModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
        function (config) {
            if (config === void 0) { config = (/** @type {?} */ ({})); }
            return {
                ngModule: RootNgsFrontendAuthenticationModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FrontendSigninService]
            };
        };
        NgsFrontendAuthenticationModule.decorators = [
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
                        declarations: [SigninContainerComponent, SigninComponent, FrontendAuthenticationContainerComponent],
                        entryComponents: [SigninContainerComponent],
                        providers: [],
                        exports: []
                    },] }
        ];
        return NgsFrontendAuthenticationModule;
    }());
    var RootNgsFrontendAuthenticationModule = /** @class */ (function () {
        function RootNgsFrontendAuthenticationModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.frontend_authentication = "8.0.10";
        }
        RootNgsFrontendAuthenticationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            store.StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
                            effects.EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
                            FrontendAuthenticationRoutingModule,
                            NgsFrontendAuthenticationModule
                        ]
                    },] }
        ];
        /** @nocollapse */
        RootNgsFrontendAuthenticationModule.ctorParameters = function () { return []; };
        return RootNgsFrontendAuthenticationModule;
    }());

    exports.DoSignoutAction = DoSignoutAction;
    exports.NgsFrontendAuthenticationModule = NgsFrontendAuthenticationModule;
    exports.SignInActionTypes = SignInActionTypes;
    exports.SigninRequiredAction = SigninRequiredAction;
    exports.UserModel = UserModel;
    exports.getFrontendAuthenticationState = getFrontendAuthenticationState;
    exports.getFrontendUser = getFrontendUser;
    exports.ɵa = FrontendAuthenticationReducers;
    exports.ɵb = selectFrontendAuthenticationState;
    exports.ɵc = selectAuthState;
    exports.ɵd = RootNgsFrontendAuthenticationModule;
    exports.ɵe = UserReducer;
    exports.ɵf = getLoggedIn;
    exports.ɵg = getUser;
    exports.ɵh = SigninContainerComponent;
    exports.ɵi = FrontendAuthenticationConfigurationService;
    exports.ɵj = MODULE_CONFIG_TOKEN;
    exports.ɵm = SigninComponent;
    exports.ɵn = FrontendAuthenticationContainerComponent;
    exports.ɵo = FrontendAuthenticationModuleEffects;
    exports.ɵp = FrontendSigninService;
    exports.ɵq = SigninEffects;
    exports.ɵr = FrontendAuthenticationRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-frontend-authentication.umd.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('rxjs'), require('@soushians/config'), require('@angular/common/http'), require('@angular/material'), require('rxjs/operators'), require('@angular/material/snack-bar'), require('@angular/router'), require('rxjs/add/operator/do'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/authentication', ['exports', '@angular/core', '@ngrx/store', 'rxjs', '@soushians/config', '@angular/common/http', '@angular/material', 'rxjs/operators', '@angular/material/snack-bar', '@angular/router', 'rxjs/add/operator/do', 'rxjs/Observable', '@ngrx/effects', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/forms', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.authentication = {}),global.ng.core,null,global.rxjs,null,global.ng.common.http,global.ng.material,global.rxjs.operators,global.ng.material['snack-bar'],global.ng.router,global.rxjs['add/operator/do'],global.rxjs.Observable,null,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.forms,null));
}(this, (function (exports,i0,i1,rxjs,config,i1$1,material,operators,i4,router,_do,Observable,effects,map,mergeMap,common,flexLayout,animations,forms,form) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserModel = (function () {
        function UserModel(params) {
            var _this = this;
            // IdentificationNo: string;
            // IdentifierType: string;
            // RegisterDate: string;
            // UserType: string;
            this.Roles = [];
            params &&
                Object.keys(params).forEach(function (key) {
                    if (key in params)
                        ((_this))[key] = params[key];
                });
        }
        return UserModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Signin_ApiModel;
    (function (Signin_ApiModel) {
        var Request = (function () {
            function Request() {
            }
            return Request;
        }());
        Signin_ApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        Signin_ApiModel.Response = Response;
    })(Signin_ApiModel || (Signin_ApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressingStarted = (function () {
        function ProgressingStarted() {
            this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
        }
        return ProgressingStarted;
    }());
    var ProgressingFinished = (function () {
        function ProgressingFinished() {
            this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
        }
        return ProgressingFinished;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ NEW_CAPTCHA = '[captcha] new captcha';
    var NewCaptcha = (function () {
        function NewCaptcha() {
            this.type = NEW_CAPTCHA;
        }
        return NewCaptcha;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var SignInActionTypes = {
        WHO_AM_I: "[AUTHENTICATION] who am i",
        SIGNIN: "[AUTHENTICATION] Signin",
        DO_SIGNOUT: "[AUTHENTICATION] Do Signout",
        SIGNOUT: "[AUTHENTICATION] Signout",
        SIGNIN_SUCCEED: "[AUTHENTICATION][Signin] Success",
        SIGNIN_FAILURE: "[AUTHENTICATION][Signin] Failure",
        SIGNIN_REDIRECT: "[AUTHENTICATION][Signin] Redirect",
        SIGNIN_REQUIRED: "[AUTHENTICATION][Signin] Required",
    };
    var WhoAmIAction = (function () {
        function WhoAmIAction() {
            this.type = SignInActionTypes.WHO_AM_I;
        }
        return WhoAmIAction;
    }());
    var Signin = (function () {
        function Signin(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN;
        }
        return Signin;
    }());
    var SigninSecceed = (function () {
        function SigninSecceed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_SUCCEED;
        }
        return SigninSecceed;
    }());
    var SigninFailed = (function () {
        function SigninFailed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_FAILURE;
        }
        return SigninFailed;
    }());
    var DoSignoutAction = (function () {
        function DoSignoutAction() {
            this.type = SignInActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
    }());
    var SignoutAction = (function () {
        function SignoutAction() {
            this.type = SignInActionTypes.SIGNOUT;
        }
        return SignoutAction;
    }());
    var SigninRequiredAction = (function () {
        function SigninRequiredAction() {
            this.type = SignInActionTypes.SIGNIN_REQUIRED;
        }
        return SigninRequiredAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        endpoints: {
            signOut: "",
            signIn: "",
            whoAmI: ""
        },
        forms: {
            signIn: ""
        },
        env: {
            production: false
        },
        afterSignoutRedirectTo: "/"
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("ModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationConfigurationService = (function () {
        function AuthenticationConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getAuthenticationModuleConfig).subscribe(function (storeConfig) {
                if (!storeConfig)
                    return;
                _this._config = Object.assign({}, _this._config, storeConfig.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(AuthenticationConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        AuthenticationConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        AuthenticationConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i1.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
        return AuthenticationConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninService = (function () {
        function SigninService(http, store, configurationService, snackBar) {
            var _this = this;
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.snackBar = snackBar;
            setTimeout(function () { return _this.store.dispatch(new WhoAmIAction()); }, 300);
        }
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
                return this.configurationService.config$.pipe(operators.filter(function (config$$1) { return config$$1.endpoints.signIn != ""; }), operators.take(1), operators.switchMap(function (config$$1) { return _this.http.post(config$$1.endpoints.signIn, model); }), operators.map(function (response) {
                    var /** @type {?} */ user = Object.assign({}, response.Result);
                    if (user.Role) {
                        user.Roles = [user.Role];
                    }
                    return user;
                }));
                // .catch(err => {
                // 	if (err.status == 400) {
                // 		this.snackBar.open("کد امنیتی اشتباه است", null, {
                // 			duration: 5000
                // 		});
                // 	} else if (err.status == 403) {
                // 		this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
                // 			duration: 5000
                // 		});
                // 	}
                // 	return Observable.throw(err);
                // });
            };
        /**
         * @return {?}
         */
        SigninService.prototype.signout = /**
         * @return {?}
         */
            function () {
                return this.http.get(this.configurationService.config.endpoints.signOut).map(function (response) { return response; });
            };
        /**
         * @return {?}
         */
        SigninService.prototype.whoAmI = /**
         * @return {?}
         */
            function () {
                return this.http.get(this.configurationService.config.endpoints.whoAmI).map(function (response) { return response; });
            };
        SigninService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        SigninService.ctorParameters = function () {
            return [
                { type: i1$1.HttpClient },
                { type: i1.Store },
                { type: AuthenticationConfigurationService },
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ SigninService.ngInjectableDef = i0.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.inject(i1$1.HttpClient), i0.inject(i1.Store), i0.inject(AuthenticationConfigurationService), i0.inject(i4.MatSnackBar)); }, token: SigninService, providedIn: "root" });
        return SigninService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninContainerComponent = (function () {
        function SigninContainerComponent(configurationService, store) {
            this.configurationService = configurationService;
            this.store = store;
            this.signedIn$ = new i0.EventEmitter();
            this.formId$ = this.configurationService.config$.map(function (config$$1) { return config$$1.forms.signIn; });
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
            { type: i0.Component, args: [{
                        template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                    },] },
        ];
        /** @nocollapse */
        SigninContainerComponent.ctorParameters = function () {
            return [
                { type: AuthenticationConfigurationService },
                { type: i1.Store }
            ];
        };
        SigninContainerComponent.propDecorators = {
            signedIn$: [{ type: i0.Output }]
        };
        return SigninContainerComponent;
    }());

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ initialState = {
        loggedIn: false,
        user: new UserModel({ Id: 1 })
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function UserReducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
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
    var /** @type {?} */ getLoggedIn = function (state) { return state.loggedIn; };
    var /** @type {?} */ getUser = function (state) { return state.user; };
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ AuthenticationReducers = {
        userStatus: UserReducer
    };
    //#region selectors
    var /** @type {?} */ selectAuthenticationState = i1.createFeatureSelector("authentication");
    var /** @type {?} */ selectAuthState = i1.createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
    var /** @type {?} */ getLoggedIn$1 = i1.createSelector(selectAuthState, getLoggedIn);
    var /** @type {?} */ getUser$1 = i1.createSelector(selectAuthState, getUser);
    // export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
    // 	return state.captcha;
    // });
    // export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AdminGuard = (function () {
        function AdminGuard(store) {
            this.store = store;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AdminGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.store.select(getUser$1).take(1).map(function (user) {
                    var /** @type {?} */ res = ((user.Roles)).includes("Admin");
                    // !res && this.store.dispatch(new SigninRedirect());
                    return res;
                });
            };
        AdminGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        AdminGuard.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ AdminGuard.ngInjectableDef = i0.defineInjectable({ factory: function AdminGuard_Factory() { return new AdminGuard(i0.inject(i1.Store)); }, token: AdminGuard, providedIn: "root" });
        return AdminGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AgentGuard = (function () {
        function AgentGuard(store) {
            this.store = store;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AgentGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.store.select(getUser$1).take(1).map(function (user) {
                    var /** @type {?} */ res = ((user.Roles)).includes("Agent");
                    // !res && this.store.dispatch(new SigninRedirect());
                    return res;
                });
            };
        AgentGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        AgentGuard.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ AgentGuard.ngInjectableDef = i0.defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(i0.inject(i1.Store)); }, token: AgentGuard, providedIn: "root" });
        return AgentGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserGuard = (function () {
        function UserGuard(store) {
            this.store = store;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        UserGuard.prototype.canActivate = /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
            function (route, state) {
                return this.store.select(getUser$1).take(1).map(function (user) { return ((user.Roles)).includes("User"); });
            };
        UserGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        UserGuard.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ UserGuard.ngInjectableDef = i0.defineInjectable({ factory: function UserGuard_Factory() { return new UserGuard(i0.inject(i1.Store)); }, token: UserGuard, providedIn: "root" });
        return UserGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninGuard = (function () {
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
                return this.store.select(getLoggedIn$1).take(1).map(function (authed) { return !authed; });
            };
        SigninGuard.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        SigninGuard.ctorParameters = function () {
            return [
                { type: i1.Store }
            ];
        };
        /** @nocollapse */ SigninGuard.ngInjectableDef = i0.defineInjectable({ factory: function SigninGuard_Factory() { return new SigninGuard(i0.inject(i1.Store)); }, token: SigninGuard, providedIn: "root" });
        return SigninGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationContainerComponent = (function () {
        function AuthenticationContainerComponent() {
        }
        AuthenticationContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "\n          <router-outlet></router-outlet>\n        "
                    },] },
        ];
        return AuthenticationContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: "auth",
            component: AuthenticationContainerComponent,
            children: [
                {
                    path: "signin",
                    canActivate: [SigninGuard],
                    component: SigninContainerComponent
                }
            ]
        }
    ];
    var /** @type {?} */ AuthenticationRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninComponent = (function () {
        function SigninComponent() {
            this.signedin = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: "auth-signin",
                        template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        [card]=\"true\"\n        (accept)=\"signin($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SigninComponent.ctorParameters = function () { return []; };
        SigninComponent.propDecorators = {
            signedin: [{ type: i0.Output }],
            formId: [{ type: i0.Input }]
        };
        return SigninComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WithCredentialInterceptor = (function () {
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
                ((request)).withCredentials = true;
                return next.handle(request);
            };
        WithCredentialInterceptor.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        WithCredentialInterceptor.ctorParameters = function () {
            return [
                { type: AuthenticationConfigurationService }
            ];
        };
        return WithCredentialInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UnauthorizedInterceptor = (function () {
        function UnauthorizedInterceptor(router$$1, store // private signinService: SigninService
        ) {
            this.router = router$$1;
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
                    .map(function (event) {
                    if (event instanceof i1$1.HttpResponse)
                        return event;
                })
                    .catch(function (err) {
                    if (!(err instanceof i1$1.HttpErrorResponse))
                        return rxjs.throwError(err);
                    if (err.status != 401)
                        return rxjs.throwError(err);
                    if (err.url.includes("logout"))
                        return rxjs.throwError(err);
                    _this.store.dispatch(new SignoutAction());
                    return rxjs.throwError("Unauthorized");
                });
            };
        UnauthorizedInterceptor.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        UnauthorizedInterceptor.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: i1.Store }
            ];
        };
        return UnauthorizedInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninEffects = (function () {
        function SigninEffects(actions$, router$$1, signinService, configurationService, bottomSheet) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.signinService = signinService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.whoAmI$ = this.actions$
                .ofType(SignInActionTypes.WHO_AM_I)
                .pipe(operators.switchMap(function () { return _this.signinService.whoAmI(); }), operators.map(function (user) { return new SigninSecceed(user); }), operators.catchError(function (error) { return Observable.Observable.of(new SigninFailed(error)); }));
            this.Signin$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN)
                .pipe(operators.pluck("payload"), operators.switchMap(function (payload) { return _this.signinService.signin(payload); }), operators.map(function (user) { return new SigninSecceed(user); }), operators.catchError(function (error) { return Observable.Observable.of(new SigninFailed(error)); }));
            this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(operators.tap(function (data) {
                var /** @type {?} */ signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
                    panelClass: "clear-mat-card-box"
                });
                signinBottomSheetRef.instance.signedIn$.subscribe(function () {
                    signinBottomSheetRef.dismiss();
                });
                return signinBottomSheetRef;
            }));
            this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(operators.tap(function (data) {
                debugger;
                if (location.pathname.indexOf("signin") > -1)
                    _this.router.navigate(["/"]);
            }));
            this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
            this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(operators.switchMap(function (data) {
                return _this.signinService.signout().pipe(operators.map(function () { return new SignoutAction(); }), operators.catchError(function (err) {
                    // TODO: dispatch valid action
                    debugger;
                    return rxjs.of(err);
                }));
            }));
            // TODO
            // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
            this.redirectToLoginPage$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN_REDIRECT)
                .pipe(operators.tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
            this.redirectAfterSignout$ = this.actions$
                .ofType(SignInActionTypes.SIGNOUT)
                .pipe(operators.tap(function (authed) {
                return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]);
            }));
        }
        SigninEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        SigninEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: SigninService },
                { type: AuthenticationConfigurationService },
                { type: material.MatBottomSheet }
            ];
        };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationEffects = (function () {
        function AuthenticationEffects(actions$, router$$1) {
            this.actions$ = actions$;
            this.router = router$$1;
            this.dispachProgressingStarted$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN)
                .pipe(operators.map(function () { return new ProgressingStarted(); }));
            this.dispachProgressingFinished$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
                .pipe(operators.map(function () { return new ProgressingFinished(); }));
        }
        AuthenticationEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AuthenticationEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router }
            ];
        };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsAuthenticationModule = (function () {
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
            function (config$$1) {
                if (config$$1 === void 0) {
                    config$$1 = /** @type {?} */ ({});
                }
                return {
                    ngModule: RootNgsAuthenticationModule,
                    providers: [
                        { provide: MODULE_CONFIG_TOKEN, useValue: config$$1 },
                        {
                            provide: i1$1.HTTP_INTERCEPTORS,
                            useClass: UnauthorizedInterceptor,
                            multi: true
                        },
                        {
                            provide: i1$1.HTTP_INTERCEPTORS,
                            useClass: WithCredentialInterceptor,
                            multi: true
                        },
                        SigninService
                    ]
                };
            };
        NgsAuthenticationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            forms.FormsModule,
                            i1$1.HttpClientModule,
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
                        declarations: [SigninContainerComponent, SigninComponent, AuthenticationContainerComponent],
                        entryComponents: [SigninContainerComponent],
                        providers: [],
                        exports: []
                    },] },
        ];
        return NgsAuthenticationModule;
    }());
    var RootNgsAuthenticationModule = (function () {
        function RootNgsAuthenticationModule() {
        }
        RootNgsAuthenticationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.StoreModule.forFeature("authentication", AuthenticationReducers),
                            effects.EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                            AuthenticationRoutingModule,
                            NgsAuthenticationModule
                        ]
                    },] },
        ];
        return RootNgsAuthenticationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.UserModel = UserModel;
    exports.SignInActionTypes = SignInActionTypes;
    exports.DoSignoutAction = DoSignoutAction;
    exports.SigninRequiredAction = SigninRequiredAction;
    exports.SigninService = SigninService;
    exports.SigninContainerComponent = SigninContainerComponent;
    exports.NgsAuthenticationModule = NgsAuthenticationModule;
    exports.ɵl = AuthenticationRoutingModule;
    exports.ɵd = MODULE_CONFIG_TOKEN;
    exports.ɵa = RootNgsAuthenticationModule;
    exports.ɵf = SigninComponent;
    exports.ɵk = AuthenticationEffects;
    exports.ɵj = SigninEffects;
    exports.ɵn = UnauthorizedInterceptor;
    exports.ɵo = WithCredentialInterceptor;
    exports.ɵh = AuthenticationReducers;
    exports.ɵi = UserReducer;
    exports.ɵm = SigninGuard;
    exports.ɵc = AuthenticationConfigurationService;
    exports.ɵg = AuthenticationContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL21vZGVscy9zaWduaW4uYXBpLW1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hY3Rpb25zL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvY2FwdGNoYS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvc2lnbmluLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9yZWR1Y2Vycy91c2VyLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JlZHVjZXJzL2luZGV4LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9yb3V0aW5nLWd1YXJkcy9hZG1pbi5ndWFyZC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvcm91dGluZy1ndWFyZHMvYWdlbnQuZ3VhcmQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JvdXRpbmctZ3VhcmRzL3VzZXIuZ3VhcmQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JvdXRpbmctZ3VhcmRzL3NpZ25pbi5ndWFyZC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZWZmZWN0cy9zaWduaW4uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hdXRoZW50aWNhdGlvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Ly8gRmlyc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gTGFzdE5hbWU6IHN0cmluZztcclxuXHRVc2VybmFtZTogc3RyaW5nO1xyXG5cdC8vIE1vYmlsZU51bWJlcjogc3RyaW5nO1xyXG5cdC8vIFNleDogc3RyaW5nO1xyXG5cdC8vIEJpcnRoZGF0ZTogc3RyaW5nO1xyXG5cdEVtYWlsOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmljYXRpb25Obzogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpZXJUeXBlOiBzdHJpbmc7XHJcblx0Ly8gUmVnaXN0ZXJEYXRlOiBzdHJpbmc7XHJcblx0Ly8gVXNlclR5cGU6IHN0cmluZztcclxuXHRSb2xlczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IocGFyYW1zPzogYW55KSB7XHJcblx0XHRwYXJhbXMgJiZcclxuXHRcdFx0T2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0aWYgKGtleSBpbiBwYXJhbXMpICh0aGlzIGFzIGFueSlba2V5XSA9IHBhcmFtc1trZXldO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuZXhwb3J0IG5hbWVzcGFjZSBTaWduaW5fQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge31cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPiB7XHJcblx0XHRSZXN1bHQ6IFVzZXJNb2RlbDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX1NUQVJURUQnLFxyXG5cdFBST0dSRVNTSU5HX0ZJTklTSEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRUQnLFxyXG5cdEZBSUxFRF9IQVBQRU5FRCA9ICdbQVVUSEVOVElDQVRJT05dIEZBSUxFRF9IQVBQRU5FRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfU1RBUlRFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdGaW5pc2hlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfRklOSVNIRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZhaWxlZEhhcHBlbmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25BY3Rpb24gPSBQcm9ncmVzc2luZ1N0YXJ0ZWQgfCBQcm9ncmVzc2luZ0ZpbmlzaGVkIHwgRmFpbGVkSGFwcGVuZWQ7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFRva2VuTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBuZXcgY2FwdGNoYSc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIHRva2VuX3JlcXVlc3RlZCc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRUNFSVZFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVjZWl2ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfSU1BR0VfTE9BREVEID0gJ1tjYXB0Y2hhXSBjYXB0Y2hhX2ltYWdlX2xvYWRlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0VOVEVSRUQgPSAnW2NhcHRjaGFdIENBUFRDSEFfRU5URVJFRCc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBDTEVBUl9DQVBUQ0hBJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdDYXB0Y2hhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gTkVXX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVxdWVzdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2tlblJlY2VpdmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVDRUlWRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRva2VuTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VSZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUltYWdlTG9hZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9JTUFHRV9MT0FERUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFFbnRlcmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9FTlRFUkVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhckNhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DQVBUQ0hBO1xyXG59XHJcbmV4cG9ydCB0eXBlIENhcHRjaGFBY3Rpb24gPVxyXG4gICAgICAgIHwgTmV3Q2FwdGNoYVxyXG4gICAgICAgIHwgVG9rZW5SZXF1ZXN0ZWRcclxuICAgICAgICB8IFRva2VuUmVjZWl2ZWRcclxuICAgICAgICB8IENhcHRjaGFJbWFnZVJlcXVlc3RlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlTG9hZGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhRW50ZXJlZFxyXG4gICAgICAgIHwgQ2xlYXJDYXB0Y2hhOyIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbQVVUSEVOVElDQVRJT05dIHdobyBhbSBpXCIsXHJcblx0U0lHTklOID0gXCJbQVVUSEVOVElDQVRJT05dIFNpZ25pblwiLFxyXG5cdERPX1NJR05PVVQgPSBcIltBVVRIRU5USUNBVElPTl0gRG8gU2lnbm91dFwiLFxyXG5cdFNJR05PVVQgPSBcIltBVVRIRU5USUNBVElPTl0gU2lnbm91dFwiLFxyXG5cdFNJR05JTl9TVUNDRUVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gU3VjY2Vzc1wiLFxyXG5cdFNJR05JTl9GQUlMVVJFID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTl9SRURJUkVDVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlZGlyZWN0XCIsXHJcblx0U0lHTklOX1JFUVVJUkVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVxdWlyZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2hvQW1JQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0k7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNpZ25pbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogU2lnbmluX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5TZWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZWRpcmVjdCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlcXVpcmVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTaWduaW5BY3Rpb24gPVxyXG5cdHwgV2hvQW1JQWN0aW9uXHJcblx0fCBTaWduaW5cclxuXHR8IFNpZ25pblNlY2NlZWRcclxuXHR8IFNpZ25pbkZhaWxlZFxyXG5cdHwgU2lnbmluUmVkaXJlY3RcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbmluUmVxdWlyZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHNpZ25PdXQ/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRzaWduT3V0OiBcIlwiLFxyXG5cdFx0c2lnbkluOiBcIlwiLFxyXG5cdFx0d2hvQW1JOiBcIlwiXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0c2lnbkluOiBcIlwiXHJcblx0fSxcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlPEF1dGhlbnRpY2F0aW9uU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoc3RvcmVDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXN0b3JlQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgc3RvcmVDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCBmaWx0ZXIsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgV2hvQW1JQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdob0FtSUFjdGlvbigpKSwgMzAwKTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbihtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnNpZ25JbiAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbCkpLFxyXG5cdFx0XHRtYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHVzZXI6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8vIC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoZXJyLnN0YXR1cyA9PSA0MDApIHtcclxuXHRcdC8vIFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCLDmsKpw5jCryDDmMKnw5nChcOZwobDm8KMw5jCqsObwowgw5jCp8OYwrTDmMKqw5jCqMOYwqfDmcKHIMOYwqfDmMKzw5jCqlwiLCBudWxsLCB7XHJcblx0XHQvLyBcdFx0XHRkdXJhdGlvbjogNTAwMFxyXG5cdFx0Ly8gXHRcdH0pO1xyXG5cdFx0Ly8gXHR9IGVsc2UgaWYgKGVyci5zdGF0dXMgPT0gNDAzKSB7XHJcblx0XHQvLyBcdFx0dGhpcy5zbmFja0Jhci5vcGVuKFwiIMOYwrTDmcKFw5jCp8OYwrHDmcKHIMOZwoXDmcKIw5jCqMOYwqfDm8KMw5nChCDDmcKIIMObwozDmMKnIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsSDDmMKnw5jCtMOYwqrDmMKow5jCp8OZwocgw5jCp8OYwrPDmMKqXCIsIG51bGwsIHtcclxuXHRcdC8vIFx0XHRcdGR1cmF0aW9uOiA1MDAwXHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxuXHJcblx0c2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLnNpZ25PdXQpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy53aG9BbUkpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIFNpZ25pblNlcnZpY2VTdHViID0ge307XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENhcHRjaGFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ25pbiBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWRpbik9XCJzaWduSW4oJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWduaW4+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZEluJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTaWduaW5BY3Rpb24sIFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2dnZWRJbjogYm9vbGVhbjtcclxuXHR1c2VyOiBVc2VyTW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvZ2dlZEluOiBmYWxzZSxcclxuXHR1c2VyOiBuZXcgVXNlck1vZGVsKHsgSWQ6IDEgfSlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTaWduaW5BY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nZ2VkSW46IGZhbHNlLFxyXG5cdFx0XHRcdHVzZXI6IG5ldyBVc2VyTW9kZWwoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubG9nZ2VkSW47XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudXNlcjtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXIucmVkdWNlclwiO1xyXG4vLyBpbXBvcnQgKiBhcyBjYXB0Y2hhUmVkdWNlciBmcm9tIFwiLi9jYXB0Y2hhLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiYXV0aGVudGljYXRpb25cIjogQXV0aGVudGljYXRpb25TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgPSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuVXNlclJlZHVjZXJcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5DYXB0Y2hhUmVkdWNlclxyXG59O1xyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhlbnRpY2F0aW9uU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8QXV0aGVudGljYXRpb25TdGF0ZT4oXCJhdXRoZW50aWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlclN0YXR1c1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRVc2VyKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzZWxlY3RDYXB0Y2hhU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLCAoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4gc3RhdGUuY2FwdGNoYTtcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q2FwdGNoYSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdENhcHRjaGFTdGF0ZSwgY2FwdGNoYVJlZHVjZXIuZ2V0Q2FwdGNoYSk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0VXNlciB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXIpLnRha2UoMSkubWFwKHVzZXIgPT4ge1xyXG5cdFx0XHR2YXIgcmVzID0gKHVzZXIuUm9sZXMgYXMgYW55KS5pbmNsdWRlcyhcIkFkbWluXCIpO1xyXG5cdFx0XHQvLyAhcmVzICYmIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpZ25pblJlZGlyZWN0KCkpO1xyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRVc2VyIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFnZW50R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0Y2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VXNlcikudGFrZSgxKS5tYXAodXNlciA9PiB7XHJcblx0XHRcdHZhciByZXMgPSAodXNlci5Sb2xlcyBhcyBhbnkpLmluY2x1ZGVzKFwiQWdlbnRcIik7XHJcblx0XHRcdC8vICFyZXMgJiYgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluUmVkaXJlY3QoKSk7XHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRVc2VyIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyKS50YWtlKDEpLm1hcCh1c2VyID0+ICh1c2VyLlJvbGVzIGFzIGFueSkuaW5jbHVkZXMoXCJVc2VyXCIpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRMb2dnZWRJbiB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRMb2dnZWRJbikudGFrZSgxKS5tYXAoYXV0aGVkID0+ICFhdXRoZWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5HdWFyZCB9IGZyb20gXCIuL3JvdXRpbmctZ3VhcmRzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiYXV0aFwiLFxyXG5cdFx0Y29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInNpZ25pblwiLFxyXG5cdFx0XHRcdGNhbkFjdGl2YXRlOiBbIFNpZ25pbkd1YXJkIF0sXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTaWduaW5Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhdXRoLXNpZ25pblwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgXHJcbiAgICAgICAgW2lkXT1cImZvcm1JZFwiXHJcbiAgICAgICAgW2NhcmRdPVwidHJ1ZVwiXHJcbiAgICAgICAgKGFjY2VwdCk9XCJzaWduaW4oJGV2ZW50KVwiXHJcbiAgICA+PC9uZ3MtZm9ybS12aWV3PlxyXG48L2Rpdj5cclxuPCEtLSA8ZGl2PlxyXG4gICAgPGEgZnhGbGV4PVwibm9ncm93XCIgcm91dGVyTGluaz1cIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCIgbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4RmlsbD7DmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwoHDmMKxw5jCp8OZwoXDmcKIw5jCtCDDmsKpw5jCscOYwq/DmcKHIMOYwqfDm8KMw5jCr8OYwp88L2E+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgc2lnbmVkaW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuXHRzaWduaW4oZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnNpZ25lZGluLmVtaXQoZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdC8vIGlmICghdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LnByb2R1Y3Rpb24pXHJcblx0XHQocmVxdWVzdCBhcyBhbnkpLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTaWdub3V0QWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZnJvbUF1dGggZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tQXV0aC5GZWF0dXJlU3RhdGU+IC8vIHByaXZhdGUgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZVxyXG5cdCkge31cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dFxyXG5cdFx0XHQuaGFuZGxlKHJlcXVlc3QpXHJcblx0XHRcdC5tYXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkgcmV0dXJuIGV2ZW50O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT0gNDAxKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwibG9nb3V0XCIpKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWdub3V0QWN0aW9uKCkpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdDYXB0Y2hhIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbmluRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHdob0FtSSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PiB0aGlzLnNpZ25pblNlcnZpY2Uud2hvQW1JKCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNpZ25pblNlcnZpY2Uuc2lnbmluKHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKCh1c2VyKSA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduSW5SZXF1aXJlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzaWduaW5Cb3R0b21TaGVldFJlZiA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihTaWduaW5Db250YWluZXJDb21wb25lbnQsIHtcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcImNsZWFyLW1hdC1jYXJkLWJveFwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5pbnN0YW5jZS5zaWduZWRJbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gc2lnbmluQm90dG9tU2hlZXRSZWY7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvXCIgXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKSBBZnRlclNpZ25pbkZpbGVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFKS5tYXAoKCkgPT4gbmV3IE5ld0NhcHRjaGEoKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhKSA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2Uuc2lnbm91dCgpLnBpcGUoXHJcblx0XHRcdFx0bWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVClcclxuXHRcdC5waXBlKHRhcCgoYXV0aGVkKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiYXV0aC9zaWduaW5cIiBdKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RBZnRlclNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHRhcCgoYXV0aGVkKSA9PlxyXG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbyBdKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcywgRmFpbGVkSGFwcGVuZWQsIFByb2dyZXNzaW5nU3RhcnRlZCwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSA8QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+e30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0U2lnbmluU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiYXV0aGVudGljYXRpb25cIiwgQXV0aGVudGljYXRpb25SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBTaWduaW5FZmZlY3RzLCBBdXRoZW50aWNhdGlvbkVmZmVjdHMgXSksXHJcblx0XHRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXHJcblx0XHROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NBdXRoZW50aWNhdGlvbk1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImZpbHRlciIsImNvbmZpZyIsInRha2UiLCJzd2l0Y2hNYXAiLCJtYXAiLCJIdHRwQ2xpZW50IiwiTWF0U25hY2tCYXIiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJ1c2VyUmVkdWNlci5Vc2VyUmVkdWNlciIsImNyZWF0ZUZlYXR1cmVTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwiZ2V0TG9nZ2VkSW4iLCJ1c2VyUmVkdWNlci5nZXRMb2dnZWRJbiIsImdldFVzZXIiLCJ1c2VyUmVkdWNlci5nZXRVc2VyIiwiUm91dGVyTW9kdWxlIiwiSW5wdXQiLCJyb3V0ZXIiLCJIdHRwUmVzcG9uc2UiLCJIdHRwRXJyb3JSZXNwb25zZSIsInRocm93RXJyb3IiLCJSb3V0ZXIiLCJjYXRjaEVycm9yIiwiT2JzZXJ2YWJsZSIsInBsdWNrIiwidGFwIiwib2YiLCJBY3Rpb25zIiwiTWF0Qm90dG9tU2hlZXQiLCJFZmZlY3QiLCJIVFRQX0lOVEVSQ0VQVE9SUyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0Qm90dG9tU2hlZXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiTmdzRm9ybU1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7UUFlQyxt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
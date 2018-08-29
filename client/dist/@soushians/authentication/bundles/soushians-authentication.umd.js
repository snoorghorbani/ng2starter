(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('@angular/common/http'), require('@angular/material'), require('rxjs/operators'), require('@angular/material/snack-bar'), require('@angular/router'), require('rxjs/add/operator/do'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/authentication', ['exports', '@angular/core', 'rxjs', '@ngrx/store', '@soushians/config', '@angular/common/http', '@angular/material', 'rxjs/operators', '@angular/material/snack-bar', '@angular/router', 'rxjs/add/operator/do', 'rxjs/Observable', '@ngrx/effects', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/forms', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.authentication = {}),global.ng.core,global.rxjs,null,null,global.ng.common.http,global.ng.material,global.rxjs.operators,global.ng.material['snack-bar'],global.ng.router,global.rxjs['add/operator/do'],global.rxjs.Observable,null,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.forms,null));
}(this, (function (exports,i0,rxjs,i2,config,i1,material,operators,i4,router,_do,Observable,effects,map,mergeMap,common,flexLayout,animations,forms,form) { 'use strict';

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
    var WhoAmIAction = (function () {
        function WhoAmIAction() {
            this.type = SignInActionTypes.WHO_AM_I;
        }
        return WhoAmIAction;
    }());
    /**
     * 	sign up
     */
    var /**
     * 	sign up
     */ Signup = (function () {
        function Signup(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNUP;
        }
        return Signup;
    }());
    /**
     * Sign in
     */
    var /**
     * Sign in
     */ Signin = (function () {
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
        signupValidator: function (value) { return rxjs.of(true); }
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
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
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
                return this.configurationService.config$.pipe(operators.filter(function (config$$1) { return config$$1.endpoints.signIn != ""; }), operators.take(1), operators.switchMap(function (config$$1) {
                    return _this.http.post(config$$1.env.server + config$$1.endpoints.signIn, model);
                }), operators.map(function (response) {
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
        // TODO:
        /**
         * @return {?}
         */
        SigninService.prototype.signout = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.configurationService.config.env.server + this.configurationService.config.endpoints.signOut)
                    .map(function (response) { return response; });
            };
        // TODO: remove it
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
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: AuthenticationConfigurationService },
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ SigninService.ngInjectableDef = i0.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(AuthenticationConfigurationService), i0.inject(i4.MatSnackBar)); }, token: SigninService, providedIn: "root" });
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
                { type: i2.Store }
            ];
        };
        SigninContainerComponent.propDecorators = {
            signedIn$: [{ type: i0.Output }]
        };
        return SigninContainerComponent;
    }());

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
    var SignupContainerComponent = (function () {
        function SignupContainerComponent(configurationService, store, snackBar) {
            this.configurationService = configurationService;
            this.store = store;
            this.snackBar = snackBar;
            this.signedUp$ = new i0.EventEmitter();
            this.formId$ = this.configurationService.config$.map(function (config$$1) { return config$$1.forms.signUp; });
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
                    .pipe(operators.take(1), operators.switchMap(function (config$$1) { return config$$1.signupValidator(formValue); }))
                    .subscribe(function (validation) {
                    if (validation) {
                        _this.store.dispatch(new Signup(formValue));
                        _this.signedUp$.emit(true);
                    }
                    else {
                        _this.snackBar.open("رمز عبور یکسان نیست", null, {
                            duration: 2222
                        });
                    }
                });
            };
        SignupContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "\n        <auth-signup \n                [formId]='(formId$ | async)'\n                (signedup)=\"signup($event)\"\n        ></auth-signup>\n  "
                    },] },
        ];
        /** @nocollapse */
        SignupContainerComponent.ctorParameters = function () {
            return [
                { type: AuthenticationConfigurationService },
                { type: i2.Store },
                { type: material.MatSnackBar }
            ];
        };
        SignupContainerComponent.propDecorators = {
            signedUp$: [{ type: i0.Output }]
        };
        return SignupContainerComponent;
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
                    if (event instanceof i1.HttpResponse)
                        return event;
                })
                    .catch(function (err) {
                    if (!(err instanceof i1.HttpErrorResponse))
                        return rxjs.throwError(err);
                    if (err.status != 401)
                        return rxjs.throwError(err);
                    if (err.url.includes("logout"))
                        return rxjs.throwError(err);
                    if (err.url.includes("user/account/profile"))
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
                { type: i2.Store }
            ];
        };
        return UnauthorizedInterceptor;
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
    var /** @type {?} */ selectAuthenticationState = i2.createFeatureSelector("authentication");
    var /** @type {?} */ selectAuthState = i2.createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
    var /** @type {?} */ getLoggedIn$1 = i2.createSelector(selectAuthState, getLoggedIn);
    var /** @type {?} */ getUser$1 = i2.createSelector(selectAuthState, getUser);
    // export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
    // 	return state.captcha;
    // });
    // export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);

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
    var SignupComponent = (function () {
        function SignupComponent() {
            this.signedup = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: "auth-signup",
                        template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        [card]=\"true\"\n        (accept)=\"signup($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SignupComponent.ctorParameters = function () { return []; };
        SignupComponent.propDecorators = {
            signedup: [{ type: i0.Output }],
            formId: [{ type: i0.Input }]
        };
        return SignupComponent;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        SigninGuard.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return SigninGuard;
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
                            provide: i1.HTTP_INTERCEPTORS,
                            useClass: UnauthorizedInterceptor,
                            multi: true
                        },
                        {
                            provide: i1.HTTP_INTERCEPTORS,
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
                            i1.HttpClientModule,
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
                            i2.StoreModule.forFeature("authentication", AuthenticationReducers),
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
    exports.ɵo = AuthenticationRoutingModule;
    exports.ɵd = MODULE_CONFIG_TOKEN;
    exports.ɵa = RootNgsAuthenticationModule;
    exports.ɵf = SigninComponent;
    exports.ɵi = SignupComponent;
    exports.ɵn = AuthenticationEffects;
    exports.ɵm = SigninEffects;
    exports.ɵp = UnauthorizedInterceptor;
    exports.ɵq = WithCredentialInterceptor;
    exports.ɵk = AuthenticationReducers;
    exports.ɵl = UserReducer;
    exports.ɵj = SigninGuard;
    exports.ɵc = AuthenticationConfigurationService;
    exports.ɵg = AuthenticationContainerComponent;
    exports.ɵh = SignupContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL21vZGVscy9zaWduaW4uYXBpLW1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hY3Rpb25zL2F1dGhlbnRpY2F0aW9uLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvY2FwdGNoYS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hdXRoZW50aWNhdGlvbi5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvc2lnbmluLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9zaWdudXAtY29udGFpbmVyL3NpZ251cC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFsLmludGVyY2VwdG9yLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9pbnRlcmNlcHRvcnMvdW5hdXRob3JpemVkLmludGVyY2VwdG9yLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JlZHVjZXJzL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2VmZmVjdHMvYXV0aGVudGljYXRpb24uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcclxuXHRcdHBhcmFtcyAmJlxyXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRpZiAoa2V5IGluIHBhcmFtcykgKHRoaXMgYXMgYW55KVtrZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsLCBIdHRwUmVzcG9uc2VCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNpZ25pbl9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2UgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8UmVzcG9uc2U+IHtcclxuXHRcdFJlc3VsdDogVXNlck1vZGVsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzIHtcclxuXHRQUk9HUkVTU0lOR19TVEFSVEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfU1RBUlRFRCcsXHJcblx0UFJPR1JFU1NJTkdfRklOSVNIRUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19GSU5JU0hFRCcsXHJcblx0RkFJTEVEX0hBUFBFTkVEID0gJ1tBVVRIRU5USUNBVElPTl0gRkFJTEVEX0hBUFBFTkVEJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdTdGFydGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19TVEFSVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ0ZpbmlzaGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19GSU5JU0hFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRmFpbGVkSGFwcGVuZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLkZBSUxFRF9IQVBQRU5FRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoZW50aWNhdGlvbkFjdGlvbiA9IFByb2dyZXNzaW5nU3RhcnRlZCB8IFByb2dyZXNzaW5nRmluaXNoZWQgfCBGYWlsZWRIYXBwZW5lZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0NBUFRDSEEgPSAnW2NhcHRjaGFdIG5ldyBjYXB0Y2hhJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZWNlaXZlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9MT0FERUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfRU5URVJFRCA9ICdbY2FwdGNoYV0gQ0FQVENIQV9FTlRFUkVEJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUFRDSEEgPSAnW2NhcHRjaGFdIENMRUFSX0NBUFRDSEEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBORVdfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVjZWl2ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRUNFSVZFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9rZW5Nb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZVJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VMb2FkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX0xPQURFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVudGVyZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0VOVEVSRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyQ2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbiA9XHJcbiAgICAgICAgfCBOZXdDYXB0Y2hhXHJcbiAgICAgICAgfCBUb2tlblJlcXVlc3RlZFxyXG4gICAgICAgIHwgVG9rZW5SZWNlaXZlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlUmVxdWVzdGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VMb2FkZWRcclxuICAgICAgICB8IENhcHRjaGFFbnRlcmVkXHJcbiAgICAgICAgfCBDbGVhckNhcHRjaGE7IiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltBVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOVVAgPSBcIltBVVRIRU5USUNBVElPTl1bU0lHTlVQXSBzdGFydFwiLFxyXG5cdFNJR05VUF9TVUNDRUVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gU3VjY2Vzc1wiLFxyXG5cdFNJR05VUF9GQUlMVVJFID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTiA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIFNpZ25vdXRcIixcclxuXHRTSUdOSU5fU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZWRpcmVjdFwiLFxyXG5cdFNJR05JTl9SRVFVSVJFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcblxyXG4vKipcclxuICogXHRzaWduIHVwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbnVwIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFNpZ24gaW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbmluXHJcblx0fCBTaWduaW5TZWNjZWVkXHJcblx0fCBTaWduaW5GYWlsZWRcclxuXHR8IFNpZ25pblJlZGlyZWN0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25pblJlcXVpcmVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHNpZ25PdXQ/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHRzaWduVXA/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdFx0c2lnblVwOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0XHRzZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcblx0c2lnbnVwVmFsaWRhdG9yPzogKHZhbHVlOiBhbnkpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0c2lnbk91dDogXCJcIixcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHNpZ25VcDogXCJcIixcclxuXHRcdHdob0FtSTogXCJcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHNpZ25VcDogXCJcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuXHRcdHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCIsXHJcblx0c2lnbnVwVmFsaWRhdG9yOiB2YWx1ZSA9PiBvZih0cnVlKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlPEF1dGhlbnRpY2F0aW9uU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoc3RvcmVDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXN0b3JlQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgc3RvcmVDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCBmaWx0ZXIsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgV2hvQW1JQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdob0FtSUFjdGlvbigpKSwgMzAwKTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbihtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbnYuc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5zaWduSW4sIG1vZGVsKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuUmVzdWx0KTtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gWyB1c2VyLlJvbGUgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0Ly8gLmNhdGNoKGVyciA9PiB7XHJcblx0XHQvLyBcdGlmIChlcnIuc3RhdHVzID09IDQwMCkge1xyXG5cdFx0Ly8gXHRcdHRoaXMuc25hY2tCYXIub3BlbihcIsOawqnDmMKvIMOYwqfDmcKFw5nChsObwozDmMKqw5vCjCDDmMKnw5jCtMOYwqrDmMKow5jCp8OZwocgw5jCp8OYwrPDmMKqXCIsIG51bGwsIHtcclxuXHRcdC8vIFx0XHRcdGR1cmF0aW9uOiA1MDAwXHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHQvLyBcdH0gZWxzZSBpZiAoZXJyLnN0YXR1cyA9PSA0MDMpIHtcclxuXHRcdC8vIFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCIgw5jCtMOZwoXDmMKnw5jCscOZwocgw5nChcOZwojDmMKow5jCp8ObwozDmcKEIMOZwoggw5vCjMOYwqcgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxIMOYwqfDmMK0w5jCqsOYwqjDmMKnw5nChyDDmMKnw5jCs8OYwqpcIiwgbnVsbCwge1xyXG5cdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDUwMDBcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPOlxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuc2VydmVyICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLnNpZ25PdXQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPOiByZW1vdmUgaXRcclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy53aG9BbUkpLm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ25pbiBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWRpbik9XCJzaWduSW4oJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWduaW4+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZEluJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbnVwIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdGFrZSwgc3dpdGNoTWFwLCBmaWx0ZXIsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICA8YXV0aC1zaWdudXAgXHJcbiAgICAgICAgICAgICAgICBbZm9ybUlkXT0nKGZvcm1JZCQgfCBhc3luYyknXHJcbiAgICAgICAgICAgICAgICAoc2lnbmVkdXApPVwic2lnbnVwKCRldmVudClcIlxyXG4gICAgICAgID48L2F1dGgtc2lnbnVwPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUlkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBPdXRwdXQoKSBzaWduZWRVcCQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnblVwKTtcclxuXHR9XHJcblxyXG5cdHNpZ251cChmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5waXBlKHRha2UoMSksIHN3aXRjaE1hcChjb25maWcgPT4gY29uZmlnLnNpZ251cFZhbGlkYXRvcihmb3JtVmFsdWUpKSlcclxuXHRcdFx0LnN1YnNjcmliZSh2YWxpZGF0aW9uID0+IHtcclxuXHRcdFx0XHRpZiAodmFsaWRhdGlvbikge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbnVwKGZvcm1WYWx1ZSkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zaWduZWRVcCQuZW1pdCh0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKFwiw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrEgw5vCjMOawqnDmMKzw5jCp8OZwoYgw5nChsObwozDmMKzw5jCqlwiLCBudWxsLCB7XHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMjIyXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5HdWFyZCB9IGZyb20gXCIuL3JvdXRpbmctZ3VhcmRzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbnVwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWdudXAtY29udGFpbmVyL3NpZ251cC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImF1dGhcIixcclxuXHRcdGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJzaWduaW5cIixcclxuXHRcdFx0XHQvLyBjYW5BY3RpdmF0ZTogWyBTaWduaW5HdWFyZCBdLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2lnbmluQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInNpZ251cFwiLFxyXG5cdFx0XHRcdC8vIGNhbkFjdGl2YXRlOiBbIFNpZ25pbkd1YXJkIF0sXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTaWdudXBDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhdXRoLXNpZ25pblwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgXHJcbiAgICAgICAgW2lkXT1cImZvcm1JZFwiXHJcbiAgICAgICAgW2NhcmRdPVwidHJ1ZVwiXHJcbiAgICAgICAgKGFjY2VwdCk9XCJzaWduaW4oJGV2ZW50KVwiXHJcbiAgICA+PC9uZ3MtZm9ybS12aWV3PlxyXG48L2Rpdj5cclxuPCEtLSA8ZGl2PlxyXG4gICAgPGEgZnhGbGV4PVwibm9ncm93XCIgcm91dGVyTGluaz1cIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCIgbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4RmlsbD7DmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwoHDmMKxw5jCp8OZwoXDmcKIw5jCtCDDmsKpw5jCscOYwq/DmcKHIMOYwqfDm8KMw5jCr8OYwp88L2E+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgc2lnbmVkaW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuXHRzaWduaW4oZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnNpZ25lZGluLmVtaXQoZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdC8vIGlmICghdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LnByb2R1Y3Rpb24pXHJcblx0XHQocmVxdWVzdCBhcyBhbnkpLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTaWdub3V0QWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZnJvbUF1dGggZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tQXV0aC5GZWF0dXJlU3RhdGU+IC8vIHByaXZhdGUgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZVxyXG5cdCkge31cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dFxyXG5cdFx0XHQuaGFuZGxlKHJlcXVlc3QpXHJcblx0XHRcdC5tYXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkgcmV0dXJuIGV2ZW50O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT0gNDAxKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwibG9nb3V0XCIpKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwidXNlci9hY2NvdW50L3Byb2ZpbGVcIikpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpZ25vdXRBY3Rpb24oKSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aHJvd0Vycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTaWduaW5BY3Rpb24sIFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2dnZWRJbjogYm9vbGVhbjtcclxuXHR1c2VyOiBVc2VyTW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvZ2dlZEluOiBmYWxzZSxcclxuXHR1c2VyOiBuZXcgVXNlck1vZGVsKHsgSWQ6IDEgfSlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTaWduaW5BY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nZ2VkSW46IGZhbHNlLFxyXG5cdFx0XHRcdHVzZXI6IG5ldyBVc2VyTW9kZWwoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubG9nZ2VkSW47XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudXNlcjtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXIucmVkdWNlclwiO1xyXG4vLyBpbXBvcnQgKiBhcyBjYXB0Y2hhUmVkdWNlciBmcm9tIFwiLi9jYXB0Y2hhLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiYXV0aGVudGljYXRpb25cIjogQXV0aGVudGljYXRpb25TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgPSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuVXNlclJlZHVjZXJcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5DYXB0Y2hhUmVkdWNlclxyXG59O1xyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhlbnRpY2F0aW9uU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8QXV0aGVudGljYXRpb25TdGF0ZT4oXCJhdXRoZW50aWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlclN0YXR1c1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRVc2VyKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzZWxlY3RDYXB0Y2hhU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLCAoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4gc3RhdGUuY2FwdGNoYTtcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q2FwdGNoYSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdENhcHRjaGFTdGF0ZSwgY2FwdGNoYVJlZHVjZXIuZ2V0Q2FwdGNoYSk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdDYXB0Y2hhIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbmluRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHdob0FtSSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PiB0aGlzLnNpZ25pblNlcnZpY2Uud2hvQW1JKCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNpZ25pblNlcnZpY2Uuc2lnbmluKHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKCh1c2VyKSA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycm9yKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduSW5SZXF1aXJlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzaWduaW5Cb3R0b21TaGVldFJlZiA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihTaWduaW5Db250YWluZXJDb21wb25lbnQsIHtcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcImNsZWFyLW1hdC1jYXJkLWJveFwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5pbnN0YW5jZS5zaWduZWRJbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gc2lnbmluQm90dG9tU2hlZXRSZWY7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvXCIgXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKSBBZnRlclNpZ25pbkZpbGVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFKS5tYXAoKCkgPT4gbmV3IE5ld0NhcHRjaGEoKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhKSA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2Uuc2lnbm91dCgpLnBpcGUoXHJcblx0XHRcdFx0bWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVClcclxuXHRcdC5waXBlKHRhcCgoYXV0aGVkKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiYXV0aC9zaWduaW5cIiBdKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RBZnRlclNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHRhcCgoYXV0aGVkKSA9PlxyXG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbyBdKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcywgRmFpbGVkSGFwcGVuZWQsIFByb2dyZXNzaW5nU3RhcnRlZCwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImF1dGgtc2lnbnVwXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8bmdzLWZvcm0tdmlldyBcclxuICAgICAgICBbaWRdPVwiZm9ybUlkXCJcclxuICAgICAgICBbY2FyZF09XCJ0cnVlXCJcclxuICAgICAgICAoYWNjZXB0KT1cInNpZ251cCgkZXZlbnQpXCJcclxuICAgID48L25ncy1mb3JtLXZpZXc+XHJcbjwvZGl2PlxyXG48IS0tIDxkaXY+XHJcbiAgICA8YSBmeEZsZXg9XCJub2dyb3dcIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXhGaWxsPsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsSDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5nCgcOYwrHDmMKnw5nChcOZwojDmMK0IMOawqnDmMKxw5jCr8OZwocgw5jCp8ObwozDmMKvw5jCnzwvYT5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBzaWduZWR1cCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblxyXG5cdHNpZ251cChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc2lnbmVkdXAuZW1pdChmb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0TG9nZ2VkSW4gfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldExvZ2dlZEluKS50YWtlKDEpLm1hcChhdXRoZWQgPT4gIWF1dGhlZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRCb3R0b21TaGVldE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tY29udGFpbmVyL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFsLmludGVyY2VwdG9yXCI7XHJcbmltcG9ydCB7IFVuYXV0aG9yaXplZEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvclwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2F1dGhlbnRpY2F0aW9uLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ251cENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ25pbkNvbXBvbmVudCxcclxuXHRcdEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbIFNpZ25pbkd1YXJkIF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvcixcclxuXHRcdFx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFNpZ25pblNlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImF1dGhlbnRpY2F0aW9uXCIsIEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgU2lnbmluRWZmZWN0cywgQXV0aGVudGljYXRpb25FZmZlY3RzIF0pLFxyXG5cdFx0QXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG5cdFx0TmdzQXV0aGVudGljYXRpb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIm9mIiwiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImZpbHRlciIsImNvbmZpZyIsInRha2UiLCJzd2l0Y2hNYXAiLCJtYXAiLCJIdHRwQ2xpZW50IiwiTWF0U25hY2tCYXIiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJPdXRwdXQiLCJSb3V0ZXJNb2R1bGUiLCJJbnB1dCIsInJvdXRlciIsIkh0dHBSZXNwb25zZSIsIkh0dHBFcnJvclJlc3BvbnNlIiwidGhyb3dFcnJvciIsIlJvdXRlciIsInVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJnZXRMb2dnZWRJbiIsInVzZXJSZWR1Y2VyLmdldExvZ2dlZEluIiwiZ2V0VXNlciIsInVzZXJSZWR1Y2VyLmdldFVzZXIiLCJjYXRjaEVycm9yIiwiT2JzZXJ2YWJsZSIsInBsdWNrIiwidGFwIiwiQWN0aW9ucyIsIk1hdEJvdHRvbVNoZWV0IiwiRWZmZWN0IiwiSFRUUF9JTlRFUkNFUFRPUlMiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdEJvdHRvbVNoZWV0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk5nc0Zvcm1Nb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBO1FBZUMsbUJBQVksTUFBWTtZQUF4QixpQkFLQzs7Ozs7eUJBUGlCLEVBQUU7WUFHbkIsTUFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7b0JBQzlCLElBQUksR0FBRyxJQUFJLE1BQU07d0JBQUUsRUFBQyxLQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRCxDQUFD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
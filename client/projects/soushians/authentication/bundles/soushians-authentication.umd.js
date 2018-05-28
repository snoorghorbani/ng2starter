(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ngrx/store'), require('rxjs'), require('@soushians/config'), require('@angular/common/http'), require('@angular/material'), require('rxjs/operators'), require('@angular/material/snack-bar'), require('@angular/router'), require('rxjs/add/operator/do'), require('rxjs/Observable'), require('tslib'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/empty'), require('@ngrx/effects'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/authentication', ['exports', '@angular/core', '@ngrx/store', 'rxjs', '@soushians/config', '@angular/common/http', '@angular/material', 'rxjs/operators', '@angular/material/snack-bar', '@angular/router', 'rxjs/add/operator/do', 'rxjs/Observable', 'tslib', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/catch', 'rxjs/add/observable/empty', '@ngrx/effects', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/forms', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.authentication = {}),global.ng.core,null,null,null,global.ng.common.http,global.ng.material,global.Rx.Observable.prototype,global.ng.material['snack-bar'],global.ng.router,global.Rx.Observable.prototype,global.Rx,global.tslib,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable,null,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.forms,null));
}(this, (function (exports,core,store,rxjs,config,http,material,operators,snackBar,router,_do,Observable,tslib,map,mergeMap,_catch,empty,effects,common,flexLayout,animations,forms,form) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserModel = (function () {
        /**
         * @param {?=} params
         */
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
        SIGNIN: "[Auth] Signin",
        SIGNOUT: "[Auth] Signout",
        SIGNIN_SUCCEED: "[Auth] Signin Success",
        SIGNIN_FAILURE: "[Auth] Signin Failure",
        SIGNIN_REDIRECT: "[Auth] Signin Redirect",
    };
    var Signin = (function () {
        /**
         * @param {?} payload
         */
        function Signin(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN;
        }
        return Signin;
    }());
    var SigninSecceed = (function () {
        /**
         * @param {?} payload
         */
        function SigninSecceed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_SUCCEED;
        }
        return SigninSecceed;
    }());
    var SigninFailed = (function () {
        /**
         * @param {?} payload
         */
        function SigninFailed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_FAILURE;
        }
        return SigninFailed;
    }());
    var SignoutAction = (function () {
        function SignoutAction() {
            this.type = SignInActionTypes.SIGNOUT;
        }
        return SignoutAction;
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
            userInformation: ""
        },
        forms: {
            signIn: ""
        },
        env: {
            production: false
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("ModuleConfig");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationConfigurationService = (function () {
        /**
         * @param {?} configFile
         * @param {?} store
         */
        function AuthenticationConfigurationService(configFile, store$$1) {
            var _this = this;
            this.store = store$$1;
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
            /**
             * @return {?}
             */
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        return AuthenticationConfigurationService;
    }());
    AuthenticationConfigurationService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    AuthenticationConfigurationService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ];
    };
    /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = core.defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(core.inject(MODULE_CONFIG_TOKEN), core.inject(store.Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ SIGNIN_RESPONSE = "[APP] SIGNIN_RESPONSE";
    var SigninService = (function () {
        /**
         * @param {?} http
         * @param {?} configurationService
         * @param {?} snackBar
         */
        function SigninService(http$$1, configurationService, snackBar$$1) {
            this.http = http$$1;
            this.configurationService = configurationService;
            this.snackBar = snackBar$$1;
        }
        /**
         * @param {?} model
         * @return {?}
         */
        SigninService.prototype.signin = function (model) {
            var _this = this;
            return this.configurationService.config$.pipe(operators.filter(function (config$$1) { return config$$1.endpoints.signIn != ""; }), operators.take(1), operators.switchMap(function (config$$1) { return _this.http.post(config$$1.endpoints.signIn, model); }), operators.map(function (response) { return response.Result; }));
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
        SigninService.prototype.signout = function () {
            localStorage.removeItem(SIGNIN_RESPONSE);
            return this.http
                .get(this.configurationService.config.endpoints.signOut, {
                withCredentials: true
            })
                .map(function (response) { return response; });
        };
        return SigninService;
    }());
    SigninService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SigninService.ctorParameters = function () {
        return [
            { type: http.HttpClient },
            { type: AuthenticationConfigurationService },
            { type: material.MatSnackBar }
        ];
    };
    /** @nocollapse */ SigninService.ngInjectableDef = core.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(core.inject(http.HttpClient), core.inject(AuthenticationConfigurationService), core.inject(snackBar.MatSnackBar)); }, token: SigninService, providedIn: "root" });
    var /** @type {?} */ SigninServiceStub = {};
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
                return Object.assign({}, state, { loggedIn: true, user: action.payload });
            }
            case SignInActionTypes.SIGNOUT: {
                return initialState;
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
    var /** @type {?} */ selectAuthenticationState = store.createFeatureSelector("authentication");
    var /** @type {?} */ selectAuthState = store.createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
    var /** @type {?} */ getLoggedIn$1 = store.createSelector(selectAuthState, getLoggedIn);
    var /** @type {?} */ getUser$1 = store.createSelector(selectAuthState, getUser);
    // export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
    // 	return state.captcha;
    // });
    // export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AdminGuard = (function () {
        /**
         * @param {?} store
         */
        function AdminGuard(store$$1) {
            this.store = store$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AdminGuard.prototype.canActivate = function (route, state) {
            return this.store.select(getUser$1).take(1).map(function (user) {
                var /** @type {?} */ res = ((user.Roles)).includes("Admin");
                // !res && this.store.dispatch(new SigninRedirect());
                return res;
            });
        };
        return AdminGuard;
    }());
    AdminGuard.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    AdminGuard.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /** @nocollapse */ AdminGuard.ngInjectableDef = core.defineInjectable({ factory: function AdminGuard_Factory() { return new AdminGuard(core.inject(store.Store)); }, token: AdminGuard, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AgentGuard = (function () {
        /**
         * @param {?} store
         */
        function AgentGuard(store$$1) {
            this.store = store$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        AgentGuard.prototype.canActivate = function (route, state) {
            return this.store.select(getUser$1).take(1).map(function (user) {
                var /** @type {?} */ res = ((user.Roles)).includes("Agent");
                // !res && this.store.dispatch(new SigninRedirect());
                return res;
            });
        };
        return AgentGuard;
    }());
    AgentGuard.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    AgentGuard.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /** @nocollapse */ AgentGuard.ngInjectableDef = core.defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(core.inject(store.Store)); }, token: AgentGuard, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserGuard = (function () {
        /**
         * @param {?} store
         */
        function UserGuard(store$$1) {
            this.store = store$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        UserGuard.prototype.canActivate = function (route, state) {
            return this.store.select(getUser$1).take(1).map(function (user) { return ((user.Roles)).includes("User"); });
        };
        return UserGuard;
    }());
    UserGuard.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserGuard.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /** @nocollapse */ UserGuard.ngInjectableDef = core.defineInjectable({ factory: function UserGuard_Factory() { return new UserGuard(core.inject(store.Store)); }, token: UserGuard, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninGuard = (function () {
        /**
         * @param {?} store
         */
        function SigninGuard(store$$1) {
            this.store = store$$1;
        }
        /**
         * @param {?} route
         * @param {?} state
         * @return {?}
         */
        SigninGuard.prototype.canActivate = function (route, state) {
            return this.store.select(getLoggedIn$1).take(1).map(function (authed) { return !authed; });
        };
        return SigninGuard;
    }());
    SigninGuard.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SigninGuard.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /** @nocollapse */ SigninGuard.ngInjectableDef = core.defineInjectable({ factory: function SigninGuard_Factory() { return new SigninGuard(core.inject(store.Store)); }, token: SigninGuard, providedIn: "root" });
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
        return AuthenticationContainerComponent;
    }());
    AuthenticationContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "\n          <router-outlet></router-outlet>\n        "
                },] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninContainerComponent = (function () {
        /**
         * @param {?} configurationService
         * @param {?} store
         */
        function SigninContainerComponent(configurationService, store$$1) {
            this.configurationService = configurationService;
            this.store = store$$1;
            this.formId$ = this.configurationService.config$.map(function (config$$1) { return config$$1.forms.signIn; });
        }
        /**
         * @param {?} formValue
         * @return {?}
         */
        SigninContainerComponent.prototype.signIn = function (formValue) {
            this.store.dispatch(new Signin(formValue));
        };
        return SigninContainerComponent;
    }());
    SigninContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                },] },
    ];
    /** @nocollapse */
    SigninContainerComponent.ctorParameters = function () {
        return [
            { type: AuthenticationConfigurationService },
            { type: store.Store }
        ];
    };
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
            this.signedin = new core.EventEmitter();
        }
        /**
         * @param {?} formGroup
         * @return {?}
         */
        SigninComponent.prototype.signin = function (formGroup) {
            if (!formGroup.valid)
                return;
            this.signedin.emit(formGroup.value);
        };
        return SigninComponent;
    }());
    SigninComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "auth-signin",
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        (accept)=\"signin($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return []; };
    SigninComponent.propDecorators = {
        signedin: [{ type: core.Output }],
        formId: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WithCredentialInterceptor = (function () {
        /**
         * @param {?} configurationService
         */
        function WithCredentialInterceptor(configurationService) {
            this.configurationService = configurationService;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        WithCredentialInterceptor.prototype.intercept = function (request, next) {
            // if (!this.configurationService.config.env.production)
            ((request)).withCredentials = true;
            return next.handle(request);
        };
        return WithCredentialInterceptor;
    }());
    WithCredentialInterceptor.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    WithCredentialInterceptor.ctorParameters = function () {
        return [
            { type: AuthenticationConfigurationService }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UnauthorizedInterceptor = (function () {
        /**
         * @param {?} router
         * @param {?} store
         */
        function UnauthorizedInterceptor(router$$1, store$$1 // private signinService: SigninService
        ) {
            this.router = router$$1;
            this.store = store$$1;
        }
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        UnauthorizedInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            return next
                .handle(request)
                .map(function (event) {
                if (event instanceof http.HttpResponse)
                    return event;
            })
                .catch(function (err) {
                if (!(err instanceof http.HttpErrorResponse))
                    return;
                if (err.status != 401)
                    return;
                if (err.url.includes("logout"))
                    return;
                _this.store.dispatch(new SignoutAction());
                return Observable.Observable.throw("Unauthorized");
            });
        };
        return UnauthorizedInterceptor;
    }());
    UnauthorizedInterceptor.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    UnauthorizedInterceptor.ctorParameters = function () {
        return [
            { type: router.Router },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SigninEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} signinService
         */
        function SigninEffects(actions$, router$$1, signinService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.signinService = signinService;
            this.preSignUpStart$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN)
                .pipe(operators.switchMap(function (action) { return _this.signinService.signin(action.payload); }), operators.map(function (user) { return new SigninSecceed(user); }), operators.catchError(function (error) { return Observable.Observable.of(new SigninFailed(error)); }));
            this.SigninSucceed$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN_SUCCEED)
                .pipe(operators.tap(function (data) { return _this.router.navigate(["/"]); }));
            this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
            this.redirectToLoginPage$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
                .pipe(operators.tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
        }
        return SigninEffects;
    }());
    SigninEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    SigninEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: SigninService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], SigninEffects.prototype, "preSignUpStart$", void 0);
    tslib.__decorate([
        effects.Effect({ dispatch: false }),
        tslib.__metadata("design:type", Object)
    ], SigninEffects.prototype, "SigninSucceed$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], SigninEffects.prototype, "AfterSigninFiled$", void 0);
    tslib.__decorate([
        effects.Effect({ dispatch: false }),
        tslib.__metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectToLoginPage$", void 0);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         */
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
        return AuthenticationEffects;
    }());
    AuthenticationEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AuthenticationEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
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
        NgsAuthenticationModule.forRoot = function (config$$1) {
            if (config$$1 === void 0) {
                config$$1 = ({});
            }
            return {
                ngModule: RootNgsAuthenticationModule,
                providers: [
                    { provide: MODULE_CONFIG_TOKEN, useValue: config$$1 },
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
        return NgsAuthenticationModule;
    }());
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
                    providers: [],
                    exports: []
                },] },
    ];
    var RootNgsAuthenticationModule = (function () {
        function RootNgsAuthenticationModule() {
        }
        return RootNgsAuthenticationModule;
    }());
    RootNgsAuthenticationModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        store.StoreModule.forFeature("authentication", AuthenticationReducers),
                        effects.EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                        AuthenticationRoutingModule,
                        NgsAuthenticationModule
                    ]
                },] },
    ];

    exports.UserModel = UserModel;
    exports.SignInActionTypes = SignInActionTypes;
    exports.SignoutAction = SignoutAction;
    exports.SigninService = SigninService;
    exports.SigninServiceStub = SigninServiceStub;
    exports.NgsAuthenticationModule = NgsAuthenticationModule;
    exports.RootNgsAuthenticationModule = RootNgsAuthenticationModule;
    exports.ɵk = AuthenticationRoutingModule;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵf = SigninComponent;
    exports.ɵj = AuthenticationEffects;
    exports.ɵi = SigninEffects;
    exports.ɵm = UnauthorizedInterceptor;
    exports.ɵn = WithCredentialInterceptor;
    exports.ɵh = AuthenticationReducers;
    exports.ɵl = SigninGuard;
    exports.ɵa = AuthenticationConfigurationService;
    exports.ɵg = AuthenticationContainerComponent;
    exports.ɵd = SigninContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-authentication.umd.js.map

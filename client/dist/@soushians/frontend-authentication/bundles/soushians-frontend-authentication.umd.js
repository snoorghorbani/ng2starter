(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/forms'), require('@soushians/form'), require('@angular/common/http'), require('@ngrx/store'), require('@angular/material/snack-bar'), require('@angular/router'), require('rxjs'), require('@angular/material'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/operators'), require('@soushians/user')) :
    typeof define === 'function' && define.amd ? define('@soushians/frontend-authentication', ['exports', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/forms', '@soushians/form', '@angular/common/http', '@ngrx/store', '@angular/material/snack-bar', '@angular/router', 'rxjs', '@angular/material', '@angular/core', '@ngrx/effects', 'rxjs/operators', '@soushians/user'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians['frontend-authentication'] = {}),global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.forms,global.form,global.ng.common.http,global.i2,global.ng.material['snack-bar'],global.ng.router,global.rxjs,global.ng.material,global.ng.core,global.effects,global.rxjs.operators,global.user));
}(this, (function (exports,common,flexLayout,animations,forms,form,i1,i2,i4,router,rxjs,material,i0,effects,operators,user) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                Object.keys(params).forEach(function (key) {
                    if (key in params)
                        ( /** @type {?} */(_this))[key] = params[key];
                });
        }
        return UserModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    var Signin = /** @class */ (function () {
        function Signin(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN;
        }
        return Signin;
    }());
    var SigninSecceed = /** @class */ (function () {
        function SigninSecceed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_SUCCEED;
        }
        return SigninSecceed;
    }());
    var SigninFailed = /** @class */ (function () {
        function SigninFailed(payload) {
            this.payload = payload;
            this.type = SignInActionTypes.SIGNIN_FAILURE;
        }
        return SigninFailed;
    }());
    var DoSignoutAction = /** @class */ (function () {
        function DoSignoutAction() {
            this.type = SignInActionTypes.DO_SIGNOUT;
        }
        return DoSignoutAction;
    }());
    var SignoutAction = /** @class */ (function () {
        function SignoutAction() {
            this.type = SignInActionTypes.SIGNOUT;
        }
        return SignoutAction;
    }());
    var SigninRequiredAction = /** @class */ (function () {
        function SigninRequiredAction() {
            this.type = SignInActionTypes.SIGNIN_REQUIRED;
        }
        return SigninRequiredAction;
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
        if (state === void 0) {
            state = initialState;
        }
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
    /** @type {?} */
    var getLoggedIn = function (state) { return state.loggedIn; };
    /** @type {?} */
    var getUser = function (state) { return state.user; };
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FrontendAuthenticationReducers = {
        userStatus: UserReducer
    };
    /** @type {?} */
    var selectFrontendAuthenticationState = i2.createFeatureSelector("frontend-authentication");
    /** @type {?} */
    var selectAuthState = i2.createSelector(selectFrontendAuthenticationState, function (state) { return state.userStatus; });
    /** @type {?} */
    var getFrontendAuthenticationState = i2.createSelector(selectAuthState, getLoggedIn);
    /** @type {?} */
    var getFrontendUser = i2.createSelector(selectAuthState, getUser);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FrontendAuthenticationContainerComponent = /** @class */ (function () {
        function FrontendAuthenticationContainerComponent() {
        }
        FrontendAuthenticationContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "\n          <router-outlet></router-outlet>\n        "
                    }] }
        ];
        return FrontendAuthenticationContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("ModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        FrontendAuthenticationConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FrontendAuthenticationConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });
        return FrontendAuthenticationConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SigninContainerComponent = /** @class */ (function () {
        function SigninContainerComponent(configurationService, store) {
            this.configurationService = configurationService;
            this.store = store;
            this.signedIn$ = new i0.EventEmitter();
            this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
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
                    }] }
        ];
        /** @nocollapse */
        SigninContainerComponent.ctorParameters = function () {
            return [
                { type: FrontendAuthenticationConfigurationService },
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SigninComponent = /** @class */ (function () {
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
                        template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signin($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                        styles: [""]
                    }] }
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FrontendSigninService = /** @class */ (function () {
        function FrontendSigninService(http, store, configurationService, snackBar) {
            // setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.snackBar = snackBar;
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
                this.configurationService.config$.subscribe(function (c) {
                    debugger;
                });
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.signIn != ""; }), operators.take(1), operators.switchMap(function (config) { return _this.http.post(config.env.frontend_server + config.endpoints.signIn, { token: token }); }), operators.map(function (response) {
                    /** @type {?} */
                    var user$$1 = Object.assign({}, response.Result);
                    if (user$$1.Role) {
                        user$$1.Roles = [user$$1.Role];
                    }
                    return user$$1;
                }));
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
                    .map(function (response) { return response; });
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
                    .map(function (response) { return response; });
            };
        FrontendSigninService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        FrontendSigninService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: FrontendAuthenticationConfigurationService },
                { type: material.MatSnackBar }
            ];
        };
        /** @nocollapse */ FrontendSigninService.ngInjectableDef = i0.defineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(FrontendAuthenticationConfigurationService), i0.inject(i4.MatSnackBar)); }, token: FrontendSigninService, providedIn: "root" });
        return FrontendSigninService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SigninEffects = /** @class */ (function () {
        function SigninEffects(actions$, router$$1, frontendSigninService, configurationService, bottomSheet) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.frontendSigninService = frontendSigninService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.whoAmI$ = this.actions$
                .ofType(SignInActionTypes.WHO_AM_I)
                .pipe(operators.switchMap(function () { return _this.frontendSigninService.whoAmI(); }), operators.map(function (user$$1) { return new SigninSecceed(user$$1); }), operators.catchError(function (error) { return rxjs.of(new SigninFailed(error)); }));
            this.Signin$ = this.actions$
                .ofType(SignInActionTypes.SIGNIN)
                .pipe(operators.pluck("payload"), operators.switchMap(function (payload) { return _this.frontendSigninService.signin(payload); }), operators.map(function (user$$1) { return new SigninSecceed(user$$1); }), operators.catchError(function (error) { return rxjs.of(new SigninFailed(error)); }));
            this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(operators.tap(function (data) {
                /** @type {?} */
                var signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
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
            this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(operators.switchMap(function (data) {
                return _this.frontendSigninService.signout().pipe(operators.map(function () { return new SignoutAction(); }), operators.catchError(function (err) {
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
                .pipe(operators.tap(function (authed) { return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]); }));
        }
        SigninEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        SigninEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FrontendSigninService },
                { type: FrontendAuthenticationConfigurationService },
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FrontendAuthenticationModuleEffects = /** @class */ (function () {
        function FrontendAuthenticationModuleEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.goToList$ = this.actions$.ofType(user.UserActionTypes.REFRESH_USER_INFO).pipe(operators.map(function (action) { return action.payload; }), operators.filter(function (user$$1) { return user$$1.Token != null; }), operators.switchMap(function (user$$1) {
                return _this.service.signin(user$$1.Token).map(function (_user) {
                    return new SigninSecceed(_user);
                });
            }));
        }
        FrontendAuthenticationModuleEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        FrontendAuthenticationModuleEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: FrontendSigninService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FrontendAuthenticationModuleEffects.prototype, "goToList$", void 0);
        return FrontendAuthenticationModuleEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                if (config === void 0) {
                    config = /** @type {?} */ ({});
                }
                return {
                    ngModule: RootNgsFrontendAuthenticationModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FrontendSigninService]
                };
            };
        NgsFrontendAuthenticationModule.decorators = [
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
        }
        RootNgsFrontendAuthenticationModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
                            effects.EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
                            FrontendAuthenticationRoutingModule,
                            NgsFrontendAuthenticationModule
                        ]
                    },] }
        ];
        return RootNgsFrontendAuthenticationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.UserModel = UserModel;
    exports.SignInActionTypes = SignInActionTypes;
    exports.DoSignoutAction = DoSignoutAction;
    exports.SigninRequiredAction = SigninRequiredAction;
    exports.getFrontendAuthenticationState = getFrontendAuthenticationState;
    exports.getFrontendUser = getFrontendUser;
    exports.NgsFrontendAuthenticationModule = NgsFrontendAuthenticationModule;
    exports.ɵm = SigninComponent;
    exports.ɵq = SigninEffects;
    exports.ɵr = FrontendAuthenticationRoutingModule;
    exports.ɵj = MODULE_CONFIG_TOKEN;
    exports.ɵo = FrontendAuthenticationModuleEffects;
    exports.ɵd = RootNgsFrontendAuthenticationModule;
    exports.ɵa = FrontendAuthenticationReducers;
    exports.ɵc = selectAuthState;
    exports.ɵb = selectFrontendAuthenticationState;
    exports.ɵe = UserReducer;
    exports.ɵf = getLoggedIn;
    exports.ɵg = getUser;
    exports.ɵi = FrontendAuthenticationConfigurationService;
    exports.ɵp = FrontendSigninService;
    exports.ɵn = FrontendAuthenticationContainerComponent;
    exports.ɵh = SigninContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=soushians-frontend-authentication.umd.js.map
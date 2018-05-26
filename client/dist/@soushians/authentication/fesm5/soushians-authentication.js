import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { getAuthenticationModuleConfig } from '@soushians/config';
import { RouterModule, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { HttpResponse, HttpErrorResponse, HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBar, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { map, switchMap, take, filter, catchError, tap } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgsFormModule } from '@soushians/form';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserModel = /** @class */ (function () {
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
    var Request = /** @class */ (function () {
        function Request() {
        }
        return Request;
    }());
    Signin_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        /**
         * @param {?} params
         */
        function Response(params) {
            var _this = this;
            Object.keys(params).forEach(function (key) { return (((_this))[key] = ((params))[key]); });
        }
        /**
         * @return {?}
         */
        Response.prototype.extractData = function () {
            return this.Result.User;
        };
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
var ProgressingStarted = /** @class */ (function () {
    function ProgressingStarted() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
    return ProgressingStarted;
}());
var ProgressingFinished = /** @class */ (function () {
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
var NewCaptcha = /** @class */ (function () {
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
var Signin = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function Signin(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
    return Signin;
}());
var SigninSecceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function SigninSecceed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
    return SigninSecceed;
}());
var SigninFailed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function SigninFailed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
    return SigninFailed;
}());
var SignoutAction = /** @class */ (function () {
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
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

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
    if (state === void 0) { state = initialState; }
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
var /** @type {?} */ selectAuthenticationState = createFeatureSelector("authentication");
var /** @type {?} */ selectAuthState = createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
var /** @type {?} */ getLoggedIn$1 = createSelector(selectAuthState, getLoggedIn);
var /** @type {?} */ getUser$1 = createSelector(selectAuthState, getUser);
// export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
// 	return state.captcha;
// });
// export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AdminGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function AdminGuard(store) {
        this.store = store;
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AdminGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ AdminGuard.ngInjectableDef = defineInjectable({ factory: function AdminGuard_Factory() { return new AdminGuard(inject(Store)); }, token: AdminGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AgentGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function AgentGuard(store) {
        this.store = store;
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AgentGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ AgentGuard.ngInjectableDef = defineInjectable({ factory: function AgentGuard_Factory() { return new AgentGuard(inject(Store)); }, token: AgentGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function UserGuard(store) {
        this.store = store;
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ UserGuard.ngInjectableDef = defineInjectable({ factory: function UserGuard_Factory() { return new UserGuard(inject(Store)); }, token: UserGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninGuard = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function SigninGuard(store) {
        this.store = store;
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
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninGuard.ctorParameters = function () { return [
    { type: Store }
]; };
/** @nocollapse */ SigninGuard.ngInjectableDef = defineInjectable({ factory: function SigninGuard_Factory() { return new SigninGuard(inject(Store)); }, token: SigninGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AuthenticationContainerComponent = /** @class */ (function () {
    function AuthenticationContainerComponent() {
    }
    return AuthenticationContainerComponent;
}());
AuthenticationContainerComponent.decorators = [
    { type: Component, args: [{
                template: "\n          <router-outlet></router-outlet>\n        "
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AuthenticationConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function AuthenticationConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getAuthenticationModuleConfig).subscribe(function (storeConfig) {
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
    { type: Injectable },
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninContainerComponent = /** @class */ (function () {
    /**
     * @param {?} configurationService
     * @param {?} store
     */
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signIn; });
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
    { type: Component, args: [{
                template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
            },] },
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = function () { return [
    { type: AuthenticationConfigurationService },
    { type: Store }
]; };

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
var /** @type {?} */ AuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        this.signedin = new EventEmitter();
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
    { type: Component, args: [{
                selector: "auth-signin",
                template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        (accept)=\"signin($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                styles: [""]
            },] },
];
/** @nocollapse */
SigninComponent.ctorParameters = function () { return []; };
SigninComponent.propDecorators = {
    signedin: [{ type: Output }],
    formId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WithCredentialInterceptor = /** @class */ (function () {
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
    { type: Injectable },
];
/** @nocollapse */
WithCredentialInterceptor.ctorParameters = function () { return [
    { type: AuthenticationConfigurationService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UnauthorizedInterceptor = /** @class */ (function () {
    /**
     * @param {?} router
     * @param {?} store
     */
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
    UnauthorizedInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof HttpResponse)
                return event;
        })
            .catch(function (err) {
            if (!(err instanceof HttpErrorResponse))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            _this.store.dispatch(new SignoutAction());
            return Observable.throw("Unauthorized");
        });
    };
    return UnauthorizedInterceptor;
}());
UnauthorizedInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = function () { return [
    { type: Router },
    { type: Store }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ SIGNIN_RESPONSE = "[APP] SIGNIN_RESPONSE";
var SigninService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} configurationService
     * @param {?} snackBar
     */
    function SigninService(http, configurationService, snackBar) {
        this.http = http;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    SigninService.prototype.signin = function (model) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) { return _this.http.post(_this.configurationService.config.endpoints.signIn, model); }), map(function (response) {
            var /** @type {?} */ userModel = new Signin_ApiModel.Response(response).extractData();
            // this.SigninResponse.next(userModel);
            return userModel;
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
    { type: Injectable },
];
/** @nocollapse */
SigninService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} signinService
     */
    function SigninEffects(actions$, router, signinService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.preSignUpStart$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(switchMap(function (action) { return _this.signinService.signin(action.payload); }), map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return Observable.of(new SigninFailed(error)); }));
        this.SigninSucceed$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(tap(function (data) { return _this.router.navigate(["/"]); }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
            .pipe(tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
    }
    return SigninEffects;
}());
SigninEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SigninEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: SigninService }
]; };
__decorate([
    Effect(),
    __metadata("design:type", Object)
], SigninEffects.prototype, "preSignUpStart$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Object)
], SigninEffects.prototype, "SigninSucceed$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], SigninEffects.prototype, "AfterSigninFiled$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Object)
], SigninEffects.prototype, "redirectToLoginPage$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AuthenticationEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     */
    function AuthenticationEffects(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.dispachProgressingStarted$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(map(function () { return new ProgressingStarted(); }));
        this.dispachProgressingFinished$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(map(function () { return new ProgressingFinished(); }));
    }
    return AuthenticationEffects;
}());
AuthenticationEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthenticationEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router }
]; };
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsAuthenticationModule = /** @class */ (function () {
    function NgsAuthenticationModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsAuthenticationModule.forRoot = function (config) {
        if (config === void 0) { config = ({}); }
        return {
            ngModule: RootNgsAuthenticationModule,
            providers: [
                { provide: MODULE_CONFIG_TOKEN, useValue: config },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: UnauthorizedInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: WithCredentialInterceptor,
                    multi: true
                }
            ]
        };
    };
    return NgsAuthenticationModule;
}());
NgsAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserAnimationsModule,
                    ReactiveFormsModule,
                    FormsModule,
                    NgsFormModule
                ],
                declarations: [SigninContainerComponent, SigninComponent, AuthenticationContainerComponent],
                exports: []
            },] },
];
var RootNgsAuthenticationModule = /** @class */ (function () {
    function RootNgsAuthenticationModule() {
    }
    return RootNgsAuthenticationModule;
}());
RootNgsAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature("authentication", AuthenticationReducers),
                    EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                    AuthenticationRoutingModule,
                    NgsAuthenticationModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserModel, SignInActionTypes, SignoutAction, NgsAuthenticationModule, RootNgsAuthenticationModule, AuthenticationRoutingModule as ɵl, MODULE_CONFIG_TOKEN as ɵc, SigninComponent as ɵf, AuthenticationEffects as ɵk, SigninEffects as ɵi, UnauthorizedInterceptor as ɵn, WithCredentialInterceptor as ɵo, AuthenticationReducers as ɵh, SigninGuard as ɵm, AuthenticationConfigurationService as ɵb, SigninService as ɵj, AuthenticationContainerComponent as ɵg, SigninContainerComponent as ɵa };
//# sourceMappingURL=soushians-authentication.js.map

import { InjectionToken, Injectable, Inject, NgModule, Component, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { of, BehaviorSubject, throwError } from 'rxjs';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { getAuthenticationModuleConfig } from '@soushians/config';
import { HttpClient, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from '@angular/material';
import { map, switchMap, take, filter, tap, catchError, pluck } from 'rxjs/operators';
import { stringTemplate, Cookie } from '@soushians/shared';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { RouterModule, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { __decorate, __metadata, __assign } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgsFormModule } from '@soushians/form';

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
                    (/** @type {?} */ (_this))[key] = params[key];
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
var SignupSecceed = /** @class */ (function () {
    function SignupSecceed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_SUCCEED;
    }
    return SignupSecceed;
}());
var SignupFailed = /** @class */ (function () {
    function SignupFailed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_FAILURE;
    }
    return SignupFailed;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    mode: "cookie-base",
    token: {
        time: 24 * 12 * 60 * 60
    },
    server: "frontend_server",
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
    signupValidator: function (value) { return of(true); },
    afterSignin: function (user) { },
    responseToUser: function (user) { return user; }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AuthenticationConfigurationService = /** @class */ (function () {
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
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    AuthenticationConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
    return AuthenticationConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var NEW_CAPTCHA = '[captcha] new captcha';
var NewCaptcha = /** @class */ (function () {
    function NewCaptcha() {
        this.type = NEW_CAPTCHA;
    }
    return NewCaptcha;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        setTimeout(function () { return _this.store.dispatch(new WhoAmIAction()); }, 300);
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signUp != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env[config.server] + config.endpoints.signUp, model);
        }), map(function (response) {
            /** @type {?} */
            var user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env[config.server] + config.endpoints.signIn, model);
        }), map(this.configurationService.config.responseToUser), map(function (user) {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }), tap(function (user) {
            if (_this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), _this.configurationService.config.token.time);
        }), tap(function (user) { return _this.configurationService.config.afterSignin(user); }));
    };
    // TODO:
    /**
     * @return {?}
     */
    SigninService.prototype.signout = /**
     * @return {?}
     */
    function () {
        Cookie.deleteCookie(COOKIE_NAME);
        return this.http
            .get(this.configurationService.config.env[this.configurationService.config.server] + this.configurationService.config.endpoints.signOut)
            .pipe(tap(function () {
            Cookie.deleteCookie(COOKIE_NAME);
        }));
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
                user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
            }
            catch (error) { }
        }
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.whoAmI != ""; }), take(1), switchMap(function (config) {
            return _this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user: user }));
        }));
    };
    SigninService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SigninService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: AuthenticationConfigurationService },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ SigninService.ngInjectableDef = defineInjectable({ factory: function SigninService_Factory() { return new SigninService(inject(HttpClient), inject(Store), inject(AuthenticationConfigurationService), inject(MatSnackBar$1)); }, token: SigninService, providedIn: "root" });
    return SigninService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SigninContainerComponent = /** @class */ (function () {
    function SigninContainerComponent(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.signedIn$ = new EventEmitter();
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
        { type: Component, args: [{
                    template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                },] },
    ];
    /** @nocollapse */
    SigninContainerComponent.ctorParameters = function () { return [
        { type: AuthenticationConfigurationService },
        { type: Store }
    ]; };
    SigninContainerComponent.propDecorators = {
        signedIn$: [{ type: Output }]
    };
    return SigninContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AuthenticationContainerComponent = /** @class */ (function () {
    function AuthenticationContainerComponent() {
    }
    AuthenticationContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "\n          <router-outlet></router-outlet>\n        "
                },] },
    ];
    return AuthenticationContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SignupContainerComponent = /** @class */ (function () {
    function SignupContainerComponent(configurationService, store, snackBar) {
        this.configurationService = configurationService;
        this.store = store;
        this.snackBar = snackBar;
        this.signedUp$ = new EventEmitter();
        this.formId$ = this.configurationService.config$.map(function (config) { return config.forms.signUp; });
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
            .pipe(take(1), switchMap(function (config) { return config.signupValidator(formValue); }))
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
        { type: Component, args: [{
                    template: "\n        <auth-signup \n                [formId]='(formId$ | async)'\n                (signedup)=\"signup($event)\"\n        ></auth-signup>\n  "
                },] },
    ];
    /** @nocollapse */
    SignupContainerComponent.ctorParameters = function () { return [
        { type: AuthenticationConfigurationService },
        { type: Store },
        { type: MatSnackBar }
    ]; };
    SignupContainerComponent.propDecorators = {
        signedUp$: [{ type: Output }]
    };
    return SignupContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
var AuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        this.signedin = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "auth-signin",
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        [card]=\"true\"\n        (accept)=\"signin($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return []; };
    SigninComponent.propDecorators = {
        signedin: [{ type: Output }],
        formId: [{ type: Input }]
    };
    return SigninComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        (/** @type {?} */ (request)).withCredentials = true;
        return next.handle(request);
    };
    WithCredentialInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WithCredentialInterceptor.ctorParameters = function () { return [
        { type: AuthenticationConfigurationService }
    ]; };
    return WithCredentialInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .map(function (event) {
            if (event instanceof HttpResponse)
                return event;
        })
            .catch(function (err) {
            if (!(err instanceof HttpErrorResponse))
                return throwError(err);
            if (err.status != 401)
                return throwError(err);
            if (err.url.includes("logout"))
                return throwError(err);
            if (err.url.includes("user/account/profile"))
                return throwError(err);
            _this.store.dispatch(new SignoutAction());
            return throwError("Unauthorized");
        });
    };
    UnauthorizedInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UnauthorizedInterceptor.ctorParameters = function () { return [
        { type: Router },
        { type: Store }
    ]; };
    return UnauthorizedInterceptor;
}());

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
var AuthenticationReducers = {
    userStatus: UserReducer
};
/** @type {?} */
var selectAuthenticationState = createFeatureSelector("authentication");
/** @type {?} */
var selectAuthState = createSelector(selectAuthenticationState, function (state) { return state.userStatus; });
/** @type {?} */
var getLoggedIn$1 = createSelector(selectAuthState, getLoggedIn);
/** @type {?} */
var getUser$1 = createSelector(selectAuthState, getUser);
// export const selectCaptchaState = createSelector(selectAuthenticationState, (state: AuthenticationState) => {
// 	return state.captcha;
// });
// export const getCaptcha = createSelector(selectCaptchaState, captchaReducer.getCaptcha);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SigninEffects = /** @class */ (function () {
    function SigninEffects(actions$, router, signinService, configurationService, bottomSheet) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(function () {
            return _this.signinService
                .whoAmI()
                .pipe(map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return of(new SigninFailed(error)); }));
        }));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(function (payload) {
            return _this.signinService
                .signin(payload)
                .pipe(map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return of(new SigninFailed(error)); }));
        }));
        this.signup$ = this.actions$
            .ofType(SignInActionTypes.SIGNUP)
            .pipe(pluck("payload"), switchMap(function (payload) {
            return _this.signinService
                .signup(payload)
                .pipe(map(function (user) { return new SignupSecceed(user); }), catchError(function (error) { return of(new SignupFailed(error)); }));
        }));
        this.signupSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNUP_SUCCEED).pipe(tap(function () {
            debugger;
            _this.router.navigate(["auth/signin"]);
        }));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap(function (data) {
            /** @type {?} */
            var signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(function () {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(tap(function (data) {
            if (location.pathname.indexOf("signin") > -1)
                _this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(function (data) {
            return _this.signinService.signout().pipe(map(function () { return new SignoutAction(); }), catchError(function (err) {
                // TODO: dispatch valid action
                debugger;
                return of(err);
            }));
        }));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT)
            .pipe(tap(function (authed) { return _this.router.navigate(["auth/signin"]); }));
        this.redirectAfterSignout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(tap(function (authed) { return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]); }));
    }
    SigninEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SigninEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: SigninService },
        { type: AuthenticationConfigurationService },
        { type: MatBottomSheet }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "whoAmI$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "Signin$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "signup$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "signupSucceed$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "SignInRequired$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "SigninSucceed$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "AfterSigninFiled$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "DoSignout$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectToLoginPage$", void 0);
    __decorate([
        Effect({ dispatch: false }),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectAfterSignout$", void 0);
    return SigninEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AuthenticationEffects = /** @class */ (function () {
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
    return AuthenticationEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.signedup = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "auth-signup",
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        [card]=\"true\"\n        (accept)=\"signup($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = function () { return []; };
    SignupComponent.propDecorators = {
        signedup: [{ type: Output }],
        formId: [{ type: Input }]
    };
    return SignupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return this.store.select(getLoggedIn$1).take(1).map(function (authed) { return !authed; });
    };
    SigninGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SigninGuard.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SigninGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (config === void 0) { config = /** @type {?} */ ({}); }
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
                },
                SigninService
            ]
        };
    };
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
                        MatBottomSheetModule,
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
var RootNgsAuthenticationModule = /** @class */ (function () {
    function RootNgsAuthenticationModule() {
    }
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
    return RootNgsAuthenticationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, SigninService, SigninContainerComponent, NgsAuthenticationModule, getUser$1 as getUser, AuthenticationRoutingModule as ɵr, MODULE_CONFIG_TOKEN as ɵa, RootNgsAuthenticationModule as ɵb, SigninComponent as ɵi, SignupComponent as ɵl, AuthenticationEffects as ɵq, SigninEffects as ɵp, UnauthorizedInterceptor as ɵs, WithCredentialInterceptor as ɵt, AuthenticationReducers as ɵc, selectAuthState as ɵe, selectAuthenticationState as ɵd, UserReducer as ɵn, getUser as ɵo, SigninGuard as ɵm, AuthenticationConfigurationService as ɵh, AuthenticationContainerComponent as ɵj, SignupContainerComponent as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9zaWduaW4uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYXV0aGVudGljYXRpb24uY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvYXV0aGVudGljYXRpb24uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9jYXB0Y2hhLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NtYXJ0LWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tY29udGFpbmVyL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvdXNlci5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZWZmZWN0cy9zaWduaW4uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JvdXRpbmctZ3VhcmRzL3NpZ25pbi5ndWFyZC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdC8vIEZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIExhc3ROYW1lOiBzdHJpbmc7XHJcblx0VXNlcm5hbWU6IHN0cmluZztcclxuXHQvLyBNb2JpbGVOdW1iZXI6IHN0cmluZztcclxuXHQvLyBTZXg6IHN0cmluZztcclxuXHQvLyBCaXJ0aGRhdGU6IHN0cmluZztcclxuXHRFbWFpbDogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpY2F0aW9uTm86IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWVyVHlwZTogc3RyaW5nO1xyXG5cdC8vIFJlZ2lzdGVyRGF0ZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJUeXBlOiBzdHJpbmc7XHJcblx0Um9sZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xyXG5cdFx0cGFyYW1zICYmXHJcblx0XHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdGlmIChrZXkgaW4gcGFyYW1zKSAodGhpcyBhcyBhbnkpW2tleV0gPSBwYXJhbXNba2V5XTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbQVVUSEVOVElDQVRJT05dIHdobyBhbSBpXCIsXHJcblx0U0lHTlVQID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gc3RhcnRcIixcclxuXHRTSUdOVVBfU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIFN1Y2Nlc3NcIixcclxuXHRTSUdOVVBfRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIEZhaWx1cmVcIixcclxuXHRTSUdOSU4gPSBcIltBVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx0c2lnbiB1cFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ251cCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogU2lnbmluX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBTZWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUF9GQUlMVVJFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaWduIGluXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ251cFxyXG5cdHwgU2lnbnVwU2VjY2VlZFxyXG5cdHwgU2lnbnVwRmFpbGVkXHJcblx0fCBTaWduaW5cclxuXHR8IFNpZ25pblNlY2NlZWRcclxuXHR8IFNpZ25pbkZhaWxlZFxyXG5cdHwgU2lnbmluUmVkaXJlY3RcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbmluUmVxdWlyZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcbiAgICBtb2RlPzogc3RyaW5nOyAvLyBcInRva2VuLWJhc2VcIiB8IFwiY29va2llLWJhc2VcIjtcclxuICAgIHRva2VuPzoge1xyXG4gICAgICAgIHRpbWU6IG51bWJlclxyXG4gICAgfTtcclxuICAgIHNlcnZlcj86IHN0cmluZztcclxuICAgIGVuZHBvaW50cz86IHtcclxuICAgICAgICBzaWduT3V0Pzogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25Jbj86IHN0cmluZztcclxuICAgICAgICBzaWduVXA/OiBzdHJpbmc7XHJcbiAgICAgICAgd2hvQW1JPzogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGZvcm1zPzoge1xyXG4gICAgICAgIHNpZ25Jbjogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25VcDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGVudj86IHtcclxuICAgICAgICBwcm9kdWN0aW9uOiBib29sZWFuO1xyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG4gICAgICAgIHNlcnZlcjogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbiAgICBzaWdudXBWYWxpZGF0b3I/OiAodmFsdWU6IGFueSkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgIGFmdGVyU2lnbmluPzogKHVzZXI6IGFueSkgPT4gdm9pZDtcclxuICAgIHJlc3BvbnNlVG9Vc2VyPzogKHVzZXI6IGFueSkgPT4gYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcbiAgICBtb2RlOiBcImNvb2tpZS1iYXNlXCIsXHJcbiAgICB0b2tlbjoge1xyXG4gICAgICAgIHRpbWU6IDI0ICogMTIgKiA2MCAqIDYwXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG4gICAgZW5kcG9pbnRzOiB7XHJcbiAgICAgICAgc2lnbk91dDogXCJcIixcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiLFxyXG4gICAgICAgIHdob0FtSTogXCJcIlxyXG4gICAgfSxcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgICAgc2lnbkluOiBcIlwiLFxyXG4gICAgICAgIHNpZ25VcDogXCJcIlxyXG4gICAgfSxcclxuICAgIGVudjoge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IGZhbHNlLFxyXG4gICAgICAgIGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZF9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuICAgICAgICBzZXJ2ZXI6IFwiYXV0aC9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuICAgIH0sXHJcbiAgICBhZnRlclNpZ25vdXRSZWRpcmVjdFRvOiBcIi9cIixcclxuICAgIHNpZ251cFZhbGlkYXRvcjogdmFsdWUgPT4gb2YodHJ1ZSksXHJcbiAgICBhZnRlclNpZ25pbjogKHVzZXIpID0+IHsgfSxcclxuICAgIHJlc3BvbnNlVG9Vc2VyOiB1c2VyID0+IHVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPihcIk1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2F1dGhlbnRpY2F0aW9uLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogYW55LCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBdXRoZW50aWNhdGlvblN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHN0b3JlQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCFzdG9yZUNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHN0b3JlQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9ICdbQVVUSEVOVElDQVRJT05dIFBST0dSRVNTSU5HX1NUQVJURUQnLFxyXG5cdFBST0dSRVNTSU5HX0ZJTklTSEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRUQnLFxyXG5cdEZBSUxFRF9IQVBQRU5FRCA9ICdbQVVUSEVOVElDQVRJT05dIEZBSUxFRF9IQVBQRU5FRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfU1RBUlRFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdGaW5pc2hlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhlbnRpY2F0aW9uQWN0aW9uVHlwZXMuUFJPR1JFU1NJTkdfRklOSVNIRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZhaWxlZEhhcHBlbmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25BY3Rpb24gPSBQcm9ncmVzc2luZ1N0YXJ0ZWQgfCBQcm9ncmVzc2luZ0ZpbmlzaGVkIHwgRmFpbGVkSGFwcGVuZWQ7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFRva2VuTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5FV19DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBuZXcgY2FwdGNoYSc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIHRva2VuX3JlcXVlc3RlZCc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTl9SRUNFSVZFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVjZWl2ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9SRVFVRVNURUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfSU1BR0VfTE9BREVEID0gJ1tjYXB0Y2hhXSBjYXB0Y2hhX2ltYWdlX2xvYWRlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0VOVEVSRUQgPSAnW2NhcHRjaGFdIENBUFRDSEFfRU5URVJFRCc7XHJcbmV4cG9ydCBjb25zdCBDTEVBUl9DQVBUQ0hBID0gJ1tjYXB0Y2hhXSBDTEVBUl9DQVBUQ0hBJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOZXdDYXB0Y2hhIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gTkVXX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVxdWVzdGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBUb2tlblJlY2VpdmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gVE9LRU5fUkVDRUlWRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRva2VuTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VSZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUltYWdlTG9hZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9JTUFHRV9MT0FERUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFFbnRlcmVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ0FQVENIQV9FTlRFUkVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhckNhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDTEVBUl9DQVBUQ0hBO1xyXG59XHJcbmV4cG9ydCB0eXBlIENhcHRjaGFBY3Rpb24gPVxyXG4gICAgICAgIHwgTmV3Q2FwdGNoYVxyXG4gICAgICAgIHwgVG9rZW5SZXF1ZXN0ZWRcclxuICAgICAgICB8IFRva2VuUmVjZWl2ZWRcclxuICAgICAgICB8IENhcHRjaGFJbWFnZVJlcXVlc3RlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlTG9hZGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhRW50ZXJlZFxyXG4gICAgICAgIHwgQ2xlYXJDYXB0Y2hhOyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIGZpbHRlciwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBXaG9BbUlBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJuZ3MtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdob0FtSUFjdGlvbigpKSwgMzAwKTtcclxuXHR9XHJcblxyXG5cdHNpZ251cChtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnNpZ25VcCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0PFNpZ25pbl9BcGlNb2RlbC5SZXNwb25zZT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMuc2lnblVwLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbdXNlci5Sb2xlXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2lnbmluKG1vZGVsOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3Q8YW55Pihjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy5zaWduSW4sIG1vZGVsKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucmVzcG9uc2VUb1VzZXIpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IHtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gW3VzZXIuUm9sZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5tb2RlID09IFwidG9rZW4tYmFzZVwiKVxyXG5cdFx0XHRcdFx0Q29va2llLnNldENvb2tpZShDT09LSUVfTkFNRSwgSlNPTi5zdHJpbmdpZnkodXNlciksIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnRva2VuLnRpbWUpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFwKCh1c2VyKSA9PiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5hZnRlclNpZ25pbih1c2VyKSksXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gVE9ETzpcclxuXHRzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRDb29raWUuZGVsZXRlQ29va2llKENPT0tJRV9OQU1FKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnZbdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuc2VydmVyXSArIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5zaWduT3V0XHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0dGFwKCgpID0+IHtcclxuXHRcdFx0XHRcdENvb2tpZS5kZWxldGVDb29raWUoQ09PS0lFX05BTUUpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0bGV0IHVzZXIgPSB7IFRva2VuOiBcIi0tXCIgfTtcclxuXHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5tb2RlID09IFwidG9rZW4tYmFzZVwiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dXNlciA9IEpTT04ucGFyc2UoQ29va2llLmdldENvb2tpZShDT09LSUVfTkFNRSkpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikgeyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy53aG9BbUkgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLndob0FtSSwgeyB1c2VyIH0pKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW4gfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGF1dGgtc2lnbmluIFxyXG4gICAgICAgICAgICAgICAgW2Zvcm1JZF09Jyhmb3JtSWQkIHwgYXN5bmMpJ1xyXG4gICAgICAgICAgICAgICAgKHNpZ25lZGluKT1cInNpZ25JbigkZXZlbnQpXCJcclxuICAgICAgICA+PC9hdXRoLXNpZ25pbj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5Db250YWluZXJDb21wb25lbnQge1xyXG5cdGZvcm1JZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRAT3V0cHV0KCkgc2lnbmVkSW4kID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZm9ybUlkJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5mb3Jtcy5zaWduSW4pO1xyXG5cdH1cclxuXHJcblx0c2lnbkluKGZvcm1WYWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWduaW4oZm9ybVZhbHVlKSk7XHJcblx0XHR0aGlzLnNpZ25lZEluJC5lbWl0KHRydWUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWdudXAgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB0YWtlLCBzd2l0Y2hNYXAsIGZpbHRlciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ251cCBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWR1cCk9XCJzaWdudXAoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWdudXA+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZFVwJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuXHQpIHtcclxuXHRcdHRoaXMuZm9ybUlkJCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoY29uZmlnID0+IGNvbmZpZy5mb3Jtcy5zaWduVXApO1xyXG5cdH1cclxuXHJcblx0c2lnbnVwKGZvcm1WYWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKGNvbmZpZyA9PiBjb25maWcuc2lnbnVwVmFsaWRhdG9yKGZvcm1WYWx1ZSkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKHZhbGlkYXRpb24gPT4ge1xyXG5cdFx0XHRcdGlmICh2YWxpZGF0aW9uKSB7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWdudXAoZm9ybVZhbHVlKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNpZ25lZFVwJC5lbWl0KHRydWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCLDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDm8KMw5rCqcOYwrPDmMKnw5nChiDDmcKGw5vCjMOYwrPDmMKqXCIsIG51bGwsIHtcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIyMjJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbkd1YXJkIH0gZnJvbSBcIi4vcm91dGluZy1ndWFyZHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ251cC1jb250YWluZXIvc2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiYXV0aFwiLFxyXG5cdFx0Y29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInNpZ25pblwiLFxyXG5cdFx0XHRcdC8vIGNhbkFjdGl2YXRlOiBbIFNpZ25pbkd1YXJkIF0sXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTaWduaW5Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwic2lnbnVwXCIsXHJcblx0XHRcdFx0Ly8gY2FuQWN0aXZhdGU6IFsgU2lnbmluR3VhcmQgXSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNpZ251cENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImF1dGgtc2lnbmluXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8bmdzLWZvcm0tdmlldyBcclxuICAgICAgICBbaWRdPVwiZm9ybUlkXCJcclxuICAgICAgICBbY2FyZF09XCJ0cnVlXCJcclxuICAgICAgICAoYWNjZXB0KT1cInNpZ25pbigkZXZlbnQpXCJcclxuICAgID48L25ncy1mb3JtLXZpZXc+XHJcbjwvZGl2PlxyXG48IS0tIDxkaXY+XHJcbiAgICA8YSBmeEZsZXg9XCJub2dyb3dcIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXhGaWxsPsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsSDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5nCgcOYwrHDmMKnw5nChcOZwojDmMK0IMOawqnDmMKxw5jCr8OZwocgw5jCp8ObwozDmMKvw5jCnzwvYT5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBzaWduZWRpbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblxyXG5cdHNpZ25pbihmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc2lnbmVkaW4uZW1pdChmb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cEhhbmRsZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgSHR0cEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0aW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cdFx0Ly8gaWYgKCF0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbilcclxuXHRcdChyZXF1ZXN0IGFzIGFueSkud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNpZ25vdXRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmcm9tQXV0aCBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21BdXRoLkZlYXR1cmVTdGF0ZT4gLy8gcHJpdmF0ZSBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlXHJcblx0KSB7fVxyXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdHJldHVybiBuZXh0XHJcblx0XHRcdC5oYW5kbGUocmVxdWVzdClcclxuXHRcdFx0Lm1hcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XHJcblx0XHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSByZXR1cm4gZXZlbnQ7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGlmICghKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSkgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuXHRcdFx0XHRpZiAoZXJyLnN0YXR1cyAhPSA0MDEpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci51cmwuaW5jbHVkZXMoXCJsb2dvdXRcIikpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci51cmwuaW5jbHVkZXMoXCJ1c2VyL2FjY291bnQvcHJvZmlsZVwiKSkgcmV0dXJuIHRocm93RXJyb3IoZXJyKTtcclxuXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbm91dEFjdGlvbigpKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRocm93RXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBTaWduaW5BY3Rpb24sIFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2dnZWRJbjogYm9vbGVhbjtcclxuXHR1c2VyOiBVc2VyTW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvZ2dlZEluOiBmYWxzZSxcclxuXHR1c2VyOiBuZXcgVXNlck1vZGVsKHsgSWQ6IDEgfSlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTaWduaW5BY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9nZ2VkSW46IGZhbHNlLFxyXG5cdFx0XHRcdHVzZXI6IG5ldyBVc2VyTW9kZWwoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8jcmVnaW9uICBzZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubG9nZ2VkSW47XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUudXNlcjtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL3VzZXIucmVkdWNlclwiO1xyXG4vLyBpbXBvcnQgKiBhcyBjYXB0Y2hhUmVkdWNlciBmcm9tIFwiLi9jYXB0Y2hhLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiYXV0aGVudGljYXRpb25cIjogQXV0aGVudGljYXRpb25TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgPSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuVXNlclJlZHVjZXJcclxuXHQvLyBjYXB0Y2hhOiBjYXB0Y2hhUmVkdWNlci5DYXB0Y2hhUmVkdWNlclxyXG59O1xyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhlbnRpY2F0aW9uU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8QXV0aGVudGljYXRpb25TdGF0ZT4oXCJhdXRoZW50aWNhdGlvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogQXV0aGVudGljYXRpb25TdGF0ZSkgPT4gc3RhdGUudXNlclN0YXR1c1xyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRVc2VyKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzZWxlY3RDYXB0Y2hhU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlLCAoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHtcclxuLy8gXHRyZXR1cm4gc3RhdGUuY2FwdGNoYTtcclxuLy8gfSk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0Q2FwdGNoYSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdENhcHRjaGFTdGF0ZSwgY2FwdGNoYVJlZHVjZXIuZ2V0Q2FwdGNoYSk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluLFxyXG5cdFNpZ251cFNlY2NlZWQsXHJcblx0U2lnbnVwRmFpbGVkXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdDYXB0Y2hhIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbmluRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHR3aG9BbUkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHRcdC53aG9BbUkoKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSkpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pbiQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTilcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRcdHN3aXRjaE1hcChwYXlsb2FkID0+XHJcblx0XHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0XHQuc2lnbmluKHBheWxvYWQpXHJcblx0XHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c2lnbnVwJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKHBheWxvYWQgPT5cclxuXHRcdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHRcdC5zaWdudXAocGF5bG9hZClcclxuXHRcdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWdudXBTZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbnVwRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0c2lnbnVwU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRCkucGlwZShcclxuXHRcdHRhcCgoKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhdXRoL3NpZ25pblwiXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduSW5SZXF1aXJlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzaWduaW5Cb3R0b21TaGVldFJlZiA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihTaWduaW5Db250YWluZXJDb21wb25lbnQsIHtcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcImNsZWFyLW1hdC1jYXJkLWJveFwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5pbnN0YW5jZS5zaWduZWRJbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gc2lnbmluQm90dG9tU2hlZXRSZWY7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKSBBZnRlclNpZ25pbkZpbGVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFKS5tYXAoKCkgPT4gbmV3IE5ld0NhcHRjaGEoKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKGRhdGEgPT5cclxuXHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlLnNpZ25vdXQoKS5waXBlKFxyXG5cdFx0XHRcdG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0XHQvLyBUT0RPOiBkaXNwYXRjaCB2YWxpZCBhY3Rpb25cclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9mKGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdC8vIFRPRE9cclxuXHQvLyBARWZmZWN0KCkgU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdFRvTG9naW5QYWdlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUKVxyXG5cdFx0LnBpcGUodGFwKGF1dGhlZCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJhdXRoL3NpZ25pblwiXSkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0QWZ0ZXJTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHR0YXAoYXV0aGVkID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5hZnRlclNpZ25vdXRSZWRpcmVjdFRvXSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcywgRmFpbGVkSGFwcGVuZWQsIFByb2dyZXNzaW5nU3RhcnRlZCwgUHJvZ3Jlc3NpbmdGaW5pc2hlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImF1dGgtc2lnbnVwXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8bmdzLWZvcm0tdmlldyBcclxuICAgICAgICBbaWRdPVwiZm9ybUlkXCJcclxuICAgICAgICBbY2FyZF09XCJ0cnVlXCJcclxuICAgICAgICAoYWNjZXB0KT1cInNpZ251cCgkZXZlbnQpXCJcclxuICAgID48L25ncy1mb3JtLXZpZXc+XHJcbjwvZGl2PlxyXG48IS0tIDxkaXY+XHJcbiAgICA8YSBmeEZsZXg9XCJub2dyb3dcIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFzc3dvcmQvcmVzZXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXhGaWxsPsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsSDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5nCgcOYwrHDmMKnw5nChcOZwojDmMK0IMOawqnDmMKxw5jCr8OZwocgw5jCp8ObwozDmMKvw5jCnzwvYT5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoKSBzaWduZWR1cCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblxyXG5cdHNpZ251cChmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc2lnbmVkdXAuZW1pdChmb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0TG9nZ2VkSW4gfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldExvZ2dlZEluKS50YWtlKDEpLm1hcChhdXRoZWQgPT4gIWF1dGhlZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRCb3R0b21TaGVldE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tY29udGFpbmVyL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFsLmludGVyY2VwdG9yXCI7XHJcbmltcG9ydCB7IFVuYXV0aG9yaXplZEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3VuYXV0aG9yaXplZC5pbnRlcmNlcHRvclwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2F1dGhlbnRpY2F0aW9uLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ251cENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbnVwLWNvbnRhaW5lci9zaWdudXAtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ25pbkNvbXBvbmVudCxcclxuXHRcdEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0U2lnbnVwQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtTaWduaW5Db250YWluZXJDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW1NpZ25pbkd1YXJkXSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSA8QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+e30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0U2lnbmluU2VydmljZVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiYXV0aGVudGljYXRpb25cIiwgQXV0aGVudGljYXRpb25SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1NpZ25pbkVmZmVjdHMsIEF1dGhlbnRpY2F0aW9uRWZmZWN0c10pLFxyXG5cdFx0QXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlLFxyXG5cdFx0TmdzQXV0aGVudGljYXRpb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzQXV0aGVudGljYXRpb25Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ1c2VyUmVkdWNlci5Vc2VyUmVkdWNlciIsImdldExvZ2dlZEluIiwidXNlclJlZHVjZXIuZ2V0TG9nZ2VkSW4iLCJnZXRVc2VyIiwi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
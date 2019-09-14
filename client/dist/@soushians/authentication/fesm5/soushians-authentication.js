import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Component, Output, Input, NgModule } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { of, BehaviorSubject, throwError } from 'rxjs';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatBottomSheetModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { filter, take, switchMap, map, tap, catchError, pluck } from 'rxjs/operators';
import { Store, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { Cookie, stringTemplate } from '@soushians/shared';
import { getAuthenticationModuleConfig } from '@soushians/config';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { NgsFormModule } from '@soushians/form';
import 'rxjs/add/operator/do';
import { __assign, __decorate, __metadata } from 'tslib';

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
function (value) { return of(true); }, ɵ1 = /**
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
var MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthenticationConfigurationService = /** @class */ (function () {
    function AuthenticationConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getAuthenticationModuleConfig).subscribe((/**
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
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AuthenticationConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
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
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.endpoints.signUp != ""; })), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            return _this.http.post(config.env[config.server] + config.endpoints.signUp, model);
        })), map((/**
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
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.endpoints.signIn != ""; })), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return _this.http.post(config.env[config.server] + config.endpoints.signIn, model); })), map(this.configurationService.config.responseToUser), map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })), tap((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            if (_this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), _this.configurationService.config.token.time);
        })), tap((/**
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
        var tokenObject = JSON.parse(Cookie.getCookie(COOKIE_NAME));
        /** @type {?} */
        var endpoint = stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
        /** @type {?} */
        var method = config.endpoints.signOutMethod || "get";
        if (["get", "put", "post", "patch", "delete"].indexOf(method) === -1) {
            throwError(method + " is not valid http method. [ @starter/authentication/signinservice/singout ]");
        }
        return this.http[method](endpoint).pipe(tap((/**
         * @return {?}
         */
        function () {
            Cookie.deleteCookie(COOKIE_NAME);
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
                user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
            }
            catch (error) { }
        }
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.endpoints.whoAmI != ""; })), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            return _this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user: user }));
        })));
    };
    SigninService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    SigninService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: AuthenticationConfigurationService },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ SigninService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SigninService_Factory() { return new SigninService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(AuthenticationConfigurationService), ɵɵinject(MatSnackBar$1)); }, token: SigninService, providedIn: "root" });
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
        this.signedIn$ = new EventEmitter();
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
        { type: Component, args: [{
                    template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
                }] }
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
        { type: Component, args: [{
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
        this.signedUp$ = new EventEmitter();
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
            .pipe(take(1), switchMap((/**
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
        { type: Component, args: [{
                    template: "\n        <auth-signup \n                [formId]='(formId$ | async)'\n                (signedup)=\"signup($event)\"\n        ></auth-signup>\n  "
                }] }
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
var AuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signin($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = function () { return []; };
    SigninComponent.propDecorators = {
        signedin: [{ type: Output }],
        formId: [{ type: Input }]
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
        { type: Injectable }
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
            if (event instanceof HttpResponse)
                return event;
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
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
        }));
    };
    UnauthorizedInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UnauthorizedInterceptor.ctorParameters = function () { return [
        { type: Router },
        { type: Store }
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
var selectAuthenticationState = createFeatureSelector("authentication");
var ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.userStatus; };
/** @type {?} */
var selectAuthState = createSelector(selectAuthenticationState, (ɵ0$1));
/** @type {?} */
var getLoggedIn$1 = createSelector(selectAuthState, getLoggedIn);
/** @type {?} */
var getUser$1 = createSelector(selectAuthState, getUser);

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
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.signinService
                .whoAmI()
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SigninFailed(error)); })));
        })));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.signinService
                .signin(payload)
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SigninFailed(error)); })));
        })));
        this.signup$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.signinService
                .signup(payload)
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SignupSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SignupFailed(error)); })));
        })));
        this.signupSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP_SUCCEED), tap((/**
         * @return {?}
         */
        function () {
            debugger;
            _this.router.navigate(["auth/signin"]);
        })));
        this.SignInRequired$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REQUIRED), tap((/**
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
        this.SigninSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (location.pathname.indexOf("signin") > -1)
                _this.router.navigate(["/"]);
        })));
        this.AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map((/**
         * @return {?}
         */
        function () { return new NewCaptcha(); })));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.signinService.signout().pipe(map((/**
             * @return {?}
             */
            function () { return new SignoutAction(); })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                // TODO: dispatch valid action
                debugger;
                return of(err);
            })));
        })));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REDIRECT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        function (authed) { return _this.router.navigate(["auth/signin"]); })));
        this.redirectAfterSignout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        function (authed) { return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]); })));
    }
    SigninEffects.decorators = [
        { type: Injectable }
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
        this.dispachProgressingStarted$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), map((/**
         * @return {?}
         */
        function () { return new ProgressingStarted(); })));
        this.dispachProgressingFinished$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), map((/**
         * @return {?}
         */
        function () { return new ProgressingFinished(); })));
    }
    AuthenticationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthenticationEffects.ctorParameters = function () { return [
        { type: Actions }
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
                    template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signup($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = function () { return []; };
    SignupComponent.propDecorators = {
        signedup: [{ type: Output }],
        formId: [{ type: Input }]
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
        { type: Injectable }
    ];
    /** @nocollapse */
    SigninGuard.ctorParameters = function () { return [
        { type: Store }
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
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature("authentication", AuthenticationReducers),
                        EffectsModule.forFeature([SigninEffects, AuthenticationEffects]),
                        AuthenticationRoutingModule,
                        NgsAuthenticationModule
                    ]
                },] }
    ];
    /** @nocollapse */
    RootNgsAuthenticationModule.ctorParameters = function () { return []; };
    return RootNgsAuthenticationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DoSignoutAction, NgsAuthenticationModule, SignInActionTypes, SigninContainerComponent, SigninRequiredAction, SigninService, UserModel, getUser$1 as getUser, MODULE_CONFIG_TOKEN as ɵa, RootNgsAuthenticationModule as ɵb, AuthenticationReducers as ɵc, selectAuthenticationState as ɵd, selectAuthState as ɵe, AuthenticationConfigurationService as ɵh, SigninComponent as ɵi, AuthenticationContainerComponent as ɵj, SignupContainerComponent as ɵk, SignupComponent as ɵl, SigninGuard as ɵm, UserReducer as ɵn, getUser as ɵo, SigninEffects as ɵp, AuthenticationEffects as ɵq, AuthenticationRoutingModule as ɵr, UnauthorizedInterceptor as ɵs, WithCredentialInterceptor as ɵt };
//# sourceMappingURL=soushians-authentication.js.map

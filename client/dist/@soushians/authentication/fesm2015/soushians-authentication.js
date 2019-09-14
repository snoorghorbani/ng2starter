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
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserModel {
    /**
     * @param {?=} params
     */
    constructor(params) {
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
            key => {
                if (key in params)
                    ((/** @type {?} */ (this)))[key] = params[key];
            }));
    }
}
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
const SignInActionTypes = {
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
class WhoAmIAction {
    constructor() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
}
if (false) {
    /** @type {?} */
    WhoAmIAction.prototype.type;
}
/**
 * 	sign up
 */
class Signup {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP;
    }
}
if (false) {
    /** @type {?} */
    Signup.prototype.type;
    /** @type {?} */
    Signup.prototype.payload;
}
class SignupSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SignupSecceed.prototype.type;
    /** @type {?} */
    SignupSecceed.prototype.payload;
}
class SignupFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_FAILURE;
    }
}
if (false) {
    /** @type {?} */
    SignupFailed.prototype.type;
    /** @type {?} */
    SignupFailed.prototype.payload;
}
/**
 * Sign in
 */
class Signin {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
}
if (false) {
    /** @type {?} */
    Signin.prototype.type;
    /** @type {?} */
    Signin.prototype.payload;
}
class SigninSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SigninSecceed.prototype.type;
    /** @type {?} */
    SigninSecceed.prototype.payload;
}
class SigninFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
}
if (false) {
    /** @type {?} */
    SigninFailed.prototype.type;
    /** @type {?} */
    SigninFailed.prototype.payload;
}
class SigninRedirect {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REDIRECT;
    }
}
if (false) {
    /** @type {?} */
    SigninRedirect.prototype.type;
}
class DoSignoutAction {
    constructor() {
        this.type = SignInActionTypes.DO_SIGNOUT;
    }
}
if (false) {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
if (false) {
    /** @type {?} */
    SignoutAction.prototype.type;
}
class SigninRequiredAction {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REQUIRED;
    }
}
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
const ɵ0 = /**
 * @param {?} value
 * @return {?}
 */
value => of(true), ɵ1 = /**
 * @param {?} user
 * @return {?}
 */
user => { }, ɵ2 = /**
 * @param {?} user
 * @return {?}
 */
user => user;
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
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
const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getAuthenticationModuleConfig).subscribe((/**
         * @param {?} storeConfig
         * @return {?}
         */
        storeConfig => {
            if (!storeConfig)
                return;
            this._config = Object.assign({}, this._config, storeConfig.Config);
            this.config$.next(this._config);
        }));
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
AuthenticationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });
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
const AuthenticationActionTypes = {
    PROGRESSING_STARTED: '[AUTHENTICATION] PROGRESSING_STARTED',
    PROGRESSING_FINISHED: '[AUTHENTICATION] PROGRESSING_FINISHED',
    FAILED_HAPPENED: '[AUTHENTICATION] FAILED_HAPPENED',
};
class ProgressingStarted {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
}
if (false) {
    /** @type {?} */
    ProgressingStarted.prototype.type;
}
class ProgressingFinished {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
}
if (false) {
    /** @type {?} */
    ProgressingFinished.prototype.type;
}
class FailedHappened {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[AUTHENTICATION] FAILED_HAPPENED" /* FAILED_HAPPENED */;
    }
}
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
const NEW_CAPTCHA = '[captcha] new captcha';
/** @type {?} */
const TOKEN_REQUESTED = '[captcha] token_requested';
/** @type {?} */
const TOKEN_RECEIVED = '[captcha] token_received';
/** @type {?} */
const CAPTCHA_IMAGE_REQUESTED = '[captcha] captcha_image_requested';
/** @type {?} */
const CAPTCHA_IMAGE_LOADED = '[captcha] captcha_image_loaded';
/** @type {?} */
const CAPTCHA_ENTERED = '[captcha] CAPTCHA_ENTERED';
/** @type {?} */
const CLEAR_CAPTCHA = '[captcha] CLEAR_CAPTCHA';
class NewCaptcha {
    constructor() {
        this.type = NEW_CAPTCHA;
    }
}
if (false) {
    /** @type {?} */
    NewCaptcha.prototype.type;
}
class TokenRequested {
    constructor() {
        this.type = TOKEN_REQUESTED;
    }
}
if (false) {
    /** @type {?} */
    TokenRequested.prototype.type;
}
class TokenReceived {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = TOKEN_RECEIVED;
    }
}
if (false) {
    /** @type {?} */
    TokenReceived.prototype.type;
    /** @type {?} */
    TokenReceived.prototype.payload;
}
class CaptchaImageRequested {
    constructor() {
        this.type = CAPTCHA_IMAGE_REQUESTED;
    }
}
if (false) {
    /** @type {?} */
    CaptchaImageRequested.prototype.type;
}
class CaptchaImageLoaded {
    constructor() {
        this.type = CAPTCHA_IMAGE_LOADED;
    }
}
if (false) {
    /** @type {?} */
    CaptchaImageLoaded.prototype.type;
}
class CaptchaEntered {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = CAPTCHA_ENTERED;
    }
}
if (false) {
    /** @type {?} */
    CaptchaEntered.prototype.type;
    /** @type {?} */
    CaptchaEntered.prototype.payload;
}
class ClearCaptcha {
    constructor() {
        this.type = CLEAR_CAPTCHA;
    }
}
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
const COOKIE_NAME = "ngs-authentication";
class SigninService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} snackBar
     */
    constructor(http, store, configurationService, snackBar) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
        setTimeout((/**
         * @return {?}
         */
        () => this.store.dispatch(new WhoAmIAction())), 300);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signup(model) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signUp != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env[config.server] + config.endpoints.signUp, model))), map((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            const user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signin(model) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signIn != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env[config.server] + config.endpoints.signIn, model))), map(this.configurationService.config.responseToUser), map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })), tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), this.configurationService.config.token.time);
        })), tap((/**
         * @param {?} user
         * @return {?}
         */
        user => this.configurationService.config.afterSignin(user))));
    }
    // TODO:
    /**
     * @return {?}
     */
    signout() {
        /** @type {?} */
        const config = this.configurationService.config;
        /** @type {?} */
        const tokenObject = JSON.parse(Cookie.getCookie(COOKIE_NAME));
        /** @type {?} */
        const endpoint = stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
        /** @type {?} */
        const method = config.endpoints.signOutMethod || "get";
        if (["get", "put", "post", "patch", "delete"].indexOf(method) === -1) {
            throwError(`${method} is not valid http method. [ @starter/authentication/signinservice/singout ]`);
        }
        return this.http[method](endpoint).pipe(tap((/**
         * @return {?}
         */
        () => {
            Cookie.deleteCookie(COOKIE_NAME);
        })));
    }
    /**
     * @return {?}
     */
    whoAmI() {
        debugger;
        /** @type {?} */
        let user = { Token: "--" };
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
        config => config.endpoints.whoAmI != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user })))));
    }
}
SigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
SigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ SigninService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SigninService_Factory() { return new SigninService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(AuthenticationConfigurationService), ɵɵinject(MatSnackBar$1)); }, token: SigninService, providedIn: "root" });
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
class SigninContainerComponent {
    /**
     * @param {?} configurationService
     * @param {?} store
     */
    constructor(configurationService, store) {
        this.configurationService = configurationService;
        this.store = store;
        this.signedIn$ = new EventEmitter();
        this.formId$ = this.configurationService.config$.map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.forms.signIn));
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signIn(formValue) {
        this.store.dispatch(new Signin(formValue));
        this.signedIn$.emit(true);
    }
}
SigninContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
        <auth-signin 
                [formId]='(formId$ | async)'
                (signedin)="signIn($event)"
        ></auth-signin>
  `
            }] }
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = () => [
    { type: AuthenticationConfigurationService },
    { type: Store }
];
SigninContainerComponent.propDecorators = {
    signedIn$: [{ type: Output }]
};
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
class AuthenticationContainerComponent {
}
AuthenticationContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
          <router-outlet></router-outlet>
        `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SignupContainerComponent {
    /**
     * @param {?} configurationService
     * @param {?} store
     * @param {?} snackBar
     */
    constructor(configurationService, store, snackBar) {
        this.configurationService = configurationService;
        this.store = store;
        this.snackBar = snackBar;
        this.signedUp$ = new EventEmitter();
        this.formId$ = this.configurationService.config$.map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.forms.signUp));
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signup(formValue) {
        this.configurationService.config$
            .pipe(take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => config.signupValidator(formValue))))
            .subscribe((/**
         * @param {?} validation
         * @return {?}
         */
        validation => {
            if (validation) {
                this.store.dispatch(new Signup(formValue));
                this.signedUp$.emit(true);
            }
            else {
                this.snackBar.open("رمز عبور یکسان نیست", null, {
                    duration: 2222
                });
            }
        }));
    }
}
SignupContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
        <auth-signup 
                [formId]='(formId$ | async)'
                (signedup)="signup($event)"
        ></auth-signup>
  `
            }] }
];
/** @nocollapse */
SignupContainerComponent.ctorParameters = () => [
    { type: AuthenticationConfigurationService },
    { type: Store },
    { type: MatSnackBar }
];
SignupContainerComponent.propDecorators = {
    signedUp$: [{ type: Output }]
};
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
const routes = [
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
const AuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SigninComponent {
    constructor() {
        this.signedin = new EventEmitter();
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    signin(formGroup) {
        if (!formGroup.valid)
            return;
        this.signedin.emit(formGroup.value);
    }
}
SigninComponent.decorators = [
    { type: Component, args: [{
                selector: "auth-signin",
                template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signin($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                styles: [""]
            }] }
];
/** @nocollapse */
SigninComponent.ctorParameters = () => [];
SigninComponent.propDecorators = {
    signedin: [{ type: Output }],
    formId: [{ type: Input }]
};
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
class WithCredentialInterceptor {
    /**
     * @param {?} configurationService
     */
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        // if (!this.configurationService.config.env.production)
        ((/** @type {?} */ (request))).withCredentials = true;
        return next.handle(request);
    }
}
WithCredentialInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WithCredentialInterceptor.ctorParameters = () => [
    { type: AuthenticationConfigurationService }
];
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
class UnauthorizedInterceptor {
    /**
     * @param {?} router
     * @param {?} store
     */
    constructor(router, store // private signinService: SigninService
    ) {
        this.router = router;
        this.store = store;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next
            .handle(request)
            .map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event instanceof HttpResponse)
                return event;
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            if (!(err instanceof HttpErrorResponse))
                return throwError(err);
            if (err.status != 401)
                return throwError(err);
            if (err.url.includes("logout"))
                return throwError(err);
            if (err.url.includes("user/account/profile"))
                return throwError(err);
            this.store.dispatch(new SignoutAction());
            return throwError("Unauthorized");
        }));
    }
}
UnauthorizedInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = () => [
    { type: Router },
    { type: Store }
];
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
const initialState = {
    loggedIn: false,
    user: new UserModel({ Id: 1 })
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SignInActionTypes.SIGNIN_SUCCEED: {
            return Object.assign({}, state, { loggedIn: true, user: action.payload });
        }
        case SignInActionTypes.SIGNOUT: {
            return Object.assign({}, state, { loggedIn: false, user: new UserModel() });
        }
        default: {
            return state;
        }
    }
}
//#region  selectors
/** @type {?} */
const getLoggedIn = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.loggedIn);
/** @type {?} */
const getUser = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.user);

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
const AuthenticationReducers = {
    userStatus: UserReducer
    // captcha: captchaReducer.CaptchaReducer
};
//#region selectors
/** @type {?} */
const selectAuthenticationState = createFeatureSelector("authentication");
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.userStatus;
/** @type {?} */
const selectAuthState = createSelector(selectAuthenticationState, (ɵ0$1));
/** @type {?} */
const getLoggedIn$1 = createSelector(selectAuthState, getLoggedIn);
/** @type {?} */
const getUser$1 = createSelector(selectAuthState, getUser);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SigninEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} signinService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(actions$, router, signinService, configurationService, bottomSheet) {
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap((/**
         * @return {?}
         */
        () => this.signinService
            .whoAmI()
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error))))))));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.signinService
            .signin(payload)
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error))))))));
        this.signup$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.signinService
            .signup(payload)
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SignupSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SignupFailed(error))))))));
        this.signupSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP_SUCCEED), tap((/**
         * @return {?}
         */
        () => {
            debugger;
            this.router.navigate(["auth/signin"]);
        })));
        this.SignInRequired$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REQUIRED), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe((/**
             * @return {?}
             */
            () => {
                signinBottomSheetRef.dismiss();
            }));
            return signinBottomSheetRef;
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        })));
        this.AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map((/**
         * @return {?}
         */
        () => new NewCaptcha())));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => this.signinService.signout().pipe(map((/**
         * @return {?}
         */
        () => new SignoutAction())), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REDIRECT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        authed => this.router.navigate(["auth/signin"]))));
        this.redirectAfterSignout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        authed => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo]))));
    }
}
SigninEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SigninEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: SigninService },
    { type: AuthenticationConfigurationService },
    { type: MatBottomSheet }
];
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
class AuthenticationEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.dispachProgressingStarted$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), map((/**
         * @return {?}
         */
        () => new ProgressingStarted())));
        this.dispachProgressingFinished$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED), map((/**
         * @return {?}
         */
        () => new ProgressingFinished())));
    }
}
AuthenticationEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthenticationEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
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
class SignupComponent {
    constructor() {
        this.signedup = new EventEmitter();
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    signup(formGroup) {
        if (!formGroup.valid)
            return;
        this.signedup.emit(formGroup.value);
    }
}
SignupComponent.decorators = [
    { type: Component, args: [{
                selector: "auth-signup",
                template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\r\n    <ngs-form-view \r\n        [id]=\"formId\"\r\n        [card]=\"true\"\r\n        (accept)=\"signup($event)\"\r\n    ></ngs-form-view>\r\n</div>\r\n<!-- <div>\r\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\r\n</div> -->",
                styles: [""]
            }] }
];
/** @nocollapse */
SignupComponent.ctorParameters = () => [];
SignupComponent.propDecorators = {
    signedup: [{ type: Output }],
    formId: [{ type: Input }]
};
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
class SigninGuard {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        return this.store.select(getLoggedIn$1).take(1).map((/**
         * @param {?} authed
         * @return {?}
         */
        authed => !authed));
    }
}
SigninGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SigninGuard.ctorParameters = () => [
    { type: Store }
];
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
class NgsAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = (/** @type {?} */ ({}))) {
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
    }
}
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
class RootNgsAuthenticationModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.authentication = "8.0.10";
    }
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
RootNgsAuthenticationModule.ctorParameters = () => [];

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

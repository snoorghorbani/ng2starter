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
import { __decorate, __metadata } from 'tslib';
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
 * @suppress {checkTypes} checked by tsc
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
            Object.keys(params).forEach(key => {
                if (key in params)
                    (/** @type {?} */ (this))[key] = params[key];
            });
    }
}

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
    class Request {
    }
    Signin_ApiModel.Request = Request;
    class Response {
    }
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
class ProgressingStarted {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
}
class ProgressingFinished {
    constructor() {
        this.type = "[AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ NEW_CAPTCHA = '[captcha] new captcha';
class NewCaptcha {
    constructor() {
        this.type = NEW_CAPTCHA;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class SignupSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_SUCCEED;
    }
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
class SigninSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
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
class DoSignoutAction {
    constructor() {
        this.type = SignInActionTypes.DO_SIGNOUT;
    }
}
class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
class SigninRequiredAction {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REQUIRED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
    signupValidator: value => of(true),
    afterSignin: (user) => { },
    responseToUser: user => user
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.store.select(getAuthenticationModuleConfig).subscribe(storeConfig => {
            if (!storeConfig)
                return;
            this._config = Object.assign({}, this._config, storeConfig.Config);
            this.config$.next(this._config);
        });
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
            },] },
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = defineInjectable({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: AuthenticationConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ COOKIE_NAME = "ngs-authentication";
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
        setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signup(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signUp != ""), take(1), switchMap(config => this.http.post(config.env[config.server] + config.endpoints.signUp, model)), map(response => {
            const /** @type {?} */ user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signin(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(config.env[config.server] + config.endpoints.signIn, model)), map(this.configurationService.config.responseToUser), map((user) => {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }), tap(user => {
            if (this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), this.configurationService.config.token.time);
        }), tap((user) => this.configurationService.config.afterSignin(user)));
    }
    /**
     * @return {?}
     */
    signout() {
        Cookie.deleteCookie(COOKIE_NAME);
        return this.http
            .get(this.configurationService.config.env[this.configurationService.config.server] + this.configurationService.config.endpoints.signOut)
            .pipe(tap(() => {
            Cookie.deleteCookie(COOKIE_NAME);
        }));
    }
    /**
     * @return {?}
     */
    whoAmI() {
        debugger;
        let /** @type {?} */ user = { Token: "--" };
        if (this.configurationService.config.mode == "token-base") {
            try {
                user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
            }
            catch (/** @type {?} */ error) { }
        }
        return this.configurationService.config$.pipe(filter(config => config.endpoints.whoAmI != ""), take(1), switchMap(config => this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user }))));
    }
}
SigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ SigninService.ngInjectableDef = defineInjectable({ factory: function SigninService_Factory() { return new SigninService(inject(HttpClient), inject(Store), inject(AuthenticationConfigurationService), inject(MatSnackBar$1)); }, token: SigninService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.formId$ = this.configurationService.config$.map(config => config.forms.signIn);
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
            },] },
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = () => [
    { type: AuthenticationConfigurationService },
    { type: Store }
];
SigninContainerComponent.propDecorators = {
    signedIn$: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AuthenticationContainerComponent {
}
AuthenticationContainerComponent.decorators = [
    { type: Component, args: [{
                template: `
          <router-outlet></router-outlet>
        `
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.formId$ = this.configurationService.config$.map(config => config.forms.signUp);
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    signup(formValue) {
        this.configurationService.config$
            .pipe(take(1), switchMap(config => config.signupValidator(formValue)))
            .subscribe(validation => {
            if (validation) {
                this.store.dispatch(new Signup(formValue));
                this.signedUp$.emit(true);
            }
            else {
                this.snackBar.open("رمز عبور یکسان نیست", null, {
                    duration: 2222
                });
            }
        });
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
            },] },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
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
const /** @type {?} */ AuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div fxLayout='row' fxLayoutAlign="center center">
    <ngs-form-view 
        [id]="formId"
        [card]="true"
        (accept)="signin($event)"
    ></ngs-form-view>
</div>
<!-- <div>
    <a fxFlex="nogrow" routerLink="/user/password/reset" mat-raised-button fxFlexFill>کلمه عبور خود را فراموش کرده اید؟</a>
</div> -->`,
                styles: [``]
            },] },
];
/** @nocollapse */
SigninComponent.ctorParameters = () => [];
SigninComponent.propDecorators = {
    signedin: [{ type: Output }],
    formId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        (/** @type {?} */ (request)).withCredentials = true;
        return next.handle(request);
    }
}
WithCredentialInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
WithCredentialInterceptor.ctorParameters = () => [
    { type: AuthenticationConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            .map((event) => {
            if (event instanceof HttpResponse)
                return event;
        })
            .catch(err => {
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
        });
    }
}
UnauthorizedInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = () => [
    { type: Router },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
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
const /** @type {?} */ getLoggedIn = (state) => state.loggedIn;
const /** @type {?} */ getUser = (state) => state.user;
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ AuthenticationReducers = {
    userStatus: UserReducer
};
//#region selectors
const /** @type {?} */ selectAuthenticationState = createFeatureSelector("authentication");
const /** @type {?} */ selectAuthState = createSelector(selectAuthenticationState, (state) => state.userStatus);
const /** @type {?} */ getLoggedIn$1 = createSelector(selectAuthState, getLoggedIn);
const /** @type {?} */ getUser$1 = createSelector(selectAuthState, getUser);
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
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(() => this.signinService
            .whoAmI()
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(payload => this.signinService
            .signin(payload)
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.signup$ = this.actions$
            .ofType(SignInActionTypes.SIGNUP)
            .pipe(pluck("payload"), switchMap(payload => this.signinService
            .signup(payload)
            .pipe(map(user => new SignupSecceed(user)), catchError(error => of(new SignupFailed(error))))));
        this.signupSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNUP_SUCCEED).pipe(tap(() => {
            debugger;
            this.router.navigate(["auth/signin"]);
        }));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap((data) => {
            const /** @type {?} */ signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(() => {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(tap((data) => {
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(data => this.signinService.signout().pipe(map(() => new SignoutAction()), catchError(err => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT)
            .pipe(tap(authed => this.router.navigate(["auth/signin"])));
        this.redirectAfterSignout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(tap(authed => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo])));
    }
}
SigninEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AuthenticationEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     */
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.dispachProgressingStarted$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(map(() => new ProgressingStarted()));
        this.dispachProgressingFinished$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(map(() => new ProgressingFinished()));
    }
}
AuthenticationEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthenticationEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router }
];
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
                template: `<div fxLayout='row' fxLayoutAlign="center center">
    <ngs-form-view 
        [id]="formId"
        [card]="true"
        (accept)="signup($event)"
    ></ngs-form-view>
</div>
<!-- <div>
    <a fxFlex="nogrow" routerLink="/user/password/reset" mat-raised-button fxFlexFill>کلمه عبور خود را فراموش کرده اید؟</a>
</div> -->`,
                styles: [``]
            },] },
];
/** @nocollapse */
SignupComponent.ctorParameters = () => [];
SignupComponent.propDecorators = {
    signedup: [{ type: Output }],
    formId: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        return this.store.select(getLoggedIn$1).take(1).map(authed => !authed);
    }
}
SigninGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SigninGuard.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
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
            },] },
];
class RootNgsAuthenticationModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, SigninService, SigninContainerComponent, NgsAuthenticationModule, getUser$1 as getUser, AuthenticationRoutingModule as ɵr, MODULE_CONFIG_TOKEN as ɵa, RootNgsAuthenticationModule as ɵb, SigninComponent as ɵi, SignupComponent as ɵl, AuthenticationEffects as ɵq, SigninEffects as ɵp, UnauthorizedInterceptor as ɵs, WithCredentialInterceptor as ɵt, AuthenticationReducers as ɵc, selectAuthState as ɵe, selectAuthenticationState as ɵd, UserReducer as ɵn, getUser as ɵo, SigninGuard as ɵm, AuthenticationConfigurationService as ɵg, AuthenticationContainerComponent as ɵj, SignupContainerComponent as ɵk };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWF1dGhlbnRpY2F0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvbW9kZWxzL3NpZ25pbi5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvYXV0aGVudGljYXRpb24uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9jYXB0Y2hhLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2F1dGhlbnRpY2F0aW9uLmNvbmZpZy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyL3NpZ25pbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ251cC1jb250YWluZXIvc2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWwuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL3JlZHVjZXJzL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2VmZmVjdHMvYXV0aGVudGljYXRpb24uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvbi9saWIvZHVtcC1jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uL2xpYi9yb3V0aW5nLWd1YXJkcy9zaWduaW4uZ3VhcmQudHMiLCJuZzovL0Bzb3VzaGlhbnMvYXV0aGVudGljYXRpb24vbGliL2F1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcclxuXHRcdHBhcmFtcyAmJlxyXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRpZiAoa2V5IGluIHBhcmFtcykgKHRoaXMgYXMgYW55KVtrZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsLCBIdHRwUmVzcG9uc2VCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNpZ25pbl9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2UgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8UmVzcG9uc2U+IHtcclxuXHRcdFJlc3VsdDogVXNlck1vZGVsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzIHtcclxuXHRQUk9HUkVTU0lOR19TVEFSVEVEID0gJ1tBVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfU1RBUlRFRCcsXHJcblx0UFJPR1JFU1NJTkdfRklOSVNIRUQgPSAnW0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19GSU5JU0hFRCcsXHJcblx0RkFJTEVEX0hBUFBFTkVEID0gJ1tBVVRIRU5USUNBVElPTl0gRkFJTEVEX0hBUFBFTkVEJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NpbmdTdGFydGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19TVEFSVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ0ZpbmlzaGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19GSU5JU0hFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRmFpbGVkSGFwcGVuZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLkZBSUxFRF9IQVBQRU5FRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoZW50aWNhdGlvbkFjdGlvbiA9IFByb2dyZXNzaW5nU3RhcnRlZCB8IFByb2dyZXNzaW5nRmluaXNoZWQgfCBGYWlsZWRIYXBwZW5lZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0NBUFRDSEEgPSAnW2NhcHRjaGFdIG5ldyBjYXB0Y2hhJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZWNlaXZlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9MT0FERUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfRU5URVJFRCA9ICdbY2FwdGNoYV0gQ0FQVENIQV9FTlRFUkVEJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUFRDSEEgPSAnW2NhcHRjaGFdIENMRUFSX0NBUFRDSEEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBORVdfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVjZWl2ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRUNFSVZFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9rZW5Nb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZVJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VMb2FkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX0xPQURFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVudGVyZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0VOVEVSRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyQ2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbiA9XHJcbiAgICAgICAgfCBOZXdDYXB0Y2hhXHJcbiAgICAgICAgfCBUb2tlblJlcXVlc3RlZFxyXG4gICAgICAgIHwgVG9rZW5SZWNlaXZlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlUmVxdWVzdGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VMb2FkZWRcclxuICAgICAgICB8IENhcHRjaGFFbnRlcmVkXHJcbiAgICAgICAgfCBDbGVhckNhcHRjaGE7IiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltBVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOVVAgPSBcIltBVVRIRU5USUNBVElPTl1bU0lHTlVQXSBzdGFydFwiLFxyXG5cdFNJR05VUF9TVUNDRUVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gU3VjY2Vzc1wiLFxyXG5cdFNJR05VUF9GQUlMVVJFID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTiA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIFNpZ25vdXRcIixcclxuXHRTSUdOSU5fU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZWRpcmVjdFwiLFxyXG5cdFNJR05JTl9SRVFVSVJFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcblxyXG4vKipcclxuICogXHRzaWduIHVwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbnVwIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFNpZ24gaW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbnVwXHJcblx0fCBTaWdudXBTZWNjZWVkXHJcblx0fCBTaWdudXBGYWlsZWRcclxuXHR8IFNpZ25pblxyXG5cdHwgU2lnbmluU2VjY2VlZFxyXG5cdHwgU2lnbmluRmFpbGVkXHJcblx0fCBTaWduaW5SZWRpcmVjdFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBTaWdub3V0QWN0aW9uXHJcblx0fCBTaWduaW5SZXF1aXJlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIHtcclxuICAgIG1vZGU/OiBzdHJpbmc7IC8vIFwidG9rZW4tYmFzZVwiIHwgXCJjb29raWUtYmFzZVwiO1xyXG4gICAgdG9rZW4/OiB7XHJcbiAgICAgICAgdGltZTogbnVtYmVyXHJcbiAgICB9O1xyXG4gICAgc2VydmVyPzogc3RyaW5nO1xyXG4gICAgZW5kcG9pbnRzPzoge1xyXG4gICAgICAgIHNpZ25PdXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2lnbkluPzogc3RyaW5nO1xyXG4gICAgICAgIHNpZ25VcD86IHN0cmluZztcclxuICAgICAgICB3aG9BbUk/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgZm9ybXM/OiB7XHJcbiAgICAgICAgc2lnbkluOiBzdHJpbmc7XHJcbiAgICAgICAgc2lnblVwOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgZW52Pzoge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IGJvb2xlYW47XHJcbiAgICAgICAgZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcbiAgICAgICAgc2VydmVyOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbz86IHN0cmluZztcclxuICAgIHNpZ251cFZhbGlkYXRvcj86ICh2YWx1ZTogYW55KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgYWZ0ZXJTaWduaW4/OiAodXNlcjogYW55KSA9PiB2b2lkO1xyXG4gICAgcmVzcG9uc2VUb1VzZXI/OiAodXNlcjogYW55KSA9PiBhbnk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IHtcclxuICAgIG1vZGU6IFwiY29va2llLWJhc2VcIixcclxuICAgIHRva2VuOiB7XHJcbiAgICAgICAgdGltZTogMjQgKiAxMiAqIDYwICogNjBcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyXCIsXHJcbiAgICBlbmRwb2ludHM6IHtcclxuICAgICAgICBzaWduT3V0OiBcIlwiLFxyXG4gICAgICAgIHNpZ25JbjogXCJcIixcclxuICAgICAgICBzaWduVXA6IFwiXCIsXHJcbiAgICAgICAgd2hvQW1JOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZm9ybXM6IHtcclxuICAgICAgICBzaWduSW46IFwiXCIsXHJcbiAgICAgICAgc2lnblVwOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgZW52OiB7XHJcbiAgICAgICAgcHJvZHVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgZnJvbnRlbmRfc2VydmVyOiBcImF1dGgvbW9kdWxlL2Zyb250ZW5kX3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG4gICAgICAgIHNlcnZlcjogXCJhdXRoL21vZHVsZS9zZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG4gICAgfSxcclxuICAgIGFmdGVyU2lnbm91dFJlZGlyZWN0VG86IFwiL1wiLFxyXG4gICAgc2lnbnVwVmFsaWRhdG9yOiB2YWx1ZSA9PiBvZih0cnVlKSxcclxuICAgIGFmdGVyU2lnbmluOiAodXNlcikgPT4geyB9LFxyXG4gICAgcmVzcG9uc2VUb1VzZXI6IHVzZXIgPT4gdXNlclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlPEF1dGhlbnRpY2F0aW9uU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoc3RvcmVDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXN0b3JlQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgc3RvcmVDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCBmaWx0ZXIsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgV2hvQW1JQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29va2llIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5jb25zdCBDT09LSUVfTkFNRSA9IFwibmdzLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBXaG9BbUlBY3Rpb24oKSksIDMwMCk7XHJcblx0fVxyXG5cclxuXHRzaWdudXAobW9kZWw6IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduVXAgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnNpZ25VcCwgbW9kZWwpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuUmVzdWx0KTtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gW3VzZXIuUm9sZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHNpZ25pbihtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnNpZ25JbiAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0PGFueT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnJlc3BvbnNlVG9Vc2VyKSxcclxuXHRcdFx0bWFwKCh1c2VyKSA9PiB7XHJcblx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFt1c2VyLlJvbGVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSksXHJcblx0XHRcdHRhcCh1c2VyID0+IHtcclxuXHRcdFx0XHRpZiAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcubW9kZSA9PSBcInRva2VuLWJhc2VcIilcclxuXHRcdFx0XHRcdENvb2tpZS5zZXRDb29raWUoQ09PS0lFX05BTUUsIEpTT04uc3RyaW5naWZ5KHVzZXIpLCB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy50b2tlbi50aW1lKTtcclxuXHRcdFx0fSksXHJcblx0XHRcdHRhcCgodXNlcikgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuYWZ0ZXJTaWduaW4odXNlcikpLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIFRPRE86XHJcblx0c2lnbm91dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Q29va2llLmRlbGV0ZUNvb2tpZShDT09LSUVfTkFNRSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoXHJcblx0XHRcdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52W3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuc2lnbk91dFxyXG5cdFx0XHQpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRhcCgoKSA9PiB7XHJcblx0XHRcdFx0XHRDb29raWUuZGVsZXRlQ29va2llKENPT0tJRV9OQU1FKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0d2hvQW1JKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGxldCB1c2VyID0geyBUb2tlbjogXCItLVwiIH07XHJcblx0XHRpZiAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcubW9kZSA9PSBcInRva2VuLWJhc2VcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHVzZXIgPSBKU09OLnBhcnNlKENvb2tpZS5nZXRDb29raWUoQ09PS0lFX05BTUUpKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMud2hvQW1JICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy53aG9BbUksIHsgdXNlciB9KSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxhdXRoLXNpZ25pbiBcclxuICAgICAgICAgICAgICAgIFtmb3JtSWRdPScoZm9ybUlkJCB8IGFzeW5jKSdcclxuICAgICAgICAgICAgICAgIChzaWduZWRpbik9XCJzaWduSW4oJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYXV0aC1zaWduaW4+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtSWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0QE91dHB1dCgpIHNpZ25lZEluJCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbnVwIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdGFrZSwgc3dpdGNoTWFwLCBmaWx0ZXIsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICA8YXV0aC1zaWdudXAgXHJcbiAgICAgICAgICAgICAgICBbZm9ybUlkXT0nKGZvcm1JZCQgfCBhc3luYyknXHJcbiAgICAgICAgICAgICAgICAoc2lnbmVkdXApPVwic2lnbnVwKCRldmVudClcIlxyXG4gICAgICAgID48L2F1dGgtc2lnbnVwPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUlkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBPdXRwdXQoKSBzaWduZWRVcCQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnblVwKTtcclxuXHR9XHJcblxyXG5cdHNpZ251cChmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5waXBlKHRha2UoMSksIHN3aXRjaE1hcChjb25maWcgPT4gY29uZmlnLnNpZ251cFZhbGlkYXRvcihmb3JtVmFsdWUpKSlcclxuXHRcdFx0LnN1YnNjcmliZSh2YWxpZGF0aW9uID0+IHtcclxuXHRcdFx0XHRpZiAodmFsaWRhdGlvbikge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbnVwKGZvcm1WYWx1ZSkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zaWduZWRVcCQuZW1pdCh0cnVlKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKFwiw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrEgw5vCjMOawqnDmMKzw5jCp8OZwoYgw5nChsObwozDmMKzw5jCqlwiLCBudWxsLCB7XHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMjIyXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5HdWFyZCB9IGZyb20gXCIuL3JvdXRpbmctZ3VhcmRzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1jb250YWluZXIvYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbnVwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zaWdudXAtY29udGFpbmVyL3NpZ251cC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImF1dGhcIixcclxuXHRcdGNvbXBvbmVudDogQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJzaWduaW5cIixcclxuXHRcdFx0XHQvLyBjYW5BY3RpdmF0ZTogWyBTaWduaW5HdWFyZCBdLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2lnbmluQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInNpZ251cFwiLFxyXG5cdFx0XHRcdC8vIGNhbkFjdGl2YXRlOiBbIFNpZ25pbkd1YXJkIF0sXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTaWdudXBDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhdXRoLXNpZ25pblwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgXHJcbiAgICAgICAgW2lkXT1cImZvcm1JZFwiXHJcbiAgICAgICAgW2NhcmRdPVwidHJ1ZVwiXHJcbiAgICAgICAgKGFjY2VwdCk9XCJzaWduaW4oJGV2ZW50KVwiXHJcbiAgICA+PC9uZ3MtZm9ybS12aWV3PlxyXG48L2Rpdj5cclxuPCEtLSA8ZGl2PlxyXG4gICAgPGEgZnhGbGV4PVwibm9ncm93XCIgcm91dGVyTGluaz1cIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCIgbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4RmlsbD7DmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwoHDmMKxw5jCp8OZwoXDmcKIw5jCtCDDmsKpw5jCscOYwq/DmcKHIMOYwqfDm8KMw5jCr8OYwp88L2E+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgc2lnbmVkaW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuXHRzaWduaW4oZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnNpZ25lZGluLmVtaXQoZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdC8vIGlmICghdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LnByb2R1Y3Rpb24pXHJcblx0XHQocmVxdWVzdCBhcyBhbnkpLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTaWdub3V0QWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgZnJvbUF1dGggZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVuYXV0aG9yaXplZEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tQXV0aC5GZWF0dXJlU3RhdGU+IC8vIHByaXZhdGUgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZVxyXG5cdCkge31cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dFxyXG5cdFx0XHQuaGFuZGxlKHJlcXVlc3QpXHJcblx0XHRcdC5tYXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkgcmV0dXJuIGV2ZW50O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT0gNDAxKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwibG9nb3V0XCIpKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwidXNlci9hY2NvdW50L3Byb2ZpbGVcIikpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpZ25vdXRBY3Rpb24oKSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aHJvd0Vycm9yKFwiVW5hdXRob3JpemVkXCIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2lnbmluQWN0aW9uLCBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9nZ2VkSW46IGJvb2xlYW47XHJcblx0dXNlcjogVXNlck1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2dnZWRJbjogZmFsc2UsXHJcblx0dXNlcjogbmV3IFVzZXJNb2RlbCh7IElkOiAxIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2lnbmluQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VyOiBuZXcgVXNlck1vZGVsKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJbiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxvZ2dlZEluO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnVzZXI7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyLnJlZHVjZXJcIjtcclxuLy8gaW1wb3J0ICogYXMgY2FwdGNoYVJlZHVjZXIgZnJvbSBcIi4vY2FwdGNoYS5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRpb25TdGF0ZSB7XHJcblx0dXNlclN0YXR1czogdXNlclJlZHVjZXIuU3RhdGU7XHJcblx0Ly8gY2FwdGNoYTogY2FwdGNoYVJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImF1dGhlbnRpY2F0aW9uXCI6IEF1dGhlbnRpY2F0aW9uU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoZW50aWNhdGlvblJlZHVjZXJzID0ge1xyXG5cdHVzZXJTdGF0dXM6IHVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyXHJcblx0Ly8gY2FwdGNoYTogY2FwdGNoYVJlZHVjZXIuQ2FwdGNoYVJlZHVjZXJcclxufTtcclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEF1dGhlbnRpY2F0aW9uU3RhdGU+KFwiYXV0aGVudGljYXRpb25cIik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0QXV0aGVudGljYXRpb25TdGF0ZSxcclxuXHQoc3RhdGU6IEF1dGhlbnRpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnVzZXJTdGF0dXNcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEF1dGhTdGF0ZSwgdXNlclJlZHVjZXIuZ2V0TG9nZ2VkSW4pO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEF1dGhTdGF0ZSwgdXNlclJlZHVjZXIuZ2V0VXNlcik7XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgc2VsZWN0Q2FwdGNoYVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aGVudGljYXRpb25TdGF0ZSwgKHN0YXRlOiBBdXRoZW50aWNhdGlvblN0YXRlKSA9PiB7XHJcbi8vIFx0cmV0dXJuIHN0YXRlLmNhcHRjaGE7XHJcbi8vIH0pO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldENhcHRjaGEgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDYXB0Y2hhU3RhdGUsIGNhcHRjaGFSZWR1Y2VyLmdldENhcHRjaGEpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTaWdub3V0QWN0aW9uLFxyXG5cdFNpZ25JbkFjdGlvblR5cGVzLFxyXG5cdFNpZ25pblNlY2NlZWQsXHJcblx0U2lnbmluRmFpbGVkLFxyXG5cdFNpZ25pblJlZGlyZWN0LFxyXG5cdFNpZ25pbixcclxuXHRTaWdudXBTZWNjZWVkLFxyXG5cdFNpZ251cEZhaWxlZFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3Q2FwdGNoYSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0d2hvQW1JJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0XHQud2hvQW1JKClcclxuXHRcdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShcclxuXHRcdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PlxyXG5cdFx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdFx0LnNpZ25pbihwYXlsb2FkKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSkpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ251cCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRcdHN3aXRjaE1hcChwYXlsb2FkID0+XHJcblx0XHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0XHQuc2lnbnVwKHBheWxvYWQpXHJcblx0XHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbnVwU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ251cEZhaWxlZChlcnJvcikpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHNpZ251cFN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHR0YXAoKCkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXV0aC9zaWduaW5cIl0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbkluUmVxdWlyZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2lnbmluQm90dG9tU2hlZXRSZWYgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJjbGVhci1tYXQtY2FyZC1ib3hcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuaW5zdGFuY2Uuc2lnbmVkSW4kLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHNpZ25pbkJvdHRvbVNoZWV0UmVmO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KCkgQWZ0ZXJTaWduaW5GaWxlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRSkubWFwKCgpID0+IG5ldyBOZXdDYXB0Y2hhKCkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZS5zaWdub3V0KCkucGlwZShcclxuXHRcdFx0XHRtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVClcclxuXHRcdC5waXBlKHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXV0aC9zaWduaW5cIl0pKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdEFmdGVyU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0dGFwKGF1dGhlZCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuYWZ0ZXJTaWdub3V0UmVkaXJlY3RUb10pKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMsIEZhaWxlZEhhcHBlbmVkLCBQcm9ncmVzc2luZ1N0YXJ0ZWQsIFByb2dyZXNzaW5nRmluaXNoZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRkaXNwYWNoUHJvZ3Jlc3NpbmdTdGFydGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ1N0YXJ0ZWQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRkaXNwYWNoUHJvZ3Jlc3NpbmdGaW5pc2hlZCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFLCBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgUHJvZ3Jlc3NpbmdGaW5pc2hlZCgpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhdXRoLXNpZ251cFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgXHJcbiAgICAgICAgW2lkXT1cImZvcm1JZFwiXHJcbiAgICAgICAgW2NhcmRdPVwidHJ1ZVwiXHJcbiAgICAgICAgKGFjY2VwdCk9XCJzaWdudXAoJGV2ZW50KVwiXHJcbiAgICA+PC9uZ3MtZm9ybS12aWV3PlxyXG48L2Rpdj5cclxuPCEtLSA8ZGl2PlxyXG4gICAgPGEgZnhGbGV4PVwibm9ncm93XCIgcm91dGVyTGluaz1cIi91c2VyL3Bhc3N3b3JkL3Jlc2V0XCIgbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4RmlsbD7DmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwoHDmMKxw5jCp8OZwoXDmcKIw5jCtCDDmsKpw5jCscOYwq/DmcKHIMOYwqfDm8KMw5jCr8OYwp88L2E+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KCkgc2lnbmVkdXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cclxuXHRzaWdudXAoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnNpZ25lZHVwLmVtaXQoZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldExvZ2dlZEluIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRMb2dnZWRJbikudGFrZSgxKS5tYXAoYXV0aGVkID0+ICFhdXRoZWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc2lnbmluLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hdXRoZW50aWNhdGlvbi5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaWdudXBDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ251cC1jb250YWluZXIvc2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtcC1jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25pbkd1YXJkIH0gZnJvbSBcIi4vcm91dGluZy1ndWFyZHMvc2lnbmluLmd1YXJkXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0TmdzRm9ybU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRTaWduaW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRTaWduaW5Db21wb25lbnQsXHJcblx0XHRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ251cENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFNpZ251cENvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbU2lnbmluQ29udGFpbmVyQ29tcG9uZW50XSxcclxuXHRwcm92aWRlcnM6IFtTaWduaW5HdWFyZF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gPEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvcixcclxuXHRcdFx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdFx0XHRcdHVzZUNsYXNzOiBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFNpZ25pblNlcnZpY2VcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImF1dGhlbnRpY2F0aW9uXCIsIEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtTaWduaW5FZmZlY3RzLCBBdXRoZW50aWNhdGlvbkVmZmVjdHNdKSxcclxuXHRcdEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSxcclxuXHRcdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0F1dGhlbnRpY2F0aW9uTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsidXNlclJlZHVjZXIuVXNlclJlZHVjZXIiLCJnZXRMb2dnZWRJbiIsInVzZXJSZWR1Y2VyLmdldExvZ2dlZEluIiwiZ2V0VXNlciIsInVzZXJSZWR1Y2VyLmdldFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztJQWVDLFlBQVksTUFBWTs7Ozs7cUJBRk4sRUFBRTtRQUduQixNQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDOUIsSUFBSSxHQUFHLElBQUksTUFBTTtvQkFBRSxtQkFBQyxJQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BELENBQUMsQ0FBQztLQUNKO0NBQ0Q7Ozs7Ozs7Ozs7O0FDbEJELElBQWlCLGVBQWU7QUFBaEMsV0FBaUIsZUFBZTtJQUMvQjtLQUFnRTtJQUFuRCx1QkFBTztJQUVwQjtLQUVDO0lBRlksd0JBQVE7R0FITCxlQUFlLEtBQWYsZUFBZSxRQU0vQjs7Ozs7Ozs7Ozs7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
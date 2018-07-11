import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Component, Injectable, Inject, NgModule, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, throwError, of } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { HttpResponse, HttpErrorResponse, HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from '@angular/material';
import { map, switchMap, take, filter, catchError, tap, pluck } from 'rxjs/operators';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { __decorate, __metadata } from 'tslib';
import { Observable } from 'rxjs/Observable';
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
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
}
class ProgressingFinished {
    constructor() {
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
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
    WHO_AM_I: "[FRONTEND_AUTHENTICATION] who am i",
    SIGNIN: "[FRONTEND_AUTHENTICATION] Signin",
    DO_SIGNOUT: "[FRONTEND_AUTHENTICATION] Do Signout",
    SIGNOUT: "[FRONTEND_AUTHENTICATION] Signout",
    SIGNIN_SUCCEED: "[FRONTEND_AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE: "[FRONTEND_AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT: "[FRONTEND_AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED: "[FRONTEND_AUTHENTICATION][Signin] Required",
};
class WhoAmIAction {
    constructor() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
}
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
            debugger;
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
const /** @type {?} */ FrontendAuthenticationReducers = {
    userStatus: UserReducer
};
//#region selectors
const /** @type {?} */ selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
const /** @type {?} */ selectAuthState = createSelector(selectFrontendAuthenticationState, (state) => state.userStatus);
const /** @type {?} */ getFrontendAuthenticationState = createSelector(selectAuthState, getLoggedIn);
const /** @type {?} */ getFrontendUser = createSelector(selectAuthState, getUser);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        signOut: "",
        signIn: "",
        whoAmI: ""
    },
    forms: {
        signIn: ""
    },
    env: {
        production: false,
        frontend_server: "http://localhost:3000"
    },
    afterSignoutRedirectTo: "/"
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FrontendAuthenticationContainerComponent {
}
FrontendAuthenticationContainerComponent.decorators = [
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
class FrontendAuthenticationConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        // this.store.select(getFrontendAuthenticationModuleConfig).subscribe(storeConfig => {
        // 	if (!storeConfig) return;
        // 	this._config = Object.assign({}, this._config, storeConfig.Config);
        // 	this.config$.next(this._config);
        // });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
FrontendAuthenticationConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FrontendAuthenticationConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = defineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });

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
    { type: FrontendAuthenticationConfigurationService },
    { type: Store }
];
SigninContainerComponent.propDecorators = {
    signedIn$: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
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
const /** @type {?} */ FrontendAuthenticationRoutingModule = RouterModule.forChild(routes);

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
    { type: FrontendAuthenticationConfigurationService }
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
    constructor(router, store // private FrontendSigninService: FrontendSigninService
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
class FrontendSigninService {
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
    signin(model) {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(config.env.frontend_server + config.endpoints.signIn, model)), map(response => {
            const /** @type {?} */ user = Object.assign({}, response.Result);
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
    }
    /**
     * @return {?}
     */
    signout() {
        return this.http
            .get(this.configurationService.config.env.frontend_server +
            this.configurationService.config.endpoints.signOut)
            .map(response => response);
    }
    /**
     * @return {?}
     */
    whoAmI() {
        return this.http
            .get(this.configurationService.config.env.frontend_server + this.configurationService.config.endpoints.whoAmI)
            .map(response => response);
    }
}
FrontendSigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FrontendSigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FrontendAuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ FrontendSigninService.ngInjectableDef = defineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(inject(HttpClient), inject(Store), inject(FrontendAuthenticationConfigurationService), inject(MatSnackBar$1)); }, token: FrontendSigninService, providedIn: "root" });

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
     * @param {?} FrontendSigninService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(actions$, router, FrontendSigninService$$1, configurationService, bottomSheet) {
        this.actions$ = actions$;
        this.router = router;
        this.FrontendSigninService = FrontendSigninService$$1;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(() => this.FrontendSigninService.whoAmI()), map((user) => new SigninSecceed(user)), catchError((error) => Observable.of(new SigninFailed(error))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap((payload) => this.FrontendSigninService.signin(payload)), map((user) => new SigninSecceed(user)), catchError((error) => Observable.of(new SigninFailed(error))));
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
            debugger;
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap((data) => this.FrontendSigninService.signout().pipe(map(() => new SignoutAction()), catchError((err) => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT)
            .pipe(tap((authed) => this.router.navigate(["auth/signin"])));
        this.redirectAfterSignout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(tap((authed) => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo])));
    }
}
SigninEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SigninEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FrontendSigninService },
    { type: FrontendAuthenticationConfigurationService },
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
class FrontendAuthenticationEffects {
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
FrontendAuthenticationEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FrontendAuthenticationEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], FrontendAuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], FrontendAuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsFrontendAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
        return {
            ngModule: RootNgsFrontendAuthenticationModule,
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
                FrontendSigninService
            ]
        };
    }
}
NgsFrontendAuthenticationModule.decorators = [
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
                declarations: [SigninContainerComponent, SigninComponent, FrontendAuthenticationContainerComponent],
                entryComponents: [SigninContainerComponent],
                providers: [],
                exports: []
            },] },
];
class RootNgsFrontendAuthenticationModule {
}
RootNgsFrontendAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
                    EffectsModule.forFeature([SigninEffects, FrontendAuthenticationEffects]),
                    FrontendAuthenticationRoutingModule,
                    NgsFrontendAuthenticationModule
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

export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, getFrontendAuthenticationState, NgsFrontendAuthenticationModule, SigninComponent as ɵg, FrontendAuthenticationEffects as ɵm, SigninEffects as ɵk, FrontendAuthenticationRoutingModule as ɵn, MODULE_CONFIG_TOKEN as ɵd, RootNgsFrontendAuthenticationModule as ɵa, UnauthorizedInterceptor as ɵo, WithCredentialInterceptor as ɵp, FrontendAuthenticationReducers as ɵi, UserReducer as ɵj, FrontendAuthenticationConfigurationService as ɵc, FrontendSigninService as ɵl, FrontendAuthenticationContainerComponent as ɵh, SigninContainerComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvbW9kZWxzL3NpZ25pbi5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9jYXB0Y2hhLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL3JlZHVjZXJzL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmNvbmZpZy50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWwuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9lZmZlY3RzL3NpZ25pbi5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9lZmZlY3RzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcclxuXHRcdHBhcmFtcyAmJlxyXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRpZiAoa2V5IGluIHBhcmFtcykgKHRoaXMgYXMgYW55KVtrZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsLCBIdHRwUmVzcG9uc2VCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNpZ25pbl9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2UgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8UmVzcG9uc2U+IHtcclxuXHRcdFJlc3VsdDogVXNlck1vZGVsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19TVEFSVEVEXCIsXHJcblx0UFJPR1JFU1NJTkdfRklOSVNIRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRURcIixcclxuXHRGQUlMRURfSEFQUEVORUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gRkFJTEVEX0hBUFBFTkVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19TVEFSVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ0ZpbmlzaGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRnJvbnRlbmRBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX0ZJTklTSEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRIYXBwZW5lZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkFjdGlvbiA9IFByb2dyZXNzaW5nU3RhcnRlZCB8IFByb2dyZXNzaW5nRmluaXNoZWQgfCBGYWlsZWRIYXBwZW5lZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0NBUFRDSEEgPSAnW2NhcHRjaGFdIG5ldyBjYXB0Y2hhJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZWNlaXZlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9MT0FERUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfRU5URVJFRCA9ICdbY2FwdGNoYV0gQ0FQVENIQV9FTlRFUkVEJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUFRDSEEgPSAnW2NhcHRjaGFdIENMRUFSX0NBUFRDSEEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBORVdfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVjZWl2ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRUNFSVZFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9rZW5Nb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZVJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VMb2FkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX0xPQURFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVudGVyZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0VOVEVSRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyQ2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbiA9XHJcbiAgICAgICAgfCBOZXdDYXB0Y2hhXHJcbiAgICAgICAgfCBUb2tlblJlcXVlc3RlZFxyXG4gICAgICAgIHwgVG9rZW5SZWNlaXZlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlUmVxdWVzdGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VMb2FkZWRcclxuICAgICAgICB8IENhcHRjaGFFbnRlcmVkXHJcbiAgICAgICAgfCBDbGVhckNhcHRjaGE7IiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOSU4gPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ25pblxyXG5cdHwgU2lnbmluU2VjY2VlZFxyXG5cdHwgU2lnbmluRmFpbGVkXHJcblx0fCBTaWduaW5SZWRpcmVjdFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBTaWdub3V0QWN0aW9uXHJcblx0fCBTaWduaW5SZXF1aXJlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgU2lnbmluQWN0aW9uLCBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9nZ2VkSW46IGJvb2xlYW47XHJcblx0dXNlcjogVXNlck1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2dnZWRJbjogZmFsc2UsXHJcblx0dXNlcjogbmV3IFVzZXJNb2RlbCh7IElkOiAxIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2lnbmluQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDoge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdFx0dXNlcjogbmV3IFVzZXJNb2RlbCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW4gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sb2dnZWRJbjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS51c2VyO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlci5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzID0ge1xyXG5cdHVzZXJTdGF0dXM6IHVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyXHJcbn07XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4oXHJcblx0XCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyU3RhdHVzXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRGcm9udGVuZFVzZXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoU3RhdGUsIHVzZXJSZWR1Y2VyLmdldFVzZXIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHNpZ25PdXQ/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0c2lnbk91dDogXCJcIixcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHdob0FtSTogXCJcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCJcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxyXG5cdH0sXHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdE1PRFVMRV9DT05GSUdfVE9LRU4sXHJcblx0RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyxcclxuXHRNT0RVTEVfREVGQVVMVF9DT05GSUdcclxufSBmcm9tIFwiLi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHN0b3JlQ29uZmlnID0+IHtcclxuXHRcdC8vIFx0aWYgKCFzdG9yZUNvbmZpZykgcmV0dXJuO1xyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHN0b3JlQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICA8YXV0aC1zaWduaW4gXHJcbiAgICAgICAgICAgICAgICBbZm9ybUlkXT0nKGZvcm1JZCQgfCBhc3luYyknXHJcbiAgICAgICAgICAgICAgICAoc2lnbmVkaW4pPVwic2lnbkluKCRldmVudClcIlxyXG4gICAgICAgID48L2F1dGgtc2lnbmluPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUlkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBPdXRwdXQoKSBzaWduZWRJbiQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiYXV0aC9mcm9udGVuZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwic2lnbmluXCIsXHJcblx0XHRcdFx0Ly8gY2FuQWN0aXZhdGU6IFsgU2lnbmluR3VhcmQgXSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXV0aC1zaWduaW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFxyXG4gICAgICAgIFtpZF09XCJmb3JtSWRcIlxyXG4gICAgICAgIFtjYXJkXT1cInRydWVcIlxyXG4gICAgICAgIChhY2NlcHQpPVwic2lnbmluKCRldmVudClcIlxyXG4gICAgPjwvbmdzLWZvcm0tdmlldz5cclxuPC9kaXY+XHJcbjwhLS0gPGRpdj5cclxuICAgIDxhIGZ4RmxleD1cIm5vZ3Jvd1wiIHJvdXRlckxpbms9XCIvdXNlci9wYXNzd29yZC9yZXNldFwiIG1hdC1yYWlzZWQtYnV0dG9uIGZ4RmxleEZpbGw+w5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKBw5jCscOYwqfDmcKFw5nCiMOYwrQgw5rCqcOYwrHDmMKvw5nChyDDmMKnw5vCjMOYwq/DmMKfPC9hPlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIHNpZ25lZGluID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHJcblx0c2lnbmluKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zaWduZWRpbi5lbWl0KGZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0aW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cdFx0Ly8gaWYgKCF0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbilcclxuXHRcdChyZXF1ZXN0IGFzIGFueSkud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNpZ25vdXRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmcm9tQXV0aCBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuLy8gVE9ETzogaWYgcmVxdWVzdCBpcyBmb3IgZnJvbnRuZCBzZXJ2ZXIgdGhlbiByZWRpcmVjdCB0byBmcm9udGVuZCBzaWduaW4gcm91dGVcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21BdXRoLkZlYXR1cmVTdGF0ZT4gLy8gcHJpdmF0ZSBGcm9udGVuZFNpZ25pblNlcnZpY2U6IEZyb250ZW5kU2lnbmluU2VydmljZVxyXG5cdCkge31cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dFxyXG5cdFx0XHQuaGFuZGxlKHJlcXVlc3QpXHJcblx0XHRcdC5tYXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkgcmV0dXJuIGV2ZW50O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT0gNDAxKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwibG9nb3V0XCIpKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWdub3V0QWN0aW9uKCkpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIGZpbHRlciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFdob0FtSUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2hvQW1JQWN0aW9uKCkpLCAzMDApO1xyXG5cdH1cclxuXHJcblx0c2lnbmluKG1vZGVsOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3Q8U2lnbmluX0FwaU1vZGVsLlJlc3BvbnNlPihjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbIHVzZXIuUm9sZSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvLyAuY2F0Y2goZXJyID0+IHtcclxuXHRcdC8vIFx0aWYgKGVyci5zdGF0dXMgPT0gNDAwKSB7XHJcblx0XHQvLyBcdFx0dGhpcy5zbmFja0Jhci5vcGVuKFwiw5rCqcOYwq8gw5jCp8OZwoXDmcKGw5vCjMOYwqrDm8KMIMOYwqfDmMK0w5jCqsOYwqjDmMKnw5nChyDDmMKnw5jCs8OYwqpcIiwgbnVsbCwge1xyXG5cdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDUwMDBcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fSBlbHNlIGlmIChlcnIuc3RhdHVzID09IDQwMykge1xyXG5cdFx0Ly8gXHRcdHRoaXMuc25hY2tCYXIub3BlbihcIiDDmMK0w5nChcOYwqfDmMKxw5nChyDDmcKFw5nCiMOYwqjDmMKnw5vCjMOZwoQgw5nCiCDDm8KMw5jCpyDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCp8OYwrTDmMKqw5jCqMOYwqfDmcKHIMOYwqfDmMKzw5jCqlwiLCBudWxsLCB7XHJcblx0XHQvLyBcdFx0XHRkdXJhdGlvbjogNTAwMFxyXG5cdFx0Ly8gXHRcdH0pO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcblxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICtcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5zaWduT3V0XHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLndob0FtSVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBGcm9udGVuZFNpZ25pblNlcnZpY2VTdHViID0ge307XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ld0NhcHRjaGEgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgRnJvbnRlbmRTaWduaW5TZXJ2aWNlOiBGcm9udGVuZFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHR3aG9BbUkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT4gdGhpcy5Gcm9udGVuZFNpZ25pblNlcnZpY2Uud2hvQW1JKCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLkZyb250ZW5kU2lnbmluU2VydmljZS5zaWduaW4ocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25JblJlcXVpcmVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IHNpZ25pbkJvdHRvbVNoZWV0UmVmID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCwge1xyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwiY2xlYXItbWF0LWNhcmQtYm94XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmluc3RhbmNlLnNpZ25lZEluJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBzaWduaW5Cb3R0b21TaGVldFJlZjtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi9cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpIEFmdGVyU2lnbmluRmlsZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUpLm1hcCgoKSA9PiBuZXcgTmV3Q2FwdGNoYSgpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUoXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGEpID0+XHJcblx0XHRcdHRoaXMuRnJvbnRlbmRTaWduaW5TZXJ2aWNlLnNpZ25vdXQoKS5waXBlKFxyXG5cdFx0XHRcdG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdC8vIFRPRE86IGRpc3BhdGNoIHZhbGlkIGFjdGlvblxyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YoZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0Ly8gVE9ET1xyXG5cdC8vIEBFZmZlY3QoKSBTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0VG9Mb2dpblBhZ2UkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1QpXHJcblx0XHQucGlwZSh0YXAoKGF1dGhlZCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImF1dGgvc2lnbmluXCIgXSkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0QWZ0ZXJTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHR0YXAoKGF1dGhlZCkgPT5cclxuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLmFmdGVyU2lnbm91dFJlZGlyZWN0VG8gXSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMsIEZhaWxlZEhhcHBlbmVkLCBQcm9ncmVzc2luZ1N0YXJ0ZWQsIFByb2dyZXNzaW5nRmluaXNoZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQgXSxcclxuXHRwcm92aWRlcnM6IFtdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IDxGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9XHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0RnJvbnRlbmRTaWduaW5TZXJ2aWNlXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiLCBGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgU2lnbmluRWZmZWN0cywgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkVmZmVjdHMgXSksXHJcblx0XHRGcm9udGVuZEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSxcclxuXHRcdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsidXNlclJlZHVjZXIuVXNlclJlZHVjZXIiLCJ1c2VyUmVkdWNlci5nZXRMb2dnZWRJbiIsInVzZXJSZWR1Y2VyLmdldFVzZXIiLCJGcm9udGVuZFNpZ25pblNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0lBZUMsWUFBWSxNQUFZOzs7OztxQkFGTixFQUFFO1FBR25CLE1BQU07WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUM5QixJQUFJLEdBQUcsSUFBSSxNQUFNO29CQUFFLG1CQUFDLElBQVcsR0FBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO0tBQ0o7Q0FDRDs7Ozs7Ozs7Ozs7QUNsQkQsSUFBaUIsZUFBZTtBQUFoQyxXQUFpQixlQUFlO0lBQy9CO0tBQWdFO0lBQW5ELHVCQUFPO0lBRXBCO0tBRUM7SUFGWSx3QkFBUTtHQUhMLGVBQWUsS0FBZixlQUFlLFFBTS9COzs7Ozs7Ozs7Ozs7Ozs7Q0NDQTs7Ozs7Q0FHQTs7Ozs7O0FDVEQsQUFBTyx1QkFBTSxXQUFXLEdBQUcsdUJBQXVCLENBQUM7QUFDbkQ7O29CQVF3QixXQUFXOztDQUNsQzs7Ozs7Ozs7Y0NUVyxvQ0FBb0M7WUFDdEMsa0NBQWtDO2dCQUM5QixzQ0FBc0M7YUFDekMsbUNBQW1DO29CQUM1QiwyQ0FBMkM7b0JBQzNDLDJD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
import { __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { InjectionToken, Component, Injectable, Inject, NgModule, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, throwError, of } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { HttpResponse, HttpErrorResponse, HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from '@angular/material';
import { map, switchMap, take, filter, catchError, tap, pluck } from 'rxjs/operators';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
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
var ProgressingStarted = /** @class */ (function () {
    function ProgressingStarted() {
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED" /* PROGRESSING_STARTED */;
    }
    return ProgressingStarted;
}());
var ProgressingFinished = /** @class */ (function () {
    function ProgressingFinished() {
        this.type = "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED" /* PROGRESSING_FINISHED */;
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
    WHO_AM_I: "[FRONTEND_AUTHENTICATION] who am i",
    SIGNIN: "[FRONTEND_AUTHENTICATION] Signin",
    DO_SIGNOUT: "[FRONTEND_AUTHENTICATION] Do Signout",
    SIGNOUT: "[FRONTEND_AUTHENTICATION] Signout",
    SIGNIN_SUCCEED: "[FRONTEND_AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE: "[FRONTEND_AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT: "[FRONTEND_AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED: "[FRONTEND_AUTHENTICATION][Signin] Required",
};
var WhoAmIAction = /** @class */ (function () {
    function WhoAmIAction() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
    return WhoAmIAction;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

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
//#region  selectors
var /** @type {?} */ getLoggedIn = function (state) { return state.loggedIn; };
var /** @type {?} */ getUser = function (state) { return state.user; };
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FrontendAuthenticationReducers = {
    userStatus: UserReducer
};
//#region selectors
var /** @type {?} */ selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
var /** @type {?} */ selectAuthState = createSelector(selectFrontendAuthenticationState, function (state) { return state.userStatus; });
var /** @type {?} */ getFrontendAuthenticationState = createSelector(selectAuthState, getLoggedIn);
var /** @type {?} */ getFrontendUser = createSelector(selectAuthState, getUser);

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
        production: false,
        frontend_server: "http://localhost:3000"
    },
    afterSignoutRedirectTo: "/"
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FrontendAuthenticationContainerComponent = /** @class */ (function () {
    function FrontendAuthenticationContainerComponent() {
    }
    FrontendAuthenticationContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "\n          <router-outlet></router-outlet>\n        "
                },] },
    ];
    return FrontendAuthenticationContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FrontendAuthenticationConfigurationService = /** @class */ (function () {
    function FrontendAuthenticationConfigurationService(configFile, store) {
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
    Object.defineProperty(FrontendAuthenticationConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    FrontendAuthenticationConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FrontendAuthenticationConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = defineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });
    return FrontendAuthenticationConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        { type: FrontendAuthenticationConfigurationService },
        { type: Store }
    ]; };
    SigninContainerComponent.propDecorators = {
        signedIn$: [{ type: Output }]
    };
    return SigninContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
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
var /** @type {?} */ FrontendAuthenticationRoutingModule = RouterModule.forChild(routes);

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
 * @suppress {checkTypes} checked by tsc
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
        { type: FrontendAuthenticationConfigurationService }
    ]; };
    return WithCredentialInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UnauthorizedInterceptor = /** @class */ (function () {
    function UnauthorizedInterceptor(router, store // private FrontendSigninService: FrontendSigninService
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
 * @suppress {checkTypes} checked by tsc
 */
var FrontendSigninService = /** @class */ (function () {
    function FrontendSigninService(http, store, configurationService, snackBar) {
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
    FrontendSigninService.prototype.signin = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.signIn, model);
        }), map(function (response) {
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
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FrontendSigninService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: FrontendAuthenticationConfigurationService },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ FrontendSigninService.ngInjectableDef = defineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(inject(HttpClient), inject(Store), inject(FrontendAuthenticationConfigurationService), inject(MatSnackBar$1)); }, token: FrontendSigninService, providedIn: "root" });
    return FrontendSigninService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninEffects = /** @class */ (function () {
    function SigninEffects(actions$, router, FrontendSigninService$$1, configurationService, bottomSheet) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.FrontendSigninService = FrontendSigninService$$1;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(function () { return _this.FrontendSigninService.whoAmI(); }), map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return Observable.of(new SigninFailed(error)); }));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(function (payload) { return _this.FrontendSigninService.signin(payload); }), map(function (user) { return new SigninSecceed(user); }), catchError(function (error) { return Observable.of(new SigninFailed(error)); }));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap(function (data) {
            var /** @type {?} */ signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(function () {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(tap(function (data) {
            debugger;
            if (location.pathname.indexOf("signin") > -1)
                _this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(function (data) {
            return _this.FrontendSigninService.signout().pipe(map(function () { return new SignoutAction(); }), catchError(function (err) {
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
            .pipe(tap(function (authed) {
            return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]);
        }));
    }
    SigninEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SigninEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FrontendSigninService },
        { type: FrontendAuthenticationConfigurationService },
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
 * @suppress {checkTypes} checked by tsc
 */
var FrontendAuthenticationEffects = /** @class */ (function () {
    function FrontendAuthenticationEffects(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.dispachProgressingStarted$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(map(function () { return new ProgressingStarted(); }));
        this.dispachProgressingFinished$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(map(function () { return new ProgressingFinished(); }));
    }
    FrontendAuthenticationEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FrontendAuthenticationEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FrontendAuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FrontendAuthenticationEffects.prototype, "dispachProgressingFinished$", void 0);
    return FrontendAuthenticationEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        if (config === void 0) { config = /** @type {?} */ ({}); }
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
    };
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
    return NgsFrontendAuthenticationModule;
}());
var RootNgsFrontendAuthenticationModule = /** @class */ (function () {
    function RootNgsFrontendAuthenticationModule() {
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
    return RootNgsFrontendAuthenticationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, getFrontendAuthenticationState, NgsFrontendAuthenticationModule, SigninComponent as ɵg, FrontendAuthenticationEffects as ɵm, SigninEffects as ɵk, FrontendAuthenticationRoutingModule as ɵn, MODULE_CONFIG_TOKEN as ɵd, RootNgsFrontendAuthenticationModule as ɵa, UnauthorizedInterceptor as ɵo, WithCredentialInterceptor as ɵp, FrontendAuthenticationReducers as ɵi, UserReducer as ɵj, FrontendAuthenticationConfigurationService as ɵc, FrontendSigninService as ɵl, FrontendAuthenticationContainerComponent as ɵh, SigninContainerComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvbW9kZWxzL3NpZ25pbi5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9jYXB0Y2hhLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL3JlZHVjZXJzL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmNvbmZpZy50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy93aXRoLWNyZWRlbnRpYWwuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3IudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9lZmZlY3RzL3NpZ25pbi5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9lZmZlY3RzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJhbXM/OiBhbnkpIHtcclxuXHRcdHBhcmFtcyAmJlxyXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRpZiAoa2V5IGluIHBhcmFtcykgKHRoaXMgYXMgYW55KVtrZXldID0gcGFyYW1zW2tleV07XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsLCBIdHRwUmVzcG9uc2VCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgbmFtZXNwYWNlIFNpZ25pbl9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2UgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8UmVzcG9uc2U+IHtcclxuXHRcdFJlc3VsdDogVXNlck1vZGVsO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcyB7XHJcblx0UFJPR1JFU1NJTkdfU1RBUlRFRCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBQUk9HUkVTU0lOR19TVEFSVEVEXCIsXHJcblx0UFJPR1JFU1NJTkdfRklOSVNIRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gUFJPR1JFU1NJTkdfRklOSVNIRURcIixcclxuXHRGQUlMRURfSEFQUEVORUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gRkFJTEVEX0hBUFBFTkVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzaW5nU3RhcnRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5QUk9HUkVTU0lOR19TVEFSVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2luZ0ZpbmlzaGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRnJvbnRlbmRBdXRoZW50aWNhdGlvbkFjdGlvblR5cGVzLlBST0dSRVNTSU5HX0ZJTklTSEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGYWlsZWRIYXBwZW5lZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZyb250ZW5kQXV0aGVudGljYXRpb25BY3Rpb25UeXBlcy5GQUlMRURfSEFQUEVORUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkFjdGlvbiA9IFByb2dyZXNzaW5nU3RhcnRlZCB8IFByb2dyZXNzaW5nRmluaXNoZWQgfCBGYWlsZWRIYXBwZW5lZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Nb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgTkVXX0NBUFRDSEEgPSAnW2NhcHRjaGFdIG5ldyBjYXB0Y2hhJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gdG9rZW5fcmVxdWVzdGVkJztcclxuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1tjYXB0Y2hhXSB0b2tlbl9yZWNlaXZlZCc7XHJcbmV4cG9ydCBjb25zdCBDQVBUQ0hBX0lNQUdFX1JFUVVFU1RFRCA9ICdbY2FwdGNoYV0gY2FwdGNoYV9pbWFnZV9yZXF1ZXN0ZWQnO1xyXG5leHBvcnQgY29uc3QgQ0FQVENIQV9JTUFHRV9MT0FERUQgPSAnW2NhcHRjaGFdIGNhcHRjaGFfaW1hZ2VfbG9hZGVkJztcclxuZXhwb3J0IGNvbnN0IENBUFRDSEFfRU5URVJFRCA9ICdbY2FwdGNoYV0gQ0FQVENIQV9FTlRFUkVEJztcclxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUFRDSEEgPSAnW2NhcHRjaGFdIENMRUFSX0NBUFRDSEEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5ld0NhcHRjaGEgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBORVdfQ0FQVENIQTtcclxufVxyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRVFVRVNURUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRva2VuUmVjZWl2ZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBUT0tFTl9SRUNFSVZFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVG9rZW5Nb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENhcHRjaGFJbWFnZVJlcXVlc3RlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENBUFRDSEFfSU1BR0VfUkVRVUVTVEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhSW1hZ2VMb2FkZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0lNQUdFX0xPQURFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYUVudGVyZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDQVBUQ0hBX0VOVEVSRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyQ2FwdGNoYSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENMRUFSX0NBUFRDSEE7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ2FwdGNoYUFjdGlvbiA9XHJcbiAgICAgICAgfCBOZXdDYXB0Y2hhXHJcbiAgICAgICAgfCBUb2tlblJlcXVlc3RlZFxyXG4gICAgICAgIHwgVG9rZW5SZWNlaXZlZFxyXG4gICAgICAgIHwgQ2FwdGNoYUltYWdlUmVxdWVzdGVkXHJcbiAgICAgICAgfCBDYXB0Y2hhSW1hZ2VMb2FkZWRcclxuICAgICAgICB8IENhcHRjaGFFbnRlcmVkXHJcbiAgICAgICAgfCBDbGVhckNhcHRjaGE7IiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOSU4gPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ25pblxyXG5cdHwgU2lnbmluU2VjY2VlZFxyXG5cdHwgU2lnbmluRmFpbGVkXHJcblx0fCBTaWduaW5SZWRpcmVjdFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBTaWdub3V0QWN0aW9uXHJcblx0fCBTaWduaW5SZXF1aXJlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgU2lnbmluQWN0aW9uLCBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9nZ2VkSW46IGJvb2xlYW47XHJcblx0dXNlcjogVXNlck1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2dnZWRJbjogZmFsc2UsXHJcblx0dXNlcjogbmV3IFVzZXJNb2RlbCh7IElkOiAxIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2lnbmluQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogdHJ1ZSxcclxuXHRcdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGNhc2UgU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDoge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2dnZWRJbjogZmFsc2UsXHJcblx0XHRcdFx0dXNlcjogbmV3IFVzZXJNb2RlbCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyNyZWdpb24gIHNlbGVjdG9yc1xyXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW4gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5sb2dnZWRJbjtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS51c2VyO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vdXNlci5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzID0ge1xyXG5cdHVzZXJTdGF0dXM6IHVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyXHJcbn07XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4oXHJcblx0XCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyU3RhdHVzXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRGcm9udGVuZFVzZXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoU3RhdGUsIHVzZXJSZWR1Y2VyLmdldFVzZXIpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdHNpZ25PdXQ/OiBzdHJpbmc7XHJcblx0XHRzaWduSW4/OiBzdHJpbmc7XHJcblx0XHR3aG9BbUk/OiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHNpZ25Jbjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRhZnRlclNpZ25vdXRSZWRpcmVjdFRvPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0c2lnbk91dDogXCJcIixcclxuXHRcdHNpZ25JbjogXCJcIixcclxuXHRcdHdob0FtSTogXCJcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCJcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxyXG5cdH0sXHJcblx0YWZ0ZXJTaWdub3V0UmVkaXJlY3RUbzogXCIvXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+KFwiTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdE1PRFVMRV9DT05GSUdfVE9LRU4sXHJcblx0RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyxcclxuXHRNT0RVTEVfREVGQVVMVF9DT05GSUdcclxufSBmcm9tIFwiLi4vZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBhbnksIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHN0b3JlQ29uZmlnID0+IHtcclxuXHRcdC8vIFx0aWYgKCFzdG9yZUNvbmZpZykgcmV0dXJuO1xyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHN0b3JlQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICA8YXV0aC1zaWduaW4gXHJcbiAgICAgICAgICAgICAgICBbZm9ybUlkXT0nKGZvcm1JZCQgfCBhc3luYyknXHJcbiAgICAgICAgICAgICAgICAoc2lnbmVkaW4pPVwic2lnbkluKCRldmVudClcIlxyXG4gICAgICAgID48L2F1dGgtc2lnbmluPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUlkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBPdXRwdXQoKSBzaWduZWRJbiQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiYXV0aC9mcm9udGVuZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwic2lnbmluXCIsXHJcblx0XHRcdFx0Ly8gY2FuQWN0aXZhdGU6IFsgU2lnbmluR3VhcmQgXSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXV0aC1zaWduaW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFxyXG4gICAgICAgIFtpZF09XCJmb3JtSWRcIlxyXG4gICAgICAgIFtjYXJkXT1cInRydWVcIlxyXG4gICAgICAgIChhY2NlcHQpPVwic2lnbmluKCRldmVudClcIlxyXG4gICAgPjwvbmdzLWZvcm0tdmlldz5cclxuPC9kaXY+XHJcbjwhLS0gPGRpdj5cclxuICAgIDxhIGZ4RmxleD1cIm5vZ3Jvd1wiIHJvdXRlckxpbms9XCIvdXNlci9wYXNzd29yZC9yZXNldFwiIG1hdC1yYWlzZWQtYnV0dG9uIGZ4RmxleEZpbGw+w5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKBw5jCscOYwqfDmcKFw5nCiMOYwrQgw5rCqcOYwrHDmMKvw5nChyDDmMKnw5vCjMOYwq/DmMKfPC9hPlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIHNpZ25lZGluID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHJcblx0c2lnbmluKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zaWduZWRpbi5lbWl0KGZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGFuZGxlciB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0aW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cdFx0Ly8gaWYgKCF0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbilcclxuXHRcdChyZXF1ZXN0IGFzIGFueSkud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIYW5kbGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNpZ25vdXRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBmcm9tQXV0aCBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgb2YsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuLy8gVE9ETzogaWYgcmVxdWVzdCBpcyBmb3IgZnJvbnRuZCBzZXJ2ZXIgdGhlbiByZWRpcmVjdCB0byBmcm9udGVuZCBzaWduaW4gcm91dGVcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVW5hdXRob3JpemVkSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21BdXRoLkZlYXR1cmVTdGF0ZT4gLy8gcHJpdmF0ZSBGcm9udGVuZFNpZ25pblNlcnZpY2U6IEZyb250ZW5kU2lnbmluU2VydmljZVxyXG5cdCkge31cclxuXHRpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dFxyXG5cdFx0XHQuaGFuZGxlKHJlcXVlc3QpXHJcblx0XHRcdC5tYXAoKGV2ZW50OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG5cdFx0XHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkgcmV0dXJuIGV2ZW50O1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcblx0XHRcdFx0aWYgKGVyci5zdGF0dXMgIT0gNDAxKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cdFx0XHRcdGlmIChlcnIudXJsLmluY2x1ZGVzKFwibG9nb3V0XCIpKSByZXR1cm4gdGhyb3dFcnJvcihlcnIpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaWdub3V0QWN0aW9uKCkpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhyb3dFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIGZpbHRlciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFdob0FtSUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2hvQW1JQWN0aW9uKCkpLCAzMDApO1xyXG5cdH1cclxuXHJcblx0c2lnbmluKG1vZGVsOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3Q8U2lnbmluX0FwaU1vZGVsLlJlc3BvbnNlPihjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbIHVzZXIuUm9sZSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvLyAuY2F0Y2goZXJyID0+IHtcclxuXHRcdC8vIFx0aWYgKGVyci5zdGF0dXMgPT0gNDAwKSB7XHJcblx0XHQvLyBcdFx0dGhpcy5zbmFja0Jhci5vcGVuKFwiw5rCqcOYwq8gw5jCp8OZwoXDmcKGw5vCjMOYwqrDm8KMIMOYwqfDmMK0w5jCqsOYwqjDmMKnw5nChyDDmMKnw5jCs8OYwqpcIiwgbnVsbCwge1xyXG5cdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDUwMDBcclxuXHRcdC8vIFx0XHR9KTtcclxuXHRcdC8vIFx0fSBlbHNlIGlmIChlcnIuc3RhdHVzID09IDQwMykge1xyXG5cdFx0Ly8gXHRcdHRoaXMuc25hY2tCYXIub3BlbihcIiDDmMK0w5nChcOYwqfDmMKxw5nChyDDmcKFw5nCiMOYwqjDmMKnw5vCjMOZwoQgw5nCiCDDm8KMw5jCpyDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrEgw5jCp8OYwrTDmMKqw5jCqMOYwqfDmcKHIMOYwqfDmMKzw5jCqlwiLCBudWxsLCB7XHJcblx0XHQvLyBcdFx0XHRkdXJhdGlvbjogNTAwMFxyXG5cdFx0Ly8gXHRcdH0pO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcblxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICtcclxuXHRcdFx0XHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5zaWduT3V0XHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcclxuXHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLndob0FtSVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBGcm9udGVuZFNpZ25pblNlcnZpY2VTdHViID0ge307XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ld0NhcHRjaGEgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgRnJvbnRlbmRTaWduaW5TZXJ2aWNlOiBGcm9udGVuZFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHR3aG9BbUkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT4gdGhpcy5Gcm9udGVuZFNpZ25pblNlcnZpY2Uud2hvQW1JKCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLkZyb250ZW5kU2lnbmluU2VydmljZS5zaWduaW4ocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25JblJlcXVpcmVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IHNpZ25pbkJvdHRvbVNoZWV0UmVmID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCwge1xyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwiY2xlYXItbWF0LWNhcmQtYm94XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmluc3RhbmNlLnNpZ25lZEluJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBzaWduaW5Cb3R0b21TaGVldFJlZjtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi9cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpIEFmdGVyU2lnbmluRmlsZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUpLm1hcCgoKSA9PiBuZXcgTmV3Q2FwdGNoYSgpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUoXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGEpID0+XHJcblx0XHRcdHRoaXMuRnJvbnRlbmRTaWduaW5TZXJ2aWNlLnNpZ25vdXQoKS5waXBlKFxyXG5cdFx0XHRcdG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdC8vIFRPRE86IGRpc3BhdGNoIHZhbGlkIGFjdGlvblxyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YoZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0Ly8gVE9ET1xyXG5cdC8vIEBFZmZlY3QoKSBTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0VG9Mb2dpblBhZ2UkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1QpXHJcblx0XHQucGlwZSh0YXAoKGF1dGhlZCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImF1dGgvc2lnbmluXCIgXSkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0QWZ0ZXJTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHR0YXAoKGF1dGhlZCkgPT5cclxuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLmFmdGVyU2lnbm91dFJlZGlyZWN0VG8gXSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMsIEZhaWxlZEhhcHBlbmVkLCBQcm9ncmVzc2luZ1N0YXJ0ZWQsIFByb2dyZXNzaW5nRmluaXNoZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ1N0YXJ0ZWQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFByb2dyZXNzaW5nU3RhcnRlZCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGRpc3BhY2hQcm9ncmVzc2luZ0ZpbmlzaGVkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUsIFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBQcm9ncmVzc2luZ0ZpbmlzaGVkKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtcC1jb21wb25lbnRzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBXaXRoQ3JlZGVudGlhbEludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL3dpdGgtY3JlZGVudGlhbC5pbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgeyBVbmF1dGhvcml6ZWRJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy91bmF1dGhvcml6ZWQuaW50ZXJjZXB0b3JcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCwgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBTaWduaW5Db250YWluZXJDb21wb25lbnQgXSxcclxuXHRwcm92aWRlcnM6IFtdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZzogRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IDxGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPnt9XHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFVuYXV0aG9yaXplZEludGVyY2VwdG9yLFxyXG5cdFx0XHRcdFx0bXVsdGk6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IFdpdGhDcmVkZW50aWFsSW50ZXJjZXB0b3IsXHJcblx0XHRcdFx0XHRtdWx0aTogdHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0RnJvbnRlbmRTaWduaW5TZXJ2aWNlXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiLCBGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgU2lnbmluRWZmZWN0cywgRnJvbnRlbmRBdXRoZW50aWNhdGlvbkVmZmVjdHMgXSksXHJcblx0XHRGcm9udGVuZEF1dGhlbnRpY2F0aW9uUm91dGluZ01vZHVsZSxcclxuXHRcdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsidXNlclJlZHVjZXIuVXNlclJlZHVjZXIiLCJ1c2VyUmVkdWNlci5nZXRMb2dnZWRJbiIsInVzZXJSZWR1Y2VyLmdldFVzZXIiLCJGcm9udGVuZFNpZ25pblNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUE7SUFlQyxtQkFBWSxNQUFZO1FBQXhCLGlCQUtDOzs7OztxQkFQaUIsRUFBRTtRQUduQixNQUFNO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO2dCQUM5QixJQUFJLEdBQUcsSUFBSSxNQUFNO29CQUFFLG1CQUFDLEtBQVcsR0FBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO0tBQ0o7b0JBcEJGO0lBcUJDOzs7Ozs7Ozs7OztBQ2xCRCxJQUFpQixlQUFlO0FBQWhDLFdBQWlCLGVBQWU7SUFDL0IsSUFBQTs7O3NCQUpEO1FBSWlFLENBQUE7SUFBbkQsdUJBQU87SUFFcEIsSUFBQTs7O3VCQU5EO1FBUUUsQ0FBQTtJQUZZLHdCQUFRO0dBSEwsZUFBZSxLQUFmLGVBQWUsUUFNL0I7Ozs7Ozs7Ozs7O0FDREQsSUFBQTs7Ozs2QkFSQTtJQVVDLENBQUE7QUFGRCxBQUdBLElBQUE7Ozs7OEJBWEE7SUFhQyxDQUFBOzs7Ozs7QUNURCxBQUFPLHFCQUFNLFdBQVcsR0FBRyx1QkFBdUIsQ0FB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
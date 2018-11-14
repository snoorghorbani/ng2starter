import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { Component, InjectionToken, Injectable, Inject, NgModule, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatBottomSheetModule } from '@angular/material';
import { map, switchMap, take, filter, catchError, tap, pluck } from 'rxjs/operators';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { UserActionTypes } from '@soushians/user';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgsFormModule } from '@soushians/form';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            debugger;
            return Object.assign({}, state, { loggedIn: false, user: new UserModel() });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
const getLoggedIn = (state) => state.loggedIn;
/** @type {?} */
const getUser = (state) => state.user;
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const FrontendAuthenticationReducers = {
    userStatus: UserReducer
};
/** @type {?} */
const selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
/** @type {?} */
const selectAuthState = createSelector(selectFrontendAuthenticationState, (state) => state.userStatus);
/** @type {?} */
const getFrontendAuthenticationState = createSelector(selectAuthState, getLoggedIn);
/** @type {?} */
const getFrontendUser = createSelector(selectAuthState, getUser);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
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
const MODULE_CONFIG_TOKEN = new InjectionToken("ModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
const FrontendAuthenticationRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FrontendSigninService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} snackBar
     */
    constructor(http, store, configurationService, snackBar) {
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
    signin(token) {
        this.configurationService.config$.subscribe(c => {
            debugger;
        });
        return this.configurationService.config$.pipe(filter(config => config.endpoints.signIn != ""), take(1), switchMap(config => this.http.post(config.env.frontend_server + config.endpoints.signIn, { token })), map((response) => {
            /** @type {?} */
            const user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SigninEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} frontendSigninService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(actions$, router, frontendSigninService, configurationService, bottomSheet) {
        this.actions$ = actions$;
        this.router = router;
        this.frontendSigninService = frontendSigninService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(() => this.frontendSigninService.whoAmI()), map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(payload => this.frontendSigninService.signin(payload)), map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap((data) => {
            /** @type {?} */
            const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
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
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(data => this.frontendSigninService.signout().pipe(map(() => new SignoutAction()), catchError(err => {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FrontendAuthenticationModuleEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.goToList$ = this.actions$.ofType(UserActionTypes.REFRESH_USER_INFO).pipe(map(action => action.payload), filter(user => user.Token != null), switchMap(user => this.service.signin(user.Token).map(_user => {
            return new SigninSecceed(_user);
        })));
    }
}
FrontendAuthenticationModuleEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FrontendAuthenticationModuleEffects.ctorParameters = () => [
    { type: Actions },
    { type: FrontendSigninService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], FrontendAuthenticationModuleEffects.prototype, "goToList$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgsFrontendAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = /** @type {?} */ ({})) {
        return {
            ngModule: RootNgsFrontendAuthenticationModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, FrontendSigninService]
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
                    EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
                    FrontendAuthenticationRoutingModule,
                    NgsFrontendAuthenticationModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { UserModel, SignInActionTypes, DoSignoutAction, SigninRequiredAction, getFrontendAuthenticationState, getFrontendUser, NgsFrontendAuthenticationModule, SigninComponent as ɵm, SigninEffects as ɵq, FrontendAuthenticationRoutingModule as ɵr, MODULE_CONFIG_TOKEN as ɵj, FrontendAuthenticationModuleEffects as ɵo, RootNgsFrontendAuthenticationModule as ɵd, FrontendAuthenticationReducers as ɵa, selectAuthState as ɵc, selectFrontendAuthenticationState as ɵb, UserReducer as ɵe, getLoggedIn as ɵf, getUser as ɵg, FrontendAuthenticationConfigurationService as ɵi, FrontendSigninService as ɵp, FrontendAuthenticationContainerComponent as ɵn, SigninContainerComponent as ɵh };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvYWN0aW9ucy9zaWduaW4uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvcmVkdWNlcnMvdXNlci5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24uY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uL2xpYi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lci9zaWduaW4tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2R1bXAtY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvc2VydmljZXMvc2lnbmluLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24vbGliL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmVmZmVjdC50cyIsIm5nOi8vQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi9saWIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdC8vIEZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIExhc3ROYW1lOiBzdHJpbmc7XHJcblx0VXNlcm5hbWU6IHN0cmluZztcclxuXHQvLyBNb2JpbGVOdW1iZXI6IHN0cmluZztcclxuXHQvLyBTZXg6IHN0cmluZztcclxuXHQvLyBCaXJ0aGRhdGU6IHN0cmluZztcclxuXHRFbWFpbDogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpY2F0aW9uTm86IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWVyVHlwZTogc3RyaW5nO1xyXG5cdC8vIFJlZ2lzdGVyRGF0ZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJUeXBlOiBzdHJpbmc7XHJcblx0Um9sZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBhcmFtcz86IGFueSkge1xyXG5cdFx0cGFyYW1zICYmXHJcblx0XHRcdE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdGlmIChrZXkgaW4gcGFyYW1zKSAodGhpcyBhcyBhbnkpW2tleV0gPSBwYXJhbXNba2V5XTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIHdobyBhbSBpXCIsXHJcblx0U0lHTklOID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIFNpZ25pblwiLFxyXG5cdERPX1NJR05PVVQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gRG8gU2lnbm91dFwiLFxyXG5cdFNJR05PVVQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gU2lnbm91dFwiLFxyXG5cdFNJR05JTl9TVUNDRUVEID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gU3VjY2Vzc1wiLFxyXG5cdFNJR05JTl9GQUlMVVJFID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTl9SRURJUkVDVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlZGlyZWN0XCIsXHJcblx0U0lHTklOX1JFUVVJUkVEID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVxdWlyZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2hvQW1JQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0k7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNpZ25pbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbmluXHJcblx0fCBTaWduaW5TZWNjZWVkXHJcblx0fCBTaWduaW5GYWlsZWRcclxuXHR8IFNpZ25pblJlZGlyZWN0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25pblJlcXVpcmVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBTaWduaW5BY3Rpb24sIFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2dnZWRJbjogYm9vbGVhbjtcclxuXHR1c2VyOiBVc2VyTW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvZ2dlZEluOiBmYWxzZSxcclxuXHR1c2VyOiBuZXcgVXNlck1vZGVsKHsgSWQ6IDEgfSlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTaWduaW5BY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0Y2FzZSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUOiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvZ2dlZEluOiBmYWxzZSxcclxuXHRcdFx0XHR1c2VyOiBuZXcgVXNlck1vZGVsKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiAgc2VsZWN0b3JzXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJbiA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmxvZ2dlZEluO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnVzZXI7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1c2VyUmVkdWNlciBmcm9tIFwiLi91c2VyLnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5leHBvcnQgeyBVc2VyTW9kZWwgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIHtcclxuXHR1c2VyU3RhdHVzOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJlZHVjZXJzID0ge1xyXG5cdHVzZXJTdGF0dXM6IHVzZXJSZWR1Y2VyLlVzZXJSZWR1Y2VyXHJcbn07XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZT4oXHJcblx0XCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlLFxyXG5cdChzdGF0ZTogRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKSA9PiBzdGF0ZS51c2VyU3RhdHVzXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QXV0aFN0YXRlLCB1c2VyUmVkdWNlci5nZXRMb2dnZWRJbik7XHJcbmV4cG9ydCBjb25zdCBnZXRGcm9udGVuZFVzZXIgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBdXRoU3RhdGUsIHVzZXJSZWR1Y2VyLmdldFVzZXIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyB7XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0c2lnbk91dD86IHN0cmluZztcclxuXHRcdHNpZ25Jbj86IHN0cmluZztcclxuXHRcdHdob0FtST86IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0c2lnbkluOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0XHRzZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG8/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRzaWduSW46IFwiL2FwaS91c2VyL3NpZ25pblwiLFxyXG5cdFx0c2lnbk91dDogXCIvYXBpL3VzZXIvc2lnbm91dFwiLFxyXG5cdFx0d2hvQW1JOiBcIi9hcGkvdXNlci9hY2NvdW50L3Byb2ZpbGVcIlxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHNpZ25JbjogXCI1YTk1MWNmYmZkNzkxNjMyYTA5YjNiYzZcIlxyXG5cdH0sXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJhdXRoL21vZHVsZS9mcm9udGVuZC9zZXJ2ZXIvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcImF1dGgvbW9kdWxlL3NlcnZlci9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGFmdGVyU2lnbm91dFJlZGlyZWN0VG86IFwiL1wiXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnPihcIk1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0TU9EVUxFX0NPTkZJR19UT0tFTixcclxuXHRGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnLFxyXG5cdE1PRFVMRV9ERUZBVUxUX0NPTkZJR1xyXG59IGZyb20gXCIuLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi5jb25maWdcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IGFueSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoc3RvcmVDb25maWcgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIXN0b3JlQ29uZmlnKSByZXR1cm47XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgc3RvcmVDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZ25pbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuICAgICAgICA8YXV0aC1zaWduaW4gXHJcbiAgICAgICAgICAgICAgICBbZm9ybUlkXT0nKGZvcm1JZCQgfCBhc3luYyknXHJcbiAgICAgICAgICAgICAgICAoc2lnbmVkaW4pPVwic2lnbkluKCRldmVudClcIlxyXG4gICAgICAgID48L2F1dGgtc2lnbmluPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUlkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdEBPdXRwdXQoKSBzaWduZWRJbiQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLmZvcm1JZCQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGNvbmZpZyA9PiBjb25maWcuZm9ybXMuc2lnbkluKTtcclxuXHR9XHJcblxyXG5cdHNpZ25Jbihmb3JtVmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2lnbmluKGZvcm1WYWx1ZSkpO1xyXG5cdFx0dGhpcy5zaWduZWRJbiQuZW1pdCh0cnVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgU2lnbmluR3VhcmQgfSBmcm9tIFwiLi9yb3V0aW5nLWd1YXJkc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb250YWluZXIvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiYXV0aC9mcm9udGVuZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwic2lnbmluXCIsXHJcblx0XHRcdFx0Ly8gY2FuQWN0aXZhdGU6IFsgU2lnbmluR3VhcmQgXSxcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZyb250ZW5kQXV0aGVudGljYXRpb25Sb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXV0aC1zaWduaW5cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFxyXG4gICAgICAgIFtpZF09XCJmb3JtSWRcIlxyXG4gICAgICAgIFtjYXJkXT1cInRydWVcIlxyXG4gICAgICAgIChhY2NlcHQpPVwic2lnbmluKCRldmVudClcIlxyXG4gICAgPjwvbmdzLWZvcm0tdmlldz5cclxuPC9kaXY+XHJcbjwhLS0gPGRpdj5cclxuICAgIDxhIGZ4RmxleD1cIm5vZ3Jvd1wiIHJvdXRlckxpbms9XCIvdXNlci9wYXNzd29yZC9yZXNldFwiIG1hdC1yYWlzZWQtYnV0dG9uIGZ4RmxleEZpbGw+w5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKBw5jCscOYwqfDmcKFw5nCiMOYwrQgw5rCqcOYwrHDmMKvw5nChyDDmMKnw5vCjMOYwq/DmMKfPC9hPlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XHJcblx0QE91dHB1dCgpIHNpZ25lZGluID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHJcblx0c2lnbmluKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zaWduZWRpbi5lbWl0KGZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgdGFrZSwgZmlsdGVyLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbi8vIGltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSBcIi4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuLy8gaW1wb3J0IHsgV2hvQW1JQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG5cdCkge1xyXG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBXaG9BbUlBY3Rpb24oKSksIDMwMCk7XHJcblx0fVxyXG5cclxuXHRzaWduaW4odG9rZW46IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5zaWduSW4sIHsgdG9rZW4gfSkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbIHVzZXIuUm9sZSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoXHJcblx0XHRcdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArXHJcblx0XHRcdFx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuc2lnbk91dFxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0d2hvQW1JKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoXHJcblx0XHRcdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy53aG9BbUlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgRnJvbnRlbmRTaWduaW5TZXJ2aWNlU3R1YiA9IHt9O1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTaWdub3V0QWN0aW9uLFxyXG5cdFNpZ25JbkFjdGlvblR5cGVzLFxyXG5cdFNpZ25pblNlY2NlZWQsXHJcblx0U2lnbmluRmFpbGVkLFxyXG5cdFNpZ25pblJlZGlyZWN0LFxyXG5cdFNpZ25pblxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgZnJvbnRlbmRTaWduaW5TZXJ2aWNlOiBGcm9udGVuZFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IEZyb250ZW5kQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHR3aG9BbUkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT4gdGhpcy5mcm9udGVuZFNpZ25pblNlcnZpY2Uud2hvQW1JKCkpLFxyXG5cdFx0XHRtYXAodXNlciA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U2lnbmluJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5mcm9udGVuZFNpZ25pblNlcnZpY2Uuc2lnbmluKHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLFxyXG5cdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduSW5SZXF1aXJlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRjb25zdCBzaWduaW5Cb3R0b21TaGVldFJlZiA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihTaWduaW5Db250YWluZXJDb21wb25lbnQsIHtcclxuXHRcdFx0XHRwYW5lbENsYXNzOiBcImNsZWFyLW1hdC1jYXJkLWJveFwiXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5pbnN0YW5jZS5zaWduZWRJbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHRzaWduaW5Cb3R0b21TaGVldFJlZi5kaXNtaXNzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gc2lnbmluQm90dG9tU2hlZXRSZWY7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvXCIgXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKGRhdGEgPT5cclxuXHRcdFx0dGhpcy5mcm9udGVuZFNpZ25pblNlcnZpY2Uuc2lnbm91dCgpLnBpcGUoXHJcblx0XHRcdFx0bWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRcdC8vIFRPRE86IGRpc3BhdGNoIHZhbGlkIGFjdGlvblxyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YoZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0Ly8gVE9ET1xyXG5cdC8vIEBFZmZlY3QoKSBTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0VG9Mb2dpblBhZ2UkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1QpXHJcblx0XHQucGlwZSh0YXAoYXV0aGVkID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJhdXRoL3NpZ25pblwiIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdEFmdGVyU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0dGFwKGF1dGhlZCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLmFmdGVyU2lnbm91dFJlZGlyZWN0VG8gXSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgRnJvbnRlbmRTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VjY2VlZCB9IGZyb20gXCIuL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgc2VydmljZTogRnJvbnRlbmRTaWduaW5TZXJ2aWNlKSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub0xpc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRmaWx0ZXIodXNlciA9PiB1c2VyLlRva2VuICE9IG51bGwpLFxyXG5cdFx0c3dpdGNoTWFwKHVzZXIgPT5cclxuXHRcdFx0dGhpcy5zZXJ2aWNlLnNpZ25pbih1c2VyLlRva2VuKS5tYXAoX3VzZXIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU2lnbmluU2VjY2VlZChfdXNlcik7XHJcblx0XHRcdH0pXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7XHJcblx0RnJvbnRlbmRBdXRoZW50aWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudFxyXG59IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29udGFpbmVyL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXIvc2lnbmluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRnJvbnRlbmRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9mcm9udGVuZC1hdXRoZW50aWNhdGlvbi1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1wLWNvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEZyb250ZW5kQXV0aGVudGljYXRpb25SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBGcm9udGVuZFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaWduaW5FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9zaWduaW4uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlRWZmZWN0cyB9IGZyb20gXCIuL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLmVmZmVjdFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1NpZ25pbkNvbnRhaW5lckNvbXBvbmVudCwgU2lnbmluQ29tcG9uZW50LCBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtTaWduaW5Db250YWluZXJDb21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW10sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gPEZyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWc+e31cclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzRnJvbnRlbmRBdXRoZW50aWNhdGlvbk1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEZyb250ZW5kU2lnbmluU2VydmljZV1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmcm9udGVuZC1hdXRoZW50aWNhdGlvblwiLCBGcm9udGVuZEF1dGhlbnRpY2F0aW9uUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlRWZmZWN0cywgU2lnbmluRWZmZWN0c10pLFxyXG5cdFx0RnJvbnRlbmRBdXRoZW50aWNhdGlvblJvdXRpbmdNb2R1bGUsXHJcblx0XHROZ3NGcm9udGVuZEF1dGhlbnRpY2F0aW9uTW9kdWxlXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0Zyb250ZW5kQXV0aGVudGljYXRpb25Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ1c2VyUmVkdWNlci5Vc2VyUmVkdWNlciIsInVzZXJSZWR1Y2VyLmdldExvZ2dlZEluIiwidXNlclJlZHVjZXIuZ2V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxTQUFTOzs7O0lBZXJCLFlBQVksTUFBWTs7Ozs7UUFGeEIsYUFBa0IsRUFBRSxDQUFDO1FBR3BCLE1BQU07WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHO2dCQUM5QixJQUFJLEdBQUcsSUFBSSxNQUFNO29CQUFFLG1CQUFDLElBQVcsR0FBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEQsQ0FBQyxDQUFDO0tBQ0o7Q0FDRDs7Ozs7Ozs7SUNsQkEsVUFBVyxvQ0FBb0M7SUFDL0MsUUFBUyxrQ0FBa0M7SUFDM0MsWUFBYSxzQ0FBc0M7SUFDbkQsU0FBVSxtQ0FBbUM7SUFDN0MsZ0JBQWlCLDJDQUEyQztJQUM1RCxnQkFBaUIsMkNBQTJDO0lBQzVELGlCQUFrQiw0Q0FBNEM7SUFDOUQsaUJBQWtCLDRDQUE0Qzs7TUFNbEQsTUFBTTs7OztJQUVsQixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixpQkFBaUIsQ0FBQyxNQUFNLENBQUM7S0FDTjtDQUNuQztNQUVZLGFBQWE7Ozs7SUFFekIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEL0IsWUFBZ0IsaUJBQWlCLENBQUMsY0FBYyxDQUFDO0tBQ2Q7Q0FDbkM7TUFFWSxZQUFZOzs7O0lBRXhC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
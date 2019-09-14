import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { Component, InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Output, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBar, MatBottomSheet, MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatBottomSheetModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { NgsFormModule } from '@soushians/form';
import { BehaviorSubject, of } from 'rxjs';
import { filter, take, switchMap, map, catchError, pluck, tap } from 'rxjs/operators';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { __decorate, __metadata } from 'tslib';
import { UserActionTypes } from '@soushians/user';

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
if (false) {
    /** @type {?} */
    WhoAmIAction.prototype.type;
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
            debugger;
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
function FrontendAuthenticationState() { }
if (false) {
    /** @type {?} */
    FrontendAuthenticationState.prototype.userStatus;
}
/**
 * @record
 */
function FeatureState() { }
if (false) {
    /* Skipping unnamed member:
    "frontend-authentication": FrontendAuthenticationState;*/
}
/** @type {?} */
const FrontendAuthenticationReducers = {
    userStatus: UserReducer
};
//#region selectors
/** @type {?} */
const selectFrontendAuthenticationState = createFeatureSelector("frontend-authentication");
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.userStatus;
/** @type {?} */
const selectAuthState = createSelector(selectFrontendAuthenticationState, (ɵ0));
/** @type {?} */
const getFrontendAuthenticationState = createSelector(selectAuthState, getLoggedIn);
/** @type {?} */
const getFrontendUser = createSelector(selectAuthState, getUser);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FrontendAuthenticationContainerComponent {
}
FrontendAuthenticationContainerComponent.decorators = [
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
/**
 * @record
 */
function FrontendAuthenticationModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.env;
    /** @type {?|undefined} */
    FrontendAuthenticationModuleConfig.prototype.afterSignoutRedirectTo;
}
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] }
];
/** @nocollapse */
FrontendAuthenticationConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ FrontendAuthenticationConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FrontendAuthenticationConfigurationService_Factory() { return new FrontendAuthenticationConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: FrontendAuthenticationConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationConfigurationService.prototype._config;
    /** @type {?} */
    FrontendAuthenticationConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationConfigurationService.prototype.store;
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
    { type: FrontendAuthenticationConfigurationService },
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
// import { WhoAmIAction } from "../actions";
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
        // setTimeout(() => this.store.dispatch(new WhoAmIAction()), 300);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    signin(token) {
        this.configurationService.config$.subscribe((/**
         * @param {?} c
         * @return {?}
         */
        c => {
            debugger;
        }));
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signIn != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env.frontend_server + config.endpoints.signIn, { token }))), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            /** @type {?} */
            const user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })));
    }
    /**
     * @return {?}
     */
    signout() {
        return this.http
            .get(this.configurationService.config.env.frontend_server +
            this.configurationService.config.endpoints.signOut)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => response));
    }
    /**
     * @return {?}
     */
    whoAmI() {
        return this.http
            .get(this.configurationService.config.env.frontend_server + this.configurationService.config.endpoints.whoAmI)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => response));
    }
}
FrontendSigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
FrontendSigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: FrontendAuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ FrontendSigninService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FrontendSigninService_Factory() { return new FrontendSigninService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(FrontendAuthenticationConfigurationService), ɵɵinject(MatSnackBar$1)); }, token: FrontendSigninService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    FrontendSigninService.prototype.snackBar;
}
/** @type {?} */
let FrontendSigninServiceStub = {};

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
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap((/**
         * @return {?}
         */
        () => this.frontendSigninService.whoAmI())), map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error)))));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.frontendSigninService.signin(payload))), map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error)))));
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
            debugger;
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        })));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => this.frontendSigninService.signout().pipe(map((/**
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
if (false) {
    /** @type {?} */
    SigninEffects.prototype.whoAmI$;
    /** @type {?} */
    SigninEffects.prototype.Signin$;
    /** @type {?} */
    SigninEffects.prototype.SignInRequired$;
    /** @type {?} */
    SigninEffects.prototype.SigninSucceed$;
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
    SigninEffects.prototype.frontendSigninService;
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
class FrontendAuthenticationModuleEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.goToList$ = this.actions$.pipe(ofType(UserActionTypes.REFRESH_USER_INFO), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), filter((/**
         * @param {?} user
         * @return {?}
         */
        user => user.Token != null)), switchMap((/**
         * @param {?} user
         * @return {?}
         */
        user => this.service.signin(user.Token).map((/**
         * @param {?} _user
         * @return {?}
         */
        _user => {
            return new SigninSecceed(_user);
        })))));
    }
}
FrontendAuthenticationModuleEffects.decorators = [
    { type: Injectable }
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
if (false) {
    /** @type {?} */
    FrontendAuthenticationModuleEffects.prototype.goToList$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationModuleEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    FrontendAuthenticationModuleEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsFrontendAuthenticationModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = (/** @type {?} */ ({}))) {
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
            },] }
];
class RootNgsFrontendAuthenticationModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.frontend_authentication = "8.0.10";
    }
}
RootNgsFrontendAuthenticationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature("frontend-authentication", FrontendAuthenticationReducers),
                    EffectsModule.forFeature([FrontendAuthenticationModuleEffects, SigninEffects]),
                    FrontendAuthenticationRoutingModule,
                    NgsFrontendAuthenticationModule
                ]
            },] }
];
/** @nocollapse */
RootNgsFrontendAuthenticationModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DoSignoutAction, NgsFrontendAuthenticationModule, SignInActionTypes, SigninRequiredAction, UserModel, getFrontendAuthenticationState, getFrontendUser, FrontendAuthenticationReducers as ɵa, selectFrontendAuthenticationState as ɵb, selectAuthState as ɵc, RootNgsFrontendAuthenticationModule as ɵd, UserReducer as ɵe, getLoggedIn as ɵf, getUser as ɵg, SigninContainerComponent as ɵh, FrontendAuthenticationConfigurationService as ɵi, MODULE_CONFIG_TOKEN as ɵj, SigninComponent as ɵm, FrontendAuthenticationContainerComponent as ɵn, FrontendAuthenticationModuleEffects as ɵo, FrontendSigninService as ɵp, SigninEffects as ɵq, FrontendAuthenticationRoutingModule as ɵr };
//# sourceMappingURL=soushians-frontend-authentication.js.map

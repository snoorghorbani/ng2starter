(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/@soushians/authentication/fesm5/soushians-authentication.js":
/*!**************************************************************************!*\
  !*** ./dist/@soushians/authentication/fesm5/soushians-authentication.js ***!
  \**************************************************************************/
/*! exports provided: UserModel, SignInActionTypes, SignoutAction, SigninService, SigninServiceStub, NgsAuthenticationModule, RootNgsAuthenticationModule, ɵk, ɵb, ɵf, ɵj, ɵi, ɵm, ɵn, ɵh, ɵl, ɵa, ɵg, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInActionTypes", function() { return SignInActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignoutAction", function() { return SignoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninServiceStub", function() { return SigninServiceStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsAuthenticationModule", function() { return NgsAuthenticationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsAuthenticationModule", function() { return RootNgsAuthenticationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return AuthenticationRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SigninComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return AuthenticationEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return SigninEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return UnauthorizedInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return WithCredentialInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return AuthenticationReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return SigninGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AuthenticationConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return AuthenticationContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SigninContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_empty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/add/observable/empty */ "./node_modules/rxjs-compat/_esm5/add/observable/empty.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _soushians_form__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @soushians/form */ "./dist/@soushians/form/fesm5/soushians-form.js");























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
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("ModuleConfig");

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
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_3__["getAuthenticationModuleConfig"]).subscribe(function (storeConfig) {
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AuthenticationConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
]; };
/** @nocollapse */ AuthenticationConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AuthenticationConfigurationService_Factory() { return new AuthenticationConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MODULE_CONFIG_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); }, token: AuthenticationConfigurationService, providedIn: "root" });

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
        return this.configurationService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (config) { return config.endpoints.signIn != ""; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (config) { return _this.http.post(config.endpoints.signIn, model); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return response.Result; }));
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: AuthenticationConfigurationService },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
]; };
/** @nocollapse */ SigninService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function SigninService_Factory() { return new SigninService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(AuthenticationConfigurationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); }, token: SigninService, providedIn: "root" });
var /** @type {?} */ SigninServiceStub = {};

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
var /** @type {?} */ selectAuthenticationState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])("authentication");
var /** @type {?} */ selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthenticationState, function (state) { return state.userStatus; });
var /** @type {?} */ getLoggedIn$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthState, getLoggedIn);
var /** @type {?} */ getUser$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthState, getUser);
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AdminGuard.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
]; };
/** @nocollapse */ AdminGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AdminGuard_Factory() { return new AdminGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); }, token: AdminGuard, providedIn: "root" });

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
AgentGuard.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
]; };
/** @nocollapse */ AgentGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AgentGuard_Factory() { return new AgentGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); }, token: AgentGuard, providedIn: "root" });

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserGuard.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
]; };
/** @nocollapse */ UserGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function UserGuard_Factory() { return new UserGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); }, token: UserGuard, providedIn: "root" });

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SigninGuard.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
]; };
/** @nocollapse */ SigninGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function SigninGuard_Factory() { return new SigninGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); }, token: SigninGuard, providedIn: "root" });

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "\n          <router-outlet></router-outlet>\n        "
            },] },
];

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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "\n        <auth-signin \n                [formId]='(formId$ | async)'\n                (signedin)=\"signIn($event)\"\n        ></auth-signin>\n  "
            },] },
];
/** @nocollapse */
SigninContainerComponent.ctorParameters = function () { return [
    { type: AuthenticationConfigurationService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
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
var /** @type {?} */ AuthenticationRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        this.signedin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "auth-signin",
                template: "<div fxLayout='row' fxLayoutAlign=\"center center\">\n    <ngs-form-view \n        [id]=\"formId\"\n        (accept)=\"signin($event)\"\n    ></ngs-form-view>\n</div>\n<!-- <div>\n    <a fxFlex=\"nogrow\" routerLink=\"/user/password/reset\" mat-raised-button fxFlexFill>\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062E\u0648\u062F \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u061F</a>\n</div> -->",
                styles: [""]
            },] },
];
/** @nocollapse */
SigninComponent.ctorParameters = function () { return []; };
SigninComponent.propDecorators = {
    signedin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    formId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
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
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"])
                return event;
        })
            .catch(function (err) {
            if (!(err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]))
                return;
            if (err.status != 401)
                return;
            if (err.url.includes("logout"))
                return;
            _this.store.dispatch(new SignoutAction());
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__["Observable"].throw("Unauthorized");
        });
    };
    return UnauthorizedInterceptor;
}());
UnauthorizedInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
UnauthorizedInterceptor.ctorParameters = function () { return [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) { return _this.signinService.signin(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) { return new SigninSecceed(user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_10__["Observable"].of(new SigninFailed(error)); }));
        this.SigninSucceed$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.router.navigate(["/"]); }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(function () { return new NewCaptcha(); });
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT, SignInActionTypes.SIGNOUT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (authed) { return _this.router.navigate(["auth/signin"]); }));
    }
    return SigninEffects;
}());
SigninEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
SigninEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: SigninService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], SigninEffects.prototype, "preSignUpStart$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], SigninEffects.prototype, "SigninSucceed$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], SigninEffects.prototype, "AfterSigninFiled$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new ProgressingStarted(); }));
        this.dispachProgressingFinished$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new ProgressingFinished(); }));
    }
    return AuthenticationEffects;
}());
AuthenticationEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AuthenticationEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], AuthenticationEffects.prototype, "dispachProgressingStarted$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
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
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: UnauthorizedInterceptor,
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: WithCredentialInterceptor,
                    multi: true
                },
                SigninService
            ]
        };
    };
    return NgsAuthenticationModule;
}());
NgsAuthenticationModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _soushians_form__WEBPACK_IMPORTED_MODULE_21__["NgsFormModule"]
                ],
                declarations: [SigninContainerComponent, SigninComponent, AuthenticationContainerComponent],
                providers: [],
                exports: []
            },] },
];
var RootNgsAuthenticationModule = /** @class */ (function () {
    function RootNgsAuthenticationModule() {
    }
    return RootNgsAuthenticationModule;
}());
RootNgsAuthenticationModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature("authentication", AuthenticationReducers),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forFeature([SigninEffects, AuthenticationEffects]),
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


//# sourceMappingURL=soushians-authentication.js.map


/***/ }),

/***/ "./dist/@soushians/config/fesm5/soushians-config.js":
/*!**********************************************************!*\
  !*** ./dist/@soushians/config/fesm5/soushians-config.js ***!
  \**********************************************************/
/*! exports provided: ConfigService, ConfigModel, GetConfigsApiModel, EditConfigApiModel, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ConfigReducers, selectConfigState, getConfigListState, getConfigs, getAppConfig, getAuthenticationModuleConfig, getUserModuleConfig, getlayoutModuleConfig, getConfigModuleConfig, getFormModuleConfig, getSocketModuleConfig, NgsConfigModule, RootNgsConfigModule, ɵc, ɵj, ɵn, ɵl, ɵk, ɵq, ɵp, ɵb, ɵf, ɵd, ɵe, ɵi, ɵm, ɵg, ɵo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return ConfigModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetConfigsApiModel", function() { return GetConfigsApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConfigApiModel", function() { return EditConfigApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigReducers", function() { return ConfigReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConfigState", function() { return selectConfigState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigListState", function() { return getConfigListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigs", function() { return getConfigs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppConfig", function() { return getAppConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthenticationModuleConfig", function() { return getAuthenticationModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserModuleConfig", function() { return getUserModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlayoutModuleConfig", function() { return getlayoutModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigModuleConfig", function() { return getConfigModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormModuleConfig", function() { return getFormModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSocketModuleConfig", function() { return getSocketModuleConfig$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsConfigModule", function() { return NgsConfigModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsConfigModule", function() { return RootNgsConfigModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ConfigAppConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return AuthenticationModuleConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return LayoutModuleConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return UserModuleConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return LoadConfigEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return ConfigReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ConfigEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ConfigModuleContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ConfigsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ConfigEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ConfigModuleContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ConfigsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return DynamicConfigComponentSelectorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ConfigModel = /** @class */ (function () {
    function ConfigModel() {
    }
    return ConfigModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        return Request;
    }());
    GetConfigsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel || (GetConfigsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditConfigApiModel;
(function (EditConfigApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            debugger;
            return {
                Name: this.Name,
                Config: this.Config
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                    Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    Config: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({}),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditConfigApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditConfigApiModel.Response = Response;
})(EditConfigApiModel || (EditConfigApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    dev_api_host: 'http://localhost:3000',
    prod_api_host: 'http://5.196.149.107:3000',
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('UserModuleConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
var ConfigLoadedSucceedAction = /** @class */ (function () {
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, state, { data: action.payload });
        case ConfigActionTypes.UPDATE_CONFIG:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, state, { data: state.data.map(function (config) {
                    debugger;
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
var /** @type {?} */ getConfigs = function (state) { return state.data; };
var /** @type {?} */ getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
var /** @type {?} */ getAuthenticationModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
};
var /** @type {?} */ getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
var /** @type {?} */ getlayoutModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "layout_config"; })); };
var /** @type {?} */ getConfigModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
var /** @type {?} */ getFormModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
var /** @type {?} */ getSocketModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ConfigReducers = {
    list: Reducer
};
//#region selectors
var /** @type {?} */ selectConfigState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])("config");
//#endregion
var /** @type {?} */ getConfigListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectConfigState, function (state) { return state.list; });
var /** @type {?} */ getConfigs$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getConfigs);
var /** @type {?} */ getAppConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getAppConfig);
var /** @type {?} */ getAuthenticationModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getAuthenticationModuleConfig);
var /** @type {?} */ getUserModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getUserModuleConfig);
var /** @type {?} */ getlayoutModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getlayoutModuleConfig);
var /** @type {?} */ getConfigModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getConfigModuleConfig);
var /** @type {?} */ getFormModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getFormModuleConfig);
var /** @type {?} */ getSocketModuleConfig$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getConfigListState, getSocketModuleConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig$1).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ConfigurationService_Factory() { return new ConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(MODULE_CONFIG_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configsEndpoint = this.configurationService.config.env.production
            ? this.configurationService.config.prod_api_host
            : this.configurationService.config.dev_api_host;
        setTimeout(function () {
            _this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfigs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (this.http
            .get(this.configsEndpoint + "/api/config")
            .take(1)
            .map(function (response) {
            if (_this.configurationService.config.env.production) {
                var /** @type {?} */ dev_api_host = _this.configurationService.config.dev_api_host;
                var /** @type {?} */ prod_api_host = _this.configurationService.config.prod_api_host;
                return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
            }
            else {
                return response.Result;
            }
        })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ConfigService.prototype.getConfigByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.http.get(this.configsEndpoint + "/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ConfigService.prototype.editConfig = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        var /** @type {?} */ model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configsEndpoint + "/api/config/" + model.Name, model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configsEndpoint + "/api/layout-config")
            .map(function (response) { return response; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    ConfigService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ConfigService_Factory() { return new ConfigService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs$1);
    }
    ConfigsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "configs",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n  <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"50\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  config.Name]\">\n          <mat-icon aria-label=\"edit config\">edit</mat-icon>\n        </a>\n        {{config.Name}}\n      </h3>\n  </mat-card>\n</div>",
                    styles: [":host{width:100%}.config-box{margin:15px}"]
                },] },
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    return ConfigsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigEditComponent = /** @class */ (function () {
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                _this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: /** @type {?} */ (_this.formGroup.controls["Config"])
                    }
                };
                _this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(function (key) {
                    _this.addControl(/** @type {?} */ (_this.formGroup.controls["Config"]), key, data.Result.Config[key]);
                });
            });
        });
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ConfigEditComponent.prototype.addControl = /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](value));
        }
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigEditComponent.prototype.configChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        debugger;
        this.formGroup.controls["Config"].patchValue(event);
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        debugger;
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) {
            debugger;
        });
    };
    ConfigEditComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "config-config-edit",
                    template: "<div >\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <dynamic-config-component-selector (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigEditComponent.ctorParameters = function () { return [
        { type: ConfigService },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
    ]; };
    return ConfigEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigAppConfigComponent = /** @class */ (function () {
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({ AppTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]) });
        this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ConfigAppConfigComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "config-app-config",
                    template: "<div [formGroup]=\"formGroup\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">\n    </mat-form-field>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    ConfigAppConfigComponent.propDecorators = {
        configFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        configChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return ConfigAppConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            endpoints: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                changePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                editProfile: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                getUserInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                profileInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            }),
            forms: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                profile_edit: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            }),
            dashboardLinks: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
        this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls["dashboardLinks"])).push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                    route: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UserModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ menuItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            route: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    };
    UserModuleConfigComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "config-user-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Profile Information Endpoint\" formControlName=\"profileInformation\">\n        </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>\n\n\n<h2 fxFlex=\"100\">\n    Dashobard Links\n    <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n        <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n    </button>\n</h2>\n<div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n    <div [formGroup]=\"item\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n        </mat-form-field>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    UserModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        configChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return UserModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutModuleConfigComponent = /** @class */ (function () {
    function LayoutModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            layoutMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            showLeftNavBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            mainSideNavMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            showMainSidenav: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            stickyLeftNavBar: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            showSecondSideNav: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            secondSideNavMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            menuItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"]([])
        });
        this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.roleItems = ["Admin", "User"];
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls.menuItems)).push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                    route: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) { return _this.formGroup.patchValue(data); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ menuItem = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            route: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
        (/** @type {?} */ (this.formGroup.get("menuItems"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("menuItems"))).push(menuItem);
    };
    LayoutModuleConfigComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n    <div fxFlex=\"100\" fxFlexLayout=\"row\">\n        <div [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"layout mode\" formControlName=\"layoutMode\" >\n                    <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n\n    <h2 fxFlex=\"100\">\n        Menu Items\n        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n        </button>\n    </h2>\n    <div fxFlex=\"100\" *ngFor=\"let item of formGroup.controls.menuItems.controls\">\n        <div [formGroup]=\"item\">\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n            </mat-form-field>\n            <mat-form-field> \n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"roles\" formControlName=\"roles\" multiple>\n                    <mat-option *ngFor=\"let role of roleItems\" [value]=\"role\">{{role}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    LayoutModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        configChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return LayoutModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfigModuleContainerComponent = /** @class */ (function () {
    function ConfigModuleContainerComponent() {
    }
    /**
     * @return {?}
     */
    ConfigModuleContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ConfigModuleContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "config-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ConfigModuleContainerComponent.ctorParameters = function () { return []; };
    return ConfigModuleContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AuthenticationModuleConfigComponent = /** @class */ (function () {
    function AuthenticationModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            endpoints: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                signOut: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
                userInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            }),
            forms: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
                signIn: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            })
        });
        this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    AuthenticationModuleConfigComponent.prototype.setFormId = /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    function (formId, formName) {
        debugger;
        this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
        var _a;
    };
    AuthenticationModuleConfigComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "config-authentication-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\" formControlName=\"signIn\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\" formControlName=\"signOut\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"user information\" formControlName=\"userInformation\">\n    </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\" formControlName=\"signIn\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>"
                },] },
    ];
    /** @nocollapse */
    AuthenticationModuleConfigComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    AuthenticationModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        configChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return AuthenticationModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: AuthenticationModuleConfigComponent,
            app_config: ConfigAppConfigComponent,
            user_module_config: UserModuleConfigComponent,
            layout_config: LayoutModuleConfigComponent
        };
        this.configChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var /** @type {?} */ _component = this.typeMapToDiagram[data.type];
            var /** @type {?} */ inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: (/** @type {?} */ (data.inputs))[inputName] };
            });
            var /** @type {?} */ resolvedInputs = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].resolve(inputProviders);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ReflectiveInjector"].fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            var /** @type {?} */ component = factory.create(injector);
            (/** @type {?} */ (component.instance)).configChanged.subscribe(function (data) {
                _this.configChanged.emit(data);
            });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: "dynamic-config-component-selector",
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                    entryComponents: [
                        AuthenticationModuleConfigComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["dynamicComponentContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },] }],
        configChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return DynamicConfigComponentSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (data) { return _this.configService.getConfigs(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (configs) { return new ConfigLoadedSucceedAction(configs); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].of(new ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["Actions"] },
        { type: ConfigService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
    return LoadConfigEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: 'configs',
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: '',
                component: ConfigsComponent
            },
            {
                path: 'edit/:name',
                component: ConfigEditComponent
            }
        ]
    }
];
var /** @type {?} */ RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsConfigModule = /** @class */ (function () {
    function NgsConfigModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgsConfigModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsConfigModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                        RoutingModule
                    ],
                    declarations: [
                        ConfigsComponent,
                        ConfigEditComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent,
                        ConfigModuleContainerComponent,
                        AuthenticationModuleConfigComponent,
                        DynamicConfigComponentSelectorComponent
                    ],
                    providers: []
                },] },
    ];
    return NgsConfigModule;
}());
var RootNgsConfigModule = /** @class */ (function () {
    function RootNgsConfigModule() {
    }
    RootNgsConfigModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        NgsConfigModule,
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature("config", ConfigReducers),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([LoadConfigEffects])
                    ],
                    exports: [NgsConfigModule]
                },] },
    ];
    return RootNgsConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG4gICAgICAgIFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PltdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgRWRpdENvbmZpZ0FwaU1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIE5hbWU6IHN0cmluZztcclxuICAgICAgICBDb25maWc6IHt9O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXMgYXMgYW55KVtrZXldID0gKGluaXRWYWx1ZSBhcyBhbnkpW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgTmFtZTogdGhpcy5OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ29uZmlnOiB0aGlzLkNvbmZpZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBOYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuICAgICAgICBSZXN1bHQ6IENvbmZpZ01vZGVsPGFueT47XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdNb2R1bGVDb25maWcge1xyXG5cdGRldl9hcGlfaG9zdD86IHN0cmluZztcclxuXHRwcm9kX2FwaV9ob3N0Pzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogQ29uZmlnTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldl9hcGlfaG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcblx0cHJvZF9hcGlfaG9zdDogJ2h0dHA6Ly81LjE5Ni4xNDkuMTA3OjMwMDAnLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDb25maWdNb2R1bGVDb25maWc+KCdVc2VyTW9kdWxlQ29uZmlnJyk7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gXCJbQ09ORklHXSBnZXQgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9TVUNDRUVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkXCIsXHJcblx0VVBEQVRFX0NPTkZJRyA9IFwiW0NPTkZJR10gdXBkYXRlIGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfRkFJTEVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IEdldENvbmZpZ0FjdGlvbiB8IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfCBVcGRhdGVDb25maWdBY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vYWN0aW9ucy9jb25maWcuYWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBMYXlvdXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBjb25maWcuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5tYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0aWYgKGNvbmZpZy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKSBjb25maWcuQ29uZmlnID0gYWN0aW9uLnBheWxvYWQuQ29uZmlnO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNvbmZpZztcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3MgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImFwcF9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInVzZXJfbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldGxheW91dE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJsYXlvdXRfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImNvbmZpZ19tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJmb3JtX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwic29ja2V0X21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBjb25maWdMaXN0IGZyb20gXCIuL2NvbmZpZy1saXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdGF0ZSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5TdGF0ZTtcclxufVxyXG5Db25maWdMb2FkZWRGYWlsZWRBY3Rpb247XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0bGF5b3V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldGxheW91dE1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldEZvcm1Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0Rm9ybU1vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihnZXRDb25maWdMaXN0U3RhdGUsIGNvbmZpZ0xpc3QuZ2V0U29ja2V0TW9kdWxlQ29uZmlnKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBDb25maWdNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZTogQ29uZmlnTW9kdWxlQ29uZmlnLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ01vZHVsZUNvbmZpZykuc3Vic2NyaWJlKGNvbmZpZ0NvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghY29uZmlnQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgY29uZmlnQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCwgQ29uZmlnTW9kZWwsIExheW91dENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cdGNvbmZpZ3NFbmRwb2ludDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3NFbmRwb2ludCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5wcm9kdWN0aW9uXHJcblx0XHRcdD8gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucHJvZF9hcGlfaG9zdFxyXG5cdFx0XHQ6IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmRldl9hcGlfaG9zdDtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWdgKVxyXG5cdFx0XHRcdC8vIC5maWx0ZXIoKCkgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZGV2X2FwaV9ob3N0ICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQudGFrZSgxKVxyXG5cdFx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYucHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBkZXZfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5kZXZfYXBpX2hvc3Q7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHByb2RfYXBpX2hvc3QgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5wcm9kX2FwaV9ob3N0O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShcclxuXHRcdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeShyZXNwb25zZSkucmVwbGFjZShuZXcgUmVnRXhwKGRldl9hcGlfaG9zdCwgXCJnXCIpLCBwcm9kX2FwaV9ob3N0KVxyXG5cdFx0XHRcdFx0XHQpLlJlc3VsdDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5SZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHtuYW1lfWApLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRlZGl0Q29uZmlnKGJvZHk6IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPExheW91dENvbmZpZ01vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWdzRW5kcG9pbnR9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IExheW91dENvbmZpZ01vZGVsKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPG1hdC1jYXJkIGNsYXNzPVwiY29uZmlnLWJveFwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGNvbmZpZ1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2NvbmZpZy5OYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ID5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKGNvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgkZXZlbnQpXCIgW2RhdGFdPVwicGFydGlhbENvbmZpZ01vZGVsXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZWRpdFwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvY29uZmlnc1wiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uZmlnSW5mb3JhbWF0aW9uOiBhbnk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0cGFydGlhbENvbmZpZ01vZGVsOiBQYXJ0aWFsQ29uZmlnO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnLnBhdGNoVmFsdWUoZXZlbnQpO1xyXG5cdH1cclxuXHRlZGl0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hcHAtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiQXBwVGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgQXBwVGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSkgfSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLXVzZXItbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUHJvZmlsZSBJbmZvcm1hdGlvbiBFbmRwb2ludFwiIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVJbmZvcm1hdGlvblwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PlxyXG48aDI+Rm9ybXM8L2gyPlxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmdldCgnZm9ybXMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicHJvZmlsZSBlZGl0XCIgZm9ybUNvbnRyb2xOYW1lPVwicHJvZmlsZV9lZGl0XCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxoMiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIERhc2hvYmFyZCBMaW5rc1xyXG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b24gaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9oMj5cclxuPGRpdiBmeEZsZXg9XCIxMDBcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAkYW55KGZvcm1Hcm91cC5nZXQoJ2Rhc2hib2FyZExpbmtzJykpLmNvbnRyb2xzXCI+XHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicm91dGVcIiBmb3JtQ29udHJvbE5hbWU9XCJyb3V0ZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJpY29uXCIgZm9ybUNvbnRyb2xOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGVkaXRQcm9maWxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRnZXRVc2VySW5mbzogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cHJvZmlsZV9lZGl0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGRhc2hib2FyZExpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5wdXNoKFxyXG5cdFx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibGF5b3V0IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJsYXlvdXRNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxheW91dE1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dMZWZ0TmF2QmFyXCI+c2hvdyBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwibWFpbiBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFpblNpZGVOYXZNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiICBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlICAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInNlY29uZCBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kU2lkZU5hdk1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2lkZU5hdk1vZGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD4gXHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgTWVudSBJdGVtc1xyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvaDI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMuY29udHJvbHNcIj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImljb25cIiBmb3JtQ29udHJvbE5hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInRpdGxlXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPiBcclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBwbGFjZWhvbGRlcj1cInJvbGVzXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZXNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcm9sZSBvZiByb2xlSXRlbXNcIiBbdmFsdWVdPVwicm9sZVwiPnt7cm9sZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdHNpZGVOYXZNb2Rlczogc3RyaW5nW107XHJcblx0bGF5b3V0TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGZvcm1Hcm91cDogYW55ID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRsYXlvdXRNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRtYWluU2lkZU5hdk1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TWFpblNpZGVuYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0c2hvd1NlY29uZFNpZGVOYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzZWNvbmRTaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goKGNvbnRyb2wpID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLnB1c2goXHJcblx0XHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHQvLyByb2xlczogbmV3IEZvcm1BcnJheShjb250cm9sLnZhbHVlLnJvbGVzLm1hcCgoaSkgPT4gbmV3IEZvcm1Db250cm9sKFwiQWRtaW5cIikpKSxcclxuXHRcdFx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChkYXRhKSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRyb2xlSXRlbXM6IHN0cmluZ1tdID0gWyBcIkFkbWluXCIsIFwiVXNlclwiIF07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLnNpZGVOYXZNb2RlcyA9IFsgXCJvdmVyXCIsIFwicHVzaFwiLCBcInNpZGVcIiBdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFsgXCJ3aXRoLW1hcmdpblwiLCBcIndpdGhvdXQtbWFyZ2luXCIsIFwiZGVmYXVsdFwiIF07XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KTtcclxuXHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuZW5kcG9pbnRzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzaWduIGluXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gb3V0XCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbk91dFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ1c2VyIGluZm9ybWF0aW9uXCIgZm9ybUNvbnRyb2xOYW1lPVwidXNlckluZm9ybWF0aW9uXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5mb3Jtc1wiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2lnbkluIEZvcm1zXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRzaWduT3V0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR1c2VySW5mb3JtYXRpb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pLFxyXG5cdFx0Zm9ybXM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pXHJcblx0fSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0c2V0Rm9ybUlkKGZvcm1JZDogc3RyaW5nLCBmb3JtTmFtZTogc3RyaW5nKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBbZm9ybU5hbWVdOiBmb3JtSWQgfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9hcHAtY29uZmlnL2FwcC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAjZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9YF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiBhbnkgPSB7XHJcblx0XHRhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnOiBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGFwcF9jb25maWc6IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHVzZXJfbW9kdWxlX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGxheW91dF9jb25maWc6IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogUGFydGlhbENvbmZpZykge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHRpZiAoIShkYXRhLnR5cGUgaW4gdGhpcy50eXBlTWFwVG9EaWFncmFtKSkge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgX2NvbXBvbmVudDogYW55ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IChkYXRhLmlucHV0cyBhcyBhbnkpW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHRcdCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuY29uZmlnQ2hhbmdlZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdBY3Rpb25UeXBlcywgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkQ29uZmlnRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldENvbmZpZ3MkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRcdG1hcChjb25maWdzID0+IG5ldyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uKGNvbmZpZ3MpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCwgQ29uZmlnRWRpdENvbXBvbmVudCwgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbWFydC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICdjb25maWdzJyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnc0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2VkaXQvOm5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ29uZmlnRWRpdENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWdzL2NvbmZpZ3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1lZGl0L2NvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9hZENvbmZpZ0VmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2xvYWQtY29uZmlnLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlnLnJvdXRpbmctbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKVxyXG5cdFx0Ly8gUm91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NDb25maWdNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0NvbmZpZ01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzIiwiY29uZmlnTGlzdC5SZWR1Y2VyIiwiZ2V0Q29uZmlncyIsImNvbmZpZ0xpc3QuZ2V0Q29uZmlncyIsImdldEFwcENvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0QXBwQ29uZmlnIiwiZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiZ2V0VXNlck1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0VXNlck1vZHVsZUNvbmZpZyIsImdldGxheW91dE1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0bGF5b3V0TW9kdWxlQ29uZmlnIiwiZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWciLCJnZXRGb3JtTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnIiwiZ2V0U29ja2V0TW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWciLCJPYnNlcnZhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBQTs7O3NCQUFBO0lBSUM7Ozs7OztBQ0NELElBQWMsa0JBQWtCO0FBQWhDLFdBQWMsa0JBQWtCO0lBRTVCLElBQUE7UUFFSSxpQkFBWSxTQUF3RTtZQUF4RSwwQkFBQSxFQUFBLDhCQUF3QyxFQUFnQyxDQUFBO1lBQXBGLGlCQUVDO1lBREcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxtQkFBQyxLQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsbUJBQUMsU0FBZ0IsR0FBRSxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7U0FDdkY7Ozs7UUFFRCxnQ0FBYzs7O1FBQWQ7WUFDSSxPQUFPLEVBQ04sQ0FBQTtTQUNKO3NCQWhCVDtRQWlCSyxDQUFBO0lBVlksMEJBQU87SUFZcEIsSUFBQTtRQUVJO1NBRUM7dUJBdkJUO1FBd0JLLENBQUE7SUFMWSwyQkFBUTtHQWRYLGtCQUFrQixLQUFsQixrQkFBa0IsUUFvQi9COzs7Ozs7QUN2QkQsSUFHYyxrQkFBa0I7QUFBaEMsV0FBYyxrQkFBa0I7SUFFNUIsSUFBQTtRQUdJLGlCQUFZLFNBQTRDO1lBQTVDLDBCQUFBLEVBQUEsOEJBQVksRUFBZ0MsQ0FBQTtZQUF4RCxpQkFFQztZQURHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsbUJBQUMsS0FBVyxHQUFFLEdBQUcsQ0FBQyxHQUFHLG1CQUFDLFNBQWdCLEdBQUUsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBQ3ZGOzs7O1FBRUQsZ0NBQWM7OztRQUFkO1lBQ0ksU0FBUztZQUNULE9BQU87Z0JBQ0gs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

/***/ }),

/***/ "./dist/@soushians/diagram/fesm5/soushians-diagram.js":
/*!************************************************************!*\
  !*** ./dist/@soushians/diagram/fesm5/soushians-diagram.js ***!
  \************************************************************/
/*! exports provided: NgsDiagramModule, RootNgsDiagramModule, ɵz, ɵe, ɵm, ɵj, ɵl, ɵp, ɵv, ɵu, ɵk, ɵq, ɵr, ɵy, ɵx, ɵw, ɵd, ɵb, ɵa, ɵt, ɵs, ɵg, ɵn, ɵf, ɵo, ɵi, ɵh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsDiagramModule", function() { return NgsDiagramModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsDiagramModule", function() { return RootNgsDiagramModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return BooleanoWidgetPartialConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return DiagramPartialConfigEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return LinearDiagramPartialConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NumericDiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return NumericEditDiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return NumericWidgetPartialConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return PieDiagramPartialConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ServerConnectingTimeDiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ServerStatusDiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return AddDiagramEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return DiagramEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return DiagramReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DiagramConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DiagramService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AddDiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return DataMapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DiagramModuleContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return diagramViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return DiagramComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DiagramsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return DynamicComponentSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return DynamicConfigComponentSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return EditDiagramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {},
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("DiagramModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
var GetDiagramsSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetDiagramsSucceed(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
    return GetDiagramsSucceed;
}());
var GetDiagramsFailed = /** @class */ (function () {
    function GetDiagramsFailed() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
    return GetDiagramsFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddDiagramActionTypes = {
    ADD_DIAGRAM: '[DIAGRAM][ADD] ADD_DIAGRAM',
    ADD_DIAGRAM_START: '[DIAGRAM][ADD] ADD_DIAGRAM_START',
    ADD_DIAGRAM_SUCCEED: '[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED',
    DIAGRAM_CONFIG_CHANGED: '[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED',
    ADD_DIAGRAM_FAILED: '[DIAGRAM][ADD] ADD_DIAGRAM_FAILED',
    STRUCTURE_DEFINITION_START: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_START',
    HAVE_ENDPOINT: '[DIAGRAM][ADD] HAVE_STRUCTURE',
    DATA_LOADED: '[DIAGRAM][ADD] DATA_LOADED',
    STRUCTURE_DEFINITION_END: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_END',
    COLUMNS_MAPPING_CHANGED: '[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED',
    DATA_CALCULATED: '[DIAGRAM][ADD] DATA_CALCULATED',
    COLUMN_ADDED: '[DIAGRAM][ADD] COLUMN_ADDED',
    GENERATE_DIAGRAM: '[DIAGRAM][ADD] GENERATE_DIAGRAM',
};
var AddDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
    return AddDiagramAction;
}());
var AddDiagramActionStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramActionStart(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
    return AddDiagramActionStart;
}());
var AddDiagramActionSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
    return AddDiagramActionSucceed;
}());
var AddDiagramActionFailed = /** @class */ (function () {
    function AddDiagramActionFailed() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
    return AddDiagramActionFailed;
}());
var DiagramConfigChangedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function DiagramConfigChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
    return DiagramConfigChangedAction;
}());
var HaveEndpointAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function HaveEndpointAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
    return HaveEndpointAction;
}());
var DataLoadedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function DataLoadedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
    return DataLoadedAction;
}());
var StructureDefinitionStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function StructureDefinitionStartAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
    return StructureDefinitionStartAction;
}());
var StructureDefinitionFinishedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function StructureDefinitionFinishedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
    return StructureDefinitionFinishedAction;
}());
var ColumnsMappingChangedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ColumnsMappingChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
    return ColumnsMappingChangedAction;
}());
var GenerateDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GenerateDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
    return GenerateDiagramAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
};
var EditDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditDiagramAction(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
    return EditDiagramAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramModel = /** @class */ (function () {
    function DiagramModel() {
    }
    return DiagramModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetDiagramsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetDiagramsApiModel.Response = Response;
})(GetDiagramsApiModel || (GetDiagramsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            debugger;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                Name: this.Name,
                IsActive: this.IsActive,
                Source: this.Source,
                Type: this.Type,
                Groups: this.Groups,
                Widget: {
                    booleano: this.booleano
                },
                Chart: {
                    data: {
                        type: this.Type,
                        columns: this.columns,
                        colors: this.Colors,
                        types: this.Types
                    },
                    ColumnMappings: this.ColumnMappings,
                    Flow: this.Flow,
                    legend: {
                        show: this.Legend
                    },
                    subchart: {
                        show: this.Subchart
                    },
                    zoom: {
                        enabled: this.Zoom
                    },
                    tooltip: {
                        grouped: this.Tooltip
                    }
                },
                Box: {
                    Cols: this.Cols,
                    Rows: this.Rows,
                    TextColor: this.TextColor,
                    BackgroundColor: this.BackgroundColor
                }
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", []),
                    Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Sync: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    IsActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("true", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("pie", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Groups: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Legend: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("true", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Subchart: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("false", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Zoom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("false", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Tooltip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("false", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Route: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Source: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({}, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    columns: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Cols: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Rows: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    TextColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("#000000", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    BackgroundColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("#ffffff", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Colors: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}),
                    Types: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}),
                    ColumnMappings: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
                    Flow: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
                    donut: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("Default Title")
                    }),
                    booleano: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        SuccessMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("SuccessMessage"),
                        FailureMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("FailureMessage")
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddDiagramApiModel.Response = Response;
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?} params
         */
        function Request(params) {
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestQueryParams = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    IsActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("true", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Route: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditDiagramApiModel.Response = Response;
})(EditDiagramApiModel || (EditDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    loaded: false,
    diagram: new GetDiagramsApiModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function diagramReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DiagramsActionTypes.GET_DIAGRAM: {
            return Object.assign({}, state, { loaded: true });
        }
        case DiagramsActionTypes.GET_DIAGRAM_START: {
            return Object.assign({}, state, { loaded: true });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: new EditDiagramApiModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case EditDiagramActionTypes.EDIT_DIAGRAM: {
            return Object.assign({}, state, { status: "dirty", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
            return Object.assign({}, state, { status: "pending", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
            return Object.assign({}, state, { status: "succeed" });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$2 = {
    route: '',
    result: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function ParentGuardReducer(state, action) {
    if (state === void 0) { state = initialState$2; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DiagramReducers = {
    diagrams: diagramReducer,
    editDiagram: Reducer,
    parentGuard: ParentGuardReducer
};
//#region selectors
var /** @type {?} */ selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
var /** @type {?} */ selectEditDiagramState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, function (state) { return state.editDiagram; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServerStatusDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function ServerStatusDiagramComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    ServerStatusDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
        //   .subscribe(data => {
        //     debugger
        //     this.chart.load({
        //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //     });
        //   })
    };
    /**
     * @return {?}
     */
    ServerStatusDiagramComponent.prototype.ngOnInit = function () { };
    return ServerStatusDiagramComponent;
}());
ServerStatusDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-server-status",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\n    fiber_manual_record\n  </mat-icon> -->\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\n</div>",
                styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            },] },
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramPartialConfigEditComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function DiagramPartialConfigEditComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            debugger;
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.configChanged = function () { };
    return DiagramPartialConfigEditComponent;
}());
DiagramPartialConfigEditComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-partial-config-edit",
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
DiagramPartialConfigEditComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
DiagramPartialConfigEditComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PieDiagramPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function PieDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.ConfigChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    return PieDiagramPartialConfigComponent;
}());
PieDiagramPartialConfigComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "pie-diagram-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n  </form>\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
PieDiagramPartialConfigComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
PieDiagramPartialConfigComponent.propDecorators = {
    ConfigChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function BooleanoWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
    }
    Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BooleanoWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    BooleanoWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    return BooleanoWidgetPartialConfigComponent;
}());
BooleanoWidgetPartialConfigComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "booleano-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"booleanoFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericWidgetPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function NumericWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    return NumericWidgetPartialConfigComponent;
}());
NumericWidgetPartialConfigComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "numeric-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinearDiagramPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function LinearDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.ConfigChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    return LinearDiagramPartialConfigComponent;
}());
LinearDiagramPartialConfigComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "linear-diagram-partial-config",
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\n  </div>\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ConfigChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function ServerConnectingTimeDiagramComponent(injector) {
        var _this = this;
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.data = this.injector.get("data");
        setInterval(function () {
            _this.time = _this.time + 1;
        }, 1000);
    }
    Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    };
    return ServerConnectingTimeDiagramComponent;
}());
ServerConnectingTimeDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-server-connecting-time",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            },] },
];
/** @nocollapse */
ServerConnectingTimeDiagramComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
]; };
ServerConnectingTimeDiagramComponent.propDecorators = {
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramConfigurationService = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return DiagramConfigurationService;
}());
DiagramConfigurationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] }
]; };
/** @nocollapse */ DiagramConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    function DiagramService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    /**
     * @return {?}
     */
    DiagramService.prototype.getDiagrams = function () {
        return this.http
            .get("http://localhost:3000/api/diagram")
            .map(function (response) { return response; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getGroups = function () {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.getDiagram = function (id) {
        debugger;
        if (!id)
            debugger;
        return this.http.get("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.addDiagram = function (data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
        debugger;
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    DiagramService.prototype.updateDiagram = function (body) {
        debugger;
        return this.http.put("http://localhost:3000/api/diagram", body).map(function (response) { return response; }).catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.deleteDiagram = function (id) {
        return this.http.delete("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    DiagramService.prototype.getData = function (source, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__["Observable"].timer(0, source.Interval).switchMap(function (i) { return _this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: _this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; }); });
        }
    };
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    DiagramService.prototype.extract_columns_from_data = function (data, columnsMappings) {
        var /** @type {?} */ res = [];
        columnsMappings.forEach(function (item) {
            var /** @type {?} */ ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var /** @type {?} */ NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (item, i) { return [item].concat(ValueData[i]); })));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_data_report = function (data) {
        return _.report(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_last_node_of_data = function (data) {
        return ((_.report(data))).filter(function (item) { return item.isLastNode; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    DiagramService.prototype.buildChartConfig = function (columns) {
        return {
            data: {
                columns: columns
            },
            legend: {
                show: true
            }
        };
    };
    /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    DiagramService.prototype.generateDiagram = function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(Object.assign({}, config, { bindto: "#diagram_" + id }));
        return this.getData(/** @type {?} */ ({}), sync).subscribe(function (data) {
            _this.charts[id].load({
                columns: _this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    };
    /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    DiagramService.prototype.getFloorTime = function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    return DiagramService;
}());
DiagramService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DiagramService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: DiagramConfigurationService }
]; };
/** @nocollapse */ DiagramService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function DiagramService_Factory() { return new DiagramService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericEditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericEditDiagramComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(function (data) {
            debugger;
        });
    };
    return NumericEditDiagramComponent;
}());
NumericEditDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "numeric-edit-diagram",
                template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <mat-card-header>\n    <mat-card-title fxLayoutAlign=\"space-between center\">\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  </mat-card-content>\n</mat-card>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: DiagramService }
]; };
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(function (data) {
            var /** @type {?} */ counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnDestroy = function () {
        this.dataSubscribtion.unsubscribe();
    };
    return NumericDiagramComponent;
}());
NumericDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-numeric",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
            },] },
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: DiagramService }
]; };
NumericDiagramComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function DiagramModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    DiagramModuleContainerComponent.prototype.ngOnInit = function () { };
    return DiagramModuleContainerComponent;
}());
DiagramModuleContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-module-container",
                template: "<div fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataMapperComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} store
     */
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this.dataReport = _.report(data);
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataMapperComponent.prototype.ngOnInit = function () { };
    return DataMapperComponent;
}());
DataMapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "data-mapper",
                template: "<div fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        <b>\n            Key\n        </b>\n    </div>\n    <div fxFlex=\"nogrow\">\n        <b>\n            Type\n        </b>\n    </div>\n</div>\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        {{item.name}}\n    </div>\n    <div fxFlex=\"nogrow\">\n        {{item.type}}\n    </div>\n</div>\n",
                styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
            },] },
];
/** @nocollapse */
DataMapperComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
]; };
DataMapperComponent.propDecorators = {
    destination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} formBuilder
     * @param {?} store
     * @param {?} route
     */
    function AddDiagramComponent(diagramService, formBuilder, store, route) {
        var _this = this;
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = ((this.formGroup.controls["ColumnMappings"])).controls;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Name: data.Name,
                        IsActive: data.IsActive,
                        Groups: data.Groups,
                        Type: data.Chart.data.type,
                        Legend: data.Chart.legend.show,
                        Subchart: data.Chart.subchart.show,
                        Zoom: data.Chart.zoom.enabled,
                        Tooltip: data.Chart.tooltip.grouped,
                        Sync: data.Source.Interval,
                        Source: data.Source,
                        columns: data.Chart.data.columns,
                        ColumnMappings: data.Chart.ColumnMappings,
                        Cols: data.Box.Cols,
                        Flow: data.Chart.Flow,
                        Rows: data.Box.Rows,
                        BackgroundColor: data.Box.BackgroundColor,
                        TextColor: data.Box.TextColor
                    });
                    var /** @type {?} */ colorsControl = (_this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Chart.data.colors[columnKey]));
                    });
                    var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
                    Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Chart.data.types[key]));
                    });
                    debugger;
                    data.Chart.ColumnMappings.forEach(function (mapping) { return _this.addColumn(mapping.NamePath, mapping.ValuePath); });
                    _this.source = data.Source;
                    _this.store.dispatch(new HaveEndpointAction(_this));
                    _this.diagramPartialConfig = {
                        type: _this.formGroup.value.Type,
                        inputs: {
                            formGroup: _this.formGroup,
                            diagramService: _this.diagramService
                        }
                    };
                });
            _this.diagramPartialConfig = {
                type: _this.formGroup.value.Type,
                inputs: {
                    formGroup: _this.formGroup,
                    diagramService: _this.diagramService
                }
            };
        });
        this.diagramTypes = [
            "bar",
            "donut",
            "pie",
            "scatter",
            "line",
            "area",
            "area-spline",
            "numero",
            "booleano",
            "tempo"
        ];
    }
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(function (status) {
            if (status == "VALID" &&
                ((_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
                _this.data)
                _this.store.dispatch(new ColumnsMappingChangedAction(_this));
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnDestroy = function () {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.getDataStructure = function () {
        var _this = this;
        var /** @type {?} */ observer = this.diagramService.getData(Object.assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(function (data) {
            _this.data = data.Data;
            _this.pathOptions = _this.diagramService.get_data_report(data.Data);
        });
        return observer;
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.configChanged = function () {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.typeChanged = function () {
        debugger;
        var /** @type {?} */ typesFormGroup = ((this.formGroup.controls["Types"])).controls;
        for (var /** @type {?} */ cb in typesFormGroup) {
            debugger;
            typesFormGroup[cb].setValue(this.formGroup.value.Type);
        }
        this.diagramPartialConfig = {
            type: this.formGroup.value.Type,
            inputs: {
                formGroup: this.formGroup,
                diagramService: this.diagramService
            }
        };
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    AddDiagramComponent.prototype.addColumn = function (NamePath, ValuePath) {
        if (NamePath === void 0) { NamePath = ""; }
        if (ValuePath === void 0) { ValuePath = ""; }
        var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.routeEntered = function (event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AddDiagramComponent.prototype.removeColumn = function (i) {
        var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.calculateColumns = function () {
        var _this = this;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (obser) {
            var /** @type {?} */ columns = _this.diagramService.extract_columns_from_data(_this.data, ((_this.formGroup.controls["ColumnMappings"])).value);
            _this.formGroup.controls["columns"].setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            var /** @type {?} */ colorsControl = (_this.formGroup.controls["Colors"]);
            columns.forEach(function (column) {
                var /** @type {?} */ columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("#123456"));
            });
            var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
            columns.forEach(function (column) {
                var /** @type {?} */ key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_this.formGroup.value.Type));
            });
            obser.next();
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.generateDiagram = function () {
        var /** @type {?} */ temp = new DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        temp.Source = this.source;
        temp.Box = {
            NumberOfColumns: 1,
            Order: 1,
            BackgroundColor: this.formGroup.value.BackgroundColor
        };
        temp.Widget = {
            booleano: this.formGroup.value.booleano
        };
        temp.Chart = {
            ColumnMappings: this.formGroup.value.ColumnMappings,
            data: {
                columns: this.formGroup.controls["columns"].value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls["Colors"].value
            },
            Flow: this.formGroup.value.Flow,
            legend: {
                show: this.formGroup.value.Legend
            },
            subchart: {
                show: this.formGroup.value.Subchart
            },
            zoom: {
                enabled: this.formGroup.value.Zoom
            },
            tooltip: {
                grouped: this.formGroup.value.Tooltip
            }
        };
        // this.componentModel = {
        //   component: this.typeMapToDiagram[temp.Chart.data.type],
        //   inputs: { data: temp }
        // }
        this.diagramModel = temp;
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].empty();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    };
    return AddDiagramComponent;
}());
AddDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-add",
                template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (change)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\" fxLayoutAlign=\"space-between center\">\n            <span>{{item[0]}} : {{item[1]}}</span>\n            <span [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
                styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
            },] },
];
/** @nocollapse */
AddDiagramComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var diagramViewComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     */
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    diagramViewComponent.prototype.ngOnInit = function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
    return diagramViewComponent;
}());
diagramViewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-view",
                template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\n</div>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
            },] },
];
/** @nocollapse */
diagramViewComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };
diagramViewComponent.propDecorators = {
    diagramId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["id",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramsComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     */
    function DiagramsComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
        // this.diagrams
        //         .delay(100)
        //         .subscribe(diagrams =>
        //                 diagrams.Result.forEach(diagram =>
        //                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
    }
    /**
     * @return {?}
     */
    DiagramsComponent.prototype.ngOnInit = function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    return DiagramsComponent;
}());
DiagramsComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagrams",
                template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \n  [colspan]=\"diagram.Box.Cols\" \n  [rowspan]=\"diagram.Box.Rows\" \n  [style.color]=\"diagram.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\n  </mat-grid-tile>\n</mat-grid-list>\n<br />\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n</div>\n<div fxLayoutAlign='end center'>\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n  </button>\n</div>\n",
                styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            },] },
];
/** @nocollapse */
DiagramsComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} route
     * @param {?} store
     */
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        var /** @type {?} */ Route = this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe(function (data) { return _this.formGroup.patchValue(data); });
        });
    }
    /**
     * @return {?}
     */
    EditDiagramComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    EditDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    };
    return EditDiagramComponent;
}());
EditDiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram-edit",
                template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\n\n        <mat-card-header>\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n            </mat-form-field>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\n            </mat-form-field>\n\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n        </mat-card-actions>\n    </form>\n</mat-card>\n",
                styles: [""]
            },] },
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} diagramService
     * @param {?} http
     * @param {?} injector
     * @param {?} route
     */
    function DiagramComponent(store, diagramService, http, injector, route) {
        var _this = this;
        this.store = store;
        this.diagramService = diagramService;
        this.http = http;
        this.injector = injector;
        this.route = route;
        this.modelIsCorrect = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.now = Date.now();
        this.data = this.injector.get("data");
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    console.log(data);
                });
        });
    }
    Object.defineProperty(DiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._model;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (!(value.Chart && value._id))
                return;
            this._model = value;
            this.modelIsCorrect.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this.dataSubscribtion = IntervalObservable
        //         // .create(this.model.Source.Sync)
        //         .create(999)
        //         .switchMap(i =>
        //                 this.http.get(`http://localhost:3000/api/data`, {
        //                         params: {
        //                                 route: this.model.Source.Route,
        //                                 time: '0'
        //                         }
        //                 })
        //         )
        //         // .switchMap((res: any) => Observable.of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter(function (data) { return data; }).subscribe(function (state) {
            _this.chart = c3.generate(Object.assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
            _this.dataSubscribtion = _this.diagramService
                .getData(_this.data.Source)
                .filter(function (data) { return data != undefined; })
                .subscribe(function (data) {
                _this.now = Date.now();
                _this.time = data.Time;
                if (_this.data.Chart.Flow) {
                    _this.chart.flow({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings),
                        duration: 1500
                    });
                }
                else {
                    _this.chart.load({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
                    });
                }
            });
        });
        // this.dataSubscribtion = this.diagramService.generateDiagram(
        //         this.model.Chart,
        //         this.model._id,
        //         this.model.Source.Route,
        //         this.model.Source.Sync
        // );
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DiagramComponent.prototype.timeChange = function (e) {
        var _this = this;
        debugger;
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe(function (data) {
            _this.time = data.Time;
            _this.now = Date.now();
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            debugger;
            _this.chart.load({
                columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
            });
        });
    };
    return DiagramComponent;
}());
DiagramComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "diagram",
                template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n</div>\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}"]
            },] },
];
/** @nocollapse */
DiagramComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: DiagramService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
]; };
DiagramComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicComponentSelectorComponent = /** @class */ (function () {
    /**
     * @param {?} resolver
     */
    function DynamicComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramComponent,
            donut: DiagramComponent,
            pie: DiagramComponent,
            scatter: DiagramComponent,
            line: DiagramComponent,
            area: DiagramComponent,
            "area-spline": DiagramComponent,
            numero: NumericDiagramComponent,
            tempo: ServerConnectingTimeDiagramComponent,
            booleano: ServerStatusDiagramComponent
        };
        this.currentComponent = null;
        this.backgroundColor = "";
    }
    Object.defineProperty(DynamicComponentSelectorComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            this.backgroundColor = data.Box.BackgroundColor;
            this._data = data;
            var /** @type {?} */ raw = { data: data };
            var /** @type {?} */ _component = this.typeMapToDiagram[data.Chart.data.type];
            var /** @type {?} */ inputProviders = Object.keys(raw).map(function (inputName) {
                return { provide: inputName, useValue: raw[inputName] };
            });
            var /** @type {?} */ resolvedInputs = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolve(inputProviders);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            var /** @type {?} */ component = factory.create(injector);
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.timeChange = function (e) {
        this.currentComponent._component.timeChange(e);
    };
    return DynamicComponentSelectorComponent;
}());
DynamicComponentSelectorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "dynamic-component-selector",
                template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\n            {{_data.Name}}\n        </span>\n        <a [routerLink]=\"['edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\n        </a>\n    </div>\n    <!-- <mat-card-content> -->\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\n        <div #dynamicComponentContainer></div>\n    </div>\n    <!-- </mat-card-content> -->\n</mat-card>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}"],
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ]
            },] },
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
]; };
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["dynamicComponentContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
    widgetComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DiagramComponent,] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    /**
     * @param {?} resolver
     */
    function DynamicConfigComponentSelectorComponent(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramPartialConfigEditComponent,
            area: LinearDiagramPartialConfigComponent,
            "area-spline": LinearDiagramPartialConfigComponent,
            donut: DiagramPartialConfigEditComponent,
            pie: PieDiagramPartialConfigComponent,
            scatter: DiagramPartialConfigEditComponent,
            line: LinearDiagramPartialConfigComponent,
            booleano: BooleanoWidgetPartialConfigComponent
        };
        this.ConfigChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentComponent = null;
    }
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var /** @type {?} */ _component = this.typeMapToDiagram[data.type];
            var /** @type {?} */ inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            var /** @type {?} */ resolvedInputs = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolve(inputProviders);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            debugger;
            var /** @type {?} */ component = factory.create(injector);
            if (((component.instance)).ConfigChanged)
                ((component.instance)).ConfigChanged.subscribe(function () {
                    debugger;
                    _this.ConfigChanged.emit();
                });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    return DynamicConfigComponentSelectorComponent;
}());
DynamicConfigComponentSelectorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "dynamic-config-component-selector",
                template: "<div #dynamicComponentContainer></div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                entryComponents: [
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    LinearDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent
                ]
            },] },
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
]; };
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["dynamicComponentContainer", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
    ConfigChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return new GetDiagramsStart(); }));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (data) { return _this.diagramService
            .getDiagrams()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return new GetDiagramsSucceed(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(new GetDiagramsFailed()); })); }));
    }
    return DiagramEffects;
}());
DiagramEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
DiagramEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: DiagramService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], DiagramEffects.prototype, "DiagramRequest$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], DiagramEffects.prototype, "getDiagram$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    function AddDiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return new AddDiagramActionStart(data); }));
        this.addDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (data) { return _this.diagramService
            .addDiagram(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (res) { return new AddDiagramActionSucceed(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(new AddDiagramActionFailed()); })); }));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
            _this.router.navigate(["diagrams"]);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].empty();
        }));
        this.HAVE_ENDPOINT$ = this.actions$
            .ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return new DataLoadedAction(data); }));
        this.DATA_LOADED$ = this.actions$
            .ofType(AddDiagramActionTypes.DATA_LOADED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return new StructureDefinitionStartAction(data); }));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return new GenerateDiagramAction(data); }));
        this.STRUCTURE_DEFINITION_START$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (data) { return data.getDataStructure().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (data) { return data.calculateColumns().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (data) { return data.calculateColumns().map(function () { return new GenerateDiagramAction(data); }); }));
        this.GenerateDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return data.generateDiagram(); }));
    }
    return AddDiagramEffects;
}());
AddDiagramEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AddDiagramEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: DiagramService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "addDiagram$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])({ dispatch: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], AddDiagramEffects.prototype, "GenerateDiagram$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "diagrams",
        component: DiagramModuleContainerComponent,
        children: [
            {
                path: "",
                component: DiagramsComponent
            },
            {
                path: "add",
                component: AddDiagramComponent
            },
            {
                path: "edit/:id",
                component: AddDiagramComponent
            },
            {
                path: "numero",
                component: NumericDiagramComponent
            },
            {
                path: "tempo",
                component: ServerConnectingTimeDiagramComponent
            },
            {
                path: "booleano",
                component: ServerStatusDiagramComponent
            }
        ]
    }
];
var /** @type {?} */ RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsDiagramModule = /** @class */ (function () {
    function NgsDiagramModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsDiagramModule.forRoot = function (config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsDiagramModule;
}());
NgsDiagramModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
                ],
                declarations: [
                    AddDiagramComponent,
                    DiagramsComponent,
                    diagramViewComponent,
                    EditDiagramComponent,
                    DynamicConfigComponentSelectorComponent,
                    DiagramComponent,
                    DynamicComponentSelectorComponent,
                    DiagramModuleContainerComponent,
                    DataMapperComponent,
                    NumericDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent,
                    NumericWidgetPartialConfigComponent,
                    ServerConnectingTimeDiagramComponent,
                    NumericEditDiagramComponent,
                    LinearDiagramPartialConfigComponent
                ],
                providers: []
            },] },
];
var RootNgsDiagramModule = /** @class */ (function () {
    function RootNgsDiagramModule() {
    }
    return RootNgsDiagramModule;
}());
RootNgsDiagramModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    NgsDiagramModule,
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("diagram", DiagramReducers),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([DiagramEffects, AddDiagramEffects]),
                    RoutingModule
                ],
                exports: [NgsDiagramModule]
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


//# sourceMappingURL=soushians-diagram.js.map


/***/ }),

/***/ "./dist/@soushians/form/fesm5/soushians-form.js":
/*!******************************************************!*\
  !*** ./dist/@soushians/form/fesm5/soushians-form.js ***!
  \******************************************************/
/*! exports provided: MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, FormService, FormViewComponent, DynamicFieldDirective, AddFormApiModel, EditFormApiModel, FormListApiModel, FormSchemaModel, FieldConfig, NgsFormModule, RootNgsFormModule, ɵh, ɵf, ɵk, ɵy, ɵm, ɵo, ɵp, ɵn, ɵbc, ɵe, ɵz, ɵg, ɵbb, ɵbd, ɵi, ɵj, ɵba, ɵx, ɵl, ɵa, ɵc, ɵr, ɵt, ɵs, ɵv, ɵq, ɵw, ɵu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormViewComponent", function() { return FormViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormApiModel", function() { return AddFormApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormApiModel", function() { return EditFormApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormListApiModel", function() { return FormListApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSchemaModel", function() { return FormSchemaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldConfig", function() { return FieldConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsFormModule", function() { return NgsFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsFormModule", function() { return RootNgsFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return AddFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return AddFormContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return AddFormContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return AddFormEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return AddFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return FormArrayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return FormControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return FormGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return EditFormContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return EditFormContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return EditFormEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return EditFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return RoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return FormListContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FormListContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return FormListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return FormsListEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return MainContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FormReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return FormConfigurationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return EmailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return TableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @soushians/shared */ "./dist/@soushians/shared/fesm5/soushians-shared.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");





















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        addForm: "",
        editForm: "",
        getForm: "",
        getList: "",
        deleteForm: ""
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("FormModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormApiModel;
(function (AddFormApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                name: this.name,
                form: this.form,
                events: this.events
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({}),
                    events: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        accept: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                            show: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("ثبت")
                        }),
                        cancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                            show: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("انصراف")
                        })
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddFormApiModel.Response = Response;
})(AddFormApiModel || (AddFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditFormApiModel;
(function (EditFormApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                name: this.name,
                form: this.form,
                events: this.events
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    form: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({}),
                    events: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        accept: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                            show: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("ثبت")
                        }),
                        cancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                            show: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
                            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("انصراف")
                        })
                    })
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditFormApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditFormApiModel.Response = Response;
})(EditFormApiModel || (EditFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListApiModel;
(function (FormListApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                Name: this.Name,
                Controls: this.Controls
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Controls: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FormListApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    FormListApiModel.Response = Response;
})(FormListApiModel || (FormListApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Validator = /** @class */ (function () {
    function Validator() {
        this.required = {
            active: false,
            message: "این فیلد الزامی است"
        };
        this.minlength = {
            active: false,
            message: "حداقل تعداد کارکترها",
            value: 5
        };
        this.email = {
            active: false,
            message: "لطفا ایمیل صحیح وارد نمایید"
        };
    }
    return Validator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FieldConfig = /** @class */ (function () {
    /**
     * @param {?} type
     */
    function FieldConfig(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
        this.validator = new Validator();
    }
    return FieldConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormSchemaModel = /** @class */ (function () {
    function FormSchemaModel() {
        this.events = {
            accept: {
                show: false,
                text: "ثبت"
            },
            cancel: {
                show: false,
                text: "انصراف"
            }
        };
        this.form = new FieldConfig("group");
    }
    /**
     * @return {?}
     */
    FormSchemaModel.prototype.init = function () {
        this._id = (Math.random() * 10).toString();
    };
    return FormSchemaModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function FormConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_4__["getFormModuleConfig"]).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(FormConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return FormConfigurationService;
}());
FormConfigurationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FormConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
]; };
/** @nocollapse */ FormConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MODULE_CONFIG_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); }, token: FormConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    function FormService(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    FormService.prototype.add = function (data) {
        var _this = this;
        var /** @type {?} */ model = new AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.addForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.post(config.endpoints.addForm, model.getRequestBody()); })
            .map(function (response) { return response.Result; });
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    FormService.prototype.get = function (_id) {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.getForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.get(Object(_soushians_shared__WEBPACK_IMPORTED_MODULE_8__["stringTemplate"])(config.endpoints.getForm, { _id: _id })); })
            .map(function (response) { return response.Result; });
    };
    /**
     * @return {?}
     */
    FormService.prototype.getList = function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.getList != ""; })
            .switchMap(function (config) { return _this.http.get(config.endpoints.getList); })
            .map(function (response) { return response.Result; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    FormService.prototype.update = function (data) {
        var _this = this;
        var /** @type {?} */ model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.editForm != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.put(config.endpoints.editForm, model.getRequestBody()); })
            .map(function (response) { return response.Result; });
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    FormService.prototype.delete = function (_id) {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.deleteForm != ""; })
            .switchMap(function (config) { return _this.http.get(config.endpoints.deleteForm); });
    };
    /**
     * @param {?} _id
     * @return {?}
     */
    FormService.prototype.selectFormById = function (_id) {
        var /** @type {?} */ subject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
        this.store
            .select(function (state) { return state.form.list.data; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (forms) { return forms != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (forms) { return forms.find(function (form) { return form._id == _id; }); }))
            .subscribe(function (FormSchemaModel$$1) { return subject.next(FormSchemaModel$$1); });
        return subject.asObservable();
    };
    return FormService;
}());
FormService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
FormService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: FormConfigurationService }
]; };
/** @nocollapse */ FormService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function FormService_Factory() { return new FormService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(FormConfigurationService)); }, token: FormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-select",
                template: "<div  [formGroup]=\"group\">\n<mat-form-field>\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\n    </mat-select>\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    return CheckboxComponent;
}());
CheckboxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-checkbox",
                template: "<div [formGroup]=\"group\">\n    <mat-checkbox [formControlName]=\"config.name\">\n        {{config.title}}\n    </mat-checkbox>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    /**
     * @return {?}
     */
    EmailComponent.prototype.ngOnInit = function () { };
    return EmailComponent;
}());
EmailComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-email",
                template: "<div  [formGroup]=\"group\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
EmailComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ColorComponent = /** @class */ (function () {
    function ColorComponent() {
    }
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = function () { };
    return ColorComponent;
}());
ColorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-color",
                template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
ColorComponent.ctorParameters = function () { return []; };
ColorComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TableComponent = /** @class */ (function () {
    /**
     * @param {?} http
     */
    function TableComponent(http) {
        this.http = http;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](true, []);
        this.ready = false;
    }
    /**
     * @return {?}
     */
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.schema.dataEndpoint).subscribe(function (data) {
            debugger;
            _this.ready = true;
            _this.displayedColumns = data.displayedColumns;
            _this.filedDisplayedColumns = data.filedDisplayedColumns;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](data.dataSource);
        });
    };
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    TableComponent.prototype.isAllSelected = function () {
        var /** @type {?} */ numSelected = this.selection.selected.length;
        this.form.patchValue((_a = {},
            _a[this.schema.name] = this.selection.selected,
            _a));
        var /** @type {?} */ numRows = this.dataSource.data.length;
        return numSelected === numRows;
        var _a;
    };
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    TableComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    return TableComponent;
}());
TableComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-table",
                template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
]; };
TableComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumberComponent = /** @class */ (function () {
    function NumberComponent() {
    }
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = function () { };
    return NumberComponent;
}());
NumberComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-number",
                template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
NumberComponent.ctorParameters = function () { return []; };
NumberComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    return TextComponent;
}());
TextComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-control-text",
                template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>",
                styles: [":host{display:block}.mat-form-field{width:100%}"]
            },] },
];
/** @nocollapse */
TextComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var FormsListActionTypes = {
    FORMS_LIST: "[FORM][LIST] FORMS_LIST",
    FORMS_LIST_START: "[FORM][LIST] FORMS_LIST_START",
    FORMS_LIST_SUCCEED: "[FORM][LIST] FORMS_LIST_SUCCEED",
    FORMS_LIST_FAILED: "[FORM][LIST] FORMS_LIST_FAILED",
    ADD_FORM_SCHEMA: "[FORM][LIST] ADD_FORM_SCHEMA",
    FORM_SCHEMA_UPDATE: "[FORM][LIST] FORM_SCHEMA_UPDATE",
    GET_FORM_SCHEMA: "[FORM][LIST] GET_FORM_SCHEMA",
    FORM_SCHEMA_FETCHED: "[FORM][LIST] FORM_SCHEMA_FETCHED",
};
var FormsListAction = /** @class */ (function () {
    function FormsListAction() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
    return FormsListAction;
}());
var FormsListStartAction = /** @class */ (function () {
    function FormsListStartAction() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
    return FormsListStartAction;
}());
var FormsListSucceedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function FormsListSucceedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
    return FormsListSucceedAction;
}());
var FormsListFailedAction = /** @class */ (function () {
    function FormsListFailedAction() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
    return FormsListFailedAction;
}());
var UpdateFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function UpdateFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
    return UpdateFormSchemaAction;
}());
var AddFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
    return AddFormSchemaAction;
}());
var GetFormSchemaAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
    return GetFormSchemaAction;
}());
var FormSchemaFechedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function FormSchemaFechedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
    }
    return FormSchemaFechedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormViewComponent = /** @class */ (function () {
    /**
     * @param {?} service
     * @param {?} compiler
     * @param {?} resolver
     * @param {?} store
     */
    function FormViewComponent(service, compiler, resolver, store) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.resolver = resolver;
        this.store = store;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formGroupCreated = false;
        this.schema$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](undefined);
        this.schema$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe)).subscribe(function (schema) {
            if (!schema)
                return;
            _this.formGroup = /** @type {?} */ (_this.createFrom(schema.form));
            if (!schema.form.name)
                return;
            _this.formGroupCreated = true;
        });
    }
    Object.defineProperty(FormViewComponent.prototype, "id", {
        /**
         * @param {?} id
         * @return {?}
         */
        set: function (id) {
            var _this = this;
            if (!this.local)
                this.store.dispatch(new GetFormSchemaAction(id));
            this.service
                .selectFormById(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe))
                .subscribe(function (schema) { return _this.schema$.next(schema); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormViewComponent.prototype, "schema", {
        /**
         * @param {?} schema
         * @return {?}
         */
        set: function (schema) {
            this.schema$.next(schema);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormViewComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    /**
     * @param {?} schema
     * @return {?}
     */
    FormViewComponent.prototype.generate = function (schema) {
        this.schema$.next(schema);
    };
    /**
     * @param {?} data
     * @param {?=} parentPath
     * @return {?}
     */
    FormViewComponent.prototype.createFrom = function (data, parentPath) {
        var _this = this;
        if (parentPath === void 0) { parentPath = ""; }
        if (data.type == "control") {
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                var /** @type {?} */ formGroupPath = parentPath;
                parentPath = parentPath + ".controls." + (((data))).name;
            }
            var /** @type {?} */ validators = [];
            if (data.validator.required.active) {
                validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            }
            if (data.validator.minlength.active) {
                validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(data.validator.minlength.value));
            }
            if (data.validator.email.active) {
                validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email);
            }
            var /** @type {?} */ ctr = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.value, validators);
            ((ctr)).schema = data;
            ((ctr)).schema.path = parentPath;
            ((ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            var /** @type {?} */ formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
            if (data.parentType == undefined) {
                parentPath = ((data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = parentPath + ".controls[" + (((data))).name + "]";
            }
            else if (data.parentType == "group") {
                parentPath = parentPath + ".controls." + (((data))).name;
            }
            ((formGroup)).schema = data;
            ((formGroup)).schema.path = parentPath;
            data.fields.forEach(function (item) {
                item.parentType = "group";
                formGroup.addControl(item.name, _this.createFrom(item, parentPath));
            });
            return formGroup;
        }
        else {
            var /** @type {?} */ formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
            parentPath =
                parentPath == "" ? ((data)).name : parentPath + ".controls." + (((data))).name;
            ((formArray)).schema = data;
            ((formArray)).schema.path = parentPath;
            data.fields.forEach(function (item, idx) {
                item.parentType = "array";
                item.name = idx.toString();
                formArray.controls.push(_this.createFrom(item, parentPath));
            });
            return formArray;
        }
    };
    /**
     * @return {?}
     */
    FormViewComponent.prototype.accepted = function () {
        this.accept.emit(this.formGroup);
    };
    /**
     * @return {?}
     */
    FormViewComponent.prototype.canceled = function () {
        this.cancel.emit(this.formGroup);
    };
    return FormViewComponent;
}());
FormViewComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-view",
                template: "<form *ngIf=\"formGroupCreated\" class=\"dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <mat-card>\n    <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button fxFlex type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n      <button fxFlex type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"
            },] },
];
/** @nocollapse */
FormViewComponent.ctorParameters = function () { return [
    { type: FormService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
]; };
FormViewComponent.propDecorators = {
    accept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    local: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
var /** @type {?} */ components = {
    checkbox: CheckboxComponent,
    text: TextComponent,
    table: TableComponent,
    color: ColorComponent,
    email: EmailComponent,
    select: SelectComponent
};
var DynamicFieldDirective = /** @class */ (function () {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.subtype]) {
            var /** @type {?} */ supportedTypes = Object.keys(components).join(", ");
            throw new Error("Trying to use an unsupported type (" + this.config.subtype + ").\n\t\t  Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(components[this.config.subtype]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    return DynamicFieldDirective;
}());
DynamicFieldDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: "[dynamicField]"
            },] },
];
/** @nocollapse */
DynamicFieldDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
]; };
DynamicFieldDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    status: "pristine",
    data: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case FormsListActionTypes.FORMS_LIST: {
            return Object.assign({}, state, { status: "dirty" });
        }
        case FormsListActionTypes.FORMS_LIST_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case FormsListActionTypes.FORMS_LIST_SUCCEED: {
            return Object.assign({}, state, { data: action.payload, status: "succeed" });
        }
        case FormsListActionTypes.FORMS_LIST_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        case FormsListActionTypes.FORM_SCHEMA_UPDATE: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.ADD_FORM_SCHEMA: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
            var /** @type {?} */ data = state.data.concat();
            var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
            if (entityIdx > -1) {
                data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
            }
            else {
                data.push(action.payload);
            }
            return Object.assign({}, state, { data: data });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FormReducers = {
    list: reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.noHeader = false;
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        debugger;
    }
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.changed = function () {
        this.changes.emit();
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormGroupComponent.prototype.addFormGroup = function (root) {
        var /** @type {?} */ group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        this.schema.id = this.schema.id + 1;
        return group;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormGroupComponent.prototype.addFormArray = function (root) {
        var /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormGroupComponent.prototype.addFormControl = function (root) {
        var /** @type {?} */ control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    FormGroupComponent.prototype.deleteFormGroup = function (idx) {
        this.schema.fields.splice(idx, 1);
    };
    return FormGroupComponent;
}());
FormGroupComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "app-form-group",
                template: "<mat-card>\n  <mat-card-content>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n    </mat-form-field>\n\n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n      <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n    </div>\n\n    <div *ngFor=\"let field of schema.fields;let i = index\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array>\n        <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>"
            },] },
];
/** @nocollapse */
FormGroupComponent.ctorParameters = function () { return []; };
FormGroupComponent.propDecorators = {
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent() {
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FormArrayComponent.prototype.changed = function () {
        this.changes.emit();
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormGroup = function (root) {
        var /** @type {?} */ group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormArray = function (root) {
        var /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    FormArrayComponent.prototype.addFormControl = function (root) {
        var /** @type {?} */ control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    };
    return FormArrayComponent;
}());
FormArrayComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "app-form-array",
                template: "<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n      \n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\n    </div>\n    \n    <div *ngFor=\"let field of schema.fields\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>"
            },] },
];
/** @nocollapse */
FormArrayComponent.ctorParameters = function () { return []; };
FormArrayComponent.propDecorators = {
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.options = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([
            new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
                value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            })
        ]);
        this.tableOptions = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dataEndpoint: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("http://localhost:3000/api/fake/packgeCompareSimpleList")
        });
        debugger;
    }
    /**
     * @return {?}
     */
    FormControlComponent.prototype.changed = function () {
        if ([this.schema.name, this.schema.title, this.schema.inputType].some(function (item) { return !item; }))
            return true;
        if (this.schema.inputType == "table") {
            this.schema.options = this.tableOptions.value;
        }
        else if (this.schema.inputType == "select") {
            this.schema.options = this.options.value;
        }
        this.changes.emit();
    };
    /**
     * @return {?}
     */
    FormControlComponent.prototype.addOption = function () {
        this.options.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        }));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FormControlComponent.prototype.removeOption = function (i) {
        this.options.controls.splice(i, 1);
    };
    /**
     * @return {?}
     */
    FormControlComponent.prototype.insertOptions = function () {
        this.schema.options = this.options.value;
    };
    return FormControlComponent;
}());
FormControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "app-form-control",
                template: "  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <button mat-icon-button (click)=\"delete.emit()\">\n            <mat-icon aria-label=\" icon-button\">delete_forever</mat-icon>\n          </button>\n        {{schema.name}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\"/>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n          <mat-option value=\"table\">table</mat-option>\n          <mat-option value=\"select\">select</mat-option>\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"email\">email</mat-option>\n          <mat-option value=\"color\">color</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"checkbox\">checkbox</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>\n      </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n            <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\"/>\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"schema.inputType=='select'\">\n        [options]\n        <button (click)=\"addOption()\">+</button>\n        <button (click)=\"insertOptions()\">insert</button>\n        <div *ngFor=\"let option of options.controls;index as i\">\n          {{i}}\n          <div [formGroup]=\"options.controls[i]\">\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <br/>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\"  placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\"/>\n        </mat-form-field>\n    </div>\n      \n  </mat-expansion-panel>"
            },] },
];
/** @nocollapse */
FormControlComponent.ctorParameters = function () { return []; };
FormControlComponent.propDecorators = {
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditFormActionTypes = {
    EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
    EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
    EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
    EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
};
var EditFormAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
    return EditFormAction;
}());
var EditFormStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormStartAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
    return EditFormStartAction;
}());
var EditFormSucceedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditFormSucceedAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
    return EditFormSucceedAction;
}());
var EditFormFailedAction = /** @class */ (function () {
    function EditFormFailedAction() {
        this.type = EditFormActionTypes.EDIT_FORM_FAILED;
    }
    return EditFormFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddFormActionTypes = {
    ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
    ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
    ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
    ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
};
var AddFormAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
    return AddFormAction;
}());
var AddFormStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddFormStartAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
    return AddFormStartAction;
}());
var AddFormSucceedAction = /** @class */ (function () {
    function AddFormSucceedAction() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
    return AddFormSucceedAction;
}());
var AddFormFailedAction = /** @class */ (function () {
    function AddFormFailedAction() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
    return AddFormFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} service
     */
    function AddFormContainerComponent(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    AddFormContainerComponent.prototype.ngOnInit = function () {
        debugger;
        this.schema = new FormSchemaModel();
        this.schema.init();
        this.store.dispatch(new AddFormSchemaAction(this.schema));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AddFormContainerComponent.prototype.add = function (form) {
        this.store.dispatch(new AddFormAction(form));
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AddFormContainerComponent.prototype.update_schema = function (form) {
        this.store.dispatch(new UpdateFormSchemaAction(form));
    };
    return AddFormContainerComponent;
}());
AddFormContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
            },] },
];
/** @nocollapse */
AddFormContainerComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: FormService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var EditFormContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__extends"])(EditFormContainerComponent, _super);
    /**
     * @param {?} service
     * @param {?} route
     * @param {?} store
     */
    function EditFormContainerComponent(service, route, store) {
        var _this = _super.call(this, store, service) || this;
        _this.service = service;
        _this.route = route;
        _this.store = store;
        _this.formGroup = EditFormApiModel.Request.formGroup;
        return _this;
    }
    /**
     * @return {?}
     */
    EditFormContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params["_id"]; })
            .subscribe(function (id) { return _this.store.dispatch(new GetFormSchemaAction(id)); });
        this.route.params
            .map(function (params) { return params["_id"]; })
            .switchMap(function (id) { return _this.service.selectFormById(id); })
            .filter(function (data) { return data != null; })
            .take(1)
            .subscribe(function (formSchema) {
            debugger;
            _this.schema = formSchema;
            _this.formGroup.patchValue(formSchema);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    EditFormContainerComponent.prototype.update = function (data) {
        this.store.dispatch(new EditFormAction(data));
    };
    return EditFormContainerComponent;
}(AddFormContainerComponent));
EditFormContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
            },] },
];
/** @nocollapse */
EditFormContainerComponent.ctorParameters = function () { return [
    { type: FormService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormComponent = /** @class */ (function () {
    function AddFormComponent() {
        this.formGroup = AddFormApiModel.Request.formGroup;
        this.submited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    AddFormComponent.prototype.emit = function () {
        this.formGroup.patchValue({ form: this.schema.form });
        this.submited.emit(this.formGroup.value);
    };
    /**
     * @return {?}
     */
    AddFormComponent.prototype.changed = function () {
        this.formGroup.patchValue({ form: this.schema.form });
        this.changes.emit(this.formGroup.value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    AddFormComponent.prototype.changeOrder = function ($event) {
        debugger;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    AddFormComponent.prototype.addFormGroup = function (root) {
        var /** @type {?} */ group = new FieldConfig("group");
        group.fields = [];
        root.fields.push(group);
        return group;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    AddFormComponent.prototype.addFormArray = function (root) {
        var /** @type {?} */ array = new FieldConfig("array");
        array.fields = [];
        root.fields.push(array);
        return array;
    };
    /**
     * @param {?} root
     * @return {?}
     */
    AddFormComponent.prototype.addFormControl = function (root) {
        var /** @type {?} */ control = new FieldConfig("control");
        root.fields.push(control);
        return control;
    };
    return AddFormComponent;
}());
AddFormComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "ngs-form-add",
                template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
            },] },
];
AddFormComponent.propDecorators = {
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    submited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    changes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var EditFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__extends"])(EditFormComponent, _super);
    function EditFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    EditFormComponent.prototype.emit = function () {
        if (!this.formGroup.valid)
            return;
        return this.submited.emit(this.formGroup.value);
    };
    return EditFormComponent;
}(AddFormComponent));
EditFormComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "edit-form",
                template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
            },] },
];
EditFormComponent.propDecorators = {
    schema: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function FormListContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(function (state) { return state.form.list.data; });
    }
    /**
     * @return {?}
     */
    FormListContainerComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new FormsListAction());
    };
    return FormListContainerComponent;
}());
FormListContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
            },] },
];
/** @nocollapse */
FormListContainerComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    return FormListComponent;
}());
FormListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "form-list",
                template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  item._id]\">\n          <mat-icon aria-label=\"edit form\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
            },] },
];
FormListComponent.propDecorators = {
    data$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["data",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainContainerComponent = /** @class */ (function () {
    /**
     * @param {?} route
     * @param {?} store
     */
    function MainContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    return MainContainerComponent;
}());
MainContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                template: "<router-outlet></router-outlet>"
            },] },
];
/** @nocollapse */
MainContainerComponent.ctorParameters = function () { return [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function AddFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return new AddFormStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (data) { return _this.service.add(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return new AddFormSucceedAction(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_16__["Observable"].of(new AddFormFailedAction()); }));
    }
    return AddFormEffects;
}());
AddFormEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
AddFormEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: FormService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], AddFormEffects.prototype, "AddForm$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], AddFormEffects.prototype, "AddFormStart$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormsListEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function FormsListEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(function (data) { return new FormsListStartAction(); });
        this.GetForm$ = this.actions$
            .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (id) { return _this.service.get(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (formSchema) { return new FormSchemaFechedAction(formSchema); }));
        this.get_forms_list$ = this.actions$
            .ofType(FormsListActionTypes.FORMS_LIST_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (data) { return _this.service.getList(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return new FormsListSucceedAction(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_16__["Observable"].of(new FormsListFailedAction()); }));
    }
    return FormsListEffects;
}());
FormsListEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
FormsListEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: FormService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], FormsListEffects.prototype, "EditProfileRequest$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], FormsListEffects.prototype, "GetForm$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], FormsListEffects.prototype, "get_forms_list$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditFormEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function EditFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return new EditFormStartAction(data); }));
        this.EditFormStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (data) { return _this.service.update(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (formSchema) { return new EditFormSucceedAction(formSchema); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_16__["Observable"].of(new EditFormFailedAction()); }));
        this.UpdateFormsListStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (formSchema) { return new UpdateFormSchemaAction(formSchema); }));
    }
    return EditFormEffects;
}());
EditFormEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
EditFormEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: FormService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], EditFormEffects.prototype, "EditForm$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], EditFormEffects.prototype, "EditFormStart$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// export * from "./edit-form.reducer";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "form",
        component: MainContainerComponent,
        children: [
            {
                path: "add",
                component: AddFormContainerComponent
            },
            {
                path: "edit/:_id",
                component: EditFormContainerComponent
            },
            {
                path: "",
                component: FormListContainerComponent
            }
        ]
    }
];
var /** @type {?} */ RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsFormModule = /** @class */ (function () {
    function NgsFormModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsFormModule.forRoot = function (config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsFormModule;
}());
NgsFormModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
                ],
                declarations: [
                    EditFormContainerComponent,
                    EditFormComponent,
                    FormListContainerComponent,
                    FormListComponent,
                    AddFormContainerComponent,
                    MainContainerComponent,
                    AddFormComponent,
                    FormGroupComponent,
                    FormArrayComponent,
                    FormControlComponent,
                    FormViewComponent,
                    DynamicFieldDirective,
                    SelectComponent,
                    CheckboxComponent,
                    EmailComponent,
                    ColorComponent,
                    TextComponent,
                    NumberComponent,
                    TableComponent
                ],
                entryComponents: [
                    SelectComponent,
                    CheckboxComponent,
                    EmailComponent,
                    ColorComponent,
                    TextComponent,
                    NumberComponent,
                    TableComponent
                ],
                exports: [FormViewComponent]
            },] },
];
var RootNgsFormModule = /** @class */ (function () {
    function RootNgsFormModule() {
    }
    return RootNgsFormModule;
}());
RootNgsFormModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    NgsFormModule,
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature("form", FormReducers),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
                    RoutingModule
                ],
                exports: [NgsFormModule]
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


//# sourceMappingURL=soushians-form.js.map


/***/ }),

/***/ "./dist/@soushians/layout/fesm5/soushians-layout.js":
/*!**********************************************************!*\
  !*** ./dist/@soushians/layout/fesm5/soushians-layout.js ***!
  \**********************************************************/
/*! exports provided: LayoutActionTypes, TitleChangedAction, OpenSidenavAction, CloseSidenavAction, ChangeSideNavMode, ChangeLayout, CloseSecondSidenavAction, ChangeSecondSidenavMode, OpenSecondSidenavAction, ChangeToolbatToComfortableModeAction, ChangeToolbatToCompactModeAction, DisableComfortableModeAction, EnableComfortableModeAction, NgsLayoutModule, RootNgsLayoutModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ɵg, ɵe, ɵa, ɵi, ɵd, ɵh, ɵf, ɵj, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutActionTypes", function() { return LayoutActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleChangedAction", function() { return TitleChangedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSidenavAction", function() { return OpenSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSidenavAction", function() { return CloseSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSideNavMode", function() { return ChangeSideNavMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLayout", function() { return ChangeLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSecondSidenavAction", function() { return CloseSecondSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSecondSidenavMode", function() { return ChangeSecondSidenavMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSecondSidenavAction", function() { return OpenSecondSidenavAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeToolbatToComfortableModeAction", function() { return ChangeToolbatToComfortableModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeToolbatToCompactModeAction", function() { return ChangeToolbatToCompactModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableComfortableModeAction", function() { return DisableComfortableModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableComfortableModeAction", function() { return EnableComfortableModeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsLayoutModule", function() { return NgsLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsLayoutModule", function() { return RootNgsLayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return LogoContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MainMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SearchBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return TitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ToolbarMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return LayoutReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LayoutConfigurationService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _soushians_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @soushians/authentication */ "./dist/@soushians/authentication/fesm5/soushians-authentication.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ OPEN_SIDENAV = "[Layout] Open Sidenav";
var /** @type {?} */ CLOSE_SIDENAV = "[Layout] Close Sidenav";
/** @enum {string} */
var LayoutActionTypes = {
    UPDATE_LAYOUT_CONFIG: "[Layout] UPDATE_LAYOUT_CONFIG",
    SIGNOUT: "[Layout] signout",
    TITLE_CHANGED: "[LAYOUT] TITLE_CHANGED",
    CHANGE_LAYOUT: "[Layout] Change Layout",
    CHANGE_MAIN_SIDENAVE_MODE: "[Layout] Change main sidenav mode",
    OPEN_SECOND_SIDEBAR: "[Layout] Open Second Sidebar",
    CLOSE_SECOND_SIDEBAR: "[Layout] Close Second Sidebar",
    CHANGE_SECOND_SIDENAV_MODE: "[Layout] Change second sidenav mode",
};
var UpdateLayoutConfigAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function UpdateLayoutConfigAction(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    }
    return UpdateLayoutConfigAction;
}());
var OpenSidenavAction = /** @class */ (function () {
    function OpenSidenavAction() {
        this.type = OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
var CloseSidenavAction = /** @class */ (function () {
    function CloseSidenavAction() {
        this.type = CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
var ChangeLayout = /** @class */ (function () {
    /**
     * @param {?} name
     */
    function ChangeLayout(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
    return ChangeLayout;
}());
var ChangeSideNavMode = /** @class */ (function () {
    /**
     * @param {?} mode
     */
    function ChangeSideNavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
    return ChangeSideNavMode;
}());
var ChangeSecondSidenavMode = /** @class */ (function () {
    /**
     * @param {?} mode
     */
    function ChangeSecondSidenavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
    return ChangeSecondSidenavMode;
}());
var SignoutAction = /** @class */ (function () {
    function SignoutAction() {
        this.type = LayoutActionTypes.SIGNOUT;
    }
    return SignoutAction;
}());
var TitleChangedAction = /** @class */ (function () {
    /**
     * @param {?} title
     */
    function TitleChangedAction(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
    return TitleChangedAction;
}());
var OpenSecondSidenavAction = /** @class */ (function () {
    function OpenSecondSidenavAction() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
    return OpenSecondSidenavAction;
}());
var CloseSecondSidenavAction = /** @class */ (function () {
    function CloseSecondSidenavAction() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
    return CloseSecondSidenavAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: "",
    menuItems: []
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = initialState; }
    switch (action.type) {
        case LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            return Object.assign({}, state$$1, action.payload);
        case CLOSE_SIDENAV:
            return Object.assign({}, state$$1, { showMainSidenav: false });
        case OPEN_SIDENAV:
            return Object.assign({}, state$$1, { showMainSidenav: true });
        case LayoutActionTypes.TITLE_CHANGED:
            return Object.assign({}, state$$1, { title: action.title });
        case LayoutActionTypes.CHANGE_LAYOUT:
            return Object.assign({}, state$$1, { layoutMode: action.name });
        case LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return Object.assign({}, state$$1, { mainSideNavMode: action.mode });
        case LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return Object.assign({}, state$$1, { showSecondSideNav: false });
        case LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return Object.assign({}, state$$1, { showSecondSideNav: true });
        case LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return Object.assign({}, state$$1, { secondSideNavMode: action.mode });
        default:
            return state$$1;
    }
}
var /** @type {?} */ getTitle = function (state$$1) { return state$$1.title; };
var /** @type {?} */ getShowMainSidenav = function (state$$1) { return state$$1.showMainSidenav; };
var /** @type {?} */ getMainSideNavMode = function (state$$1) { return state$$1.mainSideNavMode; };
var /** @type {?} */ getLayoutMode = function (state$$1) { return state$$1.layoutMode; };
var /** @type {?} */ getShowSecondSidebarStatus = function (state$$1) { return state$$1.showSecondSideNav; };
var /** @type {?} */ getSecondSidebarMode = function (state$$1) { return state$$1.secondSideNavMode; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ToolbarActionTypes = {
    COMPORTABLE: "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT: "[Layout][TOOLBAR] COMPACT",
    SUMMARY: "[Layout][TOOLBAR] SUMMARY",
    ENABLE_COMFORTABLE_MODE: "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
    DISBALE_COMFORTABLE_MODE: "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
};
var ChangeToolbatToComfortableModeAction = /** @class */ (function () {
    function ChangeToolbatToComfortableModeAction() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
    return ChangeToolbatToComfortableModeAction;
}());
var ChangeToolbatToCompactModeAction = /** @class */ (function () {
    function ChangeToolbatToCompactModeAction() {
        this.type = ToolbarActionTypes.COMPACT;
    }
    return ChangeToolbatToCompactModeAction;
}());
var ChangeToolbatToSummaryModeAction = /** @class */ (function () {
    function ChangeToolbatToSummaryModeAction() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
    return ChangeToolbatToSummaryModeAction;
}());
var EnableComfortableModeAction = /** @class */ (function () {
    function EnableComfortableModeAction() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
    return EnableComfortableModeAction;
}());
var DisableComfortableModeAction = /** @class */ (function () {
    function DisableComfortableModeAction() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
    return DisableComfortableModeAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$1 = {
    mode: "compact",
    enableComfortableMode: false,
    comfortableModeHaveBeenDone: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer$1(state$$1, action) {
    if (state$$1 === void 0) { state$$1 = initialState$1; }
    switch (action.type) {
        case ToolbarActionTypes.COMPACT:
            return Object.assign({}, state$$1, { mode: "compact" });
        case ToolbarActionTypes.COMPORTABLE:
            return Object.assign({}, state$$1, { mode: state$$1.enableComfortableMode ? "comfortable" : "compact" });
        case ToolbarActionTypes.SUMMARY:
            return Object.assign({}, state$$1, { mode: "summary" });
        case ToolbarActionTypes.ENABLE_COMFORTABLE_MODE:
            return Object.assign({}, state$$1, { enableComfortableMode: true });
        case ToolbarActionTypes.DISBALE_COMFORTABLE_MODE:
            return Object.assign({}, state$$1, { mode: "compact", enableComfortableMode: false });
        default:
            return state$$1;
    }
}
var /** @type {?} */ getToolbarMode = function (state$$1) { return state$$1.mode; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LayoutReducers = {
    layout: Reducer,
    toolbar: Reducer$1
};
//#region selectors
var /** @type {?} */ selectLayoutState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("layout");
//#endregion
var /** @type {?} */ getLayout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLayoutState, function (state$$1) { return state$$1.layout; });
var /** @type {?} */ getTitle$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getTitle);
var /** @type {?} */ getShowMainSidenav$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getShowMainSidenav);
var /** @type {?} */ getMainSideNavMode$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getMainSideNavMode);
var /** @type {?} */ getLayoutMode$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getLayoutMode);
var /** @type {?} */ getShowSecondSidebarStatus$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getShowSecondSidebarStatus);
var /** @type {?} */ getSecondSidebarMode$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayout, getSecondSidebarMode);
//#region toolbar
var /** @type {?} */ getLayoutToolbar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLayoutState, function (state$$1) { return state$$1.toolbar; });
var /** @type {?} */ getLayoutToolbarMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutToolbar, getToolbarMode);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    //| "push" | "side",
    mainSideNavMode: "over",
    //| "push" | "side",
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "with-margin",
    // | "without-margin" | "default",
    title: "",
    menuItems: [
        {
            route: "/",
            icon: "multiline_chart",
            roles: ["Admin", "User"],
            title: "صفحه اصلی"
        },
        {
            route: "/configs",
            icon: "settings",
            roles: ["Admin"],
            title: "تنظیمات"
        },
        {
            route: "/source",
            icon: "device_hub",
            roles: ["Admin"],
            title: "آدرس سرویس ها"
        }
    ]
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("LayoutModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LayoutConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function LayoutConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_3__["getlayoutModuleConfig"]).subscribe(function (config) {
            if (!config)
                return;
            _this.store.dispatch(new UpdateLayoutConfigAction(config.Config));
            _this._config = Object.assign({}, _this._config, config.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(LayoutConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutConfigurationService;
}());
LayoutConfigurationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
LayoutConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }
]; };
/** @nocollapse */ LayoutConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LayoutConfigurationService_Factory() { return new LayoutConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(MODULE_CONFIG_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); }, token: LayoutConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainMenuComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} signinService
     * @param {?} configurationService
     */
    function MainMenuComponent(store, signinService, configurationService) {
        this.store = store;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.closeSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.routes = this.configurationService.config$.map(function (config) { return config.menuItems; });
    }
    return MainMenuComponent;
}());
MainMenuComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "ngs-layout-main-menu",
                template: "<mat-list class=\"main-menu-container\">\n  <div *ngIf=\"authenticated | async\">\n    <a *ngFor=\"let item of routes | async\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">\n      <mat-icon mat-list-icon>{{item.icon}}</mat-icon>\n      <span mdLine>{{item.title}}</span>\n    </a>\n  </div>\n</mat-list>",
                styles: [".active{background:rgba(0,0,0,.15)}.mat-list-item.active mat-icon{color:#0072ae}a.mat-list-item.child{margin-right:20px}#clearUserMenuItem{position:absolute;left:13px;top:13px}"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("childMenu", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            // transform: 'scale(1)',
                            height: "0px",
                            opacity: "0"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            // transform: 'scale(1.1)',
                            height: "48px",
                            opacity: "1"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("inactive => active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("100ms ease-in")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("active => inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("100ms ease-out"))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("menuItem", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            height: "48px"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            height: "100px"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("inactive => active", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("100ms ease-in")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("active => inactive", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("100ms ease-out"))
                    ])
                ]
            },] },
];
/** @nocollapse */
MainMenuComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] },
    { type: _soushians_authentication__WEBPACK_IMPORTED_MODULE_5__["SigninService"] },
    { type: LayoutConfigurationService }
]; };
MainMenuComponent.propDecorators = {
    closeSidebar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    authenticated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customerMobileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["customerMobileInput",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
    }
    /**
     * @return {?}
     */
    SearchBoxComponent.prototype.ngOnInit = function () {
    };
    return SearchBoxComponent;
}());
SearchBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'app-search-box',
                template: "<div class=\"search-box\">\n  <!--<td-search-box class=\"search-box-container\" backIcon=\"arrow_back\" placeholder=\"\u062C\u0633\u062A\u062C\u0648\" [showUnderline]=\"false\" [debounce]=\"500\" [alwaysVisible]=\"false\"\n                 (searchDebounce)=\"searchInputTerm = $event\" (search)=\"searchInputTerm = $event\" (clear)=\"searchInputTerm = ''\">\n  </td-search-box>-->\n</div>",
                styles: [""]
            },] },
];
/** @nocollapse */
SearchBoxComponent.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoContainerComponent = /** @class */ (function () {
    /**
     * @param {?} sdf
     */
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    return LogoContainerComponent;
}());
LogoContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "app-logo-container",
                template: "<div id=\"background\"></div>\n  <img class=\"shatelLogoAnimation\" routerLink='/' src='../../../assets/images/shatel-logo.png' />\n<!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                styles: [".shatelLogoAnimation{height:35px;cursor:pointer;z-index:2}#background{position:absolute;top:0;right:0;width:300px;height:70px}"]
            },] },
];
/** @nocollapse */
LogoContainerComponent.ctorParameters = function () { return [
    { type: LayoutConfigurationService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToolbarMenuComponent = /** @class */ (function () {
    /**
     * @param {?} document
     * @param {?} _location
     * @param {?} store
     * @param {?} configurationService
     */
    function ToolbarMenuComponent(document, _location, store, configurationService) {
        var _this = this;
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.store.dispatch(new ChangeToolbatToComfortableModeAction());
        this.config$ = this.store.select(getLayoutToolbar);
        this.config$.subscribe(function (config) { return (_this.config = config); });
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        this.menuItems$ = this.configurationService.config$.map(function (config) { return config.menuItems; });
        Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.document.body, "scroll").subscribe(function () {
            var /** @type {?} */ scrolledAmount = _this.document.body.scrollTop;
            var /** @type {?} */ scrollToTop = scrolledAmount - _this.lastScroll < 0 && _this.document.body.scrollHeight - scrolledAmount < 100;
            // let scrollToTop = scrolledAmount - this.lastScroll < 0;
            _this.lastScroll = _this.document.body.scrollTop;
            if (scrolledAmount == 0) {
                if (_this.config.mode == "comfortable")
                    return;
                _this.store.dispatch(new ChangeToolbatToComfortableModeAction());
            }
            else if (scrolledAmount < 128 || scrollToTop) {
                if (_this.config.mode == "compact")
                    return;
                _this.store.dispatch(new ChangeToolbatToCompactModeAction());
            }
            else {
                if (_this.config.mode == "summary")
                    return;
                _this.store.dispatch(new ChangeToolbatToSummaryModeAction());
            }
        });
    }
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.onWindowScroll = function () {
        // of(1)
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.signout = function () {
        this.store.dispatch(new SignoutAction());
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.goback = function () {
        this._location.back();
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleSecondSidebar = function () {
        var /** @type {?} */ action;
        this.showSecondSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    };
    /**
     * @return {?}
     */
    ToolbarMenuComponent.prototype.toggleMainSidebar = function () {
        var /** @type {?} */ action;
        this.showMainSidenav.subscribe(function (state$$1) {
            action = state$$1 ? new CloseSidenavAction() : new OpenSidenavAction();
        });
        this.store.dispatch(action);
    };
    return ToolbarMenuComponent;
}());
ToolbarMenuComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "layout-toolbar",
                template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState | async\">\n  <mat-toolbar-row>\n    <app-logo-container fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-logo-container>\n\n    <button type=\"button\" *ngIf='showSidebarMenu' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span id='app-name'>\n      {{app_config?.Config.AppTitle}}\n    </span>\n    <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>\n    <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>\n    \n    <button *ngIf=\"!user.DisplayName\" mat-button routerLink=\"auth/signin\">\n      \u0648\u0631\u0648\u062F\n    </button>\n    <button *ngIf=\"user.DisplayName\" mat-button [matMenuTriggerFor]=\"toolbarMenu1\">\n      <mat-icon>account_circle</mat-icon>\n      <span>\n        {{user?.DisplayName}}\n      </span>\n    </button>\n    <mat-menu #toolbarMenu1>\n      <button routerLink='/user/panel' mat-menu-item>\n        <mat-icon>fingerprint</mat-icon>\n        <span>\n          \u0645\u062F\u06CC\u0631\u06CC\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC\n        </span>\n      </button>\n      <button (click)='signout()' mat-menu-item>\n        <mat-icon>exit_to_app</mat-icon>\n        <span>\u062E\u0631\u0648\u062C</span>\n      </button>\n    </mat-menu>\n    <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">\n      <mat-icon>notifications</mat-icon>\n    </button>\n    <button mat-icon-button (click)='goback()'>\n      <mat-icon>arrow_back</mat-icon>\n    </button>\n    \n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <button mat-button \n    *ngFor=\"let menu of menuItems$ | async\"\n    routerLinkActive=\"active\"\n    [routerLink]=\"[menu.route]\" \n    >\n    <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->\n    <span>{{menu.title}}</span>\n  </button>\n</mat-toolbar-row>\n</mat-toolbar>",
                styles: [""],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("toolbarAnimation", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("comfortable", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            backgroundColor: "rgba(119,181,63,1)",
                            color: "rgba(256,256,256,1)",
                            height: "33vh",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("compact", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "0",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])("summary", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            backgroundColor: "rgba(256,256,256,1)",
                            height: "128px",
                            top: "-64px",
                            boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("comfortable => compact", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-in")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("comfortable => summary", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-in")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("summary => compact", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-out")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("summary => comfortable", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-out")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("compact => comfortable", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-out")),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])("compact => summary", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])("400ms ease-in"))
                    ])
                ]
            },] },
];
/** @nocollapse */
ToolbarMenuComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] },
    { type: LayoutConfigurationService }
]; };
ToolbarMenuComponent.propDecorators = {
    showSidebarMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    app_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["app-config",] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["body:scroll", [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "app-footer",
                template: "<div fxLayoutAlign=\"center center\" class=\"footer-text\">\n    {{app_config?.Config.FooterCopyright}}\n</div>",
                styles: [":host{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #e5e5e5;padding:8px;overflow:hidden}.footer-text{position:relative;top:12px}"]
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = function () { return []; };
FooterComponent.propDecorators = {
    app_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["app-config",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TitleComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} router
     */
    function TitleComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.mapper = [];
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
        // });
        this.title$ = this.store.select(getTitle$1);
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]) {
                var /** @type {?} */ title = "";
                _this.mapper.forEach(function (mapper) {
                    var /** @type {?} */ res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                _this.store.dispatch(new TitleChangedAction("/ " + title || ""));
            }
        });
    }
    return TitleComponent;
}());
TitleComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'app-title',
                template: "<div id=\"title\">\n    {{title$ | async}}\n</div>",
                styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
            },] },
];
/** @nocollapse */
TitleComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} router
     */
    function MainComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.showSidebarMenu = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](true);
        this.width = 100;
        this.store.dispatch(new ChangeSideNavMode("push"));
        this.user$ = this.store.select(function (s) { return ((s)).user.user.data; });
        this.user$.subscribe(function (data) {
            debugger;
        });
        this.showMainSidenav = this.store.select(getShowMainSidenav$1);
        this.mainSidenavMode = this.store.select(getMainSideNavMode$1);
        this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);
        //#region manage second sidebar
        this.store.dispatch(new ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus$1);
        this.secondSidenavMode = this.store.select(getSecondSidebarMode$1);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(getLayoutMode$1);
        this.router.events.filter(function (data) { return data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"]; }).subscribe(function (event) {
            var /** @type {?} */ hideSituations = [
                ((event)).urlAfterRedirects == "/auth/signin",
                ((event)).urlAfterRedirects == "/auth/signup/register",
                ((event)).urlAfterRedirects == "/auth/signup/verification",
                ((event)).urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(function (i) { return i; }))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        });
        this.layoutMode.subscribe(function (mode) {
            if (!_this.mainSideNav)
                return;
            ((_this.mainSideNav.nativeElement)).className = "";
            ((_this.mainSideNav.nativeElement)).classList.add(mode);
        });
    }
    /**
     * @return {?}
     */
    MainComponent.prototype.onSecondSidebarClosedStart = function () {
        this.store.dispatch(new CloseSecondSidenavAction());
    };
    /**
     * @return {?}
     */
    MainComponent.prototype.onSidebarClosedStart = function () {
        this.store.dispatch(new CloseSidenavAction());
    };
    return MainComponent;
}());
MainComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: "layout-main",
                template: "<div #mainSideNav [className]=\"toolbarAnimationState | async\">\n  <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->\n  <layout-toolbar [user]=\"user$ | async\" [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>\n  \n  <mat-sidenav-container id=\"layout-sidnav\">\n    <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">\n      <mat-nav-list>\n        <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>\n      </mat-nav-list>\n    </mat-sidenav>\n    <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"\n      position=\"end\" #second_sidebar class=\"second_sidebar\">\n      <mat-nav-list fxLayout='column'>\n      </mat-nav-list>\n    </mat-sidenav> -->\n    <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>\n      <div fxFlex='0 0 100'>\n        <router-outlet></router-outlet>\n        <router-outlet name=\"footer_A\"></router-outlet>\n        <router-outlet name=\"footer_B\"></router-outlet>\n        <footer>\n          <app-footer [app-config]=\"app_config\"></app-footer>\n        </footer>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>",
                styles: ["#purchase-fab-button{position:fixed;bottom:23px;left:31px}md-progress-bar{position:absolute!important}.with-margin #app-main-container{margin-top:25px;padding-right:25px;padding-left:25px}.second_sidebar{width:380px}.more-detail{margin:8px;box-sizing:border-box;padding:10px;text-align:center;width:96%;border:1px solid #dedede;outline:0;cursor:pointer;transition:all .3s ease}.more-detail:hover{background:#eee}"]
            },] },
];
/** @nocollapse */
MainComponent.ctorParameters = function () { return [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
]; };
MainComponent.propDecorators = {
    app_config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ["app-config",] }],
    mainSideNav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["mainSideNav",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsLayoutModule = /** @class */ (function () {
    function NgsLayoutModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsLayoutModule.forRoot = function (config) {
        return {
            ngModule: RootNgsLayoutModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsLayoutModule;
}());
NgsLayoutModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _soushians_config__WEBPACK_IMPORTED_MODULE_3__["NgsConfigModule"]
                ],
                declarations: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ],
                exports: [
                    MainMenuComponent,
                    SearchBoxComponent,
                    LogoContainerComponent,
                    ToolbarMenuComponent,
                    FooterComponent,
                    TitleComponent,
                    MainComponent
                ]
            },] },
];
var RootNgsLayoutModule = /** @class */ (function () {
    function RootNgsLayoutModule() {
    }
    return RootNgsLayoutModule;
}());
RootNgsLayoutModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [NgsLayoutModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forFeature("layout", LayoutReducers)],
                exports: [NgsLayoutModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=soushians-layout.js.map


/***/ }),

/***/ "./dist/@soushians/shared/fesm5/soushians-shared.js":
/*!**********************************************************!*\
  !*** ./dist/@soushians/shared/fesm5/soushians-shared.js ***!
  \**********************************************************/
/*! exports provided: SharedModule, HttpResponseBaseModel, HttpRequestBaseModel, PERSIAN_MONTH_DAYS_COUNT, PERSIAN_MONTH_NAMES, DateClass, UtilityService, stringTemplate, MatchValidator, ɵd, ɵa, ɵc, ɵe, ɵf, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBaseModel", function() { return HttpResponseBaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestBaseModel", function() { return HttpRequestBaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSIAN_MONTH_DAYS_COUNT", function() { return PERSIAN_MONTH_DAYS_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSIAN_MONTH_NAMES", function() { return PERSIAN_MONTH_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateClass", function() { return DateClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringTemplate", function() { return stringTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchValidator", function() { return MatchValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CurrencyUnitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DataUnitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return PersianDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return PersianNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return TimeCounterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TimeUnitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataUnitPipe = /** @class */ (function () {
    function DataUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    DataUnitPipe.prototype.transform = function (value, exponent) {
        if (value == 0)
            return "0 بایت";
        if (value == null)
            return "نامحدود";
        var /** @type {?} */ B = 1;
        var /** @type {?} */ KB = B * 1024;
        var /** @type {?} */ MB = KB * 1024;
        var /** @type {?} */ GB = MB * 1024;
        var /** @type {?} */ convertedValue;
        var /** @type {?} */ suffix = "بایت";
        if (value >= GB) {
            suffix = "گیگا بایت";
            convertedValue = (value / GB).toFixed(2);
        }
        else if (value >= MB) {
            suffix = "مگا بایت";
            convertedValue = (value / MB).toFixed(2);
        }
        else if (value >= KB) {
            suffix = "کیلو بایت";
            convertedValue = (value / KB).toFixed(2);
        }
        else {
            suffix = "بایت";
            convertedValue = value.toFixed(2);
        }
        return convertedValue + " " + suffix;
    };
    return DataUnitPipe;
}());
DataUnitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "dataUnit" },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getDays = function (value) {
        var /** @type {?} */ rate = 60 * 60 * 24;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' روز',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getHours = function (value) {
        var /** @type {?} */ rate = 60 * 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getMinuts = function (value) {
        var /** @type {?} */ rate = 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeUnitPipe.prototype.getSeconds = function (value) {
        var /** @type {?} */ count = Math.floor((value));
        return {
            count: count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    };
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    TimeUnitPipe.prototype.transform = function (value, exponent) {
        if (value === 0)
            return '0 دقیقه';
        if (!value)
            return '';
        var /** @type {?} */ connector = ' و ';
        var /** @type {?} */ daysData = this.getDays(value);
        var /** @type {?} */ hoursData = this.getHours(daysData.remaining);
        var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        // let secondssData = this.getSeconds(minutsData.remaining);
        return [daysData, hoursData, minutsData]
            .filter(function (i) { return i.count; })
            .map(function (i) { return i.value; }).join(connector);
    };
    return TimeUnitPipe;
}());
TimeUnitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'timeUnit' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PersianDatePipe = /** @class */ (function () {
    function PersianDatePipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    PersianDatePipe.prototype.transform = function (value, exponent) {
        if (!value)
            return "";
        var /** @type {?} */ date = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
        debugger;
        var /** @type {?} */ persianDate = _.date.georgian.to.persian(date.getFullYear(), date.getMonth() + 1, date.getDate());
        return [
            parseInt(persianDate[0]).toLocaleString("fa-IR", { useGrouping: false }),
            parseInt(persianDate[1]).toLocaleString("fa-IR", { useGrouping: false }),
            parseInt(persianDate[2]).toLocaleString("fa-IR", { useGrouping: false })
        ].join("/");
    };
    return PersianDatePipe;
}());
PersianDatePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: "persianDate" },] },
];
var ɵ0 = function (_) {
    var /** @type {?} */ is = function (node, selector) {
        if (node.matches)
            return node.matches(selector);
        var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
        return nodes.indexOf(node) > -1 ? true : false;
    };
    is.object = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Object]";
    };
    is.nodeList = function (obj) {
        if (_.is.not.ie())
            return Object.prototype.toString.call(obj) === "[object NodeList]";
        else
            return (obj.length !== undefined &&
                obj.push === undefined &&
                (obj.length > 0 ? obj[0].tagName !== undefined : true));
    };
    is.element = function (obj) {
        return Object.prototype.toString.call(obj).search("Element") > -1;
        //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
    };
    is.HTMLCollection = function (obj) {
        return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
    };
    is.array = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Array]";
    };
    is.number = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Number]";
    };
    is["function"] = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Function]";
    };
    is.string = function (_var) {
        return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
    };
    is.undefined = function (_var) {
        return Object.prototype.toString.call(_var) === "[object Undefined]";
    };
    is.event = function (_var) {
        return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
    };
    is.defined = function (_var) {
        //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
        return _var !== undefined && _var !== null && _var !== "";
    };
    is.json = function () { };
    is.error = function () { };
    is.startWith = function (str, prefix) {
        return str.indexOf(prefix) === 0;
    };
    is.endWith = function (str) { };
    is.value = function (_var) {
        return _var ? true : false;
    };
    is.empty = function (o) {
        if (_.is.object(0))
            for (var /** @type {?} */ i in o)
                if (o.hasOwnProperty(i))
                    return false;
        if (_.is.array(o))
            return o.length === 0;
        return true;
    };
    is.truthy = function () { };
    is.scalar = function (_var) {
        //TODO : improve
        return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
    };
    is.prototypeProp = function (obj, prop) {
        return obj[prop] && !obj.hasOwnProperty(prop);
    };
    is.equal = function (fv, sv) {
        //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
        //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
        return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
    };
    is.equalText = function (fv, sv) {
        return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
    };
    is.closet = function (fo, so) {
        return _.is.equal(_.partial(fo, _.report.skeleton(so)), so);
    };
    is.contain = function (str, searchStr) {
        var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
        return str.match(reg) && str.match(reg).length > 0;
    };
    is.regex = function (r) {
        return r.constructor.name === "RegExp";
    };
    is.same = function (fv, sv) {
        //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
        //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
        return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
    };
    is.persianLeapYear = function (year) {
        return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
    };
    is.georgianLeapYear = function (year) {
        return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
    };
    var /** @type {?} */ not = {};
    var /** @type {?} */ i;
    for (i in is)
        (function (i) {
            if (is.hasOwnProperty(i))
                not[i] = function (a, b, c) {
                    return !is[i](a, b, c);
                };
        })(i);
    is.not = not;
    //TODO : impelement
    var /** @type {?} */ all = {};
    for (i in is)
        (function (i) {
            if (is.hasOwnProperty(i))
                all[i] = function (o) { };
        })(i);
    is.all = all;
    var /** @type {?} */ any = {};
    for (var /** @type {?} */ j in is)
        (function (j) {
            if (is.hasOwnProperty(j))
                any[j] = function (o) { };
        })(j);
    is.any = any;
    return is;
}, ɵ1 = function () {
    var /** @type {?} */ math = {};
    math.mod = function (a, b) {
        return a - b * Math.floor(a / b);
    };
    return math;
}, ɵ2 = function () {
    var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
    var /** @type {?} */ date = {};
    date.persian = {};
    date.persian.to = {};
    date.georgian = {};
    date.georgian.to = {};
    date.julian = {};
    date.julian.to = {};
    var /** @type {?} */ insertZero = function (i) {
        i = i.toString();
        return i.length == 1 ? "0" + i : i;
    };
    date.persian.to.julian = function (year, month, day) {
        var /** @type {?} */ epbase, /** @type {?} */ epyear;
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        epbase = year - (year >= 0 ? 474 : 473);
        epyear = 474 + _.math.mod(epbase, 2820);
        return (day +
            (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
            Math.floor((epyear * 682 - 110) / 2816) +
            (epyear - 1) * 365 +
            Math.floor(epbase / 2820) * 1029983 +
            (PERSIAN_EPOCH - 1));
    };
    date.persian.to.georgian = function (year, month, day, joinCharacter) {
        var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year), parseInt(month) + 1, parseInt(day)));
        return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
    };
    date.georgian.to.julian = function (year, month, day) {
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        return (GREGORIAN_EPOCH -
            1 +
            365 * (year - 1) +
            Math.floor((year - 1) / 4) +
            -Math.floor((year - 1) / 100) +
            Math.floor((year - 1) / 400) +
            Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
    };
    date.georgian.to.persian = function (year, month, day, joinCharacter) {
        var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year), parseInt(month), parseInt(day)));
        return joinCharacter ? dateArray.join(joinCharacter) : dateArray;
    };
    date.julian.to.georgian = function (jd) {
        var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
        jd = parseFloat(jd);
        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = _.math.mod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = _.math.mod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = _.math.mod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
        if (!(cent == 4 || yindex == 4)) {
            year++;
        }
        yearday = wjd - _.date.georgian.to.julian(year, 1, 1);
        leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
        month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
        day = wjd - _.date.georgian.to.julian(year, month, 1) + 1;
        return new Array(insertZero(year), insertZero(month), insertZero(day));
    };
    date.julian.to.persian = function (jd) {
        var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
        jd = parseFloat(jd);
        jd = Math.floor(jd) + 0.5;
        depoch = jd - _.date.persian.to.julian(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = _.math.mod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        }
        else {
            aux1 = Math.floor(cyear / 366);
            aux2 = _.math.mod(cyear, 366);
            ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
        }
        year = ycycle + 2820 * cycle + 474;
        if (year <= 0) {
            year--;
        }
        yday = jd - _.date.persian.to.julian(year, 1, 1) + 1;
        month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = jd - _.date.persian.to.julian(year, month, 1) + 1;
        return new Array(insertZero(year), insertZero(month), insertZero(day));
    };
    return date;
};
var /** @type {?} */ _ = {
    is: (ɵ0)(undefined),
    math: (ɵ1)(),
    date: (ɵ2)()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CurrencyUnitPipe = /** @class */ (function () {
    function CurrencyUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    CurrencyUnitPipe.prototype.transform = function (value, exponent) {
        if (!value && value != 0)
            return '';
        else if (value == 0)
            return 'رایگان';
        var /** @type {?} */ suffix = 'ریال';
        return [value.toLocaleString('fa-IR'), suffix].join(' ');
    };
    return CurrencyUnitPipe;
}());
CurrencyUnitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'currencyUnit' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PersianNumberPipe = /** @class */ (function () {
    function PersianNumberPipe() {
    }
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    PersianNumberPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var /** @type {?} */ res = '';
        for (var /** @type {?} */ index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }
        return res;
    };
    return PersianNumberPipe;
}());
PersianNumberPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'persianNumber' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeCounterPipe = /** @class */ (function () {
    function TimeCounterPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getHours = function (value) {
        var /** @type {?} */ rate = 60 * 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' ساعت',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getMinuts = function (value) {
        var /** @type {?} */ rate = 60;
        var /** @type {?} */ count = Math.floor(value / rate);
        return {
            count: count,
            value: count + ' دقیقه',
            remaining: value - count * rate
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimeCounterPipe.prototype.getSeconds = function (value) {
        var /** @type {?} */ count = Math.floor((value));
        return {
            count: count,
            value: count + ' ثانیه',
            remaining: value - count
        };
    };
    /**
     * @param {?} value
     * @param {?} exponent
     * @return {?}
     */
    TimeCounterPipe.prototype.transform = function (value, exponent) {
        if (!value)
            return '';
        var /** @type {?} */ connector = ' : ';
        // let daysData = this.getDays(value);
        var /** @type {?} */ hoursData = this.getHours(value);
        var /** @type {?} */ minutsData = this.getMinuts(hoursData.remaining);
        var /** @type {?} */ secondssData = this.getSeconds(minutsData.remaining);
        return [secondssData, minutsData, hoursData]
            .map(function (i) { return i.count; }).join(connector);
    };
    return TimeCounterPipe;
}());
TimeCounterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'timeCounter' },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe],
                // declarations: [ DataUnitPipe ]
                exports: [DataUnitPipe, TimeUnitPipe, PersianDatePipe, CurrencyUnitPipe, PersianNumberPipe, TimeCounterPipe]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var HttpResponseBaseModel = /** @class */ (function () {
    function HttpResponseBaseModel() {
    }
    return HttpResponseBaseModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var HttpRequestBaseModel = /** @class */ (function () {
    function HttpRequestBaseModel() {
    }
    return HttpRequestBaseModel;
}());

var /** @type {?} */ PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30];
var /** @type {?} */ PERSIAN_MONTH_NAMES = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
var DateClass = /** @class */ (function () {
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     */
    function DateClass(year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    }
    /**
     * @param {?=} seprator
     * @return {?}
     */
    DateClass.prototype.fullDate = function (seprator) {
        if (seprator === void 0) { seprator = "/"; }
        return [this.year, this.month, this.date].join(seprator);
    };
    /**
     * @return {?}
     */
    DateClass.prototype.nativeDate = function () {
        return new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.date));
    };
    return DateClass;
}());
var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.is = (function (_, undefined) {
            var /** @type {?} */ is = function (node, selector) {
                if (node.matches)
                    return node.matches(selector);
                var /** @type {?} */ nodes = this.argToArray(node.parentNode.querySelectorAll(selector));
                return nodes.indexOf(node) > -1 ? true : false;
            };
            is.object = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Object]";
            };
            is.nodeList = function (obj) {
                if (_.is.not.ie())
                    return Object.prototype.toString.call(obj) === "[object NodeList]";
                else
                    return (obj.length !== undefined &&
                        obj.push === undefined &&
                        (obj.length > 0 ? obj[0].tagName !== undefined : true));
            };
            is.element = function (obj) {
                return Object.prototype.toString.call(obj).search("Element") > -1;
                //return !!Object.prototype.toString.call(_var).toLowerCase().search('element');;
            };
            is.HTMLCollection = function (obj) {
                return Object.prototype.toString.call(obj) === "[object HTMLCollection]";
            };
            is.array = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Array]";
            };
            is.number = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Number]";
            };
            is["function"] = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Function]";
            };
            is.string = function (_var) {
                return Object.prototype.toString.call(_var) === "[object String]"; //&& ((isEmpty));
            };
            is.undefined = function (_var) {
                return Object.prototype.toString.call(_var) === "[object Undefined]";
            };
            is.event = function (_var) {
                return Object.prototype.toString.call(_var).toLowerCase().search("event") > -1;
            };
            is.defined = function (_var) {
                //return Object.prototype.toString.call(_var) !== '[object Undefined]' && Object.prototype.toString.call(_var) !== '[object Null]' && Object !== '';
                return _var !== undefined && _var !== null && _var !== "";
            };
            is.json = function () { };
            is.error = function () { };
            is.startWith = function (str, prefix) {
                return str.indexOf(prefix) === 0;
            };
            is.endWith = function (str) { };
            is.value = function (_var) {
                return _var ? true : false;
            };
            is.empty = function (o) {
                if (_.is.object(0))
                    for (var /** @type {?} */ i in o)
                        if (o.hasOwnProperty(i))
                            return false;
                if (_.is.array(o))
                    return o.length === 0;
                return true;
            };
            is.truthy = function () { };
            is.scalar = function (_var) {
                //TODO : improve
                return is.defined(_var) && is.not.array(_var) && is.not.object(_var) && is.not["function"](_var);
            };
            is.prototypeProp = function (obj, prop) {
                return obj[prop] && !obj.hasOwnProperty(prop);
            };
            is.equal = function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return JSON.stringify(fv) == JSON.stringify(sv) ? true : false;
            };
            is.equalText = function (fv, sv) {
                return fv.toLowerCase(fv) === sv.toLowerCase(sv) ? true : false;
            };
            is.contain = function (str, searchStr) {
                var /** @type {?} */ reg = _.is.regex(searchStr) ? searchStr : new RegExp(searchStr, "g");
                return str.match(reg) && str.match(reg).length > 0;
            };
            is.regex = function (r) {
                return r.constructor.name === "RegExp";
            };
            is.same = function (fv, sv) {
                //if (!fv) that.warn('equal function :' + fv + ' is Not Object');
                //if (!sv) that.warn('equal function :' + sv + ' is Not Object');
                return fv.isEqualNode ? fv.isEqualNode(sv) : fv === sv;
            };
            is.persianLeapYear = function (year) {
                return (((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682) % 2816 < 682;
            };
            is.georgianLeapYear = function (year) {
                return year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0);
            };
            var /** @type {?} */ not = {};
            var /** @type {?} */ i;
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        not[i] = function (a, b, c) {
                            return !is[i](a, b, c);
                        };
                })(i);
            is.not = not;
            //TODO : impelement
            var /** @type {?} */ all = {};
            for (i in is)
                (function (i) {
                    if (is.hasOwnProperty(i))
                        all[i] = function (o) { };
                })(i);
            is.all = all;
            var /** @type {?} */ any = {};
            for (var /** @type {?} */ j in is)
                (function (j) {
                    if (is.hasOwnProperty(j))
                        any[j] = function (o) { };
                })(j);
            is.any = any;
            return is;
        })(this);
        this.math = (function (_) {
            var /** @type {?} */ math = {};
            math.mod = function (a, b) {
                return a - b * Math.floor(a / b);
            };
            return math;
        })(this);
        this.date = (function (_) {
            var /** @type {?} */ PERSIAN_EPOCH = 1948320.5, /** @type {?} */ GREGORIAN_EPOCH = 1721425.5;
            var /** @type {?} */ date = {
                persian: {
                    PERSIAN_MONTH_DAYS_COUNT: [],
                    now: function () { return null; },
                    create: function (y, m, d) { return null; },
                    getDaysOfoMonth: function (idx) { return null; },
                    getDayOfWeek: function (y, m, d) { return null; },
                    foretimeMonthOfYear: function () { return []; },
                    to: {
                        georgian: function () { return null; },
                        julian: function () { return null; }
                    }
                },
                julian: {
                    to: {
                        georgian: function () { return null; },
                        persian: function () { return null; }
                    }
                },
                georgian: {
                    // getFutureDate: (n: number) => null,
                    now: function () { return null; },
                    getRelativeDay: function (n) { return null; },
                    parse: function (date) { return null; },
                    to: {
                        persian: function () { return null; },
                        julian: function () { return null; }
                    }
                },
                as: {
                    Date: function () { return null; }
                }
            };
            // date.persian = {};
            // date.persian.to = {};
            // date.georgian = {};
            // date.georgian.to = {};
            // date.julian = {};
            // date.julian.to = {};
            // date.as = {};
            date.as.Date = function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 3), y = _b[0], m = _b[1], d = _b[2];
                return new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
            };
            var /** @type {?} */ insertZero = function (i) {
                i = i.toString();
                return i.length == 1 ? "0" + i : i;
            };
            date.persian.PERSIAN_MONTH_DAYS_COUNT = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30];
            date.persian.now = function () {
                var /** @type {?} */ now = new Date();
                return date.georgian.to.persian(now.getFullYear(), now.getMonth(), now.getDate());
            };
            date.persian.create = function (y, m, d) { return new DateClass(y, m, d); };
            date.persian.getDaysOfoMonth = function (idx) {
                var /** @type {?} */ count = PERSIAN_MONTH_DAYS_COUNT[idx];
                var /** @type {?} */ res = [];
                for (var /** @type {?} */ i = 1; i < count + 1; i++) {
                    var /** @type {?} */ dayName = i < 10 ? "0" + i : i.toString();
                    res.push(dayName);
                }
                return res;
            };
            date.persian.getDayOfWeek = function (y, m, d) {
                var /** @type {?} */ persianHoliday = date.persian.create("1396", "1", "1");
                var /** @type {?} */ persianHolidayInGeorgian = date.persian.to.georgian("1396", "1", "1").nativeDate();
                var /** @type {?} */ month = +m - 1;
                var /** @type {?} */ day = +d;
                var /** @type {?} */ daysOfYear = PERSIAN_MONTH_DAYS_COUNT.reduce(function (a, b, idx) {
                    if (idx == month)
                        return a + day;
                    if (idx > month)
                        return a;
                    return a + b;
                });
                return (daysOfYear + persianHolidayInGeorgian.getDay() - 1) % 7;
            };
            date.persian.foretimeMonthOfYear = function () {
                return PERSIAN_MONTH_NAMES.filter(function (item, idx) { return idx <= +date.persian.now().month - 1; });
            };
            date.persian.to.julian = function (year, month, day) {
                var /** @type {?} */ epbase, /** @type {?} */ epyear;
                year = parseInt(year.toString());
                month = parseInt(month.toString());
                day = parseInt(day.toString());
                epbase = year - (year >= 0 ? 474 : 473);
                epyear = 474 + _.math.mod(epbase, 2820);
                return (day +
                    (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) +
                    Math.floor((epyear * 682 - 110) / 2816) +
                    (epyear - 1) * 365 +
                    Math.floor(epbase / 2820) * 1029983 +
                    (PERSIAN_EPOCH - 1));
            };
            date.persian.to.georgian = function (year, month, day) {
                var /** @type {?} */ dateArray = date.julian.to.georgian(date.persian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], parseInt(dateArray[1]), dateArray[2]);
            };
            date.georgian.parse = function (date) { return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate()); };
            date.georgian.to.julian = function (year, month, day) {
                year = parseInt(year.toString());
                month = parseInt(month.toString()) + 1;
                day = parseInt(day.toString());
                return (GREGORIAN_EPOCH -
                    1 +
                    365 * (year - 1) +
                    Math.floor((year - 1) / 4) +
                    -Math.floor((year - 1) / 100) +
                    Math.floor((year - 1) / 400) +
                    Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : _.is.georgianLeapYear(year) ? -1 : -2) + day));
            };
            date.georgian.to.persian = function (year, month, day) {
                var /** @type {?} */ dateArray = date.julian.to.persian(date.georgian.to.julian(parseInt(year.toString()), parseInt(month.toString()), parseInt(day.toString())));
                return new DateClass(dateArray[0], dateArray[1], dateArray[2]);
            };
            // date.georgian.getFutureDate = function (n) {
            //     var now = new Date();
            //     return new Date(now.getFullYear(), now.getMonth(), now.getDate() + n);
            // }
            date.georgian.now = function () {
                var /** @type {?} */ now = new Date();
                return new DateClass(now.getFullYear(), now.getMonth() + 1, now.getDate());
            };
            (date.georgian.getRelativeDay = function (n) {
                var /** @type {?} */ date = new Date(Date.now() + -1 * n * 24 * 60 * 60 * 1000);
                debugger;
                return new DateClass(date.getFullYear(), date.getMonth() + 1, date.getDate());
            }),
                (date.julian.to.georgian = function (jd) {
                    var /** @type {?} */ wjd, /** @type {?} */ depoch, /** @type {?} */ quadricent, /** @type {?} */ dqc, /** @type {?} */ cent, /** @type {?} */ dcent, /** @type {?} */ quad, /** @type {?} */ dquad, /** @type {?} */ yindex, /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ yearday, /** @type {?} */ leapadj;
                    jd = parseFloat(jd.toString());
                    wjd = Math.floor(jd - 0.5) + 0.5;
                    depoch = wjd - GREGORIAN_EPOCH;
                    quadricent = Math.floor(depoch / 146097);
                    dqc = _.math.mod(depoch, 146097);
                    cent = Math.floor(dqc / 36524);
                    dcent = _.math.mod(dqc, 36524);
                    quad = Math.floor(dcent / 1461);
                    dquad = _.math.mod(dcent, 1461);
                    yindex = Math.floor(dquad / 365);
                    year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
                    if (!(cent == 4 || yindex == 4)) {
                        year++;
                    }
                    yearday = wjd - _.date.georgian.to.julian(year, 0, 1);
                    leapadj = wjd < _.date.georgian.to.julian(year, 3, 1) ? 0 : _.is.georgianLeapYear(year) ? 1 : 2;
                    month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
                    day = wjd - _.date.georgian.to.julian(year, month - 1, 1) + 1;
                    return new Array(insertZero(year), insertZero(month), insertZero(day));
                });
            date.julian.to.persian = function (jd) {
                var /** @type {?} */ year, /** @type {?} */ month, /** @type {?} */ day, /** @type {?} */ depoch, /** @type {?} */ cycle, /** @type {?} */ cyear, /** @type {?} */ ycycle, /** @type {?} */ aux1, /** @type {?} */ aux2, /** @type {?} */ yday;
                jd = parseFloat(jd.toString());
                jd = Math.floor(jd) + 0.5;
                depoch = jd - _.date.persian.to.julian(475, 1, 1);
                cycle = Math.floor(depoch / 1029983);
                cyear = _.math.mod(depoch, 1029983);
                if (cyear == 1029982) {
                    ycycle = 2820;
                }
                else {
                    aux1 = Math.floor(cyear / 366);
                    aux2 = _.math.mod(cyear, 366);
                    ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
                }
                year = ycycle + 2820 * cycle + 474;
                if (year <= 0) {
                    year--;
                }
                yday = jd - _.date.persian.to.julian(year, 1, 1) + 1;
                month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
                day = jd - _.date.persian.to.julian(year, month, 1) + 1;
                return new Array(insertZero(year), insertZero(month), insertZero(day));
            };
            return date;
        })(this);
    }
    return UtilityService;
}());
UtilityService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */ UtilityService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ stringTemplate = function (template, model) {
    return eval('`' + template + '`');
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} destination
 * @return {?}
 */
function MatchValidator(destination) {
    return function (control) {
        if (!control.root.value)
            return;
        var /** @type {?} */ destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=soushians-shared.js.map


/***/ }),

/***/ "./dist/@soushians/socket/fesm5/soushians-socket.js":
/*!**********************************************************!*\
  !*** ./dist/@soushians/socket/fesm5/soushians-socket.js ***!
  \**********************************************************/
/*! exports provided: NgsSocketModule, NgsSocketRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, SocketActionTypes, SocketRunSuccessfullyAction, SocketInitialazationFailedAction, SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsSocketModule", function() { return NgsSocketModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsSocketRootModule", function() { return NgsSocketRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketActionTypes", function() { return SocketActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketRunSuccessfullyAction", function() { return SocketRunSuccessfullyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketInitialazationFailedAction", function() { return SocketInitialazationFailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/dist/socket.io.slim.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    development_uri: "http://localhost:3000",
    production_uri: "",
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("SocketModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SocketConfigurationService = /** @class */ (function () {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    function SocketConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_3__["getSocketModuleConfig"]).subscribe(function (userConfig) {
            if (!userConfig) {
                return;
            }
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(SocketConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return SocketConfigurationService;
}());
SocketConfigurationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
SocketConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
var SocketRunSuccessfullyAction = /** @class */ (function () {
    function SocketRunSuccessfullyAction() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
    return SocketRunSuccessfullyAction;
}());
var SocketInitialazationFailedAction = /** @class */ (function () {
    function SocketInitialazationFailedAction() {
        this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
    }
    return SocketInitialazationFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// import * as socketIo from "socket.io-client";
// const socketIo = require("socket.io-client");
// tslint:disable-next-line:no-debugger
debugger;
var /** @type {?} */ io = socket_io_client__WEBPACK_IMPORTED_MODULE_5__;
var SocketService = /** @class */ (function () {
    /**
     * @param {?} configService
     * @param {?} store
     */
    function SocketService(configService, store) {
        var _this = this;
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (config) { return (config.env.production ? config.production_uri : config.development_uri); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (uri) {
            _this.socket = io(uri);
            return _this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
            .subscribe(function () {
            _this.socket.on("DISPATCH_ACTION", function (data) {
                _this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            });
        });
    }
    /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    SocketService.prototype.on = function (message) {
        var _this = this;
        var /** @type {?} */ observer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(message, function (data) {
                observer.next(data);
            });
        });
        return observer$;
    };
    /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    SocketService.prototype.emit = function (message, payload) {
        this.socket.emit(message, payload);
    };
    return SocketService;
}());
SocketService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SocketService.ctorParameters = function () { return [
    { type: SocketConfigurationService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
]; };
/** @nocollapse */ SocketService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function SocketService_Factory() { return new SocketService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SocketConfigurationService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); }, token: SocketService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    number: 0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default: {
            return state;
        }
    }
}
var /** @type {?} */ SocketReducer = {
    change: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsSocketModule = /** @class */ (function () {
    function NgsSocketModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsSocketModule.forRoot = function (config) {
        return {
            ngModule: NgsSocketRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService]
        };
    };
    return NgsSocketModule;
}());
NgsSocketModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]]
            },] },
];
var NgsSocketRootModule = /** @class */ (function () {
    function NgsSocketRootModule() {
    }
    return NgsSocketRootModule;
}());
NgsSocketRootModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [NgsSocketModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("socket", SocketReducer)]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=soushians-socket.js.map


/***/ }),

/***/ "./dist/@soushians/source/fesm5/soushians-source.js":
/*!**********************************************************!*\
  !*** ./dist/@soushians/source/fesm5/soushians-source.js ***!
  \**********************************************************/
/*! exports provided: SourceModule, ɵf, ɵa, ɵg, ɵd, ɵc, ɵe, ɵh, ɵk, ɵi, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceModule", function() { return SourceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SourceEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SourceReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return SourceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SourceListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SourceModuleContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SourceUpsertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return SourceListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return SourceModuleContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return SourceUpsertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RoutingModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @soushians/shared */ "./dist/@soushians/shared/fesm5/soushians-shared.js");

















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
var SourceSubmit = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function SourceSubmit(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
    return SourceSubmit;
}());
var SourceSubmitSucceed = /** @class */ (function () {
    function SourceSubmitSucceed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
    return SourceSubmitSucceed;
}());
var SourceSubmitFailed = /** @class */ (function () {
    function SourceSubmitFailed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
    return SourceSubmitFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ɵ0 = [];
var /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SourceActionTypes.SOURCE_SUBMIT:
            return Object.assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return Object.assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return Object.assign({}, state);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ SourceReducers = {
    sources: Reducer
};
//#region selectors
var /** @type {?} */ selectSourceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("source");
//#endregion
var /** @type {?} */ getSourceList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSourceState, function (state) { return state.list; });
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetSourcesApiModel;
(function (GetSourcesApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetSourcesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetSourcesApiModel.Response = Response;
})(GetSourcesApiModel || (GetSourcesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Endpoint: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Interval: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    IsActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("false", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Thresholds: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    UpsertSourceApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertSourceApiModel.Response = Response;
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceService = /** @class */ (function () {
    /**
     * @param {?} http
     */
    function SourceService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    SourceService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SourceService.prototype.getSourceById = function (id) {
        return this.http
            .get("http://localhost:3000/api/source/" + id)
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    SourceService.prototype.upsertSource = function (body) {
        var /** @type {?} */ model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    SourceService.prototype.getData = function (source, time) {
        if (time === void 0) { time = 0; }
        return this.http
            .get("http://localhost:3000/api/data", {
            params: {
                sourceId: source._id,
                time: null
            }
        })
            .map(function (res) { return res.Result; });
    };
    return SourceService;
}());
SourceService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SourceService.ctorParameters = function () { return [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
]; };
/** @nocollapse */ SourceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function SourceService_Factory() { return new SourceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); }, token: SourceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceListComponent = /** @class */ (function () {
    /**
     * @param {?} sourceService
     */
    function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService;
        debugger;
        this.sources = this.sourceService.getSources();
        // this.sources.subscribe(data => { debugger})
        //this.configs.subscribe(data => {
        //        debugger;
        //        this.store.dispatch(new ConfigLoaded(data.Result));
        //});
    }
    /**
     * @return {?}
     */
    SourceListComponent.prototype.ngOnInit = function () { };
    return SourceListComponent;
}());
SourceListComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: "source-list",
                template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\n        \n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\n        </a>\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\n      </mat-card-title>\n    \n  </mat-card>\n\n  <div fxLayoutAlign='end center'>\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</div>\n\n\n",
                styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            },] },
];
/** @nocollapse */
SourceListComponent.ctorParameters = function () { return [
    { type: SourceService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function SourceModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    SourceModuleContainerComponent.prototype.ngOnInit = function () { };
    return SourceModuleContainerComponent;
}());
SourceModuleContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: "source-module-container",
                template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
SourceModuleContainerComponent.ctorParameters = function () { return [
    { type: SourceService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceUpsertComponent = /** @class */ (function () {
    /**
     * @param {?} sourceService
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} store
     */
    function SourceUpsertComponent(sourceService, formBuilder, route, store) {
        var _this = this;
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = ((this.formGroup.controls["Thresholds"])).controls;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(function (mapping) { return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type); });
                });
        });
    }
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    SourceUpsertComponent.prototype.addItem = function (Name, Formula, Message, Type) {
        if (Name === void 0) { Name = ""; }
        if (Formula === void 0) { Formula = ""; }
        if (Message === void 0) { Message = ""; }
        if (Type === void 0) { Type = "critical"; }
        var /** @type {?} */ control = (this.formGroup.controls["Thresholds"]);
        control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Formula: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Formula, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Message, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](Type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SourceUpsertComponent.prototype.removeItem = function (i) {
        var /** @type {?} */ control = (this.formGroup.controls["Thresholds"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.getData = function () {
        var _this = this;
        var /** @type {?} */ o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(function (data) {
            debugger;
            _this.data = data.Data;
        });
        return o$;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SourceUpsertComponent.prototype.add = function (data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    };
    return SourceUpsertComponent;
}());
SourceUpsertComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                selector: "source-source-upsert",
                template: "<div fxLayout=\"column\">\n  <div fxFlex=\"100\">\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\n          </mat-form-field>\n          <div>\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\n      <mat-card-content fxLayout=\"column\">\n        <div>\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\n        </div>\n        <div class=\"item-margin\">\n          <!-- TODO: -->\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\n      <mat-card-content fxLayout=\"column\">\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\n                </mat-form-field>\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\n                  <label>\u0646\u0648\u0639 :</label>\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\n                    {{item}}\n                  </mat-radio-button>\n                </mat-radio-group>\n\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div class=\"item-margin\">\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\">\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n",
                styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
            },] },
];
/** @nocollapse */
SourceUpsertComponent.ctorParameters = function () { return [
    { type: SourceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "source",
        component: SourceModuleContainerComponent,
        children: [
            {
                path: "",
                component: SourceListComponent
            },
            {
                path: "edit/:id",
                component: SourceUpsertComponent
            },
            {
                path: "add",
                component: SourceUpsertComponent
            }
        ]
    }
];
var /** @type {?} */ RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} sourceService
     */
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (res) { return new SourceSubmitSucceed(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].of(new SourceSubmitFailed()); }));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function () {
            _this.router.navigate(["source"]);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__["Observable"].empty();
        }));
    }
    return SourceEffects;
}());
SourceEffects.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
];
/** @nocollapse */
SourceEffects.ctorParameters = function () { return [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: SourceService }
]; };
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], SourceEffects.prototype, "afterSubmitSource$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], SourceEffects.prototype, "SigninSucceed$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SourceModule = /** @class */ (function () {
    function SourceModule() {
    }
    return SourceModule;
}());
SourceModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forFeature("source", SourceReducers),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    RoutingModule,
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([SourceEffects]),
                    _soushians_shared__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
                ],
                declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                exports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//services
//actions
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=soushians-source.js.map


/***/ }),

/***/ "./dist/@soushians/user/fesm5/soushians-user.js":
/*!******************************************************!*\
  !*** ./dist/@soushians/user/fesm5/soushians-user.js ***!
  \******************************************************/
/*! exports provided: UserService, getUserInfo, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel, NgsUserModule, RootNgsUserModule, routes, NgsUserRoutingModule, ɵbe, ɵp, ɵt, ɵh, ɵba, ɵbb, ɵo, ɵk, ɵr, ɵbg, ɵn, ɵz, ɵb, ɵd, ɵe, ɵbd, ɵx, ɵw, ɵq, ɵi, ɵbc, ɵj, ɵy, ɵg, ɵs, ɵm, ɵbf, ɵv, ɵu, ɵf, ɵl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_DEFAULT_CONFIG", function() { return MODULE_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_CONFIG_TOKEN", function() { return MODULE_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return ChangePasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRequestModel", function() { return ResetPasswordRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfile_ApiModel", function() { return EditProfile_ApiModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileViewModel", function() { return ProfileViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedLoginReportModel", function() { return FailedLoginReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedLoginModel", function() { return FailedLoginModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsUserModule", function() { return NgsUserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootNgsUserModule", function() { return RootNgsUserModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsUserRoutingModule", function() { return NgsUserRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return ChangePasswordContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return ChangePasswordContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return reducer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ChangePasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return DashboardContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return DashboardLinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return DashboardContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return DashboardLinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return userReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return FeatureContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return FeatureContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return UserEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return UserReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return selectFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return selectSearchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return ProfileEditContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return EditProfileEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return reducer$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return ProfileEditContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return ProfileEditComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return ProfileContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ProfileContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ProfileViewEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return ResetPasswordRequestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return reducer$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return UserConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @soushians/shared */ "./dist/@soushians/shared/fesm5/soushians-shared.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _soushians_authentication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @soushians/authentication */ "./dist/@soushians/authentication/fesm5/soushians-authentication.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _soushians_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @soushians/form */ "./dist/@soushians/form/fesm5/soushians-form.js");






















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        //resetPasswordRequest: '',
        changePassword: "",
        editProfile: "",
        getUserInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: []
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordModel;
(function (ChangePasswordModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]),
                    Confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_soushians_shared__WEBPACK_IMPORTED_MODULE_2__["MatchValidator"])("Password")])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ChangePasswordModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ChangePasswordModel.Response = Response;
})(ChangePasswordModel || (ChangePasswordModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Token: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('sms'),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ResetPasswordRequestModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel || (ResetPasswordRequestModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordModel;
(function (ResetPasswordModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Token: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_soushians_shared__WEBPACK_IMPORTED_MODULE_2__["MatchValidator"])("Password")])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ResetPasswordModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ResetPasswordModel.Response = Response;
})(ResetPasswordModel || (ResetPasswordModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this;
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    Groups: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditProfile_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Response.prototype.extractData = /**
         * @return {?}
         */
        function () {
            return this.Result.User;
        };
        return Response;
    }());
    EditProfile_ApiModel.Response = Response;
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileViewModel;
(function (ProfileViewModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ProfileViewModel.Request = Request;
    var Response = /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(Response, _super);
        function Response() {
            return _super.call(this) || this;
        }
        return Response;
    }(UserModel));
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FailedLoginReportModel;
(function (FailedLoginReportModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return;
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FailedLoginReportModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
            this.data = [];
        }
        return Response;
    }());
    FailedLoginReportModel.Response = Response;
})(FailedLoginReportModel || (FailedLoginReportModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FailedLoginModel = /** @class */ (function () {
    function FailedLoginModel() {
    }
    return FailedLoginModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserConfigurationService = /** @class */ (function () {
    function UserConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_6__["getUserModuleConfig"]).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(UserConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    UserConfigurationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MODULE_CONFIG_TOKEN,] }] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    /** @nocollapse */ UserConfigurationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MODULE_CONFIG_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); }, token: UserConfigurationService, providedIn: "root" });
    return UserConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ProfileViewActionTypes = {
    GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
};
var GetProfile = /** @class */ (function () {
    function GetProfile() {
        this.type = ProfileViewActionTypes.GET_PROFILE;
    }
    return GetProfile;
}());
var GetProfileStart = /** @class */ (function () {
    function GetProfileStart() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
    return GetProfileStart;
}());
var GetProfileSucceed = /** @class */ (function () {
    function GetProfileSucceed(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
    return GetProfileSucceed;
}());
var GetProfileFailed = /** @class */ (function () {
    function GetProfileFailed() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
    return GetProfileFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var UserActionTypes = {
    USER_SELECTED: "[USER] USER_SELECTED",
    REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
};
var RefreshUserInfoAction = /** @class */ (function () {
    function RefreshUserInfoAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
    return RefreshUserInfoAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState = {
    loaded: false,
    data: new UserModel()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActionTypes.USER_SELECTED: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
var /** @type {?} */ getUser = function (state) { return state.data; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(function () {
            _this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    UserService.prototype.getProfileInformation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.profileInformation != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.get(config.endpoints.profileInformation); })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.editProfile = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(Object(_soushians_shared__WEBPACK_IMPORTED_MODULE_2__["stringTemplate"])(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map(function (response) {
            return new EditProfile_ApiModel.Response(response).extractData();
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        var /** @type {?} */ model = new ProfileViewModel.Request(data);
        if (this.responseCache && this.responseCache.Email == model.Email)
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].of(this.responseCache);
        return this.http
            .get(Object(_soushians_shared__WEBPACK_IMPORTED_MODULE_2__["stringTemplate"])(this.configurationService.config.endpoints.getUserInfo, model))
            .do(function (response) { return (_this.responseCache = response); })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} role
     * @return {?}
     */
    UserService.prototype.is_role = /**
     * @param {?} role
     * @return {?}
     */
    function (role) {
        return this.store
            .select(getUser)
            .filter(function (user) { return user && user.Roles != undefined; })
            .take(1)
            .map(function (user) { return user.Roles.indexOf(role) > -1; });
    };
    UserService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function UserService_Factory() { return new UserService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(UserConfigurationService)); }, token: UserService, providedIn: "root" });
    return UserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditProfileActionTypes = {
    EDIT_PROFILE: "[USER][PASSWORD] EDIT_PROFILE",
    EDIT_PROFILE_START: "[USER][PASSWORD] EDIT_PROFILE_START",
    EDIT_PROFILE_SUCCEED: "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
    EDIT_PROFILE_FAILED: "[USER][PASSWORD] EDIT_PROFILE_FAILED",
};
var EditProfile = /** @class */ (function () {
    function EditProfile(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());
var EditProfileStart = /** @class */ (function () {
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
var EditProfileSucceed = /** @class */ (function () {
    function EditProfileSucceed(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
    return EditProfileSucceed;
}());
var EditProfileFailed = /** @class */ (function () {
    function EditProfileFailed() {
        this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
    }
    return EditProfileFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) { return new EditProfileStart(data); }));
        this.RequestEditProfileLink$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (data) { return _this.service.editProfile(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (res) { return new EditProfileSucceed(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_11__["of"])(new EditProfileFailed()); }));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => Observable.of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
    EditProfileEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    EditProfileEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: UserService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], EditProfileEffects.prototype, "goToView$", void 0);
    return EditProfileEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileViewEffects = /** @class */ (function () {
    function ProfileViewEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) { return new GetProfileStart(); }));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (data) { return _this.userService.getProfileInformation(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (res) { return new GetProfileSucceed(res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_13__["Observable"].of(new GetProfileFailed()); }));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) { return new RefreshUserInfoAction(data); }));
    }
    ProfileViewEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ProfileViewEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
        { type: UserService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], ProfileViewEffects.prototype, "getProfile$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
    return ProfileViewEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.updateProfileInformation$ = this.actions$.ofType(_soushians_authentication__WEBPACK_IMPORTED_MODULE_14__["SignInActionTypes"].SIGNIN_SUCCEED).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (user) {
            debugger;
            return new GetProfileSucceed(user);
        }));
        this.getProfileInformation$ = this.actions$.ofType(_soushians_authentication__WEBPACK_IMPORTED_MODULE_14__["SignInActionTypes"].SIGNIN_SUCCEED).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function () {
            return new GetProfile();
        }));
    }
    UserEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    UserEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: UserService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], UserEffects.prototype, "updateProfileInformation$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], UserEffects.prototype, "getProfileInformation$", void 0);
    return UserEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ResetPasswordRequestActionTypes = {
    GET_RESET_PASSWORD_LINK: '[USER][PASSWORD] GET_RESET_PASSWORD_LINK',
    RESET_PASSWORD_LINK_REQUEST_START: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START',
    RESET_PASSWORD_LINK_REQUEST_SUCCEED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED',
    RESET_PASSWORD_LINK_REQUEST_FAILED: '[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED',
    DISABLE_GET_LINK: '[USER][PASSWORD] DISABLE_GET_LINK',
    ENABLE_GET_LINK: '[USER][PASSWORD] ENABLE_GET_LINK',
    MAXIMUM_TRY_HAPPEND: '[USER][PASSWORD] MAXIMUM_TRY_HAPPEND',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$1 = {
    numberOfRequested: 0,
    lastRequestedTime: null,
    disable: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state);
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state);
        }
        case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { disable: true });
        }
        case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { disable: false });
        }
        default: {
            return state;
        }
    }
}
var /** @type {?} */ getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
var /** @type {?} */ getStatus = function (state) { return state.disable; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var ChangePasswordActionTypes = {
    CHANGE_PASSWORD: '[USER][PASSWORD] CHANGE_PASSWORD',
    PASSWORD_CHANGED_START: '[USER][PASSWORD] PASSWORD_CHANGED_START',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
    return ChangePassword;
}());
var ChangePasswordStart = /** @class */ (function () {
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
var ChangePasswordSucceed = /** @class */ (function () {
    function ChangePasswordSucceed(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return ChangePasswordSucceed;
}());
var ChangePasswordFailed = /** @class */ (function () {
    function ChangePasswordFailed() {
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return ChangePasswordFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$2 = {
    status: "pristine"
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state, action) {
    if (state === void 0) { state = initialState$2; }
    switch (action.type) {
        case ChangePasswordActionTypes.CHANGE_PASSWORD: {
            return {
                status: "dirty"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_START: {
            return {
                status: "pending"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED: {
            return {
                status: "succeed"
            };
        }
        case ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED: {
            return {
                status: "failed"
            };
        }
        default: {
            return initialState$2;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$3 = {
    status: 'pristine'
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$2(state, action) {
    if (state === void 0) { state = initialState$3; }
    switch (action.type) {
        case EditProfileActionTypes.EDIT_PROFILE: {
            return {
                status: 'dirty'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_START: {
            return {
                status: 'pending'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
            return {
                status: 'succeed'
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_FAILED: {
            return {
                status: 'failed'
            };
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SearchActionTypes = {
    SEARCH: '[USER][SEARCH] SEARCH',
    SEARCH_START: '[USER][SEARCH] SEARCH_START',
    SEARCH_SUCCEED: '[USER][SEARCH] SEARCH_SUCCEED',
    SEARCH_FAILED: '[USER][SEARCH] SEARCH_FAILED',
    CLEAR_SEARCHED_USER: '[USER][SEARCH] CLEAR_SEARCHED_USER',
};
var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
    return Search;
}());
var SearchStartAction = /** @class */ (function () {
    function SearchStartAction(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
    return SearchStartAction;
}());
var SearchSucceed = /** @class */ (function () {
    function SearchSucceed(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
    return SearchSucceed;
}());
var SearchFailed = /** @class */ (function () {
    function SearchFailed() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
    return SearchFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ initialState$4 = {
    status: "pristine",
    data: new ProfileViewModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$3(state, action) {
    if (state === void 0) { state = initialState$4; }
    switch (action.type) {
        case SearchActionTypes.SEARCH: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, state, { status: "failed" });
        }
        case SearchActionTypes.CLEAR_SEARCHED_USER: {
            return initialState$4;
        }
        default: {
            return state;
        }
    }
}
var /** @type {?} */ getStatus$3 = function (state) { return state.status; };
var /** @type {?} */ getUserInfo = function (state) { return state.data; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ UserReducers = {
    user: userReducer,
    resetPasswordRequest: reducer,
    changePassword: reducer$1,
    searchView: reducer$3,
    editProfile: reducer$2
};
//#region selectors
var /** @type {?} */ selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createFeatureSelector"])("user");
var /** @type {?} */ getUserInforamtionStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ isSignedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ selectResetPasswordRequestState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFeatureState, function (state) { return state.resetPasswordRequest; });
var /** @type {?} */ getNumberOfRequeseted$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectResetPasswordRequestState, getNumberOfRequeseted);
var /** @type {?} */ getResetPasswordRequestStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectResetPasswordRequestState, getStatus);
//#region user
var /** @type {?} */ selectUserInformaionState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFeatureState, function (state) { return state.user; });
var /** @type {?} */ getUser$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectUserInformaionState, getUser);
//#endregion
//#region search
var /** @type {?} */ selectSearchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectFeatureState, function (state) { return state.searchView; });
var /** @type {?} */ getSearchStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectSearchState, getStatus$3);
var /** @type {?} */ getUserInfo$1 = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["createSelector"])(selectSearchState, getUserInfo);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(store) {
        this.store = store;
        this.formGroup = ProfileViewModel.Request.formGroup;
        this.userDataLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["BehaviorSubject"](false);
        this.userNotFound$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["BehaviorSubject"](false);
        this.user = this.store.select(getUserInfo$1);
        this.userStatus$ = this.store.select(getSearchStatus);
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userStatus$.subscribe(function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); });
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new Search(this.formGroup.value));
    };
    SearchComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "search",
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          {{(user | async).LastName }}\u060C {{(user | async).FirstName }}\n        </div>\n        <div fxFlex=\"nogrow\">\n          {{(user | async).Email}}\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    return SearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
        this.submited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.changePassword = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    ChangePasswordComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'user-change-password',
                    template: "<div fxFlex=\"450px\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\n        </mat-form-field>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return []; };
    ChangePasswordComponent.propDecorators = {
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        submited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ChangePasswordComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent() {
        this.submited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.editProfile = /**
     * @return {?}
     */
    function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    ProfileEditComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "profile-edit",
                    template: "<div fxFlex=\"450px\">\n\n  \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <!-- <ngs-form-view [id]=\"formId\"></ngs-form-view> -->\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = function () { return []; };
    ProfileEditComponent.propDecorators = {
        submited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        formId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        roles$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ["roles",] }],
        groups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ProfileEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent(userConfigurationService) {
        this.userConfigurationService = userConfigurationService;
        this.links$ = this.userConfigurationService.config$.map(function (data) { return data.dashboardLinks; });
        this.links = [
            {
                title: "مشاهده حساب کاریری",
                route: "/user/panel/profile",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                icon: "credit_card"
            },
            {
                route: "/user/panel/password/change",
                title: "تغییر کلمه عبور",
                description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                icon: "security"
            }
        ];
    }
    /**
     * @return {?}
     */
    DashboardLinksComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DashboardLinksComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "user-dashboard-links",
                    template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n</div>",
                    styles: ["#con [fxflex]{margin-right:25px}:host{width:100%}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                },] },
    ];
    /** @nocollapse */
    DashboardLinksComponent.ctorParameters = function () { return [
        { type: UserConfigurationService }
    ]; };
    return DashboardLinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.maximumResendingHappend$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.timer$ = rxjs_Observable__WEBPACK_IMPORTED_MODULE_13__["Observable"].timer(0, 100)
            .map(function (i) { return i + 1; })
            .takeWhile(function (i) { return i * 100 <= 3000; })
            .map(function (i) { return 3000 - i * 100; });
    }
    Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
        set: /**
         * @param {?} isPending
         * @return {?}
         */
        function (isPending) {
            if (isPending) {
                this.formGroup.disable();
            }
            this.formGroup.enable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.numberOfRequested.subscribe(function (data) {
            if (data > 2) {
                _this.maximumResendingHappend$.next(true);
            }
        });
    };
    /**
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
            var /** @type {?} */ message = (this.maximumResendingHappend$.getValue())
                ? 'عدم امکان ...'
                : 'پیامک جدید برای شما ارسال گردید.';
            this.snackBar.open(message, '', {
                duration: 3000,
            });
        }
    };
    ResetPasswordRequestComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'user-reset-password-request',
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\n      </mat-radio-group>\n      <mat-form-field fxFlexFill>\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\n        <span *ngIf='!(canRequestPin | async)'>\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\n        </span>\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\n        </div>\n        <div *ngIf='(maximumResendingHappend$ | async)'>\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n        </div>-->\n      </button>\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\n    </mat-card-actions>\n  </mat-card>\n</form>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ResetPasswordRequestComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"] }
    ]; };
    ResetPasswordRequestComponent.propDecorators = {
        submitted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        formGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        numberOfRequested: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canRequestPin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pending: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ResetPasswordRequestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchEffects = /** @class */ (function () {
    function SearchEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.canSearch$ = this.actions$
            .ofType(SearchActionTypes.SEARCH)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) { return new SearchStartAction(data); }));
        this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (data) {
            return _this.userService.getInfo(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (res) {
                return res == null ? new SearchFailed() : new SearchSucceed(res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["catchError"])(function () { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_11__["of"])(new SearchFailed()); }));
        }));
    }
    SearchEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    SearchEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
        { type: UserService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], SearchEffects.prototype, "canSearch$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], SearchEffects.prototype, "search$", void 0);
    return SearchEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FeatureContainerComponent = /** @class */ (function () {
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            _this.store.dispatch(new Search(model));
        });
    }
    FeatureContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    FeatureContainerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    return FeatureContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordContainerComponent = /** @class */ (function () {
    function ChangePasswordContainerComponent(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new ChangePasswordModel.Request();
    }
    /**
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.select(getUserInfo$1).subscribe(function (userInfo) {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.changePassword = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
    };
    ChangePasswordContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                },] },
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    return ChangePasswordContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileEditContainerComponent = /** @class */ (function () {
    function ProfileEditContainerComponent(store, configService) {
        this.store = store;
        this.configService = configService;
        this.formGroup = EditProfile_ApiModel.Request.formGroup;
        this.userInforamation$ = this.store.select(getUser$1);
        this.roles$ = this.store
            .select(_soushians_config__WEBPACK_IMPORTED_MODULE_6__["getAppConfig"])
            .filter(function (config) { return config != undefined; })
            .map(function (config) { return config.Config.Roles; });
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = rxjs_Observable__WEBPACK_IMPORTED_MODULE_13__["Observable"].of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ProfileEditContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userInforamation$.subscribe(function (userInfo) {
            debugger;
            if (userInfo == null)
                return;
            _this.formGroup.patchValue({
                Email: userInfo.Email,
                Roles: userInfo.Roles,
                Groups: userInfo.Groups
            });
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ProfileEditContainerComponent.prototype.updateProfile = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.store.dispatch(new EditProfile(data));
    };
    ProfileEditContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "profile-edit-contianer",
                    template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [formGroup]=\"formGroup\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditContainerComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: UserConfigurationService }
    ]; };
    return ProfileEditContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DashboardContainerComponent = /** @class */ (function () {
    // is_agent : Observable<boolean>;
    function DashboardContainerComponent(store) {
        this.store = store;
        this.user$ = this.store.select(getUser$1);
        // this.is_agent = signinService.is_agent();
    }
    /**
     * @return {?}
     */
    DashboardContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DashboardContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "user-dashboard-container",
                    template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\n<div fxLayoutAlign=\"center\">\n    <router-outlet></router-outlet>\n</div>",
                    styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                },] },
    ];
    /** @nocollapse */
    DashboardContainerComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    return DashboardContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.sex$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.identifierType$ = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
    }
    /**
     * @return {?}
     */
    ProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.information.subscribe(function (data) {
            if (data == null)
                return;
        });
    };
    ProfileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'user-profile',
                    template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        information: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dataStatus$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ProfileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileContainerComponent = /** @class */ (function () {
    function ProfileContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(getUser$1);
        this.dataStatus$ = this.store.select(getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ProfileContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ProfileContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
                },] },
    ];
    /** @nocollapse */
    ProfileContainerComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    return ProfileContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsUserModule = /** @class */ (function () {
    function NgsUserModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsUserModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsUserModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                        _soushians_form__WEBPACK_IMPORTED_MODULE_20__["NgsFormModule"]
                    ],
                    declarations: [
                        SearchComponent,
                        ProfileComponent,
                        ChangePasswordComponent,
                        ProfileEditComponent,
                        ProfileContainerComponent,
                        DashboardLinksComponent,
                        ResetPasswordRequestComponent,
                        FeatureContainerComponent,
                        DashboardContainerComponent,
                        ChangePasswordContainerComponent,
                        ProfileEditContainerComponent
                    ],
                    exports: []
                },] },
    ];
    return NgsUserModule;
}());
var RootNgsUserModule = /** @class */ (function () {
    function RootNgsUserModule() {
    }
    RootNgsUserModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        NgsUserModule,
                        _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("user", UserReducers),
                        _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([
                            EditProfileEffects,
                            ProfileViewEffects,
                            UserEffects
                        ])
                    ]
                },] },
    ];
    return RootNgsUserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PasswordService = /** @class */ (function () {
    function PasswordService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        this.numberOfRequeseted$ = this.store.select(getNumberOfRequeseted$1);
    }
    /**
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordRequest = /**
     * @return {?}
     */
    function () {
        return this.numberOfRequeseted$
            .take(1)
            .switchMap(function (count) { return (count < 3 ? rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].of(true) : rxjs_Rx__WEBPACK_IMPORTED_MODULE_8__["Observable"].of(false)); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordReset = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .get("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, { withCredentials: true })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.requestResetPasswordLink = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordRequestModel.Request(data);
        // TODO:
        // return this.http.post(this.userConfigurationService.config.endpoints.resetPasswordRequest(model), model.getRequestBody(), { withCredentials: true })
        return this.http
            .post(this.userConfigurationService.config.endpoints.editProfile, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.changePassword = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ChangePasswordModel.Request(data);
        return this.http
            .patch("this.userConfigurationService.config.endpoints.changePassword(model)", model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.resetPassword = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .patch("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    PasswordService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    PasswordService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ PasswordService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function PasswordService_Factory() { return new PasswordService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(UserConfigurationService)); }, token: PasswordService, providedIn: "root" });
    return PasswordService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordEffects = /** @class */ (function () {
    function ChangePasswordEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (data) { return new ChangePasswordStart(data); }));
        this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["switchMap"])(function (data) {
            return _this.passwordService
                .changePassword(data)
                .map(function (res) { return new ChangePasswordSucceed(res); })
                .catch(function () { return rxjs_Observable__WEBPACK_IMPORTED_MODULE_13__["Observable"].of(new ChangePasswordFailed()); });
        }));
    }
    ChangePasswordEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ChangePasswordEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Actions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: PasswordService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], ChangePasswordEffects.prototype, "RequestChangePasswordLink$", void 0);
    return ChangePasswordEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "user/panel",
        component: DashboardContainerComponent,
        children: [
            {
                path: "",
                component: DashboardLinksComponent
            },
            {
                path: "profile",
                component: ProfileContainerComponent
            },
            {
                path: "profile/edit",
                component: ProfileEditContainerComponent
            },
            {
                path: "password/change",
                component: ChangePasswordContainerComponent
            }
        ]
    },
    {
        path: "admin/user",
        children: [
            { path: "managment", component: SearchComponent },
            {
                path: ":Email",
                component: FeatureContainerComponent,
                children: [
                    {
                        path: "profile-edit",
                        component: ProfileEditContainerComponent
                    },
                    {
                        path: "change-password",
                        component: ChangePasswordContainerComponent
                    }
                ]
            }
        ]
    }
];
var /** @type {?} */ NgsUserRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL2NoYW5nZS1wYXNzd29yZC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZmVhdHVyZS9mZWF0dXJlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvcGFzc3dvcmQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5yb3V0aW5nLW1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJNb2R1bGVDb25maWcge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly9yZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IHN0cmluZztcclxuXHRcdGVkaXRQcm9maWxlOiBzdHJpbmc7XHJcblx0XHRnZXRVc2VySW5mbzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBzdHJpbmc7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtczoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBzdHJpbmc7XHJcblx0fTtcclxuXHRkYXNoYm9hcmRMaW5rczoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly9yZXNldFBhc3N3b3JkUmVxdWVzdDogJycsXHJcblx0XHRjaGFuZ2VQYXNzd29yZDogXCJcIixcclxuXHRcdGVkaXRQcm9maWxlOiBcIlwiLFxyXG5cdFx0Z2V0VXNlckluZm86IFwiXCIsXHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb246IFwiXCJcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6ICcnLFxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogXCJcIlxyXG5cdH0sXHJcblx0ZGFzaGJvYXJkTGlua3M6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVc2VyTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdEZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdExhc3ROYW1lOiBzdHJpbmc7XHJcblx0VXNlcm5hbWU6IHN0cmluZztcclxuXHREaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg3KSBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PntcclxuXHJcbiAgICAgICAgVXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AUmVxdWVzdEJvZHkoXCJwZWdhaFwiKVxyXG4gICAgICAgIFRva2VuOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFVzZUluKCdib2R5JylcclxuICAgICAgICBDYXB0Y2hhOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFVzZUluKCd1cmwnKVxyXG4gICAgICAgIC8vQFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG4gICAgICAgIFR5cGU6ICdzbXMnIHwgJ2VtYWlsJztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlPzogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogdGhpcy5Vc2VybmFtZSxcclxuICAgICAgICAgICAgICAgIFRva2VuOiB0aGlzLlRva2VuLFxyXG4gICAgICAgICAgICAgICAgQ2FwdGNoYTogdGhpcy5DYXB0Y2hhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIENhcHRjaGE6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgVG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgVHlwZTogbmV3IEZvcm1Db250cm9sKCdzbXMnKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBSZXNldFBhc3N3b3JkTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0UGFzc3dvcmQ6IHN0cmluZztcclxuXHRcdFRva2VuOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRQYXNzd29yZDogdGhpcy5QYXNzd29yZFxyXG5cdFx0XHRcdC8vVG9rZW46IHRoaXMuVG9rZW4sXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRUb2tlbjogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29uZmlybTogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgTWF0Y2hWYWxpZGF0b3IoXCJQYXNzd29yZFwiKSBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsLCBIdHRwUmVzcG9uc2VCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIEVkaXRQcm9maWxlX0FwaU1vZGVsIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcbiAgICAgICAgRW1haWw6IHN0cmluZztcclxuICAgICAgICBSb2xlczogc3RyaW5nW107XHJcbiAgICAgICAgR3JvdXBzOiBzdHJpbmdbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXF1ZXN0ID0ge30gYXMgUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICAgICAgICBFbWFpbDogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBSb2xlczogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBHcm91cHM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2UgaW1wbGVtZW50cyBIdHRwUmVzcG9uc2VCYXNlTW9kZWw8UmVzcG9uc2U+e1xyXG4gICAgICAgIFJlc3VsdDogeyBVc2VyOiBVc2VyTW9kZWwgfTtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlc3BvbnNlID0ge30gYXMgUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4dHJhY3REYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5SZXN1bHQuVXNlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFByb2ZpbGVWaWV3TW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgVXNlck1vZGVsIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGYWlsZWRMb2dpbk1vZGVsIH0gZnJvbSAnLi9mYWlsZWQtbG9naW4ubW9kZWwnO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcbiAgICAgICAgVXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlPzogRmFpbGVkTG9naW5SZXBvcnRNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSAge1xyXG4gICAgICAgIGRhdGE6IEZhaWxlZExvZ2luTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEZhaWxlZExvZ2luTW9kZWwge1xyXG4gICAgVXNlcm5hbWU6IHN0cmluZztcclxuICAgIFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBUcnlEYXRlOiBEYXRlO1xyXG4gICAgTWFjQWRkcmVzczogc3RyaW5nO1xyXG4gICAgSXBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBSZWFzb246IHN0cmluZztcclxufSIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL3VzZXIuY29uZmlnXCI7XHJcbi8vIGltcG9ydCB7IFVzZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlVmlld0FjdGlvblR5cGVzIHtcclxuXHRHRVRfUFJPRklMRSA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFXCIsXHJcblx0R0VUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEdFVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0R0VUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQcm9maWxlVmlld0FjdGlvbiA9IEdldFByb2ZpbGUgfCBHZXRQcm9maWxlU3RhcnQgfCBHZXRQcm9maWxlU3VjY2VlZCB8IEdldFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRVU0VSX1NFTEVDVEVEID0gXCJbVVNFUl0gVVNFUl9TRUxFQ1RFRFwiLFxyXG5cdFJFRlJFU0hfVVNFUl9JTkZPID0gXCJbVVNFUl0gUkVGUkVTSF9VU0VSX0lORk9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlbGVjdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VySW5mb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gVXNlclNlbGVjdGVkQWN0aW9uIHwgUmVmcmVzaFVzZXJJbmZvQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVzZXJBY3Rpb24sIFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRhdGE6IFVzZXJNb2RlbDtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2FkZWQ6IGZhbHNlLFxyXG5cdGRhdGE6IG5ldyBVc2VyTW9kZWwoKVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk86IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsLCBQcm9maWxlVmlld01vZGVsLCBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIHVzZXJSZWR1Y2VycyBmcm9tIFwiLi4vLi4vZmVhdHVyZS9mZWF0dXJlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UHJvZmlsZSgpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRQcm9maWxlSW5mb3JtYXRpb24oKTogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24pKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogVXNlck1vZGVsKSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoc3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbCksIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZSkgPT5cclxuXHRcdFx0XHRuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2UocmVzcG9uc2UpLmV4dHJhY3REYXRhKClcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0SW5mbyhkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cclxuXHRcdGlmICh0aGlzLnJlc3BvbnNlQ2FjaGUgJiYgdGhpcy5yZXNwb25zZUNhY2hlLkVtYWlsID09IG1vZGVsLkVtYWlsKSByZXR1cm4gT2JzZXJ2YWJsZS5vZih0aGlzLnJlc3BvbnNlQ2FjaGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5nZXRVc2VySW5mbywgbW9kZWwpKVxyXG5cdFx0XHQuZG8oKHJlc3BvbnNlOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSA9PiAodGhpcy5yZXNwb25zZUNhY2hlID0gcmVzcG9uc2UpKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldFVzZXIpXHJcblx0XHRcdC5maWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQubWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsLCBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIHtcclxuXHRFRElUX1BST0ZJTEUgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFXCIsXHJcblx0RURJVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEVESVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0RURJVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdFByb2ZpbGVBY3Rpb24gPVxyXG5cdHwgRWRpdFByb2ZpbGVcclxuXHR8IEVkaXRQcm9maWxlU3RhcnRcclxuXHR8IEVkaXRQcm9maWxlU3VjY2VlZFxyXG5cdHwgRWRpdFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRFZGl0UHJvZmlsZUFjdGlvblR5cGVzLFxyXG5cdEVkaXRQcm9maWxlU3RhcnQsXHJcblx0RWRpdFByb2ZpbGVTdWNjZWVkLFxyXG5cdEVkaXRQcm9maWxlRmFpbGVkXHJcbn0gZnJvbSBcIi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRWRpdFByb2ZpbGVTdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRSZXF1ZXN0RWRpdFByb2ZpbGVMaW5rJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmVkaXRQcm9maWxlKGRhdGEpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSlcclxuXHRcdCk7XHJcblx0Ly8gLnN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuc2VydmljZVxyXG5cdC8vIFx0XHQuZWRpdFByb2ZpbGUoZGF0YSlcclxuXHQvLyBcdFx0Lm1hcCgocmVzKSA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpXHJcblx0Ly8gXHRcdC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL3VzZXIvcHJvZmlsZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld0FjdGlvblR5cGVzLCBHZXRQcm9maWxlU3RhcnQsIEdldFByb2ZpbGVTdWNjZWVkLCBHZXRQcm9maWxlRmFpbGVkIH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVWaWV3RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXRQcm9maWxlU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRQcm9maWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnVzZXJTZXJ2aWNlLmdldFByb2ZpbGVJbmZvcm1hdGlvbigpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgR2V0UHJvZmlsZUZhaWxlZCgpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHJlZnJlc2hVc2VySW5mbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKGRhdGEpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBHZXRQcm9maWxlU3VjY2VlZCB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlU3VjY2VlZCh1c2VyKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHRARWZmZWN0KClcclxuXHRnZXRQcm9maWxlSW5mb3JtYXRpb24kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMge1xyXG4gICAgICAgIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRCA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEICA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQnLFxyXG4gICAgICAgIERJU0FCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gRElTQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgRU5BQkxFX0dFVF9MSU5LICAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBFTkFCTEVfR0VUX0xJTksnLFxyXG4gICAgICAgIE1BWElNVU1fVFJZX0hBUFBFTkQgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gTUFYSU1VTV9UUllfSEFQUEVORCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQnLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UmVzZXRQYXNzd29yZExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgTWF4aW11bVRyeUhhcHBlbmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLk1BWElNVU1fVFJZX0hBUFBFTkQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uID1cclxuICAgICAgICBHZXRSZXNldFBhc3N3b3JkTGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnRcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZFxyXG4gICAgICAgIHwgRGlzYWJsZUdldExpbmtcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWRcclxuICAgICAgICB8IEVuYWJsZUdldExpbmtcclxuICAgICAgICB8IE1heGltdW1UcnlIYXBwZW5kXHJcbiAgICAgICAgfCBQYXNzd29yZENoYW5nZWRTdWNjZWVkXHJcbiAgICAgICAgfCBQYXNzd29yZENoYW5nZWRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uLCBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogbnVtYmVyO1xyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBzdHJpbmc7XHJcblx0ZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogMCxcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogbnVsbCxcclxuXHRkaXNhYmxlOiBmYWxzZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG51bWJlck9mUmVxdWVzdGVkOiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZCArIDEsXHJcblx0XHRcdFx0bGFzdFJlcXVlc3RlZFRpbWU6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldE51bWJlck9mUmVxdWVzZXRlZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkO1xyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpc2FibGU7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIHtcclxuICAgICAgICBDSEFOR0VfUEFTU1dPUkQgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBDSEFOR0VfUEFTU1dPUkQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1RBUlQgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1RBUlQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRBY3Rpb24gPVxyXG4gICAgICAgICAgICBDaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgfCBDaGFuZ2VQYXNzd29yZFN0YXJ0XHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3VjY2VlZFxyXG4gICAgICAgICAgfCBDaGFuZ2VQYXNzd29yZEZhaWxlZDtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEFjdGlvbiwgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcyB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCJcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQ2hhbmdlUGFzc3dvcmRBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gJ0Bzb3VzaGlhbnMvc2hhcmVkJztcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVBY3Rpb24sIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMgfSBmcm9tICcuL2VkaXQtcHJvZmlsZS5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6ICdwcmlzdGluZSdcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRWRpdFByb2ZpbGVBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ2RpcnR5J1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ3BlbmRpbmcnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdzdWNjZWVkJ1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdmYWlsZWQnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBTZWFyY2hBY3Rpb25UeXBlcyB7XHJcbiAgICBTRUFSQ0ggPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIJyxcclxuICAgIFNFQVJDSF9TVEFSVCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1RBUlQnLFxyXG4gICAgU0VBUkNIX1NVQ0NFRUQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NVQ0NFRUQnLFxyXG4gICAgU0VBUkNIX0ZBSUxFRCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfRkFJTEVEJyxcclxuICAgIENMRUFSX1NFQVJDSEVEX1VTRVIgPSAnW1VTRVJdW1NFQVJDSF0gQ0xFQVJfU0VBUkNIRURfVVNFUidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPVxyXG4gICAgU2VhcmNoXHJcbiAgICB8IFNlYXJjaFN0YXJ0QWN0aW9uXHJcbiAgICB8IFNlYXJjaFN1Y2NlZWRcclxuICAgIHwgU2VhcmNoRmFpbGVkXHJcbiAgICB8IENsZWFyU2VhcmNoZWRVc2VyOyIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaEFjdGlvbiB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSgpXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNlYXJjaEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCIsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSOiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuZXhwb3J0IHZhciBnZXRVc2VySW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsLCBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCwgQ2hhbmdlUGFzc3dvcmRGYWlsZWQsIENoYW5nZVBhc3N3b3JkU3RhcnQsIENoYW5nZVBhc3N3b3JkU3VjY2VlZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmRcIjtcclxuaW1wb3J0IHtcclxuXHREaXNhYmxlR2V0TGluayxcclxuXHRFbmFibGVHZXRMaW5rLFxyXG5cdEdldFJlc2V0UGFzc3dvcmRMaW5rLFxyXG5cdE1heGltdW1UcnlIYXBwZW5kLFxyXG5cdFBhc3N3b3JkQ2hhbmdlZEZhaWxlZCxcclxuXHRQYXNzd29yZENoYW5nZWRTdWNjZWVkLFxyXG5cdFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCxcclxuXHRSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCxcclxuXHRSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkXHJcbn0gZnJvbSBcIi4uL3Jlc2V0LXBhc3N3b3JkXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlLCBFZGl0UHJvZmlsZUZhaWxlZCwgRWRpdFByb2ZpbGVTdGFydCwgRWRpdFByb2ZpbGVTdWNjZWVkIH0gZnJvbSBcIi4uL3Byb2ZpbGUtZWRpdFwiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24sIFVzZXJTZWxlY3RlZEFjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgU2VhcmNoRmFpbGVkLCBTZWFyY2hTdGFydEFjdGlvbiwgU2VhcmNoU3VjY2VlZCB9IGZyb20gXCIuLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5cclxuLy9UT0RPIDogcmVtb3ZlIHRoZXNlIGxpbmVzXHJcbi8vaW1wb3J0IHtcclxuLy8gICAgICAgIExvZ2luLCBMb2dpblN1Y2Nlc3MsIExvZ2luRmFpbHVyZSwgTG9naW5SZWRpcmVjdCwgTG9nb3V0QWN0aW9uXHJcbi8vfSBmcm9tIFwiLi4vYWN0aW9uc1wiXHJcbi8vaW1wb3J0IHsgQ2FwdGNoYUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCJcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlciBmcm9tIFwiLi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZWRpdFByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgc2VhcmNoUmVkdWNlciBmcm9tIFwiLi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLlN0YXRlO1xyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIuU3RhdGU7XHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLlN0YXRlO1xyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVkdWNlcnMgPSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIudXNlclJlZHVjZXIsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5yZWR1Y2VyLFxyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyLFxyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIucmVkdWNlcixcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcInVzZXJcIjogVXNlclN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFVzZXJTdGF0ZT4oXCJ1c2VyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuZXhwb3J0IGNvbnN0IGlzU2lnbmVkSW4gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuXHQoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVzZXRQYXNzd29yZFJlcXVlc3RcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlck9mUmVxdWVzZXRlZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXNcclxuKTtcclxuXHJcbi8vI3JlZ2lvbiB1c2VyXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSwgdXNlclJlZHVjZXIuZ2V0VXNlcik7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIHNlYXJjaFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hWaWV3KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFVzZXJJbmZvKTtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vZmVhdHVyZS9mZWF0dXJlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeEZsZXg9XCI0NTBweFwiICpuZ0lmPVwiKHVzZXJTdGF0dXMkIHwgYXN5bmMpID09ICdzdWNjZWVkJ1wiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICB7eyh1c2VyIHwgYXN5bmMpLkxhc3ROYW1lIH19w5jCjCB7eyh1c2VyIHwgYXN5bmMpLkZpcnN0TmFtZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICB7eyh1c2VyIHwgYXN5bmMpLkVtYWlsfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5sb2NhbF9ncm9jZXJ5X3N0b3JlPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCtMOZwobDmMKnw5jCs8OZwoc8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuX2lkIH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5lbWFpbDwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLkVtYWlsIH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKCh2YWx1ZSkgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuLy8gaW1wb3J0IHsgTWRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1jaGFuZ2UtcGFzc3dvcmQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImNoYW5nZVBhc3N3b3JkKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmsKpw5jCscOYwqfDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbmZpcm1cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5jCqsOYwrrDm8KMw5vCjMOYwrEgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWxcIiBtYXQtcmFpc2VkLWJ1dHRvbj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSlcclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG5cclxuICBcclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0UHJvZmlsZSgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS12aWV3IFtpZF09XCJmb3JtSWRcIj48L25ncy1mb3JtLXZpZXc+IC0tPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5nCiMObwozDmMKxw5jCp8ObwozDmMK0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi91c2VyL3BhbmVsL3Byb2ZpbGVcIiBtYXQtcmFpc2VkLWJ1dHRvbj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dChcInJvbGVzXCIpIHJvbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0QElucHV0KCkgZ3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRlZGl0UHJvZmlsZSgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWRhc2hib2FyZC1saW5rc1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dFdyYXAgaWQ9XCJjb25cIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyQgfCBhc3luYyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY29uIFtmeGZsZXhde21hcmdpbi1yaWdodDoyNXB4fTpob3N0e3dpZHRoOjEwMCV9YnV0dG9uIG1hdC1pY29ue2ZvbnQtc2l6ZTo0OHB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9YnV0dG9uLmxpbmt7cGFkZGluZzoyNXB4IDE1cHg7bWFyZ2luLWJvdHRvbToyNXB4fS50aXRsZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo1cHh9LmRlc2NyaXB0aW9ue292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDo5MCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRsaW5rczogYW55W107XHJcblx0bGlua3MkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmxpbmtzJCA9IHRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGRhdGEgPT4gZGF0YS5kYXNoYm9hcmRMaW5rcyk7XHJcblx0XHR0aGlzLmxpbmtzID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiw5nChcOYwrTDmMKnw5nCh8OYwq/DmcKHIMOYwq3DmMKzw5jCp8OYwqggw5rCqcOYwqfDmMKxw5vCjMOYwrHDm8KMXCIsXHJcblx0XHRcdFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcHJvZmlsZVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHRcdGljb246IFwiY3JlZGl0X2NhcmRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcGFzc3dvcmQvY2hhbmdlXCIsXHJcblx0XHRcdFx0dGl0bGU6IFwiw5jCqsOYwrrDm8KMw5vCjMOYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJzZWN1cml0eVwiXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd1c2VyLXJlc2V0LXBhc3N3b3JkLXJlcXVlc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+w5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPsOYwqjDmMKxw5jCp8Obwowgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPsOZwr7Dm8KMw5jCp8OZwoXDmsKpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319IMOYwqvDmMKnw5nChsObwozDmcKHIMOYwqrDmMKnIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxIMOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwq/DmcKIw5jCqMOYwqfDmMKxw5nChyDDmMKvw5jCscObwozDmMKnw5nCgcOYwqogw5nCvsObwozDmMKnw5nChcOawqkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuICAgICAgICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICBASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICAgICAgQElucHV0KCkgc2V0IHBlbmRpbmcoaXNQZW5kaW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpbWVyJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiBpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRha2VXaGlsZShpID0+IGkgKiAxMDAgPD0gMzAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IDMwMDAgLSBpICogMTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJPZlJlcXVlc3RlZC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gKHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLmdldFZhbHVlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnw5jCucOYwq/DmcKFIMOYwqfDmcKFw5rCqcOYwqfDmcKGIC4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICfDmcK+w5vCjMOYwqfDmcKFw5rCqSDDmMKsw5jCr8ObwozDmMKvIMOYwqjDmMKxw5jCp8Obwowgw5jCtMOZwoXDmMKnIMOYwqfDmMKxw5jCs8OYwqfDmcKEIMOawq/DmMKxw5jCr8ObwozDmMKvLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3RhcnRBY3Rpb24sIFNlYXJjaEZhaWxlZCwgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaFN1Y2NlZWQgfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Y2FuU2VhcmNoJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBTZWFyY2hTdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRzZWFyY2gkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRJbmZvKGRhdGEpLnBpcGUoXHJcblx0XHRcdFx0bWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzID09IG51bGwgPyBuZXcgU2VhcmNoRmFpbGVkKCkgOiBuZXcgU2VhcmNoU3VjY2VlZChyZXMpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNlYXJjaEZhaWxlZCgpKSlcclxuXHRcdFx0KTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vZmVhdHVyZS9mZWF0dXJlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vLi4vc2VhcmNoLWFjY291bnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XHJcblx0XHRcdGxldCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoeyBFbWFpbDogcGFyYW1zLkVtYWlsIH0gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKG1vZGVsKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tIFwiLi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPHVzZXItY2hhbmdlLXBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSdjaGFuZ2VQYXNzd29yZCgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgID48L3VzZXItY2hhbmdlLXBhc3N3b3JkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXAgPSBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdENoYW5nZVBhc3N3b3JkTW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvKS5zdWJzY3JpYmUoKHVzZXJJbmZvKSA9PiB7XHJcblx0XHRcdGlmICghdXNlckluZm8pIHJldHVybjtcclxuXHRcdFx0Ly8gVE9ETzpcclxuXHRcdFx0Ly8gdGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlVzZXJuYW1lID0gdXNlckluZm8uVXNlcm5hbWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuXHRcdHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5QYXNzd29yZCA9IHRoaXMuZm9ybUdyb3VwLmdldChcIlBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vZmVhdHVyZS9mZWF0dXJlLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlIH0gZnJvbSBcIi4uL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3VzZXIuY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXQtY29udGlhbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8cHJvZmlsZS1lZGl0XHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSd1cGRhdGVQcm9maWxlKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgICBbcm9sZXNdPVwicm9sZXMkXCJcclxuXHRcdFx0XHRbZ3JvdXBzXT1cImdyb3VwcyB8IGFzeW5jXCJcclxuXHRcdFx0XHRbZm9ybUlkXT1cIihjb25maWckfGFzeW5jKT8uZm9ybXMucHJvZmlsZV9lZGl0XCJcclxuICAgICAgICAgICAgICA+PC9wcm9maWxlLWVkaXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXJJbmZvcmFtYXRpb24kOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Zm9ybUdyb3VwID0gRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0cm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8VXNlck1vZHVsZUNvbmZpZz47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VyKTtcclxuXHRcdHRoaXMucm9sZXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZClcclxuXHRcdFx0Lm1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcyk7XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gdGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBPYnNlcnZhYmxlLm9mKFsgXCJ0ZXN0MVwiLCBcInRlc3QyXCIgXSk7XHJcblxyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQ7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQuc3Vic2NyaWJlKHVzZXJJbmZvID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGlmICh1c2VySW5mbyA9PSBudWxsKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdEVtYWlsOiB1c2VySW5mby5FbWFpbCxcclxuXHRcdFx0XHRSb2xlczogdXNlckluZm8uUm9sZXMsXHJcblx0XHRcdFx0R3JvdXBzOiB1c2VySW5mby5Hcm91cHNcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVByb2ZpbGUoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdFByb2ZpbGUoZGF0YSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSBcIi4uLy4uL2ZlYXR1cmUvZmVhdHVyZS5yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8IS0tIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJsaW5rc1wiPjwvcm91dGVyLW91dGxldD4gLS0+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjYm94LWxlZnR7YmFja2dyb3VuZDojZmZmfSNib3gtYm90dG9te2JhY2tncm91bmQ6IzJiMDAzM30jYm94LXJpZ2h0e2JhY2tncm91bmQ6IzAwMDgzMztwYWRkaW5nLXRvcDoxMHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxMHB4IWltcG9ydGFudH0jYm94LXJpZ2h0IGRpdntiYWNrZ3JvdW5kOiNmZmY7b3BhY2l0eTouNX0jYmFubmVyOm5vdCguYWN0aXZlKXtoZWlnaHQ6MTAwJTstd2Via2l0LWZpbHRlcjpncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxLjUpIG9wYWNpdHkoLjIpIGJsdXIoMnB4KTtmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCl9I3Mxe2JhY2tncm91bmQ6I2FhYX0jczJ7YmFja2dyb3VuZDojYmJifSNzM3tiYWNrZ3JvdW5kOiNjY2N9LnBlcnNvbmFsLWluZm97YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDoxMCU7d2lkdGg6OTAlO2hlaWdodDo0NjlweH0ucGVyc29uYWwtaW5mbyBoMntjb2xvcjojMDBiY2Q0O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MjRweDtmb250LWZhbWlseTppcmFuLXNhbnMtbGlnaHQhaW1wb3J0YW50fS5wZXJzb25hbC1pbmZvIGg2e2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTJweDtmbG9hdDpyaWdodDt3aWR0aDo1MCU7bWFyZ2luOjA7Y29sb3I6IzU1NTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIHB7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzAlO21hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctcmlnaHQ6MzBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIGRpdnt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cmlnaHQ6MTdweH0ucXVpY2stYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NTJweDtwYWRkaW5nLXRvcDo3OXB4fS5xdWljay1idG57YmFja2dyb3VuZC1jb2xvcjojMDBiY2Q0O21hcmdpbjoxMnB4IDEwcHg7aGVpZ2h0OjEwMHB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEwMHB4O2ZvbnQtc2l6ZToxN3B4O2NvbG9yOiNmZmZ9LmJhbm5lci1zZWN0aW9ue3RleHQtYWxpZ246Y2VudGVyfS5pbmZvLXNlY3Rpb257cGFkZGluZzo2MHB4IDI1cHggMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvZ3JleS5wbmcpIWltcG9ydGFudDtoZWlnaHQ6MTA0MHB4O3BhZGRpbmctYm90dG9tOjEyMHB4IWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdC8vIGlzX2FnZW50IDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhcHBSZWR1Y2VyLlVzZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChhcHBSZWR1Y2VyLmdldFVzZXIpO1xyXG5cdFx0Ly8gdGhpcy5pc19hZ2VudCA9IHNpZ25pblNlcnZpY2UuaXNfYWdlbnQoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlci1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5jCt8OZwoTDmMKnw5jCucOYwqfDmMKqIMOZwr7DmMKxw5nCiMOZwoHDmMKnw5vCjMOZwoQ8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudCAqbmdJZj0nZGF0YVN0YXR1cyQgfCBhc3luYyc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqfDm8KMw5nChcObwozDmcKEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KGluZm9ybWF0aW9uIHwgYXN5bmMpLkVtYWlsfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz5yb2xlczwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5Sb2xlcyB8IGpzb259fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5GaXJzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmMKuw5jCp8OZwobDmcKIw5jCp8OYwq/DmsKvw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTGFzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmsKpw5jCp8OYwrHDmMKow5jCscObwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlVzZXJuYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5nChMOZwoHDmcKGIMOZwofDmcKFw5jCscOYwqfDmcKHPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Nb2JpbGVOdW1iZXIgfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKsw5nChsOYwrPDm8KMw5jCqjwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57e3NleCQgfCBhc3luY319PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCqsOZwojDmcKEw5jCrzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuQmlydGhkYXRlIHwgcGVyc2lhbkRhdGUgOiBmYWxzZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkVtYWlsfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz57eyhpZGVudGlmaWVyVHlwZSQgfCBhc3luYyl9fTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuSWRlbnRpZmljYXRpb25ObyB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmMKnw5jCscObwozDmMKuIMOYwrnDmMK2w5nCiMObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5SZWdpc3RlckRhdGUgfCBwZXJzaWFuRGF0ZX19PC9wPlxyXG4gICAgICA8L2Rpdj4gLS0+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcblxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJwcm9maWxlLWVkaXQtYnV0dG9uXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9J2VkaXQnPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmAsXHJcbiAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaW5mb3JtYXRpb246IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuICAgIEBJbnB1dCgpIGRhdGFTdGF0dXMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcblxyXG4gICAgc2V4JCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gICAgaWRlbnRpZmllclR5cGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSRcIlxyXG4gICAgICAgICAgICAgICAgW2RhdGFTdGF0dXMkXT0nZGF0YVN0YXR1cyQnXHJcbiAgICAgICAgICAgID48L3VzZXItcHJvZmlsZT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRhdGFTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlcik7XHJcblx0XHR0aGlzLmRhdGFTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi91c2VyLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUVmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVzZXJFZmZlY3RzIH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlclJlZHVjZXJzIH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLnJlZHVjZXJzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNlYXJjaENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZExpbmtzQ29tcG9uZW50LFxyXG5cdFx0UmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQsXHJcblx0XHRGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1VzZXJNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFVzZXJNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzVXNlck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwidXNlclwiLCBVc2VyUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0Ly8gUmVzZXRQYXNzd29yZFJlcXVlc3RFZmZlY3RzLFxyXG5cdFx0XHRFZGl0UHJvZmlsZUVmZmVjdHMsXHJcblx0XHRcdC8vIENoYW5nZVBhc3N3b3JkRWZmZWN0cyxcclxuXHRcdFx0UHJvZmlsZVZpZXdFZmZlY3RzLFxyXG5cdFx0XHQvLyBTZWFyY2hFZmZlY3RzLFxyXG5cdFx0XHRVc2VyRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzVXNlck1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi9mZWF0dXJlL2ZlYXR1cmUucmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRNb2RlbCwgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCwgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTZXJ2aWNlIHtcclxuXHRudW1iZXJPZlJlcXVlc2V0ZWQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcclxuXHRcdHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMubnVtYmVyT2ZSZXF1ZXNldGVkJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZCk7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkUmVzZXRQYXNzd29yZFJlcXVlc3QoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1iZXJPZlJlcXVlc2V0ZWQkXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoY291bnQgPT4gKGNvdW50IDwgMyA/IE9ic2VydmFibGUub2YodHJ1ZSkgOiBPYnNlcnZhYmxlLm9mKGZhbHNlKSkpO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZFJlc2V0UGFzc3dvcmRSZXNldChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRsZXQgeyBUb2tlbiB9ID0gbW9kZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly93aWZpLnNoYXRlbC5pci9hcGkvdjEvcmVzZXQvdG9rZW5zLyR7VG9rZW59YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHRyZXF1ZXN0UmVzZXRQYXNzd29yZExpbmsoZGF0YTogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLnJlc2V0UGFzc3dvcmRSZXF1ZXN0KG1vZGVsKSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QodGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5lZGl0UHJvZmlsZSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwge1xyXG5cdFx0XHRcdHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVBhc3N3b3JkKGRhdGE6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucGF0Y2goXCJ0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmNoYW5nZVBhc3N3b3JkKG1vZGVsKVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0cmVzZXRQYXNzd29yZChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRsZXQgeyBUb2tlbiB9ID0gbW9kZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wYXRjaChgaHR0cDovL3dpZmkuc2hhdGVsLmlyL2FwaS92MS9yZXNldC90b2tlbnMvJHtUb2tlbn1gLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBQYXNzd29yZFNlcnZpY2VTdHViID0ge307XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgeyBQYXNzd29yZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFzc3dvcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMsXHJcblx0Q2hhbmdlUGFzc3dvcmRTdGFydCxcclxuXHRDaGFuZ2VQYXNzd29yZFN1Y2NlZWQsXHJcblx0Q2hhbmdlUGFzc3dvcmRGYWlsZWRcclxufSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdENoYW5nZVBhc3N3b3JkUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBDaGFuZ2VQYXNzd29yZFN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RDaGFuZ2VQYXNzd29yZExpbmskID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXNzd29yZFNlcnZpY2VcclxuXHRcdFx0XHQuY2hhbmdlUGFzc3dvcmQoZGF0YSlcclxuXHRcdFx0XHQubWFwKHJlcyA9PiBuZXcgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkKHJlcykpXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IENoYW5nZVBhc3N3b3JkRmFpbGVkKCkpKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0Ly9ARWZmZWN0KClcclxuXHQvLyAgICBSZXNldFBhc3N3b3JkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyAgICAgICAgLm9mVHlwZShSZXNldFBhc3N3b3JkQWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkQpXHJcblx0Ly8gICAgICAgIC5tYXAodG9QYXlsb2FkKVxyXG5cdC8vICAgICAgICAubWFwKChkYXRhKSA9PiBuZXcgUmVzZXRQYXNzd29yZFN0YXJ0KGRhdGEpKTtcclxuXHQvL1xyXG5cdC8vICAgIEBFZmZlY3QoKVxyXG5cdC8vICAgIFJlc2V0UGFzc3dvcmRMaW5rJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyAgICAgICAgLm9mVHlwZShSZXNldFBhc3N3b3JkQWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfU1RBUlQpXHJcblx0Ly8gICAgICAgIC5tYXAodG9QYXlsb2FkKVxyXG5cdC8vICAgICAgICAuc3dpdGNoTWFwKChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdC8vICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YSlcclxuXHQvLyAgICAgICAgICAgICAgICAubWFwKCgpID0+IG5ldyBSZXNldFBhc3N3b3JkU3VjY2VlZCgpKVxyXG5cdC8vICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBSZXNldFBhc3N3b3JkRmFpbGVkKCkpKVxyXG5cdC8vICAgICAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCwgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlld1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwidXNlci9wYW5lbFwiLFxyXG5cdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZExpbmtzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZS9lZGl0XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0eyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZ3NVc2VyUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJPYnNlcnZhYmxlIiwiaW5pdGlhbFN0YXRlIiwiZ2V0U3RhdHVzIiwidXNlclJlZHVjZXIudXNlclJlZHVjZXIiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlciIsImNoYW5nZVBhc3N3b3JkLnJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyLnJlZHVjZXIiLCJlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0VXNlciIsInVzZXJSZWR1Y2VyLmdldFVzZXIiLCJzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyIsImdldFVzZXJJbmZvIiwic2VhcmNoUmVkdWNlci5nZXRVc2VySW5mbyIsIkJlaGF2aW9yU3ViamVjdCIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvIiwiRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzIiwiRmVhdHVyZVJlZHVjZXIuZ2V0VXNlciIsImFwcFJlZHVjZXIuZ2V0VXNlciIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyIsIkZlYXR1cmVSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: "",
        redirectTo: "/",
        pathMatch: "full"
    }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
});


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-main\r\n  [app-config]=\"app_config | async\"\r\n></layout-main>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#purchase-fab-button {\n  position: fixed;\n  bottom: 23px;\n  left: 31px; }\n\nmd-progress-bar {\n  position: absolute !important; }\n\n.with-margin #app-main-container {\n  margin-top: 25px;\n  padding-right: 25px;\n  padding-left: 25px; }\n\n.second_sidebar {\n  width: 380px; }\n\n.more-detail {\n  margin: 8px;\n  box-sizing: border-box;\n  padding: 10px;\n  text-align: center;\n  width: 96%;\n  border: 1px solid #dedede;\n  outline: 0;\n  cursor: pointer;\n  transition: all .3s ease; }\n\n.more-detail:hover {\n    background: #eee; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @soushians/layout */ "./dist/@soushians/layout/fesm5/soushians-layout.js");
/* harmony import */ var _soushians_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @soushians/socket */ "./dist/@soushians/socket/fesm5/soushians-socket.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { BehaviorSubject } from "rxjs/BehaviorSubject";




var AppComponent = /** @class */ (function () {
    function AppComponent(store, router, socketService) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.socketService = socketService;
        this.app_config = this.store.select(_soushians_config__WEBPACK_IMPORTED_MODULE_3__["getAppConfig"]);
        setTimeout(function () {
            _this.store.dispatch(new _soushians_layout__WEBPACK_IMPORTED_MODULE_4__["ChangeToolbatToComfortableModeAction"]());
        }, 3000);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _soushians_socket__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @soushians/shared */ "./dist/@soushians/shared/fesm5/soushians-shared.js");
/* harmony import */ var _soushians_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @soushians/authentication */ "./dist/@soushians/authentication/fesm5/soushians-authentication.js");
/* harmony import */ var _soushians_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @soushians/layout */ "./dist/@soushians/layout/fesm5/soushians-layout.js");
/* harmony import */ var _soushians_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @soushians/user */ "./dist/@soushians/user/fesm5/soushians-user.js");
/* harmony import */ var _soushians_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @soushians/config */ "./dist/@soushians/config/fesm5/soushians-config.js");
/* harmony import */ var _soushians_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @soushians/source */ "./dist/@soushians/source/fesm5/soushians-source.js");
/* harmony import */ var _soushians_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @soushians/socket */ "./dist/@soushians/socket/fesm5/soushians-socket.js");
/* harmony import */ var _soushians_diagram__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @soushians/diagram */ "./dist/@soushians/diagram/fesm5/soushians-diagram.js");
/* harmony import */ var _soushians_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @soushians/form */ "./dist/@soushians/form/fesm5/soushians-form.js");
/* harmony import */ var _static_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./static-page */ "./src/app/static-page/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// module configs

// import { NgsBpmnModule } from "./bpmn";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core__WEBPACK_IMPORTED_MODULE_16__["CoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
                // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                    maxAge: 25
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]),
                _soushians_layout__WEBPACK_IMPORTED_MODULE_8__["NgsLayoutModule"].forRoot(),
                _soushians_authentication__WEBPACK_IMPORTED_MODULE_7__["NgsAuthenticationModule"].forRoot({
                    env: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]
                }),
                _soushians_config__WEBPACK_IMPORTED_MODULE_10__["NgsConfigModule"].forRoot({
                    env: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"],
                    dev_api_host: "http://localhost:3000",
                    prod_api_host: "http://localhost:3000"
                }),
                _soushians_diagram__WEBPACK_IMPORTED_MODULE_13__["NgsDiagramModule"].forRoot(),
                _soushians_user__WEBPACK_IMPORTED_MODULE_9__["NgsUserModule"].forRoot(),
                _soushians_user__WEBPACK_IMPORTED_MODULE_9__["NgsUserRoutingModule"],
                // NgsBpmnModule.forRoot(),
                _soushians_socket__WEBPACK_IMPORTED_MODULE_12__["NgsSocketModule"].forRoot(),
                _soushians_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _soushians_source__WEBPACK_IMPORTED_MODULE_11__["SourceModule"],
                _static_page__WEBPACK_IMPORTED_MODULE_15__["StaticPageModule"],
                _soushians_form__WEBPACK_IMPORTED_MODULE_14__["NgsFormModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _dashboard__WEBPACK_IMPORTED_MODULE_20__["DashboardModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
var reducers = {};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_8__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [],
            providers: [],
            exports: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });




/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-components/dashboard/dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");


var routes = [
    {
        path: 'dashboard',
        component: _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        children: []
    }
];
//{ path: '**', component: PageNotFoundComponent }
var DashboardRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _soushians_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @soushians/shared */ "./dist/@soushians/shared/fesm5/soushians-shared.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _smart_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-components */ "./src/app/dashboard/smart-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _soushians_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]],
            declarations: [_smart_components__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            providers: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardComponent, DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-components/dashboard/dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _smart_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });

/* harmony import */ var _dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return _dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"]; });

//import { DashboardComponent } from './smart-components';




/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#box-left {\r\n    background: #2B0033;\r\n    background: #fff;\r\n    /*height:1200px;*/\r\n}\r\n\r\n#box-bottom {\r\n    background: #2B0033;\r\n    /*height:1200px;*/\r\n}\r\n\r\n#box-right {\r\n    background: #000833;\r\n    /*height:1200px;*/\r\n    padding-top: 10px !important;\r\n    padding-bottom: 10px !important;\r\n}\r\n\r\n#box-right div {\r\n    background: #fff;\r\n    opacity: 0.5;\r\n}\r\n\r\n#banner:not(.active) {\r\n    height: 100%;\r\n    -webkit-filter:grayscale(100%) brightness(1.5) opacity(0.2) blur(2px);\r\n            filter:grayscale(100%) brightness(1.5) opacity(0.2) blur(2px);\r\n}\r\n\r\n#s1 {\r\n    background: #aaa;\r\n}\r\n\r\n#s2 {\r\n    background: #bbb;\r\n}\r\n\r\n#s3 {\r\n    background: #ccc;\r\n}\r\n\r\n.personal-info {\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    position: relative;\r\n    right: 10%;\r\n    width: 90%;\r\n    height: 469px;\r\n}\r\n\r\n.personal-info h2 {\r\n    color: #00bcd4;\r\n    font-weight: normal;\r\n    font-size: 24px;\r\n    font-family: 'iran-sans-light' !important;\r\n}\r\n\r\n.personal-info h6 {\r\n    font-weight: normal;\r\n    font-size: 12px;\r\n    float: right;\r\n    width: 50%;\r\n    margin: 0;\r\n    color: #555;\r\n    border-bottom: 2px solid #ececec;\r\n}\r\n\r\n.personal-info p {\r\n    float: right;\r\n    width: 30%;\r\n    margin: 0;\r\n    font-size: 13px;\r\n    padding-right: 30px;\r\n    border-bottom: 2px solid #ececec;\r\n}\r\n\r\n.personal-info div {\r\n    width: 100%;\r\n    height: 50px;\r\n    position: relative;\r\n    line-height: 52px;\r\n    right: 17px;\r\n}\r\n\r\n.personal-info-inner {}\r\n\r\n.quick-box {\r\n    width: 100%;\r\n    height: 50px;\r\n    position: relative;\r\n    line-height: 52px;\r\n    padding-top: 79px;\r\n}\r\n\r\n.quick-btn {\r\n    background-color: #00bcd4;\r\n    margin: 12px 10px;\r\n    height: 100px;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    font-size: 17px;\r\n    color: #fff;\r\n}\r\n\r\n.banner-section {\r\n    text-align: center;\r\n    /*background-color: #f6882f;*/\r\n    /*filter:grayscale(100%);*/\r\n}\r\n\r\n.info-section {\r\n    padding: 10px 25px;\r\n    padding-top: 60px;\r\n    background-color: #f7f7f7;\r\n    background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/grey.png') !important;\r\n    height: 1040px;\r\n    padding-bottom: 120px !important;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/smart-components/dashboard/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/smart-components/dashboard/index.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/smart-components/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/dashboard/smart-components/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/smart-components/index.ts ***!
  \*****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/smart-components/dashboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          درباره ما\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n\r\n      <mat-card-content>\r\n        <h4>ما در یک نگاه</h4>\r\n        <p>\r\n          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.\r\n          طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته\r\n          شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای\r\n          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه\r\n          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در\r\n          نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان\r\n          حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند\r\n          تا مرحله طراحی و صفحه‌بندی را به پایان برند.\r\n        </p>\r\n        <p>\r\n          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.\r\n          طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته\r\n          شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای\r\n          صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه\r\n          طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در\r\n          نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان\r\n          حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند\r\n          تا مرحله طراحی و صفحه‌بندی را به پایان برند.\r\n        </p>\r\n\r\n        برخی از مهم‌ترین افتخارات\r\n        <ul>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n\r\n        <h4>مهم‌ترین فعالیت‌ها</h4>\r\n\r\n        اصلی‌ترین فعالیت‌های گروه شرکت‌های را می‌توان به صورت موارد زیر برشمرد:\r\n        <ul>\r\n          <li>ارایه دهنده سرویس اینترنت پر سرعت ADSL2+ و‌VDSL </li>\r\n          <li>ارایه سرویس وای فای عمومی (Public WiFi)</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n\r\n\r\n        <h4>زیرساخت‌های قانونی:</h4>\r\n\r\n        فعالیت در مسیری که هم‌اینک در آن گام بر می‌دارد، مستلزم فراهم ساختن زیرساخت‌های قانونی بسیاری‌ است که از جمله مهم‌ترین آن‌ها\r\n        می‌توان به موارد زیر اشاره کرد:\r\n        <ul>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید نامفهوم نامفهوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم ا لورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژی متن نامفهوم نامفهوم استفاده صنعت شرالورم ایپسوم صنعت تولید.</li>\r\n          <li>لورم ایپسوم تکنولوژی پیشرو تولید لورم ایپسوم تکنولوژوم استفاده صنعت شرایط لورم ایپسوم صنعت تولید.</li>\r\n        </ul>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions>\r\n        <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/about-us/about-us.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/about-us/about-us.component.ts ***!
  \****************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/static-page/dumb-components/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/static-page/dumb-components/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n    <div fxLayout='row' fxLayoutWrap>\r\n      <mat-card fxFlex>\r\n        <img mat-card-image src=\"../../assets/images/map.jpg\" />\r\n        <mat-card-header>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <h4>\r\n            تماس با ما\r\n          </h4>\r\n          <p>\r\n            آدرس : تهران، خیابان شریعتی، پایین تر از پل صدر، بن بست\r\n            <br /> کدپستی : ۱۹۱۴۷۳۳۴۴۱\r\n          </p>\r\n          <p>\r\n            تلفن : 1223654\r\n          </p>\r\n          <p>\r\n            نمابر : 1122554\r\n          </p>\r\n          <p>\r\n            پست الکترونیک : sales [at] bimeh [dot] ir\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/contact-us/contact-us.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/contact-us/contact-us.component.ts ***!
  \********************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.html":
/*!********************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- قوانین و مقررات -->\r\n<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n\r\n    <mat-card-actions>\r\n      <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/faq/faq.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/static-page/dumb-components/faq/faq.component.ts ***!
  \******************************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/static-page/dumb-components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/static-page/dumb-components/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/static-page/dumb-components/index.ts ***!
  \******************************************************/
/*! exports provided: PageNotFoundComponent, PoliciesComponent, AboutUsComponent, ContactUsComponent, FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]; });

/* harmony import */ var _policies_policies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./policies/policies.component */ "./src/app/static-page/dumb-components/policies/policies.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return _policies_policies_component__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"]; });

/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/static-page/dumb-components/about-us/about-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]; });

/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/static-page/dumb-components/contact-us/contact-us.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]; });

/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/static-page/dumb-components/faq/faq.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"]; });








/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n      <h1>404</h1>\r\n      <h3> صفحـه مورد نظـر شما یافت نشـد</h3>\r\n      <span>  ممکن است این صفحه حذف یا منتقل شده باشد</span>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; }\r\n.upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; }\r\n.upper-menu a:hover { color: #f16321; }\r\n.upper-menu .last { border: none; }\r\n.upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; }\r\n.upper-menu-div-last { padding: 0 10px; }\r\n\r\n:host{\r\n    width: 100%;\r\n}*/\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/page-not-found/page-not-found.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/static-page/dumb-components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- قوانین و مقررات -->\r\n<div fxLayoutAlign=\"center center\">\r\n  <mat-accordion fxFlex=\"800px\">\r\n\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          لورم ایپسوم\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          لورم ایپسوم لورم ایپسوم\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه\r\n      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای\r\n      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم\r\n      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این\r\n      صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل\r\n      حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\r\n    </mat-expansion-panel>\r\n\r\n    <mat-card-actions>\r\n      <button fxFlex mat-raised-button routerLink=\"\" color=\"primary\">بازگشت به صفحه اصلی</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-accordion>\r\n</div>"

/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 25px; }\n"

/***/ }),

/***/ "./src/app/static-page/dumb-components/policies/policies.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/static-page/dumb-components/policies/policies.component.ts ***!
  \****************************************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PoliciesComponent = /** @class */ (function () {
    function PoliciesComponent() {
    }
    PoliciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./policies.component.html */ "./src/app/static-page/dumb-components/policies/policies.component.html"),
            styles: [__webpack_require__(/*! ./policies.component.scss */ "./src/app/static-page/dumb-components/policies/policies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PoliciesComponent);
    return PoliciesComponent;
}());



/***/ }),

/***/ "./src/app/static-page/index.ts":
/*!**************************************!*\
  !*** ./src/app/static-page/index.ts ***!
  \**************************************/
/*! exports provided: StaticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-page.module */ "./src/app/static-page/static-page.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticPageModule", function() { return _static_page_module__WEBPACK_IMPORTED_MODULE_0__["StaticPageModule"]; });




/***/ }),

/***/ "./src/app/static-page/static-page.module.ts":
/*!***************************************************!*\
  !*** ./src/app/static-page/static-page.module.ts ***!
  \***************************************************/
/*! exports provided: StaticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPageModule", function() { return StaticPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _static_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static-page.routing-module */ "./src/app/static-page/static-page.routing-module.ts");
/* harmony import */ var _dumb_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dumb-components */ "./src/app/static-page/dumb-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var StaticPageModule = /** @class */ (function () {
    function StaticPageModule() {
    }
    StaticPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                // BrowserAnimationsModule,
                _static_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["RoutingModule"]
            ],
            declarations: [
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["PoliciesComponent"],
                _dumb_components__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"]
            ],
            exports: []
        })
    ], StaticPageModule);
    return StaticPageModule;
}());



/***/ }),

/***/ "./src/app/static-page/static-page.routing-module.ts":
/*!***********************************************************!*\
  !*** ./src/app/static-page/static-page.routing-module.ts ***!
  \***********************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dumb_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dumb-components */ "./src/app/static-page/dumb-components/index.ts");


var routes = [
    {
        path: 'static',
        // component: SessionContainerComponent,
        children: [
            {
                path: 'about-us',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["AboutUsComponent"]
            },
            {
                path: 'contact-us',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"]
            },
            {
                path: 'policies',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["PoliciesComponent"]
            },
            {
                path: 'faq',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["FaqComponent"]
            },
            {
                path: '**',
                component: _dumb_components__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundComponent"]
            }
        ]
    }
];
var RoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\@ng2-starter\starter\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchValidator, stringTemplate } from '@soushians/shared';
import { __assign, __decorate, __metadata, __extends } from 'tslib';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { SignInActionTypes } from '@soushians/authentication';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { MatSnackBar, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsFormModule } from '@soushians/form';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    server: "frontend_server",
    env: {
        production: false,
        frontend_server: "user/module/frontend/server/did/not/set",
        server: "user/module/server/did/not/set"
    },
    endpoints: {
        // resetPasswordRequest: '',
        changePassword: "",
        editProfile: "",
        getAccountInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: [],
    responseToUserInfo: function (user$) { return user$; },
    mapUserDisplayName: function (user$) {
        return user$.map(function (user) {
            debugger;
            return user.Username;
        });
    }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.Roles = [];
        this.Groups = [];
    }
    return UserModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                return new FormGroup({
                    Password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
                    Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                return new FormGroup({
                    Username: new FormControl('', [Validators.minLength(8), Validators.required]),
                    Captcha: new FormControl(null, [Validators.required]),
                    Token: new FormControl(null, [Validators.required]),
                    Type: new FormControl('sms'),
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                return new FormGroup({
                    Token: new FormControl(null, [Validators.required]),
                    Password: new FormControl("", [Validators.minLength(8), Validators.required]),
                    Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
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
            return this;
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Email: new FormControl(null, [Validators.required]),
                    Roles: new FormControl(null, [Validators.required]),
                    Groups: new FormControl(null, [Validators.required])
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
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                return new FormGroup({
                    Username: new FormControl("", [Validators.minLength(8), Validators.required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    ProfileViewModel.Request = Request;
    var Response = /** @class */ (function (_super) {
        __extends(Response, _super);
        function Response() {
            return _super.call(this) || this;
        }
        return Response;
    }(UserModel));
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FailedLoginModel = /** @class */ (function () {
    function FailedLoginModel() {
    }
    return FailedLoginModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserConfigurationService = /** @class */ (function () {
    function UserConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getUserModuleConfig).subscribe(function (userConfig) {
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
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ UserConfigurationService.ngInjectableDef = defineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: UserConfigurationService, providedIn: "root" });
    return UserConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
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
            return __assign({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return __assign({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var getAccountInfo = function (state) { return state.data; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configurationService.config$.subscribe(function (config) { return (_this.config = config); });
        setTimeout(function () {
            _this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    UserService.prototype.getAccountInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.profileInformation != ""; })
            .take(1)
            .switchMap(function (config) {
            return _this.http
                .get(config.env[config.server] + config.endpoints.profileInformation)
                .let(config.responseToUserInfo)
                .pipe(map(function (response) {
                /** @type {?} */
                var user = Object.assign({}, response);
                if (user.Role) {
                    user.Roles = [user.Role];
                }
                return user;
            }));
        });
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
        /** @type {?} */
        var model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
            .map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); });
    };
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
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
            .select(getAccountInfo)
            .filter(function (user) { return user && user.Roles != undefined; })
            .take(1)
            .map(function (user) { return user.Roles.indexOf(role) > -1; });
    };
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = defineInjectable({ factory: function UserService_Factory() { return new UserService(inject(HttpClient), inject(Store), inject(UserConfigurationService)); }, token: UserService, providedIn: "root" });
    return UserService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new EditProfileStart(data); }));
        this.RequestEditProfileLink$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.editProfile(data); }), map(function (res) { return new EditProfileSucceed(res); }), catchError(function () { return of(new EditProfileFailed()); }));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => Observable.of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(map(function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
    EditProfileEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EditProfileEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: UserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], EditProfileEffects.prototype, "goToView$", void 0);
    return EditProfileEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProfileViewEffects = /** @class */ (function () {
    function ProfileViewEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetProfileStart(); }));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.userService
                .getAccountInfo()
                .pipe(map(function (res) { return new GetProfileSucceed(res); }), catchError(function () { return Observable.of(new GetProfileFailed()); }));
        }));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new RefreshUserInfoAction(data); }));
    }
    ProfileViewEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProfileViewEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "getProfile$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
    return ProfileViewEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$1 = {
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
            return __assign({}, state);
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return __assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return __assign({}, state);
        }
        case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return __assign({}, state, { disable: true });
        }
        case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return __assign({}, state, { disable: false });
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
/** @type {?} */
var getStatus = function (state) { return state.disable; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$2 = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$3 = {
    status: "pristine"
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
                status: "dirty"
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_START: {
            return {
                status: "pending"
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
            return {
                status: "succeed"
            };
        }
        case EditProfileActionTypes.EDIT_PROFILE_FAILED: {
            return {
                status: "failed"
            };
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$4 = {
    status: "pristine",
    data: /** @type {?} */ ({})
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
            return __assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return __assign({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return __assign({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return __assign({}, state, { status: "failed" });
        }
        case SearchActionTypes.CLEAR_SEARCHED_USER: {
            return initialState$4;
        }
        default: {
            return state;
        }
    }
}
/** @type {?} */
var getStatus$3 = function (state) { return state.status; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var UserReducers = {
    user: userReducer,
    resetPasswordRequest: reducer,
    changePassword: reducer$1,
    searchView: reducer$3,
    editProfile: reducer$2
};
/** @type {?} */
var selectFeatureState = createFeatureSelector("user");
/** @type {?} */
var getUserInforamtionStatus = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
/** @type {?} */
var isSignedIn = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
/** @type {?} */
var selectResetPasswordRequestState = createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
/** @type {?} */
var getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
/** @type {?} */
var getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
/** @type {?} */
var selectUserInformaionState = createSelector(selectFeatureState, function (state) { return state.user; });
/** @type {?} */
var getAccountInfo$2 = createSelector(selectUserInformaionState, getAccountInfo);
/** @type {?} */
var selectSearchState = createSelector(selectFeatureState, function (state) { return state.searchView; });
/** @type {?} */
var getSearchStatus = createSelector(selectSearchState, getStatus$3);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DashboardContainerComponent = /** @class */ (function () {
    // is_agent : Observable<boolean>;
    function DashboardContainerComponent(store) {
        this.store = store;
        this.user$ = this.store.select(getAccountInfo$2);
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
        { type: Component, args: [{
                    selector: "user-dashboard-container",
                    template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\n<div fxLayoutAlign=\"center\">\n    <router-outlet></router-outlet>\n</div>",
                    styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                },] },
    ];
    /** @nocollapse */
    DashboardContainerComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return DashboardContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.map(function (data) { return data.dashboardLinks; });
        this.links = [
            {
                title: "مشاهده حساب کاربری",
                route: "/user/panel/profile",
                // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                icon: "person"
            }
        ];
    }
    /**
     * @return {?}
     */
    DashboardLinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DashboardLinksComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-dashboard-links",
                    template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n</div>",
                    styles: ["#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                },] },
    ];
    /** @nocollapse */
    DashboardLinksComponent.ctorParameters = function () { return [
        { type: UserConfigurationService },
        { type: Store }
    ]; };
    return DashboardLinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        // @Effect()
        // updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
        // 	map(action => action.payload),
        // 	map(user => {
        // 		return new GetProfileSucceed(user);
        // 	})
        // );
        this.getAccountInfo$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(function () {
            return new GetProfile();
        }));
        this.signout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(map(function () { return new RefreshUserInfoAction(/** @type {?} */ ({})); }));
    }
    UserEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: UserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "getAccountInfo$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "signout$", void 0);
    return UserEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(store) {
        this.store = store;
        this.formGroup = ProfileViewModel.Request.formGroup;
        this.userDataLoaded$ = new BehaviorSubject$1(false);
        this.userNotFound$ = new BehaviorSubject$1(false);
        this.user = this.store.select(getAccountInfo$2);
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
        { type: Component, args: [{
                    selector: "search",
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\n        </div>\n        <div fxFlex=\"nogrow\">\n          <!-- {{(user | async).Email}} -->\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
        this.submited = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'user-change-password',
                    template: "<div fxFlex=\"450px\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\n        </mat-form-field>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return []; };
    ChangePasswordComponent.propDecorators = {
        formGroup: [{ type: Input }],
        submited: [{ type: Output }]
    };
    return ChangePasswordComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(router) {
        this.router = router;
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} form
     * @return {?}
     */
    ProfileEditComponent.prototype.editProfile = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        if (!form.valid)
            return;
        this.submited.emit(form.value);
    };
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.goback = /**
     * @return {?}
     */
    function () {
        this.router.navigate([".."]);
    };
    ProfileEditComponent.decorators = [
        { type: Component, args: [{
                    selector: "profile-edit",
                    template: "<div fxFlex=\"450px\">\n\n  \n  <ngs-form-view #form [id]=\"formId\" [card]=\"true\" (accept)=\"editProfile(form.formGroup)\" (cancel)=\"goback()\" ></ngs-form-view>\n  <!-- <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button type=\"button\" routerLink=\"..\" mat-button color=\"primary\">\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n        <button type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n      </mat-card-actions>\n    </mat-card>\n  </form> -->\n</div>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    ProfileEditComponent.propDecorators = {
        submited: [{ type: Output }],
        userInfo: [{ type: Input }],
        formId: [{ type: Input }],
        roles$: [{ type: Input, args: ["roles",] }],
        groups: [{ type: Input }]
    };
    return ProfileEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100)
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
            /** @type {?} */
            var message = (this.maximumResendingHappend$.getValue())
                ? 'عدم امکان ...'
                : 'پیامک جدید برای شما ارسال گردید.';
            this.snackBar.open(message, '', {
                duration: 3000,
            });
        }
    };
    ResetPasswordRequestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-reset-password-request',
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\n      </mat-radio-group>\n      <mat-form-field fxFlexFill>\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\n        <span *ngIf='!(canRequestPin | async)'>\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\n        </span>\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\n        </div>\n        <div *ngIf='(maximumResendingHappend$ | async)'>\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n        </div>-->\n      </button>\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\n    </mat-card-actions>\n  </mat-card>\n</form>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ResetPasswordRequestComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    ResetPasswordRequestComponent.propDecorators = {
        submitted: [{ type: Output }],
        formGroup: [{ type: Input }],
        numberOfRequested: [{ type: Input }],
        canRequestPin: [{ type: Input }],
        pending: [{ type: Input }]
    };
    return ResetPasswordRequestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SearchEffects = /** @class */ (function () {
    function SearchEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.canSearch$ = this.actions$
            .ofType(SearchActionTypes.SEARCH)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new SearchStartAction(data); }));
        this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.userService.getInfo(data).pipe(map(function (res) {
                return res == null ? new SearchFailed() : new SearchSucceed(res);
            }), catchError(function () { return of(new SearchFailed()); }));
        }));
    }
    SearchEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SearchEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SearchEffects.prototype, "canSearch$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SearchEffects.prototype, "search$", void 0);
    return SearchEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FeatureContainerComponent = /** @class */ (function () {
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            _this.store.dispatch(new Search(model));
        });
    }
    FeatureContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    FeatureContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return FeatureContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.store.select(getAccountInfo$2).subscribe(function (userInfo) {
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
        { type: Component, args: [{
                    template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                },] },
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return ChangePasswordContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProfileEditContainerComponent = /** @class */ (function () {
    function ProfileEditContainerComponent(store, configService) {
        this.store = store;
        this.configService = configService;
        this.userInforamation$ = this.store.select(getAccountInfo$2);
        this.roles$ = this.store
            .select(getAppConfig)
            .filter(function (config) { return config != undefined; })
            .map(function (config) { return config.Config.Roles; });
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = Observable.of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ProfileEditContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
        { type: Component, args: [{
                    selector: "profile-edit-contianer",
                    template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [userInfo]=\"userInforamation$ | async\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditContainerComponent.ctorParameters = function () { return [
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    return ProfileEditContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.info = [];
    }
    Object.defineProperty(ProfileComponent.prototype, "information", {
        set: /**
         * @param {?} information
         * @return {?}
         */
        function (information) {
            var _this = this;
            if (!information)
                return;
            Object.keys(information).forEach(function (k) { return _this.info.push([k, information[k]]); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-profile",
                    template: "<div fxFlex=\"450px\">\n  <router-outlet name=\"ngs-user-profile-view\"></router-outlet>\n  <router-outlet></router-outlet>\n  <!-- <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\n            <p fxFlex='40'>{{item[0]}}</p>\n            <p fxFlex='60'>{{item[1]}}</p>\n        </div>\n     \n    </mat-card-content>\n\n    <mat-card-actions align=\"end\">\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card> -->\n</div>\n\n\n\n<!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div> -->\n<!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        information: [{ type: Input }],
        dataStatus$: [{ type: Input }]
    };
    return ProfileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ProfileContainerComponent = /** @class */ (function () {
    function ProfileContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(getAccountInfo$2);
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
        { type: Component, args: [{
                    template: "<user-profile\n                [information]=\"data$ | async\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
                },] },
    ];
    /** @nocollapse */
    ProfileContainerComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProfileContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule,
                        NgsFormModule
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
        { type: NgModule, args: [{
                    imports: [
                        NgsUserModule,
                        StoreModule.forFeature("user", UserReducers),
                        EffectsModule.forFeature([
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
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
/** @type {?} */
var NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var NgsUserModuleOutlets = {
    ngs_user_profile_view: "ngs-user-profile-view",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserFacadeService = /** @class */ (function () {
    function UserFacadeService(store, configService) {
        this.store = store;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    UserFacadeService.prototype.getDisplayName = /**
     * @return {?}
     */
    function () {
        return this.store.select(getAccountInfo$2).let(this.configService.config$.getValue().mapUserDisplayName);
        // .pipe(filter(displayName => displayName !== undefined));
    };
    /**
     * @return {?}
     */
    UserFacadeService.prototype.getInfo = /**
     * @return {?}
     */
    function () {
        return this.store.select(getAccountInfo$2);
    };
    UserFacadeService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserFacadeService.ctorParameters = function () { return [
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserFacadeService.ngInjectableDef = defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(inject(Store), inject(UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
    return UserFacadeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgsUserModuleOutlets, UserService, UserFacadeService, getAccountInfo$2 as getAccountInfo, UserActionTypes, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel, NgsUserModule, RootNgsUserModule, routes, NgsUserRoutingModule, ChangePasswordContainerComponent as ɵp, reducer$1 as ɵu, ChangePasswordComponent as ɵh, getAccountInfo as ɵs, userReducer as ɵr, DashboardContainerComponent as ɵo, DashboardLinksComponent as ɵk, FeatureContainerComponent as ɵn, UserEffects as ɵz, EditProfileEffects as ɵx, reducer$2 as ɵw, ProfileEditContainerComponent as ɵq, ProfileEditComponent as ɵi, ProfileContainerComponent as ɵj, ProfileViewEffects as ɵy, ProfileComponent as ɵg, reducer as ɵt, ResetPasswordRequestComponent as ɵm, reducer$3 as ɵv, SearchComponent as ɵf, UserConfigurationService as ɵl, UserReducers as ɵb, selectFeatureState as ɵd, selectUserInformaionState as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL2NoYW5nZS1wYXNzd29yZC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi91c2VyLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXItb3V0bGV0cy5lbnVtLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlcnZpY2VzL3VzZXIuZmFjYWRlLXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlck1vZHVsZUNvbmZpZyB7XHJcblx0c2VydmVyPzogc3RyaW5nO1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6IHN0cmluZztcclxuXHRcdGNoYW5nZVBhc3N3b3JkPzogc3RyaW5nO1xyXG5cdFx0ZWRpdFByb2ZpbGU/OiBzdHJpbmc7XHJcblx0XHRnZXRBY2NvdW50SW5mbz86IHN0cmluZztcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbj86IHN0cmluZztcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGZvcm1zPzoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBzdHJpbmc7XHJcblx0fTtcclxuXHRkYXNoYm9hcmRMaW5rcz86IHtcclxuXHRcdHJvdXRlOiBzdHJpbmc7XHJcblx0XHRpY29uOiBzdHJpbmc7XHJcblx0XHR0aXRsZTogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRyZXNwb25zZVRvVXNlckluZm8/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0bWFwVXNlckRpc3BsYXlOYW1lPzogKHVzZXI6IE9ic2VydmFibGU8YW55PikgPT4gT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdHNlcnZlcjogXCJmcm9udGVuZF9zZXJ2ZXJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcInVzZXIvbW9kdWxlL2Zyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcInVzZXIvbW9kdWxlL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiAnJyxcclxuXHRcdGNoYW5nZVBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0ZWRpdFByb2ZpbGU6IFwiXCIsXHJcblx0XHRnZXRBY2NvdW50SW5mbzogXCJcIixcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbjogXCJcIlxyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogJycsXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBcIlwiXHJcblx0fSxcclxuXHRkYXNoYm9hcmRMaW5rczogW10sXHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiAodXNlciQpID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogKHVzZXIkKSA9PlxyXG5cdFx0dXNlciQubWFwKCh1c2VyKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRyZXR1cm4gdXNlci5Vc2VybmFtZTtcclxuXHRcdH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVc2VyTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdC8vIEZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIExhc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gVXNlcm5hbWU6IHN0cmluZztcclxuXHREaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5Sb2xlcyA9IFtdO1xyXG5cdFx0dGhpcy5Hcm91cHMgPSBbXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRVc2VybmFtZTogc3RyaW5nO1xyXG5cdFx0UGFzc3dvcmQ6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCA9IHt9IGFzIENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNykgXSksXHJcblx0XHRcdFx0Q29uZmlybTogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgTWF0Y2hWYWxpZGF0b3IoXCJQYXNzd29yZFwiKSBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcblxyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFJlcXVlc3RCb2R5KFwicGVnYWhcIilcclxuICAgICAgICBUb2tlbjogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbignYm9keScpXHJcbiAgICAgICAgQ2FwdGNoYTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbigndXJsJylcclxuICAgICAgICAvL0BWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuICAgICAgICBUeXBlOiAnc21zJyB8ICdlbWFpbCc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IHRoaXMuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBUb2tlbjogdGhpcy5Ub2tlbixcclxuICAgICAgICAgICAgICAgIENhcHRjaGE6IHRoaXMuQ2FwdGNoYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFR5cGU6IG5ldyBGb3JtQ29udHJvbCgnc21zJyksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0XHRUb2tlbjogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0XHQvL1Rva2VuOiB0aGlzLlRva2VuLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0UHJvZmlsZV9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRFbWFpbDogc3RyaW5nO1xyXG5cdFx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8UmVxdWVzdD4gPSB7fSBhcyBSZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0RW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um9sZXM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPiB7XHJcblx0XHRSZXN1bHQ6IHsgVXNlcjogVXNlck1vZGVsIH07XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlc3BvbnNlID0ge30gYXMgUmVzcG9uc2UpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGV4dHJhY3REYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5SZXN1bHQuVXNlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlVmlld01vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdEVtYWlsOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIFVzZXJNb2RlbCB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmFpbGVkTG9naW5Nb2RlbCB9IGZyb20gJy4vZmFpbGVkLWxvZ2luLm1vZGVsJztcclxuXHJcbmV4cG9ydCBtb2R1bGUgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IEZhaWxlZExvZ2luUmVwb3J0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2UgIHtcclxuICAgICAgICBkYXRhOiBGYWlsZWRMb2dpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGYWlsZWRMb2dpbk1vZGVsIHtcclxuICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgVHJ5RGF0ZTogRGF0ZTtcclxuICAgIE1hY0FkZHJlc3M6IHN0cmluZztcclxuICAgIElwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgUmVhc29uOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXJNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9QUk9GSUxFID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVcIixcclxuXHRHRVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0R0VUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRHRVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVWaWV3QWN0aW9uID0gR2V0UHJvZmlsZSB8IEdldFByb2ZpbGVTdGFydCB8IEdldFByb2ZpbGVTdWNjZWVkIHwgR2V0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdFVTRVJfU0VMRUNURUQgPSBcIltVU0VSXSBVU0VSX1NFTEVDVEVEXCIsXHJcblx0UkVGUkVTSF9VU0VSX0lORk8gPSBcIltVU0VSXSBSRUZSRVNIX1VTRVJfSU5GT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VsZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBVc2VyU2VsZWN0ZWRBY3Rpb24gfCBSZWZyZXNoVXNlckluZm9BY3Rpb247XHJcbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIi4vdXNlci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGF0YTogVXNlck1vZGVsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGF0YTogbmV3IFVzZXJNb2RlbCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsLCBQcm9maWxlVmlld01vZGVsLCBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdGNvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0Z2V0QWNjb3VudEluZm8oKTogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0PGFueT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uKVxyXG5cdFx0XHRcdFx0LmxldChjb25maWcucmVzcG9uc2VUb1VzZXJJbmZvKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzcG9uc2U6IFVzZXJNb2RlbCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVzZXI6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1c2VyLlJvbGVzID0gW3VzZXIuUm9sZV07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRlZGl0UHJvZmlsZShkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQ8RWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudlt0aGlzLmNvbmZpZy5zZXJ2ZXJdICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbCksXHJcblx0XHRcdFx0bW9kZWwuZ2V0UmVxdWVzdEJvZHkoKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlc3BvbnNlKHJlc3BvbnNlKS5leHRyYWN0RGF0YSgpKTtcclxuXHR9XHJcblx0Ly8gVE9ETzogcmVtb3ZlXHJcblx0Z2V0SW5mbyhkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPihcclxuXHRcdFx0XHRzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZy5lbnZbdGhpcy5jb25maWcuc2VydmVyXSArIHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXRBY2NvdW50SW5mbywgbW9kZWwpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHRpc19yb2xlKHJvbGU6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBY2NvdW50SW5mbylcclxuXHRcdFx0LmZpbHRlcih1c2VyID0+IHVzZXIgJiYgdXNlci5Sb2xlcyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5tYXAodXNlciA9PiB1c2VyLlJvbGVzLmluZGV4T2Yocm9sZSkgPiAtMSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfUFJPRklMRSA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVcIixcclxuXHRFRElUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0RURJVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRFRElUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0UHJvZmlsZUFjdGlvbiA9XHJcblx0fCBFZGl0UHJvZmlsZVxyXG5cdHwgRWRpdFByb2ZpbGVTdGFydFxyXG5cdHwgRWRpdFByb2ZpbGVTdWNjZWVkXHJcblx0fCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKTtcclxuXHQvLyB9KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub1ZpZXckID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldFByb2ZpbGVTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFByb2ZpbGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy51c2VyU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEFjY291bnRJbmZvKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBHZXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBHZXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRyZWZyZXNoVXNlckluZm8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbihkYXRhKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcbiAgICAgICAgR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSycsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCcsXHJcbiAgICAgICAgRElTQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBFTkFCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgTUFYSU1VTV9UUllfSEFQUEVORCAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXhpbXVtVHJ5SGFwcGVuZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuTUFYSU1VTV9UUllfSEFQUEVORDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG4gICAgICAgIEdldFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydFxyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkXHJcbiAgICAgICAgfCBEaXNhYmxlR2V0TGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG4gICAgICAgIHwgRW5hYmxlR2V0TGlua1xyXG4gICAgICAgIHwgTWF4aW11bVRyeUhhcHBlbmRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZEZhaWxlZDtcclxuIiwiaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24sIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiBudW1iZXI7XHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IHN0cmluZztcclxuXHRkaXNhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiAwLFxyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBudWxsLFxyXG5cdGRpc2FibGU6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkICsgMSxcclxuXHRcdFx0XHRsYXN0UmVxdWVzdGVkVGltZTogRGF0ZS5ub3coKS50b1N0cmluZygpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQ7XHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlzYWJsZTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG4gICAgICAgIENIQU5HRV9QQVNTV09SRCAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIENIQU5HRV9QQVNTV09SRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9XHJcbiAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3RhcnRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlQWN0aW9uLCBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIH0gZnJvbSBcIi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0UHJvZmlsZUFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoQWN0aW9uVHlwZXMge1xyXG4gICAgU0VBUkNIID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSCcsXHJcbiAgICBTRUFSQ0hfU1RBUlQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NUQVJUJyxcclxuICAgIFNFQVJDSF9TVUNDRUVEID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVUNDRUVEJyxcclxuICAgIFNFQVJDSF9GQUlMRUQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX0ZBSUxFRCcsXHJcbiAgICBDTEVBUl9TRUFSQ0hFRF9VU0VSID0gJ1tVU0VSXVtTRUFSQ0hdIENMRUFSX1NFQVJDSEVEX1VTRVInXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2ggaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoZWRVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQWN0aW9uID1cclxuICAgIFNlYXJjaFxyXG4gICAgfCBTZWFyY2hTdGFydEFjdGlvblxyXG4gICAgfCBTZWFyY2hTdWNjZWVkXHJcbiAgICB8IFNlYXJjaEZhaWxlZFxyXG4gICAgfCBDbGVhclNlYXJjaGVkVXNlcjsiLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hBY3Rpb24gfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YToge30gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTZWFyY2hBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbmV4cG9ydCB2YXIgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyIGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBjaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZWRpdFByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBzZWFyY2hSZWR1Y2VyIGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLlN0YXRlO1xyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuU3RhdGU7XHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5TdGF0ZTtcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQuU3RhdGU7XHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWR1Y2VycyA9IHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci51c2VyUmVkdWNlcixcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIsXHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLnJlZHVjZXIsXHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5yZWR1Y2VyLFxyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJ1c2VyXCI6IFVzZXJTdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxVc2VyU3RhdGU+KFwidXNlclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mb3JhbXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RGZWF0dXJlU3RhdGUsXHJcblx0KHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlc2V0UGFzc3dvcmRSZXF1ZXN0XHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzXHJcbik7XHJcblxyXG4vLyNyZWdpb24gdXNlclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlLCB1c2VyUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIHNlYXJjaFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hWaWV3KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyk7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPCEtLSA8cm91dGVyLW91dGxldCBuYW1lPVwibGlua3NcIj48L3JvdXRlci1vdXRsZXQ+IC0tPlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2JveC1sZWZ0e2JhY2tncm91bmQ6I2ZmZn0jYm94LWJvdHRvbXtiYWNrZ3JvdW5kOiMyYjAwMzN9I2JveC1yaWdodHtiYWNrZ3JvdW5kOiMwMDA4MzM7cGFkZGluZy10b3A6MTBweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MTBweCFpbXBvcnRhbnR9I2JveC1yaWdodCBkaXZ7YmFja2dyb3VuZDojZmZmO29wYWNpdHk6LjV9I2Jhbm5lcjpub3QoLmFjdGl2ZSl7aGVpZ2h0OjEwMCU7LXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCk7ZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDEuNSkgb3BhY2l0eSguMikgYmx1cigycHgpfSNzMXtiYWNrZ3JvdW5kOiNhYWF9I3Mye2JhY2tncm91bmQ6I2JiYn0jczN7YmFja2dyb3VuZDojY2NjfS5wZXJzb25hbC1pbmZve2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MTAlO3dpZHRoOjkwJTtoZWlnaHQ6NDY5cHh9LnBlcnNvbmFsLWluZm8gaDJ7Y29sb3I6IzAwYmNkNDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWxpZ2h0IWltcG9ydGFudH0ucGVyc29uYWwtaW5mbyBoNntmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEycHg7ZmxvYXQ6cmlnaHQ7d2lkdGg6NTAlO21hcmdpbjowO2NvbG9yOiM1NTU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBwe2Zsb2F0OnJpZ2h0O3dpZHRoOjMwJTttYXJnaW46MDtmb250LXNpemU6MTNweDtwYWRkaW5nLXJpZ2h0OjMwcHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDo1MnB4O3JpZ2h0OjE3cHh9LnF1aWNrLWJveHt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cGFkZGluZy10b3A6NzlweH0ucXVpY2stYnRue2JhY2tncm91bmQtY29sb3I6IzAwYmNkNDttYXJnaW46MTJweCAxMHB4O2hlaWdodDoxMDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMDBweDtmb250LXNpemU6MTdweDtjb2xvcjojZmZmfS5iYW5uZXItc2VjdGlvbnt0ZXh0LWFsaWduOmNlbnRlcn0uaW5mby1zZWN0aW9ue3BhZGRpbmc6NjBweCAyNXB4IDEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2dyZXkucG5nKSFpbXBvcnRhbnQ7aGVpZ2h0OjEwNDBweDtwYWRkaW5nLWJvdHRvbToxMjBweCFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHQvLyBpc19hZ2VudCA6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YXBwUmVkdWNlci5Vc2VyU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoYXBwUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHQvLyB0aGlzLmlzX2FnZW50ID0gc2lnbmluU2VydmljZS5pc19hZ2VudCgpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWxpbmtzXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0V3JhcCBpZD1cImNvblwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjb24gW2Z4ZmxleF17bWFyZ2luLXJpZ2h0OjI1cHh9Omhvc3R7d2lkdGg6MTAwJTtwYWRkaW5nOjI1cHggMjVweCAwfWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6NDhweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fWJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbi1ib3R0b206MjVweH0udGl0bGV7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5kZXNjcmlwdGlvbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6OTAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdGxpbmtzOiBhbnlbXTtcclxuXHRsaW5rcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMubGlua3MkID0gdGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoZGF0YSA9PiBkYXRhLmRhc2hib2FyZExpbmtzKTtcclxuXHRcdHRoaXMubGlua3MgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCLDmcKFw5jCtMOYwqfDmcKHw5jCr8OZwocgw5jCrcOYwrPDmMKnw5jCqCDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcIixcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wcm9maWxlXCIsXHJcblx0XHRcdFx0Ly8gZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJwZXJzb25cIlxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICxcclxuXHRcdFx0Ly8ge1xyXG5cdFx0XHQvLyBcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHQvLyBcdHRpdGxlOiBcIsOYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiLFxyXG5cdFx0XHQvLyBcdC8vIGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHQvLyBcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHQvLyB9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBHZXRQcm9maWxlU3VjY2VlZCB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0Ly8gXHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdG1hcCh1c2VyID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlU3VjY2VlZCh1c2VyKTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gKTtcclxuXHRARWZmZWN0KClcclxuXHRnZXRBY2NvdW50SW5mbyQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oe30gYXMgVXNlck1vZGVsKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PVwiNDUwcHhcIiAqbmdJZj1cIih1c2VyU3RhdHVzJCB8IGFzeW5jKSA9PSAnc3VjY2VlZCdcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkxhc3ROYW1lIH19w5jCjCB7eyh1c2VyIHwgYXN5bmMpLkZpcnN0TmFtZSB9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkVtYWlsfX0gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+bG9jYWxfZ3JvY2VyeV9zdG9yZTwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwrTDmcKGw5jCp8OYwrPDmcKHPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuX2lkIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+ZW1haWw8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvcD5cclxuICAgICAgICA8IS0tIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLkVtYWlsIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXI6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT47XHJcblx0dXNlclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0Zm9ybUdyb3VwID0gUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHR1c2VyRGF0YUxvYWRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdHVzZXJOb3RGb3VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMudXNlckRhdGFMb2FkZWQkLm5leHQoIVwicHJpc3RpbmV8ZGlydHl8cGVuZGluZ1wiLmluY2x1ZGVzKHZhbHVlKSkpO1xyXG5cdH1cclxuXHRzZWFyY2goKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2godGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbi8vIGltcG9ydCB7IE1kU25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ3VzZXItY2hhbmdlLXBhc3N3b3JkJyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJjaGFuZ2VQYXNzd29yZCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5rCqcOYwrHDmMKnw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb25maXJtXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOYwqrDmMK6w5vCjMObwozDmMKxIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi91c2VyL3BhbmVsXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG4gICAgICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgICAgIEBPdXRwdXQoKSBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgICAgICBjaGFuZ2VQYXNzd29yZCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpXHJcbiAgICAgICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuXHJcbiAgXHJcbiAgPG5ncy1mb3JtLXZpZXcgI2Zvcm0gW2lkXT1cImZvcm1JZFwiIFtjYXJkXT1cInRydWVcIiAoYWNjZXB0KT1cImVkaXRQcm9maWxlKGZvcm0uZm9ybUdyb3VwKVwiIChjYW5jZWwpPVwiZ29iYWNrKClcIiA+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwhLS0gPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiZWRpdFByb2ZpbGUoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi4uXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+IC0tPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIHVzZXJJbmZvOiBhbnk7XHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblx0QElucHV0KFwicm9sZXNcIikgcm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRASW5wdXQoKSBncm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRlZGl0UHJvZmlsZShmb3JtOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KGZvcm0udmFsdWUpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiLi5cIiBdKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd1c2VyLXJlc2V0LXBhc3N3b3JkLXJlcXVlc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+w5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPsOYwqjDmMKxw5jCp8Obwowgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPsOZwr7Dm8KMw5jCp8OZwoXDmsKpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319IMOYwqvDmMKnw5nChsObwozDmcKHIMOYwqrDmMKnIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxIMOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwq/DmcKIw5jCqMOYwqfDmMKxw5nChyDDmMKvw5jCscObwozDmMKnw5nCgcOYwqogw5nCvsObwozDmMKnw5nChcOawqkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuICAgICAgICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICBASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICAgICAgQElucHV0KCkgc2V0IHBlbmRpbmcoaXNQZW5kaW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpbWVyJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiBpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRha2VXaGlsZShpID0+IGkgKiAxMDAgPD0gMzAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IDMwMDAgLSBpICogMTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJPZlJlcXVlc3RlZC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gKHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLmdldFZhbHVlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnw5jCucOYwq/DmcKFIMOYwqfDmcKFw5rCqcOYwqfDmcKGIC4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICfDmcK+w5vCjMOYwqfDmcKFw5rCqSDDmMKsw5jCr8ObwozDmMKvIMOYwqjDmMKxw5jCp8Obwowgw5jCtMOZwoXDmMKnIMOYwqfDmMKxw5jCs8OYwqfDmcKEIMOawq/DmMKxw5jCr8ObwozDmMKvLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3RhcnRBY3Rpb24sIFNlYXJjaEZhaWxlZCwgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaFN1Y2NlZWQgfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Y2FuU2VhcmNoJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBTZWFyY2hTdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRzZWFyY2gkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRJbmZvKGRhdGEpLnBpcGUoXHJcblx0XHRcdFx0bWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzID09IG51bGwgPyBuZXcgU2VhcmNoRmFpbGVkKCkgOiBuZXcgU2VhcmNoU3VjY2VlZChyZXMpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNlYXJjaEZhaWxlZCgpKSlcclxuXHRcdFx0KTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uLy4uL3NlYXJjaC1hY2NvdW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb250YWluZXJDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRsZXQgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KHsgRW1haWw6IHBhcmFtcy5FbWFpbCB9IGFzIFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaChtb2RlbCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J2NoYW5nZVBhc3N3b3JkKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgPjwvdXNlci1jaGFuZ2UtcGFzc3dvcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cCA9IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Q2hhbmdlUGFzc3dvcmRNb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKS5zdWJzY3JpYmUodXNlckluZm8gPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJJbmZvKSByZXR1cm47XHJcblx0XHRcdC8vIFRPRE86XHJcblx0XHRcdC8vIHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5Vc2VybmFtZSA9IHVzZXJJbmZvLlVzZXJuYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNoYW5nZVBhc3N3b3JkKGV2ZW50KSB7XHJcblx0XHR0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuUGFzc3dvcmQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoXCJQYXNzd29yZFwiKS52YWx1ZTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYXNzd29yZCh0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZSB9IGZyb20gXCIuLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi8uLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicHJvZmlsZS1lZGl0LWNvbnRpYW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPHByb2ZpbGUtZWRpdFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0ndXBkYXRlUHJvZmlsZSgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAgICAgW3VzZXJJbmZvXT1cInVzZXJJbmZvcmFtYXRpb24kIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgW3JvbGVzXT1cInJvbGVzJFwiXHJcblx0XHRcdFx0W2dyb3Vwc109XCJncm91cHMgfCBhc3luY1wiXHJcblx0XHRcdFx0W2Zvcm1JZF09XCIoY29uZmlnJHxhc3luYyk/LmZvcm1zLnByb2ZpbGVfZWRpdFwiXHJcbiAgICAgICAgICAgICAgPjwvcHJvZmlsZS1lZGl0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VySW5mb3JhbWF0aW9uJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdHJvbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPFVzZXJNb2R1bGVDb25maWc+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnJvbGVzJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdC5tYXAoY29uZmlnID0+IGNvbmZpZy5Db25maWcuUm9sZXMpO1xyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gT2JzZXJ2YWJsZS5vZihbIFwidGVzdDFcIiwgXCJ0ZXN0MlwiIF0pO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGVQcm9maWxlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRQcm9maWxlKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLXByb2ZpbGVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuICA8cm91dGVyLW91dGxldCBuYW1lPVwibmdzLXVzZXItcHJvZmlsZS12aWV3XCI+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICA8IS0tIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5jCt8OZwoTDmMKnw5jCucOYwqfDmMKqIMOZwr7DmMKxw5nCiMOZwoHDmMKnw5vCjMOZwoQ8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudCAqbmdJZj0nZGF0YVN0YXR1cyQgfCBhc3luYyc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaW5mb1wiPlxyXG4gICAgICAgICAgICA8cCBmeEZsZXg9JzQwJz57e2l0ZW1bMF19fTwvcD5cclxuICAgICAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3tpdGVtWzFdfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcblxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9Jy4uJz7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiByb3V0ZXJMaW5rPSdlZGl0Jz7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPiAtLT5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjwhLS0gPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnJvbGVzPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KGluZm9ybWF0aW9uIHwgYXN5bmMpLlJvbGVzIHwganNvbn19PC9wPlxyXG4gICAgICA8L2Rpdj4gLS0+XHJcbjwhLS0gPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5GaXJzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmMKuw5jCp8OZwobDmcKIw5jCp8OYwq/DmsKvw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTGFzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmsKpw5jCp8OYwrHDmMKow5jCscObwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlVzZXJuYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5nChMOZwoHDmcKGIMOZwofDmcKFw5jCscOYwqfDmcKHPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Nb2JpbGVOdW1iZXIgfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKsw5nChsOYwrPDm8KMw5jCqjwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57e3NleCQgfCBhc3luY319PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCqsOZwojDmcKEw5jCrzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuQmlydGhkYXRlIHwgcGVyc2lhbkRhdGUgOiBmYWxzZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkVtYWlsfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz57eyhpZGVudGlmaWVyVHlwZSQgfCBhc3luYyl9fTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuSWRlbnRpZmljYXRpb25ObyB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmMKnw5jCscObwozDmMKuIMOYwrnDmMK2w5nCiMObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5SZWdpc3RlckRhdGUgfCBwZXJzaWFuRGF0ZX19PC9wPlxyXG4gICAgICA8L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGluZm9ybWF0aW9uKGluZm9ybWF0aW9uOiBVc2VyTW9kZWwpIHtcclxuXHRcdGlmICghaW5mb3JtYXRpb24pIHJldHVybjtcclxuXHJcblx0XHRPYmplY3Qua2V5cyhpbmZvcm1hdGlvbikuZm9yRWFjaChrID0+IHRoaXMuaW5mby5wdXNoKFsgaywgaW5mb3JtYXRpb25ba10gXSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKSBkYXRhU3RhdHVzJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xyXG5cdGluZm86IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLXByb2ZpbGVcclxuICAgICAgICAgICAgICAgIFtpbmZvcm1hdGlvbl09XCJkYXRhJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtkYXRhU3RhdHVzJF09J2RhdGFTdGF0dXMkJ1xyXG4gICAgICAgICAgICA+PC91c2VyLXByb2ZpbGU+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YSQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkYXRhU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5kYXRhU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3RWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VycyB9IGZyb20gXCIuL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U2VhcmNoQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkTGlua3NDb21wb25lbnQsXHJcblx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcclxuXHRcdEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzVXNlck1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogVXNlck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzVXNlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ1c2VyXCIsIFVzZXJSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xyXG5cdFx0XHQvLyBSZXNldFBhc3N3b3JkUmVxdWVzdEVmZmVjdHMsXHJcblx0XHRcdEVkaXRQcm9maWxlRWZmZWN0cyxcclxuXHRcdFx0Ly8gQ2hhbmdlUGFzc3dvcmRFZmZlY3RzLFxyXG5cdFx0XHRQcm9maWxlVmlld0VmZmVjdHMsXHJcblx0XHRcdC8vIFNlYXJjaEVmZmVjdHMsXHJcblx0XHRcdFVzZXJFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NVc2VyTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwidXNlci9wYW5lbFwiLFxyXG5cdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZExpbmtzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZS9lZGl0XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0eyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZ3NVc2VyUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJleHBvcnQgZW51bSBOZ3NVc2VyTW9kdWxlT3V0bGV0cyB7XHJcblx0bmdzX3VzZXJfcHJvZmlsZV92aWV3ID0gXCJuZ3MtdXNlci1wcm9maWxlLXZpZXdcIlxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0LCBjYXRjaEVycm9yLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJGYWNhZGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7IH1cclxuXHRnZXREaXNwbGF5TmFtZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKS5sZXQodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tYXBVc2VyRGlzcGxheU5hbWUpO1xyXG5cdFx0Ly8gLnBpcGUoZmlsdGVyKGRpc3BsYXlOYW1lID0+IGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpKTtcclxuXHR9XHJcblx0Z2V0SW5mbygpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0U3RhdHVzIiwidXNlclJlZHVjZXIudXNlclJlZHVjZXIiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlciIsImNoYW5nZVBhc3N3b3JkLnJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyLnJlZHVjZXIiLCJlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0QWNjb3VudEluZm8iLCJ1c2VyUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsInNlYXJjaFJlZHVjZXIuZ2V0U3RhdHVzIiwiYXBwUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsIkJlaGF2aW9yU3ViamVjdCIsIkZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvIiwiRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzIiwiRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUErQkEsSUFBYSxxQkFBcUIsR0FBcUI7SUFDdEQsTUFBTSxFQUFFLGlCQUFpQjtJQUN6QixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUseUNBQXlDO1FBQzFELE1BQU0sRUFBRSxnQ0FBZ0M7S0FDeEM7SUFDRCxTQUFTLEVBQUU7O1FBRVYsY0FBYyxFQUFFLEVBQUU7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixjQUFjLEVBQUUsRUFBRTtRQUNsQixrQkFBa0IsRUFBRSxFQUFFO0tBRXRCO0lBQ0QsS0FBSyxFQUFFO1FBQ04sWUFBWSxFQUFFLEVBQUU7S0FDaEI7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
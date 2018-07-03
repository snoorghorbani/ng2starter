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
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {
        //resetPasswordRequest: '',
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
    mapUserDisplayName: function (user$) { return user$.map(function (user) { return user.Username; }); }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
var /** @type {?} */ getAccountInfo = function (state) { return state.data; };

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
    UserService.prototype.getAccountInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.profileInformation != ""; })
            .take(1)
            .switchMap(function (config) {
            return _this.http.get(config.endpoints.profileInformation).let(config.responseToUserInfo).pipe(map(function (response) {
                var /** @type {?} */ user = Object.assign({}, response);
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
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); });
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
        var /** @type {?} */ model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.configurationService.config.endpoints.getAccountInfo, model))
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
 * @suppress {checkTypes} checked by tsc
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
var /** @type {?} */ getStatus$3 = function (state) { return state.status; };

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
var /** @type {?} */ selectFeatureState = createFeatureSelector("user");
var /** @type {?} */ getUserInforamtionStatus = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ isSignedIn = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ selectResetPasswordRequestState = createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
var /** @type {?} */ getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
var /** @type {?} */ getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
//#region user
var /** @type {?} */ selectUserInformaionState = createSelector(selectFeatureState, function (state) { return state.user; });
var /** @type {?} */ getAccountInfo$2 = createSelector(selectUserInformaionState, getAccountInfo);
//#endregion
//#region search
var /** @type {?} */ selectSearchState = createSelector(selectFeatureState, function (state) { return state.searchView; });
var /** @type {?} */ getSearchStatus = createSelector(selectSearchState, getStatus$3);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

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
        { type: Component, args: [{
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent() {
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
        { type: Component, args: [{
                    selector: "profile-edit",
                    template: "<div fxFlex=\"450px\">\n\n  \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <!-- <ngs-form-view [id]=\"formId\"></ngs-form-view> -->\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = function () { return []; };
    ProfileEditComponent.propDecorators = {
        submited: [{ type: Output }],
        formId: [{ type: Input }],
        formGroup: [{ type: Input }],
        roles$: [{ type: Input, args: ["roles",] }],
        groups: [{ type: Input }]
    };
    return ProfileEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ message = (this.maximumResendingHappend$.getValue())
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var ProfileEditContainerComponent = /** @class */ (function () {
    function ProfileEditContainerComponent(store, configService) {
        this.store = store;
        this.configService = configService;
        this.formGroup = EditProfile_ApiModel.Request.formGroup;
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
    function () {
        var _this = this;
        this.userInforamation$.subscribe(function (userInfo) {
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
        { type: Component, args: [{
                    selector: "profile-edit-contianer",
                    template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [formGroup]=\"formGroup\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
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
 * @suppress {checkTypes} checked by tsc
 */
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.sex$ = new BehaviorSubject('');
        this.identifierType$ = new BehaviorSubject('');
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
        { type: Component, args: [{
                    selector: 'user-profile',
                    template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
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
 * @suppress {checkTypes} checked by tsc
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
                    template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
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
var /** @type {?} */ NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var _this = this;
        return this.configService.config$
            .map(function (config) { return config.mapUserDisplayName; })
            .switchMap(function (mapper) { return _this.store.select(getAccountInfo$2).let(mapper); });
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserService, UserFacadeService, getAccountInfo$2 as getAccountInfo, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel, NgsUserModule, RootNgsUserModule, routes, NgsUserRoutingModule, ChangePasswordContainerComponent as ɵp, reducer$1 as ɵu, ChangePasswordComponent as ɵh, getAccountInfo as ɵs, userReducer as ɵr, DashboardContainerComponent as ɵo, DashboardLinksComponent as ɵk, FeatureContainerComponent as ɵn, UserEffects as ɵz, EditProfileEffects as ɵx, reducer$2 as ɵw, ProfileEditContainerComponent as ɵq, ProfileEditComponent as ɵi, ProfileContainerComponent as ɵj, ProfileViewEffects as ɵy, ProfileComponent as ɵg, reducer as ɵt, ResetPasswordRequestComponent as ɵm, reducer$3 as ɵv, SearchComponent as ɵf, UserConfigurationService as ɵl, UserReducers as ɵb, selectFeatureState as ɵd, selectUserInformaionState as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL2NoYW5nZS1wYXNzd29yZC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi91c2VyLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5mYWNhZGUtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvL3Jlc2V0UGFzc3dvcmRSZXF1ZXN0OiBzdHJpbmc7XHJcblx0XHRjaGFuZ2VQYXNzd29yZD86IHN0cmluZztcclxuXHRcdGVkaXRQcm9maWxlPzogc3RyaW5nO1xyXG5cdFx0Z2V0QWNjb3VudEluZm8/OiBzdHJpbmc7XHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb24/OiBzdHJpbmc7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogc3RyaW5nO1xyXG5cdH07XHJcblx0ZGFzaGJvYXJkTGlua3M/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiB7ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4gfTtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU6IHsgKHVzZXI6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8c3RyaW5nPiB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly9yZXNldFBhc3N3b3JkUmVxdWVzdDogJycsXHJcblx0XHRjaGFuZ2VQYXNzd29yZDogXCJcIixcclxuXHRcdGVkaXRQcm9maWxlOiBcIlwiLFxyXG5cdFx0Z2V0QWNjb3VudEluZm86IFwiXCIsXHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb246IFwiXCJcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6ICcnLFxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogXCJcIlxyXG5cdH0sXHJcblx0ZGFzaGJvYXJkTGlua3M6IFtdLFxyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbzogdXNlciQgPT4gdXNlciQsXHJcblx0bWFwVXNlckRpc3BsYXlOYW1lOiB1c2VyJCA9PiB1c2VyJC5tYXAodXNlciA9PiB1c2VyLlVzZXJuYW1lKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48VXNlck1vZHVsZUNvbmZpZz4oXCJVc2VyTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0RGlzcGxheU5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdC8vIE1vYmlsZU51bWJlcjogc3RyaW5nO1xyXG5cdC8vIFNleDogc3RyaW5nO1xyXG5cdC8vIEJpcnRoZGF0ZTogc3RyaW5nO1xyXG5cdEVtYWlsOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmljYXRpb25Obzogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpZXJUeXBlOiBzdHJpbmc7XHJcblx0Ly8gUmVnaXN0ZXJEYXRlOiBzdHJpbmc7XHJcblx0Ly8gVXNlclR5cGU6IHN0cmluZztcclxuXHRSb2xlczogc3RyaW5nW107XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuUm9sZXMgPSBbXTtcclxuXHRcdHRoaXMuR3JvdXBzID0gW107XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0VXNlcm5hbWU6IHN0cmluZztcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QgPSB7fSBhcyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRQYXNzd29yZDogdGhpcy5QYXNzd29yZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDcpIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBVc2VybmFtZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BSZXF1ZXN0Qm9keShcInBlZ2FoXCIpXHJcbiAgICAgICAgVG9rZW46IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AVXNlSW4oJ2JvZHknKVxyXG4gICAgICAgIENhcHRjaGE6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AVXNlSW4oJ3VybCcpXHJcbiAgICAgICAgLy9AVmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcbiAgICAgICAgVHlwZTogJ3NtcycgfCAnZW1haWwnO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB0aGlzLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgVG9rZW46IHRoaXMuVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBDYXB0Y2hhOiB0aGlzLkNhcHRjaGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgQ2FwdGNoYTogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBUb2tlbjogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBUeXBlOiBuZXcgRm9ybUNvbnRyb2woJ3NtcycpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cdFx0VG9rZW46IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdFx0Ly9Ub2tlbjogdGhpcy5Ub2tlbixcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHRcdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFJlcXVlc3Q+ID0ge30gYXMgUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT4ge1xyXG5cdFx0UmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRleHRyYWN0RGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUHJvZmlsZVZpZXdNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRFbWFpbDogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRVc2VybmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5taW5MZW5ndGgoOCksIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2UgZXh0ZW5kcyBVc2VyTW9kZWwge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHN1cGVyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZhaWxlZExvZ2luTW9kZWwgfSBmcm9tICcuL2ZhaWxlZC1sb2dpbi5tb2RlbCc7XHJcblxyXG5leHBvcnQgbW9kdWxlIEZhaWxlZExvZ2luUmVwb3J0TW9kZWwge1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PntcclxuICAgICAgICBVc2VybmFtZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBGYWlsZWRMb2dpblJlcG9ydE1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlICB7XHJcbiAgICAgICAgZGF0YTogRmFpbGVkTG9naW5Nb2RlbFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRmFpbGVkTG9naW5Nb2RlbCB7XHJcbiAgICBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgUGFzc3dvcmQ6IHN0cmluZztcclxuICAgIFRyeURhdGU6IERhdGU7XHJcbiAgICBNYWNBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBJcEFkZHJlc3M6IHN0cmluZztcclxuICAgIFJlYXNvbjogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlVmlld0FjdGlvblR5cGVzIHtcclxuXHRHRVRfUFJPRklMRSA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFXCIsXHJcblx0R0VUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEdFVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0R0VUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQcm9maWxlVmlld0FjdGlvbiA9IEdldFByb2ZpbGUgfCBHZXRQcm9maWxlU3RhcnQgfCBHZXRQcm9maWxlU3VjY2VlZCB8IEdldFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRVU0VSX1NFTEVDVEVEID0gXCJbVVNFUl0gVVNFUl9TRUxFQ1RFRFwiLFxyXG5cdFJFRlJFU0hfVVNFUl9JTkZPID0gXCJbVVNFUl0gUkVGUkVTSF9VU0VSX0lORk9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlbGVjdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VySW5mb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gVXNlclNlbGVjdGVkQWN0aW9uIHwgUmVmcmVzaFVzZXJJbmZvQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVzZXJBY3Rpb24sIFVzZXJBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRhdGE6IFVzZXJNb2RlbDtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2FkZWQ6IGZhbHNlLFxyXG5cdGRhdGE6IG5ldyBVc2VyTW9kZWwoKVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFVzZXJBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk86IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50SW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBFZGl0UHJvZmlsZV9BcGlNb2RlbCwgUHJvZmlsZVZpZXdNb2RlbCwgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0UHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UHJvZmlsZSgpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRBY2NvdW50SW5mbygpOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0PGFueT4oY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24pLmxldChjb25maWcucmVzcG9uc2VUb1VzZXJJbmZvKS5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKChyZXNwb25zZTogVXNlck1vZGVsKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXI6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbIHVzZXIuUm9sZSBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQ8RWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5lZGl0UHJvZmlsZSwgbW9kZWwpLFxyXG5cdFx0XHRcdG1vZGVsLmdldFJlcXVlc3RCb2R5KClcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSk7XHJcblx0fVxyXG5cdGdldEluZm8oZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmdldEFjY291bnRJbmZvLCBtb2RlbClcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQuZmlsdGVyKHVzZXIgPT4gdXNlciAmJiB1c2VyLlJvbGVzICE9IHVuZGVmaW5lZClcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0Lm1hcCh1c2VyID0+IHVzZXIuUm9sZXMuaW5kZXhPZihyb2xlKSA+IC0xKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcyB7XHJcblx0RURJVF9QUk9GSUxFID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRVwiLFxyXG5cdEVESVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRFRElUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEVESVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRQcm9maWxlQWN0aW9uID1cclxuXHR8IEVkaXRQcm9maWxlXHJcblx0fCBFZGl0UHJvZmlsZVN0YXJ0XHJcblx0fCBFZGl0UHJvZmlsZVN1Y2NlZWRcclxuXHR8IEVkaXRQcm9maWxlRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuXHRFZGl0UHJvZmlsZVN0YXJ0LFxyXG5cdEVkaXRQcm9maWxlU3VjY2VlZCxcclxuXHRFZGl0UHJvZmlsZUZhaWxlZFxyXG59IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEVkaXRQcm9maWxlU3RhcnQoZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UmVxdWVzdEVkaXRQcm9maWxlTGluayQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS5lZGl0UHJvZmlsZShkYXRhKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHQpO1xyXG5cdC8vIC5zd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHQvLyBcdHJldHVybiB0aGlzLnNlcnZpY2VcclxuXHQvLyBcdFx0LmVkaXRQcm9maWxlKGRhdGEpXHJcblx0Ly8gXHRcdC5tYXAoKHJlcykgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKVxyXG5cdC8vIFx0XHQuY2F0Y2goKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpO1xyXG5cdC8vIH0pO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnb1RvVmlldyQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi91c2VyL3Byb2ZpbGVcIiBdKTtcclxuXHRcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdBY3Rpb25UeXBlcywgR2V0UHJvZmlsZVN0YXJ0LCBHZXRQcm9maWxlU3VjY2VlZCwgR2V0UHJvZmlsZUZhaWxlZCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlld0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0UHJvZmlsZVN0YXJ0KCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0UHJvZmlsZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLnVzZXJTZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0QWNjb3VudEluZm8oKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEdldFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHJlZnJlc2hVc2VySW5mbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKGRhdGEpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIHtcclxuICAgICAgICBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSyAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVCcsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRCcsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEJyxcclxuICAgICAgICBESVNBQkxFX0dFVF9MSU5LICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIERJU0FCTEVfR0VUX0xJTksnLFxyXG4gICAgICAgIEVOQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gRU5BQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBNQVhJTVVNX1RSWV9IQVBQRU5EICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIE1BWElNVU1fVFJZX0hBUFBFTkQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEJyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc2V0UGFzc3dvcmRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSztcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1heGltdW1UcnlIYXBwZW5kIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5EO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiA9XHJcbiAgICAgICAgR2V0UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0XHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWRcclxuICAgICAgICB8IERpc2FibGVHZXRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkXHJcbiAgICAgICAgfCBFbmFibGVHZXRMaW5rXHJcbiAgICAgICAgfCBNYXhpbXVtVHJ5SGFwcGVuZFxyXG4gICAgICAgIHwgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZFxyXG4gICAgICAgIHwgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiwgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IG51bWJlcjtcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogc3RyaW5nO1xyXG5cdGRpc2FibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IDAsXHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IG51bGwsXHJcblx0ZGlzYWJsZTogZmFsc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRudW1iZXJPZlJlcXVlc3RlZDogc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQgKyAxLFxyXG5cdFx0XHRcdGxhc3RSZXF1ZXN0ZWRUaW1lOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZDtcclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaXNhYmxlO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcyB7XHJcbiAgICAgICAgQ0hBTkdFX1BBU1NXT1JEICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gQ0hBTkdFX1BBU1NXT1JEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NUQVJUICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NUQVJUJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkQWN0aW9uID1cclxuICAgICAgICAgICAgQ2hhbmdlUGFzc3dvcmRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRTdGFydFxyXG4gICAgICAgICAgfCBDaGFuZ2VQYXNzd29yZFN1Y2NlZWRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRBY3Rpb24sIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IENoYW5nZVBhc3N3b3JkQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tICdAc291c2hpYW5zL3NoYXJlZCc7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlQWN0aW9uLCBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIH0gZnJvbSAnLi9lZGl0LXByb2ZpbGUuYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiAncHJpc3RpbmUnXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEVkaXRQcm9maWxlQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdkaXJ0eSdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdwZW5kaW5nJ1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAnc3VjY2VlZCdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAnZmFpbGVkJ1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gU2VhcmNoQWN0aW9uVHlwZXMge1xyXG4gICAgU0VBUkNIID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSCcsXHJcbiAgICBTRUFSQ0hfU1RBUlQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NUQVJUJyxcclxuICAgIFNFQVJDSF9TVUNDRUVEID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVUNDRUVEJyxcclxuICAgIFNFQVJDSF9GQUlMRUQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX0ZBSUxFRCcsXHJcbiAgICBDTEVBUl9TRUFSQ0hFRF9VU0VSID0gJ1tVU0VSXVtTRUFSQ0hdIENMRUFSX1NFQVJDSEVEX1VTRVInXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2ggaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoZWRVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQWN0aW9uID1cclxuICAgIFNlYXJjaFxyXG4gICAgfCBTZWFyY2hTdGFydEFjdGlvblxyXG4gICAgfCBTZWFyY2hTdWNjZWVkXHJcbiAgICB8IFNlYXJjaEZhaWxlZFxyXG4gICAgfCBDbGVhclNlYXJjaGVkVXNlcjsiLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hBY3Rpb24gfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YToge30gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTZWFyY2hBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbmV4cG9ydCB2YXIgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyIGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBjaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZWRpdFByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBzZWFyY2hSZWR1Y2VyIGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLlN0YXRlO1xyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuU3RhdGU7XHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5TdGF0ZTtcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQuU3RhdGU7XHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWR1Y2VycyA9IHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci51c2VyUmVkdWNlcixcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIsXHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLnJlZHVjZXIsXHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5yZWR1Y2VyLFxyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJ1c2VyXCI6IFVzZXJTdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxVc2VyU3RhdGU+KFwidXNlclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mb3JhbXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RGZWF0dXJlU3RhdGUsXHJcblx0KHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlc2V0UGFzc3dvcmRSZXF1ZXN0XHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzXHJcbik7XHJcblxyXG4vLyNyZWdpb24gdXNlclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlLCB1c2VyUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIHNlYXJjaFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hWaWV3KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyk7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPCEtLSA8cm91dGVyLW91dGxldCBuYW1lPVwibGlua3NcIj48L3JvdXRlci1vdXRsZXQ+IC0tPlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2JveC1sZWZ0e2JhY2tncm91bmQ6I2ZmZn0jYm94LWJvdHRvbXtiYWNrZ3JvdW5kOiMyYjAwMzN9I2JveC1yaWdodHtiYWNrZ3JvdW5kOiMwMDA4MzM7cGFkZGluZy10b3A6MTBweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MTBweCFpbXBvcnRhbnR9I2JveC1yaWdodCBkaXZ7YmFja2dyb3VuZDojZmZmO29wYWNpdHk6LjV9I2Jhbm5lcjpub3QoLmFjdGl2ZSl7aGVpZ2h0OjEwMCU7LXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCk7ZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDEuNSkgb3BhY2l0eSguMikgYmx1cigycHgpfSNzMXtiYWNrZ3JvdW5kOiNhYWF9I3Mye2JhY2tncm91bmQ6I2JiYn0jczN7YmFja2dyb3VuZDojY2NjfS5wZXJzb25hbC1pbmZve2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MTAlO3dpZHRoOjkwJTtoZWlnaHQ6NDY5cHh9LnBlcnNvbmFsLWluZm8gaDJ7Y29sb3I6IzAwYmNkNDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWxpZ2h0IWltcG9ydGFudH0ucGVyc29uYWwtaW5mbyBoNntmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEycHg7ZmxvYXQ6cmlnaHQ7d2lkdGg6NTAlO21hcmdpbjowO2NvbG9yOiM1NTU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBwe2Zsb2F0OnJpZ2h0O3dpZHRoOjMwJTttYXJnaW46MDtmb250LXNpemU6MTNweDtwYWRkaW5nLXJpZ2h0OjMwcHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDo1MnB4O3JpZ2h0OjE3cHh9LnF1aWNrLWJveHt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cGFkZGluZy10b3A6NzlweH0ucXVpY2stYnRue2JhY2tncm91bmQtY29sb3I6IzAwYmNkNDttYXJnaW46MTJweCAxMHB4O2hlaWdodDoxMDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMDBweDtmb250LXNpemU6MTdweDtjb2xvcjojZmZmfS5iYW5uZXItc2VjdGlvbnt0ZXh0LWFsaWduOmNlbnRlcn0uaW5mby1zZWN0aW9ue3BhZGRpbmc6NjBweCAyNXB4IDEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2dyZXkucG5nKSFpbXBvcnRhbnQ7aGVpZ2h0OjEwNDBweDtwYWRkaW5nLWJvdHRvbToxMjBweCFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHQvLyBpc19hZ2VudCA6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YXBwUmVkdWNlci5Vc2VyU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoYXBwUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHQvLyB0aGlzLmlzX2FnZW50ID0gc2lnbmluU2VydmljZS5pc19hZ2VudCgpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWxpbmtzXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0V3JhcCBpZD1cImNvblwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjb24gW2Z4ZmxleF17bWFyZ2luLXJpZ2h0OjI1cHh9Omhvc3R7d2lkdGg6MTAwJX1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjQ4cHg7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1idXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW4tYm90dG9tOjI1cHh9LnRpdGxle21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjVweH0uZGVzY3JpcHRpb257b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjkwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGxpbmtzOiBhbnlbXTtcclxuXHRsaW5rcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMubGlua3MkID0gdGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5tYXAoZGF0YSA9PiBkYXRhLmRhc2hib2FyZExpbmtzKTtcclxuXHRcdHRoaXMubGlua3MgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCLDmcKFw5jCtMOYwqfDmcKHw5jCr8OZwocgw5jCrcOYwrPDmMKnw5jCqCDDmsKpw5jCp8OYwrHDm8KMw5jCscObwoxcIixcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wcm9maWxlXCIsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJjcmVkaXRfY2FyZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0XHR0aXRsZTogXCLDmMKqw5jCusObwozDm8KMw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrFcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCLDmcKEw5nCiMOYwrHDmcKFIMOYwqfDm8KMw5nCvsOYwrPDmcKIw5nChSDDmcKFw5jCqsOZwoYgw5jCs8OYwqfDmMKuw5jCqsOawq/Dm8KMIMOYwqjDmMKnIMOYwqrDmcKIw5nChMObwozDmMKvIMOYwrPDmMKnw5jCr8Oawq/Dm8KMIMOZwobDmMKnw5nChcOZwoHDmcKHw5nCiMOZwoVcIixcclxuXHRcdFx0XHRpY29uOiBcInNlY3VyaXR5XCJcclxuXHRcdFx0fVxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUsIEdldFByb2ZpbGVTdWNjZWVkIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIHVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHQvLyBcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0bWFwKHVzZXIgPT4ge1xyXG5cdC8vIFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHVzZXIpO1xyXG5cdC8vIFx0fSlcclxuXHQvLyApO1xyXG5cdEBFZmZlY3QoKVxyXG5cdGdldEFjY291bnRJbmZvJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblx0QEVmZmVjdCgpXHJcblx0c2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbih7fSBhcyBVc2VyTW9kZWwpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeEZsZXg9XCI0NTBweFwiICpuZ0lmPVwiKHVzZXJTdGF0dXMkIHwgYXN5bmMpID09ICdzdWNjZWVkJ1wiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuTGFzdE5hbWUgfX3DmMKMIHt7KHVzZXIgfCBhc3luYykuRmlyc3ROYW1lIH19IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuRW1haWx9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5sb2NhbF9ncm9jZXJ5X3N0b3JlPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCtMOZwobDmMKnw5jCs8OZwoc8L3A+XHJcbiAgICAgICAgPCEtLSA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5faWQgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5lbWFpbDwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuRW1haWwgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuLy8gaW1wb3J0IHsgTWRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1jaGFuZ2UtcGFzc3dvcmQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImNoYW5nZVBhc3N3b3JkKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmsKpw5jCscOYwqfDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbmZpcm1cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5jCqsOYwrrDm8KMw5vCjMOYwrEgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWxcIiBtYXQtcmFpc2VkLWJ1dHRvbj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSlcclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG5cclxuICBcclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0UHJvZmlsZSgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS12aWV3IFtpZF09XCJmb3JtSWRcIj48L25ncy1mb3JtLXZpZXc+IC0tPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5nCiMObwozDmMKxw5jCp8ObwozDmMK0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi91c2VyL3BhbmVsL3Byb2ZpbGVcIiBtYXQtcmFpc2VkLWJ1dHRvbj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dChcInJvbGVzXCIpIHJvbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0QElucHV0KCkgZ3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRlZGl0UHJvZmlsZSgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1yZXNldC1wYXNzd29yZC1yZXF1ZXN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPGgzPsOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqogw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvaDM+XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8cD7DmMKow5jCscOYwqfDm8KMIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrEgw5jCtMOZwoXDmMKnw5jCscOZwocgw5jCqsOZwoTDmcKBw5nChiDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5nCiMOYwqfDmMKxw5jCryDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq88L3A+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZnhGbGV4RmlsbCBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzbXNcIj7DmcK+w5vCjMOYwqfDmcKFw5rCqTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImVtYWlsXCI+w5nCvsOYwrPDmMKqIMOYwqfDmcKEw5rCqcOYwqrDmMKxw5nCiMOZwobDm8KMw5rCqcObwow8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOZwofDmcKFw5jCscOYwqfDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiVXNlcm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgfHwgKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+LS0+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj0nIShjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJz5cclxuICAgICAgICAgIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrFcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpICYmICEobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgIHt7dGltZXIkIHwgYXN5bmN9fSDDmMKrw5jCp8OZwobDm8KMw5nChyDDmMKqw5jCpyDDmMKnw5nChcOawqnDmMKnw5nChiDDmMKvw5jCsSDDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKvw5nCiMOYwqjDmMKnw5jCscOZwocgw5jCr8OYwrHDm8KMw5jCp8OZwoHDmMKqIMOZwr7Dm8KMw5jCp8OZwoXDmsKpLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9JyhtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCucOYwq/DmcKFIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqpcclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2F1dGgvc2lnbmluJz7DmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L2E+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9mb3JtPlxyXG5gLFxyXG4gICAgICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgICAgIEBPdXRwdXQoKSBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdD4oKTtcclxuXHJcbiAgICAgICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgQElucHV0KCkgbnVtYmVyT2ZSZXF1ZXN0ZWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgICAgICBASW5wdXQoKSBjYW5SZXF1ZXN0UGluOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgICAgIEBJbnB1dCgpIHNldCBwZW5kaW5nKGlzUGVuZGluZzogYm9vbGVhbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgICAgICBtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyJCA9IE9ic2VydmFibGUudGltZXIoMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWtlV2hpbGUoaSA9PiBpICogMTAwIDw9IDMwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiAzMDAwIC0gaSAqIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZSZXF1ZXN0ZWQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICh0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5nZXRWYWx1ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ8OYwrnDmMKvw5nChSDDmMKnw5nChcOawqnDmMKnw5nChiAuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnw5nCvsObwozDmMKnw5nChcOawqkgw5jCrMOYwq/Dm8KMw5jCryDDmMKow5jCscOYwqfDm8KMIMOYwrTDmcKFw5jCpyDDmMKnw5jCscOYwrPDmMKnw5nChCDDmsKvw5jCscOYwq/Dm8KMw5jCry4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgJycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0YXJ0QWN0aW9uLCBTZWFyY2hGYWlsZWQsIFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hTdWNjZWVkIH0gZnJvbSBcIi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGNhblNlYXJjaCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgU2VhcmNoU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c2VhcmNoJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0SW5mbyhkYXRhKS5waXBlKFxyXG5cdFx0XHRcdG1hcChyZXMgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcyA9PSBudWxsID8gbmV3IFNlYXJjaEZhaWxlZCgpIDogbmV3IFNlYXJjaFN1Y2NlZWQocmVzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTZWFyY2hGYWlsZWQoKSkpXHJcblx0XHRcdCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi8uLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0bGV0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCh7IEVtYWlsOiBwYXJhbXMuRW1haWwgfSBhcyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpO1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2gobW9kZWwpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tIFwiLi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPHVzZXItY2hhbmdlLXBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSdjaGFuZ2VQYXNzd29yZCgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgID48L3VzZXItY2hhbmdlLXBhc3N3b3JkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXAgPSBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdENoYW5nZVBhc3N3b3JkTW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbykuc3Vic2NyaWJlKHVzZXJJbmZvID0+IHtcclxuXHRcdFx0aWYgKCF1c2VySW5mbykgcmV0dXJuO1xyXG5cdFx0XHQvLyBUT0RPOlxyXG5cdFx0XHQvLyB0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuVXNlcm5hbWUgPSB1c2VySW5mby5Vc2VybmFtZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VQYXNzd29yZChldmVudCkge1xyXG5cdFx0dGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlBhc3N3b3JkID0gdGhpcy5mb3JtR3JvdXAuZ2V0KFwiUGFzc3dvcmRcIikudmFsdWU7XHJcblxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlUGFzc3dvcmQodGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGUgfSBmcm9tIFwiLi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdC1jb250aWFuZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxwcm9maWxlLWVkaXRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J3VwZGF0ZVByb2ZpbGUoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICAgIFtyb2xlc109XCJyb2xlcyRcIlxyXG5cdFx0XHRcdFtncm91cHNdPVwiZ3JvdXBzIHwgYXN5bmNcIlxyXG5cdFx0XHRcdFtmb3JtSWRdPVwiKGNvbmZpZyR8YXN5bmMpPy5mb3Jtcy5wcm9maWxlX2VkaXRcIlxyXG4gICAgICAgICAgICAgID48L3Byb2ZpbGUtZWRpdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlckluZm9yYW1hdGlvbiQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRmb3JtR3JvdXAgPSBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRyb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxVc2VyTW9kdWxlQ29uZmlnPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnVzZXJJbmZvcmFtYXRpb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5yb2xlcyQgPSB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QXBwQ29uZmlnKVxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQubWFwKGNvbmZpZyA9PiBjb25maWcuQ29uZmlnLlJvbGVzKTtcclxuXHRcdC8vIFRPRE86XHJcblx0XHQvLyB0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IE9ic2VydmFibGUub2YoWyBcInRlc3QxXCIsIFwidGVzdDJcIiBdKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VySW5mb3JhbWF0aW9uJC5zdWJzY3JpYmUodXNlckluZm8gPT4ge1xyXG5cdFx0XHRpZiAodXNlckluZm8gPT0gbnVsbCkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRFbWFpbDogdXNlckluZm8uRW1haWwsXHJcblx0XHRcdFx0Um9sZXM6IHVzZXJJbmZvLlJvbGVzLFxyXG5cdFx0XHRcdEdyb3VwczogdXNlckluZm8uR3JvdXBzXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQcm9maWxlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRQcm9maWxlKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3VzZXItcHJvZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmcK+w5jCscOZwojDmcKBw5jCp8ObwozDmcKEPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQgKm5nSWY9J2RhdGFTdGF0dXMkIHwgYXN5bmMnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRmlyc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoUgw5jCrsOYwqfDmcKGw5nCiMOYwqfDmMKvw5rCr8Obwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkxhc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoUgw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Vc2VybmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOZwoTDmcKBw5nChiDDmcKHw5nChcOYwrHDmMKnw5nChzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTW9iaWxlTnVtYmVyIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCrMOZwobDmMKzw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3tzZXgkIHwgYXN5bmN9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmMKnw5jCscObwozDmMKuIMOYwqrDmcKIw5nChMOYwq88L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkJpcnRoZGF0ZSB8IHBlcnNpYW5EYXRlIDogZmFsc2V9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqfDm8KMw5nChcObwozDmcKEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+e3soaWRlbnRpZmllclR5cGUkIHwgYXN5bmMpfX08L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLklkZW50aWZpY2F0aW9uTm8gfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMK5w5jCtsOZwojDm8KMw5jCqjwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuUmVnaXN0ZXJEYXRlIHwgcGVyc2lhbkRhdGV9fTwvcD5cclxuICAgICAgPC9kaXY+IC0tPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8YnV0dG9uIGlkPVwicHJvZmlsZS1lZGl0LWJ1dHRvblwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiByb3V0ZXJMaW5rPSdlZGl0Jz7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGluZm9ybWF0aW9uOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcbiAgICBASW5wdXQoKSBkYXRhU3RhdHVzJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xyXG5cclxuICAgIHNleCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICAgIGlkZW50aWZpZXJUeXBlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGlvbi5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPHVzZXItcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgW2luZm9ybWF0aW9uXT1cImRhdGEkXCJcclxuICAgICAgICAgICAgICAgIFtkYXRhU3RhdHVzJF09J2RhdGFTdGF0dXMkJ1xyXG4gICAgICAgICAgICA+PC91c2VyLXByb2ZpbGU+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YSQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkYXRhU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5kYXRhU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3RWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VycyB9IGZyb20gXCIuL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U2VhcmNoQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkTGlua3NDb21wb25lbnQsXHJcblx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcclxuXHRcdEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzVXNlck1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogVXNlck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzVXNlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ1c2VyXCIsIFVzZXJSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xyXG5cdFx0XHQvLyBSZXNldFBhc3N3b3JkUmVxdWVzdEVmZmVjdHMsXHJcblx0XHRcdEVkaXRQcm9maWxlRWZmZWN0cyxcclxuXHRcdFx0Ly8gQ2hhbmdlUGFzc3dvcmRFZmZlY3RzLFxyXG5cdFx0XHRQcm9maWxlVmlld0VmZmVjdHMsXHJcblx0XHRcdC8vIFNlYXJjaEVmZmVjdHMsXHJcblx0XHRcdFVzZXJFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NVc2VyTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwidXNlci9wYW5lbFwiLFxyXG5cdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZExpbmtzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZS9lZGl0XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0eyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZ3NVc2VyUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmFjYWRlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge31cclxuXHRnZXREaXNwbGF5TmFtZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnU2VydmljZS5jb25maWckXHJcblx0XHRcdC5tYXAoY29uZmlnID0+IGNvbmZpZy5tYXBVc2VyRGlzcGxheU5hbWUpXHJcblx0XHRcdC5zd2l0Y2hNYXAobWFwcGVyID0+IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKS5sZXQobWFwcGVyKSk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsImluaXRpYWxTdGF0ZSIsImdldFN0YXR1cyIsInVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIiLCJjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyIiwic2VhcmNoUmVkdWNlci5yZWR1Y2VyIiwiZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXIiLCJnZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldFN0YXR1cyIsImdldEFjY291bnRJbmZvIiwidXNlclJlZHVjZXIuZ2V0QWNjb3VudEluZm8iLCJzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyIsImFwcFJlZHVjZXIuZ2V0QWNjb3VudEluZm8iLCJCZWhhdmlvclN1YmplY3QiLCJGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsIkZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyJdLCJtYXBw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
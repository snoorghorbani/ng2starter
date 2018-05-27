import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchValidator, stringTemplate } from '@soushians/shared';
import { __decorate, __metadata, __extends } from 'tslib';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable as Observable$1 } from 'rxjs/Observable';
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
        getUserInfo: "",
        profileInformation: ""
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: []
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

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
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {
                Password: this.Password
            };
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return this;
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new FormGroup({
                    Email: new FormControl(null, [Validators.required]),
                    Roles: new FormControl(null, [Validators.required]),
                    Groups: new FormControl(null, [Validators.required]),
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditProfile_ApiModel.Request = Request;
    var Response = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Response(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Response.prototype.extractData = function () {
            return this.Result.User;
        };
        return Response;
    }());
    EditProfile_ApiModel.Response = Response;
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

var ProfileViewModel;
(function (ProfileViewModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return _this[key] = initValue[key]; });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
    /**
     * @param {?} configFile
     * @param {?} store
     */
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
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return UserConfigurationService;
}());
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
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
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
            return Object.assign({}, state, { loaded: true, data: action.payload });
        }
        case UserActionTypes.REFRESH_USER_INFO: {
            return Object.assign({}, state, { loaded: true, data: action.payload });
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
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
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
    UserService.prototype.getProfileInformation = function () {
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
    UserService.prototype.editProfile = function (data) {
        var /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = function (data) {
        var _this = this;
        var /** @type {?} */ model = new ProfileViewModel.Request(data);
        if (this.responseCache && this.responseCache.Email == model.Email)
            return Observable.of(this.responseCache);
        return this.http
            .get(stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
            .do(function (response) { return (_this.responseCache = response); })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} role
     * @return {?}
     */
    UserService.prototype.is_role = function (role) {
        return this.store
            .select(getUser)
            .filter(function (user) { return user && user.Roles != undefined; })
            .take(1)
            .map(function (user) { return user.Roles.indexOf(role) > -1; });
    };
    return UserService;
}());
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
    /**
     * @param {?} payload
     */
    function EditProfile(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());
var EditProfileStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
var EditProfileSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
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
    return EditProfileEffects;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileViewEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    function ProfileViewEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetProfileStart(); }));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.userService.getProfileInformation(); }), map(function (res) { return new GetProfileSucceed(res); }), catchError(function () { return Observable$1.of(new GetProfileFailed()); }));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new RefreshUserInfoAction(data); }));
    }
    return ProfileViewEffects;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UserEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(function (action) { return action.payload; }), map(function (user) {
            debugger;
            return new GetProfileSucceed(user);
        }));
        this.getProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(function () {
            return new GetProfile();
        }));
    }
    return UserEffects;
}());
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
], UserEffects.prototype, "updateProfileInformation$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UserEffects.prototype, "getProfileInformation$", void 0);

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
            return Object.assign({}, state);
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return Object.assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return Object.assign({}, state);
        }
        case ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return Object.assign({}, state, { disable: true });
        }
        case ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return Object.assign({}, state, { disable: false });
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
    /**
     * @param {?} payload
     */
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
    return ChangePassword;
}());
var ChangePasswordStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
var ChangePasswordSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
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
    /**
     * @param {?} payload
     */
    function Search(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
    return Search;
}());
var SearchStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function SearchStartAction(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
    return SearchStartAction;
}());
var SearchSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
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
            return Object.assign({}, state, { status: "dirty", data: new ProfileViewModel.Response() });
        }
        case SearchActionTypes.SEARCH_START: {
            return Object.assign({}, state, { status: "pending" });
        }
        case SearchActionTypes.SEARCH_SUCCEED: {
            return Object.assign({}, state, { status: "succeed", data: action.payload });
        }
        case SearchActionTypes.SEARCH_FAILED: {
            return Object.assign({}, state, { status: "failed" });
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
var /** @type {?} */ selectFeatureState = createFeatureSelector("user");
var /** @type {?} */ getUserInforamtionStatus = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ isSignedIn = createSelector(selectFeatureState, function (state) { return state.user.loaded; });
var /** @type {?} */ selectResetPasswordRequestState = createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
var /** @type {?} */ getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
var /** @type {?} */ getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
//#region user
var /** @type {?} */ selectUserInformaionState = createSelector(selectFeatureState, function (state) { return state.user; });
var /** @type {?} */ getUser$1 = createSelector(selectUserInformaionState, getUser);
//#endregion
//#region search
var /** @type {?} */ selectSearchState = createSelector(selectFeatureState, function (state) { return state.searchView; });
var /** @type {?} */ getSearchStatus = createSelector(selectSearchState, getStatus$3);
var /** @type {?} */ getUserInfo$1 = createSelector(selectSearchState, getUserInfo);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function SearchComponent(store) {
        this.store = store;
        this.formGroup = ProfileViewModel.Request.formGroup;
        this.userDataLoaded$ = new BehaviorSubject$1(false);
        this.userNotFound$ = new BehaviorSubject$1(false);
        this.user = this.store.select(getUserInfo$1);
        this.userStatus$ = this.store.select(getSearchStatus);
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userStatus$.subscribe(function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); });
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.search = function () {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new Search(this.formGroup.value));
    };
    return SearchComponent;
}());
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: "search",
                template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          {{(user | async).LastName }}\u060C {{(user | async).FirstName }}\n        </div>\n        <div fxFlex=\"nogrow\">\n          {{(user | async).Email}}\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
                styles: [""]
            },] },
];
/** @nocollapse */
SearchComponent.ctorParameters = function () { return [
    { type: Store }
]; };

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
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.submit = function () {
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.changePassword = function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    return ChangePasswordComponent;
}());
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
    ProfileEditComponent.prototype.ngOnInit = function () { };
    /**
     * @return {?}
     */
    ProfileEditComponent.prototype.editProfile = function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    return ProfileEditComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DashboardLinksComponent = /** @class */ (function () {
    /**
     * @param {?} userConfigurationService
     */
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
    DashboardLinksComponent.prototype.ngOnInit = function () { };
    return DashboardLinksComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordRequestComponent = /** @class */ (function () {
    /**
     * @param {?} snackBar
     */
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable$1.timer(0, 100)
            .map(function (i) { return i + 1; })
            .takeWhile(function (i) { return i * 100 <= 3000; })
            .map(function (i) { return 3000 - i * 100; });
    }
    Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
        /**
         * @param {?} isPending
         * @return {?}
         */
        set: function (isPending) {
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
    ResetPasswordRequestComponent.prototype.ngOnInit = function () {
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
    ResetPasswordRequestComponent.prototype.submit = function () {
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
    return ResetPasswordRequestComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
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
    return SearchEffects;
}());
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
    /**
     * @param {?} route
     * @param {?} store
     */
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            _this.store.dispatch(new Search(model));
        });
    }
    return FeatureContainerComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordContainerComponent = /** @class */ (function () {
    /**
     * @param {?} route
     * @param {?} store
     */
    function ChangePasswordContainerComponent(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new ChangePasswordModel.Request();
    }
    /**
     * @return {?}
     */
    ChangePasswordContainerComponent.prototype.ngOnInit = function () {
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
    ChangePasswordContainerComponent.prototype.changePassword = function (event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
    };
    return ChangePasswordContainerComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileEditContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} configService
     */
    function ProfileEditContainerComponent(store, configService) {
        this.store = store;
        this.configService = configService;
        this.formGroup = EditProfile_ApiModel.Request.formGroup;
        this.userInforamation$ = this.store.select(getUser$1);
        this.roles$ = this.store
            .select(getAppConfig)
            .filter(function (config) { return config != undefined; })
            .map(function (config) { return config.Config.Roles; });
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = Observable$1.of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ProfileEditContainerComponent.prototype.ngOnInit = function () {
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
    ProfileEditContainerComponent.prototype.updateProfile = function (data) {
        this.store.dispatch(new EditProfile(data));
    };
    return ProfileEditContainerComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DashboardContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function DashboardContainerComponent(store) {
        this.store = store;
        this.user$ = this.store.select(getUser$1);
        // this.is_agent = signinService.is_agent();
    }
    /**
     * @return {?}
     */
    DashboardContainerComponent.prototype.ngOnInit = function () { };
    return DashboardContainerComponent;
}());
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
    ProfileComponent.prototype.ngOnInit = function () {
        this.information.subscribe(function (data) {
            if (data == null)
                return;
        });
    };
    return ProfileComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileContainerComponent = /** @class */ (function () {
    /**
     * @param {?} store
     */
    function ProfileContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(getUser$1);
        this.dataStatus$ = this.store.select(getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ProfileContainerComponent.prototype.ngOnInit = function () { };
    return ProfileContainerComponent;
}());
ProfileContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = function () { return [
    { type: Store }
]; };

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
    NgsUserModule.forRoot = function (config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsUserModule;
}());
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
var RootNgsUserModule = /** @class */ (function () {
    function RootNgsUserModule() {
    }
    return RootNgsUserModule;
}());
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
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    function PasswordService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        this.numberOfRequeseted$ = this.store.select(getNumberOfRequeseted$1);
    }
    /**
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordRequest = function () {
        return this.numberOfRequeseted$
            .take(1)
            .switchMap(function (count) { return (count < 3 ? Observable.of(true) : Observable.of(false)); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordReset = function (data) {
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
    PasswordService.prototype.requestResetPasswordLink = function (data) {
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
    PasswordService.prototype.changePassword = function (data) {
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
    PasswordService.prototype.resetPassword = function (data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .patch("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    return PasswordService;
}());
PasswordService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
PasswordService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: Store },
    { type: UserConfigurationService }
]; };
/** @nocollapse */ PasswordService.ngInjectableDef = defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(inject(HttpClient), inject(Store), inject(UserConfigurationService)); }, token: PasswordService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} passwordService
     */
    function ChangePasswordEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new ChangePasswordStart(data); }));
        this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.passwordService
                .changePassword(data)
                .map(function (res) { return new ChangePasswordSucceed(res); })
                .catch(function () { return Observable$1.of(new ChangePasswordFailed()); });
        }));
    }
    return ChangePasswordEffects;
}());
ChangePasswordEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChangePasswordEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: PasswordService }
]; };
__decorate([
    Effect(),
    __metadata("design:type", Object)
], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], ChangePasswordEffects.prototype, "RequestChangePasswordLink$", void 0);

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
var /** @type {?} */ NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserService, getUserInfo$1 as getUserInfo, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel, NgsUserModule, RootNgsUserModule, routes, NgsUserRoutingModule, ChangePasswordContainerComponent as ɵbe, ChangePasswordContainerComponent as ɵp, reducer$1 as ɵt, ChangePasswordComponent as ɵh, DashboardContainerComponent as ɵba, DashboardLinksComponent as ɵbb, DashboardContainerComponent as ɵo, DashboardLinksComponent as ɵk, userReducer as ɵr, FeatureContainerComponent as ɵbg, FeatureContainerComponent as ɵn, UserEffects as ɵz, UserReducers as ɵb, selectFeatureState as ɵd, selectSearchState as ɵe, ProfileEditContainerComponent as ɵbd, EditProfileEffects as ɵx, reducer$2 as ɵw, ProfileEditContainerComponent as ɵq, ProfileEditComponent as ɵi, ProfileContainerComponent as ɵbc, ProfileContainerComponent as ɵj, ProfileViewEffects as ɵy, ProfileComponent as ɵg, reducer as ɵs, ResetPasswordRequestComponent as ɵm, SearchComponent as ɵbf, getUserInfo as ɵv, reducer$3 as ɵu, SearchComponent as ɵf, UserConfigurationService as ɵl };
//# sourceMappingURL=soushians-user.js.map

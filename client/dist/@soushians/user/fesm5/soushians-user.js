import { InjectionToken, Injectable, Inject, NgModule, Component, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { map, filter, take, switchMap, combineLatest, catchError, takeWhile } from 'rxjs/operators';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { __assign, __decorate, __metadata, __read, __extends } from 'tslib';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { stringTemplate, MatchValidator } from '@soushians/shared';
import { getUser, SignInActionTypes } from '@soushians/authentication';
import { of, BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsFormModule } from '@soushians/form';

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
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
    mapUserDisplayName: function (user$) { return user$.pipe(map(function (user) { return user.Username; })); }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.profileInformation != ""; }), take(1), combineLatest(this.store.select(function (s) {
            debugger;
            return getUser(s);
        })), filter(function (_a) {
            var _b = __read(_a, 2), config = _b[0], user = _b[1];
            return user != undefined;
        }), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], user = _b[1];
            debugger;
            return _this.http
                .get(stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                user: user || {}
            }))
                .let(config.responseToUserInfo)
                .pipe(map(function (response) {
                var /** @type {?} */ _user = Object.assign({}, response);
                if (_user.Role) {
                    _user.Roles = [_user.Role];
                }
                return _user;
            }), catchError(function (err) { return of(false); }));
        }));
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
            .put(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
            .pipe(map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); }));
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
        var /** @type {?} */ model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
            .pipe(map(function (response) { return response; }));
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
            .pipe(filter(function (user) { return user && user.Roles != undefined; }), take(1), map(function (user) { return user.Roles.indexOf(role) > -1; }));
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
        // 		.catch(() => of(new EditProfileFailed()));
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
                .pipe(map(function (res) { return new GetProfileSucceed(res); }), catchError(function () { return of(new GetProfileFailed()); }));
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
/** @enum {string} */
var ResetPasswordRequestActionTypes = {
    GET_RESET_PASSWORD_LINK: "[USER][PASSWORD] GET_RESET_PASSWORD_LINK",
    RESET_PASSWORD_LINK_REQUEST_START: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START",
    RESET_PASSWORD_LINK_REQUEST_SUCCEED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED",
    RESET_PASSWORD_LINK_REQUEST_FAILED: "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED",
    DISABLE_GET_LINK: "[USER][PASSWORD] DISABLE_GET_LINK",
    ENABLE_GET_LINK: "[USER][PASSWORD] ENABLE_GET_LINK",
    MAXIMUM_TRY_HAPPEND: "[USER][PASSWORD] MAXIMUM_TRY_HAPPEND",
    PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
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
    CHANGE_PASSWORD: "[USER][PASSWORD] CHANGE_PASSWORD",
    PASSWORD_CHANGED_START: "[USER][PASSWORD] PASSWORD_CHANGED_START",
    PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
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
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SearchActionTypes = {
    SEARCH: "[USER][SEARCH] SEARCH",
    SEARCH_START: "[USER][SEARCH] SEARCH_START",
    SEARCH_SUCCEED: "[USER][SEARCH] SEARCH_SUCCEED",
    SEARCH_FAILED: "[USER][SEARCH] SEARCH_FAILED",
    CLEAR_SEARCHED_USER: "[USER][SEARCH] CLEAR_SEARCHED_USER",
};
var Search = /** @class */ (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
    return Search;
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
    function () { };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.submit = /**
     * @return {?}
     */
    function () { };
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
                    selector: "user-change-password",
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
 * @suppress {checkTypes} checked by tsc
 */
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.pipe(map(function (data) { return data.dashboardLinks; }));
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
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100).pipe(map(function (i) { return i + 1; }), takeWhile(function (i) { return i * 100 <= 3000; }), map(function (i) { return 3000 - i * 100; }));
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
            var /** @type {?} */ message = this.maximumResendingHappend$.getValue()
                ? "عدم امکان ..."
                : "پیامک جدید برای شما ارسال گردید.";
            this.snackBar.open(message, "", {
                duration: 3000
            });
        }
    };
    ResetPasswordRequestComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-reset-password-request",
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
        this.userInforamation$ = this.store.select(getAccountInfo$2);
        this.roles$ = this.store
            .select(getAppConfig)
            .pipe(filter(function (config) { return config != undefined; }), map(function (config) { return config.Config.Roles; }));
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = of(["test1", "test2"]);
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
 * @suppress {checkTypes} checked by tsc
 */
var DashboardContainerComponent = /** @class */ (function () {
    // is_agent : Observable<boolean>;
    function DashboardContainerComponent(store) {
        this.store = store;
        this.user$ = this.store.select(getAccountInfo);
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
            }
        ]
    },
    {
        path: "admin/user",
        children: [
            // { path: "managment", component: SearchComponent },
            {
                path: ":Email",
                component: FeatureContainerComponent,
                children: [
                    {
                        path: "profile-edit",
                        component: ProfileEditContainerComponent
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
/** @enum {string} */
var NgsUserModuleOutlets = {
    ngs_user_profile_view: "ngs-user-profile-view",
};

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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserModel, NgsUserModule, NgsUserRoutingModule, NgsUserModuleOutlets, UserService, UserFacadeService, getAccountInfo$2 as getAccountInfo, UserActionTypes, ChangePasswordContainerComponent as ɵr, reducer$1 as ɵw, ChangePasswordComponent as ɵj, getAccountInfo as ɵu, userReducer as ɵt, DashboardContainerComponent as ɵq, DashboardLinksComponent as ɵm, FeatureContainerComponent as ɵp, UserEffects as ɵbb, EditProfileEffects as ɵz, reducer$2 as ɵy, ProfileEditContainerComponent as ɵs, ProfileEditComponent as ɵk, ProfileContainerComponent as ɵl, ProfileViewEffects as ɵba, ProfileComponent as ɵi, reducer as ɵv, ResetPasswordRequestComponent as ɵo, reducer$3 as ɵx, SearchComponent as ɵh, UserConfigurationService as ɵn, MODULE_CONFIG_TOKEN as ɵa, RootNgsUserModule as ɵb, UserReducers as ɵd, selectFeatureState as ɵf, selectUserInformaionState as ɵg, routes as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXItb3V0bGV0cy5lbnVtLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlcnZpY2VzL3VzZXIuZmFjYWRlLXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Ly8gRmlyc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gTGFzdE5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0Ly8gVXNlcm5hbWU6IHN0cmluZztcclxuXHQvLyBNb2JpbGVOdW1iZXI6IHN0cmluZztcclxuXHQvLyBTZXg6IHN0cmluZztcclxuXHQvLyBCaXJ0aGRhdGU6IHN0cmluZztcclxuXHRFbWFpbDogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpY2F0aW9uTm86IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWVyVHlwZTogc3RyaW5nO1xyXG5cdC8vIFJlZ2lzdGVyRGF0ZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJUeXBlOiBzdHJpbmc7XHJcblx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdEdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLlJvbGVzID0gW107XHJcblx0XHR0aGlzLkdyb3VwcyA9IFtdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRzZXJ2ZXI/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdFx0c2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0XHRlZGl0UHJvZmlsZT86IHN0cmluZztcclxuXHRcdGdldEFjY291bnRJbmZvPzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uPzogc3RyaW5nO1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGRhc2hib2FyZExpbmtzPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbz86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0c2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwidXNlci9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwidXNlci9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6ICcnLFxyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRlZGl0UHJvZmlsZTogXCJcIixcclxuXHRcdGdldEFjY291bnRJbmZvOiBcIlwiLFxyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBcIlwiXHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiAnJyxcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IFwiXCJcclxuXHR9LFxyXG5cdGRhc2hib2FyZExpbmtzOiBbXSxcclxuXHRyZXNwb25zZVRvVXNlckluZm86IHVzZXIkID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogdXNlciQgPT4gdXNlciQucGlwZShtYXAodXNlciA9PiB1c2VyLlVzZXJuYW1lKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFVzZXJNb2R1bGVDb25maWc+KFwiVXNlck1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1BST0ZJTEUgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRVwiLFxyXG5cdEdFVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRHRVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEdFVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvZmlsZVZpZXdBY3Rpb24gPSBHZXRQcm9maWxlIHwgR2V0UHJvZmlsZVN0YXJ0IHwgR2V0UHJvZmlsZVN1Y2NlZWQgfCBHZXRQcm9maWxlRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRVU0VSX1NFTEVDVEVEID0gXCJbVVNFUl0gVVNFUl9TRUxFQ1RFRFwiLFxyXG5cdFJFRlJFU0hfVVNFUl9JTkZPID0gXCJbVVNFUl0gUkVGUkVTSF9VU0VSX0lORk9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlbGVjdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VySW5mb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gVXNlclNlbGVjdGVkQWN0aW9uIHwgUmVmcmVzaFVzZXJJbmZvQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIi4vdXNlci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGF0YTogVXNlck1vZGVsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGF0YTogbmV3IFVzZXJNb2RlbCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlVmlld01vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdEVtYWlsOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIFVzZXJNb2RlbCB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHRcdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFJlcXVlc3Q+ID0ge30gYXMgUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT4ge1xyXG5cdFx0UmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRleHRyYWN0RGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0LCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWxcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0Y29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnN1YnNjcmliZShjb25maWcgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UHJvZmlsZSgpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRBY2NvdW50SW5mbygpOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnN0b3JlLnNlbGVjdChzID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0VXNlcihzKTtcclxuXHRcdFx0fSkpLFxyXG5cdFx0XHRmaWx0ZXIoKFtjb25maWcsIHVzZXJdOiBbVXNlck1vZHVsZUNvbmZpZywgYW55XSkgPT4gdXNlciAhPSB1bmRlZmluZWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFtjb25maWcsIHVzZXJdOiBbVXNlck1vZHVsZUNvbmZpZywgYW55XSkgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQ8YW55PihcclxuXHRcdFx0XHRcdFx0c3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uLCB7XHJcblx0XHRcdFx0XHRcdFx0dXNlcjogdXNlciB8fCB7fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0LmxldChjb25maWcucmVzcG9uc2VUb1VzZXJJbmZvKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzcG9uc2U6IFVzZXJNb2RlbCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IF91c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKF91c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdF91c2VyLlJvbGVzID0gW191c2VyLlJvbGVdO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3VzZXI7XHJcblx0XHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiBvZihmYWxzZSkpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0ZWRpdFByb2ZpbGUoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0PEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlc3BvbnNlPihcclxuXHRcdFx0XHRzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZy5lbnZbdGhpcy5jb25maWcuc2VydmVyXSArIHRoaXMuY29uZmlnLmVuZHBvaW50cy5lZGl0UHJvZmlsZSwgbW9kZWwpLFxyXG5cdFx0XHRcdG1vZGVsLmdldFJlcXVlc3RCb2R5KClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlc3BvbnNlKHJlc3BvbnNlKS5leHRyYWN0RGF0YSgpKSk7XHJcblx0fVxyXG5cdC8vIFRPRE86IHJlbW92ZVxyXG5cdGdldEluZm8oZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52W3RoaXMuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZ2V0QWNjb3VudEluZm8sIG1vZGVsKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xyXG5cdH1cclxuXHJcblx0aXNfcm9sZShyb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QWNjb3VudEluZm8pXHJcblx0XHRcdC5waXBlKGZpbHRlcih1c2VyID0+IHVzZXIgJiYgdXNlci5Sb2xlcyAhPSB1bmRlZmluZWQpLCB0YWtlKDEpLCBtYXAodXNlciA9PiB1c2VyLlJvbGVzLmluZGV4T2Yocm9sZSkgPiAtMSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIHtcclxuXHRFRElUX1BST0ZJTEUgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFXCIsXHJcblx0RURJVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEVESVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0RURJVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdFByb2ZpbGVBY3Rpb24gPSBFZGl0UHJvZmlsZSB8IEVkaXRQcm9maWxlU3RhcnQgfCBFZGl0UHJvZmlsZVN1Y2NlZWQgfCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuXHRFZGl0UHJvZmlsZVN0YXJ0LFxyXG5cdEVkaXRQcm9maWxlU3VjY2VlZCxcclxuXHRFZGl0UHJvZmlsZUZhaWxlZFxyXG59IGZyb20gXCIuL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEVkaXRQcm9maWxlU3RhcnQoZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UmVxdWVzdEVkaXRQcm9maWxlTGluayQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS5lZGl0UHJvZmlsZShkYXRhKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHQpO1xyXG5cdC8vIC5zd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHtcclxuXHQvLyBcdHJldHVybiB0aGlzLnNlcnZpY2VcclxuXHQvLyBcdFx0LmVkaXRQcm9maWxlKGRhdGEpXHJcblx0Ly8gXHRcdC5tYXAoKHJlcykgPT4gbmV3IEVkaXRQcm9maWxlU3VjY2VlZChyZXMpKVxyXG5cdC8vIFx0XHQuY2F0Y2goKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKTtcclxuXHQvLyB9KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub1ZpZXckID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdBY3Rpb25UeXBlcywgR2V0UHJvZmlsZVN0YXJ0LCBHZXRQcm9maWxlU3VjY2VlZCwgR2V0UHJvZmlsZUZhaWxlZCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlVmlld0VmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldFByb2ZpbGVTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFByb2ZpbGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy51c2VyU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEFjY291bnRJbmZvKClcclxuXHRcdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXRQcm9maWxlRmFpbGVkKCkpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0cmVmcmVzaFVzZXJJbmZvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oZGF0YSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBHZXRQcm9maWxlU3VjY2VlZCB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0Ly8gXHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdG1hcCh1c2VyID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlU3VjY2VlZCh1c2VyKTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gKTtcclxuXHRARWZmZWN0KClcclxuXHRnZXRBY2NvdW50SW5mbyQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oe30gYXMgVXNlck1vZGVsKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gR0VUX1JFU0VUX1BBU1NXT1JEX0xJTktcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRURcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRURcIixcclxuXHRESVNBQkxFX0dFVF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIERJU0FCTEVfR0VUX0xJTktcIixcclxuXHRFTkFCTEVfR0VUX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gRU5BQkxFX0dFVF9MSU5LXCIsXHJcblx0TUFYSU1VTV9UUllfSEFQUEVORCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc2V0UGFzc3dvcmRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgTWF4aW11bVRyeUhhcHBlbmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLk1BWElNVU1fVFJZX0hBUFBFTkQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiA9XHJcblx0fCBHZXRSZXNldFBhc3N3b3JkTGlua1xyXG5cdHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnRcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZFxyXG5cdHwgRGlzYWJsZUdldExpbmtcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWRcclxuXHR8IEVuYWJsZUdldExpbmtcclxuXHR8IE1heGltdW1UcnlIYXBwZW5kXHJcblx0fCBQYXNzd29yZENoYW5nZWRTdWNjZWVkXHJcblx0fCBQYXNzd29yZENoYW5nZWRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uLCBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogbnVtYmVyO1xyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBzdHJpbmc7XHJcblx0ZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogMCxcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogbnVsbCxcclxuXHRkaXNhYmxlOiBmYWxzZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG51bWJlck9mUmVxdWVzdGVkOiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZCArIDEsXHJcblx0XHRcdFx0bGFzdFJlcXVlc3RlZFRpbWU6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldE51bWJlck9mUmVxdWVzZXRlZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkO1xyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpc2FibGU7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG5cdENIQU5HRV9QQVNTV09SRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBDSEFOR0VfUEFTU1dPUkRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1RBUlRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkQWN0aW9uID0gQ2hhbmdlUGFzc3dvcmQgfCBDaGFuZ2VQYXNzd29yZFN0YXJ0IHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkIHwgQ2hhbmdlUGFzc3dvcmRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRBY3Rpb24sIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IENoYW5nZVBhc3N3b3JkQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVBY3Rpb24sIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEVkaXRQcm9maWxlQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaEFjdGlvblR5cGVzIHtcclxuXHRTRUFSQ0ggPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSFwiLFxyXG5cdFNFQVJDSF9TVEFSVCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NUQVJUXCIsXHJcblx0U0VBUkNIX1NVQ0NFRUQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVUNDRUVEXCIsXHJcblx0U0VBUkNIX0ZBSUxFRCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX0ZBSUxFRFwiLFxyXG5cdENMRUFSX1NFQVJDSEVEX1VTRVIgPSBcIltVU0VSXVtTRUFSQ0hdIENMRUFSX1NFQVJDSEVEX1VTRVJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPSBTZWFyY2ggfCBTZWFyY2hTdGFydEFjdGlvbiB8IFNlYXJjaFN1Y2NlZWQgfCBTZWFyY2hGYWlsZWQgfCBDbGVhclNlYXJjaGVkVXNlcjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaEFjdGlvbiB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiB7fSBhcyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNlYXJjaEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCIsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSOiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuZXhwb3J0IHZhciBnZXRBY2NvdW50SW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyBhcyBfZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlciBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgY2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGVkaXRQcm9maWxlUmVkdWNlciBmcm9tIFwiLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgc2VhcmNoUmVkdWNlciBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIuU3RhdGU7XHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5TdGF0ZTtcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLlN0YXRlO1xyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5TdGF0ZTtcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZHVjZXJzID0ge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlcixcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQucmVkdWNlcixcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLnJlZHVjZXIsXHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRcInVzZXJcIjogVXNlclN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFVzZXJTdGF0ZT4oXCJ1c2VyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuZXhwb3J0IGNvbnN0IGlzU2lnbmVkSW4gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuXHQoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVzZXRQYXNzd29yZFJlcXVlc3RcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlck9mUmVxdWVzZXRlZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXNcclxuKTtcclxuXHJcbi8vI3JlZ2lvbiB1c2VyXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50SW5mbyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFVzZXJJbmZvcm1haW9uU3RhdGUsIF9nZXRBY2NvdW50SW5mbyk7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIHNlYXJjaFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hWaWV3KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyk7XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeEZsZXg9XCI0NTBweFwiICpuZ0lmPVwiKHVzZXJTdGF0dXMkIHwgYXN5bmMpID09ICdzdWNjZWVkJ1wiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuTGFzdE5hbWUgfX3DmMKMIHt7KHVzZXIgfCBhc3luYykuRmlyc3ROYW1lIH19IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuRW1haWx9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5sb2NhbF9ncm9jZXJ5X3N0b3JlPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCtMOZwobDmMKnw5jCs8OZwoc8L3A+XHJcbiAgICAgICAgPCEtLSA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5faWQgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5lbWFpbDwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuRW1haWwgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1jaGFuZ2UtcGFzc3dvcmRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJjaGFuZ2VQYXNzd29yZCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5rCqcOYwrHDmMKnw5jCsSDDmsKpw5nChMOZwoXDmcKHIMOYwrnDmMKow5nCiMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb25maXJtXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOYwqrDmMK6w5vCjMObwozDmMKxIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi91c2VyL3BhbmVsXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRzdWJtaXQoKSB7fVxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZVBhc3N3b3JkKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG5cclxuICBcclxuICA8bmdzLWZvcm0tdmlldyAjZm9ybSBbaWRdPVwiZm9ybUlkXCIgW2NhcmRdPVwidHJ1ZVwiIChhY2NlcHQpPVwiZWRpdFByb2ZpbGUoZm9ybS5mb3JtR3JvdXApXCIgKGNhbmNlbCk9XCJnb2JhY2soKVwiID48L25ncy1mb3JtLXZpZXc+XHJcbiAgPCEtLSA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0UHJvZmlsZSgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiLi5cIiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT4gLS0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgdXNlckluZm86IGFueTtcclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHRASW5wdXQoXCJyb2xlc1wiKSByb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdEBJbnB1dCgpIGdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdGVkaXRQcm9maWxlKGZvcm06IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQoZm9ybS52YWx1ZSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIuLlwiIF0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtbGlua3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRXcmFwIGlkPVwiY29uXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MkIHwgYXN5bmMnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NvbiBbZnhmbGV4XXttYXJnaW4tcmlnaHQ6MjVweH06aG9zdHt3aWR0aDoxMDAlO3BhZGRpbmc6MjVweCAyNXB4IDB9YnV0dG9uIG1hdC1pY29ue2ZvbnQtc2l6ZTo0OHB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9YnV0dG9uLmxpbmt7cGFkZGluZzoyNXB4IDE1cHg7bWFyZ2luLWJvdHRvbToyNXB4fS50aXRsZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo1cHh9LmRlc2NyaXB0aW9ue292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDo5MCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0bGlua3M6IGFueVtdO1xyXG5cdGxpbmtzJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQ29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5saW5rcyQgPSB0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5kYXNoYm9hcmRMaW5rcykpO1xyXG5cdFx0dGhpcy5saW5rcyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIsOZwoXDmMK0w5jCp8OZwofDmMKvw5nChyDDmMKtw5jCs8OYwqfDmMKoIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjFwiLFxyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Byb2ZpbGVcIixcclxuXHRcdFx0XHQvLyBkZXNjcmlwdGlvbjogXCLDmcKEw5nCiMOYwrHDmcKFIMOYwqfDm8KMw5nCvsOYwrPDmcKIw5nChSDDmcKFw5jCqsOZwoYgw5jCs8OYwqfDmMKuw5jCqsOawq/Dm8KMIMOYwqjDmMKnIMOYwqrDmcKIw5nChMObwozDmMKvIMOYwrPDmMKnw5jCr8Oawq/Dm8KMIMOZwobDmMKnw5nChcOZwoHDmcKHw5nCiMOZwoVcIixcclxuXHRcdFx0XHRpY29uOiBcInBlcnNvblwiXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gLFxyXG5cdFx0XHQvLyB7XHJcblx0XHRcdC8vIFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcGFzc3dvcmQvY2hhbmdlXCIsXHJcblx0XHRcdC8vIFx0dGl0bGU6IFwiw5jCqsOYwrrDm8KMw5vCjMOYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIsXHJcblx0XHRcdC8vIFx0Ly8gZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdC8vIFx0aWNvbjogXCJzZWN1cml0eVwiXHJcblx0XHRcdC8vIH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yZXNldC1wYXNzd29yZC1yZXF1ZXN0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHRha2VXaGlsZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1yZXNldC1wYXNzd29yZC1yZXF1ZXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxoMz7DmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrE8L2gzPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPHA+w5jCqMOYwrHDmMKnw5vCjCDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxIMOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwojDmMKnw5jCscOYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvPC9wPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGZ4RmxleEZpbGwgZm9ybUNvbnRyb2xOYW1lPVwiVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic21zXCI+w5nCvsObwozDmMKnw5nChcOawqk8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJlbWFpbFwiPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCtMOZwoXDmMKnw5jCscOZwocgw5jCqsOZwoTDmcKBw5nChiDDmcKHw5nChcOYwrHDmMKnw5nCh1wiIGZvcm1Db250cm9sTmFtZT1cIlVzZXJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPCEtLTxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpIHx8IChtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPi0tPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9JyEoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSAmJiAhKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICB7e3RpbWVyJCB8IGFzeW5jfX0gw5jCq8OYwqfDmcKGw5vCjMOZwocgw5jCqsOYwqcgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrEgw5jCrsOZwojDmMKnw5jCs8OYwqogw5jCr8OZwojDmMKow5jCp8OYwrHDmcKHIMOYwq/DmMKxw5vCjMOYwqfDmcKBw5jCqiDDmcK+w5vCjMOYwqfDmcKFw5rCqS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPScobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgIMOYwrnDmMKvw5nChSDDmMKnw5nChcOawqnDmMKnw5nChiDDmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqXHJcbiAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9hdXRoL3NpZ25pbic+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9hPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZm9ybT5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3Q+KCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIG51bWJlck9mUmVxdWVzdGVkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0QElucHV0KCkgY2FuUmVxdWVzdFBpbjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBwZW5kaW5nKGlzUGVuZGluZzogYm9vbGVhbikge1xyXG5cdFx0aWYgKGlzUGVuZGluZykge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5kaXNhYmxlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAuZW5hYmxlKCk7XHJcblx0fVxyXG5cclxuXHR0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHRtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xyXG5cdFx0dGhpcy50aW1lciQgPSBPYnNlcnZhYmxlLnRpbWVyKDAsIDEwMCkucGlwZShcclxuXHRcdFx0bWFwKGkgPT4gaSArIDEpLFxyXG5cdFx0XHR0YWtlV2hpbGUoaSA9PiBpICogMTAwIDw9IDMwMDApLFxyXG5cdFx0XHRtYXAoaSA9PiAzMDAwIC0gaSAqIDEwMClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubnVtYmVyT2ZSZXF1ZXN0ZWQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YSA+IDIpIHtcclxuXHRcdFx0XHR0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5uZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN1Ym1pdCgpIHtcclxuXHRcdGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSB0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5nZXRWYWx1ZSgpXHJcblx0XHRcdFx0PyBcIsOYwrnDmMKvw5nChSDDmMKnw5nChcOawqnDmMKnw5nChiAuLi5cIlxyXG5cdFx0XHRcdDogXCLDmcK+w5vCjMOYwqfDmcKFw5rCqSDDmMKsw5jCr8ObwozDmMKvIMOYwqjDmMKxw5jCp8Obwowgw5jCtMOZwoXDmMKnIMOYwqfDmMKxw5jCs8OYwqfDmcKEIMOawq/DmMKxw5jCr8ObwozDmMKvLlwiO1xyXG5cdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgXCJcIiwge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi8uLi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0bGV0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCh7IEVtYWlsOiBwYXJhbXMuRW1haWwgfSBhcyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpO1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2gobW9kZWwpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0VXNlcm5hbWU6IHN0cmluZztcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QgPSB7fSBhcyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRQYXNzd29yZDogdGhpcy5QYXNzd29yZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDcpIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLWNoYW5nZS1wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0nY2hhbmdlUGFzc3dvcmQoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICA+PC91c2VyLWNoYW5nZS1wYXNzd29yZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwID0gQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRDaGFuZ2VQYXNzd29yZE1vZGVsID0gbmV3IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCgpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pLnN1YnNjcmliZSh1c2VySW5mbyA9PiB7XHJcblx0XHRcdGlmICghdXNlckluZm8pIHJldHVybjtcclxuXHRcdFx0Ly8gVE9ETzpcclxuXHRcdFx0Ly8gdGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlVzZXJuYW1lID0gdXNlckluZm8uVXNlcm5hbWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuXHRcdHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5QYXNzd29yZCA9IHRoaXMuZm9ybUdyb3VwLmdldChcIlBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGUgfSBmcm9tIFwiLi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vLi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdC1jb250aWFuZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxwcm9maWxlLWVkaXRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J3VwZGF0ZVByb2ZpbGUoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFt1c2VySW5mb109XCJ1c2VySW5mb3JhbWF0aW9uJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtyb2xlc109XCJyb2xlcyRcIlxyXG5cdFx0XHRcdFtncm91cHNdPVwiZ3JvdXBzIHwgYXN5bmNcIlxyXG5cdFx0XHRcdFtmb3JtSWRdPVwiKGNvbmZpZyR8YXN5bmMpPy5mb3Jtcy5wcm9maWxlX2VkaXRcIlxyXG4gICAgICAgICAgICAgID48L3Byb2ZpbGUtZWRpdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlckluZm9yYW1hdGlvbiQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRyb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxVc2VyTW9kdWxlQ29uZmlnPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge1xyXG5cdFx0dGhpcy51c2VySW5mb3JhbWF0aW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMucm9sZXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LnBpcGUoZmlsdGVyKGNvbmZpZyA9PiBjb25maWcgIT0gdW5kZWZpbmVkKSwgbWFwKGNvbmZpZyA9PiBjb25maWcuQ29uZmlnLlJvbGVzKSk7XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gdGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBvZihbIFwidGVzdDFcIiwgXCJ0ZXN0MlwiIF0pO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnJCA9IHRoaXMuY29uZmlnU2VydmljZS5jb25maWckO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHR1cGRhdGVQcm9maWxlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRQcm9maWxlKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL2FjY291bnQucmVkdWNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8IS0tIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJsaW5rc1wiPjwvcm91dGVyLW91dGxldD4gLS0+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjYm94LWxlZnR7YmFja2dyb3VuZDojZmZmfSNib3gtYm90dG9te2JhY2tncm91bmQ6IzJiMDAzM30jYm94LXJpZ2h0e2JhY2tncm91bmQ6IzAwMDgzMztwYWRkaW5nLXRvcDoxMHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxMHB4IWltcG9ydGFudH0jYm94LXJpZ2h0IGRpdntiYWNrZ3JvdW5kOiNmZmY7b3BhY2l0eTouNX0jYmFubmVyOm5vdCguYWN0aXZlKXtoZWlnaHQ6MTAwJTstd2Via2l0LWZpbHRlcjpncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxLjUpIG9wYWNpdHkoLjIpIGJsdXIoMnB4KTtmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCl9I3Mxe2JhY2tncm91bmQ6I2FhYX0jczJ7YmFja2dyb3VuZDojYmJifSNzM3tiYWNrZ3JvdW5kOiNjY2N9LnBlcnNvbmFsLWluZm97YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDoxMCU7d2lkdGg6OTAlO2hlaWdodDo0NjlweH0ucGVyc29uYWwtaW5mbyBoMntjb2xvcjojMDBiY2Q0O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MjRweDtmb250LWZhbWlseTppcmFuLXNhbnMtbGlnaHQhaW1wb3J0YW50fS5wZXJzb25hbC1pbmZvIGg2e2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTJweDtmbG9hdDpyaWdodDt3aWR0aDo1MCU7bWFyZ2luOjA7Y29sb3I6IzU1NTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIHB7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzAlO21hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctcmlnaHQ6MzBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIGRpdnt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cmlnaHQ6MTdweH0ucXVpY2stYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NTJweDtwYWRkaW5nLXRvcDo3OXB4fS5xdWljay1idG57YmFja2dyb3VuZC1jb2xvcjojMDBiY2Q0O21hcmdpbjoxMnB4IDEwcHg7aGVpZ2h0OjEwMHB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEwMHB4O2ZvbnQtc2l6ZToxN3B4O2NvbG9yOiNmZmZ9LmJhbm5lci1zZWN0aW9ue3RleHQtYWxpZ246Y2VudGVyfS5pbmZvLXNlY3Rpb257cGFkZGluZzo2MHB4IDI1cHggMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvZ3JleS5wbmcpIWltcG9ydGFudDtoZWlnaHQ6MTA0MHB4O3BhZGRpbmctYm90dG9tOjEyMHB4IWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdC8vIGlzX2FnZW50IDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLnVzZXIkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0Ly8gdGhpcy5pc19hZ2VudCA9IHNpZ25pblNlcnZpY2UuaXNfYWdlbnQoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1wcm9maWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPHJvdXRlci1vdXRsZXQgbmFtZT1cIm5ncy11c2VyLXByb2ZpbGUtdmlld1wiPjwvcm91dGVyLW91dGxldD5cclxuICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgPCEtLSA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OYwrfDmcKEw5jCp8OYwrnDmMKnw5jCqiDDmcK+w5jCscOZwojDmcKBw5jCp8ObwozDmcKEPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQgKm5nSWY9J2RhdGFTdGF0dXMkIHwgYXN5bmMnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnICpuZ0Zvcj1cImxldCBpdGVtIG9mIGluZm9cIj5cclxuICAgICAgICAgICAgPHAgZnhGbGV4PSc0MCc+e3tpdGVtWzBdfX08L3A+XHJcbiAgICAgICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7aXRlbVsxXX19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIFxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiByb3V0ZXJMaW5rPScuLic+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nZWRpdCc+w5nCiMObwozDmMKxw5jCp8ObwozDmMK0PC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD4gLS0+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG48IS0tIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqfDm8KMw5nChcObwozDmcKEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KGluZm9ybWF0aW9uIHwgYXN5bmMpLkVtYWlsfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz5yb2xlczwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5Sb2xlcyB8IGpzb259fTwvcD5cclxuICAgICAgPC9kaXY+IC0tPlxyXG48IS0tIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRmlyc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoUgw5jCrsOYwqfDmcKGw5nCiMOYwqfDmMKvw5rCr8Obwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkxhc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoUgw5rCqcOYwqfDmMKxw5jCqMOYwrHDm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Vc2VybmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOZwoTDmcKBw5nChiDDmcKHw5nChcOYwrHDmMKnw5nChzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTW9iaWxlTnVtYmVyIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCrMOZwobDmMKzw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3tzZXgkIHwgYXN5bmN9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmMKnw5jCscObwozDmMKuIMOYwqrDmcKIw5nChMOYwq88L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkJpcnRoZGF0ZSB8IHBlcnNpYW5EYXRlIDogZmFsc2V9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqfDm8KMw5nChcObwozDmcKEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+e3soaWRlbnRpZmllclR5cGUkIHwgYXN5bmMpfX08L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLklkZW50aWZpY2F0aW9uTm8gfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMK5w5jCtsOZwojDm8KMw5jCqjwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuUmVnaXN0ZXJEYXRlIHwgcGVyc2lhbkRhdGV9fTwvcD5cclxuICAgICAgPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpbmZvcm1hdGlvbihpbmZvcm1hdGlvbjogVXNlck1vZGVsKSB7XHJcblx0XHRpZiAoIWluZm9ybWF0aW9uKSByZXR1cm47XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoaW5mb3JtYXRpb24pLmZvckVhY2goayA9PiB0aGlzLmluZm8ucHVzaChbIGssIGluZm9ybWF0aW9uW2tdIF0pKTtcclxuXHR9XHJcblx0QElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHRpbmZvOiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLXByb2ZpbGVcclxuICAgICAgICAgICAgICAgIFtpbmZvcm1hdGlvbl09XCJkYXRhJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtkYXRhU3RhdHVzJF09J2RhdGFTdGF0dXMkJ1xyXG4gICAgICAgICAgICA+PC91c2VyLXByb2ZpbGU+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YSQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRkYXRhU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmRhdGEkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5kYXRhU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3RWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VycyB9IGZyb20gXCIuL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U2VhcmNoQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkTGlua3NDb21wb25lbnQsXHJcblx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcclxuXHRcdEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzVXNlck1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogVXNlck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzVXNlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ1c2VyXCIsIFVzZXJSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xyXG5cdFx0XHQvLyBSZXNldFBhc3N3b3JkUmVxdWVzdEVmZmVjdHMsXHJcblx0XHRcdEVkaXRQcm9maWxlRWZmZWN0cyxcclxuXHRcdFx0Ly8gQ2hhbmdlUGFzc3dvcmRFZmZlY3RzLFxyXG5cdFx0XHRQcm9maWxlVmlld0VmZmVjdHMsXHJcblx0XHRcdC8vIFNlYXJjaEVmZmVjdHMsXHJcblx0XHRcdFVzZXJFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NVc2VyTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbi8vIGltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwidXNlci9wYW5lbFwiLFxyXG5cdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZExpbmtzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZS9lZGl0XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHtcclxuXHRcdFx0Ly8gXHRwYXRoOiBcInBhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHQvLyBcdGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogXCJhZG1pbi91c2VyXCIsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHQvLyB7IHBhdGg6IFwibWFuYWdtZW50XCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIjpFbWFpbFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyB7XHJcblx0XHRcdFx0XHQvLyBcdHBhdGg6IFwiY2hhbmdlLXBhc3N3b3JkXCIsXHJcblx0XHRcdFx0XHQvLyBcdGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmdzVXNlclJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiZXhwb3J0IGVudW0gTmdzVXNlck1vZHVsZU91dGxldHMge1xyXG5cdG5nc191c2VyX3Byb2ZpbGVfdmlldyA9IFwibmdzLXVzZXItcHJvZmlsZS12aWV3XCJcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBBcHBTdGF0ZSB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmFjYWRlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge31cclxuXHRnZXREaXNwbGF5TmFtZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKS5sZXQodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tYXBVc2VyRGlzcGxheU5hbWUpO1xyXG5cdFx0Ly8gLnBpcGUoZmlsdGVyKGRpc3BsYXlOYW1lID0+IGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpKTtcclxuXHR9XHJcblx0Z2V0SW5mbygpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0U3RhdHVzIiwidXNlclJlZHVjZXIudXNlclJlZHVjZXIiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlciIsImNoYW5nZVBhc3N3b3JkLnJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyLnJlZHVjZXIiLCJlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0QWNjb3VudEluZm8iLCJfZ2V0QWNjb3VudEluZm8iLCJzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyIsIkJlaGF2aW9yU3ViamVjdCIsIkZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvIiwiRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzIiwiRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBO0lBaUJDO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDakI7b0JBcEJGO0lBcUJDOzs7Ozs7QUNyQkQsQUFnQ08scUJBQU0scUJBQXFCLEdBQXFCO0lBQ3RELE1BQU0sRUFBRSxpQkFBaUI7SUFDekIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7UUFDakIsZUFBZSxFQUFFLHlDQUF5QztRQUMxRCxNQUFNLEVBQUUsZ0NBQWdDO0tBQ3hDO0lBQ0QsU0FBUyxFQUFFOztRQUVWLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsY0FBYyxFQUFFLEVBQUU7UUFDbEIsa0JBQWtCLEVBQUUsRUFBRTtLQUV0QjtJQUNELEtBQUssRUFBRTtRQUNOLFlBQVksRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsa0JBQWtCLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUE7SUFDbEMsa0JBQWtCLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxV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
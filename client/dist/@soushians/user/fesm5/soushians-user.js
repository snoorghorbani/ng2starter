import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule } from '@angular/material';
import { Store, createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { NgsFormModule } from '@soushians/form';
import { map, filter, take, combineLatest, switchMap, catchError, pluck, takeWhile } from 'rxjs/operators';
import { __assign, __extends, __read, __decorate, __metadata } from 'tslib';
import { of, BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { stringTemplate, MatchValidator } from '@soushians/shared';
import { getUser, SignInActionTypes } from '@soushians/authentication';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { Observable } from 'rxjs/Observable';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.Roles = [];
        this.Groups = [];
    }
    return UserModel;
}());
if (false) {
    /** @type {?} */
    UserModel.prototype._id;
    /** @type {?} */
    UserModel.prototype.DisplayName;
    /** @type {?} */
    UserModel.prototype.Email;
    /** @type {?} */
    UserModel.prototype.Roles;
    /** @type {?} */
    UserModel.prototype.Groups;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UserModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    UserModuleConfig.prototype.server;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.env;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.forms;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.dashboardLinks;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.responseToUserInfo;
    /** @type {?|undefined} */
    UserModuleConfig.prototype.mapUserDisplayName;
}
var ɵ0 = /**
 * @param {?} user$
 * @return {?}
 */
function (user$) { return user$; }, ɵ1 = /**
 * @param {?} user$
 * @return {?}
 */
function (user$) { return user$.pipe(map((/**
 * @param {?} user
 * @return {?}
 */
function (user) { return user.Username; }))); };
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
        // resetPassword: '',
    },
    forms: {
        profile_edit: ""
    },
    dashboardLinks: [],
    responseToUserInfo: (ɵ0),
    mapUserDisplayName: (ɵ1)
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserConfigurationService = /** @class */ (function () {
    function UserConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getUserModuleConfig).subscribe((/**
         * @param {?} userConfig
         * @return {?}
         */
        function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        }));
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
                },] }
    ];
    /** @nocollapse */
    UserConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ UserConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: UserConfigurationService, providedIn: "root" });
    return UserConfigurationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserConfigurationService.prototype._config;
    /** @type {?} */
    UserConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    UserConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    GetProfile.prototype.type;
}
var GetProfileStart = /** @class */ (function () {
    function GetProfileStart() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
    return GetProfileStart;
}());
if (false) {
    /** @type {?} */
    GetProfileStart.prototype.type;
}
var GetProfileSucceed = /** @class */ (function () {
    function GetProfileSucceed(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
    return GetProfileSucceed;
}());
if (false) {
    /** @type {?} */
    GetProfileSucceed.prototype.type;
    /** @type {?} */
    GetProfileSucceed.prototype.payload;
}
var GetProfileFailed = /** @class */ (function () {
    function GetProfileFailed() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
    return GetProfileFailed;
}());
if (false) {
    /** @type {?} */
    GetProfileFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var UserActionTypes = {
    USER_SELECTED: "[USER] USER_SELECTED",
    REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
};
var UserSelectedAction = /** @class */ (function () {
    function UserSelectedAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.USER_SELECTED;
    }
    return UserSelectedAction;
}());
if (false) {
    /** @type {?} */
    UserSelectedAction.prototype.type;
    /** @type {?} */
    UserSelectedAction.prototype.payload;
}
var RefreshUserInfoAction = /** @class */ (function () {
    function RefreshUserInfoAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
    return RefreshUserInfoAction;
}());
if (false) {
    /** @type {?} */
    RefreshUserInfoAction.prototype.type;
    /** @type {?} */
    RefreshUserInfoAction.prototype.payload;
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
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.data;
}
var ɵ0$1 = new UserModel();
/** @type {?} */
var initialState = {
    loaded: false,
    data: ɵ0$1
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
var getAccountInfo = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileViewModel;
(function (ProfileViewModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
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
    if (false) {
        /** @type {?} */
        Request.prototype.Email;
    }
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
        }
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        Request.prototype.getRequestBody = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            return (/** @type {?} */ (this));
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
    if (false) {
        /** @type {?} */
        Request.prototype.Email;
        /** @type {?} */
        Request.prototype.Roles;
        /** @type {?} */
        Request.prototype.Groups;
    }
    var Response = /** @class */ (function () {
        function Response(initValue) {
            var _this = this;
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
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
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configurationService.config$.subscribe((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return (_this.config = config); }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.store.dispatch(new GetProfile());
        }), 999);
    }
    /**
     * @return {?}
     */
    UserService.prototype.getAccountInfo = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.endpoints.profileInformation != ""; })), take(1), combineLatest(this.store.select(getUser)), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), config = _b[0], user = _b[1];
            return user != undefined;
        })), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = __read(_a, 2), config = _b[0], user = _b[1];
            return _this.http
                .get(stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                user: user || {}
            }))
                .let(config.responseToUserInfo)
                .pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                /** @type {?} */
                var _user = Object.assign({}, response);
                if (_user.Role) {
                    _user.Roles = [_user.Role];
                }
                return _user;
            })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return of(false); })));
        })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return new EditProfile_ApiModel.Response(response).extractData(); })));
    };
    // TODO: remove
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    UserService.prototype.getInfo = 
    // TODO: remove
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(filter((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user && user.Roles != undefined; })), take(1), map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user.Roles.indexOf(role) > -1; })));
    };
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(UserConfigurationService)); }, token: UserService, providedIn: "root" });
    return UserService;
}());
if (false) {
    /** @type {?} */
    UserService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    EditProfile.prototype.type;
    /** @type {?} */
    EditProfile.prototype.payload;
}
var EditProfileStart = /** @class */ (function () {
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
if (false) {
    /** @type {?} */
    EditProfileStart.prototype.type;
    /** @type {?} */
    EditProfileStart.prototype.payload;
}
var EditProfileSucceed = /** @class */ (function () {
    function EditProfileSucceed(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
    return EditProfileSucceed;
}());
if (false) {
    /** @type {?} */
    EditProfileSucceed.prototype.type;
    /** @type {?} */
    EditProfileSucceed.prototype.payload;
}
var EditProfileFailed = /** @class */ (function () {
    function EditProfileFailed() {
        this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
    }
    return EditProfileFailed;
}());
if (false) {
    /** @type {?} */
    EditProfileFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditProfileEffects = /** @class */ (function () {
    function EditProfileEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new EditProfileStart(data); })));
        this.RequestEditProfileLink$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.service.editProfile(data); })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return new EditProfileSucceed(res); })), catchError((/**
         * @return {?}
         */
        function () { return of(new EditProfileFailed()); })));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.pipe(ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED), map((/**
         * @return {?}
         */
        function () {
            _this.router.navigate(["/user/profile"]);
            return new GetProfile();
        })));
    }
    EditProfileEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    EditProfileEffects.prototype.EditProfileRequest$;
    /** @type {?} */
    EditProfileEffects.prototype.RequestEditProfileLink$;
    /** @type {?} */
    EditProfileEffects.prototype.goToView$;
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    EditProfileEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileViewEffects = /** @class */ (function () {
    function ProfileViewEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new GetProfileStart(); })));
        this.getProfile$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.userService
                .getAccountInfo()
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return new GetProfileSucceed(res); })), catchError((/**
             * @return {?}
             */
            function () { return of(new GetProfileFailed()); })));
        })));
        this.refreshUserInfo$ = this.actions$.pipe(ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return new RefreshUserInfoAction(data); })));
    }
    ProfileViewEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    ProfileViewEffects.prototype.ProfileRequest$;
    /** @type {?} */
    ProfileViewEffects.prototype.getProfile$;
    /** @type {?} */
    ProfileViewEffects.prototype.refreshUserInfo$;
    /**
     * @type {?}
     * @private
     */
    ProfileViewEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProfileViewEffects.prototype.userService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        // @Effect()
        // updateProfileInformation$ = this.actions$.pipe(
        // ofType(SignInActionTypes.SIGNIN_SUCCEED),
        // 	map(action => action.payload),
        // 	map(user => {
        // 		return new GetProfileSucceed(user);
        // 	})
        // );
        this.getAccountInfo$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), map((/**
         * @return {?}
         */
        function () {
            return new GetProfile();
        })));
        this.signout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), map((/**
         * @return {?}
         */
        function () { return new RefreshUserInfoAction((/** @type {?} */ ({}))); })));
    }
    UserEffects.decorators = [
        { type: Injectable }
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
if (false) {
    /** @type {?} */
    UserEffects.prototype.getAccountInfo$;
    /** @type {?} */
    UserEffects.prototype.signout$;
    /**
     * @type {?}
     * @private
     */
    UserEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    UserEffects.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var GetResetPasswordLink = /** @class */ (function () {
    function GetResetPasswordLink(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
    }
    return GetResetPasswordLink;
}());
if (false) {
    /** @type {?} */
    GetResetPasswordLink.prototype.type;
    /** @type {?} */
    GetResetPasswordLink.prototype.payload;
}
var ResetPasswordLinkRequestStart = /** @class */ (function () {
    function ResetPasswordLinkRequestStart(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
    }
    return ResetPasswordLinkRequestStart;
}());
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.type;
    /** @type {?} */
    ResetPasswordLinkRequestStart.prototype.payload;
}
var ResetPasswordLinkRequestSucceed = /** @class */ (function () {
    function ResetPasswordLinkRequestSucceed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
    }
    return ResetPasswordLinkRequestSucceed;
}());
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestSucceed.prototype.type;
}
var ResetPasswordLinkRequestFailed = /** @class */ (function () {
    function ResetPasswordLinkRequestFailed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
    }
    return ResetPasswordLinkRequestFailed;
}());
if (false) {
    /** @type {?} */
    ResetPasswordLinkRequestFailed.prototype.type;
}
var DisableGetLink = /** @class */ (function () {
    function DisableGetLink() {
        this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
    }
    return DisableGetLink;
}());
if (false) {
    /** @type {?} */
    DisableGetLink.prototype.type;
}
var EnableGetLink = /** @class */ (function () {
    function EnableGetLink() {
        this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
    }
    return EnableGetLink;
}());
if (false) {
    /** @type {?} */
    EnableGetLink.prototype.type;
}
var MaximumTryHappend = /** @class */ (function () {
    function MaximumTryHappend() {
        this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
    }
    return MaximumTryHappend;
}());
if (false) {
    /** @type {?} */
    MaximumTryHappend.prototype.type;
}
var PasswordChangedSucceed = /** @class */ (function () {
    function PasswordChangedSucceed() {
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return PasswordChangedSucceed;
}());
if (false) {
    /** @type {?} */
    PasswordChangedSucceed.prototype.type;
}
var PasswordChangedFailed = /** @class */ (function () {
    function PasswordChangedFailed(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return PasswordChangedFailed;
}());
if (false) {
    /** @type {?} */
    PasswordChangedFailed.prototype.type;
    /** @type {?} */
    PasswordChangedFailed.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$1() { }
if (false) {
    /** @type {?} */
    State$1.prototype.numberOfRequested;
    /** @type {?} */
    State$1.prototype.lastRequestedTime;
    /** @type {?} */
    State$1.prototype.disable;
}
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
var getNumberOfRequeseted = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.numberOfRequested; });
/** @type {?} */
var getStatus = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.disable; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    ChangePassword.prototype.type;
    /** @type {?} */
    ChangePassword.prototype.payload;
}
var ChangePasswordStart = /** @class */ (function () {
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
if (false) {
    /** @type {?} */
    ChangePasswordStart.prototype.type;
    /** @type {?} */
    ChangePasswordStart.prototype.payload;
}
var ChangePasswordSucceed = /** @class */ (function () {
    function ChangePasswordSucceed(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return ChangePasswordSucceed;
}());
if (false) {
    /** @type {?} */
    ChangePasswordSucceed.prototype.type;
    /** @type {?} */
    ChangePasswordSucceed.prototype.payload;
}
var ChangePasswordFailed = /** @class */ (function () {
    function ChangePasswordFailed() {
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return ChangePasswordFailed;
}());
if (false) {
    /** @type {?} */
    ChangePasswordFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$2() { }
if (false) {
    /** @type {?} */
    State$2.prototype.status;
}
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
/** @type {?} */
var getStatus$1 = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$3() { }
if (false) {
    /** @type {?} */
    State$3.prototype.status;
}
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
/** @type {?} */
var getStatus$2 = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    Search.prototype.type;
    /** @type {?} */
    Search.prototype.payload;
}
var SearchStartAction = /** @class */ (function () {
    function SearchStartAction(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
    return SearchStartAction;
}());
if (false) {
    /** @type {?} */
    SearchStartAction.prototype.type;
    /** @type {?} */
    SearchStartAction.prototype.payload;
}
var SearchSucceed = /** @class */ (function () {
    function SearchSucceed(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
    return SearchSucceed;
}());
if (false) {
    /** @type {?} */
    SearchSucceed.prototype.type;
    /** @type {?} */
    SearchSucceed.prototype.payload;
}
var SearchFailed = /** @class */ (function () {
    function SearchFailed() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
    return SearchFailed;
}());
if (false) {
    /** @type {?} */
    SearchFailed.prototype.type;
}
var ClearSearchedUser = /** @class */ (function () {
    function ClearSearchedUser() {
        this.type = SearchActionTypes.CLEAR_SEARCHED_USER;
    }
    return ClearSearchedUser;
}());
if (false) {
    /** @type {?} */
    ClearSearchedUser.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$4() { }
if (false) {
    /** @type {?} */
    State$4.prototype.status;
    /** @type {?} */
    State$4.prototype.data;
}
var ɵ0$2 = ({});
/** @type {?} */
var initialState$4 = {
    status: "pristine",
    data: (/** @type {?} */ (ɵ0$2))
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
var getStatus$3 = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.status; });
/** @type {?} */
var getAccountInfo$1 = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.data; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function UserState() { }
if (false) {
    /** @type {?} */
    UserState.prototype.user;
    /** @type {?} */
    UserState.prototype.resetPasswordRequest;
    /** @type {?} */
    UserState.prototype.searchView;
    /** @type {?} */
    UserState.prototype.changePassword;
    /** @type {?} */
    UserState.prototype.editProfile;
}
/** @type {?} */
var UserReducers = {
    user: userReducer,
    resetPasswordRequest: reducer,
    changePassword: reducer$1,
    searchView: reducer$3,
    editProfile: reducer$2
};
/**
 * @record
 */
function AppState() { }
if (false) {
    /** @type {?} */
    AppState.prototype.user;
}
//#region selectors
/** @type {?} */
var selectFeatureState = createFeatureSelector("user");
var ɵ0$3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.user.loaded; };
/** @type {?} */
var getUserInforamtionStatus = createSelector(selectFeatureState, (ɵ0$3));
var ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.user.loaded; };
/** @type {?} */
var isSignedIn = createSelector(selectFeatureState, (ɵ1$1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.resetPasswordRequest; };
/** @type {?} */
var selectResetPasswordRequestState = createSelector(selectFeatureState, (ɵ2));
/** @type {?} */
var getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
/** @type {?} */
var getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
//#region user
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.user; };
/** @type {?} */
var selectUserInformaionState = createSelector(selectFeatureState, (ɵ3));
/** @type {?} */
var getAccountInfo$2 = createSelector(selectUserInformaionState, getAccountInfo);
//#endregion
//#region search
var ɵ4 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.searchView; };
/** @type {?} */
var selectSearchState = createSelector(selectFeatureState, (ɵ4));
/** @type {?} */
var getSearchStatus = createSelector(selectSearchState, getStatus$3);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.userStatus$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); }));
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
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\r\n        </div>\r\n        <div fxFlex=\"nogrow\">\r\n          <!-- {{(user | async).Email}} -->\r\n        </div>\r\n      </div>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\r\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\r\n        <div fxFlex='15px'></div>\r\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\r\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return SearchComponent;
}());
if (false) {
    /** @type {?} */
    SearchComponent.prototype.user;
    /** @type {?} */
    SearchComponent.prototype.userStatus$;
    /** @type {?} */
    SearchComponent.prototype.formGroup;
    /** @type {?} */
    SearchComponent.prototype.userDataLoaded$;
    /** @type {?} */
    SearchComponent.prototype.userNotFound$;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div fxFlex=\"450px\">\r\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-form-field fxFlexFill>\r\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\r\n        </mat-form-field>\r\n        <mat-form-field fxFlexFill>\r\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n      <mat-card-actions fxLayoutAlign=\"center center\">\r\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\r\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return []; };
    ChangePasswordComponent.propDecorators = {
        formGroup: [{ type: Input }],
        submited: [{ type: Output }]
    };
    return ChangePasswordComponent;
}());
if (false) {
    /** @type {?} */
    ChangePasswordComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordComponent.prototype.submited;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div fxFlex=\"450px\">\r\n\r\n  \r\n  <ngs-form-view #form [id]=\"formId\" [card]=\"true\" (accept)=\"editProfile(form.formGroup)\" (cancel)=\"goback()\" ></ngs-form-view>\r\n  <!-- <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" routerLink=\"..\" mat-button color=\"primary\">\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form> -->\r\n</div>"
                }] }
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
if (false) {
    /** @type {?} */
    ProfileEditComponent.prototype.submited;
    /** @type {?} */
    ProfileEditComponent.prototype.userInfo;
    /** @type {?} */
    ProfileEditComponent.prototype.formId;
    /** @type {?} */
    ProfileEditComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditComponent.prototype.groups;
    /**
     * @type {?}
     * @private
     */
    ProfileEditComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.dashboardLinks; })));
        this.links = [
            {
                title: "مشاهده حساب کاربری",
                route: "/user/panel/profile",
                // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                icon: "person"
            }
            // ,
            // {
            // 	route: "/user/panel/password/change",
            // 	title: "تغییر کلمه عبور",
            // 	// description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
            // 	icon: "security"
            // }
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n      <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                    <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                      <mat-icon>person</mat-icon>\r\n                      <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</span>\r\n                    </mat-card-title>\r\n                 \r\n                  </mat-card-header>\r\n          <div fxLayout='row' fxLayoutWrap id=\"con\">\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\r\n        <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\r\n            <h3 class='title'>{{link.title}}</h3>\r\n            <div class='description'>{{link.description}}</div>\r\n        </div>\r\n    </button>\r\n</div>\r\n</mat-card>\r\n</div>\r\n</div>",
                    styles: ["#con [fxflex]{margin-right:25px}:host{width:100%}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                }] }
    ];
    /** @nocollapse */
    DashboardLinksComponent.ctorParameters = function () { return [
        { type: UserConfigurationService },
        { type: Store }
    ]; };
    return DashboardLinksComponent;
}());
if (false) {
    /** @type {?} */
    DashboardLinksComponent.prototype.links;
    /** @type {?} */
    DashboardLinksComponent.prototype.links$;
    /**
     * @type {?}
     * @private
     */
    DashboardLinksComponent.prototype.userConfigurationService;
    /**
     * @type {?}
     * @private
     */
    DashboardLinksComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100).pipe(map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i + 1; })), takeWhile((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i * 100 <= 3000; })), map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return 3000 - i * 100; })));
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
        this.numberOfRequested.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data > 2) {
                _this.maximumResendingHappend$.next(true);
            }
        }));
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
            var message = this.maximumResendingHappend$.getValue()
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
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\r\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\r\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\r\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\r\n      </mat-radio-group>\r\n      <mat-form-field fxFlexFill>\r\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\r\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\r\n        <span *ngIf='!(canRequestPin | async)'>\r\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\r\n        </span>\r\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\r\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\r\n        </div>\r\n        <div *ngIf='(maximumResendingHappend$ | async)'>\r\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\r\n        </div>-->\r\n      </button>\r\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n",
                    styles: [""]
                }] }
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
if (false) {
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.submitted;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.formGroup;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.numberOfRequested;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.canRequestPin;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.timer$;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.maximumResendingHappend$;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.snackBar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeatureContainerComponent = /** @class */ (function () {
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            /** @type {?} */
            var model = new ProfileViewModel.Request((/** @type {?} */ ({ Email: params.Email })));
            _this.store.dispatch(new Search(model));
        }));
    }
    FeatureContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<router-outlet></router-outlet>"
                }] }
    ];
    /** @nocollapse */
    FeatureContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return FeatureContainerComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    FeatureContainerComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    FeatureContainerComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChangePasswordModel;
(function (ChangePasswordModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            var _this = this;
            if (initValue === void 0) { initValue = (/** @type {?} */ ({})); }
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (_this[key] = initValue[key]); }));
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
    if (false) {
        /** @type {?} */
        Request.prototype.Username;
        /** @type {?} */
        Request.prototype.Password;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    ChangePasswordModel.Response = Response;
})(ChangePasswordModel || (ChangePasswordModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.store.select(getAccountInfo$2).subscribe((/**
         * @param {?} userInfo
         * @return {?}
         */
        function (userInfo) {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        }));
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
                }] }
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return ChangePasswordContainerComponent;
}());
if (false) {
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.formGroup;
    /** @type {?} */
    ChangePasswordContainerComponent.prototype.ChangePasswordModel;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordContainerComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordContainerComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ProfileEditContainerComponent = /** @class */ (function () {
    function ProfileEditContainerComponent(store, configService) {
        this.store = store;
        this.configService = configService;
        this.userInforamation$ = this.store.select(getAccountInfo$2);
        this.roles$ = this.store
            .select(getAppConfig)
            .pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config != undefined; })), map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.Config.Roles; })));
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
                }] }
    ];
    /** @nocollapse */
    ProfileEditContainerComponent.ctorParameters = function () { return [
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    return ProfileEditContainerComponent;
}());
if (false) {
    /** @type {?} */
    ProfileEditContainerComponent.prototype.userInforamation$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.groups;
    /** @type {?} */
    ProfileEditContainerComponent.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    ProfileEditContainerComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ProfileEditContainerComponent.prototype.configService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\r\n<div fxLayoutAlign=\"center\">\r\n    <router-outlet></router-outlet>\r\n</div>",
                    styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                }] }
    ];
    /** @nocollapse */
    DashboardContainerComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return DashboardContainerComponent;
}());
if (false) {
    /** @type {?} */
    DashboardContainerComponent.prototype.user$;
    /**
     * @type {?}
     * @private
     */
    DashboardContainerComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            Object.keys(information).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) { return _this.info.push([k, information[k]]); }));
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
                    template: "<div fxFlex=\"450px\">\r\n  <router-outlet name=\"ngs-user-profile-view\"></router-outlet>\r\n  <router-outlet></router-outlet>\r\n  <!-- <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content *ngIf='dataStatus$ | async'>\r\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\r\n            <p fxFlex='40'>{{item[0]}}</p>\r\n            <p fxFlex='60'>{{item[1]}}</p>\r\n        </div>\r\n     \r\n    </mat-card-content>\r\n\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n    </mat-card-actions>\r\n  </mat-card> -->\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(information | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>roles</p>\r\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\r\n      </div> -->\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\r\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\r\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{sex$ | async}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\r\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\r\n      </div> -->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        information: [{ type: Input }],
        dataStatus$: [{ type: Input }]
    };
    return ProfileComponent;
}());
if (false) {
    /** @type {?} */
    ProfileComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileComponent.prototype.info;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }] }
    ];
    /** @nocollapse */
    ProfileContainerComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ProfileContainerComponent;
}());
if (false) {
    /** @type {?} */
    ProfileContainerComponent.prototype.data$;
    /** @type {?} */
    ProfileContainerComponent.prototype.dataStatus$;
    /**
     * @type {?}
     * @private
     */
    ProfileContainerComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    return NgsUserModule;
}());
var RootNgsUserModule = /** @class */ (function () {
    function RootNgsUserModule() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.user = "8.0.10";
    }
    RootNgsUserModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsUserModule,
                        StoreModule.forFeature("user", UserReducers),
                        EffectsModule.forFeature([
                            // ResetPasswordRequestEffects,
                            EditProfileEffects,
                            // ChangePasswordEffects,
                            ProfileViewEffects,
                            // SearchEffects,
                            UserEffects
                        ])
                    ]
                },] }
    ];
    /** @nocollapse */
    RootNgsUserModule.ctorParameters = function () { return []; };
    return RootNgsUserModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            }
            // {
            // 	path: "password/change",
            // 	component: ChangePasswordContainerComponent
            // }
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
                    // {
                    // 	path: "change-password",
                    // 	component: ChangePasswordContainerComponent
                    // }
                ]
            }
        ]
    }
];
/** @type {?} */
var NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var NgsUserModuleOutlets = {
    ngs_user_profile_view: "ngs-user-profile-view",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                },] }
    ];
    /** @nocollapse */
    UserFacadeService.ctorParameters = function () { return [
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ UserFacadeService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(ɵɵinject(Store), ɵɵinject(UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
    return UserFacadeService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserFacadeService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UserFacadeService.prototype.configService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgsUserModule, NgsUserModuleOutlets, NgsUserRoutingModule, UserActionTypes, UserFacadeService, UserModel, UserService, getAccountInfo$2 as getAccountInfo, MODULE_CONFIG_TOKEN as ɵa, RootNgsUserModule as ɵb, ProfileViewEffects as ɵba, UserEffects as ɵbb, routes as ɵc, UserReducers as ɵd, selectFeatureState as ɵf, selectUserInformaionState as ɵg, SearchComponent as ɵh, ProfileComponent as ɵi, ChangePasswordComponent as ɵj, ProfileEditComponent as ɵk, ProfileContainerComponent as ɵl, DashboardLinksComponent as ɵm, UserConfigurationService as ɵn, ResetPasswordRequestComponent as ɵo, FeatureContainerComponent as ɵp, DashboardContainerComponent as ɵq, ChangePasswordContainerComponent as ɵr, ProfileEditContainerComponent as ɵs, userReducer as ɵt, getAccountInfo as ɵu, reducer as ɵv, reducer$1 as ɵw, reducer$3 as ɵx, reducer$2 as ɵy, EditProfileEffects as ɵz };
//# sourceMappingURL=soushians-user.js.map

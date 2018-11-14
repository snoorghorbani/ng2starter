(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/forms'), require('@angular/common/http'), require('@soushians/shared'), require('@soushians/authentication'), require('rxjs'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/Observable'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/user', ['exports', '@angular/core', 'rxjs/operators', '@ngrx/store', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/forms', '@angular/common/http', '@soushians/shared', '@soushians/authentication', 'rxjs', '@angular/router', '@ngrx/effects', 'rxjs/Observable', '@angular/material', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.user = {}),global.ng.core,global.rxjs.operators,null,global.rxjs.BehaviorSubject,null,global.ng.forms,global.ng.common.http,null,null,global.rxjs,global.ng.router,null,global.rxjs.Observable,global.ng.material,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,null));
}(this, (function (exports,i0,operators,i2,BehaviorSubject,config,forms,i1,shared,authentication,rxjs,router,effects,Observable,material,common,flexLayout,animations,form) { 'use strict';

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
        mapUserDisplayName: function (user$) { return user$.pipe(operators.map(function (user) { return user.Username; })); }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("UserModuleConfig");

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UserConfigurationService = /** @class */ (function () {
        function UserConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new BehaviorSubject.BehaviorSubject(this._config);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getUserModuleConfig).subscribe(function (userConfig) {
                if (!userConfig)
                    return;
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(UserConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        UserConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        UserConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ UserConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: UserConfigurationService, providedIn: "root" });
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
        if (state === void 0) {
            state = initialState;
        }
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
                 */ function () {
                    return new forms.FormGroup({
                        Username: new forms.FormControl("", [forms.Validators.minLength(8), forms.Validators.required])
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
    var EditProfile_ApiModel;
    (function (EditProfile_ApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
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
                 */ function () {
                    return new forms.FormGroup({
                        Email: new forms.FormControl(null, [forms.Validators.required]),
                        Roles: new forms.FormControl(null, [forms.Validators.required]),
                        Groups: new forms.FormControl(null, [forms.Validators.required])
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
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
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
    var UserService = /** @class */ (function () {
        function UserService(http, store, configurationService) {
            var _this = this;
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
            this.configurationService.config$.subscribe(function (config$$1) { return (_this.config = config$$1); });
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
                return this.configurationService.config$.pipe(operators.filter(function (config$$1) { return config$$1.endpoints.profileInformation != ""; }), operators.take(1), operators.combineLatest(this.store.select(authentication.getUser)), operators.filter(function (_a) {
                    var _b = __read(_a, 2), config$$1 = _b[0], user = _b[1];
                    return user != undefined;
                }), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config$$1 = _b[0], user = _b[1];
                    return _this.http
                        .get(shared.stringTemplate(config$$1.env[config$$1.server] + config$$1.endpoints.profileInformation, {
                        user: user || {}
                    }))
                        .let(config$$1.responseToUserInfo)
                        .pipe(operators.map(function (response) {
                        /** @type {?} */
                        var _user = Object.assign({}, response);
                        if (_user.Role) {
                            _user.Roles = [_user.Role];
                        }
                        return _user;
                    }), operators.catchError(function (err) { return rxjs.of(false); }));
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
                /** @type {?} */
                var model = new EditProfile_ApiModel.Request(data);
                return this.http
                    .put(shared.stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
                    .pipe(operators.map(function (response) { return new EditProfile_ApiModel.Response(response).extractData(); }));
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
                    .get(shared.stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
                    .pipe(operators.map(function (response) { return response; }));
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
                    .pipe(operators.filter(function (user) { return user && user.Roles != undefined; }), operators.take(1), operators.map(function (user) { return user.Roles.indexOf(role) > -1; }));
            };
        UserService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: UserConfigurationService }
            ];
        };
        /** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(UserConfigurationService)); }, token: UserService, providedIn: "root" });
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
        function EditProfileEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.EditProfileRequest$ = this.actions$
                .ofType(EditProfileActionTypes.EDIT_PROFILE)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new EditProfileStart(data); }));
            this.RequestEditProfileLink$ = this.actions$
                .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.editProfile(data); }), operators.map(function (res) { return new EditProfileSucceed(res); }), operators.catchError(function () { return rxjs.of(new EditProfileFailed()); }));
            // .switchMap((data: EditProfile_ApiModel.Request) => {
            // 	return this.service
            // 		.editProfile(data)
            // 		.map((res) => new EditProfileSucceed(res))
            // 		.catch(() => of(new EditProfileFailed()));
            // });
            this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(operators.map(function () {
                _this.router.navigate(["/user/profile"]);
                return new GetProfile();
            }));
        }
        EditProfileEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        EditProfileEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: UserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
        __decorate([
            effects.Effect(),
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
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new GetProfileStart(); }));
            this.getProfile$ = this.actions$
                .ofType(ProfileViewActionTypes.GET_PROFILE_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.userService
                    .getAccountInfo()
                    .pipe(operators.map(function (res) { return new GetProfileSucceed(res); }), operators.catchError(function () { return rxjs.of(new GetProfileFailed()); }));
            }));
            this.refreshUserInfo$ = this.actions$
                .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new RefreshUserInfoAction(data); }));
        }
        ProfileViewEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ProfileViewEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: UserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "getProfile$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
        return ProfileViewEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UserEffects = /** @class */ (function () {
        function UserEffects(actions$, router$$1, service) {
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            // @Effect()
            // updateProfileInformation$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(
            // 	map(action => action.payload),
            // 	map(user => {
            // 		return new GetProfileSucceed(user);
            // 	})
            // );
            this.getAccountInfo$ = this.actions$.ofType(authentication.SignInActionTypes.SIGNIN_SUCCEED).pipe(operators.map(function () {
                return new GetProfile();
            }));
            this.signout$ = this.actions$
                .ofType(authentication.SignInActionTypes.SIGNOUT)
                .pipe(operators.map(function () { return new RefreshUserInfoAction(/** @type {?} */ ({})); }));
        }
        UserEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        UserEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: UserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UserEffects.prototype, "getAccountInfo$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UserEffects.prototype, "signout$", void 0);
        return UserEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        if (state === void 0) {
            state = initialState$1;
        }
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
        if (state === void 0) {
            state = initialState$2;
        }
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
        if (state === void 0) {
            state = initialState$3;
        }
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
        if (state === void 0) {
            state = initialState$4;
        }
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
    var selectFeatureState = i2.createFeatureSelector("user");
    /** @type {?} */
    var getUserInforamtionStatus = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    /** @type {?} */
    var isSignedIn = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    /** @type {?} */
    var selectResetPasswordRequestState = i2.createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
    /** @type {?} */
    var getNumberOfRequeseted$1 = i2.createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
    /** @type {?} */
    var getResetPasswordRequestStatus = i2.createSelector(selectResetPasswordRequestState, getStatus);
    /** @type {?} */
    var selectUserInformaionState = i2.createSelector(selectFeatureState, function (state) { return state.user; });
    /** @type {?} */
    var getAccountInfo$2 = i2.createSelector(selectUserInformaionState, getAccountInfo);
    /** @type {?} */
    var selectSearchState = i2.createSelector(selectFeatureState, function (state) { return state.searchView; });
    /** @type {?} */
    var getSearchStatus = i2.createSelector(selectSearchState, getStatus$3);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SearchComponent = /** @class */ (function () {
        function SearchComponent(store) {
            this.store = store;
            this.formGroup = ProfileViewModel.Request.formGroup;
            this.userDataLoaded$ = new rxjs.BehaviorSubject(false);
            this.userNotFound$ = new rxjs.BehaviorSubject(false);
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
            { type: i0.Component, args: [{
                        selector: "search",
                        template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          <!-- {{(user | async).LastName }}\u060C {{(user | async).FirstName }} -->\n        </div>\n        <div fxFlex=\"nogrow\">\n          <!-- {{(user | async).Email}} -->\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p> -->\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <!-- <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p> -->\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        SearchComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return SearchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ChangePasswordComponent = /** @class */ (function () {
        function ChangePasswordComponent() {
            this.submited = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: "user-change-password",
                        template: "<div fxFlex=\"450px\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\n        </mat-form-field>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ChangePasswordComponent.ctorParameters = function () { return []; };
        ChangePasswordComponent.propDecorators = {
            formGroup: [{ type: i0.Input }],
            submited: [{ type: i0.Output }]
        };
        return ChangePasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ProfileEditComponent = /** @class */ (function () {
        function ProfileEditComponent(router$$1) {
            this.router = router$$1;
            this.submited = new i0.EventEmitter();
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
            function (form$$1) {
                if (!form$$1.valid)
                    return;
                this.submited.emit(form$$1.value);
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
            { type: i0.Component, args: [{
                        selector: "profile-edit",
                        template: "<div fxFlex=\"450px\">\n\n  \n  <ngs-form-view #form [id]=\"formId\" [card]=\"true\" (accept)=\"editProfile(form.formGroup)\" (cancel)=\"goback()\" ></ngs-form-view>\n  <!-- <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button type=\"button\" routerLink=\"..\" mat-button color=\"primary\">\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n        <button type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n      </mat-card-actions>\n    </mat-card>\n  </form> -->\n</div>"
                    },] },
        ];
        /** @nocollapse */
        ProfileEditComponent.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        ProfileEditComponent.propDecorators = {
            submited: [{ type: i0.Output }],
            userInfo: [{ type: i0.Input }],
            formId: [{ type: i0.Input }],
            roles$: [{ type: i0.Input, args: ["roles",] }],
            groups: [{ type: i0.Input }]
        };
        return ProfileEditComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DashboardLinksComponent = /** @class */ (function () {
        function DashboardLinksComponent(userConfigurationService, store) {
            this.userConfigurationService = userConfigurationService;
            this.store = store;
            this.links$ = this.userConfigurationService.config$.pipe(operators.map(function (data) { return data.dashboardLinks; }));
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
            { type: i0.Component, args: [{
                        selector: "user-dashboard-links",
                        template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n</div>",
                        styles: ["#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                    },] },
        ];
        /** @nocollapse */
        DashboardLinksComponent.ctorParameters = function () {
            return [
                { type: UserConfigurationService },
                { type: i2.Store }
            ];
        };
        return DashboardLinksComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ResetPasswordRequestComponent = /** @class */ (function () {
        function ResetPasswordRequestComponent(snackBar) {
            this.snackBar = snackBar;
            this.submitted = new i0.EventEmitter();
            this.maximumResendingHappend$ = new BehaviorSubject.BehaviorSubject(false);
            this.timer$ = Observable.Observable.timer(0, 100).pipe(operators.map(function (i) { return i + 1; }), operators.takeWhile(function (i) { return i * 100 <= 3000; }), operators.map(function (i) { return 3000 - i * 100; }));
        }
        Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
            set: /**
             * @param {?} isPending
             * @return {?}
             */ function (isPending) {
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
                    var message = this.maximumResendingHappend$.getValue()
                        ? "عدم امکان ..."
                        : "پیامک جدید برای شما ارسال گردید.";
                    this.snackBar.open(message, "", {
                        duration: 3000
                    });
                }
            };
        ResetPasswordRequestComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "user-reset-password-request",
                        template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\n      </mat-radio-group>\n      <mat-form-field fxFlexFill>\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\n        <span *ngIf='!(canRequestPin | async)'>\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\n        </span>\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\n        </div>\n        <div *ngIf='(maximumResendingHappend$ | async)'>\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\n        </div>-->\n      </button>\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\n    </mat-card-actions>\n  </mat-card>\n</form>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ResetPasswordRequestComponent.ctorParameters = function () {
            return [
                { type: material.MatSnackBar }
            ];
        };
        ResetPasswordRequestComponent.propDecorators = {
            submitted: [{ type: i0.Output }],
            formGroup: [{ type: i0.Input }],
            numberOfRequested: [{ type: i0.Input }],
            canRequestPin: [{ type: i0.Input }],
            pending: [{ type: i0.Input }]
        };
        return ResetPasswordRequestComponent;
    }());

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
            { type: i0.Component, args: [{
                        template: "<router-outlet></router-outlet>"
                    },] },
        ];
        /** @nocollapse */
        FeatureContainerComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return FeatureContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ChangePasswordModel;
    (function (ChangePasswordModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
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
                 */ function () {
                    return new forms.FormGroup({
                        Password: new forms.FormControl(null, [forms.Validators.required, forms.Validators.minLength(7)]),
                        Confirm: new forms.FormControl(null, [forms.Validators.required, shared.MatchValidator("Password")])
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
            { type: i0.Component, args: [{
                        template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                    },] },
        ];
        /** @nocollapse */
        ChangePasswordContainerComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
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
                .select(config.getAppConfig)
                .pipe(operators.filter(function (config$$1) { return config$$1 != undefined; }), operators.map(function (config$$1) { return config$$1.Config.Roles; }));
            // TODO:
            // this.groups = this.diagramService.getGroups();
            this.groups = rxjs.of(["test1", "test2"]);
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
            { type: i0.Component, args: [{
                        selector: "profile-edit-contianer",
                        template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [userInfo]=\"userInforamation$ | async\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
                    },] },
        ];
        /** @nocollapse */
        ProfileEditContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: UserConfigurationService }
            ];
        };
        return ProfileEditContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            { type: i0.Component, args: [{
                        selector: "user-dashboard-container",
                        template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\n<div fxLayoutAlign=\"center\">\n    <router-outlet></router-outlet>\n</div>",
                        styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                    },] },
        ];
        /** @nocollapse */
        DashboardContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return DashboardContainerComponent;
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
             */ function (information) {
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
            { type: i0.Component, args: [{
                        selector: "user-profile",
                        template: "<div fxFlex=\"450px\">\n  <router-outlet name=\"ngs-user-profile-view\"></router-outlet>\n  <router-outlet></router-outlet>\n  <!-- <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\n            <p fxFlex='40'>{{item[0]}}</p>\n            <p fxFlex='60'>{{item[1]}}</p>\n        </div>\n     \n    </mat-card-content>\n\n    <mat-card-actions align=\"end\">\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card> -->\n</div>\n\n\n\n<!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div> -->\n<!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        ProfileComponent.ctorParameters = function () { return []; };
        ProfileComponent.propDecorators = {
            information: [{ type: i0.Input }],
            dataStatus$: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
                        template: "<user-profile\n                [information]=\"data$ | async\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
                    },] },
        ];
        /** @nocollapse */
        ProfileContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
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
            function (config$$1) {
                return {
                    ngModule: RootNgsUserModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
                };
            };
        NgsUserModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule,
                            form.NgsFormModule
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
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsUserModule,
                            i2.StoreModule.forFeature("user", UserReducers),
                            effects.EffectsModule.forFeature([
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
    /** @type {?} */
    var NgsUserRoutingModule = router.RouterModule.forChild(routes);

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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        UserFacadeService.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: UserConfigurationService }
            ];
        };
        /** @nocollapse */ UserFacadeService.ngInjectableDef = i0.defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(i0.inject(i2.Store), i0.inject(UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });
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

    exports.UserModel = UserModel;
    exports.NgsUserModule = NgsUserModule;
    exports.NgsUserRoutingModule = NgsUserRoutingModule;
    exports.NgsUserModuleOutlets = NgsUserModuleOutlets;
    exports.UserService = UserService;
    exports.UserFacadeService = UserFacadeService;
    exports.getAccountInfo = getAccountInfo$2;
    exports.UserActionTypes = UserActionTypes;
    exports.ɵr = ChangePasswordContainerComponent;
    exports.ɵw = reducer$1;
    exports.ɵj = ChangePasswordComponent;
    exports.ɵu = getAccountInfo;
    exports.ɵt = userReducer;
    exports.ɵq = DashboardContainerComponent;
    exports.ɵm = DashboardLinksComponent;
    exports.ɵp = FeatureContainerComponent;
    exports.ɵbb = UserEffects;
    exports.ɵz = EditProfileEffects;
    exports.ɵy = reducer$2;
    exports.ɵs = ProfileEditContainerComponent;
    exports.ɵk = ProfileEditComponent;
    exports.ɵl = ProfileContainerComponent;
    exports.ɵba = ProfileViewEffects;
    exports.ɵi = ProfileComponent;
    exports.ɵv = reducer;
    exports.ɵo = ResetPasswordRequestComponent;
    exports.ɵx = reducer$3;
    exports.ɵh = SearchComponent;
    exports.ɵn = UserConfigurationService;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵb = RootNgsUserModule;
    exports.ɵd = UserReducers;
    exports.ɵf = selectFeatureState;
    exports.ɵg = selectUserInformaionState;
    exports.ɵc = routes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy91c2VyLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIuY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXItb3V0bGV0cy5lbnVtLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlcnZpY2VzL3VzZXIuZmFjYWRlLXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Ly8gRmlyc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gTGFzdE5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0Ly8gVXNlcm5hbWU6IHN0cmluZztcclxuXHQvLyBNb2JpbGVOdW1iZXI6IHN0cmluZztcclxuXHQvLyBTZXg6IHN0cmluZztcclxuXHQvLyBCaXJ0aGRhdGU6IHN0cmluZztcclxuXHRFbWFpbDogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpY2F0aW9uTm86IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWVyVHlwZTogc3RyaW5nO1xyXG5cdC8vIFJlZ2lzdGVyRGF0ZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJUeXBlOiBzdHJpbmc7XHJcblx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdEdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLlJvbGVzID0gW107XHJcblx0XHR0aGlzLkdyb3VwcyA9IFtdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRzZXJ2ZXI/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdFx0c2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0XHRlZGl0UHJvZmlsZT86IHN0cmluZztcclxuXHRcdGdldEFjY291bnRJbmZvPzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uPzogc3RyaW5nO1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGRhc2hib2FyZExpbmtzPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbz86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0c2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwidXNlci9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwidXNlci9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6ICcnLFxyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRlZGl0UHJvZmlsZTogXCJcIixcclxuXHRcdGdldEFjY291bnRJbmZvOiBcIlwiLFxyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBcIlwiXHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiAnJyxcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IFwiXCJcclxuXHR9LFxyXG5cdGRhc2hib2FyZExpbmtzOiBbXSxcclxuXHRyZXNwb25zZVRvVXNlckluZm86IHVzZXIkID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogdXNlciQgPT4gdXNlciQucGlwZShtYXAodXNlciA9PiB1c2VyLlVzZXJuYW1lKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFVzZXJNb2R1bGVDb25maWc+KFwiVXNlck1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXJNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlVmlld0FjdGlvblR5cGVzIHtcclxuXHRHRVRfUFJPRklMRSA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFXCIsXHJcblx0R0VUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEdFVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0R0VUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBQcm9maWxlVmlld0FjdGlvbiA9IEdldFByb2ZpbGUgfCBHZXRQcm9maWxlU3RhcnQgfCBHZXRQcm9maWxlU3VjY2VlZCB8IEdldFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdFVTRVJfU0VMRUNURUQgPSBcIltVU0VSXSBVU0VSX1NFTEVDVEVEXCIsXHJcblx0UkVGUkVTSF9VU0VSX0lORk8gPSBcIltVU0VSXSBSRUZSRVNIX1VTRVJfSU5GT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VsZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBVc2VyU2VsZWN0ZWRBY3Rpb24gfCBSZWZyZXNoVXNlckluZm9BY3Rpb247XHJcbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkYXRhOiBVc2VyTW9kZWw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkYXRhOiBuZXcgVXNlck1vZGVsKClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFByb2ZpbGVWaWV3TW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgVXNlck1vZGVsIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0UHJvZmlsZV9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRFbWFpbDogc3RyaW5nO1xyXG5cdFx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8UmVxdWVzdD4gPSB7fSBhcyBSZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0RW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um9sZXM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPiB7XHJcblx0XHRSZXN1bHQ6IHsgVXNlcjogVXNlck1vZGVsIH07XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlc3BvbnNlID0ge30gYXMgUmVzcG9uc2UpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGV4dHJhY3REYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5SZXN1bHQuVXNlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuc3Vic2NyaWJlKGNvbmZpZyA9PiAodGhpcy5jb25maWcgPSBjb25maWcpKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXIpKSxcclxuXHRcdFx0ZmlsdGVyKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHVzZXIgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbY29uZmlnLCB1c2VyXTogW1VzZXJNb2R1bGVDb25maWcsIGFueV0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0PGFueT4oXHJcblx0XHRcdFx0XHRcdHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiwge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXI6IHVzZXIgfHwge31cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5sZXQoY29uZmlnLnJlc3BvbnNlVG9Vc2VySW5mbylcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBfdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChfdXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfdXNlci5Sb2xlcyA9IFtfdXNlci5Sb2xlXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF91c2VyO1xyXG5cdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gb2YoZmFsc2UpKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dDxFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52W3RoaXMuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZWRpdFByb2ZpbGUsIG1vZGVsKSxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSkpO1xyXG5cdH1cclxuXHQvLyBUT0RPOiByZW1vdmVcclxuXHRnZXRJbmZvKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudlt0aGlzLmNvbmZpZy5zZXJ2ZXJdICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLmdldEFjY291bnRJbmZvLCBtb2RlbClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKSwgdGFrZSgxKSwgbWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcyB7XHJcblx0RURJVF9QUk9GSUxFID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRVwiLFxyXG5cdEVESVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRFRElUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEVESVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRQcm9maWxlQWN0aW9uID0gRWRpdFByb2ZpbGUgfCBFZGl0UHJvZmlsZVN0YXJ0IHwgRWRpdFByb2ZpbGVTdWNjZWVkIHwgRWRpdFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL3VzZXIvcHJvZmlsZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXRQcm9maWxlU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRQcm9maWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMudXNlclNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRBY2NvdW50SW5mbygpXHJcblx0XHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBHZXRQcm9maWxlU3VjY2VlZChyZXMpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgR2V0UHJvZmlsZUZhaWxlZCgpKSkpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHJlZnJlc2hVc2VySW5mbyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1VDQ0VFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKGRhdGEpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSwgR2V0UHJvZmlsZVN1Y2NlZWQgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmQvdXNlci5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlckVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gdXBkYXRlUHJvZmlsZUluZm9ybWF0aW9uJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdC8vIFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRtYXAodXNlciA9PiB7XHJcblx0Ly8gXHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQodXNlcik7XHJcblx0Ly8gXHR9KVxyXG5cdC8vICk7XHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0QWNjb3VudEluZm8kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHRARWZmZWN0KClcclxuXHRzaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKHt9IGFzIFVzZXJNb2RlbCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVFwiLFxyXG5cdFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEXCIsXHJcblx0RElTQUJMRV9HRVRfTElOSyA9IFwiW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LXCIsXHJcblx0RU5BQkxFX0dFVF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOS1wiLFxyXG5cdE1BWElNVU1fVFJZX0hBUFBFTkQgPSBcIltVU0VSXVtQQVNTV09SRF0gTUFYSU1VTV9UUllfSEFQUEVORFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRURcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpc2FibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmFibGVHZXRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1heGltdW1UcnlIYXBwZW5kIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5NQVhJTVVNX1RSWV9IQVBQRU5EO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG5cdHwgR2V0UmVzZXRQYXNzd29yZExpbmtcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0XHJcblx0fCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWRcclxuXHR8IERpc2FibGVHZXRMaW5rXHJcblx0fCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkXHJcblx0fCBFbmFibGVHZXRMaW5rXHJcblx0fCBNYXhpbXVtVHJ5SGFwcGVuZFxyXG5cdHwgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZFxyXG5cdHwgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiwgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IG51bWJlcjtcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogc3RyaW5nO1xyXG5cdGRpc2FibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IDAsXHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IG51bGwsXHJcblx0ZGlzYWJsZTogZmFsc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRudW1iZXJPZlJlcXVlc3RlZDogc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQgKyAxLFxyXG5cdFx0XHRcdGxhc3RSZXF1ZXN0ZWRUaW1lOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5FTkFCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiBmYWxzZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZDtcclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaXNhYmxlO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2hhbmdlLXBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIHtcclxuXHRDSEFOR0VfUEFTU1dPUkQgPSBcIltVU0VSXVtQQVNTV09SRF0gQ0hBTkdFX1BBU1NXT1JEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NUQVJUXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9IENoYW5nZVBhc3N3b3JkIHwgQ2hhbmdlUGFzc3dvcmRTdGFydCB8IENoYW5nZVBhc3N3b3JkU3VjY2VlZCB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlQWN0aW9uLCBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIH0gZnJvbSBcIi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0UHJvZmlsZUFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBTZWFyY2hBY3Rpb25UeXBlcyB7XHJcblx0U0VBUkNIID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hcIixcclxuXHRTRUFSQ0hfU1RBUlQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVEFSVFwiLFxyXG5cdFNFQVJDSF9TVUNDRUVEID0gXCJbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1VDQ0VFRFwiLFxyXG5cdFNFQVJDSF9GQUlMRUQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9GQUlMRURcIixcclxuXHRDTEVBUl9TRUFSQ0hFRF9VU0VSID0gXCJbVVNFUl1bU0VBUkNIXSBDTEVBUl9TRUFSQ0hFRF9VU0VSXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIENsZWFyU2VhcmNoZWRVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2VhcmNoQWN0aW9uID0gU2VhcmNoIHwgU2VhcmNoU3RhcnRBY3Rpb24gfCBTZWFyY2hTdWNjZWVkIHwgU2VhcmNoRmFpbGVkIHwgQ2xlYXJTZWFyY2hlZFVzZXI7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hBY3Rpb24gfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YToge30gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBTZWFyY2hBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbmV4cG9ydCB2YXIgZ2V0QWNjb3VudEluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gYXMgX2dldEFjY291bnRJbmZvIH0gZnJvbSBcIi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIgZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBlZGl0UHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHNlYXJjaFJlZHVjZXIgZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU3RhdGUge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLlN0YXRlO1xyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuU3RhdGU7XHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5TdGF0ZTtcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQuU3RhdGU7XHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWR1Y2VycyA9IHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci51c2VyUmVkdWNlcixcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIsXHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLnJlZHVjZXIsXHJcblx0c2VhcmNoVmlldzogc2VhcmNoUmVkdWNlci5yZWR1Y2VyLFxyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0XCJ1c2VyXCI6IFVzZXJTdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxVc2VyU3RhdGU+KFwidXNlclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mb3JhbXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RGZWF0dXJlU3RhdGUsXHJcblx0KHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnJlc2V0UGFzc3dvcmRSZXF1ZXN0XHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXROdW1iZXJPZlJlcXVlc2V0ZWQgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWRcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzXHJcbik7XHJcblxyXG4vLyNyZWdpb24gdXNlclxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudEluZm8gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlLCBfZ2V0QWNjb3VudEluZm8pO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBzZWFyY2hcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlYXJjaFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoVmlldyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTZWFyY2hTdGF0ZSwgc2VhcmNoUmVkdWNlci5nZXRTdGF0dXMpO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PVwiNDUwcHhcIiAqbmdJZj1cIih1c2VyU3RhdHVzJCB8IGFzeW5jKSA9PSAnc3VjY2VlZCdcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkxhc3ROYW1lIH19w5jCjCB7eyh1c2VyIHwgYXN5bmMpLkZpcnN0TmFtZSB9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkVtYWlsfX0gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+bG9jYWxfZ3JvY2VyeV9zdG9yZTwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwrTDmcKGw5jCp8OYwrPDmcKHPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuX2lkIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+ZW1haWw8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvcD5cclxuICAgICAgICA8IS0tIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLkVtYWlsIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXI6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT47XHJcblx0dXNlclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0Zm9ybUdyb3VwID0gUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHR1c2VyRGF0YUxvYWRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdHVzZXJOb3RGb3VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMudXNlckRhdGFMb2FkZWQkLm5leHQoIVwicHJpc3RpbmV8ZGlydHl8cGVuZGluZ1wiLmluY2x1ZGVzKHZhbHVlKSkpO1xyXG5cdH1cclxuXHRzZWFyY2goKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2godGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItY2hhbmdlLXBhc3N3b3JkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOawqnDmMKxw5jCp8OYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiQ29uZmlybVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKqw5jCusObwozDm8KMw5jCsSDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvdXNlci9wYW5lbFwiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0c3VibWl0KCkge31cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VQYXNzd29yZCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuXHJcbiAgXHJcbiAgPG5ncy1mb3JtLXZpZXcgI2Zvcm0gW2lkXT1cImZvcm1JZFwiIFtjYXJkXT1cInRydWVcIiAoYWNjZXB0KT1cImVkaXRQcm9maWxlKGZvcm0uZm9ybUdyb3VwKVwiIChjYW5jZWwpPVwiZ29iYWNrKClcIiA+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwhLS0gPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiZWRpdFByb2ZpbGUoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi4uXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+IC0tPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIHVzZXJJbmZvOiBhbnk7XHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblx0QElucHV0KFwicm9sZXNcIikgcm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRASW5wdXQoKSBncm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRlZGl0UHJvZmlsZShmb3JtOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KGZvcm0udmFsdWUpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiLi5cIiBdKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWxpbmtzXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0V3JhcCBpZD1cImNvblwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjb24gW2Z4ZmxleF17bWFyZ2luLXJpZ2h0OjI1cHh9Omhvc3R7d2lkdGg6MTAwJTtwYWRkaW5nOjI1cHggMjVweCAwfWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6NDhweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fWJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbi1ib3R0b206MjVweH0udGl0bGV7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5kZXNjcmlwdGlvbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6OTAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdGxpbmtzOiBhbnlbXTtcclxuXHRsaW5rcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMubGlua3MkID0gdGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChkYXRhID0+IGRhdGEuZGFzaGJvYXJkTGlua3MpKTtcclxuXHRcdHRoaXMubGlua3MgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCLDmcKFw5jCtMOYwqfDmcKHw5jCr8OZwocgw5jCrcOYwrPDmMKnw5jCqCDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcIixcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wcm9maWxlXCIsXHJcblx0XHRcdFx0Ly8gZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJwZXJzb25cIlxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICxcclxuXHRcdFx0Ly8ge1xyXG5cdFx0XHQvLyBcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHQvLyBcdHRpdGxlOiBcIsOYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiLFxyXG5cdFx0XHQvLyBcdC8vIGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHQvLyBcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHQvLyB9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcmVzZXQtcGFzc3dvcmQtcmVxdWVzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+w5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPsOYwqjDmMKxw5jCp8Obwowgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPsOZwr7Dm8KMw5jCp8OZwoXDmsKpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319IMOYwqvDmMKnw5nChsObwozDmcKHIMOYwqrDmMKnIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxIMOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwq/DmcKIw5jCqMOYwqfDmMKxw5nChyDDmMKvw5jCscObwozDmMKnw5nCgcOYwqogw5nCvsObwozDmMKnw5nChcOawqkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cdEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KClcclxuXHRzZXQgcGVuZGluZyhpc1BlbmRpbmc6IGJvb2xlYW4pIHtcclxuXHRcdGlmIChpc1BlbmRpbmcpIHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuZGlzYWJsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dGltZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0bWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcclxuXHRcdHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApLnBpcGUoXHJcblx0XHRcdG1hcChpID0+IGkgKyAxKSxcclxuXHRcdFx0dGFrZVdoaWxlKGkgPT4gaSAqIDEwMCA8PSAzMDAwKSxcclxuXHRcdFx0bWFwKGkgPT4gMzAwMCAtIGkgKiAxMDApXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm51bWJlck9mUmVxdWVzdGVkLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aWYgKGRhdGEgPiAyKSB7XHJcblx0XHRcdFx0dGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQubmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0XHRpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuXHRcdFx0dGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQuZ2V0VmFsdWUoKVxyXG5cdFx0XHRcdD8gXCLDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgLi4uXCJcclxuXHRcdFx0XHQ6IFwiw5nCvsObwozDmMKnw5nChcOawqkgw5jCrMOYwq/Dm8KMw5jCryDDmMKow5jCscOYwqfDm8KMIMOYwrTDmcKFw5jCpyDDmMKnw5jCscOYwrPDmMKnw5nChCDDmsKvw5jCscOYwq/Dm8KMw5jCry5cIjtcclxuXHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIFwiXCIsIHtcclxuXHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vLi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGxldCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoeyBFbWFpbDogcGFyYW1zLkVtYWlsIH0gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKG1vZGVsKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg3KSBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY2hhbmdlLXBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J2NoYW5nZVBhc3N3b3JkKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgPjwvdXNlci1jaGFuZ2UtcGFzc3dvcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cCA9IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Q2hhbmdlUGFzc3dvcmRNb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKS5zdWJzY3JpYmUodXNlckluZm8gPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJJbmZvKSByZXR1cm47XHJcblx0XHRcdC8vIFRPRE86XHJcblx0XHRcdC8vIHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5Vc2VybmFtZSA9IHVzZXJJbmZvLlVzZXJuYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNoYW5nZVBhc3N3b3JkKGV2ZW50KSB7XHJcblx0XHR0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuUGFzc3dvcmQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoXCJQYXNzd29yZFwiKS52YWx1ZTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYXNzd29yZCh0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlIH0gZnJvbSBcIi4uL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXQtY29udGlhbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8cHJvZmlsZS1lZGl0XHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSd1cGRhdGVQcm9maWxlKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbdXNlckluZm9dPVwidXNlckluZm9yYW1hdGlvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbcm9sZXNdPVwicm9sZXMkXCJcclxuXHRcdFx0XHRbZ3JvdXBzXT1cImdyb3VwcyB8IGFzeW5jXCJcclxuXHRcdFx0XHRbZm9ybUlkXT1cIihjb25maWckfGFzeW5jKT8uZm9ybXMucHJvZmlsZV9lZGl0XCJcclxuICAgICAgICAgICAgICA+PC9wcm9maWxlLWVkaXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXJJbmZvcmFtYXRpb24kOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0cm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8VXNlck1vZHVsZUNvbmZpZz47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnJvbGVzJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZCksIG1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcykpO1xyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gb2YoWyBcInRlc3QxXCIsIFwidGVzdDJcIiBdKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlUHJvZmlsZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0UHJvZmlsZShkYXRhKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9hY2NvdW50LnJlZHVjZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPCEtLSA8cm91dGVyLW91dGxldCBuYW1lPVwibGlua3NcIj48L3JvdXRlci1vdXRsZXQ+IC0tPlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2JveC1sZWZ0e2JhY2tncm91bmQ6I2ZmZn0jYm94LWJvdHRvbXtiYWNrZ3JvdW5kOiMyYjAwMzN9I2JveC1yaWdodHtiYWNrZ3JvdW5kOiMwMDA4MzM7cGFkZGluZy10b3A6MTBweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MTBweCFpbXBvcnRhbnR9I2JveC1yaWdodCBkaXZ7YmFja2dyb3VuZDojZmZmO29wYWNpdHk6LjV9I2Jhbm5lcjpub3QoLmFjdGl2ZSl7aGVpZ2h0OjEwMCU7LXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCk7ZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDEuNSkgb3BhY2l0eSguMikgYmx1cigycHgpfSNzMXtiYWNrZ3JvdW5kOiNhYWF9I3Mye2JhY2tncm91bmQ6I2JiYn0jczN7YmFja2dyb3VuZDojY2NjfS5wZXJzb25hbC1pbmZve2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MTAlO3dpZHRoOjkwJTtoZWlnaHQ6NDY5cHh9LnBlcnNvbmFsLWluZm8gaDJ7Y29sb3I6IzAwYmNkNDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWxpZ2h0IWltcG9ydGFudH0ucGVyc29uYWwtaW5mbyBoNntmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEycHg7ZmxvYXQ6cmlnaHQ7d2lkdGg6NTAlO21hcmdpbjowO2NvbG9yOiM1NTU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBwe2Zsb2F0OnJpZ2h0O3dpZHRoOjMwJTttYXJnaW46MDtmb250LXNpemU6MTNweDtwYWRkaW5nLXJpZ2h0OjMwcHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDo1MnB4O3JpZ2h0OjE3cHh9LnF1aWNrLWJveHt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cGFkZGluZy10b3A6NzlweH0ucXVpY2stYnRue2JhY2tncm91bmQtY29sb3I6IzAwYmNkNDttYXJnaW46MTJweCAxMHB4O2hlaWdodDoxMDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMDBweDtmb250LXNpemU6MTdweDtjb2xvcjojZmZmfS5iYW5uZXItc2VjdGlvbnt0ZXh0LWFsaWduOmNlbnRlcn0uaW5mby1zZWN0aW9ue3BhZGRpbmc6NjBweCAyNXB4IDEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2dyZXkucG5nKSFpbXBvcnRhbnQ7aGVpZ2h0OjEwNDBweDtwYWRkaW5nLWJvdHRvbToxMjBweCFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHQvLyBpc19hZ2VudCA6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdC8vIHRoaXMuaXNfYWdlbnQgPSBzaWduaW5TZXJ2aWNlLmlzX2FnZW50KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcHJvZmlsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtdXNlci1wcm9maWxlLXZpZXdcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIDwhLS0gPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5nCvsOYwrHDmcKIw5nCgcOYwqfDm8KMw5nChDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbmZvXCI+XHJcbiAgICAgICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7aXRlbVswXX19PC9wPlxyXG4gICAgICAgICAgICA8cCBmeEZsZXg9JzYwJz57e2l0ZW1bMV19fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nLi4nPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9J2VkaXQnPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+IC0tPlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoU8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkZpcnN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOYwq7DmMKnw5nChsOZwojDmMKnw5jCr8Oawq/Dm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5MYXN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuVXNlcm5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwoc8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLk1vYmlsZU51bWJlciB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqzDmcKGw5jCs8ObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMKqw5nCiMOZwoTDmMKvPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7KGlkZW50aWZpZXJUeXBlJCB8IGFzeW5jKX19PC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5JZGVudGlmaWNhdGlvbk5vIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCucOYwrbDmcKIw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgaW5mb3JtYXRpb24oaW5mb3JtYXRpb246IFVzZXJNb2RlbCkge1xyXG5cdFx0aWYgKCFpbmZvcm1hdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKGluZm9ybWF0aW9uKS5mb3JFYWNoKGsgPT4gdGhpcy5pbmZvLnB1c2goWyBrLCBpbmZvcm1hdGlvbltrXSBdKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpIGRhdGFTdGF0dXMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcblx0aW5mbzogYW55W10gPSBbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YVN0YXR1cyRdPSdkYXRhU3RhdHVzJCdcclxuICAgICAgICAgICAgPjwvdXNlci1wcm9maWxlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGF0YVN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuZGF0YVN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mb3JhbXRpb25TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlRWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld0VmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXNlckVmZmVjdHMgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlcnMgfSBmcm9tIFwiLi91c2VyLnJlZHVjZXJzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNlYXJjaENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZExpbmtzQ29tcG9uZW50LFxyXG5cdFx0UmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQsXHJcblx0XHRGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1VzZXJNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFVzZXJNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzVXNlck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwidXNlclwiLCBVc2VyUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0Ly8gUmVzZXRQYXNzd29yZFJlcXVlc3RFZmZlY3RzLFxyXG5cdFx0XHRFZGl0UHJvZmlsZUVmZmVjdHMsXHJcblx0XHRcdC8vIENoYW5nZVBhc3N3b3JkRWZmZWN0cyxcclxuXHRcdFx0UHJvZmlsZVZpZXdFZmZlY3RzLFxyXG5cdFx0XHQvLyBTZWFyY2hFZmZlY3RzLFxyXG5cdFx0XHRVc2VyRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzVXNlck1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcInVzZXIvcGFuZWxcIixcclxuXHRcdGNvbXBvbmVudDogRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwcm9maWxlXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGUvZWRpdFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB7XHJcblx0XHRcdC8vIFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0Ly8gXHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdC8vIH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0Ly8geyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8ge1xyXG5cdFx0XHRcdFx0Ly8gXHRwYXRoOiBcImNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5nc1VzZXJSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImV4cG9ydCBlbnVtIE5nc1VzZXJNb2R1bGVPdXRsZXRzIHtcclxuXHRuZ3NfdXNlcl9wcm9maWxlX3ZpZXcgPSBcIm5ncy11c2VyLXByb2ZpbGUtdmlld1wiXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckZhY2FkZVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0Z2V0RGlzcGxheU5hbWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykubGV0KHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWFwVXNlckRpc3BsYXlOYW1lKTtcclxuXHRcdC8vIC5waXBlKGZpbHRlcihkaXNwbGF5TmFtZSA9PiBkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSk7XHJcblx0fVxyXG5cdGdldEluZm8oKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtYXAiLCJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsImdldFVzZXJNb2R1bGVDb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsImNvbmZpZyIsImZpbHRlciIsInRha2UiLCJjb21iaW5lTGF0ZXN0IiwiZ2V0VXNlciIsInN3aXRjaE1hcCIsInN0cmluZ1RlbXBsYXRlIiwiY2F0Y2hFcnJvciIsIm9mIiwiSHR0cENsaWVudCIsInJvdXRlciIsIkFjdGlvbnMiLCJSb3V0ZXIiLCJFZmZlY3QiLCJTaWduSW5BY3Rpb25UeXBlcyIsImluaXRpYWxTdGF0ZSIsImdldFN0YXR1cyIsInVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIiLCJjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyIiwic2VhcmNoUmVkdWNlci5yZWR1Y2VyIiwiZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0QWNjb3VudEluZm8iLCJfZ2V0QWNjb3VudEluZm8iLCJzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyIsIkZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvIiwiRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiSW5wdXQiLCJPdXRwdXQiLCJmb3JtIiwiT2JzZXJ2YWJsZSIsInRha2VXaGlsZSIsIk1hdFNuYWNrQmFyIiwiQWN0aXZhdGVkUm91dGUiLCJNYXRjaFZhbGlkYXRvciIsImdldEFwcENvbmZpZyIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIk5nc0Zvcm1Nb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBO1FBaUJDO1lBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDakI7d0JBcEJGO1FBcUJDOzs7Ozs7QUNyQkQ7QUFnQ0EsUUFBYSxxQkFBcUIsR0FBcUI7UUFDdEQsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsS0FBSztZQUNqQixl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
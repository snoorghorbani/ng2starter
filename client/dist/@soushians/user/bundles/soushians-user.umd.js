(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@soushians/shared'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/Observable'), require('@soushians/authentication'), require('rxjs'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/user', ['exports', '@angular/core', '@angular/forms', '@soushians/shared', '@ngrx/store', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/common/http', 'rxjs/operators', '@angular/router', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/Observable', '@soushians/authentication', 'rxjs', '@angular/material', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.user = {}),global.ng.core,global.ng.forms,null,null,global.rxjs.BehaviorSubject,null,global.ng.common.http,global.rxjs.operators,global.ng.router,null,global.rxjs['observable/of'],global.rxjs.Observable,null,global.rxjs,global.ng.material,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,null));
}(this, (function (exports,i0,forms,shared,i2,BehaviorSubject,config,i1,operators,router,effects,of,Observable,authentication,rxjs,material,common,flexLayout,animations,form) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("UserModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserModel = (function () {
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
    (function (ChangePasswordModel) {
        var Request = (function () {
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
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        ChangePasswordModel.Response = Response;
    })(exports.ChangePasswordModel || (exports.ChangePasswordModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (ResetPasswordRequestModel) {
        var Request = (function () {
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
                 */ function () {
                    return new forms.FormGroup({
                        Username: new forms.FormControl('', [forms.Validators.minLength(8), forms.Validators.required]),
                        Captcha: new forms.FormControl(null, [forms.Validators.required]),
                        Token: new forms.FormControl(null, [forms.Validators.required]),
                        Type: new forms.FormControl('sms'),
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        ResetPasswordRequestModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        ResetPasswordRequestModel.Response = Response;
    })(exports.ResetPasswordRequestModel || (exports.ResetPasswordRequestModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (ResetPasswordModel) {
        var Request = (function () {
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
                 */ function () {
                    return new forms.FormGroup({
                        Token: new forms.FormControl(null, [forms.Validators.required]),
                        Password: new forms.FormControl("", [forms.Validators.minLength(8), forms.Validators.required]),
                        Confirm: new forms.FormControl(null, [forms.Validators.required, shared.MatchValidator("Password")])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        ResetPasswordModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        ResetPasswordModel.Response = Response;
    })(exports.ResetPasswordModel || (exports.ResetPasswordModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (EditProfile_ApiModel) {
        var Request = (function () {
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
        var Response = (function () {
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
    })(exports.EditProfile_ApiModel || (exports.EditProfile_ApiModel = {}));

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
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (ProfileViewModel) {
        var Request = (function () {
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
        var Response = (function (_super) {
            __extends(Response, _super);
            function Response() {
                return _super.call(this) || this;
            }
            return Response;
        }(UserModel));
        ProfileViewModel.Response = Response;
    })(exports.ProfileViewModel || (exports.ProfileViewModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (FailedLoginReportModel) {
        var Request = (function () {
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
                 */ function () {
                    return;
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        FailedLoginReportModel.Request = Request;
        var Response = (function () {
            function Response() {
                this.data = [];
            }
            return Response;
        }());
        FailedLoginReportModel.Response = Response;
    })(exports.FailedLoginReportModel || (exports.FailedLoginReportModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FailedLoginModel = (function () {
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
    var UserConfigurationService = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var ProfileViewActionTypes = {
        GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
        GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
        GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
        GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
    };
    var GetProfile = (function () {
        function GetProfile() {
            this.type = ProfileViewActionTypes.GET_PROFILE;
        }
        return GetProfile;
    }());
    var GetProfileStart = (function () {
        function GetProfileStart() {
            this.type = ProfileViewActionTypes.GET_PROFILE_START;
        }
        return GetProfileStart;
    }());
    var GetProfileSucceed = (function () {
        function GetProfileSucceed(payload) {
            this.payload = payload;
            this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
        }
        return GetProfileSucceed;
    }());
    var GetProfileFailed = (function () {
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
    var RefreshUserInfoAction = (function () {
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
    var /** @type {?} */ getAccountInfo = function (state) { return state.data; };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserService = (function () {
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
                    .filter(function (config$$1) { return config$$1.endpoints.profileInformation != ""; })
                    .take(1)
                    .switchMap(function (config$$1) {
                    return _this.http.get(config$$1.endpoints.profileInformation).let(config$$1.responseToUserInfo).pipe(operators.map(function (response) {
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
                var /** @type {?} */ model = new exports.EditProfile_ApiModel.Request(data);
                return this.http
                    .put(shared.stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
                    .map(function (response) { return new exports.EditProfile_ApiModel.Response(response).extractData(); });
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
                var /** @type {?} */ model = new exports.ProfileViewModel.Request(data);
                return this.http
                    .get(shared.stringTemplate(this.configurationService.config.endpoints.getAccountInfo, model))
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
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var EditProfileActionTypes = {
        EDIT_PROFILE: "[USER][PASSWORD] EDIT_PROFILE",
        EDIT_PROFILE_START: "[USER][PASSWORD] EDIT_PROFILE_START",
        EDIT_PROFILE_SUCCEED: "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
        EDIT_PROFILE_FAILED: "[USER][PASSWORD] EDIT_PROFILE_FAILED",
    };
    var EditProfile = (function () {
        function EditProfile(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE;
        }
        return EditProfile;
    }());
    var EditProfileStart = (function () {
        function EditProfileStart(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE_START;
        }
        return EditProfileStart;
    }());
    var EditProfileSucceed = (function () {
        function EditProfileSucceed(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
        }
        return EditProfileSucceed;
    }());
    var EditProfileFailed = (function () {
        function EditProfileFailed() {
            this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
        }
        return EditProfileFailed;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditProfileEffects = (function () {
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
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.editProfile(data); }), operators.map(function (res) { return new EditProfileSucceed(res); }), operators.catchError(function () { return of.of(new EditProfileFailed()); }));
            // .switchMap((data: EditProfile_ApiModel.Request) => {
            // 	return this.service
            // 		.editProfile(data)
            // 		.map((res) => new EditProfileSucceed(res))
            // 		.catch(() => Observable.of(new EditProfileFailed()));
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
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileViewEffects = (function () {
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
                    .pipe(operators.map(function (res) { return new GetProfileSucceed(res); }), operators.catchError(function () { return Observable.Observable.of(new GetProfileFailed()); }));
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
    var ChangePassword = (function () {
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
        if (state === void 0) {
            state = initialState$3;
        }
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
    var Search = (function () {
        function Search(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH;
        }
        return Search;
    }());
    var SearchStartAction = (function () {
        function SearchStartAction(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH_START;
        }
        return SearchStartAction;
    }());
    var SearchSucceed = (function () {
        function SearchSucceed(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH_SUCCEED;
        }
        return SearchSucceed;
    }());
    var SearchFailed = (function () {
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
        if (state === void 0) {
            state = initialState$4;
        }
        switch (action.type) {
            case SearchActionTypes.SEARCH: {
                return __assign({}, state, { status: "dirty", data: new exports.ProfileViewModel.Response() });
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
    var /** @type {?} */ selectFeatureState = i2.createFeatureSelector("user");
    var /** @type {?} */ getUserInforamtionStatus = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ isSignedIn = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ selectResetPasswordRequestState = i2.createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
    var /** @type {?} */ getNumberOfRequeseted$1 = i2.createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
    var /** @type {?} */ getResetPasswordRequestStatus = i2.createSelector(selectResetPasswordRequestState, getStatus);
    //#region user
    var /** @type {?} */ selectUserInformaionState = i2.createSelector(selectFeatureState, function (state) { return state.user; });
    var /** @type {?} */ getAccountInfo$2 = i2.createSelector(selectUserInformaionState, getAccountInfo);
    //#endregion
    //#region search
    var /** @type {?} */ selectSearchState = i2.createSelector(selectFeatureState, function (state) { return state.searchView; });
    var /** @type {?} */ getSearchStatus = i2.createSelector(selectSearchState, getStatus$3);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DashboardContainerComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DashboardLinksComponent = (function () {
        function DashboardLinksComponent(userConfigurationService, store) {
            this.userConfigurationService = userConfigurationService;
            this.store = store;
            this.links$ = this.userConfigurationService.config$.map(function (data) { return data.dashboardLinks; });
            this.links = [
                {
                    title: "مشاهده حساب کاریری",
                    route: "/user/panel/profile",
                    // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                    icon: "credit_card"
                },
                {
                    route: "/user/panel/password/change",
                    title: "تغییر کلمه عبور",
                    // description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
                    icon: "security"
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
    var UserEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var SearchComponent = (function () {
        function SearchComponent(store) {
            this.store = store;
            this.formGroup = exports.ProfileViewModel.Request.formGroup;
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordComponent = (function () {
        function ChangePasswordComponent() {
            this.submited = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'user-change-password',
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
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileEditComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var ResetPasswordRequestComponent = (function () {
        function ResetPasswordRequestComponent(snackBar) {
            this.snackBar = snackBar;
            this.submitted = new i0.EventEmitter();
            this.maximumResendingHappend$ = new BehaviorSubject.BehaviorSubject(false);
            this.timer$ = Observable.Observable.timer(0, 100)
                .map(function (i) { return i + 1; })
                .takeWhile(function (i) { return i * 100 <= 3000; })
                .map(function (i) { return 3000 - i * 100; });
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
                    var /** @type {?} */ message = (this.maximumResendingHappend$.getValue())
                        ? 'عدم امکان ...'
                        : 'پیامک جدید برای شما ارسال گردید.';
                    this.snackBar.open(message, '', {
                        duration: 3000,
                    });
                }
            };
        ResetPasswordRequestComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'user-reset-password-request',
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
     * @suppress {checkTypes} checked by tsc
     */
    var SearchEffects = (function () {
        function SearchEffects(actions$, userService) {
            var _this = this;
            this.actions$ = actions$;
            this.userService = userService;
            this.canSearch$ = this.actions$
                .ofType(SearchActionTypes.SEARCH)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new SearchStartAction(data); }));
            this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.userService.getInfo(data).pipe(operators.map(function (res) {
                    return res == null ? new SearchFailed() : new SearchSucceed(res);
                }), operators.catchError(function () { return of.of(new SearchFailed()); }));
            }));
        }
        SearchEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        SearchEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: UserService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SearchEffects.prototype, "canSearch$", void 0);
        __decorate([
            effects.Effect(),
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
    var FeatureContainerComponent = (function () {
        function FeatureContainerComponent(route, store) {
            var _this = this;
            this.route = route;
            this.store = store;
            this.route.params.subscribe(function (params) {
                var /** @type {?} */ model = new exports.ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
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
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordContainerComponent = (function () {
        function ChangePasswordContainerComponent(route, store) {
            this.route = route;
            this.store = store;
            this.formGroup = exports.ChangePasswordModel.Request.formGroup;
            this.ChangePasswordModel = new exports.ChangePasswordModel.Request();
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
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileEditContainerComponent = (function () {
        function ProfileEditContainerComponent(store, configService) {
            this.store = store;
            this.configService = configService;
            this.userInforamation$ = this.store.select(getAccountInfo$2);
            this.roles$ = this.store
                .select(config.getAppConfig)
                .filter(function (config$$1) { return config$$1 != undefined; })
                .map(function (config$$1) { return config$$1.Config.Roles; });
            // TODO:
            // this.groups = this.diagramService.getGroups();
            this.groups = Observable.Observable.of(["test1", "test2"]);
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
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileComponent = (function () {
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
                        template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\n            <p fxFlex='40'>{{item[0]}}</p>\n            <p fxFlex='60'>{{item[1]}}</p>\n        </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div> -->\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions align=\"end\">\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
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
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileContainerComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgsUserModule = (function () {
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
    var RootNgsUserModule = (function () {
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
    var /** @type {?} */ NgsUserRoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserFacadeService = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.UserService = UserService;
    exports.UserFacadeService = UserFacadeService;
    exports.getAccountInfo = getAccountInfo$2;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.UserModel = UserModel;
    exports.FailedLoginModel = FailedLoginModel;
    exports.NgsUserModule = NgsUserModule;
    exports.RootNgsUserModule = RootNgsUserModule;
    exports.routes = routes;
    exports.NgsUserRoutingModule = NgsUserRoutingModule;
    exports.ɵp = ChangePasswordContainerComponent;
    exports.ɵu = reducer$1;
    exports.ɵh = ChangePasswordComponent;
    exports.ɵs = getAccountInfo;
    exports.ɵr = userReducer;
    exports.ɵo = DashboardContainerComponent;
    exports.ɵk = DashboardLinksComponent;
    exports.ɵn = FeatureContainerComponent;
    exports.ɵz = UserEffects;
    exports.ɵx = EditProfileEffects;
    exports.ɵw = reducer$2;
    exports.ɵq = ProfileEditContainerComponent;
    exports.ɵi = ProfileEditComponent;
    exports.ɵj = ProfileContainerComponent;
    exports.ɵy = ProfileViewEffects;
    exports.ɵg = ProfileComponent;
    exports.ɵt = reducer;
    exports.ɵm = ResetPasswordRequestComponent;
    exports.ɵv = reducer$3;
    exports.ɵf = SearchComponent;
    exports.ɵl = UserConfigurationService;
    exports.ɵb = UserReducers;
    exports.ɵd = selectFeatureState;
    exports.ɵe = selectUserInformaionState;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy91c2VyLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi91c2VyLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5mYWNhZGUtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0XHRlZGl0UHJvZmlsZT86IHN0cmluZztcclxuXHRcdGdldEFjY291bnRJbmZvPzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uPzogc3RyaW5nO1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGRhc2hib2FyZExpbmtzPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbz86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogJycsXHJcblx0XHRjaGFuZ2VQYXNzd29yZDogXCJcIixcclxuXHRcdGVkaXRQcm9maWxlOiBcIlwiLFxyXG5cdFx0Z2V0QWNjb3VudEluZm86IFwiXCIsXHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb246IFwiXCJcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6ICcnLFxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogXCJcIlxyXG5cdH0sXHJcblx0ZGFzaGJvYXJkTGlua3M6IFtdLFxyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbzogdXNlciQgPT4gdXNlciQsXHJcblx0bWFwVXNlckRpc3BsYXlOYW1lOiB1c2VyJCA9PlxyXG5cdFx0dXNlciQubWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0cmV0dXJuIHVzZXIuVXNlcm5hbWU7XHJcblx0XHR9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48VXNlck1vZHVsZUNvbmZpZz4oXCJVc2VyTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHQvLyBGaXJzdE5hbWU6IHN0cmluZztcclxuXHQvLyBMYXN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0RGlzcGxheU5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdC8vIE1vYmlsZU51bWJlcjogc3RyaW5nO1xyXG5cdC8vIFNleDogc3RyaW5nO1xyXG5cdC8vIEJpcnRoZGF0ZTogc3RyaW5nO1xyXG5cdEVtYWlsOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmljYXRpb25Obzogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpZXJUeXBlOiBzdHJpbmc7XHJcblx0Ly8gUmVnaXN0ZXJEYXRlOiBzdHJpbmc7XHJcblx0Ly8gVXNlclR5cGU6IHN0cmluZztcclxuXHRSb2xlczogc3RyaW5nW107XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuUm9sZXMgPSBbXTtcclxuXHRcdHRoaXMuR3JvdXBzID0gW107XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIENoYW5nZVBhc3N3b3JkTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0VXNlcm5hbWU6IHN0cmluZztcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QgPSB7fSBhcyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRQYXNzd29yZDogdGhpcy5QYXNzd29yZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDcpIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG5cclxuICAgICAgICBVc2VybmFtZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BSZXF1ZXN0Qm9keShcInBlZ2FoXCIpXHJcbiAgICAgICAgVG9rZW46IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AVXNlSW4oJ2JvZHknKVxyXG4gICAgICAgIENhcHRjaGE6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy9AVXNlSW4oJ3VybCcpXHJcbiAgICAgICAgLy9AVmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcbiAgICAgICAgVHlwZTogJ3NtcycgfCAnZW1haWwnO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB0aGlzLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgVG9rZW46IHRoaXMuVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBDYXB0Y2hhOiB0aGlzLkNhcHRjaGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgQ2FwdGNoYTogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBUb2tlbjogbmV3IEZvcm1Db250cm9sKG51bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBUeXBlOiBuZXcgRm9ybUNvbnRyb2woJ3NtcycpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE1hdGNoVmFsaWRhdG9yIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFJlc2V0UGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cdFx0VG9rZW46IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdFx0Ly9Ub2tlbjogdGhpcy5Ub2tlbixcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHRcdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFJlcXVlc3Q+ID0ge30gYXMgUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT4ge1xyXG5cdFx0UmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRleHRyYWN0RGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlVmlld01vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdEVtYWlsOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIFVzZXJNb2RlbCB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmFpbGVkTG9naW5Nb2RlbCB9IGZyb20gJy4vZmFpbGVkLWxvZ2luLm1vZGVsJztcclxuXHJcbmV4cG9ydCBtb2R1bGUgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IEZhaWxlZExvZ2luUmVwb3J0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2UgIHtcclxuICAgICAgICBkYXRhOiBGYWlsZWRMb2dpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGYWlsZWRMb2dpbk1vZGVsIHtcclxuICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgVHJ5RGF0ZTogRGF0ZTtcclxuICAgIE1hY0FkZHJlc3M6IHN0cmluZztcclxuICAgIElwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgUmVhc29uOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXJNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9QUk9GSUxFID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVcIixcclxuXHRHRVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0R0VUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRHRVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVWaWV3QWN0aW9uID0gR2V0UHJvZmlsZSB8IEdldFByb2ZpbGVTdGFydCB8IEdldFByb2ZpbGVTdWNjZWVkIHwgR2V0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdFVTRVJfU0VMRUNURUQgPSBcIltVU0VSXSBVU0VSX1NFTEVDVEVEXCIsXHJcblx0UkVGUkVTSF9VU0VSX0lORk8gPSBcIltVU0VSXSBSRUZSRVNIX1VTRVJfSU5GT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VsZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBVc2VyU2VsZWN0ZWRBY3Rpb24gfCBSZWZyZXNoVXNlckluZm9BY3Rpb247XHJcbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIi4vdXNlci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGF0YTogVXNlck1vZGVsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGF0YTogbmV3IFVzZXJNb2RlbCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsLCBQcm9maWxlVmlld01vZGVsLCBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQ8YW55Pihjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbikubGV0KGNvbmZpZy5yZXNwb25zZVRvVXNlckluZm8pLnBpcGUoXHJcblx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0ZWRpdFByb2ZpbGUoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dDxFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbCksXHJcblx0XHRcdFx0bW9kZWwuZ2V0UmVxdWVzdEJvZHkoKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlc3BvbnNlKHJlc3BvbnNlKS5leHRyYWN0RGF0YSgpKTtcclxuXHR9XHJcblx0Z2V0SW5mbyhkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPihcclxuXHRcdFx0XHRzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuZ2V0QWNjb3VudEluZm8sIG1vZGVsKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0aXNfcm9sZShyb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QWNjb3VudEluZm8pXHJcblx0XHRcdC5maWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQubWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsLCBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzIHtcclxuXHRFRElUX1BST0ZJTEUgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFXCIsXHJcblx0RURJVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVEFSVFwiLFxyXG5cdEVESVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9TVUNDRUVEXCIsXHJcblx0RURJVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZUZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdFByb2ZpbGVBY3Rpb24gPVxyXG5cdHwgRWRpdFByb2ZpbGVcclxuXHR8IEVkaXRQcm9maWxlU3RhcnRcclxuXHR8IEVkaXRQcm9maWxlU3VjY2VlZFxyXG5cdHwgRWRpdFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRFZGl0UHJvZmlsZUFjdGlvblR5cGVzLFxyXG5cdEVkaXRQcm9maWxlU3RhcnQsXHJcblx0RWRpdFByb2ZpbGVTdWNjZWVkLFxyXG5cdEVkaXRQcm9maWxlRmFpbGVkXHJcbn0gZnJvbSBcIi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRWRpdFByb2ZpbGVTdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRSZXF1ZXN0RWRpdFByb2ZpbGVMaW5rJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmVkaXRQcm9maWxlKGRhdGEpKSxcclxuXHRcdFx0bWFwKHJlcyA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSlcclxuXHRcdCk7XHJcblx0Ly8gLnN3aXRjaE1hcCgoZGF0YTogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuc2VydmljZVxyXG5cdC8vIFx0XHQuZWRpdFByb2ZpbGUoZGF0YSlcclxuXHQvLyBcdFx0Lm1hcCgocmVzKSA9PiBuZXcgRWRpdFByb2ZpbGVTdWNjZWVkKHJlcykpXHJcblx0Ly8gXHRcdC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL3VzZXIvcHJvZmlsZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld0FjdGlvblR5cGVzLCBHZXRQcm9maWxlU3RhcnQsIEdldFByb2ZpbGVTdWNjZWVkLCBHZXRQcm9maWxlRmFpbGVkIH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVWaWV3RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXRQcm9maWxlU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRQcm9maWxlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMudXNlclNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRBY2NvdW50SW5mbygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgR2V0UHJvZmlsZUZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0cmVmcmVzaFVzZXJJbmZvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oZGF0YSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMge1xyXG4gICAgICAgIEdFVF9SRVNFVF9QQVNTV09SRF9MSU5LICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRCA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEJyxcclxuICAgICAgICBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEICA9ICdbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQnLFxyXG4gICAgICAgIERJU0FCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gRElTQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgRU5BQkxFX0dFVF9MSU5LICAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBFTkFCTEVfR0VUX0xJTksnLFxyXG4gICAgICAgIE1BWElNVU1fVFJZX0hBUFBFTkQgICAgICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gTUFYSU1VTV9UUllfSEFQUEVORCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEICAgICAgICAgICAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQnLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UmVzZXRQYXNzd29yZExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkdFVF9SRVNFVF9QQVNTV09SRF9MSU5LO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1VDQ0VFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgTWF4aW11bVRyeUhhcHBlbmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLk1BWElNVU1fVFJZX0hBUFBFTkQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uID1cclxuICAgICAgICBHZXRSZXNldFBhc3N3b3JkTGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnRcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZFxyXG4gICAgICAgIHwgRGlzYWJsZUdldExpbmtcclxuICAgICAgICB8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWRcclxuICAgICAgICB8IEVuYWJsZUdldExpbmtcclxuICAgICAgICB8IE1heGltdW1UcnlIYXBwZW5kXHJcbiAgICAgICAgfCBQYXNzd29yZENoYW5nZWRTdWNjZWVkXHJcbiAgICAgICAgfCBQYXNzd29yZENoYW5nZWRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uLCBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogbnVtYmVyO1xyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBzdHJpbmc7XHJcblx0ZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogMCxcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogbnVsbCxcclxuXHRkaXNhYmxlOiBmYWxzZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG51bWJlck9mUmVxdWVzdGVkOiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZCArIDEsXHJcblx0XHRcdFx0bGFzdFJlcXVlc3RlZFRpbWU6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldE51bWJlck9mUmVxdWVzZXRlZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkO1xyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpc2FibGU7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIHtcclxuICAgICAgICBDSEFOR0VfUEFTU1dPUkQgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBDSEFOR0VfUEFTU1dPUkQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1RBUlQgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1RBUlQnLFxyXG4gICAgICAgIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRBY3Rpb24gPVxyXG4gICAgICAgICAgICBDaGFuZ2VQYXNzd29yZFxyXG4gICAgICAgICAgfCBDaGFuZ2VQYXNzd29yZFN0YXJ0XHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3VjY2VlZFxyXG4gICAgICAgICAgfCBDaGFuZ2VQYXNzd29yZEZhaWxlZDtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEFjdGlvbiwgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcyB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCJcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQ2hhbmdlUGFzc3dvcmRBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gJ0Bzb3VzaGlhbnMvc2hhcmVkJztcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVBY3Rpb24sIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMgfSBmcm9tICcuL2VkaXQtcHJvZmlsZS5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6ICdwcmlzdGluZSdcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRWRpdFByb2ZpbGVBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ2RpcnR5J1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ3BlbmRpbmcnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdzdWNjZWVkJ1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6ICdmYWlsZWQnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBTZWFyY2hBY3Rpb25UeXBlcyB7XHJcbiAgICBTRUFSQ0ggPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIJyxcclxuICAgIFNFQVJDSF9TVEFSVCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1RBUlQnLFxyXG4gICAgU0VBUkNIX1NVQ0NFRUQgPSAnW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NVQ0NFRUQnLFxyXG4gICAgU0VBUkNIX0ZBSUxFRCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfRkFJTEVEJyxcclxuICAgIENMRUFSX1NFQVJDSEVEX1VTRVIgPSAnW1VTRVJdW1NFQVJDSF0gQ0xFQVJfU0VBUkNIRURfVVNFUidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NVQ0NFRUQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPVxyXG4gICAgU2VhcmNoXHJcbiAgICB8IFNlYXJjaFN0YXJ0QWN0aW9uXHJcbiAgICB8IFNlYXJjaFN1Y2NlZWRcclxuICAgIHwgU2VhcmNoRmFpbGVkXHJcbiAgICB8IENsZWFyU2VhcmNoZWRVc2VyOyIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaEFjdGlvbiB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiB7fSBhcyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNlYXJjaEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCIsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSOiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuZXhwb3J0IHZhciBnZXRBY2NvdW50SW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIgZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBlZGl0UHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHNlYXJjaFJlZHVjZXIgZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIuU3RhdGU7XHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5TdGF0ZTtcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLlN0YXRlO1xyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5TdGF0ZTtcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZHVjZXJzID0ge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlcixcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQucmVkdWNlcixcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLnJlZHVjZXIsXHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRcInVzZXJcIjogVXNlclN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFVzZXJTdGF0ZT4oXCJ1c2VyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuZXhwb3J0IGNvbnN0IGlzU2lnbmVkSW4gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuXHQoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVzZXRQYXNzd29yZFJlcXVlc3RcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlck9mUmVxdWVzZXRlZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXNcclxuKTtcclxuXHJcbi8vI3JlZ2lvbiB1c2VyXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50SW5mbyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFVzZXJJbmZvcm1haW9uU3RhdGUsIHVzZXJSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuLy8jZW5kcmVnaW9uXHJcblxyXG4vLyNyZWdpb24gc2VhcmNoXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTZWFyY2hTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnNlYXJjaFZpZXcpO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoU3RhdHVzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0U2VhcmNoU3RhdGUsIHNlYXJjaFJlZHVjZXIuZ2V0U3RhdHVzKTtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgYXBwUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8IS0tIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJsaW5rc1wiPjwvcm91dGVyLW91dGxldD4gLS0+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjYm94LWxlZnR7YmFja2dyb3VuZDojZmZmfSNib3gtYm90dG9te2JhY2tncm91bmQ6IzJiMDAzM30jYm94LXJpZ2h0e2JhY2tncm91bmQ6IzAwMDgzMztwYWRkaW5nLXRvcDoxMHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxMHB4IWltcG9ydGFudH0jYm94LXJpZ2h0IGRpdntiYWNrZ3JvdW5kOiNmZmY7b3BhY2l0eTouNX0jYmFubmVyOm5vdCguYWN0aXZlKXtoZWlnaHQ6MTAwJTstd2Via2l0LWZpbHRlcjpncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxLjUpIG9wYWNpdHkoLjIpIGJsdXIoMnB4KTtmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCl9I3Mxe2JhY2tncm91bmQ6I2FhYX0jczJ7YmFja2dyb3VuZDojYmJifSNzM3tiYWNrZ3JvdW5kOiNjY2N9LnBlcnNvbmFsLWluZm97YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDoxMCU7d2lkdGg6OTAlO2hlaWdodDo0NjlweH0ucGVyc29uYWwtaW5mbyBoMntjb2xvcjojMDBiY2Q0O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MjRweDtmb250LWZhbWlseTppcmFuLXNhbnMtbGlnaHQhaW1wb3J0YW50fS5wZXJzb25hbC1pbmZvIGg2e2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTJweDtmbG9hdDpyaWdodDt3aWR0aDo1MCU7bWFyZ2luOjA7Y29sb3I6IzU1NTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIHB7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzAlO21hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctcmlnaHQ6MzBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIGRpdnt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cmlnaHQ6MTdweH0ucXVpY2stYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NTJweDtwYWRkaW5nLXRvcDo3OXB4fS5xdWljay1idG57YmFja2dyb3VuZC1jb2xvcjojMDBiY2Q0O21hcmdpbjoxMnB4IDEwcHg7aGVpZ2h0OjEwMHB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEwMHB4O2ZvbnQtc2l6ZToxN3B4O2NvbG9yOiNmZmZ9LmJhbm5lci1zZWN0aW9ue3RleHQtYWxpZ246Y2VudGVyfS5pbmZvLXNlY3Rpb257cGFkZGluZzo2MHB4IDI1cHggMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvZ3JleS5wbmcpIWltcG9ydGFudDtoZWlnaHQ6MTA0MHB4O3BhZGRpbmctYm90dG9tOjEyMHB4IWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdC8vIGlzX2FnZW50IDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhcHBSZWR1Y2VyLlVzZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChhcHBSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdC8vIHRoaXMuaXNfYWdlbnQgPSBzaWduaW5TZXJ2aWNlLmlzX2FnZW50KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtbGlua3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRXcmFwIGlkPVwiY29uXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MkIHwgYXN5bmMnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NvbiBbZnhmbGV4XXttYXJnaW4tcmlnaHQ6MjVweH06aG9zdHt3aWR0aDoxMDAlO3BhZGRpbmc6MjVweCAyNXB4IDB9YnV0dG9uIG1hdC1pY29ue2ZvbnQtc2l6ZTo0OHB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHh9YnV0dG9uLmxpbmt7cGFkZGluZzoyNXB4IDE1cHg7bWFyZ2luLWJvdHRvbToyNXB4fS50aXRsZXttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo1cHh9LmRlc2NyaXB0aW9ue292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDo5MCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmtzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0bGlua3M6IGFueVtdO1xyXG5cdGxpbmtzJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQ29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5saW5rcyQgPSB0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLm1hcChkYXRhID0+IGRhdGEuZGFzaGJvYXJkTGlua3MpO1xyXG5cdFx0dGhpcy5saW5rcyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIsOZwoXDmMK0w5jCp8OZwofDmMKvw5nChyDDmMKtw5jCs8OYwqfDmMKoIMOawqnDmMKnw5jCscObwozDmMKxw5vCjFwiLFxyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Byb2ZpbGVcIixcclxuXHRcdFx0XHQvLyBkZXNjcmlwdGlvbjogXCLDmcKEw5nCiMOYwrHDmcKFIMOYwqfDm8KMw5nCvsOYwrPDmcKIw5nChSDDmcKFw5jCqsOZwoYgw5jCs8OYwqfDmMKuw5jCqsOawq/Dm8KMIMOYwqjDmMKnIMOYwqrDmcKIw5nChMObwozDmMKvIMOYwrPDmMKnw5jCr8Oawq/Dm8KMIMOZwobDmMKnw5nChcOZwoHDmcKHw5nCiMOZwoVcIixcclxuXHRcdFx0XHRpY29uOiBcImNyZWRpdF9jYXJkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHRcdHRpdGxlOiBcIsOYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiLFxyXG5cdFx0XHRcdC8vIGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHRcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgU2lnbkluQWN0aW9uVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUsIEdldFByb2ZpbGVTdWNjZWVkIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdC8vIEBFZmZlY3QoKVxyXG5cdC8vIHVwZGF0ZVByb2ZpbGVJbmZvcm1hdGlvbiQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHQvLyBcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdC8vIFx0bWFwKHVzZXIgPT4ge1xyXG5cdC8vIFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHVzZXIpO1xyXG5cdC8vIFx0fSlcclxuXHQvLyApO1xyXG5cdEBFZmZlY3QoKVxyXG5cdGdldEFjY291bnRJbmZvJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKCgpID0+IHtcclxuXHRcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblx0QEVmZmVjdCgpXHJcblx0c2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShtYXAoKCkgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbih7fSBhcyBVc2VyTW9kZWwpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeEZsZXg9XCI0NTBweFwiICpuZ0lmPVwiKHVzZXJTdGF0dXMkIHwgYXN5bmMpID09ICdzdWNjZWVkJ1wiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuTGFzdE5hbWUgfX3DmMKMIHt7KHVzZXIgfCBhc3luYykuRmlyc3ROYW1lIH19IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICA8IS0tIHt7KHVzZXIgfCBhc3luYykuRW1haWx9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5sb2NhbF9ncm9jZXJ5X3N0b3JlPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCtMOZwobDmMKnw5jCs8OZwoc8L3A+XHJcbiAgICAgICAgPCEtLSA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5faWQgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgPG1hdC1pY29uIGZ4RmxleD0nbm9ncm93Jz5lbWFpbDwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuRW1haWwgfX08L3A+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcjogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPjtcclxuXHR1c2VyU3RhdHVzJDogT2JzZXJ2YWJsZTxyZXNwb25zZVN0YXR1c1R5cGVzPjtcclxuXHRmb3JtR3JvdXAgPSBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHVzZXJEYXRhTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0dXNlck5vdEZvdW5kJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnVzZXIgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJC5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy51c2VyRGF0YUxvYWRlZCQubmV4dCghXCJwcmlzdGluZXxkaXJ0eXxwZW5kaW5nXCIuaW5jbHVkZXModmFsdWUpKSk7XHJcblx0fVxyXG5cdHNlYXJjaCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuLy8gaW1wb3J0IHsgTWRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1jaGFuZ2UtcGFzc3dvcmQnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImNoYW5nZVBhc3N3b3JkKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlBhc3N3b3JkXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmsKpw5jCscOYwqfDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbmZpcm1cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5jCqsOYwrrDm8KMw5vCjMOYwrEgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWxcIiBtYXQtcmFpc2VkLWJ1dHRvbj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgICAgIGNoYW5nZVBhc3N3b3JkKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSlcclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG5cclxuICBcclxuICA8bmdzLWZvcm0tdmlldyAjZm9ybSBbaWRdPVwiZm9ybUlkXCIgW2NhcmRdPVwidHJ1ZVwiIChhY2NlcHQpPVwiZWRpdFByb2ZpbGUoZm9ybS5mb3JtR3JvdXApXCIgKGNhbmNlbCk9XCJnb2JhY2soKVwiID48L25ncy1mb3JtLXZpZXc+XHJcbiAgPCEtLSA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJlZGl0UHJvZmlsZSgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiLi5cIiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT4gLS0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgdXNlckluZm86IGFueTtcclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHRASW5wdXQoXCJyb2xlc1wiKSByb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdEBJbnB1dCgpIGdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdGVkaXRQcm9maWxlKGZvcm06IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQoZm9ybS52YWx1ZSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIuLlwiIF0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgICAgICBzZWxlY3RvcjogJ3VzZXItcmVzZXQtcGFzc3dvcmQtcmVxdWVzdCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxoMz7DmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrE8L2gzPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPHA+w5jCqMOYwrHDmMKnw5vCjCDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxIMOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5jCrsOZwojDmMKvIMOYwrHDmMKnIMOZwojDmMKnw5jCscOYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvPC9wPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGZ4RmxleEZpbGwgZm9ybUNvbnRyb2xOYW1lPVwiVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic21zXCI+w5nCvsObwozDmMKnw5nChcOawqk8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJlbWFpbFwiPsOZwr7DmMKzw5jCqiDDmMKnw5nChMOawqnDmMKqw5jCscOZwojDmcKGw5vCjMOawqnDm8KMPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCtMOZwoXDmMKnw5jCscOZwocgw5jCqsOZwoTDmcKBw5nChiDDmcKHw5nChcOYwrHDmMKnw5nCh1wiIGZvcm1Db250cm9sTmFtZT1cIlVzZXJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPCEtLTxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpIHx8IChtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPi0tPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9JyEoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSAmJiAhKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICB7e3RpbWVyJCB8IGFzeW5jfX0gw5jCq8OYwqfDmcKGw5vCjMOZwocgw5jCqsOYwqcgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrEgw5jCrsOZwojDmMKnw5jCs8OYwqogw5jCr8OZwojDmMKow5jCp8OYwrHDmcKHIMOYwq/DmMKxw5vCjMOYwqfDmcKBw5jCqiDDmcK+w5vCjMOYwqfDmcKFw5rCqS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPScobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgIMOYwrnDmMKvw5nChSDDmMKnw5nChcOawqnDmMKnw5nChiDDmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqXHJcbiAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9hdXRoL3NpZ25pbic+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9hPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZm9ybT5cclxuYCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICAgICBAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3Q+KCk7XHJcblxyXG4gICAgICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgICAgIEBJbnB1dCgpIG51bWJlck9mUmVxdWVzdGVkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICAgICAgQElucHV0KCkgY2FuUmVxdWVzdFBpbjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgICAgICBASW5wdXQoKSBzZXQgcGVuZGluZyhpc1BlbmRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICAgICAgbWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciQgPSBPYnNlcnZhYmxlLnRpbWVyKDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IGkgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFrZVdoaWxlKGkgPT4gaSAqIDEwMCA8PSAzMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gMzAwMCAtIGkgKiAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlck9mUmVxdWVzdGVkLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAodGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQuZ2V0VmFsdWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ8OZwr7Dm8KMw5jCp8OZwoXDmsKpIMOYwqzDmMKvw5vCjMOYwq8gw5jCqMOYwrHDmMKnw5vCjCDDmMK0w5nChcOYwqcgw5jCp8OYwrHDmMKzw5jCp8OZwoQgw5rCr8OYwrHDmMKvw5vCjMOYwq8uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsICcnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL29ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdGFydEFjdGlvbiwgU2VhcmNoRmFpbGVkLCBTZWFyY2hBY3Rpb25UeXBlcywgU2VhcmNoU3VjY2VlZCB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRjYW5TZWFyY2gkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0gpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFNlYXJjaFN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNlYXJjaCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmdldEluZm8oZGF0YSkucGlwZShcclxuXHRcdFx0XHRtYXAocmVzID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiByZXMgPT0gbnVsbCA/IG5ldyBTZWFyY2hGYWlsZWQoKSA6IG5ldyBTZWFyY2hTdWNjZWVkKHJlcyk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU2VhcmNoRmFpbGVkKCkpKVxyXG5cdFx0XHQpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vLi4vc2VhcmNoLWFjY291bnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGxldCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoeyBFbWFpbDogcGFyYW1zLkVtYWlsIH0gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKG1vZGVsKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLWNoYW5nZS1wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0nY2hhbmdlUGFzc3dvcmQoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICA+PC91c2VyLWNoYW5nZS1wYXNzd29yZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwID0gQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRDaGFuZ2VQYXNzd29yZE1vZGVsID0gbmV3IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCgpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pLnN1YnNjcmliZSh1c2VySW5mbyA9PiB7XHJcblx0XHRcdGlmICghdXNlckluZm8pIHJldHVybjtcclxuXHRcdFx0Ly8gVE9ETzpcclxuXHRcdFx0Ly8gdGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlVzZXJuYW1lID0gdXNlckluZm8uVXNlcm5hbWU7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Y2hhbmdlUGFzc3dvcmQoZXZlbnQpIHtcclxuXHRcdHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5QYXNzd29yZCA9IHRoaXMuZm9ybUdyb3VwLmdldChcIlBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENoYW5nZVBhc3N3b3JkKHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBnZXRBcHBDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCwgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlIH0gZnJvbSBcIi4uL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3VzZXIuY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXQtY29udGlhbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8cHJvZmlsZS1lZGl0XHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSd1cGRhdGVQcm9maWxlKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbdXNlckluZm9dPVwidXNlckluZm9yYW1hdGlvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbcm9sZXNdPVwicm9sZXMkXCJcclxuXHRcdFx0XHRbZ3JvdXBzXT1cImdyb3VwcyB8IGFzeW5jXCJcclxuXHRcdFx0XHRbZm9ybUlkXT1cIihjb25maWckfGFzeW5jKT8uZm9ybXMucHJvZmlsZV9lZGl0XCJcclxuICAgICAgICAgICAgICA+PC9wcm9maWxlLWVkaXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXJJbmZvcmFtYXRpb24kOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0cm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8VXNlck1vZHVsZUNvbmZpZz47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge1xyXG5cdFx0dGhpcy51c2VySW5mb3JhbWF0aW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMucm9sZXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZClcclxuXHRcdFx0Lm1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcyk7XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gdGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBPYnNlcnZhYmxlLm9mKFsgXCJ0ZXN0MVwiLCBcInRlc3QyXCIgXSk7XHJcblxyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQ7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdHVwZGF0ZVByb2ZpbGUoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdFByb2ZpbGUoZGF0YSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcHJvZmlsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5jCt8OZwoTDmMKnw5jCucOYwqfDmMKqIMOZwr7DmMKxw5nCiMOZwoHDmMKnw5vCjMOZwoQ8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudCAqbmdJZj0nZGF0YVN0YXR1cyQgfCBhc3luYyc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3JvdycgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaW5mb1wiPlxyXG4gICAgICAgICAgICA8cCBmeEZsZXg9JzQwJz57e2l0ZW1bMF19fTwvcD5cclxuICAgICAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3tpdGVtWzFdfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnJvbGVzPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KGluZm9ybWF0aW9uIHwgYXN5bmMpLlJvbGVzIHwganNvbn19PC9wPlxyXG4gICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgIDwhLS0gPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5GaXJzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmMKuw5jCp8OZwobDmcKIw5jCp8OYwq/DmsKvw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTGFzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOZwobDmMKnw5nChSDDmsKpw5jCp8OYwrHDmMKow5jCscObwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlVzZXJuYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5nChMOZwoHDmcKGIMOZwofDmcKFw5jCscOYwqfDmcKHPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Nb2JpbGVOdW1iZXIgfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKsw5nChsOYwrPDm8KMw5jCqjwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57e3NleCQgfCBhc3luY319PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCqsOZwojDmcKEw5jCrzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuQmlydGhkYXRlIHwgcGVyc2lhbkRhdGUgOiBmYWxzZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkVtYWlsfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz57eyhpZGVudGlmaWVyVHlwZSQgfCBhc3luYyl9fTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuSWRlbnRpZmljYXRpb25ObyB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmMKnw5jCscObwozDmMKuIMOYwrnDmMK2w5nCiMObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5SZWdpc3RlckRhdGUgfCBwZXJzaWFuRGF0ZX19PC9wPlxyXG4gICAgICA8L2Rpdj4gLS0+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcblxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnMgYWxpZ249XCJlbmRcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9Jy4uJz7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiByb3V0ZXJMaW5rPSdlZGl0Jz7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgaW5mb3JtYXRpb24oaW5mb3JtYXRpb246IFVzZXJNb2RlbCkge1xyXG5cdFx0aWYgKCFpbmZvcm1hdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKGluZm9ybWF0aW9uKS5mb3JFYWNoKGsgPT4gdGhpcy5pbmZvLnB1c2goWyBrLCBpbmZvcm1hdGlvbltrXSBdKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpIGRhdGFTdGF0dXMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcblx0aW5mbzogYW55W10gPSBbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPHVzZXItcHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgW2luZm9ybWF0aW9uXT1cImRhdGEkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAgICAgW2RhdGFTdGF0dXMkXT0nZGF0YVN0YXR1cyQnXHJcbiAgICAgICAgICAgID48L3VzZXItcHJvZmlsZT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGRhdGFTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLmRhdGFTdGF0dXMkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgTmdzRm9ybU1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL2Zvcm1cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi91c2VyLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUVmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVzZXJFZmZlY3RzIH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLWNvbnRhaW5lci9wcm9maWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlclJlZHVjZXJzIH0gZnJvbSBcIi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0TmdzRm9ybU1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRTZWFyY2hDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRMaW5rc0NvbXBvbmVudCxcclxuXHRcdFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50LFxyXG5cdFx0RmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NVc2VyTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBVc2VyTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcInVzZXJcIiwgVXNlclJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXHJcblx0XHRcdC8vIFJlc2V0UGFzc3dvcmRSZXF1ZXN0RWZmZWN0cyxcclxuXHRcdFx0RWRpdFByb2ZpbGVFZmZlY3RzLFxyXG5cdFx0XHQvLyBDaGFuZ2VQYXNzd29yZEVmZmVjdHMsXHJcblx0XHRcdFByb2ZpbGVWaWV3RWZmZWN0cyxcclxuXHRcdFx0Ly8gU2VhcmNoRWZmZWN0cyxcclxuXHRcdFx0VXNlckVmZmVjdHNcclxuXHRcdF0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc1VzZXJNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ1c2VyL3BhbmVsXCIsXHJcblx0XHRjb21wb25lbnQ6IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRGFzaGJvYXJkTGlua3NDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwcm9maWxlL2VkaXRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInBhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDogXCJhZG1pbi91c2VyXCIsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7IHBhdGg6IFwibWFuYWdtZW50XCIsIGNvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50IH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIjpFbWFpbFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiBcImNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5nc1VzZXJSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0LCBjYXRjaEVycm9yLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmFjYWRlU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge31cclxuXHRnZXREaXNwbGF5TmFtZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKS5sZXQodGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5tYXBVc2VyRGlzcGxheU5hbWUpO1xyXG5cdFx0Ly8gLnBpcGUoZmlsdGVyKGRpc3BsYXlOYW1lID0+IGRpc3BsYXlOYW1lICE9PSB1bmRlZmluZWQpKTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJWYWxpZGF0b3JzIiwiTWF0Y2hWYWxpZGF0b3IiLCJDaGFuZ2VQYXNzd29yZE1vZGVsIiwiUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCIsIlJlc2V0UGFzc3dvcmRNb2RlbCIsIkVkaXRQcm9maWxlX0FwaU1vZGVsIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJQcm9maWxlVmlld01vZGVsIiwiRmFpbGVkTG9naW5SZXBvcnRNb2RlbCIsIkJlaGF2aW9yU3ViamVjdCIsImdldFVzZXJNb2R1bGVDb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJjb25maWciLCJtYXAiLCJzdHJpbmdUZW1wbGF0ZSIsIkh0dHBDbGllbnQiLCJyb3V0ZXIiLCJzd2l0Y2hNYXAiLCJjYXRjaEVycm9yIiwib2YiLCJBY3Rpb25zIiwiUm91dGVyIiwiRWZmZWN0IiwiT2JzZXJ2YWJsZSIsImluaXRpYWxTdGF0ZSIsImdldFN0YXR1cyIsInVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLnJlZHVjZXIiLCJjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyIiwic2VhcmNoUmVkdWNlci5yZWR1Y2VyIiwiZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0QWNjb3VudEluZm8iLCJ1c2VyUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsInNlYXJjaFJlZHVjZXIuZ2V0U3RhdHVzIiwiYXBwUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsIkNvbXBvbmVudCIsIlNpZ25JbkFjdGlvblR5cGVzIiwiRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8iLCJGZWF0dXJlUmVkdWNlci5nZXRTZWFyY2hTdGF0dXMiLCJFdmVudEVtaXR0ZXIiLCJJbnB1dCIsIk91dHB1dCIsImZvcm0iLCJNYXRTbmFja0JhciIsIkFjdGl2YXRlZFJvdXRlIiwiZ2V0QXBwQ29uZmlnIiwiRmVhdHVyZVJlZHVjZXIuZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIiwiTmdzRm9ybU1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQXlCYSxxQkFBcUIsR0FBcUI7UUFDdEQsU0FBUyxFQUFFOztZQUVWLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsY0FBYyxFQUFFLEVBQUU7WUFDbEIsa0JBQWtCLEVBQUUsRUFBRTtTQUV0QjtRQUNELEtBQUssRUFBRTtZQUNOLFlBQVksRUFBRSxFQUFFO1NBQ2hCO1FBQ0QsY0FBYyxFQUFFLEVBQUU7UUFDbEIsa0JBQWtCLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEdBQUE7UUFDbEMsa0JBQWtCLEVBQUUsVUFBQSxLQUFLO1lBQ3hCLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ2IsU0FBUztnQkFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDckIsQ0FBQztTQUFBO0tBQ0gsQ0FBQztBQUVGLHlCQUFhLG1CQUFtQixHQUFHLElBQUlBLGlCQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUM5QzNGLFFBQUE7UUFpQkM7WUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNqQjt3QkFwQkY7UUFxQkM7Ozs7OztBQ25CRCxJQUdBLFdBQWlCLG1CQUFtQjtRQUNuQyxJQUFBO1lBSUMsaUJBQVksU0FBMEU7Z0JBQTFFLDBCQUFBO29CQUFBLDhCQUF5QyxFQUFpQyxDQUFBOztnQkFBdEYsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTzt3QkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3ZCLENBQUM7aUJBQ0Y7WUFFRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlDLGVBQVMsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLElBQUlDLGlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxFQUFFQSxnQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO3dCQUNqRixPQUFPLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLEVBQUVDLHFCQUFjLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQztxQkFDbkYsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkF6Qkg7WUEwQkUsQ0FBQTtRQXBCWSwyQkFBTztRQXNCcEIsSUFBQTtZQUNDO2FBQWdCOzJCQTdCbEI7WUE4QkUsQ0FBQTtRQUZZLDRCQUFRO09BdkJMQywyQkFBbUIsS0FBbkJBLDJCQUFtQixRQTBCbkM7Ozs7OztBQzdCRCxJQUVBLFdBQWMseUJBQXlCO1FBRW5DLElBQUE7WUFjSSxpQkFBWSxTQUE2QztnQkFBekQsaUJBRUM7Z0JBREcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNyRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0ksT0FBTzt3QkFDSCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3FCQUN4QixDQUFBO2lCQUNKO1lBRUQsc0JBQVcsb0JBQVM7OztvQkFBcEI7b0JBQ0ksT0FBTyxJQUFJSixlQUFTLENBQUM7d0JBQ2pCLFFBQVEsRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDQyxnQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0UsT0FBTyxFQUFFLElBQUlELGlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUNDLGdCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJRCxpQkFBVyxDQUFDLElBQUksRUFBRSxDQUFDQyxnQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxLQUFLLENBQUM7cUJBQy9CLENBQUMsQ0FBQTtpQkFDTDs7O2VBQUE7MEJBdkNUO1lBd0NLLENBQUE7UUFsQ1ksaUNBQU87UUFvQ3BCLElBQUE7WUFFSTthQUNDOzJCQTdDVDtZQThDSyxDQUFBO1FBSlksa0NBQVE7T0F0Q1hJLGlDQUF5QixLQUF6QkEsaUNBQXlCLFFBNEN0Qzs7Ozs7O0FDOUNELElBR0EsV0FBaUIsa0JBQWtCO1FBQ2xDLElBQUE7WUFJQyxpQkFBWSxTQUFzQztnQkFBbEQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTzt3QkFDTixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBRXZCLENBQUM7aUJBQ0Y7WUFFRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlMLGVBQVMsQ0FBQzt3QkFDcEIsS0FBSyxFQUFFLElBQUlDLGlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ3JELFFBQVEsRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDL0UsT0FBTyxFQUFFLElBQUlELGlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxFQUFFQyxxQkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFFLENBQUM7cUJBQ25GLENBQUMsQ0FBQztpQkFDSDs7O2VBQUE7MEJBM0JIO1lBNEJFLENBQUE7UUF0QlksMEJBQU87UUF1QnBCLElBQUE7WUFDQzthQUFnQjsyQkE5QmxCO1lBK0JFLENBQUE7UUFGWSwyQkFBUTtPQXhCTEcsMEJBQWtCLEtBQWxCQSwwQkFBa0IsUUEyQmxDOzs7Ozs7QUM5QkQsSUFHQSxXQUFpQixvQkFBb0I7UUFDcEMsSUFBQTtZQUtDLGlCQUFZLFNBQTJDO2dCQUEzQywwQkFBQTtvQkFBQSw4QkFBOEIsRUFBYSxDQUFBOztnQkFBdkQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTyxJQUFJLENBQUM7aUJBQ1o7WUFFRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlOLGVBQVMsQ0FBQzt3QkFDcEIsS0FBSyxFQUFFLElBQUlDLGlCQUFXLENBQUMsSUFBSSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ3JELEtBQUssRUFBRSxJQUFJRCxpQkFBVyxDQUFDLElBQUksRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNyRCxNQUFNLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztxQkFDdEQsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkF6Qkg7WUEwQkUsQ0FBQTtRQXBCWSw0QkFBTztRQXNCcEIsSUFBQTtZQUVDLGtCQUFZLFNBQW9DO2dCQUFwQywwQkFBQTtvQkFBQSw4QkFBc0IsRUFBYyxDQUFBOztnQkFBaEQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUNELDhCQUFXOzs7Z0JBQVg7b0JBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztpQkFDeEI7MkJBbkNIO1lBb0NFLENBQUE7UUFSWSw2QkFBUTtPQXZCTEssNEJBQW9CLEtBQXBCQSw0QkFBb0IsUUFnQ3BDOztJQ3JDRDs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO1NBQ3BDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRS9FLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQztBQUVELElBQU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQTtBQUVELHdCQVUyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztBQUVELHdCQUkyQixXQUFXLEVBQUUsYUFBYTtRQUNqRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkksQ0FBQzs7Ozs7O0lDcERELFdBQWlCLGdCQUFnQjtRQUNoQyxJQUFBO1lBR0MsaUJBQVksU0FBb0M7Z0JBQWhELGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7YUFDcEU7Ozs7WUFFRCxnQ0FBYzs7O2dCQUFkO29CQUNDLE9BQU8sRUFBRSxDQUFDO2lCQUNWO1lBRUQsc0JBQVcsb0JBQVM7OztvQkFBcEI7b0JBQ0MsT0FBTyxJQUFJUCxlQUFTLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztxQkFDL0UsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkFyQkg7WUFzQkUsQ0FBQTtRQWhCWSx3QkFBTztRQWtCcEIsSUFBQTtZQUE4Qk0sNEJBQVM7WUFDdEM7dUJBQ0MsaUJBQU87YUFDUDsyQkEzQkg7VUF3QitCLFNBQVMsRUFJdEMsQ0FBQTtRQUpZLHlCQUFRO09BbkJMQyx3QkFBZ0IsS0FBaEJBLHdCQUFnQixRQXdCaEM7Ozs7OztBQ3hCRCxJQUFBLFdBQWMsc0JBQXNCO1FBQ2hDLElBQUE7WUFHSSxpQkFBWSxTQUEwQztnQkFBdEQsaUJBRUM7Z0JBREcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNyRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0ksT0FBTyxFQUNOLENBQUE7aUJBQ0o7WUFFRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDSSxPQUFNO2lCQUNUOzs7ZUFBQTswQkFwQlQ7WUFxQkssQ0FBQTtRQWZZLDhCQUFPO1FBaUJwQixJQUFBO1lBR0k7NEJBRjJCLEVBQUU7YUFJNUI7MkJBNUJUO1lBNkJLLENBQUE7UUFOWSwrQkFBUTtPQWxCWEMsOEJBQXNCLEtBQXRCQSw4QkFBc0IsUUF5Qm5DOzs7Ozs7QUM5QkQsUUFBQTs7OytCQUFBO1FBT0M7Ozs7Ozs7Ozs7O0FDUEQ7UUFrQkMsa0NBQXlDLFVBQVUsRUFBVSxLQUFpQjtZQUE5RSxpQkFRQztZQVI0RCxVQUFLLEdBQUwsS0FBSyxDQUFZOzJCQUZwRSxJQUFJQywrQkFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFHMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNDLDBCQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVTtnQkFDMUQsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTztnQkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNIO1FBYkQsc0JBQUksNENBQU07OztnQkFBVjtnQkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEI7OztXQUFBOztvQkFQREMsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7d0RBUWFDLFNBQU0sU0FBQyxtQkFBbUI7d0JBakIvQkMsUUFBSzs7Ozt1Q0FEZDs7Ozs7Ozs7O3FCQ01lLDZCQUE2QjsyQkFDdkIsbUNBQW1DOzZCQUNqQyxxQ0FBcUM7NEJBQ3RDLG9DQUFvQzs7SUFHMUQsSUFBQTs7d0JBQ2lCLHNCQUFzQixDQUFDLFdBQVc7O3lCQWJuRDtRQWNDLENBQUE7QUFGRCxJQUdBLElBQUE7O3dCQUNpQixzQkFBc0IsQ0FBQyxpQkFBaUI7OzhCQWhCekQ7UUFpQkMsQ0FBQTtBQUZELElBR0EsSUFBQTtRQUVDLDJCQUFtQixPQUFrQztZQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUEyQjt3QkFEckMsc0JBQXNCLENBQUMsbUJBQW1CO1NBQ0Q7Z0NBcEIxRDtRQXFCQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDaUIsc0JBQXNCLENBQUMsa0JBQWtCOzsrQkF2QjFEO1FBd0JDLENBQUE7Ozs7Ozs7O3VCQ25CZ0Isc0JBQXNCOzJCQUNsQiwwQkFBMEI7O0lBUS9DLElBQUE7UUFFQywrQkFBbUIsT0FBa0I7WUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVzt3QkFEckIsZUFBZSxDQUFDLGlCQUFpQjtTQUNSO29DQWhCMUM7UUFpQkMsQ0FBQTs7Ozs7O0lDVk0scUJBQU0sWUFBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO0tBQ3JCLENBQUM7Ozs7OztBQUVGLHlCQUE0QixLQUFvQixFQUFFLE1BQWtCO1FBQXhDLHNCQUFBO1lBQUEsb0JBQW9COztRQUMvQyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssZUFBZSxDQUFDLGFBQWEsRUFBRTtnQkFDbkMsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO2FBQ0Y7WUFDRCxLQUFLLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDdkMsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLEVBQ1osSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ25CO2FBQ0Y7WUFFRCxTQUFTO2dCQUNSLE9BQU8sS0FBSyxDQUFDO2FBQ2I7U0FDRDtLQUNEO0FBRUQseUJBQWEsY0FBYyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksR0FBQTs7Ozs7O0FDbkMxRDtRQWtCQyxxQkFDUyxNQUNBLE9BQ0E7WUFIVCxpQkFRQztZQVBRLFNBQUksR0FBSixJQUFJO1lBQ0osVUFBSyxHQUFMLEtBQUs7WUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1lBRTVCLFVBQVUsQ0FBQztnQkFDVixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDdEMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNSOzs7O1FBRUQsb0NBQWM7OztZQUFkO2dCQUFBLGlCQWVDO2dCQWRBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87cUJBQ3RDLE1BQU0sQ0FBQyxVQUFBQyxTQUFNLElBQUksT0FBQUEsU0FBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLEdBQUEsQ0FBQztxQkFDM0QsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDUCxTQUFTLENBQUMsVUFBQUEsU0FBTTtvQkFDaEIsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTUEsU0FBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0EsU0FBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUMxRkMsYUFBRyxDQUFDLFVBQUMsUUFBbUI7d0JBQ3ZCLHFCQUFNLElBQUksR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFOzRCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7eUJBQzNCO3dCQUNELE9BQU8sSUFBSSxDQUFDO3FCQUNaLENBQUMsQ0FDRjtpQkFBQSxDQUNELENBQUM7YUFDSDs7Ozs7UUFDRCxpQ0FBVzs7OztZQUFYLFVBQVksSUFBa0M7Z0JBQzdDLHFCQUFJLEtBQUssR0FBRyxJQUFJViw0QkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUk7cUJBQ2QsR0FBRyxDQUNIVyxxQkFBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFDN0UsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUN0QjtxQkFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxJQUFJWCw0QkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUEsQ0FBQyxDQUFDO2FBQzdFOzs7OztRQUNELDZCQUFPOzs7O1lBQVAsVUFBUSxJQUE4QjtnQkFDckMscUJBQU0sS0FBSyxHQUFHLElBQUlFLHdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFakQsT0FBTyxJQUFJLENBQUMsSUFBSTtxQkFDZCxHQUFHLENBQ0hTLHFCQUFjLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUNoRjtxQkFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEdBQUEsQ0FBQyxDQUFDO2FBQzVCOzs7OztRQUVELDZCQUFPOzs7O1lBQVAsVUFBUSxJQUFZO2dCQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLO3FCQUNmLE1BQU0sQ0FBQyxjQUFjLENBQUM7cUJBQ3RCLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsR0FBQSxDQUFDO3FCQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNQLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUM3Qzs7b0JBdkRETCxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFmUU0sYUFBVTt3QkFLVkosUUFBSzt3QkFETCx3QkFBd0I7Ozs7MEJBTGpDOzs7Ozs7Ozs7c0JDS2dCLCtCQUErQjs0QkFDekIscUNBQXFDOzhCQUNuQyx1Q0FBdUM7NkJBQ3hDLHNDQUFzQzs7SUFHN0QsSUFBQTtRQUVDLHFCQUFtQixPQUFxQztZQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4Qjt3QkFEeEMsc0JBQXNCLENBQUMsWUFBWTtTQUNVOzBCQWI5RDtRQWNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQywwQkFBbUIsT0FBcUM7WUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7d0JBRHhDLHNCQUFzQixDQUFDLGtCQUFrQjtTQUNJOytCQWpCOUQ7UUFrQkMsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLDRCQUFtQixPQUFrQjtZQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO3dCQURyQixzQkFBc0IsQ0FBQyxvQkFBb0I7U0FDakI7aUNBckIzQztRQXNCQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDaUIsc0JBQXNCLENBQUMsbUJBQW1COztnQ0F4QjNEO1FBeUJDLENBQUE7Ozs7Ozs7UUNMQSw0QkFBb0IsUUFBc0IsRUFBVUssU0FBYyxFQUFVLE9BQW9CO1lBQWhHLGlCQUFvRztZQUFoRixhQUFRLEdBQVIsUUFBUSxDQUFjO1lBQVUsV0FBTSxHQUFOQSxTQUFNLENBQVE7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO3VDQUcxRSxJQUFJLENBQUMsUUFBUTtpQkFDakMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQztpQkFDM0MsSUFBSSxDQUFDSCxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFBRUEsYUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7MkNBR3BELElBQUksQ0FBQyxRQUFRO2lCQUNyQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7aUJBQ2pELElBQUksQ0FDSkEsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCSSxtQkFBUyxDQUFDLFVBQUMsSUFBa0MsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsRUFDakZKLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUN2Q0ssb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLEtBQUUsQ0FBQyxJQUFJLGlCQUFpQixFQUFFLENBQUMsR0FBQSxDQUFDLENBQzdDOzs7Ozs7OzZCQVNVLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUNqRk4sYUFBRyxDQUFDO2dCQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUUsZUFBZSxDQUFFLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FDRjtTQTdCbUc7O29CQUZwR0osYUFBVTs7Ozs7d0JBZEZXLGVBQU87d0JBSFBDLGFBQU07d0JBT04sV0FBVzs7OztZQWNsQkMsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OztZQWdCUkEsY0FBTSxFQUFFOzs7aUNBM0NWOzs7Ozs7OztRQ2VDLDRCQUFvQixRQUFzQixFQUFVLFdBQXdCO1lBQTVFLGlCQUFnRjtZQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFjO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7bUNBRzFELElBQUksQ0FBQyxRQUFRO2lCQUM3QixNQUFNLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDO2lCQUMxQyxJQUFJLENBQUNULGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGVBQWUsRUFBRSxHQUFBLENBQUMsQ0FBQzsrQkFHM0QsSUFBSSxDQUFDLFFBQVE7aUJBQ3pCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDaEQsSUFBSSxDQUNKQSxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JJLG1CQUFTLENBQUMsVUFBQyxJQUFrQztnQkFDNUMsT0FBQSxLQUFJLENBQUMsV0FBVztxQkFDZCxjQUFjLEVBQUU7cUJBQ2hCLElBQUksQ0FDSkosYUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQ3RDSyxvQkFBVSxDQUFDLGNBQU0sT0FBQUsscUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUN2RDthQUFBLENBQ0YsQ0FDRDtvQ0FHaUIsSUFBSSxDQUFDLFFBQVE7aUJBQzlCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDbEQsSUFBSSxDQUFDVixhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFBRUEsYUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7U0F6Qkg7O29CQUZoRkosYUFBVTs7Ozs7d0JBVkZXLGVBQU87d0JBS1AsV0FBVzs7OztZQVNsQkUsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OztZQWVSQSxjQUFNLEVBQUU7OztpQ0FyQ1Y7Ozs7Ozs7OztpQ0NLOEMsMENBQTBDOzJDQUMxQyxvREFBb0Q7NkNBQ3BELHNEQUFzRDs0Q0FDdEQscURBQXFEOzBCQUNyRCxtQ0FBbUM7eUJBQ25DLGtDQUFrQzs2QkFDbEMsc0NBQXNDO2tDQUN0QywyQ0FBMkM7aUNBQzNDLDBDQUEwQzs7Ozs7OztJQ05qRixxQkFBTUUsY0FBWSxHQUFVO1FBQ2xDLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QixPQUFPLEVBQUUsS0FBSztLQUNkLENBQUM7Ozs7OztBQUNGLHFCQUF3QixLQUFvQixFQUFFLE1BQWtDO1FBQXhELHNCQUFBO1lBQUEsc0JBQW9COztRQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssK0JBQStCLENBQUMsdUJBQXVCLEVBQUU7Z0JBQzdELG9CQUNJLEtBQUssRUFDUDthQUNGO1lBQ0QsS0FBSywrQkFBK0IsQ0FBQyxpQ0FBaUMsRUFBRTtnQkFDdkUsb0JBQ0ksS0FBSyxJQUNSLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQzlDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFDdkM7YUFDRjtZQUNELEtBQUssK0JBQStCLENBQUMsbUNBQW1DLEVBQUU7Z0JBQ3pFLG9CQUNJLEtBQUssRUFDUDthQUNGO1lBQ0QsS0FBSywrQkFBK0IsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEQsb0JBQ0ksS0FBSyxJQUNSLE9BQU8sRUFBRSxJQUFJLElBQ1o7YUFDRjtZQUNELEtBQUssK0JBQStCLENBQUMsZUFBZSxFQUFFO2dCQUNyRCxvQkFDSSxLQUFLLElBQ1IsT0FBTyxFQUFFLEtBQUssSUFDYjthQUNGO1lBRUQsU0FBUztnQkFDUixPQUFPLEtBQUssQ0FBQzthQUNiO1NBQ0Q7S0FDRDtBQUVELElBQU8scUJBQUkscUJBQXFCLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsaUJBQWlCLEdBQUEsQ0FBQztBQUM3RSxJQUFPLHFCQUFJLFNBQVMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEdBQUEsQ0FBQzs7Ozs7Ozs7eUJDL0NwQixrQ0FBa0M7Z0NBQ2xDLHlDQUF5QztrQ0FDekMsMkNBQTJDO2lDQUMzQywwQ0FBMEM7O0lBRzdFLElBQUE7UUFFUSx3QkFBbUIsT0FBb0M7WUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7d0JBRHZDLHlCQUF5QixDQUFDLGVBQWU7U0FDRzs2QkFacEU7UUFhQyxDQUFBOzs7Ozs7QUNaRCxJQUtPLHFCQUFNQSxjQUFZLEdBQVU7UUFDbEMsTUFBTSxFQUFFLFVBQVU7S0FDbEIsQ0FBQzs7Ozs7O0FBQ0YsdUJBQXdCLEtBQW9CLEVBQUUsTUFBNEI7UUFBbEQsc0JBQUE7WUFBQSxzQkFBb0I7O1FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDbEIsS0FBSyx5QkFBeUIsQ0FBQyxlQUFlLEVBQUU7Z0JBQy9DLE9BQU87b0JBQ04sTUFBTSxFQUFFLE9BQU87aUJBQ2YsQ0FBQzthQUNGO1lBQ0QsS0FBSyx5QkFBeUIsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDdEQsT0FBTztvQkFDTixNQUFNLEVBQUUsU0FBUztpQkFDakIsQ0FBQzthQUNGO1lBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx3QkFBd0IsRUFBRTtnQkFDeEQsT0FBTztvQkFDTixNQUFNLEVBQUUsU0FBUztpQkFDakIsQ0FBQzthQUNGO1lBQ0QsS0FBSyx5QkFBeUIsQ0FBQyx1QkFBdUIsRUFBRTtnQkFDdkQsT0FBTztvQkFDTixNQUFNLEVBQUUsUUFBUTtpQkFDaEIsQ0FBQzthQUNGO1lBRUQsU0FBUztnQkFDUixPQUFPQSxjQUFZLENBQUM7YUFDcEI7U0FDRDtLQUNEOzs7Ozs7QUNuQ0QsSUFLTyxxQkFBTUEsY0FBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxVQUFVO0tBQ2xCLENBQUM7Ozs7OztBQUNGLHVCQUF3QixLQUFvQixFQUFFLE1BQXlCO1FBQS9DLHNCQUFBO1lBQUEsc0JBQW9COztRQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssc0JBQXNCLENBQUMsWUFBWSxFQUFFO2dCQUN6QyxPQUFPO29CQUNOLE1BQU0sRUFBRSxPQUFPO2lCQUNmLENBQUM7YUFDRjtZQUNELEtBQUssc0JBQXNCLENBQUMsa0JBQWtCLEVBQUU7Z0JBQy9DLE9BQU87b0JBQ04sTUFBTSxFQUFFLFNBQVM7aUJBQ2pCLENBQUM7YUFDRjtZQUNELEtBQUssc0JBQXNCLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ2pELE9BQU87b0JBQ04sTUFBTSxFQUFFLFNBQVM7aUJBQ2pCLENBQUM7YUFDRjtZQUNELEtBQUssc0JBQXNCLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ2hELE9BQU87b0JBQ04sTUFBTSxFQUFFLFFBQVE7aUJBQ2hCLENBQUM7YUFDRjtZQUVELFNBQVM7Z0JBQ1IsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO0tBQ0Q7Ozs7Ozs7O2dCQy9CWSx1QkFBdUI7c0JBQ2pCLDZCQUE2Qjt3QkFDM0IsK0JBQStCO3VCQUNoQyw4QkFBOEI7NkJBQ3hCLG9DQUFvQzs7SUFHOUQsSUFBQTtRQUVJLGdCQUFtQixPQUFpQztZQUFqQyxZQUFPLEdBQVAsT0FBTyxDQUEwQjt3QkFEcEMsaUJBQWlCLENBQUMsTUFBTTtTQUNpQjtxQkFkN0Q7UUFlQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUksMkJBQW1CLE9BQWlDO1lBQWpDLFlBQU8sR0FBUCxPQUFPLENBQTBCO3dCQURwQyxpQkFBaUIsQ0FBQyxZQUFZO1NBQ1c7Z0NBbEI3RDtRQW1CQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUksdUJBQW1CLE9BQWtDO1lBQWxDLFlBQU8sR0FBUCxPQUFPLENBQTJCO3dCQURyQyxpQkFBaUIsQ0FBQyxjQUFjO1NBQ1U7NEJBdEI5RDtRQXVCQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDb0IsaUJBQWlCLENBQUMsYUFBYTs7MkJBekJuRDtRQTBCQyxDQUFBOzs7Ozs7SUNsQk0scUJBQU1BLGNBQVksR0FBVTtRQUNsQyxNQUFNLEVBQUUsVUFBVTtRQUNsQixJQUFJLG9CQUFFLEVBQStCLENBQUE7S0FDckMsQ0FBQzs7Ozs7O0FBQ0YsdUJBQXdCLEtBQW9CLEVBQUUsTUFBb0I7UUFBMUMsc0JBQUE7WUFBQSxzQkFBb0I7O1FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDbEIsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsT0FBTyxFQUNmLElBQUksRUFBRSxJQUFJbkIsd0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQ3BDO2FBQ0Y7WUFDRCxLQUFLLGlCQUFpQixDQUFDLFlBQVksRUFBRTtnQkFDcEMsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLElBQ2hCO2FBQ0Y7WUFDRCxLQUFLLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtnQkFDdEMsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxJQUNuQjthQUNGO1lBQ0QsS0FBSyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3JDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUNmO2FBQ0Y7WUFDRCxLQUFLLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFO2dCQUMzQyxPQUFPbUIsY0FBWSxDQUFDO2FBQ3BCO1lBRUQsU0FBUztnQkFDUixPQUFPLEtBQUssQ0FBQzthQUNiO1NBQ0Q7S0FDRDtBQUVELElBQU8scUJBQUlDLFdBQVMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxNQUFNLEdBQUEsQ0FBQzs7Ozs7O0FDbER0RCx5QkFnQmEsWUFBWSxHQUFHO1FBQzNCLElBQUksRUFBRUMsV0FBdUI7UUFDN0Isb0JBQW9CLEVBQUVDLE9BQW1DO1FBQ3pELGNBQWMsRUFBRUMsU0FBc0I7UUFDdEMsVUFBVSxFQUFFQyxTQUFxQjtRQUNqQyxXQUFXLEVBQUVDLFNBQTBCO0tBQ3ZDLENBQUM7O0FBUUYseUJBQWEsa0JBQWtCLEdBQUdDLHdCQUFxQixDQUFZLE1BQU0sQ0FBQyxDQUFDO0FBRTNFLElBQU8scUJBQU0sd0JBQXdCLEdBQUdDLGlCQUFjLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDO0FBQ3BILElBQU8scUJBQU0sVUFBVSxHQUFHQSxpQkFBYyxDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQztBQUV0RyxJQUFPLHFCQUFNLCtCQUErQixHQUFHQSxpQkFBYyxDQUM1RCxrQkFBa0IsRUFDbEIsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLG9CQUFvQixHQUFBLENBQ2hELENBQUM7QUFDRixJQUFPLHFCQUFNQyx1QkFBcUIsR0FBR0QsaUJBQWMsQ0FDbEQsK0JBQStCLEVBQy9CRSxxQkFBaUQsQ0FDakQsQ0FBQztBQUNGLElBQU8scUJBQU0sNkJBQTZCLEdBQUdGLGlCQUFjLENBQzFELCtCQUErQixFQUMvQkcsU0FBcUMsQ0FDckMsQ0FBQzs7QUFHRix5QkFBYSx5QkFBeUIsR0FBR0gsaUJBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FBQztBQUM5Ryx5QkFBYUksZ0JBQWMsR0FBR0osaUJBQWMsQ0FBQyx5QkFBeUIsRUFBRUssY0FBMEIsQ0FBQyxDQUFDOzs7QUFJcEcsSUFBTyxxQkFBTSxpQkFBaUIsR0FBR0wsaUJBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsVUFBVSxHQUFBLENBQUMsQ0FBQztBQUM1RyxJQUFPLHFCQUFNLGVBQWUsR0FBR0EsaUJBQWMsQ0FBQyxpQkFBaUIsRUFBRU0sV0FBdUIsQ0FBQyxDQUFDOzs7Ozs7O0FDdkQxRjs7UUFrQkMscUNBQW9CLEtBQWtDO1lBQWxDLFVBQUssR0FBTCxLQUFLLENBQTZCO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNDLGdCQUF5QixDQUFDLENBQUM7O1NBRTFEOzs7O1FBRUQsOENBQVE7OztZQUFSLGVBQWE7O29CQWhCYkMsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSxzSUFHSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxrM0NBQWszQyxDQUFDO3FCQUM1M0M7Ozs7O3dCQVhRN0IsUUFBSzs7OzBDQUhkOzs7Ozs7Ozs7Ozs7QUNBQTtRQTZCQyxpQ0FBb0Isd0JBQWtELEVBQVUsS0FBaUI7WUFBN0UsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtZQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7WUFDaEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxjQUFjLEdBQUEsQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1o7b0JBQ0MsS0FBSyxFQUFFLG9CQUFvQjtvQkFDM0IsS0FBSyxFQUFFLHFCQUFxQjs7b0JBRTVCLElBQUksRUFBRSxhQUFhO2lCQUNuQjtnQkFDRDtvQkFDQyxLQUFLLEVBQUUsNkJBQTZCO29CQUNwQyxLQUFLLEVBQUUsaUJBQWlCOztvQkFFeEIsSUFBSSxFQUFFLFVBQVU7aUJBQ2hCO2FBQ0QsQ0FBQztTQUNGOzs7O1FBRUQsaURBQWU7OztZQUFmLGVBQW9COztvQkF6Q3BCNkIsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFFBQVEsRUFBRSxtMEJBZUo7d0JBQ04sTUFBTSxFQUFFLENBQUMscVNBQXFTLENBQUM7cUJBQy9TOzs7Ozt3QkF0QlEsd0JBQXdCO3dCQUN4QjdCLFFBQUs7OztzQ0FKZDs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDaUJDLHFCQUFvQixRQUFzQixFQUFVSyxTQUFjLEVBQVUsT0FBb0I7WUFBNUUsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUFVLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTs7Ozs7Ozs7bUNBVTlFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDeUIsZ0NBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUM1RTVCLGFBQUcsQ0FBQztnQkFDSCxPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUNGOzRCQUVVLElBQUksQ0FBQyxRQUFRO2lCQUN0QixNQUFNLENBQUM0QixnQ0FBaUIsQ0FBQyxPQUFPLENBQUM7aUJBQ2pDLElBQUksQ0FBQzVCLGFBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxxQkFBcUIsbUJBQUMsRUFBZSxFQUFDLEdBQUEsQ0FBQyxDQUFDO1NBbEJ1Qzs7b0JBRnBHSixhQUFVOzs7Ozt3QkFWRlcsZUFBTzt3QkFKUEMsYUFBTTt3QkFTTixXQUFXOzs7O1lBZ0JsQkMsY0FBTSxFQUFFOzs7O1lBTVJBLGNBQU0sRUFBRTs7OzBCQWhDVjs7Ozs7OztBQ0FBO1FBcURDLHlCQUFvQixLQUFxQztZQUFyQyxVQUFLLEdBQUwsS0FBSyxDQUFnQzs2QkFIN0NqQix3QkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUzttQ0FDRixJQUFJRSxvQkFBZSxDQUFDLEtBQUssQ0FBQztpQ0FDNUIsSUFBSUEsb0JBQWUsQ0FBQyxLQUFLLENBQUM7WUFFbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQ21DLGdCQUE2QixDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQ0MsZUFBOEIsQ0FBQyxDQUFDO1NBQ3JFOzs7O1FBRUQsa0NBQVE7OztZQUFSO2dCQUFBLGlCQUVDO2dCQURBLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDMUc7Ozs7UUFDRCxnQ0FBTTs7O1lBQU47Z0JBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdEQ7O29CQXBEREgsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNHVDQThCQzt3QkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ1o7Ozs7O3dCQTFDUTdCLFFBQUs7Ozs4QkFKZDs7Ozs7OztBQ0FBO1FBd0NROzRCQVJxQixJQUFJaUMsZUFBWSxFQUFFO1NBUXRCOzs7O1FBTmpCLDBDQUFROzs7WUFBUjthQUNDOzs7O1FBRUQsd0NBQU07OztZQUFOO2FBQ0M7Ozs7UUFJRCxnREFBYzs7O1lBQWQ7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzNDOztvQkFyQ1JKLFlBQVMsU0FBQzt3QkFDSCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsK2hDQWlCWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ25COzs7OztnQ0FFUUssUUFBSzsrQkFDTEMsU0FBTTs7c0NBaENmOzs7Ozs7O0FDQUE7UUFnQ0MsOEJBQW9COUIsU0FBYztZQUFkLFdBQU0sR0FBTkEsU0FBTSxDQUFROzRCQUxiLElBQUk0QixlQUFZLEVBQUU7U0FLRDs7OztRQUV0Qyx1Q0FBUTs7O1lBQVIsZUFBYTs7Ozs7UUFDYiwwQ0FBVzs7OztZQUFYLFVBQVlHLE9BQWU7Z0JBQzFCLElBQUksQ0FBQ0EsT0FBSSxDQUFDLEtBQUs7b0JBQUUsT0FBTztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUNBLE9BQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQjs7OztRQUNELHFDQUFNOzs7WUFBTjtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUM7YUFDL0I7O29CQWpDRFAsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsa3FCQWNKO3FCQUNOOzs7Ozt3QkFuQndCbkIsYUFBTTs7OzsrQkFxQjdCeUIsU0FBTTsrQkFDTkQsUUFBSzs2QkFDTEEsUUFBSzs2QkFDTEEsUUFBSyxTQUFDLE9BQU87NkJBQ2JBLFFBQUs7O21DQS9CUDs7Ozs7OztBQ0FBO1FBZ0VRLHVDQUNlO1lBQUEsYUFBUSxHQUFSLFFBQVE7NkJBakJELElBQUlELGVBQVksRUFBcUM7NENBY2hELElBQUlyQywrQkFBZSxDQUFDLEtBQUssQ0FBQztZQUs3QyxJQUFJLENBQUMsTUFBTSxHQUFHZ0IscUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztpQkFDN0IsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDO2lCQUNmLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFBLENBQUM7aUJBQy9CLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFBLENBQUMsQ0FBQztTQUN6QztRQWxCRCxzQkFBYSxrREFBTzs7OztnQkFBcEIsVUFBcUIsU0FBa0I7Z0JBQy9CLElBQUksU0FBUyxFQUFFO29CQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2hDO2dCQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0I7OztXQUFBOzs7O1FBY0QsZ0RBQVE7OztZQUFSO2dCQUFBLGlCQU1DO2dCQUxPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO29CQUM3QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7d0JBQ04sS0FBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDaEQ7aUJBQ1IsQ0FBQyxDQUFBO2FBQ1Q7Ozs7UUFFRCw4Q0FBTTs7O1lBQU47Z0JBQ1EsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMscUJBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTswQkFDN0MsZUFBZTswQkFDZixrQ0FBa0MsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTt3QkFDeEIsUUFBUSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQTtpQkFDVDthQUNSOztvQkFuRlJpQixZQUFTLFNBQUM7d0JBQ0gsUUFBUSxFQUFFLDZCQUE2Qjt3QkFDdkMsUUFBUSxFQUFFLDgwRUFrQ2pCO3dCQUNPLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDbkI7Ozs7O3dCQXpDUVEsb0JBQVc7Ozs7Z0NBMkNYRixTQUFNO2dDQUVORCxRQUFLO3dDQUNMQSxRQUFLO29DQUNMQSxRQUFLOzhCQUNMQSxRQUFLOzs0Q0FyRGQ7Ozs7Ozs7O1FDWUMsdUJBQW9CLFFBQXNCLEVBQVUsV0FBd0I7WUFBNUUsaUJBQWdGO1lBQTVELGFBQVEsR0FBUixRQUFRLENBQWM7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTs4QkFHL0QsSUFBSSxDQUFDLFFBQVE7aUJBQ3hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7aUJBQ2hDLElBQUksQ0FBQ2hDLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQzsyQkFHckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUNsRUEsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCSSxtQkFBUyxDQUFDLFVBQUMsSUFBOEI7Z0JBQ3hDLE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN6Q0osYUFBRyxDQUFDLFVBQUEsR0FBRztvQkFDTixPQUFPLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDakUsQ0FBQyxFQUNGSyxvQkFBVSxDQUFDLGNBQU0sT0FBQUMsS0FBRSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQ3hDLENBQUM7YUFDRixDQUFDLENBQ0Y7U0FsQitFOztvQkFGaEZWLGFBQVU7Ozs7O3dCQVJGVyxlQUFPO3dCQUtQLFdBQVc7Ozs7WUFPbEJFLGNBQU0sRUFBRTs7OztZQUtSQSxjQUFNLEVBQUU7Ozs0QkFuQlY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7UUFZQyxtQ0FBb0IsS0FBcUIsRUFBVSxLQUFxQztZQUF4RixpQkFLQztZQUxtQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtZQUFVLFVBQUssR0FBTCxLQUFLLENBQWdDO1lBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2pDLHFCQUFJLEtBQUssR0FBRyxJQUFJakIsd0JBQWdCLENBQUMsT0FBTyxtQkFBQyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQU0sRUFBOEIsRUFBQyxDQUFDO2dCQUM5RixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztTQUNIOztvQkFURG1DLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsaUNBQWlDO3FCQUMzQzs7Ozs7d0JBUlFTLHFCQUFjO3dCQURkdEMsUUFBSzs7O3dDQURkOzs7Ozs7O0FDQUE7UUFvQkMsMENBQW9CLEtBQXFCLEVBQVUsS0FBcUM7WUFBcEUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQzs2QkFGNUVYLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxTQUFTO3VDQUMzQixJQUFJQSwyQkFBbUIsQ0FBQyxPQUFPLEVBQUU7U0FDcUM7Ozs7UUFFNUYsbURBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDMEMsZ0JBQTZCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO29CQUNsRSxJQUFJLENBQUMsUUFBUTt3QkFBRSxPQUFPOzs7aUJBR3RCLENBQUMsQ0FBQzthQUNIOzs7OztRQUNELHlEQUFjOzs7O1lBQWQsVUFBZSxLQUFLO2dCQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFFekUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzthQUNsRTs7b0JBdEJERixZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLCtKQUc0QjtxQkFDdEM7Ozs7O3dCQWRRUyxxQkFBYzt3QkFFZHRDLFFBQUs7OzsrQ0FKZDs7Ozs7OztBQ0FBO1FBNEJDLHVDQUFvQixLQUFxQyxFQUFVLGFBQXVDO1lBQXRGLFVBQUssR0FBTCxLQUFLLENBQWdDO1lBQVUsa0JBQWEsR0FBYixhQUFhLENBQTBCO1lBQ3pHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQytCLGdCQUE2QixDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztpQkFDdEIsTUFBTSxDQUFDUSxtQkFBWSxDQUFDO2lCQUNwQixNQUFNLENBQUMsVUFBQXRDLFNBQU0sSUFBSSxPQUFBQSxTQUFNLElBQUksU0FBUyxHQUFBLENBQUM7aUJBQ3JDLEdBQUcsQ0FBQyxVQUFBQSxTQUFNLElBQUksT0FBQUEsU0FBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUEsQ0FBQyxDQUFDOzs7WUFHckMsSUFBSSxDQUFDLE1BQU0sR0FBR1cscUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxPQUFPLEVBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzFDOzs7O1FBRUQsZ0RBQVE7OztZQUFSLGVBQWE7Ozs7O1FBRWIscURBQWE7Ozs7WUFBYixVQUFjLElBQUk7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDM0M7O29CQWhDRGlCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsZ1NBTW9CO3FCQUM5Qjs7Ozs7d0JBbkJRN0IsUUFBSzt3QkFPTCx3QkFBd0I7Ozs0Q0FWakM7Ozs7Ozs7QUNBQTtRQWlGQzt3QkFEYyxFQUFFO1NBQ0E7UUFSaEIsc0JBQ0kseUNBQVc7Ozs7Z0JBRGYsVUFDZ0IsV0FBc0I7Z0JBRHRDLGlCQUtDO2dCQUhBLElBQUksQ0FBQyxXQUFXO29CQUFFLE9BQU87Z0JBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDN0U7OztXQUFBOzs7O1FBS0QsbUNBQVE7OztZQUFSLGVBQWE7O29CQTdFYjZCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHcrRkE2REo7d0JBQ04sTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNaOzs7OztrQ0FFQ0ssUUFBSztrQ0FNTEEsUUFBSzs7K0JBL0VQOzs7Ozs7O0FDQUE7UUFrQkMsbUNBQW9CLEtBQXFDO1lBQXJDLFVBQUssR0FBTCxLQUFLLENBQWdDO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNILGdCQUE2QixDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQ1Msd0JBQXVDLENBQUMsQ0FBQztTQUM5RTs7OztRQUVELDRDQUFROzs7WUFBUixlQUFhOztvQkFmYlgsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSwySUFHa0I7cUJBQzVCOzs7Ozt3QkFWUTdCLFFBQUs7Ozt3Q0FIZDs7Ozs7OztBQ0FBOzs7Ozs7O1FBK0VRLHFCQUFPOzs7O1lBQWQsVUFBZUMsU0FBeUI7Z0JBQ3ZDLE9BQU87b0JBQ04sUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFQSxTQUFNLEVBQUUsQ0FBRTtpQkFDakUsQ0FBQzthQUNGOztvQkExQ0R3QyxXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyxtQkFBZ0I7NEJBQ2hCQyxpQkFBVzs0QkFDWEMsbUJBQVk7NEJBQ1pDLG1CQUFZOzRCQUNaQywyQkFBa0I7NEJBQ2xCQywwQkFBaUI7NEJBQ2pCQyxzQkFBYTs0QkFDYkMsd0JBQWU7NEJBQ2ZDLHNCQUFhOzRCQUNiQyx3QkFBZTs0QkFDZkMsdUJBQWM7NEJBQ2RDLDJCQUFrQjs0QkFDbEJDLHNCQUFhOzRCQUNiQywyQkFBZ0I7NEJBQ2hCQyx1QkFBYzs0QkFDZEMseUJBQW1COzRCQUNuQkMsa0NBQXVCOzRCQUN2QkMsa0JBQWE7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFOzRCQUNiLGVBQWU7NEJBQ2YsZ0JBQWdCOzRCQUNoQix1QkFBdUI7NEJBQ3ZCLG9CQUFvQjs0QkFDcEIseUJBQXlCOzRCQUN6Qix1QkFBdUI7NEJBQ3ZCLDZCQUE2Qjs0QkFDN0IseUJBQXlCOzRCQUN6QiwyQkFBMkI7NEJBQzNCLGdDQUFnQzs0QkFDaEMsNkJBQTZCO3lCQUM3Qjt3QkFDRCxPQUFPLEVBQUUsRUFBRTtxQkFDWDs7NEJBN0VEOzs7Ozs7b0JBdUZDbEIsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUixhQUFhOzRCQUNibUIsY0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDOzRCQUM1Q0MscUJBQWEsQ0FBQyxVQUFVLENBQUM7Z0NBRXhCLGtCQUFrQjtnQ0FFbEIsa0JBQWtCO2dDQUVsQixXQUFXOzZCQUNYLENBQUM7eUJBQ0Y7cUJBQ0Q7O2dDQXBHRDs7Ozs7OztBQ0NBLHlCQVVhLE1BQU0sR0FBVztRQUM3QjtZQUNDLElBQUksRUFBRSxZQUFZO1lBQ2xCLFNBQVMsRUFBRSwyQkFBMkI7WUFDdEMsUUFBUSxFQUFFO2dCQUNUO29CQUNDLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSx1QkFBdUI7aUJBQ2xDO2dCQUNEO29CQUNDLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSx5QkFBeUI7aUJBQ3BDO2dCQUNEO29CQUNDLElBQUksRUFBRSxjQUFjO29CQUNwQixTQUFTLEVBQUUsNkJBQTZCO2lCQUN4QztnQkFDRDtvQkFDQyxJQUFJLEVBQUUsaUJBQWlCO29CQUN2QixTQUFTLEVBQUUsZ0NBQWdDO2lCQUMzQzthQUNEO1NBQ0Q7UUFDRDtZQUNDLElBQUksRUFBRSxZQUFZO1lBQ2xCLFFBQVEsRUFBRTtnQkFDVCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTtnQkFDakQ7b0JBQ0MsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsU0FBUyxFQUFFLHlCQUF5QjtvQkFDcEMsUUFBUSxFQUFFO3dCQUNUOzRCQUNDLElBQUksRUFBRSxjQUFjOzRCQUNwQixTQUFTLEVBQUUsNkJBQTZCO3lCQUN4Qzt3QkFDRDs0QkFDQyxJQUFJLEVBQUUsaUJBQWlCOzRCQUN2QixTQUFTLEVBQUUsZ0NBQWdDO3lCQUMzQztxQkFDRDtpQkFDRDthQUNEO1NBQ0Q7S0FDRCxDQUFDO0FBRUYseUJBQWEsb0JBQW9CLEdBQXdCakIsbUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUN4RHRGO1FBY0MsMkJBQW9CLEtBQXNCLEVBQVUsYUFBdUM7WUFBdkUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7U0FBSTs7OztRQUMvRiwwQ0FBYzs7O1lBQWQ7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQ25CLGdCQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7YUFFdkc7O29CQVJEM0IsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7d0JBWFFFLFFBQUs7d0JBS0wsd0JBQXdCOzs7O2dDQU5qQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
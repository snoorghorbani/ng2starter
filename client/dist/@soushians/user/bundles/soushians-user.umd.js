(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@soushians/shared'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/Observable'), require('@soushians/authentication'), require('rxjs'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@soushians/form'), require('rxjs/Rx')) :
    typeof define === 'function' && define.amd ? define('@soushians/user', ['exports', '@angular/core', '@angular/forms', '@soushians/shared', '@ngrx/store', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/common/http', 'rxjs/operators', '@angular/router', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/Observable', '@soushians/authentication', 'rxjs', '@angular/material', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@soushians/form', 'rxjs/Rx'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.user = {}),global.ng.core,global.ng.forms,null,null,global.rxjs.BehaviorSubject,null,global.ng.common.http,global.rxjs.operators,global.ng.router,null,global.rxjs['observable/of'],global.rxjs.Observable,null,global.rxjs,global.ng.material,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,null,global.rxjs.Rx));
}(this, (function (exports,i0,forms,shared,i2,BehaviorSubject,config,i1,operators,router,effects,of,Observable,authentication,rxjs,material,common,flexLayout,animations,form,Rx) { 'use strict';

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
        dashboardLinks: [],
        responseToUserInfo: function (user$) { return user$; },
        mapUserDisplayName: function (user$) { return user$.map(function (user) { return user.DisplayName; }); }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("UserModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserModel = (function () {
        function UserModel() {
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
                 */ function () {
                    return new forms.FormGroup({
                        Email: new forms.FormControl(null, [forms.Validators.required]),
                        Roles: new forms.FormControl(null, [forms.Validators.required]),
                        Groups: new forms.FormControl(null, [forms.Validators.required]),
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
    var /** @type {?} */ getUser = function (state) { return state.data; };

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
                    return _this.http
                        .get(config$$1.endpoints.profileInformation)
                        .let(config$$1.responseToUserInfo)
                        .pipe(operators.map(function (response) { return response; }));
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
                    .map(function (response) {
                    return new exports.EditProfile_ApiModel.Response(response).extractData();
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
                var /** @type {?} */ model = new exports.ProfileViewModel.Request(data);
                return this.http
                    .get(shared.stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
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
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.userService.getAccountInfo(); }), operators.map(function (res) { return new GetProfileSucceed(res); }), operators.catchError(function () { return Observable.Observable.of(new GetProfileFailed()); }));
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
    var ChangePasswordStart = (function () {
        function ChangePasswordStart(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
        }
        return ChangePasswordStart;
    }());
    var ChangePasswordSucceed = (function () {
        function ChangePasswordSucceed(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
        }
        return ChangePasswordSucceed;
    }());
    var ChangePasswordFailed = (function () {
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
    var /** @type {?} */ selectFeatureState = i2.createFeatureSelector("user");
    var /** @type {?} */ getUserInforamtionStatus = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ isSignedIn = i2.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ selectResetPasswordRequestState = i2.createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
    var /** @type {?} */ getNumberOfRequeseted$1 = i2.createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
    var /** @type {?} */ getResetPasswordRequestStatus = i2.createSelector(selectResetPasswordRequestState, getStatus);
    //#region user
    var /** @type {?} */ selectUserInformaionState = i2.createSelector(selectFeatureState, function (state) { return state.user; });
    var /** @type {?} */ getUser$1 = i2.createSelector(selectUserInformaionState, getUser);
    //#endregion
    //#region search
    var /** @type {?} */ selectSearchState = i2.createSelector(selectFeatureState, function (state) { return state.searchView; });
    var /** @type {?} */ getSearchStatus = i2.createSelector(selectSearchState, getStatus$3);
    var /** @type {?} */ getUserInfo$1 = i2.createSelector(selectSearchState, getUserInfo);
    //#endregion

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DashboardContainerComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "user-dashboard-links",
                        template: "<div fxLayout='row' fxLayoutWrap id=\"con\">\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n    <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>\n        <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>{{link.icon}}</mat-icon>\n            <h3 class='title'>{{link.title}}</h3>\n            <div class='description'>{{link.description}}</div>\n        </div>\n    </button>\n</div>",
                        styles: ["#con [fxflex]{margin-right:25px}:host{width:100%}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}"]
                    },] },
        ];
        /** @nocollapse */
        DashboardLinksComponent.ctorParameters = function () {
            return [
                { type: UserConfigurationService }
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
            { type: i0.Component, args: [{
                        selector: "search",
                        template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          {{(user | async).LastName }}\u060C {{(user | async).FirstName }}\n        </div>\n        <div fxFlex=\"nogrow\">\n          {{(user | async).Email}}\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
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
        function ProfileEditComponent() {
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
            { type: i0.Component, args: [{
                        selector: "profile-edit",
                        template: "<div fxFlex=\"450px\">\n\n  \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <!-- <ngs-form-view [id]=\"formId\"></ngs-form-view> -->\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        ProfileEditComponent.ctorParameters = function () { return []; };
        ProfileEditComponent.propDecorators = {
            submited: [{ type: i0.Output }],
            formId: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }],
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
            this.formGroup = exports.EditProfile_ApiModel.Request.formGroup;
            this.userInforamation$ = this.store.select(getUser$1);
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
            { type: i0.Component, args: [{
                        selector: "profile-edit-contianer",
                        template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [formGroup]=\"formGroup\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
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
            this.sex$ = new BehaviorSubject.BehaviorSubject('');
            this.identifierType$ = new BehaviorSubject.BehaviorSubject('');
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
            { type: i0.Component, args: [{
                        selector: 'user-profile',
                        template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
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
            { type: i0.Component, args: [{
                        template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
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
    var PasswordService = (function () {
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
                    .switchMap(function (count) { return (count < 3 ? Rx.Observable.of(true) : Rx.Observable.of(false)); });
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
                var /** @type {?} */ model = new exports.ResetPasswordModel.Request(data);
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
                var /** @type {?} */ model = new exports.ResetPasswordRequestModel.Request(data);
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
                var /** @type {?} */ model = new exports.ChangePasswordModel.Request(data);
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
                var /** @type {?} */ model = new exports.ResetPasswordModel.Request(data);
                var Token = model.Token;
                return this.http
                    .patch("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, model.getRequestBody(), {
                    withCredentials: true
                })
                    .map(function (response) { return response; });
            };
        PasswordService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        PasswordService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: UserConfigurationService }
            ];
        };
        /** @nocollapse */ PasswordService.ngInjectableDef = i0.defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(UserConfigurationService)); }, token: PasswordService, providedIn: "root" });
        return PasswordService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordEffects = (function () {
        function ChangePasswordEffects(actions$, router$$1, passwordService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.passwordService = passwordService;
            this.ChangePasswordRequest$ = this.actions$
                .ofType(ChangePasswordActionTypes.CHANGE_PASSWORD)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new ChangePasswordStart(data); }));
            this.RequestChangePasswordLink$ = this.actions$.ofType(ChangePasswordActionTypes.PASSWORD_CHANGED_START).pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.passwordService
                    .changePassword(data)
                    .map(function (res) { return new ChangePasswordSucceed(res); })
                    .catch(function () { return Observable.Observable.of(new ChangePasswordFailed()); });
            }));
        }
        ChangePasswordEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ChangePasswordEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: PasswordService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
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
                var _this = this;
                return this.configService.config$
                    .map(function (config$$1) { return config$$1.mapUserDisplayName; })
                    .switchMap(function (mapper) { return _this.store.select(getUser$1).let(mapper); });
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
    exports.getUserInfo = getUserInfo$1;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.UserModel = UserModel;
    exports.FailedLoginModel = FailedLoginModel;
    exports.NgsUserModule = NgsUserModule;
    exports.RootNgsUserModule = RootNgsUserModule;
    exports.routes = routes;
    exports.NgsUserRoutingModule = NgsUserRoutingModule;
    exports.ɵbe = ChangePasswordContainerComponent;
    exports.ɵp = ChangePasswordContainerComponent;
    exports.ɵt = reducer$1;
    exports.ɵh = ChangePasswordComponent;
    exports.ɵba = DashboardContainerComponent;
    exports.ɵbb = DashboardLinksComponent;
    exports.ɵo = DashboardContainerComponent;
    exports.ɵk = DashboardLinksComponent;
    exports.ɵr = userReducer;
    exports.ɵbg = FeatureContainerComponent;
    exports.ɵn = FeatureContainerComponent;
    exports.ɵz = UserEffects;
    exports.ɵbd = ProfileEditContainerComponent;
    exports.ɵx = EditProfileEffects;
    exports.ɵw = reducer$2;
    exports.ɵq = ProfileEditContainerComponent;
    exports.ɵi = ProfileEditComponent;
    exports.ɵbc = ProfileContainerComponent;
    exports.ɵj = ProfileContainerComponent;
    exports.ɵy = ProfileViewEffects;
    exports.ɵg = ProfileComponent;
    exports.ɵs = reducer;
    exports.ɵm = ResetPasswordRequestComponent;
    exports.ɵbf = SearchComponent;
    exports.ɵv = getUserInfo;
    exports.ɵu = reducer$3;
    exports.ɵf = SearchComponent;
    exports.ɵl = UserConfigurationService;
    exports.ɵb = UserReducers;
    exports.ɵd = selectFeatureState;
    exports.ɵe = selectSearchState;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy91c2VyLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Jlc2V0LXBhc3N3b3JkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL3VzZXIucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi91c2VyLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlcnZpY2VzL3Bhc3N3b3JkLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5mYWNhZGUtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvL3Jlc2V0UGFzc3dvcmRSZXF1ZXN0OiBzdHJpbmc7XHJcblx0XHRjaGFuZ2VQYXNzd29yZD86IHN0cmluZztcclxuXHRcdGVkaXRQcm9maWxlPzogc3RyaW5nO1xyXG5cdFx0Z2V0VXNlckluZm8/OiBzdHJpbmc7XHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb24/OiBzdHJpbmc7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogc3RyaW5nO1xyXG5cdH07XHJcblx0ZGFzaGJvYXJkTGlua3M/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiB7ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4gfTtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU6IHsgKHVzZXI6IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8c3RyaW5nPiB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBVc2VyTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly9yZXNldFBhc3N3b3JkUmVxdWVzdDogJycsXHJcblx0XHRjaGFuZ2VQYXNzd29yZDogXCJcIixcclxuXHRcdGVkaXRQcm9maWxlOiBcIlwiLFxyXG5cdFx0Z2V0VXNlckluZm86IFwiXCIsXHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb246IFwiXCJcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmQ6ICcnLFxyXG5cdH0sXHJcblx0Zm9ybXM6IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogXCJcIlxyXG5cdH0sXHJcblx0ZGFzaGJvYXJkTGlua3M6IFtdLFxyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbzogdXNlciQgPT4gdXNlciQsXHJcblx0bWFwVXNlckRpc3BsYXlOYW1lOiB1c2VyJCA9PiB1c2VyJC5tYXAodXNlciA9PiB1c2VyLkRpc3BsYXlOYW1lKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48VXNlck1vZHVsZUNvbmZpZz4oXCJVc2VyTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJleHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRGaXJzdE5hbWU6IHN0cmluZztcclxuXHRMYXN0TmFtZTogc3RyaW5nO1xyXG5cdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0RGlzcGxheU5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdC8vIE1vYmlsZU51bWJlcjogc3RyaW5nO1xyXG5cdC8vIFNleDogc3RyaW5nO1xyXG5cdC8vIEJpcnRoZGF0ZTogc3RyaW5nO1xyXG5cdEVtYWlsOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmljYXRpb25Obzogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpZXJUeXBlOiBzdHJpbmc7XHJcblx0Ly8gUmVnaXN0ZXJEYXRlOiBzdHJpbmc7XHJcblx0Ly8gVXNlclR5cGU6IHN0cmluZztcclxuXHRSb2xlczogc3RyaW5nW107XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRVc2VybmFtZTogc3RyaW5nO1xyXG5cdFx0UGFzc3dvcmQ6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCA9IHt9IGFzIENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNykgXSksXHJcblx0XHRcdFx0Q29uZmlybTogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgTWF0Y2hWYWxpZGF0b3IoXCJQYXNzd29yZFwiKSBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcblxyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFJlcXVlc3RCb2R5KFwicGVnYWhcIilcclxuICAgICAgICBUb2tlbjogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbignYm9keScpXHJcbiAgICAgICAgQ2FwdGNoYTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbigndXJsJylcclxuICAgICAgICAvL0BWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuICAgICAgICBUeXBlOiAnc21zJyB8ICdlbWFpbCc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IHRoaXMuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBUb2tlbjogdGhpcy5Ub2tlbixcclxuICAgICAgICAgICAgICAgIENhcHRjaGE6IHRoaXMuQ2FwdGNoYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFR5cGU6IG5ldyBGb3JtQ29udHJvbCgnc21zJyksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0XHRUb2tlbjogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0XHQvL1Rva2VuOiB0aGlzLlRva2VuLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBFZGl0UHJvZmlsZV9BcGlNb2RlbCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZXM6IHN0cmluZ1tdO1xyXG4gICAgICAgIEdyb3Vwczogc3RyaW5nW107XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogUmVxdWVzdCA9IHt9IGFzIFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiB0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSZXF1ZXN0Qm9keSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgRW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgUm9sZXM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG4gICAgICAgICAgICAgICAgR3JvdXBzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPntcclxuICAgICAgICBSZXN1bHQ6IHsgVXNlcjogVXNlck1vZGVsIH07XHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHRyYWN0RGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSB5W29wWzBdICYgMiA/IFwicmV0dXJuXCIgOiBvcFswXSA/IFwidGhyb3dcIiA6IFwibmV4dFwiXSkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbMCwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFByb2ZpbGVWaWV3TW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgVXNlck1vZGVsIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGYWlsZWRMb2dpbk1vZGVsIH0gZnJvbSAnLi9mYWlsZWQtbG9naW4ubW9kZWwnO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcbiAgICAgICAgVXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFZhbHVlPzogRmFpbGVkTG9naW5SZXBvcnRNb2RlbC5SZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmVxdWVzdEJvZHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSAge1xyXG4gICAgICAgIGRhdGE6IEZhaWxlZExvZ2luTW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEZhaWxlZExvZ2luTW9kZWwge1xyXG4gICAgVXNlcm5hbWU6IHN0cmluZztcclxuICAgIFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBUcnlEYXRlOiBEYXRlO1xyXG4gICAgTWFjQWRkcmVzczogc3RyaW5nO1xyXG4gICAgSXBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICBSZWFzb246IHN0cmluZztcclxufSIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0VXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL3VzZXIuY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0VXNlck1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1BST0ZJTEUgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRVwiLFxyXG5cdEdFVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRHRVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEdFVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvZmlsZVZpZXdBY3Rpb24gPSBHZXRQcm9maWxlIHwgR2V0UHJvZmlsZVN0YXJ0IHwgR2V0UHJvZmlsZVN1Y2NlZWQgfCBHZXRQcm9maWxlRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFVzZXJBY3Rpb25UeXBlcyB7XHJcblx0VVNFUl9TRUxFQ1RFRCA9IFwiW1VTRVJdIFVTRVJfU0VMRUNURURcIixcclxuXHRSRUZSRVNIX1VTRVJfSU5GTyA9IFwiW1VTRVJdIFJFRlJFU0hfVVNFUl9JTkZPXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTZWxlY3RlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoVXNlckluZm9BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuUkVGUkVTSF9VU0VSX0lORk87XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckFjdGlvbiA9IFVzZXJTZWxlY3RlZEFjdGlvbiB8IFJlZnJlc2hVc2VySW5mb0FjdGlvbjtcclxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQWN0aW9uLCBVc2VyQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi91c2VyLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGxvYWRlZDogYm9vbGVhbjtcclxuXHRkYXRhOiBVc2VyTW9kZWw7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkYXRhOiBuZXcgVXNlck1vZGVsKClcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBVc2VyQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlciA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBFZGl0UHJvZmlsZV9BcGlNb2RlbCwgUHJvZmlsZVZpZXdNb2RlbCwgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRQcm9maWxlKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldEFjY291bnRJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldDxhbnk+KGNvbmZpZy5lbmRwb2ludHMucHJvZmlsZUluZm9ybWF0aW9uKVxyXG5cdFx0XHRcdFx0LmxldChjb25maWcucmVzcG9uc2VUb1VzZXJJbmZvKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKChyZXNwb25zZTogVXNlck1vZGVsKSA9PiByZXNwb25zZSkpXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoc3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbCksIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZSkgPT5cclxuXHRcdFx0XHRuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2UocmVzcG9uc2UpLmV4dHJhY3REYXRhKClcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0SW5mbyhkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPihcclxuXHRcdFx0XHRzdHJpbmdUZW1wbGF0ZSh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuZ2V0VXNlckluZm8sIG1vZGVsKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0aXNfcm9sZShyb2xlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0VXNlcilcclxuXHRcdFx0LmZpbHRlcih1c2VyID0+IHVzZXIgJiYgdXNlci5Sb2xlcyAhPSB1bmRlZmluZWQpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5tYXAodXNlciA9PiB1c2VyLlJvbGVzLmluZGV4T2Yocm9sZSkgPiAtMSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfUFJPRklMRSA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVcIixcclxuXHRFRElUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0RURJVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRFRElUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0UHJvZmlsZUFjdGlvbiA9XHJcblx0fCBFZGl0UHJvZmlsZVxyXG5cdHwgRWRpdFByb2ZpbGVTdGFydFxyXG5cdHwgRWRpdFByb2ZpbGVTdWNjZWVkXHJcblx0fCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKTtcclxuXHQvLyB9KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub1ZpZXckID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldFByb2ZpbGVTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFByb2ZpbGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMudXNlclNlcnZpY2UuZ2V0QWNjb3VudEluZm8oKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEdldFByb2ZpbGVGYWlsZWQoKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRyZWZyZXNoVXNlckluZm8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbihkYXRhKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcbiAgICAgICAgR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSycsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCcsXHJcbiAgICAgICAgRElTQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBFTkFCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgTUFYSU1VTV9UUllfSEFQUEVORCAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXhpbXVtVHJ5SGFwcGVuZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuTUFYSU1VTV9UUllfSEFQUEVORDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG4gICAgICAgIEdldFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydFxyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkXHJcbiAgICAgICAgfCBEaXNhYmxlR2V0TGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG4gICAgICAgIHwgRW5hYmxlR2V0TGlua1xyXG4gICAgICAgIHwgTWF4aW11bVRyeUhhcHBlbmRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZEZhaWxlZDtcclxuIiwiaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24sIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiBudW1iZXI7XHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IHN0cmluZztcclxuXHRkaXNhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiAwLFxyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBudWxsLFxyXG5cdGRpc2FibGU6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkICsgMSxcclxuXHRcdFx0XHRsYXN0UmVxdWVzdGVkVGltZTogRGF0ZS5ub3coKS50b1N0cmluZygpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQ7XHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlzYWJsZTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG4gICAgICAgIENIQU5HRV9QQVNTV09SRCAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIENIQU5HRV9QQVNTV09SRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9XHJcbiAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3RhcnRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSAnQHNvdXNoaWFucy9zaGFyZWQnO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUFjdGlvbiwgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcyB9IGZyb20gJy4vZWRpdC1wcm9maWxlLmFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogJ3ByaXN0aW5lJ1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0UHJvZmlsZUFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAnZGlydHknXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAncGVuZGluZydcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ3N1Y2NlZWQnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ2ZhaWxlZCdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaEFjdGlvblR5cGVzIHtcclxuICAgIFNFQVJDSCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0gnLFxyXG4gICAgU0VBUkNIX1NUQVJUID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVEFSVCcsXHJcbiAgICBTRUFSQ0hfU1VDQ0VFRCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1VDQ0VFRCcsXHJcbiAgICBTRUFSQ0hfRkFJTEVEID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9GQUlMRUQnLFxyXG4gICAgQ0xFQVJfU0VBUkNIRURfVVNFUiA9ICdbVVNFUl1bU0VBUkNIXSBDTEVBUl9TRUFSQ0hFRF9VU0VSJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhclNlYXJjaGVkVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaEFjdGlvbiA9XHJcbiAgICBTZWFyY2hcclxuICAgIHwgU2VhcmNoU3RhcnRBY3Rpb25cclxuICAgIHwgU2VhcmNoU3VjY2VlZFxyXG4gICAgfCBTZWFyY2hGYWlsZWRcclxuICAgIHwgQ2xlYXJTZWFyY2hlZFVzZXI7IiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hBY3Rpb25UeXBlcywgU2VhcmNoQWN0aW9uIH0gZnJvbSBcIi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IHt9IGFzIFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2VhcmNoQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIixcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG5leHBvcnQgdmFyIGdldFVzZXJJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkLCBDaGFuZ2VQYXNzd29yZEZhaWxlZCwgQ2hhbmdlUGFzc3dvcmRTdGFydCwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkXCI7XHJcbmltcG9ydCB7XHJcblx0RGlzYWJsZUdldExpbmssXHJcblx0RW5hYmxlR2V0TGluayxcclxuXHRHZXRSZXNldFBhc3N3b3JkTGluayxcclxuXHRNYXhpbXVtVHJ5SGFwcGVuZCxcclxuXHRQYXNzd29yZENoYW5nZWRGYWlsZWQsXHJcblx0UGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCxcclxuXHRSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RGYWlsZWQsXHJcblx0UmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnQsXHJcblx0UmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG59IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlLCBFZGl0UHJvZmlsZUZhaWxlZCwgRWRpdFByb2ZpbGVTdGFydCwgRWRpdFByb2ZpbGVTdWNjZWVkIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0XCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiwgVXNlclNlbGVjdGVkQWN0aW9uIH0gZnJvbSBcIi4vZGFzaGJvYXJkXCI7XHJcbmltcG9ydCB7IFNlYXJjaEZhaWxlZCwgU2VhcmNoU3RhcnRBY3Rpb24sIFNlYXJjaFN1Y2NlZWQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5cclxuLy9UT0RPIDogcmVtb3ZlIHRoZXNlIGxpbmVzXHJcbi8vaW1wb3J0IHtcclxuLy8gICAgICAgIExvZ2luLCBMb2dpblN1Y2Nlc3MsIExvZ2luRmFpbHVyZSwgTG9naW5SZWRpcmVjdCwgTG9nb3V0QWN0aW9uXHJcbi8vfSBmcm9tIFwiLi4vYWN0aW9uc1wiXHJcbi8vaW1wb3J0IHsgQ2FwdGNoYUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCJcclxuXHJcbmltcG9ydCAqIGFzIHVzZXJSZWR1Y2VyIGZyb20gXCIuL2Rhc2hib2FyZC91c2VyLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyIGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBjaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZWRpdFByb2ZpbGVSZWR1Y2VyIGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBzZWFyY2hSZWR1Y2VyIGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIuU3RhdGU7XHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5TdGF0ZTtcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLlN0YXRlO1xyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5TdGF0ZTtcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZHVjZXJzID0ge1xyXG5cdHVzZXI6IHVzZXJSZWR1Y2VyLnVzZXJSZWR1Y2VyLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlcixcclxuXHRjaGFuZ2VQYXNzd29yZDogY2hhbmdlUGFzc3dvcmQucmVkdWNlcixcclxuXHRzZWFyY2hWaWV3OiBzZWFyY2hSZWR1Y2VyLnJlZHVjZXIsXHJcblx0ZWRpdFByb2ZpbGU6IGVkaXRQcm9maWxlUmVkdWNlci5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRcInVzZXJcIjogVXNlclN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPFVzZXJTdGF0ZT4oXCJ1c2VyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuZXhwb3J0IGNvbnN0IGlzU2lnbmVkSW4gPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRlZCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuXHQoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVzZXRQYXNzd29yZFJlcXVlc3RcclxuKTtcclxuZXhwb3J0IGNvbnN0IGdldE51bWJlck9mUmVxdWVzZXRlZCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlLFxyXG5cdHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXNcclxuKTtcclxuXHJcbi8vI3JlZ2lvbiB1c2VyXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VySW5mb3JtYWlvblN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSwgdXNlclJlZHVjZXIuZ2V0VXNlcik7XHJcbi8vI2VuZHJlZ2lvblxyXG5cclxuLy8jcmVnaW9uIHNlYXJjaFxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U2VhcmNoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5zZWFyY2hWaWV3KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlYXJjaFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFN0YXR1cyk7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFNlYXJjaFN0YXRlLCBzZWFyY2hSZWR1Y2VyLmdldFVzZXJJbmZvKTtcclxuLy8jZW5kcmVnaW9uXHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgYXBwUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8IS0tIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJsaW5rc1wiPjwvcm91dGVyLW91dGxldD4gLS0+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjYm94LWxlZnR7YmFja2dyb3VuZDojZmZmfSNib3gtYm90dG9te2JhY2tncm91bmQ6IzJiMDAzM30jYm94LXJpZ2h0e2JhY2tncm91bmQ6IzAwMDgzMztwYWRkaW5nLXRvcDoxMHB4IWltcG9ydGFudDtwYWRkaW5nLWJvdHRvbToxMHB4IWltcG9ydGFudH0jYm94LXJpZ2h0IGRpdntiYWNrZ3JvdW5kOiNmZmY7b3BhY2l0eTouNX0jYmFubmVyOm5vdCguYWN0aXZlKXtoZWlnaHQ6MTAwJTstd2Via2l0LWZpbHRlcjpncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxLjUpIG9wYWNpdHkoLjIpIGJsdXIoMnB4KTtmaWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCl9I3Mxe2JhY2tncm91bmQ6I2FhYX0jczJ7YmFja2dyb3VuZDojYmJifSNzM3tiYWNrZ3JvdW5kOiNjY2N9LnBlcnNvbmFsLWluZm97YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDoxMCU7d2lkdGg6OTAlO2hlaWdodDo0NjlweH0ucGVyc29uYWwtaW5mbyBoMntjb2xvcjojMDBiY2Q0O2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MjRweDtmb250LWZhbWlseTppcmFuLXNhbnMtbGlnaHQhaW1wb3J0YW50fS5wZXJzb25hbC1pbmZvIGg2e2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6MTJweDtmbG9hdDpyaWdodDt3aWR0aDo1MCU7bWFyZ2luOjA7Y29sb3I6IzU1NTtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIHB7ZmxvYXQ6cmlnaHQ7d2lkdGg6MzAlO21hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O3BhZGRpbmctcmlnaHQ6MzBweDtib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZWNlY2VjfS5wZXJzb25hbC1pbmZvIGRpdnt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cmlnaHQ6MTdweH0ucXVpY2stYm94e3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NTJweDtwYWRkaW5nLXRvcDo3OXB4fS5xdWljay1idG57YmFja2dyb3VuZC1jb2xvcjojMDBiY2Q0O21hcmdpbjoxMnB4IDEwcHg7aGVpZ2h0OjEwMHB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjEwMHB4O2ZvbnQtc2l6ZToxN3B4O2NvbG9yOiNmZmZ9LmJhbm5lci1zZWN0aW9ue3RleHQtYWxpZ246Y2VudGVyfS5pbmZvLXNlY3Rpb257cGFkZGluZzo2MHB4IDI1cHggMTBweDtiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y3Zjc7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly93d3cudG9wdGFsLmNvbS9kZXNpZ25lcnMvc3VidGxlcGF0dGVybnMvcGF0dGVybnMvZ3JleS5wbmcpIWltcG9ydGFudDtoZWlnaHQ6MTA0MHB4O3BhZGRpbmctYm90dG9tOjEyMHB4IWltcG9ydGFudH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdC8vIGlzX2FnZW50IDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhcHBSZWR1Y2VyLlVzZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciQgPSB0aGlzLnN0b3JlLnNlbGVjdChhcHBSZWR1Y2VyLmdldFVzZXIpO1xyXG5cdFx0Ly8gdGhpcy5pc19hZ2VudCA9IHNpZ25pblNlcnZpY2UuaXNfYWdlbnQoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1kYXNoYm9hcmQtbGlua3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9J3JvdycgZnhMYXlvdXRXcmFwIGlkPVwiY29uXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MkIHwgYXN5bmMnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NvbiBbZnhmbGV4XXttYXJnaW4tcmlnaHQ6MjVweH06aG9zdHt3aWR0aDoxMDAlfWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6NDhweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fWJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbi1ib3R0b206MjVweH0udGl0bGV7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5kZXNjcmlwdGlvbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6OTAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bGlua3M6IGFueVtdO1xyXG5cdGxpbmtzJDogT2JzZXJ2YWJsZTxhbnlbXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyQ29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSkge1xyXG5cdFx0dGhpcy5saW5rcyQgPSB0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLm1hcChkYXRhID0+IGRhdGEuZGFzaGJvYXJkTGlua3MpO1xyXG5cdFx0dGhpcy5saW5rcyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRpdGxlOiBcIsOZwoXDmMK0w5jCp8OZwofDmMKvw5nChyDDmMKtw5jCs8OYwqfDmMKoIMOawqnDmMKnw5jCscObwozDmMKxw5vCjFwiLFxyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Byb2ZpbGVcIixcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCLDmcKEw5nCiMOYwrHDmcKFIMOYwqfDm8KMw5nCvsOYwrPDmcKIw5nChSDDmcKFw5jCqsOZwoYgw5jCs8OYwqfDmMKuw5jCqsOawq/Dm8KMIMOYwqjDmMKnIMOYwqrDmcKIw5nChMObwozDmMKvIMOYwrPDmMKnw5jCr8Oawq/Dm8KMIMOZwobDmMKnw5nChcOZwoHDmcKHw5nCiMOZwoVcIixcclxuXHRcdFx0XHRpY29uOiBcImNyZWRpdF9jYXJkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHRcdHRpdGxlOiBcIsOYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHRcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHR9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSwgR2V0UHJvZmlsZVN1Y2NlZWQgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlckVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gdXBkYXRlUHJvZmlsZUluZm9ybWF0aW9uJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdC8vIFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRtYXAodXNlciA9PiB7XHJcblx0Ly8gXHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQodXNlcik7XHJcblx0Ly8gXHR9KVxyXG5cdC8vICk7XHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0QWNjb3VudEluZm8kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHRARWZmZWN0KClcclxuXHRzaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKHt9IGFzIFVzZXJNb2RlbCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD1cIjQ1MHB4XCIgKm5nSWY9XCIodXNlclN0YXR1cyQgfCBhc3luYykgPT0gJ3N1Y2NlZWQnXCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIHt7KHVzZXIgfCBhc3luYykuTGFzdE5hbWUgfX3DmMKMIHt7KHVzZXIgfCBhc3luYykuRmlyc3ROYW1lIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIHt7KHVzZXIgfCBhc3luYykuRW1haWx9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmxvY2FsX2dyb2Nlcnlfc3RvcmU8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMK0w5nChsOYwqfDmMKzw5nChzwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5faWQgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmVtYWlsPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nCvsOYwrPDmMKqIMOYwqfDmcKEw5rCqcOYwqrDmMKxw5nCiMOZwobDm8KMw5rCqcObwow8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuRW1haWwgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+O1xyXG5cdHVzZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdGZvcm1Hcm91cCA9IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0dXNlckRhdGFMb2FkZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHR1c2VyTm90Rm91bmQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvKTtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRTZWFyY2hTdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLnVzZXJEYXRhTG9hZGVkJC5uZXh0KCFcInByaXN0aW5lfGRpcnR5fHBlbmRpbmdcIi5pbmNsdWRlcyh2YWx1ZSkpKTtcclxuXHR9XHJcblx0c2VhcmNoKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG4vLyBpbXBvcnQgeyBNZFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd1c2VyLWNoYW5nZS1wYXNzd29yZCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOawqnDmMKxw5jCp8OYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiQ29uZmlybVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKqw5jCusObwozDm8KMw5jCsSDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvdXNlci9wYW5lbFwiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICAgICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICBAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKVxyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicHJvZmlsZS1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcblxyXG4gIFxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXRQcm9maWxlKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXZpZXcgW2lkXT1cImZvcm1JZFwiPjwvbmdzLWZvcm0tdmlldz4gLS0+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJidXR0b25cIiByb3V0ZXJMaW5rPVwiL3VzZXIvcGFuZWwvcHJvZmlsZVwiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblx0QElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KFwicm9sZXNcIikgcm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRASW5wdXQoKSBncm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdGVkaXRQcm9maWxlKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd1c2VyLXJlc2V0LXBhc3N3b3JkLXJlcXVlc3QnLFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+w5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPsOYwqjDmMKxw5jCp8Obwowgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPsOZwr7Dm8KMw5jCp8OZwoXDmsKpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319IMOYwqvDmMKnw5nChsObwozDmcKHIMOYwqrDmMKnIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxIMOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwq/DmcKIw5jCqMOYwqfDmMKxw5nChyDDmMKvw5jCscObwozDmMKnw5nCgcOYwqogw5nCvsObwozDmMKnw5nChcOawqkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcbiAgICAgICAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAgICAgQE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuICAgICAgICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICBASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgICAgICAgQElucHV0KCkgc2V0IHBlbmRpbmcoaXNQZW5kaW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpbWVyJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgICAgIG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiBpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRha2VXaGlsZShpID0+IGkgKiAxMDAgPD0gMzAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IDMwMDAgLSBpICogMTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJPZlJlcXVlc3RlZC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gKHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLmdldFZhbHVlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnw5jCucOYwq/DmcKFIMOYwqfDmcKFw5rCqcOYwqfDmcKGIC4uLidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICfDmcK+w5vCjMOYwqfDmcKFw5rCqSDDmMKsw5jCr8ObwozDmMKvIMOYwqjDmMKxw5jCp8Obwowgw5jCtMOZwoXDmMKnIMOYwqfDmMKxw5jCs8OYwqfDmcKEIMOawq/DmMKxw5jCr8ObwozDmMKvLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoU3RhcnRBY3Rpb24sIFNlYXJjaEZhaWxlZCwgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaFN1Y2NlZWQgfSBmcm9tIFwiLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Y2FuU2VhcmNoJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBTZWFyY2hTdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRzZWFyY2gkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy51c2VyU2VydmljZS5nZXRJbmZvKGRhdGEpLnBpcGUoXHJcblx0XHRcdFx0bWFwKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzID09IG51bGwgPyBuZXcgU2VhcmNoRmFpbGVkKCkgOiBuZXcgU2VhcmNoU3VjY2VlZChyZXMpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNlYXJjaEZhaWxlZCgpKSlcclxuXHRcdFx0KTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4uLy4uL3NlYXJjaC1hY2NvdW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb250YWluZXJDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRsZXQgbW9kZWwgPSBuZXcgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KHsgRW1haWw6IHBhcmFtcy5FbWFpbCB9IGFzIFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNlYXJjaChtb2RlbCkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J2NoYW5nZVBhc3N3b3JkKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgPjwvdXNlci1jaGFuZ2UtcGFzc3dvcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cCA9IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Q2hhbmdlUGFzc3dvcmRNb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvKS5zdWJzY3JpYmUodXNlckluZm8gPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJJbmZvKSByZXR1cm47XHJcblx0XHRcdC8vIFRPRE86XHJcblx0XHRcdC8vIHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5Vc2VybmFtZSA9IHVzZXJJbmZvLlVzZXJuYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNoYW5nZVBhc3N3b3JkKGV2ZW50KSB7XHJcblx0XHR0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuUGFzc3dvcmQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoXCJQYXNzd29yZFwiKS52YWx1ZTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYXNzd29yZCh0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZSB9IGZyb20gXCIuLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi8uLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicHJvZmlsZS1lZGl0LWNvbnRpYW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPHByb2ZpbGUtZWRpdFxyXG4gICAgICAgICAgICAgICAgKHN1Ym1pdGVkKT0ndXBkYXRlUHJvZmlsZSgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgW3JvbGVzXT1cInJvbGVzJFwiXHJcblx0XHRcdFx0W2dyb3Vwc109XCJncm91cHMgfCBhc3luY1wiXHJcblx0XHRcdFx0W2Zvcm1JZF09XCIoY29uZmlnJHxhc3luYyk/LmZvcm1zLnByb2ZpbGVfZWRpdFwiXHJcbiAgICAgICAgICAgICAgPjwvcHJvZmlsZS1lZGl0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VySW5mb3JhbWF0aW9uJDogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdGZvcm1Hcm91cCA9IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHJvbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRjb25maWckOiBPYnNlcnZhYmxlPFVzZXJNb2R1bGVDb25maWc+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VyKTtcclxuXHRcdHRoaXMucm9sZXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZClcclxuXHRcdFx0Lm1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcyk7XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gdGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSBPYnNlcnZhYmxlLm9mKFsgXCJ0ZXN0MVwiLCBcInRlc3QyXCIgXSk7XHJcblxyXG5cdFx0dGhpcy5jb25maWckID0gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyQ7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQuc3Vic2NyaWJlKHVzZXJJbmZvID0+IHtcclxuXHRcdFx0aWYgKHVzZXJJbmZvID09IG51bGwpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0RW1haWw6IHVzZXJJbmZvLkVtYWlsLFxyXG5cdFx0XHRcdFJvbGVzOiB1c2VySW5mby5Sb2xlcyxcclxuXHRcdFx0XHRHcm91cHM6IHVzZXJJbmZvLkdyb3Vwc1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlUHJvZmlsZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0UHJvZmlsZShkYXRhKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1c2VyLXByb2ZpbGUnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5nCvsOYwrHDmcKIw5nCgcOYwqfDm8KMw5nChDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnJvbGVzPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KGluZm9ybWF0aW9uIHwgYXN5bmMpLlJvbGVzIHwganNvbn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoU8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkZpcnN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOYwq7DmMKnw5nChsOZwojDmMKnw5jCr8Oawq/Dm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5MYXN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuVXNlcm5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwoc8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLk1vYmlsZU51bWJlciB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqzDmcKGw5jCs8ObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMKqw5nCiMOZwoTDmMKvPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7KGlkZW50aWZpZXJUeXBlJCB8IGFzeW5jKX19PC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5JZGVudGlmaWNhdGlvbk5vIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCucOYwrbDmcKIw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPGJ1dHRvbiBpZD1cInByb2ZpbGUtZWRpdC1idXR0b25cIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nZWRpdCc+w5nCiMObwozDmMKxw5jCp8ObwozDmMK0PC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpbmZvcm1hdGlvbjogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG4gICAgQElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgICBzZXgkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgICBpZGVudGlmaWVyVHlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDx1c2VyLXByb2ZpbGVcclxuICAgICAgICAgICAgICAgIFtpbmZvcm1hdGlvbl09XCJkYXRhJFwiXHJcbiAgICAgICAgICAgICAgICBbZGF0YVN0YXR1cyRdPSdkYXRhU3RhdHVzJCdcclxuICAgICAgICAgICAgPjwvdXNlci1wcm9maWxlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGF0YVN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXIpO1xyXG5cdFx0dGhpcy5kYXRhU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IE5nc0Zvcm1Nb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mb3JtXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vdXNlci5jb25maWdcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVFZmZlY3RzIH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3RWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVc2VyRWZmZWN0cyB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZExpbmtzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQtY29udGFpbmVyL3Byb2ZpbGUtZWRpdC1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlldy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VycyB9IGZyb20gXCIuL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuXHRcdE5nc0Zvcm1Nb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U2VhcmNoQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENoYW5nZVBhc3N3b3JkQ29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUVkaXRDb21wb25lbnQsXHJcblx0XHRQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkTGlua3NDb21wb25lbnQsXHJcblx0XHRSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCxcclxuXHRcdEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzVXNlck1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogVXNlck1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NVc2VyTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzVXNlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ1c2VyXCIsIFVzZXJSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xyXG5cdFx0XHQvLyBSZXNldFBhc3N3b3JkUmVxdWVzdEVmZmVjdHMsXHJcblx0XHRcdEVkaXRQcm9maWxlRWZmZWN0cyxcclxuXHRcdFx0Ly8gQ2hhbmdlUGFzc3dvcmRFZmZlY3RzLFxyXG5cdFx0XHRQcm9maWxlVmlld0VmZmVjdHMsXHJcblx0XHRcdC8vIFNlYXJjaEVmZmVjdHMsXHJcblx0XHRcdFVzZXJFZmZlY3RzXHJcblx0XHRdKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NVc2VyTW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRNb2RlbCwgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCwgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRTZXJ2aWNlIHtcclxuXHRudW1iZXJPZlJlcXVlc2V0ZWQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PixcclxuXHRcdHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMubnVtYmVyT2ZSZXF1ZXNldGVkJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZCk7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkUmVzZXRQYXNzd29yZFJlcXVlc3QoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1iZXJPZlJlcXVlc2V0ZWQkXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoY291bnQgPT4gKGNvdW50IDwgMyA/IE9ic2VydmFibGUub2YodHJ1ZSkgOiBPYnNlcnZhYmxlLm9mKGZhbHNlKSkpO1xyXG5cdH1cclxuXHJcblx0aXNWYWxpZFJlc2V0UGFzc3dvcmRSZXNldChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRsZXQgeyBUb2tlbiB9ID0gbW9kZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly93aWZpLnNoYXRlbC5pci9hcGkvdjEvcmVzZXQvdG9rZW5zLyR7VG9rZW59YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHRyZXF1ZXN0UmVzZXRQYXNzd29yZExpbmsoZGF0YTogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLnJlc2V0UGFzc3dvcmRSZXF1ZXN0KG1vZGVsKSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3QodGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy5lZGl0UHJvZmlsZSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwge1xyXG5cdFx0XHRcdHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVBhc3N3b3JkKGRhdGE6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucGF0Y2goXCJ0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmNoYW5nZVBhc3N3b3JkKG1vZGVsKVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0cmVzZXRQYXNzd29yZChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgUmVzZXRQYXNzd29yZE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRsZXQgeyBUb2tlbiB9ID0gbW9kZWw7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wYXRjaChgaHR0cDovL3dpZmkuc2hhdGVsLmlyL2FwaS92MS9yZXNldC90b2tlbnMvJHtUb2tlbn1gLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBQYXNzd29yZFNlcnZpY2VTdHViID0ge307XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgeyBQYXNzd29yZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFzc3dvcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMsXHJcblx0Q2hhbmdlUGFzc3dvcmRTdGFydCxcclxuXHRDaGFuZ2VQYXNzd29yZFN1Y2NlZWQsXHJcblx0Q2hhbmdlUGFzc3dvcmRGYWlsZWRcclxufSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdENoYW5nZVBhc3N3b3JkUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBDaGFuZ2VQYXNzd29yZFN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RDaGFuZ2VQYXNzd29yZExpbmskID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGE6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wYXNzd29yZFNlcnZpY2VcclxuXHRcdFx0XHQuY2hhbmdlUGFzc3dvcmQoZGF0YSlcclxuXHRcdFx0XHQubWFwKHJlcyA9PiBuZXcgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkKHJlcykpXHJcblx0XHRcdFx0LmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IENoYW5nZVBhc3N3b3JkRmFpbGVkKCkpKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0Ly9ARWZmZWN0KClcclxuXHQvLyAgICBSZXNldFBhc3N3b3JkJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyAgICAgICAgLm9mVHlwZShSZXNldFBhc3N3b3JkQWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkQpXHJcblx0Ly8gICAgICAgIC5tYXAodG9QYXlsb2FkKVxyXG5cdC8vICAgICAgICAubWFwKChkYXRhKSA9PiBuZXcgUmVzZXRQYXNzd29yZFN0YXJ0KGRhdGEpKTtcclxuXHQvL1xyXG5cdC8vICAgIEBFZmZlY3QoKVxyXG5cdC8vICAgIFJlc2V0UGFzc3dvcmRMaW5rJCA9IHRoaXMuYWN0aW9ucyRcclxuXHQvLyAgICAgICAgLm9mVHlwZShSZXNldFBhc3N3b3JkQWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfU1RBUlQpXHJcblx0Ly8gICAgICAgIC5tYXAodG9QYXlsb2FkKVxyXG5cdC8vICAgICAgICAuc3dpdGNoTWFwKChkYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdC8vICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YSlcclxuXHQvLyAgICAgICAgICAgICAgICAubWFwKCgpID0+IG5ldyBSZXNldFBhc3N3b3JkU3VjY2VlZCgpKVxyXG5cdC8vICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBSZXNldFBhc3N3b3JkRmFpbGVkKCkpKVxyXG5cdC8vICAgICAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCwgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtdmlld1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwidXNlci9wYW5lbFwiLFxyXG5cdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZExpbmtzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFByb2ZpbGVDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicHJvZmlsZS9lZGl0XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0eyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJjaGFuZ2UtcGFzc3dvcmRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZ3NVc2VyUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgZ2V0VXNlckluZm8gfSBmcm9tIFwiLi4vc2VhcmNoLWFjY291bnRcIjtcclxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJGYWNhZGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGdldERpc3BsYXlOYW1lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0Lm1hcChjb25maWcgPT4gY29uZmlnLm1hcFVzZXJEaXNwbGF5TmFtZSlcclxuXHRcdFx0LnN3aXRjaE1hcChtYXBwZXIgPT4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VXNlcikubGV0KG1hcHBlcikpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJNYXRjaFZhbGlkYXRvciIsIkNoYW5nZVBhc3N3b3JkTW9kZWwiLCJSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIiwiUmVzZXRQYXNzd29yZE1vZGVsIiwiRWRpdFByb2ZpbGVfQXBpTW9kZWwiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIlByb2ZpbGVWaWV3TW9kZWwiLCJGYWlsZWRMb2dpblJlcG9ydE1vZGVsIiwiQmVoYXZpb3JTdWJqZWN0IiwiZ2V0VXNlck1vZHVsZUNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImNvbmZpZyIsIm1hcCIsInN0cmluZ1RlbXBsYXRlIiwiSHR0cENsaWVudCIsInJvdXRlciIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJvZiIsIkFjdGlvbnMiLCJSb3V0ZXIiLCJFZmZlY3QiLCJPYnNlcnZhYmxlIiwiaW5pdGlhbFN0YXRlIiwiZ2V0U3RhdHVzIiwidXNlclJlZHVjZXIudXNlclJlZHVjZXIiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlciIsImNoYW5nZVBhc3N3b3JkLnJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyLnJlZHVjZXIiLCJlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlciIsImNyZWF0ZUZlYXR1cmVTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwiZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXMiLCJnZXRVc2VyIiwidXNlclJlZHVjZXIuZ2V0VXNlciIsInNlYXJjaFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0VXNlckluZm8iLCJzZWFyY2hSZWR1Y2VyLmdldFVzZXJJbmZvIiwiYXBwUmVkdWNlci5nZXRVc2VyIiwiQ29tcG9uZW50IiwiU2lnbkluQWN0aW9uVHlwZXMiLCJGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mbyIsIkZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyIsIkV2ZW50RW1pdHRlciIsIklucHV0IiwiT3V0cHV0IiwiTWF0U25hY2tCYXIiLCJBY3RpdmF0ZWRSb3V0ZSIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXIiLCJnZXRBcHBDb25maWciLCJGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mb3JhbXRpb25TdGF0dXMiLCJOZ01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJOZ3NGb3JtTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIiwiRmVhdHVyZVJlZHVjZXIuZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBeUJhLHFCQUFxQixHQUFxQjtRQUN0RCxTQUFTLEVBQUU7O1lBRVYsY0FBYyxFQUFFLEVBQUU7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixXQUFXLEVBQUUsRUFBRTtZQUNmLGtCQUFrQixFQUFFLEVBQUU7U0FFdEI7UUFDRCxLQUFLLEVBQUU7WUFDTixZQUFZLEVBQUUsRUFBRTtTQUNoQjtRQUNELGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGtCQUFrQixFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxHQUFBO1FBQ2xDLGtCQUFrQixFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEdBQUEsQ0FBQyxHQUFBO0tBQ2hFLENBQUM7QUFFRix5QkFBYSxtQkFBbUIsR0FBRyxJQUFJQSxpQkFBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDMUMzRixRQUFBO1FBaUJDO1NBQWdCO3dCQWpCakI7UUFrQkM7Ozs7OztBQ2hCRCxJQUdBLFdB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
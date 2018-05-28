(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@soushians/shared'), require('tslib'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/operators'), require('rxjs/Observable'), require('@soushians/authentication'), require('rxjs'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@soushians/form')) :
    typeof define === 'function' && define.amd ? define('@soushians/user', ['exports', '@angular/core', '@angular/forms', '@soushians/shared', 'tslib', '@ngrx/store', 'rxjs/BehaviorSubject', '@soushians/config', '@angular/common/http', 'rxjs/Rx', '@angular/router', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/operators', 'rxjs/Observable', '@soushians/authentication', 'rxjs', '@angular/material', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@soushians/form'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.user = {}),global.ng.core,global.ng.forms,null,global.tslib,null,global.Rx,null,global.ng.common.http,global.Rx,global.ng.router,null,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx,null,null,global.ng.material,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,null));
}(this, (function (exports,core,forms,shared,tslib,store,BehaviorSubject,config,http,Rx,router,effects,of,operators,Observable,authentication,rxjs,material,common,flexLayout,animations,form) { 'use strict';

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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("UserModuleConfig");
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
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
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
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
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
            /**
             * @param {?=} initValue
             */
            function Response(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
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
    })(exports.EditProfile_ApiModel || (exports.EditProfile_ApiModel = {}));

    (function (ProfileViewModel) {
        var Request = (function () {
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
            tslib.__extends(Response, _super);
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
        /**
         * @param {?} configFile
         * @param {?} store
         */
        function UserConfigurationService(configFile, store$$1) {
            var _this = this;
            this.store = store$$1;
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
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserConfigurationService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ];
    };
    /** @nocollapse */ UserConfigurationService.ngInjectableDef = core.defineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(core.inject(MODULE_CONFIG_TOKEN), core.inject(store.Store)); }, token: UserConfigurationService, providedIn: "root" });
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
        /**
         * @param {?} payload
         */
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
        if (state === void 0) {
            state = initialState;
        }
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
    var UserService = (function () {
        /**
         * @param {?} http
         * @param {?} store
         * @param {?} configurationService
         */
        function UserService(http$$1, store$$1, configurationService) {
            var _this = this;
            this.http = http$$1;
            this.store = store$$1;
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
                .filter(function (config$$1) { return config$$1.endpoints.profileInformation != ""; })
                .take(1)
                .switchMap(function (config$$1) { return _this.http.get(config$$1.endpoints.profileInformation); })
                .map(function (response) { return response; });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        UserService.prototype.editProfile = function (data) {
            var /** @type {?} */ model = new exports.EditProfile_ApiModel.Request(data);
            return this.http
                .put(shared.stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
                .map(function (response) { return new exports.EditProfile_ApiModel.Response(response).extractData(); });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        UserService.prototype.getInfo = function (data) {
            var _this = this;
            var /** @type {?} */ model = new exports.ProfileViewModel.Request(data);
            if (this.responseCache && this.responseCache.Email == model.Email)
                return Rx.Observable.of(this.responseCache);
            return this.http
                .get(shared.stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
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
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () {
        return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: UserConfigurationService }
        ];
    };
    /** @nocollapse */ UserService.ngInjectableDef = core.defineInjectable({ factory: function UserService_Factory() { return new UserService(core.inject(http.HttpClient), core.inject(store.Store), core.inject(UserConfigurationService)); }, token: UserService, providedIn: "root" });
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
        /**
         * @param {?} payload
         */
        function EditProfile(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE;
        }
        return EditProfile;
    }());
    var EditProfileStart = (function () {
        /**
         * @param {?} payload
         */
        function EditProfileStart(payload) {
            this.payload = payload;
            this.type = EditProfileActionTypes.EDIT_PROFILE_START;
        }
        return EditProfileStart;
    }());
    var EditProfileSucceed = (function () {
        /**
         * @param {?} payload
         */
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
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} service
         */
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
        return EditProfileEffects;
    }());
    EditProfileEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    EditProfileEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: UserService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "EditProfileRequest$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "RequestEditProfileLink$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditProfileEffects.prototype, "goToView$", void 0);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileViewEffects = (function () {
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
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new GetProfileStart(); }));
            this.getProfile$ = this.actions$
                .ofType(ProfileViewActionTypes.GET_PROFILE_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.userService.getProfileInformation(); }), operators.map(function (res) { return new GetProfileSucceed(res); }), operators.catchError(function () { return Observable.Observable.of(new GetProfileFailed()); }));
            this.refreshUserInfo$ = this.actions$
                .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new RefreshUserInfoAction(data); }));
        }
        return ProfileViewEffects;
    }());
    ProfileViewEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ProfileViewEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: UserService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "getProfile$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} service
         */
        function UserEffects(actions$, router$$1, service) {
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.updateProfileInformation$ = this.actions$.ofType(authentication.SignInActionTypes.SIGNIN_SUCCEED).pipe(operators.map(function (action) { return action.payload; }), operators.map(function (user) {
                debugger;
                return new GetProfileSucceed(user);
            }));
            this.getProfileInformation$ = this.actions$.ofType(authentication.SignInActionTypes.SIGNIN_SUCCEED).pipe(operators.map(function () {
                return new GetProfile();
            }));
        }
        return UserEffects;
    }());
    UserEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    UserEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: UserService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], UserEffects.prototype, "updateProfileInformation$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
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
        if (state === void 0) {
            state = initialState$1;
        }
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
    var ChangePassword = (function () {
        /**
         * @param {?} payload
         */
        function ChangePassword(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
        }
        return ChangePassword;
    }());
    var ChangePasswordStart = (function () {
        /**
         * @param {?} payload
         */
        function ChangePasswordStart(payload) {
            this.payload = payload;
            this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
        }
        return ChangePasswordStart;
    }());
    var ChangePasswordSucceed = (function () {
        /**
         * @param {?} payload
         */
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
        /**
         * @param {?} payload
         */
        function Search(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH;
        }
        return Search;
    }());
    var SearchStartAction = (function () {
        /**
         * @param {?} payload
         */
        function SearchStartAction(payload) {
            this.payload = payload;
            this.type = SearchActionTypes.SEARCH_START;
        }
        return SearchStartAction;
    }());
    var SearchSucceed = (function () {
        /**
         * @param {?} payload
         */
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
        data: new exports.ProfileViewModel.Response()
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
                return Object.assign({}, state, { status: "dirty", data: new exports.ProfileViewModel.Response() });
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
    var /** @type {?} */ selectFeatureState = store.createFeatureSelector("user");
    var /** @type {?} */ getUserInforamtionStatus = store.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ isSignedIn = store.createSelector(selectFeatureState, function (state) { return state.user.loaded; });
    var /** @type {?} */ selectResetPasswordRequestState = store.createSelector(selectFeatureState, function (state) { return state.resetPasswordRequest; });
    var /** @type {?} */ getNumberOfRequeseted$1 = store.createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
    var /** @type {?} */ getResetPasswordRequestStatus = store.createSelector(selectResetPasswordRequestState, getStatus);
    //#region user
    var /** @type {?} */ selectUserInformaionState = store.createSelector(selectFeatureState, function (state) { return state.user; });
    var /** @type {?} */ getUser$1 = store.createSelector(selectUserInformaionState, getUser);
    //#endregion
    //#region search
    var /** @type {?} */ selectSearchState = store.createSelector(selectFeatureState, function (state) { return state.searchView; });
    var /** @type {?} */ getSearchStatus = store.createSelector(selectSearchState, getStatus$3);
    var /** @type {?} */ getUserInfo$1 = store.createSelector(selectSearchState, getUserInfo);
    //#endregion
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SearchComponent = (function () {
        /**
         * @param {?} store
         */
        function SearchComponent(store$$1) {
            this.store = store$$1;
            this.formGroup = exports.ProfileViewModel.Request.formGroup;
            this.userDataLoaded$ = new rxjs.BehaviorSubject(false);
            this.userNotFound$ = new rxjs.BehaviorSubject(false);
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
        { type: core.Component, args: [{
                    selector: "search",
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">\n  <mat-card-header>\n    <mat-card-title>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n        <div fxFlex=\"nogrow\">\n          {{(user | async).LastName }}\u060C {{(user | async).FirstName }}\n        </div>\n        <div fxFlex=\"nogrow\">\n          {{(user | async).Email}}\n        </div>\n      </div>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>\n        <mat-icon fxFlex='nogrow'>email</mat-icon>\n        <div fxFlex='15px'></div>\n        <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>\n        <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordComponent = (function () {
        function ChangePasswordComponent() {
            this.submited = new core.EventEmitter();
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
        { type: core.Component, args: [{
                    selector: 'user-change-password',
                    template: "<div fxFlex=\"450px\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"changePassword()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Password\">\n        </mat-form-field>\n        <mat-form-field fxFlexFill>\n          <input type=\"password\" matInput placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" formControlName=\"Confirm\">\n        </mat-form-field>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return []; };
    ChangePasswordComponent.propDecorators = {
        formGroup: [{ type: core.Input }],
        submited: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileEditComponent = (function () {
        function ProfileEditComponent() {
            this.submited = new core.EventEmitter();
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
        { type: core.Component, args: [{
                    selector: "profile-edit",
                    template: "<div fxFlex=\"450px\">\n\n  \n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <!-- <ngs-form-view [id]=\"formId\"></ngs-form-view> -->\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = function () { return []; };
    ProfileEditComponent.propDecorators = {
        submited: [{ type: core.Output }],
        formId: [{ type: core.Input }],
        formGroup: [{ type: core.Input }],
        roles$: [{ type: core.Input, args: ["roles",] }],
        groups: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DashboardLinksComponent = (function () {
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
        { type: core.Component, args: [{
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
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ResetPasswordRequestComponent = (function () {
        /**
         * @param {?} snackBar
         */
        function ResetPasswordRequestComponent(snackBar) {
            this.snackBar = snackBar;
            this.submitted = new core.EventEmitter();
            this.maximumResendingHappend$ = new BehaviorSubject.BehaviorSubject(false);
            this.timer$ = Observable.Observable.timer(0, 100)
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
        { type: core.Component, args: [{
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
        submitted: [{ type: core.Output }],
        formGroup: [{ type: core.Input }],
        numberOfRequested: [{ type: core.Input }],
        canRequestPin: [{ type: core.Input }],
        pending: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SearchEffects = (function () {
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
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new SearchStartAction(data); }));
            this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.userService.getInfo(data).pipe(operators.map(function (res) {
                    return res == null ? new SearchFailed() : new SearchSucceed(res);
                }), operators.catchError(function () { return of.of(new SearchFailed()); }));
            }));
        }
        return SearchEffects;
    }());
    SearchEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    SearchEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: UserService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], SearchEffects.prototype, "canSearch$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
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
    var FeatureContainerComponent = (function () {
        /**
         * @param {?} route
         * @param {?} store
         */
        function FeatureContainerComponent(route, store$$1) {
            var _this = this;
            this.route = route;
            this.store = store$$1;
            this.route.params.subscribe(function (params) {
                var /** @type {?} */ model = new exports.ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
                _this.store.dispatch(new Search(model));
            });
        }
        return FeatureContainerComponent;
    }());
    FeatureContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    FeatureContainerComponent.ctorParameters = function () {
        return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordContainerComponent = (function () {
        /**
         * @param {?} route
         * @param {?} store
         */
        function ChangePasswordContainerComponent(route, store$$1) {
            this.route = route;
            this.store = store$$1;
            this.formGroup = exports.ChangePasswordModel.Request.formGroup;
            this.ChangePasswordModel = new exports.ChangePasswordModel.Request();
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
        { type: core.Component, args: [{
                    template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                },] },
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () {
        return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileEditContainerComponent = (function () {
        /**
         * @param {?} store
         * @param {?} configService
         */
        function ProfileEditContainerComponent(store$$1, configService) {
            this.store = store$$1;
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
        { type: core.Component, args: [{
                    selector: "profile-edit-contianer",
                    template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [formGroup]=\"formGroup\"\n                [roles]=\"roles$\"\n\t\t\t\t[groups]=\"groups | async\"\n\t\t\t\t[formId]=\"(config$|async)?.forms.profile_edit\"\n              ></profile-edit>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditContainerComponent.ctorParameters = function () {
        return [
            { type: store.Store },
            { type: UserConfigurationService }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DashboardContainerComponent = (function () {
        /**
         * @param {?} store
         */
        function DashboardContainerComponent(store$$1) {
            this.store = store$$1;
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
        { type: core.Component, args: [{
                    selector: "user-dashboard-container",
                    template: "<!-- <router-outlet name=\"links\"></router-outlet> -->\n<div fxLayoutAlign=\"center\">\n    <router-outlet></router-outlet>\n</div>",
                    styles: ["#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}"]
                },] },
    ];
    /** @nocollapse */
    DashboardContainerComponent.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
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
        ProfileComponent.prototype.ngOnInit = function () {
            this.information.subscribe(function (data) {
                if (data == null)
                    return;
            });
        };
        return ProfileComponent;
    }());
    ProfileComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'user-profile',
                    template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        information: [{ type: core.Input }],
        dataStatus$: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProfileContainerComponent = (function () {
        /**
         * @param {?} store
         */
        function ProfileContainerComponent(store$$1) {
            this.store = store$$1;
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
        { type: core.Component, args: [{
                    template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='dataStatus$'\n            ></user-profile>"
                },] },
    ];
    /** @nocollapse */
    ProfileContainerComponent.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
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
        NgsUserModule.forRoot = function (config$$1) {
            return {
                ngModule: RootNgsUserModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
            };
        };
        return NgsUserModule;
    }());
    NgsUserModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        http.HttpClientModule,
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
    var RootNgsUserModule = (function () {
        function RootNgsUserModule() {
        }
        return RootNgsUserModule;
    }());
    RootNgsUserModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        NgsUserModule,
                        store.StoreModule.forFeature("user", UserReducers),
                        effects.EffectsModule.forFeature([
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
    var PasswordService = (function () {
        /**
         * @param {?} http
         * @param {?} store
         * @param {?} userConfigurationService
         */
        function PasswordService(http$$1, store$$1, userConfigurationService) {
            this.http = http$$1;
            this.store = store$$1;
            this.userConfigurationService = userConfigurationService;
            this.numberOfRequeseted$ = this.store.select(getNumberOfRequeseted$1);
        }
        /**
         * @return {?}
         */
        PasswordService.prototype.isValidResetPasswordRequest = function () {
            return this.numberOfRequeseted$
                .take(1)
                .switchMap(function (count) { return (count < 3 ? Rx.Observable.of(true) : Rx.Observable.of(false)); });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        PasswordService.prototype.isValidResetPasswordReset = function (data) {
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
        PasswordService.prototype.requestResetPasswordLink = function (data) {
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
        PasswordService.prototype.changePassword = function (data) {
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
        PasswordService.prototype.resetPassword = function (data) {
            var /** @type {?} */ model = new exports.ResetPasswordModel.Request(data);
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
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    PasswordService.ctorParameters = function () {
        return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: UserConfigurationService }
        ];
    };
    /** @nocollapse */ PasswordService.ngInjectableDef = core.defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(core.inject(http.HttpClient), core.inject(store.Store), core.inject(UserConfigurationService)); }, token: PasswordService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ChangePasswordEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} passwordService
         */
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
        return ChangePasswordEffects;
    }());
    ChangePasswordEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ChangePasswordEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: PasswordService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
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
    var /** @type {?} */ NgsUserRoutingModule = router.RouterModule.forChild(routes);

    exports.UserService = UserService;
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
    exports.ɵb = UserReducers;
    exports.ɵd = selectFeatureState;
    exports.ɵe = selectSearchState;
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-user.umd.js.map

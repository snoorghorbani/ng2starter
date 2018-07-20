import { InjectionToken, Injectable, Inject, Component, Input, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchValidator, stringTemplate } from '@soushians/shared';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
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
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
    responseToUserInfo: (user$) => user$,
    mapUserDisplayName: (user$) => user$.map((user) => {
        debugger;
        return user.Username;
    })
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserModel {
    constructor() {
        this.Roles = [];
        this.Groups = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChangePasswordModel;
(function (ChangePasswordModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Password: this.Password
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Password: new FormControl(null, [Validators.required, Validators.minLength(7)]),
                Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
            });
        }
    }
    ChangePasswordModel.Request = Request;
    class Response {
        constructor() { }
    }
    ChangePasswordModel.Response = Response;
})(ChangePasswordModel || (ChangePasswordModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordRequestModel;
(function (ResetPasswordRequestModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Username: new FormControl('', [Validators.minLength(8), Validators.required]),
                Captcha: new FormControl(null, [Validators.required]),
                Token: new FormControl(null, [Validators.required]),
                Type: new FormControl('sms'),
            });
        }
    }
    ResetPasswordRequestModel.Request = Request;
    class Response {
        constructor() {
        }
    }
    ResetPasswordRequestModel.Response = Response;
})(ResetPasswordRequestModel || (ResetPasswordRequestModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResetPasswordModel;
(function (ResetPasswordModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Password: this.Password
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Token: new FormControl(null, [Validators.required]),
                Password: new FormControl("", [Validators.minLength(8), Validators.required]),
                Confirm: new FormControl(null, [Validators.required, MatchValidator("Password")])
            });
        }
    }
    ResetPasswordModel.Request = Request;
    class Response {
        constructor() { }
    }
    ResetPasswordModel.Response = Response;
})(ResetPasswordModel || (ResetPasswordModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditProfile_ApiModel;
(function (EditProfile_ApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this;
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Email: new FormControl(null, [Validators.required]),
                Roles: new FormControl(null, [Validators.required]),
                Groups: new FormControl(null, [Validators.required])
            });
        }
    }
    EditProfile_ApiModel.Request = Request;
    class Response {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        extractData() {
            return this.Result.User;
        }
    }
    EditProfile_ApiModel.Response = Response;
})(EditProfile_ApiModel || (EditProfile_ApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProfileViewModel;
(function (ProfileViewModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Username: new FormControl("", [Validators.minLength(8), Validators.required])
            });
        }
    }
    ProfileViewModel.Request = Request;
    class Response extends UserModel {
        constructor() {
            super();
        }
    }
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FailedLoginReportModel;
(function (FailedLoginReportModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return;
        }
    }
    FailedLoginReportModel.Request = Request;
    class Response {
        constructor() {
            this.data = [];
        }
    }
    FailedLoginReportModel.Response = Response;
})(FailedLoginReportModel || (FailedLoginReportModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FailedLoginModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getUserModuleConfig).subscribe(userConfig => {
            if (!userConfig)
                return;
            this._config = Object.assign({}, this._config, userConfig.Config);
            this.config$.next(this._config);
        });
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
UserConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ UserConfigurationService.ngInjectableDef = defineInjectable({ factory: function UserConfigurationService_Factory() { return new UserConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: UserConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ProfileViewActionTypes = {
    GET_PROFILE: "[USER][PROFILE] GET_PROFILE",
    GET_PROFILE_START: "[USER][PROFILE] GET_PROFILE_START",
    GET_PROFILE_SUCCEED: "[USER][PROFILE] GET_PROFILE_SUCCEED",
    GET_PROFILE_FAILED: "[USER][PROFILE] GET_PROFILE_FAILED",
};
class GetProfile {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE;
    }
}
class GetProfileStart {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
}
class GetProfileSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
}
class GetProfileFailed {
    constructor() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const UserActionTypes = {
    USER_SELECTED: "[USER] USER_SELECTED",
    REFRESH_USER_INFO: "[USER] REFRESH_USER_INFO",
};
class RefreshUserInfoAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState = {
    loaded: false,
    data: new UserModel()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function userReducer(state = initialState, action) {
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
const /** @type {?} */ getAccountInfo = (state) => state.data;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.configurationService.config$.subscribe((config) => (this.config = config));
        setTimeout(() => {
            this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    getAccountInfo() {
        return this.configurationService.config$
            .filter((config) => config.endpoints.profileInformation != "")
            .take(1)
            .switchMap((config) => this.http
            .get(config.env.server + config.endpoints.profileInformation)
            .let(config.responseToUserInfo)
            .pipe(map((response) => {
            const /** @type {?} */ user = Object.assign({}, response);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editProfile(data) {
        const /** @type {?} */ model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.config.env.server + this.config.endpoints.editProfile, model), model.getRequestBody())
            .map((response) => new EditProfile_ApiModel.Response(response).extractData());
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getInfo(data) {
        const /** @type {?} */ model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env.server + this.config.endpoints.getAccountInfo, model))
            .map((response) => response);
    }
    /**
     * @param {?} role
     * @return {?}
     */
    is_role(role) {
        return this.store
            .select(getAccountInfo)
            .filter((user) => user && user.Roles != undefined)
            .take(1)
            .map((user) => user.Roles.indexOf(role) > -1);
    }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserService.ngInjectableDef = defineInjectable({ factory: function UserService_Factory() { return new UserService(inject(HttpClient), inject(Store), inject(UserConfigurationService)); }, token: UserService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EditProfileActionTypes = {
    EDIT_PROFILE: "[USER][PASSWORD] EDIT_PROFILE",
    EDIT_PROFILE_START: "[USER][PASSWORD] EDIT_PROFILE_START",
    EDIT_PROFILE_SUCCEED: "[USER][PASSWORD] EDIT_PROFILE_SUCCEED",
    EDIT_PROFILE_FAILED: "[USER][PASSWORD] EDIT_PROFILE_FAILED",
};
class EditProfile {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
}
class EditProfileStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
}
class EditProfileSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
}
class EditProfileFailed {
    constructor() {
        this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EditProfileEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE)
            .pipe(map(action => action.payload), map(data => new EditProfileStart(data)));
        this.RequestEditProfileLink$ = this.actions$
            .ofType(EditProfileActionTypes.EDIT_PROFILE_START)
            .pipe(map(action => action.payload), switchMap((data) => this.service.editProfile(data)), map(res => new EditProfileSucceed(res)), catchError(() => of(new EditProfileFailed())));
        // .switchMap((data: EditProfile_ApiModel.Request) => {
        // 	return this.service
        // 		.editProfile(data)
        // 		.map((res) => new EditProfileSucceed(res))
        // 		.catch(() => Observable.of(new EditProfileFailed()));
        // });
        this.goToView$ = this.actions$.ofType(EditProfileActionTypes.EDIT_PROFILE_SUCCEED).pipe(map(() => {
            this.router.navigate(["/user/profile"]);
            return new GetProfile();
        }));
    }
}
EditProfileEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EditProfileEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: UserService }
];
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
class ProfileViewEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE)
            .pipe(map(action => action.payload), map(data => new GetProfileStart()));
        this.getProfile$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_START)
            .pipe(map(action => action.payload), switchMap((data) => this.userService
            .getAccountInfo()
            .pipe(map(res => new GetProfileSucceed(res)), catchError(() => Observable.of(new GetProfileFailed())))));
        this.refreshUserInfo$ = this.actions$
            .ofType(ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .pipe(map(action => action.payload), map(data => new RefreshUserInfoAction(data)));
    }
}
ProfileViewEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ProfileViewEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserService }
];
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
/** @enum {string} */
const ResetPasswordRequestActionTypes = {
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
const /** @type {?} */ initialState$1 = {
    numberOfRequested: 0,
    lastRequestedTime: null,
    disable: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer(state = initialState$1, action) {
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
var /** @type {?} */ getNumberOfRequeseted = (state) => state.numberOfRequested;
var /** @type {?} */ getStatus = (state) => state.disable;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const ChangePasswordActionTypes = {
    CHANGE_PASSWORD: '[USER][PASSWORD] CHANGE_PASSWORD',
    PASSWORD_CHANGED_START: '[USER][PASSWORD] PASSWORD_CHANGED_START',
    PASSWORD_CHANGED_SUCCEED: '[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED',
    PASSWORD_CHANGED_FAILED: '[USER][PASSWORD] PASSWORD_CHANGED_FAILED',
};
class ChangePassword {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$2 = {
    status: "pristine"
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$1(state = initialState$2, action) {
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
const /** @type {?} */ initialState$3 = {
    status: 'pristine'
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$2(state = initialState$3, action) {
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
const SearchActionTypes = {
    SEARCH: '[USER][SEARCH] SEARCH',
    SEARCH_START: '[USER][SEARCH] SEARCH_START',
    SEARCH_SUCCEED: '[USER][SEARCH] SEARCH_SUCCEED',
    SEARCH_FAILED: '[USER][SEARCH] SEARCH_FAILED',
    CLEAR_SEARCHED_USER: '[USER][SEARCH] CLEAR_SEARCHED_USER',
};
class Search {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH;
    }
}
class SearchStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_START;
    }
}
class SearchSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SearchActionTypes.SEARCH_SUCCEED;
    }
}
class SearchFailed {
    constructor() {
        this.type = SearchActionTypes.SEARCH_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$4 = {
    status: "pristine",
    data: /** @type {?} */ ({})
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function reducer$3(state = initialState$4, action) {
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
var /** @type {?} */ getStatus$3 = (state) => state.status;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ UserReducers = {
    user: userReducer,
    resetPasswordRequest: reducer,
    changePassword: reducer$1,
    searchView: reducer$3,
    editProfile: reducer$2
};
//#region selectors
const /** @type {?} */ selectFeatureState = createFeatureSelector("user");
const /** @type {?} */ getUserInforamtionStatus = createSelector(selectFeatureState, (state) => state.user.loaded);
const /** @type {?} */ isSignedIn = createSelector(selectFeatureState, (state) => state.user.loaded);
const /** @type {?} */ selectResetPasswordRequestState = createSelector(selectFeatureState, (state) => state.resetPasswordRequest);
const /** @type {?} */ getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
const /** @type {?} */ getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
//#region user
const /** @type {?} */ selectUserInformaionState = createSelector(selectFeatureState, (state) => state.user);
const /** @type {?} */ getAccountInfo$2 = createSelector(selectUserInformaionState, getAccountInfo);
//#endregion
//#region search
const /** @type {?} */ selectSearchState = createSelector(selectFeatureState, (state) => state.searchView);
const /** @type {?} */ getSearchStatus = createSelector(selectSearchState, getStatus$3);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DashboardContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.user$ = this.store.select(getAccountInfo$2);
        // this.is_agent = signinService.is_agent();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DashboardContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "user-dashboard-container",
                template: `<!-- <router-outlet name="links"></router-outlet> -->
<div fxLayoutAlign="center">
    <router-outlet></router-outlet>
</div>`,
                styles: [`#box-left{background:#fff}#box-bottom{background:#2b0033}#box-right{background:#000833;padding-top:10px!important;padding-bottom:10px!important}#box-right div{background:#fff;opacity:.5}#banner:not(.active){height:100%;-webkit-filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px);filter:grayscale(100%) brightness(1.5) opacity(.2) blur(2px)}#s1{background:#aaa}#s2{background:#bbb}#s3{background:#ccc}.personal-info{background-color:rgba(255,255,255,.5);position:relative;right:10%;width:90%;height:469px}.personal-info h2{color:#00bcd4;font-weight:400;font-size:24px;font-family:iran-sans-light!important}.personal-info h6{font-weight:400;font-size:12px;float:right;width:50%;margin:0;color:#555;border-bottom:2px solid #ececec}.personal-info p{float:right;width:30%;margin:0;font-size:13px;padding-right:30px;border-bottom:2px solid #ececec}.personal-info div{width:100%;height:50px;position:relative;line-height:52px;right:17px}.quick-box{width:100%;height:50px;position:relative;line-height:52px;padding-top:79px}.quick-btn{background-color:#00bcd4;margin:12px 10px;height:100px;text-align:center;line-height:100px;font-size:17px;color:#fff}.banner-section{text-align:center}.info-section{padding:60px 25px 10px;background-color:#f7f7f7;background-image:url(https://www.toptal.com/designers/subtlepatterns/patterns/grey.png)!important;height:1040px;padding-bottom:120px!important}`]
            },] },
];
/** @nocollapse */
DashboardContainerComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DashboardLinksComponent {
    /**
     * @param {?} userConfigurationService
     * @param {?} store
     */
    constructor(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.map(data => data.dashboardLinks);
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
    ngAfterViewInit() { }
}
DashboardLinksComponent.decorators = [
    { type: Component, args: [{
                selector: "user-dashboard-links",
                template: `<div fxLayout='row' fxLayoutWrap id="con">
    <button fxFlex="31" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>
        <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>{{link.icon}}</mat-icon>
            <h3 class='title'>{{link.title}}</h3>
            <div class='description'>{{link.description}}</div>
        </div>
    </button>
    <button fxFlex="31" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links$ | async'>
        <div fxLayout='column' fxLayoutAlign='center center'>
            <mat-icon color='primary'>{{link.icon}}</mat-icon>
            <h3 class='title'>{{link.title}}</h3>
            <div class='description'>{{link.description}}</div>
        </div>
    </button>
</div>`,
                styles: [`#con [fxflex]{margin-right:25px}:host{width:100%;padding:25px 25px 0}button mat-icon{font-size:48px;width:48px;height:48px}button.link{padding:25px 15px;margin-bottom:25px}.title{margin-top:0;margin-bottom:5px}.description{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:90%}`]
            },] },
];
/** @nocollapse */
DashboardLinksComponent.ctorParameters = () => [
    { type: UserConfigurationService },
    { type: Store }
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
class UserEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} service
     */
    constructor(actions$, router, service) {
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
        this.getAccountInfo$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(map(() => {
            return new GetProfile();
        }));
        this.signout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(map(() => new RefreshUserInfoAction(/** @type {?} */ ({}))));
    }
}
UserEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: UserService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UserEffects.prototype, "getAccountInfo$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UserEffects.prototype, "signout$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SearchComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
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
    ngOnInit() {
        this.userStatus$.subscribe(value => this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)));
    }
    /**
     * @return {?}
     */
    search() {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new Search(this.formGroup.value));
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: "search",
                template: `<mat-card fxFlex="450px" *ngIf="(userStatus$ | async) == 'succeed'">
  <mat-card-header>
    <mat-card-title>
      <div fxLayout="row" fxLayoutAlign="space-between">
        <div fxFlex="nogrow">
          <!-- {{(user | async).LastName }}، {{(user | async).FirstName }} -->
        </div>
        <div fxFlex="nogrow">
          <!-- {{(user | async).Email}} -->
        </div>
      </div>
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <div>
      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>
        <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>
        <div fxFlex='15px'></div>
        <p fxFlex='40'>شناسه</p>
        <!-- <p fxFlex='60' fxLayoutAlign="end">{{(user | async)._id }}</p> -->
      </div>
      <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>
        <mat-icon fxFlex='nogrow'>email</mat-icon>
        <div fxFlex='15px'></div>
        <p fxFlex='40'>پست الکترونیکی</p>
        <!-- <p fxFlex='60' fxLayoutAlign="end">{{(user | async).Email }}</p> -->
      </div>
    </div>

  </mat-card-content>
</mat-card>`,
                styles: [``]
            },] },
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChangePasswordComponent {
    constructor() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    submit() {
    }
    /**
     * @return {?}
     */
    changePassword() {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    }
}
ChangePasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-change-password',
                template: `<div fxFlex="450px">
  <form [formGroup]="formGroup" (ngSubmit)="changePassword()" fxLayout="column">
    <mat-card>
      <mat-card-content>
        <mat-form-field fxFlexFill>
          <input type="password" matInput placeholder="کلمه عبور" formControlName="Password">
        </mat-form-field>
        <mat-form-field fxFlexFill>
          <input type="password" matInput placeholder="تکرار کلمه عبور" formControlName="Confirm">
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions fxLayoutAlign="center center">
        <button fxFlex="nogrow" type="submit" mat-raised-button color="primary">تغییر رمز عبور</button>
        <button fxFlex="nogrow" type="button" routerLink="/user/panel" mat-raised-button>بازگشت</button>
      </mat-card-actions>
    </mat-card>
  </form>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ChangePasswordComponent.ctorParameters = () => [];
ChangePasswordComponent.propDecorators = {
    formGroup: [{ type: Input }],
    submited: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileEditComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} form
     * @return {?}
     */
    editProfile(form) {
        if (!form.valid)
            return;
        this.submited.emit(form.value);
    }
    /**
     * @return {?}
     */
    goback() {
        this.router.navigate([".."]);
    }
}
ProfileEditComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit",
                template: `<div fxFlex="450px">

  
  <ngs-form-view #form [id]="formId" [card]="true" (accept)="editProfile(form.formGroup)" (cancel)="goback()" ></ngs-form-view>
  <!-- <form [formGroup]="formGroup" (ngSubmit)="editProfile()" fxLayout="column">
    <mat-card>
      <mat-card-content>
      </mat-card-content>
      <mat-card-actions align="end">
        <button type="button" routerLink=".." mat-button color="primary">بازگشت</button>
        <button type="submit" mat-raised-button color="primary">ویرایش</button>
      </mat-card-actions>
    </mat-card>
  </form> -->
</div>`
            },] },
];
/** @nocollapse */
ProfileEditComponent.ctorParameters = () => [
    { type: Router }
];
ProfileEditComponent.propDecorators = {
    submited: [{ type: Output }],
    userInfo: [{ type: Input }],
    formId: [{ type: Input }],
    roles$: [{ type: Input, args: ["roles",] }],
    groups: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ResetPasswordRequestComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100)
            .map(i => i + 1)
            .takeWhile(i => i * 100 <= 3000)
            .map(i => 3000 - i * 100);
    }
    /**
     * @param {?} isPending
     * @return {?}
     */
    set pending(isPending) {
        if (isPending) {
            this.formGroup.disable();
        }
        this.formGroup.enable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.numberOfRequested.subscribe(data => {
            if (data > 2) {
                this.maximumResendingHappend$.next(true);
            }
        });
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
            let /** @type {?} */ message = (this.maximumResendingHappend$.getValue())
                ? 'عدم امکان ...'
                : 'پیامک جدید برای شما ارسال گردید.';
            this.snackBar.open(message, '', {
                duration: 3000,
            });
        }
    }
}
ResetPasswordRequestComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-reset-password-request',
                template: `<form [formGroup]="formGroup" (ngSubmit)="submit()" fxLayout="column">
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h3>درخواست بازیابی رمز عبور</h3>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>برای بازیابی رمز عبور شماره تلفن خود را وارد نمایید</p>
      <mat-radio-group fxFlexFill formControlName="Type">
        <mat-radio-button value="sms">پیامک</mat-radio-button>
        <mat-radio-button value="email">پست الکترونیکی</mat-radio-button>
      </mat-radio-group>
      <mat-form-field fxFlexFill>
        <input matInput placeholder="شماره تلفن همراه" formControlName="Username">
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <!--<button type="submit" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)="submit()" mat-raised-button color="primary">-->
      <button type="submit" [disabled]='(canRequestPin | async)' (click)="submit()" mat-raised-button color="primary">
        <span *ngIf='!(canRequestPin | async)'>
          بازیابی رمز عبور
        </span>
        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>
          {{timer$ | async}} ثانیه تا امکان در خواست دوباره دریافت پیامک.
        </div>
        <div *ngIf='(maximumResendingHappend$ | async)'>
          عدم امکان درخواست
        </div>-->
      </button>
      <a mat-button routerLink='/auth/signin'>انصراف</a>
    </mat-card-actions>
  </mat-card>
</form>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ResetPasswordRequestComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
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
class SearchEffects {
    /**
     * @param {?} actions$
     * @param {?} userService
     */
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.canSearch$ = this.actions$
            .ofType(SearchActionTypes.SEARCH)
            .pipe(map(action => action.payload), map(data => new SearchStartAction(data)));
        this.search$ = this.actions$.ofType(SearchActionTypes.SEARCH_START).pipe(map(action => action.payload), switchMap((data) => {
            return this.userService.getInfo(data).pipe(map(res => {
                return res == null ? new SearchFailed() : new SearchSucceed(res);
            }), catchError(() => of(new SearchFailed())));
        }));
    }
}
SearchEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SearchEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserService }
];
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
class FeatureContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.route.params.subscribe(params => {
            let /** @type {?} */ model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
            this.store.dispatch(new Search(model));
        });
    }
}
FeatureContainerComponent.decorators = [
    { type: Component, args: [{
                template: "<router-outlet></router-outlet>"
            },] },
];
/** @nocollapse */
FeatureContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChangePasswordContainerComponent {
    /**
     * @param {?} route
     * @param {?} store
     */
    constructor(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new ChangePasswordModel.Request();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.store.select(getAccountInfo$2).subscribe(userInfo => {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changePassword(event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new ChangePassword(this.ChangePasswordModel));
    }
}
ChangePasswordContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<user-change-password
                (submited)='changePassword($event)'
                [formGroup]="formGroup"
              ></user-change-password>`
            },] },
];
/** @nocollapse */
ChangePasswordContainerComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileEditContainerComponent {
    /**
     * @param {?} store
     * @param {?} configService
     */
    constructor(store, configService) {
        this.store = store;
        this.configService = configService;
        this.userInforamation$ = this.store.select(getAccountInfo$2);
        this.roles$ = this.store
            .select(getAppConfig)
            .filter(config => config != undefined)
            .map(config => config.Config.Roles);
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = Observable.of(["test1", "test2"]);
        this.config$ = this.configService.config$;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfile(data) {
        this.store.dispatch(new EditProfile(data));
    }
}
ProfileEditContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit-contianer",
                template: `<profile-edit
                (submited)='updateProfile($event)'
                [userInfo]="userInforamation$ | async"
                [roles]="roles$"
				[groups]="groups | async"
				[formId]="(config$|async)?.forms.profile_edit"
              ></profile-edit>`
            },] },
];
/** @nocollapse */
ProfileEditContainerComponent.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileComponent {
    constructor() {
        this.info = [];
    }
    /**
     * @param {?} information
     * @return {?}
     */
    set information(information) {
        if (!information)
            return;
        Object.keys(information).forEach(k => this.info.push([k, information[k]]));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: "user-profile",
                template: `<div fxFlex="450px">
  <mat-card>
    <mat-card-header>
      <mat-card-title>اطلاعات پروفایل</mat-card-title>
    </mat-card-header>
    <mat-card-content *ngIf='dataStatus$ | async'>
        <div class='list-item' fxFlexLayout='row' *ngFor="let item of info">
            <p fxFlex='40'>{{item[0]}}</p>
            <p fxFlex='60'>{{item[1]}}</p>
        </div>
      <!-- <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(information | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>roles</p>
        <p fxFlex='60'>{{(information | async).Roles | json}}</p>
      </div> -->
      <!-- <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام</p>
        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام خانوادگی</p>
        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام کاربری</p>
        <p fxFlex='60'>{{(userInformation | async).Username}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تلفن همراه</p>
        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>جنسیت</p>
        <p fxFlex='60'>{{sex$ | async}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ تولد</p>
        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(userInformation | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>{{(identifierType$ | async)}}</p>
        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ عضویت</p>
        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>
      </div> -->
    </mat-card-content>

    <mat-card-actions align="end">
      <button mat-button color="primary" routerLink='..'>بازگشت</button>
      <button mat-raised-button color="primary" routerLink='edit'>ویرایش</button>
    </mat-card-actions>
  </mat-card>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ProfileComponent.ctorParameters = () => [];
ProfileComponent.propDecorators = {
    information: [{ type: Input }],
    dataStatus$: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProfileContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(getAccountInfo$2);
        this.dataStatus$ = this.store.select(getUserInforamtionStatus);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProfileContainerComponent.decorators = [
    { type: Component, args: [{
                template: `<user-profile
                [information]="data$ | async"
                [dataStatus$]='dataStatus$'
            ></user-profile>`
            },] },
];
/** @nocollapse */
ProfileContainerComponent.ctorParameters = () => [
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsUserModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
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
class RootNgsUserModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
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
const /** @type {?} */ NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserFacadeService {
    /**
     * @param {?} store
     * @param {?} configService
     */
    constructor(store, configService) {
        this.store = store;
        this.configService = configService;
    }
    /**
     * @return {?}
     */
    getDisplayName() {
        return this.store.select(getAccountInfo$2).let(this.configService.config$.getValue().mapUserDisplayName);
        // .pipe(filter(displayName => displayName !== undefined));
    }
}
UserFacadeService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
UserFacadeService.ctorParameters = () => [
    { type: Store },
    { type: UserConfigurationService }
];
/** @nocollapse */ UserFacadeService.ngInjectableDef = defineInjectable({ factory: function UserFacadeService_Factory() { return new UserFacadeService(inject(Store), inject(UserConfigurationService)); }, token: UserFacadeService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { UserService, UserFacadeService, getAccountInfo$2 as getAccountInfo, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel, NgsUserModule, RootNgsUserModule, routes, NgsUserRoutingModule, ChangePasswordContainerComponent as ɵp, reducer$1 as ɵu, ChangePasswordComponent as ɵh, getAccountInfo as ɵs, userReducer as ɵr, DashboardContainerComponent as ɵo, DashboardLinksComponent as ɵk, FeatureContainerComponent as ɵn, UserEffects as ɵz, EditProfileEffects as ɵx, reducer$2 as ɵw, ProfileEditContainerComponent as ɵq, ProfileEditComponent as ɵi, ProfileContainerComponent as ɵj, ProfileViewEffects as ɵy, ProfileComponent as ɵg, reducer as ɵt, ResetPasswordRequestComponent as ɵm, reducer$3 as ɵv, SearchComponent as ɵf, UserConfigurationService as ɵl, UserReducers as ɵb, selectFeatureState as ɵd, selectUserInformaionState as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL2NoYW5nZS1wYXNzd29yZC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4tcmVwb3J0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9mYWlsZWQtbG9naW4ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi91c2VyLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29udGFpbmVyL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1saW5rcy9kYXNoYm9hcmQtbGlua3MuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlYXJjaC1hY2NvdW50L3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2guZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9mZWF0dXJlL2ZlYXR1cmUtY29udGFpbmVyL2ZlYXR1cmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5mYWNhZGUtc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0XHRzZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiBzdHJpbmc7XHJcblx0XHRjaGFuZ2VQYXNzd29yZD86IHN0cmluZztcclxuXHRcdGVkaXRQcm9maWxlPzogc3RyaW5nO1xyXG5cdFx0Z2V0QWNjb3VudEluZm8/OiBzdHJpbmc7XHJcblx0XHRwcm9maWxlSW5mb3JtYXRpb24/OiBzdHJpbmc7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0fTtcclxuXHRmb3Jtcz86IHtcclxuXHRcdHByb2ZpbGVfZWRpdDogc3RyaW5nO1xyXG5cdH07XHJcblx0ZGFzaGJvYXJkTGlua3M/OiB7XHJcblx0XHRyb3V0ZTogc3RyaW5nO1xyXG5cdFx0aWNvbjogc3RyaW5nO1xyXG5cdFx0dGl0bGU6IHN0cmluZztcclxuXHR9W107XHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvPzogKHVzZXI6IE9ic2VydmFibGU8YW55PikgPT4gT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZT86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogVXNlck1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcInVzZXIvbW9kdWxlL2Zyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiLFxyXG5cdFx0c2VydmVyOiBcInVzZXIvbW9kdWxlL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdC8vIHJlc2V0UGFzc3dvcmRSZXF1ZXN0OiAnJyxcclxuXHRcdGNoYW5nZVBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0ZWRpdFByb2ZpbGU6IFwiXCIsXHJcblx0XHRnZXRBY2NvdW50SW5mbzogXCJcIixcclxuXHRcdHByb2ZpbGVJbmZvcm1hdGlvbjogXCJcIlxyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogJycsXHJcblx0fSxcclxuXHRmb3Jtczoge1xyXG5cdFx0cHJvZmlsZV9lZGl0OiBcIlwiXHJcblx0fSxcclxuXHRkYXNoYm9hcmRMaW5rczogW10sXHJcblx0cmVzcG9uc2VUb1VzZXJJbmZvOiAodXNlciQpID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogKHVzZXIkKSA9PlxyXG5cdFx0dXNlciQubWFwKCh1c2VyKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRyZXR1cm4gdXNlci5Vc2VybmFtZTtcclxuXHRcdH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxVc2VyTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsImV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdC8vIEZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdC8vIExhc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gVXNlcm5hbWU6IHN0cmluZztcclxuXHREaXNwbGF5TmFtZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0Ly8gTW9iaWxlTnVtYmVyOiBzdHJpbmc7XHJcblx0Ly8gU2V4OiBzdHJpbmc7XHJcblx0Ly8gQmlydGhkYXRlOiBzdHJpbmc7XHJcblx0RW1haWw6IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWNhdGlvbk5vOiBzdHJpbmc7XHJcblx0Ly8gSWRlbnRpZmllclR5cGU6IHN0cmluZztcclxuXHQvLyBSZWdpc3RlckRhdGU6IHN0cmluZztcclxuXHQvLyBVc2VyVHlwZTogc3RyaW5nO1xyXG5cdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5Sb2xlcyA9IFtdO1xyXG5cdFx0dGhpcy5Hcm91cHMgPSBbXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQ2hhbmdlUGFzc3dvcmRNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRVc2VybmFtZTogc3RyaW5nO1xyXG5cdFx0UGFzc3dvcmQ6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCA9IHt9IGFzIENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFBhc3N3b3JkOiB0aGlzLlBhc3N3b3JkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNykgXSksXHJcblx0XHRcdFx0Q29uZmlybTogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCwgTWF0Y2hWYWxpZGF0b3IoXCJQYXNzd29yZFwiKSBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD57XHJcblxyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vQFJlcXVlc3RCb2R5KFwicGVnYWhcIilcclxuICAgICAgICBUb2tlbjogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbignYm9keScpXHJcbiAgICAgICAgQ2FwdGNoYTogc3RyaW5nO1xyXG5cclxuICAgICAgICAvL0BVc2VJbigndXJsJylcclxuICAgICAgICAvL0BWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuICAgICAgICBUeXBlOiAnc21zJyB8ICdlbWFpbCc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IHRoaXMuVXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBUb2tlbjogdGhpcy5Ub2tlbixcclxuICAgICAgICAgICAgICAgIENhcHRjaGE6IHRoaXMuQ2FwdGNoYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcbiAgICAgICAgICAgICAgICBDYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFRva2VuOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuICAgICAgICAgICAgICAgIFR5cGU6IG5ldyBGb3JtQ29udHJvbCgnc21zJyksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTWF0Y2hWYWxpZGF0b3IgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFBhc3N3b3JkOiBzdHJpbmc7XHJcblx0XHRUb2tlbjogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0XHQvL1Rva2VuOiB0aGlzLlRva2VuLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VG9rZW46IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0UGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbmZpcm06IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQsIE1hdGNoVmFsaWRhdG9yKFwiUGFzc3dvcmRcIikgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCwgSHR0cFJlc3BvbnNlQmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0UHJvZmlsZV9BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRFbWFpbDogc3RyaW5nO1xyXG5cdFx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8UmVxdWVzdD4gPSB7fSBhcyBSZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0RW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um9sZXM6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGltcGxlbWVudHMgSHR0cFJlc3BvbnNlQmFzZU1vZGVsPFJlc3BvbnNlPiB7XHJcblx0XHRSZXN1bHQ6IHsgVXNlcjogVXNlck1vZGVsIH07XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFJlc3BvbnNlID0ge30gYXMgUmVzcG9uc2UpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGV4dHJhY3REYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5SZXN1bHQuVXNlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlVmlld01vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdEVtYWlsOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIFVzZXJNb2RlbCB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmFpbGVkTG9naW5Nb2RlbCB9IGZyb20gJy4vZmFpbGVkLWxvZ2luLm1vZGVsJztcclxuXHJcbmV4cG9ydCBtb2R1bGUgRmFpbGVkTG9naW5SZXBvcnRNb2RlbCB7XHJcbiAgICBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+e1xyXG4gICAgICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRWYWx1ZT86IEZhaWxlZExvZ2luUmVwb3J0TW9kZWwuUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJlcXVlc3RCb2R5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzcG9uc2UgIHtcclxuICAgICAgICBkYXRhOiBGYWlsZWRMb2dpbk1vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBGYWlsZWRMb2dpbk1vZGVsIHtcclxuICAgIFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgVHJ5RGF0ZTogRGF0ZTtcclxuICAgIE1hY0FkZHJlc3M6IHN0cmluZztcclxuICAgIElwQWRkcmVzczogc3RyaW5nO1xyXG4gICAgUmVhc29uOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KGdldFVzZXJNb2R1bGVDb25maWcpLnN1YnNjcmliZSh1c2VyQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCF1c2VyQ29uZmlnKSByZXR1cm47XHJcblx0XHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdXNlckNvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMge1xyXG5cdEdFVF9QUk9GSUxFID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVcIixcclxuXHRHRVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0R0VUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRHRVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEU7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEVfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVWaWV3QWN0aW9uID0gR2V0UHJvZmlsZSB8IEdldFByb2ZpbGVTdGFydCB8IEdldFByb2ZpbGVTdWNjZWVkIHwgR2V0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBVc2VyQWN0aW9uVHlwZXMge1xyXG5cdFVTRVJfU0VMRUNURUQgPSBcIltVU0VSXSBVU0VSX1NFTEVDVEVEXCIsXHJcblx0UkVGUkVTSF9VU0VSX0lORk8gPSBcIltVU0VSXSBSRUZSRVNIX1VTRVJfSU5GT1wiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VsZWN0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVc2VyQWN0aW9uVHlwZXMuVVNFUl9TRUxFQ1RFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlJFRlJFU0hfVVNFUl9JTkZPO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJBY3Rpb24gPSBVc2VyU2VsZWN0ZWRBY3Rpb24gfCBSZWZyZXNoVXNlckluZm9BY3Rpb247XHJcbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIi4vdXNlci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGF0YTogVXNlck1vZGVsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGF0YTogbmV3IFVzZXJNb2RlbCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwsIEVkaXRQcm9maWxlX0FwaU1vZGVsLCBQcm9maWxlVmlld01vZGVsLCBGYWlsZWRMb2dpblJlcG9ydE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdGNvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoKGNvbmZpZykgPT4gKHRoaXMuY29uZmlnID0gY29uZmlnKSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0UHJvZmlsZSgpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRBY2NvdW50SW5mbygpOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbiAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0PGFueT4oY29uZmlnLmVudi5zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnByb2ZpbGVJbmZvcm1hdGlvbilcclxuXHRcdFx0XHRcdC5sZXQoY29uZmlnLnJlc3BvbnNlVG9Vc2VySW5mbylcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRlZGl0UHJvZmlsZShkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQ8RWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudi5zZXJ2ZXIgKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZWRpdFByb2ZpbGUsIG1vZGVsKSxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSk7XHJcblx0fVxyXG5cdC8vIFRPRE86IHJlbW92ZVxyXG5cdGdldEluZm8oZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52LnNlcnZlciArIHRoaXMuY29uZmlnLmVuZHBvaW50cy5nZXRBY2NvdW50SW5mbywgbW9kZWwpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQuZmlsdGVyKCh1c2VyKSA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQubWFwKCh1c2VyKSA9PiB1c2VyLlJvbGVzLmluZGV4T2Yocm9sZSkgPiAtMSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfUFJPRklMRSA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVcIixcclxuXHRFRElUX1BST0ZJTEVfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NUQVJUXCIsXHJcblx0RURJVF9QUk9GSUxFX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX1NVQ0NFRURcIixcclxuXHRFRElUX1BST0ZJTEVfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0UHJvZmlsZUFjdGlvbiA9XHJcblx0fCBFZGl0UHJvZmlsZVxyXG5cdHwgRWRpdFByb2ZpbGVTdGFydFxyXG5cdHwgRWRpdFByb2ZpbGVTdWNjZWVkXHJcblx0fCBFZGl0UHJvZmlsZUZhaWxlZDtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IE9ic2VydmFibGUub2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKTtcclxuXHQvLyB9KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z29Ub1ZpZXckID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvdXNlci9wcm9maWxlXCIgXSk7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldFByb2ZpbGVTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFByb2ZpbGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy51c2VyU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEFjY291bnRJbmZvKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBHZXRQcm9maWxlU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBHZXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRyZWZyZXNoVXNlckluZm8kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFJlZnJlc2hVc2VySW5mb0FjdGlvbihkYXRhKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcbiAgICAgICAgR0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBHRVRfUkVTRVRfUEFTU1dPUkRfTElOSycsXHJcbiAgICAgICAgUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQnLFxyXG4gICAgICAgIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRUQgID0gJ1tVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRCcsXHJcbiAgICAgICAgRElTQUJMRV9HRVRfTElOSyAgICAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBESVNBQkxFX0dFVF9MSU5LJyxcclxuICAgICAgICBFTkFCTEVfR0VUX0xJTksgICAgICAgICAgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIEVOQUJMRV9HRVRfTElOSycsXHJcbiAgICAgICAgTUFYSU1VTV9UUllfSEFQUEVORCAgICAgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgICAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgICAgICAgICAgICAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRSZXNldFBhc3N3b3JkTGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX0ZBSUxFRDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEaXNhYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRElTQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgRW5hYmxlR2V0TGluayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBNYXhpbXVtVHJ5SGFwcGVuZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuTUFYSU1VTV9UUllfSEFQUEVORDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENoYW5nZWRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24gPVxyXG4gICAgICAgIEdldFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgfCBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydFxyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkXHJcbiAgICAgICAgfCBEaXNhYmxlR2V0TGlua1xyXG4gICAgICAgIHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3VjY2VlZFxyXG4gICAgICAgIHwgRW5hYmxlR2V0TGlua1xyXG4gICAgICAgIHwgTWF4aW11bVRyeUhhcHBlbmRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWRcclxuICAgICAgICB8IFBhc3N3b3JkQ2hhbmdlZEZhaWxlZDtcclxuIiwiaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb24sIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiBudW1iZXI7XHJcblx0bGFzdFJlcXVlc3RlZFRpbWU6IHN0cmluZztcclxuXHRkaXNhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdG51bWJlck9mUmVxdWVzdGVkOiAwLFxyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBudWxsLFxyXG5cdGRpc2FibGU6IGZhbHNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bnVtYmVyT2ZSZXF1ZXN0ZWQ6IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkICsgMSxcclxuXHRcdFx0XHRsYXN0UmVxdWVzdGVkVGltZTogRGF0ZS5ub3coKS50b1N0cmluZygpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkaXNhYmxlOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuRU5BQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogZmFsc2VcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUubnVtYmVyT2ZSZXF1ZXN0ZWQ7XHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlzYWJsZTtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG4gICAgICAgIENIQU5HRV9QQVNTV09SRCAgICAgICAgICA9ICdbVVNFUl1bUEFTU1dPUkRdIENIQU5HRV9QQVNTV09SRCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCAgID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVEFSVCcsXHJcbiAgICAgICAgUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gJ1tVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEJyxcclxuICAgICAgICBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCAgPSAnW1VTRVJdW1BBU1NXT1JEXSBQQVNTV09SRF9DSEFOR0VEX0ZBSUxFRCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgICAgICByZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICAgICAgcmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgICAgIHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZEFjdGlvbiA9XHJcbiAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkU3RhcnRcclxuICAgICAgICAgIHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkXHJcbiAgICAgICAgICB8IENoYW5nZVBhc3N3b3JkRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQWN0aW9uLCBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIlxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDaGFuZ2VQYXNzd29yZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuQ0hBTkdFX1BBU1NXT1JEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSAnQHNvdXNoaWFucy9zaGFyZWQnO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZUFjdGlvbiwgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcyB9IGZyb20gJy4vZWRpdC1wcm9maWxlLmFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogJ3ByaXN0aW5lJ1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0UHJvZmlsZUFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAnZGlydHknXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiAncGVuZGluZydcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ3N1Y2NlZWQnXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogJ2ZhaWxlZCdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaEFjdGlvblR5cGVzIHtcclxuICAgIFNFQVJDSCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0gnLFxyXG4gICAgU0VBUkNIX1NUQVJUID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVEFSVCcsXHJcbiAgICBTRUFSQ0hfU1VDQ0VFRCA9ICdbVVNFUl1bU0VBUkNIXSBTRUFSQ0hfU1VDQ0VFRCcsXHJcbiAgICBTRUFSQ0hfRkFJTEVEID0gJ1tVU0VSXVtTRUFSQ0hdIFNFQVJDSF9GQUlMRUQnLFxyXG4gICAgQ0xFQVJfU0VBUkNIRURfVVNFUiA9ICdbVVNFUl1bU0VBUkNIXSBDTEVBUl9TRUFSQ0hFRF9VU0VSJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0g7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBDbGVhclNlYXJjaGVkVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuQ0xFQVJfU0VBUkNIRURfVVNFUjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFNlYXJjaEFjdGlvbiA9XHJcbiAgICBTZWFyY2hcclxuICAgIHwgU2VhcmNoU3RhcnRBY3Rpb25cclxuICAgIHwgU2VhcmNoU3VjY2VlZFxyXG4gICAgfCBTZWFyY2hGYWlsZWRcclxuICAgIHwgQ2xlYXJTZWFyY2hlZFVzZXI7IiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hBY3Rpb25UeXBlcywgU2VhcmNoQWN0aW9uIH0gZnJvbSBcIi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IHt9IGFzIFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogU2VhcmNoQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImRpcnR5XCIsXHJcblx0XHRcdFx0ZGF0YTogbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIixcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLkNMRUFSX1NFQVJDSEVEX1VTRVI6IHtcclxuXHRcdFx0cmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0U3RhdHVzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc3RhdHVzO1xyXG5leHBvcnQgdmFyIGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyB1c2VyUmVkdWNlciBmcm9tIFwiLi9kYXNoYm9hcmQvYWNjb3VudC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlciBmcm9tIFwiLi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgY2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGVkaXRQcm9maWxlUmVkdWNlciBmcm9tIFwiLi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgc2VhcmNoUmVkdWNlciBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLlN0YXRlO1xyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIuU3RhdGU7XHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLlN0YXRlO1xyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVkdWNlcnMgPSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIudXNlclJlZHVjZXIsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5yZWR1Y2VyLFxyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyLFxyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIucmVkdWNlcixcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwidXNlclwiOiBVc2VyU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8VXNlclN0YXRlPihcInVzZXJcIik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5leHBvcnQgY29uc3QgaXNTaWduZWRJbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RmVhdHVyZVN0YXRlLFxyXG5cdChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5yZXNldFBhc3N3b3JkUmVxdWVzdFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldFN0YXR1c1xyXG4pO1xyXG5cclxuLy8jcmVnaW9uIHVzZXJcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJJbmZvcm1haW9uU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSwgdXNlclJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBzZWFyY2hcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlYXJjaFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoVmlldyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTZWFyY2hTdGF0ZSwgc2VhcmNoUmVkdWNlci5nZXRTdGF0dXMpO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhcHBSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWRhc2hib2FyZC1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDwhLS0gPHJvdXRlci1vdXRsZXQgbmFtZT1cImxpbmtzXCI+PC9yb3V0ZXItb3V0bGV0PiAtLT5cclxuPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNib3gtbGVmdHtiYWNrZ3JvdW5kOiNmZmZ9I2JveC1ib3R0b217YmFja2dyb3VuZDojMmIwMDMzfSNib3gtcmlnaHR7YmFja2dyb3VuZDojMDAwODMzO3BhZGRpbmctdG9wOjEwcHghaW1wb3J0YW50O3BhZGRpbmctYm90dG9tOjEwcHghaW1wb3J0YW50fSNib3gtcmlnaHQgZGl2e2JhY2tncm91bmQ6I2ZmZjtvcGFjaXR5Oi41fSNiYW5uZXI6bm90KC5hY3RpdmUpe2hlaWdodDoxMDAlOy13ZWJraXQtZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDEuNSkgb3BhY2l0eSguMikgYmx1cigycHgpO2ZpbHRlcjpncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygxLjUpIG9wYWNpdHkoLjIpIGJsdXIoMnB4KX0jczF7YmFja2dyb3VuZDojYWFhfSNzMntiYWNrZ3JvdW5kOiNiYmJ9I3Mze2JhY2tncm91bmQ6I2NjY30ucGVyc29uYWwtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpO3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjEwJTt3aWR0aDo5MCU7aGVpZ2h0OjQ2OXB4fS5wZXJzb25hbC1pbmZvIGgye2NvbG9yOiMwMGJjZDQ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToyNHB4O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1saWdodCFpbXBvcnRhbnR9LnBlcnNvbmFsLWluZm8gaDZ7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxMnB4O2Zsb2F0OnJpZ2h0O3dpZHRoOjUwJTttYXJnaW46MDtjb2xvcjojNTU1O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNlY2VjZWN9LnBlcnNvbmFsLWluZm8gcHtmbG9hdDpyaWdodDt3aWR0aDozMCU7bWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7cGFkZGluZy1yaWdodDozMHB4O2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNlY2VjZWN9LnBlcnNvbmFsLWluZm8gZGl2e3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHg7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NTJweDtyaWdodDoxN3B4fS5xdWljay1ib3h7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDo1MnB4O3BhZGRpbmctdG9wOjc5cHh9LnF1aWNrLWJ0bntiYWNrZ3JvdW5kLWNvbG9yOiMwMGJjZDQ7bWFyZ2luOjEycHggMTBweDtoZWlnaHQ6MTAwcHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MTAwcHg7Zm9udC1zaXplOjE3cHg7Y29sb3I6I2ZmZn0uYmFubmVyLXNlY3Rpb257dGV4dC1hbGlnbjpjZW50ZXJ9LmluZm8tc2VjdGlvbntwYWRkaW5nOjYwcHggMjVweCAxMHB4O2JhY2tncm91bmQtY29sb3I6I2Y3ZjdmNztiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3d3dy50b3B0YWwuY29tL2Rlc2lnbmVycy9zdWJ0bGVwYXR0ZXJucy9wYXR0ZXJucy9ncmV5LnBuZykhaW1wb3J0YW50O2hlaWdodDoxMDQwcHg7cGFkZGluZy1ib3R0b206MTIwcHghaW1wb3J0YW50fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXIkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0Ly8gaXNfYWdlbnQgOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFwcFJlZHVjZXIuVXNlclN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGFwcFJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0Ly8gdGhpcy5pc19hZ2VudCA9IHNpZ25pblNlcnZpY2UuaXNfYWdlbnQoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLWRhc2hib2FyZC1saW5rc1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD0ncm93JyBmeExheW91dFdyYXAgaWQ9XCJjb25cIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIjMxXCIgY2xhc3M9J2xpbmsnIG1hdC1yYWlzZWQtYnV0dG9uIFtyb3V0ZXJMaW5rXT0nbGluay5yb3V0ZScgKm5nRm9yPSdsZXQgbGluayBvZiBsaW5rcyQgfCBhc3luYyc+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD0nY29sdW1uJyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGNvbG9yPSdwcmltYXJ5Jz57e2xpbmsuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tsaW5rLnRpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdkZXNjcmlwdGlvbic+e3tsaW5rLmRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY29uIFtmeGZsZXhde21hcmdpbi1yaWdodDoyNXB4fTpob3N0e3dpZHRoOjEwMCU7cGFkZGluZzoyNXB4IDI1cHggMH1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjQ4cHg7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1idXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW4tYm90dG9tOjI1cHh9LnRpdGxle21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjVweH0uZGVzY3JpcHRpb257b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjkwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHRsaW5rczogYW55W107XHJcblx0bGlua3MkOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLmxpbmtzJCA9IHRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQubWFwKGRhdGEgPT4gZGF0YS5kYXNoYm9hcmRMaW5rcyk7XHJcblx0XHR0aGlzLmxpbmtzID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGl0bGU6IFwiw5nChcOYwrTDmMKnw5nCh8OYwq/DmcKHIMOYwq3DmMKzw5jCp8OYwqggw5rCqcOYwqfDmMKxw5vCjMOYwrHDm8KMXCIsXHJcblx0XHRcdFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcHJvZmlsZVwiLFxyXG5cdFx0XHRcdC8vIGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHRcdGljb246IFwiY3JlZGl0X2NhcmRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cm91dGU6IFwiL3VzZXIvcGFuZWwvcGFzc3dvcmQvY2hhbmdlXCIsXHJcblx0XHRcdFx0dGl0bGU6IFwiw5jCqsOYwrrDm8KMw5vCjMOYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIsXHJcblx0XHRcdFx0Ly8gZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJzZWN1cml0eVwiXHJcblx0XHRcdH1cclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduSW5BY3Rpb25UeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL2F1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0UHJvZmlsZSwgR2V0UHJvZmlsZVN1Y2NlZWQgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFJlZnJlc2hVc2VySW5mb0FjdGlvbiB9IGZyb20gXCIuLi9kYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlckVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblx0Ly8gQEVmZmVjdCgpXHJcblx0Ly8gdXBkYXRlUHJvZmlsZUluZm9ybWF0aW9uJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKS5waXBlKFxyXG5cdC8vIFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0Ly8gXHRtYXAodXNlciA9PiB7XHJcblx0Ly8gXHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZVN1Y2NlZWQodXNlcik7XHJcblx0Ly8gXHR9KVxyXG5cdC8vICk7XHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0QWNjb3VudEluZm8kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHRARWZmZWN0KClcclxuXHRzaWdub3V0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVClcclxuXHRcdC5waXBlKG1hcCgoKSA9PiBuZXcgUmVmcmVzaFVzZXJJbmZvQWN0aW9uKHt9IGFzIFVzZXJNb2RlbCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4RmxleD1cIjQ1MHB4XCIgKm5nSWY9XCIodXNlclN0YXR1cyQgfCBhc3luYykgPT0gJ3N1Y2NlZWQnXCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIDwhLS0ge3sodXNlciB8IGFzeW5jKS5MYXN0TmFtZSB9fcOYwowge3sodXNlciB8IGFzeW5jKS5GaXJzdE5hbWUgfX0gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgIDwhLS0ge3sodXNlciB8IGFzeW5jKS5FbWFpbH19IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmxvY2FsX2dyb2Nlcnlfc3RvcmU8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMK0w5nChsOYwqfDmMKzw5nChzwvcD5cclxuICAgICAgICA8IS0tIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLl9pZCB9fTwvcD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyBmeExheW91dEFsaWduPSdjZW50ZXIgY2VudGVyJz5cclxuICAgICAgICA8bWF0LWljb24gZnhGbGV4PSdub2dyb3cnPmVtYWlsPC9tYXQtaWNvbj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD0nMTVweCc+PC9kaXY+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nCvsOYwrPDmMKqIMOYwqfDmcKEw5rCqcOYwqrDmMKxw5nCiMOZwobDm8KMw5rCqcObwow8L3A+XHJcbiAgICAgICAgPCEtLSA8cCBmeEZsZXg9JzYwJyBmeExheW91dEFsaWduPVwiZW5kXCI+e3sodXNlciB8IGFzeW5jKS5FbWFpbCB9fTwvcD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VyOiBPYnNlcnZhYmxlPFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+O1xyXG5cdHVzZXJTdGF0dXMkOiBPYnNlcnZhYmxlPHJlc3BvbnNlU3RhdHVzVHlwZXM+O1xyXG5cdGZvcm1Hcm91cCA9IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0dXNlckRhdGFMb2FkZWQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHR1c2VyTm90Rm91bmQkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMudXNlciA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRTZWFyY2hTdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnVzZXJTdGF0dXMkLnN1YnNjcmliZSh2YWx1ZSA9PiB0aGlzLnVzZXJEYXRhTG9hZGVkJC5uZXh0KCFcInByaXN0aW5lfGRpcnR5fHBlbmRpbmdcIi5pbmNsdWRlcyh2YWx1ZSkpKTtcclxuXHR9XHJcblx0c2VhcmNoKCkge1xyXG5cdFx0aWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG4vLyBpbXBvcnQgeyBNZFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAgICAgc2VsZWN0b3I6ICd1c2VyLWNoYW5nZS1wYXNzd29yZCcsXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOawqnDmMKxw5jCp8OYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiQ29uZmlybVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKqw5jCusObwozDm8KMw5jCsSDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvdXNlci9wYW5lbFwiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICAgICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICAgICAgICBAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKVxyXG4gICAgICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicHJvZmlsZS1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcblxyXG4gIFxyXG4gIDxuZ3MtZm9ybS12aWV3ICNmb3JtIFtpZF09XCJmb3JtSWRcIiBbY2FyZF09XCJ0cnVlXCIgKGFjY2VwdCk9XCJlZGl0UHJvZmlsZShmb3JtLmZvcm1Hcm91cClcIiAoY2FuY2VsKT1cImdvYmFjaygpXCIgPjwvbmdzLWZvcm0tdmlldz5cclxuICA8IS0tIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXRQcm9maWxlKClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIuLlwiIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+w5nCiMObwozDmMKxw5jCp8ObwozDmMK0PC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9mb3JtPiAtLT5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSB1c2VySW5mbzogYW55O1xyXG5cdEBJbnB1dCgpIGZvcm1JZDogc3RyaW5nO1xyXG5cdEBJbnB1dChcInJvbGVzXCIpIHJvbGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0QElucHV0KCkgZ3JvdXBzOiBzdHJpbmdbXTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0ZWRpdFByb2ZpbGUoZm9ybTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWZvcm0udmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdChmb3JtLnZhbHVlKTtcclxuXHR9XHJcblx0Z29iYWNrKCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi4uXCIgXSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1yZXNldC1wYXNzd29yZC1yZXF1ZXN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPGgzPsOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqogw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvaDM+XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8cD7DmMKow5jCscOYwqfDm8KMIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrEgw5jCtMOZwoXDmMKnw5jCscOZwocgw5jCqsOZwoTDmcKBw5nChiDDmMKuw5nCiMOYwq8gw5jCscOYwqcgw5nCiMOYwqfDmMKxw5jCryDDmcKGw5nChcOYwqfDm8KMw5vCjMOYwq88L3A+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZnhGbGV4RmlsbCBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzbXNcIj7DmcK+w5vCjMOYwqfDmcKFw5rCqTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImVtYWlsXCI+w5nCvsOYwrPDmMKqIMOYwqfDmcKEw5rCqcOYwqrDmMKxw5nCiMOZwobDm8KMw5rCqcObwow8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOZwofDmcKFw5jCscOYwqfDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiVXNlcm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgfHwgKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+LS0+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj0nIShjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJz5cclxuICAgICAgICAgIMOYwqjDmMKnw5jCssObwozDmMKnw5jCqMObwowgw5jCscOZwoXDmMKyIMOYwrnDmMKow5nCiMOYwrFcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpICYmICEobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgIHt7dGltZXIkIHwgYXN5bmN9fSDDmMKrw5jCp8OZwobDm8KMw5nChyDDmMKqw5jCpyDDmMKnw5nChcOawqnDmMKnw5nChiDDmMKvw5jCsSDDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKvw5nCiMOYwqjDmMKnw5jCscOZwocgw5jCr8OYwrHDm8KMw5jCp8OZwoHDmMKqIMOZwr7Dm8KMw5jCp8OZwoXDmsKpLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9JyhtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCucOYwq/DmcKFIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqpcclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2F1dGgvc2lnbmluJz7DmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L2E+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9mb3JtPlxyXG5gLFxyXG4gICAgICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgICAgIEBPdXRwdXQoKSBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdD4oKTtcclxuXHJcbiAgICAgICAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICAgICAgQElucHV0KCkgbnVtYmVyT2ZSZXF1ZXN0ZWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgICAgICBASW5wdXQoKSBjYW5SZXF1ZXN0UGluOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgICAgIEBJbnB1dCgpIHNldCBwZW5kaW5nKGlzUGVuZGluZzogYm9vbGVhbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICAgICAgICBtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyJCA9IE9ic2VydmFibGUudGltZXIoMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gaSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50YWtlV2hpbGUoaSA9PiBpICogMTAwIDw9IDMwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoaSA9PiAzMDAwIC0gaSAqIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZSZXF1ZXN0ZWQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICh0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5nZXRWYWx1ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ8OYwrnDmMKvw5nChSDDmMKnw5nChcOawqnDmMKnw5nChiAuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnw5nCvsObwozDmMKnw5nChcOawqkgw5jCrMOYwq/Dm8KMw5jCryDDmMKow5jCscOYwqfDm8KMIMOYwrTDmcKFw5jCpyDDmMKnw5jCscOYwrPDmMKnw5nChCDDmsKvw5jCscOYwq/Dm8KMw5jCry4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgJycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlYXJjaFN0YXJ0QWN0aW9uLCBTZWFyY2hGYWlsZWQsIFNlYXJjaEFjdGlvblR5cGVzLCBTZWFyY2hTdWNjZWVkIH0gZnJvbSBcIi4vc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGNhblNlYXJjaCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgU2VhcmNoU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c2VhcmNoJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSF9TVEFSVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpID0+IHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZ2V0SW5mbyhkYXRhKS5waXBlKFxyXG5cdFx0XHRcdG1hcChyZXMgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcyA9PSBudWxsID8gbmV3IFNlYXJjaEZhaWxlZCgpIDogbmV3IFNlYXJjaFN1Y2NlZWQocmVzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBTZWFyY2hGYWlsZWQoKSkpXHJcblx0XHRcdCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi8uLi9zZWFyY2gtYWNjb3VudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0bGV0IG1vZGVsID0gbmV3IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCh7IEVtYWlsOiBwYXJhbXMuRW1haWwgfSBhcyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpO1xyXG5cdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2gobW9kZWwpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmQgfSBmcm9tIFwiLi4vY2hhbmdlLXBhc3N3b3JkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPHVzZXItY2hhbmdlLXBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSdjaGFuZ2VQYXNzd29yZCgkZXZlbnQpJ1xyXG4gICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgID48L3VzZXItY2hhbmdlLXBhc3N3b3JkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXAgPSBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdENoYW5nZVBhc3N3b3JkTW9kZWwgPSBuZXcgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbykuc3Vic2NyaWJlKHVzZXJJbmZvID0+IHtcclxuXHRcdFx0aWYgKCF1c2VySW5mbykgcmV0dXJuO1xyXG5cdFx0XHQvLyBUT0RPOlxyXG5cdFx0XHQvLyB0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuVXNlcm5hbWUgPSB1c2VySW5mby5Vc2VybmFtZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRjaGFuZ2VQYXNzd29yZChldmVudCkge1xyXG5cdFx0dGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsLlBhc3N3b3JkID0gdGhpcy5mb3JtR3JvdXAuZ2V0KFwiUGFzc3dvcmRcIikudmFsdWU7XHJcblxyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2hhbmdlUGFzc3dvcmQodGhpcy5DaGFuZ2VQYXNzd29yZE1vZGVsKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsLCBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGUgfSBmcm9tIFwiLi4vZWRpdC1wcm9maWxlLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdC1jb250aWFuZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxwcm9maWxlLWVkaXRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J3VwZGF0ZVByb2ZpbGUoJGV2ZW50KSdcclxuICAgICAgICAgICAgICAgIFt1c2VySW5mb109XCJ1c2VySW5mb3JhbWF0aW9uJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgIFtyb2xlc109XCJyb2xlcyRcIlxyXG5cdFx0XHRcdFtncm91cHNdPVwiZ3JvdXBzIHwgYXN5bmNcIlxyXG5cdFx0XHRcdFtmb3JtSWRdPVwiKGNvbmZpZyR8YXN5bmMpPy5mb3Jtcy5wcm9maWxlX2VkaXRcIlxyXG4gICAgICAgICAgICAgID48L3Byb2ZpbGUtZWRpdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlckluZm9yYW1hdGlvbiQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRyb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0Y29uZmlnJDogT2JzZXJ2YWJsZTxVc2VyTW9kdWxlQ29uZmlnPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5BcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLnVzZXJJbmZvcmFtYXRpb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy5yb2xlcyQgPSB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QXBwQ29uZmlnKVxyXG5cdFx0XHQuZmlsdGVyKGNvbmZpZyA9PiBjb25maWcgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHQubWFwKGNvbmZpZyA9PiBjb25maWcuQ29uZmlnLlJvbGVzKTtcclxuXHRcdC8vIFRPRE86XHJcblx0XHQvLyB0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IE9ic2VydmFibGUub2YoWyBcInRlc3QxXCIsIFwidGVzdDJcIiBdKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlUHJvZmlsZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0UHJvZmlsZShkYXRhKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1wcm9maWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5nCvsOYwrHDmcKIw5nCgcOYwqfDm8KMw5nChDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbmZvXCI+XHJcbiAgICAgICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7aXRlbVswXX19PC9wPlxyXG4gICAgICAgICAgICA8cCBmeEZsZXg9JzYwJz57e2l0ZW1bMV19fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoU8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkZpcnN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOYwq7DmMKnw5nChsOZwojDmMKnw5jCr8Oawq/Dm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5MYXN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuVXNlcm5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwoc8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLk1vYmlsZU51bWJlciB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqzDmcKGw5jCs8ObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMKqw5nCiMOZwoTDmMKvPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7KGlkZW50aWZpZXJUeXBlJCB8IGFzeW5jKX19PC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5JZGVudGlmaWNhdGlvbk5vIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCucOYwrbDmcKIw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nLi4nPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9J2VkaXQnPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpbmZvcm1hdGlvbihpbmZvcm1hdGlvbjogVXNlck1vZGVsKSB7XHJcblx0XHRpZiAoIWluZm9ybWF0aW9uKSByZXR1cm47XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoaW5mb3JtYXRpb24pLmZvckVhY2goayA9PiB0aGlzLmluZm8ucHVzaChbIGssIGluZm9ybWF0aW9uW2tdIF0pKTtcclxuXHR9XHJcblx0QElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHRpbmZvOiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YVN0YXR1cyRdPSdkYXRhU3RhdHVzJCdcclxuICAgICAgICAgICAgPjwvdXNlci1wcm9maWxlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGF0YVN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuZGF0YVN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mb3JhbXRpb25TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlRWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld0VmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXNlckVmZmVjdHMgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlcnMgfSBmcm9tIFwiLi91c2VyLnJlZHVjZXJzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNlYXJjaENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZExpbmtzQ29tcG9uZW50LFxyXG5cdFx0UmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQsXHJcblx0XHRGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1VzZXJNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFVzZXJNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzVXNlck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwidXNlclwiLCBVc2VyUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0Ly8gUmVzZXRQYXNzd29yZFJlcXVlc3RFZmZlY3RzLFxyXG5cdFx0XHRFZGl0UHJvZmlsZUVmZmVjdHMsXHJcblx0XHRcdC8vIENoYW5nZVBhc3N3b3JkRWZmZWN0cyxcclxuXHRcdFx0UHJvZmlsZVZpZXdFZmZlY3RzLFxyXG5cdFx0XHQvLyBTZWFyY2hFZmZlY3RzLFxyXG5cdFx0XHRVc2VyRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzVXNlck1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcInVzZXIvcGFuZWxcIixcclxuXHRcdGNvbXBvbmVudDogRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwcm9maWxlXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGUvZWRpdFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwicGFzc3dvcmQvY2hhbmdlXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBDaGFuZ2VQYXNzd29yZENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHJcblx0XHRwYXRoOiBcImFkbWluL3VzZXJcIixcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHsgcGF0aDogXCJtYW5hZ21lbnRcIiwgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnQgfSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiOkVtYWlsXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0XHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBhdGg6IFwicHJvZmlsZS1lZGl0XCIsXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHBhdGg6IFwiY2hhbmdlLXBhc3N3b3JkXCIsXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudDogQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmdzVXNlclJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL3VzZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIGNhdGNoRXJyb3IsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFVzZXJGYWNhZGVTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7fVxyXG5cdGdldERpc3BsYXlOYW1lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLmxldCh0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLm1hcFVzZXJEaXNwbGF5TmFtZSk7XHJcblx0XHQvLyAucGlwZShmaWx0ZXIoZGlzcGxheU5hbWUgPT4gZGlzcGxheU5hbWUgIT09IHVuZGVmaW5lZCkpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZ2V0U3RhdHVzIiwidXNlclJlZHVjZXIudXNlclJlZHVjZXIiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIucmVkdWNlciIsImNoYW5nZVBhc3N3b3JkLnJlZHVjZXIiLCJzZWFyY2hSZWR1Y2VyLnJlZHVjZXIiLCJlZGl0UHJvZmlsZVJlZHVjZXIucmVkdWNlciIsImdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXROdW1iZXJPZlJlcXVlc2V0ZWQiLCJyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0U3RhdHVzIiwiZ2V0QWNjb3VudEluZm8iLCJ1c2VyUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsInNlYXJjaFJlZHVjZXIuZ2V0U3RhdHVzIiwiYXBwUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsIkJlaGF2aW9yU3ViamVjdCIsIkZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvIiwiRmVhdHVyZVJlZHVjZXIuZ2V0U2VhcmNoU3RhdHVzIiwiRmVhdHVyZVJlZHVjZXIuZ2V0VXNl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
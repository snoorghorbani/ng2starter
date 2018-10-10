import { InjectionToken, Injectable, Inject, NgModule, Component, Input, Output, EventEmitter, defineInjectable, inject } from '@angular/core';
import { map, filter, take, switchMap, combineLatest, catchError, takeWhile } from 'rxjs/operators';
import { Store, createSelector, createFeatureSelector, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { getUserModuleConfig, getAppConfig } from '@soushians/config';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { stringTemplate, MatchValidator } from '@soushians/shared';
import { getUser, SignInActionTypes } from '@soushians/authentication';
import { __decorate, __metadata } from 'tslib';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of, BehaviorSubject as BehaviorSubject$1 } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsFormModule } from '@soushians/form';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UserModel {
    constructor() {
        this.Roles = [];
        this.Groups = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
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
    responseToUserInfo: user$ => user$,
    mapUserDisplayName: user$ => user$.pipe(map(user => user.Username))
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
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
/** @type {?} */
const getAccountInfo = (state) => state.data;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.configurationService.config$.subscribe(config => (this.config = config));
        setTimeout(() => {
            this.store.dispatch(new GetProfile());
        }, 999);
    }
    /**
     * @return {?}
     */
    getAccountInfo() {
        return this.configurationService.config$.pipe(filter(config => config.endpoints.profileInformation != ""), take(1), combineLatest(this.store.select(getUser)), switchMap(([config, user]) => {
            debugger;
            return this.http
                .get(stringTemplate(config.env[config.server] + config.endpoints.profileInformation, {
                user: user.User
            }))
                .let(config.responseToUserInfo)
                .pipe(map((response) => {
                /** @type {?} */
                const user = Object.assign({}, response);
                if (user.Role) {
                    user.Roles = [user.Role];
                }
                return user;
            }));
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editProfile(data) {
        /** @type {?} */
        const model = new EditProfile_ApiModel.Request(data);
        return this.http
            .put(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.editProfile, model), model.getRequestBody())
            .pipe(map(response => new EditProfile_ApiModel.Response(response).extractData()));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getInfo(data) {
        /** @type {?} */
        const model = new ProfileViewModel.Request(data);
        return this.http
            .get(stringTemplate(this.config.env[this.config.server] + this.config.endpoints.getAccountInfo, model))
            .pipe(map(response => response));
    }
    /**
     * @param {?} role
     * @return {?}
     */
    is_role(role) {
        return this.store
            .select(getAccountInfo)
            .pipe(filter(user => user && user.Roles != undefined), take(1), map(user => user.Roles.indexOf(role) > -1));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        // 		.catch(() => of(new EditProfileFailed()));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(map(res => new GetProfileSucceed(res)), catchError(() => of(new GetProfileFailed())))));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const ResetPasswordRequestActionTypes = {
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
const initialState$1 = {
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
/** @type {?} */
var getNumberOfRequeseted = (state) => state.numberOfRequested;
/** @type {?} */
var getStatus = (state) => state.disable;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const ChangePasswordActionTypes = {
    CHANGE_PASSWORD: "[USER][PASSWORD] CHANGE_PASSWORD",
    PASSWORD_CHANGED_START: "[USER][PASSWORD] PASSWORD_CHANGED_START",
    PASSWORD_CHANGED_SUCCEED: "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED",
    PASSWORD_CHANGED_FAILED: "[USER][PASSWORD] PASSWORD_CHANGED_FAILED",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$2 = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$3 = {
    status: "pristine"
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
const SearchActionTypes = {
    SEARCH: "[USER][SEARCH] SEARCH",
    SEARCH_START: "[USER][SEARCH] SEARCH_START",
    SEARCH_SUCCEED: "[USER][SEARCH] SEARCH_SUCCEED",
    SEARCH_FAILED: "[USER][SEARCH] SEARCH_FAILED",
    CLEAR_SEARCHED_USER: "[USER][SEARCH] CLEAR_SEARCHED_USER",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$4 = {
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
/** @type {?} */
var getStatus$3 = (state) => state.status;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const UserReducers = {
    user: userReducer,
    resetPasswordRequest: reducer,
    changePassword: reducer$1,
    searchView: reducer$3,
    editProfile: reducer$2
};
/** @type {?} */
const selectFeatureState = createFeatureSelector("user");
/** @type {?} */
const getUserInforamtionStatus = createSelector(selectFeatureState, (state) => state.user.loaded);
/** @type {?} */
const isSignedIn = createSelector(selectFeatureState, (state) => state.user.loaded);
/** @type {?} */
const selectResetPasswordRequestState = createSelector(selectFeatureState, (state) => state.resetPasswordRequest);
/** @type {?} */
const getNumberOfRequeseted$1 = createSelector(selectResetPasswordRequestState, getNumberOfRequeseted);
/** @type {?} */
const getResetPasswordRequestStatus = createSelector(selectResetPasswordRequestState, getStatus);
/** @type {?} */
const selectUserInformaionState = createSelector(selectFeatureState, (state) => state.user);
/** @type {?} */
const getAccountInfo$2 = createSelector(selectUserInformaionState, getAccountInfo);
/** @type {?} */
const selectSearchState = createSelector(selectFeatureState, (state) => state.searchView);
/** @type {?} */
const getSearchStatus = createSelector(selectSearchState, getStatus$3);
//#endregion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChangePasswordComponent {
    constructor() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    submit() { }
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
                selector: "user-change-password",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DashboardLinksComponent {
    /**
     * @param {?} userConfigurationService
     * @param {?} store
     */
    constructor(userConfigurationService, store) {
        this.userConfigurationService = userConfigurationService;
        this.store = store;
        this.links$ = this.userConfigurationService.config$.pipe(map(data => data.dashboardLinks));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ResetPasswordRequestComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100).pipe(map(i => i + 1), takeWhile(i => i * 100 <= 3000), map(i => 3000 - i * 100));
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
            /** @type {?} */
            let message = this.maximumResendingHappend$.getValue()
                ? "عدم امکان ..."
                : "پیامک جدید برای شما ارسال گردید.";
            this.snackBar.open(message, "", {
                duration: 3000
            });
        }
    }
}
ResetPasswordRequestComponent.decorators = [
    { type: Component, args: [{
                selector: "user-reset-password-request",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            /** @type {?} */
            let model = new ProfileViewModel.Request(/** @type {?} */ ({ Email: params["Email"] }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(filter(config => config != undefined), map(config => config.Config.Roles));
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = of(["test1", "test2"]);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DashboardContainerComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.user$ = this.store.select(getAccountInfo);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
  <router-outlet name="ngs-user-profile-view"></router-outlet>
  <router-outlet></router-outlet>
  <!-- <mat-card>
    <mat-card-header>
      <mat-card-title>اطلاعات پروفایل</mat-card-title>
    </mat-card-header>
    <mat-card-content *ngIf='dataStatus$ | async'>
        <div class='list-item' fxFlexLayout='row' *ngFor="let item of info">
            <p fxFlex='40'>{{item[0]}}</p>
            <p fxFlex='60'>{{item[1]}}</p>
        </div>
     
    </mat-card-content>

    <mat-card-actions align="end">
      <button mat-button color="primary" routerLink='..'>بازگشت</button>
      <button mat-raised-button color="primary" routerLink='edit'>ویرایش</button>
    </mat-card-actions>
  </mat-card> -->
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
      </div> -->`,
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
const NgsUserRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const NgsUserModuleOutlets = {
    ngs_user_profile_view: "ngs-user-profile-view",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    getInfo() {
        return this.store.select(getAccountInfo$2);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { UserModel, NgsUserModule, NgsUserRoutingModule, NgsUserModuleOutlets, UserService, UserFacadeService, getAccountInfo$2 as getAccountInfo, UserActionTypes, ChangePasswordContainerComponent as ɵr, reducer$1 as ɵw, ChangePasswordComponent as ɵj, getAccountInfo as ɵu, userReducer as ɵt, DashboardContainerComponent as ɵq, DashboardLinksComponent as ɵm, FeatureContainerComponent as ɵp, UserEffects as ɵbb, EditProfileEffects as ɵz, reducer$2 as ɵy, ProfileEditContainerComponent as ɵs, ProfileEditComponent as ɵk, ProfileContainerComponent as ɵl, ProfileViewEffects as ɵba, ProfileComponent as ɵi, reducer as ɵv, ResetPasswordRequestComponent as ɵo, reducer$3 as ɵx, SearchComponent as ɵh, UserConfigurationService as ɵn, MODULE_CONFIG_TOKEN as ɵa, RootNgsUserModule as ɵb, UserReducers as ɵd, selectFeatureState as ɵf, selectUserInformaionState as ɵg, routes as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXVzZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXIubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC91c2VyLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2FjY291bnQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLWVkaXQvZWRpdC1wcm9maWxlLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvdXNlci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0L3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb250YWluZXIvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy91c2VyL2xpYi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3VzZXIucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvdXNlci9saWIvbW9kZWxzL3VzZXItb3V0bGV0cy5lbnVtLnRzIiwibmc6Ly9Ac291c2hpYW5zL3VzZXIvbGliL3NlcnZpY2VzL3VzZXIuZmFjYWRlLXNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Ly8gRmlyc3ROYW1lOiBzdHJpbmc7XHJcblx0Ly8gTGFzdE5hbWU6IHN0cmluZztcclxuXHQvLyBVc2VybmFtZTogc3RyaW5nO1xyXG5cdERpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblx0Ly8gVXNlcm5hbWU6IHN0cmluZztcclxuXHQvLyBNb2JpbGVOdW1iZXI6IHN0cmluZztcclxuXHQvLyBTZXg6IHN0cmluZztcclxuXHQvLyBCaXJ0aGRhdGU6IHN0cmluZztcclxuXHRFbWFpbDogc3RyaW5nO1xyXG5cdC8vIElkZW50aWZpY2F0aW9uTm86IHN0cmluZztcclxuXHQvLyBJZGVudGlmaWVyVHlwZTogc3RyaW5nO1xyXG5cdC8vIFJlZ2lzdGVyRGF0ZTogc3RyaW5nO1xyXG5cdC8vIFVzZXJUeXBlOiBzdHJpbmc7XHJcblx0Um9sZXM6IHN0cmluZ1tdO1xyXG5cdEdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLlJvbGVzID0gW107XHJcblx0XHR0aGlzLkdyb3VwcyA9IFtdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyTW9kdWxlQ29uZmlnIHtcclxuXHRzZXJ2ZXI/OiBzdHJpbmc7XHJcblx0ZW52Pzoge1xyXG5cdFx0cHJvZHVjdGlvbjogYm9vbGVhbjtcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogc3RyaW5nO1xyXG5cdFx0c2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHQvLyByZXNldFBhc3N3b3JkUmVxdWVzdDogc3RyaW5nO1xyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ/OiBzdHJpbmc7XHJcblx0XHRlZGl0UHJvZmlsZT86IHN0cmluZztcclxuXHRcdGdldEFjY291bnRJbmZvPzogc3RyaW5nO1xyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uPzogc3RyaW5nO1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZDogc3RyaW5nO1xyXG5cdH07XHJcblx0Zm9ybXM/OiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IHN0cmluZztcclxuXHR9O1xyXG5cdGRhc2hib2FyZExpbmtzPzoge1xyXG5cdFx0cm91dGU6IHN0cmluZztcclxuXHRcdGljb246IHN0cmluZztcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdHJlc3BvbnNlVG9Vc2VySW5mbz86ICh1c2VyOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHRtYXBVc2VyRGlzcGxheU5hbWU/OiAodXNlcjogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFVzZXJNb2R1bGVDb25maWcgPSB7XHJcblx0c2VydmVyOiBcImZyb250ZW5kX3NlcnZlclwiLFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwidXNlci9tb2R1bGUvZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCIsXHJcblx0XHRzZXJ2ZXI6IFwidXNlci9tb2R1bGUvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0Ly8gcmVzZXRQYXNzd29yZFJlcXVlc3Q6ICcnLFxyXG5cdFx0Y2hhbmdlUGFzc3dvcmQ6IFwiXCIsXHJcblx0XHRlZGl0UHJvZmlsZTogXCJcIixcclxuXHRcdGdldEFjY291bnRJbmZvOiBcIlwiLFxyXG5cdFx0cHJvZmlsZUluZm9ybWF0aW9uOiBcIlwiXHJcblx0XHQvLyByZXNldFBhc3N3b3JkOiAnJyxcclxuXHR9LFxyXG5cdGZvcm1zOiB7XHJcblx0XHRwcm9maWxlX2VkaXQ6IFwiXCJcclxuXHR9LFxyXG5cdGRhc2hib2FyZExpbmtzOiBbXSxcclxuXHRyZXNwb25zZVRvVXNlckluZm86IHVzZXIkID0+IHVzZXIkLFxyXG5cdG1hcFVzZXJEaXNwbGF5TmFtZTogdXNlciQgPT4gdXNlciQucGlwZShtYXAodXNlciA9PiB1c2VyLlVzZXJuYW1lKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFVzZXJNb2R1bGVDb25maWc+KFwiVXNlck1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vdXNlci5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IFVzZXJNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX2NvbmZpZyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRVc2VyTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1BST0ZJTEUgPSBcIltVU0VSXVtQUk9GSUxFXSBHRVRfUFJPRklMRVwiLFxyXG5cdEdFVF9QUk9GSUxFX1NUQVJUID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRHRVRfUFJPRklMRV9TVUNDRUVEID0gXCJbVVNFUl1bUFJPRklMRV0gR0VUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEdFVF9QUk9GSUxFX0ZBSUxFRCA9IFwiW1VTRVJdW1BST0ZJTEVdIEdFVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRQcm9maWxlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0UHJvZmlsZVN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvZmlsZVZpZXdBY3Rpb24gPSBHZXRQcm9maWxlIHwgR2V0UHJvZmlsZVN0YXJ0IHwgR2V0UHJvZmlsZVN1Y2NlZWQgfCBHZXRQcm9maWxlRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gVXNlckFjdGlvblR5cGVzIHtcclxuXHRVU0VSX1NFTEVDVEVEID0gXCJbVVNFUl0gVVNFUl9TRUxFQ1RFRFwiLFxyXG5cdFJFRlJFU0hfVVNFUl9JTkZPID0gXCJbVVNFUl0gUkVGUkVTSF9VU0VSX0lORk9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclNlbGVjdGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVXNlckFjdGlvblR5cGVzLlVTRVJfU0VMRUNURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VySW5mb0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlck1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyQWN0aW9uID0gVXNlclNlbGVjdGVkQWN0aW9uIHwgUmVmcmVzaFVzZXJJbmZvQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlckFjdGlvbiwgVXNlckFjdGlvblR5cGVzIH0gZnJvbSBcIi4vdXNlci5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGF0YTogVXNlck1vZGVsO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGxvYWRlZDogZmFsc2UsXHJcblx0ZGF0YTogbmV3IFVzZXJNb2RlbCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVXNlckFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5VU0VSX1NFTEVDVEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIFVzZXJBY3Rpb25UeXBlcy5SRUZSRVNIX1VTRVJfSU5GTzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlVmlld01vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdEVtYWlsOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlPzogUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFVzZXJuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBleHRlbmRzIFVzZXJNb2RlbCB7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwsIEh0dHBSZXNwb25zZUJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdFByb2ZpbGVfQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHRcdFJvbGVzOiBzdHJpbmdbXTtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFJlcXVlc3Q+ID0ge30gYXMgUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdEVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvbGVzOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKG51bGwsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSBpbXBsZW1lbnRzIEh0dHBSZXNwb25zZUJhc2VNb2RlbDxSZXNwb25zZT4ge1xyXG5cdFx0UmVzdWx0OiB7IFVzZXI6IFVzZXJNb2RlbCB9O1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBSZXNwb25zZSA9IHt9IGFzIFJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRleHRyYWN0RGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuUmVzdWx0LlVzZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3VzZXItY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldFByb2ZpbGUgfSBmcm9tIFwiLi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC9hY2NvdW50LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi91c2VyLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLWVkaXQubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdGNvbmZpZzogVXNlck1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+ICh0aGlzLmNvbmZpZyA9IGNvbmZpZykpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFByb2ZpbGUoKSk7XHJcblx0XHR9LCA5OTkpO1xyXG5cdH1cclxuXHJcblx0Z2V0QWNjb3VudEluZm8oKTogT2JzZXJ2YWJsZTxQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy5zdG9yZS5zZWxlY3QoZ2V0VXNlcikpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VyIF06IFtVc2VyTW9kdWxlQ29uZmlnLCBhbnldKSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldDxhbnk+KFxyXG5cdFx0XHRcdFx0XHRzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy5wcm9maWxlSW5mb3JtYXRpb24sIHtcclxuXHRcdFx0XHRcdFx0XHR1c2VyOiB1c2VyLlVzZXJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdC5sZXQoY29uZmlnLnJlc3BvbnNlVG9Vc2VySW5mbylcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBVc2VyTW9kZWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRQcm9maWxlKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdFByb2ZpbGVfQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dDxFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZT4oXHJcblx0XHRcdFx0c3RyaW5nVGVtcGxhdGUodGhpcy5jb25maWcuZW52W3RoaXMuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZy5lbmRwb2ludHMuZWRpdFByb2ZpbGUsIG1vZGVsKSxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUobWFwKHJlc3BvbnNlID0+IG5ldyBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXNwb25zZShyZXNwb25zZSkuZXh0cmFjdERhdGEoKSkpO1xyXG5cdH1cclxuXHQvLyBUT0RPOiByZW1vdmVcclxuXHRnZXRJbmZvKGRhdGE6IFByb2ZpbGVWaWV3TW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PFByb2ZpbGVWaWV3TW9kZWwuUmVzcG9uc2U+KFxyXG5cdFx0XHRcdHN0cmluZ1RlbXBsYXRlKHRoaXMuY29uZmlnLmVudlt0aGlzLmNvbmZpZy5zZXJ2ZXJdICsgdGhpcy5jb25maWcuZW5kcG9pbnRzLmdldEFjY291bnRJbmZvLCBtb2RlbClcclxuXHRcdFx0KVxyXG5cdFx0XHQucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcclxuXHR9XHJcblxyXG5cdGlzX3JvbGUocm9sZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFjY291bnRJbmZvKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIodXNlciA9PiB1c2VyICYmIHVzZXIuUm9sZXMgIT0gdW5kZWZpbmVkKSwgdGFrZSgxKSwgbWFwKHVzZXIgPT4gdXNlci5Sb2xlcy5pbmRleE9mKHJvbGUpID4gLTEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcyB7XHJcblx0RURJVF9QUk9GSUxFID0gXCJbVVNFUl1bUEFTU1dPUkRdIEVESVRfUFJPRklMRVwiLFxyXG5cdEVESVRfUFJPRklMRV9TVEFSVCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1RBUlRcIixcclxuXHRFRElUX1BST0ZJTEVfU1VDQ0VFRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBFRElUX1BST0ZJTEVfU1VDQ0VFRFwiLFxyXG5cdEVESVRfUFJPRklMRV9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gRURJVF9QUk9GSUxFX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0UHJvZmlsZVN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRQcm9maWxlU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRQcm9maWxlQWN0aW9uID0gRWRpdFByb2ZpbGUgfCBFZGl0UHJvZmlsZVN0YXJ0IHwgRWRpdFByb2ZpbGVTdWNjZWVkIHwgRWRpdFByb2ZpbGVGYWlsZWQ7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVfQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2ZpbGUtZWRpdC5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRQcm9maWxlQWN0aW9uVHlwZXMsXHJcblx0RWRpdFByb2ZpbGVTdGFydCxcclxuXHRFZGl0UHJvZmlsZVN1Y2NlZWQsXHJcblx0RWRpdFByb2ZpbGVGYWlsZWRcclxufSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlIH0gZnJvbSBcIi4uL3Byb2ZpbGUtdmlldy9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdFByb2ZpbGVFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogVXNlclNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0UHJvZmlsZVN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFJlcXVlc3RFZGl0UHJvZmlsZUxpbmskID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UuZWRpdFByb2ZpbGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEVkaXRQcm9maWxlRmFpbGVkKCkpKVxyXG5cdFx0KTtcclxuXHQvLyAuc3dpdGNoTWFwKChkYXRhOiBFZGl0UHJvZmlsZV9BcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5zZXJ2aWNlXHJcblx0Ly8gXHRcdC5lZGl0UHJvZmlsZShkYXRhKVxyXG5cdC8vIFx0XHQubWFwKChyZXMpID0+IG5ldyBFZGl0UHJvZmlsZVN1Y2NlZWQocmVzKSlcclxuXHQvLyBcdFx0LmNhdGNoKCgpID0+IG9mKG5ldyBFZGl0UHJvZmlsZUZhaWxlZCgpKSk7XHJcblx0Ly8gfSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdvVG9WaWV3JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEVkaXRQcm9maWxlQWN0aW9uVHlwZXMuRURJVF9QUk9GSUxFX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL3VzZXIvcHJvZmlsZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gbmV3IEdldFByb2ZpbGUoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0UHJvZmlsZV9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvZmlsZS1lZGl0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMsIEdldFByb2ZpbGVTdGFydCwgR2V0UHJvZmlsZVN1Y2NlZWQsIEdldFByb2ZpbGVGYWlsZWQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWZyZXNoVXNlckluZm9BY3Rpb24gfSBmcm9tIFwiLi4vZGFzaGJvYXJkL3VzZXIuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVZpZXdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRQcm9maWxlUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFByb2ZpbGVWaWV3QWN0aW9uVHlwZXMuR0VUX1BST0ZJTEUpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldFByb2ZpbGVTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFByb2ZpbGUkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShQcm9maWxlVmlld0FjdGlvblR5cGVzLkdFVF9QUk9GSUxFX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRQcm9maWxlX0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy51c2VyU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEFjY291bnRJbmZvKClcclxuXHRcdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IEdldFByb2ZpbGVTdWNjZWVkKHJlcykpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXRQcm9maWxlRmFpbGVkKCkpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0cmVmcmVzaFVzZXJJbmZvJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoUHJvZmlsZVZpZXdBY3Rpb25UeXBlcy5HRVRfUFJPRklMRV9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oZGF0YSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25JbkFjdGlvblR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRQcm9maWxlLCBHZXRQcm9maWxlU3VjY2VlZCB9IGZyb20gXCIuLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUmVmcmVzaFVzZXJJbmZvQWN0aW9uIH0gZnJvbSBcIi4uL2Rhc2hib2FyZC91c2VyLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxyXG5cclxuXHQvLyBARWZmZWN0KClcclxuXHQvLyB1cGRhdGVQcm9maWxlSW5mb3JtYXRpb24kID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0Ly8gXHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHQvLyBcdG1hcCh1c2VyID0+IHtcclxuXHQvLyBcdFx0cmV0dXJuIG5ldyBHZXRQcm9maWxlU3VjY2VlZCh1c2VyKTtcclxuXHQvLyBcdH0pXHJcblx0Ly8gKTtcclxuXHRARWZmZWN0KClcclxuXHRnZXRBY2NvdW50SW5mbyQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcCgoKSA9PiB7XHJcblx0XHRcdHJldHVybiBuZXcgR2V0UHJvZmlsZSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUobWFwKCgpID0+IG5ldyBSZWZyZXNoVXNlckluZm9BY3Rpb24oe30gYXMgVXNlck1vZGVsKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1JFU0VUX1BBU1NXT1JEX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gR0VUX1JFU0VUX1BBU1NXT1JEX0xJTktcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfU1RBUlQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUXCIsXHJcblx0UkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NVQ0NFRURcIixcclxuXHRSRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9GQUlMRURcIixcclxuXHRESVNBQkxFX0dFVF9MSU5LID0gXCJbVVNFUl1bUEFTU1dPUkRdIERJU0FCTEVfR0VUX0xJTktcIixcclxuXHRFTkFCTEVfR0VUX0xJTksgPSBcIltVU0VSXVtQQVNTV09SRF0gRU5BQkxFX0dFVF9MSU5LXCIsXHJcblx0TUFYSU1VTV9UUllfSEFQUEVORCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBNQVhJTVVNX1RSWV9IQVBQRU5EXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRFwiLFxyXG5cdFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc2V0UGFzc3dvcmRMaW5rIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5HRVRfUkVTRVRfUEFTU1dPUkRfTElOSztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkTGlua1JlcXVlc3RTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuUkVTRVRfUEFTU1dPUkRfTElOS19SRVFVRVNUX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0RmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5SRVNFVF9QQVNTV09SRF9MSU5LX1JFUVVFU1RfRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGlzYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkRJU0FCTEVfR0VUX0xJTks7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuYWJsZUdldExpbmsgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSztcclxufVxyXG5leHBvcnQgY2xhc3MgTWF4aW11bVRyeUhhcHBlbmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLk1BWElNVU1fVFJZX0hBUFBFTkQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkQ2hhbmdlZFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRDaGFuZ2VkRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX0ZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbiA9XHJcblx0fCBHZXRSZXNldFBhc3N3b3JkTGlua1xyXG5cdHwgUmVzZXRQYXNzd29yZExpbmtSZXF1ZXN0U3RhcnRcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdEZhaWxlZFxyXG5cdHwgRGlzYWJsZUdldExpbmtcclxuXHR8IFJlc2V0UGFzc3dvcmRMaW5rUmVxdWVzdFN1Y2NlZWRcclxuXHR8IEVuYWJsZUdldExpbmtcclxuXHR8IE1heGltdW1UcnlIYXBwZW5kXHJcblx0fCBQYXNzd29yZENoYW5nZWRTdWNjZWVkXHJcblx0fCBQYXNzd29yZENoYW5nZWRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uLCBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzIH0gZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogbnVtYmVyO1xyXG5cdGxhc3RSZXF1ZXN0ZWRUaW1lOiBzdHJpbmc7XHJcblx0ZGlzYWJsZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRudW1iZXJPZlJlcXVlc3RlZDogMCxcclxuXHRsYXN0UmVxdWVzdGVkVGltZTogbnVsbCxcclxuXHRkaXNhYmxlOiBmYWxzZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0QWN0aW9uVHlwZXMuR0VUX1JFU0VUX1BBU1NXT1JEX0xJTks6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdG51bWJlck9mUmVxdWVzdGVkOiBzdGF0ZS5udW1iZXJPZlJlcXVlc3RlZCArIDEsXHJcblx0XHRcdFx0bGFzdFJlcXVlc3RlZFRpbWU6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLlJFU0VUX1BBU1NXT1JEX0xJTktfUkVRVUVTVF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgUmVzZXRQYXNzd29yZFJlcXVlc3RBY3Rpb25UeXBlcy5ESVNBQkxFX0dFVF9MSU5LOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGlzYWJsZTogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBSZXNldFBhc3N3b3JkUmVxdWVzdEFjdGlvblR5cGVzLkVOQUJMRV9HRVRfTElOSzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRpc2FibGU6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldE51bWJlck9mUmVxdWVzZXRlZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLm51bWJlck9mUmVxdWVzdGVkO1xyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRpc2FibGU7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9jaGFuZ2UtcGFzc3dvcmQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMge1xyXG5cdENIQU5HRV9QQVNTV09SRCA9IFwiW1VTRVJdW1BBU1NXT1JEXSBDSEFOR0VfUEFTU1dPUkRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NUQVJUID0gXCJbVVNFUl1bUEFTU1dPUkRdIFBBU1NXT1JEX0NIQU5HRURfU1RBUlRcIixcclxuXHRQQVNTV09SRF9DSEFOR0VEX1NVQ0NFRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEXCIsXHJcblx0UEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQgPSBcIltVU0VSXVtQQVNTV09SRF0gUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLkNIQU5HRV9QQVNTV09SRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZFN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5QQVNTV09SRF9DSEFOR0VEX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkQWN0aW9uID0gQ2hhbmdlUGFzc3dvcmQgfCBDaGFuZ2VQYXNzd29yZFN0YXJ0IHwgQ2hhbmdlUGFzc3dvcmRTdWNjZWVkIHwgQ2hhbmdlUGFzc3dvcmRGYWlsZWQ7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRBY3Rpb24sIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IENoYW5nZVBhc3N3b3JkQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgQ2hhbmdlUGFzc3dvcmRBY3Rpb25UeXBlcy5DSEFOR0VfUEFTU1dPUkQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIENoYW5nZVBhc3N3b3JkQWN0aW9uVHlwZXMuUEFTU1dPUkRfQ0hBTkdFRF9TVUNDRUVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcInN1Y2NlZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBDaGFuZ2VQYXNzd29yZEFjdGlvblR5cGVzLlBBU1NXT1JEX0NIQU5HRURfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRWRpdFByb2ZpbGVBY3Rpb24sIEVkaXRQcm9maWxlQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9lZGl0LXByb2ZpbGUuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEVkaXRQcm9maWxlQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEU6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBFZGl0UHJvZmlsZUFjdGlvblR5cGVzLkVESVRfUFJPRklMRV9TVEFSVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJwZW5kaW5nXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdFByb2ZpbGVBY3Rpb25UeXBlcy5FRElUX1BST0ZJTEVfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNlYXJjaEFjdGlvblR5cGVzIHtcclxuXHRTRUFSQ0ggPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSFwiLFxyXG5cdFNFQVJDSF9TVEFSVCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX1NUQVJUXCIsXHJcblx0U0VBUkNIX1NVQ0NFRUQgPSBcIltVU0VSXVtTRUFSQ0hdIFNFQVJDSF9TVUNDRUVEXCIsXHJcblx0U0VBUkNIX0ZBSUxFRCA9IFwiW1VTRVJdW1NFQVJDSF0gU0VBUkNIX0ZBSUxFRFwiLFxyXG5cdENMRUFSX1NFQVJDSEVEX1VTRVIgPSBcIltVU0VSXVtTRUFSQ0hdIENMRUFSX1NFQVJDSEVEX1VTRVJcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQ2xlYXJTZWFyY2hlZFVzZXIgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb24gPSBTZWFyY2ggfCBTZWFyY2hTdGFydEFjdGlvbiB8IFNlYXJjaFN1Y2NlZWQgfCBTZWFyY2hGYWlsZWQgfCBDbGVhclNlYXJjaGVkVXNlcjtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWxcIjtcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9uVHlwZXMsIFNlYXJjaEFjdGlvbiB9IGZyb20gXCIuL3NlYXJjaC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogUHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiB7fSBhcyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFNlYXJjaEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFNlYXJjaEFjdGlvblR5cGVzLlNFQVJDSDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBQcm9maWxlVmlld01vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5TRUFSQ0hfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCIsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgU2VhcmNoQWN0aW9uVHlwZXMuU0VBUkNIX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBTZWFyY2hBY3Rpb25UeXBlcy5DTEVBUl9TRUFSQ0hFRF9VU0VSOiB7XHJcblx0XHRcdHJldHVybiBpbml0aWFsU3RhdGU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuZXhwb3J0IHZhciBnZXRBY2NvdW50SW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgdXNlclJlZHVjZXIgZnJvbSBcIi4vZGFzaGJvYXJkL2FjY291bnQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyByZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIgZnJvbSBcIi4vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBlZGl0UHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vcHJvZmlsZS1lZGl0L2VkaXQtcHJvZmlsZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHNlYXJjaFJlZHVjZXIgZnJvbSBcIi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclN0YXRlIHtcclxuXHR1c2VyOiB1c2VyUmVkdWNlci5TdGF0ZTtcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdDogcmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLlN0YXRlO1xyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIuU3RhdGU7XHJcblx0Y2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLlN0YXRlO1xyXG5cdGVkaXRQcm9maWxlOiBlZGl0UHJvZmlsZVJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVkdWNlcnMgPSB7XHJcblx0dXNlcjogdXNlclJlZHVjZXIudXNlclJlZHVjZXIsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3Q6IHJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5yZWR1Y2VyLFxyXG5cdGNoYW5nZVBhc3N3b3JkOiBjaGFuZ2VQYXNzd29yZC5yZWR1Y2VyLFxyXG5cdHNlYXJjaFZpZXc6IHNlYXJjaFJlZHVjZXIucmVkdWNlcixcclxuXHRlZGl0UHJvZmlsZTogZWRpdFByb2ZpbGVSZWR1Y2VyLnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdFwidXNlclwiOiBVc2VyU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8VXNlclN0YXRlPihcInVzZXJcIik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm9yYW10aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUudXNlci5sb2FkZWQpO1xyXG5leHBvcnQgY29uc3QgaXNTaWduZWRJbiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLnVzZXIubG9hZGVkKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0RmVhdHVyZVN0YXRlLFxyXG5cdChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5yZXNldFBhc3N3b3JkUmVxdWVzdFxyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkID0gY3JlYXRlU2VsZWN0b3IoXHJcblx0c2VsZWN0UmVzZXRQYXNzd29yZFJlcXVlc3RTdGF0ZSxcclxuXHRyZXNldFBhc3N3b3JkUmVxdWVzdFJlZHVjZXIuZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRSZXNldFBhc3N3b3JkUmVxdWVzdFN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdHNlbGVjdFJlc2V0UGFzc3dvcmRSZXF1ZXN0U3RhdGUsXHJcblx0cmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldFN0YXR1c1xyXG4pO1xyXG5cclxuLy8jcmVnaW9uIHVzZXJcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJJbmZvcm1haW9uU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuZXhwb3J0IGNvbnN0IGdldEFjY291bnRJbmZvID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0VXNlckluZm9ybWFpb25TdGF0ZSwgdXNlclJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBzZWFyY2hcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFNlYXJjaFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoVmlldyk7XHJcbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hTdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RTZWFyY2hTdGF0ZSwgc2VhcmNoUmVkdWNlci5nZXRTdGF0dXMpO1xyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgUHJvZmlsZVZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvZmlsZS12aWV3Lm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCIuLi9zZWFyY2guYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhGbGV4PVwiNDUwcHhcIiAqbmdJZj1cIih1c2VyU3RhdHVzJCB8IGFzeW5jKSA9PSAnc3VjY2VlZCdcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkxhc3ROYW1lIH19w5jCjCB7eyh1c2VyIHwgYXN5bmMpLkZpcnN0TmFtZSB9fSAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgPCEtLSB7eyh1c2VyIHwgYXN5bmMpLkVtYWlsfX0gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+bG9jYWxfZ3JvY2VyeV9zdG9yZTwvbWF0LWljb24+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9JzE1cHgnPjwvZGl2PlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwrTDmcKGw5jCp8OYwrPDmcKHPC9wPlxyXG4gICAgICAgIDwhLS0gPHAgZnhGbGV4PSc2MCcgZnhMYXlvdXRBbGlnbj1cImVuZFwiPnt7KHVzZXIgfCBhc3luYykuX2lkIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgIDxtYXQtaWNvbiBmeEZsZXg9J25vZ3Jvdyc+ZW1haWw8L21hdC1pY29uPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PScxNXB4Jz48L2Rpdj5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvcD5cclxuICAgICAgICA8IS0tIDxwIGZ4RmxleD0nNjAnIGZ4TGF5b3V0QWxpZ249XCJlbmRcIj57eyh1c2VyIHwgYXN5bmMpLkVtYWlsIH19PC9wPiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXI6IE9ic2VydmFibGU8UHJvZmlsZVZpZXdNb2RlbC5SZXNwb25zZT47XHJcblx0dXNlclN0YXR1cyQ6IE9ic2VydmFibGU8cmVzcG9uc2VTdGF0dXNUeXBlcz47XHJcblx0Zm9ybUdyb3VwID0gUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHR1c2VyRGF0YUxvYWRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdHVzZXJOb3RGb3VuZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy51c2VyID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0QWNjb3VudEluZm8pO1xyXG5cdFx0dGhpcy51c2VyU3RhdHVzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlclN0YXR1cyQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMudXNlckRhdGFMb2FkZWQkLm5leHQoIVwicHJpc3RpbmV8ZGlydHl8cGVuZGluZ1wiLmluY2x1ZGVzKHZhbHVlKSkpO1xyXG5cdH1cclxuXHRzZWFyY2goKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTZWFyY2godGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItY2hhbmdlLXBhc3N3b3JkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjQ1MHB4XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOawqnDmMKxw5jCp8OYwrEgw5rCqcOZwoTDmcKFw5nChyDDmMK5w5jCqMOZwojDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiQ29uZmlybVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKqw5jCusObwozDm8KMw5jCsSDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvdXNlci9wYW5lbFwiIG1hdC1yYWlzZWQtYnV0dG9uPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0c3VibWl0KCkge31cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VQYXNzd29yZCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuXHJcbiAgXHJcbiAgPG5ncy1mb3JtLXZpZXcgI2Zvcm0gW2lkXT1cImZvcm1JZFwiIFtjYXJkXT1cInRydWVcIiAoYWNjZXB0KT1cImVkaXRQcm9maWxlKGZvcm0uZm9ybUdyb3VwKVwiIChjYW5jZWwpPVwiZ29iYWNrKClcIiA+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwhLS0gPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiZWRpdFByb2ZpbGUoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi4uXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmMKow5jCp8OYwrLDmsKvw5jCtMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQ8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+IC0tPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIHVzZXJJbmZvOiBhbnk7XHJcblx0QElucHV0KCkgZm9ybUlkOiBzdHJpbmc7XHJcblx0QElucHV0KFwicm9sZXNcIikgcm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRASW5wdXQoKSBncm91cHM6IHN0cmluZ1tdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRlZGl0UHJvZmlsZShmb3JtOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZm9ybS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KGZvcm0udmFsdWUpO1xyXG5cdH1cclxuXHRnb2JhY2soKSB7XHJcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiLi5cIiBdKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWxpbmtzXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PSdyb3cnIGZ4TGF5b3V0V3JhcCBpZD1cImNvblwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCIzMVwiIGNsYXNzPSdsaW5rJyBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109J2xpbmsucm91dGUnICpuZ0Zvcj0nbGV0IGxpbmsgb2YgbGlua3MnPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+e3tsaW5rLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz0ndGl0bGUnPnt7bGluay50aXRsZX19PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGVzY3JpcHRpb24nPnt7bGluay5kZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwiMzFcIiBjbGFzcz0nbGluaycgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPSdsaW5rLnJvdXRlJyAqbmdGb3I9J2xldCBsaW5rIG9mIGxpbmtzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnt7bGluay5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2xpbmsudGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Rlc2NyaXB0aW9uJz57e2xpbmsuZGVzY3JpcHRpb259fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjb24gW2Z4ZmxleF17bWFyZ2luLXJpZ2h0OjI1cHh9Omhvc3R7d2lkdGg6MTAwJTtwYWRkaW5nOjI1cHggMjVweCAwfWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6NDhweDt3aWR0aDo0OHB4O2hlaWdodDo0OHB4fWJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbi1ib3R0b206MjVweH0udGl0bGV7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206NXB4fS5kZXNjcmlwdGlvbntvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6OTAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdGxpbmtzOiBhbnlbXTtcclxuXHRsaW5rcyQ6IE9ic2VydmFibGU8YW55W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMubGlua3MkID0gdGhpcy51c2VyQ29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChkYXRhID0+IGRhdGEuZGFzaGJvYXJkTGlua3MpKTtcclxuXHRcdHRoaXMubGlua3MgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aXRsZTogXCLDmcKFw5jCtMOYwqfDmcKHw5jCr8OZwocgw5jCrcOYwrPDmMKnw5jCqCDDmsKpw5jCp8OYwrHDmMKow5jCscObwoxcIixcclxuXHRcdFx0XHRyb3V0ZTogXCIvdXNlci9wYW5lbC9wcm9maWxlXCIsXHJcblx0XHRcdFx0Ly8gZGVzY3JpcHRpb246IFwiw5nChMOZwojDmMKxw5nChSDDmMKnw5vCjMOZwr7DmMKzw5nCiMOZwoUgw5nChcOYwqrDmcKGIMOYwrPDmMKnw5jCrsOYwqrDmsKvw5vCjCDDmMKow5jCpyDDmMKqw5nCiMOZwoTDm8KMw5jCryDDmMKzw5jCp8OYwq/DmsKvw5vCjCDDmcKGw5jCp8OZwoXDmcKBw5nCh8OZwojDmcKFXCIsXHJcblx0XHRcdFx0aWNvbjogXCJwZXJzb25cIlxyXG5cdFx0XHR9XHJcblx0XHRcdC8vICxcclxuXHRcdFx0Ly8ge1xyXG5cdFx0XHQvLyBcdHJvdXRlOiBcIi91c2VyL3BhbmVsL3Bhc3N3b3JkL2NoYW5nZVwiLFxyXG5cdFx0XHQvLyBcdHRpdGxlOiBcIsOYwqrDmMK6w5vCjMObwozDmMKxIMOawqnDmcKEw5nChcOZwocgw5jCucOYwqjDmcKIw5jCsVwiLFxyXG5cdFx0XHQvLyBcdC8vIGRlc2NyaXB0aW9uOiBcIsOZwoTDmcKIw5jCscOZwoUgw5jCp8ObwozDmcK+w5jCs8OZwojDmcKFIMOZwoXDmMKqw5nChiDDmMKzw5jCp8OYwq7DmMKqw5rCr8Obwowgw5jCqMOYwqcgw5jCqsOZwojDmcKEw5vCjMOYwq8gw5jCs8OYwqfDmMKvw5rCr8Obwowgw5nChsOYwqfDmcKFw5nCgcOZwofDmcKIw5nChVwiLFxyXG5cdFx0XHQvLyBcdGljb246IFwic2VjdXJpdHlcIlxyXG5cdFx0XHQvLyB9XHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcmVzZXQtcGFzc3dvcmQtcmVxdWVzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+w5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqiDDmMKow5jCp8OYwrLDm8KMw5jCp8OYwqjDm8KMIMOYwrHDmcKFw5jCsiDDmMK5w5jCqMOZwojDmMKxPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPsOYwqjDmMKxw5jCp8Obwowgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsSDDmMK0w5nChcOYwqfDmMKxw5nChyDDmMKqw5nChMOZwoHDmcKGIMOYwq7DmcKIw5jCryDDmMKxw5jCpyDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPsOZwr7Dm8KMw5jCp8OZwoXDmsKpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7DmcK+w5jCs8OYwqogw5jCp8OZwoTDmsKpw5jCqsOYwrHDmcKIw5nChsObwozDmsKpw5vCjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrTDmcKFw5jCp8OYwrHDmcKHIMOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAgw5jCqMOYwqfDmMKyw5vCjMOYwqfDmMKow5vCjCDDmMKxw5nChcOYwrIgw5jCucOYwqjDmcKIw5jCsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319IMOYwqvDmMKnw5nChsObwozDmcKHIMOYwqrDmMKnIMOYwqfDmcKFw5rCqcOYwqfDmcKGIMOYwq/DmMKxIMOYwq7DmcKIw5jCp8OYwrPDmMKqIMOYwq/DmcKIw5jCqMOYwqfDmMKxw5nChyDDmMKvw5jCscObwozDmMKnw5nCgcOYwqogw5nCvsObwozDmMKnw5nChcOawqkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgw5jCr8OYwrHDmMKuw5nCiMOYwqfDmMKzw5jCqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cdEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KClcclxuXHRzZXQgcGVuZGluZyhpc1BlbmRpbmc6IGJvb2xlYW4pIHtcclxuXHRcdGlmIChpc1BlbmRpbmcpIHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuZGlzYWJsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dGltZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0bWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcclxuXHRcdHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApLnBpcGUoXHJcblx0XHRcdG1hcChpID0+IGkgKyAxKSxcclxuXHRcdFx0dGFrZVdoaWxlKGkgPT4gaSAqIDEwMCA8PSAzMDAwKSxcclxuXHRcdFx0bWFwKGkgPT4gMzAwMCAtIGkgKiAxMDApXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm51bWJlck9mUmVxdWVzdGVkLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aWYgKGRhdGEgPiAyKSB7XHJcblx0XHRcdFx0dGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQubmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0XHRpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuXHRcdFx0dGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQuZ2V0VmFsdWUoKVxyXG5cdFx0XHRcdD8gXCLDmMK5w5jCr8OZwoUgw5jCp8OZwoXDmsKpw5jCp8OZwoYgLi4uXCJcclxuXHRcdFx0XHQ6IFwiw5nCvsObwozDmMKnw5nChcOawqkgw5jCrMOYwq/Dm8KMw5jCryDDmMKow5jCscOYwqfDm8KMIMOYwrTDmcKFw5jCpyDDmMKnw5jCscOYwrPDmMKnw5nChCDDmsKvw5jCscOYwq/Dm8KMw5jCry5cIjtcclxuXHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIFwiXCIsIHtcclxuXHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFByb2ZpbGVWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Byb2ZpbGUtdmlldy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vLi4vc2VhcmNoLWFjY291bnQvc2VhcmNoLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGxldCBtb2RlbCA9IG5ldyBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QoeyBFbWFpbDogcGFyYW1zLkVtYWlsIH0gYXMgUHJvZmlsZVZpZXdNb2RlbC5SZXF1ZXN0KTtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2VhcmNoKG1vZGVsKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNYXRjaFZhbGlkYXRvciB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZE1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdFVzZXJuYW1lOiBzdHJpbmc7XHJcblx0XHRQYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0UGFzc3dvcmQ6IHRoaXMuUGFzc3dvcmRcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg3KSBdKSxcclxuXHRcdFx0XHRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkLCBNYXRjaFZhbGlkYXRvcihcIlBhc3N3b3JkXCIpIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvY2hhbmdlLXBhc3N3b3JkLm1vZGVsXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gXCIuLi9jaGFuZ2UtcGFzc3dvcmQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1jaGFuZ2UtcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIChzdWJtaXRlZCk9J2NoYW5nZVBhc3N3b3JkKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcbiAgICAgICAgICAgICAgPjwvdXNlci1jaGFuZ2UtcGFzc3dvcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cCA9IENoYW5nZVBhc3N3b3JkTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Q2hhbmdlUGFzc3dvcmRNb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuQXBwU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKS5zdWJzY3JpYmUodXNlckluZm8gPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJJbmZvKSByZXR1cm47XHJcblx0XHRcdC8vIFRPRE86XHJcblx0XHRcdC8vIHRoaXMuQ2hhbmdlUGFzc3dvcmRNb2RlbC5Vc2VybmFtZSA9IHVzZXJJbmZvLlVzZXJuYW1lO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGNoYW5nZVBhc3N3b3JkKGV2ZW50KSB7XHJcblx0XHR0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwuUGFzc3dvcmQgPSB0aGlzLmZvcm1Hcm91cC5nZXQoXCJQYXNzd29yZFwiKS52YWx1ZTtcclxuXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDaGFuZ2VQYXNzd29yZCh0aGlzLkNoYW5nZVBhc3N3b3JkTW9kZWwpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFwcENvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlIH0gZnJvbSBcIi4uL2VkaXQtcHJvZmlsZS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXQtY29udGlhbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8cHJvZmlsZS1lZGl0XHJcbiAgICAgICAgICAgICAgICAoc3VibWl0ZWQpPSd1cGRhdGVQcm9maWxlKCRldmVudCknXHJcbiAgICAgICAgICAgICAgICBbdXNlckluZm9dPVwidXNlckluZm9yYW1hdGlvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbcm9sZXNdPVwicm9sZXMkXCJcclxuXHRcdFx0XHRbZ3JvdXBzXT1cImdyb3VwcyB8IGFzeW5jXCJcclxuXHRcdFx0XHRbZm9ybUlkXT1cIihjb25maWckfGFzeW5jKT8uZm9ybXMucHJvZmlsZV9lZGl0XCJcclxuICAgICAgICAgICAgICA+PC9wcm9maWxlLWVkaXQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHVzZXJJbmZvcmFtYXRpb24kOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0cm9sZXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdGNvbmZpZyQ6IE9ic2VydmFibGU8VXNlck1vZHVsZUNvbmZpZz47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcclxuXHRcdHRoaXMudXNlckluZm9yYW1hdGlvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyk7XHJcblx0XHR0aGlzLnJvbGVzJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IHVuZGVmaW5lZCksIG1hcChjb25maWcgPT4gY29uZmlnLkNvbmZpZy5Sb2xlcykpO1xyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdC8vIHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gb2YoWyBcInRlc3QxXCIsIFwidGVzdDJcIiBdKTtcclxuXHJcblx0XHR0aGlzLmNvbmZpZyQgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0dXBkYXRlUHJvZmlsZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0UHJvZmlsZShkYXRhKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCIuLi9hY2NvdW50LnJlZHVjZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItZGFzaGJvYXJkLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPCEtLSA8cm91dGVyLW91dGxldCBuYW1lPVwibGlua3NcIj48L3JvdXRlci1vdXRsZXQ+IC0tPlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2JveC1sZWZ0e2JhY2tncm91bmQ6I2ZmZn0jYm94LWJvdHRvbXtiYWNrZ3JvdW5kOiMyYjAwMzN9I2JveC1yaWdodHtiYWNrZ3JvdW5kOiMwMDA4MzM7cGFkZGluZy10b3A6MTBweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MTBweCFpbXBvcnRhbnR9I2JveC1yaWdodCBkaXZ7YmFja2dyb3VuZDojZmZmO29wYWNpdHk6LjV9I2Jhbm5lcjpub3QoLmFjdGl2ZSl7aGVpZ2h0OjEwMCU7LXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMS41KSBvcGFjaXR5KC4yKSBibHVyKDJweCk7ZmlsdGVyOmdyYXlzY2FsZSgxMDAlKSBicmlnaHRuZXNzKDEuNSkgb3BhY2l0eSguMikgYmx1cigycHgpfSNzMXtiYWNrZ3JvdW5kOiNhYWF9I3Mye2JhY2tncm91bmQ6I2JiYn0jczN7YmFja2dyb3VuZDojY2NjfS5wZXJzb25hbC1pbmZve2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSk7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MTAlO3dpZHRoOjkwJTtoZWlnaHQ6NDY5cHh9LnBlcnNvbmFsLWluZm8gaDJ7Y29sb3I6IzAwYmNkNDtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWxpZ2h0IWltcG9ydGFudH0ucGVyc29uYWwtaW5mbyBoNntmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEycHg7ZmxvYXQ6cmlnaHQ7d2lkdGg6NTAlO21hcmdpbjowO2NvbG9yOiM1NTU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBwe2Zsb2F0OnJpZ2h0O3dpZHRoOjMwJTttYXJnaW46MDtmb250LXNpemU6MTNweDtwYWRkaW5nLXJpZ2h0OjMwcHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgI2VjZWNlY30ucGVyc29uYWwtaW5mbyBkaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtsaW5lLWhlaWdodDo1MnB4O3JpZ2h0OjE3cHh9LnF1aWNrLWJveHt3aWR0aDoxMDAlO2hlaWdodDo1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2xpbmUtaGVpZ2h0OjUycHg7cGFkZGluZy10b3A6NzlweH0ucXVpY2stYnRue2JhY2tncm91bmQtY29sb3I6IzAwYmNkNDttYXJnaW46MTJweCAxMHB4O2hlaWdodDoxMDBweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoxMDBweDtmb250LXNpemU6MTdweDtjb2xvcjojZmZmfS5iYW5uZXItc2VjdGlvbnt0ZXh0LWFsaWduOmNlbnRlcn0uaW5mby1zZWN0aW9ue3BhZGRpbmc6NjBweCAyNXB4IDEwcHg7YmFja2dyb3VuZC1jb2xvcjojZjdmN2Y3O2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vd3d3LnRvcHRhbC5jb20vZGVzaWduZXJzL3N1YnRsZXBhdHRlcm5zL3BhdHRlcm5zL2dyZXkucG5nKSFpbXBvcnRhbnQ7aGVpZ2h0OjEwNDBweDtwYWRkaW5nLWJvdHRvbToxMjBweCFpbXBvcnRhbnR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlciQ6IE9ic2VydmFibGU8VXNlck1vZGVsPjtcclxuXHQvLyBpc19hZ2VudCA6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy51c2VyJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKTtcclxuXHRcdC8vIHRoaXMuaXNfYWdlbnQgPSBzaWduaW5TZXJ2aWNlLmlzX2FnZW50KCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcHJvZmlsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJuZ3MtdXNlci1wcm9maWxlLXZpZXdcIj48L3JvdXRlci1vdXRsZXQ+XHJcbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gIDwhLS0gPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmMK3w5nChMOYwqfDmMK5w5jCp8OYwqogw5nCvsOYwrHDmcKIw5nCgcOYwqfDm8KMw5nChDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93JyAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpbmZvXCI+XHJcbiAgICAgICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7aXRlbVswXX19PC9wPlxyXG4gICAgICAgICAgICA8cCBmeEZsZXg9JzYwJz57e2l0ZW1bMV19fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nLi4nPsOYwqjDmMKnw5jCssOawq/DmMK0w5jCqjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHJvdXRlckxpbms9J2VkaXQnPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+IC0tPlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuPCEtLSA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmcKGw5jCp8OZwoU8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLkZpcnN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOYwq7DmMKnw5nChsOZwojDmMKnw5jCr8Oawq/Dm8KMPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5MYXN0TmFtZX19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5nChsOYwqfDmcKFIMOawqnDmMKnw5jCscOYwqjDmMKxw5vCjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuVXNlcm5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqrDmcKEw5nCgcOZwoYgw5nCh8OZwoXDmMKxw5jCp8OZwoc8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLk1vYmlsZU51bWJlciB8IHBlcnNpYW5OdW1iZXJ9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPsOYwqzDmcKGw5jCs8ObwozDmMKqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKqw5jCp8OYwrHDm8KMw5jCriDDmMKqw5nCiMOZwoTDmMKvPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7DmMKnw5vCjMOZwoXDm8KMw5nChDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRW1haWx9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPnt7KGlkZW50aWZpZXJUeXBlJCB8IGFzeW5jKX19PC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5JZGVudGlmaWNhdGlvbk5vIHwgcGVyc2lhbk51bWJlcn19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+w5jCqsOYwqfDmMKxw5vCjMOYwq4gw5jCucOYwrbDmcKIw5vCjMOYwqo8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgaW5mb3JtYXRpb24oaW5mb3JtYXRpb246IFVzZXJNb2RlbCkge1xyXG5cdFx0aWYgKCFpbmZvcm1hdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKGluZm9ybWF0aW9uKS5mb3JFYWNoKGsgPT4gdGhpcy5pbmZvLnB1c2goWyBrLCBpbmZvcm1hdGlvbltrXSBdKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpIGRhdGFTdGF0dXMkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XHJcblx0aW5mbzogYW55W10gPSBbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi91c2VyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8dXNlci1wcm9maWxlXHJcbiAgICAgICAgICAgICAgICBbaW5mb3JtYXRpb25dPVwiZGF0YSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICBbZGF0YVN0YXR1cyRdPSdkYXRhU3RhdHVzJCdcclxuICAgICAgICAgICAgPjwvdXNlci1wcm9maWxlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD47XHJcblx0ZGF0YVN0YXR1cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KEZlYXR1cmVSZWR1Y2VyLmdldEFjY291bnRJbmZvKTtcclxuXHRcdHRoaXMuZGF0YVN0YXR1cyQgPSB0aGlzLnN0b3JlLnNlbGVjdChGZWF0dXJlUmVkdWNlci5nZXRVc2VySW5mb3JhbXRpb25TdGF0dXMpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBOZ3NGb3JtTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3VzZXIuY29uZmlnXCI7XHJcbmltcG9ydCB7IEVkaXRQcm9maWxlRWZmZWN0cyB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9lZGl0LXByb2ZpbGUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBQcm9maWxlVmlld0VmZmVjdHMgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXNlckVmZmVjdHMgfSBmcm9tIFwiLi9mZWF0dXJlL2ZlYXR1cmUuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZENvbXBvbmVudCB9IGZyb20gXCIuL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Rhc2hib2FyZC9kYXNoYm9hcmQtbGlua3MvZGFzaGJvYXJkLWxpbmtzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLXJlcXVlc3QvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2ZlYXR1cmUvZmVhdHVyZS1jb250YWluZXIvZmVhdHVyZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC1jb250YWluZXIvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci9wcm9maWxlLWVkaXQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtY29udGFpbmVyL3Byb2ZpbGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlcnMgfSBmcm9tIFwiLi91c2VyLnJlZHVjZXJzXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHROZ3NGb3JtTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFNlYXJjaENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDaGFuZ2VQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVFZGl0Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhc2hib2FyZExpbmtzQ29tcG9uZW50LFxyXG5cdFx0UmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQsXHJcblx0XHRGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Q2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1VzZXJNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFVzZXJNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzVXNlck1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1VzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwidXNlclwiLCBVc2VyUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcclxuXHRcdFx0Ly8gUmVzZXRQYXNzd29yZFJlcXVlc3RFZmZlY3RzLFxyXG5cdFx0XHRFZGl0UHJvZmlsZUVmZmVjdHMsXHJcblx0XHRcdC8vIENoYW5nZVBhc3N3b3JkRWZmZWN0cyxcclxuXHRcdFx0UHJvZmlsZVZpZXdFZmZlY3RzLFxyXG5cdFx0XHQvLyBTZWFyY2hFZmZlY3RzLFxyXG5cdFx0XHRVc2VyRWZmZWN0c1xyXG5cdFx0XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzVXNlck1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWNvbnRhaW5lci9kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlLXZpZXcvcHJvZmlsZS1jb250YWluZXIvcHJvZmlsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFByb2ZpbGVFZGl0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC1jb250YWluZXIvcHJvZmlsZS1lZGl0LWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgQ2hhbmdlUGFzc3dvcmRDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lci9jaGFuZ2UtcGFzc3dvcmQtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tIFwiLi9zZWFyY2gtYWNjb3VudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZmVhdHVyZS9mZWF0dXJlLWNvbnRhaW5lci9mZWF0dXJlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGlua3NDb21wb25lbnQgfSBmcm9tIFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLWxpbmtzL2Rhc2hib2FyZC1saW5rcy5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcInVzZXIvcGFuZWxcIixcclxuXHRcdGNvbXBvbmVudDogRGFzaGJvYXJkQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEYXNoYm9hcmRMaW5rc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJwcm9maWxlXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInByb2ZpbGUvZWRpdFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogUHJvZmlsZUVkaXRDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB7XHJcblx0XHRcdC8vIFx0cGF0aDogXCJwYXNzd29yZC9jaGFuZ2VcIixcclxuXHRcdFx0Ly8gXHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdC8vIH1cclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6IFwiYWRtaW4vdXNlclwiLFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0Ly8geyBwYXRoOiBcIm1hbmFnbWVudFwiLCBjb21wb25lbnQ6IFNlYXJjaENvbXBvbmVudCB9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCI6RW1haWxcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZlYXR1cmVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogXCJwcm9maWxlLWVkaXRcIixcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBQcm9maWxlRWRpdENvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8ge1xyXG5cdFx0XHRcdFx0Ly8gXHRwYXRoOiBcImNoYW5nZS1wYXNzd29yZFwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb21wb25lbnQ6IENoYW5nZVBhc3N3b3JkQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5nc1VzZXJSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImV4cG9ydCBlbnVtIE5nc1VzZXJNb2R1bGVPdXRsZXRzIHtcclxuXHRuZ3NfdXNlcl9wcm9maWxlX3ZpZXcgPSBcIm5ncy11c2VyLXByb2ZpbGUtdmlld1wiXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgQXBwU3RhdGUgfSBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckZhY2FkZVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UpIHt9XHJcblx0Z2V0RGlzcGxheU5hbWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykubGV0KHRoaXMuY29uZmlnU2VydmljZS5jb25maWckLmdldFZhbHVlKCkubWFwVXNlckRpc3BsYXlOYW1lKTtcclxuXHRcdC8vIC5waXBlKGZpbHRlcihkaXNwbGF5TmFtZSA9PiBkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSk7XHJcblx0fVxyXG5cdGdldEluZm8oKTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbyk7XHJcblx0fVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJnZXRTdGF0dXMiLCJ1c2VyUmVkdWNlci51c2VyUmVkdWNlciIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5yZWR1Y2VyIiwiY2hhbmdlUGFzc3dvcmQucmVkdWNlciIsInNlYXJjaFJlZHVjZXIucmVkdWNlciIsImVkaXRQcm9maWxlUmVkdWNlci5yZWR1Y2VyIiwiZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkIiwicmVzZXRQYXNzd29yZFJlcXVlc3RSZWR1Y2VyLmdldE51bWJlck9mUmVxdWVzZXRlZCIsInJlc2V0UGFzc3dvcmRSZXF1ZXN0UmVkdWNlci5nZXRTdGF0dXMiLCJnZXRBY2NvdW50SW5mbyIsInVzZXJSZWR1Y2VyLmdldEFjY291bnRJbmZvIiwic2VhcmNoUmVkdWNlci5nZXRTdGF0dXMiLCJCZWhhdmlvclN1YmplY3QiLCJGZWF0dXJlUmVkdWNlci5nZXRBY2NvdW50SW5mbyIsIkZlYXR1cmVSZWR1Y2VyLmdldFNlYXJjaFN0YXR1cyIsIkZlYXR1cmVSZWR1Y2VyLmdldFVzZXJJbmZvcmFtdGlvblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFpQkM7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxH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
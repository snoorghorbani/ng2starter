import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, Component, EventEmitter, Injector, Input, Output, ReflectiveInjector, ComponentFactoryResolver, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map, catchError, filter, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
import { of } from 'rxjs/observable/of';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ConfigModel {
}
if (false) {
    /** @type {?} */
    ConfigModel.prototype._id;
    /** @type {?} */
    ConfigModel.prototype.Name;
    /** @type {?} */
    ConfigModel.prototype.Config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (((/** @type {?} */ (this)))[key] = ((/** @type {?} */ (initValue)))[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetConfigsApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetConfigsApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetConfigsApiModel || (GetConfigsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EditConfigApiModel;
(function (EditConfigApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (((/** @type {?} */ (this)))[key] = ((/** @type {?} */ (initValue)))[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                Name: this.Name,
                Config: this.Config
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl("", [Validators.required]),
                Config: new FormGroup({})
            });
        }
    }
    EditConfigApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.Config;
    }
    class Response {
        constructor() { }
    }
    EditConfigApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditConfigApiModel || (EditConfigApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function PartialConfig() { }
if (false) {
    /** @type {?} */
    PartialConfig.prototype.type;
    /** @type {?} */
    PartialConfig.prototype.inputs;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ConfigModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    ConfigModuleConfig.prototype.env;
}
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "config/module/front_end/did/not/set"
    }
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
class GetConfigAction {
    constructor() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
}
if (false) {
    /** @type {?} */
    GetConfigAction.prototype.type;
}
class ConfigLoadedSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.type;
    /** @type {?} */
    ConfigLoadedSucceedAction.prototype.payload;
}
class UpdateConfigAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.UPDATE_CONFIG;
    }
}
if (false) {
    /** @type {?} */
    UpdateConfigAction.prototype.type;
    /** @type {?} */
    UpdateConfigAction.prototype.payload;
}
class ConfigLoadedFailedAction {
    constructor() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
}
if (false) {
    /** @type {?} */
    ConfigLoadedFailedAction.prototype.type;
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
    State.prototype.data;
}
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    switch (action.type) {
        case ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return Object.assign({}, state, { data: action.payload });
        case ConfigActionTypes.UPDATE_CONFIG:
            return Object.assign({}, state, { data: state.data.map((/**
                 * @param {?} config
                 * @return {?}
                 */
                config => {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                })) });
        default:
            return state;
    }
}
/** @type {?} */
const getConfigs = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);
/** @type {?} */
const getAppConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "app_config")));
/** @type {?} */
const getAuthenticationModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "authentication_module_config")));
/** @type {?} */
const getUserModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "user_module_config")));
/** @type {?} */
const getConfigModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "config_module_config")))));
/** @type {?} */
const getFormModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "form_module_config")))));
/** @type {?} */
const getSocketModuleConfig = (/**
 * @param {?} state
 * @return {?}
 */
(state) => (/** @type {?} */ (state.data.find((/**
 * @param {?} config
 * @return {?}
 */
config => config.Name == "socket_module_config")))));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ConfigState() { }
if (false) {
    /** @type {?} */
    ConfigState.prototype.list;
}
/** @type {?} */
const ConfigReducers = {
    list: Reducer
};
/**
 * @record
 */
function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.configs;
}
//#region selectors
/** @type {?} */
const selectConfigState = createFeatureSelector("config");
//#endregion
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.list;
/** @type {?} */
const getConfigListState = createSelector(selectConfigState, (ɵ0$1));
/** @type {?} */
const getConfigs$1 = createSelector(getConfigListState, getConfigs);
/** @type {?} */
const getAppConfig$1 = createSelector(getConfigListState, getAppConfig);
/** @type {?} */
const getAuthenticationModuleConfig$1 = createSelector(getConfigListState, getAuthenticationModuleConfig);
/** @type {?} */
const getUserModuleConfig$1 = createSelector(getConfigListState, getUserModuleConfig);
/** @type {?} */
const getConfigModuleConfig$1 = createSelector(getConfigListState, getConfigModuleConfig);
/** @type {?} */
const getFormModuleConfig$1 = createSelector(getConfigListState, getFormModuleConfig);
/** @type {?} */
const getSocketModuleConfig$1 = createSelector(getConfigListState, getSocketModuleConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig$1).subscribe((/**
         * @param {?} configConfig
         * @return {?}
         */
        configConfig => {
            if (!configConfig)
                return;
            this._config = Object.assign({}, this._config, configConfig.Config);
            this.config$.next(this._config);
        }));
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN), ɵɵinject(Store)); }, token: ConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype._config;
    /** @type {?} */
    ConfigurationService.prototype.config$;
    /**
     * @type {?}
     * @private
     */
    ConfigurationService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.store.dispatch(new GetConfigAction());
        }), 999);
    }
    /**
     * @return {?}
     */
    getConfigs() {
        return this.http
            .get(`${this.configurationService.config.env.frontend_server}/api/config`)
            .pipe(take(1), map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => Observable.throw(err))));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getConfigByName(name) {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/config/${name}`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    editConfig(body) {
        /** @type {?} */
        const model = new EditConfigApiModel.Request(body);
        return this.http
            .put(`${this.configurationService.config.env.frontend_server}/api/config/${model.Name}`, model.getRequestBody())
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
    /**
     * @return {?}
     */
    getLayoutConfigs() {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/layout-config`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response)), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        })));
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: ConfigurationService }
];
/** @nocollapse */ ConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigsComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs$1);
    }
}
ConfigsComponent.decorators = [
    { type: Component, args: [{
                selector: "configs",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>settings_input_component</mat-icon>\r\n          <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle> -->\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"18\" fxFlex.lg=\"23.5\" fxFlex.md=\"31\" fxFlex.sm=\"48\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  config.Name]\" *ngFor=\"let config of (configs | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{config.Name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: [":host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
            }] }
];
/** @nocollapse */
ConfigsComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ConfigsComponent.prototype.configs;
    /**
     * @type {?}
     * @private
     */
    ConfigsComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthenticationModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                signIn: new FormControl("", [Validators.required]),
                signOut: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required]),
                captchaUrl: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                signIn: new FormControl("", [Validators.required])
            })
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.formGroup.patchValue(data);
        }));
    }
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    setFormId(formId, formName) {
        this.formGroup.patchValue({ [formName]: formId });
    }
}
AuthenticationModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-authentication-module-config",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A</span>\r\n                </mat-card-title>\r\n                <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle> -->\r\n            </mat-card-header>\r\n\r\n            <div>\r\n\r\n                <h2>Endpoints</h2>\r\n                <div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\"\r\n                            formControlName=\"signIn\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\"\r\n                            formControlName=\"signOut\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"who am i\"\r\n                            formControlName=\"whoAmI\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"captcha url\"\r\n                            formControlName=\"captchaUrl\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h2>Forms</h2>\r\n                <div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\"\r\n                            formControlName=\"signIn\">\r\n                    </mat-form-field>\r\n                    <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
AuthenticationModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
AuthenticationModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AuthenticationModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    AuthenticationModuleConfigComponent.prototype.configChanged;
    /**
     * @type {?}
     * @private
     */
    AuthenticationModuleConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigAppConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.formGroup.patchValue(data);
        }));
    }
}
ConfigAppConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-app-config",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n                <div [formGroup]=\"formGroup\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\"\r\n                            formControlName=\"AppTitle\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-card>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
ConfigAppConfigComponent.ctorParameters = () => [
    { type: Injector }
];
ConfigAppConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ConfigAppConfigComponent.prototype.formGroup;
    /** @type {?} */
    ConfigAppConfigComponent.prototype.configChanged;
    /**
     * @type {?}
     * @private
     */
    ConfigAppConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        ((/** @type {?} */ (configFormGroup.controls.dashboardLinks))).controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            ((/** @type {?} */ (this.formGroup.controls.dashboardLinks))).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                title: new FormControl("", [Validators.required])
            }));
        }));
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.formGroup.patchValue(data);
        }));
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        /** @type {?} */
        var menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        ((/** @type {?} */ (this.formGroup.get("dashboardLinks")))).push(menuItem);
        ((/** @type {?} */ (this.configFormGroup.get("dashboardLinks")))).push(menuItem);
    }
}
UserModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-user-module-config",
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"\" class=\"with-sticky-action\">\r\n            <h2>Endpoints</h2>\r\n            <div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\"\r\n                        formControlName=\"changePassword\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\"\r\n                        formControlName=\"editProfile\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\"\r\n                        formControlName=\"getUserInfo\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\"\r\n                        formControlName=\"whoAmI\">\r\n                </mat-form-field>\r\n            </div>\r\n            <h2>Forms</h2>\r\n            <div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\"\r\n                        formControlName=\"profile_edit\">\r\n                </mat-form-field>\r\n                <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\r\n            </div>\r\n\r\n\r\n            <h2 fxFlex=\"100\">\r\n                Dashobard Links\r\n                <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                    <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                </button>\r\n            </h2>\r\n            <div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\r\n                <div [formGroup]=\"item\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\"\r\n                            formControlName=\"route\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\"\r\n                            formControlName=\"icon\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\"\r\n                            formControlName=\"title\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
UserModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
UserModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UserModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype._configFormGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype.configChanged;
    /**
     * @type {?}
     * @private
     */
    UserModuleConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutModuleConfigComponent {
    /**
     * @param {?} injector
     * @param {?} store
     */
    constructor(injector, store) {
        this.injector = injector;
        this.store = store;
        this.configChanged = new EventEmitter();
        this.formGroup = new FormGroup({
            layoutMode: new FormControl("", [Validators.required]),
            showLeftNavBar: new FormControl("", [Validators.required]),
            mainSideNavMode: new FormControl("", [Validators.required]),
            showMainSidenav: new FormControl("", [Validators.required]),
            stickyLeftNavBar: new FormControl("", [Validators.required]),
            showSecondSideNav: new FormControl("", [Validators.required]),
            secondSideNavMode: new FormControl("", [Validators.required]),
            menuItems: new FormArray([])
        });
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
        this.roleItems$ = this.store
            .select(getAppConfig$1)
            .pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config != null)), map((/**
         * @param {?} appconfig
         * @return {?}
         */
        appconfig => appconfig.Config.Roles)));
        // this.configChanged.
        // this.formGroup.valueChanges.subscribe(value => {
        // 	debugger;
        // 	this.configChanged.emit(value);
        // });
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        ((/** @type {?} */ (configFormGroup.controls.menuItems))).controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            ((/** @type {?} */ (this.formGroup.controls.menuItems))).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                roles: new FormControl(),
                title: new FormControl("", [Validators.required])
            }));
        }));
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this.formGroup.patchValue(data)));
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        /** @type {?} */
        const menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).push(menuItem);
        ((/** @type {?} */ (this.configFormGroup.get("menuItems")))).push(menuItem);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeMenu(item) {
        debugger;
        /** @type {?} */
        const index = ((/** @type {?} */ (this.formGroup.get("menuItems")))).controls.indexOf(item);
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).removeAt(index);
    }
}
LayoutModuleConfigComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\r\n                    <div [formGroup]=\"formGroup\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\r\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </mat-card>\r\n\r\n                <mat-card fxFlex fxLayout=\"column\">\r\n                    <h2 fxFlex>\r\n                        Menu Items\r\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                        </button>\r\n                    </h2>\r\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\r\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\r\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
LayoutModuleConfigComponent.ctorParameters = () => [
    { type: Injector },
    { type: Store }
];
LayoutModuleConfigComponent.propDecorators = {
    configChanged: [{ type: Output, args: ["configChanged",] }],
    configFormGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.configChanged;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype._configFormGroup;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.sideNavModes;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.layoutModes;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.roleItems$;
    /**
     * @type {?}
     * @private
     */
    LayoutModuleConfigComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LayoutModuleConfigComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicConfigComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            authentication_module_config: AuthenticationModuleConfigComponent,
            app_config: ConfigAppConfigComponent,
            user_module_config: UserModuleConfigComponent,
            layout_config: LayoutModuleConfigComponent
        };
        this.configChanged = new EventEmitter();
        this.currentComponent = null;
    }
    /**
     * @return {?}
     */
    get config() {
        if (!this.currentComponent)
            return {};
        return this.currentComponent.instance.formGroup.value;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        if (!(data.type in this.typeMapToDiagram)) {
            if (this.currentComponent)
                this.currentComponent.destroy();
            return;
        }
        /** @type {?} */
        let _component = this.typeMapToDiagram[data.type];
        /** @type {?} */
        let inputProviders = Object.keys(data.inputs).map((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            return { provide: inputName, useValue: ((/** @type {?} */ (data.inputs)))[inputName] };
        }));
        /** @type {?} */
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        /** @type {?} */
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(_component);
        /** @type {?} */
        let component = factory.create(injector);
        // (<any>component.instance).configChanged.add.subscribe((data: any) => {
        // 	this.configChanged.emit(data);
        // });
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
DynamicConfigComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-config-component-selector",
                template: "<div #dynamicComponentContainer></div>",
                entryComponents: [
                    AuthenticationModuleConfigComponent,
                    ConfigAppConfigComponent,
                    UserModuleConfigComponent,
                    LayoutModuleConfigComponent
                ],
                styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"]
            }] }
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef, static: false },] }],
    configChanged: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.configChanged;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.currentComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigEditComponent {
    /**
     * @param {?} configService
     * @param {?} formBuilder
     * @param {?} route
     */
    constructor(configService, formBuilder, route) {
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const configName = params["name"];
            this.configService.getConfigByName(configName).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                debugger;
                this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: (/** @type {?} */ (this.formGroup.controls.Config))
                    }
                };
                this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.addControl((/** @type {?} */ (this.formGroup.controls.Config)), key, data.Result.Config[key]);
                }));
            }));
        }));
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    addControl(formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    configChanged(event) {
        console.log("-");
    }
    /**
     * @return {?}
     */
    edit() {
        this.formGroup.controls.Config.patchValue(this.dynConfig.config);
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe((/**
         * @param {?} config
         * @return {?}
         */
        config => { }));
    }
}
ConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "config-config-edit",
                template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\r\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\r\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\r\n    <mat-icon>done</mat-icon>\r\n  </button>\r\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\r\n</form>",
                styles: [""]
            }] }
];
/** @nocollapse */
ConfigEditComponent.ctorParameters = () => [
    { type: ConfigService },
    { type: FormBuilder },
    { type: ActivatedRoute }
];
ConfigEditComponent.propDecorators = {
    dynConfig: [{ type: ViewChild, args: ["dynConfig", { static: false },] }]
};
if (false) {
    /** @type {?} */
    ConfigEditComponent.prototype.configInforamation;
    /** @type {?} */
    ConfigEditComponent.prototype.formGroup;
    /** @type {?} */
    ConfigEditComponent.prototype.partialConfigModel;
    /** @type {?} */
    ConfigEditComponent.prototype.dynConfig;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    ConfigEditComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigModuleContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ConfigModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "config-module-container",
                template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
ConfigModuleContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadConfigEffects {
    /**
     * @param {?} actions$
     * @param {?} configService
     */
    constructor(actions$, configService) {
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$.pipe(ofType(ConfigActionTypes.GET_CONFIGS), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.configService.getConfigs())), map((/**
         * @param {?} configs
         * @return {?}
         */
        configs => new ConfigLoadedSucceedAction(configs))), catchError((/**
         * @return {?}
         */
        () => of(new ConfigLoadedFailedAction()))));
    }
}
LoadConfigEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoadConfigEffects.ctorParameters = () => [
    { type: Actions },
    { type: ConfigService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], LoadConfigEffects.prototype, "getConfigs$", void 0);
if (false) {
    /** @type {?} */
    LoadConfigEffects.prototype.getConfigs$;
    /**
     * @type {?}
     * @private
     */
    LoadConfigEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LoadConfigEffects.prototype.configService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: "configs",
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: "",
                component: ConfigsComponent
            },
            {
                path: "edit/:name",
                component: ConfigEditComponent
            }
        ]
    }
];
/** @type {?} */
const RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgsConfigModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
NgsConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatRadioModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserAnimationsModule
                ],
                declarations: [
                    ConfigsComponent,
                    ConfigEditComponent,
                    ConfigAppConfigComponent,
                    UserModuleConfigComponent,
                    LayoutModuleConfigComponent,
                    ConfigModuleContainerComponent,
                    AuthenticationModuleConfigComponent,
                    DynamicConfigComponentSelectorComponent
                ],
                providers: []
            },] }
];
class RootNgsConfigModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.config = "8.0.10";
    }
}
RootNgsConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsConfigModule,
                    StoreModule.forFeature("config", ConfigReducers),
                    EffectsModule.forFeature([LoadConfigEffects]),
                    RoutingModule
                ],
                exports: [NgsConfigModule]
            },] }
];
/** @nocollapse */
RootNgsConfigModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConfigModel, ConfigReducers, ConfigService, EditConfigApiModel, GetConfigsApiModel, MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG, NgsConfigModule, RootNgsConfigModule, getAppConfig$1 as getAppConfig, getAuthenticationModuleConfig$1 as getAuthenticationModuleConfig, getConfigListState, getConfigModuleConfig$1 as getConfigModuleConfig, getConfigs$1 as getConfigs, getFormModuleConfig$1 as getFormModuleConfig, getSocketModuleConfig$1 as getSocketModuleConfig, getUserModuleConfig$1 as getUserModuleConfig, selectConfigState, Reducer as ɵa, getConfigs as ɵb, getAppConfig as ɵc, getAuthenticationModuleConfig as ɵd, getUserModuleConfig as ɵe, getConfigModuleConfig as ɵf, getFormModuleConfig as ɵg, getSocketModuleConfig as ɵh, ConfigurationService as ɵk, ConfigsComponent as ɵl, ConfigEditComponent as ɵm, ConfigAppConfigComponent as ɵn, UserModuleConfigComponent as ɵo, LayoutModuleConfigComponent as ɵp, ConfigModuleContainerComponent as ɵq, AuthenticationModuleConfigComponent as ɵr, DynamicConfigComponentSelectorComponent as ɵs, LoadConfigEffects as ɵt, RoutingModule as ɵu };
//# sourceMappingURL=soushians-config.js.map

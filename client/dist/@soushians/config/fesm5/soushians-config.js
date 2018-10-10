import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Injectable, Inject, Component, Output, EventEmitter, Input, Injector, ViewChild, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, map, catchError, filter, switchMap } from 'rxjs/operators';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatSlideToggleModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ConfigModel = /** @class */ (function () {
    function ConfigModel() {
    }
    return ConfigModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GetConfigsApiModel;
(function (GetConfigsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return ((/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]); });
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
        return Request;
    }());
    GetConfigsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetConfigsApiModel.Response = Response;
})(GetConfigsApiModel || (GetConfigsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditConfigApiModel;
(function (EditConfigApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return ((/** @type {?} */ (_this))[key] = (/** @type {?} */ (initValue))[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return {
                Name: this.Name,
                Config: this.Config
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    Config: new FormGroup({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditConfigApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditConfigApiModel.Response = Response;
})(EditConfigApiModel || (EditConfigApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    env: {
        production: false,
        frontend_server: "config/module/front_end/did/not/set"
    }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("UserModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var ConfigActionTypes = {
    GET_CONFIGS: "[CONFIG] get config",
    CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
    UPDATE_CONFIG: "[CONFIG] update config",
    CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
};
var GetConfigAction = /** @class */ (function () {
    function GetConfigAction() {
        this.type = ConfigActionTypes.GET_CONFIGS;
    }
    return GetConfigAction;
}());
var ConfigLoadedSucceedAction = /** @class */ (function () {
    function ConfigLoadedSucceedAction(payload) {
        this.payload = payload;
        this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
    }
    return ConfigLoadedSucceedAction;
}());
var ConfigLoadedFailedAction = /** @class */ (function () {
    function ConfigLoadedFailedAction() {
        this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
    }
    return ConfigLoadedFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ɵ0 = [];
/** @type {?} */
var initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ConfigActionTypes.CONFIG_LOADED_SUCCEED:
            return __assign({}, state, { data: action.payload });
        case ConfigActionTypes.UPDATE_CONFIG:
            return __assign({}, state, { data: state.data.map(function (config) {
                    if (config._id == action.payload._id)
                        config.Config = action.payload.Config;
                    return config;
                }) });
        default:
            return state;
    }
}
/** @type {?} */
var getConfigs = function (state) { return state.data; };
/** @type {?} */
var getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
/** @type {?} */
var getAuthenticationModuleConfig = function (state) {
    return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
};
/** @type {?} */
var getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
/** @type {?} */
var getConfigModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
/** @type {?} */
var getFormModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
/** @type {?} */
var getSocketModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ConfigReducers = {
    list: Reducer
};
/** @type {?} */
var selectConfigState = createFeatureSelector("config");
/** @type {?} */
var getConfigListState = createSelector(selectConfigState, function (state) { return state.list; });
/** @type {?} */
var getConfigs$1 = createSelector(getConfigListState, getConfigs);
/** @type {?} */
var getAppConfig$1 = createSelector(getConfigListState, getAppConfig);
/** @type {?} */
var getAuthenticationModuleConfig$1 = createSelector(getConfigListState, getAuthenticationModuleConfig);
/** @type {?} */
var getUserModuleConfig$1 = createSelector(getConfigListState, getUserModuleConfig);
/** @type {?} */
var getConfigModuleConfig$1 = createSelector(getConfigListState, getConfigModuleConfig);
/** @type {?} */
var getFormModuleConfig$1 = createSelector(getConfigListState, getFormModuleConfig);
/** @type {?} */
var getSocketModuleConfig$1 = createSelector(getConfigListState, getSocketModuleConfig);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(this._config);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getConfigModuleConfig$1).subscribe(function (configConfig) {
            if (!configConfig)
                return;
            _this._config = Object.assign({}, _this._config, configConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(ConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigService = /** @class */ (function () {
    function ConfigService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(function () {
            _this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    ConfigService.prototype.getConfigs = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configurationService.config.env.frontend_server + "/api/config")
            .pipe(take(1), map(function (response) { return response.Result; }), catchError(function (err) { return Observable.throw(err); }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ConfigService.prototype.getConfigByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.http.get(this.configurationService.config.env.frontend_server + "/api/config/" + name).pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @param {?} body
     * @return {?}
     */
    ConfigService.prototype.editConfig = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var model = new EditConfigApiModel.Request(body);
        return this.http
            .put(this.configurationService.config.env.frontend_server + "/api/config/" + model.Name, model.getRequestBody())
            .pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    /**
     * @return {?}
     */
    ConfigService.prototype.getLayoutConfigs = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.configurationService.config.env.frontend_server + "/api/layout-config").pipe(map(function (response) { return response; }), catchError(function (err) {
            return Observable.throw(err);
        }));
    };
    ConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: ConfigurationService }
    ]; };
    /** @nocollapse */ ConfigService.ngInjectableDef = defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(inject(HttpClient), inject(Store), inject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    return ConfigService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs$1);
    }
    ConfigsComponent.decorators = [
        { type: Component, args: [{
                    selector: "configs",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>settings_input_component</mat-icon>\n          <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627</span>\n        </mat-card-title>\n        <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle> -->\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n        <button fxFlex.lt-lg=\"18\" fxFlex.lg=\"23.5\" fxFlex.md=\"31\" fxFlex.sm=\"48\" fxFlex.xs=\"100\" class='link'\n          mat-raised-button [routerLink]=\"['edit' ,  config.Name]\" *ngFor=\"let config of (configs | async)\">\n          <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>settings</mat-icon>\n            <h3 class='title'>{{config.Name}}</h3>\n          </div>\n        </button>\n\n      </div>\n\n    </mat-card>\n  </div>\n</div>",
                    styles: [":host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                },] },
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ConfigsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AuthenticationModuleConfigComponent = /** @class */ (function () {
    function AuthenticationModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                signIn: new FormControl("", [Validators.required]),
                signOut: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                signIn: new FormControl("", [Validators.required])
            })
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    AuthenticationModuleConfigComponent.prototype.setFormId = /**
     * @param {?} formId
     * @param {?} formName
     * @return {?}
     */
    function (formId, formName) {
        var _a;
        this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
    };
    AuthenticationModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-authentication-module-config",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A</span>\n                </mat-card-title>\n                <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle> -->\n            </mat-card-header>\n\n            <div>\n\n                <h2>Endpoints</h2>\n                <div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\"\n                            formControlName=\"signIn\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\"\n                            formControlName=\"signOut\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"who am i\"\n                            formControlName=\"whoAmI\">\n                    </mat-form-field>\n\n                </div>\n                <h2>Forms</h2>\n                <div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\"\n                            formControlName=\"signIn\">\n                    </mat-form-field>\n                    <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    AuthenticationModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    AuthenticationModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return AuthenticationModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigAppConfigComponent = /** @class */ (function () {
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ConfigAppConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-app-config",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n                <div [formGroup]=\"formGroup\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\"\n                            formControlName=\"AppTitle\">\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </mat-card>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ConfigAppConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return ConfigAppConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UserModuleConfigComponent = /** @class */ (function () {
    function UserModuleConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required]),
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls["dashboardLinks"])).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    title: new FormControl("", [Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    UserModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    };
    UserModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-user-module-config",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"\" class=\"with-sticky-action\">\n            <h2>Endpoints</h2>\n            <div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\"\n                        formControlName=\"changePassword\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\"\n                        formControlName=\"editProfile\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\"\n                        formControlName=\"getUserInfo\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\"\n                        formControlName=\"whoAmI\">\n                </mat-form-field>\n                <!-- <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"captcha url\"\n                        formControlName=\"captchaUrl\">\n                </mat-form-field> -->\n            </div>\n            <h2>Forms</h2>\n            <div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\"\n                        formControlName=\"profile_edit\">\n                </mat-form-field>\n                <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n            </div>\n\n\n            <h2 fxFlex=\"100\">\n                Dashobard Links\n                <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n                    <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n                </button>\n            </h2>\n            <div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n                <div [formGroup]=\"item\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\"\n                            formControlName=\"route\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\"\n                            formControlName=\"icon\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\"\n                            formControlName=\"title\">\n                    </mat-form-field>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    UserModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return UserModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LayoutModuleConfigComponent = /** @class */ (function () {
    function LayoutModuleConfigComponent(injector, store) {
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
            .pipe(filter(function (config) { return config != null; }), map(function (appconfig) { return appconfig.Config.Roles; }));
        // this.configChanged.
        // this.formGroup.valueChanges.subscribe(value => {
        // 	debugger;
        // 	this.configChanged.emit(value);
        // });
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach(function (control) {
                (/** @type {?} */ (_this.formGroup.controls["menuItems"])).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new FormControl(),
                    title: new FormControl("", [Validators.required])
                }));
            });
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) { return _this.formGroup.patchValue(data); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("menuItems"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("menuItems"))).push(menuItem);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.removeMenu = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        debugger;
        /** @type {?} */
        var index = (/** @type {?} */ (this.formGroup.get("menuItems"))).controls.indexOf(item);
        (/** @type {?} */ (this.formGroup.get("menuItems"))).removeAt(index);
    };
    LayoutModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\n                    <div [formGroup]=\"formGroup\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n                        <mat-form-field>\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n                        <mat-form-field>\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-card>\n\n                <mat-card fxFlex fxLayout=\"column\">\n                    <h2 fxFlex>\n                        Menu Items\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n                        </button>\n                    </h2>\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Store }
    ]; };
    LayoutModuleConfigComponent.propDecorators = {
        configChanged: [{ type: Output, args: ["configChanged",] }],
        configFormGroup: [{ type: Input }]
    };
    return LayoutModuleConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    function DynamicConfigComponentSelectorComponent(resolver) {
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
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.currentComponent)
                return {};
            return this.currentComponent.instance.formGroup.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            /** @type {?} */
            var _component = this.typeMapToDiagram[data.type];
            /** @type {?} */
            var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: (/** @type {?} */ (data.inputs))[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
            // (<any>component.instance).configChanged.add.subscribe((data: any) => {
            // 	this.configChanged.emit(data);
            // });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: "dynamic-config-component-selector",
                    template: "<div #dynamicComponentContainer></div>",
                    styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                    entryComponents: [
                        AuthenticationModuleConfigComponent,
                        ConfigAppConfigComponent,
                        UserModuleConfigComponent,
                        LayoutModuleConfigComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
        configChanged: [{ type: Output }],
        data: [{ type: Input }]
    };
    return DynamicConfigComponentSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigEditComponent = /** @class */ (function () {
    function ConfigEditComponent(configService, formBuilder, route) {
        var _this = this;
        this.configService = configService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = EditConfigApiModel.Request.formGroup;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var configName = params["name"];
            _this.configService.getConfigByName(configName).subscribe(function (data) {
                debugger;
                _this.partialConfigModel = {
                    type: data.Result.Name,
                    inputs: {
                        configFormGroup: /** @type {?} */ (_this.formGroup.controls["Config"])
                    }
                };
                _this.formGroup.patchValue({
                    _id: data.Result._id,
                    Name: data.Result.Name
                });
                Object.keys(data.Result.Config).forEach(function (key) {
                    _this.addControl(/** @type {?} */ (_this.formGroup.controls["Config"]), key, data.Result.Config[key]);
                });
            });
        });
    }
    /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ConfigEditComponent.prototype.addControl = /**
     * @param {?} formGroup
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (formGroup, key, value) {
        if (value instanceof Array) {
            formGroup.addControl(key, this.formBuilder.array(value));
        }
        else if (value instanceof Object) {
            formGroup.addControl(key, this.formBuilder.group(value));
        }
        else {
            formGroup.addControl(key, new FormControl(value));
        }
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfigEditComponent.prototype.configChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log("-");
    };
    /**
     * @return {?}
     */
    ConfigEditComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
        this.formGroup.controls["Config"].patchValue(this.dynConfig.config);
        if (!this.formGroup.valid)
            return;
        this.configService.editConfig(this.formGroup.value).subscribe(function (config) { });
    };
    ConfigEditComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-config-edit",
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\n    <mat-icon>done</mat-icon>\n  </button>\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\n</form>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ConfigEditComponent.ctorParameters = function () { return [
        { type: ConfigService },
        { type: FormBuilder },
        { type: ActivatedRoute }
    ]; };
    ConfigEditComponent.propDecorators = {
        dynConfig: [{ type: ViewChild, args: ["dynConfig",] }]
    };
    return ConfigEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ConfigModuleContainerComponent = /** @class */ (function () {
    function ConfigModuleContainerComponent() {
    }
    /**
     * @return {?}
     */
    ConfigModuleContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ConfigModuleContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ConfigModuleContainerComponent.ctorParameters = function () { return []; };
    return ConfigModuleContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LoadConfigEffects = /** @class */ (function () {
    function LoadConfigEffects(actions$, configService) {
        var _this = this;
        this.actions$ = actions$;
        this.configService = configService;
        this.getConfigs$ = this.actions$
            .ofType(ConfigActionTypes.GET_CONFIGS)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.configService.getConfigs(); }), map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), catchError(function () { return of(new ConfigLoadedFailedAction()); }));
    }
    LoadConfigEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ConfigService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
    return LoadConfigEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
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
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgsConfigModule = /** @class */ (function () {
    function NgsConfigModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NgsConfigModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
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
                },] },
    ];
    return NgsConfigModule;
}());
var RootNgsConfigModule = /** @class */ (function () {
    function RootNgsConfigModule() {
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
                },] },
    ];
    return RootNgsConfigModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ConfigService, ConfigModel, GetConfigsApiModel, EditConfigApiModel, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, ConfigReducers, selectConfigState, getConfigListState, getConfigs$1 as getConfigs, getAppConfig$1 as getAppConfig, getAuthenticationModuleConfig$1 as getAuthenticationModuleConfig, getUserModuleConfig$1 as getUserModuleConfig, getConfigModuleConfig$1 as getConfigModuleConfig, getFormModuleConfig$1 as getFormModuleConfig, getSocketModuleConfig$1 as getSocketModuleConfig, NgsConfigModule, RootNgsConfigModule, RoutingModule as ɵu, ConfigAppConfigComponent as ɵn, AuthenticationModuleConfigComponent as ɵr, LayoutModuleConfigComponent as ɵp, UserModuleConfigComponent as ɵo, LoadConfigEffects as ɵt, Reducer as ɵa, getAppConfig as ɵc, getAuthenticationModuleConfig as ɵd, getConfigModuleConfig as ɵf, getConfigs as ɵb, getFormModuleConfig as ɵg, getSocketModuleConfig as ɵh, getUserModuleConfig as ɵe, ConfigurationService as ɵk, ConfigEditComponent as ɵm, ConfigModuleContainerComponent as ɵq, ConfigsComponent as ɵl, DynamicConfigComponentSelectorComponent as ɵs };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvZ2V0LWNvbmZpZ3MtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2VkaXQtY29uZmlnLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDb25maWdNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0Q29uZmlnOiB7fTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKCh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbmZpZzogdGhpcy5Db25maWdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBDb25maWdNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJjb25maWcvbW9kdWxlL2Zyb250X2VuZC9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29uZmlnTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQ29uZmlnQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9DT05GSUdTID0gXCJbQ09ORklHXSBnZXQgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9TVUNDRUVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBzdWNjZWVkXCIsXHJcblx0VVBEQVRFX0NPTkZJRyA9IFwiW0NPTkZJR10gdXBkYXRlIGNvbmZpZ1wiLFxyXG5cdENPTkZJR19MT0FERURfRkFJTEVEID0gXCJbQ09ORklHXSBsb2FkIGNvbmZpZyBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0Q29uZmlnQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuR0VUX0NPTkZJR1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29uZmlnTW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgQWN0aW9ucyA9IEdldENvbmZpZ0FjdGlvbiB8IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfCBVcGRhdGVDb25maWdBY3Rpb247XHJcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tIFwiLi4vYWN0aW9ucy9jb25maWcuYWN0aW9uXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBhbnlbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogY29uZmlnLkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMuQ09ORklHX0xPQURFRF9TVUNDRUVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5VUERBVEVfQ09ORklHOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IHN0YXRlLmRhdGEubWFwKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0XHRpZiAoY29uZmlnLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpIGNvbmZpZy5Db25maWcgPSBhY3Rpb24ucGF5bG9hZC5Db25maWc7XHJcblx0XHRcdFx0XHRyZXR1cm4gY29uZmlnO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlncyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbmV4cG9ydCBjb25zdCBnZXRBcHBDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXBwX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiYXV0aGVudGljYXRpb25fbW9kdWxlX2NvbmZpZ1wiKTtcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwidXNlcl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiY29uZmlnX21vZHVsZV9jb25maWdcIikgYXMgYW55O1xyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybU1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcImZvcm1fbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJzb2NrZXRfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIGNvbmZpZ0xpc3QgZnJvbSBcIi4vY29uZmlnLWxpc3QucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24sIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1N0YXRlIHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlN0YXRlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBDb25maWdSZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBjb25maWdMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImNvbmZpZ3NcIjogQ29uZmlnU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb25maWdTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxDb25maWdTdGF0ZT4oXCJjb25maWdcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdMaXN0U3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RDb25maWdTdGF0ZSwgKHN0YXRlOiBDb25maWdTdGF0ZSkgPT4gc3RhdGUubGlzdCk7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ3MpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXBwQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEFwcENvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG5cdGdldENvbmZpZ0xpc3RTdGF0ZSxcclxuXHRjb25maWdMaXN0LmdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnXHJcbik7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0TW9kdWxlQ29uZmlnID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29uZmlnTGlzdFN0YXRlLCBjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogQ29uZmlnTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLl9jb25maWcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGU6IENvbmZpZ01vZHVsZUNvbmZpZywgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdNb2R1bGVDb25maWcpLnN1YnNjcmliZShjb25maWdDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIWNvbmZpZ0NvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGNvbmZpZ0NvbmZpZy5Db25maWcpO1xyXG5cdFx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdENvbmZpZ0FwaU1vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwsIENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0Q29uZmlnQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFrZSwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxDb25maWdTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldENvbmZpZ0FjdGlvbigpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb25maWdzKCk6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZ2ApXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdHRha2UoMSksXHJcblx0XHRcdFx0bWFwKChyZXNwb25zZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IE9ic2VydmFibGUudGhyb3coZXJyKSlcclxuXHRcdFx0KTtcclxuXHR9XHJcblx0Z2V0Q29uZmlnQnlOYW1lKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvY29uZmlnLyR7bmFtZX1gKS5waXBlKFxyXG5cdFx0XHRtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxyXG5cdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdGVkaXRDb25maWcoYm9keTogRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QoYm9keSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KFxyXG5cdFx0XHRcdGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWcvJHttb2RlbC5OYW1lfWAsXHJcblx0XHRcdFx0bW9kZWwuZ2V0UmVxdWVzdEJvZHkoKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdG1hcChyZXNwb25zZSA9PiByZXNwb25zZSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2xheW91dC1jb25maWdgKS5waXBlKFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgZ2V0Q29uZmlncywgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWdzXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzX2lucHV0X2NvbXBvbmVudDwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOYwrPDmMKnw5nChcOYwqfDmcKGw5nChyDDmcKIIMOZwoXDmMKnw5rCmMOZwojDmcKEIMOZwofDmMKnPC9zcGFuPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPCEtLSA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4Lmx0LWxnPVwiMThcIiBmeEZsZXgubGc9XCIyMy41XCIgZnhGbGV4Lm1kPVwiMzFcIiBmeEZsZXguc209XCI0OFwiIGZ4RmxleC54cz1cIjEwMFwiIGNsYXNzPSdsaW5rJ1xyXG4gICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPVwiWydlZGl0JyAsICBjb25maWcuTmFtZV1cIiAqbmdGb3I9XCJsZXQgY29uZmlnIG9mIChjb25maWdzIHwgYXN5bmMpXCI+XHJcbiAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PSdjb2x1bW4nIGZ4TGF5b3V0QWxpZ249J2NlbnRlciBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPSd0aXRsZSc+e3tjb25maWcuTmFtZX19PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uY29uZmlnLWJveHttYXJnaW46MTVweH1idXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW46LjUlO2JveC1zaXppbmc6Ym9yZGVyLWJveH1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjM0cHg7d2lkdGg6MzRweDtoZWlnaHQ6MzRweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnc0NvbXBvbmVudCB7XHJcblx0Y29uZmlnczogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY29uZmlncyA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldENvbmZpZ3MpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nc19pbnB1dF9jb21wb25lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5nChcOYwqfDmsKYw5nCiMOZwoQgw5jCp8OYwq3DmMKxw5jCp8OYwrIgw5nCh8OZwojDm8KMw5jCqjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT4gLS0+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+RW5kcG9pbnRzPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuZW5kcG9pbnRzXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gb3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNpZ25PdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwid2hvIGFtIGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwid2hvQW1JXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5Gb3JtczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLmZvcm1zXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpZ25JbiBGb3Jtc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0c2lnbk91dDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdH0pLFxyXG5cdFx0Zm9ybXM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG5cdHNldEZvcm1JZChmb3JtSWQ6IHN0cmluZywgZm9ybU5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFtmb3JtTmFtZV06IGZvcm1JZCB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWFwcC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3NfaW5wdXRfY29tcG9uZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOYwrPDmMKnw5nChcOYwqfDmcKGw5nChzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgw5jCtMOYwqfDmcKFw5nChCDDmMKqw5nChcOYwqfDmcKFw5vCjCDDmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqw6LCgMKMw5nCh8OYwqcgw5jCp8OYwrIgw5nCgsOYwqjDm8KMw5nChCDDmMKvw5jCp8OYwqbDmMKxw5vCjMOYwowgw5jCrMOZwoXDmMK5w6LCgMKMw5jCosOZwojDmMKxw5vCjCDDmcKIIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIkFwcFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdBcHBDb25maWdDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7IEFwcFRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pIH0pO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy11c2VyLW1vZHVsZS1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJcIiBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDI+RW5kcG9pbnRzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2VuZHBvaW50cycpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiV2hvIEFtIElcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjYXB0Y2hhIHVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNhcHRjaGFVcmxcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyPkZvcm1zPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2Zvcm1zJylcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInByb2ZpbGUgZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVfZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGgyIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgRGFzaG9iYXJkIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTWVudSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICRhbnkoZm9ybUdyb3VwLmdldCgnZGFzaGJvYXJkTGlua3MnKSkuY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJyb3V0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNoYW5nZVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0ZWRpdFByb2ZpbGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRnZXRVc2VySW5mbzogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdC8vIGNhcHRjaGFVcmw6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cHJvZmlsZV9lZGl0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0fSksXHJcblx0XHRkYXNoYm9hcmRMaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdGNvbnN0IG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRBcHBDb25maWcgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nc19pbnB1dF9jb21wb25lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5nChcOYwqfDmsKYw5nCiMOZwoQgTGF5b3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJsYXlvdXQgbW9kZVwiIGZvcm1Db250cm9sTmFtZT1cImxheW91dE1vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsYXlvdXRNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dMZWZ0TmF2QmFyXCI+c2hvdyBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJtYWluIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJtYWluU2lkZU5hdk1vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlTmF2TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwic2Vjb25kIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRTaWRlTmF2TW9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBmeEZsZXggZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51IEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b24gaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAkYW55KGZvcm1Hcm91cCkuZ2V0KCdtZW51SXRlbXMnKS5jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlTWVudShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwicm9sZXNcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlc1wiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcm9sZSBvZiByb2xlSXRlbXMkIHwgYXN5bmNcIiBbdmFsdWVdPVwicm9sZVwiPnt7cm9sZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoXCJjb25maWdDaGFuZ2VkXCIpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRcdFx0Ly8gcm9sZXM6IG5ldyBGb3JtQXJyYXkoY29udHJvbC52YWx1ZS5yb2xlcy5tYXAoKGkpID0+IG5ldyBGb3JtQ29udHJvbChcIkFkbWluXCIpKSksXHJcblx0XHRcdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cclxuXHRzaWRlTmF2TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGxheW91dE1vZGVzOiBzdHJpbmdbXTtcclxuXHRmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0bWFpblNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dTZWNvbmRTaWRlTmF2OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRyb2xlSXRlbXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuc2lkZU5hdk1vZGVzID0gW1wib3ZlclwiLCBcInB1c2hcIiwgXCJzaWRlXCJdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFtcIndpdGgtbWFyZ2luXCIsIFwid2l0aG91dC1tYXJnaW5cIiwgXCJkZWZhdWx0XCJdO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMucm9sZUl0ZW1zJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IG51bGwpLCBtYXAoYXBwY29uZmlnID0+IGFwcGNvbmZpZy5Db25maWcuUm9sZXMpKTtcclxuXHRcdC8vIHRoaXMuY29uZmlnQ2hhbmdlZC5cclxuXHRcdC8vIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG5cdFx0Ly8gXHRkZWJ1Z2dlcjtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdH1cclxuXHRyZW1vdmVNZW51KGl0ZW06IGFueSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBpbmRleCA9ICh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnJlbW92ZUF0KGluZGV4KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0VXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IGFueSA9IHtcclxuXHRcdGF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0YXBwX2NvbmZpZzogQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0dXNlcl9tb2R1bGVfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0bGF5b3V0X2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRpZiAoIXRoaXMuY3VycmVudENvbXBvbmVudCkgcmV0dXJuIHt9O1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudENvbXBvbmVudC5pbnN0YW5jZS5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBQYXJ0aWFsQ29uZmlnKSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50OiBhbnkgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogKGRhdGEuaW5wdXRzIGFzIGFueSlbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0Ly8gKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5jb25maWdDaGFuZ2VkLmFkZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAjZHluQ29uZmlnIChjb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoJGV2ZW50KVwiIFtkYXRhXT1cInBhcnRpYWxDb25maWdNb2RlbFwiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDxidXR0b24gbWF0LWZhYiAgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0XCI+XHJcbiAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPCEtLSA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi9jb25maWdzXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+IC0tPlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbmZpZ0luZm9yYW1hdGlvbjogYW55O1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHBhcnRpYWxDb25maWdNb2RlbDogUGFydGlhbENvbmZpZztcclxuXHRAVmlld0NoaWxkKFwiZHluQ29uZmlnXCIpIGR5bkNvbmZpZzogRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgY29uZmlnTmFtZTogc3RyaW5nID0gcGFyYW1zW1wibmFtZVwiXTtcclxuXHRcdFx0dGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ0J5TmFtZShjb25maWdOYW1lKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0dGhpcy5wYXJ0aWFsQ29uZmlnTW9kZWwgPSB7XHJcblx0XHRcdFx0XHR0eXBlOiBkYXRhLlJlc3VsdC5OYW1lLFxyXG5cdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdGNvbmZpZ0Zvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRfaWQ6IGRhdGEuUmVzdWx0Ll9pZCxcclxuXHRcdFx0XHRcdE5hbWU6IGRhdGEuUmVzdWx0Lk5hbWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLlJlc3VsdC5Db25maWcpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ29udHJvbCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcgYXMgRm9ybUdyb3VwLCBrZXksIGRhdGEuUmVzdWx0LkNvbmZpZ1trZXldKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFkZENvbnRyb2woZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkodmFsdWUpKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHZhbHVlKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh2YWx1ZSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7IH1cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLVwiKTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKHRoaXMuZHluQ29uZmlnLmNvbmZpZyk7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7IH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctbW9kdWxlLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dEFsaWduPVwiXCIgZnhmbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ0FjdGlvblR5cGVzLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uLCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRDb25maWdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0Q29uZmlncyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlncygpKSxcclxuXHRcdFx0bWFwKGNvbmZpZ3MgPT4gbmV3IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24oY29uZmlncykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLW1vZHVsZS1jb250YWluZXIvY29uZmlnLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImNvbmZpZ3NcIixcclxuXHRcdGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBDb25maWdzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOm5hbWVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ0VkaXRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctbW9kdWxlLWNvbnRhaW5lci9jb25maWctbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvYWRDb25maWdFZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9sb2FkLWNvbmZpZy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1JlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NvbmZpZy5yb3V0aW5nLW1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzQ29uZmlnTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NDb25maWdNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImNvbmZpZy5Db25maWdBY3Rpb25UeXBlcyIsImNvbmZpZ0xpc3QuUmVkdWNlciIsImdldENvbmZpZ3MiLCJjb25maWdMaXN0LmdldENvbmZpZ3MiLCJnZXRBcHBDb25maWciLCJjb25maWdMaXN0LmdldEFwcENvbmZpZyIsImdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsImdldFVzZXJNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWciLCJnZXRDb25maWdNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyIsImdldEZvcm1Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWciLCJnZXRTb2NrZXRNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQUE7OztzQkFBQTtJQUlDOzs7Ozs7QUNDRCxJQUFpQixrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDLElBQUE7UUFDQyxpQkFBWSxTQUF3RTtZQUF4RSwwQkFBQSxFQUFBLDhCQUF3QyxFQUFnQyxDQUFBO1lBQXBGLGlCQUVDO1lBREEsTUFB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
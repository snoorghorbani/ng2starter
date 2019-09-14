(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/BehaviorSubject'), require('@angular/common'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material'), require('@ngrx/store'), require('@angular/forms'), require('@angular/core'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/operators'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@soushians/config', ['exports', 'rxjs', 'rxjs/BehaviorSubject', '@angular/common', '@angular/common/http', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material', '@ngrx/store', '@angular/forms', '@angular/core', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/operators', '@angular/router'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.config = {}),global.rxjs,global.rxjs.BehaviorSubject,global.ng.common,global.ng.common.http,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material,global.i2,global.ng.forms,global.ng.core,global.effects,global.rxjs['observable/of'],global.rxjs.operators,global.ng.router));
}(this, (function (exports,rxjs,BehaviorSubject,common,i1,flexLayout,animations,material,i2,forms,i0,effects,of,operators,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ConfigModel = /** @class */ (function () {
        function ConfigModel() {
        }
        return ConfigModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    (function (GetConfigsApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ( /** @type {?} */({}));
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return ((( /** @type {?} */(_this)))[key] = (( /** @type {?} */(initValue)))[key]); });
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
    })(exports.GetConfigsApiModel || (exports.GetConfigsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    (function (EditConfigApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ( /** @type {?} */({}));
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return ((( /** @type {?} */(_this)))[key] = (( /** @type {?} */(initValue)))[key]); });
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
                 */ function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Config: new forms.FormGroup({})
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
    })(exports.EditConfigApiModel || (exports.EditConfigApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "config/module/front_end/did/not/set"
        }
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (state === void 0) {
            state = initialState;
        }
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
    var getConfigModuleConfig = function (state) { return ( /** @type {?} */(state.data.find(function (config) { return config.Name == "config_module_config"; }))); };
    /** @type {?} */
    var getFormModuleConfig = function (state) { return ( /** @type {?} */(state.data.find(function (config) { return config.Name == "form_module_config"; }))); };
    /** @type {?} */
    var getSocketModuleConfig = function (state) { return ( /** @type {?} */(state.data.find(function (config) { return config.Name == "socket_module_config"; }))); };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ConfigReducers = {
        list: Reducer
    };
    //#region selectors
    /** @type {?} */
    var selectConfigState = i2.createFeatureSelector("config");
    //#endregion
    /** @type {?} */
    var getConfigListState = i2.createSelector(selectConfigState, function (state) { return state.list; });
    /** @type {?} */
    var getConfigs$1 = i2.createSelector(getConfigListState, getConfigs);
    /** @type {?} */
    var getAppConfig$1 = i2.createSelector(getConfigListState, getAppConfig);
    /** @type {?} */
    var getAuthenticationModuleConfig$1 = i2.createSelector(getConfigListState, getAuthenticationModuleConfig);
    /** @type {?} */
    var getUserModuleConfig$1 = i2.createSelector(getConfigListState, getUserModuleConfig);
    /** @type {?} */
    var getConfigModuleConfig$1 = i2.createSelector(getConfigListState, getConfigModuleConfig);
    /** @type {?} */
    var getFormModuleConfig$1 = i2.createSelector(getConfigListState, getFormModuleConfig);
    /** @type {?} */
    var getSocketModuleConfig$1 = i2.createSelector(getConfigListState, getSocketModuleConfig);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigurationService = /** @class */ (function () {
        function ConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new BehaviorSubject.BehaviorSubject(this._config);
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
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        ConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        ConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: ConfigurationService, providedIn: "root" });
        return ConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    .pipe(operators.take(1), operators.map(function (response) { return response.Result; }), operators.catchError(function (err) { return rxjs.Observable.throw(err); }));
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
                return this.http.get(this.configurationService.config.env.frontend_server + "/api/config/" + name).pipe(operators.map(function (response) { return response; }), operators.catchError(function (err) {
                    return rxjs.Observable.throw(err);
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
                var model = new exports.EditConfigApiModel.Request(body);
                return this.http
                    .put(this.configurationService.config.env.frontend_server + "/api/config/" + model.Name, model.getRequestBody())
                    .pipe(operators.map(function (response) { return response; }), operators.catchError(function (err) {
                    return rxjs.Observable.throw(err);
                }));
            };
        /**
         * @return {?}
         */
        ConfigService.prototype.getLayoutConfigs = /**
         * @return {?}
         */
            function () {
                return this.http.get(this.configurationService.config.env.frontend_server + "/api/layout-config").pipe(operators.map(function (response) { return response; }), operators.catchError(function (err) {
                    return rxjs.Observable.throw(err);
                }));
            };
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        ConfigService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: ConfigurationService }
            ];
        };
        /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
        return ConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigsComponent = /** @class */ (function () {
        function ConfigsComponent(store) {
            this.store = store;
            this.configs = this.store.select(getConfigs$1);
        }
        ConfigsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "configs",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>settings_input_component</mat-icon>\r\n          <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle> -->\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"18\" fxFlex.lg=\"23.5\" fxFlex.md=\"31\" fxFlex.sm=\"48\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  config.Name]\" *ngFor=\"let config of (configs | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{config.Name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>",
                        styles: [":host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                    }] }
        ];
        /** @nocollapse */
        ConfigsComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return ConfigsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigEditComponent = /** @class */ (function () {
        function ConfigEditComponent(configService, formBuilder, route) {
            var _this = this;
            this.configService = configService;
            this.formBuilder = formBuilder;
            this.route = route;
            this.formGroup = exports.EditConfigApiModel.Request.formGroup;
            this.route.params.subscribe(function (params) {
                /** @type {?} */
                var configName = params["name"];
                _this.configService.getConfigByName(configName).subscribe(function (data) {
                    debugger;
                    _this.partialConfigModel = {
                        type: data.Result.Name,
                        inputs: {
                            configFormGroup: ( /** @type {?} */(_this.formGroup.controls.Config))
                        }
                    };
                    _this.formGroup.patchValue({
                        _id: data.Result._id,
                        Name: data.Result.Name
                    });
                    Object.keys(data.Result.Config).forEach(function (key) {
                        _this.addControl(( /** @type {?} */(_this.formGroup.controls.Config)), key, data.Result.Config[key]);
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
                    formGroup.addControl(key, new forms.FormControl(value));
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
                this.formGroup.controls.Config.patchValue(this.dynConfig.config);
                if (!this.formGroup.valid)
                    return;
                this.configService.editConfig(this.formGroup.value).subscribe(function (config) { });
            };
        ConfigEditComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "config-config-edit",
                        template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\r\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\r\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\r\n    <mat-icon>done</mat-icon>\r\n  </button>\r\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\r\n</form>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ConfigEditComponent.ctorParameters = function () {
            return [
                { type: ConfigService },
                { type: forms.FormBuilder },
                { type: router.ActivatedRoute }
            ];
        };
        ConfigEditComponent.propDecorators = {
            dynConfig: [{ type: i0.ViewChild, args: ["dynConfig",] }]
        };
        return ConfigEditComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigAppConfigComponent = /** @class */ (function () {
        function ConfigAppConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({ AppTitle: new forms.FormControl("", [forms.Validators.required]) });
            this.configChanged = new i0.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
            set: /**
             * @param {?} configFormGroup
             * @return {?}
             */ function (configFormGroup) {
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
            { type: i0.Component, args: [{
                        selector: "config-app-config",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n                <div [formGroup]=\"formGroup\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\"\r\n                            formControlName=\"AppTitle\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n        </mat-card>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ConfigAppConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        ConfigAppConfigComponent.propDecorators = {
            configFormGroup: [{ type: i0.Input }],
            configChanged: [{ type: i0.Output }]
        };
        return ConfigAppConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserModuleConfigComponent = /** @class */ (function () {
        function UserModuleConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({
                endpoints: new forms.FormGroup({
                    changePassword: new forms.FormControl("", [forms.Validators.required]),
                    editProfile: new forms.FormControl("", [forms.Validators.required]),
                    getUserInfo: new forms.FormControl("", [forms.Validators.required]),
                    whoAmI: new forms.FormControl("", [forms.Validators.required])
                }),
                forms: new forms.FormGroup({
                    profile_edit: new forms.FormControl("", [forms.Validators.required])
                }),
                dashboardLinks: new forms.FormArray([])
            });
            this.configChanged = new i0.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._configFormGroup;
            },
            set: /**
             * @param {?} configFormGroup
             * @return {?}
             */ function (configFormGroup) {
                var _this = this;
                this._configFormGroup = configFormGroup;
                (( /** @type {?} */(configFormGroup.controls.dashboardLinks))).controls.forEach(function (control) {
                    (( /** @type {?} */(_this.formGroup.controls.dashboardLinks))).push(new forms.FormGroup({
                        route: new forms.FormControl("", [forms.Validators.required]),
                        icon: new forms.FormControl("", [forms.Validators.required]),
                        title: new forms.FormControl("", [forms.Validators.required])
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
                var menuItem = new forms.FormGroup({
                    route: new forms.FormControl("", [forms.Validators.required]),
                    icon: new forms.FormControl("", [forms.Validators.required]),
                    title: new forms.FormControl("", [forms.Validators.required])
                });
                (( /** @type {?} */(this.formGroup.get("dashboardLinks")))).push(menuItem);
                (( /** @type {?} */(this.configFormGroup.get("dashboardLinks")))).push(menuItem);
            };
        UserModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "config-user-module-config",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"\" class=\"with-sticky-action\">\r\n            <h2>Endpoints</h2>\r\n            <div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\"\r\n                        formControlName=\"changePassword\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\"\r\n                        formControlName=\"editProfile\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\"\r\n                        formControlName=\"getUserInfo\">\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\"\r\n                        formControlName=\"whoAmI\">\r\n                </mat-form-field>\r\n            </div>\r\n            <h2>Forms</h2>\r\n            <div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\r\n                <mat-form-field>\r\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\"\r\n                        formControlName=\"profile_edit\">\r\n                </mat-form-field>\r\n                <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\r\n            </div>\r\n\r\n\r\n            <h2 fxFlex=\"100\">\r\n                Dashobard Links\r\n                <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                    <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                </button>\r\n            </h2>\r\n            <div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\r\n                <div [formGroup]=\"item\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\"\r\n                            formControlName=\"route\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\"\r\n                            formControlName=\"icon\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\"\r\n                            formControlName=\"title\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        UserModuleConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        UserModuleConfigComponent.propDecorators = {
            configFormGroup: [{ type: i0.Input }],
            configChanged: [{ type: i0.Output }]
        };
        return UserModuleConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LayoutModuleConfigComponent = /** @class */ (function () {
        function LayoutModuleConfigComponent(injector, store) {
            this.injector = injector;
            this.store = store;
            this.configChanged = new i0.EventEmitter();
            this.formGroup = new forms.FormGroup({
                layoutMode: new forms.FormControl("", [forms.Validators.required]),
                showLeftNavBar: new forms.FormControl("", [forms.Validators.required]),
                mainSideNavMode: new forms.FormControl("", [forms.Validators.required]),
                showMainSidenav: new forms.FormControl("", [forms.Validators.required]),
                stickyLeftNavBar: new forms.FormControl("", [forms.Validators.required]),
                showSecondSideNav: new forms.FormControl("", [forms.Validators.required]),
                secondSideNavMode: new forms.FormControl("", [forms.Validators.required]),
                menuItems: new forms.FormArray([])
            });
            this.sideNavModes = ["over", "push", "side"];
            this.layoutModes = ["with-margin", "without-margin", "default"];
            this.configFormGroup = this.injector.get("configFormGroup");
            this.roleItems$ = this.store
                .select(getAppConfig$1)
                .pipe(operators.filter(function (config) { return config != null; }), operators.map(function (appconfig) { return appconfig.Config.Roles; }));
            // this.configChanged.
            // this.formGroup.valueChanges.subscribe(value => {
            // 	debugger;
            // 	this.configChanged.emit(value);
            // });
        }
        Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._configFormGroup;
            },
            set: /**
             * @param {?} configFormGroup
             * @return {?}
             */ function (configFormGroup) {
                var _this = this;
                this._configFormGroup = configFormGroup;
                (( /** @type {?} */(configFormGroup.controls.menuItems))).controls.forEach(function (control) {
                    (( /** @type {?} */(_this.formGroup.controls.menuItems))).push(new forms.FormGroup({
                        route: new forms.FormControl("", [forms.Validators.required]),
                        icon: new forms.FormControl("", [forms.Validators.required]),
                        // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                        roles: new forms.FormControl(),
                        title: new forms.FormControl("", [forms.Validators.required])
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
                var menuItem = new forms.FormGroup({
                    route: new forms.FormControl("", [forms.Validators.required]),
                    icon: new forms.FormControl("", [forms.Validators.required]),
                    roles: new forms.FormControl(),
                    title: new forms.FormControl("", [forms.Validators.required])
                });
                (( /** @type {?} */(this.formGroup.get("menuItems")))).push(menuItem);
                (( /** @type {?} */(this.configFormGroup.get("menuItems")))).push(menuItem);
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
                var index = (( /** @type {?} */(this.formGroup.get("menuItems")))).controls.indexOf(item);
                (( /** @type {?} */(this.formGroup.get("menuItems")))).removeAt(index);
            };
        LayoutModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\r\n                    <div [formGroup]=\"formGroup\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\r\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </mat-card>\r\n\r\n                <mat-card fxFlex fxLayout=\"column\">\r\n                    <h2 fxFlex>\r\n                        Menu Items\r\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                        </button>\r\n                    </h2>\r\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\r\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\r\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        LayoutModuleConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i2.Store }
            ];
        };
        LayoutModuleConfigComponent.propDecorators = {
            configChanged: [{ type: i0.Output, args: ["configChanged",] }],
            configFormGroup: [{ type: i0.Input }]
        };
        return LayoutModuleConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: i0.Component, args: [{
                        selector: "config-module-container",
                        template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
                    }] }
        ];
        /** @nocollapse */
        ConfigModuleContainerComponent.ctorParameters = function () { return []; };
        return ConfigModuleContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthenticationModuleConfigComponent = /** @class */ (function () {
        function AuthenticationModuleConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({
                endpoints: new forms.FormGroup({
                    signIn: new forms.FormControl("", [forms.Validators.required]),
                    signOut: new forms.FormControl("", [forms.Validators.required]),
                    whoAmI: new forms.FormControl("", [forms.Validators.required]),
                    captchaUrl: new forms.FormControl("", [forms.Validators.required])
                }),
                forms: new forms.FormGroup({
                    signIn: new forms.FormControl("", [forms.Validators.required])
                })
            });
            this.configChanged = new i0.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
            set: /**
             * @param {?} configFormGroup
             * @return {?}
             */ function (configFormGroup) {
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
            { type: i0.Component, args: [{
                        selector: "config-authentication-module-config",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A</span>\r\n                </mat-card-title>\r\n                <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle> -->\r\n            </mat-card-header>\r\n\r\n            <div>\r\n\r\n                <h2>Endpoints</h2>\r\n                <div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\"\r\n                            formControlName=\"signIn\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\"\r\n                            formControlName=\"signOut\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"who am i\"\r\n                            formControlName=\"whoAmI\">\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"captcha url\"\r\n                            formControlName=\"captchaUrl\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <h2>Forms</h2>\r\n                <div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\r\n                    <mat-form-field>\r\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\"\r\n                            formControlName=\"signIn\">\r\n                    </mat-form-field>\r\n                    <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\r\n                </div>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        AuthenticationModuleConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        AuthenticationModuleConfigComponent.propDecorators = {
            configFormGroup: [{ type: i0.Input }],
            configChanged: [{ type: i0.Output }]
        };
        return AuthenticationModuleConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.configChanged = new i0.EventEmitter();
            this.currentComponent = null;
        }
        Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (data) {
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
                    return { provide: inputName, useValue: (( /** @type {?} */(data.inputs)))[inputName] };
                });
                /** @type {?} */
                var resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                /** @type {?} */
                var injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
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
            { type: i0.Component, args: [{
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
        DynamicConfigComponentSelectorComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        DynamicConfigComponentSelectorComponent.propDecorators = {
            dynamicComponentContainer: [{ type: i0.ViewChild, args: ["dynamicComponentContainer", { read: i0.ViewContainerRef },] }],
            configChanged: [{ type: i0.Output }],
            data: [{ type: i0.Input }]
        };
        return DynamicConfigComponentSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoadConfigEffects = /** @class */ (function () {
        function LoadConfigEffects(actions$, configService) {
            var _this = this;
            this.actions$ = actions$;
            this.configService = configService;
            this.getConfigs$ = this.actions$.pipe(effects.ofType(ConfigActionTypes.GET_CONFIGS), operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.configService.getConfigs(); }), operators.map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), operators.catchError(function () { return of.of(new ConfigLoadedFailedAction()); }));
        }
        LoadConfigEffects.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        LoadConfigEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: ConfigService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], LoadConfigEffects.prototype, "getConfigs$", void 0);
        return LoadConfigEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
                            flexLayout.FlexLayoutModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSnackBarModule,
                            material.MatSidenavModule,
                            material.MatExpansionModule,
                            material.MatSelectModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatRadioModule,
                            material.MatInputModule,
                            material.MatSlideToggleModule,
                            material.MatToolbarModule,
                            material.MatDatepickerModule,
                            material.MatProgressBarModule,
                            animations.BrowserAnimationsModule
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
        return NgsConfigModule;
    }());
    var RootNgsConfigModule = /** @class */ (function () {
        function RootNgsConfigModule() {
        }
        RootNgsConfigModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsConfigModule,
                            i2.StoreModule.forFeature("config", ConfigReducers),
                            effects.EffectsModule.forFeature([LoadConfigEffects]),
                            RoutingModule
                        ],
                        exports: [NgsConfigModule]
                    },] }
        ];
        return RootNgsConfigModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ConfigService = ConfigService;
    exports.ConfigModel = ConfigModel;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ConfigReducers = ConfigReducers;
    exports.selectConfigState = selectConfigState;
    exports.getConfigListState = getConfigListState;
    exports.getConfigs = getConfigs$1;
    exports.getAppConfig = getAppConfig$1;
    exports.getAuthenticationModuleConfig = getAuthenticationModuleConfig$1;
    exports.getUserModuleConfig = getUserModuleConfig$1;
    exports.getConfigModuleConfig = getConfigModuleConfig$1;
    exports.getFormModuleConfig = getFormModuleConfig$1;
    exports.getSocketModuleConfig = getSocketModuleConfig$1;
    exports.NgsConfigModule = NgsConfigModule;
    exports.RootNgsConfigModule = RootNgsConfigModule;
    exports.ɵu = RoutingModule;
    exports.ɵn = ConfigAppConfigComponent;
    exports.ɵr = AuthenticationModuleConfigComponent;
    exports.ɵp = LayoutModuleConfigComponent;
    exports.ɵo = UserModuleConfigComponent;
    exports.ɵt = LoadConfigEffects;
    exports.ɵa = Reducer;
    exports.ɵc = getAppConfig;
    exports.ɵd = getAuthenticationModuleConfig;
    exports.ɵf = getConfigModuleConfig;
    exports.ɵb = getConfigs;
    exports.ɵg = getFormModuleConfig;
    exports.ɵh = getSocketModuleConfig;
    exports.ɵe = getUserModuleConfig;
    exports.ɵk = ConfigurationService;
    exports.ɵm = ConfigEditComponent;
    exports.ɵq = ConfigModuleContainerComponent;
    exports.ɵl = ConfigsComponent;
    exports.ɵs = DynamicConfigComponentSelectorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=soushians-config.umd.js.map
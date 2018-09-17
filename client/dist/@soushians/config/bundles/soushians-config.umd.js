(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/router'), require('rxjs/operators'), require('rxjs/Observable'), require('@ngrx/effects'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/config', ['exports', '@angular/forms', '@angular/core', '@ngrx/store', 'rxjs/BehaviorSubject', '@angular/common/http', 'rxjs/Rx', '@angular/router', 'rxjs/operators', 'rxjs/Observable', '@ngrx/effects', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.config = {}),global.ng.forms,global.ng.core,null,global.rxjs.BehaviorSubject,global.ng.common.http,global.rxjs.Rx,global.ng.router,global.rxjs.operators,global.rxjs.Observable,null,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material));
}(this, (function (exports,forms,i0,i2,BehaviorSubject,i1,Rx,router,operators,Observable,effects,common,flexLayout,animations,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ ConfigModel = (function () {
        function ConfigModel() {
        }
        return ConfigModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (GetConfigsApiModel) {
        var Request = (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (((_this))[key] = ((initValue))[key]); });
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
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        GetConfigsApiModel.Response = Response;
    })(exports.GetConfigsApiModel || (exports.GetConfigsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (EditConfigApiModel) {
        var Request = (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (((_this))[key] = ((initValue))[key]); });
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
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        EditConfigApiModel.Response = Response;
    })(exports.EditConfigApiModel || (exports.EditConfigApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "config/module/front_end/did/not/set"
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("UserModuleConfig");

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
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var ConfigActionTypes = {
        GET_CONFIGS: "[CONFIG] get config",
        CONFIG_LOADED_SUCCEED: "[CONFIG] load config succeed",
        UPDATE_CONFIG: "[CONFIG] update config",
        CONFIG_LOADED_FAILED: "[CONFIG] load config failed",
    };
    var GetConfigAction = (function () {
        function GetConfigAction() {
            this.type = ConfigActionTypes.GET_CONFIGS;
        }
        return GetConfigAction;
    }());
    var ConfigLoadedSucceedAction = (function () {
        function ConfigLoadedSucceedAction(payload) {
            this.payload = payload;
            this.type = ConfigActionTypes.CONFIG_LOADED_SUCCEED;
        }
        return ConfigLoadedSucceedAction;
    }());
    var ConfigLoadedFailedAction = (function () {
        function ConfigLoadedFailedAction() {
            this.type = ConfigActionTypes.CONFIG_LOADED_FAILED;
        }
        return ConfigLoadedFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = [];
    var /** @type {?} */ initialState = {
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
    var /** @type {?} */ getConfigs = function (state) { return state.data; };
    var /** @type {?} */ getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
    var /** @type {?} */ getAuthenticationModuleConfig = function (state) {
        return state.data.find(function (config) { return config.Name == "authentication_module_config"; });
    };
    var /** @type {?} */ getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
    var /** @type {?} */ getConfigModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
    var /** @type {?} */ getFormModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
    var /** @type {?} */ getSocketModuleConfig = function (state) { return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ ConfigReducers = {
        list: Reducer
    };
    //#region selectors
    var /** @type {?} */ selectConfigState = i2.createFeatureSelector("config");
    //#endregion
    var /** @type {?} */ getConfigListState = i2.createSelector(selectConfigState, function (state) { return state.list; });
    var /** @type {?} */ getConfigs$1 = i2.createSelector(getConfigListState, getConfigs);
    var /** @type {?} */ getAppConfig$1 = i2.createSelector(getConfigListState, getAppConfig);
    var /** @type {?} */ getAuthenticationModuleConfig$1 = i2.createSelector(getConfigListState, getAuthenticationModuleConfig);
    var /** @type {?} */ getUserModuleConfig$1 = i2.createSelector(getConfigListState, getUserModuleConfig);
    var /** @type {?} */ getConfigModuleConfig$1 = i2.createSelector(getConfigListState, getConfigModuleConfig);
    var /** @type {?} */ getFormModuleConfig$1 = i2.createSelector(getConfigListState, getFormModuleConfig);
    var /** @type {?} */ getSocketModuleConfig$1 = i2.createSelector(getConfigListState, getSocketModuleConfig);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigurationService = (function () {
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
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigService = (function () {
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
                    .take(1)
                    .map(function (response) { return response.Result; })
                    .catch(function (err) { return Rx.Observable.throw(err); });
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
                return this.http
                    .get(this.configurationService.config.env.frontend_server + "/api/config/" + name)
                    .map(function (response) { return response; })
                    .catch(function (err) {
                    return Rx.Observable.throw(err);
                });
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
                var /** @type {?} */ model = new exports.EditConfigApiModel.Request(body);
                return this.http
                    .put(this.configurationService.config.env.frontend_server + "/api/config/" + model.Name, model.getRequestBody())
                    .map(function (response) { return response; })
                    .catch(function (err) {
                    return Rx.Observable.throw(err);
                });
            };
        /**
         * @return {?}
         */
        ConfigService.prototype.getLayoutConfigs = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.configurationService.config.env.frontend_server + "/api/layout-config")
                    .map(function (response) { return response; })
                    .catch(function (err) {
                    return Rx.Observable.throw(err);
                });
            };
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigsComponent = (function () {
        function ConfigsComponent(store) {
            this.store = store;
            this.configs = this.store.select(getConfigs$1);
        }
        ConfigsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "configs",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>settings_input_component</mat-icon>\n          <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n        <button fxFlex.lt-lg=\"18\" fxFlex.lg=\"23.5\" fxFlex.md=\"31\" fxFlex.sm=\"48\" fxFlex.xs=\"100\" class='link'\n          mat-raised-button [routerLink]=\"['edit' ,  config.Name]\" *ngFor=\"let config of (configs | async)\">\n          <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>settings</mat-icon>\n            <h3 class='title'>{{config.Name}}</h3>\n          </div>\n        </button>\n\n      </div>\n\n    </mat-card>\n  </div>\n</div>",
                        styles: [":host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigEditComponent = (function () {
        function ConfigEditComponent(configService, formBuilder, route) {
            var _this = this;
            this.configService = configService;
            this.formBuilder = formBuilder;
            this.route = route;
            this.formGroup = exports.EditConfigApiModel.Request.formGroup;
            this.route.params.subscribe(function (params) {
                var /** @type {?} */ configName = params["name"];
                _this.configService.getConfigByName(configName).subscribe(function (data) {
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
                this.formGroup.controls["Config"].patchValue(this.dynConfig.config);
                if (!this.formGroup.valid)
                    return;
                this.configService.editConfig(this.formGroup.value).subscribe(function (config) { });
            };
        ConfigEditComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "config-config-edit",
                        template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n  <dynamic-config-component-selector #dynConfig (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n  <button mat-fab  type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\n    <mat-icon>done</mat-icon>\n  </button>\n  <!-- <button  type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button> -->\n</form>",
                        styles: [""]
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigAppConfigComponent = (function () {
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
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n                <div [formGroup]=\"formGroup\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\"\n                            formControlName=\"AppTitle\">\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </mat-card>\n    </div>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var UserModuleConfigComponent = (function () {
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
                ((configFormGroup.controls["dashboardLinks"])).controls.forEach(function (control) {
                    ((_this.formGroup.controls["dashboardLinks"])).push(new forms.FormGroup({
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
                var /** @type {?} */ menuItem = new forms.FormGroup({
                    route: new forms.FormControl("", [forms.Validators.required]),
                    icon: new forms.FormControl("", [forms.Validators.required]),
                    title: new forms.FormControl("", [forms.Validators.required])
                });
                ((this.formGroup.get("dashboardLinks"))).push(menuItem);
                ((this.configFormGroup.get("dashboardLinks"))).push(menuItem);
            };
        UserModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "config-user-module-config",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"\" class=\"with-sticky-action\">\n            <h2>Endpoints</h2>\n            <div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\"\n                        formControlName=\"changePassword\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\"\n                        formControlName=\"editProfile\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\"\n                        formControlName=\"getUserInfo\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\"\n                        formControlName=\"whoAmI\">\n                </mat-form-field>\n            </div>\n            <h2>Forms</h2>\n            <div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n                <mat-form-field>\n                    <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\"\n                        formControlName=\"profile_edit\">\n                </mat-form-field>\n                <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n            </div>\n\n\n            <h2 fxFlex=\"100\">\n                Dashobard Links\n                <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n                    <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n                </button>\n            </h2>\n            <div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n                <div [formGroup]=\"item\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\"\n                            formControlName=\"route\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\"\n                            formControlName=\"icon\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\"\n                            formControlName=\"title\">\n                    </mat-form-field>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutModuleConfigComponent = (function () {
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
                ((configFormGroup.controls["menuItems"])).controls.forEach(function (control) {
                    ((_this.formGroup.controls["menuItems"])).push(new forms.FormGroup({
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
                var /** @type {?} */ menuItem = new forms.FormGroup({
                    route: new forms.FormControl("", [forms.Validators.required]),
                    icon: new forms.FormControl("", [forms.Validators.required]),
                    roles: new forms.FormControl(),
                    title: new forms.FormControl("", [forms.Validators.required])
                });
                ((this.formGroup.get("menuItems"))).push(menuItem);
                ((this.configFormGroup.get("menuItems"))).push(menuItem);
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
                var /** @type {?} */ index = ((this.formGroup.get("menuItems"))).controls.indexOf(item);
                ((this.formGroup.get("menuItems"))).removeAt(index);
            };
        LayoutModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\n                    <div [formGroup]=\"formGroup\">\n                        <mat-form-field>\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n                        <mat-form-field>\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n                        <mat-form-field>\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </mat-card>\n\n                <mat-card fxFlex fxLayout=\"column\">\n                    <h2 fxFlex>\n                        Menu Items\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n                        </button>\n                    </h2>\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\n                                <mat-icon>delete</mat-icon>\n                            </button>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\n                            </mat-form-field>\n                            <mat-form-field>\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigModuleContainerComponent = (function () {
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
                        template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        ConfigModuleContainerComponent.ctorParameters = function () { return []; };
        return ConfigModuleContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationModuleConfigComponent = (function () {
        function AuthenticationModuleConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({
                endpoints: new forms.FormGroup({
                    signIn: new forms.FormControl("", [forms.Validators.required]),
                    signOut: new forms.FormControl("", [forms.Validators.required]),
                    whoAmI: new forms.FormControl("", [forms.Validators.required])
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
                this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
                var _a;
            };
        AuthenticationModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "config-authentication-module-config",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <div>\n\n                <h2>Endpoints</h2>\n                <div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\"\n                            formControlName=\"signIn\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\"\n                            formControlName=\"signOut\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"who am i\"\n                            formControlName=\"whoAmI\">\n                    </mat-form-field>\n                </div>\n                <h2>Forms</h2>\n                <div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\"\n                            formControlName=\"signIn\">\n                    </mat-form-field>\n                    <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>"
                    },] },
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
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicConfigComponentSelectorComponent = (function () {
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
                var /** @type {?} */ _component = this.typeMapToDiagram[data.type];
                var /** @type {?} */ inputProviders = Object.keys(data.inputs).map(function (inputName) {
                    return { provide: inputName, useValue: ((data.inputs))[inputName] };
                });
                var /** @type {?} */ resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                var /** @type {?} */ injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
                var /** @type {?} */ component = factory.create(injector);
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
     * @suppress {checkTypes} checked by tsc
     */
    var LoadConfigEffects = (function () {
        function LoadConfigEffects(actions$, configService) {
            var _this = this;
            this.actions$ = actions$;
            this.configService = configService;
            this.getConfigs$ = this.actions$
                .ofType(ConfigActionTypes.GET_CONFIGS)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.configService.getConfigs(); }), operators.map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), operators.catchError(function () { return Observable.Observable.of(new ConfigLoadedFailedAction()); }));
        }
        LoadConfigEffects.decorators = [
            { type: i0.Injectable },
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
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
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
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsConfigModule = (function () {
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
                    },] },
        ];
        return NgsConfigModule;
    }());
    var RootNgsConfigModule = (function () {
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
                    },] },
        ];
        return RootNgsConfigModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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
    exports.ɵo = RoutingModule;
    exports.ɵf = ConfigAppConfigComponent;
    exports.ɵj = AuthenticationModuleConfigComponent;
    exports.ɵh = LayoutModuleConfigComponent;
    exports.ɵg = UserModuleConfigComponent;
    exports.ɵn = LoadConfigEffects;
    exports.ɵm = Reducer;
    exports.ɵl = ConfigReducers;
    exports.ɵb = ConfigurationService;
    exports.ɵe = ConfigEditComponent;
    exports.ɵi = ConfigModuleContainerComponent;
    exports.ɵc = ConfigsComponent;
    exports.ɵk = DynamicConfigComponentSelectorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvY29uZmlnLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2dldC1jb25maWdzLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9lZGl0LWNvbmZpZy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9jb25maWcuY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDb25maWdNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0Q29uZmlnOiB7fTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKCh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbmZpZzogdGhpcy5Db25maWdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBDb25maWdNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJjb25maWcvbW9kdWxlL2Zyb250X2VuZC9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29uZmlnTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBDb25maWdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NPTkZJR1MgPSBcIltDT05GSUddIGdldCBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX1NVQ0NFRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIHN1Y2NlZWRcIixcclxuXHRVUERBVEVfQ09ORklHID0gXCJbQ09ORklHXSB1cGRhdGUgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9GQUlMRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR2V0Q29uZmlnQWN0aW9uIHwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB8IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB8IFVwZGF0ZUNvbmZpZ0FjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBjb25maWcuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5tYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb25maWcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCkgY29uZmlnLkNvbmZpZyA9IGFjdGlvbi5wYXlsb2FkLkNvbmZpZztcclxuXHRcdFx0XHRcdHJldHVybiBjb25maWc7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuZXhwb3J0IGNvbnN0IGdldEFwcENvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhcHBfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJ1c2VyX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJjb25maWdfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiZm9ybV9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInNvY2tldF9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgY29uZmlnTGlzdCBmcm9tIFwiLi9jb25maWctbGlzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3RhdGUge1xyXG5cdGxpc3Q6IGNvbmZpZ0xpc3QuU3RhdGU7XHJcbn1cclxuQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uO1xyXG5leHBvcnQgY29uc3QgQ29uZmlnUmVkdWNlcnMgPSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0XCJjb25maWdzXCI6IENvbmZpZ1N0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29uZmlnU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q29uZmlnU3RhdGU+KFwiY29uZmlnXCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTGlzdFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Q29uZmlnU3RhdGUsIChzdGF0ZTogQ29uZmlnU3RhdGUpID0+IHN0YXRlLmxpc3QpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlncyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRDb25maWdzKTtcclxuZXhwb3J0IGNvbnN0IGdldEFwcENvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRBcHBDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRnZXRDb25maWdMaXN0U3RhdGUsXHJcblx0Y29uZmlnTGlzdC5nZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRVc2VyTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybU1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldE1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWcpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IENvbmZpZ01vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBDb25maWdNb2R1bGVDb25maWcsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoY29uZmlnQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCFjb25maWdDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWdDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsLCBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IEdldENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxDb25maWdTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldENvbmZpZ0FjdGlvbigpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb25maWdzKCk6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZ2ApXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IE9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWcvJHtuYW1lfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0ZWRpdENvbmZpZyhib2R5OiBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoXHJcblx0XHRcdFx0YCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZy8ke21vZGVsLk5hbWV9YCxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3NfaW5wdXRfY29tcG9uZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxzcGFuPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5jCs8OYwqfDmcKFw5jCp8OZwobDmcKHIMOZwoggw5nChcOYwqfDmsKYw5nCiMOZwoQgw5nCh8OYwqc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXgubHQtbGc9XCIxOFwiIGZ4RmxleC5sZz1cIjIzLjVcIiBmeEZsZXgubWQ9XCIzMVwiIGZ4RmxleC5zbT1cIjQ4XCIgZnhGbGV4LnhzPVwiMTAwXCIgY2xhc3M9J2xpbmsnXHJcbiAgICAgICAgICBtYXQtcmFpc2VkLWJ1dHRvbiBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2NvbmZpZy5OYW1lfX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWJ1dHRvbi5saW5re3BhZGRpbmc6MjVweCAxNXB4O21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94fWJ1dHRvbiBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAjZHluQ29uZmlnIChjb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoJGV2ZW50KVwiIFtkYXRhXT1cInBhcnRpYWxDb25maWdNb2RlbFwiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDxidXR0b24gbWF0LWZhYiAgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0XCI+XHJcbiAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPCEtLSA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi9jb25maWdzXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+IC0tPlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbmZpZ0luZm9yYW1hdGlvbjogYW55O1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdENvbmZpZ0FwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHBhcnRpYWxDb25maWdNb2RlbDogUGFydGlhbENvbmZpZztcclxuXHRAVmlld0NoaWxkKFwiZHluQ29uZmlnXCIpIGR5bkNvbmZpZzogRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgY29uZmlnTmFtZTogc3RyaW5nID0gcGFyYW1zW1wibmFtZVwiXTtcclxuXHRcdFx0dGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ0J5TmFtZShjb25maWdOYW1lKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5wYXJ0aWFsQ29uZmlnTW9kZWwgPSB7XHJcblx0XHRcdFx0XHR0eXBlOiBkYXRhLlJlc3VsdC5OYW1lLFxyXG5cdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdGNvbmZpZ0Zvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRfaWQ6IGRhdGEuUmVzdWx0Ll9pZCxcclxuXHRcdFx0XHRcdE5hbWU6IGRhdGEuUmVzdWx0Lk5hbWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLlJlc3VsdC5Db25maWcpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkQ29udHJvbCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db25maWcgYXMgRm9ybUdyb3VwLCBrZXksIGRhdGEuUmVzdWx0LkNvbmZpZ1trZXldKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFkZENvbnRyb2woZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkodmFsdWUpKTtcclxuXHRcdH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHZhbHVlKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3JtR3JvdXAuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh2YWx1ZSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdGNvbmZpZ0NoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItXCIpO1xyXG5cdH1cclxuXHRlZGl0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnLnBhdGNoVmFsdWUodGhpcy5keW5Db25maWcuY29uZmlnKTtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5lZGl0Q29uZmlnKHRoaXMuZm9ybUdyb3VwLnZhbHVlKS5zdWJzY3JpYmUoY29uZmlnID0+IHt9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWFwcC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3NfaW5wdXRfY29tcG9uZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOYwrPDmMKnw5nChcOYwqfDmcKGw5nChzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgw5jCtMOYwqfDmcKFw5nChCDDmMKqw5nChcOYwqfDmcKFw5vCjCDDmMKvw5jCscOYwq7DmcKIw5jCp8OYwrPDmMKqw6LCgMKMw5nCh8OYwqcgw5jCp8OYwrIgw5nCgsOYwqjDm8KMw5nChCDDmMKvw5jCp8OYwqbDmMKxw5vCjMOYwowgw5jCrMOZwoXDmMK5w6LCgMKMw5jCosOZwojDmMKxw5vCjCDDmcKIIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIkFwcFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdBcHBDb25maWdDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7IEFwcFRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pIH0pO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy11c2VyLW1vZHVsZS1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJcIiBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDI+RW5kcG9pbnRzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2VuZHBvaW50cycpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiV2hvIEFtIElcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDI+Rm9ybXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmdldCgnZm9ybXMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwicHJvZmlsZSBlZGl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicHJvZmlsZV9lZGl0XCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8bmdzLWZvcm0tc2VsZWN0b3IgKHNlbGVjdCk9XCJzZXRGb3JtSWQoJGV2ZW50LCdzaWduSW4nKVwiPjwvbmdzLWZvcm0tc2VsZWN0b3I+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICBEYXNob2JhcmQgTGlua3NcclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uIGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgJGFueShmb3JtR3JvdXAuZ2V0KCdkYXNoYm9hcmRMaW5rcycpKS5jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInJvdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Y2hhbmdlUGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGVkaXRQcm9maWxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRnZXRVc2VySW5mbzogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0d2hvQW1JOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cHJvZmlsZV9lZGl0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGRhc2hib2FyZExpbmtzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZGFzaGJvYXJkTGlua3MgYXMgRm9ybUFycmF5KS5wdXNoKFxyXG5cdFx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0dmFyIG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwiZGFzaGJvYXJkTGlua3NcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRBcHBDb25maWcgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYWN0aW9uXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nc19pbnB1dF9jb21wb25lbnQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5nChcOYwqfDmsKYw5nCiMOZwoQgTGF5b3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJsYXlvdXQgbW9kZVwiIGZvcm1Db250cm9sTmFtZT1cImxheW91dE1vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsYXlvdXRNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dMZWZ0TmF2QmFyXCI+c2hvdyBsZWZ0IG5hdmJhcjwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJtYWluIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJtYWluU2lkZU5hdk1vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlTmF2TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwic2Vjb25kIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRTaWRlTmF2TW9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBmeEZsZXggZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNZW51IEl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiaWNvbi1idXR0b24gaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAkYW55KGZvcm1Hcm91cCkuZ2V0KCdtZW51SXRlbXMnKS5jb250cm9sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiaXRlbVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlTWVudShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwicm9sZXNcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlc1wiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcm9sZSBvZiByb2xlSXRlbXMkIHwgYXN5bmNcIiBbdmFsdWVdPVwicm9sZVwiPnt7cm9sZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoXCJjb25maWdDaGFuZ2VkXCIpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRcdFx0Ly8gcm9sZXM6IG5ldyBGb3JtQXJyYXkoY29udHJvbC52YWx1ZS5yb2xlcy5tYXAoKGkpID0+IG5ldyBGb3JtQ29udHJvbChcIkFkbWluXCIpKSksXHJcblx0XHRcdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cclxuXHRzaWRlTmF2TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGxheW91dE1vZGVzOiBzdHJpbmdbXTtcclxuXHRmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0bWFpblNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dTZWNvbmRTaWRlTmF2OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRyb2xlSXRlbXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuc2lkZU5hdk1vZGVzID0gW1wib3ZlclwiLCBcInB1c2hcIiwgXCJzaWRlXCJdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFtcIndpdGgtbWFyZ2luXCIsIFwid2l0aG91dC1tYXJnaW5cIiwgXCJkZWZhdWx0XCJdO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMucm9sZUl0ZW1zJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IG51bGwpLCBtYXAoYXBwY29uZmlnID0+IGFwcGNvbmZpZy5Db25maWcuUm9sZXMpKTtcclxuXHRcdC8vIHRoaXMuY29uZmlnQ2hhbmdlZC5cclxuXHRcdC8vIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG5cdFx0Ly8gXHRkZWJ1Z2dlcjtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdH1cclxuXHRyZW1vdmVNZW51KGl0ZW06IGFueSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBpbmRleCA9ICh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnJlbW92ZUF0KGluZGV4KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLW1vZHVsZS1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXRBbGlnbj1cIlwiIGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzX2lucHV0X2NvbXBvbmVudDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmcKFw5jCp8OawpjDmcKIw5nChCDDmMKnw5jCrcOYwrHDmMKnw5jCsiDDmcKHw5nCiMObwozDmMKqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxoMj5FbmRwb2ludHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5lbmRwb2ludHNcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwic2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwic2lnbiBvdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2lnbk91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ3aG8gYW0gaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+Rm9ybXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5mb3Jtc1wiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaWduSW4gRm9ybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHNpZ25JbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0c2lnbk91dDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0d2hvQW1JOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KSxcclxuXHRcdGZvcm1zOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0fVxyXG5cdHNldEZvcm1JZChmb3JtSWQ6IHN0cmluZywgZm9ybU5hbWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFtmb3JtTmFtZV06IGZvcm1JZCB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJ0aWFsQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0VXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IGFueSA9IHtcclxuXHRcdGF1dGhlbnRpY2F0aW9uX21vZHVsZV9jb25maWc6IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0YXBwX2NvbmZpZzogQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0dXNlcl9tb2R1bGVfY29uZmlnOiBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0bGF5b3V0X2NvbmZpZzogTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRpZiAoIXRoaXMuY3VycmVudENvbXBvbmVudCkgcmV0dXJuIHt9O1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudENvbXBvbmVudC5pbnN0YW5jZS5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBQYXJ0aWFsQ29uZmlnKSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50OiBhbnkgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogKGRhdGEuaW5wdXRzIGFzIGFueSlbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0Ly8gKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5jb25maWdDaGFuZ2VkLmFkZC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdChkYXRhKTtcclxuXHRcdC8vIH0pO1xyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdBY3Rpb25UeXBlcywgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiwgQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2FkQ29uZmlnRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldENvbmZpZ3MkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUylcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZ3MoKSksXHJcblx0XHRcdG1hcChjb25maWdzID0+IG5ldyBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uKGNvbmZpZ3MpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLW1vZHVsZS1jb250YWluZXIvY29uZmlnLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ3NDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImNvbmZpZ3NcIixcclxuXHRcdGNvbXBvbmVudDogQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBDb25maWdzQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOm5hbWVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ0VkaXRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0TGlzdE1vZHVsZSxcclxuXHRNYXRNZW51TW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2NvbmZpZy5jb25maWdcIjtcclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnQXBwQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctbW9kdWxlLWNvbnRhaW5lci9jb25maWctbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXV0aGVudGljYXRpb24tbW9kdWxlLWNvbmZpZy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvYWRDb25maWdFZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9sb2FkLWNvbmZpZy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1JlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NvbmZpZy5yb3V0aW5nLW1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Q29uZmlnc0NvbXBvbmVudCxcclxuXHRcdENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0NvbmZpZ01vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzQ29uZmlnTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImNvbmZpZ1wiLCBDb25maWdSZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBMb2FkQ29uZmlnRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzQ29uZmlnTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NDb25maWdNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkdldENvbmZpZ3NBcGlNb2RlbCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiVmFsaWRhdG9ycyIsIkVkaXRDb25maWdBcGlNb2RlbCIsIkluamVjdGlvblRva2VuIiwiY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzIiwiY29uZmlnTGlzdC5SZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJnZXRDb25maWdzIiwiY29uZmlnTGlzdC5nZXRDb25maWdzIiwiZ2V0QXBwQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRBcHBDb25maWciLCJnZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsImNvbmZpZ0xpc3QuZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWciLCJnZXRVc2VyTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRVc2VyTW9kdWxlQ29uZmlnIiwiZ2V0Q29uZmlnTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWciLCJnZXRGb3JtTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnIiwiZ2V0U29ja2V0TW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWciLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJPYnNlcnZhYmxlIiwiSHR0cENsaWVudCIsIkNvbXBvbmVudCIsIkZvcm1CdWlsZGVyIiwiQWN0aXZhdGVkUm91dGUiLCJWaWV3Q2hpbGQiLCJFdmVudEVtaXR0ZXIiLCJJbmplY3RvciIsIklucHV0IiwiT3V0cHV0IiwiRm9ybUFycmF5IiwiZmlsdGVyIiwibWFwIiwiUmVmbGVjdGl2ZUluamVjdG9yIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NvbnRhaW5lclJlZiIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJBY3Rpb25zIiwiRWZmZWN0IiwiUm91dGVyTW9kdWxlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdFByb2dyZXNzQmFyTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7UUFBQTs7OzBCQUFBO1FBSUM7Ozs7OztBQ0NELElBQUEsV0FBaUIsa0JBQWtCO1FBQ2xDLElBQUE7WUFDQyxpQkFBWSxTQUF3RTtnQkFBeEUsMEJBQUE7b0JBQUEs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
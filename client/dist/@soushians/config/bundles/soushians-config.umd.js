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
                        template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n  <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"50\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  config.Name]\">\n          <mat-icon aria-label=\"edit config\">edit</mat-icon>\n        </a>\n        {{config.Name}}\n      </h3>\n  </mat-card>\n</div>",
                        styles: [":host{width:100%}.config-box{margin:15px}"]
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
                        styles: [":host{padding:25px}"]
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
                        template: "<div [formGroup]=\"formGroup\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">\n    </mat-form-field>\n</div>"
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
                        template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Who Am I\" formControlName=\"whoAmI\">\n        </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>\n\n\n<h2 fxFlex=\"100\">\n    Dashobard Links\n    <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n        <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n    </button>\n</h2>\n<div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n    <div [formGroup]=\"item\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n        </mat-form-field>\n    </div>\n</div>"
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
        LayoutModuleConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\n    <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\n        <div [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\" >\n                    <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle   formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n            <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n            <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </mat-card>\n\n    <mat-card fxFlex fxLayout=\"column\">\n        <h2 fxFlex>\n            Menu Items\n            <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n                <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n            </button>\n        </h2>\n        <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\n            <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\n                <button mat-icon-button>\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\n                </mat-form-field>\n                <mat-form-field> \n                    <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\n                        <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\n                    </mat-select> \n                </mat-form-field>\n            </div>\n        </div>\n    </mat-card>\n</div>"
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
                        template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\" formControlName=\"signIn\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\" formControlName=\"signOut\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"who am i\" formControlName=\"whoAmI\">\n    </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\" formControlName=\"signIn\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWNvbmZpZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9tb2RlbHMvY29uZmlnLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvbW9kZWxzL2dldC1jb25maWdzLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL21vZGVscy9lZGl0LWNvbmZpZy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9jb25maWcuY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9hY3Rpb25zL2NvbmZpZy5hY3Rpb24udHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9yZWR1Y2Vycy9jb25maWctbGlzdC5yZWR1Y2VyLnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvcmVkdWNlcnMvaW5kZXgudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlnLWVkaXQvY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvZHVtYi1jb21wb25lbnRzL2FwcC1jb25maWcvYXBwLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvdXNlci1tb2R1bGUtY29uZmlnL3VzZXItbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9kdW1iLWNvbXBvbmVudHMvbGF5b3V0LWNvbmZpZy9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvY29uZmlnL2xpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy9saWIvc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2VmZmVjdHMvbG9hZC1jb25maWcuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5yb3V0aW5nLW1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9jb25maWcvbGliL2NvbmZpZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0Q29uZmlnOiBUO1xyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi9jb25maWcubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0Q29uZmlnc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0Q29uZmlnc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXRDb25maWdzQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICgodGhpcyBhcyBhbnkpW2tleV0gPSAoaW5pdFZhbHVlIGFzIGFueSlba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDb25maWdNb2RlbDxhbnk+W107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Q29uZmlnQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0Q29uZmlnOiB7fTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKCh0aGlzIGFzIGFueSlba2V5XSA9IChpbml0VmFsdWUgYXMgYW55KVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbmZpZzogdGhpcy5Db25maWdcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb25maWc6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogQ29uZmlnTW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWdNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBDb25maWdNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJjb25maWcvbW9kdWxlL2Zyb250X2VuZC9kaWQvbm90L3NldFwiXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29uZmlnTW9kdWxlQ29uZmlnPihcIlVzZXJNb2R1bGVDb25maWdcIik7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBHZXRDb25maWdzQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBDb25maWdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NPTkZJR1MgPSBcIltDT05GSUddIGdldCBjb25maWdcIixcclxuXHRDT05GSUdfTE9BREVEX1NVQ0NFRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIHN1Y2NlZWRcIixcclxuXHRVUERBVEVfQ09ORklHID0gXCJbQ09ORklHXSB1cGRhdGUgY29uZmlnXCIsXHJcblx0Q09ORklHX0xPQURFRF9GQUlMRUQgPSBcIltDT05GSUddIGxvYWQgY29uZmlnIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRDb25maWdBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5HRVRfQ09ORklHUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb25maWdNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNvbmZpZ0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENvbmZpZ01vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDb25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gR2V0Q29uZmlnQWN0aW9uIHwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB8IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiB8IFVwZGF0ZUNvbmZpZ0FjdGlvbjtcclxuIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCIuLi9hY3Rpb25zL2NvbmZpZy5hY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IGFueVtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBjb25maWcuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIGNvbmZpZy5Db25maWdBY3Rpb25UeXBlcy5DT05GSUdfTE9BREVEX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogYWN0aW9uLnBheWxvYWRcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgY29uZmlnLkNvbmZpZ0FjdGlvblR5cGVzLlVQREFURV9DT05GSUc6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogc3RhdGUuZGF0YS5tYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRcdGlmIChjb25maWcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCkgY29uZmlnLkNvbmZpZyA9IGFjdGlvbi5wYXlsb2FkLkNvbmZpZztcclxuXHRcdFx0XHRcdHJldHVybiBjb25maWc7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuZXhwb3J0IGNvbnN0IGdldEFwcENvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhcHBfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJhdXRoZW50aWNhdGlvbl9tb2R1bGVfY29uZmlnXCIpO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJ1c2VyX21vZHVsZV9jb25maWdcIik7XHJcbmV4cG9ydCBjb25zdCBnZXRDb25maWdNb2R1bGVDb25maWcgPSAoc3RhdGU6IFN0YXRlKSA9PlxyXG5cdHN0YXRlLmRhdGEuZmluZChjb25maWcgPT4gY29uZmlnLk5hbWUgPT0gXCJjb25maWdfbW9kdWxlX2NvbmZpZ1wiKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCBnZXRGb3JtTW9kdWxlQ29uZmlnID0gKHN0YXRlOiBTdGF0ZSkgPT5cclxuXHRzdGF0ZS5kYXRhLmZpbmQoY29uZmlnID0+IGNvbmZpZy5OYW1lID09IFwiZm9ybV9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldE1vZHVsZUNvbmZpZyA9IChzdGF0ZTogU3RhdGUpID0+XHJcblx0c3RhdGUuZGF0YS5maW5kKGNvbmZpZyA9PiBjb25maWcuTmFtZSA9PSBcInNvY2tldF9tb2R1bGVfY29uZmlnXCIpIGFzIGFueTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgY29uZmlnTGlzdCBmcm9tIFwiLi9jb25maWctbGlzdC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbiwgQ29uZmlnTG9hZGVkU3VjY2VlZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnU3RhdGUge1xyXG5cdGxpc3Q6IGNvbmZpZ0xpc3QuU3RhdGU7XHJcbn1cclxuQ29uZmlnTG9hZGVkRmFpbGVkQWN0aW9uO1xyXG5leHBvcnQgY29uc3QgQ29uZmlnUmVkdWNlcnMgPSB7XHJcblx0bGlzdDogY29uZmlnTGlzdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0XCJjb25maWdzXCI6IENvbmZpZ1N0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29uZmlnU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8Q29uZmlnU3RhdGU+KFwiY29uZmlnXCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnTGlzdFN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Q29uZmlnU3RhdGUsIChzdGF0ZTogQ29uZmlnU3RhdGUpID0+IHN0YXRlLmxpc3QpO1xyXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlncyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRDb25maWdzKTtcclxuZXhwb3J0IGNvbnN0IGdldEFwcENvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRBcHBDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWcgPSBjcmVhdGVTZWxlY3RvcihcclxuXHRnZXRDb25maWdMaXN0U3RhdGUsXHJcblx0Y29uZmlnTGlzdC5nZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlck1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRVc2VyTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ01vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRDb25maWdNb2R1bGVDb25maWcpO1xyXG5leHBvcnQgY29uc3QgZ2V0Rm9ybU1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRGb3JtTW9kdWxlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldE1vZHVsZUNvbmZpZyA9IGNyZWF0ZVNlbGVjdG9yKGdldENvbmZpZ0xpc3RTdGF0ZSwgY29uZmlnTGlzdC5nZXRTb2NrZXRNb2R1bGVDb25maWcpO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdNb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IENvbmZpZ01vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5fY29uZmlnKTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlOiBDb25maWdNb2R1bGVDb25maWcsIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlnTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoY29uZmlnQ29uZmlnID0+IHtcclxuXHRcdFx0aWYgKCFjb25maWdDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBjb25maWdDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgR2V0Q29uZmlnc0FwaU1vZGVsLCBDb25maWdNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmltcG9ydCB7IEdldENvbmZpZ0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ1NlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxDb25maWdTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldENvbmZpZ0FjdGlvbigpKTtcclxuXHRcdH0sIDk5OSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb25maWdzKCk6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZ2ApXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IE9ic2VydmFibGUudGhyb3coZXJyKSk7XHJcblx0fVxyXG5cdGdldENvbmZpZ0J5TmFtZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWcvJHtuYW1lfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0ZWRpdENvbmZpZyhib2R5OiBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoXHJcblx0XHRcdFx0YCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZy8ke21vZGVsLk5hbWV9YCxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0TGF5b3V0Q29uZmlncygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9sYXlvdXQtY29uZmlnYClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBnZXRDb25maWdzLCBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZ3NcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPG1hdC1jYXJkIGNsYXNzPVwiY29uZmlnLWJveFwiICpuZ0Zvcj1cImxldCBjb25maWcgb2YgKGNvbmZpZ3MgfCBhc3luYylcIiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGNvbmZpZy5OYW1lXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGNvbmZpZ1wiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2NvbmZpZy5OYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5jb25maWctYm94e21hcmdpbjoxNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdzQ29tcG9uZW50IHtcclxuXHRjb25maWdzOiBPYnNlcnZhYmxlPENvbmZpZ01vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5jb25maWdzID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0Q29uZmlncyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEVkaXRDb25maWdBcGlNb2RlbCwgUGFydGlhbENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi4vZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImVkaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAjZHluQ29uZmlnIChjb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoJGV2ZW50KVwiIFtkYXRhXT1cInBhcnRpYWxDb25maWdNb2RlbFwiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDxidXR0b24gbWF0LWZhYiAgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0XCI+XHJcbiAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbiAgPCEtLSA8YnV0dG9uICB0eXBlPVwiYnV0dG9uXCIgcm91dGVyTGluaz1cIi9jb25maWdzXCIgbWF0LXJhaXNlZC1idXR0b24+w5jCqMOYwqfDmMKyw5rCr8OYwrTDmMKqPC9idXR0b24+IC0tPlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cGFkZGluZzoyNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25maWdJbmZvcmFtYXRpb246IGFueTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXRDb25maWdBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRwYXJ0aWFsQ29uZmlnTW9kZWw6IFBhcnRpYWxDb25maWc7XHJcblx0QFZpZXdDaGlsZChcImR5bkNvbmZpZ1wiKSBkeW5Db25maWc6IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbmZpZ05hbWU6IHN0cmluZyA9IHBhcmFtc1tcIm5hbWVcIl07XHJcblx0XHRcdHRoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWdCeU5hbWUoY29uZmlnTmFtZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFydGlhbENvbmZpZ01vZGVsID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogZGF0YS5SZXN1bHQuTmFtZSxcclxuXHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRjb25maWdGb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZyBhcyBGb3JtR3JvdXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0X2lkOiBkYXRhLlJlc3VsdC5faWQsXHJcblx0XHRcdFx0XHROYW1lOiBkYXRhLlJlc3VsdC5OYW1lXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5SZXN1bHQuQ29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENvbnRyb2wodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29uZmlnIGFzIEZvcm1Hcm91cCwga2V5LCBkYXRhLlJlc3VsdC5Db25maWdba2V5XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb250cm9sKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KHZhbHVlKSk7XHJcblx0XHR9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcblx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGtleSwgdGhpcy5mb3JtQnVpbGRlci5ncm91cCh2YWx1ZSkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodmFsdWUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHRjb25maWdDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLVwiKTtcclxuXHR9XHJcblx0ZWRpdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbmZpZy5wYXRjaFZhbHVlKHRoaXMuZHluQ29uZmlnLmNvbmZpZyk7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZWRpdENvbmZpZyh0aGlzLmZvcm1Hcm91cC52YWx1ZSkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hcHAtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwr7DmMKxw5nCiMOawpjDmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiQXBwVGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgQXBwVGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSkgfSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLXVzZXItbW9kdWxlLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGgyPkVuZHBvaW50czwvaDI+XHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJjaGFuZ2UgcGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJjaGFuZ2VQYXNzd29yZFwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJlZGl0IHByb2ZpbGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlZGl0UHJvZmlsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJnZXQgdXNlciBpbmZvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ2V0VXNlckluZm9cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiV2hvIEFtIElcIiBmb3JtQ29udHJvbE5hbWU9XCJ3aG9BbUlcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2Zvcm1zJylcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInByb2ZpbGUgZWRpdFwiIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVfZWRpdFwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPCEtLSA8bmdzLWZvcm0tc2VsZWN0b3IgKHNlbGVjdCk9XCJzZXRGb3JtSWQoJGV2ZW50LCdzaWduSW4nKVwiPjwvbmdzLWZvcm0tc2VsZWN0b3I+IC0tPlxyXG48L2Rpdj5cclxuXHJcblxyXG48aDIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICBEYXNob2JhcmQgTGlua3NcclxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRNZW51KClcIj5cclxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uIGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbjwvaDI+XHJcbjxkaXYgZnhGbGV4PVwiMTAwXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgJGFueShmb3JtR3JvdXAuZ2V0KCdkYXNoYm9hcmRMaW5rcycpKS5jb250cm9sc1wiPlxyXG4gICAgPGRpdiBbZm9ybUdyb3VwXT1cIml0ZW1cIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInJvdXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwicm91dGVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNoYW5nZVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRlZGl0UHJvZmlsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0Z2V0VXNlckluZm86IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHByb2ZpbGVfZWRpdDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRkYXNoYm9hcmRMaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdHZhciBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJkYXNoYm9hcmRMaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyMFwiIGZ4RmxleExheW91dD1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJsYXlvdXQgbW9kZVwiIGZvcm1Db250cm9sTmFtZT1cImxheW91dE1vZGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGF5b3V0TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgICBmb3JtQ29udHJvbE5hbWU9XCJzaG93TGVmdE5hdkJhclwiPnNob3cgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwibWFpbiBzaWRlIG5hdiBtb2RlXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFpblNpZGVOYXZNb2RlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNpZGVOYXZNb2Rlc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJzaG93TWFpblNpZGVuYXZcIj5zaG93IG1haW4gc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInN0aWNreUxlZnROYXZCYXJcIj5zdGlja3kgbGVmdCBuYXZiYXI8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cInNob3dTZWNvbmRTaWRlTmF2XCI+c2hvdyBzZWNvbmQgc2lkZSBuYXY8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwic2Vjb25kIHNpZGUgbmF2IG1vZGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRTaWRlTmF2TW9kZVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaWRlTmF2TW9kZXNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PiBcclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgIDxoMiBmeEZsZXg+XHJcbiAgICAgICAgICAgIE1lbnUgSXRlbXNcclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZE1lbnUoKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mICRhbnkoZm9ybUdyb3VwKS5nZXQoJ21lbnVJdGVtcycpLmNvbnRyb2xzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiIGZvcm1Db250cm9sTmFtZT1cInJvdXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiaWNvblwiIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPiBcclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInJvbGVzXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZXNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHJvbGUgb2Ygcm9sZUl0ZW1zJCB8IGFzeW5jXCIgW3ZhbHVlXT1cInJvbGVcIj57e3JvbGV9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+IFxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoXCJjb25maWdDaGFuZ2VkXCIpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdC8vIHJvbGVzOiBuZXcgRm9ybUFycmF5KGNvbnRyb2wudmFsdWUucm9sZXMubWFwKChpKSA9PiBuZXcgRm9ybUNvbnRyb2woXCJBZG1pblwiKSkpLFxyXG5cdFx0XHRcdFx0cm9sZXM6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cclxuXHRzaWRlTmF2TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGxheW91dE1vZGVzOiBzdHJpbmdbXTtcclxuXHRmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93TGVmdE5hdkJhcjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdG1haW5TaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHN0aWNreUxlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRzaG93U2Vjb25kU2lkZU5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0bWVudUl0ZW1zOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdHJvbGVJdGVtcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5zaWRlTmF2TW9kZXMgPSBbIFwib3ZlclwiLCBcInB1c2hcIiwgXCJzaWRlXCIgXTtcclxuXHRcdHRoaXMubGF5b3V0TW9kZXMgPSBbIFwid2l0aC1tYXJnaW5cIiwgXCJ3aXRob3V0LW1hcmdpblwiLCBcImRlZmF1bHRcIiBdO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMucm9sZUl0ZW1zJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IG51bGwpLCBtYXAoYXBwY29uZmlnID0+IGFwcGNvbmZpZy5Db25maWcuUm9sZXMpKTtcclxuXHRcdC8vIHRoaXMuY29uZmlnQ2hhbmdlZC5cclxuXHRcdC8vIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG5cdFx0Ly8gXHRkZWJ1Z2dlcjtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHR2YXIgbWVudUl0ZW0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLW1vZHVsZS1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXRBbGlnbj1cIlwiIGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImNvbmZpZy1hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8aDI+RW5kcG9pbnRzPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5lbmRwb2ludHNcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInNpZ24gaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduSW5cIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwic2lnbiBvdXRcIiBmb3JtQ29udHJvbE5hbWU9XCJzaWduT3V0XCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIndobyBhbSBpXCIgZm9ybUNvbnRyb2xOYW1lPVwid2hvQW1JXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5cclxuPGgyPkZvcm1zPC9oMj5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5mb3Jtc1wiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2lnbkluIEZvcm1zXCIgZm9ybUNvbnRyb2xOYW1lPVwic2lnbkluXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8IS0tIDxuZ3MtZm9ybS1zZWxlY3RvciAoc2VsZWN0KT1cInNldEZvcm1JZCgkZXZlbnQsJ3NpZ25JbicpXCI+PC9uZ3MtZm9ybS1zZWxlY3Rvcj4gLS0+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZW5kcG9pbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0c2lnbkluOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRzaWduT3V0OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHR3aG9BbUk6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pLFxyXG5cdFx0Zm9ybXM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRzaWduSW46IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pXHJcblx0fSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0c2V0Rm9ybUlkKGZvcm1JZDogc3RyaW5nLCBmb3JtTmFtZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgW2Zvcm1OYW1lXTogZm9ybUlkIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE9uRGVzdHJveSxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFBhcnRpYWxDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2xheW91dC1jb25maWcvbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0QXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHRVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0dHlwZU1hcFRvRGlhZ3JhbTogYW55ID0ge1xyXG5cdFx0YXV0aGVudGljYXRpb25fbW9kdWxlX2NvbmZpZzogQXV0aGVudGljYXRpb25Nb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRhcHBfY29uZmlnOiBDb25maWdBcHBDb25maWdDb21wb25lbnQsXHJcblx0XHR1c2VyX21vZHVsZV9jb25maWc6IFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRsYXlvdXRfY29uZmlnOiBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QE91dHB1dCgpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdGlmICghdGhpcy5jdXJyZW50Q29tcG9uZW50KSByZXR1cm4ge307XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50Q29tcG9uZW50Lmluc3RhbmNlLmZvcm1Hcm91cC52YWx1ZTtcclxuXHR9XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGE6IFBhcnRpYWxDb25maWcpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0aWYgKCEoZGF0YS50eXBlIGluIHRoaXMudHlwZU1hcFRvRGlhZ3JhbSkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkgdGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IF9jb21wb25lbnQ6IGFueSA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLnR5cGVdO1xyXG5cdFx0bGV0IGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMoZGF0YS5pbnB1dHMpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiAoZGF0YS5pbnB1dHMgYXMgYW55KVtpbnB1dE5hbWVdIH07XHJcblx0XHR9KTtcclxuXHRcdGxldCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKGlucHV0UHJvdmlkZXJzKTtcclxuXHJcblx0XHRsZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFxyXG5cdFx0XHRyZXNvbHZlZElucHV0cyxcclxuXHRcdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcblx0XHQpO1xyXG5cdFx0bGV0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KF9jb21wb25lbnQpO1xyXG5cclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblx0XHQvLyAoPGFueT5jb21wb25lbnQuaW5zdGFuY2UpLmNvbmZpZ0NoYW5nZWQuYWRkLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnQ2hhbmdlZC5lbWl0KGRhdGEpO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZ0FjdGlvblR5cGVzLCBDb25maWdMb2FkZWRTdWNjZWVkQWN0aW9uLCBDb25maWdMb2FkZWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldENvbmZpZ3NBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvYWRDb25maWdFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0Q29uZmlncyQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENvbmZpZ0FjdGlvblR5cGVzLkdFVF9DT05GSUdTKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldENvbmZpZ3NBcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlncygpKSxcclxuXHRcdFx0bWFwKGNvbmZpZ3MgPT4gbmV3IENvbmZpZ0xvYWRlZFN1Y2NlZWRBY3Rpb24oY29uZmlncykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IENvbmZpZ0xvYWRlZEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctbW9kdWxlLWNvbnRhaW5lci9jb25maWctbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29uZmlnc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvY29uZmlncy9jb25maWdzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWctZWRpdC9jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiY29uZmlnc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IENvbmZpZ3NDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86bmFtZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQ29uZmlnRWRpdENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vY29uZmlnLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBDb25maWdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9jb25maWdzL2NvbmZpZ3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1lZGl0L2NvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdBcHBDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kdWxlQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3VzZXItbW9kdWxlLWNvbmZpZy91c2VyLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9sYXlvdXQtY29uZmlnL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyL2NvbmZpZy1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9hdXRoZW50aWNhdGlvbi1tb2R1bGUtY29uZmlnL2F1dGhlbnRpY2F0aW9uLW1vZHVsZS1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9hZENvbmZpZ0VmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2xvYWQtY29uZmlnLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQ29uZmlnUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY29uZmlnLnJvdXRpbmctbW9kdWxlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdFNpZGVuYXZNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRDb25maWdzQ29tcG9uZW50LFxyXG5cdFx0Q29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFVzZXJNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQsXHJcblx0XHRDb25maWdNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzQ29uZmlnTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc6IENvbmZpZ01vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NDb25maWdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiY29uZmlnXCIsIENvbmZpZ1JlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIExvYWRDb25maWdFZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NDb25maWdNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0NvbmZpZ01vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiR2V0Q29uZmlnc0FwaU1vZGVsIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJWYWxpZGF0b3JzIiwiRWRpdENvbmZpZ0FwaU1vZGVsIiwiSW5qZWN0aW9uVG9rZW4iLCJjb25maWcuQ29uZmlnQWN0aW9uVHlwZXMiLCJjb25maWdMaXN0LlJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsImdldENvbmZpZ3MiLCJjb25maWdMaXN0LmdldENvbmZpZ3MiLCJnZXRBcHBDb25maWciLCJjb25maWdMaXN0LmdldEFwcENvbmZpZyIsImdldEF1dGhlbnRpY2F0aW9uTW9kdWxlQ29uZmlnIiwiY29uZmlnTGlzdC5nZXRBdXRoZW50aWNhdGlvbk1vZHVsZUNvbmZpZyIsImdldFVzZXJNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFVzZXJNb2R1bGVDb25maWciLCJnZXRDb25maWdNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldENvbmZpZ01vZHVsZUNvbmZpZyIsImdldEZvcm1Nb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldEZvcm1Nb2R1bGVDb25maWciLCJnZXRTb2NrZXRNb2R1bGVDb25maWciLCJjb25maWdMaXN0LmdldFNvY2tldE1vZHVsZUNvbmZpZyIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsIk9ic2VydmFibGUiLCJIdHRwQ2xpZW50IiwiQ29tcG9uZW50IiwiRm9ybUJ1aWxkZXIiLCJBY3RpdmF0ZWRSb3V0ZSIsIlZpZXdDaGlsZCIsIkV2ZW50RW1pdHRlciIsIkluamVjdG9yIiwiSW5wdXQiLCJPdXRwdXQiLCJGb3JtQXJyYXkiLCJmaWx0ZXIiLCJtYXAiLCJSZWZsZWN0aXZlSW5qZWN0b3IiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwic3dpdGNoTWFwIiwiY2F0Y2hFcnJvciIsIkFjdGlvbnMiLCJFZmZlY3QiLCJSb3V0ZXJNb2R1bGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztRQUFBOzs7MEJBQUE7UUFJQzs7Ozs7O0FDQ0QsSUFBQSxXQUFpQixrQkFBa0I7UUFDbEMsSUFBQTtZQUNDLGlCQUFZLFNBQXdFO2dCQUF4RSwwQkFBQTtvQkFBQSw4QkFBd0MsRUFBZ0MsQ0FBQTs7Z0JBQXBGLGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsRUFBQyxLQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUcsRUFBQyxTQUFnQixHQUFFLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUN0Rjs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTyxFQUFFLENBQUM7aUJBQ1Y7MEJBYkg7WUFjRSxDQUFBO1FBUlksMEJBQU87UUFVcEIsSUFBQTtZQUVDO2FBQWdCOzJCQWxCbEI7WUFtQkUsQ0FBQTtRQUhZLDJCQUFRO09BWExBLDBCQUFrQixLQUFsQkEsMEJBQWtCLFFBZWxDOzs7Ozs7QUNsQkQsSUFHQSxXQUFpQixrQkFBa0I7UUFDbEMsSUFBQTtZQUdDLGlCQUFZLFNBQTRDO2dCQUE1QywwQkFBQTtvQkFBQSw4QkFBWSxFQUFnQyxDQUFBOztnQkFBeEQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxFQUFDLEtBQVcsR0FBRSxHQUFHLENBQUMsR0FBRyxFQUFDLFNBQWdCLEdBQUUsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3RGOzs7O1lBRUQs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
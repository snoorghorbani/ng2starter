(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('@ngrx/store'), require('rxjs/BehaviorSubject'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/router'), require('tslib'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/operators'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/config', ['exports', '@angular/forms', '@angular/core', '@ngrx/store', 'rxjs/BehaviorSubject', '@angular/common/http', 'rxjs/Rx', '@angular/router', 'tslib', 'rxjs/Observable', '@ngrx/effects', 'rxjs/operators', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.config = {}),global.ng.forms,global.ng.core,null,global.Rx,global.ng.common.http,global.Rx,global.ng.router,global.tslib,global.Rx,null,global.Rx.Observable.prototype,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material));
}(this, (function (exports,forms,core,store,BehaviorSubject,http,Rx,router,tslib,Observable,effects,operators,common,flexLayout,animations,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var ConfigModel = (function () {
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
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return ((_this))[key] = ((initValue))[key]; });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = function () {
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
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return ((_this))[key] = ((initValue))[key]; });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = function () {
                debugger;
                return {
                    Name: this.Name,
                    Config: this.Config
                };
            };
            Object.defineProperty(Request, "formGroup", {
                /**
                 * @return {?}
                 */
                get: function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl('', [forms.Validators.required]),
                        Config: new forms.FormGroup({}),
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
        dev_api_host: 'http://localhost:3000',
        prod_api_host: 'http://5.196.149.107:3000',
        env: {
            production: false
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken('UserModuleConfig');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var ConfigActionTypes = {
        GET_CONFIGS: '[CONFIG] get config',
        CONFIG_LOADED_SUCCEED: '[CONFIG] load config succeed',
        CONFIG_LOADED_FAILED: '[CONFIG] load config failed',
    };
    var GetConfigAction = (function () {
        function GetConfigAction() {
            this.type = ConfigActionTypes.GET_CONFIGS;
        }
        return GetConfigAction;
    }());
    var ConfigLoadedSucceedAction = (function () {
        /**
         * @param {?} payload
         */
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
                return Object.assign({}, state, { data: action.payload });
            default:
                return state;
        }
    }
    var /** @type {?} */ getConfigs = function (state) { return state.data; };
    var /** @type {?} */ getAppConfig = function (state) { return state.data.find(function (config) { return config.Name == "app_config"; }); };
    var /** @type {?} */ getAuthenticationModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "authentication_module_config"; }); };
    var /** @type {?} */ getUserModuleConfig = function (state) { return state.data.find(function (config) { return config.Name == "user_module_config"; }); };
    var /** @type {?} */ getlayoutModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "layout_config"; })); };
    var /** @type {?} */ getConfigModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "config_module_config"; })); };
    var /** @type {?} */ getFormModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "form_module_config"; })); };
    var /** @type {?} */ getSocketModuleConfig = function (state) { /** @type {?} */ return (state.data.find(function (config) { return config.Name == "socket_module_config"; })); };
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
    var /** @type {?} */ selectConfigState = store.createFeatureSelector("config");
    //#endregion
    var /** @type {?} */ getConfigListState = store.createSelector(selectConfigState, function (state) { return state.list; });
    var /** @type {?} */ getConfigs$1 = store.createSelector(getConfigListState, getConfigs);
    var /** @type {?} */ getAppConfig$1 = store.createSelector(getConfigListState, getAppConfig);
    var /** @type {?} */ getAuthenticationModuleConfig$1 = store.createSelector(getConfigListState, getAuthenticationModuleConfig);
    var /** @type {?} */ getUserModuleConfig$1 = store.createSelector(getConfigListState, getUserModuleConfig);
    var /** @type {?} */ getlayoutModuleConfig$1 = store.createSelector(getConfigListState, getlayoutModuleConfig);
    var /** @type {?} */ getConfigModuleConfig$1 = store.createSelector(getConfigListState, getConfigModuleConfig);
    var /** @type {?} */ getFormModuleConfig$1 = store.createSelector(getConfigListState, getFormModuleConfig);
    var /** @type {?} */ getSocketModuleConfig$1 = store.createSelector(getConfigListState, getSocketModuleConfig);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigurationService = (function () {
        /**
         * @param {?} configFile
         * @param {?} store
         */
        function ConfigurationService(configFile, store$$1) {
            var _this = this;
            this.store = store$$1;
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
            /**
             * @return {?}
             */
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        return ConfigurationService;
    }());
    ConfigurationService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigurationService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ];
    };
    /** @nocollapse */ ConfigurationService.ngInjectableDef = core.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(core.inject(MODULE_CONFIG_TOKEN), core.inject(store.Store)); }, token: ConfigurationService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigService = (function () {
        /**
         * @param {?} http
         * @param {?} store
         * @param {?} configurationService
         */
        function ConfigService(http$$1, store$$1, configurationService) {
            var _this = this;
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
            this.configsEndpoint = this.configurationService.config.env.production
                ? this.configurationService.config.prod_api_host
                : this.configurationService.config.dev_api_host;
            setTimeout(function () {
                _this.store.dispatch(new GetConfigAction());
            }, 999);
        }
        /**
         * @return {?}
         */
        ConfigService.prototype.getConfigs = function () {
            var _this = this;
            return (this.http
                .get(this.configsEndpoint + "/api/config")
                .take(1)
                .map(function (response) {
                if (_this.configurationService.config.env.production) {
                    var /** @type {?} */ dev_api_host = _this.configurationService.config.dev_api_host;
                    var /** @type {?} */ prod_api_host = _this.configurationService.config.prod_api_host;
                    return JSON.parse(JSON.stringify(response).replace(new RegExp(dev_api_host, "g"), prod_api_host)).Result;
                }
                else {
                    return response.Result;
                }
            })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            }));
        };
        /**
         * @param {?} name
         * @return {?}
         */
        ConfigService.prototype.getConfigByName = function (name) {
            return this.http.get(this.configsEndpoint + "/api/config/" + name).map(function (response) { return response; }).catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        /**
         * @param {?} body
         * @return {?}
         */
        ConfigService.prototype.editConfig = function (body) {
            var /** @type {?} */ model = new exports.EditConfigApiModel.Request(body);
            return this.http
                .put(this.configsEndpoint + "/api/config/" + model.Name, model.getRequestBody())
                .map(function (response) { return response; })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        /**
         * @return {?}
         */
        ConfigService.prototype.getLayoutConfigs = function () {
            return this.http
                .get(this.configsEndpoint + "/api/layout-config")
                .map(function (response) { return response; })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        return ConfigService;
    }());
    ConfigService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    ConfigService.ctorParameters = function () {
        return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: ConfigurationService }
        ];
    };
    /** @nocollapse */ ConfigService.ngInjectableDef = core.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(core.inject(http.HttpClient), core.inject(store.Store), core.inject(ConfigurationService)); }, token: ConfigService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigsComponent = (function () {
        /**
         * @param {?} store
         */
        function ConfigsComponent(store$$1) {
            this.store = store$$1;
            this.configs = this.store.select(getConfigs$1);
        }
        return ConfigsComponent;
    }());
    ConfigsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "configs",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n  <mat-card class=\"config-box\" *ngFor=\"let config of (configs | async)\" [fxFlex]=\"50\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  config.Name]\">\n          <mat-icon aria-label=\"edit config\">edit</mat-icon>\n        </a>\n        {{config.Name}}\n      </h3>\n  </mat-card>\n</div>",
                    styles: [":host{width:100%}.config-box{margin:15px}"]
                },] },
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigEditComponent = (function () {
        /**
         * @param {?} configService
         * @param {?} formBuilder
         * @param {?} route
         */
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
        ConfigEditComponent.prototype.addControl = function (formGroup, key, value) {
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
        ConfigEditComponent.prototype.ngOnInit = function () { };
        /**
         * @param {?} event
         * @return {?}
         */
        ConfigEditComponent.prototype.configChanged = function (event) {
            debugger;
            this.formGroup.controls["Config"].patchValue(event);
        };
        /**
         * @return {?}
         */
        ConfigEditComponent.prototype.edit = function () {
            debugger;
            if (!this.formGroup.valid)
                return;
            this.configService.editConfig(this.formGroup.value).subscribe(function (config) {
                debugger;
            });
        };
        return ConfigEditComponent;
    }());
    ConfigEditComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "config-config-edit",
                    template: "<div >\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"edit()\" fxLayout=\"column\">\n    <mat-card>\n      <mat-card-content>\n          <dynamic-config-component-selector (configChanged)=\"configChanged($event)\" [data]=\"partialConfigModel\"></dynamic-config-component-selector>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center center\">\n        <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\" (click)=\"edit\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n        <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/configs\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</div>"
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
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfigAppConfigComponent = (function () {
        /**
         * @param {?} injector
         */
        function ConfigAppConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({ AppTitle: new forms.FormControl("", [forms.Validators.required]) });
            this.configChanged = new core.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
            /**
             * @param {?} configFormGroup
             * @return {?}
             */
            set: function (configFormGroup) {
                var _this = this;
                this.formGroup.patchValue(configFormGroup.value);
                configFormGroup.valueChanges.subscribe(function (data) {
                    _this.formGroup.patchValue(data);
                });
            },
            enumerable: true,
            configurable: true
        });
        return ConfigAppConfigComponent;
    }());
    ConfigAppConfigComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "config-app-config",
                    template: "<div [formGroup]=\"formGroup\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\" formControlName=\"AppTitle\">\n    </mat-form-field>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () {
        return [
            { type: core.Injector }
        ];
    };
    ConfigAppConfigComponent.propDecorators = {
        configFormGroup: [{ type: core.Input }],
        configChanged: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserModuleConfigComponent = (function () {
        /**
         * @param {?} injector
         */
        function UserModuleConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({
                endpoints: new forms.FormGroup({
                    changePassword: new forms.FormControl("", [forms.Validators.required]),
                    editProfile: new forms.FormControl("", [forms.Validators.required]),
                    getUserInfo: new forms.FormControl("", [forms.Validators.required]),
                    profileInformation: new forms.FormControl("", [forms.Validators.required])
                }),
                forms: new forms.FormGroup({
                    profile_edit: new forms.FormControl("", [forms.Validators.required])
                }),
                dashboardLinks: new forms.FormArray([])
            });
            this.configChanged = new core.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(UserModuleConfigComponent.prototype, "configFormGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return this._configFormGroup;
            },
            /**
             * @param {?} configFormGroup
             * @return {?}
             */
            set: function (configFormGroup) {
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
        UserModuleConfigComponent.prototype.addMenu = function () {
            var /** @type {?} */ menuItem = new forms.FormGroup({
                route: new forms.FormControl("", [forms.Validators.required]),
                icon: new forms.FormControl("", [forms.Validators.required]),
                title: new forms.FormControl("", [forms.Validators.required])
            });
            ((this.formGroup.get("dashboardLinks"))).push(menuItem);
            ((this.configFormGroup.get("dashboardLinks"))).push(menuItem);
        };
        return UserModuleConfigComponent;
    }());
    UserModuleConfigComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "config-user-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.get('endpoints')\" fxLayout=\"column\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"change password\" formControlName=\"changePassword\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"edit profile\" formControlName=\"editProfile\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"get user info\" formControlName=\"getUserInfo\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"Profile Information Endpoint\" formControlName=\"profileInformation\">\n        </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.get('forms')\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"profile edit\" formControlName=\"profile_edit\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>\n\n\n<h2 fxFlex=\"100\">\n    Dashobard Links\n    <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n        <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n    </button>\n</h2>\n<div fxFlex=\"100\" *ngFor=\"let item of $any(formGroup.get('dashboardLinks')).controls\">\n    <div [formGroup]=\"item\">\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n        </mat-form-field>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    UserModuleConfigComponent.ctorParameters = function () {
        return [
            { type: core.Injector }
        ];
    };
    UserModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: core.Input }],
        configChanged: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LayoutModuleConfigComponent = (function () {
        /**
         * @param {?} injector
         */
        function LayoutModuleConfigComponent(injector) {
            this.injector = injector;
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
            this.configChanged = new core.EventEmitter();
            this.roleItems = ["Admin", "User"];
            this.sideNavModes = ["over", "push", "side"];
            this.layoutModes = ["with-margin", "without-margin", "default"];
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return this._configFormGroup;
            },
            /**
             * @param {?} configFormGroup
             * @return {?}
             */
            set: function (configFormGroup) {
                var _this = this;
                this._configFormGroup = configFormGroup;
                ((configFormGroup.controls["menuItems"])).controls.forEach(function (control) {
                    ((_this.formGroup.controls.menuItems)).push(new forms.FormGroup({
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
        LayoutModuleConfigComponent.prototype.addMenu = function () {
            var /** @type {?} */ menuItem = new forms.FormGroup({
                route: new forms.FormControl("", [forms.Validators.required]),
                icon: new forms.FormControl("", [forms.Validators.required]),
                roles: new forms.FormControl(),
                title: new forms.FormControl("", [forms.Validators.required])
            });
            ((this.formGroup.get("menuItems"))).push(menuItem);
            ((this.configFormGroup.get("menuItems"))).push(menuItem);
        };
        return LayoutModuleConfigComponent;
    }());
    LayoutModuleConfigComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n    <div fxFlex=\"100\" fxFlexLayout=\"row\">\n        <div [formGroup]=\"formGroup\">\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"layout mode\" formControlName=\"layoutMode\" >\n                    <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\n            <mat-slide-toggle  (change)=\"configChanged.emit(formGroup.value)\"  formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\n            <mat-form-field>\n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\" >\n                    <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n\n    <h2 fxFlex=\"100\">\n        Menu Items\n        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\n            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\n        </button>\n    </h2>\n    <div fxFlex=\"100\" *ngFor=\"let item of formGroup.controls.menuItems.controls\">\n        <div [formGroup]=\"item\">\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"route\" formControlName=\"route\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"icon\" formControlName=\"icon\">\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"title\" formControlName=\"title\">\n            </mat-form-field>\n            <mat-form-field> \n                <mat-select (change)=\"configChanged.emit(formGroup.value)\" placeholder=\"roles\" formControlName=\"roles\" multiple>\n                    <mat-option *ngFor=\"let role of roleItems\" [value]=\"role\">{{role}}</mat-option>\n                </mat-select> \n            </mat-form-field>\n        </div>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () {
        return [
            { type: core.Injector }
        ];
    };
    LayoutModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: core.Input }],
        configChanged: [{ type: core.Output }]
    };
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
        ConfigModuleContainerComponent.prototype.ngOnInit = function () { };
        return ConfigModuleContainerComponent;
    }());
    ConfigModuleContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "config-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    ConfigModuleContainerComponent.ctorParameters = function () { return []; };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AuthenticationModuleConfigComponent = (function () {
        /**
         * @param {?} injector
         */
        function AuthenticationModuleConfigComponent(injector) {
            this.injector = injector;
            this.formGroup = new forms.FormGroup({
                endpoints: new forms.FormGroup({
                    signIn: new forms.FormControl("", [forms.Validators.required]),
                    signOut: new forms.FormControl("", [forms.Validators.required]),
                    userInformation: new forms.FormControl("", [forms.Validators.required])
                }),
                forms: new forms.FormGroup({
                    signIn: new forms.FormControl("", [forms.Validators.required])
                })
            });
            this.configChanged = new core.EventEmitter();
            this.configFormGroup = this.injector.get("configFormGroup");
        }
        Object.defineProperty(AuthenticationModuleConfigComponent.prototype, "configFormGroup", {
            /**
             * @param {?} configFormGroup
             * @return {?}
             */
            set: function (configFormGroup) {
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
        AuthenticationModuleConfigComponent.prototype.setFormId = function (formId, formName) {
            debugger;
            this.formGroup.patchValue((_a = {}, _a[formName] = formId, _a));
            var _a;
        };
        return AuthenticationModuleConfigComponent;
    }());
    AuthenticationModuleConfigComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "config-authentication-module-config",
                    template: "<h2>Endpoints</h2>\n<div [formGroup]=\"formGroup.controls.endpoints\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign in\" formControlName=\"signIn\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"sign out\" formControlName=\"signOut\">\n    </mat-form-field>\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"user information\" formControlName=\"userInformation\">\n    </mat-form-field>\n</div>\n<h2>Forms</h2>\n<div [formGroup]=\"formGroup.controls.forms\" fxLayout=\"column\">\n    <mat-form-field>\n        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"SignIn Forms\" formControlName=\"signIn\">\n    </mat-form-field>\n            <!-- <ngs-form-selector (select)=\"setFormId($event,'signIn')\"></ngs-form-selector> -->\n</div>"
                },] },
    ];
    /** @nocollapse */
    AuthenticationModuleConfigComponent.ctorParameters = function () {
        return [
            { type: core.Injector }
        ];
    };
    AuthenticationModuleConfigComponent.propDecorators = {
        configFormGroup: [{ type: core.Input }],
        configChanged: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicConfigComponentSelectorComponent = (function () {
        /**
         * @param {?} resolver
         */
        function DynamicConfigComponentSelectorComponent(resolver) {
            this.resolver = resolver;
            this.typeMapToDiagram = {
                authentication_module_config: AuthenticationModuleConfigComponent,
                app_config: ConfigAppConfigComponent,
                user_module_config: UserModuleConfigComponent,
                layout_config: LayoutModuleConfigComponent
            };
            this.configChanged = new core.EventEmitter();
            this.currentComponent = null;
        }
        Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
            /**
             * @param {?} data
             * @return {?}
             */
            set: function (data) {
                var _this = this;
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
                var /** @type {?} */ resolvedInputs = core.ReflectiveInjector.resolve(inputProviders);
                var /** @type {?} */ injector = core.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
                var /** @type {?} */ component = factory.create(injector);
                ((component.instance)).configChanged.subscribe(function (data) {
                    _this.configChanged.emit(data);
                });
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
        DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
        return DynamicConfigComponentSelectorComponent;
    }());
    DynamicConfigComponentSelectorComponent.decorators = [
        { type: core.Component, args: [{
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
            { type: core.ComponentFactoryResolver }
        ];
    };
    DynamicConfigComponentSelectorComponent.propDecorators = {
        dynamicComponentContainer: [{ type: core.ViewChild, args: ["dynamicComponentContainer", { read: core.ViewContainerRef },] }],
        configChanged: [{ type: core.Output }],
        data: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LoadConfigEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} configService
         */
        function LoadConfigEffects(actions$, configService) {
            var _this = this;
            this.actions$ = actions$;
            this.configService = configService;
            this.getConfigs$ = this.actions$
                .ofType(ConfigActionTypes.GET_CONFIGS)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.configService.getConfigs(); }), operators.map(function (configs) { return new ConfigLoadedSucceedAction(configs); }), operators.catchError(function () { return Observable.Observable.of(new ConfigLoadedFailedAction()); }));
        }
        return LoadConfigEffects;
    }());
    LoadConfigEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    LoadConfigEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: ConfigService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], LoadConfigEffects.prototype, "getConfigs$", void 0);
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
    var /** @type {?} */ routes = [
        {
            path: 'configs',
            component: ConfigModuleContainerComponent,
            children: [
                {
                    path: '',
                    component: ConfigsComponent
                },
                {
                    path: 'edit/:name',
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
        NgsConfigModule.forRoot = function (config) {
            return {
                ngModule: RootNgsConfigModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
            };
        };
        return NgsConfigModule;
    }());
    NgsConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        http.HttpClientModule,
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
                        animations.BrowserAnimationsModule,
                        RoutingModule
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
    var RootNgsConfigModule = (function () {
        function RootNgsConfigModule() {
        }
        return RootNgsConfigModule;
    }());
    RootNgsConfigModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        NgsConfigModule,
                        store.StoreModule.forFeature("config", ConfigReducers),
                        effects.EffectsModule.forFeature([LoadConfigEffects])
                    ],
                    exports: [NgsConfigModule]
                },] },
    ];

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
    exports.getlayoutModuleConfig = getlayoutModuleConfig$1;
    exports.getConfigModuleConfig = getConfigModuleConfig$1;
    exports.getFormModuleConfig = getFormModuleConfig$1;
    exports.getSocketModuleConfig = getSocketModuleConfig$1;
    exports.NgsConfigModule = NgsConfigModule;
    exports.RootNgsConfigModule = RootNgsConfigModule;
    exports.ɵc = RoutingModule;
    exports.ɵj = ConfigAppConfigComponent;
    exports.ɵn = AuthenticationModuleConfigComponent;
    exports.ɵl = LayoutModuleConfigComponent;
    exports.ɵk = UserModuleConfigComponent;
    exports.ɵq = LoadConfigEffects;
    exports.ɵp = ConfigReducers;
    exports.ɵb = ConfigurationService;
    exports.ɵf = ConfigEditComponent;
    exports.ɵd = ConfigModuleContainerComponent;
    exports.ɵe = ConfigsComponent;
    exports.ɵi = ConfigEditComponent;
    exports.ɵm = ConfigModuleContainerComponent;
    exports.ɵg = ConfigsComponent;
    exports.ɵo = DynamicConfigComponentSelectorComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-config.umd.js.map

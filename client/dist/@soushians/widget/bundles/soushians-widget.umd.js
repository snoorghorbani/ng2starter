(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/shared'), require('@angular/router'), require('@ngrx/effects'), require('@angular/common'), require('@angular/forms'), require('@angular/material'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/widget', ['exports', '@angular/core', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/shared', '@angular/router', '@ngrx/effects', '@angular/common', '@angular/forms', '@angular/material', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.widget = {}),global.ng.core,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,global.ng.router,null,global.ng.common,global.ng.forms,global.ng.material,global.ng['flex-layout']));
}(this, (function (exports,core,rxjs,store,operators,http,shared,router,effects,common,forms,material,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetWidgetsApiModel;
    (function (GetWidgetsApiModel) {
        var Request = (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = {};
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
                    return {};
                };
            return Request;
        }());
        GetWidgetsApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetsApiModel.Response = Response;
    })(GetWidgetsApiModel || (GetWidgetsApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetWidgetsStartAction = (function () {
        function GetWidgetsStartAction() {
            this.type = "[GET_WIDGETS][API][GetWidgets] start" /* START */;
        }
        return GetWidgetsStartAction;
    }());
    var GetWidgetsSucceedAction = (function () {
        function GetWidgetsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */;
        }
        return GetWidgetsSucceedAction;
    }());
    var GetWidgetsFailedAction = (function () {
        function GetWidgetsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_WIDGETS][API][GetWidgets] failed" /* FAILED */;
        }
        return GetWidgetsFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetWidgetApiModel;
    (function (GetWidgetApiModel) {
        var Request = (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = {};
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
                    return {};
                };
            return Request;
        }());
        GetWidgetApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        GetWidgetApiModel.Response = Response;
    })(GetWidgetApiModel || (GetWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetWidgetStartAction = (function () {
        function GetWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] start" /* START */;
        }
        return GetWidgetStartAction;
    }());
    var GetWidgetSucceedAction = (function () {
        function GetWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] succeed" /* SUCCEED */;
        }
        return GetWidgetSucceedAction;
    }());
    var GetWidgetFailedAction = (function () {
        function GetWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[WIDGET][API][GetWidget] failed" /* FAILED */;
        }
        return GetWidgetFailedAction;
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
     * @template T
     */
    var /**
     * @template T
     */ WidgetModel = (function () {
        function WidgetModel(_a) {
            var _b = _a === void 0 ? {} : _a, _id = _b._id, name = _b.name, type = _b.type, Config = _b.Config;
            this._id = _id;
            this.name = name;
            this.type = type;
            this.Config = Config;
        }
        return WidgetModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertWidgetApiModel;
    (function (UpsertWidgetApiModel) {
        var Request = (function () {
            function Request(widget) {
                if (widget === void 0) {
                    widget = {};
                }
                debugger;
                this.widget = new WidgetModel(widget);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return this.widget;
                };
            return Request;
        }());
        UpsertWidgetApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertWidgetApiModel.Response = Response;
    })(UpsertWidgetApiModel || (UpsertWidgetApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertWidgetStartAction = (function () {
        function UpsertWidgetStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] start" /* START */;
        }
        return UpsertWidgetStartAction;
    }());
    var UpsertWidgetSucceedAction = (function () {
        function UpsertWidgetSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] succeed" /* SUCCEED */;
        }
        return UpsertWidgetSucceedAction;
    }());
    var UpsertWidgetFailedAction = (function () {
        function UpsertWidgetFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_WIDGET][API][UpsertWidget] failed" /* FAILED */;
        }
        return UpsertWidgetFailedAction;
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
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        development_uri: "http://localhost:3000",
        production_uri: "",
        env: {
            production: false
        },
        endpoints: {
            upsert: "http://localhost:3000/api/uiwidget",
            find: "http://localhost:3000/api/uiwidget",
            get: "http://localhost:3000/api/uiwidget/${model._id}"
        },
        types: {}
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("WidgetModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetConfigurationService = (function () {
        function WidgetConfigurationService(configFile, store$$1) {
            this.store = store$$1;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getWidgetModuleConfig).subscribe((widgetConfig) => {
            // 	if (!widgetConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, widgetConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(WidgetConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        WidgetConfigurationService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: store.Store }
            ];
        };
        return WidgetConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetService = (function () {
        function WidgetService(http$$1, store$$1, configurationService) {
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
        }
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        WidgetService.prototype.get = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.switchMap(function (config) { return _this.http.get(shared.stringTemplate(config.endpoints.get, { _id: _id })); }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @return {?}
         */
        WidgetService.prototype.getWidgets = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.switchMap(function (config) { return _this.http.get(config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
        WidgetService.prototype.upsert = /**
         * @template T
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                var /** @type {?} */ model = new UpsertWidgetApiModel.Request(widget);
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) { return _this.http.post(config.endpoints.upsert, model.getRequestBody()); }), operators.map(function (response) { return response.Result; }));
            };
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
        WidgetService.prototype.selectById = /**
         * @template T
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                var /** @type {?} */ subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.widgets.db.data; })
                    .pipe(operators.filter(function (widgets) { return widgets != null; }), operators.map(function (widgets) { return widgets.find(function (widget) { return widget._id == _id; }); }), operators.tap(function (widget) {
                    if (widget == null) {
                        _this.store.dispatch(new GetWidgetStartAction(_id));
                    }
                }))
                    .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
                return subject.asObservable();
            };
        WidgetService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: store.Store },
                { type: WidgetConfigurationService }
            ];
        };
        return WidgetService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicWidgetViewComponent = (function () {
        function DynamicWidgetViewComponent(store$$1, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewComponent.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.widget$.pipe(operators.filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(widget);
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.widget$ = this.service.selectById(id);
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewComponent.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                if (!this.mapTypeToComponent[widget.type]) {
                    debugger;
                    var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
                this.component = this.container.createComponent(component);
                this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
            };
        DynamicWidgetViewComponent.decorators = [
            { type: core.Component, args: [{
                        template: ""
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetViewComponent.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicWidgetViewComponent.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetSelectorComponent = (function () {
        function WidgetSelectorComponent(store$$1) {
            this.store = store$$1;
            this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
        }
        Object.defineProperty(WidgetSelectorComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.oid != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WidgetSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return {
                    oid: this.selectedWidgetId
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        WidgetSelectorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new GetWidgetsStartAction());
            };
        WidgetSelectorComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<mat-select placeholder=\"Grid Type\" [(ngModel)]=\"selectedWidgetId\" name=\"selectedWidgetId\">\n  <mat-option *ngFor=\"let item of (widgets$ | async)\" [value]=\"item._id\">\n    {{item.type}} : <b>{{item.name}}</b>\n  </mat-option>\n</mat-select>"
                    },] },
        ];
        /** @nocollapse */
        WidgetSelectorComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return WidgetSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RootComponent = (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "widget-root",
                        template: "<router-outlet></router-outlet>"
                    },] },
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetsManagementComponent = (function () {
        function WidgetsManagementComponent(store$$1) {
            this.store = store$$1;
            this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
        }
        /**
         * @return {?}
         */
        WidgetsManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new GetWidgetsStartAction());
            };
        WidgetsManagementComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (widgets$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['../upsert' ,  item.type,  item._id]\">\n          <mat-icon aria-label=\"edit widget\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        WidgetsManagementComponent.ctorParameters = function () {
            return [
                { type: store.Store }
            ];
        };
        return WidgetsManagementComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertComponent = (function () {
        function UpsertComponent() {
        }
        UpsertComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"50\">\n        <ng-container ngsDynamicWidgetConfig></ng-container>\n    </div>\n</div>"
                    },] },
        ];
        return UpsertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: "widget",
            component: RootComponent,
            children: [
                {
                    path: "management",
                    component: WidgetsManagementComponent
                },
                {
                    path: "upsert/:type",
                    component: UpsertComponent
                },
                {
                    path: "upsert/:type/:_id",
                    component: UpsertComponent
                }
            ]
        }
    ];
    var /** @type {?} */ WidgetRoutingModule = router.RouterModule.forChild(routes);

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
    var GetWidgetApiEffects = (function () {
        function GetWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[WIDGET][API][GetWidget] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetWidgetSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetWidgetFailedAction(err)); }));
        }
        GetWidgetApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GetWidgetApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetApiEffects.prototype, "start$", void 0);
        return GetWidgetApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertWidgetApiEffects = (function () {
        function UpsertWidgetApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[UPSERT_WIDGET][API][UpsertWidget] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertWidgetSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertWidgetFailedAction(err)); }));
        }
        UpsertWidgetApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        UpsertWidgetApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertWidgetApiEffects.prototype, "start$", void 0);
        return UpsertWidgetApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetWidgetsApiEffects = (function () {
        function GetWidgetsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[GET_WIDGETS][API][GetWidgets] start" /* START */)
                .pipe(operators.switchMap(function () {
                return _this.service
                    .getWidgets()
                    .pipe(operators.map(function (res) { return new GetWidgetsSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetWidgetsFailedAction(err)); }));
            }));
        }
        GetWidgetsApiEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        GetWidgetsApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: WidgetService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetWidgetsApiEffects.prototype, "start$", void 0);
        return GetWidgetsApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var WidgetsActionTypes = {
        UPSERT: "[WIDGET][DB] UPSERT",
        DELETE: "[WIDGET][DB] DELETE",
    };
    var UpsertWidgetAction = (function () {
        function UpsertWidgetAction(payload) {
            this.payload = payload;
            this.type = WidgetsActionTypes.UPSERT;
        }
        return UpsertWidgetAction;
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
        var /** @type {?} */ _data;
        switch (action.type) {
            case WidgetsActionTypes.UPSERT:
                _data = state.data.concat();
                var /** @type {?} */ newWidgets = action.payload;
                newWidgets.forEach(function (newWidget) {
                    var /** @type {?} */ existedWidgetIndex = _data.findIndex(function (w) { return w._id == newWidget._id; });
                    if (existedWidgetIndex > -1) {
                        _data.splice(existedWidgetIndex, 1, newWidget);
                    }
                    else {
                        _data.push(newWidget);
                    }
                });
                return __assign({}, state, { data: _data });
            case WidgetsActionTypes.DELETE:
                _data = Object.assign({}, state.data);
                var /** @type {?} */ widgetIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
                _data.splice(widgetIndex, 1);
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ WidgetReducer = {
        db: Reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var WidgetDbEffects = (function () {
        function WidgetDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$
                .ofType("[WIDGET][API][GetWidget] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (widget) { return new UpsertWidgetAction([widget]); }));
            this.UpsertMany$ = this.actions$
                .ofType("[GET_WIDGETS][API][GetWidgets] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (widgets) { return new UpsertWidgetAction(widgets); }));
        }
        WidgetDbEffects.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        WidgetDbEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], WidgetDbEffects.prototype, "UpsertMany$", void 0);
        return WidgetDbEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicWidgetConfigDirective = (function () {
        function DynamicWidgetConfigDirective(store$$1, route, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._selectWidget();
                this.widget$.pipe(operators.filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(widget);
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._selectWidget = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.widget$ = this.route.params.pipe(operators.pluck("_id"), operators.filter(function (id) { return id != null; }), operators.switchMap(function (id) { return _this.service.selectById(id); }));
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                if (!this.mapTypeToComponent[widget.type]) {
                    var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].upsert);
                this.component = this.container.createComponent(component);
                this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
            };
        DynamicWidgetConfigDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetConfig]"
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetConfigDirective.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: router.ActivatedRoute },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        return DynamicWidgetConfigDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicWidgetViewDirective = (function () {
        function DynamicWidgetViewDirective(store$$1, route, service, configurationService, resolver, container) {
            this.store = store$$1;
            this.route = route;
            this.service = service;
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this._fill_component_map();
        }
        Object.defineProperty(DynamicWidgetViewDirective.prototype, "oid", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                this._selectWidget(id);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.widget$.pipe(operators.filter(function (widget) { return widget != undefined; })).subscribe(function (widget) {
                    _this._resolve_correct_component_base_on_widget_type(widget);
                });
            };
        /**
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._fill_component_map = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.configurationService.config$.pipe(operators.map(function (config) { return config.types; }), operators.startWith({})).subscribe(function (types) {
                    debugger;
                    _this.mapTypeToComponent = types;
                });
            };
        /**
         * @param {?} id
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._selectWidget = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.widget$ = this.service.selectById(id);
            };
        /**
         * @param {?} widget
         * @return {?}
         */
        DynamicWidgetViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} widget
         * @return {?}
         */
            function (widget) {
                var _this = this;
                if (!this.mapTypeToComponent[widget.type]) {
                    var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + widget.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[widget.type].view);
                this.component = this.container.createComponent(component);
                this.widget$.subscribe(function (w) { return (_this.component.instance.widget = w); });
            };
        DynamicWidgetViewDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[ngsDynamicWidgetView]"
                    },] },
        ];
        /** @nocollapse */
        DynamicWidgetViewDirective.ctorParameters = function () {
            return [
                { type: store.Store },
                { type: router.ActivatedRoute },
                { type: WidgetService },
                { type: WidgetConfigurationService },
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicWidgetViewDirective.propDecorators = {
            oid: [{ type: core.Input }]
        };
        return DynamicWidgetViewDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsWidgetModule = (function () {
        function NgsWidgetModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsWidgetModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: NgsWidgetRootModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, WidgetConfigurationService, WidgetService]
                };
            };
        NgsWidgetModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatRadioModule,
                            flexLayout.FlexLayoutModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule
                        ],
                        declarations: [
                            RootComponent,
                            WidgetsManagementComponent,
                            UpsertComponent,
                            DynamicWidgetConfigDirective,
                            DynamicWidgetViewDirective,
                            WidgetSelectorComponent,
                            DynamicWidgetViewComponent
                        ],
                        entryComponents: [WidgetSelectorComponent, DynamicWidgetViewComponent],
                        exports: [DynamicWidgetViewDirective, WidgetSelectorComponent, DynamicWidgetViewComponent]
                    },] },
        ];
        return NgsWidgetModule;
    }());
    var NgsWidgetRootModule = (function () {
        function NgsWidgetRootModule() {
        }
        NgsWidgetRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            NgsWidgetModule,
                            WidgetRoutingModule,
                            store.StoreModule.forFeature("widgets", WidgetReducer),
                            effects.EffectsModule.forFeature([WidgetDbEffects, GetWidgetApiEffects, GetWidgetsApiEffects, UpsertWidgetApiEffects])
                        ],
                        exports: [NgsWidgetModule]
                    },] },
        ];
        return NgsWidgetRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IWidgetView = (function () {
        function IWidgetView() {
        }
        return IWidgetView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     */
    var /**
     * @template T
     */ IWidgetUpsert = (function () {
        function IWidgetUpsert() {
        }
        return IWidgetUpsert;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.UpsertWidgetStartAction = UpsertWidgetStartAction;
    exports.DynamicWidgetViewComponent = DynamicWidgetViewComponent;
    exports.WidgetSelectorComponent = WidgetSelectorComponent;
    exports.NgsWidgetModule = NgsWidgetModule;
    exports.WidgetModel = WidgetModel;
    exports.IWidgetView = IWidgetView;
    exports.IWidgetUpsert = IWidgetUpsert;
    exports.ɵh = WidgetsManagementComponent;
    exports.ɵg = RootComponent;
    exports.ɵn = WidgetDbEffects;
    exports.ɵm = Reducer;
    exports.ɵo = GetWidgetApiEffects;
    exports.ɵq = GetWidgetsApiEffects;
    exports.ɵs = UpsertWidgetApiEffects;
    exports.ɵf = WidgetConfigurationService;
    exports.ɵe = WidgetService;
    exports.ɵj = DynamicWidgetConfigDirective;
    exports.ɵi = UpsertComponent;
    exports.ɵk = DynamicWidgetViewDirective;
    exports.ɵl = WidgetRoutingModule;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵa = NgsWidgetRootModule;
    exports.ɵc = WidgetReducer;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvd2lkZ2V0LnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXNlbGVjdG9yL3dpZGdldC1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3Jvb3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC91cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXJvdXRpbmcubW9kdWxlLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0Lm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQtdmlldy5pbnRlcmZhY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXVwc2VydC5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRXaWRnZXRzQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0c0FjdGlvbnMgPSBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfCBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0QWN0aW9ucyA9IEdldFdpZGdldFN0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldE1vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdENvbmZpZzogVDtcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgdHlwZSwgQ29uZmlnIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBDb25maWc/OiBUIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuQ29uZmlnID0gQ29uZmlnO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFdpZGdldEFjdGlvbnMgPSBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiB8IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IFdpZGdldE1vZHVsZUNvbmZpZyA9IHtcclxuXHRkZXZlbG9wbWVudF91cmk6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcblx0cHJvZHVjdGlvbl91cmk6IFwiXCIsXHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZVxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0ZmluZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Vpd2lkZ2V0XCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91aXdpZGdldC8ke21vZGVsLl9pZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPFdpZGdldE1vZHVsZUNvbmZpZz4oXCJXaWRnZXRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2R1bGVDb25maWcsIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuLi93aWRnZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBXaWRnZXRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0V2lkZ2V0TW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKHdpZGdldENvbmZpZykgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIXdpZGdldENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHdpZGdldENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaU1vZGVsLCBHZXRXaWRnZXRTdGFydEFjdGlvbiwgVXBzZXJ0V2lkZ2V0QXBpTW9kZWwgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbi8vIGltcG9ydCB7IGdldFdpZGdldE1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IFdpZGdldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB9IGZyb20gXCIuLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0U2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0Z2V0PFQ+KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxUPj4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSkpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRXaWRnZXRzKCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRXaWRnZXRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydDxUPih3aWRnZXQ6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXF1ZXN0KHdpZGdldCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLnVwc2VydCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkPFQ+KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxUPj4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8V2lkZ2V0TW9kZWw8VD4+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigod2lkZ2V0cykgPT4gd2lkZ2V0cyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKHdpZGdldHMpID0+IHdpZGdldHMuZmluZCgod2lkZ2V0KSA9PiB3aWRnZXQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcCgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAod2lkZ2V0ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0U3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKChGb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5fZmlsbF9jb21wb25lbnRfbWFwKCk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy53aWRnZXQkLnBpcGUoZmlsdGVyKCh3aWRnZXQpID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUoKHdpZGdldCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKChjb25maWcpID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSgodHlwZXMpID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udmlldyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJV2lkZ2V0Vmlld0lucHV0SW50ZXJmYWNlIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQtdmlldy1pbnB1dC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyaWQgVHlwZVwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRXaWRnZXRJZFwiIG5hbWU9XCJzZWxlY3RlZFdpZGdldElkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0udHlwZX19IDogPGI+e3tpdGVtLm5hbWV9fTwvYj5cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PElXaWRnZXRWaWV3SW5wdXRJbnRlcmZhY2U+IHtcclxuXHR3aWRnZXRzJDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+O1xyXG5cdHNlbGVjdGVkV2lkZ2V0SWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcub2lkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG9pZDogdGhpcy5zZWxlY3RlZFdpZGdldElkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LXJvb3RcIixcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiA+XHJcbiAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkcy1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKHdpZGdldHMkIHwgYXN5bmMpXCIgZnhGbGV4PVwiNTFcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnLi4vdXBzZXJ0JyAsICBpdGVtLnR5cGUsICBpdGVtLl9pZF1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCB3aWRnZXRcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR3aWRnZXRzJDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS53aWRnZXRzLmRiLmRhdGEpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBuZ3NEeW5hbWljV2lkZ2V0Q29uZmlnPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFVwc2VydENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL21hbmdlbWVudC93aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vdXBzZXJ0L3Vwc2VydC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwid2lkZ2V0XCIsXHJcblx0XHRjb21wb25lbnQ6IFJvb3RDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJtYW5hZ2VtZW50XCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnQvOnR5cGVcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ1cHNlcnQvOnR5cGUvOl9pZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0Um91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0QWN0aW9ucyxcclxuXHRHZXRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdEdldFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydFdpZGdldEFjdGlvbnMsXHJcblx0VXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydFdpZGdldEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0V2lkZ2V0QWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfV0lER0VUX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydFdpZGdldEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0V2lkZ2V0c0FjdGlvbnMsXHJcblx0R2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0c0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC13aWRnZXRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRXaWRnZXRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldFdpZGdldHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gV2lkZ2V0c0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltXSURHRVRdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltXSURHRVRdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55PltdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBXaWRnZXRzQWN0aW9ucyA9IFVwc2VydFdpZGdldEFjdGlvbiB8IERlbGV0ZVdpZGdldEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzQWN0aW9ucywgV2lkZ2V0c0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogV2lkZ2V0c0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld1dpZGdldHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld1dpZGdldHMuZm9yRWFjaChuZXdXaWRnZXQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRXaWRnZXRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IG5ld1dpZGdldC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkV2lkZ2V0SW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRXaWRnZXRJbmRleCwgMSwgbmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3Qgd2lkZ2V0SW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZSh3aWRnZXRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdpZGdldHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L3dpZGdldHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2lkZ2V0UmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0d2lkZ2V0czogV2lkZ2V0U3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLCBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0V2lkZ2V0QWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PikgPT4gbmV3IFVwc2VydFdpZGdldEFjdGlvbihbIHdpZGdldCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0czogV2lkZ2V0TW9kZWw8YW55PltdKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKHdpZGdldHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbXBvbmVudFJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBEaXJlY3RpdmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRDb25maWddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RXaWRnZXQoKTtcclxuXHRcdHRoaXMud2lkZ2V0JC5waXBlKGZpbHRlcih3aWRnZXQgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSh3aWRnZXQgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcudHlwZXMpLCBzdGFydFdpdGgoe30pKS5zdWJzY3JpYmUodHlwZXMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KCkge1xyXG5cdFx0dGhpcy53aWRnZXQkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJfaWRcIiksXHJcblx0XHRcdGZpbHRlcigoaWQ6IHN0cmluZykgPT4gaWQgIT0gbnVsbCksXHJcblx0XHRcdHN3aXRjaE1hcChpZCA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3dpZGdldC50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0udXBzZXJ0KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSU1vZHVsZUNvbmZpZ01hcFR5cGVzIH0gZnJvbSBcIi4uL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNXaWRnZXRWaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgb2lkKGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldChpZCk7XHJcblx0fVxyXG5cdHdpZGdldCQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55Pj47XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IElNb2R1bGVDb25maWdNYXBUeXBlcztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUod2lkZ2V0ID0+IHtcclxuXHRcdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2ZpbGxfY29tcG9uZW50X21hcCgpIHtcclxuXHRcdHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKG1hcChjb25maWcgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKHR5cGVzID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdHlwZXM7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X3NlbGVjdFdpZGdldChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZDxhbnk+KGlkKTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKHcgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94LFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dpZGdldC5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7IFdpZGdldFJlZHVjZXIgfSBmcm9tIFwiLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi93aWRnZXQuY29uZmlnXCI7XHJcbmltcG9ydCB7IFdpZGdldFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi93aWRnZXQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0QXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXRzL2dldC13aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0UmVkdWNlciB9IGZyb20gXCIuL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldERiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Q29uZmlnRGlyZWN0aXZlIH0gZnJvbSBcIi4vdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUgfSBmcm9tIFwiLi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vd2lkZ2V0LXNlbGVjdG9yL3dpZGdldC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFJvb3RDb21wb25lbnQsXHJcblx0XHRXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCxcclxuXHRcdFVwc2VydENvbXBvbmVudCxcclxuXHRcdER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSxcclxuXHRcdFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldFZpZXdDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLCBXaWRnZXRTZWxlY3RvckNvbXBvbmVudCwgRHluYW1pY1dpZGdldFZpZXdDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0TW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBXaWRnZXRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NXaWRnZXRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBXaWRnZXRTZXJ2aWNlIF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc1dpZGdldE1vZHVsZSxcclxuXHRcdFdpZGdldFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwid2lkZ2V0c1wiLCBXaWRnZXRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFdpZGdldERiRWZmZWN0cywgR2V0V2lkZ2V0QXBpRWZmZWN0cywgR2V0V2lkZ2V0c0FwaUVmZmVjdHMsIFVwc2VydFdpZGdldEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzV2lkZ2V0TW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc1dpZGdldFJvb3RNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJV2lkZ2V0VmlldzxUPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxUPjtcclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElXaWRnZXRVcHNlcnQ8VD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8VD47XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwic3RvcmUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJodHRwIiwiZmlsdGVyIiwidGFrZSIsInN3aXRjaE1hcCIsInN0cmluZ1RlbXBsYXRlIiwibWFwIiwidGFwIiwiSHR0cENsaWVudCIsInN0YXJ0V2l0aCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIlJvdXRlck1vZHVsZSIsImNhdGNoRXJyb3IiLCJvZiIsIkFjdGlvbnMiLCJFZmZlY3QiLCJmcm9tUm9vdC5SZWR1Y2VyIiwicGx1Y2siLCJEaXJlY3RpdmUiLCJBY3RpdmF0ZWRSb3V0ZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxRQUFpQixrQkFBa0I7SUFBbkMsV0FBaUIsa0JBQWtCO1FBQ2xDLElBQUE7WUFDQyxpQkFBWSxTQUFjO2dCQUFkLDBCQUFBO29CQUFBLGNBQWM7O2dCQUExQixpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3BFOzs7O1lBRUQsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPLEVBQUUsQ0FBQztpQkFDVjswQkFWSDtZQVdFLENBQUE7UUFSWSwwQkFBTztRQVVwQixJQUFBO1lBRUM7YUFBZ0I7MkJBZmxCO1lBZ0JFLENBQUE7UUFIWSwyQkFBUTtPQVhMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFlbEM7Ozs7OztJQ05ELElBQUE7Ozs7b0NBWEE7UUFhQyxDQUFBO0FBRkQsSUFHQSxJQUFBO1FBRUMsaUNBQW1CLE9BQTJCO1lBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9COztTQUFJO3NDQWhCbkQ7UUFpQkMsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLGdDQUFtQixPQUFZO1lBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzs7U0FBSTtxQ0FwQnBDO1FBcUJDLENBQUE7Ozs7Ozs7Ozs7O0FDbkJELFFBQWlCLGlCQUFpQjtJQUFsQyxXQUFpQixpQkFBaUI7UUFDakMsSUFBQTtZQUVD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
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
        env: {
            production: false,
            frontend_server: "frontend_server/did/not/set"
        },
        endpoints: {
            upsert: "/api/uiwidget",
            find: "/api/uiwidget",
            get: "/api/uiwidget/${model._id}"
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ''; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }));
                }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @return {?}
         */
        WidgetService.prototype.getWidgets = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ''; }), operators.switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ''; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody());
                }), operators.map(function (response) { return response.Result; }));
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
                    .subscribe(function (widget) { return subject.next(widget); });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXdpZGdldC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0L2dldC13aWRnZXQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0Lm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC13aWRnZXQvdXBzZXJ0LXdpZGdldC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtd2lkZ2V0L3Vwc2VydC13aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3dpZGdldC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvc2VydmljZXMvd2lkZ2V0LnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXNlbGVjdG9yL3dpZGdldC1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3Jvb3QuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Vwc2VydC91cHNlcnQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0LXJvdXRpbmcubW9kdWxlLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldC9nZXQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9yb290L3dpZGdldHMucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi93aWRnZXQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL3Jvb3Qvd2lkZ2V0cy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvdXBzZXJ0L2R5bmFtaWMtd2lkZ2V0LWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi92aWV3L2R5bmFtaWMtd2lkZ2V0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL3dpZGdldC9saWIvd2lkZ2V0Lm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy93aWRnZXQvbGliL21vZGVscy93aWRnZXQtdmlldy5pbnRlcmZhY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0L2xpYi9tb2RlbHMvd2lkZ2V0LXVwc2VydC5pbnRlcmZhY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRXaWRnZXRzQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtd2lkZ2V0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX1dJREdFVFNdW0FQSV1bR2V0V2lkZ2V0c10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9XSURHRVRTXVtBUEldW0dldFdpZGdldHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT5bXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0c0FjdGlvbnMgPSBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfCBHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0V2lkZ2V0QXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbV0lER0VUXVtBUEldW0dldFdpZGdldF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1dJREdFVF1bQVBJXVtHZXRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldFdpZGdldFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfV0lER0VUX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0V2lkZ2V0QWN0aW9ucyA9IEdldFdpZGdldFN0YXJ0QWN0aW9uIHwgR2V0V2lkZ2V0U3VjY2VlZEFjdGlvbiB8IEdldFdpZGdldEZhaWxlZEFjdGlvbjtcclxuIiwiZXhwb3J0IGNsYXNzIFdpZGdldE1vZGVsPFQ+IHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdENvbmZpZzogVDtcclxuXHRjb25zdHJ1Y3Rvcih7IF9pZCwgbmFtZSwgdHlwZSwgQ29uZmlnIH06IHsgX2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBDb25maWc/OiBUIH0gPSB7fSkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuQ29uZmlnID0gQ29uZmlnO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydFdpZGdldEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0XHRjb25zdHJ1Y3Rvcih3aWRnZXQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy53aWRnZXQgPSBuZXcgV2lkZ2V0TW9kZWwod2lkZ2V0KTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMud2lkZ2V0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC13aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9XSURHRVRdW0FQSV1bVXBzZXJ0V2lkZ2V0XSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX1dJREdFVF1bQVBJXVtVcHNlcnRXaWRnZXRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2lkZ2V0TW9kZWw8YW55Pikge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydFdpZGdldEFjdGlvbnMgPSBVcHNlcnRXaWRnZXRTdGFydEFjdGlvbiB8IFVwc2VydFdpZGdldFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRXaWRnZXRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IElNb2R1bGVDb25maWdNYXBUeXBlcyB9IGZyb20gXCIuL21vZGVscy9tb2R1bGUtY29uZmlnLW1hcC10eXBlcy5pbnRlcmZjZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiBJTW9kdWxlQ29uZmlnTWFwVHlwZXM7XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogV2lkZ2V0TW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmRfc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvdWl3aWRnZXRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS91aXdpZGdldFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvdWl3aWRnZXQvJHttb2RlbC5faWR9XCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRNb2R1bGVDb25maWc+KFwiV2lkZ2V0TW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vd2lkZ2V0LmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogV2lkZ2V0TW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldFdpZGdldE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKCh3aWRnZXRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCF3aWRnZXRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB3aWRnZXRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tICcuLi93aWRnZXQucmVkdWNlcic7XHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi93aWRnZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsJztcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tICdAc291c2hpYW5zL3NoYXJlZCc7XHJcbmltcG9ydCB7IEdldFdpZGdldHNBcGlNb2RlbCwgR2V0V2lkZ2V0U3RhcnRBY3Rpb24sIFVwc2VydFdpZGdldEFwaU1vZGVsIH0gZnJvbSAnLi9hcGknO1xyXG5cclxuLy8gaW1wb3J0IHsgZ2V0V2lkZ2V0TW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3dpZGdldC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uIH0gZnJvbSBcIi4uL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gJycpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRXaWRnZXRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldFdpZGdldHMoKTogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSAnJyksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldFdpZGdldHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0PFQ+KHdpZGdldDogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8VD4+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydFdpZGdldEFwaU1vZGVsLlJlcXVlc3Qod2lkZ2V0KTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9ICcnKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0V2lkZ2V0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQ8VD4oX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPFQ+PiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxXaWRnZXRNb2RlbDxUPj4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh3aWRnZXRzKSA9PiB3aWRnZXRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgod2lkZ2V0cykgPT4gd2lkZ2V0cy5maW5kKCh3aWRnZXQpID0+IHdpZGdldC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKCh3aWRnZXQpID0+IHtcclxuXHRcdFx0XHRcdGlmICh3aWRnZXQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKHdpZGdldCkgPT4gc3ViamVjdC5uZXh0KHdpZGdldCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IFwiXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0V2lkZ2V0KGlkKTtcclxuXHR9XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBXaWRnZXRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLl9maWxsX2NvbXBvbmVudF9tYXAoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQucGlwZShmaWx0ZXIoKHdpZGdldCkgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSgod2lkZ2V0KSA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoKGNvbmZpZykgPT4gY29uZmlnLnR5cGVzKSwgc3RhcnRXaXRoKHt9KSkuc3Vic2NyaWJlKCh0eXBlcykgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS52aWV3KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHR0aGlzLndpZGdldCQuc3Vic2NyaWJlKCh3KSA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IElXaWRnZXRWaWV3SW5wdXRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC12aWV3LWlucHV0LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi93aWRnZXQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFdpZGdldElkXCIgbmFtZT1cInNlbGVjdGVkV2lkZ2V0SWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS50eXBlfX0gOiA8Yj57e2l0ZW0ubmFtZX19PC9iPlxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8SVdpZGdldFZpZXdJbnB1dEludGVyZmFjZT4ge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0c2VsZWN0ZWRXaWRnZXRJZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5vaWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0b2lkOiB0aGlzLnNlbGVjdGVkV2lkZ2V0SWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLndpZGdldHMkID0gdGhpcy5zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdldFdpZGdldHNTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiID5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIiBmeEZsZXg9XCI1MVwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi91cHNlcnQnICwgIGl0ZW0udHlwZSwgIGl0ZW0uX2lkXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IHdpZGdldFwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICAgIDwvaDM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIG5nc0R5bmFtaWNXaWRnZXRDb25maWc+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJ3aWRnZXRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm1hbmFnZW1lbnRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZVwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogVXBzZXJ0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInVwc2VydC86dHlwZS86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfV0lER0VUX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRBY3Rpb25zLFxyXG5cdEdldFdpZGdldFN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0V2lkZ2V0RmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRXaWRnZXRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldFdpZGdldEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRXaWRnZXRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRXaWRnZXRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3dpZGdldC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX1dJREdFVF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0V2lkZ2V0QWN0aW9ucyxcclxuXHRVcHNlcnRXaWRnZXRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydFdpZGdldEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC13aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRXaWRnZXRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0V2lkZ2V0U3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0V2lkZ2V0RmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0U2VydmljZSB9IGZyb20gXCIuLi8uLi93aWRnZXQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRXaWRnZXRzQWN0aW9ucyxcclxuXHRHZXRXaWRnZXRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRXaWRnZXRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LXdpZGdldHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0V2lkZ2V0c0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0V2lkZ2V0c0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IFdpZGdldFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX1dJREdFVFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldFdpZGdldHMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0V2lkZ2V0c1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldFdpZGdldHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBXaWRnZXRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW1dJREdFVF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW1dJREdFVF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRXaWRnZXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBXaWRnZXRNb2RlbDxhbnk+W10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZVdpZGdldEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFdpZGdldE1vZGVsPGFueT4pIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFdpZGdldHNBY3Rpb25zID0gVXBzZXJ0V2lkZ2V0QWN0aW9uIHwgRGVsZXRlV2lkZ2V0QWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IFdpZGdldHNBY3Rpb25zLCBXaWRnZXRzQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogV2lkZ2V0TW9kZWw8YW55PltdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBXaWRnZXRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3QgbmV3V2lkZ2V0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0bmV3V2lkZ2V0cy5mb3JFYWNoKG5ld1dpZGdldCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZFdpZGdldEluZGV4ID0gX2RhdGEuZmluZEluZGV4KHcgPT4gdy5faWQgPT0gbmV3V2lkZ2V0Ll9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRXaWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZFdpZGdldEluZGV4LCAxLCBuZXdXaWRnZXQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIFdpZGdldHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCB3aWRnZXRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KHcgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKHdpZGdldEluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuL3Jvb3Qvd2lkZ2V0cy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldFN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXaWRnZXRSZWR1Y2VyID0ge1xyXG5cdGRiOiBmcm9tUm9vdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHR3aWRnZXRzOiBXaWRnZXRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1dJREdFVF9BQ1RJT05fVFlQRVMsIEdFVF9XSURHRVRTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRXaWRnZXRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9XSURHRVRfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgod2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+KSA9PiBuZXcgVXBzZXJ0V2lkZ2V0QWN0aW9uKFsgd2lkZ2V0IF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfV0lER0VUU19BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKCh3aWRnZXRzOiBXaWRnZXRNb2RlbDxhbnk+W10pID0+IG5ldyBVcHNlcnRXaWRnZXRBY3Rpb24od2lkZ2V0cykpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldENvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFdpZGdldCgpO1xyXG5cdFx0dGhpcy53aWRnZXQkLnBpcGUoZmlsdGVyKHdpZGdldCA9PiB3aWRnZXQgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKHdpZGdldCA9PiB7XHJcblx0XHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9maWxsX2NvbXBvbmVudF9tYXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShtYXAoY29uZmlnID0+IGNvbmZpZy50eXBlcyksIHN0YXJ0V2l0aCh7fSkpLnN1YnNjcmliZSh0eXBlcyA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHR5cGVzO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9zZWxlY3RXaWRnZXQoKSB7XHJcblx0XHR0aGlzLndpZGdldCQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIl9pZFwiKSxcclxuXHRcdFx0ZmlsdGVyKChpZDogc3RyaW5nKSA9PiBpZCAhPSBudWxsKSxcclxuXHRcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh3aWRnZXQpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7d2lkZ2V0LnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3dpZGdldC50eXBlXS51cHNlcnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUodyA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvd2lkZ2V0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJTW9kdWxlQ29uZmlnTWFwVHlwZXMgfSBmcm9tIFwiLi4vbW9kZWxzL21vZHVsZS1jb25maWctbWFwLXR5cGVzLmludGVyZmNlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY1dpZGdldFZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBvaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5fc2VsZWN0V2lkZ2V0KGlkKTtcclxuXHR9XHJcblx0d2lkZ2V0JDogT2JzZXJ2YWJsZTxXaWRnZXRNb2RlbDxhbnk+PjtcclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogSU1vZHVsZUNvbmZpZ01hcFR5cGVzO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc2VydmljZTogV2lkZ2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuX2ZpbGxfY29tcG9uZW50X21hcCgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMud2lkZ2V0JC5waXBlKGZpbHRlcih3aWRnZXQgPT4gd2lkZ2V0ICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSh3aWRnZXQgPT4ge1xyXG5cdFx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUod2lkZ2V0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZmlsbF9jb21wb25lbnRfbWFwKCkge1xyXG5cdFx0dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUobWFwKGNvbmZpZyA9PiBjb25maWcudHlwZXMpLCBzdGFydFdpdGgoe30pKS5zdWJzY3JpYmUodHlwZXMgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0eXBlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfc2VsZWN0V2lkZ2V0KGlkOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMud2lkZ2V0JCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHdpZGdldCkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt3aWRnZXQudHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt3aWRnZXQudHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbd2lkZ2V0LnR5cGVdLnZpZXcpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUodyA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3gsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2lkZ2V0LnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0UmVkdWNlciB9IGZyb20gXCIuL3dpZGdldC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL3dpZGdldC5jb25maWdcIjtcclxuaW1wb3J0IHsgV2lkZ2V0Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL3dpZGdldC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHZXRXaWRnZXRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC13aWRnZXQvZ2V0LXdpZGdldC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydFdpZGdldEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LXdpZGdldC91cHNlcnQtd2lkZ2V0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LXdpZGdldHMvZ2V0LXdpZGdldHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBXaWRnZXRSZWR1Y2VyIH0gZnJvbSBcIi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0RGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC93aWRnZXRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgV2lkZ2V0c01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9tYW5nZW1lbnQvd2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3Vwc2VydC91cHNlcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNXaWRnZXRDb25maWdEaXJlY3RpdmUgfSBmcm9tIFwiLi91cHNlcnQvZHluYW1pYy13aWRnZXQtY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi93aWRnZXQtc2VsZWN0b3Ivd2lkZ2V0LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZHluYW1pYy13aWRnZXQtdmlldy5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50LFxyXG5cdFx0VXBzZXJ0Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY1dpZGdldENvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNXaWRnZXRWaWV3RGlyZWN0aXZlLFxyXG5cdFx0V2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgRHluYW1pY1dpZGdldFZpZXdEaXJlY3RpdmUsIFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBEeW5hbWljV2lkZ2V0Vmlld0NvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NXaWRnZXRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IFdpZGdldE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc1dpZGdldFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgV2lkZ2V0Q29uZmlndXJhdGlvblNlcnZpY2UsIFdpZGdldFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzV2lkZ2V0TW9kdWxlLFxyXG5cdFx0V2lkZ2V0Um91dGluZ01vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJ3aWRnZXRzXCIsIFdpZGdldFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgV2lkZ2V0RGJFZmZlY3RzLCBHZXRXaWRnZXRBcGlFZmZlY3RzLCBHZXRXaWRnZXRzQXBpRWZmZWN0cywgVXBzZXJ0V2lkZ2V0QXBpRWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NXaWRnZXRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzV2lkZ2V0Um9vdE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCIuL3dpZGdldC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElXaWRnZXRWaWV3PFQ+IHtcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPFQ+O1xyXG59XHJcbiIsImltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4vd2lkZ2V0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSVdpZGdldFVwc2VydDxUPiB7XHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxUPjtcclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJzdG9yZSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImh0dHAiLCJmaWx0ZXIiLCJ0YWtlIiwic3dpdGNoTWFwIiwic3RyaW5nVGVtcGxhdGUiLCJtYXAiLCJ0YXAiLCJIdHRwQ2xpZW50Iiwic3RhcnRXaXRoIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NvbnRhaW5lclJlZiIsIklucHV0IiwiUm91dGVyTW9kdWxlIiwiY2F0Y2hFcnJvciIsIm9mIiwiQWN0aW9ucyIsIkVmZmVjdCIsImZyb21Sb290LlJlZHVjZXIiLCJwbHVjayIsIkRpcmVjdGl2ZSIsIkFjdGl2YXRlZFJvdXRlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLFFBQWlCLGtCQUFrQjtJQUFuQyxXQUFpQixrQkFBa0I7UUFDbEMsSUFBQTtZQUNDLGlCQUFZLFNBQWM7Z0JBQWQsMEJBQUE7b0JBQUEsY0FBYzs7Z0JBQTFCLGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7YUFDcEU7Ozs7WUFFRCxnQ0FBYzs7O2dCQUFkO29CQUNDLE9BQU8sRUFBRSxDQUFDO2lCQUNWOzBCQVZIO1lBV0UsQ0FBQTtRQVJZLDBCQUFPO1FBVXBCLElBQUE7WUFFQzthQUFnQjsyQkFmbEI7WUFnQkUsQ0FBQTtRQUhZLDJCQUFRO09BWEwsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWVsQzs7Ozs7O0lDTkQsSUFBQTs7OztvQ0FYQTtRQWFDLENBQUE7QUFGRCxJQUdBLElBQUE7UUFFQyxpQ0FBbUIsT0FBMkI7WUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7O1NBQUk7c0NBaEJuRDtRQWlCQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsZ0NBQW1CLE9BQVk7WUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztTQUFJO3FDQXBCcEM7UUFxQkMsQ0FBQTs7Ozs7Ozs7Ozs7QUNuQkQsUUFBaUIsaUJBQWlC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
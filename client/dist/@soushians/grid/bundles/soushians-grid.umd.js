(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/frontend-authentication'), require('@soushians/user'), require('@soushians/shared'), require('@ngrx/effects'), require('@angular/material'), require('@angular/forms'), require('@angular/common'), require('@angular/flex-layout'), require('angular-gridster2')) :
    typeof define === 'function' && define.amd ? define('@soushians/grid', ['exports', '@angular/core', '@angular/router', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/frontend-authentication', '@soushians/user', '@soushians/shared', '@ngrx/effects', '@angular/material', '@angular/forms', '@angular/common', '@angular/flex-layout', 'angular-gridster2'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.grid = {}),global.ng.core,global.ng.router,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,null,null,null,global.ng.material,global.ng.forms,global.ng.common,global.ng['flex-layout'],null));
}(this, (function (exports,i0,router,rxjs,i2,operators,i1,frontendAuthentication,i3,shared,effects,material,forms,common,flexLayout,angularGridster2) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: ""
        },
        endpoints: {
            upsert: "/api/grid",
            find: "/api/grid",
            get: "/api/grid/${model._id}",
            update_item: "/api/grid/item",
            update_item_access: "/api/grid/item/access"
        },
        types: {}
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("GridModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RootComponent = /** @class */ (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-grid-root",
                        template: "<router-outlet></router-outlet>"
                    },] },
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "grid",
            component: RootComponent,
            children: []
        }
    ];
    /** @type {?} */
    var GridRoutingModule = router.RouterModule.forChild(routes);

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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertGridApiModel;
    (function (UpsertGridApiModel) {
        var Request = /** @class */ (function () {
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
                    return this.grid;
                };
            return Request;
        }());
        UpsertGridApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertGridApiModel.Response = Response;
    })(UpsertGridApiModel || (UpsertGridApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridModel = /** @class */ (function () {
        function GridModel(_a) {
            var _b = _a === void 0 ? {
                config: {},
                items: []
            } : _a, _id = _b._id, oid = _b.oid, name = _b.name, type = _b.type, config = _b.config, items = _b.items;
            this._id = _id;
            this.oid = oid;
            this.name = name;
            this.type = type;
            this.config = config;
            this.items = items;
        }
        return GridModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertGridApiModel$1;
    (function (UpsertGridApiModel$$1) {
        var Request = /** @class */ (function () {
            function Request(grid) {
                if (grid === void 0) {
                    grid = {};
                }
                debugger;
                this.grid = new GridModel(grid);
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return this.grid;
                };
            return Request;
        }());
        UpsertGridApiModel$$1.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertGridApiModel$$1.Response = Response;
    })(UpsertGridApiModel$1 || (UpsertGridApiModel$1 = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridConfigurationService = /** @class */ (function () {
        function GridConfigurationService(configFile, store) {
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            // this.store.select(getGridModuleConfig).subscribe((gridConfig) => {
            // 	if (!gridConfig) {
            // 		return;
            // 	}
            // 	this._config = Object.assign({}, this._config, gridConfig.Config);
            // 	this.config$.next(this._config);
            // });
        }
        Object.defineProperty(GridConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        GridConfigurationService.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        GridConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        return GridConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetGridStartAction = /** @class */ (function () {
        function GetGridStartAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] start" /* START */;
        }
        return GetGridStartAction;
    }());
    var GetGridSucceedAction = /** @class */ (function () {
        function GetGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
        }
        return GetGridSucceedAction;
    }());
    var GetGridFailedAction = /** @class */ (function () {
        function GetGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
        }
        return GetGridFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridService = /** @class */ (function () {
        function GridService(http, store, userFacadeService, configurationService) {
            this.http = http;
            this.store = store;
            this.userFacadeService = userFacadeService;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.get = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.skipUntil(this.store.select(frontendAuthentication.getFrontendUser)), operators.switchMap(function (config) {
                    return _this.http
                        .get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {})
                        .pipe(operators.map(function (response) { return response.Result; }));
                }));
            };
        /**
         * @return {?}
         */
        GridService.prototype.getGrids = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridService.prototype.update_item = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.update_item != ""; }), operators.switchMap(function (config) { return _this.http.patch(config.env.frontend_server + config.endpoints.update_item, item); }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridService.prototype.update_item_access = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.update_item_access != ""; }), operators.switchMap(function (config) {
                    return _this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item);
                }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @param {?} grid
         * @return {?}
         */
        GridService.prototype.upsert = /**
         * @param {?} grid
         * @return {?}
         */
            function (grid) {
                var _this = this;
                /** @type {?} */
                var model = new UpsertGridApiModel$1.Request(grid);
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
                }), operators.map(function (response) { return response.Result; }));
            };
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.selectById = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                /** @type {?} */
                var subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.grids.db.data; })
                    .pipe(operators.filter(function (grids) { return grids != null; }), operators.map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), operators.tap(function (grid) {
                    if (grid == null) {
                        _this.store.dispatch(new GetGridStartAction(_id));
                    }
                }))
                    .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
                return subject.asObservable();
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.selectByOid = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                /** @type {?} */
                var subject = new rxjs.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.grids.db.data; })
                    .pipe(operators.filter(function (grids) { return grids != null; }), operators.map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), operators.tap(function (grid) {
                    if (grid == null) {
                        _this.store.dispatch(new GetGridStartAction(_id));
                    }
                }))
                    .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
                return subject.asObservable();
            };
        GridService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        GridService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: i3.UserFacadeService },
                { type: GridConfigurationService }
            ];
        };
        /** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserFacadeService), i0.inject(GridConfigurationService)); }, token: GridService, providedIn: "root" });
        return GridService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetGridApiEffects = /** @class */ (function () {
        function GetGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[GRID][API][GetGrid] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetGridSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetGridFailedAction(err)); }));
        }
        GetGridApiEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        GetGridApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: GridService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetGridApiEffects.prototype, "start$", void 0);
        return GetGridApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertGridStartAction = /** @class */ (function () {
        function UpsertGridStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
        }
        return UpsertGridStartAction;
    }());
    var UpsertGridSucceedAction = /** @class */ (function () {
        function UpsertGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
        }
        return UpsertGridSucceedAction;
    }());
    var UpsertGridFailedAction = /** @class */ (function () {
        function UpsertGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
        }
        return UpsertGridFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var UpsertGridApiEffects = /** @class */ (function () {
        function UpsertGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertGridSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertGridFailedAction(err)); }));
        }
        UpsertGridApiEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        UpsertGridApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: GridService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], UpsertGridApiEffects.prototype, "start$", void 0);
        return UpsertGridApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetGridsSucceedAction = /** @class */ (function () {
        function GetGridsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
        }
        return GetGridsSucceedAction;
    }());
    var GetGridsFailedAction = /** @class */ (function () {
        function GetGridsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
        }
        return GetGridsFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GetGridsApiEffects = /** @class */ (function () {
        function GetGridsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$
                .ofType("[GET_GRIDS][API][GetGrids] start" /* START */)
                .pipe(operators.switchMap(function () {
                return _this.service
                    .getGrids()
                    .pipe(operators.map(function (res) { return new GetGridsSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetGridsFailedAction(err)); }));
            }));
        }
        GetGridsApiEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        GetGridsApiEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: GridService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GetGridsApiEffects.prototype, "start$", void 0);
        return GetGridsApiEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var GridsActionTypes = {
        UPSERT: "[GRID][DB] UPSERT",
        DELETE: "[GRID][DB] DELETE",
    };
    var UpsertGridAction = /** @class */ (function () {
        function UpsertGridAction(payload) {
            this.payload = payload;
            this.type = GridsActionTypes.UPSERT;
        }
        return UpsertGridAction;
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
        if (state === void 0) {
            state = initialState;
        }
        /** @type {?} */
        var _data;
        switch (action.type) {
            case GridsActionTypes.UPSERT:
                _data = state.data.concat();
                /** @type {?} */
                var newGrids = action.payload;
                newGrids.forEach(function (newGrid) {
                    /** @type {?} */
                    var existedGridIndex = _data.findIndex(function (w) { return w._id == newGrid._id; });
                    if (existedGridIndex > -1) {
                        _data.splice(existedGridIndex, 1, newGrid);
                    }
                    else {
                        _data.push(newGrid);
                    }
                });
                return __assign({}, state, { data: _data });
            case GridsActionTypes.DELETE:
                _data = Object.assign({}, state.data);
                /** @type {?} */
                var gridIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
                _data.splice(gridIndex, 1);
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GridReducer = {
        db: Reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridDbEffects = /** @class */ (function () {
        function GridDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$
                .ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (grid) { return new UpsertGridAction([grid]); }));
            this.UpsertMany$ = this.actions$
                .ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */)
                .pipe(operators.pluck("payload"), operators.map(function (grids) { return new UpsertGridAction(grids); }));
        }
        GridDbEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        GridDbEffects.ctorParameters = function () {
            return [
                { type: effects.Actions }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GridDbEffects.prototype, "Upsert$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], GridDbEffects.prototype, "UpsertMany$", void 0);
        return GridDbEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicGridItremConfigDirective = /** @class */ (function () {
        function DynamicGridItremConfigDirective(configurationService, resolver, container) {
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this.mapTypeToComponent = this.configurationService.config$.getValue().types;
        }
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "type", {
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type) {
                if (!type)
                    return;
                this._resolve_correct_component_base_on_widget_type(type);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.component.instance.valid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItremConfigDirective.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this.component.instance.config;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicGridItremConfigDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} type
         * @return {?}
         */
        DynamicGridItremConfigDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} type
         * @return {?}
         */
            function (type) {
                if (!this.mapTypeToComponent[type]) {
                    /** @type {?} */
                    var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
                this.component = this.container.createComponent(component);
                // this.widget$.subscribe((w) => (this.component.instance.widget = w));
            };
        DynamicGridItremConfigDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[ngsDynamicGridItemConfig]"
                    },] },
        ];
        /** @nocollapse */
        DynamicGridItremConfigDirective.ctorParameters = function () {
            return [
                { type: GridConfigurationService },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        DynamicGridItremConfigDirective.propDecorators = {
            type: [{ type: i0.Input }]
        };
        return DynamicGridItremConfigDirective;
    }());
    var DynamicGridItemConfigComponent = /** @class */ (function () {
        function DynamicGridItemConfigComponent(data) {
            this.data = data;
        }
        Object.defineProperty(DynamicGridItemConfigComponent.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this.DynamicWidgetRef.config;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DynamicGridItemConfigComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.DynamicWidgetRef.valid;
            },
            enumerable: true,
            configurable: true
        });
        DynamicGridItemConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "\n\t<div ngsDynamicGridItemConfig [type]=\"data.type\"></div>\n\t"
                    },] },
        ];
        /** @nocollapse */
        DynamicGridItemConfigComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        DynamicGridItemConfigComponent.propDecorators = {
            DynamicWidgetRef: [{ type: i0.ViewChild, args: [DynamicGridItremConfigDirective,] }]
        };
        return DynamicGridItemConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridConfigComponent = /** @class */ (function () {
        function GridConfigComponent(store, data) {
            this.store = store;
            this.data = data;
            this.grid = this.data.grid;
            this.oid = this.data.oid;
            this._init_properties();
            this._init_form_group();
        }
        /**
         * @return {?}
         */
        GridConfigComponent.prototype.save = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var grid = __assign({}, this.grid, this.gridFormGroup.value, { config: __assign({}, this.configFormGroup.value) });
                this.store.dispatch(new UpsertGridStartAction(grid));
            };
        /**
         * @return {?}
         */
        GridConfigComponent.prototype._init_form_group = /**
         * @return {?}
         */
            function () {
                this.configFormGroup = new forms.FormGroup({
                    gridType: new forms.FormControl("fit"),
                    compactType: new forms.FormControl("none"),
                    displayGrid: new forms.FormControl("onDrag&Resize"),
                    // empty cell
                    enableEmptyCellDrag: new forms.FormControl(true),
                    enableEmptyCellClick: new forms.FormControl(false),
                    enableEmptyCellContextMenu: new forms.FormControl(false),
                    //
                    scrollToNewItems: new forms.FormControl(true),
                    // margins
                    margin: new forms.FormControl(10),
                    outerMargin: new forms.FormControl(true),
                    outerMarginTop: new forms.FormControl(10),
                    outerMarginRight: new forms.FormControl(10),
                    outerMarginBottom: new forms.FormControl(10),
                    outerMarginLeft: new forms.FormControl(10),
                    // grid size
                    minCols: new forms.FormControl(3),
                    maxCols: new forms.FormControl(3),
                    //
                    draggable: new forms.FormGroup({
                        enabled: new forms.FormControl(),
                        delayStart: new forms.FormControl(333)
                    }),
                    resizable: new forms.FormGroup({
                        enabled: new forms.FormControl()
                    })
                });
                this.gridFormGroup = new forms.FormGroup({
                    oid: new forms.FormControl(this.oid),
                    name: new forms.FormControl("")
                });
                this.gridFormGroup.patchValue(this.grid);
                this.configFormGroup.patchValue(this.grid.config);
            };
        /**
         * @return {?}
         */
        GridConfigComponent.prototype._init_properties = /**
         * @return {?}
         */
            function () {
                this.gridTypes = ["fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed"];
                this.compactType = ["none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up"];
                this.displayGridTypes = ["always", "onDrag&Resize", "none"];
            };
        GridConfigComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\n        <mat-form-field fxFlex=\"20\">\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <div fxFlex=\"20\">\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\n            </div>\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n        </div>\n        <!-- Margins -->\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <!-- Grid Size -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\n            <mat-form-field fxFlex=\"18\">\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\n            </mat-form-field>\n            <mat-form-field fxFlex=\"18\">\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\n            </mat-form-field>\n        </div> \n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\n    </div>\n</div>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        GridConfigComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        return GridConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var GridComponent = /** @class */ (function () {
        function GridComponent(store, service, userFacadeService, configurationService, bottomSheet) {
            var _this = this;
            this.store = store;
            this.service = service;
            this.userFacadeService = userFacadeService;
            this.configurationService = configurationService;
            this.bottomSheet = bottomSheet;
            this.itemValidateCallback = new i0.EventEmitter();
            this.itemRemovedCallback = new i0.EventEmitter();
            this.itemInitCallback = new i0.EventEmitter();
            this.itemResizeCallback = new i0.EventEmitter();
            this.itemChangeCallback = new i0.EventEmitter();
            this.gridSizeChangedCallback = new i0.EventEmitter();
            this.destroyCallback = new i0.EventEmitter();
            this.initCallback = new i0.EventEmitter();
            this.ready = false;
            this.options = {};
            this.userFacadeService
                .getInfo()
                .pipe(operators.filter(function (user) { return user.CurrentSession != undefined; }), operators.map(function (user) { return user.CurrentSession.Username; }))
                .subscribe(function (username) {
                _this.username = username;
            });
            this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
            this.havePermission$ = this.store.select(i3.getAccountInfo).pipe(operators.map(function (user) {
                /** @type {?} */
                var criteria = [user, user._id, _this.grid, _this.grid.owner];
                if (criteria.some(function (i) { return !i; }))
                    return false;
                return user._id == _this.grid.owner;
            }));
        }
        /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        GridComponent.itemChange = /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
            function (item, itemComponent) {
                console.log("itemChanged", item, itemComponent);
            };
        /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
        GridComponent.itemResize = /**
         * @param {?} item
         * @param {?} itemComponent
         * @return {?}
         */
            function (item, itemComponent) {
                console.log("itemResized", item, itemComponent);
            };
        /**
         * @return {?}
         */
        GridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
                this.grid = new GridModel({
                    oid: this.oid,
                    config: {}
                });
                this._get_grid_by_oid_and_update_component();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype._initCallback = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.initCallback.emit(item);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.removeItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.grid.items.splice(this.grid.items.indexOf(item), 1);
            };
        /**
         * @param {?} item
         * @param {?} event
         * @return {?}
         */
        GridComponent.prototype.make_public = /**
         * @param {?} item
         * @param {?} event
         * @return {?}
         */
            function (item, event) {
                debugger;
                item.access = event.checked ? "public" : "private";
                this.service.update_item_access(item).subscribe(function (item) {
                    debugger;
                });
            };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.addItem = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                debugger;
                e.stopPropagation();
                this.grid.items.push(/** @type {?} */ ({}));
            };
        /**
         * @param {?} event
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.emptyCellClick = /**
         * @param {?} event
         * @param {?} item
         * @return {?}
         */
            function (event, item) {
                console.log("empty cell click", event, item);
                this.grid.items.push(/** @type {?} */ (item));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.openConfig = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                debugger;
                e.stopPropagation();
                e.preventDefault();
                this.bottomSheet.open(GridConfigComponent, {
                    data: {
                        grid: this.grid
                    }
                });
            };
        /**
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.saveConfig = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                debugger;
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
                /**
                         * TODO:
                         * احزار هویت در سمت نود اتحام شود
                        * کانفیگ برای گرفتن شناسه کاربر
                         */
                this.store.dispatch(new UpsertGridStartAction(this.grid));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.gridItemTypeChanged = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                    data: {
                        type: item.type
                    }
                });
                bs.afterDismissed().subscribe(function (data) {
                    item.config = bs.instance.config;
                    item.valid = bs.instance.valid;
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        GridComponent.prototype.showConfig = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                    data: {
                        type: item.type
                    }
                });
                bs.afterDismissed().subscribe(function (data) {
                    item.config = bs.instance.config;
                    item.valid = bs.instance.valid;
                });
            };
        // tslint:disable-next-line:member-ordering
        // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
        /**
         * @return {?}
         */
        GridComponent.prototype.goToEdit = /**
         * @return {?}
         */
            function () {
                debugger;
                // tslint:disable-next-line:no-unused-expression
                // this._ngsDynamicGridItemView;
            };
        /**
         * private methods
         */
        /**
         * private methods
         * @return {?}
         */
        GridComponent.prototype._get_grid_by_oid_and_update_component = /**
         * private methods
         * @return {?}
         */
            function () {
                var _this = this;
                this.service.selectById(this.oid).pipe(operators.filter(function (data) { return data != undefined; })).subscribe(function (data) {
                    _this.grid = data;
                    _this.options = __assign({}, _this.options, data.config);
                    // this.options.draggable = {
                    // 	enabled: true
                    // };
                    // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
                    // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
                    if (_this.options.enableEmptyCellDrag)
                        _this.options.emptyCellDragCallback = _this.emptyCellClick.bind(_this);
                    // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
                    // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
                    _this.ready = true;
                    // this.options.api.optionsChanged();
                });
            };
        GridComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-grid",
                        template: "<gridster [options]=\"options\">\n    <div class=\"actions\">\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_horiz</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\n                        <mat-icon>edit</mat-icon>\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\n                    </button>\n                    <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\n                        <mat-icon>settings</mat-icon>\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\n                    </button>\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>\u062D\u0630\u0641</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"widget-content\">\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\n                <mat-form-field fxFlex=\"grow\">\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                            {{item}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\n        </div>\n    </gridster-item>\n</gridster>",
                        styles: [":host{width:100%;height:100vh;display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%;direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                    },] },
        ];
        /** @nocollapse */
        GridComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: GridService },
                { type: i3.UserFacadeService },
                { type: GridConfigurationService },
                { type: material.MatBottomSheet }
            ];
        };
        GridComponent.propDecorators = {
            itemValidateCallback: [{ type: i0.Output }],
            itemRemovedCallback: [{ type: i0.Output }],
            itemInitCallback: [{ type: i0.Output }],
            itemResizeCallback: [{ type: i0.Output }],
            itemChangeCallback: [{ type: i0.Output }],
            gridSizeChangedCallback: [{ type: i0.Output }],
            destroyCallback: [{ type: i0.Output }],
            initCallback: [{ type: i0.Output }],
            oid: [{ type: i0.Input }]
        };
        return GridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DynamicGridItemViewDirective = /** @class */ (function () {
        function DynamicGridItemViewDirective(configurationService, resolver, container) {
            this.configurationService = configurationService;
            this.resolver = resolver;
            this.container = container;
            this.mapTypeToComponent = this.configurationService.config$.getValue().types;
        }
        Object.defineProperty(DynamicGridItemViewDirective.prototype, "item", {
            set: /**
             * @param {?} item
             * @return {?}
             */ function (item) {
                if (!item)
                    return;
                if (!item.valid)
                    return;
                this._resolve_correct_component_base_on_widget_type(item);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DynamicGridItemViewDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        /**
         * @param {?} item
         * @return {?}
         */
        DynamicGridItemViewDirective.prototype._resolve_correct_component_base_on_widget_type = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var _this = this;
                debugger;
                if (!this.mapTypeToComponent[item.type]) {
                    /** @type {?} */
                    var supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + item.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var componentFactory = this.resolver.resolveComponentFactory(this.mapTypeToComponent[item.type].viewComponent);
                this.component = this.container.createComponent(componentFactory);
                Object.keys(item.config || {}).forEach(function (key) {
                    _this.component.instance[key] = item.config[key];
                });
            };
        DynamicGridItemViewDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[ngsDynamicGridItemView]"
                    },] },
        ];
        /** @nocollapse */
        DynamicGridItemViewDirective.ctorParameters = function () {
            return [
                { type: GridConfigurationService },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        DynamicGridItemViewDirective.propDecorators = {
            item: [{ type: i0.Input, args: ["ngsDynamicGridItemView",] }]
        };
        return DynamicGridItemViewDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgsGridModule = /** @class */ (function () {
        function NgsGridModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsGridModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: NgsGridRootModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService]
                };
            };
        NgsGridModule.decorators = [
            { type: i0.NgModule, args: [{
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
                            material.MatBottomSheetModule,
                            material.MatRadioModule,
                            flexLayout.FlexLayoutModule,
                            material.MatMenuModule,
                            material.MatToolbarModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatSlideToggleModule,
                            material.MatDividerModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            angularGridster2.GridsterModule
                        ],
                        declarations: [
                            RootComponent,
                            GridComponent,
                            GridConfigComponent,
                            DynamicGridItremConfigDirective,
                            DynamicGridItemConfigComponent,
                            DynamicGridItemViewDirective
                        ],
                        entryComponents: [GridConfigComponent, DynamicGridItemConfigComponent],
                        exports: [GridComponent]
                    },] },
        ];
        return NgsGridModule;
    }());
    var NgsGridRootModule = /** @class */ (function () {
        function NgsGridRootModule() {
        }
        NgsGridRootModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsGridModule,
                            GridRoutingModule,
                            i2.StoreModule.forFeature("grids", GridReducer),
                            effects.EffectsModule.forFeature([GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects])
                        ],
                        exports: [NgsGridModule]
                    },] },
        ];
        return NgsGridRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.GridModel = GridModel;
    exports.NgsGridModule = NgsGridModule;
    exports.NgsGridRootModule = NgsGridRootModule;
    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.ɵg = GridConfigComponent;
    exports.ɵi = DynamicGridItemConfigComponent;
    exports.ɵh = DynamicGridItremConfigDirective;
    exports.ɵj = DynamicGridItemViewDirective;
    exports.ɵk = GridRoutingModule;
    exports.ɵc = GridReducer;
    exports.ɵb = GridComponent;
    exports.ɵm = GridDbEffects;
    exports.ɵl = Reducer;
    exports.ɵa = RootComponent;
    exports.ɵn = GetGridApiEffects;
    exports.ɵp = GetGridsApiEffects;
    exports.ɵr = UpsertGridApiEffects;
    exports.ɵf = GridConfigurationService;
    exports.ɵe = GridService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1yb3V0aW5nLm1vZHVsZS50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0XHR1cGRhdGVfaXRlbTogc3RyaW5nO1xyXG5cdFx0dXBkYXRlX2l0ZW1fYWNjZXNzOiBzdHJpbmc7XHJcblx0fTtcclxuXHR0eXBlcz86IHsgW2tleTogc3RyaW5nXTogSUdyaWRUeXBlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEdyaWRNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvZ3JpZC8ke21vZGVsLl9pZH1cIixcclxuXHRcdHVwZGF0ZV9pdGVtOiBcIi9hcGkvZ3JpZC9pdGVtXCIsXHJcblx0XHR1cGRhdGVfaXRlbV9hY2Nlc3M6IFwiL2FwaS9ncmlkL2l0ZW0vYWNjZXNzXCJcclxuXHR9LFxyXG5cdHR5cGVzOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkc3RlckNvbmZpZyB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRvd25lcjogc3RyaW5nO1xyXG5cdGNvbmZpZzogR3JpZHN0ZXJDb25maWc7XHJcblx0aXRlbXM6IElHcmlkSXRlbU1vZGVsPGFueT5bXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRvaWQsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdHR5cGUsXHJcblx0XHRcdGNvbmZpZyxcclxuXHRcdFx0aXRlbXNcclxuXHRcdH06IHsgX2lkPzogc3RyaW5nOyBvaWQ/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmc7IHR5cGU/OiBzdHJpbmc7IGNvbmZpZz86IEdyaWRzdGVyQ29uZmlnOyBpdGVtcz86IGFueVtdIH0gPSB7XHJcblx0XHRcdGNvbmZpZzoge30sXHJcblx0XHRcdGl0ZW1zOiBbXVxyXG5cdFx0fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm9pZCA9IG9pZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcihncmlkID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoZ3JpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdyaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogR3JpZE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRHcmlkTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKGdyaWRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFncmlkQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgZ3JpZENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkQWN0aW9ucyA9IEdldEdyaWRTdGFydEFjdGlvbiB8IEdldEdyaWRTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZEZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0LCBza2lwV2hpbGUsIHNraXBVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRVc2VyIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCwgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0Z2V0KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHNraXBVbnRpbCh0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZFVzZXIpKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IF9pZCB9KSwge30pXHJcblx0XHRcdFx0XHQucGlwZShtYXAoKHJlc3BvbnNlOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEdyaWRzKCk6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRHcmlkc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cGRhdGVfaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBkYXRlX2l0ZW0gIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLnBhdGNoKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cGRhdGVfaXRlbSwgaXRlbSkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRHcmlkc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cGRhdGVfaXRlbV9hY2Nlc3MoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pik6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtX2FjY2VzcyAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wYXRjaChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBkYXRlX2l0ZW1fYWNjZXNzLCBpdGVtKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRHcmlkc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cHNlcnQoZ3JpZDogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3QoZ3JpZCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7fSk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihncmlkcyA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoZ3JpZHMgPT4gZ3JpZHMuZmluZChncmlkID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcChncmlkID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShGb3JtU2NoZW1hTW9kZWwgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEJ5T2lkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZ3JpZHMgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKGdyaWRzID0+IGdyaWRzLmZpbmQoZ3JpZCA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoZ3JpZCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUywgR2V0R3JpZEFjdGlvbnMsIEdldEdyaWRTdWNjZWVkQWN0aW9uLCBHZXRHcmlkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0R3JpZEFjdGlvbnMgPSBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfCBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiB8IFVwc2VydEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydEdyaWRBY3Rpb25zLFxyXG5cdFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydEdyaWRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRzQWN0aW9ucyA9IEdldEdyaWRzU3RhcnRBY3Rpb24gfCBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkc0ZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9HUklEU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0R3JpZHNBY3Rpb25zLFxyXG5cdEdldEdyaWRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRHcmlkc0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEdyaWRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRzU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBHcmlkc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltHUklEXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbR1JJRF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR3JpZHNBY3Rpb25zID0gVXBzZXJ0R3JpZEFjdGlvbiB8IERlbGV0ZUdyaWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZHNBY3Rpb25UeXBlcywgR3JpZHNBY3Rpb25zIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IEdyaWRNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBHcmlkc0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBHcmlkTW9kZWxbXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld0dyaWRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0XHRuZXdHcmlkcy5mb3JFYWNoKChuZXdHcmlkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZEdyaWRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3R3JpZC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkR3JpZEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkR3JpZEluZGV4LCAxLCBuZXdHcmlkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdHcmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCBncmlkSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKGdyaWRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyaWRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4vcm9vdC9ncmlkcy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFJlZHVjZXIgPSB7XHJcblx0ZGI6IGZyb21Sb290LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdGdyaWRzOiBHcmlkU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRCwgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZDogR3JpZE1vZGVsKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihbIGdyaWQgXSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkczogR3JpZE1vZGVsW10pID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKGdyaWRzKSkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRJbmplY3RcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0eXBlKSByZXR1cm47XHJcblx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSk7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS52YWxpZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWc7XHJcblx0fVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBhbnk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcztcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLmNvbmZpZ0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWcgW3R5cGVdPVwiZGF0YS50eXBlXCI+PC9kaXY+XHJcblx0YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IHtcclxuXHRAVmlld0NoaWxkKER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUpIER5bmFtaWNXaWRnZXRSZWY6IER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmU7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHt9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYuY29uZmlnO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLnZhbGlkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxoND4gw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmMKvw5jCp8OYwrTDmMKow5nCiMOYwrHDmMKvPC9oND5cclxuPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW4gd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiICBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOZwojDmMK5IMOZwoLDmMKxw5jCp8OYwrHDmsKvw5vCjMOYwrHDm8KMIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpyDDmMKvw5jCsSDDmMK1w5nCgcOYwq3DmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ3JpZFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjIwXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmcKIw5jCuSDDmcKBw5jCtMOYwrHDmMKvw5nChyDDmMK0w5jCr8OZwoYgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwq/DmMKxIMOYwrXDmcKBw5jCrcOZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbXBhY3RUeXBlXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIyMFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5jCtMOYwqfDmcKGIMOYwq/DmMKnw5jCr8OZwoYgw5jCs8OZwoTDmcKIw5nChMOiwoDCjMOZwofDmMKnw5vCjCDDmsKvw5jCscObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGlzcGxheUdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaXNwbGF5R3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsRHJhZ1wiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOawq/DmMKxw5vCjMOYwq8gw5jCqMOYwqcgw5jCr8OYwrHDmsKvIMOawqnDmMKxw5jCr8OZwoY8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxDbGlja1wiPmVuYWJsZUVtcHR5Q2VsbENsaWNrPC9tYXQtY2hlY2tib3g+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgnZHJhZ2dhYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPsOZwoLDmMKnw5jCqMOZwoTDm8KMw5jCqiDDmMKsw5jCp8OYwqjDmMKsw5jCp8ObwozDm8KMIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPsOZwoLDmMKnw5jCqMOZwoTDm8KMw5jCqiDDmMKqw5jCusObwozDm8KMw5jCsSDDmMKzw5jCp8ObwozDmMKyIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIE1hcmdpbnMgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoNCBmeEZsZXg9XCIxMDBcIj7DmMKtw5jCp8OYwrTDm8KMw5nChzo8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmeEZsZXggZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5cIj7DmMKnw5nChcOawqnDmMKnw5nChiDDmMKqw5nChsOYwrjDm8KMw5nChSDDmcKBw5jCp8OYwrXDmcKEw5nChyDDmsKvw5jCscObwozDmMKvw5nCh8OYwqc8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIsOZwoHDmMKnw5jCtcOZwoTDmcKHIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpyDDmMKnw5jCsiDDmcKHw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm1hcmdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKxIMOYwqjDmMKnw5nChMOYwqcgw5jCr8OYwqfDmMK0w5jCqMOZwojDmMKxw5jCr1wiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luVG9wXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLDmcKBw5jCp8OYwrXDmcKEw5nChyDDmsKvw5jCscObwozDmMKvw5nCh8OYwqcgw5jCp8OYwrIgw5jCscOYwqfDmMKzw5jCqiDDmMKvw5jCp8OYwrTDmMKow5nCiMOYwrHDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5SaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKyIMOZwr7DmMKnw5vCjMObwozDmcKGIMOYwq/DmMKnw5jCtMOYwqjDmcKIw5jCscOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKyIMOawobDmcK+IMOYwq/DmMKnw5jCtMOYwqjDmcKIw5jCscOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBHcmlkIFNpemUgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoNCBmeEZsZXg9XCIxMDBcIj7DmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCqsOZwojDmcKGw6LCgMKMw5nCh8OYwqc6PC9oND5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjE4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5rCqcOZwoXDmMKqw5jCscObwozDmcKGIMOYwrPDmMKqw5nCiMOZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW5Db2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjE4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5jCqMObwozDmMK0w5jCqsOYwrHDm8KMw5nChiDDmMKzw5jCqsOZwojDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMjBcIiBmeExheW91dEFsaWduPVwiZmxleC1lbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj7DmMKww5jCrsObwozDmMKxw5nChzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlnQ29tcG9uZW50IHtcclxuXHRncmlkVHlwZXM6IGFueVtdO1xyXG5cdGNvbXBhY3RUeXBlOiBhbnlbXTtcclxuXHRkaXNwbGF5R3JpZFR5cGVzOiBhbnlbXTtcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Z3JpZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55KSB7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLmRhdGEuZ3JpZDtcclxuXHRcdHRoaXMub2lkID0gdGhpcy5kYXRhLm9pZDtcclxuXHRcdHRoaXMuX2luaXRfcHJvcGVydGllcygpO1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtX2dyb3VwKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBncmlkID0ge1xyXG5cdFx0XHQuLi50aGlzLmdyaWQsXHJcblx0XHRcdC4uLnRoaXMuZ3JpZEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Y29uZmlnOiB7IC4uLnRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlIH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24oZ3JpZCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Z3JpZFR5cGU6IG5ldyBGb3JtQ29udHJvbChcImZpdFwiKSxcclxuXHRcdFx0Y29tcGFjdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcIm5vbmVcIiksXHJcblx0XHRcdGRpc3BsYXlHcmlkOiBuZXcgRm9ybUNvbnRyb2woXCJvbkRyYWcmUmVzaXplXCIpLFxyXG5cdFx0XHQvLyBlbXB0eSBjZWxsXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbERyYWc6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ2xpY2s6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbENvbnRleHRNZW51OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRzY3JvbGxUb05ld0l0ZW1zOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdC8vIG1hcmdpbnNcclxuXHRcdFx0bWFyZ2luOiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5SaWdodDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5Cb3R0b206IG5ldyBGb3JtQ29udHJvbCgxMCksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0Ly8gZ3JpZCBzaXplXHJcblx0XHRcdG1pbkNvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0bWF4Q29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRkcmFnZ2FibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdGRlbGF5U3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgzMzMpXHJcblx0XHRcdFx0Ly8gaWdub3JlQ29udGVudDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIilcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlc2l6YWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG9pZDogbmV3IEZvcm1Db250cm9sKHRoaXMub2lkKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZCk7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZC5jb25maWcpO1xyXG5cdH1cclxuXHRfaW5pdF9wcm9wZXJ0aWVzKCkge1xyXG5cdFx0dGhpcy5ncmlkVHlwZXMgPSBbIFwiZml0XCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwiZml4ZWRcIiwgXCJ2ZXJ0aWNhbEZpeGVkXCIsIFwiaG9yaXpvbnRhbEZpeGVkXCIgXTtcclxuXHRcdHRoaXMuY29tcGFjdFR5cGUgPSBbIFwibm9uZVwiLCBcImNvbXBhY3RVcFwiLCBcImNvbXBhY3RMZWZ0XCIsIFwiY29tcGFjdFVwJkxlZnRcIiwgXCJjb21wYWN0TGVmdCZVcFwiIF07XHJcblx0XHR0aGlzLmRpc3BsYXlHcmlkVHlwZXMgPSBbIFwiYWx3YXlzXCIsIFwib25EcmFnJlJlc2l6ZVwiLCBcIm5vbmVcIiBdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkc3RlckNvbmZpZywgR3JpZHN0ZXJJdGVtIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IFdpZGdldFNlbGVjdG9yQ29tcG9uZW50LCBXaWRnZXRNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWRcIixcclxuXHR0ZW1wbGF0ZTogYDxncmlkc3RlciBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJhZGRJdGVtKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cIm9wZW5Db25maWcoJGV2ZW50KVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRhc2hib2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cInNhdmVDb25maWcoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxncmlkc3Rlci1pdGVtIFtpdGVtXT1cIml0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkLml0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluaXRpYWxpemVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfaG9yaXo8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgY2xhc3M9XCJydGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiZ3JpZC5vd25lciA9PSB1c2VybmFtZVwiIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIiBbY2hlY2tlZF09XCJpdGVtLmFjY2Vzcz09J3B1YmxpYydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm1ha2VfcHVibGljKGl0ZW0sJGV2ZW50KVwiPsOYwrnDmcKFw5nCiMOZwoXDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsXCIgKGNsaWNrKT1cImdvVG9FZGl0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7DmcKIw5vCjMOYwrHDmMKnw5vCjMOYwrQgw5jCp8OZwoHDmMKyw5nCiMOZwobDmcKHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bFwiIChjbGljayk9XCJzaG93Q29uZmlnKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPsOYwq3DmMKww5nCgTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiBmeEZsZXg9XCIxMDBcIiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkSXRlbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiAjdGVzdCBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwO3RvcDo1cHg7bGVmdDo1cHg7aGVpZ2h0OjI1cHh9LmFjdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI1cHg7cmlnaHQ6MjVweDt6LWluZGV4OjV9LmFjdGlvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9LndpZGdldC1jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlfS5mb3JtLWNvbnRhaW5lcntwYWRkaW5nOjI1cHg7d2lkdGg6MTAwJTtkaXJlY3Rpb246cnRsfS5mb3JtLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfS5ydGx7ZGlyZWN0aW9uOnJ0bH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIGl0ZW1WYWxpZGF0ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVtb3ZlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtSW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVzaXplQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1DaGFuZ2VDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlc3Ryb3lDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBvaWQ6IHN0cmluZztcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0b3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdHJlYWR5ID0gZmFsc2U7XHJcblx0Z3JpZEl0ZW1UeXBlczogYW55W3N0cmluZ107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge307XHJcblx0XHR0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0XHRcdC5nZXRJbmZvKClcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24gIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0XHRtYXAoKHVzZXI6IGFueSkgPT4gdXNlci5DdXJyZW50U2Vzc2lvbi5Vc2VybmFtZSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHVzZXJuYW1lID0+IHtcclxuXHRcdFx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkSXRlbVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXMpO1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykucGlwZShcclxuXHRcdFx0bWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNyaXRlcmlhID0gWyB1c2VyLCB1c2VyLl9pZCwgdGhpcy5ncmlkLCB0aGlzLmdyaWQub3duZXIgXTtcclxuXHRcdFx0XHRpZiAoY3JpdGVyaWEuc29tZShpID0+ICFpKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdXNlci5faWQgPT0gdGhpcy5ncmlkLm93bmVyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtQ2hhbmdlKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbUNoYW5nZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbVJlc2l6ZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1SZXNpemVkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLml0ZW1zID0gWyB7IGNvbHM6IDIsIHJvd3M6IDEsIHk6IDAsIHg6IDAgfSwgeyBjb2xzOiAyLCByb3dzOiAyLCB5OiAwLCB4OiAyIH0gXTtcclxuXHJcblx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKHtcclxuXHRcdFx0b2lkOiB0aGlzLm9pZCxcclxuXHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKTtcclxuXHR9XHJcblxyXG5cdF9pbml0Q2FsbGJhY2soaXRlbSkge1xyXG5cdFx0dGhpcy5pbml0Q2FsbGJhY2suZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaXRlbSkge1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnNwbGljZSh0aGlzLmdyaWQuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0fVxyXG5cdG1ha2VfcHVibGljKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4sIGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpdGVtLmFjY2VzcyA9IGV2ZW50LmNoZWNrZWQgPyBcInB1YmxpY1wiIDogXCJwcml2YXRlXCI7XHJcblx0XHR0aGlzLnNlcnZpY2UudXBkYXRlX2l0ZW1fYWNjZXNzKGl0ZW0pLnN1YnNjcmliZShpdGVtID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0YWRkSXRlbShlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3JpZENvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Z3JpZDogdGhpcy5ncmlkXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzYXZlQ29uZmlnKGUpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUT0RPOlxyXG5cdFx0ICogw5jCp8OYwq3DmMKyw5jCp8OYwrEgw5nCh8OZwojDm8KMw5jCqiDDmMKvw5jCsSDDmMKzw5nChcOYwqogw5nChsOZwojDmMKvIMOYwqfDmMKqw5jCrcOYwqfDmcKFIMOYwrTDmcKIw5jCr1xyXG5cdFx0KiDDmsKpw5jCp8OZwobDmcKBw5vCjMOawq8gw5jCqMOYwrHDmMKnw5vCjCDDmsKvw5jCscOZwoHDmMKqw5nChiDDmMK0w5nChsOYwqfDmMKzw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzaG93Q29uZmlnKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG5cdC8vIEBWaWV3Q2hpbGQoXCJEaWFncmFtVmlld0NvbXBvbmVudFwiKSBfbmdzRHluYW1pY0dyaWRJdGVtVmlldzogRGlhZ3JhbVZpZXdDb21wb25lbnQ7XHJcblx0Z29Ub0VkaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0Ly8gdGhpcy5fbmdzRHluYW1pY0dyaWRJdGVtVmlldztcclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4uZGF0YS5jb25maWcgfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IHtcclxuXHRcdFx0Ly8gXHRlbmFibGVkOiB0cnVlXHJcblx0XHRcdC8vIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyYWcpIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcmFnQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ2xpY2spIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmFwaS5vcHRpb25zQ2hhbmdlZCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0LFxyXG5cdEluamVjdCxcclxuXHRWaWV3Q2hpbGRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoXCJuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XCIpXHJcblx0c2V0IGl0ZW0oaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0aWYgKCFpdGVtKSByZXR1cm47XHJcblx0XHRpZiAoIWl0ZW0udmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZShpdGVtKTtcclxuXHR9XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbaXRlbS50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke2l0ZW0udHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KFxyXG5cdFx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdLnZpZXdDb21wb25lbnRcclxuXHRcdCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuXHRcdE9iamVjdC5rZXlzKGl0ZW0uY29uZmlnIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2Vba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBHcmlkc3Rlck1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyaWRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ3JpZC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHcmlkUmVkdWNlciB9IGZyb20gXCIuL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkRGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC9ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkL2dyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtcclxuXHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudFxyXG59IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgfSBmcm9tIFwiLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tdmlldy5kaXJlY3RpdmVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0TWVudU1vZHVsZSxcclxuXHRcdE1hdFRvb2xiYXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0R3JpZHN0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdEdyaWRDb21wb25lbnQsXHJcblx0XHRHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmVcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHcmlkQ29uZmlnQ29tcG9uZW50LCBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEdyaWRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogR3JpZE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc0dyaWRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSwgR3JpZFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzR3JpZE1vZHVsZSxcclxuXHRcdEdyaWRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImdyaWRzXCIsIEdyaWRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEdyaWREYkVmZmVjdHMsIEdldEdyaWRBcGlFZmZlY3RzLCBHZXRHcmlkc0FwaUVmZmVjdHMsIFVwc2VydEdyaWRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0dyaWRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiQ29tcG9uZW50IiwiUm91dGVyTW9kdWxlIiwiVXBzZXJ0R3JpZEFwaU1vZGVsIiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwiZmlsdGVyIiwidGFrZSIsInNraXBVbnRpbCIsImdldEZyb250ZW5kVXNlciIsInN3aXRjaE1hcCIsInN0cmluZ1RlbXBsYXRlIiwibWFwIiwidGFwIiwiSHR0cENsaWVudCIsIlVzZXJGYWNhZGVTZXJ2aWNlIiwiY2F0Y2hFcnJvciIsIm9mIiwiQWN0aW9ucyIsIkVmZmVjdCIsImZyb21Sb290LlJlZHVjZXIiLCJwbHVjayIsIkRpcmVjdGl2ZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk1BVF9CT1RUT01fU0hFRVRfREFUQSIsIlZpZXdDaGlsZCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiRXZlbnRFbWl0dGVyIiwiZ2V0QWNjb3VudEluZm8iLCJNYXRCb3R0b21TaGVldCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdEJvdHRvbVNoZWV0TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiR3JpZHN0ZXJNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQXNCQSxRQUFhLHFCQUFxQixHQUFxQjtRQUN0RCxHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsS0FBSztZQUNqQixlQUFlLEVBQUUsRUFBRTtTQUNuQjtRQUNELFNBQVMsRUFBRTtZQUNWLE1BQU0sRUFBRSxXQUFXO1lBQ25CLElBQUksRUFBRSxXQUFXO1lBQ2pCLEdBQUcsRUFBRSx3QkFBd0I7WUFDN0IsV0FBVyxFQUFFLGdCQUFnQjtZQUM3QixrQkFBa0IsRUFBRSx1QkFBdUI7U0FDM0M7UUFDRCxLQUFLLEVBQUUsRUFBRTtLQUNULENBQUM7O0FBRUYsUUFBYSxtQkFBbUIsR0FBRyxJQUFJQSxpQkFBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDckMzRjs7OztvQkFFQ0MsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsaUNBQWlDO3FCQUMzQzs7NEJBTEQ7Ozs7Ozs7QUNDQTtJQUdBLElBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsYUFBYTtZQUN4QixRQUFRLEVBQUUsRUFBRTtTQUNaO0tBQ0QsQ0FBQzs7QUFFRixRQUFhLGlCQUFpQixHQUF3QkMsbUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztJQ1puRjs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNq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
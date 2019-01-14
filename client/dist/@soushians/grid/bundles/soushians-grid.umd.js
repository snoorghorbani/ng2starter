(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/flex-layout'), require('angular-gridster2'), require('@angular/router'), require('@angular/common/http'), require('@soushians/frontend-authentication'), require('@soushians/shared'), require('rxjs'), require('@ngrx/effects'), require('rxjs/operators'), require('@soushians/user'), require('@ngrx/store'), require('@angular/material'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@soushians/grid', ['exports', '@angular/common', '@angular/flex-layout', 'angular-gridster2', '@angular/router', '@angular/common/http', '@soushians/frontend-authentication', '@soushians/shared', 'rxjs', '@ngrx/effects', 'rxjs/operators', '@soushians/user', '@ngrx/store', '@angular/material', '@angular/forms', '@angular/core'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.grid = {}),global.ng.common,global.ng['flex-layout'],global.angularGridster2,global.ng.router,global.ng.common.http,global.frontendAuthentication,global.shared,global.rxjs,global.effects,global.rxjs.operators,global.i3,global.i2,global.ng.material,global.ng.forms,global.ng.core));
}(this, (function (exports,common,flexLayout,angularGridster2,router,i1,frontendAuthentication,shared,rxjs,effects,operators,i3,i2,material,forms,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RootComponent = /** @class */ (function () {
        function RootComponent() {
        }
        RootComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-grid-root",
                        template: "<router-outlet></router-outlet>"
                    }] }
        ];
        return RootComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertGridApiModel;
    (function (UpsertGridApiModel) {
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                var model = new UpsertGridApiModel.Request(grid);
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) {
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
                }), operators.map(function (response) { return response.Result; }));
            };
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        // delete(_id: string) {
        // 	return this.configurationService.config$
        // 		.filter((config) => config.endpoints.deleteForm != "")
        // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
        // }
        /**
         * @param {?} _id
         * @return {?}
         */
        GridService.prototype.selectById =
            // delete(_id: string) {
            // 	return this.configurationService.config$
            // 		.filter((config) => config.endpoints.deleteForm != "")
            // 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
            // }
            /**
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
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetGridApiEffects = /** @class */ (function () {
        function GetGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GRID][API][GetGrid] start" /* START */), operators.map(function (action) { return action.payload; }), operators.switchMap(function (payload) { return _this.service.get(payload); }), operators.map(function (res) { return new GetGridSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetGridFailedAction(err)); }));
        }
        GetGridApiEffects.decorators = [
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertGridApiEffects = /** @class */ (function () {
        function UpsertGridApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */), operators.pluck("payload"), operators.switchMap(function (payload) { return _this.service.upsert(payload); }), operators.map(function (res) { return new UpsertGridSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new UpsertGridFailedAction(err)); }));
        }
        UpsertGridApiEffects.decorators = [
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetGridsApiEffects = /** @class */ (function () {
        function GetGridsApiEffects(actions$, service) {
            var _this = this;
            this.actions$ = actions$;
            this.service = service;
            this.start$ = this.actions$.pipe(effects.ofType("[GET_GRIDS][API][GetGrids] start" /* START */), operators.switchMap(function () {
                return _this.service
                    .getGrids()
                    .pipe(operators.map(function (res) { return new GetGridsSucceedAction(res); }), operators.catchError(function (err) { return rxjs.of(new GetGridsFailedAction(err)); }));
            }));
        }
        GetGridsApiEffects.decorators = [
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GridReducer = {
        db: Reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridDbEffects = /** @class */ (function () {
        function GridDbEffects(actions$) {
            this.actions$ = actions$;
            this.Upsert$ = this.actions$.pipe(effects.ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map(function (grid) { return new UpsertGridAction([grid]); }));
            this.UpsertMany$ = this.actions$.pipe(effects.ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */), operators.pluck("payload"), operators.map(function (grids) { return new UpsertGridAction(grids); }));
        }
        GridDbEffects.decorators = [
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
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
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        // ignoreContent: new FormControl("false")
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
                        template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\r\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\r\n        <mat-form-field fxFlex=\"20\">\r\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\r\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\r\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\r\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"20\">\r\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\r\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\r\n                        {{item}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <div fxFlex=\"20\">\r\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\r\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\r\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n        </div>\r\n        <!-- Margins -->\r\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\r\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\r\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\r\n            </div>\r\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex>\r\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <!-- Grid Size -->\r\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"18\">\r\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\r\n            </mat-form-field>\r\n        </div> \r\n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\r\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\r\n    </div>\r\n</div>\r\n</div>"
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                this.grid.items.push(( /** @type {?} */({})));
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
                this.grid.items.push(( /** @type {?} */(item)));
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
        // tslint:disable-next-line:member-ordering
        // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
        /**
         * @return {?}
         */
        GridComponent.prototype.goToEdit =
            // tslint:disable-next-line:member-ordering
            // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
            /**
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
                    debugger;
                    data.config.outerMarginBottom = +data.config.outerMarginBottom;
                    data.config.outerMarginRight = +data.config.outerMarginRight;
                    _this.options = __assign({}, _this.options, data.config);
                    // this.options.draggable = {
                    // 	enabled: true
                    // };
                    // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
                    // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
                    if (_this.options.enableEmptyCellDrag)
                        _this.options.emptyCellDragCallback = _this.emptyCellClick.bind(_this);
                    // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
                    _this.ready = true;
                    // this.options.api.optionsChanged();
                });
            };
        GridComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-grid",
                        template: "<gridster [options]=\"options\">\r\n    <div class=\"actions\" >\r\n        <button mat-mini-fab (click)=\"addItem($event)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\r\n            <mat-icon>dashboard</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\r\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\r\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\r\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\r\n                        <mat-icon>edit</mat-icon>\r\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\r\n                    </button>\r\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\r\n                    </button> -->\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>\u062D\u0630\u0641</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"widget-content\">\r\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\r\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\r\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\r\n                            {{item}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\r\n        </div>\r\n    </gridster-item>\r\n</gridster>",
                        styles: [":host{width:100%;min-height:calc(100vh - 205px);display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
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
                    },] }
        ];
        return NgsGridRootModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

//# sourceMappingURL=soushians-grid.umd.js.map
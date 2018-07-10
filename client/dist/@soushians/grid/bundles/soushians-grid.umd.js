(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/shared'), require('@soushians/user'), require('@ngrx/effects'), require('@angular/material'), require('@angular/forms'), require('@soushians/frontend-authentication'), require('@angular/common'), require('@angular/flex-layout'), require('angular-gridster2')) :
    typeof define === 'function' && define.amd ? define('@soushians/grid', ['exports', '@angular/core', '@angular/router', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/shared', '@soushians/user', '@ngrx/effects', '@angular/material', '@angular/forms', '@soushians/frontend-authentication', '@angular/common', '@angular/flex-layout', 'angular-gridster2'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.grid = {}),global.ng.core,global.ng.router,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,null,null,global.ng.material,global.ng.forms,null,global.ng.common,global.ng['flex-layout'],null));
}(this, (function (exports,i0,router,rxjs,i2,operators,i1,shared,i3,effects,material,forms,frontendAuthentication,common,flexLayout,angularGridster2) { 'use strict';

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
            upsert: "http://localhost:3000/api/grid",
            find: "http://localhost:3000/api/grid",
            get: "http://localhost:3000/api/grid/${model._id}"
        },
        types: {}
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("GridModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RootComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: "grid",
            component: RootComponent,
            children: []
        }
    ];
    var /** @type {?} */ GridRoutingModule = router.RouterModule.forChild(routes);

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
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GridConfigurationService = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertGridApiModel;
    (function (UpsertGridApiModel) {
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
                    return this.grid;
                };
            return Request;
        }());
        UpsertGridApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertGridApiModel.Response = Response;
    })(UpsertGridApiModel || (UpsertGridApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GridModel = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertGridApiModel$1;
    (function (UpsertGridApiModel$$1) {
        var Request = (function () {
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
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertGridApiModel$$1.Response = Response;
    })(UpsertGridApiModel$1 || (UpsertGridApiModel$1 = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetGridStartAction = (function () {
        function GetGridStartAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] start" /* START */;
        }
        return GetGridStartAction;
    }());
    var GetGridSucceedAction = (function () {
        function GetGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
        }
        return GetGridSucceedAction;
    }());
    var GetGridFailedAction = (function () {
        function GetGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
        }
        return GetGridFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GridService = (function () {
        function GridService(http, store, userFacadeService, configurationService) {
            this.http = http;
            this.store = store;
            this.userFacadeService = userFacadeService;
            this.configurationService = configurationService;
            this.userId$ = this.userFacadeService.getDisplayName().filter(function (i) { return i != undefined; });
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                    debugger;
                    return _this.http.get(shared.stringTemplate(config.endpoints.get, { _id: _id }), {
                        params: {
                            userId: userId
                        }
                    });
                }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @return {?}
         */
        GridService.prototype.getGrids = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.find != ""; }), operators.switchMap(function (config) { return _this.http.get(config.endpoints.find); }), operators.map(function (response) { return response.Result; }));
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
                var /** @type {?} */ model = new UpsertGridApiModel$1.Request(grid);
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.combineLatest(this.userId$), operators.switchMap(function (_a) {
                    var _b = __read(_a, 2), config = _b[0], userId = _b[1];
                    return _this.http.post(config.endpoints.upsert, model.getRequestBody(), {
                        params: {
                            userId: userId
                        }
                    });
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
                var /** @type {?} */ subject = new rxjs.BehaviorSubject(undefined);
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
                var /** @type {?} */ subject = new rxjs.BehaviorSubject(undefined);
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
     * @suppress {checkTypes} checked by tsc
     */
    var GetGridApiEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertGridStartAction = (function () {
        function UpsertGridStartAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
        }
        return UpsertGridStartAction;
    }());
    var UpsertGridSucceedAction = (function () {
        function UpsertGridSucceedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
        }
        return UpsertGridSucceedAction;
    }());
    var UpsertGridFailedAction = (function () {
        function UpsertGridFailedAction(payload) {
            this.payload = payload;
            this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
        }
        return UpsertGridFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertGridApiEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var GetGridsSucceedAction = (function () {
        function GetGridsSucceedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
        }
        return GetGridsSucceedAction;
    }());
    var GetGridsFailedAction = (function () {
        function GetGridsFailedAction(payload) {
            this.payload = payload;
            this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
        }
        return GetGridsFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GetGridsApiEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var GridsActionTypes = {
        UPSERT: "[GRID][DB] UPSERT",
        DELETE: "[GRID][DB] DELETE",
    };
    var UpsertGridAction = (function () {
        function UpsertGridAction(payload) {
            this.payload = payload;
            this.type = GridsActionTypes.UPSERT;
        }
        return UpsertGridAction;
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
            case GridsActionTypes.UPSERT:
                _data = state.data.concat();
                var /** @type {?} */ newGrids = action.payload;
                newGrids.forEach(function (newGrid) {
                    var /** @type {?} */ existedGridIndex = _data.findIndex(function (w) { return w._id == newGrid._id; });
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
                var /** @type {?} */ gridIndex = state.data.findIndex(function (w) { return w._id == action.payload._id; });
                _data.splice(gridIndex, 1);
                return __assign({}, state, { data: _data });
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ GridReducer = {
        db: Reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GridDbEffects = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicGridItremConfigDirective = (function () {
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
                    var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
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
    var DynamicGridItemConfigComponent = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */
    var GridConfigComponent = (function () {
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
                var /** @type {?} */ grid = __assign({}, this.grid, this.gridFormGroup.value, { config: __assign({}, this.configFormGroup.value) });
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
                    margin: new forms.FormControl("10"),
                    outerMargin: new forms.FormControl(true),
                    outerMarginTop: new forms.FormControl("10"),
                    outerMarginRight: new forms.FormControl("10"),
                    outerMarginBottom: new forms.FormControl("10"),
                    outerMarginLeft: new forms.FormControl("10"),
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
                        template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"100\" [formGroup]=\"gridFormGroup\">\n        <mat-form-field>\n            <input matInput placeholder=\"name\" formControlName=\"name\">\n        </mat-form-field>\n    </div>\n\n    <div  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <mat-form-field>\n                <mat-select placeholder=\"Grid Type\" formControlName=\"gridType\">\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-select placeholder=\"Compact Type\" formControlName=\"compactType\">\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-select placeholder=\"Display Grid\" formControlName=\"displayGrid\">\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <div>\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">enableEmptyCellDrag</mat-checkbox>\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\n            </div>\n            <div [formGroup]=\"configFormGroup.get('draggable')\">\n                <mat-checkbox formControlName=\"enabled\">enable draggable</mat-checkbox>\n            </div>\n            <div [formGroup]=\"configFormGroup.get('resizable')\">\n                <mat-checkbox formControlName=\"enabled\">enable resizable</mat-checkbox>\n            </div>\n        </div>\n        <!-- Margins -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h3 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647</h3>\n            <div fxFlex=\"100\">\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">outerMargin</mat-checkbox>\n            </div>\n            <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"margin\" formControlName=\"margin\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginTop\" formControlName=\"outerMarginTop\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginRight\" formControlName=\"outerMarginRight\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginBottom\" formControlName=\"outerMarginBottom\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginLeft\" formControlName=\"outerMarginLeft\" />\n                </mat-form-field>\n            </div>\n        </div>\n\n        <!-- Grid Size -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h3 fxFlex=\"100\">\u06AF\u0631\u06CC\u062F</h3>\n            <mat-form-field fxFlex>\n                <input matInput type=\"number\" placeholder=\"minCols\" formControlName=\"minCols\" />\n            </mat-form-field>\n            <mat-form-field fxFlex>\n                <input matInput type=\"number\" placeholder=\"maxCols\" formControlName=\"maxCols\" />\n            </mat-form-field>\n        </div>\n        <button fxFlex=\"100\" color=\"primary\" mat-raised-button (click)=\"save()\">Save</button>\n    </div>\n</div>"
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
     * @suppress {checkTypes} checked by tsc
     */
    var GridComponent = (function () {
        function GridComponent(store, service, configurationService, bottomSheet) {
            this.store = store;
            this.service = service;
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
            this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
            this.havePermission$ = this.store.select(frontendAuthentication.getFrontendAuthenticationState);
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
         * @param {?} e
         * @return {?}
         */
        GridComponent.prototype.addItem = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
                var /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                    data: {
                        type: item.type
                    }
                });
                bs.afterDismissed().subscribe(function (data) {
                    item.config = bs.instance.config;
                    item["valid"] = bs.instance.valid;
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
                var /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
                    data: {
                        type: item.type
                    }
                });
                bs.afterDismissed().subscribe(function (data) {
                    item.config = bs.instance.config;
                    item["valid"] = bs.instance.valid;
                });
            };
        /**
         * @return {?}
         */
        GridComponent.prototype._get_grid_by_oid_and_update_component = /**
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
                        template: "<gridster [options]=\"options\">\n    <div class=\"actions\">\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"removeItem(item)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button *ngIf=\"item.type\" mat-icon-button (click)=\"showConfig(item)\">\n                    <mat-icon>settings</mat-icon>\n                </button>\n            </div>\n        </div>\n        <mat-form-field *ngIf=\"!item.valid\"  fxFlex=\"100\">\n            <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                    {{item}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <div *ngIf=\"item.valid\" [ngsDynamicGridItemView]=\"item\"></div>\n    </gridster-item>\n</gridster>",
                        styles: [":host{width:100%;height:100vh;display:block;direction:ltr}.initializer{padding:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}"]
                    },] },
        ];
        /** @nocollapse */
        GridComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: GridService },
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
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicGridItemViewDirective = (function () {
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
                if (!item["valid"])
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
                    var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
                    throw new Error("Trying to use an unsupported type (" + item.type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[item.type].viewComponent);
                this.component = this.container.createComponent(component);
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
     * @suppress {checkTypes} checked by tsc
     */
    var NgsGridModule = (function () {
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
    var NgsGridRootModule = (function () {
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
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1yb3V0aW5nLm1vZHVsZS50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogeyBba2V5OiBzdHJpbmddOiBJR3JpZFR5cGUgfTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogR3JpZE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRHcmlkTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKGdyaWRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFncmlkQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgZ3JpZENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkc3RlckNvbmZpZyB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRjb25maWc6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGl0ZW1zOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+W107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHR7XHJcblx0XHRcdF9pZCxcclxuXHRcdFx0b2lkLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHRjb25maWcsXHJcblx0XHRcdGl0ZW1zXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgb2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBjb25maWc/OiBHcmlkc3RlckNvbmZpZzsgaXRlbXM/OiBhbnlbXSB9ID0ge1xyXG5cdFx0XHRjb25maWc6IHt9LFxyXG5cdFx0XHRpdGVtczogW11cclxuXHRcdH1cclxuXHQpIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5vaWQgPSBvaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoZ3JpZCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKGdyaWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZEFjdGlvbnMgPSBHZXRHcmlkU3RhcnRBY3Rpb24gfCBHZXRHcmlkU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIFJlcGxheVN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anMtY29tcGF0L29wZXJhdG9yL3Rha2VXaGlsZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XHJcblx0dXNlcklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMudXNlcklkJCA9IHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKS5maWx0ZXIoKGkpID0+IGkgIT0gdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSksIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JpZHMoKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0KGdyaWQ6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KGdyaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigoZ3JpZHMpID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgoZ3JpZHMpID0+IGdyaWRzLmZpbmQoKGdyaWQpID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcCgoZ3JpZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKChGb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RCeU9pZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKGdyaWRzKSA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKGdyaWRzKSA9PiBncmlkcy5maW5kKChncmlkKSA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKGdyaWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoRm9ybVNjaGVtYU1vZGVsKSA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMsIEdldEdyaWRBY3Rpb25zLCBHZXRHcmlkU3VjY2VlZEFjdGlvbiwgR2V0R3JpZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRHcmlkQWN0aW9ucyxcclxuXHRVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRHcmlkRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldEdyaWRzQWN0aW9ucyxcclxuXHRHZXRHcmlkc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0R3JpZHNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRHcmlkcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gR3JpZHNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbR1JJRF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW0dSSURdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlR3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdyaWRzQWN0aW9ucyA9IFVwc2VydEdyaWRBY3Rpb24gfCBEZWxldGVHcmlkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRzQWN0aW9uVHlwZXMsIEdyaWRzQWN0aW9ucyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBHcmlkTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogR3JpZHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogR3JpZE1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBuZXdHcmlkcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0bmV3R3JpZHMuZm9yRWFjaCgobmV3R3JpZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRHcmlkSW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld0dyaWQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZEdyaWRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZEdyaWRJbmRleCwgMSwgbmV3R3JpZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3R3JpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JpZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShncmlkSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmlkcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuL3Jvb3QvZ3JpZHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBHcmlkU3RhdGUge1xyXG5cdGRiOiBmcm9tUm9vdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSZWR1Y2VyID0ge1xyXG5cdGRiOiBmcm9tUm9vdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRncmlkczogR3JpZFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQsIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWQ6IEdyaWRNb2RlbCkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oWyBncmlkIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZHM6IEdyaWRNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihncmlkcykpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0SW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdHlwZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmFsaWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS5jb25maWdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnIFt0eXBlXT1cImRhdGEudHlwZVwiPjwvZGl2PlxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QFZpZXdDaGlsZChEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlKSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLmNvbmZpZztcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi52YWxpZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIm5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgIGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ3JpZFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYWN0IFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbXBhY3RUeXBlXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiRGlzcGxheSBHcmlkXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGlzcGxheUdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaXNwbGF5R3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbERyYWdcIj5lbmFibGVFbXB0eUNlbGxEcmFnPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsQ2xpY2tcIj5lbmFibGVFbXB0eUNlbGxDbGljazwvbWF0LWNoZWNrYm94PiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdkcmFnZ2FibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+ZW5hYmxlIGRyYWdnYWJsZTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ3Jlc2l6YWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgcmVzaXphYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gTWFyZ2lucyAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOYwq3DmMKnw5jCtMObwozDmcKHPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luXCI+b3V0ZXJNYXJnaW48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFyZ2luXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblRvcFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luVG9wXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblJpZ2h0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5SaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5MZWZ0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5MZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIEdyaWQgU2l6ZSAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOawq/DmMKxw5vCjMOYwq88L2gzPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1pbkNvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW5Db2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtYXhDb2xzXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwic2F2ZSgpXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWdDb21wb25lbnQge1xyXG5cdGdyaWRUeXBlczogYW55W107XHJcblx0Y29tcGFjdFR5cGU6IGFueVtdO1xyXG5cdGRpc3BsYXlHcmlkVHlwZXM6IGFueVtdO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRvaWQ6IHN0cmluZztcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRncmlkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnkpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuZGF0YS5ncmlkO1xyXG5cdFx0dGhpcy5vaWQgPSB0aGlzLmRhdGEub2lkO1xyXG5cdFx0dGhpcy5faW5pdF9wcm9wZXJ0aWVzKCk7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1fZ3JvdXAoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IGdyaWQgPSB7XHJcblx0XHRcdC4uLnRoaXMuZ3JpZCxcclxuXHRcdFx0Li4udGhpcy5ncmlkRm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRjb25maWc6IHsgLi4udGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWUgfVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbihncmlkKSk7XHJcblx0fVxyXG5cdF9pbml0X2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRncmlkVHlwZTogbmV3IEZvcm1Db250cm9sKFwiZml0XCIpLFxyXG5cdFx0XHRjb21wYWN0VHlwZTogbmV3IEZvcm1Db250cm9sKFwibm9uZVwiKSxcclxuXHRcdFx0ZGlzcGxheUdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIm9uRHJhZyZSZXNpemVcIiksXHJcblx0XHRcdC8vIGVtcHR5IGNlbGxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsRHJhZzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDbGljazogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luUmlnaHQ6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdC8vIGdyaWQgc2l6ZVxyXG5cdFx0XHRtaW5Db2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdG1heENvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0ZHJhZ2dhYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRkZWxheVN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woMzMzKVxyXG5cdFx0XHRcdC8vIGlnbm9yZUNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIpXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRyZXNpemFibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRvaWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLm9pZCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQpO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQuY29uZmlnKTtcclxuXHR9XHJcblx0X2luaXRfcHJvcGVydGllcygpIHtcclxuXHRcdHRoaXMuZ3JpZFR5cGVzID0gWyBcImZpdFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcImZpeGVkXCIsIFwidmVydGljYWxGaXhlZFwiLCBcImhvcml6b250YWxGaXhlZFwiIF07XHJcblx0XHR0aGlzLmNvbXBhY3RUeXBlID0gWyBcIm5vbmVcIiwgXCJjb21wYWN0VXBcIiwgXCJjb21wYWN0TGVmdFwiLCBcImNvbXBhY3RVcCZMZWZ0XCIsIFwiY29tcGFjdExlZnQmVXBcIiBdO1xyXG5cdFx0dGhpcy5kaXNwbGF5R3JpZFR5cGVzID0gWyBcImFsd2F5c1wiLCBcIm9uRHJhZyZSZXNpemVcIiwgXCJub25lXCIgXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cImFkZEl0ZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwib3BlbkNvbmZpZygkZXZlbnQpXCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGFzaGJvYXJkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwic2F2ZUNvbmZpZygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kb25lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGdyaWRzdGVyLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWQuaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIml0ZW0udHlwZVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiAgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwYWRkaW5nOjI1cHh9LmFjdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI1cHg7cmlnaHQ6MjVweDt6LWluZGV4OjV9LmFjdGlvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtQ2hhbmdlKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbUNoYW5nZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbVJlc2l6ZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1SZXNpemVkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLml0ZW1zID0gWyB7IGNvbHM6IDIsIHJvd3M6IDEsIHk6IDAsIHg6IDAgfSwgeyBjb2xzOiAyLCByb3dzOiAyLCB5OiAwLCB4OiAyIH0gXTtcclxuXHJcblx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKHtcclxuXHRcdFx0b2lkOiB0aGlzLm9pZCxcclxuXHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKTtcclxuXHR9XHJcblxyXG5cdF9pbml0Q2FsbGJhY2soaXRlbSkge1xyXG5cdFx0dGhpcy5pbml0Q2FsbGJhY2suZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaXRlbSkge1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnNwbGljZSh0aGlzLmdyaWQuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRPRE86IFxyXG5cdFx0ICogw5jCp8OYwq3DmMKyw5jCp8OYwrEgw5nCh8OZwojDm8KMw5jCqiDDmMKvw5jCsSDDmMKzw5nChcOYwqogw5nChsOZwojDmMKvIMOYwqfDmMKqw5jCrcOYwqfDmcKFIMOYwrTDmcKIw5jCr1xyXG5cdFx0KiDDmsKpw5jCp8OZwobDmcKBw5vCjMOawq8gw5jCqMOYwrHDmMKnw5vCjCDDmsKvw5jCscOZwoHDmMKqw5nChiDDmMK0w5nChsOYwqfDmMKzw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0SW5qZWN0LFxyXG5cdFZpZXdDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcIm5nc0R5bmFtaWNHcmlkSXRlbVZpZXdcIilcclxuXHRzZXQgaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAoIWl0ZW0pIHJldHVybjtcclxuXHRcdGlmICghaXRlbS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW0pO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7aXRlbS50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdLnZpZXdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdE9iamVjdC5rZXlzKGl0ZW0uY29uZmlnIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2Vba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgR3JpZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ncmlkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdyaWRSZWR1Y2VyIH0gZnJvbSBcIi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L2dyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0R3JpZHN0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdEdyaWRDb21wb25lbnQsXHJcblx0XHRHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmVcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHcmlkQ29uZmlnQ29tcG9uZW50LCBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEdyaWRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogR3JpZE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc0dyaWRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSwgR3JpZFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzR3JpZE1vZHVsZSxcclxuXHRcdEdyaWRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImdyaWRzXCIsIEdyaWRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEdyaWREYkVmZmVjdHMsIEdldEdyaWRBcGlFZmZlY3RzLCBHZXRHcmlkc0FwaUVmZmVjdHMsIFVwc2VydEdyaWRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0dyaWRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiQ29tcG9uZW50IiwiUm91dGVyTW9kdWxlIiwiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIlN0b3JlIiwiVXBzZXJ0R3JpZEFwaU1vZGVsIiwiZmlsdGVyIiwidGFrZSIsImNvbWJpbmVMYXRlc3QiLCJzd2l0Y2hNYXAiLCJzdHJpbmdUZW1wbGF0ZSIsIm1hcCIsInRhcCIsIkh0dHBDbGllbnQiLCJVc2VyRmFjYWRlU2VydmljZSIsImNhdGNoRXJyb3IiLCJvZiIsIkFjdGlvbnMiLCJFZmZlY3QiLCJmcm9tUm9vdC5SZWR1Y2VyIiwicGx1Y2siLCJEaXJlY3RpdmUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiSW5wdXQiLCJNQVRfQk9UVE9NX1NIRUVUX0RBVEEiLCJWaWV3Q2hpbGQiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIkV2ZW50RW1pdHRlciIsImdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSIsIk1hdEJvdHRvbVNoZWV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0Qm90dG9tU2hlZXRNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJNYXRTbGlkZVRvZ2dsZU1vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiR3JpZHN0ZXJNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFvQmEscUJBQXFCLEdBQXFCO1FBQ3RELGVBQWUsRUFBRSx1QkFBdUI7UUFDeEMsY0FBYyxFQUFFLEVBQUU7UUFDbEIsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVixNQUFNLEVBQUUsZ0NBQWdDO1lBQ3hDLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsR0FBRyxFQUFFLDZDQUE2QztTQUNsRDtRQUNELEtBQUssRUFBRSxFQUFFO0tBQ1QsQ0FBQztBQUNGLHlCQUFhLG1CQUFtQixHQUFHLElBQUlBLGlCQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUNqQzNGOzs7O29CQUVDQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7cUJBQzNDOzs0QkFMRDs7Ozs7OztBQ0NBLElBR0EscUJBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFFLE1BQU07WUFDWixTQUFTLEVBQUUsYUFBYTtZQUN4QixRQUFRLEVBQUUsRUFBRTtTQUNaO0tBQ0QsQ0FBQztBQUVGLHlCQUFhLGlCQUFpQixHQUF3QkMsbUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOztJQ1puRjs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQVlPLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7UUFDdEQsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUE7QUFFRCx3QkFVMkIsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7QUFFRCx3QkFJMkIsV0FBVyxFQUFFLGFBQWE7UUFDakQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25JLENBQUM7QUFFRCxvQkFvRHVCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7OztBQzlIRDtRQWNDLGtDQUF5QyxVQUFVLEVBQVUsS0FBc0I7WUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7MkJBRHpFLElBQUlDLG9CQUFlLENBQUMscUJBQXFCLENBQUM7WUFFbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O1NBUWhDO1FBZEQsc0JBQUksNENBQU07OztnQkFBVjtnQkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEI7OztXQUFBOztvQkFMREMsYUFBVTs7Ozs7d0RBT0dDLFNBQU0sU0FBQyxtQkFBbUI7d0JBWi9CQyxRQUFLOzs7dUNBRmQ7Ozs7Ozs7QUNLQSxRQUFpQixrQkFBa0I7SUFBbkMsV0FBaUIsa0JBQWtCO1FBQ2xDLElBQUE7WUFFQyxpQkFBWSxTQUFtRDtnQkFBbkQsMEJBQUE7b0JBQUEsY0FBbUQ7O2dCQUEvRCxpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3RFOzs7O1lBRUQsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ2pCOzBCQWRIO1lBZUUsQ0FBQTtRQVRZLDBCQUFPO1FBV3BCLElBQUE7WUFFQzthQUFnQjsyQkFuQmxCO1lBb0JFLENBQUE7UUFIWSwyQkFBUTtPQVpMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFnQmxDOzs7Ozs7QUNsQkQsUUFBQTtRQU9DLG1CQUNDLEVBVUM7Z0JBVkQ7OztrQkFVQyxFQVRBLFlBQUcsRUFDSCxZQUFHLEVBQ0gsY0FBSSxFQUNKLGNBQUksRUFDSixrQkFBTSxFQUNOLGdCQUFLO1lBTU4sSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO3dCQTdCRjtRQThCQzs7Ozs7Ozs7Ozs7QUM5QkQsUUFFaUJDLG9CQUFrQjtJQUFuQyxXQUFpQkEscUJBQWtCO1FBQ2xDLElBQUE7WUFFQyxpQkFBWSxJQUFTO2dCQUFULHFCQUFBO29CQUFBLFNBQVM7O2dCQUNwQixTQUFTO2dCQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7Ozs7WUFFRCxnQ0FBYzs7O2dCQUFkO29CQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDakI7MEJBWkg7WUFhRSxDQUFBO1FBVllBLDZCQUFPO1FBWXBCLElBQUE7WUFFQzthQUFnQjsyQkFqQmxCO1lBa0JFLENBQUE7UUFIWUEsOEJBQVE7T0FiTEEsb0JBQWtCLEtBQWxCQSxvQkFBa0IsUUFpQmxDOzs7Ozs7SUNSRCxJQUFBO1FBRUMsNEJBQW1CLE9BQWU7WUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROztTQUFJO2lDQWJ2QztRQWNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw4QkFBbUIsT0FBa0I7WUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVzs7U0FBSTttQ0FqQjFDO1FBa0JDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBWTtZQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O1NBQUk7a0NBckJwQztRQXNCQyxDQUFBOzs7Ozs7O1FDQUEscUJBQ1MsTUFDQSxPQUNBLG1CQUNBO1lBSEEsU0FBSSxHQUFKLElBQUk7WUFDSixVQUFLLEdBQUwsS0FBSztZQUNMLHNCQUFpQixHQUFqQixpQkFBaUI7WUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtZQUU1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLElBQUksU0FBUyxHQUFBLENBQUMsQ0FBQztTQUNyRjs7Ozs7UUFFRCx5QkFBRzs7OztZQUFILFVBQUksR0FBVztnQkFBZixpQkFlQztnQkFkQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1Q0MsZ0JBQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBQSxDQUFDLEVBQy9DQyxjQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1BDLHVCQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUMzQkMsbUJBQVMsQ0FBQyxVQUFDLEVBQWtCO3dCQUFsQixrQkFBa0IsRUFBaEIsY0FBTSxFQUFFLGNBQU07b0JBQzFCLFNBQVM7b0JBQ1QsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ0MscUJBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBRTt3QkFDbkUsTUFBTSxFQUFFOzRCQUNQLE1BQU0sRUFBRSxNQUFNO3lCQUNkO3FCQUNELENBQUMsQ0FBQztpQkFDSCxDQUFDLEVBQ0ZDLGFBQUcsQ0FBQyxVQUFDLFFBQXFDLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FDL0QsQ0FBQzthQUNGOzs7O1FBRUQsOEJBQVE7OztZQUFSO2dCQUFBLGlCQU1DO2dCQUxBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDTCxnQkFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxHQUFBLENBQUMsRUFDL0NHLG1CQUFTLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsRUFDM0RFLGFBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FDN0QsQ0FBQzthQUNGOzs7OztRQUNELDRCQUFNOzs7O1lBQU4sVUFBTyxJQUFnQztnQkFBdkMsaUJBZUM7Z0JBZEEscUJBQU0sS0FBSyxHQUFHLElBQUlOLG9CQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUNDLGdCQUFNLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLEdBQUEsQ0FBQyxFQUNqREMsY0FBSSxDQUFDLENBQUMsQ0FBQyxFQUNQQyx1QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDM0JDLG1CQUFTLENBQUMsVUFBQyxFQUFrQjt3QkFBbEIsa0JBQWtCLEVBQWhCLGNBQU0sRUFBRSxjQUFNO29CQUMxQixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRTt3QkFDdEUsTUFBTSxFQUFFOzRCQUNQLE1BQU0sRUFBRSxNQUFNO3lCQUNkO3FCQUNELENBQUMsQ0FBQztpQkFDSCxDQUFDLEVBQ0ZFLGFBQUcsQ0FBQyxVQUFDLFFBQXFDLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FDL0QsQ0FBQzthQUNGOzs7Ozs7Ozs7O1FBTUQsZ0NBQVU7Ozs7WUFBVixVQUFXLEdBQVc7Z0JBQXRCLGlCQWVDO2dCQWRBLHFCQUFNLE9BQU8sR0FBRyxJQUFJVixvQkFBZSxDQUFZLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsS0FBSztxQkFDUixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUEsQ0FBQztxQkFDdEMsSUFBSSxDQUNKSyxnQkFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxJQUFJLElBQUksR0FBQSxDQUFDLEVBQ2hDSyxhQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUEsQ0FBQyxHQUFBLENBQUMsRUFDckRDLGFBQUcsQ0FBQyxVQUFDLElBQUk7b0JBQ1IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO3dCQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2pEO2lCQUNELENBQUMsQ0FDRjtxQkFDQSxTQUFTLENBQUMsVUFBQyxlQUFlLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDOUI7Ozs7O1FBQ0QsaUNBQVc7Ozs7WUFBWCxVQUFZLEdBQVc7Z0JBQXZCLGlCQWVDO2dCQWRBLHFCQUFNLE9BQU8sR0FBRyxJQUFJWCxvQkFBZSxDQUFZLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsS0FBSztxQkFDUixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUEsQ0FBQztxQkFDdEMsSUFBSSxDQUNKSyxnQkFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxJQUFJLElBQUksR0FBQSxDQUFDLEVBQ2hDSyxhQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUEsQ0FBQyxHQUFBLENBQUMsRUFDckRDLGFBQUcsQ0FBQyxVQUFDLElBQUk7b0JBQ1IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO3dCQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQ2pEO2lCQUNELENBQUMsQ0FDRjtxQkFDQSxTQUFTLENBQUMsVUFBQyxlQUFlLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDOUI7O29CQTFGRFYsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7d0JBZlFXLGFBQVU7d0JBRFZULFFBQUs7d0JBSUxVLG9CQUFpQjt3QkFHakIsd0JBQXdCOzs7OzBCQVZqQzs7Ozs7Ozs7UUNXQywyQkFBb0IsUUFBaUMsRUFBVSxPQUFvQjtZQUFuRixpQkFBdUY7WUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhOzBCQUcxRSxJQUFJLENBQUMsUUFBUTtpQkFDcEIsTUFBTSwwQ0FBNkI7aUJBQ25DLElBQUksQ0FDSkgsYUFBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQy9CRixtQkFBUyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQyxFQUNqREUsYUFBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQzNDSSxvQkFBVSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUFDLE9BQUUsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUNyRDtTQVZxRjs7b0JBRnZGZCxhQUFVOzs7Ozt3QkFQRmUsZUFBTzt3QkFJUCxXQUFXOzs7O1lBT2xCQyxjQUFNLEVBQUU7OztnQ0FiVjs7Ozs7OztJQ1dBLElBQUE7UUFFQywrQkFBbUIsT0FBa0I7WUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVzs7U0FBSTtvQ0FiMUM7UUFjQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsaUNBQW1CLE9BQWtCO1lBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7O1NBQUk7c0NBakIxQztRQWtCQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsZ0NBQW1CLE9BQVk7WUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLOztTQUFJO3FDQXJCcEM7UUFzQkMsQ0FBQTs7Ozs7OztRQ05BLDhCQUFvQixRQUFvQyxFQUFVLE9BQW9CO1lBQXRGLGlCQUEwRjtZQUF0RSxhQUFRLEdBQVIsUUFBUSxDQUE0QjtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7MEJBRzdFLElBQUksQ0FBQyxRQUFRO2lCQUNwQixNQUFNLG9EQUFnQztpQkFDdEMsSUFBSSxDQUNKUCxhQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDL0JGLG1CQUFTLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBQSxDQUFDLEVBQ3BERSxhQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxJQUFJLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFDOUNJLG9CQUFVLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQUMsT0FBRSxDQUFDLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQ3hEO1NBVndGOztvQkFGMUZkLGFBQVU7Ozs7O3dCQVpGZSxlQUFPO3dCQUdQLFdBQVc7Ozs7WUFhbEJDLGNBQU0sRUFBRTs7O21DQWxCVjs7Ozs7OztJQ2NBLElBQUE7UUFFQywrQkFBbUIsT0FBb0I7WUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTs7U0FBSTtvQ0FoQjVDO1FBaUJDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw4QkFBbUIsT0FBWTtZQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O1NBQUk7bUNBcEJwQztRQXFCQyxDQUFBOzs7Ozs7O1FDTEEsNEJBQW9CLFFBQWtDLEVBQVUsT0FBb0I7WUFBcEYsaUJBQXdGO1lBQXBFLGFBQVEsR0FBUixRQUFRLENBQTBCO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTswQkFHM0UsSUFBSSxDQUFDLFFBQVE7aUJBQ3BCLE1BQU0sZ0RBQThCO2lCQUNwQyxJQUFJLENBQ0pULG1CQUFTLENBQUM7Z0JBQ1QsT0FBQSxLQUFJLENBQUMsT0FBTztxQkFDVixRQUFRLEVBQUU7cUJBQ1YsSUFBSSxDQUNKRSxhQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxJQUFJLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFDNUNJLG9CQUFVLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQUMsT0FBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQ3REO2FBQUEsQ0FDRixDQUNEO1NBZHNGOztvQkFGeEZkLGFBQVU7Ozs7O3dCQVpGZSxlQUFPO3dCQUlQLFdBQVc7Ozs7WUFZbEJDLGNBQU0sRUFBRTs7O2lDQWxCVjs7Ozs7Ozs7O2dCQ0tVLG1CQUFtQjtnQkFDbkIsbUJBQW1COztJQUc3QixJQUFBO1FBRUMsMEJBQW1CLE9BQW9CO1lBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7d0JBRHZCLGdCQUFnQixDQUFDLE1BQU07U0FDSTsrQkFYNUM7UUFZQyxDQUFBOzs7Ozs7YUNKTSxFQUFFO0lBRFQscUJBQU0sWUFBWSxHQUFVO1FBQzNCLElBQUksSUFBSTtLQUNSLENBQUM7Ozs7OztBQUVGLHFCQUF3QixLQUFvQixFQUFFLE1BQW9CO1FBQTFDLHNCQUFBO1lBQUEsb0JBQW9COztRQUMzQyxxQkFBSSxLQUFrQixDQUFDO1FBQ3ZCLFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDbEIsS0FBSyxnQkFBZ0IsQ0FBQyxNQUFNO2dCQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUIscUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBRWhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO29CQUN4QixxQkFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxHQUFBLENBQUMsQ0FBQztvQkFDdEUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzNDO3lCQUFNO3dCQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNELENBQUMsQ0FBQztnQkFFSCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtZQUVILEtBQUssZ0JBQWdCLENBQUMsTUFBTTtnQkFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdEMscUJBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUUzQixvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtZQUVIO2dCQUNDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRDs7Ozs7O0FDOUNELHlCQU9hLFdBQVcsR0FBRztRQUMxQixFQUFFLEVBQUVDLE9BQWdCO0tBQ3BCOzs7Ozs7O1FDSUEsdUJBQW9CLFFBQXNCO1lBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7MkJBR2hDLElBQUksQ0FBQyxRQUFRO2lCQUNyQixNQUFNLHNHQUFpRTtpQkFDdkUsSUFBSSxDQUFDQyxlQUFLLENBQUMsU0FBUyxDQUFDLEVBQUVULGFBQUcsQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksZ0JBQWdCLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxHQUFBLENBQUMsQ0FBQzsrQkFHcEUsSUFBSSxDQUFDLFFBQVE7aUJBQ3pCLE1BQU0sb0RBQWdDO2lCQUN0QyxJQUFJLENBQUNTLGVBQUssQ0FBQyxTQUFTLENBQUMsRUFBRVQsYUFBRyxDQUFDLFVBQUMsS0FBa0IsSUFBSyxPQUFBLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBVnBDOztvQkFGOUNULGFBQVU7Ozs7O3dCQVZGZSxlQUFPOzs7O1lBY2RDLGNBQU0sRUFBRTs7OztZQUtSQSxjQUFNLEVBQUU7Ozs0QkFwQlY7Ozs7Ozs7QUNBQTtRQStCQyx5Q0FDUyxzQkFDQSxVQUNBO1lBRkEseUJBQW9CLEdBQXBCLG9CQUFvQjtZQUNwQixhQUFRLEdBQVIsUUFBUTtZQUNSLGNBQVMsR0FBVCxTQUFTO1lBRWpCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUM3RTtRQW5CRCxzQkFDSSxpREFBSTs7OztnQkFEUixVQUNTLElBQVk7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJO29CQUFFLE9BQU87Z0JBQ2xCLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDs7O1dBQUE7UUFDRCxzQkFBSSxrREFBSzs7O2dCQUFUO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3JDOzs7V0FBQTtRQUNELHNCQUFJLG1EQUFNOzs7Z0JBQVY7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDdEM7OztXQUFBOzs7O1FBVUQsa0RBQVE7OztZQUFSLGVBQWE7Ozs7O1FBQ2Isd0ZBQThDOzs7O1lBQTlDLFVBQStDLElBQUk7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLHFCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCx3Q0FBc0MsSUFBSSx3Q0FDcEIsY0FBZ0IsQ0FDdEMsQ0FBQztpQkFDRjtnQkFDRCxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzVHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7O2FBRTNEOztvQkFwQ0RHLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsNEJBQTRCO3FCQUN0Qzs7Ozs7d0JBTFEsd0JBQXdCO3dCQVBoQ0MsMkJBQXdCO3dCQUN4QkMsbUJBQWdCOzs7OzJCQWFmQyxRQUFLOzs4Q0FsQlA7OztRQTREQyx3Q0FBa0QsSUFBUztZQUFULFNBQUksR0FBSixJQUFJLENBQUs7U0FBSTtRQUMvRCxzQkFBSSxrREFBTTs7O2dCQUFWO2dCQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzthQUNwQzs7O1dBQUE7UUFDRCxzQkFBSSxpREFBSzs7O2dCQUFUO2dCQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNuQzs7O1dBQUE7O29CQWJEekIsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxtRUFFVDtxQkFDRDs7Ozs7d0RBR2FJLFNBQU0sU0FBQ3NCLDhCQUFxQjs7Ozt1Q0FEeENDLFlBQVMsU0FBQywrQkFBK0I7OzZDQTNEM0M7Ozs7Ozs7O1FDb0dDLDZCQUFvQixLQUFzQixFQUF5QyxJQUFTO1lBQXhFLFVBQUssR0FBTCxLQUFLLENBQWlCO1lBQXlDLFNBQUksR0FBSixJQUFJLENBQUs7WUFDM0YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3hCOzs7O1FBQ0Qsa0NBQUk7OztZQUFKO2dCQUNDLHFCQUFNLElBQUksZ0JBQ04sSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssSUFDM0IsTUFBTSxlQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUN2QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNyRDs7OztRQUNELDhDQUFnQjs7O1lBQWhCO2dCQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSUMsZUFBUyxDQUFDO29CQUNwQyxRQUFRLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLFdBQVcsRUFBRSxJQUFJQSxpQkFBVyxDQUFDLE1BQU0sQ0FBQztvQkFDcEMsV0FBVyxFQUFFLElBQUlBLGlCQUFXLENBQUMsZUFBZSxDQUFDOztvQkFFN0MsbUJBQW1CLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQzFDLG9CQUFvQixFQUFFLElBQUlBLGlCQUFXLENBQUMsS0FBSyxDQUFDO29CQUM1QywwQkFBMEIsRUFBRSxJQUFJQSxpQkFBVyxDQUFDLEtBQUssQ0FBQzs7b0JBRWxELGdCQUFnQixFQUFFLElBQUlBLGlCQUFXLENBQUMsSUFBSSxDQUFDOztvQkFFdkMsTUFBTSxFQUFFLElBQUlBLGlCQUFXLENBQUMsSUFBSSxDQUFDO29CQUM3QixXQUFXLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ2xDLGNBQWMsRUFBRSxJQUFJQSxpQkFBVyxDQUFDLElBQUksQ0FBQztvQkFDckMsZ0JBQWdCLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZDLGlCQUFpQixFQUFFLElBQUlBLGlCQUFXLENBQUMsSUFBSSxDQUFDO29CQUN4QyxlQUFlLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxJQUFJLENBQUM7O29CQUV0QyxPQUFPLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE9BQU8sRUFBRSxJQUFJQSxpQkFBVyxDQUFDLENBQUMsQ0FBQzs7b0JBRTNCLFNBQVMsRUFBRSxJQUFJRCxlQUFTLENBQUM7d0JBQ3hCLE9BQU8sRUFBRSxJQUFJQyxpQkFBVyxFQUFFO3dCQUMxQixVQUFVLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxHQUFHLENBQUM7cUJBRWhDLENBQUM7b0JBQ0YsU0FBUyxFQUFFLElBQUlELGVBQVMsQ0FBQzt3QkFDeEIsT0FBTyxFQUFFLElBQUlDLGlCQUFXLEVBQUU7cUJBQzFCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSUQsZUFBUyxDQUFDO29CQUNsQyxHQUFHLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUM5QixJQUFJLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxFQUFFLENBQUM7aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEQ7Ozs7UUFDRCw4Q0FBZ0I7OztZQUFoQjtnQkFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztnQkFDOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFFLENBQUM7Z0JBQzlGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFFLENBQUM7YUFDOUQ7O29CQW5KRDdCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsK2xJQWdGSjtxQkFDTjs7Ozs7d0JBMUZRSyxRQUFLO3dEQW1HZ0NELFNBQU0sU0FBQ3NCLDhCQUFxQjs7O2tDQXBHMUU7Ozs7Ozs7O1FDdUVDLHVCQUNTLE9BQ0EsU0FDQSxzQkFDQTtZQUhBLFVBQUssR0FBTCxLQUFLO1lBQ0wsWUFBTyxHQUFQLE9BQU87WUFDUCx5QkFBb0IsR0FBcEIsb0JBQW9CO1lBQ3BCLGdCQUFXLEdBQVgsV0FBVzt3Q0FuQmEsSUFBSUksZUFBWSxFQUFFO3VDQUNuQixJQUFJQSxlQUFZLEVBQUU7b0NBQ3JCLElBQUlBLGVBQVksRUFBRTtzQ0FDaEIsSUFBSUEsZUFBWSxFQUFFO3NDQUNsQixJQUFJQSxlQUFZLEVBQUU7MkNBQ2IsSUFBSUEsZUFBWSxFQUFFO21DQUMxQixJQUFJQSxlQUFZLEVBQUU7Z0NBQ3JCLElBQUlBLGVBQVksRUFBRTt5QkFNbkMsS0FBSztZQVFaLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNDLHFEQUE4QixDQUFDLENBQUM7U0FDekU7Ozs7OztRQUVNLHdCQUFVOzs7OztZQUFqQixVQUFrQixJQUFJLEVBQUUsYUFBYTtnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ2hEOzs7Ozs7UUFFTSx3QkFBVTs7Ozs7WUFBakIsVUFBa0IsSUFBSSxFQUFFLGFBQWE7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNoRDs7OztRQUVELGdDQUFROzs7WUFBUjs7Z0JBR0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztvQkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO29CQUNiLE1BQU0sRUFBRSxFQUFFO2lCQUNWLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBQzthQUM3Qzs7Ozs7UUFFRCxxQ0FBYTs7OztZQUFiLFVBQWMsSUFBSTtnQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7Ozs7O1FBRUQsa0NBQVU7Ozs7WUFBVixVQUFXLElBQUk7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN6RDs7Ozs7UUFFRCwrQkFBTzs7OztZQUFQLFVBQVEsQ0FBQztnQkFDUixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksbUJBQUMsRUFBeUIsRUFBQyxDQUFDO2FBQ2hEOzs7Ozs7UUFDRCxzQ0FBYzs7Ozs7WUFBZCxVQUFlLEtBQWlCLEVBQUUsSUFBa0I7Z0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLG1CQUFDLElBQVcsRUFBQyxDQUFDO2FBQ2xDOzs7OztRQUNELGtDQUFVOzs7O1lBQVYsVUFBVyxDQUFDO2dCQUNYLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFDMUMsSUFBSSxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDZjtpQkFDRCxDQUFDLENBQUM7YUFDSDs7Ozs7UUFDRCxrQ0FBVTs7OztZQUFWLFVBQVcsQ0FBQztnQkFDWCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2dCQUM3QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7OztnQkFPbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxRDs7Ozs7UUFDRCwyQ0FBbUI7Ozs7WUFBbkIsVUFBb0IsSUFBeUI7Z0JBQzVDLHFCQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtvQkFDaEUsSUFBSSxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDZjtpQkFDRCxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ2pDLElBQUksWUFBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFDL0IsQ0FBQyxDQUFDO2FBQ0g7Ozs7O1FBQ0Qsa0NBQVU7Ozs7WUFBVixVQUFXLElBQXlCO2dCQUNuQyxxQkFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7b0JBQ2hFLElBQUksRUFBRTt3QkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7cUJBQ2Y7aUJBQ0QsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO29CQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNqQyxJQUFJLFlBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQy9CLENBQUMsQ0FBQzthQUNIOzs7O1FBQ0QsNkRBQXFDOzs7WUFBckM7Z0JBQUEsaUJBY0M7Z0JBYkEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQ3hCLGdCQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLElBQUksU0FBUyxHQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7b0JBQzFGLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixLQUFJLENBQUMsT0FBTyxnQkFBUSxLQUFJLENBQUMsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQzs7Ozs7O29CQU1uRCxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CO3dCQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7OztvQkFFMUcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O2lCQUVsQixDQUFDLENBQUM7YUFDSDs7b0JBM0pEUCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSx3L0NBZ0NDO3dCQUNYLE1BQU0sRUFBRSxDQUFDLGdMQUFnTCxDQUFDO3FCQUMxTDs7Ozs7d0JBcERRSyxRQUFLO3dCQVNMLFdBQVc7d0JBQ1gsd0JBQXdCO3dCQVJ4QjJCLHVCQUFjOzs7OzJDQW9EckJDLFNBQU07MENBQ05BLFNBQU07dUNBQ05BLFNBQU07eUNBQ05BLFNBQU07eUNBQ05BLFNBQU07OENBQ05BLFNBQU07c0NBQ05BLFNBQU07bUNBQ05BLFNBQU07MEJBRU5SLFFBQUs7OzRCQWpFUDs7Ozs7OztBQ0FBO1FBK0JDLHNDQUNTLHNCQUNBLFVBQ0E7WUFGQSx5QkFBb0IsR0FBcEIsb0JBQW9CO1lBQ3BCLGFBQVEsR0FBUixRQUFRO1lBQ1IsY0FBUyxHQUFULFNBQVM7WUFFakIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQzdFO1FBZEQsc0JBQ0ksOENBQUk7Ozs7Z0JBRFIsVUFDUyxJQUF5QjtnQkFDakMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFDbEIsSUFBSSxDQUFDLElBQUksU0FBTTtvQkFBRSxPQUFPO2dCQUN4QixJQUFJLENBQUMsOENBQThDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUQ7OztXQUFBOzs7O1FBVUQsK0NBQVE7OztZQUFSLGVBQWE7Ozs7O1FBQ2IscUZBQThDOzs7O1lBQTlDLFVBQStDLElBQXlCO2dCQUF4RSxpQkFjQztnQkFiQSxTQUFTO2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QyxxQkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZFLE1BQU0sSUFBSSxLQUFLLENBQ2Qsd0NBQXNDLElBQUksQ0FBQyxJQUFJLHdDQUN6QixjQUFnQixDQUN0QyxDQUFDO2lCQUNGO2dCQUNELHFCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQy9HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO29CQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNoRCxDQUFDLENBQUM7YUFDSDs7b0JBbENESCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtxQkFDcEM7Ozs7O3dCQU5RLHdCQUF3Qjt3QkFYaENDLDJCQUF3Qjt3QkFDeEJDLG1CQUFnQjs7OzsyQkFrQmZDLFFBQUssU0FBQyx3QkFBd0I7OzJDQXZCaEM7Ozs7Ozs7QUNBQTs7Ozs7OztRQWlGUSxxQkFBTzs7OztZQUFkLFVBQWUsTUFBeUI7Z0JBQ3ZDLE9BQU87b0JBQ04sUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLHdCQUF3QixFQUFFLFdBQVcsQ0FBRTtpQkFDeEcsQ0FBQzthQUNGOztvQkF6Q0RTLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZOzRCQUNabEMsbUJBQVk7NEJBQ1ptQywyQkFBa0I7NEJBQ2xCQywwQkFBaUI7NEJBQ2pCQyxzQkFBYTs0QkFDYkMsd0JBQWU7NEJBQ2ZDLHNCQUFhOzRCQUNiQyx3QkFBZTs0QkFDZkMsdUJBQWM7NEJBQ2RDLDJCQUFrQjs0QkFDbEJDLHNCQUFhOzRCQUNiQyw2QkFBb0I7NEJBQ3BCQyx1QkFBYzs0QkFDZEMsMkJBQWdCOzRCQUNoQkMsaUJBQVc7NEJBQ1hDLHlCQUFtQjs0QkFDbkJDLDZCQUFvQjs0QkFDcEJDLHlCQUFnQjs0QkFDaEJDLDBCQUFpQjs0QkFDakJDLHVCQUFjOzRCQUNkQywrQkFBYzt5QkFDZDt3QkFDRCxZQUFZLEVBQUU7NEJBQ2IsYUFBYTs0QkFDYixhQUFhOzRCQUNiLG1CQUFtQjs0QkFDbkIsK0JBQStCOzRCQUMvQiw4QkFBOEI7NEJBQzlCLDRCQUE0Qjt5QkFDNUI7d0JBQ0QsZUFBZSxFQUFFLENBQUUsbUJBQW1CLEVBQUUsOEJBQThCLENBQUU7d0JBQ3hFLE9BQU8sRUFBRSxDQUFFLGFBQWEsQ0FBRTtxQkFDMUI7OzRCQS9FRDs7Ozs7O29CQXlGQ3BCLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1IsYUFBYTs0QkFDYixpQkFBaUI7NEJBQ2pCcUIsY0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDOzRCQUM1Q0MscUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUUsQ0FBQzt5QkFDeEc7d0JBQ0QsT0FBTyxFQUFFLENBQUUsYUFBYSxDQUFFO3FCQUMxQjs7Z0NBakdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
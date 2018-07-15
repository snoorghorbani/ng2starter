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
        env: {
            production: false,
            frontend_server: ""
        },
        endpoints: {
            upsert: "/api/grid",
            find: "/api/grid",
            get: "/api/grid/${model._id}"
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
                    return _this.http
                        .get(shared.stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {
                        params: {
                            userId: userId
                        }
                    })
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
                    return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1yb3V0aW5nLm1vZHVsZS50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxuXHR0eXBlcz86IHsgW2tleTogc3RyaW5nXTogSUdyaWRUeXBlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEdyaWRNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvZ3JpZC8ke21vZGVsLl9pZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHcmlkTW9kdWxlQ29uZmlnPihcIkdyaWRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZC1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZ3JpZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2R1bGVDb25maWcsIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuLi9ncmlkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBHcmlkTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZ0ZpbGUpO1xyXG5cdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIHRoaXMuc3RvcmUuc2VsZWN0KGdldEdyaWRNb2R1bGVDb25maWcpLnN1YnNjcmliZSgoZ3JpZENvbmZpZykgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoIWdyaWRDb25maWcpIHtcclxuXHRcdC8vIFx0XHRyZXR1cm47XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCBncmlkQ29uZmlnLkNvbmZpZyk7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4vZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRHcmlkQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogUGFydGlhbDxVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdD4gPSB7fSkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdyaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWRzdGVyQ29uZmlnIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4vZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZE1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRvaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdGNvbmZpZzogR3JpZHN0ZXJDb25maWc7XHJcblx0aXRlbXM6IElHcmlkSXRlbU1vZGVsPGFueT5bXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRvaWQsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdHR5cGUsXHJcblx0XHRcdGNvbmZpZyxcclxuXHRcdFx0aXRlbXNcclxuXHRcdH06IHsgX2lkPzogc3RyaW5nOyBvaWQ/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmc7IHR5cGU/OiBzdHJpbmc7IGNvbmZpZz86IEdyaWRzdGVyQ29uZmlnOyBpdGVtcz86IGFueVtdIH0gPSB7XHJcblx0XHRcdGNvbmZpZzoge30sXHJcblx0XHRcdGl0ZW1zOiBbXVxyXG5cdFx0fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQ7XHJcblx0XHR0aGlzLm9pZCA9IG9pZDtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLml0ZW1zID0gaXRlbXM7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcihncmlkID0ge30pIHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoZ3JpZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdyaWQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkQWN0aW9ucyA9IEdldEdyaWRTdGFydEFjdGlvbiB8IEdldEdyaWRTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZEZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXJJZCQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkuZmlsdGVyKGkgPT4gaSAhPSB1bmRlZmluZWQpO1xyXG5cdH1cclxuXHJcblx0Z2V0KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmdldCAhPT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pLCB7XHJcblx0XHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRcdHVzZXJJZDogdXNlcklkXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQucGlwZShtYXAoKHJlc3BvbnNlOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEdyaWRzKCk6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLmZpbmQgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZmluZCkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRHcmlkc0FwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHR1cHNlcnQoZ3JpZDogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgVXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3QoZ3JpZCk7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChbIGNvbmZpZywgdXNlcklkIF0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHVzZXJJZDogdXNlcklkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcihncmlkcyA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoZ3JpZHMgPT4gZ3JpZHMuZmluZChncmlkID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcChncmlkID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShGb3JtU2NoZW1hTW9kZWwgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEJ5T2lkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZ3JpZHMgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKGdyaWRzID0+IGdyaWRzLmZpbmQoZ3JpZCA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoZ3JpZCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUywgR2V0R3JpZEFjdGlvbnMsIEdldEdyaWRTdWNjZWVkQWN0aW9uLCBHZXRHcmlkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0R3JpZEFjdGlvbnMgPSBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfCBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiB8IFVwc2VydEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydEdyaWRBY3Rpb25zLFxyXG5cdFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydEdyaWRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRzQWN0aW9ucyA9IEdldEdyaWRzU3RhcnRBY3Rpb24gfCBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkc0ZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9HUklEU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0R3JpZHNBY3Rpb25zLFxyXG5cdEdldEdyaWRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRHcmlkc0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEdyaWRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRzU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBHcmlkc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltHUklEXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbR1JJRF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR3JpZHNBY3Rpb25zID0gVXBzZXJ0R3JpZEFjdGlvbiB8IERlbGV0ZUdyaWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZHNBY3Rpb25UeXBlcywgR3JpZHNBY3Rpb25zIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IEdyaWRNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBHcmlkc0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBHcmlkTW9kZWxbXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld0dyaWRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0XHRuZXdHcmlkcy5mb3JFYWNoKChuZXdHcmlkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZEdyaWRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3R3JpZC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkR3JpZEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkR3JpZEluZGV4LCAxLCBuZXdHcmlkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdHcmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCBncmlkSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKGdyaWRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyaWRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4vcm9vdC9ncmlkcy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFJlZHVjZXIgPSB7XHJcblx0ZGI6IGZyb21Sb290LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdGdyaWRzOiBHcmlkU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRCwgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZDogR3JpZE1vZGVsKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihbIGdyaWQgXSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkczogR3JpZE1vZGVsW10pID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKGdyaWRzKSkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRJbmplY3RcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0eXBlKSByZXR1cm47XHJcblx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSk7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS52YWxpZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWc7XHJcblx0fVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBhbnk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcztcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLmNvbmZpZ0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWcgW3R5cGVdPVwiZGF0YS50eXBlXCI+PC9kaXY+XHJcblx0YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IHtcclxuXHRAVmlld0NoaWxkKER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUpIER5bmFtaWNXaWRnZXRSZWY6IER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmU7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHt9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYuY29uZmlnO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLnZhbGlkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiZ3JpZEZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAgZnhGbGV4PVwiMTAwXCIgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJncmlkVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhY3QgVHlwZVwiIGZvcm1Db250cm9sTmFtZT1cImNvbXBhY3RUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29tcGFjdFR5cGVcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJEaXNwbGF5IEdyaWRcIiBmb3JtQ29udHJvbE5hbWU9XCJkaXNwbGF5R3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlHcmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsRHJhZ1wiPmVuYWJsZUVtcHR5Q2VsbERyYWc8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxDbGlja1wiPmVuYWJsZUVtcHR5Q2VsbENsaWNrPC9tYXQtY2hlY2tib3g+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ2RyYWdnYWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgZHJhZ2dhYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPmVuYWJsZSByZXNpemFibGU8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBNYXJnaW5zIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDMgZnhGbGV4PVwiMTAwXCI+w5jCrcOYwqfDmMK0w5vCjMOZwoc8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmeEZsZXggZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5cIj5vdXRlck1hcmdpbjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJtYXJnaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luVG9wXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Ub3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luUmlnaHRcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpbkJvdHRvbVwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luQm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpbkxlZnRcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gR3JpZCBTaXplIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDMgZnhGbGV4PVwiMTAwXCI+w5rCr8OYwrHDm8KMw5jCrzwvaDM+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWluQ29sc1wiIGZvcm1Db250cm9sTmFtZT1cIm1pbkNvbHNcIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1heENvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtYXhDb2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIjEwMFwiIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Z3JpZFR5cGVzOiBhbnlbXTtcclxuXHRjb21wYWN0VHlwZTogYW55W107XHJcblx0ZGlzcGxheUdyaWRUeXBlczogYW55W107XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGdyaWRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueSkge1xyXG5cdFx0dGhpcy5ncmlkID0gdGhpcy5kYXRhLmdyaWQ7XHJcblx0XHR0aGlzLm9pZCA9IHRoaXMuZGF0YS5vaWQ7XHJcblx0XHR0aGlzLl9pbml0X3Byb3BlcnRpZXMoKTtcclxuXHRcdHRoaXMuX2luaXRfZm9ybV9ncm91cCgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3QgZ3JpZCA9IHtcclxuXHRcdFx0Li4udGhpcy5ncmlkLFxyXG5cdFx0XHQuLi50aGlzLmdyaWRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdGNvbmZpZzogeyAuLi50aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSB9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKGdyaWQpKTtcclxuXHR9XHJcblx0X2luaXRfZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGdyaWRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJmaXRcIiksXHJcblx0XHRcdGNvbXBhY3RUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJub25lXCIpLFxyXG5cdFx0XHRkaXNwbGF5R3JpZDogbmV3IEZvcm1Db250cm9sKFwib25EcmFnJlJlc2l6ZVwiKSxcclxuXHRcdFx0Ly8gZW1wdHkgY2VsbFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxEcmFnOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbENsaWNrOiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDb250ZXh0TWVudTogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0c2Nyb2xsVG9OZXdJdGVtczogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHQvLyBtYXJnaW5zXHJcblx0XHRcdG1hcmdpbjogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdG91dGVyTWFyZ2luVG9wOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5SaWdodDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luQm90dG9tOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5MZWZ0OiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0Ly8gZ3JpZCBzaXplXHJcblx0XHRcdG1pbkNvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0bWF4Q29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRkcmFnZ2FibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdGRlbGF5U3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgzMzMpXHJcblx0XHRcdFx0Ly8gaWdub3JlQ29udGVudDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIilcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlc2l6YWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG9pZDogbmV3IEZvcm1Db250cm9sKHRoaXMub2lkKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZCk7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZC5jb25maWcpO1xyXG5cdH1cclxuXHRfaW5pdF9wcm9wZXJ0aWVzKCkge1xyXG5cdFx0dGhpcy5ncmlkVHlwZXMgPSBbIFwiZml0XCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwiZml4ZWRcIiwgXCJ2ZXJ0aWNhbEZpeGVkXCIsIFwiaG9yaXpvbnRhbEZpeGVkXCIgXTtcclxuXHRcdHRoaXMuY29tcGFjdFR5cGUgPSBbIFwibm9uZVwiLCBcImNvbXBhY3RVcFwiLCBcImNvbXBhY3RMZWZ0XCIsIFwiY29tcGFjdFVwJkxlZnRcIiwgXCJjb21wYWN0TGVmdCZVcFwiIF07XHJcblx0XHR0aGlzLmRpc3BsYXlHcmlkVHlwZXMgPSBbIFwiYWx3YXlzXCIsIFwib25EcmFnJlJlc2l6ZVwiLCBcIm5vbmVcIiBdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcsIEdyaWRzdGVySXRlbSB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1ncmlkXCIsXHJcblx0dGVtcGxhdGU6IGA8Z3JpZHN0ZXIgW29wdGlvbnNdPVwib3B0aW9uc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwiYWRkSXRlbSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJvcGVuQ29uZmlnKCRldmVudClcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kYXNoYm9hcmQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJzYXZlQ29uZmlnKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRvbmU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Z3JpZHN0ZXItaXRlbSBbaXRlbV09XCJpdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZC5pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbml0aWFsaXplclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXRlbS50eXBlXCIgbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzaG93Q29uZmlnKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhaXRlbS52YWxpZFwiICBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIEl0ZW0gVHlwZVwiIFsobmdNb2RlbCldPVwiaXRlbS50eXBlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkSXRlbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWxpZFwiIFtuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XT1cIml0ZW1cIj48L2Rpdj5cclxuICAgIDwvZ3JpZHN0ZXItaXRlbT5cclxuPC9ncmlkc3Rlcj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO2hlaWdodDoxMDB2aDtkaXNwbGF5OmJsb2NrO2RpcmVjdGlvbjpsdHJ9LmluaXRpYWxpemVye3BhZGRpbmc6MjVweH0uYWN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MjVweDtyaWdodDoyNXB4O3otaW5kZXg6NX0uYWN0aW9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIGl0ZW1WYWxpZGF0ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVtb3ZlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtSW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVzaXplQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1DaGFuZ2VDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlc3Ryb3lDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBvaWQ6IHN0cmluZztcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0b3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdHJlYWR5ID0gZmFsc2U7XHJcblx0Z3JpZEl0ZW1UeXBlczogYW55W3N0cmluZ107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy5ncmlkSXRlbVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXMpO1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1DaGFuZ2UoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtQ2hhbmdlZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtUmVzaXplKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbVJlc2l6ZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuaXRlbXMgPSBbIHsgY29sczogMiwgcm93czogMSwgeTogMCwgeDogMCB9LCB7IGNvbHM6IDIsIHJvd3M6IDIsIHk6IDAsIHg6IDIgfSBdO1xyXG5cclxuXHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoe1xyXG5cdFx0XHRvaWQ6IHRoaXMub2lkLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpO1xyXG5cdH1cclxuXHJcblx0X2luaXRDYWxsYmFjayhpdGVtKSB7XHJcblx0XHR0aGlzLmluaXRDYWxsYmFjay5lbWl0KGl0ZW0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpdGVtKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMuc3BsaWNlKHRoaXMuZ3JpZC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKHt9IGFzIElHcmlkSXRlbU1vZGVsPGFueT4pO1xyXG5cdH1cclxuXHRlbXB0eUNlbGxDbGljayhldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImVtcHR5IGNlbGwgY2xpY2tcIiwgZXZlbnQsIGl0ZW0pO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goaXRlbSBhcyBhbnkpO1xyXG5cdH1cclxuXHRvcGVuQ29uZmlnKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3JpZENvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Z3JpZDogdGhpcy5ncmlkXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzYXZlQ29uZmlnKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVE9ETzogXHJcblx0XHQgKiDDmMKnw5jCrcOYwrLDmMKnw5jCsSDDmcKHw5nCiMObwozDmMKqIMOYwq/DmMKxIMOYwrPDmcKFw5jCqiDDmcKGw5nCiMOYwq8gw5jCp8OYwqrDmMKtw5jCp8OZwoUgw5jCtMOZwojDmMKvXHJcblx0XHQqIMOawqnDmMKnw5nChsOZwoHDm8KMw5rCryDDmMKow5jCscOYwqfDm8KMIMOawq/DmMKxw5nCgcOYwqrDmcKGIMOYwrTDmcKGw5jCp8OYwrPDmcKHIMOawqnDmMKnw5jCscOYwqjDmMKxXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbih0aGlzLmdyaWQpKTtcclxuXHR9XHJcblx0Z3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2hvd0NvbmZpZyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5ncmlkID0gZGF0YTtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLmRhdGEuY29uZmlnIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB7XHJcblx0XHRcdC8vIFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRJbmplY3QsXHJcblx0Vmlld0NoaWxkXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY0dyaWRJdGVtVmlld11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KFwibmdzRHluYW1pY0dyaWRJdGVtVmlld1wiKVxyXG5cdHNldCBpdGVtKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGlmICghaXRlbSkgcmV0dXJuO1xyXG5cdFx0aWYgKCFpdGVtLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUoaXRlbSk7XHJcblx0fVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBhbnk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcztcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W2l0ZW0udHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHtpdGVtLnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W2l0ZW0udHlwZV0udmlld0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0T2JqZWN0LmtleXMoaXRlbS5jb25maWcgfHwge30pLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZVtrZXldID0gaXRlbS5jb25maWdba2V5XTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ncmlkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHcmlkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2dyaWQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgR2V0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR3JpZFJlZHVjZXIgfSBmcm9tIFwiLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZERiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3QvZ3JpZHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC9ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7XHJcblx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHREeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnRcclxufSBmcm9tIFwiLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRHcmlkc3Rlck1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0R3JpZENvbXBvbmVudCxcclxuXHRcdEdyaWRDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZVxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEdyaWRDb25maWdDb21wb25lbnQsIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgR3JpZENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHcmlkTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzR3JpZFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBHcmlkU2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NHcmlkTW9kdWxlLFxyXG5cdFx0R3JpZFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZ3JpZHNcIiwgR3JpZFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgR3JpZERiRWZmZWN0cywgR2V0R3JpZEFwaUVmZmVjdHMsIEdldEdyaWRzQXBpRWZmZWN0cywgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzR3JpZE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkUm9vdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJVcHNlcnRHcmlkQXBpTW9kZWwiLCJmaWx0ZXIiLCJ0YWtlIiwiY29tYmluZUxhdGVzdCIsInN3aXRjaE1hcCIsInN0cmluZ1RlbXBsYXRlIiwibWFwIiwidGFwIiwiSHR0cENsaWVudCIsIlVzZXJGYWNhZGVTZXJ2aWNlIiwiY2F0Y2hFcnJvciIsIm9mIiwiQWN0aW9ucyIsIkVmZmVjdCIsImZyb21Sb290LlJlZHVjZXIiLCJwbHVjayIsIkRpcmVjdGl2ZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk1BVF9CT1RUT01fU0hFRVRfREFUQSIsIlZpZXdDaGlsZCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiRXZlbnRFbWl0dGVyIiwiZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIiwiTWF0Qm90dG9tU2hlZXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRCb3R0b21TaGVldE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJHcmlkc3Rlck1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQW9CYSxxQkFBcUIsR0FBcUI7UUFDdEQsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7WUFDakIsZUFBZSxFQUFFLEVBQUU7U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDVixNQUFNLEVBQUUsV0FBVztZQUNuQixJQUFJLEVBQUUsV0FBVztZQUNqQixHQUFHLEVBQUUsd0JBQXdCO1NBQzdCO1FBQ0QsS0FBSyxFQUFFLEVBQUU7S0FDVCxDQUFDO0FBRUYseUJBQWEsbUJBQW1CLEdBQUcsSUFBSUEsaUJBQWMsQ0FBbUIsa0JBQWtCLENBQUM7Ozs7OztBQ2pDM0Y7Ozs7b0JBRUNDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLGlDQUFpQztxQkFDM0M7OzRCQUxEOzs7Ozs7O0FDQ0EsSUFHQSxxQkFBTSxNQUFNLEdBQVc7UUFDdEI7WUFDQyxJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxhQUFhO1lBQ3hCLFFBQVEsRUFBRSxFQUFFO1NBQ1o7S0FDRCxDQUFDO0FBRUYseUJBQWEsaUJBQWlCLEdBQXdCQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7O0lDWm5GOzs7Ozs7Ozs7Ozs7OztBQWNBLElBWU8sSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztRQUN0RCxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssSUFBSSxD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
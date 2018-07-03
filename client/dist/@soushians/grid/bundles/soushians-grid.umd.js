(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('@ngrx/store'), require('rxjs/operators'), require('@angular/common/http'), require('@soushians/shared'), require('@ngrx/effects'), require('@angular/material'), require('@angular/forms'), require('@angular/common'), require('@angular/flex-layout'), require('angular-gridster2')) :
    typeof define === 'function' && define.amd ? define('@soushians/grid', ['exports', '@angular/core', '@angular/router', 'rxjs', '@ngrx/store', 'rxjs/operators', '@angular/common/http', '@soushians/shared', '@ngrx/effects', '@angular/material', '@angular/forms', '@angular/common', '@angular/flex-layout', 'angular-gridster2'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.grid = {}),global.ng.core,global.ng.router,global.rxjs,null,global.rxjs.operators,global.ng.common.http,null,null,global.ng.material,global.ng.forms,global.ng.common,global.ng['flex-layout'],null));
}(this, (function (exports,i0,router,rxjs,i2,operators,i1,shared,effects,material,forms,common,flexLayout,angularGridster2) { 'use strict';

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
        function GridService(http, store, configurationService) {
            this.http = http;
            this.store = store;
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.get !== ""; }), operators.take(1), operators.switchMap(function (config) { return _this.http.get(shared.stringTemplate(config.endpoints.get, { _id: _id })); }), operators.map(function (response) { return response.Result; }));
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
                return this.configurationService.config$.pipe(operators.filter(function (config) { return config.endpoints.upsert != ""; }), operators.take(1), operators.switchMap(function (config) { return _this.http.post(config.endpoints.upsert, model.getRequestBody()); }), operators.map(function (response) { return response.Result; }));
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
                { type: GridConfigurationService }
            ];
        };
        /** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(GridConfigurationService)); }, token: GridService, providedIn: "root" });
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
                    // enableEmptyCellClick: new FormControl(true),
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
         * @return {?}
         */
        GridComponent.prototype.addItem = /**
         * @return {?}
         */
            function () {
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
         * @return {?}
         */
        GridComponent.prototype.openConfig = /**
         * @return {?}
         */
            function () {
                this.bottomSheet.open(GridConfigComponent, {
                    data: {
                        grid: this.grid
                    }
                });
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
                        template: "<button mat-raised-button (click)=\"addItem()\">add</button>\n<button mat-raised-button (click)=\"openConfig()\">openConfig</button>\n\n<gridster [options]=\"options\">\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"removeItem(item)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button mat-icon-button (click)=\"showConfig(item)\">\n                    <mat-icon>settings</mat-icon>\n                </button>\n            </div>\n        </div>\n        <mat-form-field *ngIf=\"!item.valid\"  fxFlex=\"100\">\n            <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                    {{item}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <div *ngIf=\"item.valid\" [ngsDynamicGridItemView]=\"item\"></div>\n    </gridster-item>\n</gridster>",
                        styles: [":host{width:95vw;height:100vh;display:block;direction:ltr}.initializer{padding:25px}"]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQuY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3Jvb3Qvcm9vdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1yb3V0aW5nLm1vZHVsZS50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogeyBba2V5OiBzdHJpbmddOiBJR3JpZFR5cGUgfTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IHlbb3BbMF0gJiAyID8gXCJyZXR1cm5cIiA6IG9wWzBdID8gXCJ0aHJvd1wiIDogXCJuZXh0XCJdKSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFswLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogR3JpZE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRHcmlkTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKGdyaWRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFncmlkQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgZ3JpZENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkc3RlckNvbmZpZyB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRjb25maWc6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGl0ZW1zOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+W107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHR7XHJcblx0XHRcdF9pZCxcclxuXHRcdFx0b2lkLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHRjb25maWcsXHJcblx0XHRcdGl0ZW1zXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgb2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBjb25maWc/OiBHcmlkc3RlckNvbmZpZzsgaXRlbXM/OiBhbnlbXSB9ID0ge1xyXG5cdFx0XHRjb25maWc6IHt9LFxyXG5cdFx0XHRpdGVtczogW11cclxuXHRcdH1cclxuXHQpIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5vaWQgPSBvaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoZ3JpZCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKGdyaWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZEFjdGlvbnMgPSBHZXRHcmlkU3RhcnRBY3Rpb24gfCBHZXRHcmlkU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSkpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JpZHMoKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0KGdyaWQ6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KGdyaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy51cHNlcnQgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAucG9zdChjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSkpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdC8vIGRlbGV0ZShfaWQ6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdC8vIFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdC8vIFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0Ly8gfVxyXG5cdHNlbGVjdEJ5SWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKChncmlkcykgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKChncmlkcykgPT4gZ3JpZHMuZmluZCgoZ3JpZCkgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKChncmlkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKEZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG5cdHNlbGVjdEJ5T2lkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigoZ3JpZHMpID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgoZ3JpZHMpID0+IGdyaWRzLmZpbmQoKGdyaWQpID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcCgoZ3JpZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKChGb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUywgR2V0R3JpZEFjdGlvbnMsIEdldEdyaWRTdWNjZWVkQWN0aW9uLCBHZXRHcmlkRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS5nZXQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBzZXJ0R3JpZEFjdGlvbnMgPSBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfCBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiB8IFVwc2VydEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0VVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLFxyXG5cdFVwc2VydEdyaWRBY3Rpb25zLFxyXG5cdFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uLFxyXG5cdFVwc2VydEdyaWRGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPFVwc2VydEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UudXBzZXJ0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURTX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0ZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRzQWN0aW9ucyA9IEdldEdyaWRzU3RhcnRBY3Rpb24gfCBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkc0ZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdEdFVF9HUklEU19BQ1RJT05fVFlQRVMsXHJcblx0R2V0R3JpZHNBY3Rpb25zLFxyXG5cdEdldEdyaWRzU3VjY2VlZEFjdGlvbixcclxuXHRHZXRHcmlkc0ZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc0FwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8R2V0R3JpZHNBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHRcdFx0LmdldEdyaWRzKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAoKHJlcykgPT4gbmV3IEdldEdyaWRzU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZHNGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBHcmlkc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltHUklEXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbR1JJRF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR3JpZHNBY3Rpb25zID0gVXBzZXJ0R3JpZEFjdGlvbiB8IERlbGV0ZUdyaWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZHNBY3Rpb25UeXBlcywgR3JpZHNBY3Rpb25zIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IEdyaWRNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBHcmlkc0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBHcmlkTW9kZWxbXTtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGNvbnN0IG5ld0dyaWRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG5cdFx0XHRuZXdHcmlkcy5mb3JFYWNoKChuZXdHcmlkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZEdyaWRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gbmV3R3JpZC5faWQpO1xyXG5cdFx0XHRcdGlmIChleGlzdGVkR3JpZEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkR3JpZEluZGV4LCAxLCBuZXdHcmlkKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0X2RhdGEucHVzaChuZXdHcmlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU6XHJcblx0XHRcdF9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuZGF0YSk7XHJcblxyXG5cdFx0XHRjb25zdCBncmlkSW5kZXggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleCgodykgPT4gdy5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0X2RhdGEuc3BsaWNlKGdyaWRJbmRleCwgMSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdyaWRzID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSBcIi4vcm9vdC9ncmlkcy5yZWR1Y2Vyc1wiO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRTdGF0ZSB7XHJcblx0ZGI6IGZyb21Sb290LlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR3JpZFJlZHVjZXIgPSB7XHJcblx0ZGI6IGZyb21Sb290LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwU3RhdGUge1xyXG5cdGdyaWRzOiBHcmlkU3RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBY3Rpb24gfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURTX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZERiRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRCwgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZDogR3JpZE1vZGVsKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihbIGdyaWQgXSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0TWFueSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkczogR3JpZE1vZGVsW10pID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKGdyaWRzKSkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRJbmplY3RcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCB0eXBlKHR5cGU6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0eXBlKSByZXR1cm47XHJcblx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSk7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS52YWxpZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWc7XHJcblx0fVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBhbnk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcztcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUodHlwZSkge1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke3R5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdLmNvbmZpZ0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0Ly8gdGhpcy53aWRnZXQkLnN1YnNjcmliZSgodykgPT4gKHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLndpZGdldCA9IHcpKTtcclxuXHR9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWcgW3R5cGVdPVwiZGF0YS50eXBlXCI+PC9kaXY+XHJcblx0YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IHtcclxuXHRAVmlld0NoaWxkKER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUpIER5bmFtaWNXaWRnZXRSZWY6IER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmU7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHt9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYuY29uZmlnO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLnZhbGlkO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkc3RlckNvbmZpZyB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgW2Zvcm1Hcm91cF09XCJncmlkRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyaWQgVHlwZVwiIGZvcm1Db250cm9sTmFtZT1cImdyaWRUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFjdCBUeXBlXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFjdFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb21wYWN0VHlwZVwiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkRpc3BsYXkgR3JpZFwiIGZvcm1Db250cm9sTmFtZT1cImRpc3BsYXlHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheUdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxEcmFnXCI+ZW5hYmxlRW1wdHlDZWxsRHJhZzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbENsaWNrXCI+ZW5hYmxlRW1wdHlDZWxsQ2xpY2s8L21hdC1jaGVja2JveD4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgnZHJhZ2dhYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPmVuYWJsZSBkcmFnZ2FibGU8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdyZXNpemFibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+ZW5hYmxlIHJlc2l6YWJsZTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIE1hcmdpbnMgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoMyBmeEZsZXg9XCIxMDBcIj7DmMKtw5jCp8OYwrTDm8KMw5nChzwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblwiPm91dGVyTWFyZ2luPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIm1hcmdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Ub3BcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblRvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5SaWdodFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luUmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luQm90dG9tXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luTGVmdFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luTGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBHcmlkIFNpemUgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoMyBmeEZsZXg9XCIxMDBcIj7DmsKvw5jCscObwozDmMKvPC9oMz5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtaW5Db2xzXCIgZm9ybUNvbnRyb2xOYW1lPVwibWluQ29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWF4Q29sc1wiIGZvcm1Db250cm9sTmFtZT1cIm1heENvbHNcIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwiMTAwXCIgY29sb3I9XCJwcmltYXJ5XCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInNhdmUoKVwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlnQ29tcG9uZW50IHtcclxuXHRncmlkVHlwZXM6IGFueVtdO1xyXG5cdGNvbXBhY3RUeXBlOiBhbnlbXTtcclxuXHRkaXNwbGF5R3JpZFR5cGVzOiBhbnlbXTtcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Z3JpZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55KSB7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLmRhdGEuZ3JpZDtcclxuXHRcdHRoaXMub2lkID0gdGhpcy5kYXRhLm9pZDtcclxuXHRcdHRoaXMuX2luaXRfcHJvcGVydGllcygpO1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtX2dyb3VwKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBncmlkID0ge1xyXG5cdFx0XHQuLi50aGlzLmdyaWQsXHJcblx0XHRcdC4uLnRoaXMuZ3JpZEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Y29uZmlnOiB7IC4uLnRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlIH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24oZ3JpZCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Z3JpZFR5cGU6IG5ldyBGb3JtQ29udHJvbChcImZpdFwiKSxcclxuXHRcdFx0Y29tcGFjdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcIm5vbmVcIiksXHJcblx0XHRcdGRpc3BsYXlHcmlkOiBuZXcgRm9ybUNvbnRyb2woXCJvbkRyYWcmUmVzaXplXCIpLFxyXG5cdFx0XHQvLyBlbXB0eSBjZWxsXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbERyYWc6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gZW5hYmxlRW1wdHlDZWxsQ2xpY2s6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0c2Nyb2xsVG9OZXdJdGVtczogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHQvLyBtYXJnaW5zXHJcblx0XHRcdG1hcmdpbjogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdG91dGVyTWFyZ2luVG9wOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5SaWdodDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luQm90dG9tOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5MZWZ0OiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0Ly8gZ3JpZCBzaXplXHJcblx0XHRcdG1pbkNvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0bWF4Q29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRkcmFnZ2FibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdGRlbGF5U3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgzMzMpXHJcblx0XHRcdFx0Ly8gaWdub3JlQ29udGVudDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIilcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlc2l6YWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG9pZDogbmV3IEZvcm1Db250cm9sKHRoaXMub2lkKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZCk7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZC5jb25maWcpO1xyXG5cdH1cclxuXHRfaW5pdF9wcm9wZXJ0aWVzKCkge1xyXG5cdFx0dGhpcy5ncmlkVHlwZXMgPSBbIFwiZml0XCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwiZml4ZWRcIiwgXCJ2ZXJ0aWNhbEZpeGVkXCIsIFwiaG9yaXpvbnRhbEZpeGVkXCIgXTtcclxuXHRcdHRoaXMuY29tcGFjdFR5cGUgPSBbIFwibm9uZVwiLCBcImNvbXBhY3RVcFwiLCBcImNvbXBhY3RMZWZ0XCIsIFwiY29tcGFjdFVwJkxlZnRcIiwgXCJjb21wYWN0TGVmdCZVcFwiIF07XHJcblx0XHR0aGlzLmRpc3BsYXlHcmlkVHlwZXMgPSBbIFwiYWx3YXlzXCIsIFwib25EcmFnJlJlc2l6ZVwiLCBcIm5vbmVcIiBdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcsIEdyaWRzdGVySXRlbSB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1ncmlkXCIsXHJcblx0dGVtcGxhdGU6IGA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGRJdGVtKClcIj5hZGQ8L2J1dHRvbj5cclxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkNvbmZpZygpXCI+b3BlbkNvbmZpZzwvYnV0dG9uPlxyXG5cclxuPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxncmlkc3Rlci1pdGVtIFtpdGVtXT1cIml0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkLml0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluaXRpYWxpemVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmVJdGVtKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJzaG93Q29uZmlnKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhaXRlbS52YWxpZFwiICBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIEl0ZW0gVHlwZVwiIFsobmdNb2RlbCldPVwiaXRlbS50eXBlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkSXRlbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWxpZFwiIFtuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XT1cIml0ZW1cIj48L2Rpdj5cclxuICAgIDwvZ3JpZHN0ZXItaXRlbT5cclxuPC9ncmlkc3Rlcj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDo5NXZ3O2hlaWdodDoxMDB2aDtkaXNwbGF5OmJsb2NrO2RpcmVjdGlvbjpsdHJ9LmluaXRpYWxpemVye3BhZGRpbmc6MjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIGl0ZW1WYWxpZGF0ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVtb3ZlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtSW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVzaXplQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1DaGFuZ2VDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlc3Ryb3lDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBvaWQ6IHN0cmluZztcclxuXHRvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0cmVhZHkgPSBmYWxzZTtcclxuXHRncmlkSXRlbVR5cGVzOiBhbnlbc3RyaW5nXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge307XHJcblx0XHR0aGlzLmdyaWRJdGVtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbSgpIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKHt9IGFzIElHcmlkSXRlbU1vZGVsPGFueT4pO1xyXG5cdH1cclxuXHRlbXB0eUNlbGxDbGljayhldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImVtcHR5IGNlbGwgY2xpY2tcIiwgZXZlbnQsIGl0ZW0pO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goaXRlbSBhcyBhbnkpO1xyXG5cdH1cclxuXHRvcGVuQ29uZmlnKCkge1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2hvd0NvbmZpZyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5ncmlkID0gZGF0YTtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLmRhdGEuY29uZmlnIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB7XHJcblx0XHRcdC8vIFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRJbmplY3QsXHJcblx0Vmlld0NoaWxkXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbbmdzRHluYW1pY0dyaWRJdGVtVmlld11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KFwibmdzRHluYW1pY0dyaWRJdGVtVmlld1wiKVxyXG5cdHNldCBpdGVtKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGlmICghaXRlbSkgcmV0dXJuO1xyXG5cdFx0aWYgKCFpdGVtLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLl9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUoaXRlbSk7XHJcblx0fVxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0bWFwVHlwZVRvQ29tcG9uZW50OiBhbnk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5tYXBUeXBlVG9Db21wb25lbnQgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcztcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdF9yZXNvbHZlX2NvcnJlY3RfY29tcG9uZW50X2Jhc2Vfb25fd2lkZ2V0X3R5cGUoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W2l0ZW0udHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHtpdGVtLnR5cGV9KS5cclxuXHRcdCAgXHRcdCBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W2l0ZW0udHlwZV0udmlld0NvbXBvbmVudCk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0T2JqZWN0LmtleXMoaXRlbS5jb25maWcgfHwge30pLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZVtrZXldID0gaXRlbS5jb25maWdba2V5XTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9ncmlkLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBHcmlkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2dyaWQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgR2V0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR3JpZFJlZHVjZXIgfSBmcm9tIFwiLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZERiRWZmZWN0cyB9IGZyb20gXCIuL3Jvb3QvZ3JpZHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb290Q29tcG9uZW50IH0gZnJvbSBcIi4vcm9vdC9yb290LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC9ncmlkLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7XHJcblx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHREeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnRcclxufSBmcm9tIFwiLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXRCb3R0b21TaGVldE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRHcmlkc3Rlck1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0R3JpZENvbXBvbmVudCxcclxuXHRcdEdyaWRDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZVxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEdyaWRDb25maWdDb21wb25lbnQsIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgR3JpZENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHcmlkTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzR3JpZFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBHcmlkU2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NHcmlkTW9kdWxlLFxyXG5cdFx0R3JpZFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZ3JpZHNcIiwgR3JpZFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgR3JpZERiRWZmZWN0cywgR2V0R3JpZEFwaUVmZmVjdHMsIEdldEdyaWRzQXBpRWZmZWN0cywgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzR3JpZE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkUm9vdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJDb21wb25lbnQiLCJSb3V0ZXJNb2R1bGUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJVcHNlcnRHcmlkQXBpTW9kZWwiLCJmaWx0ZXIiLCJ0YWtlIiwic3dpdGNoTWFwIiwic3RyaW5nVGVtcGxhdGUiLCJtYXAiLCJ0YXAiLCJIdHRwQ2xpZW50IiwiY2F0Y2hFcnJvciIsIm9mIiwiQWN0aW9ucyIsIkVmZmVjdCIsImZyb21Sb290LlJlZHVjZXIiLCJwbHVjayIsIkRpcmVjdGl2ZSIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIlZpZXdDb250YWluZXJSZWYiLCJJbnB1dCIsIk1BVF9CT1RUT01fU0hFRVRfREFUQSIsIlZpZXdDaGlsZCIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiRXZlbnRFbWl0dGVyIiwiTWF0Qm90dG9tU2hlZXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXRCb3R0b21TaGVldE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJHcmlkc3Rlck1vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQW9CYSxxQkFBcUIsR0FBcUI7UUFD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
import { InjectionToken, Component, Inject, Injectable, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, NgModule, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, skipUntil, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getFrontendUser } from '@soushians/frontend-authentication';
import { UserFacadeService, getAccountInfo } from '@soushians/user';
import { stringTemplate } from '@soushians/shared';
import { __assign, __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatBottomSheetModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridsterModule } from 'angular-gridster2';

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
var MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.decorators = [
        { type: Component, args: [{
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
var GridRoutingModule = RouterModule.forChild(routes);

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
var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    var Request = /** @class */ (function () {
        function Request(grid) {
            if (grid === void 0) { grid = {}; }
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GridConfigurationService = /** @class */ (function () {
    function GridConfigurationService(configFile, store) {
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
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
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    GridConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GridConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), skipUntil(this.store.select(getFrontendUser)), switchMap(function (config) {
            return _this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {})
                .pipe(map(function (response) { return response.Result; }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.find != ""; }), switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.find); }), map(function (response) { return response.Result; }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.update_item != ""; }), switchMap(function (config) { return _this.http.patch(config.env.frontend_server + config.endpoints.update_item, item); }), map(function (response) { return response.Result; }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.update_item_access != ""; }), switchMap(function (config) {
            return _this.http.patch(config.env.frontend_server + config.endpoints.update_item_access, item);
        }), map(function (response) { return response.Result; }));
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {});
        }), map(function (response) { return response.Result; }));
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
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.grids.db.data; })
            .pipe(filter(function (grids) { return grids != null; }), map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), tap(function (grid) {
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
        var subject = new BehaviorSubject(undefined);
        this.store
            .select(function (state) { return state.grids.db.data; })
            .pipe(filter(function (grids) { return grids != null; }), map(function (grids) { return grids.find(function (grid) { return grid._id == _id; }); }), tap(function (grid) {
            if (grid == null) {
                _this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe(function (FormSchemaModel) { return subject.next(FormSchemaModel); });
        return subject.asObservable();
    };
    GridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    GridService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserFacadeService },
        { type: GridConfigurationService }
    ]; };
    /** @nocollapse */ GridService.ngInjectableDef = defineInjectable({ factory: function GridService_Factory() { return new GridService(inject(HttpClient), inject(Store), inject(UserFacadeService), inject(GridConfigurationService)); }, token: GridService, providedIn: "root" });
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.get(payload); }), map(function (res) { return new GetGridSucceedAction(res); }), catchError(function (err) { return of(new GetGridFailedAction(err)); }));
    }
    GetGridApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GetGridApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: GridService }
    ]; };
    __decorate([
        Effect(),
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (payload) { return _this.service.upsert(payload); }), map(function (res) { return new UpsertGridSucceedAction(res); }), catchError(function (err) { return of(new UpsertGridFailedAction(err)); }));
    }
    UpsertGridApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UpsertGridApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: GridService }
    ]; };
    __decorate([
        Effect(),
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
            .pipe(switchMap(function () {
            return _this.service
                .getGrids()
                .pipe(map(function (res) { return new GetGridsSucceedAction(res); }), catchError(function (err) { return of(new GetGridsFailedAction(err)); }));
        }));
    }
    GetGridsApiEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GetGridsApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: GridService }
    ]; };
    __decorate([
        Effect(),
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
    if (state === void 0) { state = initialState; }
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
            .pipe(pluck("payload"), map(function (grid) { return new UpsertGridAction([grid]); }));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map(function (grids) { return new UpsertGridAction(grids); }));
    }
    GridDbEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GridDbEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], GridDbEffects.prototype, "Upsert$", void 0);
    __decorate([
        Effect(),
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
         */
        function (type) {
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
         */
        function () {
            return this.component.instance.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicGridItremConfigDirective.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
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
        { type: Directive, args: [{
                    selector: "[ngsDynamicGridItemConfig]"
                },] },
    ];
    /** @nocollapse */
    DynamicGridItremConfigDirective.ctorParameters = function () { return [
        { type: GridConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicGridItremConfigDirective.propDecorators = {
        type: [{ type: Input }]
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
         */
        function () {
            return this.DynamicWidgetRef.config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicGridItemConfigComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.DynamicWidgetRef.valid;
        },
        enumerable: true,
        configurable: true
    });
    DynamicGridItemConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "\n\t<div ngsDynamicGridItemConfig [type]=\"data.type\"></div>\n\t"
                },] },
    ];
    /** @nocollapse */
    DynamicGridItemConfigComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    DynamicGridItemConfigComponent.propDecorators = {
        DynamicWidgetRef: [{ type: ViewChild, args: [DynamicGridItremConfigDirective,] }]
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
        this.configFormGroup = new FormGroup({
            gridType: new FormControl("fit"),
            compactType: new FormControl("none"),
            displayGrid: new FormControl("onDrag&Resize"),
            // empty cell
            enableEmptyCellDrag: new FormControl(true),
            enableEmptyCellClick: new FormControl(false),
            enableEmptyCellContextMenu: new FormControl(false),
            //
            scrollToNewItems: new FormControl(true),
            // margins
            margin: new FormControl(10),
            outerMargin: new FormControl(true),
            outerMarginTop: new FormControl(10),
            outerMarginRight: new FormControl(10),
            outerMarginBottom: new FormControl(10),
            outerMarginLeft: new FormControl(10),
            // grid size
            minCols: new FormControl(3),
            maxCols: new FormControl(3),
            //
            draggable: new FormGroup({
                enabled: new FormControl(),
                delayStart: new FormControl(333)
            }),
            resizable: new FormGroup({
                enabled: new FormControl()
            })
        });
        this.gridFormGroup = new FormGroup({
            oid: new FormControl(this.oid),
            name: new FormControl("")
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
        { type: Component, args: [{
                    template: "<h4> \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F</h4>\n<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n    <div fxFlex=\"100\" fxLayout=\"row wrap\" [formGroup]=\"gridFormGroup\">\n        <mat-form-field fxFlex=\"20\">\n            <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\n        </mat-form-field>\n    </div>\n    <div fxLayout=\"column wrap\" fxLayoutGap=\"15px\"  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\n        <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u06AF\u06CC\u0631\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"gridType\">\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0648\u0639 \u0641\u0634\u0631\u062F\u0647 \u0634\u062F\u0646 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u062F\u0631 \u0635\u0641\u062D\u0647\" formControlName=\"compactType\">\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field fxFlex=\"20\">\n                <mat-select placeholder=\"\u0646\u0634\u0627\u0646 \u062F\u0627\u062F\u0646 \u0633\u0644\u0648\u0644\u200C\u0647\u0627\u06CC \u06AF\u0631\u06CC\u062F\" formControlName=\"displayGrid\">\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <div fxFlex=\"20\">\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">\u0627\u06CC\u062C\u0627\u062F \u06AF\u0631\u06CC\u062F \u0628\u0627 \u062F\u0631\u06AF \u06A9\u0631\u062F\u0646</mat-checkbox>\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\n            </div>\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('draggable')\">\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n            <div fxFlex=\"20\" [formGroup]=\"configFormGroup.get('resizable')\">\n                <mat-checkbox formControlName=\"enabled\">\u0642\u0627\u0628\u0644\u06CC\u062A \u062A\u063A\u06CC\u06CC\u0631 \u0633\u0627\u06CC\u0632 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n        </div>\n        <!-- Margins -->\n        <div fxFlex=\"100\" fxLayout=\"column wrap\" fxLayoutGap=\"25px\">\n            <h4 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647:</h4>\n            <div fxFlex fxLayout=\"column\" fxLayoutGap=\"25px\">\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">\u0627\u0645\u06A9\u0627\u0646 \u062A\u0646\u0638\u06CC\u0645 \u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627</mat-checkbox>\n            </div>\n            <div fxFlex=\"100\"  fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0647\u0645\" formControlName=\"margin\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0631 \u0628\u0627\u0644\u0627 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginTop\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0631\u0627\u0633\u062A \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginRight\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u067E\u0627\u06CC\u06CC\u0646 \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginBottom\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"\u0641\u0627\u0635\u0644\u0647 \u06AF\u0631\u06CC\u062F\u0647\u0627 \u0627\u0632 \u0686\u067E \u062F\u0627\u0634\u0628\u0648\u0631\u062F\" formControlName=\"outerMarginLeft\" />\n                </mat-form-field>\n            </div>\n        </div>\n        <!-- Grid Size -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h4 fxFlex=\"100\">\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\u200C\u0647\u0627:</h4>\n            <mat-form-field fxFlex=\"18\">\n                <input matInput type=\"number\" placeholder=\"\u06A9\u0645\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"minCols\" />\n            </mat-form-field>\n            <mat-form-field fxFlex=\"18\">\n                <input matInput type=\"number\" placeholder=\"\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u062A\u0648\u0646\" formControlName=\"maxCols\" />\n            </mat-form-field>\n        </div> \n        <div fxFlex=\"20\" fxLayoutAlign=\"flex-end center\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n         <button color=\"primary\" mat-raised-button (click)=\"save()\">\u0630\u062E\u06CC\u0631\u0647</button>\n    </div>\n</div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    GridConfigComponent.ctorParameters = function () { return [
        { type: Store },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
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
        this.itemValidateCallback = new EventEmitter();
        this.itemRemovedCallback = new EventEmitter();
        this.itemInitCallback = new EventEmitter();
        this.itemResizeCallback = new EventEmitter();
        this.itemChangeCallback = new EventEmitter();
        this.gridSizeChangedCallback = new EventEmitter();
        this.destroyCallback = new EventEmitter();
        this.initCallback = new EventEmitter();
        this.ready = false;
        this.options = {};
        this.userFacadeService
            .getInfo()
            .pipe(filter(function (user) { return user.CurrentSession != undefined; }), map(function (user) { return user.CurrentSession.Username; }))
            .subscribe(function (username) {
            _this.username = username;
        });
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getAccountInfo).pipe(map(function (user) {
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
        this.service.selectById(this.oid).pipe(filter(function (data) { return data != undefined; })).subscribe(function (data) {
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
        { type: Component, args: [{
                    selector: "ngs-grid",
                    template: "<gridster [options]=\"options\">\n    <div class=\"actions\" >\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_horiz</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\n                        <mat-icon>edit</mat-icon>\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\n                    </button>\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\n                        <mat-icon>settings</mat-icon>\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\n                    </button> -->\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>\u062D\u0630\u0641</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"widget-content\">\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\n                <mat-form-field fxFlex=\"grow\">\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                            {{item}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\n        </div>\n    </gridster-item>\n</gridster>",
                    styles: [":host{width:100%;min-height:calc(100vh - 205px);display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                },] },
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: Store },
        { type: GridService },
        { type: UserFacadeService },
        { type: GridConfigurationService },
        { type: MatBottomSheet }
    ]; };
    GridComponent.propDecorators = {
        itemValidateCallback: [{ type: Output }],
        itemRemovedCallback: [{ type: Output }],
        itemInitCallback: [{ type: Output }],
        itemResizeCallback: [{ type: Output }],
        itemChangeCallback: [{ type: Output }],
        gridSizeChangedCallback: [{ type: Output }],
        destroyCallback: [{ type: Output }],
        initCallback: [{ type: Output }],
        oid: [{ type: Input }]
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
         */
        function (item) {
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
        { type: Directive, args: [{
                    selector: "[ngsDynamicGridItemView]"
                },] },
    ];
    /** @nocollapse */
    DynamicGridItemViewDirective.ctorParameters = function () { return [
        { type: GridConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicGridItemViewDirective.propDecorators = {
        item: [{ type: Input, args: ["ngsDynamicGridItemView",] }]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatBottomSheetModule,
                        MatRadioModule,
                        FlexLayoutModule,
                        MatMenuModule,
                        MatToolbarModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatSlideToggleModule,
                        MatDividerModule,
                        MatCheckboxModule,
                        MatTableModule,
                        GridsterModule
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
        { type: NgModule, args: [{
                    imports: [
                        NgsGridModule,
                        GridRoutingModule,
                        StoreModule.forFeature("grids", GridReducer),
                        EffectsModule.forFeature([GridDbEffects, GetGridApiEffects, GetGridsApiEffects, UpsertGridApiEffects])
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

export { GridModel, NgsGridModule, NgsGridRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, GridConfigComponent as ɵg, DynamicGridItemConfigComponent as ɵi, DynamicGridItremConfigDirective as ɵh, DynamicGridItemViewDirective as ɵj, GridRoutingModule as ɵk, GridReducer as ɵc, GridComponent as ɵb, GridDbEffects as ɵm, Reducer as ɵl, RootComponent as ɵa, GetGridApiEffects as ɵn, GetGridsApiEffects as ɵp, UpsertGridApiEffects as ɵr, GridConfigurationService as ɵf, GridService as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy9ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3Jvb3Qvd2lkZ2V0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9ncmlkcy5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9ncmlkcy5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkL2dyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRUeXBlIHtcclxuXHR1cHNlcnRDb21wb25ldD86IGFueTtcclxuXHRjb25maWdDb21wb25lbnQ/OiBhbnk7XHJcblx0dHlwZT86IFwic2ltcGxlXCIgfCBcImNvbXBsZXhcIjtcclxuXHR2aWV3Q29tcG9uZW50OiBhbnk7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRnZXQ6IHN0cmluZztcclxuXHRcdGZpbmQ6IHN0cmluZztcclxuXHRcdHVwc2VydDogc3RyaW5nO1xyXG5cdFx0dXBkYXRlX2l0ZW06IHN0cmluZztcclxuXHRcdHVwZGF0ZV9pdGVtX2FjY2Vzczogc3RyaW5nO1xyXG5cdH07XHJcblx0dHlwZXM/OiB7IFtrZXk6IHN0cmluZ106IElHcmlkVHlwZSB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiXCJcclxuXHR9LFxyXG5cdGVuZHBvaW50czoge1xyXG5cdFx0dXBzZXJ0OiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0ZmluZDogXCIvYXBpL2dyaWRcIixcclxuXHRcdGdldDogXCIvYXBpL2dyaWQvJHttb2RlbC5faWR9XCIsXHJcblx0XHR1cGRhdGVfaXRlbTogXCIvYXBpL2dyaWQvaXRlbVwiLFxyXG5cdFx0dXBkYXRlX2l0ZW1fYWNjZXNzOiBcIi9hcGkvZ3JpZC9pdGVtL2FjY2Vzc1wiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfQ09ORklHX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPEdyaWRNb2R1bGVDb25maWc+KFwiR3JpZE1vZHVsZUNvbmZpZ1wiKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1ncmlkLXJvb3RcIixcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3RDb21wb25lbnQge31cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZ3JpZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEdyaWRzdGVyQ29uZmlnIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4vZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZE1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRvaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0dHlwZTogc3RyaW5nO1xyXG5cdG93bmVyOiBzdHJpbmc7XHJcblx0Y29uZmlnOiBHcmlkc3RlckNvbmZpZztcclxuXHRpdGVtczogSUdyaWRJdGVtTW9kZWw8YW55PltdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdG9pZCxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0dHlwZSxcclxuXHRcdFx0Y29uZmlnLFxyXG5cdFx0XHRpdGVtc1xyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IG9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgY29uZmlnPzogR3JpZHN0ZXJDb25maWc7IGl0ZW1zPzogYW55W10gfSA9IHtcclxuXHRcdFx0Y29uZmlnOiB7fSxcclxuXHRcdFx0aXRlbXM6IFtdXHJcblx0XHR9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZDtcclxuXHRcdHRoaXMub2lkID0gb2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoZ3JpZCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKGdyaWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEdyaWRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0R3JpZE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChncmlkQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghZ3JpZENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGdyaWRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZEFjdGlvbnMgPSBHZXRHcmlkU3RhcnRBY3Rpb24gfCBHZXRHcmlkU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCwgc2tpcFdoaWxlLCBza2lwVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IGdldEZyb250ZW5kVXNlciB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRza2lwVW50aWwodGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRVc2VyKSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldCwgeyBfaWQgfSksIHt9KVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmlkcygpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBkYXRlX2l0ZW0oaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pik6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wYXRjaChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBkYXRlX2l0ZW0sIGl0ZW0pKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBkYXRlX2l0ZW1fYWNjZXNzKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy51cGRhdGVfaXRlbV9hY2Nlc3MgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucGF0Y2goY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwZGF0ZV9pdGVtX2FjY2VzcywgaXRlbSlcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0KGdyaWQ6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KGdyaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLnVwc2VydCwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwge30pO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZ3JpZHMgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKGdyaWRzID0+IGdyaWRzLmZpbmQoZ3JpZCA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoZ3JpZCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RCeU9pZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKGdyaWRzID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChncmlkcyA9PiBncmlkcy5maW5kKGdyaWQgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKGdyaWQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKEZvcm1TY2hlbWFNb2RlbCA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMsIEdldEdyaWRBY3Rpb25zLCBHZXRHcmlkU3VjY2VlZEFjdGlvbiwgR2V0R3JpZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRHcmlkQWN0aW9ucyxcclxuXHRVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRHcmlkRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldEdyaWRzQWN0aW9ucyxcclxuXHRHZXRHcmlkc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0R3JpZHNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRHcmlkcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBHcmlkc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltHUklEXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbR1JJRF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR3JpZHNBY3Rpb25zID0gVXBzZXJ0R3JpZEFjdGlvbiB8IERlbGV0ZUdyaWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkc0FjdGlvblR5cGVzLCBHcmlkc0FjdGlvbnMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogR3JpZE1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEdyaWRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IEdyaWRNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3QgbmV3R3JpZHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld0dyaWRzLmZvckVhY2gobmV3R3JpZCA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZEdyaWRJbmRleCA9IF9kYXRhLmZpbmRJbmRleCh3ID0+IHcuX2lkID09IG5ld0dyaWQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZEdyaWRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZEdyaWRJbmRleCwgMSwgbmV3R3JpZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3R3JpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JpZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgodyA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UoZ3JpZEluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3JpZHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L2dyaWRzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0Z3JpZHM6IEdyaWRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQsIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWQ6IEdyaWRNb2RlbCkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oWyBncmlkIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZHM6IEdyaWRNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihncmlkcykpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0SW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdHlwZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmFsaWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS5jb25maWdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnIFt0eXBlXT1cImRhdGEudHlwZVwiPjwvZGl2PlxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QFZpZXdDaGlsZChEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlKSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLmNvbmZpZztcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi52YWxpZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxoND4gw5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmMKvw5jCp8OYwrTDmMKow5nCiMOYwrHDmMKvPC9oND5cclxuPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW4gd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTVweFwiICBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOZwojDmMK5IMOZwoLDmMKxw5jCp8OYwrHDmsKvw5vCjMOYwrHDm8KMIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpyDDmMKvw5jCsSDDmMK1w5nCgcOYwq3DmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ3JpZFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjIwXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmcKIw5jCuSDDmcKBw5jCtMOYwrHDmMKvw5nChyDDmMK0w5jCr8OZwoYgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwq/DmMKxIMOYwrXDmcKBw5jCrcOZwodcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbXBhY3RUeXBlXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCIyMFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5jCtMOYwqfDmcKGIMOYwq/DmMKnw5jCr8OZwoYgw5jCs8OZwoTDmcKIw5nChMOiwoDCjMOZwofDmMKnw5vCjCDDmsKvw5jCscObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGlzcGxheUdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaXNwbGF5R3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsRHJhZ1wiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOawq/DmMKxw5vCjMOYwq8gw5jCqMOYwqcgw5jCr8OYwrHDmsKvIMOawqnDmMKxw5jCr8OZwoY8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxDbGlja1wiPmVuYWJsZUVtcHR5Q2VsbENsaWNrPC9tYXQtY2hlY2tib3g+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgnZHJhZ2dhYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPsOZwoLDmMKnw5jCqMOZwoTDm8KMw5jCqiDDmMKsw5jCp8OYwqjDmMKsw5jCp8ObwozDm8KMIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIyMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPsOZwoLDmMKnw5jCqMOZwoTDm8KMw5jCqiDDmMKqw5jCusObwozDm8KMw5jCsSDDmMKzw5jCp8ObwozDmMKyIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIE1hcmdpbnMgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoNCBmeEZsZXg9XCIxMDBcIj7DmMKtw5jCp8OYwrTDm8KMw5nChzo8L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmeEZsZXggZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5cIj7DmMKnw5nChcOawqnDmMKnw5nChiDDmMKqw5nChsOYwrjDm8KMw5nChSDDmcKBw5jCp8OYwrXDmcKEw5nChyDDmsKvw5jCscObwozDmMKvw5nCh8OYwqc8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIsOZwoHDmMKnw5jCtcOZwoTDmcKHIMOawq/DmMKxw5vCjMOYwq/DmcKHw5jCpyDDmMKnw5jCsiDDmcKHw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm1hcmdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKxIMOYwqjDmMKnw5nChMOYwqcgw5jCr8OYwqfDmMK0w5jCqMOZwojDmMKxw5jCr1wiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luVG9wXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLDmcKBw5jCp8OYwrXDmcKEw5nChyDDmsKvw5jCscObwozDmMKvw5nCh8OYwqcgw5jCp8OYwrIgw5jCscOYwqfDmMKzw5jCqiDDmMKvw5jCp8OYwrTDmMKow5nCiMOYwrHDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5SaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKyIMOZwr7DmMKnw5vCjMObwozDmcKGIMOYwq/DmMKnw5jCtMOYwqjDmcKIw5jCscOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5nCgcOYwqfDmMK1w5nChMOZwocgw5rCr8OYwrHDm8KMw5jCr8OZwofDmMKnIMOYwqfDmMKyIMOawobDmcK+IMOYwq/DmMKnw5jCtMOYwqjDmcKIw5jCscOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBHcmlkIFNpemUgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoNCBmeEZsZXg9XCIxMDBcIj7DmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCqsOZwojDmcKGw6LCgMKMw5nCh8OYwqc6PC9oND5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjE4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5rCqcOZwoXDmMKqw5jCscObwozDmcKGIMOYwrPDmMKqw5nCiMOZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW5Db2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjE4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiw5jCqMObwozDmMK0w5jCqsOYwrHDm8KMw5nChiDDmMKzw5jCqsOZwojDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMjBcIiBmeExheW91dEFsaWduPVwiZmxleC1lbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICA8YnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj7DmMKww5jCrsObwozDmMKxw5nChzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlnQ29tcG9uZW50IHtcclxuXHRncmlkVHlwZXM6IGFueVtdO1xyXG5cdGNvbXBhY3RUeXBlOiBhbnlbXTtcclxuXHRkaXNwbGF5R3JpZFR5cGVzOiBhbnlbXTtcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Z3JpZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55KSB7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLmRhdGEuZ3JpZDtcclxuXHRcdHRoaXMub2lkID0gdGhpcy5kYXRhLm9pZDtcclxuXHRcdHRoaXMuX2luaXRfcHJvcGVydGllcygpO1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtX2dyb3VwKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBncmlkID0ge1xyXG5cdFx0XHQuLi50aGlzLmdyaWQsXHJcblx0XHRcdC4uLnRoaXMuZ3JpZEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Y29uZmlnOiB7IC4uLnRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlIH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24oZ3JpZCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Z3JpZFR5cGU6IG5ldyBGb3JtQ29udHJvbChcImZpdFwiKSxcclxuXHRcdFx0Y29tcGFjdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcIm5vbmVcIiksXHJcblx0XHRcdGRpc3BsYXlHcmlkOiBuZXcgRm9ybUNvbnRyb2woXCJvbkRyYWcmUmVzaXplXCIpLFxyXG5cdFx0XHQvLyBlbXB0eSBjZWxsXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbERyYWc6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ2xpY2s6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbENvbnRleHRNZW51OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRzY3JvbGxUb05ld0l0ZW1zOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdC8vIG1hcmdpbnNcclxuXHRcdFx0bWFyZ2luOiBuZXcgRm9ybUNvbnRyb2woMTApLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5SaWdodDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5Cb3R0b206IG5ldyBGb3JtQ29udHJvbCgxMCksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKDEwKSxcclxuXHRcdFx0Ly8gZ3JpZCBzaXplXHJcblx0XHRcdG1pbkNvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0bWF4Q29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRkcmFnZ2FibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdGRlbGF5U3RhcnQ6IG5ldyBGb3JtQ29udHJvbCgzMzMpXHJcblx0XHRcdFx0Ly8gaWdub3JlQ29udGVudDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIilcclxuXHRcdFx0fSksXHJcblx0XHRcdHJlc2l6YWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdG9pZDogbmV3IEZvcm1Db250cm9sKHRoaXMub2lkKSxcclxuXHRcdFx0bmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZCk7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5wYXRjaFZhbHVlKHRoaXMuZ3JpZC5jb25maWcpO1xyXG5cdH1cclxuXHRfaW5pdF9wcm9wZXJ0aWVzKCkge1xyXG5cdFx0dGhpcy5ncmlkVHlwZXMgPSBbIFwiZml0XCIsIFwic2Nyb2xsVmVydGljYWxcIiwgXCJzY3JvbGxIb3Jpem9udGFsXCIsIFwiZml4ZWRcIiwgXCJ2ZXJ0aWNhbEZpeGVkXCIsIFwiaG9yaXpvbnRhbEZpeGVkXCIgXTtcclxuXHRcdHRoaXMuY29tcGFjdFR5cGUgPSBbIFwibm9uZVwiLCBcImNvbXBhY3RVcFwiLCBcImNvbXBhY3RMZWZ0XCIsIFwiY29tcGFjdFVwJkxlZnRcIiwgXCJjb21wYWN0TGVmdCZVcFwiIF07XHJcblx0XHR0aGlzLmRpc3BsYXlHcmlkVHlwZXMgPSBbIFwiYWx3YXlzXCIsIFwib25EcmFnJlJlc2l6ZVwiLCBcIm5vbmVcIiBdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkc3RlckNvbmZpZywgR3JpZHN0ZXJJdGVtIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tdmlldy5kaXJlY3RpdmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1ncmlkXCIsXHJcblx0dGVtcGxhdGU6IGA8Z3JpZHN0ZXIgW29wdGlvbnNdPVwib3B0aW9uc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiA+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cImFkZEl0ZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwib3BlbkNvbmZpZygkZXZlbnQpXCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGFzaGJvYXJkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwic2F2ZUNvbmZpZygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kb25lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGdyaWRzdGVyLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWQuaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+bW9yZV9ob3JpejwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIiBjbGFzcz1cInJ0bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCJncmlkLm93bmVyID09IHVzZXJuYW1lXCIgbGFiZWxQb3NpdGlvbj1cImJlZm9yZVwiIFtjaGVja2VkXT1cIml0ZW0uYWNjZXNzPT0ncHVibGljJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwibWFrZV9wdWJsaWMoaXRlbSwkZXZlbnQpXCI+w5jCucOZwoXDmcKIw5nChcObwow8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGxcIiAoY2xpY2spPVwiZ29Ub0VkaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPsOZwojDm8KMw5jCscOYwqfDm8KMw5jCtCDDmMKnw5nCgcOYwrLDmcKIw5nChsOZwoc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGxcIiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGxcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+w5jCrcOYwrDDmcKBPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXRlbS52YWxpZFwiIGZ4RmxleD1cIjEwMFwiIGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoND7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqPC9oND5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIEl0ZW0gVHlwZVwiIFsobmdNb2RlbCldPVwiaXRlbS50eXBlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRJdGVtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWxpZFwiICN0ZXN0IFtuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XT1cIml0ZW1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZ3JpZHN0ZXItaXRlbT5cclxuPC9ncmlkc3Rlcj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDIwNXB4KTtkaXNwbGF5OmJsb2NrO2RpcmVjdGlvbjpsdHJ9LmluaXRpYWxpemVye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTA7dG9wOjVweDtsZWZ0OjVweDtoZWlnaHQ6MjVweH0uYWN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MjVweDtyaWdodDoyNXB4O3otaW5kZXg6NX0uYWN0aW9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH0ud2lkZ2V0LWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LmZvcm0tY29udGFpbmVye3BhZGRpbmc6MjVweDt3aWR0aDoxMDAlfVtkaXI9cnRsXSAuZm9ybS1jb250YWluZXJ7ZGlyZWN0aW9uOnJ0bH0uZm9ybS1jb250YWluZXIgbWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX0ucnRse2RpcmVjdGlvbjpydGx9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0Ly8gd2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VybmFtZTogc3RyaW5nO1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZVxyXG5cdFx0XHQuZ2V0SW5mbygpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigodXNlcjogYW55KSA9PiB1c2VyLkN1cnJlbnRTZXNzaW9uICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0bWFwKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24uVXNlcm5hbWUpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSh1c2VybmFtZSA9PiB7XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IFsgdXNlciwgdXNlci5faWQsIHRoaXMuZ3JpZCwgdGhpcy5ncmlkLm93bmVyIF07XHJcblx0XHRcdFx0aWYgKGNyaXRlcmlhLnNvbWUoaSA9PiAhaSkpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHVzZXIuX2lkID09IHRoaXMuZ3JpZC5vd25lcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHRtYWtlX3B1YmxpYyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+LCBldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aXRlbS5hY2Nlc3MgPSBldmVudC5jaGVja2VkID8gXCJwdWJsaWNcIiA6IFwicHJpdmF0ZVwiO1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnVwZGF0ZV9pdGVtX2FjY2VzcyhpdGVtKS5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZEl0ZW0oZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVE9ETzpcclxuXHRcdCAqIMOYwqfDmMKtw5jCssOYwqfDmMKxIMOZwofDmcKIw5vCjMOYwqogw5jCr8OYwrEgw5jCs8OZwoXDmMKqIMOZwobDmcKIw5jCryDDmMKnw5jCqsOYwq3DmMKnw5nChSDDmMK0w5nCiMOYwq9cclxuXHRcdCogw5rCqcOYwqfDmcKGw5nCgcObwozDmsKvIMOYwqjDmMKxw5jCp8Obwowgw5rCr8OYwrHDmcKBw5jCqsOZwoYgw5jCtMOZwobDmMKnw5jCs8OZwocgw5rCqcOYwqfDmMKxw5jCqMOYwrFcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKHRoaXMuZ3JpZCkpO1xyXG5cdH1cclxuXHRncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2hvd0NvbmZpZyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcclxuXHQvLyBAVmlld0NoaWxkKFwiRGlhZ3JhbVZpZXdDb21wb25lbnRcIikgX25nc0R5bmFtaWNHcmlkSXRlbVZpZXc6IERpYWdyYW1WaWV3Q29tcG9uZW50O1xyXG5cdGdvVG9FZGl0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdC8vIHRoaXMuX25nc0R5bmFtaWNHcmlkSXRlbVZpZXc7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5ncmlkID0gZGF0YTtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGRhdGEuY29uZmlnLm91dGVyTWFyZ2luQm90dG9tID0gK2RhdGEuY29uZmlnLm91dGVyTWFyZ2luQm90dG9tO1xyXG5cdFx0XHRkYXRhLmNvbmZpZy5vdXRlck1hcmdpblJpZ2h0ID0gK2RhdGEuY29uZmlnLm91dGVyTWFyZ2luUmlnaHQ7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0SW5qZWN0LFxyXG5cdFZpZXdDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcIm5nc0R5bmFtaWNHcmlkSXRlbVZpZXdcIilcclxuXHRzZXQgaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAoIWl0ZW0pIHJldHVybjtcclxuXHRcdGlmICghaXRlbS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW0pO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7aXRlbS50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4oXHJcblx0XHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50W2l0ZW0udHlwZV0udmlld0NvbXBvbmVudFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG5cdFx0T2JqZWN0LmtleXMoaXRlbS5jb25maWcgfHwge30pLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZVtrZXldID0gaXRlbS5jb25maWdba2V5XTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgR3JpZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ncmlkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdyaWRSZWR1Y2VyIH0gZnJvbSBcIi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L2dyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRHcmlkc3Rlck1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRSb290Q29tcG9uZW50LFxyXG5cdFx0R3JpZENvbXBvbmVudCxcclxuXHRcdEdyaWRDb25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZVxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIEdyaWRDb25maWdDb21wb25lbnQsIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgR3JpZENvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHcmlkTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogTmdzR3JpZFJvb3RNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSwgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBHcmlkU2VydmljZSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NHcmlkTW9kdWxlLFxyXG5cdFx0R3JpZFJvdXRpbmdNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZ3JpZHNcIiwgR3JpZFJlZHVjZXIpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgR3JpZERiRWZmZWN0cywgR2V0R3JpZEFwaUVmZmVjdHMsIEdldEdyaWRzQXBpRWZmZWN0cywgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgXSlcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzR3JpZE1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NHcmlkUm9vdE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiZnJvbVJv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
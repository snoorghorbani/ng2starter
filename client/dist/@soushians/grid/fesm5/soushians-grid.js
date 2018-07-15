import { InjectionToken, Component, Inject, Injectable, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, NgModule, EventEmitter, Output, defineInjectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { __assign, __decorate, __metadata, __read } from 'tslib';
import { map, filter, tap, take, switchMap, combineLatest, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { UserFacadeService } from '@soushians/user';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatBottomSheetModule } from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getFrontendAuthenticationState } from '@soushians/frontend-authentication';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridsterModule } from 'angular-gridster2';

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
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ routes = [
    {
        path: "grid",
        component: RootComponent,
        children: []
    }
];
var /** @type {?} */ GridRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertGridApiModel$1;
(function (UpsertGridApiModel$$1) {
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */
var GridService = /** @class */ (function () {
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.get !== ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            debugger;
            return _this.http
                .get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id: _id }), {
                params: {
                    userId: userId
                }
            })
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.upsert != ""; }), take(1), combineLatest(this.userId$), switchMap(function (_a) {
            var _b = __read(_a, 2), config = _b[0], userId = _b[1];
            return _this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
                params: {
                    userId: userId
                }
            });
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
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
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
        var /** @type {?} */ subject = new BehaviorSubject(undefined);
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
    if (state === void 0) { state = initialState; }
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
 * @suppress {checkTypes} checked by tsc
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
            var /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error("Trying to use an unsupported type (" + type + ").\n\t\t  \t\t Supported types: " + supportedTypes);
        }
        var /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
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
 * @suppress {checkTypes} checked by tsc
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
            margin: new FormControl("10"),
            outerMargin: new FormControl(true),
            outerMarginTop: new FormControl("10"),
            outerMarginRight: new FormControl("10"),
            outerMarginBottom: new FormControl("10"),
            outerMarginLeft: new FormControl("10"),
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
                    template: "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n    <div fxFlex=\"100\" [formGroup]=\"gridFormGroup\">\n        <mat-form-field>\n            <input matInput placeholder=\"name\" formControlName=\"name\">\n        </mat-form-field>\n    </div>\n\n    <div  fxFlex=\"100\" [formGroup]=\"configFormGroup\">\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <mat-form-field>\n                <mat-select placeholder=\"Grid Type\" formControlName=\"gridType\">\n                    <mat-option *ngFor=\"let item of gridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-select placeholder=\"Compact Type\" formControlName=\"compactType\">\n                    <mat-option *ngFor=\"let item of compactType\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-select placeholder=\"Display Grid\" formControlName=\"displayGrid\">\n                    <mat-option *ngFor=\"let item of displayGridTypes\" [value]=\"item\">\n                        {{item}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <div>\n                <mat-checkbox formControlName=\"enableEmptyCellDrag\">enableEmptyCellDrag</mat-checkbox>\n                <!-- <mat-checkbox formControlName=\"enableEmptyCellClick\">enableEmptyCellClick</mat-checkbox> -->\n            </div>\n            <div [formGroup]=\"configFormGroup.get('draggable')\">\n                <mat-checkbox formControlName=\"enabled\">enable draggable</mat-checkbox>\n            </div>\n            <div [formGroup]=\"configFormGroup.get('resizable')\">\n                <mat-checkbox formControlName=\"enabled\">enable resizable</mat-checkbox>\n            </div>\n        </div>\n        <!-- Margins -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h3 fxFlex=\"100\">\u062D\u0627\u0634\u06CC\u0647</h3>\n            <div fxFlex=\"100\">\n                <mat-checkbox fxFlex formControlName=\"outerMargin\">outerMargin</mat-checkbox>\n            </div>\n            <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"margin\" formControlName=\"margin\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginTop\" formControlName=\"outerMarginTop\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginRight\" formControlName=\"outerMarginRight\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginBottom\" formControlName=\"outerMarginBottom\" />\n                </mat-form-field>\n                <mat-form-field fxFlex>\n                    <input matInput type=\"number\" placeholder=\"outerMarginLeft\" formControlName=\"outerMarginLeft\" />\n                </mat-form-field>\n            </div>\n        </div>\n\n        <!-- Grid Size -->\n        <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n            <h3 fxFlex=\"100\">\u06AF\u0631\u06CC\u062F</h3>\n            <mat-form-field fxFlex>\n                <input matInput type=\"number\" placeholder=\"minCols\" formControlName=\"minCols\" />\n            </mat-form-field>\n            <mat-form-field fxFlex>\n                <input matInput type=\"number\" placeholder=\"maxCols\" formControlName=\"maxCols\" />\n            </mat-form-field>\n        </div>\n        <button fxFlex=\"100\" color=\"primary\" mat-raised-button (click)=\"save()\">Save</button>\n    </div>\n</div>"
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
 * @suppress {checkTypes} checked by tsc
 */
var GridComponent = /** @class */ (function () {
    function GridComponent(store, service, configurationService, bottomSheet) {
        this.store = store;
        this.service = service;
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
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
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
        this.service.selectById(this.oid).pipe(filter(function (data) { return data != undefined; })).subscribe(function (data) {
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
        { type: Component, args: [{
                    selector: "ngs-grid",
                    template: "<gridster [options]=\"options\">\n    <div class=\"actions\">\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button (click)=\"removeItem(item)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button *ngIf=\"item.type\" mat-icon-button (click)=\"showConfig(item)\">\n                    <mat-icon>settings</mat-icon>\n                </button>\n            </div>\n        </div>\n        <mat-form-field *ngIf=\"!item.valid\"  fxFlex=\"100\">\n            <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                    {{item}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <div *ngIf=\"item.valid\" [ngsDynamicGridItemView]=\"item\"></div>\n    </gridster-item>\n</gridster>",
                    styles: [":host{width:100%;height:100vh;display:block;direction:ltr}.initializer{padding:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}"]
                },] },
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: Store },
        { type: GridService },
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
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
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GridModel, NgsGridModule, NgsGridRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, GridConfigComponent as ɵg, DynamicGridItemConfigComponent as ɵi, DynamicGridItremConfigDirective as ɵh, DynamicGridItemViewDirective as ɵj, GridRoutingModule as ɵk, GridReducer as ɵc, GridComponent as ɵb, GridDbEffects as ɵm, Reducer as ɵl, RootComponent as ɵa, GetGridApiEffects as ɵn, GetGridsApiEffects as ɵp, UpsertGridApiEffects as ɵr, GridConfigurationService as ɵf, GridService as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxuXHR0eXBlcz86IHsgW2tleTogc3RyaW5nXTogSUdyaWRUeXBlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEdyaWRNb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHR1cHNlcnQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRmaW5kOiBcIi9hcGkvZ3JpZFwiLFxyXG5cdFx0Z2V0OiBcIi9hcGkvZ3JpZC8ke21vZGVsLl9pZH1cIlxyXG5cdH0sXHJcblx0dHlwZXM6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxHcmlkTW9kdWxlQ29uZmlnPihcIkdyaWRNb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZC1yb290XCIsXHJcblx0dGVtcGxhdGU6IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZ3JpZFwiLFxyXG5cdFx0Y29tcG9uZW50OiBSb290Q29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogR3JpZE1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblx0Y29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoTU9EVUxFX0RFRkFVTFRfQ09ORklHKTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHQvLyB0aGlzLnN0b3JlLnNlbGVjdChnZXRHcmlkTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUoKGdyaWRDb25maWcpID0+IHtcclxuXHRcdC8vIFx0aWYgKCFncmlkQ29uZmlnKSB7XHJcblx0XHQvLyBcdFx0cmV0dXJuO1xyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyBcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgZ3JpZENvbmZpZy5Db25maWcpO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0R3JpZEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRncmlkOiBHcmlkTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0R3JpZEFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkc3RlckNvbmZpZyB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRjb25maWc6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGl0ZW1zOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+W107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHR7XHJcblx0XHRcdF9pZCxcclxuXHRcdFx0b2lkLFxyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHR0eXBlLFxyXG5cdFx0XHRjb25maWcsXHJcblx0XHRcdGl0ZW1zXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgb2lkPzogc3RyaW5nOyBuYW1lPzogc3RyaW5nOyB0eXBlPzogc3RyaW5nOyBjb25maWc/OiBHcmlkc3RlckNvbmZpZzsgaXRlbXM/OiBhbnlbXSB9ID0ge1xyXG5cdFx0XHRjb25maWc6IHt9LFxyXG5cdFx0XHRpdGVtczogW11cclxuXHRcdH1cclxuXHQpIHtcclxuXHRcdHRoaXMuX2lkID0gX2lkO1xyXG5cdFx0dGhpcy5vaWQgPSBvaWQ7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoZ3JpZCA9IHt9KSB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKGdyaWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gR0VUX0dSSURfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR1JJRF1bQVBJXVtHZXRHcmlkXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZFN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZEZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZEFjdGlvbnMgPSBHZXRHcmlkU3RhcnRBY3Rpb24gfCBHZXRHcmlkU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IG1hcCwgZmlsdGVyLCB0YXAsIHRha2UsIHN3aXRjaE1hcCwgY29tYmluZUxhdGVzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRTZXJ2aWNlIHtcclxuXHR1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VySWQkID0gdGhpcy51c2VyRmFjYWRlU2VydmljZS5nZXREaXNwbGF5TmFtZSgpLmZpbHRlcihpID0+IGkgIT0gdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0LCB7IF9pZCB9KSwge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmlkcygpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5maW5kICE9IFwiXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmZpbmQpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogR2V0R3JpZHNBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0dXBzZXJ0KGdyaWQ6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0KGdyaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXJJZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoZ3JpZHMgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKGdyaWRzID0+IGdyaWRzLmZpbmQoZ3JpZCA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoZ3JpZCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoRm9ybVNjaGVtYU1vZGVsID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RCeU9pZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKGdyaWRzID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcChncmlkcyA9PiBncmlkcy5maW5kKGdyaWQgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKGdyaWQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKEZvcm1TY2hlbWFNb2RlbCA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMsIEdldEdyaWRBY3Rpb25zLCBHZXRHcmlkU3VjY2VlZEFjdGlvbiwgR2V0R3JpZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRHcmlkQWN0aW9ucyxcclxuXHRVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRHcmlkRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldEdyaWRzQWN0aW9ucyxcclxuXHRHZXRHcmlkc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0R3JpZHNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRHcmlkcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gR3JpZHNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbR1JJRF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW0dSSURdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlR3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdyaWRzQWN0aW9ucyA9IFVwc2VydEdyaWRBY3Rpb24gfCBEZWxldGVHcmlkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRzQWN0aW9uVHlwZXMsIEdyaWRzQWN0aW9ucyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBHcmlkTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogR3JpZHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogR3JpZE1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBuZXdHcmlkcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0bmV3R3JpZHMuZm9yRWFjaCgobmV3R3JpZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRHcmlkSW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld0dyaWQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZEdyaWRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZEdyaWRJbmRleCwgMSwgbmV3R3JpZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3R3JpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JpZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShncmlkSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmlkcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuL3Jvb3QvZ3JpZHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBHcmlkU3RhdGUge1xyXG5cdGRiOiBmcm9tUm9vdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSZWR1Y2VyID0ge1xyXG5cdGRiOiBmcm9tUm9vdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRncmlkczogR3JpZFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQsIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWQ6IEdyaWRNb2RlbCkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oWyBncmlkIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZHM6IEdyaWRNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihncmlkcykpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0SW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdHlwZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmFsaWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS5jb25maWdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnIFt0eXBlXT1cImRhdGEudHlwZVwiPjwvZGl2PlxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QFZpZXdDaGlsZChEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlKSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLmNvbmZpZztcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi52YWxpZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIm5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgIGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ3JpZFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYWN0IFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbXBhY3RUeXBlXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiRGlzcGxheSBHcmlkXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGlzcGxheUdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaXNwbGF5R3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbERyYWdcIj5lbmFibGVFbXB0eUNlbGxEcmFnPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsQ2xpY2tcIj5lbmFibGVFbXB0eUNlbGxDbGljazwvbWF0LWNoZWNrYm94PiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdkcmFnZ2FibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+ZW5hYmxlIGRyYWdnYWJsZTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ3Jlc2l6YWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgcmVzaXphYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gTWFyZ2lucyAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOYwq3DmMKnw5jCtMObwozDmcKHPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luXCI+b3V0ZXJNYXJnaW48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFyZ2luXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblRvcFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luVG9wXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblJpZ2h0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5SaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5MZWZ0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5MZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIEdyaWQgU2l6ZSAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOawq/DmMKxw5vCjMOYwq88L2gzPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1pbkNvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW5Db2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtYXhDb2xzXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwic2F2ZSgpXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWdDb21wb25lbnQge1xyXG5cdGdyaWRUeXBlczogYW55W107XHJcblx0Y29tcGFjdFR5cGU6IGFueVtdO1xyXG5cdGRpc3BsYXlHcmlkVHlwZXM6IGFueVtdO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRvaWQ6IHN0cmluZztcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRncmlkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnkpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuZGF0YS5ncmlkO1xyXG5cdFx0dGhpcy5vaWQgPSB0aGlzLmRhdGEub2lkO1xyXG5cdFx0dGhpcy5faW5pdF9wcm9wZXJ0aWVzKCk7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1fZ3JvdXAoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IGdyaWQgPSB7XHJcblx0XHRcdC4uLnRoaXMuZ3JpZCxcclxuXHRcdFx0Li4udGhpcy5ncmlkRm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRjb25maWc6IHsgLi4udGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWUgfVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbihncmlkKSk7XHJcblx0fVxyXG5cdF9pbml0X2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRncmlkVHlwZTogbmV3IEZvcm1Db250cm9sKFwiZml0XCIpLFxyXG5cdFx0XHRjb21wYWN0VHlwZTogbmV3IEZvcm1Db250cm9sKFwibm9uZVwiKSxcclxuXHRcdFx0ZGlzcGxheUdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIm9uRHJhZyZSZXNpemVcIiksXHJcblx0XHRcdC8vIGVtcHR5IGNlbGxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsRHJhZzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDbGljazogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luUmlnaHQ6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdC8vIGdyaWQgc2l6ZVxyXG5cdFx0XHRtaW5Db2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdG1heENvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0ZHJhZ2dhYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRkZWxheVN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woMzMzKVxyXG5cdFx0XHRcdC8vIGlnbm9yZUNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIpXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRyZXNpemFibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRvaWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLm9pZCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQpO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQuY29uZmlnKTtcclxuXHR9XHJcblx0X2luaXRfcHJvcGVydGllcygpIHtcclxuXHRcdHRoaXMuZ3JpZFR5cGVzID0gWyBcImZpdFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcImZpeGVkXCIsIFwidmVydGljYWxGaXhlZFwiLCBcImhvcml6b250YWxGaXhlZFwiIF07XHJcblx0XHR0aGlzLmNvbXBhY3RUeXBlID0gWyBcIm5vbmVcIiwgXCJjb21wYWN0VXBcIiwgXCJjb21wYWN0TGVmdFwiLCBcImNvbXBhY3RVcCZMZWZ0XCIsIFwiY29tcGFjdExlZnQmVXBcIiBdO1xyXG5cdFx0dGhpcy5kaXNwbGF5R3JpZFR5cGVzID0gWyBcImFsd2F5c1wiLCBcIm9uRHJhZyZSZXNpemVcIiwgXCJub25lXCIgXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cImFkZEl0ZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwib3BlbkNvbmZpZygkZXZlbnQpXCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGFzaGJvYXJkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwic2F2ZUNvbmZpZygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kb25lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGdyaWRzdGVyLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWQuaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIml0ZW0udHlwZVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiAgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwYWRkaW5nOjI1cHh9LmFjdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI1cHg7cmlnaHQ6MjVweDt6LWluZGV4OjV9LmFjdGlvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtQ2hhbmdlKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbUNoYW5nZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbVJlc2l6ZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1SZXNpemVkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLml0ZW1zID0gWyB7IGNvbHM6IDIsIHJvd3M6IDEsIHk6IDAsIHg6IDAgfSwgeyBjb2xzOiAyLCByb3dzOiAyLCB5OiAwLCB4OiAyIH0gXTtcclxuXHJcblx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKHtcclxuXHRcdFx0b2lkOiB0aGlzLm9pZCxcclxuXHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKTtcclxuXHR9XHJcblxyXG5cdF9pbml0Q2FsbGJhY2soaXRlbSkge1xyXG5cdFx0dGhpcy5pbml0Q2FsbGJhY2suZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaXRlbSkge1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnNwbGljZSh0aGlzLmdyaWQuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRPRE86IFxyXG5cdFx0ICogw5jCp8OYwq3DmMKyw5jCp8OYwrEgw5nCh8OZwojDm8KMw5jCqiDDmMKvw5jCsSDDmMKzw5nChcOYwqogw5nChsOZwojDmMKvIMOYwqfDmMKqw5jCrcOYwqfDmcKFIMOYwrTDmcKIw5jCr1xyXG5cdFx0KiDDmsKpw5jCp8OZwobDmcKBw5vCjMOawq8gw5jCqMOYwrHDmMKnw5vCjCDDmsKvw5jCscOZwoHDmMKqw5nChiDDmMK0w5nChsOYwqfDmMKzw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0SW5qZWN0LFxyXG5cdFZpZXdDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcIm5nc0R5bmFtaWNHcmlkSXRlbVZpZXdcIilcclxuXHRzZXQgaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAoIWl0ZW0pIHJldHVybjtcclxuXHRcdGlmICghaXRlbS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW0pO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7aXRlbS50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdLnZpZXdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdE9iamVjdC5rZXlzKGl0ZW0uY29uZmlnIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2Vba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgR3JpZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ncmlkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdyaWRSZWR1Y2VyIH0gZnJvbSBcIi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L2dyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0R3JpZHN0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdEdyaWRDb21wb25lbnQsXHJcblx0XHRHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmVcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHcmlkQ29uZmlnQ29tcG9uZW50LCBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEdyaWRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogR3JpZE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc0dyaWRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSwgR3JpZFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzR3JpZE1vZHVsZSxcclxuXHRcdEdyaWRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImdyaWRzXCIsIEdyaWRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEdyaWREYkVmZmVjdHMsIEdldEdyaWRBcGlFZmZlY3RzLCBHZXRHcmlkc0FwaUVmZmVjdHMsIFVwc2VydEdyaWRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0dyaWRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIlVwc2VydEdyaWRBcGlNb2RlbCIsImZyb21Sb290LlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFCQW9CYSxxQkFBcUIsR0FBcUI7SUFDdEQsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtB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
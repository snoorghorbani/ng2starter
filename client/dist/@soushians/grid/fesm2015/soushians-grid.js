import { InjectionToken, Component, Inject, Injectable, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatBottomSheetModule } from '@angular/material';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridsterModule } from 'angular-gridster2';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
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
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("GridModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RootComponent {
}
RootComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-grid-root",
                template: "<router-outlet></router-outlet>"
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
    {
        path: "grid",
        component: RootComponent,
        children: []
    }
];
const /** @type {?} */ GridRoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridConfigurationService {
    /**
     * @param {?} configFile
     * @param {?} store
     */
    constructor(configFile, store) {
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
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
GridConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GridConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = {}) {
            Object.keys(initValue).forEach((key) => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.grid;
        }
    }
    UpsertGridApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    UpsertGridApiModel.Response = Response;
})(UpsertGridApiModel || (UpsertGridApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, oid, name, type, config, items } = {
        config: {},
        items: []
    }) {
        this._id = _id;
        this.oid = oid;
        this.name = name;
        this.type = type;
        this.config = config;
        this.items = items;
    }
}

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
    class Request {
        /**
         * @param {?=} grid
         */
        constructor(grid = {}) {
            debugger;
            this.grid = new GridModel(grid);
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return this.grid;
        }
    }
    UpsertGridApiModel$$1.Request = Request;
    class Response {
        constructor() { }
    }
    UpsertGridApiModel$$1.Response = Response;
})(UpsertGridApiModel$1 || (UpsertGridApiModel$1 = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetGridStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] start" /* START */;
    }
}
class GetGridSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] succeed" /* SUCCEED */;
    }
}
class GetGridFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GRID][API][GetGrid] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.get !== ""), take(1), switchMap((config) => this.http.get(stringTemplate(config.endpoints.get, { _id }))), map((response) => response.Result));
    }
    /**
     * @return {?}
     */
    getGrids() {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.find != ""), switchMap((config) => this.http.get(config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    upsert(grid) {
        const /** @type {?} */ model = new UpsertGridApiModel$1.Request(grid);
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.upsert != ""), take(1), switchMap((config) => this.http.post(config.endpoints.upsert, model.getRequestBody())), map((response) => response.Result));
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectById(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select((state) => state.grids.db.data)
            .pipe(filter((grids) => grids != null), map((grids) => grids.find((grid) => grid._id == _id)), tap((grid) => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    selectByOid(_id) {
        const /** @type {?} */ subject = new BehaviorSubject(undefined);
        this.store
            .select((state) => state.grids.db.data)
            .pipe(filter((grids) => grids != null), map((grids) => grids.find((grid) => grid._id == _id)), tap((grid) => {
            if (grid == null) {
                this.store.dispatch(new GetGridStartAction(_id));
            }
        }))
            .subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
        return subject.asObservable();
    }
}
GridService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
GridService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: GridConfigurationService }
];
/** @nocollapse */ GridService.ngInjectableDef = defineInjectable({ factory: function GridService_Factory() { return new GridService(inject(HttpClient), inject(Store), inject(GridConfigurationService)); }, token: GridService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GRID][API][GetGrid] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.get(payload)), map((res) => new GetGridSucceedAction(res)), catchError((err) => of(new GetGridFailedAction(err))));
    }
}
GetGridApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GetGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetGridApiEffects.prototype, "start$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpsertGridStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] start" /* START */;
    }
}
class UpsertGridSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */;
    }
}
class UpsertGridFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[UPSERT_GRID][API][UpsertGrid] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpsertGridApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[UPSERT_GRID][API][UpsertGrid] start" /* START */)
            .pipe(map((action) => action.payload), switchMap((payload) => this.service.upsert(payload)), map((res) => new UpsertGridSucceedAction(res)), catchError((err) => of(new UpsertGridFailedAction(err))));
    }
}
UpsertGridApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UpsertGridApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], UpsertGridApiEffects.prototype, "start$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetGridsSucceedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */;
    }
}
class GetGridsFailedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = "[GET_GRIDS][API][GetGrids] failed" /* FAILED */;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GetGridsApiEffects {
    /**
     * @param {?} actions$
     * @param {?} service
     */
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$
            .ofType("[GET_GRIDS][API][GetGrids] start" /* START */)
            .pipe(switchMap(() => this.service
            .getGrids()
            .pipe(map((res) => new GetGridsSucceedAction(res)), catchError((err) => of(new GetGridsFailedAction(err))))));
    }
}
GetGridsApiEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GetGridsApiEffects.ctorParameters = () => [
    { type: Actions },
    { type: GridService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GetGridsApiEffects.prototype, "start$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const GridsActionTypes = {
    UPSERT: "[GRID][DB] UPSERT",
    DELETE: "[GRID][DB] DELETE",
};
class UpsertGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.UPSERT;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = [];
const /** @type {?} */ initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    let /** @type {?} */ _data;
    switch (action.type) {
        case GridsActionTypes.UPSERT:
            _data = state.data.concat();
            const /** @type {?} */ newGrids = action.payload;
            newGrids.forEach((newGrid) => {
                const /** @type {?} */ existedGridIndex = _data.findIndex((w) => w._id == newGrid._id);
                if (existedGridIndex > -1) {
                    _data.splice(existedGridIndex, 1, newGrid);
                }
                else {
                    _data.push(newGrid);
                }
            });
            return Object.assign({}, state, { data: _data });
        case GridsActionTypes.DELETE:
            _data = Object.assign({}, state.data);
            const /** @type {?} */ gridIndex = state.data.findIndex((w) => w._id == action.payload._id);
            _data.splice(gridIndex, 1);
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ GridReducer = {
    db: Reducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridDbEffects {
    /**
     * @param {?} actions$
     */
    constructor(actions$) {
        this.actions$ = actions$;
        this.Upsert$ = this.actions$
            .ofType("[GRID][API][GetGrid] succeed" /* SUCCEED */, "[UPSERT_GRID][API][UpsertGrid] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((grid) => new UpsertGridAction([grid])));
        this.UpsertMany$ = this.actions$
            .ofType("[GET_GRIDS][API][GetGrids] succeed" /* SUCCEED */)
            .pipe(pluck("payload"), map((grids) => new UpsertGridAction(grids)));
    }
}
GridDbEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
GridDbEffects.ctorParameters = () => [
    { type: Actions }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GridDbEffects.prototype, "Upsert$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GridDbEffects.prototype, "UpsertMany$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicGridItremConfigDirective {
    /**
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        if (!type)
            return;
        this._resolve_correct_component_base_on_widget_type(type);
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.component.instance.valid;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.component.instance.config;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} type
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(type) {
        if (!this.mapTypeToComponent[type]) {
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[type].configComponent);
        this.component = this.container.createComponent(component);
        // this.widget$.subscribe((w) => (this.component.instance.widget = w));
    }
}
DynamicGridItremConfigDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicGridItemConfig]"
            },] },
];
/** @nocollapse */
DynamicGridItremConfigDirective.ctorParameters = () => [
    { type: GridConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicGridItremConfigDirective.propDecorators = {
    type: [{ type: Input }]
};
class DynamicGridItemConfigComponent {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.data = data;
    }
    /**
     * @return {?}
     */
    get config() {
        return this.DynamicWidgetRef.config;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.DynamicWidgetRef.valid;
    }
}
DynamicGridItemConfigComponent.decorators = [
    { type: Component, args: [{
                template: `
	<div ngsDynamicGridItemConfig [type]="data.type"></div>
	`
            },] },
];
/** @nocollapse */
DynamicGridItemConfigComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
DynamicGridItemConfigComponent.propDecorators = {
    DynamicWidgetRef: [{ type: ViewChild, args: [DynamicGridItremConfigDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridConfigComponent {
    /**
     * @param {?} store
     * @param {?} data
     */
    constructor(store, data) {
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
    save() {
        const /** @type {?} */ grid = Object.assign({}, this.grid, this.gridFormGroup.value, { config: Object.assign({}, this.configFormGroup.value) });
        this.store.dispatch(new UpsertGridStartAction(grid));
    }
    /**
     * @return {?}
     */
    _init_form_group() {
        this.configFormGroup = new FormGroup({
            gridType: new FormControl("fit"),
            compactType: new FormControl("none"),
            displayGrid: new FormControl("onDrag&Resize"),
            // empty cell
            enableEmptyCellDrag: new FormControl(true),
            // enableEmptyCellClick: new FormControl(true),
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
    }
    /**
     * @return {?}
     */
    _init_properties() {
        this.gridTypes = ["fit", "scrollVertical", "scrollHorizontal", "fixed", "verticalFixed", "horizontalFixed"];
        this.compactType = ["none", "compactUp", "compactLeft", "compactUp&Left", "compactLeft&Up"];
        this.displayGridTypes = ["always", "onDrag&Resize", "none"];
    }
}
GridConfigComponent.decorators = [
    { type: Component, args: [{
                template: `<div fxLayout="row wrap" fxLayoutAlign="center center">
    <div fxFlex="100" [formGroup]="gridFormGroup">
        <mat-form-field>
            <input matInput placeholder="name" formControlName="name">
        </mat-form-field>
    </div>

    <div  fxFlex="100" [formGroup]="configFormGroup">
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <mat-form-field>
                <mat-select placeholder="Grid Type" formControlName="gridType">
                    <mat-option *ngFor="let item of gridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Compact Type" formControlName="compactType">
                    <mat-option *ngFor="let item of compactType" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <mat-form-field>
                <mat-select placeholder="Display Grid" formControlName="displayGrid">
                    <mat-option *ngFor="let item of displayGridTypes" [value]="item">
                        {{item}}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </div>
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <div>
                <mat-checkbox formControlName="enableEmptyCellDrag">enableEmptyCellDrag</mat-checkbox>
                <!-- <mat-checkbox formControlName="enableEmptyCellClick">enableEmptyCellClick</mat-checkbox> -->
            </div>
            <div [formGroup]="configFormGroup.get('draggable')">
                <mat-checkbox formControlName="enabled">enable draggable</mat-checkbox>
            </div>
            <div [formGroup]="configFormGroup.get('resizable')">
                <mat-checkbox formControlName="enabled">enable resizable</mat-checkbox>
            </div>
        </div>
        <!-- Margins -->
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <h3 fxFlex="100">حاشیه</h3>
            <div fxFlex="100">
                <mat-checkbox fxFlex formControlName="outerMargin">outerMargin</mat-checkbox>
            </div>
            <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="margin" formControlName="margin" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginTop" formControlName="outerMarginTop" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginRight" formControlName="outerMarginRight" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginBottom" formControlName="outerMarginBottom" />
                </mat-form-field>
                <mat-form-field fxFlex>
                    <input matInput type="number" placeholder="outerMarginLeft" formControlName="outerMarginLeft" />
                </mat-form-field>
            </div>
        </div>

        <!-- Grid Size -->
        <div fxFlex="100" fxLayout="row wrap" fxLayoutGap="25px">
            <h3 fxFlex="100">گرید</h3>
            <mat-form-field fxFlex>
                <input matInput type="number" placeholder="minCols" formControlName="minCols" />
            </mat-form-field>
            <mat-form-field fxFlex>
                <input matInput type="number" placeholder="maxCols" formControlName="maxCols" />
            </mat-form-field>
        </div>
        <button fxFlex="100" color="primary" mat-raised-button (click)="save()">Save</button>
    </div>
</div>`
            },] },
];
/** @nocollapse */
GridConfigComponent.ctorParameters = () => [
    { type: Store },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class GridComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(store, service, configurationService, bottomSheet) {
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
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemChange(item, itemComponent) {
        console.log("itemChanged", item, itemComponent);
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemResize(item, itemComponent) {
        console.log("itemResized", item, itemComponent);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
        this.grid = new GridModel({
            oid: this.oid,
            config: {}
        });
        this._get_grid_by_oid_and_update_component();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _initCallback(item) {
        this.initCallback.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this.grid.items.splice(this.grid.items.indexOf(item), 1);
    }
    /**
     * @return {?}
     */
    addItem() {
        this.grid.items.push(/** @type {?} */ ({}));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    emptyCellClick(event, item) {
        console.log("empty cell click", event, item);
        this.grid.items.push(/** @type {?} */ (item));
    }
    /**
     * @return {?}
     */
    openConfig() {
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    gridItemTypeChanged(item) {
        const /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((data) => {
            item.config = bs.instance.config;
            item["valid"] = bs.instance.valid;
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    showConfig(item) {
        const /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((data) => {
            item.config = bs.instance.config;
            item["valid"] = bs.instance.valid;
        });
    }
    /**
     * @return {?}
     */
    _get_grid_by_oid_and_update_component() {
        this.service.selectById(this.oid).pipe(filter((data) => data != undefined)).subscribe((data) => {
            this.grid = data;
            this.options = Object.assign({}, this.options, data.config);
            // this.options.draggable = {
            // 	enabled: true
            // };
            // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
            // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
            if (this.options.enableEmptyCellDrag)
                this.options.emptyCellDragCallback = this.emptyCellClick.bind(this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            this.ready = true;
            // this.options.api.optionsChanged();
        });
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-grid",
                template: `<button mat-raised-button (click)="addItem()">add</button>
<button mat-raised-button (click)="openConfig()">openConfig</button>

<gridster [options]="options">
    <gridster-item [item]="item" *ngFor="let item of grid.items">
        <div class="initializer" fxLayout="row" fxLayoutAlign="space-between center">
            <div fxFlex="nogrow">
                <button mat-icon-button (click)="removeItem(item)">
                    <mat-icon>delete</mat-icon>
                </button>
                <button mat-icon-button (click)="showConfig(item)">
                    <mat-icon>settings</mat-icon>
                </button>
            </div>
        </div>
        <mat-form-field *ngIf="!item.valid"  fxFlex="100">
            <mat-select placeholder="Grid Item Type" [(ngModel)]="item.type" (selectionChange)="gridItemTypeChanged(item)">
                <mat-option *ngFor="let item of gridItemTypes" [value]="item">
                    {{item}}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <div *ngIf="item.valid" [ngsDynamicGridItemView]="item"></div>
    </gridster-item>
</gridster>`,
                styles: [`:host{width:95vw;height:100vh;display:block;direction:ltr}.initializer{padding:25px}`]
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: Store },
    { type: GridService },
    { type: GridConfigurationService },
    { type: MatBottomSheet }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicGridItemViewDirective {
    /**
     * @param {?} configurationService
     * @param {?} resolver
     * @param {?} container
     */
    constructor(configurationService, resolver, container) {
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
        this.mapTypeToComponent = this.configurationService.config$.getValue().types;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set item(item) {
        if (!item)
            return;
        if (!item["valid"])
            return;
        this._resolve_correct_component_base_on_widget_type(item);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} item
     * @return {?}
     */
    _resolve_correct_component_base_on_widget_type(item) {
        debugger;
        if (!this.mapTypeToComponent[item.type]) {
            const /** @type {?} */ supportedTypes = Object.keys(this.mapTypeToComponent).join(", ");
            throw new Error(`Trying to use an unsupported type (${item.type}).
		  		 Supported types: ${supportedTypes}`);
        }
        const /** @type {?} */ component = this.resolver.resolveComponentFactory(this.mapTypeToComponent[item.type].viewComponent);
        this.component = this.container.createComponent(component);
        Object.keys(item.config || {}).forEach((key) => {
            this.component.instance[key] = item.config[key];
        });
    }
}
DynamicGridItemViewDirective.decorators = [
    { type: Directive, args: [{
                selector: "[ngsDynamicGridItemView]"
            },] },
];
/** @nocollapse */
DynamicGridItemViewDirective.ctorParameters = () => [
    { type: GridConfigurationService },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicGridItemViewDirective.propDecorators = {
    item: [{ type: Input, args: ["ngsDynamicGridItemView",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsGridModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: NgsGridRootModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }, GridConfigurationService, GridService]
        };
    }
}
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
class NgsGridRootModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { GridModel, NgsGridModule, NgsGridRootModule, MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN, GridConfigComponent as ɵg, DynamicGridItemConfigComponent as ɵi, DynamicGridItremConfigDirective as ɵh, DynamicGridItemViewDirective as ɵj, GridRoutingModule as ɵk, GridReducer as ɵc, GridComponent as ɵb, GridDbEffects as ɵm, Reducer as ɵl, RootComponent as ɵa, GetGridApiEffects as ɵn, GetGridsApiEffects as ɵp, UpsertGridApiEffects as ɵr, GridConfigurationService as ɵf, GridService as ɵe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogeyBba2V5OiBzdHJpbmddOiBJR3JpZFR5cGUgfTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEdyaWRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0R3JpZE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChncmlkQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghZ3JpZENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGdyaWRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0PiA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0Y29uZmlnOiBHcmlkc3RlckNvbmZpZztcclxuXHRpdGVtczogSUdyaWRJdGVtTW9kZWw8YW55PltdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdG9pZCxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0dHlwZSxcclxuXHRcdFx0Y29uZmlnLFxyXG5cdFx0XHRpdGVtc1xyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IG9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgY29uZmlnPzogR3JpZHN0ZXJDb25maWc7IGl0ZW1zPzogYW55W10gfSA9IHtcclxuXHRcdFx0Y29uZmlnOiB7fSxcclxuXHRcdFx0aXRlbXM6IFtdXHJcblx0XHR9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZDtcclxuXHRcdHRoaXMub2lkID0gb2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRHcmlkQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGdyaWQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbChncmlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRBY3Rpb25zID0gR2V0R3JpZFN0YXJ0QWN0aW9uIHwgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdldEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0Z2V0KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0ICE9PSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEdyaWRzKCk6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydChncmlkOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdChncmlkKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLnBvc3QoY29uZmlnLmVuZHBvaW50cy51cHNlcnQsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKSxcclxuXHRcdFx0bWFwKChyZXNwb25zZTogVXBzZXJ0R3JpZEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQvLyBkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHQvLyBcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHQvLyBcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHQvLyBcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdC8vIH1cclxuXHRzZWxlY3RCeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxHcmlkTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdyaWRNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmdyaWRzLmRiLmRhdGEpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigoZ3JpZHMpID0+IGdyaWRzICE9IG51bGwpLFxyXG5cdFx0XHRcdG1hcCgoZ3JpZHMpID0+IGdyaWRzLmZpbmQoKGdyaWQpID0+IGdyaWQuX2lkID09IF9pZCkpLFxyXG5cdFx0XHRcdHRhcCgoZ3JpZCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGdyaWQgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRHcmlkU3RhcnRBY3Rpb24oX2lkKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKChGb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChGb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxuXHRzZWxlY3RCeU9pZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKGdyaWRzKSA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKGdyaWRzKSA9PiBncmlkcy5maW5kKChncmlkKSA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKGdyaWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoRm9ybVNjaGVtYU1vZGVsKSA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRF9BQ1RJT05fVFlQRVMsIEdldEdyaWRBY3Rpb25zLCBHZXRHcmlkU3VjY2VlZEFjdGlvbiwgR2V0R3JpZEZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRBY3Rpb25zPiwgcHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChwYXlsb2FkKSA9PiB0aGlzLnNlcnZpY2UuZ2V0KHBheWxvYWQpKSxcclxuXHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkU3VjY2VlZEFjdGlvbihyZXMpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiBvZihuZXcgR2V0R3JpZEZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltVUFNFUlRfR1JJRF1bQVBJXVtVcHNlcnRHcmlkXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVwc2VydEdyaWRBY3Rpb25zID0gVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIHwgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gfCBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG5cdFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUyxcclxuXHRVcHNlcnRHcmlkQWN0aW9ucyxcclxuXHRVcHNlcnRHcmlkU3VjY2VlZEFjdGlvbixcclxuXHRVcHNlcnRHcmlkRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxVcHNlcnRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLnVwc2VydChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IFVwc2VydEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlNb2RlbCB9IGZyb20gXCIuL2dldC1ncmlkcy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEU19BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdGFydFwiLFxyXG5cdFNVQ0NFRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIHN1Y2NlZWRcIixcclxuXHRGQUlMRUQgPSBcIltHRVRfR1JJRFNdW0FQSV1bR2V0R3JpZHNdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkc1N0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHZXRHcmlkc0FjdGlvbnMgPSBHZXRHcmlkc1N0YXJ0QWN0aW9uIHwgR2V0R3JpZHNTdWNjZWVkQWN0aW9uIHwgR2V0R3JpZHNGYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLFxyXG5cdEdldEdyaWRzQWN0aW9ucyxcclxuXHRHZXRHcmlkc1N1Y2NlZWRBY3Rpb24sXHJcblx0R2V0R3JpZHNGYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNBcGlFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPEdldEdyaWRzQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXRHcmlkcygpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKChyZXMpID0+IG5ldyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRzRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gR3JpZHNBY3Rpb25UeXBlcyB7XHJcblx0VVBTRVJUID0gXCJbR1JJRF1bREJdIFVQU0VSVFwiLFxyXG5cdERFTEVURSA9IFwiW0dSSURdW0RCXSBERUxFVEVcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuVVBTRVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGVsZXRlR3JpZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdyaWRzQWN0aW9ucyA9IFVwc2VydEdyaWRBY3Rpb24gfCBEZWxldGVHcmlkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRzQWN0aW9uVHlwZXMsIEdyaWRzQWN0aW9ucyB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBHcmlkTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogR3JpZHNBY3Rpb25zKTogU3RhdGUge1xyXG5cdGxldCBfZGF0YTogR3JpZE1vZGVsW107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDpcclxuXHRcdFx0X2RhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHRjb25zdCBuZXdHcmlkcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuXHRcdFx0bmV3R3JpZHMuZm9yRWFjaCgobmV3R3JpZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGV4aXN0ZWRHcmlkSW5kZXggPSBfZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IG5ld0dyaWQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZEdyaWRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRfZGF0YS5zcGxpY2UoZXhpc3RlZEdyaWRJbmRleCwgMSwgbmV3R3JpZCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3R3JpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRjYXNlIEdyaWRzQWN0aW9uVHlwZXMuREVMRVRFOlxyXG5cdFx0XHRfZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEpO1xyXG5cclxuXHRcdFx0Y29uc3QgZ3JpZEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdF9kYXRhLnNwbGljZShncmlkSW5kZXgsIDEpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHcmlkcyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gXCIuL3Jvb3QvZ3JpZHMucmVkdWNlcnNcIjtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBHcmlkU3RhdGUge1xyXG5cdGRiOiBmcm9tUm9vdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRSZWR1Y2VyID0ge1xyXG5cdGRiOiBmcm9tUm9vdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFN0YXRlIHtcclxuXHRncmlkczogR3JpZFN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQWN0aW9uIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEU19BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyaWREYkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55Pikge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBzZXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNVQ0NFRUQsIFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWQ6IEdyaWRNb2RlbCkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oWyBncmlkIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydE1hbnkkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShHRVRfR1JJRFNfQUNUSU9OX1RZUEVTLlNVQ0NFRUQpXHJcblx0XHQucGlwZShwbHVjayhcInBheWxvYWRcIiksIG1hcCgoZ3JpZHM6IEdyaWRNb2RlbFtdKSA9PiBuZXcgVXBzZXJ0R3JpZEFjdGlvbihncmlkcykpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0SW5qZWN0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZ11cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KClcclxuXHRzZXQgdHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuXHRcdGlmICghdHlwZSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpO1xyXG5cdH1cclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmFsaWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKHR5cGUpIHtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0pIHtcclxuXHRcdFx0Y29uc3Qgc3VwcG9ydGVkVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCkuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFt0eXBlXS5jb25maWdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdC8vIHRoaXMud2lkZ2V0JC5zdWJzY3JpYmUoKHcpID0+ICh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS53aWRnZXQgPSB3KSk7XHJcblx0fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgbmdzRHluYW1pY0dyaWRJdGVtQ29uZmlnIFt0eXBlXT1cImRhdGEudHlwZVwiPjwvZGl2PlxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QFZpZXdDaGlsZChEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlKSBEeW5hbWljV2lkZ2V0UmVmOiBEeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlO1xyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5EeW5hbWljV2lkZ2V0UmVmLmNvbmZpZztcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi52YWxpZDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiZ3JpZEZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwibmFtZVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAgZnhGbGV4PVwiMTAwXCIgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJncmlkVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkNvbXBhY3QgVHlwZVwiIGZvcm1Db250cm9sTmFtZT1cImNvbXBhY3RUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29tcGFjdFR5cGVcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJEaXNwbGF5IEdyaWRcIiBmb3JtQ29udHJvbE5hbWU9XCJkaXNwbGF5R3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpc3BsYXlHcmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsRHJhZ1wiPmVuYWJsZUVtcHR5Q2VsbERyYWc8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxDbGlja1wiPmVuYWJsZUVtcHR5Q2VsbENsaWNrPC9tYXQtY2hlY2tib3g+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ2RyYWdnYWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgZHJhZ2dhYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgncmVzaXphYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPmVuYWJsZSByZXNpemFibGU8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBNYXJnaW5zIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDMgZnhGbGV4PVwiMTAwXCI+w5jCrcOYwqfDmMK0w5vCjMOZwoc8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmeEZsZXggZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5cIj5vdXRlck1hcmdpbjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJtYXJnaW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luVG9wXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Ub3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luUmlnaHRcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpbkJvdHRvbVwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luQm90dG9tXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpbkxlZnRcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gR3JpZCBTaXplIC0tPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8aDMgZnhGbGV4PVwiMTAwXCI+w5rCr8OYwrHDm8KMw5jCrzwvaDM+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWluQ29sc1wiIGZvcm1Db250cm9sTmFtZT1cIm1pbkNvbHNcIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1heENvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtYXhDb2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD1cIjEwMFwiIGNvbG9yPVwicHJpbWFyeVwiIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzYXZlKClcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Z3JpZFR5cGVzOiBhbnlbXTtcclxuXHRjb21wYWN0VHlwZTogYW55W107XHJcblx0ZGlzcGxheUdyaWRUeXBlczogYW55W107XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGdyaWRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwcml2YXRlIGRhdGE6IGFueSkge1xyXG5cdFx0dGhpcy5ncmlkID0gdGhpcy5kYXRhLmdyaWQ7XHJcblx0XHR0aGlzLm9pZCA9IHRoaXMuZGF0YS5vaWQ7XHJcblx0XHR0aGlzLl9pbml0X3Byb3BlcnRpZXMoKTtcclxuXHRcdHRoaXMuX2luaXRfZm9ybV9ncm91cCgpO1xyXG5cdH1cclxuXHRzYXZlKCkge1xyXG5cdFx0Y29uc3QgZ3JpZCA9IHtcclxuXHRcdFx0Li4udGhpcy5ncmlkLFxyXG5cdFx0XHQuLi50aGlzLmdyaWRGb3JtR3JvdXAudmFsdWUsXHJcblx0XHRcdGNvbmZpZzogeyAuLi50aGlzLmNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSB9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKGdyaWQpKTtcclxuXHR9XHJcblx0X2luaXRfZm9ybV9ncm91cCgpIHtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGdyaWRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJmaXRcIiksXHJcblx0XHRcdGNvbXBhY3RUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJub25lXCIpLFxyXG5cdFx0XHRkaXNwbGF5R3JpZDogbmV3IEZvcm1Db250cm9sKFwib25EcmFnJlJlc2l6ZVwiKSxcclxuXHRcdFx0Ly8gZW1wdHkgY2VsbFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxEcmFnOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdC8vIGVuYWJsZUVtcHR5Q2VsbENsaWNrOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luUmlnaHQ6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdC8vIGdyaWQgc2l6ZVxyXG5cdFx0XHRtaW5Db2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdG1heENvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0ZHJhZ2dhYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRkZWxheVN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woMzMzKVxyXG5cdFx0XHRcdC8vIGlnbm9yZUNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIpXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRyZXNpemFibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRvaWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLm9pZCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQpO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQuY29uZmlnKTtcclxuXHR9XHJcblx0X2luaXRfcHJvcGVydGllcygpIHtcclxuXHRcdHRoaXMuZ3JpZFR5cGVzID0gWyBcImZpdFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcImZpeGVkXCIsIFwidmVydGljYWxGaXhlZFwiLCBcImhvcml6b250YWxGaXhlZFwiIF07XHJcblx0XHR0aGlzLmNvbXBhY3RUeXBlID0gWyBcIm5vbmVcIiwgXCJjb21wYWN0VXBcIiwgXCJjb21wYWN0TGVmdFwiLCBcImNvbXBhY3RVcCZMZWZ0XCIsIFwiY29tcGFjdExlZnQmVXBcIiBdO1xyXG5cdFx0dGhpcy5kaXNwbGF5R3JpZFR5cGVzID0gWyBcImFsd2F5c1wiLCBcIm9uRHJhZyZSZXNpemVcIiwgXCJub25lXCIgXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbSgpXCI+YWRkPC9idXR0b24+XHJcbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5Db25maWcoKVwiPm9wZW5Db25maWc8L2J1dHRvbj5cclxuXHJcbjxncmlkc3RlciBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICA8Z3JpZHN0ZXItaXRlbSBbaXRlbV09XCJpdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZC5pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbml0aWFsaXplclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiAgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6OTV2dztoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwYWRkaW5nOjI1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0b3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdHJlYWR5ID0gZmFsc2U7XHJcblx0Z3JpZEl0ZW1UeXBlczogYW55W3N0cmluZ107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy5ncmlkSXRlbVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXMpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1DaGFuZ2UoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtQ2hhbmdlZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtUmVzaXplKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbVJlc2l6ZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuaXRlbXMgPSBbIHsgY29sczogMiwgcm93czogMSwgeTogMCwgeDogMCB9LCB7IGNvbHM6IDIsIHJvd3M6IDIsIHk6IDAsIHg6IDIgfSBdO1xyXG5cclxuXHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoe1xyXG5cdFx0XHRvaWQ6IHRoaXMub2lkLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpO1xyXG5cdH1cclxuXHJcblx0X2luaXRDYWxsYmFjayhpdGVtKSB7XHJcblx0XHR0aGlzLmluaXRDYWxsYmFjay5lbWl0KGl0ZW0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpdGVtKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMuc3BsaWNlKHRoaXMuZ3JpZC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZygpIHtcclxuXHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHcmlkQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRncmlkOiB0aGlzLmdyaWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0SW5qZWN0LFxyXG5cdFZpZXdDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcIm5nc0R5bmFtaWNHcmlkSXRlbVZpZXdcIilcclxuXHRzZXQgaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAoIWl0ZW0pIHJldHVybjtcclxuXHRcdGlmICghaXRlbS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW0pO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7aXRlbS50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdLnZpZXdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdE9iamVjdC5rZXlzKGl0ZW0uY29uZmlnIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2Vba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgR3JpZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ncmlkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdyaWRSZWR1Y2VyIH0gZnJvbSBcIi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L2dyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0R3JpZHN0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdEdyaWRDb21wb25lbnQsXHJcblx0XHRHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmVcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHcmlkQ29uZmlnQ29tcG9uZW50LCBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEdyaWRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogR3JpZE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc0dyaWRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSwgR3JpZFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzR3JpZE1vZHVsZSxcclxuXHRcdEdyaWRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImdyaWRzXCIsIEdyaWRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEdyaWREYkVmZmVjdHMsIEdldEdyaWRBcGlFZmZlY3RzLCBHZXRHcmlkc0FwaUVmZmVjdHMsIFVwc2VydEdyaWRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0dyaWRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIlVwc2VydEdyaWRBcGlNb2RlbCIsImZyb21Sb290LlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFvQmEscUJBQXFCLEdBQXFCO0lBQ3RELGVBQWUsRUFBRSx1QkFBdUI7SUFDeEMsY0FBYyxFQUFFLEVBQUU7SUFDbEIsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVixNQUFNLEVBQUUsZ0NBQWdDO1FBQ3hDLElB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
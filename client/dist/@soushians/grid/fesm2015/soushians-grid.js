import { InjectionToken, Component, Inject, Injectable, Input, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef, Directive, ViewChild, NgModule, defineInjectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { map, filter, tap, take, switchMap, combineLatest, catchError, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { stringTemplate } from '@soushians/shared';
import { UserFacadeService } from '@soushians/user';
import { __decorate, __metadata } from 'tslib';
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
     * @param {?} userFacadeService
     * @param {?} configurationService
     */
    constructor(http, store, userFacadeService, configurationService) {
        this.http = http;
        this.store = store;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
        this.userId$ = this.userFacadeService.getDisplayName().filter((i) => i != undefined);
    }
    /**
     * @param {?} _id
     * @return {?}
     */
    get(_id) {
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.get !== ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => {
            debugger;
            return this.http.get(stringTemplate(config.endpoints.get, { _id }), {
                params: {
                    userId: userId
                }
            });
        }), map((response) => response.Result));
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
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.upsert != ""), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => {
            return this.http.post(config.endpoints.upsert, model.getRequestBody(), {
                params: {
                    userId: userId
                }
            });
        }), map((response) => response.Result));
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
    { type: UserFacadeService },
    { type: GridConfigurationService }
];
/** @nocollapse */ GridService.ngInjectableDef = defineInjectable({ factory: function GridService_Factory() { return new GridService(inject(HttpClient), inject(Store), inject(UserFacadeService), inject(GridConfigurationService)); }, token: GridService, providedIn: "root" });

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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
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
     * @param {?} e
     * @return {?}
     */
    addItem(e) {
        e.stopPropagation();
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
     * @param {?} e
     * @return {?}
     */
    openConfig(e) {
        e.stopPropagation();
        e.preventDefault();
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    saveConfig(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        /**
                 * TODO:
                 * احزار هویت در سمت نود اتحام شود
                * کانفیگ برای گرفتن شناسه کاربر
                 */
        this.store.dispatch(new UpsertGridStartAction(this.grid));
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
                template: `<gridster [options]="options">
    <div class="actions">
        <button mat-mini-fab (click)="addItem($event)">
            <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab (click)="openConfig($event)" *ngIf="havePermission$ | async">
            <mat-icon>dashboard</mat-icon>
        </button>
        <button mat-mini-fab (click)="saveConfig($event)">
            <mat-icon>done</mat-icon>
        </button>
    </div>
    <gridster-item [item]="item" *ngFor="let item of grid.items">
        <div class="initializer" fxLayout="row" fxLayoutAlign="space-between center">
            <div fxFlex="nogrow">
                <button mat-icon-button (click)="removeItem(item)">
                    <mat-icon>delete</mat-icon>
                </button>
                <button *ngIf="item.type" mat-icon-button (click)="showConfig(item)">
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
                styles: [`:host{width:100%;height:100vh;display:block;direction:ltr}.initializer{padding:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}`]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGRldmVsb3BtZW50X3VyaT86IHN0cmluZztcclxuXHRwcm9kdWN0aW9uX3VyaT86IHN0cmluZztcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0Z2V0OiBzdHJpbmc7XHJcblx0XHRmaW5kOiBzdHJpbmc7XHJcblx0XHR1cHNlcnQ6IHN0cmluZztcclxuXHR9O1xyXG5cdHR5cGVzPzogeyBba2V5OiBzdHJpbmddOiBJR3JpZFR5cGUgfTtcclxufVxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0RFRkFVTFRfQ09ORklHOiBHcmlkTW9kdWxlQ29uZmlnID0ge1xyXG5cdGRldmVsb3BtZW50X3VyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuXHRwcm9kdWN0aW9uX3VyaTogXCJcIixcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEdyaWRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0R3JpZE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChncmlkQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghZ3JpZENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGdyaWRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0PiA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0Y29uZmlnOiBHcmlkc3RlckNvbmZpZztcclxuXHRpdGVtczogSUdyaWRJdGVtTW9kZWw8YW55PltdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdG9pZCxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0dHlwZSxcclxuXHRcdFx0Y29uZmlnLFxyXG5cdFx0XHRpdGVtc1xyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IG9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgY29uZmlnPzogR3JpZHN0ZXJDb25maWc7IGl0ZW1zPzogYW55W10gfSA9IHtcclxuXHRcdFx0Y29uZmlnOiB7fSxcclxuXHRcdFx0aXRlbXM6IFtdXHJcblx0XHR9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZDtcclxuXHRcdHRoaXMub2lkID0gb2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRHcmlkQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGdyaWQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbChncmlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRBY3Rpb25zID0gR2V0R3JpZFN0YXJ0QWN0aW9uIHwgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIsIHRhcCwgdGFrZSwgc3dpdGNoTWFwLCBjb21iaW5lTGF0ZXN0LCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlNb2RlbCB9IGZyb20gXCIuL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaU1vZGVsIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4vYXBpL2dldC1ncmlkL2dldC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzLWNvbXBhdC9vcGVyYXRvci90YWtlV2hpbGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXJJZCQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkuZmlsdGVyKChpKSA9PiBpICE9IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEdyaWRzKCk6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSBcIlwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChjb25maWcpID0+IHRoaXMuaHR0cC5nZXQoY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydChncmlkOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdChncmlkKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCksXHJcblx0XHRcdHN3aXRjaE1hcCgoWyBjb25maWcsIHVzZXJJZCBdKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKGdyaWRzKSA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKGdyaWRzKSA9PiBncmlkcy5maW5kKChncmlkKSA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKGdyaWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoRm9ybVNjaGVtYU1vZGVsKSA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QnlPaWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKChncmlkcykgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKChncmlkcykgPT4gZ3JpZHMuZmluZCgoZ3JpZCkgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKChncmlkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKEZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTLCBHZXRHcmlkQWN0aW9ucywgR2V0R3JpZFN1Y2NlZWRBY3Rpb24sIEdldEdyaWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRHcmlkQWN0aW9ucyA9IFVwc2VydEdyaWRTdGFydEFjdGlvbiB8IFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0R3JpZEFjdGlvbnMsXHJcblx0VXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24sXHJcblx0VXBzZXJ0R3JpZEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0R3JpZEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZHNBY3Rpb25zID0gR2V0R3JpZHNTdGFydEFjdGlvbiB8IEdldEdyaWRzU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRzRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX0dSSURTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRHcmlkc0FjdGlvbnMsXHJcblx0R2V0R3JpZHNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldEdyaWRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRHcmlkc0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0R3JpZHMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0R3JpZHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRHcmlkc0ZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEdyaWRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW0dSSURdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltHUklEXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZUdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkc0FjdGlvbnMgPSBVcHNlcnRHcmlkQWN0aW9uIHwgRGVsZXRlR3JpZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkc0FjdGlvblR5cGVzLCBHcmlkc0FjdGlvbnMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogR3JpZE1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEdyaWRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IEdyaWRNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3QgbmV3R3JpZHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld0dyaWRzLmZvckVhY2goKG5ld0dyaWQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkR3JpZEluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdHcmlkLl9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRHcmlkSW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRHcmlkSW5kZXgsIDEsIG5ld0dyaWQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld0dyaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0X2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5kYXRhKTtcclxuXHJcblx0XHRcdGNvbnN0IGdyaWRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UoZ3JpZEluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3JpZHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L2dyaWRzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0Z3JpZHM6IEdyaWRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVELCBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkOiBHcmlkTW9kZWwpID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKFsgZ3JpZCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWRzOiBHcmlkTW9kZWxbXSkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oZ3JpZHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdEluamVjdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXR5cGUpIHJldHVybjtcclxuXHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnZhbGlkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZztcclxuXHR9XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0uY29uZmlnQ29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHQvLyB0aGlzLndpZGdldCQuc3Vic2NyaWJlKCh3KSA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IG5nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZyBbdHlwZV09XCJkYXRhLnR5cGVcIj48L2Rpdj5cclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQge1xyXG5cdEBWaWV3Q2hpbGQoRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSkgRHluYW1pY1dpZGdldFJlZjogRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge31cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi5jb25maWc7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYudmFsaWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImdyaWRGb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIm5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgIGZ4RmxleD1cIjEwMFwiIFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBUeXBlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZ3JpZFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJDb21wYWN0IFR5cGVcIiBmb3JtQ29udHJvbE5hbWU9XCJjb21wYWN0VHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbXBhY3RUeXBlXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiRGlzcGxheSBHcmlkXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGlzcGxheUdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaXNwbGF5R3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbERyYWdcIj5lbmFibGVFbXB0eUNlbGxEcmFnPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlRW1wdHlDZWxsQ2xpY2tcIj5lbmFibGVFbXB0eUNlbGxDbGljazwvbWF0LWNoZWNrYm94PiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdkcmFnZ2FibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+ZW5hYmxlIGRyYWdnYWJsZTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cC5nZXQoJ3Jlc2l6YWJsZScpXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZWRcIj5lbmFibGUgcmVzaXphYmxlPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gTWFyZ2lucyAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOYwq3DmMKnw5jCtMObwozDmcKHPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZnhGbGV4IGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luXCI+b3V0ZXJNYXJnaW48L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwibWFyZ2luXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblRvcFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luVG9wXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJvdXRlck1hcmdpblJpZ2h0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5SaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpbkJvdHRvbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5MZWZ0XCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5MZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIEdyaWQgU2l6ZSAtLT5cclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgPGgzIGZ4RmxleD1cIjEwMFwiPsOawq/DmMKxw5vCjMOYwq88L2gzPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1pbkNvbHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtaW5Db2xzXCIgLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtYXhDb2xzXCIgZm9ybUNvbnRyb2xOYW1lPVwibWF4Q29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9XCIxMDBcIiBjb2xvcj1cInByaW1hcnlcIiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwic2F2ZSgpXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb25maWdDb21wb25lbnQge1xyXG5cdGdyaWRUeXBlczogYW55W107XHJcblx0Y29tcGFjdFR5cGU6IGFueVtdO1xyXG5cdGRpc3BsYXlHcmlkVHlwZXM6IGFueVtdO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRvaWQ6IHN0cmluZztcclxuXHRjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRncmlkRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHJpdmF0ZSBkYXRhOiBhbnkpIHtcclxuXHRcdHRoaXMuZ3JpZCA9IHRoaXMuZGF0YS5ncmlkO1xyXG5cdFx0dGhpcy5vaWQgPSB0aGlzLmRhdGEub2lkO1xyXG5cdFx0dGhpcy5faW5pdF9wcm9wZXJ0aWVzKCk7XHJcblx0XHR0aGlzLl9pbml0X2Zvcm1fZ3JvdXAoKTtcclxuXHR9XHJcblx0c2F2ZSgpIHtcclxuXHRcdGNvbnN0IGdyaWQgPSB7XHJcblx0XHRcdC4uLnRoaXMuZ3JpZCxcclxuXHRcdFx0Li4udGhpcy5ncmlkRm9ybUdyb3VwLnZhbHVlLFxyXG5cdFx0XHRjb25maWc6IHsgLi4udGhpcy5jb25maWdGb3JtR3JvdXAudmFsdWUgfVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbihncmlkKSk7XHJcblx0fVxyXG5cdF9pbml0X2Zvcm1fZ3JvdXAoKSB7XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRncmlkVHlwZTogbmV3IEZvcm1Db250cm9sKFwiZml0XCIpLFxyXG5cdFx0XHRjb21wYWN0VHlwZTogbmV3IEZvcm1Db250cm9sKFwibm9uZVwiKSxcclxuXHRcdFx0ZGlzcGxheUdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIm9uRHJhZyZSZXNpemVcIiksXHJcblx0XHRcdC8vIGVtcHR5IGNlbGxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsRHJhZzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRlbmFibGVFbXB0eUNlbGxDbGljazogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ29udGV4dE1lbnU6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdC8vXHJcblx0XHRcdHNjcm9sbFRvTmV3SXRlbXM6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0Ly8gbWFyZ2luc1xyXG5cdFx0XHRtYXJnaW46IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbjogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRvdXRlck1hcmdpblRvcDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luUmlnaHQ6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbkJvdHRvbTogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdG91dGVyTWFyZ2luTGVmdDogbmV3IEZvcm1Db250cm9sKFwiMTBcIiksXHJcblx0XHRcdC8vIGdyaWQgc2l6ZVxyXG5cdFx0XHRtaW5Db2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdG1heENvbHM6IG5ldyBGb3JtQ29udHJvbCgzKSxcclxuXHRcdFx0Ly9cclxuXHRcdFx0ZHJhZ2dhYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRkZWxheVN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woMzMzKVxyXG5cdFx0XHRcdC8vIGlnbm9yZUNvbnRlbnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIpXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRyZXNpemFibGU6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGVuYWJsZWQ6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRvaWQ6IG5ldyBGb3JtQ29udHJvbCh0aGlzLm9pZCksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQpO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAucGF0Y2hWYWx1ZSh0aGlzLmdyaWQuY29uZmlnKTtcclxuXHR9XHJcblx0X2luaXRfcHJvcGVydGllcygpIHtcclxuXHRcdHRoaXMuZ3JpZFR5cGVzID0gWyBcImZpdFwiLCBcInNjcm9sbFZlcnRpY2FsXCIsIFwic2Nyb2xsSG9yaXpvbnRhbFwiLCBcImZpeGVkXCIsIFwidmVydGljYWxGaXhlZFwiLCBcImhvcml6b250YWxGaXhlZFwiIF07XHJcblx0XHR0aGlzLmNvbXBhY3RUeXBlID0gWyBcIm5vbmVcIiwgXCJjb21wYWN0VXBcIiwgXCJjb21wYWN0TGVmdFwiLCBcImNvbXBhY3RVcCZMZWZ0XCIsIFwiY29tcGFjdExlZnQmVXBcIiBdO1xyXG5cdFx0dGhpcy5kaXNwbGF5R3JpZFR5cGVzID0gWyBcImFsd2F5c1wiLCBcIm9uRHJhZyZSZXNpemVcIiwgXCJub25lXCIgXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cImFkZEl0ZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwib3BlbkNvbmZpZygkZXZlbnQpXCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGFzaGJvYXJkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwic2F2ZUNvbmZpZygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kb25lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGdyaWRzdGVyLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWQuaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIml0ZW0udHlwZVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiAgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwYWRkaW5nOjI1cHh9LmFjdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI1cHg7cmlnaHQ6MjVweDt6LWluZGV4OjV9LmFjdGlvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtQ2hhbmdlKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbUNoYW5nZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbVJlc2l6ZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1SZXNpemVkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLml0ZW1zID0gWyB7IGNvbHM6IDIsIHJvd3M6IDEsIHk6IDAsIHg6IDAgfSwgeyBjb2xzOiAyLCByb3dzOiAyLCB5OiAwLCB4OiAyIH0gXTtcclxuXHJcblx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKHtcclxuXHRcdFx0b2lkOiB0aGlzLm9pZCxcclxuXHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKTtcclxuXHR9XHJcblxyXG5cdF9pbml0Q2FsbGJhY2soaXRlbSkge1xyXG5cdFx0dGhpcy5pbml0Q2FsbGJhY2suZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaXRlbSkge1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnNwbGljZSh0aGlzLmdyaWQuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0fVxyXG5cclxuXHRhZGRJdGVtKGUpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRPRE86IFxyXG5cdFx0ICogw5jCp8OYwq3DmMKyw5jCp8OYwrEgw5nCh8OZwojDm8KMw5jCqiDDmMKvw5jCsSDDmMKzw5nChcOYwqogw5nChsOZwojDmMKvIMOYwqfDmMKqw5jCrcOYwqfDmcKFIMOYwrTDmcKIw5jCr1xyXG5cdFx0KiDDmsKpw5jCp8OZwobDmcKBw5vCjMOawq8gw5jCqMOYwrHDmMKnw5vCjCDDmsKvw5jCscOZwoHDmMKqw5nChiDDmMK0w5nChsOYwqfDmMKzw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0SW5qZWN0LFxyXG5cdFZpZXdDaGlsZFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBwbHVjaywgZmlsdGVyLCBzd2l0Y2hNYXAsIG1hcCwgc3RhcnRXaXRoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dChcIm5nc0R5bmFtaWNHcmlkSXRlbVZpZXdcIilcclxuXHRzZXQgaXRlbShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRpZiAoIWl0ZW0pIHJldHVybjtcclxuXHRcdGlmICghaXRlbS52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW0pO1xyXG5cdH1cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cdG1hcFR5cGVUb0NvbXBvbmVudDogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMubWFwVHlwZVRvQ29tcG9uZW50ID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXM7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxuXHRfcmVzb2x2ZV9jb3JyZWN0X2NvbXBvbmVudF9iYXNlX29uX3dpZGdldF90eXBlKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKCF0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7aXRlbS50eXBlfSkuXHJcblx0XHQgIFx0XHQgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pih0aGlzLm1hcFR5cGVUb0NvbXBvbmVudFtpdGVtLnR5cGVdLnZpZXdDb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdE9iamVjdC5rZXlzKGl0ZW0uY29uZmlnIHx8IHt9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2Vba2V5XSA9IGl0ZW0uY29uZmlnW2tleV07XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdEJvdHRvbVNoZWV0TW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyTW9kdWxlIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZ3JpZC5jb25maWdcIjtcclxuaW1wb3J0IHsgR3JpZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ncmlkLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEdldEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkL2dldC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHZXRHcmlkc0FwaUVmZmVjdHMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEdyaWRSZWR1Y2VyIH0gZnJvbSBcIi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWREYkVmZmVjdHMgfSBmcm9tIFwiLi9yb290L2dyaWRzLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm9vdENvbXBvbmVudCB9IGZyb20gXCIuL3Jvb3Qvcm9vdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0RHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0Qm90dG9tU2hlZXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0R3JpZHN0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Um9vdENvbXBvbmVudCxcclxuXHRcdEdyaWRDb21wb25lbnQsXHJcblx0XHRHcmlkQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSxcclxuXHRcdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmVcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBHcmlkQ29uZmlnQ29tcG9uZW50LCBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIEdyaWRDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZE1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogR3JpZE1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IE5nc0dyaWRSb290TW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0sIEdyaWRDb25maWd1cmF0aW9uU2VydmljZSwgR3JpZFNlcnZpY2UgXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzR3JpZE1vZHVsZSxcclxuXHRcdEdyaWRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImdyaWRzXCIsIEdyaWRSZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEdyaWREYkVmZmVjdHMsIEdldEdyaWRBcGlFZmZlY3RzLCBHZXRHcmlkc0FwaUVmZmVjdHMsIFVwc2VydEdyaWRBcGlFZmZlY3RzIF0pXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0dyaWRNb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzR3JpZFJvb3RNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIlVwc2VydEdyaWRBcGlNb2RlbCIsImZyb21Sb290LlJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQW9CYSxxQkFBcUIsR0FBcUI7SUFDdEQsZUFBZSxFQUFFLHVCQUF1QjtJQUN4QyxjQUFjLEVBQUUsRUFBRTtJQUNsQixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztLQUNqQjtJQUNELFNBQVMsRUFBRTtRQUNWLE1BQU0sRUFBRSxnQ0FBZ0M7UUFDeEMsSUFBSSxFQUFFLGdDQUFnQztRQUN0QyxHQUFHLEVBQUUsNkNBQTZDO0tBQ2xEO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVCxDQUFDO0FBQ0YsdUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUNqQzNGOzs7WUFFQyxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxpQ0FBaUM7YUFDM0M7Ozs7Ozs7QUNKRCxBQUdBLHVCQUFNLE1BQU0sR0FBVztJQUN0QjtRQUNDLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLGFBQWE7UUFDeEIsUUFBUSxFQUFFLEVBQUU7S0FDWjtDQUNELENBQUM7QUFFRix1QkFBYSxpQkFBaUIsR0FBd0IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Ozs7OztBQ1puRjs7Ozs7SUFjQyxZQUF5QyxVQUFVLEVBQVUsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7dUJBRHpFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO1FBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7OztLQVFoQzs7OztJQWRELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7O1lBTEQsVUFBVTs7Ozs0Q0FPRyxNQUFNLFNBQUMsbUJBQW1CO1lBWi9CLEtBQUs7Ozs7Ozs7QUNHZCxJQUFpQixrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDOzs7O1FBRUMsWUFBWSxZQUFpRCxFQUFFO1lBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RFOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqQjtLQUNEO0lBVFksMEJBQU87SUFXcEI7UUFFQyxpQkFBZ0I7S0FDaEI7SUFIWSwyQkFBUTtHQVpMLGtCQUFrQixLQUFsQixrQkFBa0IsUUFnQmxDOzs7Ozs7QUNsQkQ7Ozs7SUFPQyxZQUNDLEVBQ0MsR0FBRyxFQUNILEdBQUcsRUFDSCxJQUFJLEVBQ0osSUFBSSxFQUNKLE1BQU0sRUFDTixLQUFLLEtBQ29HO1FBQ3pHLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7S0FDVDtRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQjtDQUNEOzs7Ozs7Ozs7OztBQzlCRCxJQUVpQkEsb0JBQWtCO0FBQW5DLFdBQWlCQSxxQkFBa0I7SUFDbEM7Ozs7UUFFQyxZQUFZLElBQUksR0FBRyxFQUFFO1lBQ3BCLFNBQVM7WUFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNqQjtLQUNEO0lBVllBLDZCQUFPO0lBWXBCO1FBRUMsaUJBQWdCO0tBQ2hCO0lBSFlBLDhCQUFRO0dBYkxBLG9CQUFrQixLQUFsQkEsb0JBQWtCLFFBaUJsQzs7Ozs7Ozs7OztJQ05BLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFROztLQUFJO0NBQ3RDOzs7OztJQUdBLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7O0tBQUk7Q0FDekM7Ozs7O0lBR0EsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7Q0FDbkM7Ozs7OztBQ3RCRDs7Ozs7OztJQXNCQyxZQUNTLE1BQ0EsT0FDQSxtQkFDQTtRQUhBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxzQkFBaUIsR0FBakIsaUJBQWlCO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0I7UUFFNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQztLQUNyRjs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBVztRQUNkLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFDL0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxDQUFDLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRTtZQUM1QixTQUFTO1lBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2dCQUNuRSxNQUFNLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLE1BQU07aUJBQ2Q7YUFDRCxDQUFDLENBQUM7U0FDSCxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsUUFBcUMsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQy9ELENBQUM7S0FDRjs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1QyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQy9DLFNBQVMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzNELEdBQUcsQ0FBQyxDQUFDLFFBQW1DLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUM3RCxDQUFDO0tBQ0Y7Ozs7O0lBQ0QsTUFBTSxDQUFDLElBQWdDO1FBQ3RDLHVCQUFNLEtBQUssR0FBRyxJQUFJQSxvQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUNqRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDM0IsU0FBUyxDQUFDLENBQUMsQ0FBRSxNQUFNLEVBQUUsTUFBTSxDQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFO2dCQUN0RSxNQUFNLEVBQUU7b0JBQ1AsTUFBTSxFQUFFLE1BQU07aUJBQ2Q7YUFDRCxDQUFDLENBQUM7U0FDSCxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsUUFBcUMsS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQy9ELENBQUM7S0FDRjs7Ozs7SUFNRCxVQUFVLENBQUMsR0FBVztRQUNyQix1QkFBTSxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQVksU0FBUyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUs7YUFDUixNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ3RDLElBQUksQ0FDSixNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxFQUNoQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQ3JELEdBQUcsQ0FBQyxDQUFDLElBQUk7WUFDUixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNqRDtTQUNELENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBQ0QsV0FBVyxDQUFDLEdBQVc7UUFDdEIsdUJBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFZLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLO2FBQ1IsTUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzthQUN0QyxJQUFJLENBQ0osTUFBTSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsRUFDaEMsR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUNyRCxHQUFHLENBQUMsQ0FBQyxJQUFJO1lBQ1IsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakQ7U0FDRCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzlCOzs7WUExRkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBZlEsVUFBVTtZQURWLEtBQUs7WUFJTCxpQkFBaUI7WUFHakIsd0JBQXdCOzs7Ozs7Ozs7Ozs7O0lDQ2hDLFlBQW9CLFFBQWlDLEVBQVUsT0FBb0I7UUFBL0QsYUFBUSxHQUFSLFFBQVEsQ0FBeUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO3NCQUcxRSxJQUFJLENBQUMsUUFBUTthQUNwQixNQUFNLDBDQUE2QjthQUNuQyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDL0IsU0FBUyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ2pELEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ3JEO0tBVnFGOzs7WUFGdkYsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxXQUFXOzs7SUFPbEIsTUFBTSxFQUFFOzs7Ozs7Ozs7Ozs7SUNBVCxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXOztLQUFJO0NBQ3pDOzs7OztJQUdBLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7O0tBQUk7Q0FDekM7Ozs7O0lBR0EsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7Q0FDbkM7Ozs7Ozs7Ozs7O0lDTkEsWUFBb0IsUUFBb0MsRUFBVSxPQUFvQjtRQUFsRSxhQUFRLEdBQVIsUUFBUSxDQUE0QjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7c0JBRzdFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sb0RBQWdDO2FBQ3RDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMvQixTQUFTLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDcEQsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDOUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDeEQ7S0FWd0Y7OztZQUYxRixVQUFVOzs7O1lBWkYsT0FBTztZQUdQLFdBQVc7OztJQWFsQixNQUFNLEVBQUU7Ozs7Ozs7Ozs7OztJQ0ZULFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7O0tBQUk7Q0FDM0M7Ozs7O0lBR0EsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7O0tBQUk7Q0FDbkM7Ozs7Ozs7Ozs7O0lDTEEsWUFBb0IsUUFBa0MsRUFBVSxPQUFvQjtRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7c0JBRzNFLElBQUksQ0FBQyxRQUFRO2FBQ3BCLE1BQU0sZ0RBQThCO2FBQ3BDLElBQUksQ0FDSixTQUFTLENBQUMsTUFDVCxJQUFJLENBQUMsT0FBTzthQUNWLFFBQVEsRUFBRTthQUNWLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM1QyxVQUFVLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN0RCxDQUNGLENBQ0Q7S0Fkc0Y7OztZQUZ4RixVQUFVOzs7O1lBWkYsT0FBTztZQUlQLFdBQVc7OztJQVlsQixNQUFNLEVBQUU7Ozs7Ozs7Ozs7WUNiQSxtQkFBbUI7WUFDbkIsbUJBQW1COzs7Ozs7SUFLNUIsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtvQkFEdkIsZ0JBQWdCLENBQUMsTUFBTTtLQUNJO0NBQzNDOzs7Ozs7QUNYRCxXQU9PLEVBQUU7QUFEVCx1QkFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsaUJBQXdCLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBb0I7SUFDakUscUJBQUksS0FBa0IsQ0FBQztJQUN2QixRQUFRLE1BQU0sQ0FBQyxJQUFJO1FBQ2xCLEtBQUssZ0JBQWdCLENBQUMsTUFBTTtZQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1Qix1QkFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUVoQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTztnQkFDeEIsdUJBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3BCO2FBQ0QsQ0FBQyxDQUFDO1lBRUgseUJBQ0ksS0FBSyxJQUNSLElBQUksRUFBRSxLQUFLLElBQ1Y7UUFFSCxLQUFLLGdCQUFnQixDQUFDLE1BQU07WUFDM0IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0Qyx1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTNCLHlCQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsS0FBSyxJQUNWO1FBRUg7WUFDQyxPQUFPLEtBQUssQ0FBQztLQUNkO0NBQ0Q7Ozs7OztBQzlDRCx1QkFPYSxXQUFXLEdBQUc7SUFDMUIsRUFBRSxFQUFFQyxPQUFnQjtDQUNwQjs7Ozs7Ozs7OztJQ0lBLFlBQW9CLFFBQXNCO1FBQXRCLGFBQVEsR0FBUixRQUFRLENBQWM7dUJBR2hDLElBQUksQ0FBQyxRQUFRO2FBQ3JCLE1BQU0sc0dBQWlFO2FBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBZSxLQUFLLElBQUksZ0JBQWdCLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7MkJBR3BFLElBQUksQ0FBQyxRQUFRO2FBQ3pCLE1BQU0sb0RBQWdDO2FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBa0IsS0FBSyxJQUFJLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FWcEM7OztZQUY5QyxVQUFVOzs7O1lBVkYsT0FBTzs7O0lBY2QsTUFBTSxFQUFFOzs7O0lBS1IsTUFBTSxFQUFFOzs7Ozs7OztBQ3BCVjs7Ozs7O0lBK0JDLFlBQ1Msc0JBQ0EsVUFDQTtRQUZBLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztRQUVqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDN0U7Ozs7O0lBbkJELElBQ0ksSUFBSSxDQUFDLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxRDs7OztJQUNELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQ3JDOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7S0FDdEM7Ozs7SUFVRCxRQUFRLE1BQUs7Ozs7O0lBQ2IsOENBQThDLENBQUMsSUFBSTtRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLHVCQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RSxNQUFNLElBQUksS0FBSyxDQUNkLHNDQUFzQyxJQUFJOzBCQUNwQixjQUFjLEVBQUUsQ0FDdEMsQ0FBQztTQUNGO1FBQ0QsdUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7O0tBRTNEOzs7WUFwQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw0QkFBNEI7YUFDdEM7Ozs7WUFMUSx3QkFBd0I7WUFQaEMsd0JBQXdCO1lBQ3hCLGdCQUFnQjs7O21CQWFmLEtBQUs7Ozs7OztJQTBDTixZQUFrRCxJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztLQUFJOzs7O0lBQy9ELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztLQUNwQzs7OztJQUNELElBQUksS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztLQUNuQzs7O1lBYkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7RUFFVDthQUNEOzs7OzRDQUdhLE1BQU0sU0FBQyxxQkFBcUI7OzsrQkFEeEMsU0FBUyxTQUFDLCtCQUErQjs7Ozs7OztBQzNEM0M7Ozs7O0lBb0dDLFlBQW9CLEtBQXNCLEVBQXlDLElBQVM7UUFBeEUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBeUMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMzRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7Ozs7SUFDRCxJQUFJO1FBQ0gsdUJBQU0sSUFBSSxxQkFDTixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUMzQixNQUFNLG9CQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUN2QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQyxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQzs7WUFFN0MsbUJBQW1CLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzFDLG9CQUFvQixFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQztZQUM1QywwQkFBMEIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRWxELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQzs7WUFFdkMsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixXQUFXLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xDLGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDckMsZ0JBQWdCLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLGlCQUFpQixFQUFFLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQztZQUN4QyxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDOztZQUV0QyxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDO2FBRWhDLENBQUM7WUFDRixTQUFTLEVBQUUsSUFBSSxTQUFTLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJLFdBQVcsRUFBRTthQUMxQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNsQyxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBQ0QsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFFLENBQUM7UUFDOUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFFLENBQUM7UUFDOUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FBQztLQUM5RDs7O1lBbkpELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0ZKO2FBQ047Ozs7WUExRlEsS0FBSzs0Q0FtR2dDLE1BQU0sU0FBQyxxQkFBcUI7Ozs7Ozs7QUNwRzFFOzs7Ozs7O0lBdUVDLFlBQ1MsT0FDQSxTQUNBLHNCQUNBO1FBSEEsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXO29DQW5CYSxJQUFJLFlBQVksRUFBRTttQ0FDbkIsSUFBSSxZQUFZLEVBQUU7Z0NBQ3JCLElBQUksWUFBWSxFQUFFO2tDQUNoQixJQUFJLFlBQVksRUFBRTtrQ0FDbEIsSUFBSSxZQUFZLEVBQUU7dUNBQ2IsSUFBSSxZQUFZLEVBQUU7K0JBQzFCLElBQUksWUFBWSxFQUFFOzRCQUNyQixJQUFJLFlBQVksRUFBRTtxQkFNbkMsS0FBSztRQVFaLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7Ozs7O0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7SUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYTtRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDaEQ7Ozs7SUFFRCxRQUFROztRQUdQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsTUFBTSxFQUFFLEVBQUU7U0FDVixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBQztLQUM3Qzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBSTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekQ7Ozs7O0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxtQkFBQyxFQUF5QixFQUFDLENBQUM7S0FDaEQ7Ozs7OztJQUNELGNBQWMsQ0FBQyxLQUFpQixFQUFFLElBQWtCO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksbUJBQUMsSUFBVyxFQUFDLENBQUM7S0FDbEM7Ozs7O0lBQ0QsVUFBVSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFDLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDZjtTQUNELENBQUMsQ0FBQztLQUNIOzs7OztJQUNELFVBQVUsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Ozs7O1FBT25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDMUQ7Ozs7O0lBQ0QsbUJBQW1CLENBQUMsSUFBeUI7UUFDNUMsdUJBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFO1lBQ2hFLElBQUksRUFBRTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDZjtTQUNELENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDakMsSUFBSSxZQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQy9CLENBQUMsQ0FBQztLQUNIOzs7OztJQUNELFVBQVUsQ0FBQyxJQUF5QjtRQUNuQyx1QkFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUU7WUFDaEUsSUFBSSxFQUFFO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNmO1NBQ0QsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLFlBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDL0IsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFDRCxxQ0FBcUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTtZQUMxRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxxQkFBUSxJQUFJLENBQUMsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQzs7Ozs7O1lBTW5ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFMUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1NBRWxCLENBQUMsQ0FBQztLQUNIOzs7WUEzSkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLGdMQUFnTCxDQUFDO2FBQzFMOzs7O1lBcERRLEtBQUs7WUFTTCxXQUFXO1lBQ1gsd0JBQXdCO1lBUnhCLGNBQWM7OzttQ0FvRHJCLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNO2lDQUNOLE1BQU07aUNBQ04sTUFBTTtzQ0FDTixNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTtrQkFFTixLQUFLOzs7Ozs7O0FDakVQOzs7Ozs7SUErQkMsWUFDUyxzQkFDQSxVQUNBO1FBRkEseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixhQUFRLEdBQVIsUUFBUTtRQUNSLGNBQVMsR0FBVCxTQUFTO1FBRWpCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQztLQUM3RTs7Ozs7SUFkRCxJQUNJLElBQUksQ0FBQyxJQUF5QjtRQUNqQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLElBQUksU0FBTTtZQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLDhDQUE4QyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFEOzs7O0lBVUQsUUFBUSxNQUFLOzs7OztJQUNiLDhDQUE4QyxDQUFDLElBQXlCO1FBQ3ZFLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4Qyx1QkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsTUFBTSxJQUFJLEtBQUssQ0FDZCxzQ0FBc0MsSUFBSSxDQUFDLElBQUk7MEJBQ3pCLGNBQWMsRUFBRSxDQUN0QyxDQUFDO1NBQ0Y7UUFDRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7S0FDSDs7O1lBbENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2FBQ3BDOzs7O1lBTlEsd0JBQXdCO1lBWGhDLHdCQUF3QjtZQUN4QixnQkFBZ0I7OzttQkFrQmYsS0FBSyxTQUFDLHdCQUF3Qjs7Ozs7OztBQ3ZCaEM7Ozs7O0lBaUZDLE9BQU8sT0FBTyxDQUFDLE1BQXlCO1FBQ3ZDLE9BQU87WUFDTixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSx3QkFBd0IsRUFBRSxXQUFXLENBQUU7U0FDeEcsQ0FBQztLQUNGOzs7WUF6Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsY0FBYztpQkFDZDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsYUFBYTtvQkFDYixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsK0JBQStCO29CQUMvQiw4QkFBOEI7b0JBQzlCLDRCQUE0QjtpQkFDNUI7Z0JBQ0QsZUFBZSxFQUFFLENBQUUsbUJBQW1CLEVBQUUsOEJBQThCLENBQUU7Z0JBQ3hFLE9BQU8sRUFBRSxDQUFFLGFBQWEsQ0FBRTthQUMxQjs7QUFtQkQ7OztZQVRDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQztvQkFDNUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBRSxDQUFDO2lCQUN4RztnQkFDRCxPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7YUFDMUI7Ozs7Ozs7Ozs7Ozs7OzsifQ==
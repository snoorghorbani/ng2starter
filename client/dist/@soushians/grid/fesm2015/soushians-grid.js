import { InjectionToken, Component, Inject, Injectable, ComponentFactoryResolver, ViewContainerRef, Directive, Input, ViewChild, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
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
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.get !== ''), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => {
            debugger;
            return this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id }), {
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
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.find != ''), switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.find)), map((response) => response.Result));
    }
    /**
     * @param {?} grid
     * @return {?}
     */
    upsert(grid) {
        const /** @type {?} */ model = new UpsertGridApiModel$1.Request(grid);
        return this.configurationService.config$.pipe(filter((config) => config.endpoints.upsert != ''), take(1), combineLatest(this.userId$), switchMap(([config, userId]) => {
            return this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
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
                providedIn: 'root'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWdyaWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC9yb290LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9ncmlkLXJvdXRpbmcubW9kdWxlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvbW9kZWxzL2dyaWQubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2dyaWQuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWRzL2dldC1ncmlkcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLnJlZHVjZXJzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9ncmlkL2xpYi9yb290L2dyaWRzLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3JpZC9saWIvZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2dyaWQvbGliL2dyaWQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZFR5cGUge1xyXG5cdHVwc2VydENvbXBvbmV0PzogYW55O1xyXG5cdGNvbmZpZ0NvbXBvbmVudD86IGFueTtcclxuXHR0eXBlPzogXCJzaW1wbGVcIiB8IFwiY29tcGxleFwiO1xyXG5cdHZpZXdDb21wb25lbnQ6IGFueTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRNb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHR9O1xyXG5cdGVuZHBvaW50cz86IHtcclxuXHRcdGdldDogc3RyaW5nO1xyXG5cdFx0ZmluZDogc3RyaW5nO1xyXG5cdFx0dXBzZXJ0OiBzdHJpbmc7XHJcblx0fTtcclxuXHR0eXBlcz86IHsgW2tleTogc3RyaW5nXTogSUdyaWRUeXBlIH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogR3JpZE1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcIlwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdHVwc2VydDogXCIvYXBpL2dyaWRcIixcclxuXHRcdGZpbmQ6IFwiL2FwaS9ncmlkXCIsXHJcblx0XHRnZXQ6IFwiL2FwaS9ncmlkLyR7bW9kZWwuX2lkfVwiXHJcblx0fSxcclxuXHR0eXBlczoge31cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48R3JpZE1vZHVsZUNvbmZpZz4oXCJHcmlkTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWQtcm9vdFwiLFxyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImdyaWRcIixcclxuXHRcdGNvbXBvbmVudDogUm9vdENvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4uL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEdyaWRNb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWdGaWxlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0R3JpZE1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKChncmlkQ29uZmlnKSA9PiB7XHJcblx0XHQvLyBcdGlmICghZ3JpZENvbmZpZykge1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gXHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIGdyaWRDb25maWcuQ29uZmlnKTtcclxuXHRcdC8vIFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0PiA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZHN0ZXJDb25maWcgfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdG9pZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHR0eXBlOiBzdHJpbmc7XHJcblx0Y29uZmlnOiBHcmlkc3RlckNvbmZpZztcclxuXHRpdGVtczogSUdyaWRJdGVtTW9kZWw8YW55PltdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdG9pZCxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0dHlwZSxcclxuXHRcdFx0Y29uZmlnLFxyXG5cdFx0XHRpdGVtc1xyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IG9pZD86IHN0cmluZzsgbmFtZT86IHN0cmluZzsgdHlwZT86IHN0cmluZzsgY29uZmlnPzogR3JpZHN0ZXJDb25maWc7IGl0ZW1zPzogYW55W10gfSA9IHtcclxuXHRcdFx0Y29uZmlnOiB7fSxcclxuXHRcdFx0aXRlbXM6IFtdXHJcblx0XHR9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZDtcclxuXHRcdHRoaXMub2lkID0gb2lkO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRHcmlkQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKGdyaWQgPSB7fSkge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbChncmlkKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXRHcmlkQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEdFVF9HUklEX0FDVElPTl9UWVBFUyB7XHJcblx0U1RBUlQgPSBcIltHUklEXVtBUEldW0dldEdyaWRdIHN0YXJ0XCIsXHJcblx0U1VDQ0VFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW0dSSURdW0FQSV1bR2V0R3JpZF0gZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHcmlkTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHRVRfR1JJRF9BQ1RJT05fVFlQRVMuRkFJTEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEdldEdyaWRBY3Rpb25zID0gR2V0R3JpZFN0YXJ0QWN0aW9uIHwgR2V0R3JpZFN1Y2NlZWRBY3Rpb24gfCBHZXRHcmlkRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgdGFwLCB0YWtlLCBzd2l0Y2hNYXAsIGNvbWJpbmVMYXRlc3QsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSAnQHNvdXNoaWFucy9zaGFyZWQnO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gJ0Bzb3VzaGlhbnMvdXNlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gJy4uL2dyaWQucmVkdWNlcic7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkQXBpTW9kZWwgfSBmcm9tICcuL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5tb2RlbCc7XHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tICcuL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLm1vZGVsJztcclxuaW1wb3J0IHsgR2V0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSAnLi9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9ucyc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzLWNvbXBhdC9vcGVyYXRvci90YWtlV2hpbGUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZFNlcnZpY2Uge1xyXG5cdHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnVzZXJJZCQgPSB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkuZmlsdGVyKChpKSA9PiBpICE9IHVuZGVmaW5lZCk7XHJcblx0fVxyXG5cclxuXHRnZXQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXQgIT09ICcnKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXQsIHsgX2lkIH0pLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdGdldEdyaWRzKCk6IE9ic2VydmFibGU8R3JpZE1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZmluZCAhPSAnJyksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5maW5kKSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEdldEdyaWRzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG5cdHVwc2VydChncmlkOiBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBVcHNlcnRHcmlkQXBpTW9kZWwuUmVxdWVzdChncmlkKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0ICE9ICcnKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0Y29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKFsgY29uZmlnLCB1c2VySWQgXSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMudXBzZXJ0LCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VySWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IFVwc2VydEdyaWRBcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0Ly8gZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0Ly8gXHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0Ly8gXHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0Ly8gXHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0pKTtcclxuXHQvLyB9XHJcblx0c2VsZWN0QnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R3JpZE1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxHcmlkTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ncmlkcy5kYi5kYXRhKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKGdyaWRzKSA9PiBncmlkcyAhPSBudWxsKSxcclxuXHRcdFx0XHRtYXAoKGdyaWRzKSA9PiBncmlkcy5maW5kKChncmlkKSA9PiBncmlkLl9pZCA9PSBfaWQpKSxcclxuXHRcdFx0XHR0YXAoKGdyaWQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChncmlkID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0R3JpZFN0YXJ0QWN0aW9uKF9pZCkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoRm9ybVNjaGVtYU1vZGVsKSA9PiBzdWJqZWN0Lm5leHQoRm9ybVNjaGVtYU1vZGVsKSk7XHJcblx0XHRyZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHR9XHJcblx0c2VsZWN0QnlPaWQoX2lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEdyaWRNb2RlbD4ge1xyXG5cdFx0Y29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8R3JpZE1vZGVsPih1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUuZ3JpZHMuZGIuZGF0YSlcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKChncmlkcykgPT4gZ3JpZHMgIT0gbnVsbCksXHJcblx0XHRcdFx0bWFwKChncmlkcykgPT4gZ3JpZHMuZmluZCgoZ3JpZCkgPT4gZ3JpZC5faWQgPT0gX2lkKSksXHJcblx0XHRcdFx0dGFwKChncmlkKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZ3JpZCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEdyaWRTdGFydEFjdGlvbihfaWQpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUoKEZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR0VUX0dSSURfQUNUSU9OX1RZUEVTLCBHZXRHcmlkQWN0aW9ucywgR2V0R3JpZFN1Y2NlZWRBY3Rpb24sIEdldEdyaWRGYWlsZWRBY3Rpb24gfSBmcm9tIFwiLi9nZXQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZXRHcmlkQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRHcmlkQWN0aW9ucz4sIHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURfQUNUSU9OX1RZUEVTLlNUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgocGF5bG9hZCkgPT4gdGhpcy5zZXJ2aWNlLmdldChwYXlsb2FkKSksXHJcblx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0R3JpZFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKGVycikgPT4gb2YobmV3IEdldEdyaWRGYWlsZWRBY3Rpb24oZXJyKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFwaU1vZGVsIH0gZnJvbSBcIi4vdXBzZXJ0LWdyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMge1xyXG5cdFNUQVJUID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbVVBTRVJUX0dSSURdW0FQSV1bVXBzZXJ0R3JpZF0gc3VjY2VlZFwiLFxyXG5cdEZBSUxFRCA9IFwiW1VQU0VSVF9HUklEXVtBUEldW1Vwc2VydEdyaWRdIGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTLkZBSUxFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcHNlcnRHcmlkQWN0aW9ucyA9IFVwc2VydEdyaWRTdGFydEFjdGlvbiB8IFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uIHwgVXBzZXJ0R3JpZEZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi8uLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuXHRVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMsXHJcblx0VXBzZXJ0R3JpZEFjdGlvbnMsXHJcblx0VXBzZXJ0R3JpZFN1Y2NlZWRBY3Rpb24sXHJcblx0VXBzZXJ0R3JpZEZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0R3JpZEFwaUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8VXBzZXJ0R3JpZEFjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFVQU0VSVF9HUklEX0FDVElPTl9UWVBFUy5TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2VydmljZS51cHNlcnQocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHJlcykgPT4gbmV3IFVwc2VydEdyaWRTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBVcHNlcnRHcmlkRmFpbGVkQWN0aW9uKGVycikpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldEdyaWRzQXBpTW9kZWwgfSBmcm9tIFwiLi9nZXQtZ3JpZHMubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIHtcclxuXHRTVEFSVCA9IFwiW0dFVF9HUklEU11bQVBJXVtHZXRHcmlkc10gc3RhcnRcIixcclxuXHRTVUNDRUVEID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBzdWNjZWVkXCIsXHJcblx0RkFJTEVEID0gXCJbR0VUX0dSSURTXVtBUEldW0dldEdyaWRzXSBmYWlsZWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0R3JpZHNTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR0VUX0dSSURTX0FDVElPTl9UWVBFUy5GQUlMRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR2V0R3JpZHNBY3Rpb25zID0gR2V0R3JpZHNTdGFydEFjdGlvbiB8IEdldEdyaWRzU3VjY2VlZEFjdGlvbiB8IEdldEdyaWRzRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX0dSSURTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRHcmlkc0FjdGlvbnMsXHJcblx0R2V0R3JpZHNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldEdyaWRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRHcmlkc0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEU19BQ1RJT05fVFlQRVMuU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0R3JpZHMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcCgocmVzKSA9PiBuZXcgR2V0R3JpZHNTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKChlcnIpID0+IG9mKG5ldyBHZXRHcmlkc0ZhaWxlZEFjdGlvbihlcnIpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEdyaWRzQWN0aW9uVHlwZXMge1xyXG5cdFVQU0VSVCA9IFwiW0dSSURdW0RCXSBVUFNFUlRcIixcclxuXHRERUxFVEUgPSBcIltHUklEXVtEQl0gREVMRVRFXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwc2VydEdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLlVQU0VSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsW10pIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlbGV0ZUdyaWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR3JpZE1vZGVsKSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkc0FjdGlvbnMgPSBVcHNlcnRHcmlkQWN0aW9uIHwgRGVsZXRlR3JpZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkc0FjdGlvblR5cGVzLCBHcmlkc0FjdGlvbnMgfSBmcm9tIFwiLi93aWRnZXQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogR3JpZE1vZGVsW107XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0ZGF0YTogW11cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEdyaWRzQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRsZXQgX2RhdGE6IEdyaWRNb2RlbFtdO1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ6XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0Y29uc3QgbmV3R3JpZHMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcblx0XHRcdG5ld0dyaWRzLmZvckVhY2goKG5ld0dyaWQpID0+IHtcclxuXHRcdFx0XHRjb25zdCBleGlzdGVkR3JpZEluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdHcmlkLl9pZCk7XHJcblx0XHRcdFx0aWYgKGV4aXN0ZWRHcmlkSW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0X2RhdGEuc3BsaWNlKGV4aXN0ZWRHcmlkSW5kZXgsIDEsIG5ld0dyaWQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRfZGF0YS5wdXNoKG5ld0dyaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblxyXG5cdFx0Y2FzZSBHcmlkc0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0X2RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5kYXRhKTtcclxuXHJcblx0XHRcdGNvbnN0IGdyaWRJbmRleCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRfZGF0YS5zcGxpY2UoZ3JpZEluZGV4LCAxKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogX2RhdGFcclxuXHRcdFx0fTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3JpZHMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kYXRhO1xyXG4iLCJpbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tIFwiLi9yb290L2dyaWRzLnJlZHVjZXJzXCI7XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFN0YXRlIHtcclxuXHRkYjogZnJvbVJvb3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkUmVkdWNlciA9IHtcclxuXHRkYjogZnJvbVJvb3QuUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XHJcblx0Z3JpZHM6IEdyaWRTdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZEFjdGlvbiB9IGZyb20gXCIuL3dpZGdldC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdFVF9HUklEX0FDVElPTl9UWVBFUyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvZ2V0LWdyaWQvZ2V0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBHRVRfR1JJRFNfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZHMvZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVVBTRVJUX0dSSURfQUNUSU9OX1RZUEVTIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkRGJFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4pIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFVwc2VydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEdFVF9HUklEX0FDVElPTl9UWVBFUy5TVUNDRUVELCBVUFNFUlRfR1JJRF9BQ1RJT05fVFlQRVMuU1VDQ0VFRClcclxuXHRcdC5waXBlKHBsdWNrKFwicGF5bG9hZFwiKSwgbWFwKChncmlkOiBHcmlkTW9kZWwpID0+IG5ldyBVcHNlcnRHcmlkQWN0aW9uKFsgZ3JpZCBdKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcHNlcnRNYW55JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVUNDRUVEKVxyXG5cdFx0LnBpcGUocGx1Y2soXCJwYXlsb2FkXCIpLCBtYXAoKGdyaWRzOiBHcmlkTW9kZWxbXSkgPT4gbmV3IFVwc2VydEdyaWRBY3Rpb24oZ3JpZHMpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdENvbXBvbmVudFJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHREaXJlY3RpdmUsXHJcblx0SW5wdXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdEluamVjdFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljR3JpZEl0ZW1Db25maWddXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHR5cGUodHlwZTogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXR5cGUpIHJldHVybjtcclxuXHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKTtcclxuXHR9XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnZhbGlkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZztcclxuXHR9XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZSh0eXBlKSB7XHJcblx0XHRpZiAoIXRoaXMubWFwVHlwZVRvQ29tcG9uZW50W3R5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXModGhpcy5tYXBUeXBlVG9Db21wb25lbnQpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbdHlwZV0uY29uZmlnQ29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHQvLyB0aGlzLndpZGdldCQuc3Vic2NyaWJlKCh3KSA9PiAodGhpcy5jb21wb25lbnQuaW5zdGFuY2Uud2lkZ2V0ID0gdykpO1xyXG5cdH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IG5nc0R5bmFtaWNHcmlkSXRlbUNvbmZpZyBbdHlwZV09XCJkYXRhLnR5cGVcIj48L2Rpdj5cclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQge1xyXG5cdEBWaWV3Q2hpbGQoRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZSkgRHluYW1pY1dpZGdldFJlZjogRHluYW1pY0dyaWRJdHJlbUNvbmZpZ0RpcmVjdGl2ZTtcclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge31cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuRHluYW1pY1dpZGdldFJlZi5jb25maWc7XHJcblx0fVxyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLkR5bmFtaWNXaWRnZXRSZWYudmFsaWQ7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgW2Zvcm1Hcm91cF09XCJncmlkRm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICBmeEZsZXg9XCIxMDBcIiBbZm9ybUdyb3VwXT1cImNvbmZpZ0Zvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyaWQgVHlwZVwiIGZvcm1Db250cm9sTmFtZT1cImdyaWRUeXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZFR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiQ29tcGFjdCBUeXBlXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFjdFR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb21wYWN0VHlwZVwiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkRpc3BsYXkgR3JpZFwiIGZvcm1Db250cm9sTmFtZT1cImRpc3BsYXlHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheUdyaWRUeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVFbXB0eUNlbGxEcmFnXCI+ZW5hYmxlRW1wdHlDZWxsRHJhZzwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cImVuYWJsZUVtcHR5Q2VsbENsaWNrXCI+ZW5hYmxlRW1wdHlDZWxsQ2xpY2s8L21hdC1jaGVja2JveD4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29uZmlnRm9ybUdyb3VwLmdldCgnZHJhZ2dhYmxlJylcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlZFwiPmVuYWJsZSBkcmFnZ2FibGU8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb25maWdGb3JtR3JvdXAuZ2V0KCdyZXNpemFibGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVkXCI+ZW5hYmxlIHJlc2l6YWJsZTwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIE1hcmdpbnMgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoMyBmeEZsZXg9XCIxMDBcIj7DmMKtw5jCp8OYwrTDm8KMw5nChzwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZ4RmxleCBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblwiPm91dGVyTWFyZ2luPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIm1hcmdpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5Ub3BcIiBmb3JtQ29udHJvbE5hbWU9XCJvdXRlck1hcmdpblRvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwib3V0ZXJNYXJnaW5SaWdodFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luUmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luQm90dG9tXCIgZm9ybUNvbnRyb2xOYW1lPVwib3V0ZXJNYXJnaW5Cb3R0b21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIm91dGVyTWFyZ2luTGVmdFwiIGZvcm1Db250cm9sTmFtZT1cIm91dGVyTWFyZ2luTGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBHcmlkIFNpemUgLS0+XHJcbiAgICAgICAgPGRpdiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgICAgICAgIDxoMyBmeEZsZXg9XCIxMDBcIj7DmsKvw5jCscObwozDmMKvPC9oMz5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJtaW5Db2xzXCIgZm9ybUNvbnRyb2xOYW1lPVwibWluQ29sc1wiIC8+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwibWF4Q29sc1wiIGZvcm1Db250cm9sTmFtZT1cIm1heENvbHNcIiAvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwiMTAwXCIgY29sb3I9XCJwcmltYXJ5XCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInNhdmUoKVwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29uZmlnQ29tcG9uZW50IHtcclxuXHRncmlkVHlwZXM6IGFueVtdO1xyXG5cdGNvbXBhY3RUeXBlOiBhbnlbXTtcclxuXHRkaXNwbGF5R3JpZFR5cGVzOiBhbnlbXTtcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0b2lkOiBzdHJpbmc7XHJcblx0Y29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Z3JpZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgQEluamVjdChNQVRfQk9UVE9NX1NIRUVUX0RBVEEpIHByaXZhdGUgZGF0YTogYW55KSB7XHJcblx0XHR0aGlzLmdyaWQgPSB0aGlzLmRhdGEuZ3JpZDtcclxuXHRcdHRoaXMub2lkID0gdGhpcy5kYXRhLm9pZDtcclxuXHRcdHRoaXMuX2luaXRfcHJvcGVydGllcygpO1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtX2dyb3VwKCk7XHJcblx0fVxyXG5cdHNhdmUoKSB7XHJcblx0XHRjb25zdCBncmlkID0ge1xyXG5cdFx0XHQuLi50aGlzLmdyaWQsXHJcblx0XHRcdC4uLnRoaXMuZ3JpZEZvcm1Hcm91cC52YWx1ZSxcclxuXHRcdFx0Y29uZmlnOiB7IC4uLnRoaXMuY29uZmlnRm9ybUdyb3VwLnZhbHVlIH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24oZ3JpZCkpO1xyXG5cdH1cclxuXHRfaW5pdF9mb3JtX2dyb3VwKCkge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0Z3JpZFR5cGU6IG5ldyBGb3JtQ29udHJvbChcImZpdFwiKSxcclxuXHRcdFx0Y29tcGFjdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcIm5vbmVcIiksXHJcblx0XHRcdGRpc3BsYXlHcmlkOiBuZXcgRm9ybUNvbnRyb2woXCJvbkRyYWcmUmVzaXplXCIpLFxyXG5cdFx0XHQvLyBlbXB0eSBjZWxsXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbERyYWc6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0ZW5hYmxlRW1wdHlDZWxsQ2xpY2s6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdGVuYWJsZUVtcHR5Q2VsbENvbnRleHRNZW51OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHQvL1xyXG5cdFx0XHRzY3JvbGxUb05ld0l0ZW1zOiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdC8vIG1hcmdpbnNcclxuXHRcdFx0bWFyZ2luOiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW46IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5Ub3A6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpblJpZ2h0OiBuZXcgRm9ybUNvbnRyb2woXCIxMFwiKSxcclxuXHRcdFx0b3V0ZXJNYXJnaW5Cb3R0b206IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHRvdXRlck1hcmdpbkxlZnQ6IG5ldyBGb3JtQ29udHJvbChcIjEwXCIpLFxyXG5cdFx0XHQvLyBncmlkIHNpemVcclxuXHRcdFx0bWluQ29sczogbmV3IEZvcm1Db250cm9sKDMpLFxyXG5cdFx0XHRtYXhDb2xzOiBuZXcgRm9ybUNvbnRyb2woMyksXHJcblx0XHRcdC8vXHJcblx0XHRcdGRyYWdnYWJsZTogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0ZW5hYmxlZDogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0ZGVsYXlTdGFydDogbmV3IEZvcm1Db250cm9sKDMzMylcclxuXHRcdFx0XHQvLyBpZ25vcmVDb250ZW50OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiKVxyXG5cdFx0XHR9KSxcclxuXHRcdFx0cmVzaXphYmxlOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRlbmFibGVkOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0b2lkOiBuZXcgRm9ybUNvbnRyb2wodGhpcy5vaWQpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkKTtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwLnBhdGNoVmFsdWUodGhpcy5ncmlkLmNvbmZpZyk7XHJcblx0fVxyXG5cdF9pbml0X3Byb3BlcnRpZXMoKSB7XHJcblx0XHR0aGlzLmdyaWRUeXBlcyA9IFsgXCJmaXRcIiwgXCJzY3JvbGxWZXJ0aWNhbFwiLCBcInNjcm9sbEhvcml6b250YWxcIiwgXCJmaXhlZFwiLCBcInZlcnRpY2FsRml4ZWRcIiwgXCJob3Jpem9udGFsRml4ZWRcIiBdO1xyXG5cdFx0dGhpcy5jb21wYWN0VHlwZSA9IFsgXCJub25lXCIsIFwiY29tcGFjdFVwXCIsIFwiY29tcGFjdExlZnRcIiwgXCJjb21wYWN0VXAmTGVmdFwiLCBcImNvbXBhY3RMZWZ0JlVwXCIgXTtcclxuXHRcdHRoaXMuZGlzcGxheUdyaWRUeXBlcyA9IFsgXCJhbHdheXNcIiwgXCJvbkRyYWcmUmVzaXplXCIsIFwibm9uZVwiIF07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkc3RlckNvbmZpZywgR3JpZHN0ZXJJdGVtIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWRcIixcclxuXHR0ZW1wbGF0ZTogYDxncmlkc3RlciBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJhZGRJdGVtKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cIm9wZW5Db25maWcoJGV2ZW50KVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRhc2hib2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cInNhdmVDb25maWcoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxncmlkc3Rlci1pdGVtIFtpdGVtXT1cIml0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkLml0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluaXRpYWxpemVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmVJdGVtKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpdGVtLnR5cGVcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNob3dDb25maWcoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFpdGVtLnZhbGlkXCIgIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyaWQgSXRlbSBUeXBlXCIgWyhuZ01vZGVsKV09XCJpdGVtLnR5cGVcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRJdGVtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbGlkXCIgW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddPVwiaXRlbVwiPjwvZGl2PlxyXG4gICAgPC9ncmlkc3Rlci1pdGVtPlxyXG48L2dyaWRzdGVyPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMHZoO2Rpc3BsYXk6YmxvY2s7ZGlyZWN0aW9uOmx0cn0uaW5pdGlhbGl6ZXJ7cGFkZGluZzoyNXB4fS5hY3Rpb25ze3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyNXB4O3JpZ2h0OjI1cHg7ei1pbmRleDo1fS5hY3Rpb25zIGJ1dHRvbnttYXJnaW4tbGVmdDoxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgaXRlbVZhbGlkYXRlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZW1vdmVkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1Jbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZXNpemVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUNoYW5nZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBncmlkU2l6ZUNoYW5nZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVzdHJveUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIG9pZDogc3RyaW5nO1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0cmVhZHkgPSBmYWxzZTtcclxuXHRncmlkSXRlbVR5cGVzOiBhbnlbc3RyaW5nXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge307XHJcblx0XHR0aGlzLmdyaWRJdGVtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcyk7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHcmlkQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRncmlkOiB0aGlzLmdyaWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNhdmVDb25maWcoZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUT0RPOiBcclxuXHRcdCAqIMOYwqfDmMKtw5jCssOYwqfDmMKxIMOZwofDmcKIw5vCjMOYwqogw5jCr8OYwrEgw5jCs8OZwoXDmMKqIMOZwobDmcKIw5jCryDDmMKnw5jCqsOYwq3DmMKnw5nChSDDmMK0w5nCiMOYwq9cclxuXHRcdCogw5rCqcOYwqfDmcKGw5nCgcObwozDmsKvIMOYwqjDmMKxw5jCp8Obwowgw5rCr8OYwrHDmcKBw5jCqsOZwoYgw5jCtMOZwobDmMKnw5jCs8OZwocgw5rCqcOYwqfDmMKxw5jCqMOYwrFcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKHRoaXMuZ3JpZCkpO1xyXG5cdH1cclxuXHRncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzaG93Q29uZmlnKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRfZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCkge1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQodGhpcy5vaWQpLnBpcGUoZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4uZGF0YS5jb25maWcgfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IHtcclxuXHRcdFx0Ly8gXHRlbmFibGVkOiB0cnVlXHJcblx0XHRcdC8vIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyYWcpIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcmFnQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ2xpY2spIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmFwaS5vcHRpb25zQ2hhbmdlZCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0LFxyXG5cdEluamVjdCxcclxuXHRWaWV3Q2hpbGRcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoXCJuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XCIpXHJcblx0c2V0IGl0ZW0oaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0aWYgKCFpdGVtKSByZXR1cm47XHJcblx0XHRpZiAoIWl0ZW0udmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuX3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZShpdGVtKTtcclxuXHR9XHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PjtcclxuXHRtYXBUeXBlVG9Db21wb25lbnQ6IGFueTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7XHJcblx0XHR0aGlzLm1hcFR5cGVUb0NvbXBvbmVudCA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0X3Jlc29sdmVfY29ycmVjdF9jb21wb25lbnRfYmFzZV9vbl93aWRnZXRfdHlwZShpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICghdGhpcy5tYXBUeXBlVG9Db21wb25lbnRbaXRlbS50eXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwVHlwZVRvQ29tcG9uZW50KS5qb2luKFwiLCBcIik7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRgVHJ5aW5nIHRvIHVzZSBhbiB1bnN1cHBvcnRlZCB0eXBlICgke2l0ZW0udHlwZX0pLlxyXG5cdFx0ICBcdFx0IFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4odGhpcy5tYXBUeXBlVG9Db21wb25lbnRbaXRlbS50eXBlXS52aWV3Q29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcblx0XHRPYmplY3Qua2V5cyhpdGVtLmNvbmZpZyB8fCB7fSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlW2tleV0gPSBpdGVtLmNvbmZpZ1trZXldO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZSxcclxuXHRNYXRCb3R0b21TaGVldE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBHcmlkc3Rlck1vZHVsZSB9IGZyb20gXCJhbmd1bGFyLWdyaWRzdGVyMlwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2dyaWQuY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyaWRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZ3JpZC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBHZXRHcmlkQXBpRWZmZWN0cyB9IGZyb20gXCIuL3NlcnZpY2VzL2FwaS9nZXQtZ3JpZC9nZXQtZ3JpZC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgR2V0R3JpZHNBcGlFZmZlY3RzIH0gZnJvbSBcIi4vc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBHcmlkUmVkdWNlciB9IGZyb20gXCIuL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkRGJFZmZlY3RzIH0gZnJvbSBcIi4vcm9vdC9ncmlkcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvb3RDb21wb25lbnQgfSBmcm9tIFwiLi9yb290L3Jvb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkL2dyaWQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtcclxuXHREeW5hbWljR3JpZEl0cmVtQ29uZmlnRGlyZWN0aXZlLFxyXG5cdER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudFxyXG59IGZyb20gXCIuL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgfSBmcm9tIFwiLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tdmlldy5kaXJlY3RpdmVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdEJvdHRvbVNoZWV0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdEdyaWRzdGVyTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFJvb3RDb21wb25lbnQsXHJcblx0XHRHcmlkQ29tcG9uZW50LFxyXG5cdFx0R3JpZENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNHcmlkSXRyZW1Db25maWdEaXJlY3RpdmUsXHJcblx0XHREeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsXHJcblx0XHREeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgR3JpZENvbmZpZ0NvbXBvbmVudCwgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBHcmlkQ29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0dyaWRNb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEdyaWRNb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBOZ3NHcmlkUm9vdE1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9LCBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsIEdyaWRTZXJ2aWNlIF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0dyaWRNb2R1bGUsXHJcblx0XHRHcmlkUm91dGluZ01vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJncmlkc1wiLCBHcmlkUmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBHcmlkRGJFZmZlY3RzLCBHZXRHcmlkQXBpRWZmZWN0cywgR2V0R3JpZHNBcGlFZmZlY3RzLCBVcHNlcnRHcmlkQXBpRWZmZWN0cyBdKVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NHcmlkTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0dyaWRSb290TW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJVcHNlcnRHcmlkQXBpTW9kZWwiLCJmcm9tUm9vdC5SZWR1Y2VyIl0sIm1hcHBp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
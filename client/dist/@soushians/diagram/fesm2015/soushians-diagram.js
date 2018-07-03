import { InjectionToken, Component, Input, Injector, Output, EventEmitter, Injectable, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatCheckboxModule, MatGridListModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {},
    env: {
        production: false
    }
};
const /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("DiagramModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
class GetDiagramsStart {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
}
class GetDiagramsSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
}
class GetDiagramsFailed {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const AddDiagramActionTypes = {
    ADD_DIAGRAM: '[DIAGRAM][ADD] ADD_DIAGRAM',
    ADD_DIAGRAM_START: '[DIAGRAM][ADD] ADD_DIAGRAM_START',
    ADD_DIAGRAM_SUCCEED: '[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED',
    DIAGRAM_CONFIG_CHANGED: '[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED',
    ADD_DIAGRAM_FAILED: '[DIAGRAM][ADD] ADD_DIAGRAM_FAILED',
    STRUCTURE_DEFINITION_START: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_START',
    HAVE_ENDPOINT: '[DIAGRAM][ADD] HAVE_STRUCTURE',
    DATA_LOADED: '[DIAGRAM][ADD] DATA_LOADED',
    STRUCTURE_DEFINITION_END: '[DIAGRAM][ADD] STRUCTURE_DEFINITION_END',
    COLUMNS_MAPPING_CHANGED: '[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED',
    DATA_CALCULATED: '[DIAGRAM][ADD] DATA_CALCULATED',
    COLUMN_ADDED: '[DIAGRAM][ADD] COLUMN_ADDED',
    GENERATE_DIAGRAM: '[DIAGRAM][ADD] GENERATE_DIAGRAM',
};
class AddDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
}
class AddDiagramActionStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
}
class AddDiagramActionSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
}
class AddDiagramActionFailed {
    constructor() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
}
class DiagramConfigChangedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
}
class HaveEndpointAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
}
class DataLoadedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
}
class StructureDefinitionStartAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
}
class StructureDefinitionFinishedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
}
class ColumnsMappingChangedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
}
class GenerateDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
};
class EditDiagramAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetDiagramsApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetDiagramsApiModel.Response = Response;
})(GetDiagramsApiModel || (GetDiagramsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
console.log(GetDiagramsApiModel);
const /** @type {?} */ initialState = {
    loaded: false,
    diagram: {
        Result: []
    }
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function diagramReducer(state = initialState, action) {
    switch (action.type) {
        case DiagramsActionTypes.GET_DIAGRAM: {
            return Object.assign({}, state, { loaded: true });
        }
        case DiagramsActionTypes.GET_DIAGRAM_START: {
            return Object.assign({}, state, { loaded: true });
        }
        default: {
            return state;
        }
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
class DiagramModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = /** @type {?} */ ({})) {
            Object.keys(initValue).forEach(key => (this[key] = initValue[key]));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {
                _id: this._id,
                Name: this.Name,
                IsActive: this.IsActive,
                Source: this.Source,
                Type: this.Type,
                Groups: this.Groups,
                Widget: {
                    booleano: this.booleano
                },
                Chart: {
                    data: {
                        type: this.Type,
                        columns: this.columns,
                        colors: this.Colors,
                        types: this.Types
                    },
                    ColumnMappings: this.ColumnMappings,
                    Flow: this.Flow,
                    legend: {
                        show: this.Legend
                    },
                    subchart: {
                        show: this.Subchart
                    },
                    zoom: {
                        enabled: this.Zoom
                    },
                    tooltip: {
                        grouped: this.Tooltip
                    }
                },
                Box: {
                    Cols: this.Cols,
                    Rows: this.Rows,
                    TextColor: this.TextColor,
                    BackgroundColor: this.BackgroundColor
                }
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                _id: new FormControl("", []),
                Name: new FormControl("", [Validators.required]),
                Sync: new FormControl(0, [Validators.required]),
                IsActive: new FormControl("true", [Validators.required]),
                Type: new FormControl("pie", [Validators.required]),
                Groups: new FormControl("", [Validators.required]),
                Legend: new FormControl("true", [Validators.required]),
                Subchart: new FormControl("false", [Validators.required]),
                Zoom: new FormControl("false", [Validators.required]),
                Tooltip: new FormControl("false", [Validators.required]),
                Route: new FormControl("", [Validators.required]),
                Source: new FormControl({}, [Validators.required]),
                columns: new FormControl("", [Validators.required]),
                Cols: new FormControl(1, [Validators.required]),
                Rows: new FormControl(1, [Validators.required]),
                TextColor: new FormControl("#000000", [Validators.required]),
                BackgroundColor: new FormControl("#ffffff", [Validators.required]),
                Colors: new FormGroup({}),
                Types: new FormGroup({}),
                ColumnMappings: new FormArray([]),
                Flow: new FormControl(true),
                donut: new FormGroup({
                    title: new FormControl("Default Title")
                }),
                booleano: new FormGroup({
                    SuccessMessage: new FormControl("SuccessMessage"),
                    FailureMessage: new FormControl("FailureMessage")
                })
            });
        }
    }
    AddDiagramApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    AddDiagramApiModel.Response = Response;
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    class Request {
        /**
         * @param {?} params
         */
        constructor(params) { }
        /**
         * @return {?}
         */
        getRequestQueryParams() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Name: new FormControl("", [Validators.required]),
                IsActive: new FormControl("true", [Validators.required]),
                Route: new FormControl("", [Validators.required])
            });
        }
    }
    EditDiagramApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    EditDiagramApiModel.Response = Response;
})(EditDiagramApiModel || (EditDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
console.log(EditDiagramApiModel);
const /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: /** @type {?} */ ({ Result: {} })
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState$1, action) {
    switch (action.type) {
        case EditDiagramActionTypes.EDIT_DIAGRAM: {
            return Object.assign({}, state, { status: "dirty", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
            return Object.assign({}, state, { status: "pending", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
            return Object.assign({}, state, { status: "succeed" });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
            return Object.assign({}, state, { status: "failed" });
        }
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ initialState$2 = {
    route: '',
    result: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function ParentGuardReducer(state = initialState$2, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DiagramReducers = {
    diagrams: diagramReducer,
    editDiagram: Reducer,
    parentGuard: ParentGuardReducer
};
//#region selectors
const /** @type {?} */ selectFeatureState = createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
const /** @type {?} */ selectEditDiagramState = createSelector(selectFeatureState, (state) => state.editDiagram);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ServerStatusDiagramComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
        //   .subscribe(data => {
        //     debugger
        //     this.chart.load({
        //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //     });
        //   })
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ServerStatusDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-status",
                template: `<div *ngIf="dataLoaded | async">
  <!-- <mat-icon [ngClass]="dataStatus$ ? 'connected' : 'disconnected'">
    fiber_manual_record
  </mat-icon> -->
  <!-- <span *ngIf="dataStatus$">{{data.Widget.booleano.SuccessMessage}}</span>
  <span *ngIf="!dataStatus$">{{data.Widget.booleano.FailureMessage}}</span> -->
</div>`,
                styles: [`.disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}`]
            },] },
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramPartialConfigEditComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
    /**
     * @return {?}
     */
    configChanged() { }
}
DiagramPartialConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-partial-config-edit",
                template: `<form [formGroup]="formGroup" fxLayout='column'>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Zoom" fxFlexFill>بزرگنمایی</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Subchart" fxFlexFill>نمایش بزرگنمایی در زیر نمودار</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Tooltip" fxFlexFill>نمایش توضیحات به صورت گروهی</mat-checkbox>
  </div>
</form>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
DiagramPartialConfigEditComponent.ctorParameters = () => [
    { type: Injector }
];
DiagramPartialConfigEditComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PieDiagramPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.ConfigChanged = new EventEmitter();
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set formGroup(data) {
        if (!data)
            return;
        this._dataLoaded = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._dataLoaded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
    /**
     * @return {?}
     */
    configChanged() {
        this.ConfigChanged.emit();
    }
}
PieDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "pie-diagram-partial-config",
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="formGroup" fxLayout='column'>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
    </div>
    <div>
      <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
    </div>
  </form>
  <form [formGroup]="donutFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
PieDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
PieDiagramPartialConfigComponent.propDecorators = {
    ConfigChanged: [{ type: Output }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BooleanoWidgetPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set formGroup(data) {
        if (!data)
            return;
        this._dataLoaded = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._dataLoaded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
}
BooleanoWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "booleano-widget-partial-config",
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="booleanoFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="SuccessMessage">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="FailureMessage">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NumericWidgetPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set formGroup(data) {
        if (!data)
            return;
        this._dataLoaded = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get formGroup() {
        return this._dataLoaded;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
}
NumericWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-widget-partial-config",
                template: `<div *ngIf="dataLoaded | async" class="diagram-box">
  <form [formGroup]="donutFormGroup">
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="عنوان" formControlName="title">
    </mat-form-field>
  </form>
</div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LinearDiagramPartialConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
    /**
     * @return {?}
     */
    configChanged() {
        this.ConfigChanged.emit();
    }
}
LinearDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "linear-diagram-partial-config",
                template: `<form [formGroup]="formGroup" fxLayout='column'>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Legend" fxFlexFill>نمایش توضیحات</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Zoom" fxFlexFill>بزرگنمایی</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Subchart" fxFlexFill>نمایش بزرگنمایی در زیر نمودار</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Tooltip" fxFlexFill>نمایش توضیحات به صورت گروهی</mat-checkbox>
  </div>
  <div>
    <mat-checkbox (change)="configChanged()" formControlName="Flow" fxFlexFill>Flow</mat-checkbox>
  </div>
</form>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: Input }],
    ConfigChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ServerConnectingTimeDiagramComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        setInterval(() => {
            this.time = this.time + 1;
        }, 1000);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    }
}
ServerConnectingTimeDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-connecting-time",
                template: `<div *ngIf="dataLoaded | async">
  <div fxLayoutAlign="center center" class="numeric title">{{data.Description}}</div>
  <!-- <div fxLayoutAlign="center center" class="numeric">{{time | timeCounter}}</div> -->
  <div [id]="'diagram_' + data._id"></div>
</div>`,
                styles: [`.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}`]
            },] },
];
/** @nocollapse */
ServerConnectingTimeDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerConnectingTimeDiagramComponent.propDecorators = {
    time: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramConfigurationService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
}
DiagramConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
];
/** @nocollapse */ DiagramConfigurationService.ngInjectableDef = defineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(inject(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    constructor(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    /**
     * @return {?}
     */
    getDiagrams() {
        return this.http
            .get("http://localhost:3000/api/diagram")
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(response => (/** @type {?} */ (response)).Result)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @return {?}
     */
    getGroups() {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(response => (/** @type {?} */ (response)).Result)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiagram(id) {
        if (!id)
            debugger;
        return this.http.get(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    addDiagram(data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateDiagram(body) {
        return this.http.put("http://localhost:3000/api/diagram", body).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDiagram(id) {
        return this.http.delete(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    getData(source, time = 0, once = false) {
        if (once && time !== 0) {
            return this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((res) => res.Result);
        }
        else if (source.Interval == 0) {
            return this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((res) => res.Result);
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).switchMap(i => this.http
                .get(`http://localhost:3000/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((res) => res.Result));
        }
    }
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    extract_columns_from_data(data, columnsMappings) {
        let /** @type {?} */ res = [];
        columnsMappings.forEach(item => {
            var /** @type {?} */ ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var /** @type {?} */ NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map((item, i) => [item].concat(ValueData[i]))));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    get_data_report(data) {
        return _.report(data);
    }
    /**
     * @param {?} data
     * @return {?}
     */
    get_last_node_of_data(data) {
        return (/** @type {?} */ (_.report(data))).filter(item => item.isLastNode);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    buildChartConfig(columns) {
        return {
            data: {
                columns
            },
            legend: {
                show: true
            }
        };
    }
    /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    generateDiagram(config, id, route, sync) {
        this.charts[id] = c3.generate(Object.assign({}, config, { bindto: `#diagram_${id}` }));
        return this.getData(/** @type {?} */ ({}), sync).subscribe(data => {
            this.charts[id].load({
                columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    }
    /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    getFloorTime(precision = 60 * 1000, time = 0) {
        return Math.floor((time || Date.now()) / precision);
    }
}
DiagramService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
DiagramService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: DiagramConfigurationService }
];
/** @nocollapse */ DiagramService.ngInjectableDef = defineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(inject(HttpClient), inject(Store), inject(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NumericEditDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(data => {
            debugger;
        });
    }
}
NumericEditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-edit-diagram",
                template: `<mat-card *ngIf="dataLoaded | async" class="diagram-box">
  <mat-card-header>
    <mat-card-title fxLayoutAlign="space-between center">
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  </mat-card-content>
</mat-card>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}`]
            },] },
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NumericDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        this._data = data;
        this.dataLoaded.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(data => {
            let /** @type {?} */ counter = this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings);
            this.counter = counter[0][1];
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSubscribtion.unsubscribe();
    }
}
NumericDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-numeric",
                template: `<div *ngIf="dataLoaded | async">
  <!-- <div fxLayoutAlign="center center" class="numeric">{{data.Source.Data | json}}</div> -->
  <div fxLayoutAlign="center center" class="numeric">{{counter}}</div>
  <div [id]="'diagram_' + data._id"></div>
</div>`,
                styles: [`:host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}`]
            },] },
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
NumericDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramModuleContainerComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DiagramModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-module-container",
                template: `<div fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = () => [
    { type: DiagramService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DataMapperComponent {
    /**
     * @param {?} diagramService
     * @param {?} store
     */
    constructor(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data)
            return;
        this.dataReport = _.report(data);
        this._data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DataMapperComponent.decorators = [
    { type: Component, args: [{
                selector: "data-mapper",
                template: `<div fxLayout="row">
    <div fxFlex="grow">
        <b>
            Key
        </b>
    </div>
    <div fxFlex="nogrow">
        <b>
            Type
        </b>
    </div>
</div>
<div *ngFor="let item of dataReport" [class]="'depts_' + item.depts" fxLayout="row">
    <div fxFlex="grow">
        {{item.name}}
    </div>
    <div fxFlex="nogrow">
        {{item.type}}
    </div>
</div>
`,
                styles: [`mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}`]
            },] },
];
/** @nocollapse */
DataMapperComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: Store }
];
DataMapperComponent.propDecorators = {
    destination: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AddDiagramComponent {
    /**
     * @param {?} diagramService
     * @param {?} formBuilder
     * @param {?} store
     * @param {?} route
     */
    constructor(diagramService, formBuilder, store, route) {
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls;
        this.route.params.subscribe(params => {
            const /** @type {?} */ diagramId = params["id"];
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe(data => {
                    this.formGroup.patchValue({
                        _id: data._id,
                        Name: data.Name,
                        IsActive: data.IsActive,
                        Groups: data.Groups,
                        Type: data.Chart.data.type,
                        Legend: data.Chart.legend.show,
                        Subchart: data.Chart.subchart.show,
                        Zoom: data.Chart.zoom.enabled,
                        Tooltip: data.Chart.tooltip.grouped,
                        Sync: data.Source.Interval,
                        Source: data.Source,
                        columns: data.Chart.data.columns,
                        ColumnMappings: data.Chart.ColumnMappings,
                        Cols: data.Box.Cols,
                        Flow: data.Chart.Flow,
                        Rows: data.Box.Rows,
                        BackgroundColor: data.Box.BackgroundColor,
                        TextColor: data.Box.TextColor
                    });
                    const /** @type {?} */ colorsControl = /** @type {?} */ (this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(columnKey => {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    const /** @type {?} */ typesControl = /** @type {?} */ (this.formGroup.controls["Types"]);
                    Object.keys(data.Chart.data.types || {}).forEach(key => {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    });
                    data.Chart.ColumnMappings.forEach(mapping => this.addColumn(mapping.NamePath, mapping.ValuePath));
                    this.source = data.Source;
                    this.store.dispatch(new HaveEndpointAction(this));
                    this.diagramPartialConfig = {
                        type: this.formGroup.value.Type,
                        inputs: {
                            formGroup: this.formGroup,
                            diagramService: this.diagramService
                        }
                    };
                });
            this.diagramPartialConfig = {
                type: this.formGroup.value.Type,
                inputs: {
                    formGroup: this.formGroup,
                    diagramService: this.diagramService
                }
            };
        });
        this.diagramTypes = [
            "bar",
            "donut",
            "pie",
            "scatter",
            "line",
            "area",
            "area-spline",
            "numero",
            "booleano",
            "tempo"
        ];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(status => {
            if (status == "VALID" &&
                (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
                this.data)
                this.store.dispatch(new ColumnsMappingChangedAction(this));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    getDataStructure() {
        const /** @type {?} */ observer = this.diagramService.getData(Object.assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(data => {
            this.data = data.Data;
            this.pathOptions = this.diagramService.get_data_report(data.Data);
        });
        return observer;
    }
    /**
     * @return {?}
     */
    configChanged() {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    }
    /**
     * @return {?}
     */
    typeChanged() {
        const /** @type {?} */ typesFormGroup = (/** @type {?} */ (this.formGroup.controls["Types"])).controls;
        for (let /** @type {?} */ cb in typesFormGroup) {
            typesFormGroup[cb].setValue(this.formGroup.value.Type);
        }
        this.diagramPartialConfig = {
            type: this.formGroup.value.Type,
            inputs: {
                formGroup: this.formGroup,
                diagramService: this.diagramService
            }
        };
        this.store.dispatch(new DiagramConfigChangedAction(this));
    }
    /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    addColumn(NamePath = "", ValuePath = "") {
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, Validators.required]
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    routeEntered(event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeColumn(i) {
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    calculateColumns() {
        return Observable$1.create(obser => {
            let /** @type {?} */ columns = this.diagramService.extract_columns_from_data(this.data, (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).value);
            this.formGroup.controls["columns"].setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            const /** @type {?} */ colorsControl = /** @type {?} */ (this.formGroup.controls["Colors"]);
            columns.forEach(column => {
                let /** @type {?} */ columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            const /** @type {?} */ typesControl = /** @type {?} */ (this.formGroup.controls["Types"]);
            columns.forEach(column => {
                let /** @type {?} */ key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(this.formGroup.value.Type));
            });
            obser.next();
        });
    }
    /**
     * @return {?}
     */
    generateDiagram() {
        var /** @type {?} */ temp = new DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        temp.Source = this.source;
        temp.Box = {
            NumberOfColumns: 1,
            Order: 1,
            BackgroundColor: this.formGroup.value.BackgroundColor
        };
        temp.Widget = {
            booleano: this.formGroup.value.booleano
        };
        temp.Chart = {
            ColumnMappings: this.formGroup.value.ColumnMappings,
            data: {
                columns: this.formGroup.controls["columns"].value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls["Colors"].value
            },
            Flow: this.formGroup.value.Flow,
            legend: {
                show: this.formGroup.value.Legend
            },
            subchart: {
                show: this.formGroup.value.Subchart
            },
            zoom: {
                enabled: this.formGroup.value.Zoom
            },
            tooltip: {
                grouped: this.formGroup.value.Tooltip
            }
        };
        // this.componentModel = {
        //   component: this.typeMapToDiagram[temp.Chart.data.type],
        //   inputs: { data: temp }
        // }
        this.diagramModel = temp;
        return Observable$1.empty();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    }
}
AddDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-add",
                template: `<div fxLayout="column" fxFlex="100">
  <div fxLayout="row" fxLayout.lt-md="column">
    <mat-card fxFlex="60">
      <form [formGroup]="formGroup" fxLayout='column'>
        <mat-card-header>
          <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field>
            <input matInput placeholder="عنوان نمودار" formControlName="Name">
          </mat-form-field>
          <mat-form-field fxFlexFill>
            <mat-select placeholder="نام مسیر" formControlName="Source" (change)="routeEntered($event)">
              <mat-option *ngFor="let item of sources | async" [value]="item">
                {{item.Endpoint}}
              </mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field fxFlexFill>
            <input matInput placeholder="sync time" formControlName="Sync">
          </mat-form-field>
          <div>
            <mat-radio-group (change)="typeChanged()" formControlName="Type" fxFlexFill>
              <label>نوع نمودار :</label>
              <mat-radio-button (change)="typeChanged()" *ngFor="let item of diagramTypes" [value]="item" class="form-element-margin">
                {{item}}
              </mat-radio-button>
            </mat-radio-group>
          </div>
          <mat-form-field>
            <mat-select placeholder="Groups" formControlName="Groups" multiple>
              <mat-select-trigger>
                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}
                <span *ngIf="formGroup.controls.Groups.value?.length > 1">
                  (+{{formGroup.controls.Groups.value.length - 1}} others)
                </span>
              </mat-select-trigger>
              <mat-option *ngFor="let item of groups | async" [value]="item">{{item}}</mat-option>
            </mat-select>
          </mat-form-field>
          <div>
            <mat-checkbox (change)="configChanged()" formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
          </div>
          <dynamic-config-component-selector (ConfigChanged)="configChanged()" [data]="diagramPartialConfig"></dynamic-config-component-selector>
        </mat-card-content>
      </form>
    </mat-card>
    <dynamic-component-selector id="modify-diagram" fxFlex="40" [data]="diagramModel"></dynamic-component-selector>
  </div>

  <div fxLayout="row" fxLayout.lt-md="column">
    <mat-card fxFlex="25">
      <mat-card-header>
        <mat-card-title> ساختار دیتا </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="item-margin">
          <data-mapper destination="value" [data]="data"></data-mapper>
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="25">
      <mat-card-header>
        <mat-card-title>نگاشت داده</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div fxLayout="column" fxLayoutGap="5px">
          <div *ngFor="let column of columnsMappings; let i=index" fxFlex="100" fxLayout="column">
            <div fxLayout="column">
              <div [formGroup]="columnsMappings[i]" fxLayout="row" fxLayout.xs="column">
                <mat-form-field fxFlex="50" fxFlex.xs="100">
                  <mat-select placeholder="نام مسیر" formControlName="NamePath">
                    <mat-option>--</mat-option>
                    <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts">
                      <!-- <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts" [disabled]="!item.isLastNode"> -->
                      {{item.path}}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
                <mat-form-field fxFlex="50" fxFlex.xs="100">
                  <mat-select placeholder="مقدار مسیر" formControlName="ValuePath">
                    <mat-option>--</mat-option>
                    <!-- <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts" [disabled]="!item.isLastNode"> -->
                    <mat-option *ngFor="let item of pathOptions" [value]="item.path" [class]="'mat-option depth_' + item.depts">
                      {{item.path}}
                    </mat-option>
                  </mat-select>
                </mat-form-field>
                <button (click)="removeColumn(i)" fxFlex mat-button color="primary" type="button">پاک کردن</button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div>
          <button (click)="addColumn()" fxFlex mat-raised-button color="primary" type="button">افزودن ستون</button>
        </div>
      </mat-card-content>
    </mat-card>
    <mat-card fxFlex="25">
      <mat-card-header>
        <mat-card-title>نتایج داده ها</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div class="item-margin">
          <div class="list-item" *ngFor="let item of formGroup.controls.columns.value; let i=index" fxLayoutAlign="space-between center">
            <span>{{item[0]}} : {{item[1]}}</span>
            <span [formGroup]="formGroup.controls.Colors" *ngIf="$any(formGroup.controls.Colors).controls[item[0]]">
              <input placeholder="رنگ نمودار" (change)="configChanged()" [formControlName]="item[0]" type="color">
            </span>
            <mat-form-field [formGroup]="formGroup.controls.Types" *ngIf="$any(formGroup.controls.Types).controls[item[0]]">
              <!-- <input placeholder="tipo" (change)="configChanged()" > -->
              <mat-select placeholder="tipo" [formControlName]="item[0]">
                <mat-option>--</mat-option>
                <mat-option *ngFor="let item of diagramTypes" [value]="item">
                  {{item}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
    <mat-card fxLayout="column" fxFlex="25">
      <mat-card-header>
        <mat-card-title>تنظیمات ظاهری</mat-card-title>
      </mat-card-header>
      <mat-card-content [formGroup]="formGroup">
        <mat-form-field>
          <input matInput placeholder="تعداد سطر" formControlName="Cols">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="تعداد ستون" formControlName="Rows">
        </mat-form-field>
        <div>
          <label fxFlex="50">رنگ متن :</label>
          <span>
            <input (change)="configChanged()" formControlName="TextColor" type="color">
          </span>
        </div>
        <div>
          <label fxFlex="50">رنگ پس زمینه :</label>
          <span>
            <input formControlName="BackgroundColor" type="color">
          </span>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  <div>
    <mat-card fxLayoutAlign="end center" fxLayout="row" fxFlex="100">
      <mat-card-content>
        <button (click)="add($event)" fxFlex mat-raised-button color="primary" type="submit">ثبت</button>
        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>انصراف</button>
      </mat-card-content>
    </mat-card>
  </div>
</div>`,
                styles: [`#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}`]
            },] },
];
/** @nocollapse */
AddDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: FormBuilder },
    { type: Store },
    { type: ActivatedRoute }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class diagramViewComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    }
}
diagramViewComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-view",
                template: `<div *ngIf="diagramData$ | async" [style.color]="(diagramData$ | async)?.Box.Color">
    <dynamic-component-selector class="diagram-box" [data]="(diagramData$ | async)"></dynamic-component-selector>
</div>`,
                styles: [`:host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}`]
            },] },
];
/** @nocollapse */
diagramViewComponent.ctorParameters = () => [
    { type: DiagramService }
];
diagramViewComponent.propDecorators = {
    diagramId: [{ type: Input, args: ["id",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramsComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
        // this.diagrams
        //         .delay(100)
        //         .subscribe(diagrams =>
        //                 diagrams.Result.forEach(diagram =>
        //                         this.diagramService.generateDiagram(diagram.Chart, diagram._id, diagram.Source.Route, diagram.Source.Sync)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    }
}
DiagramsComponent.decorators = [
    { type: Component, args: [{
                selector: "diagrams",
                template: `<mat-grid-list cols="12" rowHeight="100px">
  <mat-grid-tile *ngFor="let diagram of (diagrams | async)?.Result" 
  [colspan]="diagram.Box.Cols" 
  [rowspan]="diagram.Box.Rows" 
  [style.color]="diagram.Box.Color">
    <dynamic-component-selector class="diagram-box" [data]="diagram"></dynamic-component-selector>
  </mat-grid-tile>
</mat-grid-list>
<br />
<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">
</div>
<div fxLayoutAlign='end center'>
  <button mat-fab routerLink="../diagrams/add" class="add-btn">
    <mat-icon aria-label="Example icon-button with a heart icon">add</mat-icon>
  </button>
</div>
`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}`]
            },] },
];
/** @nocollapse */
DiagramsComponent.ctorParameters = () => [
    { type: DiagramService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EditDiagramComponent {
    /**
     * @param {?} diagramService
     * @param {?} route
     * @param {?} store
     */
    constructor(diagramService, route, store) {
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        let /** @type {?} */ Route = this.route.params.subscribe(params => {
            const /** @type {?} */ diagramId = params["id"];
            this.diagramService.getDiagram(diagramId).subscribe(data => this.formGroup.patchValue(data));
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    }
}
EditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-edit",
                template: `<mat-card fxLayout="column" fxFlex="400px">
    <form [formGroup]="formGroup" fxLayout='column' (ngSubmit)="add($event)">

        <mat-card-header>
            <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>

        <mat-card-content>
            <mat-form-field fxFlexFill>
                <input matInput placeholder="عنوان نمودار" formControlName="Name">
            </mat-form-field>
            <mat-form-field fxFlexFill>
                <input matInput placeholder="آدرس نمودار" formControlName="Route">
            </mat-form-field>

            <mat-checkbox formControlName="IsActive">وضعیت</mat-checkbox>

        </mat-card-content>
        <mat-card-actions>
            <button fxFlex mat-raised-button color="primary" type="submit">ثبت</button>
            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>انصراف</button>
        </mat-card-actions>
    </form>
</mat-card>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: ActivatedRoute },
    { type: Store }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramComponent {
    /**
     * @param {?} store
     * @param {?} diagramService
     * @param {?} http
     * @param {?} injector
     * @param {?} route
     */
    constructor(store, diagramService, http, injector, route) {
        this.store = store;
        this.diagramService = diagramService;
        this.http = http;
        this.injector = injector;
        this.route = route;
        this.modelIsCorrect = new BehaviorSubject$1(false);
        this.now = Date.now();
        this.data = this.injector.get("data");
        this.route.params.subscribe(params => {
            const /** @type {?} */ diagramId = params["id"];
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe(data => {
                    console.log(data);
                });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        if (!(value.Chart && value._id))
            return;
        this._model = value;
        this.modelIsCorrect.next(true);
    }
    /**
     * @return {?}
     */
    get data() {
        return this._model;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // this.dataSubscribtion = IntervalObservable
        //         // .create(this.model.Source.Sync)
        //         .create(999)
        //         .switchMap(i =>
        //                 this.http.get(`http://localhost:3000/api/data`, {
        //                         params: {
        //                                 route: this.model.Source.Route,
        //                                 time: '0'
        //                         }
        //                 })
        //         )
        //         // .switchMap((res: any) => Observable.of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter(data => data).subscribe(state => {
            this.chart = c3.generate(Object.assign({}, this.data.Chart, { bindto: `#diagram_${this.data._id}` }));
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source)
                .filter(data => data != undefined)
                .subscribe(data => {
                this.now = Date.now();
                this.time = data.Time;
                if (this.data.Chart.Flow) {
                    this.chart.flow({
                        columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings),
                        duration: 1500
                    });
                }
                else {
                    this.chart.load({
                        columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
                    });
                }
            });
        });
        // this.dataSubscribtion = this.diagramService.generateDiagram(
        //         this.model.Chart,
        //         this.model._id,
        //         this.model.Source.Route,
        //         this.model.Source.Sync
        // );
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe(data => {
            this.time = data.Time;
            this.now = Date.now();
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            this.chart.load({
                columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            });
        });
    }
}
DiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram",
                template: `<div class="over" fxlayout="row" fxLayoutAlign="space-between">
    <div fxFlex="nogrow" fxFlexAlign="start" class="data-time">{{now | date : 'y/M/d h:m:s'}}</div>
    <div fxFlex="nogrow" fxFlexAlign="center" class="data-time">{{time | date : 'y/M/d h:m:s'}}</div>
    <div fxFlex="nogrow" fxFlexAlign="end" class="data-time">{{now | date : 'y/M/d h:m:s'}}</div>
</div>
<div *ngIf="modelIsCorrect | async" class="diagram widget" [id]="'diagram_' + data._id"></div>`,
                styles: [`:host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}`]
            },] },
];
/** @nocollapse */
DiagramComponent.ctorParameters = () => [
    { type: Store },
    { type: DiagramService },
    { type: HttpClient },
    { type: Injector },
    { type: ActivatedRoute }
];
DiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramComponent,
            donut: DiagramComponent,
            pie: DiagramComponent,
            scatter: DiagramComponent,
            line: DiagramComponent,
            area: DiagramComponent,
            "area-spline": DiagramComponent,
            numero: NumericDiagramComponent,
            tempo: ServerConnectingTimeDiagramComponent,
            booleano: ServerStatusDiagramComponent
        };
        this.currentComponent = null;
        this.backgroundColor = "";
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        this.backgroundColor = data.Box.BackgroundColor;
        this._data = data;
        let /** @type {?} */ raw = { data };
        let /** @type {?} */ _component = this.typeMapToDiagram[data.Chart.data.type];
        let /** @type {?} */ inputProviders = Object.keys(raw).map(inputName => {
            return { provide: inputName, useValue: raw[inputName] };
        });
        let /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
        let /** @type {?} */ component = factory.create(injector);
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.currentComponent._component.timeChange(e);
    }
}
DynamicComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-component-selector",
                template: `<mat-card class="diagram-box" [style.background]="backgroundColor" fxLayout="column" fxLayoutAlign="space-between stretch">
    <div fxFlex="0 0 auto" *ngIf="_data" fxLayoutAlign="space-between center">
        <span fxLayoutAlign="start center" class="widget-title">
            {{_data.Name}}
        </span>
        <a [routerLink]="['edit' ,  _data._id]" fxLayoutAlign="center center" mat-icon-button color="primary">
            <mat-icon aria-label="edit diagram">edit</mat-icon>
        </a>
    </div>
    <!-- <mat-card-content> -->
    <!-- <mat-slider invert [(ngModel)]="time" (change)="timeChange($event)"></mat-slider> -->
    <mat-slider class="over" fxFlex="0 0 auto" invert min='1' max='1000' value="1000" (change)="timeChange($event)"></mat-slider>
    <div fxFlex="1 1 auto" class="widget-container">
        <div #dynamicComponentContainer></div>
    </div>
    <!-- </mat-card-content> -->
</mat-card>`,
                styles: [`:host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}`],
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ]
            },] },
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    widgetComponent: [{ type: ViewChild, args: [DiagramComponent,] }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DynamicConfigComponentSelectorComponent {
    /**
     * @param {?} resolver
     */
    constructor(resolver) {
        this.resolver = resolver;
        this.typeMapToDiagram = {
            bar: DiagramPartialConfigEditComponent,
            area: LinearDiagramPartialConfigComponent,
            "area-spline": LinearDiagramPartialConfigComponent,
            donut: DiagramPartialConfigEditComponent,
            pie: PieDiagramPartialConfigComponent,
            scatter: DiagramPartialConfigEditComponent,
            line: LinearDiagramPartialConfigComponent,
            booleano: BooleanoWidgetPartialConfigComponent
        };
        this.ConfigChanged = new EventEmitter();
        this.currentComponent = null;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) {
        if (!data || Object.keys(data).length == 0)
            return;
        if (!(data.type in this.typeMapToDiagram)) {
            if (this.currentComponent)
                this.currentComponent.destroy();
            return;
        }
        let /** @type {?} */ _component = this.typeMapToDiagram[data.type];
        let /** @type {?} */ inputProviders = Object.keys(data.inputs).map(inputName => {
            return { provide: inputName, useValue: data.inputs[inputName] };
        });
        let /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        let /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        let /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
        let /** @type {?} */ component = factory.create(injector);
        if ((/** @type {?} */ (component.instance)).ConfigChanged)
            (/** @type {?} */ (component.instance)).ConfigChanged.subscribe(() => {
                this.ConfigChanged.emit();
            });
        this.dynamicComponentContainer.insert(component.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = component;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
}
DynamicConfigComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-config-component-selector",
                template: `<div #dynamicComponentContainer></div>`,
                styles: [`:host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}`],
                entryComponents: [
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    LinearDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent
                ]
            },] },
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    ConfigChanged: [{ type: Output }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    constructor(actions$, router, diagramService) {
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(map(action => action.payload), map(data => new GetDiagramsStart()));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(map(action => action.payload), switchMap((data) => this.diagramService
            .getDiagrams()
            .pipe(map(res => new GetDiagramsSucceed(res)), catchError(() => Observable$1.of(new GetDiagramsFailed())))));
    }
}
DiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DiagramEffects.prototype, "DiagramRequest$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DiagramEffects.prototype, "getDiagram$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AddDiagramEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    constructor(actions$, router, diagramService) {
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM)
            .pipe(map(action => action.payload), map(data => new AddDiagramActionStart(data)));
        this.addDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
            .pipe(map(action => action.payload), switchMap((data) => this.diagramService
            .addDiagram(data)
            .pipe(map(res => new AddDiagramActionSucceed(res)), catchError(() => Observable$1.of(new AddDiagramActionFailed())))));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(map(action => action.payload), map(data => {
            this.router.navigate(["diagrams"]);
            return Observable$1.empty();
        }));
        this.HAVE_ENDPOINT$ = this.actions$
            .ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
            .pipe(map(action => action.payload), map(data => new DataLoadedAction(data)));
        this.DATA_LOADED$ = this.actions$
            .ofType(AddDiagramActionTypes.DATA_LOADED)
            .pipe(map(action => action.payload), map(data => new StructureDefinitionStartAction(data)));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
            .pipe(map(action => action.payload), map(data => new GenerateDiagramAction(data)));
        this.STRUCTURE_DEFINITION_START$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
            .pipe(map(action => action.payload), switchMap(data => data.getDataStructure().map(() => new StructureDefinitionFinishedAction(data))));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
            .pipe(map(action => action.payload), switchMap(data => data.calculateColumns().map(() => new StructureDefinitionFinishedAction(data))));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
            .pipe(map(action => action.payload), switchMap(data => data.calculateColumns().map(() => new GenerateDiagramAction(data))));
        this.GenerateDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
            .pipe(map(action => action.payload), map(data => data.generateDiagram()));
    }
}
AddDiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AddDiagramEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "addDiagram$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
__decorate([
    Effect({ dispatch: false }),
    __metadata("design:type", Object)
], AddDiagramEffects.prototype, "GenerateDiagram$", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ routes = [
    {
        path: "diagrams",
        component: DiagramModuleContainerComponent,
        children: [
            {
                path: "",
                component: DiagramsComponent
            },
            {
                path: "add",
                component: AddDiagramComponent
            },
            {
                path: "edit/:id",
                component: AddDiagramComponent
            },
            {
                path: "numero",
                component: NumericDiagramComponent
            },
            {
                path: "tempo",
                component: ServerConnectingTimeDiagramComponent
            },
            {
                path: "booleano",
                component: ServerStatusDiagramComponent
            }
        ]
    }
];
const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DiagramSelectorComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map((res) => res.Result));
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.config.diagramId != undefined;
    }
    /**
     * @return {?}
     */
    get config() {
        return {
            diagramId: this.selectedDiagramId
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DiagramSelectorComponent.decorators = [
    { type: Component, args: [{
                template: `<mat-select placeholder="Diagrams" [(ngModel)]="selectedDiagramId" name="selectedDiagramId">
  <mat-option *ngFor="let item of (diagrams$ | async)" [value]="item._id">
    {{item._id}}
  </mat-option>
</mat-select>`
            },] },
];
/** @nocollapse */
DiagramSelectorComponent.ctorParameters = () => [
    { type: DiagramService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgsDiagramModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
NgsDiagramModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpClientModule,
                    FormsModule,
                    RouterModule,
                    CommonModule,
                    MatExpansionModule,
                    MatSnackBarModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSelectModule,
                    MatSliderModule,
                    MatInputModule,
                    MatCheckboxModule,
                    MatFormFieldModule,
                    MatTabsModule,
                    FlexLayoutModule,
                    MatRadioModule,
                    MatTooltipModule,
                    MatGridListModule,
                    MatAutocompleteModule,
                    ReactiveFormsModule,
                    BrowserAnimationsModule
                ],
                declarations: [
                    AddDiagramComponent,
                    DiagramsComponent,
                    diagramViewComponent,
                    EditDiagramComponent,
                    DynamicConfigComponentSelectorComponent,
                    DiagramComponent,
                    DynamicComponentSelectorComponent,
                    DiagramModuleContainerComponent,
                    DataMapperComponent,
                    NumericDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent,
                    NumericWidgetPartialConfigComponent,
                    ServerConnectingTimeDiagramComponent,
                    NumericEditDiagramComponent,
                    LinearDiagramPartialConfigComponent,
                    DiagramSelectorComponent
                ],
                entryComponents: [DiagramSelectorComponent, diagramViewComponent],
                exports: [DiagramSelectorComponent],
                providers: []
            },] },
];
class RootNgsDiagramModule {
}
RootNgsDiagramModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsDiagramModule,
                    StoreModule.forFeature("diagram", DiagramReducers),
                    EffectsModule.forFeature([DiagramEffects, AddDiagramEffects]),
                    RoutingModule
                ],
                exports: [NgsDiagramModule]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { DiagramSelectorComponent, diagramViewComponent, NgsDiagramModule, RootNgsDiagramModule, RoutingModule as ɵbc, MODULE_CONFIG_TOKEN as ɵe, BooleanoWidgetPartialConfigComponent as ɵm, DiagramPartialConfigEditComponent as ɵj, LinearDiagramPartialConfigComponent as ɵl, NumericDiagramComponent as ɵp, NumericEditDiagramComponent as ɵv, NumericWidgetPartialConfigComponent as ɵu, PieDiagramPartialConfigComponent as ɵk, ServerConnectingTimeDiagramComponent as ɵq, ServerStatusDiagramComponent as ɵr, AddDiagramEffects as ɵbb, DiagramEffects as ɵba, diagramReducer as ɵx, Reducer as ɵy, DiagramReducers as ɵw, ParentGuardReducer as ɵz, DiagramConfigurationService as ɵd, DiagramService as ɵb, AddDiagramComponent as ɵa, DataMapperComponent as ɵt, DiagramModuleContainerComponent as ɵs, diagramViewComponent as ɵg, DiagramComponent as ɵn, DiagramsComponent as ɵf, DynamicComponentSelectorComponent as ɵo, DynamicConfigComponentSelectorComponent as ɵi, EditDiagramComponent as ɵh };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2FjdGlvbnMvYWRkLWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2RpYWdyYW0ubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLWVkaXQtZGlhZ3JhbS9udW1lcmljLWVkaXQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kYXRhLW1hcHBlci9kYXRhLW1hcHBlci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM6IHt9O1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBEaWFncmFtc0FjdGlvblR5cGVzIHtcclxuICBHRVRfRElBR1JBTSA9ICdbRElBR1JBTV0gR0VUX0RJQUdSQU0nLFxyXG4gIEdFVF9ESUFHUkFNX1NUQVJUID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTV9TVEFSVCcsXHJcbiAgR0VUX0RJQUdSQU1fU1VDQ0VFRCA9ICdbRElBR1JBTV0gR0VUX0RJQUdSQU1fU1VDQ0VFRCcsXHJcbiAgR0VUX0RJQUdSQU1fRkFJTEVEID0gJ1tESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU07XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NVQ0NFRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2UpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRGlhZ3JhbXNBY3Rpb24gPVxyXG4gIEdldERpYWdyYW1zXHJcbiAgfCBHZXREaWFncmFtc1N0YXJ0XHJcbiAgfCBHZXREaWFncmFtc1N1Y2NlZWRcclxuICB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGREaWFncmFtQWN0aW9uVHlwZXMge1xyXG4gIEFERF9ESUFHUkFNID0gJ1tESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNJyxcclxuICBBRERfRElBR1JBTV9TVEFSVCA9ICdbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVEFSVCcsXHJcbiAgQUREX0RJQUdSQU1fU1VDQ0VFRCA9ICdbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEJyxcclxuICBESUFHUkFNX0NPTkZJR19DSEFOR0VEID0gJ1tESUFHUkFNXVtBRERdIERJQUdSQU1fQ09ORklHX0NIQU5HRUQnLFxyXG4gIEFERF9ESUFHUkFNX0ZBSUxFRCA9ICdbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9GQUlMRUQnLFxyXG4gIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUID0gJ1tESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUJyxcclxuICBIQVZFX0VORFBPSU5UID0gJ1tESUFHUkFNXVtBRERdIEhBVkVfU1RSVUNUVVJFJyxcclxuICBEQVRBX0xPQURFRCA9ICdbRElBR1JBTV1bQUREXSBEQVRBX0xPQURFRCcsXHJcbiAgU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EID0gJ1tESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCcsXHJcbiAgQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQgPSAnW0RJQUdSQU1dW0FERF0gQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQnLFxyXG4gIERBVEFfQ0FMQ1VMQVRFRCA9ICdbRElBR1JBTV1bQUREXSBEQVRBX0NBTENVTEFURUQnLFxyXG4gIENPTFVNTl9BRERFRCA9ICdbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERUQnLFxyXG4gIEdFTkVSQVRFX0RJQUdSQU0gPSAnW0RJQUdSQU1dW0FERF0gR0VORVJBVEVfRElBR1JBTSdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhhdmVFbmRwb2ludEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gIHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTTtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbkFkZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTl9BRERFRDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuICBBZGREaWFncmFtQWN0aW9uXHJcbiAgfCBBZGREaWFncmFtQWN0aW9uU3RhcnRcclxuICB8IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcbiAgfCBBZGREaWFncmFtQWN0aW9uRmFpbGVkXHJcbiAgfCBIYXZlRW5kcG9pbnRBY3Rpb25cclxuICB8IERhdGFMb2FkZWRBY3Rpb25cclxuICB8IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvblxyXG4gIHwgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uXHJcbiAgfCBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb25cclxuICB8IERhdGFDYWxjdWxhdGVkQWN0aW9uXHJcbiAgfCBHZW5lcmF0ZURpYWdyYW1BY3Rpb25cclxuICB8IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcbiAgRURJVF9ESUFHUkFNID0gJ1tESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU0nLFxyXG4gIEVESVRfRElBR1JBTV9TVEFSVCA9ICdbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NUQVJUJyxcclxuICBFRElUX0RJQUdSQU1fU1VDQ0VFRCA9ICdbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NVQ0NFRUQnLFxyXG4gIEVESVRfRElBR1JBTV9GQUlMRUQgPSAnW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRUQnXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgcmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICByZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuICBFZGl0RGlhZ3JhbUFjdGlvblxyXG4gIHwgRWRpdERpYWdyYW1BY3Rpb25TdGFydFxyXG4gIHwgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcbiAgfCBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZDtcclxuIiwiaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXREaWFncmFtc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRkaWFncmFtOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHQvLyByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHQvLyAgIGRpYWdyYW06IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdC8vIH0pXHJcblx0XHQvL31cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBEaWFncmFtc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdldERpYWdyYW1zQXBpTW9kZWwpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiB7XHJcblx0XHRSZXN1bHQ6IFtdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERpYWdyYW1zQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbTtcclxuIiwiaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtTW9kZWwge1xyXG5cdF9pZDogc3RyaW5nO1xyXG5cdE5hbWU6IHN0cmluZztcclxuXHRJc0FjdGl2ZTogYm9vbGVhbjtcclxuXHREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdEdyb3Vwczogc3RyaW5nW107XHJcblx0Qm94OiB7XHJcblx0XHROdW1iZXJPZkNvbHVtbnM6IG51bWJlcjtcclxuXHRcdE9yZGVyOiBudW1iZXI7XHJcblx0XHRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHR9O1xyXG5cdFNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0V2lkZ2V0OiB7XHJcblx0XHRcImJvb2xlYW5vXCI6IHtcclxuXHRcdFx0XCJTdWNjZXNzTWVzc2FnZVwiOiBzdHJpbmc7XHJcblx0XHRcdFwiRmFpbHVyZU1lc3NhZ2VcIjogc3RyaW5nO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRDaGFydDoge1xyXG5cdFx0ZGF0YToge1xyXG5cdFx0XHR0eXBlOiBcInBpZVwiIHwgXCJsaW5lYXJcIiB8IFwic2NhdHRlclwiIHwgXCJiYXJcIiB8IFwibGluZVwiO1xyXG5cdFx0XHR0eXBlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRcdFx0Y29sdW1uczogYW55W107XHJcblx0XHRcdGNvbG9yczogYW55W107XHJcblx0XHR9O1xyXG5cdFx0RmxvdzogYm9vbGVhbjtcclxuXHRcdENvbHVtbk1hcHBpbmdzOiB7XHJcblx0XHRcdE5hbWVQYXRoOiBzdHJpbmc7XHJcblx0XHRcdFZhbHVlUGF0aDogc3RyaW5nO1xyXG5cdFx0fVtdO1xyXG5cdFx0bGVnZW5kOiB7XHJcblx0XHRcdHNob3c6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0c2hvdzogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHR6b29tOiB7XHJcblx0XHRcdGVuYWJsZWQ6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRncm91cGVkOiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRGlhZ3JhbUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0SXNBY3RpdmU6IEJvb2xlYW47XHJcblx0XHRUeXBlOiBzdHJpbmc7XHJcblx0XHRUeXBlczogeyBbY29sdW1uTGFiZWw6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0TGVnZW5kOiBCb29sZWFuO1xyXG5cdFx0U3ViY2hhcnQ6IEJvb2xlYW47XHJcblx0XHRab29tOiBCb29sZWFuO1xyXG5cdFx0VG9vbHRpcDogQm9vbGVhbjtcclxuXHRcdFJvdXRlOiBzdHJpbmc7XHJcblx0XHRTeW5jOiBudW1iZXI7XHJcblx0XHRDb2xvcnM6IHN0cmluZ1tdO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHsgTmFtZVBhdGg6IHN0cmluZzsgVmFsdWVQYXRoOiBzdHJpbmcgfVtdO1xyXG5cdFx0Rmxvdzogc3RyaW5nO1xyXG5cdFx0Y29sdW1uczogYW55W107XHJcblx0XHRDb2xzOiBudW1iZXI7XHJcblx0XHRSb3dzOiBudW1iZXI7XHJcblx0XHRUZXh0Q29sb3I6IFN0cmluZztcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdFx0Ym9vbGVhbm86IGFueTtcclxuXHRcdFNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0XHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCA9IHt9IGFzIEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogdGhpcy5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRTb3VyY2U6IHRoaXMuU291cmNlLFxyXG5cdFx0XHRcdFR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRHcm91cHM6IHRoaXMuR3JvdXBzLFxyXG5cdFx0XHRcdFdpZGdldDoge1xyXG5cdFx0XHRcdFx0Ym9vbGVhbm86IHRoaXMuYm9vbGVhbm9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdENoYXJ0OiB7XHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRjb2xvcnM6IHRoaXMuQ29sb3JzLFxyXG5cdFx0XHRcdFx0XHR0eXBlczogdGhpcy5UeXBlc1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0RmxvdzogdGhpcy5GbG93LFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuTGVnZW5kXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdGhpcy5TdWJjaGFydFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5ab29tXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdFx0XHRncm91cGVkOiB0aGlzLlRvb2x0aXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdEJveDoge1xyXG5cdFx0XHRcdFx0Q29sczogdGhpcy5Db2xzLFxyXG5cdFx0XHRcdFx0Um93czogdGhpcy5Sb3dzLFxyXG5cdFx0XHRcdFx0VGV4dENvbG9yOiB0aGlzLlRleHRDb2xvcixcclxuXHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXSksXHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTeW5jOiBuZXcgRm9ybUNvbnRyb2woMCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJwaWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRMZWdlbmQ6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFN1YmNoYXJ0OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Wm9vbTogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRvb2x0aXA6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTb3VyY2U6IG5ldyBGb3JtQ29udHJvbCh7fSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGNvbHVtbnM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sczogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3dzOiBuZXcgRm9ybUNvbnRyb2woMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRleHRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiIzAwMDAwMFwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBuZXcgRm9ybUNvbnRyb2woXCIjZmZmZmZmXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb2xvcnM6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG5cdFx0XHRcdFR5cGVzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRDb2x1bW5NYXBwaW5nczogbmV3IEZvcm1BcnJheShbXSksXHJcblx0XHRcdFx0RmxvdzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRcdGRvbnV0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJEZWZhdWx0IFRpdGxlXCIpXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ym9vbGVhbm86IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0U3VjY2Vzc01lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIlN1Y2Nlc3NNZXNzYWdlXCIpLFxyXG5cdFx0XHRcdFx0RmFpbHVyZU1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIkZhaWx1cmVNZXNzYWdlXCIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVkaXREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUmVxdWVzdCkge31cclxuXHRcdGdldFJlcXVlc3RRdWVyeVBhcmFtcygpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IHJlc3BvbnNlU3RhdHVzVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uVHlwZXMsIEVkaXREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhFZGl0RGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH0gYXMgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0RGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgUGFyZW50R3VhcmRBY3Rpb24sIFBhcmVudEd1YXJkQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgICAgIHJvdXRlOiBzdHJpbmc7XHJcbiAgICAgICAgcmVzdWx0OiBib29sZWFuO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuICAgICAgICByb3V0ZTogJycsXHJcbiAgICAgICAgcmVzdWx0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcmVudEd1YXJkUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQYXJlbnRHdWFyZEFjdGlvbik6IFN0YXRlIHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0UGFyZW50Um91dGluZ0d1YXJkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGU7IiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRGlhZ3JhbXNSZWR1Y2VyIGZyb20gXCIuL2RpYWdyYW1zLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgZnJvbUVkaXREaWFncmFtIGZyb20gXCIuL2VkaXQtZGlhZ3JhbS5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIHBhcmVudEd1YXJkUmVkdWNlciBmcm9tIFwiLi9wYXJlbnQtZ3VhcmQucmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtU3RhdGUge1xyXG5cdGRpYWdyYW1zOiBEaWFncmFtc1JlZHVjZXIuU3RhdGU7XHJcblx0ZWRpdERpYWdyYW06IGZyb21FZGl0RGlhZ3JhbS5TdGF0ZTtcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbVJlZHVjZXJzID0ge1xyXG5cdGRpYWdyYW1zOiBEaWFncmFtc1JlZHVjZXIuZGlhZ3JhbVJlZHVjZXIsXHJcblx0ZWRpdERpYWdyYW06IGZyb21FZGl0RGlhZ3JhbS5SZWR1Y2VyLFxyXG5cdHBhcmVudEd1YXJkOiBwYXJlbnRHdWFyZFJlZHVjZXIuUGFyZW50R3VhcmRSZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcblx0XCJkaWFncmFtXCI6IERpYWdyYW1TdGF0ZTtcclxufVxyXG5cclxuLy8jcmVnaW9uIHNlbGVjdG9yc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEZlYXR1cmVTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEaWFncmFtU3RhdGU+KFwiZGlhZ3JhbVwiKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXREaWFncmFtSW5mb3JtYXRpb25TdGF0dXMgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICBzZWxlY3RGZWF0dXJlU3RhdGUsXHJcbi8vICAgKHN0YXRlOiBEaWFncmFtU3RhdGUpID0+IHN0YXRlLmRpYWdyYW1cclxuLy8gKTtcclxuXHJcbi8vI3JlZ2lvbiBlZGl0IGRpYWdyYW1cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEVkaXREaWFncmFtU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5lZGl0RGlhZ3JhbSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1zdGF0dXNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxtYXQtaWNvbiBbbmdDbGFzc109XCJkYXRhU3RhdHVzJCA/ICdjb25uZWN0ZWQnIDogJ2Rpc2Nvbm5lY3RlZCdcIj5cclxuICAgIGZpYmVyX21hbnVhbF9yZWNvcmRcclxuICA8L21hdC1pY29uPiAtLT5cclxuICA8IS0tIDxzcGFuICpuZ0lmPVwiZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLlN1Y2Nlc3NNZXNzYWdlfX08L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCIhZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLkZhaWx1cmVNZXNzYWdlfX08L3NwYW4+IC0tPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AuZGlzY29ubmVjdGVke2NvbG9yOiNiYTMwMzB9LmNvbm5lY3RlZHtjb2xvcjojMzBhZTFjfS5udW1lcmlje2ZvbnQtc2l6ZToyLjRlbTtsaW5lLWhlaWdodDoxLjh9Lm51bWVyaWMudGl0bGV7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hO2ZvbnQtc2l6ZToxLjFlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLl9pZCwgdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbClcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgIH0pO1xyXG5cdFx0Ly8gICB9KVxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPsOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjCDDmMKvw5jCsSDDmMKyw5vCjMOYwrEgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqIMOYwqjDmcKHIMOYwrXDmcKIw5jCscOYwqogw5rCr8OYwrHDmcKIw5nCh8Obwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInBpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkb251dEZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJib29sZWFub0Zvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIlN1Y2Nlc3NNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIkZhaWx1cmVNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGJvb2xlYW5vRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5ib29sZWFub0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmJvb2xlYW5vIGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkb251dEZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJab29tXCIgZnhGbGV4RmlsbD7DmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlN1YmNoYXJ0XCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwowgw5jCr8OYwrEgw5jCssObwozDmMKxIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqiDDmMKow5nChyDDmMK1w5nCiMOYwrHDmMKqIMOawq/DmMKxw5nCiMOZwofDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJGbG93XCIgZnhGbGV4RmlsbD5GbG93PC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1zZXJ2ZXItY29ubmVjdGluZy10aW1lXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCI+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpYyB0aXRsZVwiPnt7ZGF0YS5EZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPCEtLSA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3t0aW1lIHwgdGltZUNvdW50ZXJ9fTwvZGl2PiAtLT5cclxuICA8ZGl2IFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgLm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHRpbWU6IG51bWJlciA9IDA7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGhpcy50aW1lID0gdGhpcy50aW1lICsgMTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSwgdGhpcy5kYXRhLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0Ly8gICAgICAgICB9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBEaWFncmFtTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWcpIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCwgR2V0RGlhZ3JhbXNBcGlNb2RlbCwgRGlhZ3JhbU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXREaWFncmFtcygpOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0R3JvdXBzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbS9ncm91cHNcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFpZCkgZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtLyR7aWR9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZERpYWdyYW0oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3Q8QWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0dXBkYXRlRGlhZ3JhbShib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW1cIiwgYm9keSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZURpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtLyR7aWR9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCwgb25jZTogQm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChvbmNlICYmIHRpbWUgIT09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2UgaWYgKHNvdXJjZS5JbnRlcnZhbCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbWUgPSB0aW1lIHx8IERhdGUubm93KCk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRpbWVyKDAsIHNvdXJjZS5JbnRlcnZhbCkuc3dpdGNoTWFwKGkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhOiBhbnksIGNvbHVtbnNNYXBwaW5ncykge1xyXG5cdFx0bGV0IHJlcyA9IFtdO1xyXG5cclxuXHRcdGNvbHVtbnNNYXBwaW5ncy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHR2YXIgVmFsdWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLlZhbHVlUGF0aCk7XHJcblxyXG5cdFx0XHRpZiAoIWl0ZW0uTmFtZVBhdGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnB1c2goWyBpdGVtLlZhbHVlUGF0aC5zcGxpdChcIi5cIikucG9wKCkgXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIE5hbWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLk5hbWVQYXRoKTtcclxuXHJcblx0XHRcdGlmIChfLmlzLmFycmF5KE5hbWVEYXRhKSkge1xyXG5cdFx0XHRcdHJldHVybiAocmVzID0gcmVzLmNvbmNhdChOYW1lRGF0YS5tYXAoKGl0ZW0sIGkpID0+IFsgaXRlbSBdLmNvbmNhdChWYWx1ZURhdGFbaV0pKSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbIE5hbWVEYXRhIF0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdGdldF9kYXRhX3JlcG9ydChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBfLnJlcG9ydChkYXRhKTtcclxuXHR9XHJcblx0Z2V0X2xhc3Rfbm9kZV9vZl9kYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIChfLnJlcG9ydChkYXRhKSBhcyBhbnlbXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pc0xhc3ROb2RlKTtcclxuXHR9XHJcblx0YnVpbGRDaGFydENvbmZpZyhjb2x1bW5zKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uc1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdC8vIFRPRE86IGltcGxlbWVudCBpbnRlcmZhY2Ugb2YgYzMgY29uZmlnXHJcblx0Y2hhcnRzID0ge307XHJcblx0Z2VuZXJhdGVEaWFncmFtKGNvbmZpZzogYW55LCBpZDogc3RyaW5nLCByb3V0ZTogc3RyaW5nLCBzeW5jOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cdFx0dGhpcy5jaGFydHNbaWRdID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7aWR9YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSh7fSBhcyBTb3VyY2VNb2RlbCwgc3luYykuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0c1tpZF0ubG9hZCh7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgY29uZmlnLkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRGbG9vclRpbWUocHJlY2lzaW9uID0gNjAgKiAxMDAwLCB0aW1lOiBudW1iZXIgPSAwKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGltZSB8fCBEYXRlLm5vdygpKSAvIHByZWNpc2lvbik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnVtZXJpYy1lZGl0LWRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1udW1lcmljXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCI+XHJcbiAgPCEtLSA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3tkYXRhLlNvdXJjZS5EYXRhIHwganNvbn19PC9kaXY+IC0tPlxyXG4gIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e2NvdW50ZXJ9fTwvZGl2PlxyXG4gIDxkaXYgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19Lm1hdC1jYXJke3BhZGRpbmc6MH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdGNvdW50ZXI6IG51bWJlcjtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHRcdHRoaXMuY291bnRlciA9IDA7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGxldCBjb3VudGVyID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKTtcclxuXHRcdFx0dGhpcy5jb3VudGVyID0gY291bnRlclswXVsxXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbi8vIGltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gJ2FwcC9tb2RlbHMvYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBhcHBSZWR1Y2VyIGZyb20gJ2FwcC9yZWR1Y2Vycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLW1vZHVsZS1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhmbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuPC9kaXY+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkYXRhLW1hcHBlclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIEtleVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgVHlwZVxyXG4gICAgICAgIDwvYj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhUmVwb3J0XCIgW2NsYXNzXT1cIidkZXB0c18nICsgaXRlbS5kZXB0c1wiIGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICB7e2l0ZW0ubmFtZX19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAge3tpdGVtLnR5cGV9fVxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2BtYXQtcmFkaW8tYnV0dG9ue3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja31kaXYuZGVwdHNfMnttYXJnaW4tcmlnaHQ6MjVweH1kaXYuZGVwdHNfM3ttYXJnaW4tcmlnaHQ6NTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0YU1hcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZGVzdGluYXRpb246IHN0cmluZztcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLmRhdGFSZXBvcnQgPSBfLnJlcG9ydChkYXRhKTtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdH1cclxuXHRkYXRhUmVwb3J0OiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsLCBEaWFncmFtTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEFkZERpYWdyYW1BY3Rpb24sXHJcblx0Q29sdW1uQWRkZWQsXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0SGF2ZUVuZHBvaW50QWN0aW9uLFxyXG5cdENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbixcclxuXHREYXRhTG9hZGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1hZGRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI2MFwiPlxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiU291cmNlXCIgKGNoYW5nZSk9XCJyb3V0ZUVudGVyZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvdXJjZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW0uRW5kcG9pbnR9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzeW5jIHRpbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJTeW5jXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCIgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+w5nChsOZwojDmMK5IMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiIGNsYXNzPVwiZm9ybS1lbGVtZW50LW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JvdXBzXCIgZm9ybUNvbnRyb2xOYW1lPVwiR3JvdXBzXCIgbXVsdGlwbGU+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIHt7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZSA/IGZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWVbMF0gOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgICAgICAgICAgICAgKCt7e2Zvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWUubGVuZ3RoIC0gMX19IG90aGVycylcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cHMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKENvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2RhdGFdPVwiZGlhZ3JhbVBhcnRpYWxDb25maWdcIj48L2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgaWQ9XCJtb2RpZnktZGlhZ3JhbVwiIGZ4RmxleD1cIjQwXCIgW2RhdGFdPVwiZGlhZ3JhbU1vZGVsXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+IMOYwrPDmMKnw5jCrsOYwqrDmMKnw5jCsSDDmMKvw5vCjMOYwqrDmMKnIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5nChsOawq/DmMKnw5jCtMOYwqogw5jCr8OYwqfDmMKvw5nChzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zTWFwcGluZ3M7IGxldCBpPWluZGV4XCIgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb2x1bW5zTWFwcGluZ3NbaV1cIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0LnhzPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIiBmeEZsZXgueHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwoXDmcKCw5jCr8OYwqfDmMKxIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJWYWx1ZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUNvbHVtbihpKVwiIGZ4RmxleCBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmcK+w5jCp8Oawqkgw5rCqcOYwrHDmMKvw5nChjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRDb2x1bW4oKVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOYwrPDmMKqw5nCiMOZwoY8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmcKGw5jCqsOYwqfDm8KMw5jCrCDDmMKvw5jCp8OYwq/DmcKHIMOZwofDmMKnPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlOyBsZXQgaT1pbmRleFwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW1bMF19fSA6IHt7aXRlbVsxXX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5Db2xvcnNcIiAqbmdJZj1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycykuY29udHJvbHNbaXRlbVswXV1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKxw5nChsOawq8gw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW1bMF1cIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuVHlwZXNcIiAqbmdJZj1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gPGlucHV0IHBsYWNlaG9sZGVyPVwidGlwb1wiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgPiAtLT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInRpcG9cIiBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW1bMF1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlhZ3JhbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5jCuMOYwqfDmcKHw5jCscObwow8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCt8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb2xzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCqsOZwojDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm93c1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPsOYwrHDmcKGw5rCryDDmcKFw5jCqsOZwoYgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVGV4dENvbG9yXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPsOYwrHDmcKGw5rCryDDmcK+w5jCsyDDmMKyw5nChcObwozDmcKGw5nChyA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiQmFja2dyb3VuZENvbG9yXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZCgkZXZlbnQpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD0nbm9ncm93JyBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9kaWFncmFtcyc+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjaGFydHt3aWR0aDozMDBweDtkaXJlY3Rpb246bHRyfS5mb3JtLWVsZW1lbnQtbWFyZ2lue21hcmdpbjo1cHggMTBweH0uaXRlbS1tYXJnaW57bWFyZ2luOjEwcHggMDtkaXNwbGF5OmJsb2NrfW1hdC1vcHRpb24uZGVwdGhfMntwYWRkaW5nLXJpZ2h0OjMwcHh9bWF0LW9wdGlvbi5kZXB0aF8ze3BhZGRpbmctcmlnaHQ6NTBweH1tYXQtb3B0aW9uLmRlcHRoXzR7cGFkZGluZy1yaWdodDo3MHB4fS5tYXQtY2FyZHttYXJnaW46MTIuNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGRhdGE6IGFueTtcclxuXHRjb2x1bW5zOiBhbnk7XHJcblx0Y2hhcnQ7XHJcblx0ZGlhZ3JhbVR5cGVzOiBzdHJpbmdbXTtcclxuXHRwYXRoT3B0aW9uczoge1xyXG5cdFx0cGF0aDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0dHlwZTogc3RyaW5nO1xyXG5cdFx0Y29sb3I6IHN0cmluZztcclxuXHR9W107XHJcblx0Y29sdW1uc01hcHBpbmdzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGlhZ3JhbU1vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0Y29tcG9uZW50TW9kZWw6IHsgY29tcG9uZW50OiBhbnk7IGlucHV0czogb2JqZWN0IH07XHJcblx0dHlwZU1hcFRvRGlhZ3JhbTogeyBbdHlwZTogc3RyaW5nXTogYW55IH07XHJcblx0ZGlhZ3JhbVBhcnRpYWxDb25maWc6IHsgdHlwZTogc3RyaW5nOyBpbnB1dHM6IHsgZm9ybUdyb3VwOiBGb3JtR3JvdXA7IGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSB9IH07XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHRncm91cHM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdHNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHR0aGlzLnNvdXJjZXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdHRoaXMuZ3JvdXBzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRHcm91cHMoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbU1vZGVsID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGhpcy5jb2x1bW5zTWFwcGluZ3MgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdFx0X2lkOiBkYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0TmFtZTogZGF0YS5OYW1lLFxyXG5cdFx0XHRcdFx0XHRJc0FjdGl2ZTogZGF0YS5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRcdFx0R3JvdXBzOiBkYXRhLkdyb3VwcyxcclxuXHRcdFx0XHRcdFx0VHlwZTogZGF0YS5DaGFydC5kYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdExlZ2VuZDogZGF0YS5DaGFydC5sZWdlbmQuc2hvdyxcclxuXHRcdFx0XHRcdFx0U3ViY2hhcnQ6IGRhdGEuQ2hhcnQuc3ViY2hhcnQuc2hvdyxcclxuXHRcdFx0XHRcdFx0Wm9vbTogZGF0YS5DaGFydC56b29tLmVuYWJsZWQsXHJcblx0XHRcdFx0XHRcdFRvb2x0aXA6IGRhdGEuQ2hhcnQudG9vbHRpcC5ncm91cGVkLFxyXG5cdFx0XHRcdFx0XHRTeW5jOiBkYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0U291cmNlOiBkYXRhLlNvdXJjZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogZGF0YS5DaGFydC5kYXRhLmNvbHVtbnMsXHJcblx0XHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiBkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0XHRDb2xzOiBkYXRhLkJveC5Db2xzLFxyXG5cdFx0XHRcdFx0XHRGbG93OiBkYXRhLkNoYXJ0LkZsb3csXHJcblx0XHRcdFx0XHRcdFJvd3M6IGRhdGEuQm94LlJvd3MsXHJcblx0XHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yLFxyXG5cdFx0XHRcdFx0XHRUZXh0Q29sb3I6IGRhdGEuQm94LlRleHRDb2xvclxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEuY29sb3JzIHx8IHt9KS5mb3JFYWNoKGNvbHVtbktleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLmNvbG9yc1tjb2x1bW5LZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEudHlwZXMgfHwge30pLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLnR5cGVzW2tleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncy5mb3JFYWNoKG1hcHBpbmcgPT4gdGhpcy5hZGRDb2x1bW4obWFwcGluZy5OYW1lUGF0aCwgbWFwcGluZy5WYWx1ZVBhdGgpKTtcclxuXHRcdFx0XHRcdHRoaXMuc291cmNlID0gZGF0YS5Tb3VyY2U7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kaWFncmFtVHlwZXMgPSBbXHJcblx0XHRcdFwiYmFyXCIsXHJcblx0XHRcdFwiZG9udXRcIixcclxuXHRcdFx0XCJwaWVcIixcclxuXHRcdFx0XCJzY2F0dGVyXCIsXHJcblx0XHRcdFwibGluZVwiLFxyXG5cdFx0XHRcImFyZWFcIixcclxuXHRcdFx0XCJhcmVhLXNwbGluZVwiLFxyXG5cdFx0XHRcIm51bWVyb1wiLFxyXG5cdFx0XHRcImJvb2xlYW5vXCIsXHJcblx0XHRcdFwidGVtcG9cIlxyXG5cdFx0XTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncy5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhdHVzID09IFwiVkFMSURcIiAmJlxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRhdGFcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhU3Vic2NyaXB0aW9uKSB0aGlzLmRhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Ly8gZ2V0RGF0YSgpIHtcclxuXHQvLyAgIGNvbnN0IG8kID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuc291cmNlKTtcclxuXHQvLyAgIHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG8kLnN1YnNjcmliZShkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKHRoaXMpKVxyXG5cdC8vICAgcmV0dXJuIG8kO1xyXG5cdC8vIH1cclxuXHRnZXREYXRhU3RydWN0dXJlKCkge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEoeyAuLi50aGlzLnNvdXJjZSwgSW50ZXJ2YWw6IDAgfSwgRGF0ZS5ub3coKSAtIDEwMDAwKTtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG9ic2VydmVyLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0XHR0aGlzLnBhdGhPcHRpb25zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRfZGF0YV9yZXBvcnQoZGF0YS5EYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHR0eXBlQ2hhbmdlZCgpIHtcclxuXHRcdGNvbnN0IHR5cGVzRm9ybUdyb3VwID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzIGFzIEZvcm1Hcm91cCkuY29udHJvbHM7XHJcblx0XHRmb3IgKGxldCBjYiBpbiB0eXBlc0Zvcm1Hcm91cCkge1xyXG5cdFx0XHR0eXBlc0Zvcm1Hcm91cFtjYl0uc2V0VmFsdWUodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdGFkZENvbHVtbihOYW1lUGF0aDogc3RyaW5nID0gXCJcIiwgVmFsdWVQYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHR0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0XHROYW1lUGF0aDogWyBOYW1lUGF0aCBdLFxyXG5cdFx0XHRcdFZhbHVlUGF0aDogWyBWYWx1ZVBhdGgsIFZhbGlkYXRvcnMucmVxdWlyZWQgXVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cm91dGVFbnRlcmVkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50LnZhbHVlO1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFNvdXJjZTogZXZlbnQudmFsdWUgfSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRyZW1vdmVDb2x1bW4oaTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblx0Y2FsY3VsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlciA9PiB7XHJcblx0XHRcdHZhciBjb2x1bW5zTUFwcGluZyA9IHtcclxuXHRcdFx0XHQvLyBOYW1lVkFsdWU6ICAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy52YWx1ZXNcclxuXHRcdFx0fTtcclxuXHRcdFx0bGV0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLFxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLnZhbHVlXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMuc2V0VmFsdWUoY29sdW1ucyk7XHJcblx0XHRcdC8vYWRkIG5ldyBpdGVtIHRvIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbG9ycyBmb3JtIGNvbnRyb2xcclxuXHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGxldCBjb2x1bW5LZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKFwiIzEyMzQ1NlwiKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRsZXQga2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0b2JzZXIubmV4dCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdlbmVyYXRlRGlhZ3JhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0dmFyIHRlbXAgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0ZW1wLl9pZCA9IFwidGVtcGxhdGVfaWRcIjtcclxuXHRcdHRlbXAuTmFtZSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlLk5hbWU7XHJcblx0XHR0ZW1wLlNvdXJjZSA9IHRoaXMuc291cmNlO1xyXG5cdFx0dGVtcC5Cb3ggPSB7XHJcblx0XHRcdE51bWJlck9mQ29sdW1uczogMSxcclxuXHRcdFx0T3JkZXI6IDEsXHJcblx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5mb3JtR3JvdXAudmFsdWUuQmFja2dyb3VuZENvbG9yXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5XaWRnZXQgPSB7XHJcblx0XHRcdGJvb2xlYW5vOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ib29sZWFub1xyXG5cdFx0fTtcclxuXHRcdHRlbXAuQ2hhcnQgPSB7XHJcblx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWUsXHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHR0eXBlczogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZXMsXHJcblx0XHRcdFx0Y29sb3JzOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMudmFsdWVcclxuXHRcdFx0fSxcclxuXHRcdFx0RmxvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuRmxvdyxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuTGVnZW5kXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuU3ViY2hhcnRcclxuXHRcdFx0fSxcclxuXHRcdFx0em9vbToge1xyXG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlpvb21cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdGdyb3VwZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlRvb2x0aXBcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0b29sdGlwOiB7XHJcblx0XHRcdC8vICAgICAgICAgZm9ybWF0OiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwiJVwiO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Ly8gY29sb3I6IHtcclxuXHRcdFx0Ly8gICAgICAgICBwYXR0ZXJuOiBbJyM2MEIwNDQnLCAnI0Y2QzYwMCcsICcjRjk3NjAwJywgJyNGRjAwMDAnXSxcclxuXHRcdFx0Ly8gICAgICAgICB0aHJlc2hvbGQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIC8vICB1bml0OiAndmFsdWUnLCAvLyBwZXJjZW50YWdlIGlzIGRlZmF1bHRcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlczogWzMwLCA2MCwgOTAsIDEwMF1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHR9O1xyXG5cdFx0Ly8gdGhpcy5jb21wb25lbnRNb2RlbCA9IHtcclxuXHRcdC8vICAgY29tcG9uZW50OiB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bdGVtcC5DaGFydC5kYXRhLnR5cGVdLFxyXG5cdFx0Ly8gICBpbnB1dHM6IHsgZGF0YTogdGVtcCB9XHJcblx0XHQvLyB9XHJcblx0XHR0aGlzLmRpYWdyYW1Nb2RlbCA9IHRlbXA7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdH1cclxuXHRhZGQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGlhZ3JhbURhdGEkIHwgYXN5bmNcIiBbc3R5bGUuY29sb3JdPVwiKGRpYWdyYW1EYXRhJCB8IGFzeW5jKT8uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYylcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBkaWFncmFtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblxyXG5cdGRpYWdyYW1EYXRhJDogYW55O1xyXG5cdEBJbnB1dChcImlkXCIpIGRpYWdyYW1JZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kaWFncmFtRGF0YSQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0odGhpcy5kaWFncmFtSWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbXNcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XHJcbiAgPG1hdC1ncmlkLXRpbGUgKm5nRm9yPVwibGV0IGRpYWdyYW0gb2YgKGRpYWdyYW1zIHwgYXN5bmMpPy5SZXN1bHRcIiBcclxuICBbY29sc3Bhbl09XCJkaWFncmFtLkJveC5Db2xzXCIgXHJcbiAgW3Jvd3NwYW5dPVwiZGlhZ3JhbS5Cb3guUm93c1wiIFxyXG4gIFtzdHlsZS5jb2xvcl09XCJkaWFncmFtLkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCJkaWFncmFtXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L21hdC1ncmlkLXRpbGU+XHJcbjwvbWF0LWdyaWQtbGlzdD5cclxuPGJyIC8+XHJcbjxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vZGlhZ3JhbXMvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmFkZC1idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjUwcHg7bGVmdDoyNXB4O3otaW5kZXg6MX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cclxuXHRcdC8vIHRoaXMuZGlhZ3JhbXNcclxuXHRcdC8vICAgICAgICAgLmRlbGF5KDEwMClcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkaWFncmFtcyA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIGRpYWdyYW1zLlJlc3VsdC5mb3JFYWNoKGRpYWdyYW0gPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKGRpYWdyYW0uQ2hhcnQsIGRpYWdyYW0uX2lkLCBkaWFncmFtLlNvdXJjZS5Sb3V0ZSwgZGlhZ3JhbS5Tb3VyY2UuU3luYykpKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5zZW5kKFwiYWRkLW1lc3NhZ2VcIik7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uub25NZXNzYWdlKCkuc3Vic2NyaWJlKG1zZz0+e1xyXG5cdFx0Ly8gICAgICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsLCBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjQwMHB4XCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nIChuZ1N1Ym1pdCk9XCJhZGQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqLDmMKvw5jCscOYwrMgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm91dGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIj7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvZm9ybT5cclxuPC9tYXQtY2FyZD5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0bGV0IFJvdXRlID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm92ZXJcIiBmeGxheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwic3RhcnRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cImNlbnRlclwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3t0aW1lIHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cImVuZFwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3tub3cgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwibW9kZWxJc0NvcnJlY3QgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbSB3aWRnZXRcIiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9bWF0LXNsaWRlcnt3aWR0aDoxMDAlfS5kYXRhLXRpbWV7ZGlyZWN0aW9uOmx0cjt0ZXh0LWFsaWduOmNlbnRlcn0ub3Zlcnt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjM1cHg7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6Mzt0cmFuc2l0aW9uOmFsbCAuNHMgZWFzZS1pbi1vdXR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdG1vZGVsSXNDb3JyZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfbW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKHZhbHVlOiBEaWFncmFtTW9kZWwpIHtcclxuXHRcdGlmICghKHZhbHVlLkNoYXJ0ICYmIHZhbHVlLl9pZCkpIHJldHVybjtcclxuXHRcdHRoaXMuX21vZGVsID0gdmFsdWU7XHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0Lm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsO1xyXG5cdH1cclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0Y2hhcnQ6IGFueTtcclxuXHR0aW1lOiBudW1iZXI7XHJcblx0bm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSBJbnRlcnZhbE9ic2VydmFibGVcclxuXHRcdC8vICAgICAgICAgLy8gLmNyZWF0ZSh0aGlzLm1vZGVsLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuY3JlYXRlKDk5OSlcclxuXHRcdC8vICAgICAgICAgLnN3aXRjaE1hcChpID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogJzAnXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSlcclxuXHRcdC8vICAgICAgICAgKVxyXG5cdFx0Ly8gICAgICAgICAvLyAuc3dpdGNoTWFwKChyZXM6IGFueSkgPT4gT2JzZXJ2YWJsZS5vZihyZXMuUmVzdWx0LkRhdGEpKVxyXG5cdFx0Ly8gICAgICAgICAubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdC5EYXRhKVxyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5kZWxheSgzMDApLmZpbHRlcihkYXRhID0+IGRhdGEpLnN1YnNjcmliZShzdGF0ZSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnQgPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdFx0Li4udGhpcy5kYXRhLkNoYXJ0LFxyXG5cdFx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7dGhpcy5kYXRhLl9pZH1gXHJcblx0XHRcdFx0Ly8gc2l6ZToge1xyXG5cdFx0XHRcdC8vICAgICAgICAgaGVpZ2h0OiAxNTBcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0LmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSlcclxuXHRcdFx0XHQuZmlsdGVyKGRhdGEgPT4gZGF0YSAhPSB1bmRlZmluZWQpXHJcblx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuQ2hhcnQuRmxvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmZsb3coe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5DaGFydCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5faWQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5TeW5jXHJcblx0XHQvLyApO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHR0aW1lQ2hhbmdlKGU6IE1hdFNsaWRlckNoYW5nZSkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgRGF0ZS5ub3coKSAtICgoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCksIHRydWUpXHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdC5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIERhdGUubm93KCkgLSAoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCwgdHJ1ZSlcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0Ly8gICAgICAgICAuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHQvLyAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGNvbHVtblswXSArPSAnX2hpc3RvcmljJztcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuXHRcdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhY2tncm91bmRDb2xvclwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gc3RyZXRjaFwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIwIDAgYXV0b1wiICpuZ0lmPVwiX2RhdGFcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCIgY2xhc3M9XCJ3aWRnZXQtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tfZGF0YS5OYW1lfX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydlZGl0JyAsICBfZGF0YS5faWRdXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBkaWFncmFtXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDxtYXQtY2FyZC1jb250ZW50PiAtLT5cclxuICAgIDwhLS0gPG1hdC1zbGlkZXIgaW52ZXJ0IFsobmdNb2RlbCldPVwidGltZVwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPiAtLT5cclxuICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwib3ZlclwiIGZ4RmxleD1cIjAgMCBhdXRvXCIgaW52ZXJ0IG1pbj0nMScgbWF4PScxMDAwJyB2YWx1ZT1cIjEwMDBcIiAoY2hhbmdlKT1cInRpbWVDaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXNsaWRlcj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMSAxIGF1dG9cIiBjbGFzcz1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDwvbWF0LWNhcmQtY29udGVudD4gLS0+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTttYXJnaW46MTIuNXB4fS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9LndpZGdldC10aXRsZXtmb250OjEuM2VtIElSQU5TYW5zLHRhaG9tYX0ub3Zlcnt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjYwcHg7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6Mzt0cmFuc2l0aW9uOmFsbCAuNHMgZWFzZS1pbi1vdXR9YF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblx0dHlwZU1hcFRvRGlhZ3JhbSA9IHtcclxuXHRcdGJhcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0cGllOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGxpbmU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRhcmVhOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bnVtZXJvOiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHRlbXBvOiBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRib29sZWFubzogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAVmlld0NoaWxkKERpYWdyYW1Db21wb25lbnQpIHdpZGdldENvbXBvbmVudDogRGlhZ3JhbUNvbXBvbmVudDtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3I7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdGxldCByYXcgPSB7IGRhdGEgfTtcclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEuQ2hhcnQuZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKHJhdykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IHJhd1tpbnB1dE5hbWVdIH07XHJcblx0XHR9KTtcclxuXHRcdGxldCByZXNvbHZlZElucHV0cyA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlKGlucHV0UHJvdmlkZXJzKTtcclxuXHJcblx0XHRsZXQgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IuZnJvbVJlc29sdmVkUHJvdmlkZXJzKFxyXG5cdFx0XHRyZXNvbHZlZElucHV0cyxcclxuXHRcdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcblx0XHQpO1xyXG5cdFx0bGV0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KF9jb21wb25lbnQpO1xyXG5cclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGJhY2tncm91bmRDb2xvcjogU3RyaW5nID0gXCJcIjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge31cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5fY29tcG9uZW50LnRpbWVDaGFuZ2UoZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRhcmVhOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0cGllOiBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGxpbmU6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IGRhdGEuaW5wdXRzW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0aWYgKCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuQ29uZmlnQ2hhbmdlZClcclxuXHRcdFx0KDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbXNBY3Rpb25UeXBlcywgR2V0RGlhZ3JhbXMsIEdldERpYWdyYW1zU3RhcnQsIEdldERpYWdyYW1zU3VjY2VlZCwgR2V0RGlhZ3JhbXNGYWlsZWQgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsLCBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKCkucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldERpYWdyYW1zU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0RGlhZ3JhbXMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEdldERpYWdyYW1zU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBHZXREaWFncmFtc0ZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdEFkZERpYWdyYW1BY3Rpb25UeXBlcyxcclxuXHRBZGREaWFncmFtQWN0aW9uLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdGFydCxcclxuXHRBZGREaWFncmFtQWN0aW9uU3VjY2VlZCxcclxuXHRBZGREaWFncmFtQWN0aW9uRmFpbGVkLFxyXG5cdEdlbmVyYXRlRGlhZ3JhbUFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uLFxyXG5cdERhdGFMb2FkZWRBY3Rpb25cclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3RhcnQoZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHQuYWRkRGlhZ3JhbShkYXRhKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkKHJlcykpLFxyXG5cdFx0XHRcdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEFkZERpYWdyYW1BY3Rpb25GYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRtYXAoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJkaWFncmFtc1wiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRIQVZFX0VORFBPSU5UJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0REFUQV9MT0FERUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5nZXREYXRhU3RydWN0dXJlKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQpXHJcblx0XHQvLyAuc2tpcFVudGlsKHRoaXMuYWN0aW9ucyQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRCkpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRHZW5lcmF0ZURpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBkYXRhLmdlbmVyYXRlRGlhZ3JhbSgpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZGlhZ3JhbXNcIixcclxuXHRcdGNvbXBvbmVudDogRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRGlhZ3JhbXNDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOmlkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm51bWVyb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogTnVtZXJpY0RpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwidGVtcG9cIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJib29sZWFub1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXMgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJEaWFncmFtc1wiIFsobmdNb2RlbCldPVwic2VsZWN0ZWREaWFncmFtSWRcIiBuYW1lPVwic2VsZWN0ZWREaWFncmFtSWRcIj5cclxuICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGlhZ3JhbXMkIHwgYXN5bmMpXCIgW3ZhbHVlXT1cIml0ZW0uX2lkXCI+XHJcbiAgICB7e2l0ZW0uX2lkfX1cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHcmlkSXRlbUNvbXBvbmVudDx7IGRpYWdyYW1JZDogc3RyaW5nIH0+IHtcclxuXHRkaWFncmFtcyQ6IE9ic2VydmFibGU8RGlhZ3JhbU1vZGVsW10+O1xyXG5cdHNlbGVjdGVkRGlhZ3JhbUlkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRpYWdyYW1JZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkaWFncmFtSWQ6IHRoaXMuc2VsZWN0ZWREaWFncmFtSWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKS5waXBlKG1hcCgocmVzKSA9PiByZXMuUmVzdWx0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRUb29sdGlwTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1lZGl0LWRpYWdyYW0vbnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhTWFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kYXRhLW1hcHBlci9kYXRhLW1hcHBlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBkaWFncmFtVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZWRpdC1kaWFncmFtL2VkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvYWRkLWRpYWdyYW0uZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RpYWdyYW0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0XHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRcdE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBZGREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbXNDb21wb25lbnQsXHJcblx0XHRkaWFncmFtVmlld0NvbXBvbmVudCxcclxuXHRcdEVkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXRhTWFwcGVyQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHROdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50LCBkaWFncmFtVmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRGlhZ3JhbU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRGlhZ3JhbU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRGlhZ3JhbU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJkaWFncmFtXCIsIERpYWdyYW1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBEaWFncmFtRWZmZWN0cywgQWRkRGlhZ3JhbUVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0RpYWdyYW1Nb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0RpYWdyYW1Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIkRpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlciIsImZyb21FZGl0RGlhZ3JhbS5SZWR1Y2VyIiwicGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlciIsIkJlaGF2aW9yU3ViamVjdCIsIk9ic2VydmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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UUFBUSxDQUFFLENBQUM7Z0JBQ2xELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ2pELFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQzFELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3JELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3BELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3hELFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQzNELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQzFELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ25ELE1BQU0sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ3JELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7Z0JBQ2pELElBQUksRUFBRSxJQUFJ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
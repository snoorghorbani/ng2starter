import { InjectionToken, Component, Injector, Input, EventEmitter, Output, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, ReflectiveInjector, ComponentFactoryResolver, ViewChild, ViewContainerRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatSliderModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatTooltipModule, MatGridListModule, MatAutocompleteModule } from '@angular/material';
import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { BehaviorSubject, Subject as Subject$1, of } from 'rxjs';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { Observable, Subject } from 'rxjs/Rx';
import { takeUntil, switchMap, map, filter, catchError, pluck } from 'rxjs/operators';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { __decorate, __metadata } from 'tslib';
import { of as of$1 } from 'rxjs/observable/of';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DiagramModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    DiagramModuleConfig.prototype.endpoints;
    /** @type {?|undefined} */
    DiagramModuleConfig.prototype.env;
}
/** @type {?} */
const MODULE_DEFAULT_CONFIG = {
    endpoints: {},
    env: {
        production: false,
        frontend_server: "frontend/server/did/not/set"
    }
};
/** @type {?} */
const MODULE_CONFIG_TOKEN = new InjectionToken("DiagramModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
    }
    GetDiagramsApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.diagram;
    }
    class Response {
        constructor() { }
    }
    GetDiagramsApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetDiagramsApiModel || (GetDiagramsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DiagramsActionTypes = {
    GET_DIAGRAM: "[DIAGRAM] GET_DIAGRAM",
    GET_DIAGRAM_START: "[DIAGRAM] GET_DIAGRAM_START",
    GET_DIAGRAM_SUCCEED: "[DIAGRAM] GET_DIAGRAM_SUCCEED",
    GET_DIAGRAM_FAILED: "[DIAGRAM] GET_DIAGRAM_FAILED",
};
class GetDiagrams {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM;
    }
}
if (false) {
    /** @type {?} */
    GetDiagrams.prototype.type;
}
class GetDiagramsStart {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
}
if (false) {
    /** @type {?} */
    GetDiagramsStart.prototype.type;
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
if (false) {
    /** @type {?} */
    GetDiagramsSucceed.prototype.type;
    /** @type {?} */
    GetDiagramsSucceed.prototype.payload;
}
class GetDiagramsFailed {
    constructor() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    GetDiagramsFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
console.log(GetDiagramsApiModel);
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?} */
    State.prototype.loaded;
    /** @type {?} */
    State.prototype.diagram;
}
/** @type {?} */
const initialState = {
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
/** @type {?} */
const DiagramInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.diagram);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        // TODO:
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
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(EditDiagramApiModel || (EditDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EditDiagramActionTypes = {
    EDIT_DIAGRAM: "[DIAGRAM][EDIT] EDIT_DIAGRAM",
    EDIT_DIAGRAM_START: "[DIAGRAM][EDIT] EDIT_DIAGRAM_START",
    EDIT_DIAGRAM_SUCCEED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED",
    EDIT_DIAGRAM_FAILED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED",
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
if (false) {
    /** @type {?} */
    EditDiagramAction.prototype.type;
    /** @type {?} */
    EditDiagramAction.prototype.payload;
}
class EditDiagramActionStart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionStart.prototype.type;
    /** @type {?} */
    EditDiagramActionStart.prototype.payload;
}
class EditDiagramActionSucceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionSucceed.prototype.type;
    /** @type {?} */
    EditDiagramActionSucceed.prototype.payload;
}
class EditDiagramActionFailed {
    constructor() {
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    EditDiagramActionFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
console.log(EditDiagramApiModel);
/**
 * @record
 */
function State$1() { }
if (false) {
    /** @type {?} */
    State$1.prototype.status;
    /** @type {?} */
    State$1.prototype.data;
}
const ɵ0 = ({ Result: {} });
/** @type {?} */
const initialState$1 = {
    status: "pristine",
    data: (/** @type {?} */ (ɵ0))
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
/** @type {?} */
const EditDiagramInfo = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.data);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State$2() { }
if (false) {
    /** @type {?} */
    State$2.prototype.route;
    /** @type {?} */
    State$2.prototype.result;
}
/** @type {?} */
const initialState$2 = {
    route: "",
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
/** @type {?} */
var getParentRoutingGuard = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DiagramState() { }
if (false) {
    /** @type {?} */
    DiagramState.prototype.diagrams;
    /** @type {?} */
    DiagramState.prototype.editDiagram;
    /** @type {?} */
    DiagramState.prototype.parentGuard;
}
/** @type {?} */
const DiagramReducers = {
    diagrams: diagramReducer,
    editDiagram: Reducer,
    parentGuard: ParentGuardReducer
};
/**
 * @record
 */
function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.diagram;
}
//#region selectors
/** @type {?} */
const selectFeatureState = createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.editDiagram;
/** @type {?} */
const selectEditDiagramState = createSelector(selectFeatureState, (ɵ0$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\r\n    fiber_manual_record\r\n  </mat-icon> -->\r\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\r\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\r\n</div>",
                styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            }] }
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    ServerStatusDiagramComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    ServerStatusDiagramComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\r\n  </div>\r\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
DiagramPartialConfigEditComponent.ctorParameters = () => [
    { type: Injector }
];
DiagramPartialConfigEditComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.dataSubscribtion;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.dataLoaded;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype._data;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.diagramService;
    /** @type {?} */
    DiagramPartialConfigEditComponent.prototype.formGroup;
    /**
     * @type {?}
     * @private
     */
    DiagramPartialConfigEditComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.donutFormGroup = (/** @type {?} */ (this.formGroup.controls.donut));
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
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n    </div>\r\n  </form>\r\n  <form [formGroup]=\"donutFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
PieDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
PieDiagramPartialConfigComponent.propDecorators = {
    ConfigChanged: [{ type: Output }],
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    PieDiagramPartialConfigComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    PieDiagramPartialConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.booleanoFormGroup = (/** @type {?} */ (this.formGroup.controls.booleano));
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
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"booleanoFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.booleanoFormGroup;
    /** @type {?} */
    BooleanoWidgetPartialConfigComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    BooleanoWidgetPartialConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.donutFormGroup = (/** @type {?} */ (this.formGroup.controls.donut));
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
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <form [formGroup]=\"donutFormGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\r\n    </mat-form-field>\r\n  </form>\r\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype._dataLoaded;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.donutFormGroup;
    /** @type {?} */
    NumericWidgetPartialConfigComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    NumericWidgetPartialConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\r\n  </div>\r\n  <div>\r\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\r\n  </div>\r\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = () => [
    { type: Injector }
];
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: Input }],
    ConfigChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataSubscribtion;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.dataLoaded;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype._data;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.ConfigChanged;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.diagramService;
    /** @type {?} */
    LinearDiagramPartialConfigComponent.prototype.formGroup;
    /**
     * @type {?}
     * @private
     */
    LinearDiagramPartialConfigComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        setInterval((/**
         * @return {?}
         */
        () => {
            this.time = this.time + 1;
        }), 1000);
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
                template: "<div *ngIf=\"dataLoaded | async\">\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            }] }
];
/** @nocollapse */
ServerConnectingTimeDiagramComponent.ctorParameters = () => [
    { type: Injector }
];
ServerConnectingTimeDiagramComponent.propDecorators = {
    time: [{ type: Input }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype.time;
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    ServerConnectingTimeDiagramComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    ServerConnectingTimeDiagramComponent.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] }
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
];
/** @nocollapse */ DiagramConfigurationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(ɵɵinject(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DiagramConfigurationService.prototype._config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue = (/** @type {?} */ ({}))) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
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
    if (false) {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.Name;
        /** @type {?} */
        Request.prototype.IsActive;
        /** @type {?} */
        Request.prototype.Type;
        /** @type {?} */
        Request.prototype.Types;
        /** @type {?} */
        Request.prototype.Legend;
        /** @type {?} */
        Request.prototype.Subchart;
        /** @type {?} */
        Request.prototype.Zoom;
        /** @type {?} */
        Request.prototype.Tooltip;
        /** @type {?} */
        Request.prototype.Route;
        /** @type {?} */
        Request.prototype.Sync;
        /** @type {?} */
        Request.prototype.Colors;
        /** @type {?} */
        Request.prototype.ColumnMappings;
        /** @type {?} */
        Request.prototype.Flow;
        /** @type {?} */
        Request.prototype.columns;
        /** @type {?} */
        Request.prototype.Cols;
        /** @type {?} */
        Request.prototype.Rows;
        /** @type {?} */
        Request.prototype.TextColor;
        /** @type {?} */
        Request.prototype.BackgroundColor;
        /** @type {?} */
        Request.prototype.booleano;
        /** @type {?} */
        Request.prototype.Source;
        /** @type {?} */
        Request.prototype.Groups;
    }
    class Response {
        constructor() { }
    }
    AddDiagramApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DiagramService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
        this.config = this.configurationService.config;
    }
    /**
     * @return {?}
     */
    getDiagrams() {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get(this.config.env.frontend_server + "/api/source")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => ((/** @type {?} */ (response))).Result))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @return {?}
     */
    getGroups() {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram/groups")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => ((/** @type {?} */ (response))).Result))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiagram(id) {
        if (!id)
            debugger;
        return this.http
            .get(this.config.env.frontend_server + `/api/diagram/${id}`)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    addDiagram(data) {
        /** @type {?} */
        const model = new AddDiagramApiModel.Request(data);
        return this.http
            .post(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    updateDiagram(body) {
        return this.http
            .put(this.config.env.frontend_server + "/api/diagram", body)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteDiagram(id) {
        return this.http
            .delete(`${this.config.env.frontend_server}/api/diagram/${id}`)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    getData(source, unsubscribe, time = 0, once = false) {
        if (once && time !== 0) {
            return this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result));
        }
        else if (source.Interval == 0) {
            return this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result));
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).pipe(takeUntil(unsubscribe), switchMap((/**
             * @param {?} i
             * @return {?}
             */
            (i) => this.http
                .get(`${this.config.env.frontend_server}/api/data`, {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            }).pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res.Result))))));
        }
    }
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    extract_columns_from_data(data, columnsMappings) {
        /** @type {?} */
        let res = [];
        columnsMappings.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            /** @type {?} */
            const NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map((/**
                 * @param {?} _item
                 * @param {?} i
                 * @return {?}
                 */
                (_item, i) => [_item].concat(ValueData[i])))));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        }));
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
        return ((/** @type {?} */ (_.report(data)))).filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.isLastNode));
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
        return this.getData((/** @type {?} */ ({})), new Subject(), sync).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.charts[id].load({
                columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        }));
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
            },] }
];
/** @nocollapse */
DiagramService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: DiagramConfigurationService }
];
/** @nocollapse */ DiagramService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(ɵɵinject(HttpClient), ɵɵinject(Store), ɵɵinject(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DiagramService.prototype.config;
    /** @type {?} */
    DiagramService.prototype.charts;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DiagramService.prototype.configurationService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericEditDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject$1();
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
        this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data != undefined)), takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            debugger;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.dataSubscribtion.unsubscribe();
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
NumericEditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-edit-diagram",
                template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\r\n  <mat-card-header>\r\n    <mat-card-title fxLayoutAlign=\"space-between center\">\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n  </mat-card-content>\r\n</mat-card>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            }] }
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NumericEditDiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    NumericEditDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericEditDiagramComponent.prototype._data;
    /**
     * @type {?}
     * @private
     */
    NumericEditDiagramComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NumericEditDiagramComponent.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericDiagramComponent {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    constructor(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject$1();
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
        this.dataSubscribtion = this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const counter = this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings);
            this.counter = counter[0][1];
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dataSubscribtion.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
NumericDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-numeric",
                template: "<div *ngIf=\"dataLoaded | async\">\r\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\r\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\r\n  <div [id]=\"'diagram_' + data._id\"></div>\r\n</div>",
                styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
            }] }
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = () => [
    { type: Injector },
    { type: DiagramService }
];
NumericDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NumericDiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    NumericDiagramComponent.prototype.dataLoaded;
    /** @type {?} */
    NumericDiagramComponent.prototype._data;
    /** @type {?} */
    NumericDiagramComponent.prototype.counter;
    /** @type {?} */
    NumericDiagramComponent.prototype.dataSubscribtion;
    /**
     * @type {?}
     * @private
     */
    NumericDiagramComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NumericDiagramComponent.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import * as appReducer from 'app/reducers';
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
                template: "<div fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = () => [
    { type: DiagramService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DiagramModuleContainerComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div fxLayout=\"row\">\r\n    <div fxFlex=\"grow\">\r\n        <b>\r\n            Key\r\n        </b>\r\n    </div>\r\n    <div fxFlex=\"nogrow\">\r\n        <b>\r\n            Type\r\n        </b>\r\n    </div>\r\n</div>\r\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\r\n    <div fxFlex=\"grow\">\r\n        {{item.name}}\r\n    </div>\r\n    <div fxFlex=\"nogrow\">\r\n        {{item.type}}\r\n    </div>\r\n</div>\r\n",
                styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
            }] }
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
if (false) {
    /** @type {?} */
    DataMapperComponent.prototype.destination;
    /** @type {?} */
    DataMapperComponent.prototype._data;
    /** @type {?} */
    DataMapperComponent.prototype.dataReport;
    /**
     * @type {?}
     * @private
     */
    DataMapperComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    DataMapperComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DiagramModel {
}
if (false) {
    /** @type {?} */
    DiagramModel.prototype._id;
    /** @type {?} */
    DiagramModel.prototype.Name;
    /** @type {?} */
    DiagramModel.prototype.IsActive;
    /** @type {?} */
    DiagramModel.prototype.Description;
    /** @type {?} */
    DiagramModel.prototype.Groups;
    /** @type {?} */
    DiagramModel.prototype.Box;
    /** @type {?} */
    DiagramModel.prototype.Source;
    /** @type {?} */
    DiagramModel.prototype.Widget;
    /** @type {?} */
    DiagramModel.prototype.Chart;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AddDiagramActionTypes = {
    ADD_DIAGRAM: "[DIAGRAM][ADD] ADD_DIAGRAM",
    ADD_DIAGRAM_START: "[DIAGRAM][ADD] ADD_DIAGRAM_START",
    ADD_DIAGRAM_SUCCEED: "[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED",
    DIAGRAM_CONFIG_CHANGED: "[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED",
    ADD_DIAGRAM_FAILED: "[DIAGRAM][ADD] ADD_DIAGRAM_FAILED",
    STRUCTURE_DEFINITION_START: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_START",
    HAVE_ENDPOINT: "[DIAGRAM][ADD] HAVE_STRUCTURE",
    DATA_LOADED: "[DIAGRAM][ADD] DATA_LOADED",
    STRUCTURE_DEFINITION_END: "[DIAGRAM][ADD] STRUCTURE_DEFINITION_END",
    COLUMNS_MAPPING_CHANGED: "[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED",
    DATA_CALCULATED: "[DIAGRAM][ADD] DATA_CALCULATED",
    COLUMN_ADDED: "[DIAGRAM][ADD] COLUMN_ADDED",
    GENERATE_DIAGRAM: "[DIAGRAM][ADD] GENERATE_DIAGRAM",
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
if (false) {
    /** @type {?} */
    AddDiagramAction.prototype.type;
    /** @type {?} */
    AddDiagramAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    AddDiagramActionStart.prototype.type;
    /** @type {?} */
    AddDiagramActionStart.prototype.payload;
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
if (false) {
    /** @type {?} */
    AddDiagramActionSucceed.prototype.type;
    /** @type {?} */
    AddDiagramActionSucceed.prototype.payload;
}
class AddDiagramActionFailed {
    constructor() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
}
if (false) {
    /** @type {?} */
    AddDiagramActionFailed.prototype.type;
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
if (false) {
    /** @type {?} */
    DiagramConfigChangedAction.prototype.type;
    /** @type {?} */
    DiagramConfigChangedAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    HaveEndpointAction.prototype.type;
    /** @type {?} */
    HaveEndpointAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    DataLoadedAction.prototype.type;
    /** @type {?} */
    DataLoadedAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    StructureDefinitionStartAction.prototype.type;
    /** @type {?} */
    StructureDefinitionStartAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.type;
    /** @type {?} */
    StructureDefinitionFinishedAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.type;
    /** @type {?} */
    ColumnsMappingChangedAction.prototype.payload;
}
class DataCalculatedAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_CALCULATED;
    }
}
if (false) {
    /** @type {?} */
    DataCalculatedAction.prototype.type;
    /** @type {?} */
    DataCalculatedAction.prototype.payload;
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
if (false) {
    /** @type {?} */
    GenerateDiagramAction.prototype.type;
    /** @type {?} */
    GenerateDiagramAction.prototype.payload;
}
class ColumnAdded {
    constructor() {
        this.type = AddDiagramActionTypes.COLUMN_ADDED;
    }
}
if (false) {
    /** @type {?} */
    ColumnAdded.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.unsubscribe = new Subject$1();
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
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
                    /** @type {?} */
                    const colorsControl = (/** @type {?} */ (this.formGroup.controls["Colors"]));
                    Object.keys(data.Chart.data.colors || {}).forEach((/**
                     * @param {?} columnKey
                     * @return {?}
                     */
                    columnKey => {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    }));
                    /** @type {?} */
                    const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
                    Object.keys(data.Chart.data.types || {}).forEach((/**
                     * @param {?} key
                     * @return {?}
                     */
                    key => {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    }));
                    data.Chart.ColumnMappings.forEach((/**
                     * @param {?} mapping
                     * @return {?}
                     */
                    mapping => this.addColumn(mapping.NamePath, mapping.ValuePath)));
                    this.source = data.Source;
                    this.store.dispatch(new HaveEndpointAction(this));
                    this.diagramPartialConfig = {
                        type: this.formGroup.value.Type,
                        inputs: {
                            formGroup: this.formGroup,
                            diagramService: this.diagramService
                        }
                    };
                }));
            this.diagramPartialConfig = {
                type: this.formGroup.value.Type,
                inputs: {
                    formGroup: this.formGroup,
                    diagramService: this.diagramService
                }
            };
        }));
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
        this.formGroup.controls.ColumnMappings.statusChanges.subscribe((/**
         * @param {?} status
         * @return {?}
         */
        status => {
            if (status == "VALID" &&
                ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).controls.length > 0 &&
                this.data)
                this.store.dispatch(new ColumnsMappingChangedAction(this));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    /**
     * @return {?}
     */
    getDataStructure() {
        debugger;
        /** @type {?} */
        const observer = this.diagramService.getData(Object.assign({}, this.source, { Interval: 0 }), this.unsubscribe, Date.now() - 10000);
        this.dataSubscription = observer.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data.Data;
            this.pathOptions = this.diagramService.get_data_report(data.Data);
        }));
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
        /** @type {?} */
        const typesFormGroup = ((/** @type {?} */ (this.formGroup.controls.Types))).controls;
        // tslint:disable-next-line:forin
        for (const cb in typesFormGroup) {
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
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
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
        debugger;
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeColumn(i) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"]));
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    calculateColumns() {
        return Observable$1.create((/**
         * @param {?} obser
         * @return {?}
         */
        obser => {
            /** @type {?} */
            const columnsMApping = {
            // NameVAlue:  (this.formGroup.controls.ColumnMappings as FormArray).controls.values
            };
            /** @type {?} */
            const columns = this.diagramService.extract_columns_from_data(this.data, ((/** @type {?} */ (this.formGroup.controls.ColumnMappings))).value);
            this.formGroup.controls.columns.setValue(columns);
            // add new item to this.formGroup.controls.colors form control
            /** @type {?} */
            const colorsControl = (/** @type {?} */ (this.formGroup.controls["Colors"]));
            columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                /** @type {?} */
                const columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            }));
            /** @type {?} */
            const typesControl = (/** @type {?} */ (this.formGroup.controls["Types"]));
            columns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                /** @type {?} */
                const key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(this.formGroup.value.Type));
            }));
            obser.next();
        }));
    }
    /**
     * @return {?}
     */
    generateDiagram() {
        /** @type {?} */
        const temp = new DiagramModel();
        temp._id = "template_id";
        temp.Name = this.formGroup.value.Name;
        debugger;
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
                columns: this.formGroup.controls.columns.value,
                type: this.formGroup.value.Type,
                types: this.formGroup.value.Types,
                colors: this.formGroup.controls.Colors.value
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
            // tooltip: {
            //         format: {
            //                 value: function (value) {
            //                         return value + "%";
            //                 }
            //         }
            // },
            // color: {
            //         pattern: ['#60B044', '#F6C600', '#F97600', '#FF0000'],
            //         threshold: {
            //                 //  unit: 'value', // percentage is default
            //                 values: [30, 60, 90, 100]
            //         }
            // },
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
                template: "<div fxLayout=\"column\" fxFlex=\"100\">\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"60\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (selectionChange)=\"routeEntered($event)\">\r\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\r\n                {{item.Endpoint}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\r\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\r\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\r\n                {{item}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\r\n              <mat-select-trigger>\r\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\r\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\r\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\r\n                </span>\r\n              </mat-select-trigger>\r\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\r\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\r\n                    <mat-option>--</mat-option>\r\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\r\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\r\n                      {{item.path}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <button (click)=\"removeColumn(i)\" fxFlex mat-icon-button>\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <div class=\"item-margin\">\r\n          <div class=\"list-item\" fxLayout=\"row\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\"\r\n            fxLayoutAlign=\"space-between center\">\r\n            <span fxFlex=\"40\">{{item[0]}} : {{item[1]}}</span>\r\n            <span fxFlex [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\r\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\r\n            </span>\r\n            <mat-form-field fxFlex=\"30\" [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\r\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\r\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\r\n                <mat-option>--</mat-option>\r\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\r\n                  {{item}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\r\n      <mat-card-header>\r\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content [formGroup]=\"formGroup\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\r\n        </mat-form-field>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\r\n          <span>\r\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n        <div fxLayout=\"row\">\r\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\r\n          <span>\r\n            <input formControlName=\"BackgroundColor\" type=\"color\">\r\n          </span>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div>\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>",
                styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
            }] }
];
/** @nocollapse */
AddDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: FormBuilder },
    { type: Store },
    { type: ActivatedRoute }
];
if (false) {
    /** @type {?} */
    AddDiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    AddDiagramComponent.prototype.formGroup;
    /** @type {?} */
    AddDiagramComponent.prototype.data;
    /** @type {?} */
    AddDiagramComponent.prototype.columns;
    /** @type {?} */
    AddDiagramComponent.prototype.chart;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramTypes;
    /** @type {?} */
    AddDiagramComponent.prototype.pathOptions;
    /** @type {?} */
    AddDiagramComponent.prototype.columnsMappings;
    /** @type {?} */
    AddDiagramComponent.prototype.dataSubscription;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramModel;
    /** @type {?} */
    AddDiagramComponent.prototype.componentModel;
    /** @type {?} */
    AddDiagramComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    AddDiagramComponent.prototype.diagramPartialConfig;
    /** @type {?} */
    AddDiagramComponent.prototype.sources;
    /** @type {?} */
    AddDiagramComponent.prototype.groups;
    /** @type {?} */
    AddDiagramComponent.prototype.source;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    AddDiagramComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\r\n</div>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
            }] }
];
/** @nocollapse */
diagramViewComponent.ctorParameters = () => [
    { type: DiagramService }
];
diagramViewComponent.propDecorators = {
    diagramId: [{ type: Input, args: ["id",] }]
};
if (false) {
    /** @type {?} */
    diagramViewComponent.prototype.diagrams;
    /** @type {?} */
    diagramViewComponent.prototype.width;
    /** @type {?} */
    diagramViewComponent.prototype.diagramData$;
    /** @type {?} */
    diagramViewComponent.prototype.diagramId;
    /**
     * @type {?}
     * @private
     */
    diagramViewComponent.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\r\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \r\n  [colspan]=\"diagram.Box.Cols\" \r\n  [rowspan]=\"diagram.Box.Rows\" \r\n  [style.color]=\"diagram.Box.Color\">\r\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n<br />\r\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\r\n</div>\r\n<div fxLayoutAlign='end center'>\r\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\r\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n  </button>\r\n</div>\r\n",
                styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            }] }
];
/** @nocollapse */
DiagramsComponent.ctorParameters = () => [
    { type: DiagramService }
];
if (false) {
    /** @type {?} */
    DiagramsComponent.prototype.diagrams;
    /** @type {?} */
    DiagramsComponent.prototype.width;
    /**
     * @type {?}
     * @private
     */
    DiagramsComponent.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        let Route = this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const diagramId = params["id"];
            this.diagramService.getDiagram(diagramId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => this.formGroup.patchValue(data)));
        }));
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
                template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\r\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\r\n\r\n        <mat-card-header>\r\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlexFill>\r\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\r\n            </mat-form-field>\r\n\r\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\r\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n        </mat-card-actions>\r\n    </form>\r\n</mat-card>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = () => [
    { type: DiagramService },
    { type: ActivatedRoute },
    { type: Store }
];
if (false) {
    /** @type {?} */
    EditDiagramComponent.prototype.formGroup;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    EditDiagramComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.unsubscribe = new Subject$1();
        this.modelIsCorrect = new BehaviorSubject$1(false);
        this.now = Date.now();
        debugger;
        this.data = this.injector.get("data");
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
            diagramId &&
                this.diagramService.getDiagram(diagramId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    console.log(data);
                }));
        }));
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
        //         // .switchMap((res: any) => of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data)).subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            this.chart = c3.generate(Object.assign({}, this.data.Chart, { bindto: `#diagram_${this.data._id}` }));
            this.dataSubscribtion = this.diagramService
                .getData(this.data.Source, this.unsubscribe)
                .pipe(filter((/**
             * @param {?} data
             * @return {?}
             */
            data => data != undefined)), takeUntil(this.unsubscribe))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
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
            }));
        }));
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
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    timeChange(e) {
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, this.unsubscribe, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
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
        }));
    }
}
DiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram",
                template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\r\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\r\n</div>\r\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
            }] }
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
if (false) {
    /** @type {?} */
    DiagramComponent.prototype.unsubscribe;
    /** @type {?} */
    DiagramComponent.prototype.modelIsCorrect;
    /** @type {?} */
    DiagramComponent.prototype._model;
    /** @type {?} */
    DiagramComponent.prototype.dataSubscribtion;
    /** @type {?} */
    DiagramComponent.prototype.chart;
    /** @type {?} */
    DiagramComponent.prototype.time;
    /** @type {?} */
    DiagramComponent.prototype.now;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.diagramService;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    DiagramComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        let raw = { data };
        /** @type {?} */
        let _component = this.typeMapToDiagram[data.Chart.data.type];
        /** @type {?} */
        let inputProviders = Object.keys(raw).map((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            return { provide: inputName, useValue: raw[inputName] };
        }));
        /** @type {?} */
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        /** @type {?} */
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(_component);
        /** @type {?} */
        let component = factory.create(injector);
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
                template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\r\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\r\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\r\n            {{_data.Name}}\r\n        </span>\r\n        <a [routerLink]=\"['../diagrams/edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\r\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\r\n        </a>\r\n    </div>\r\n    <!-- <mat-card-content> -->\r\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\r\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\r\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\r\n        <div #dynamicComponentContainer></div>\r\n    </div>\r\n    <!-- </mat-card-content> -->\r\n</mat-card>",
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ],
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
            }] }
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef, static: false },] }],
    widgetComponent: [{ type: ViewChild, args: [DiagramComponent, { static: false },] }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.widgetComponent;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.currentComponent;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype._data;
    /** @type {?} */
    DynamicComponentSelectorComponent.prototype.backgroundColor;
    /**
     * @type {?}
     * @private
     */
    DynamicComponentSelectorComponent.prototype.resolver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /** @type {?} */
        let _component = this.typeMapToDiagram[data.type];
        /** @type {?} */
        let inputProviders = Object.keys(data.inputs).map((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            return { provide: inputName, useValue: data.inputs[inputName] };
        }));
        /** @type {?} */
        let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
        /** @type {?} */
        let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(_component);
        /** @type {?} */
        let component = factory.create(injector);
        if (((/** @type {?} */ (component.instance))).ConfigChanged)
            ((/** @type {?} */ (component.instance))).ConfigChanged.subscribe((/**
             * @return {?}
             */
            () => {
                this.ConfigChanged.emit();
            }));
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
                template: "<div #dynamicComponentContainer></div>",
                entryComponents: [
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    LinearDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent
                ],
                styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"]
            }] }
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef, static: false },] }],
    ConfigChanged: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.typeMapToDiagram;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.dynamicComponentContainer;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.ConfigChanged;
    /** @type {?} */
    DynamicConfigComponentSelectorComponent.prototype.currentComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicConfigComponentSelectorComponent.prototype.resolver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.DiagramRequest$ = this.actions$.pipe(ofType(), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new GetDiagramsStart())));
        this.getDiagram$ = this.actions$.pipe(ofType(), map((/**
         * @param {?} action
         * @return {?}
         */
        action => action.payload)), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.diagramService
            .getDiagrams()
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new GetDiagramsSucceed(res))), catchError((/**
         * @return {?}
         */
        () => of(new GetDiagramsFailed())))))));
    }
}
DiagramEffects.decorators = [
    { type: Injectable }
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
if (false) {
    /** @type {?} */
    DiagramEffects.prototype.DiagramRequest$;
    /** @type {?} */
    DiagramEffects.prototype.getDiagram$;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DiagramEffects.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.addDiagramRequest$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new AddDiagramActionStart(data))));
        this.addDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => this.diagramService
            .addDiagram(data)
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => new AddDiagramActionSucceed(res))), catchError((/**
         * @return {?}
         */
        () => of$1(new AddDiagramActionFailed())))))));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.router.navigate(["diagrams"]);
            return Observable$1.empty();
        })));
        this.HAVE_ENDPOINT$ = this.actions$.pipe(ofType(AddDiagramActionTypes.HAVE_ENDPOINT), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new DataLoadedAction(data))));
        this.DATA_LOADED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DATA_LOADED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new StructureDefinitionStartAction(data))));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => new GenerateDiagramAction(data))));
        this.STRUCTURE_DEFINITION_START$ = this.actions$.pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.getDataStructure().map((/**
         * @return {?}
         */
        () => new StructureDefinitionFinishedAction(data))))));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$.pipe(ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.calculateColumns().map((/**
         * @return {?}
         */
        () => new StructureDefinitionFinishedAction(data))))));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
            .pipe(ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => data.calculateColumns().map((/**
         * @return {?}
         */
        () => new GenerateDiagramAction(data))))));
        this.GenerateDiagram$ = this.actions$.pipe(ofType(AddDiagramActionTypes.GENERATE_DIAGRAM), pluck("payload"), map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.generateDiagram())));
    }
}
AddDiagramEffects.decorators = [
    { type: Injectable }
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
if (false) {
    /** @type {?} */
    AddDiagramEffects.prototype.addDiagramRequest$;
    /** @type {?} */
    AddDiagramEffects.prototype.addDiagram$;
    /** @type {?} */
    AddDiagramEffects.prototype.ADD_DIAGRAM_SUCCEED$;
    /** @type {?} */
    AddDiagramEffects.prototype.HAVE_ENDPOINT$;
    /** @type {?} */
    AddDiagramEffects.prototype.DATA_LOADED$;
    /** @type {?} */
    AddDiagramEffects.prototype.DIAGRAM_CONFIG_CHANGED$;
    /** @type {?} */
    AddDiagramEffects.prototype.STRUCTURE_DEFINITION_START$;
    /** @type {?} */
    AddDiagramEffects.prototype.COLUMNS_MAPPING_CHANGED$;
    /** @type {?} */
    AddDiagramEffects.prototype.STRUCTURE_DEFINITION_END$;
    /** @type {?} */
    AddDiagramEffects.prototype.GenerateDiagram$;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddDiagramEffects.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
/** @type {?} */
const RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DiagramSelectorComponent {
    /**
     * @param {?} diagramService
     */
    constructor(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res.Result)));
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
                template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\r\n<h4>\u0644\u06CC\u0633\u062A \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627</h4>\r\n      <mat-form-field fxFlex=\"100\">\r\n  <mat-select placeholder=\"\u0646\u0645\u0648\u062F\u0627\u0631 \u0647\u0627\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\r\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\r\n    {{item.Name}}\r\n  </mat-option>\r\n</mat-select>\r\n</mat-form-field>\r\n</div>"
            }] }
];
/** @nocollapse */
DiagramSelectorComponent.ctorParameters = () => [
    { type: DiagramService }
];
if (false) {
    /** @type {?} */
    DiagramSelectorComponent.prototype.diagrams$;
    /** @type {?} */
    DiagramSelectorComponent.prototype.selectedDiagramId;
    /**
     * @type {?}
     * @private
     */
    DiagramSelectorComponent.prototype.diagramService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            },] }
];
class RootNgsDiagramModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.diagram = "8.0.10";
    }
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
            },] }
];
/** @nocollapse */
RootNgsDiagramModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DiagramSelectorComponent, NgsDiagramModule, diagramViewComponent, RootNgsDiagramModule as ɵa, MODULE_CONFIG_TOKEN as ɵb, DiagramEffects as ɵba, AddDiagramEffects as ɵbb, RoutingModule as ɵbc, AddDiagramComponent as ɵc, DiagramService as ɵd, DiagramConfigurationService as ɵf, DiagramsComponent as ɵg, EditDiagramComponent as ɵh, DynamicConfigComponentSelectorComponent as ɵi, DiagramPartialConfigEditComponent as ɵj, PieDiagramPartialConfigComponent as ɵk, LinearDiagramPartialConfigComponent as ɵl, BooleanoWidgetPartialConfigComponent as ɵm, DiagramComponent as ɵn, DynamicComponentSelectorComponent as ɵo, NumericDiagramComponent as ɵp, ServerConnectingTimeDiagramComponent as ɵq, ServerStatusDiagramComponent as ɵr, DiagramModuleContainerComponent as ɵs, DataMapperComponent as ɵt, NumericWidgetPartialConfigComponent as ɵu, NumericEditDiagramComponent as ɵv, DiagramReducers as ɵw, diagramReducer as ɵx, Reducer as ɵy, ParentGuardReducer as ɵz };
//# sourceMappingURL=soushians-diagram.js.map

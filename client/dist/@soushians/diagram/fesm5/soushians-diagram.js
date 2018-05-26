import { InjectionToken, Component, Input, Injector, Output, EventEmitter, Injectable, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, NgModule } from '@angular/core';
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
var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
    endpoints: {},
    env: {
        production: false
    }
};
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("DiagramModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: '[DIAGRAM] GET_DIAGRAM',
    GET_DIAGRAM_START: '[DIAGRAM] GET_DIAGRAM_START',
    GET_DIAGRAM_SUCCEED: '[DIAGRAM] GET_DIAGRAM_SUCCEED',
    GET_DIAGRAM_FAILED: '[DIAGRAM] GET_DIAGRAM_FAILED',
};
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
var GetDiagramsSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GetDiagramsSucceed(payload) {
        this.payload = payload;
        this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
    }
    return GetDiagramsSucceed;
}());
var GetDiagramsFailed = /** @class */ (function () {
    function GetDiagramsFailed() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
    }
    return GetDiagramsFailed;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var AddDiagramActionTypes = {
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
var AddDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
    return AddDiagramAction;
}());
var AddDiagramActionStart = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramActionStart(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
    return AddDiagramActionStart;
}());
var AddDiagramActionSucceed = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function AddDiagramActionSucceed(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
    }
    return AddDiagramActionSucceed;
}());
var AddDiagramActionFailed = /** @class */ (function () {
    function AddDiagramActionFailed() {
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
    }
    return AddDiagramActionFailed;
}());
var DiagramConfigChangedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function DiagramConfigChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
    return DiagramConfigChangedAction;
}());
var HaveEndpointAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function HaveEndpointAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
    return HaveEndpointAction;
}());
var DataLoadedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function DataLoadedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
    return DataLoadedAction;
}());
var StructureDefinitionStartAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function StructureDefinitionStartAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
    return StructureDefinitionStartAction;
}());
var StructureDefinitionFinishedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function StructureDefinitionFinishedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
    return StructureDefinitionFinishedAction;
}());
var ColumnsMappingChangedAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function ColumnsMappingChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
    return ColumnsMappingChangedAction;
}());
var GenerateDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function GenerateDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.GENERATE_DIAGRAM;
    }
    return GenerateDiagramAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: '[DIAGRAM][EDIT] EDIT_DIAGRAM',
    EDIT_DIAGRAM_START: '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
    EDIT_DIAGRAM_SUCCEED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
    EDIT_DIAGRAM_FAILED: '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED',
};
var EditDiagramAction = /** @class */ (function () {
    /**
     * @param {?} payload
     */
    function EditDiagramAction(payload) {
        this.payload = payload;
        this.type = EditDiagramActionTypes.EDIT_DIAGRAM;
    }
    return EditDiagramAction;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramModel = /** @class */ (function () {
    function DiagramModel() {
    }
    return DiagramModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetDiagramsApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetDiagramsApiModel.Response = Response;
})(GetDiagramsApiModel || (GetDiagramsApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?=} initValue
         */
        function Request(initValue) {
            if (initValue === void 0) { initValue = ({}); }
            var _this = this;
            debugger;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = function () {
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
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
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
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    AddDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddDiagramApiModel.Response = Response;
})(AddDiagramApiModel || (AddDiagramApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    var Request = /** @class */ (function () {
        /**
         * @param {?} params
         */
        function Request(params) {
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestQueryParams = function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            /**
             * @return {?}
             */
            get: function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    IsActive: new FormControl("true", [Validators.required]),
                    Route: new FormControl("", [Validators.required])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    EditDiagramApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
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
var /** @type {?} */ initialState = {
    loaded: false,
    diagram: new GetDiagramsApiModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function diagramReducer(state, action) {
    if (state === void 0) { state = initialState; }
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
var /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: new EditDiagramApiModel.Response()
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state, action) {
    if (state === void 0) { state = initialState$1; }
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
var /** @type {?} */ initialState$2 = {
    route: '',
    result: false
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function ParentGuardReducer(state, action) {
    if (state === void 0) { state = initialState$2; }
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
var /** @type {?} */ DiagramReducers = {
    diagrams: diagramReducer,
    editDiagram: Reducer,
    parentGuard: ParentGuardReducer
};
//#region selectors
var /** @type {?} */ selectFeatureState = createFeatureSelector("diagram");
// export const getDiagramInformationStatus = createSelector(
//   selectFeatureState,
//   (state: DiagramState) => state.diagram
// );
//#region edit diagram
var /** @type {?} */ selectEditDiagramState = createSelector(selectFeatureState, function (state) { return state.editDiagram; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServerStatusDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function ServerStatusDiagramComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    ServerStatusDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source._id, this.data.Source.Interval)
        //   .subscribe(data => {
        //     debugger
        //     this.chart.load({
        //       columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //     });
        //   })
    };
    /**
     * @return {?}
     */
    ServerStatusDiagramComponent.prototype.ngOnInit = function () { };
    return ServerStatusDiagramComponent;
}());
ServerStatusDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-status",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\n    fiber_manual_record\n  </mat-icon> -->\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\n</div>",
                styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            },] },
];
/** @nocollapse */
ServerStatusDiagramComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
ServerStatusDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramPartialConfigEditComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function DiagramPartialConfigEditComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            debugger;
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.configChanged = function () { };
    return DiagramPartialConfigEditComponent;
}());
DiagramPartialConfigEditComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-partial-config-edit",
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
DiagramPartialConfigEditComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
DiagramPartialConfigEditComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PieDiagramPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function PieDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.ConfigChanged = new EventEmitter();
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    return PieDiagramPartialConfigComponent;
}());
PieDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "pie-diagram-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n  </form>\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
PieDiagramPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
PieDiagramPartialConfigComponent.propDecorators = {
    ConfigChanged: [{ type: Output }],
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function BooleanoWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
    }
    Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BooleanoWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    BooleanoWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    return BooleanoWidgetPartialConfigComponent;
}());
BooleanoWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "booleano-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"booleanoFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
BooleanoWidgetPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
BooleanoWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericWidgetPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function NumericWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
        /**
         * @return {?}
         */
        get: function () {
            return this._dataLoaded;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this._dataLoaded = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    return NumericWidgetPartialConfigComponent;
}());
NumericWidgetPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-widget-partial-config",
                template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericWidgetPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
NumericWidgetPartialConfigComponent.propDecorators = {
    formGroup: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinearDiagramPartialConfigComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function LinearDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.configChanged = function () {
        this.ConfigChanged.emit();
    };
    return LinearDiagramPartialConfigComponent;
}());
LinearDiagramPartialConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "linear-diagram-partial-config",
                template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\n  </div>\n</form>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
LinearDiagramPartialConfigComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
LinearDiagramPartialConfigComponent.propDecorators = {
    data: [{ type: Input }],
    ConfigChanged: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function ServerConnectingTimeDiagramComponent(injector) {
        var _this = this;
        this.injector = injector;
        this.time = 0;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
        setInterval(function () {
            _this.time = _this.time + 1;
        }, 1000);
    }
    Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.timeChange = function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    };
    return ServerConnectingTimeDiagramComponent;
}());
ServerConnectingTimeDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-server-connecting-time",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
            },] },
];
/** @nocollapse */
ServerConnectingTimeDiagramComponent.ctorParameters = function () { return [
    { type: Injector }
]; };
ServerConnectingTimeDiagramComponent.propDecorators = {
    time: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramConfigurationService = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    return DiagramConfigurationService;
}());
DiagramConfigurationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramConfigurationService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramService = /** @class */ (function () {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} userConfigurationService
     */
    function DiagramService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        // TODO: implement interface of c3 config
        this.charts = {};
    }
    /**
     * @return {?}
     */
    DiagramService.prototype.getDiagrams = function () {
        return this.http
            .get("http://localhost:3000/api/diagram")
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getGroups = function () {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(function (response) { return ((response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.getDiagram = function (id) {
        debugger;
        if (!id)
            debugger;
        return this.http.get("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.addDiagram = function (data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
        debugger;
        return this.http
            .post("http://localhost:3000/api/diagram", model.getRequestBody())
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    DiagramService.prototype.updateDiagram = function (body) {
        debugger;
        return this.http.put("http://localhost:3000/api/diagram", body).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.deleteDiagram = function (id) {
        return this.http.delete("http://localhost:3000/api/diagram/" + id).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    DiagramService.prototype.getData = function (source, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).switchMap(function (i) { return _this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: _this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; }); });
        }
    };
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    DiagramService.prototype.extract_columns_from_data = function (data, columnsMappings) {
        var /** @type {?} */ res = [];
        columnsMappings.forEach(function (item) {
            var /** @type {?} */ ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            var /** @type {?} */ NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (item, i) { return [item].concat(ValueData[i]); })));
            }
            else {
                return res.push([NameData].concat(ValueData));
            }
        });
        return res;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_data_report = function (data) {
        return _.report(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_last_node_of_data = function (data) {
        return ((_.report(data))).filter(function (item) { return item.isLastNode; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    DiagramService.prototype.buildChartConfig = function (columns) {
        return {
            data: {
                columns: columns
            },
            legend: {
                show: true
            }
        };
    };
    /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    DiagramService.prototype.generateDiagram = function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(Object.assign({}, config, { bindto: "#diagram_" + id }));
        return this.getData(/** @type {?} */ ({}), sync).subscribe(function (data) {
            _this.charts[id].load({
                columns: _this.extract_columns_from_data(data.Data, config.ColumnMappings)
            });
        });
    };
    /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    DiagramService.prototype.getFloorTime = function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    return DiagramService;
}());
DiagramService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramService.ctorParameters = function () { return [
    { type: HttpClient },
    { type: Store },
    { type: DiagramConfigurationService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericEditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericEditDiagramComponent.prototype.ngOnInit = function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(function (data) {
            debugger;
        });
    };
    return NumericEditDiagramComponent;
}());
NumericEditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "numeric-edit-diagram",
                template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <mat-card-header>\n    <mat-card-title fxLayoutAlign=\"space-between center\">\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  </mat-card-content>\n</mat-card>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
            },] },
];
/** @nocollapse */
NumericEditDiagramComponent.ctorParameters = function () { return [
    { type: Injector },
    { type: DiagramService }
]; };
NumericEditDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} injector
     * @param {?} diagramService
     */
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._data;
        },
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(function (data) {
            var /** @type {?} */ counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnDestroy = function () {
        this.dataSubscribtion.unsubscribe();
    };
    return NumericDiagramComponent;
}());
NumericDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-numeric",
                template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
            },] },
];
/** @nocollapse */
NumericDiagramComponent.ctorParameters = function () { return [
    { type: Injector },
    { type: DiagramService }
]; };
NumericDiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramModuleContainerComponent = /** @class */ (function () {
    /**
     * @param {?} service
     */
    function DiagramModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    DiagramModuleContainerComponent.prototype.ngOnInit = function () { };
    return DiagramModuleContainerComponent;
}());
DiagramModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-module-container",
                template: "<div fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
            },] },
];
/** @nocollapse */
DiagramModuleContainerComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataMapperComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} store
     */
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data)
                return;
            this.dataReport = _.report(data);
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataMapperComponent.prototype.ngOnInit = function () { };
    return DataMapperComponent;
}());
DataMapperComponent.decorators = [
    { type: Component, args: [{
                selector: "data-mapper",
                template: "<div fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        <b>\n            Key\n        </b>\n    </div>\n    <div fxFlex=\"nogrow\">\n        <b>\n            Type\n        </b>\n    </div>\n</div>\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        {{item.name}}\n    </div>\n    <div fxFlex=\"nogrow\">\n        {{item.type}}\n    </div>\n</div>\n",
                styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
            },] },
];
/** @nocollapse */
DataMapperComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: Store }
]; };
DataMapperComponent.propDecorators = {
    destination: [{ type: Input }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} formBuilder
     * @param {?} store
     * @param {?} route
     */
    function AddDiagramComponent(diagramService, formBuilder, store, route) {
        var _this = this;
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = ((this.formGroup.controls["ColumnMappings"])).controls;
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    _this.formGroup.patchValue({
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
                    var /** @type {?} */ colorsControl = (_this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
                    Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    });
                    debugger;
                    data.Chart.ColumnMappings.forEach(function (mapping) { return _this.addColumn(mapping.NamePath, mapping.ValuePath); });
                    _this.source = data.Source;
                    _this.store.dispatch(new HaveEndpointAction(_this));
                    _this.diagramPartialConfig = {
                        type: _this.formGroup.value.Type,
                        inputs: {
                            formGroup: _this.formGroup,
                            diagramService: _this.diagramService
                        }
                    };
                });
            _this.diagramPartialConfig = {
                type: _this.formGroup.value.Type,
                inputs: {
                    formGroup: _this.formGroup,
                    diagramService: _this.diagramService
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
    AddDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(function (status) {
            if (status == "VALID" &&
                ((_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
                _this.data)
                _this.store.dispatch(new ColumnsMappingChangedAction(_this));
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnDestroy = function () {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.getDataStructure = function () {
        var _this = this;
        var /** @type {?} */ observer = this.diagramService.getData(Object.assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(function (data) {
            _this.data = data.Data;
            _this.pathOptions = _this.diagramService.get_data_report(data.Data);
        });
        return observer;
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.configChanged = function () {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.typeChanged = function () {
        debugger;
        var /** @type {?} */ typesFormGroup = ((this.formGroup.controls["Types"])).controls;
        for (var /** @type {?} */ cb in typesFormGroup) {
            debugger;
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
    };
    /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    AddDiagramComponent.prototype.addColumn = function (NamePath, ValuePath) {
        if (NamePath === void 0) { NamePath = ""; }
        if (ValuePath === void 0) { ValuePath = ""; }
        var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, Validators.required]
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.routeEntered = function (event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AddDiagramComponent.prototype.removeColumn = function (i) {
        var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.calculateColumns = function () {
        var _this = this;
        return Observable$1.create(function (obser) {
            var /** @type {?} */ columns = _this.diagramService.extract_columns_from_data(_this.data, ((_this.formGroup.controls["ColumnMappings"])).value);
            _this.formGroup.controls["columns"].setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            var /** @type {?} */ colorsControl = (_this.formGroup.controls["Colors"]);
            columns.forEach(function (column) {
                var /** @type {?} */ columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
            columns.forEach(function (column) {
                var /** @type {?} */ key = column[0];
                if (!(key in typesControl.controls))
                    typesControl.addControl(key, new FormControl(_this.formGroup.value.Type));
            });
            obser.next();
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.generateDiagram = function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    };
    return AddDiagramComponent;
}());
AddDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-add",
                template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (change)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\" fxLayoutAlign=\"space-between center\">\n            <span>{{item[0]}} : {{item[1]}}</span>\n            <span [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
                styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
            },] },
];
/** @nocollapse */
AddDiagramComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: FormBuilder },
    { type: Store },
    { type: ActivatedRoute }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var diagramViewComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     */
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    diagramViewComponent.prototype.ngOnInit = function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
    return diagramViewComponent;
}());
diagramViewComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-view",
                template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\n</div>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
            },] },
];
/** @nocollapse */
diagramViewComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };
diagramViewComponent.propDecorators = {
    diagramId: [{ type: Input, args: ["id",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramsComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     */
    function DiagramsComponent(diagramService) {
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
    DiagramsComponent.prototype.ngOnInit = function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
    return DiagramsComponent;
}());
DiagramsComponent.decorators = [
    { type: Component, args: [{
                selector: "diagrams",
                template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \n  [colspan]=\"diagram.Box.Cols\" \n  [rowspan]=\"diagram.Box.Rows\" \n  [style.color]=\"diagram.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\n  </mat-grid-tile>\n</mat-grid-list>\n<br />\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n</div>\n<div fxLayoutAlign='end center'>\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n  </button>\n</div>\n",
                styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            },] },
];
/** @nocollapse */
DiagramsComponent.ctorParameters = function () { return [
    { type: DiagramService }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramComponent = /** @class */ (function () {
    /**
     * @param {?} diagramService
     * @param {?} route
     * @param {?} store
     */
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        var /** @type {?} */ Route = this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            _this.diagramService.getDiagram(diagramId).subscribe(function (data) { return _this.formGroup.patchValue(data); });
        });
    }
    /**
     * @return {?}
     */
    EditDiagramComponent.prototype.ngOnInit = function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    EditDiagramComponent.prototype.add = function (event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    };
    return EditDiagramComponent;
}());
EditDiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram-edit",
                template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\n\n        <mat-card-header>\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n            </mat-form-field>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\n            </mat-form-field>\n\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n        </mat-card-actions>\n    </form>\n</mat-card>\n",
                styles: [""]
            },] },
];
/** @nocollapse */
EditDiagramComponent.ctorParameters = function () { return [
    { type: DiagramService },
    { type: ActivatedRoute },
    { type: Store }
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramComponent = /** @class */ (function () {
    /**
     * @param {?} store
     * @param {?} diagramService
     * @param {?} http
     * @param {?} injector
     * @param {?} route
     */
    function DiagramComponent(store, diagramService, http, injector, route) {
        var _this = this;
        this.store = store;
        this.diagramService = diagramService;
        this.http = http;
        this.injector = injector;
        this.route = route;
        this.modelIsCorrect = new BehaviorSubject$1(false);
        this.now = Date.now();
        this.data = this.injector.get("data");
        this.route.params.subscribe(function (params) {
            var /** @type {?} */ diagramId = params["id"];
            diagramId &&
                _this.diagramService.getDiagram(diagramId).subscribe(function (data) {
                    console.log(data);
                });
        });
    }
    Object.defineProperty(DiagramComponent.prototype, "data", {
        /**
         * @return {?}
         */
        get: function () {
            return this._model;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (!(value.Chart && value._id))
                return;
            this._model = value;
            this.modelIsCorrect.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
        this.modelIsCorrect.delay(300).filter(function (data) { return data; }).subscribe(function (state) {
            _this.chart = c3.generate(Object.assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
            _this.dataSubscribtion = _this.diagramService
                .getData(_this.data.Source)
                .filter(function (data) { return data != undefined; })
                .subscribe(function (data) {
                _this.now = Date.now();
                _this.time = data.Time;
                if (_this.data.Chart.Flow) {
                    _this.chart.flow({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings),
                        duration: 1500
                    });
                }
                else {
                    _this.chart.load({
                        columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
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
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnDestroy = function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DiagramComponent.prototype.timeChange = function (e) {
        var _this = this;
        debugger;
        this.dataSubscribtion.unsubscribe();
        // this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
        this.dataSubscribtion = this.diagramService
            .getData(this.data.Source, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
            .subscribe(function (data) {
            _this.time = data.Time;
            _this.now = Date.now();
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            debugger;
            _this.chart.load({
                columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
            });
        });
    };
    return DiagramComponent;
}());
DiagramComponent.decorators = [
    { type: Component, args: [{
                selector: "diagram",
                template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n</div>\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}"]
            },] },
];
/** @nocollapse */
DiagramComponent.ctorParameters = function () { return [
    { type: Store },
    { type: DiagramService },
    { type: HttpClient },
    { type: Injector },
    { type: ActivatedRoute }
]; };
DiagramComponent.propDecorators = {
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicComponentSelectorComponent = /** @class */ (function () {
    /**
     * @param {?} resolver
     */
    function DynamicComponentSelectorComponent(resolver) {
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
    Object.defineProperty(DynamicComponentSelectorComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            if (!data || Object.keys(data).length == 0)
                return;
            this.backgroundColor = data.Box.BackgroundColor;
            this._data = data;
            var /** @type {?} */ raw = { data: data };
            var /** @type {?} */ _component = this.typeMapToDiagram[data.Chart.data.type];
            var /** @type {?} */ inputProviders = Object.keys(raw).map(function (inputName) {
                return { provide: inputName, useValue: raw[inputName] };
            });
            var /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            var /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            var /** @type {?} */ component = factory.create(injector);
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.timeChange = function (e) {
        this.currentComponent._component.timeChange(e);
    };
    return DynamicComponentSelectorComponent;
}());
DynamicComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-component-selector",
                template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\n            {{_data.Name}}\n        </span>\n        <a [routerLink]=\"['edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\n        </a>\n    </div>\n    <!-- <mat-card-content> -->\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\n        <div #dynamicComponentContainer></div>\n    </div>\n    <!-- </mat-card-content> -->\n</mat-card>",
                styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}"],
                entryComponents: [
                    NumericDiagramComponent,
                    ServerConnectingTimeDiagramComponent,
                    ServerStatusDiagramComponent,
                    DiagramComponent
                ]
            },] },
];
/** @nocollapse */
DynamicComponentSelectorComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver }
]; };
DynamicComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    widgetComponent: [{ type: ViewChild, args: [DiagramComponent,] }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
    /**
     * @param {?} resolver
     */
    function DynamicConfigComponentSelectorComponent(resolver) {
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
    Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            var _this = this;
            if (!data || Object.keys(data).length == 0)
                return;
            if (!(data.type in this.typeMapToDiagram)) {
                if (this.currentComponent)
                    this.currentComponent.destroy();
                return;
            }
            var /** @type {?} */ _component = this.typeMapToDiagram[data.type];
            var /** @type {?} */ inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            var /** @type {?} */ resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            var /** @type {?} */ injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
            debugger;
            var /** @type {?} */ component = factory.create(injector);
            if (((component.instance)).ConfigChanged)
                ((component.instance)).ConfigChanged.subscribe(function () {
                    debugger;
                    _this.ConfigChanged.emit();
                });
            this.dynamicComponentContainer.insert(component.hostView);
            if (this.currentComponent) {
                this.currentComponent.destroy();
            }
            this.currentComponent = component;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = function () { };
    return DynamicConfigComponentSelectorComponent;
}());
DynamicConfigComponentSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: "dynamic-config-component-selector",
                template: "<div #dynamicComponentContainer></div>",
                styles: [":host{width:100%}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}"],
                entryComponents: [
                    DiagramPartialConfigEditComponent,
                    PieDiagramPartialConfigComponent,
                    LinearDiagramPartialConfigComponent,
                    BooleanoWidgetPartialConfigComponent
                ]
            },] },
];
/** @nocollapse */
DynamicConfigComponentSelectorComponent.ctorParameters = function () { return [
    { type: ComponentFactoryResolver }
]; };
DynamicConfigComponentSelectorComponent.propDecorators = {
    dynamicComponentContainer: [{ type: ViewChild, args: ["dynamicComponentContainer", { read: ViewContainerRef },] }],
    ConfigChanged: [{ type: Output }],
    data: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetDiagramsStart(); }));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.diagramService
            .getDiagrams()
            .pipe(map(function (res) { return new GetDiagramsSucceed(res); }), catchError(function () { return Observable$1.of(new GetDiagramsFailed()); })); }));
    }
    return DiagramEffects;
}());
DiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DiagramEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
]; };
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
var AddDiagramEffects = /** @class */ (function () {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} diagramService
     */
    function AddDiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.addDiagramRequest$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new AddDiagramActionStart(data); }));
        this.addDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.diagramService
            .addDiagram(data)
            .pipe(map(function (res) { return new AddDiagramActionSucceed(res); }), catchError(function () { return Observable$1.of(new AddDiagramActionFailed()); })); }));
        this.ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(map(function (action) { return action.payload; }), map(function (data) {
            _this.router.navigate(["diagrams"]);
            return Observable$1.empty();
        }));
        this.HAVE_ENDPOINT$ = this.actions$
            .ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new DataLoadedAction(data); }));
        this.DATA_LOADED$ = this.actions$
            .ofType(AddDiagramActionTypes.DATA_LOADED)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new StructureDefinitionStartAction(data); }));
        this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new GenerateDiagramAction(data); }));
        this.STRUCTURE_DEFINITION_START$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return data.getDataStructure().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.COLUMNS_MAPPING_CHANGED$ = this.actions$
            .ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return data.calculateColumns().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
        this.STRUCTURE_DEFINITION_END$ = this.actions$
            .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return data.calculateColumns().map(function () { return new GenerateDiagramAction(data); }); }));
        this.GenerateDiagram$ = this.actions$
            .ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return data.generateDiagram(); }));
    }
    return AddDiagramEffects;
}());
AddDiagramEffects.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AddDiagramEffects.ctorParameters = function () { return [
    { type: Actions },
    { type: Router },
    { type: DiagramService }
]; };
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
var /** @type {?} */ routes = [
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
var /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsDiagramModule = /** @class */ (function () {
    function NgsDiagramModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    NgsDiagramModule.forRoot = function (config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    return NgsDiagramModule;
}());
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
                    LinearDiagramPartialConfigComponent
                ],
                providers: []
            },] },
];
var RootNgsDiagramModule = /** @class */ (function () {
    function RootNgsDiagramModule() {
    }
    return RootNgsDiagramModule;
}());
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

export { NgsDiagramModule, RootNgsDiagramModule, RoutingModule as ɵz, MODULE_CONFIG_TOKEN as ɵe, BooleanoWidgetPartialConfigComponent as ɵm, DiagramPartialConfigEditComponent as ɵj, LinearDiagramPartialConfigComponent as ɵl, NumericDiagramComponent as ɵp, NumericEditDiagramComponent as ɵv, NumericWidgetPartialConfigComponent as ɵu, PieDiagramPartialConfigComponent as ɵk, ServerConnectingTimeDiagramComponent as ɵq, ServerStatusDiagramComponent as ɵr, AddDiagramEffects as ɵy, DiagramEffects as ɵx, DiagramReducers as ɵw, DiagramConfigurationService as ɵd, DiagramService as ɵb, AddDiagramComponent as ɵa, DataMapperComponent as ɵt, DiagramModuleContainerComponent as ɵs, diagramViewComponent as ɵg, DiagramComponent as ɵn, DiagramsComponent as ɵf, DynamicComponentSelectorComponent as ɵo, DynamicConfigComponentSelectorComponent as ɵi, EditDiagramComponent as ɵh };
//# sourceMappingURL=soushians-diagram.js.map

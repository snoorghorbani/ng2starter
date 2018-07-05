import { InjectionToken, Component, Input, Injector, Output, EventEmitter, Injectable, Inject, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, NgModule, defineInjectable, inject } from '@angular/core';
import { __decorate, __metadata, __assign } from 'tslib';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
var GetDiagramsApiModel;
(function (GetDiagramsApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
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
/** @enum {string} */
var DiagramsActionTypes = {
    GET_DIAGRAM: "[DIAGRAM] GET_DIAGRAM",
    GET_DIAGRAM_START: "[DIAGRAM] GET_DIAGRAM_START",
    GET_DIAGRAM_SUCCEED: "[DIAGRAM] GET_DIAGRAM_SUCCEED",
    GET_DIAGRAM_FAILED: "[DIAGRAM] GET_DIAGRAM_FAILED",
};
var GetDiagramsStart = /** @class */ (function () {
    function GetDiagramsStart() {
        this.type = DiagramsActionTypes.GET_DIAGRAM_START;
    }
    return GetDiagramsStart;
}());
var GetDiagramsSucceed = /** @class */ (function () {
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
console.log(GetDiagramsApiModel);
var /** @type {?} */ initialState = {
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
function diagramReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DiagramsActionTypes.GET_DIAGRAM: {
            return __assign({}, state, { loaded: true });
        }
        case DiagramsActionTypes.GET_DIAGRAM_START: {
            return __assign({}, state, { loaded: true });
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
var EditDiagramApiModel;
(function (EditDiagramApiModel) {
    var Request = /** @class */ (function () {
        function Request(params) {
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestQueryParams = /**
         * @return {?}
         */
        function () {
            return {};
        };
        Object.defineProperty(Request, "formGroup", {
            // TODO:
            get: /**
             * @return {?}
             */
            function () {
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
/** @enum {string} */
var EditDiagramActionTypes = {
    EDIT_DIAGRAM: "[DIAGRAM][EDIT] EDIT_DIAGRAM",
    EDIT_DIAGRAM_START: "[DIAGRAM][EDIT] EDIT_DIAGRAM_START",
    EDIT_DIAGRAM_SUCCEED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED",
    EDIT_DIAGRAM_FAILED: "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED",
};
var EditDiagramAction = /** @class */ (function () {
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
console.log(EditDiagramApiModel);
var /** @type {?} */ initialState$1 = {
    status: "pristine",
    data: /** @type {?} */ ({ Result: {} })
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
            return __assign({}, state, { status: "dirty", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_START: {
            return __assign({}, state, { status: "pending", data: new EditDiagramApiModel.Response() });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED: {
            return __assign({}, state, { status: "succeed" });
        }
        case EditDiagramActionTypes.EDIT_DIAGRAM_FAILED: {
            return __assign({}, state, { status: "failed" });
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
    route: "",
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
    function ServerStatusDiagramComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    ServerStatusDiagramComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
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
    ServerStatusDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
    return ServerStatusDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramPartialConfigEditComponent = /** @class */ (function () {
    function DiagramPartialConfigEditComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    DiagramPartialConfigEditComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () { };
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
    return DiagramPartialConfigEditComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PieDiagramPartialConfigComponent = /** @class */ (function () {
    function PieDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.ConfigChanged = new EventEmitter();
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataLoaded;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    PieDiagramPartialConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    PieDiagramPartialConfigComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.ConfigChanged.emit();
    };
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
    return PieDiagramPartialConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
    function BooleanoWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
    }
    Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataLoaded;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    BooleanoWidgetPartialConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    BooleanoWidgetPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
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
    return BooleanoWidgetPartialConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericWidgetPartialConfigComponent = /** @class */ (function () {
    function NumericWidgetPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
        this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
    }
    Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataLoaded;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    NumericWidgetPartialConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    NumericWidgetPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
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
    return NumericWidgetPartialConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinearDiagramPartialConfigComponent = /** @class */ (function () {
    function LinearDiagramPartialConfigComponent(injector) {
        this.injector = injector;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.ConfigChanged = new EventEmitter();
        this.formGroup = this.injector.get("formGroup");
        this.diagramService = this.injector.get("diagramService");
    }
    Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        //   .subscribe(data => {
        //     debugger;
        //   });
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @return {?}
     */
    LinearDiagramPartialConfigComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.ConfigChanged.emit();
    };
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
    return LinearDiagramPartialConfigComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    ServerConnectingTimeDiagramComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // this.dataSubscribtion.unsubscribe();
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route, this.data.Source.Sync)
        //         .subscribe(data => {
        //                 this.chart.load({
        //                         columns: this.diagramService.extract_columns_from_data(data, this.data.Chart.ColumnMappings)
        //                 });
        //         })
    };
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
    return ServerConnectingTimeDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramConfigurationService = /** @class */ (function () {
    function DiagramConfigurationService(config) {
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
    }
    Object.defineProperty(DiagramConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    DiagramConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DiagramConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] }
    ]; };
    /** @nocollapse */ DiagramConfigurationService.ngInjectableDef = defineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(inject(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });
    return DiagramConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramApiModel;
(function (AddDiagramApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
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
            get: /**
             * @return {?}
             */
            function () {
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
var DiagramService = /** @class */ (function () {
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
    DiagramService.prototype.getDiagrams = /**
     * @return {?}
     */
    function () {
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
    DiagramService.prototype.getSources = /**
     * @return {?}
     */
    function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) { return (/** @type {?} */ (response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @return {?}
     */
    DiagramService.prototype.getGroups = /**
     * @return {?}
     */
    function () {
        return this.http
            .get("http://localhost:3000/api/diagram/groups")
            .map(function (response) { return (/** @type {?} */ (response)).Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.getDiagram = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
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
    DiagramService.prototype.addDiagram = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new AddDiagramApiModel.Request(data);
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
    DiagramService.prototype.updateDiagram = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        return this.http.put("http://localhost:3000/api/diagram", body).map(function (response) { return response; }).catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DiagramService.prototype.deleteDiagram = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
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
    DiagramService.prototype.getData = /**
     * @param {?} source
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    function (source, time, once) {
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
            return Observable.timer(0, source.Interval).switchMap(function (i) {
                return _this.http
                    .get("http://localhost:3000/api/data", {
                    params: {
                        sourceId: source._id,
                        time: _this.getFloorTime(source.Interval, time).toString()
                    }
                })
                    .map(function (res) { return res.Result; });
            });
        }
    };
    /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    DiagramService.prototype.extract_columns_from_data = /**
     * @param {?} data
     * @param {?} columnsMappings
     * @return {?}
     */
    function (data, columnsMappings) {
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
    DiagramService.prototype.get_data_report = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return _.report(data);
    };
    /**
     * @param {?} data
     * @return {?}
     */
    DiagramService.prototype.get_last_node_of_data = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return (/** @type {?} */ (_.report(data))).filter(function (item) { return item.isLastNode; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    DiagramService.prototype.buildChartConfig = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
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
    DiagramService.prototype.generateDiagram = /**
     * @param {?} config
     * @param {?} id
     * @param {?} route
     * @param {?} sync
     * @return {?}
     */
    function (config, id, route, sync) {
        var _this = this;
        this.charts[id] = c3.generate(__assign({}, config, { bindto: "#diagram_" + id }));
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
    DiagramService.prototype.getFloorTime = /**
     * @param {?=} precision
     * @param {?=} time
     * @return {?}
     */
    function (precision, time) {
        if (precision === void 0) { precision = 60 * 1000; }
        if (time === void 0) { time = 0; }
        return Math.floor((time || Date.now()) / precision);
    };
    DiagramService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    DiagramService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: DiagramConfigurationService }
    ]; };
    /** @nocollapse */ DiagramService.ngInjectableDef = defineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(inject(HttpClient), inject(Store), inject(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
    return DiagramService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericEditDiagramComponent = /** @class */ (function () {
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
    }
    Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericEditDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion = this.diagramService.getData(this.data.Source.Route)
        this.diagramService.getData(this.data.Source).subscribe(function (data) {
            debugger;
        });
    };
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
    return NumericEditDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NumericDiagramComponent = /** @class */ (function () {
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.dataLoaded = new BehaviorSubject$1(false);
        this.data = this.injector.get("data");
        this.counter = 0;
    }
    Object.defineProperty(NumericDiagramComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            this._data = data;
            this.dataLoaded.next(true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dataSubscribtion = this.diagramService.getData(this.data.Source).subscribe(function (data) {
            var /** @type {?} */ counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
            _this.counter = counter[0][1];
        });
    };
    /**
     * @return {?}
     */
    NumericDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSubscribtion.unsubscribe();
    };
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
    return NumericDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramModuleContainerComponent = /** @class */ (function () {
    function DiagramModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    DiagramModuleContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
    return DiagramModuleContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DataMapperComponent = /** @class */ (function () {
    function DataMapperComponent(diagramService, store) {
        this.diagramService = diagramService;
        this.store = store;
        this.dataReport = [];
    }
    Object.defineProperty(DataMapperComponent.prototype, "data", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    DataMapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
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
    return DataMapperComponent;
}());

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
/** @enum {string} */
var AddDiagramActionTypes = {
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
var AddDiagramAction = /** @class */ (function () {
    function AddDiagramAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM;
    }
    return AddDiagramAction;
}());
var AddDiagramActionStart = /** @class */ (function () {
    function AddDiagramActionStart(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
    }
    return AddDiagramActionStart;
}());
var AddDiagramActionSucceed = /** @class */ (function () {
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
    function DiagramConfigChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
    }
    return DiagramConfigChangedAction;
}());
var HaveEndpointAction = /** @class */ (function () {
    function HaveEndpointAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
    }
    return HaveEndpointAction;
}());
var DataLoadedAction = /** @class */ (function () {
    function DataLoadedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.DATA_LOADED;
    }
    return DataLoadedAction;
}());
var StructureDefinitionStartAction = /** @class */ (function () {
    function StructureDefinitionStartAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
    }
    return StructureDefinitionStartAction;
}());
var StructureDefinitionFinishedAction = /** @class */ (function () {
    function StructureDefinitionFinishedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
    }
    return StructureDefinitionFinishedAction;
}());
var ColumnsMappingChangedAction = /** @class */ (function () {
    function ColumnsMappingChangedAction(payload) {
        this.payload = payload;
        this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
    }
    return ColumnsMappingChangedAction;
}());
var GenerateDiagramAction = /** @class */ (function () {
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
var AddDiagramComponent = /** @class */ (function () {
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
        this.columnsMappings = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls;
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
                    var /** @type {?} */ colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    var /** @type {?} */ typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
                    Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new FormControl(data.Chart.data.types[key]));
                    });
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
    AddDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroup.controls["ColumnMappings"].statusChanges.subscribe(function (status) {
            if (status == "VALID" &&
                (/** @type {?} */ (_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
                _this.data)
                _this.store.dispatch(new ColumnsMappingChangedAction(_this));
        });
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dataSubscription)
            this.dataSubscription.unsubscribe();
    };
    // getData() {
    //   const o$ = this.diagramService.getData(this.source);
    //   this.dataSubscription = o$.subscribe(data => new DataLoadedAction(this))
    //   return o$;
    // }
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.getDataStructure = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ observer = this.diagramService.getData(__assign({}, this.source, { Interval: 0 }), Date.now() - 10000);
        this.dataSubscription = observer.subscribe(function (data) {
            _this.data = data.Data;
            _this.pathOptions = _this.diagramService.get_data_report(data.Data);
        });
        return observer;
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.configChanged = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DiagramConfigChangedAction(this));
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.typeChanged = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ typesFormGroup = (/** @type {?} */ (this.formGroup.controls["Types"])).controls;
        for (var /** @type {?} */ cb in typesFormGroup) {
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
    AddDiagramComponent.prototype.addColumn = /**
     * @param {?=} NamePath
     * @param {?=} ValuePath
     * @return {?}
     */
    function (NamePath, ValuePath) {
        if (NamePath === void 0) { NamePath = ""; }
        if (ValuePath === void 0) { ValuePath = ""; }
        var /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.push(this.formBuilder.group({
            NamePath: [NamePath],
            ValuePath: [ValuePath, Validators.required]
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AddDiagramComponent.prototype.routeEntered = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.source = event.value;
        this.formGroup.patchValue({ Source: event.value });
        this.store.dispatch(new HaveEndpointAction(this));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AddDiagramComponent.prototype.removeColumn = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    AddDiagramComponent.prototype.calculateColumns = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Observable$1.create(function (obser) {
            var /** @type {?} */ columns = _this.diagramService.extract_columns_from_data(_this.data, (/** @type {?} */ (_this.formGroup.controls["ColumnMappings"])).value);
            _this.formGroup.controls["columns"].setValue(columns);
            //add new item to this.formGroup.controls.colors form control
            var /** @type {?} */ colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
            columns.forEach(function (column) {
                var /** @type {?} */ columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            var /** @type {?} */ typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
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
    AddDiagramComponent.prototype.generateDiagram = /**
     * @return {?}
     */
    function () {
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
    AddDiagramComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.store.dispatch(new AddDiagramAction(this.formGroup.value));
    };
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
    return AddDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var diagramViewComponent = /** @class */ (function () {
    function diagramViewComponent(diagramService) {
        this.diagramService = diagramService;
        this.width = 100;
        this.diagrams = this.diagramService.getDiagrams();
    }
    /**
     * @return {?}
     */
    diagramViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.diagramData$ = this.diagramService.getDiagram(this.diagramId);
    };
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
    return diagramViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramsComponent = /** @class */ (function () {
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
    DiagramsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.socketService.initSocket();
        // this.socketService.send("add-message");
        // this.socketService.onMessage().subscribe(msg=>{
        //         debugger
        // });
    };
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
    return DiagramsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditDiagramComponent = /** @class */ (function () {
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
    EditDiagramComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    EditDiagramComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.store.dispatch(new EditDiagramAction(this.formGroup.value));
    };
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
    return EditDiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramComponent = /** @class */ (function () {
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
        get: /**
         * @return {?}
         */
        function () {
            return this._model;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
    DiagramComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
            _this.chart = c3.generate(__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
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
    DiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DiagramComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
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
            // const columns = this.diagramService
            //         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
            //         .map(column => {
            //                 debugger;
            //                 column[0] += '_historic';
            //                 return column;
            //         });
            _this.chart.load({
                columns: _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings)
            });
        });
    };
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
    return DiagramComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicComponentSelectorComponent = /** @class */ (function () {
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
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
    DynamicComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} e
     * @return {?}
     */
    DynamicComponentSelectorComponent.prototype.timeChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.currentComponent._component.timeChange(e);
    };
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
    return DynamicComponentSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DynamicConfigComponentSelectorComponent = /** @class */ (function () {
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
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
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
            var /** @type {?} */ component = factory.create(injector);
            if ((/** @type {?} */ (component.instance)).ConfigChanged)
                (/** @type {?} */ (component.instance)).ConfigChanged.subscribe(function () {
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
    DynamicConfigComponentSelectorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () { };
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
    return DynamicConfigComponentSelectorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DiagramEffects = /** @class */ (function () {
    function DiagramEffects(actions$, router, diagramService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.diagramService = diagramService;
        this.DiagramRequest$ = this.actions$.ofType().pipe(map(function (action) { return action.payload; }), map(function (data) { return new GetDiagramsStart(); }));
        this.getDiagram$ = this.actions$
            .ofType()
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.diagramService
                .getDiagrams()
                .pipe(map(function (res) { return new GetDiagramsSucceed(res); }), catchError(function () { return Observable$1.of(new GetDiagramsFailed()); }));
        }));
    }
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
    return DiagramEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddDiagramEffects = /** @class */ (function () {
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
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.diagramService
                .addDiagram(data)
                .pipe(map(function (res) { return new AddDiagramActionSucceed(res); }), catchError(function () { return Observable$1.of(new AddDiagramActionFailed()); }));
        }));
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
    return AddDiagramEffects;
}());

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
var DiagramSelectorComponent = /** @class */ (function () {
    function DiagramSelectorComponent(diagramService) {
        this.diagramService = diagramService;
        this.diagrams$ = this.diagramService.getDiagrams().pipe(map(function (res) { return res.Result; }));
    }
    Object.defineProperty(DiagramSelectorComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.diagramId != undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiagramSelectorComponent.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                diagramId: this.selectedDiagramId
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DiagramSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DiagramSelectorComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-select placeholder=\"Diagrams\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\n    {{item._id}}\n  </mat-option>\n</mat-select>"
                },] },
    ];
    /** @nocollapse */
    DiagramSelectorComponent.ctorParameters = function () { return [
        { type: DiagramService }
    ]; };
    return DiagramSelectorComponent;
}());

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
    NgsDiagramModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: RootNgsDiagramModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
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
    return NgsDiagramModule;
}());
var RootNgsDiagramModule = /** @class */ (function () {
    function RootNgsDiagramModule() {
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
    return RootNgsDiagramModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { DiagramSelectorComponent, diagramViewComponent, NgsDiagramModule, RootNgsDiagramModule, RoutingModule as ɵbb, MODULE_CONFIG_TOKEN as ɵe, BooleanoWidgetPartialConfigComponent as ɵl, DiagramPartialConfigEditComponent as ɵi, LinearDiagramPartialConfigComponent as ɵk, NumericDiagramComponent as ɵo, NumericEditDiagramComponent as ɵu, NumericWidgetPartialConfigComponent as ɵt, PieDiagramPartialConfigComponent as ɵj, ServerConnectingTimeDiagramComponent as ɵp, ServerStatusDiagramComponent as ɵq, AddDiagramEffects as ɵba, DiagramEffects as ɵz, diagramReducer as ɵw, Reducer as ɵx, DiagramReducers as ɵv, ParentGuardReducer as ɵy, DiagramConfigurationService as ɵd, DiagramService as ɵb, AddDiagramComponent as ɵa, DataMapperComponent as ɵs, DiagramModuleContainerComponent as ɵr, DiagramComponent as ɵm, DiagramsComponent as ɵf, DynamicComponentSelectorComponent as ɵn, DynamicConfigComponentSelectorComponent as ɵh, EditDiagramComponent as ɵg };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZGlhZ3JhbS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM6IHt9O1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0RGlhZ3JhbXNBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0ZGlhZ3JhbTogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3N0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0Ly8gcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0Ly8gICBkaWFncmFtOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHQvLyB9KVxyXG5cdFx0Ly99XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBEaWFncmFtc0FjdGlvblR5cGVzIHtcclxuXHRHRVRfRElBR1JBTSA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNXCIsXHJcblx0R0VUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEdFVF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0R0VUX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGlhZ3JhbXNBY3Rpb24gPSBHZXREaWFncmFtcyB8IEdldERpYWdyYW1zU3RhcnQgfCBHZXREaWFncmFtc1N1Y2NlZWQgfCBHZXREaWFncmFtc0ZhaWxlZDtcclxuIiwiaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBEaWFncmFtc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdldERpYWdyYW1zQXBpTW9kZWwpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiB7XHJcblx0XHRSZXN1bHQ6IFtdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERpYWdyYW1zQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbTtcclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVkaXREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUmVxdWVzdCkge31cclxuXHRcdGdldFJlcXVlc3RRdWVyeVBhcmFtcygpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcblx0RURJVF9ESUFHUkFNID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNXCIsXHJcblx0RURJVF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0RURJVF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1VDQ0VFRFwiLFxyXG5cdEVESVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXREaWFncmFtQWN0aW9ucyA9XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZDtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLCBFZGl0RGlhZ3JhbUFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coRWRpdERpYWdyYW1BcGlNb2RlbCk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IHsgUmVzdWx0OiB7fSB9IGFzIEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRWRpdERpYWdyYW1BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU06IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXREaWFncmFtSW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IFBhcmVudEd1YXJkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvcGFyZW50LWd1YXJkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHJvdXRlOiBzdHJpbmc7XHJcblx0cmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHJvdXRlOiBcIlwiLFxyXG5cdHJlc3VsdDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJlbnRHdWFyZFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUGFyZW50R3VhcmRBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFBhcmVudFJvdXRpbmdHdWFyZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBEaWFncmFtc1JlZHVjZXIgZnJvbSBcIi4vZGlhZ3JhbXMucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tRWRpdERpYWdyYW0gZnJvbSBcIi4vZWRpdC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcGFyZW50R3VhcmRSZWR1Y2VyIGZyb20gXCIuL3BhcmVudC1ndWFyZC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdyYW1TdGF0ZSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5TdGF0ZTtcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlN0YXRlO1xyXG5cdHBhcmVudEd1YXJkOiBwYXJlbnRHdWFyZFJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaWFncmFtUmVkdWNlcnMgPSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlcixcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlJlZHVjZXIsXHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5QYXJlbnRHdWFyZFJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImRpYWdyYW1cIjogRGlhZ3JhbVN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERpYWdyYW1TdGF0ZT4oXCJkaWFncmFtXCIpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldERpYWdyYW1JbmZvcm1hdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgIHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuLy8gICAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbVxyXG4vLyApO1xyXG5cclxuLy8jcmVnaW9uIGVkaXQgZGlhZ3JhbVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RWRpdERpYWdyYW1TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBEaWFncmFtU3RhdGUpID0+IHN0YXRlLmVkaXREaWFncmFtKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1zdGF0dXNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxtYXQtaWNvbiBbbmdDbGFzc109XCJkYXRhU3RhdHVzJCA/ICdjb25uZWN0ZWQnIDogJ2Rpc2Nvbm5lY3RlZCdcIj5cclxuICAgIGZpYmVyX21hbnVhbF9yZWNvcmRcclxuICA8L21hdC1pY29uPiAtLT5cclxuICA8IS0tIDxzcGFuICpuZ0lmPVwiZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLlN1Y2Nlc3NNZXNzYWdlfX08L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCIhZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLkZhaWx1cmVNZXNzYWdlfX08L3NwYW4+IC0tPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AuZGlzY29ubmVjdGVke2NvbG9yOiNiYTMwMzB9LmNvbm5lY3RlZHtjb2xvcjojMzBhZTFjfS5udW1lcmlje2ZvbnQtc2l6ZToyLjRlbTtsaW5lLWhlaWdodDoxLjh9Lm51bWVyaWMudGl0bGV7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hO2ZvbnQtc2l6ZToxLjFlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLl9pZCwgdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbClcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgIH0pO1xyXG5cdFx0Ly8gICB9KVxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJab29tXCIgZnhGbGV4RmlsbD7DmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlN1YmNoYXJ0XCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwowgw5jCr8OYwrEgw5jCssObwozDmMKxIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqiDDmMKow5nChyDDmMK1w5nCiMOYwrHDmMKqIMOawq/DmMKxw5nCiMOZwofDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGllLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImRvbnV0Rm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRkb251dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5kb251dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRvbnV0IGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJib29sZWFub0Zvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIlN1Y2Nlc3NNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIkZhaWx1cmVNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGJvb2xlYW5vRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5ib29sZWFub0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmJvb2xlYW5vIGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGRvbnV0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0XHR0aGlzLmRvbnV0Rm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZG9udXQgYXMgRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPsOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjCDDmMKvw5jCsSDDmMKyw5vCjMOYwrEgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqIMOYwqjDmcKHIMOYwrXDmcKIw5jCscOYwqogw5rCr8OYwrHDmcKIw5nCh8Obwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkZsb3dcIiBmeEZsZXhGaWxsPkZsb3c8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1jb25uZWN0aW5nLXRpbWVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljIHRpdGxlXCI+e3tkYXRhLkRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e3RpbWUgfCB0aW1lQ291bnRlcn19PC9kaXY+IC0tPlxyXG4gIDxkaXYgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AubnVtZXJpY3tmb250LXNpemU6Mi40ZW07bGluZS1oZWlnaHQ6MS44fS5udW1lcmljLnRpdGxle2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYTtmb250LXNpemU6MS4xZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgdGltZTogbnVtYmVyID0gMDtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyAxO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlLCB0aGlzLmRhdGEuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSk7XHJcblx0XHQvLyAgICAgICAgIH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IERpYWdyYW1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZykge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdElzQWN0aXZlOiBCb29sZWFuO1xyXG5cdFx0VHlwZTogc3RyaW5nO1xyXG5cdFx0VHlwZXM6IHsgW2NvbHVtbkxhYmVsOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRcdExlZ2VuZDogQm9vbGVhbjtcclxuXHRcdFN1YmNoYXJ0OiBCb29sZWFuO1xyXG5cdFx0Wm9vbTogQm9vbGVhbjtcclxuXHRcdFRvb2x0aXA6IEJvb2xlYW47XHJcblx0XHRSb3V0ZTogc3RyaW5nO1xyXG5cdFx0U3luYzogbnVtYmVyO1xyXG5cdFx0Q29sb3JzOiBzdHJpbmdbXTtcclxuXHRcdENvbHVtbk1hcHBpbmdzOiB7IE5hbWVQYXRoOiBzdHJpbmc7IFZhbHVlUGF0aDogc3RyaW5nIH1bXTtcclxuXHRcdEZsb3c6IHN0cmluZztcclxuXHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0Q29sczogbnVtYmVyO1xyXG5cdFx0Um93czogbnVtYmVyO1xyXG5cdFx0VGV4dENvbG9yOiBTdHJpbmc7XHJcblx0XHRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRcdGJvb2xlYW5vOiBhbnk7XHJcblx0XHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHROYW1lOiB0aGlzLk5hbWUsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0U291cmNlOiB0aGlzLlNvdXJjZSxcclxuXHRcdFx0XHRUeXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0R3JvdXBzOiB0aGlzLkdyb3VwcyxcclxuXHRcdFx0XHRXaWRnZXQ6IHtcclxuXHRcdFx0XHRcdGJvb2xlYW5vOiB0aGlzLmJvb2xlYW5vXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRDaGFydDoge1xyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiB0aGlzLkNvbG9ycyxcclxuXHRcdFx0XHRcdFx0dHlwZXM6IHRoaXMuVHlwZXNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdEZsb3c6IHRoaXMuRmxvdyxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLkxlZ2VuZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuU3ViY2hhcnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuWm9vbVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRcdFx0Z3JvdXBlZDogdGhpcy5Ub29sdGlwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRCb3g6IHtcclxuXHRcdFx0XHRcdENvbHM6IHRoaXMuQ29scyxcclxuXHRcdFx0XHRcdFJvd3M6IHRoaXMuUm93cyxcclxuXHRcdFx0XHRcdFRleHRDb2xvcjogdGhpcy5UZXh0Q29sb3IsXHJcblx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuQmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW10pLFxyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3luYzogbmV3IEZvcm1Db250cm9sKDAsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFwicGllXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRHcm91cHM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TGVnZW5kOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTdWJjaGFydDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFpvb206IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUb29sdGlwOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U291cmNlOiBuZXcgRm9ybUNvbnRyb2woe30sIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRjb2x1bW5zOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbHM6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um93czogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUZXh0Q29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiMwMDAwMDBcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEJhY2tncm91bmRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiI2ZmZmZmZlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sb3JzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRUeXBlczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IG5ldyBGb3JtQXJyYXkoW10pLFxyXG5cdFx0XHRcdEZsb3c6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0XHRkb251dDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiRGVmYXVsdCBUaXRsZVwiKVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGJvb2xlYW5vOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFN1Y2Nlc3NNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJTdWNjZXNzTWVzc2FnZVwiKSxcclxuXHRcdFx0XHRcdEZhaWx1cmVNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJGYWlsdXJlTWVzc2FnZVwiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9kaWFncmFtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvc291cmNlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHVzZXJDb25maWd1cmF0aW9uU2VydmljZTogRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7fVxyXG5cclxuXHRnZXREaWFncmFtcygpOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0R3JvdXBzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbS9ncm91cHNcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFpZCkgZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtLyR7aWR9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZERpYWdyYW0oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBvc3Q8QWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0dXBkYXRlRGlhZ3JhbShib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW1cIiwgYm9keSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZURpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtLyR7aWR9YCkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKS5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCwgb25jZTogQm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChvbmNlICYmIHRpbWUgIT09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2UgaWYgKHNvdXJjZS5JbnRlcnZhbCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbWUgPSB0aW1lIHx8IERhdGUubm93KCk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRpbWVyKDAsIHNvdXJjZS5JbnRlcnZhbCkuc3dpdGNoTWFwKGkgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhOiBhbnksIGNvbHVtbnNNYXBwaW5ncykge1xyXG5cdFx0bGV0IHJlcyA9IFtdO1xyXG5cclxuXHRcdGNvbHVtbnNNYXBwaW5ncy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHR2YXIgVmFsdWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLlZhbHVlUGF0aCk7XHJcblxyXG5cdFx0XHRpZiAoIWl0ZW0uTmFtZVBhdGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnB1c2goWyBpdGVtLlZhbHVlUGF0aC5zcGxpdChcIi5cIikucG9wKCkgXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIE5hbWVEYXRhID0gXy5nZXRWYWx1ZShkYXRhLCBpdGVtLk5hbWVQYXRoKTtcclxuXHJcblx0XHRcdGlmIChfLmlzLmFycmF5KE5hbWVEYXRhKSkge1xyXG5cdFx0XHRcdHJldHVybiAocmVzID0gcmVzLmNvbmNhdChOYW1lRGF0YS5tYXAoKGl0ZW0sIGkpID0+IFsgaXRlbSBdLmNvbmNhdChWYWx1ZURhdGFbaV0pKSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbIE5hbWVEYXRhIF0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdGdldF9kYXRhX3JlcG9ydChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBfLnJlcG9ydChkYXRhKTtcclxuXHR9XHJcblx0Z2V0X2xhc3Rfbm9kZV9vZl9kYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIChfLnJlcG9ydChkYXRhKSBhcyBhbnlbXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pc0xhc3ROb2RlKTtcclxuXHR9XHJcblx0YnVpbGRDaGFydENvbmZpZyhjb2x1bW5zKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uc1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdC8vIFRPRE86IGltcGxlbWVudCBpbnRlcmZhY2Ugb2YgYzMgY29uZmlnXHJcblx0Y2hhcnRzID0ge307XHJcblx0Z2VuZXJhdGVEaWFncmFtKGNvbmZpZzogYW55LCBpZDogc3RyaW5nLCByb3V0ZTogc3RyaW5nLCBzeW5jOiBudW1iZXIpOiBTdWJzY3JpcHRpb24ge1xyXG5cdFx0dGhpcy5jaGFydHNbaWRdID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdGJpbmR0bzogYCNkaWFncmFtXyR7aWR9YFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0RGF0YSh7fSBhcyBTb3VyY2VNb2RlbCwgc3luYykuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0c1tpZF0ubG9hZCh7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgY29uZmlnLkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRGbG9vclRpbWUocHJlY2lzaW9uID0gNjAgKiAxMDAwLCB0aW1lOiBudW1iZXIgPSAwKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGltZSB8fCBEYXRlLm5vdygpKSAvIHByZWNpc2lvbik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtZWRpdC1kaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLW51bWVyaWNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e2RhdGEuU291cmNlLkRhdGEgfCBqc29ufX08L2Rpdj4gLS0+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7Y291bnRlcn19PC9kaXY+XHJcbiAgPGRpdiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX0ubWF0LWNhcmR7cGFkZGluZzowfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0Y291bnRlcjogbnVtYmVyO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0dGhpcy5jb3VudGVyID0gMDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0bGV0IGNvdW50ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXIgPSBjb3VudGVyWzBdWzFdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnYXBwL21vZGVscy9hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSAnYXBwL3JlZHVjZXJzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbW9kdWxlLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRhdGEtbWFwcGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgS2V5XHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFSZXBvcnRcIiBbY2xhc3NdPVwiJ2RlcHRzXycgKyBpdGVtLmRlcHRzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYG1hdC1yYWRpby1idXR0b257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrfWRpdi5kZXB0c18ye21hcmdpbi1yaWdodDoyNXB4fWRpdi5kZXB0c18ze21hcmdpbi1yaWdodDo1MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkZXN0aW5hdGlvbjogc3RyaW5nO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuZGF0YVJlcG9ydCA9IF8ucmVwb3J0KGRhdGEpO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0fVxyXG5cdGRhdGFSZXBvcnQ6IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0TmFtZTogc3RyaW5nO1xyXG5cdElzQWN0aXZlOiBib29sZWFuO1xyXG5cdERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRCb3g6IHtcclxuXHRcdE51bWJlck9mQ29sdW1uczogbnVtYmVyO1xyXG5cdFx0T3JkZXI6IG51bWJlcjtcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdH07XHJcblx0U291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRXaWRnZXQ6IHtcclxuXHRcdFwiYm9vbGVhbm9cIjoge1xyXG5cdFx0XHRcIlN1Y2Nlc3NNZXNzYWdlXCI6IHN0cmluZztcclxuXHRcdFx0XCJGYWlsdXJlTWVzc2FnZVwiOiBzdHJpbmc7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdENoYXJ0OiB7XHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdHR5cGU6IFwicGllXCIgfCBcImxpbmVhclwiIHwgXCJzY2F0dGVyXCIgfCBcImJhclwiIHwgXCJsaW5lXCI7XHJcblx0XHRcdHR5cGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0XHRjb2x1bW5zOiBhbnlbXTtcclxuXHRcdFx0Y29sb3JzOiBhbnlbXTtcclxuXHRcdH07XHJcblx0XHRGbG93OiBib29sZWFuO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHtcclxuXHRcdFx0TmFtZVBhdGg6IHN0cmluZztcclxuXHRcdFx0VmFsdWVQYXRoOiBzdHJpbmc7XHJcblx0XHR9W107XHJcblx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0c2hvdzogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRzaG93OiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHpvb206IHtcclxuXHRcdFx0ZW5hYmxlZDogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHR0b29sdGlwOiB7XHJcblx0XHRcdGdyb3VwZWQ6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRBRERfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1cIixcclxuXHRBRERfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlRcIixcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRFwiLFxyXG5cdEFERF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUXCIsXHJcblx0SEFWRV9FTkRQT0lOVCA9IFwiW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkVcIixcclxuXHREQVRBX0xPQURFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORFwiLFxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRFwiLFxyXG5cdERBVEFfQ0FMQ1VMQVRFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEXCIsXHJcblx0Q09MVU1OX0FEREVEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERURcIixcclxuXHRHRU5FUkFURV9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuXHR8IEhhdmVFbmRwb2ludEFjdGlvblxyXG5cdHwgRGF0YUxvYWRlZEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuXHR8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG5cdHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuXHR8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG5cdHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCJyeGpzL29wZXJhdG9yL3B1Ymxpc2hcIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IGFkZERpYWdyYW1SZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2FkZC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRIYXZlRW5kcG9pbnRBY3Rpb24sXHJcblx0Q29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uLFxyXG5cdERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWFkZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjYwXCI+XHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJTb3VyY2VcIiAoY2hhbmdlKT1cInJvdXRlRW50ZXJlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5FbmRwb2ludH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInN5bmMgdGltZVwiIGZvcm1Db250cm9sTmFtZT1cIlN5bmNcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD7DmcKGw5nCiMOYwrkgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcm91cHNcIiBmb3JtQ29udHJvbE5hbWU9XCJHcm91cHNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAge3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlID8gZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZVswXSA6ICcnfX1cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAoK3t7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZS5sZW5ndGggLSAxfX0gb3RoZXJzKVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAoQ29uZmlnQ2hhbmdlZCk9XCJjb25maWdDaGFuZ2VkKClcIiBbZGF0YV09XCJkaWFncmFtUGFydGlhbENvbmZpZ1wiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBpZD1cIm1vZGlmeS1kaWFncmFtXCIgZnhGbGV4PVwiNDBcIiBbZGF0YV09XCJkaWFncmFtTW9kZWxcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT4gw5jCs8OYwqfDmMKuw5jCqsOYwqfDmMKxIMOYwq/Dm8KMw5jCqsOYwqcgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmcKGw5rCr8OYwqfDmMK0w5jCqiDDmMKvw5jCp8OYwq/DmcKHPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNNYXBwaW5nczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbHVtbnNNYXBwaW5nc1tpXVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCIgZnhGbGV4LnhzPVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChcOZwoLDmMKvw5jCp8OYwrEgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlZhbHVlUGF0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlQ29sdW1uKGkpXCIgZnhGbGV4IG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOZwr7DmMKnw5rCqSDDmsKpw5jCscOYwq/DmcKGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5jCs8OYwqrDmcKIw5nChjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOZwobDmMKqw5jCp8ObwozDmMKsIMOYwq/DmMKnw5jCr8OZwocgw5nCh8OYwqc8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWU7IGxldCBpPWluZGV4XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbVswXX19IDoge3tpdGVtWzFdfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9yc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrHDmcKGw5rCryDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5UeXBlc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuVHlwZXMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiA+IC0tPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwidGlwb1wiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmMK4w5jCp8OZwofDmMKxw5vCjDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMK3w5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbHNcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMKqw5nCiMOZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3dzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+w5jCscOZwobDmsKvIMOZwoXDmMKqw5nChiA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUZXh0Q29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+w5jCscOZwobDmsKvIMOZwr7DmMKzIMOYwrLDmcKFw5vCjMOZwobDmcKHIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJCYWNrZ3JvdW5kQ29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKCRldmVudClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PSdub2dyb3cnIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2RpYWdyYW1zJz7DmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NoYXJ0e3dpZHRoOjMwMHB4O2RpcmVjdGlvbjpsdHJ9LmZvcm0tZWxlbWVudC1tYXJnaW57bWFyZ2luOjVweCAxMHB4fS5pdGVtLW1hcmdpbnttYXJnaW46MTBweCAwO2Rpc3BsYXk6YmxvY2t9bWF0LW9wdGlvbi5kZXB0aF8ye3BhZGRpbmctcmlnaHQ6MzBweH1tYXQtb3B0aW9uLmRlcHRoXzN7cGFkZGluZy1yaWdodDo1MHB4fW1hdC1vcHRpb24uZGVwdGhfNHtwYWRkaW5nLXJpZ2h0OjcwcHh9Lm1hdC1jYXJke21hcmdpbjoxMi41cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0ZGF0YTogYW55O1xyXG5cdGNvbHVtbnM6IGFueTtcclxuXHRjaGFydDtcclxuXHRkaWFncmFtVHlwZXM6IHN0cmluZ1tdO1xyXG5cdHBhdGhPcHRpb25zOiB7XHJcblx0XHRwYXRoOiBzdHJpbmc7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHR0eXBlOiBzdHJpbmc7XHJcblx0XHRjb2xvcjogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRjb2x1bW5zTWFwcGluZ3M6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkaWFncmFtTW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRjb21wb25lbnRNb2RlbDogeyBjb21wb25lbnQ6IGFueTsgaW5wdXRzOiBvYmplY3QgfTtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHRkaWFncmFtUGFydGlhbENvbmZpZzogeyB0eXBlOiBzdHJpbmc7IGlucHV0czogeyBmb3JtR3JvdXA6IEZvcm1Hcm91cDsgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlIH0gfTtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0c291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtTW9kZWwgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0aGlzLmNvbHVtbnNNYXBwaW5ncyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHROYW1lOiBkYXRhLk5hbWUsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRHcm91cHM6IGRhdGEuR3JvdXBzLFxyXG5cdFx0XHRcdFx0XHRUeXBlOiBkYXRhLkNoYXJ0LmRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0TGVnZW5kOiBkYXRhLkNoYXJ0LmxlZ2VuZC5zaG93LFxyXG5cdFx0XHRcdFx0XHRTdWJjaGFydDogZGF0YS5DaGFydC5zdWJjaGFydC5zaG93LFxyXG5cdFx0XHRcdFx0XHRab29tOiBkYXRhLkNoYXJ0Lnpvb20uZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0VG9vbHRpcDogZGF0YS5DaGFydC50b29sdGlwLmdyb3VwZWQsXHJcblx0XHRcdFx0XHRcdFN5bmM6IGRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRTb3VyY2U6IGRhdGEuU291cmNlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLkNoYXJ0LmRhdGEuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRcdENvbHM6IGRhdGEuQm94LkNvbHMsXHJcblx0XHRcdFx0XHRcdEZsb3c6IGRhdGEuQ2hhcnQuRmxvdyxcclxuXHRcdFx0XHRcdFx0Um93czogZGF0YS5Cb3guUm93cyxcclxuXHRcdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0XHRcdFRleHRDb2xvcjogZGF0YS5Cb3guVGV4dENvbG9yXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnMgfHwge30pLmZvckVhY2goY29sdW1uS2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEuY29sb3JzW2NvbHVtbktleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS50eXBlcyB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEudHlwZXNba2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLmZvckVhY2gobWFwcGluZyA9PiB0aGlzLmFkZENvbHVtbihtYXBwaW5nLk5hbWVQYXRoLCBtYXBwaW5nLlZhbHVlUGF0aCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3VyY2UgPSBkYXRhLlNvdXJjZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRpYWdyYW1UeXBlcyA9IFtcclxuXHRcdFx0XCJiYXJcIixcclxuXHRcdFx0XCJkb251dFwiLFxyXG5cdFx0XHRcInBpZVwiLFxyXG5cdFx0XHRcInNjYXR0ZXJcIixcclxuXHRcdFx0XCJsaW5lXCIsXHJcblx0XHRcdFwiYXJlYVwiLFxyXG5cdFx0XHRcImFyZWEtc3BsaW5lXCIsXHJcblx0XHRcdFwibnVtZXJvXCIsXHJcblx0XHRcdFwiYm9vbGVhbm9cIixcclxuXHRcdFx0XCJ0ZW1wb1wiXHJcblx0XHRdO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGF0dXMgPT0gXCJWQUxJRFwiICYmXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRoaXMuZGF0YVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGFTdWJzY3JpcHRpb24pIHRoaXMuZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHQvLyBnZXREYXRhKCkge1xyXG5cdC8vICAgY29uc3QgbyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5zb3VyY2UpO1xyXG5cdC8vICAgdGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gbyQuc3Vic2NyaWJlKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24odGhpcykpXHJcblx0Ly8gICByZXR1cm4gbyQ7XHJcblx0Ly8gfVxyXG5cdGdldERhdGFTdHJ1Y3R1cmUoKSB7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh7IC4uLnRoaXMuc291cmNlLCBJbnRlcnZhbDogMCB9LCBEYXRlLm5vdygpIC0gMTAwMDApO1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHRcdHRoaXMucGF0aE9wdGlvbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldF9kYXRhX3JlcG9ydChkYXRhLkRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXI7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHR5cGVDaGFuZ2VkKCkge1xyXG5cdFx0Y29uc3QgdHlwZXNGb3JtR3JvdXAgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVHlwZXMgYXMgRm9ybUdyb3VwKS5jb250cm9scztcclxuXHRcdGZvciAobGV0IGNiIGluIHR5cGVzRm9ybUdyb3VwKSB7XHJcblx0XHRcdHR5cGVzRm9ybUdyb3VwW2NiXS5zZXRWYWx1ZSh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0YWRkQ29sdW1uKE5hbWVQYXRoOiBzdHJpbmcgPSBcIlwiLCBWYWx1ZVBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0XHRcdE5hbWVQYXRoOiBbIE5hbWVQYXRoIF0sXHJcblx0XHRcdFx0VmFsdWVQYXRoOiBbIFZhbHVlUGF0aCwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyb3V0ZUVudGVyZWQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc291cmNlID0gZXZlbnQudmFsdWU7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgU291cmNlOiBldmVudC52YWx1ZSB9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHJlbW92ZUNvbHVtbihpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHRjYWxjdWxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VyID0+IHtcclxuXHRcdFx0dmFyIGNvbHVtbnNNQXBwaW5nID0ge1xyXG5cdFx0XHRcdC8vIE5hbWVWQWx1ZTogICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLnZhbHVlc1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRsZXQgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEsXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkudmFsdWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy5zZXRWYWx1ZShjb2x1bW5zKTtcclxuXHRcdFx0Ly9hZGQgbmV3IGl0ZW0gdG8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sb3JzIGZvcm0gY29udHJvbFxyXG5cdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0bGV0IGNvbHVtbktleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woXCIjMTIzNDU2XCIpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvYnNlci5uZXh0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2VuZXJhdGVEaWFncmFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgdGVtcCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRlbXAuX2lkID0gXCJ0ZW1wbGF0ZV9pZFwiO1xyXG5cdFx0dGVtcC5OYW1lID0gdGhpcy5mb3JtR3JvdXAudmFsdWUuTmFtZTtcclxuXHRcdHRlbXAuU291cmNlID0gdGhpcy5zb3VyY2U7XHJcblx0XHR0ZW1wLkJveCA9IHtcclxuXHRcdFx0TnVtYmVyT2ZDb2x1bW5zOiAxLFxyXG5cdFx0XHRPcmRlcjogMSxcclxuXHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdH07XHJcblx0XHR0ZW1wLldpZGdldCA9IHtcclxuXHRcdFx0Ym9vbGVhbm86IHRoaXMuZm9ybUdyb3VwLnZhbHVlLmJvb2xlYW5vXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5DaGFydCA9IHtcclxuXHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZSxcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdHR5cGVzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlcyxcclxuXHRcdFx0XHRjb2xvcnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycy52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRGbG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5GbG93LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5MZWdlbmRcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5TdWJjaGFydFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0ZW5hYmxlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuWm9vbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0Z3JvdXBlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuVG9vbHRpcFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHRvb2x0aXA6IHtcclxuXHRcdFx0Ly8gICAgICAgICBmb3JtYXQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyBjb2xvcjoge1xyXG5cdFx0XHQvLyAgICAgICAgIHBhdHRlcm46IFsnIzYwQjA0NCcsICcjRjZDNjAwJywgJyNGOTc2MDAnLCAnI0ZGMDAwMCddLFxyXG5cdFx0XHQvLyAgICAgICAgIHRocmVzaG9sZDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgLy8gIHVuaXQ6ICd2YWx1ZScsIC8vIHBlcmNlbnRhZ2UgaXMgZGVmYXVsdFxyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWVzOiBbMzAsIDYwLCA5MCwgMTAwXVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdH07XHJcblx0XHQvLyB0aGlzLmNvbXBvbmVudE1vZGVsID0ge1xyXG5cdFx0Ly8gICBjb21wb25lbnQ6IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVt0ZW1wLkNoYXJ0LmRhdGEudHlwZV0sXHJcblx0XHQvLyAgIGlucHV0czogeyBkYXRhOiB0ZW1wIH1cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuZGlhZ3JhbU1vZGVsID0gdGVtcDtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0fVxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRpYWdyYW1EYXRhJCB8IGFzeW5jXCIgW3N0eWxlLmNvbG9yXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYyk/LkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCIoZGlhZ3JhbURhdGEkIHwgYXN5bmMpXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTttYXJnaW46MTIuNXB4fS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9LndpZGdldC10aXRsZXtmb250OjEuM2VtIElSQU5TYW5zLHRhaG9tYX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZGlhZ3JhbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cclxuXHRkaWFncmFtRGF0YSQ6IGFueTtcclxuXHRASW5wdXQoXCJpZFwiKSBkaWFncmFtSWQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbURhdGEkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKHRoaXMuZGlhZ3JhbUlkKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbXNcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XHJcbiAgPG1hdC1ncmlkLXRpbGUgKm5nRm9yPVwibGV0IGRpYWdyYW0gb2YgKGRpYWdyYW1zIHwgYXN5bmMpPy5SZXN1bHRcIiBcclxuICBbY29sc3Bhbl09XCJkaWFncmFtLkJveC5Db2xzXCIgXHJcbiAgW3Jvd3NwYW5dPVwiZGlhZ3JhbS5Cb3guUm93c1wiIFxyXG4gIFtzdHlsZS5jb2xvcl09XCJkaWFncmFtLkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCJkaWFncmFtXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L21hdC1ncmlkLXRpbGU+XHJcbjwvbWF0LWdyaWQtbGlzdD5cclxuPGJyIC8+XHJcbjxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vZGlhZ3JhbXMvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmFkZC1idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjUwcHg7bGVmdDoyNXB4O3otaW5kZXg6MX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cclxuXHRcdC8vIHRoaXMuZGlhZ3JhbXNcclxuXHRcdC8vICAgICAgICAgLmRlbGF5KDEwMClcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkaWFncmFtcyA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIGRpYWdyYW1zLlJlc3VsdC5mb3JFYWNoKGRpYWdyYW0gPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKGRpYWdyYW0uQ2hhcnQsIGRpYWdyYW0uX2lkLCBkaWFncmFtLlNvdXJjZS5Sb3V0ZSwgZGlhZ3JhbS5Tb3VyY2UuU3luYykpKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5zZW5kKFwiYWRkLW1lc3NhZ2VcIik7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uub25NZXNzYWdlKCkuc3Vic2NyaWJlKG1zZz0+e1xyXG5cdFx0Ly8gICAgICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjQwMHB4XCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nIChuZ1N1Ym1pdCk9XCJhZGQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqLDmMKvw5jCscOYwrMgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm91dGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIj7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvZm9ybT5cclxuPC9tYXQtY2FyZD5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0bGV0IFJvdXRlID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwib3ZlclwiIGZ4bGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJzdGFydFwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3tub3cgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e3RpbWUgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiZW5kXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJtb2RlbElzQ29ycmVjdCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtIHdpZGdldFwiIFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1tYXQtc2xpZGVye3dpZHRoOjEwMCV9LmRhdGEtdGltZXtkaXJlY3Rpb246bHRyO3RleHQtYWxpZ246Y2VudGVyfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblx0bW9kZWxJc0NvcnJlY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9tb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEodmFsdWU6IERpYWdyYW1Nb2RlbCkge1xyXG5cdFx0aWYgKCEodmFsdWUuQ2hhcnQgJiYgdmFsdWUuX2lkKSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fbW9kZWwgPSB2YWx1ZTtcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjaGFydDogYW55O1xyXG5cdHRpbWU6IG51bWJlcjtcclxuXHRub3c6IG51bWJlciA9IERhdGUubm93KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IEludGVydmFsT2JzZXJ2YWJsZVxyXG5cdFx0Ly8gICAgICAgICAvLyAuY3JlYXRlKHRoaXMubW9kZWwuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5jcmVhdGUoOTk5KVxyXG5cdFx0Ly8gICAgICAgICAuc3dpdGNoTWFwKGkgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMCdcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KVxyXG5cdFx0Ly8gICAgICAgICApXHJcblx0XHQvLyAgICAgICAgIC8vIC5zd2l0Y2hNYXAoKHJlczogYW55KSA9PiBPYnNlcnZhYmxlLm9mKHJlcy5SZXN1bHQuRGF0YSkpXHJcblx0XHQvLyAgICAgICAgIC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0LkRhdGEpXHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0LmRlbGF5KDMwMCkuZmlsdGVyKGRhdGEgPT4gZGF0YSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0XHQuLi50aGlzLmRhdGEuQ2hhcnQsXHJcblx0XHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHt0aGlzLmRhdGEuX2lkfWBcclxuXHRcdFx0XHQvLyBzaXplOiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICBoZWlnaHQ6IDE1MFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlKVxyXG5cdFx0XHRcdC5maWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YS5DaGFydC5GbG93KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQuZmxvdyh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLkNoYXJ0LFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLl9pZCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlN5bmNcclxuXHRcdC8vICk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdHRpbWVDaGFuZ2UoZTogTWF0U2xpZGVyQ2hhbmdlKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKCgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKSwgdHJ1ZSlcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0LmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgRGF0ZS5ub3coKSAtICgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsLCB0cnVlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQvLyAgICAgICAgIC5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdC8vICAgICAgICAgLm1hcChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgY29sdW1uWzBdICs9ICdfaGlzdG9yaWMnO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG5cdFx0XHRcdC8vICAgICAgICAgfSk7XHJcblx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cImRpYWdyYW0tYm94XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZENvbG9yXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdHJldGNoXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgKm5nSWY9XCJfZGF0YVwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e19kYXRhLk5hbWV9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIF9kYXRhLl9pZF1cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGRpYWdyYW1cIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPG1hdC1jYXJkLWNvbnRlbnQ+IC0tPlxyXG4gICAgPCEtLSA8bWF0LXNsaWRlciBpbnZlcnQgWyhuZ01vZGVsKV09XCJ0aW1lXCIgKGNoYW5nZSk9XCJ0aW1lQ2hhbmdlKCRldmVudClcIj48L21hdC1zbGlkZXI+IC0tPlxyXG4gICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJvdmVyXCIgZnhGbGV4PVwiMCAwIGF1dG9cIiBpbnZlcnQgbWluPScxJyBtYXg9JzEwMDAnIHZhbHVlPVwiMTAwMFwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxIDEgYXV0b1wiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPC9tYXQtY2FyZC1jb250ZW50PiAtLT5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjBweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dH1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0ZG9udXQ6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRwaWU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRzY2F0dGVyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bGluZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGFyZWE6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRcImFyZWEtc3BsaW5lXCI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRudW1lcm86IE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0dGVtcG86IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGJvb2xlYW5vOiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBWaWV3Q2hpbGQoRGlhZ3JhbUNvbXBvbmVudCkgd2lkZ2V0Q29tcG9uZW50OiBEaWFncmFtQ29tcG9uZW50O1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0X2RhdGE6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcjtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0bGV0IHJhdyA9IHsgZGF0YSB9O1xyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS5DaGFydC5kYXRhLnR5cGVdO1xyXG5cdFx0bGV0IGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMocmF3KS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogcmF3W2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0YmFja2dyb3VuZENvbG9yOiBTdHJpbmcgPSBcIlwiO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50Ll9jb21wb25lbnQudGltZUNoYW5nZShlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRhcmVhOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0cGllOiBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGxpbmU6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IGRhdGEuaW5wdXRzW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0aWYgKCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuQ29uZmlnQ2hhbmdlZClcclxuXHRcdFx0KDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNTdWNjZWVkLCBHZXREaWFncmFtc0ZhaWxlZCwgR2V0RGlhZ3JhbXNTdGFydCB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZSgpLnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXREaWFncmFtc1N0YXJ0KCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0RGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldERpYWdyYW1zKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBHZXREaWFncmFtc1N1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgR2V0RGlhZ3JhbXNGYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0QWRkRGlhZ3JhbUFjdGlvblR5cGVzLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdGFydCxcclxuXHRBZGREaWFncmFtQWN0aW9uU3VjY2VlZCxcclxuXHRBZGREaWFncmFtQWN0aW9uRmFpbGVkLFxyXG5cdERhdGFMb2FkZWRBY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uLFxyXG5cdEdlbmVyYXRlRGlhZ3JhbUFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdC5hZGREaWFncmFtKGRhdGEpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImRpYWdyYW1zXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEhBVkVfRU5EUE9JTlQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREQVRBX0xPQURFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmdldERhdGFTdHJ1Y3R1cmUoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORClcclxuXHRcdC8vIC5za2lwVW50aWwodGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEdlbmVyYXRlRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IGRhdGEuZ2VuZXJhdGVEaWFncmFtKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJkaWFncmFtc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEaWFncmFtc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86aWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibnVtZXJvXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ0ZW1wb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImJvb2xlYW5vXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkRpYWdyYW1zXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZERpYWdyYW1JZFwiIG5hbWU9XCJzZWxlY3RlZERpYWdyYW1JZFwiPlxyXG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkaWFncmFtcyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS5faWR9fVxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PHsgZGlhZ3JhbUlkOiBzdHJpbmcgfT4ge1xyXG5cdGRpYWdyYW1zJDogT2JzZXJ2YWJsZTxEaWFncmFtTW9kZWxbXT47XHJcblx0c2VsZWN0ZWREaWFncmFtSWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGlhZ3JhbUlkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRpYWdyYW1JZDogdGhpcy5zZWxlY3RlZERpYWdyYW1JZFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpLnBpcGUobWFwKHJlcyA9PiByZXMuUmVzdWx0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRUb29sdGlwTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1lZGl0LWRpYWdyYW0vbnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhTWFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kYXRhLW1hcHBlci9kYXRhLW1hcHBlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBkaWFncmFtVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZWRpdC1kaWFncmFtL2VkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvYWRkLWRpYWdyYW0uZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RpYWdyYW0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0XHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRcdE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBZGREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbXNDb21wb25lbnQsXHJcblx0XHRkaWFncmFtVmlld0NvbXBvbmVudCxcclxuXHRcdEVkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXRhTWFwcGVyQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHROdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50LCBkaWFncmFtVmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRGlhZ3JhbU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRGlhZ3JhbU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRGlhZ3JhbU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJkaWFncmFtXCIsIERpYWdyYW1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBEaWFncmFtRWZmZWN0cywgQWRkRGlhZ3JhbUVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0RpYWdyYW1Nb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0RpYWdyYW1Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIkRpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlciIsImZyb21FZGl0RGlhZ3JhbS5SZWR1Y2VyIiwicGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlciIsIkJlaGF2aW9yU3ViamVjdCIsIk9ic2VydmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBU08scUJBQU0scUJBQXFCLEdBQXdCO0lBQ3pELFNBQVMsRUFBRSxFQUFFO0lBQ2IsR0FBRyxFQUFFO1FBQ0osVUFBVSxFQUFFLEtBQUs7S0FDakI7Q0FDRCxDQUFDO0FBRUYscUJBQWEsbUJBQW1CLEdBQUcsSUFBSSxjQUFjLENBQXNCLHFCQUFxQixDQUFDOzs7Ozs7QUNkakcsSUFBaUIsbUJBQW1CO0FBQXBDLFdBQWlCLG1CQUFtQjtJQUNuQyxJQUFBO1FBR0MsaUJBQVksU0FBMEU7WUFBMUUsMEJBQUEsRUFBQSw4QkFBeUMsRUFBaUMsQ0FBQTtZQUF0RixpQkFFQztZQURBLE1BQU0sQ0FBQyxJQUFJ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
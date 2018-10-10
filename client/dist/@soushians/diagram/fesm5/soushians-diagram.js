import { InjectionToken, Component, Input, Injector, Output, EventEmitter, Injectable, Inject, NgModule, ComponentFactoryResolver, ViewChild, ViewContainerRef, ReflectiveInjector, defineInjectable, inject } from '@angular/core';
import { __decorate, __metadata, __assign } from 'tslib';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { BehaviorSubject, Subject as Subject$1, of } from 'rxjs';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/Rx';
import { switchMap, map, takeUntil, filter, catchError } from 'rxjs/operators';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of as of$1 } from 'rxjs/observable/of';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatCheckboxModule, MatGridListModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULE_DEFAULT_CONFIG = {
    endpoints: {},
    env: {
        production: false,
        frontend_server: "frontend/server/did/not/set"
    }
};
/** @type {?} */
var MODULE_CONFIG_TOKEN = new InjectionToken("DiagramModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
console.log(GetDiagramsApiModel);
/** @type {?} */
var initialState = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
console.log(EditDiagramApiModel);
/** @type {?} */
var initialState$1 = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$2 = {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DiagramReducers = {
    diagrams: diagramReducer,
    editDiagram: Reducer,
    parentGuard: ParentGuardReducer
};
/** @type {?} */
var selectFeatureState = createFeatureSelector("diagram");
/** @type {?} */
var selectEditDiagramState = createSelector(selectFeatureState, function (state) { return state.editDiagram; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DiagramService = /** @class */ (function () {
    function DiagramService(http, store, configurationService) {
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
    DiagramService.prototype.getDiagrams = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.config.env.frontend_server + "/api/diagram")
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
            .get(this.config.env.frontend_server + "/api/source")
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
            .get(this.config.env.frontend_server + "/api/diagram/groups")
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
        return this.http
            .get(this.config.env.frontend_server + ("/api/diagram/" + id))
            .map(function (response) { return response; })
            .catch(function (err) {
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
        /** @type {?} */
        var model = new AddDiagramApiModel.Request(data);
        return this.http
            .post(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
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
        return this.http
            .put(this.config.env.frontend_server + "/api/diagram", body)
            .map(function (response) { return response; })
            .catch(function (err) {
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
        return this.http
            .delete(this.config.env.frontend_server + "/api/diagram/" + id)
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    DiagramService.prototype.getData = /**
     * @param {?} source
     * @param {?} unsubscribe
     * @param {?=} time
     * @param {?=} once
     * @return {?}
     */
    function (source, unsubscribe, time, once) {
        var _this = this;
        if (time === void 0) { time = 0; }
        if (once === void 0) { once = false; }
        if (once && time !== 0) {
            return this.http
                .get(this.config.env.frontend_server + "/api/data", {
                params: {
                    sourceId: source._id,
                    time: this.getFloorTime(source.Interval, time).toString()
                }
            })
                .map(function (res) { return res.Result; });
        }
        else if (source.Interval == 0) {
            return this.http
                .get(this.config.env.frontend_server + "/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        }
        else {
            time = time || Date.now();
            return Observable.timer(0, source.Interval).pipe(takeUntil(unsubscribe), switchMap(function (i) {
                return _this.http
                    .get(_this.config.env.frontend_server + "/api/data", {
                    params: {
                        sourceId: source._id,
                        time: _this.getFloorTime(source.Interval, time).toString()
                    }
                }).pipe(map(function (res) { return res.Result; }));
            }));
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
        /** @type {?} */
        var res = [];
        columnsMappings.forEach(function (item) {
            /** @type {?} */
            var ValueData = _.getValue(data, item.ValuePath);
            if (!item.NamePath) {
                return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
            }
            /** @type {?} */
            var NameData = _.getValue(data, item.NamePath);
            if (_.is.array(NameData)) {
                return (res = res.concat(NameData.map(function (_item, i) { return [_item].concat(ValueData[i]); })));
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
        return this.getData(/** @type {?} */ ({}), new Subject(), sync).subscribe(function (data) {
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NumericEditDiagramComponent = /** @class */ (function () {
    function NumericEditDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject$1();
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
        this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(filter(function (data) { return data != undefined; }), takeUntil(this.unsubscribe)).subscribe(function (data) {
            debugger;
        });
    };
    /**
     * @return {?}
     */
    NumericEditDiagramComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.dataSubscribtion.unsubscribe();
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NumericDiagramComponent = /** @class */ (function () {
    function NumericDiagramComponent(injector, diagramService) {
        this.injector = injector;
        this.diagramService = diagramService;
        this.unsubscribe = new Subject$1();
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
        this.dataSubscribtion = this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(takeUntil(this.unsubscribe)).subscribe(function (data) {
            /** @type {?} */
            var counter = _this.diagramService.extract_columns_from_data(data.Data, _this.data.Chart.ColumnMappings);
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
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DiagramModel = /** @class */ (function () {
    function DiagramModel() {
    }
    return DiagramModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AddDiagramComponent = /** @class */ (function () {
    function AddDiagramComponent(diagramService, formBuilder, store, route) {
        var _this = this;
        this.diagramService = diagramService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.route = route;
        this.unsubscribe = new Subject$1();
        this.formGroup = AddDiagramApiModel.Request.formGroup;
        this.sources = this.diagramService.getSources();
        this.groups = this.diagramService.getGroups();
        // this.diagramModel = new DiagramModel();
        this.columnsMappings = (/** @type {?} */ (this.formGroup.controls["ColumnMappings"])).controls;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
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
                    /** @type {?} */
                    var colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
                    Object.keys(data.Chart.data.colors || {}).forEach(function (columnKey) {
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new FormControl(data.Chart.data.colors[columnKey]));
                    });
                    /** @type {?} */
                    var typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
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
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
        debugger;
        /** @type {?} */
        var observer = this.diagramService.getData(__assign({}, this.source, { Interval: 0 }), this.unsubscribe, Date.now() - 10000);
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
        /** @type {?} */
        var typesFormGroup = (/** @type {?} */ (this.formGroup.controls["Types"])).controls;
        // tslint:disable-next-line:forin
        for (var cb in typesFormGroup) {
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
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
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
        debugger;
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
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
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
            /** @type {?} */
            var columns = _this.diagramService.extract_columns_from_data(_this.data, (/** @type {?} */ (_this.formGroup.controls["ColumnMappings"])).value);
            _this.formGroup.controls["columns"].setValue(columns);
            /** @type {?} */
            var colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
            columns.forEach(function (column) {
                /** @type {?} */
                var columnKey = column[0];
                if (!(columnKey in colorsControl.controls))
                    colorsControl.addControl(columnKey, new FormControl("#123456"));
            });
            /** @type {?} */
            var typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
            columns.forEach(function (column) {
                /** @type {?} */
                var key = column[0];
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
        /** @type {?} */
        var temp = new DiagramModel();
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
                    template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (selectionChange)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-icon-button>\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" fxLayout=\"row\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\"\n            fxLayoutAlign=\"space-between center\">\n            <span fxFlex=\"40\">{{item[0]}} : {{item[1]}}</span>\n            <span fxFlex [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field fxFlex=\"30\" [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div fxLayout=\"row\">\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div fxLayout=\"row\">\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EditDiagramComponent = /** @class */ (function () {
    function EditDiagramComponent(diagramService, route, store) {
        var _this = this;
        this.diagramService = diagramService;
        this.route = route;
        this.store = store;
        this.formGroup = EditDiagramApiModel.Request.formGroup;
        /** @type {?} */
        var Route = this.route.params.subscribe(function (params) {
            /** @type {?} */
            var diagramId = params["id"];
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DiagramComponent = /** @class */ (function () {
    function DiagramComponent(store, diagramService, http, injector, route) {
        var _this = this;
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
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var diagramId = params["id"];
            // tslint:disable-next-line:no-unused-expression
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
        //         // .switchMap((res: any) => of(res.Result.Data))
        //         .map((res: any) => res.Result.Data)
        this.modelIsCorrect.delay(300).filter(function (data) { return data; }).subscribe(function (state) {
            _this.chart = c3.generate(__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
            _this.dataSubscribtion = _this.diagramService
                .getData(_this.data.Source, _this.unsubscribe)
                .pipe(filter(function (data) { return data != undefined; }), takeUntil(_this.unsubscribe))
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
        debugger;
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
            .getData(this.data.Source, this.unsubscribe, Date.now() - (1000 - e.value) * this.data.Source.Interval, true)
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
                    styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            /** @type {?} */
            var raw = { data: data };
            /** @type {?} */
            var _component = this.typeMapToDiagram[data.Chart.data.type];
            /** @type {?} */
            var inputProviders = Object.keys(raw).map(function (inputName) {
                return { provide: inputName, useValue: raw[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
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
                    template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\n            {{_data.Name}}\n        </span>\n        <a [routerLink]=\"['../diagrams/edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\n        </a>\n    </div>\n    <!-- <mat-card-content> -->\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\n        <div #dynamicComponentContainer></div>\n    </div>\n    <!-- </mat-card-content> -->\n</mat-card>",
                    styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}.over{visibility:hidden;opacity:0;position:absolute;top:60px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"],
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            /** @type {?} */
            var _component = this.typeMapToDiagram[data.type];
            /** @type {?} */
            var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                return { provide: inputName, useValue: data.inputs[inputName] };
            });
            /** @type {?} */
            var resolvedInputs = ReflectiveInjector.resolve(inputProviders);
            /** @type {?} */
            var injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
            /** @type {?} */
            var factory = this.resolver.resolveComponentFactory(_component);
            /** @type {?} */
            var component = factory.create(injector);
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                .pipe(map(function (res) { return new GetDiagramsSucceed(res); }), catchError(function () { return of(new GetDiagramsFailed()); }));
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                .pipe(map(function (res) { return new AddDiagramActionSucceed(res); }), catchError(function () { return of$1(new AddDiagramActionFailed()); }));
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
            // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
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
var RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n<h4>\u0644\u06CC\u0633\u062A \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627</h4>\n      <mat-form-field fxFlex=\"100\">\n  <mat-select placeholder=\"\u0646\u0645\u0648\u062F\u0627\u0631 \u0647\u0627\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\n    {{item.Name}}\n  </mat-option>\n</mat-select>\n</mat-form-field>\n</div>"
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgsDiagramModule, DiagramSelectorComponent, diagramViewComponent, RoutingModule as ɵbc, MODULE_CONFIG_TOKEN as ɵb, RootNgsDiagramModule as ɵa, BooleanoWidgetPartialConfigComponent as ɵm, DiagramPartialConfigEditComponent as ɵj, LinearDiagramPartialConfigComponent as ɵl, NumericDiagramComponent as ɵp, NumericEditDiagramComponent as ɵv, NumericWidgetPartialConfigComponent as ɵu, PieDiagramPartialConfigComponent as ɵk, ServerConnectingTimeDiagramComponent as ɵq, ServerStatusDiagramComponent as ɵr, AddDiagramEffects as ɵbb, DiagramEffects as ɵba, diagramReducer as ɵx, Reducer as ɵy, DiagramReducers as ɵw, ParentGuardReducer as ɵz, DiagramConfigurationService as ɵf, DiagramService as ɵd, AddDiagramComponent as ɵc, DataMapperComponent as ɵt, DiagramModuleContainerComponent as ɵs, DiagramComponent as ɵn, DiagramsComponent as ɵg, DynamicComponentSelectorComponent as ɵo, DynamicConfigComponentSelectorComponent as ɵi, EditDiagramComponent as ɵh };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZGlhZ3JhbS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0RGlhZ3JhbXNBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0ZGlhZ3JhbTogc3RyaW5nO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3N0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0Ly8gcmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0Ly8gICBkaWFncmFtOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLm1pbkxlbmd0aCg4KSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHQvLyB9KVxyXG5cdFx0Ly99XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBEaWFncmFtc0FjdGlvblR5cGVzIHtcclxuXHRHRVRfRElBR1JBTSA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNXCIsXHJcblx0R0VUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEdFVF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0R0VUX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTTtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldERpYWdyYW1zU3VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRGlhZ3JhbXNBY3Rpb24gPSBHZXREaWFncmFtcyB8IEdldERpYWdyYW1zU3RhcnQgfCBHZXREaWFncmFtc1N1Y2NlZWQgfCBHZXREaWFncmFtc0ZhaWxlZDtcclxuIiwiaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0FjdGlvblR5cGVzLCBEaWFncmFtc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdldERpYWdyYW1zQXBpTW9kZWwpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0bG9hZGVkOiBib29sZWFuO1xyXG5cdGRpYWdyYW06IEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0bG9hZGVkOiBmYWxzZSxcclxuXHRkaWFncmFtOiB7XHJcblx0XHRSZXN1bHQ6IFtdXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYWdyYW1SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IERpYWdyYW1zQWN0aW9uKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxvYWRlZDogdHJ1ZVxyXG5cdFx0XHRcdC8vIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gIGRpYWdyYW06IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbTtcclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEVkaXREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKHBhcmFtczogUmVxdWVzdCkge31cclxuXHRcdGdldFJlcXVlc3RRdWVyeVBhcmFtcygpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdFx0Ly8gVE9ETzpcclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcyB7XHJcblx0RURJVF9ESUFHUkFNID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNXCIsXHJcblx0RURJVF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV1bRURJVF0gRURJVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0RURJVF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1VDQ0VFRFwiLFxyXG5cdEVESVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXREaWFncmFtQWN0aW9ucyA9XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgRWRpdERpYWdyYW1BY3Rpb25TdWNjZWVkXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZDtcclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLCBFZGl0RGlhZ3JhbUFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coRWRpdERpYWdyYW1BcGlNb2RlbCk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHN0YXR1czogXCJwcmlzdGluZVwiLFxyXG5cdGRhdGE6IHsgUmVzdWx0OiB7fSB9IGFzIEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2VcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRWRpdERpYWdyYW1BY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU06IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIixcclxuXHRcdFx0XHRkYXRhOiBuZXcgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJmYWlsZWRcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEVkaXREaWFncmFtSW5mbyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IFBhcmVudEd1YXJkQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvcGFyZW50LWd1YXJkLmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHJvdXRlOiBzdHJpbmc7XHJcblx0cmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdHJvdXRlOiBcIlwiLFxyXG5cdHJlc3VsdDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJlbnRHdWFyZFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogUGFyZW50R3VhcmRBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFBhcmVudFJvdXRpbmdHdWFyZCA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBEaWFncmFtc1JlZHVjZXIgZnJvbSBcIi4vZGlhZ3JhbXMucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBmcm9tRWRpdERpYWdyYW0gZnJvbSBcIi4vZWRpdC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0ICogYXMgcGFyZW50R3VhcmRSZWR1Y2VyIGZyb20gXCIuL3BhcmVudC1ndWFyZC5yZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdyYW1TdGF0ZSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5TdGF0ZTtcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlN0YXRlO1xyXG5cdHBhcmVudEd1YXJkOiBwYXJlbnRHdWFyZFJlZHVjZXIuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEaWFncmFtUmVkdWNlcnMgPSB7XHJcblx0ZGlhZ3JhbXM6IERpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlcixcclxuXHRlZGl0RGlhZ3JhbTogZnJvbUVkaXREaWFncmFtLlJlZHVjZXIsXHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5QYXJlbnRHdWFyZFJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuXHRcImRpYWdyYW1cIjogRGlhZ3JhbVN0YXRlO1xyXG59XHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RmVhdHVyZVN0YXRlID0gY3JlYXRlRmVhdHVyZVNlbGVjdG9yPERpYWdyYW1TdGF0ZT4oXCJkaWFncmFtXCIpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldERpYWdyYW1JbmZvcm1hdGlvblN0YXR1cyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgIHNlbGVjdEZlYXR1cmVTdGF0ZSxcclxuLy8gICAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZGlhZ3JhbVxyXG4vLyApO1xyXG5cclxuLy8jcmVnaW9uIGVkaXQgZGlhZ3JhbVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0RWRpdERpYWdyYW1TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEZlYXR1cmVTdGF0ZSwgKHN0YXRlOiBEaWFncmFtU3RhdGUpID0+IHN0YXRlLmVkaXREaWFncmFtKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1zdGF0dXNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxtYXQtaWNvbiBbbmdDbGFzc109XCJkYXRhU3RhdHVzJCA/ICdjb25uZWN0ZWQnIDogJ2Rpc2Nvbm5lY3RlZCdcIj5cclxuICAgIGZpYmVyX21hbnVhbF9yZWNvcmRcclxuICA8L21hdC1pY29uPiAtLT5cclxuICA8IS0tIDxzcGFuICpuZ0lmPVwiZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLlN1Y2Nlc3NNZXNzYWdlfX08L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCIhZGF0YVN0YXR1cyRcIj57e2RhdGEuV2lkZ2V0LmJvb2xlYW5vLkZhaWx1cmVNZXNzYWdlfX08L3NwYW4+IC0tPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AuZGlzY29ubmVjdGVke2NvbG9yOiNiYTMwMzB9LmNvbm5lY3RlZHtjb2xvcjojMzBhZTFjfS5udW1lcmlje2ZvbnQtc2l6ZToyLjRlbTtsaW5lLWhlaWdodDoxLjh9Lm51bWVyaWMudGl0bGV7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hO2ZvbnQtc2l6ZToxLjFlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLl9pZCwgdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbClcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgIH0pO1xyXG5cdFx0Ly8gICB9KVxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiWm9vbVwiIGZ4RmxleEZpbGw+w5jCqMOYwrLDmMKxw5rCr8OZwobDmcKFw5jCp8ObwozDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJTdWJjaGFydFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqMOYwrLDmMKxw5rCr8OZwobDmcKFw5jCp8ObwozDm8KMIMOYwq/DmMKxIMOYwrLDm8KMw5jCsSDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrE8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlRvb2x0aXBcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqogw5jCqMOZwocgw5jCtcOZwojDmMKxw5jCqiDDmsKvw5jCscOZwojDmcKHw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInBpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkb251dEZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiYm9vbGVhbm9Gb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJTdWNjZXNzTWVzc2FnZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJGYWlsdXJlTWVzc2FnZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRib29sZWFub0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuYm9vbGVhbm9Gb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5ib29sZWFubyBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJudW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImRvbnV0Rm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRkb251dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5kb251dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRvbnV0IGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImxpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJab29tXCIgZnhGbGV4RmlsbD7DmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlN1YmNoYXJ0XCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwowgw5jCr8OYwrEgw5jCssObwozDmMKxIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqiDDmMKow5nChyDDmMK1w5nCiMOYwrHDmMKqIMOawq/DmMKxw5nCiMOZwofDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJGbG93XCIgZnhGbGV4RmlsbD5GbG93PC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0QE91dHB1dCgpIENvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1zZXJ2ZXItY29ubmVjdGluZy10aW1lXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCI+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpYyB0aXRsZVwiPnt7ZGF0YS5EZXNjcmlwdGlvbn19PC9kaXY+XHJcbiAgPCEtLSA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3t0aW1lIHwgdGltZUNvdW50ZXJ9fTwvZGl2PiAtLT5cclxuICA8ZGl2IFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgLm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIHRpbWU6IG51bWJlciA9IDA7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHRcdHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0dGhpcy50aW1lID0gdGhpcy50aW1lICsgMTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSwgdGhpcy5kYXRhLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0Ly8gICAgICAgICB9KVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTU9EVUxFX0NPTkZJR19UT0tFTiwgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4uL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBEaWFncmFtTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHJcblx0Y29uc3RydWN0b3IoQEluamVjdChNT0RVTEVfQ09ORklHX1RPS0VOKSBjb25maWcpIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBZGREaWFncmFtQXBpTW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRJc0FjdGl2ZTogQm9vbGVhbjtcclxuXHRcdFR5cGU6IHN0cmluZztcclxuXHRcdFR5cGVzOiB7IFtjb2x1bW5MYWJlbDogc3RyaW5nXTogc3RyaW5nIH07XHJcblx0XHRMZWdlbmQ6IEJvb2xlYW47XHJcblx0XHRTdWJjaGFydDogQm9vbGVhbjtcclxuXHRcdFpvb206IEJvb2xlYW47XHJcblx0XHRUb29sdGlwOiBCb29sZWFuO1xyXG5cdFx0Um91dGU6IHN0cmluZztcclxuXHRcdFN5bmM6IG51bWJlcjtcclxuXHRcdENvbG9yczogc3RyaW5nW107XHJcblx0XHRDb2x1bW5NYXBwaW5nczogeyBOYW1lUGF0aDogc3RyaW5nOyBWYWx1ZVBhdGg6IHN0cmluZyB9W107XHJcblx0XHRGbG93OiBzdHJpbmc7XHJcblx0XHRjb2x1bW5zOiBhbnlbXTtcclxuXHRcdENvbHM6IG51bWJlcjtcclxuXHRcdFJvd3M6IG51bWJlcjtcclxuXHRcdFRleHRDb2xvcjogU3RyaW5nO1xyXG5cdFx0QmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0XHRib29sZWFubzogYW55O1xyXG5cdFx0U291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRcdEdyb3Vwczogc3RyaW5nW107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdElzQWN0aXZlOiB0aGlzLklzQWN0aXZlLFxyXG5cdFx0XHRcdFNvdXJjZTogdGhpcy5Tb3VyY2UsXHJcblx0XHRcdFx0VHlwZTogdGhpcy5UeXBlLFxyXG5cdFx0XHRcdEdyb3VwczogdGhpcy5Hcm91cHMsXHJcblx0XHRcdFx0V2lkZ2V0OiB7XHJcblx0XHRcdFx0XHRib29sZWFubzogdGhpcy5ib29sZWFub1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Q2hhcnQ6IHtcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5UeXBlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmNvbHVtbnMsXHJcblx0XHRcdFx0XHRcdGNvbG9yczogdGhpcy5Db2xvcnMsXHJcblx0XHRcdFx0XHRcdHR5cGVzOiB0aGlzLlR5cGVzXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRGbG93OiB0aGlzLkZsb3csXHJcblx0XHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdGhpcy5MZWdlbmRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLlN1YmNoYXJ0XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0em9vbToge1xyXG5cdFx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLlpvb21cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0XHRcdGdyb3VwZWQ6IHRoaXMuVG9vbHRpcFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Qm94OiB7XHJcblx0XHRcdFx0XHRDb2xzOiB0aGlzLkNvbHMsXHJcblx0XHRcdFx0XHRSb3dzOiB0aGlzLlJvd3MsXHJcblx0XHRcdFx0XHRUZXh0Q29sb3I6IHRoaXMuVGV4dENvbG9yLFxyXG5cdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLkJhY2tncm91bmRDb2xvclxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtdKSxcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFN5bmM6IG5ldyBGb3JtQ29udHJvbCgwLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SXNBY3RpdmU6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFR5cGU6IG5ldyBGb3JtQ29udHJvbChcInBpZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0R3JvdXBzOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdExlZ2VuZDogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3ViY2hhcnQ6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRab29tOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VG9vbHRpcDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFNvdXJjZTogbmV3IEZvcm1Db250cm9sKHt9LCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Y29sdW1uczogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb2xzOiBuZXcgRm9ybUNvbnRyb2woMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFJvd3M6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VGV4dENvbG9yOiBuZXcgRm9ybUNvbnRyb2woXCIjMDAwMDAwXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiNmZmZmZmZcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbG9yczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0VHlwZXM6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG5cdFx0XHRcdENvbHVtbk1hcHBpbmdzOiBuZXcgRm9ybUFycmF5KFtdKSxcclxuXHRcdFx0XHRGbG93OiBuZXcgRm9ybUNvbnRyb2wodHJ1ZSksXHJcblx0XHRcdFx0ZG9udXQ6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIkRlZmF1bHQgVGl0bGVcIilcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRib29sZWFubzogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRTdWNjZXNzTWVzc2FnZTogbmV3IEZvcm1Db250cm9sKFwiU3VjY2Vzc01lc3NhZ2VcIiksXHJcblx0XHRcdFx0XHRGYWlsdXJlTWVzc2FnZTogbmV3IEZvcm1Db250cm9sKFwiRmFpbHVyZU1lc3NhZ2VcIilcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRGlhZ3JhbU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL2RpYWdyYW0uY29uZmlnXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlcnZpY2Uge1xyXG5cdGNvbmZpZzogRGlhZ3JhbU1vZHVsZUNvbmZpZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWc7XHJcblx0fVxyXG5cclxuXHRnZXREaWFncmFtcygpOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldDxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPih0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldEdyb3VwcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtL2dyb3Vwc1wiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKCFpZCkgZGVidWdnZXI7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGAvYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGFkZERpYWdyYW0oZGF0YTogYW55KTogT2JzZXJ2YWJsZTxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwZGF0ZURpYWdyYW0oYm9keTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW1cIiwgYm9keSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRkZWxldGVEaWFncmFtKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZGVsZXRlKGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kaWFncmFtLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXREYXRhKHNvdXJjZTogU291cmNlTW9kZWwsIHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+LCB0aW1lOiBudW1iZXIgPSAwLCBvbmNlOiBCb29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKG9uY2UgJiYgdGltZSAhPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2UgaWYgKHNvdXJjZS5JbnRlcnZhbCA9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aW1lID0gdGltZSB8fCBEYXRlLm5vdygpO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aW1lcigwLCBzb3VyY2UuSW50ZXJ2YWwpLnBpcGUoXHJcblx0XHRcdFx0dGFrZVVudGlsKHVuc3Vic2NyaWJlKSxcclxuXHRcdFx0XHRzd2l0Y2hNYXAoKGkpID0+XHJcblx0XHRcdFx0XHR0aGlzLmh0dHBcclxuXHRcdFx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGltZTogdGhpcy5nZXRGbG9vclRpbWUoc291cmNlLkludGVydmFsLCB0aW1lKS50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KS5waXBlKFxyXG5cdFx0XHRcdFx0XHRcdG1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHQpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YTogYW55LCBjb2x1bW5zTWFwcGluZ3MpIHtcclxuXHRcdGxldCByZXMgPSBbXTtcclxuXHJcblx0XHRjb2x1bW5zTWFwcGluZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCBWYWx1ZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uVmFsdWVQYXRoKTtcclxuXHJcblx0XHRcdGlmICghaXRlbS5OYW1lUGF0aCkge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbaXRlbS5WYWx1ZVBhdGguc3BsaXQoXCIuXCIpLnBvcCgpXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoX2l0ZW0sIGkpID0+IFtfaXRlbV0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFtOYW1lRGF0YV0uY29uY2F0KFZhbHVlRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdGdldF9kYXRhX3JlcG9ydChkYXRhOiBhbnkpIHtcclxuXHRcdHJldHVybiBfLnJlcG9ydChkYXRhKTtcclxuXHR9XHJcblx0Z2V0X2xhc3Rfbm9kZV9vZl9kYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIChfLnJlcG9ydChkYXRhKSBhcyBhbnlbXSkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzTGFzdE5vZGUpO1xyXG5cdH1cclxuXHRidWlsZENoYXJ0Q29uZmlnKGNvbHVtbnMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Ly8gVE9ETzogaW1wbGVtZW50IGludGVyZmFjZSBvZiBjMyBjb25maWdcclxuXHRjaGFydHMgPSB7fTtcclxuXHRnZW5lcmF0ZURpYWdyYW0oY29uZmlnOiBhbnksIGlkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIHN5bmM6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcblx0XHR0aGlzLmNoYXJ0c1tpZF0gPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHtpZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKHt9IGFzIFNvdXJjZU1vZGVsLCBuZXcgU3ViamVjdDx2b2lkPigpLCBzeW5jKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydHNbaWRdLmxvYWQoe1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIGNvbmZpZy5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0Rmxvb3JUaW1lKHByZWNpc2lvbiA9IDYwICogMTAwMCwgdGltZTogbnVtYmVyID0gMCkge1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoKHRpbWUgfHwgRGF0ZS5ub3coKSkgLyBwcmVjaXNpb24pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJudW1lcmljLWVkaXQtZGlhZ3JhbVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGUgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gIDwvbWF0LWNhcmQtY29udGVudD5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKS5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLW51bWVyaWNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e2RhdGEuU291cmNlLkRhdGEgfCBqc29ufX08L2Rpdj4gLS0+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7Y291bnRlcn19PC9kaXY+XHJcbiAgPGRpdiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX0ubWF0LWNhcmR7cGFkZGluZzowfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdGNvdW50ZXI6IG51bWJlcjtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHRcdHRoaXMuY291bnRlciA9IDA7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKS5waXBlKFxyXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcclxuXHRcdCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRjb25zdCBjb3VudGVyID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKTtcclxuXHRcdFx0dGhpcy5jb3VudGVyID0gY291bnRlclswXVsxXTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnYXBwL21vZGVscy9hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSAnYXBwL3JlZHVjZXJzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbW9kdWxlLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRhdGEtbWFwcGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgS2V5XHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFSZXBvcnRcIiBbY2xhc3NdPVwiJ2RlcHRzXycgKyBpdGVtLmRlcHRzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYG1hdC1yYWRpby1idXR0b257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrfWRpdi5kZXB0c18ye21hcmdpbi1yaWdodDoyNXB4fWRpdi5kZXB0c18ze21hcmdpbi1yaWdodDo1MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkZXN0aW5hdGlvbjogc3RyaW5nO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuZGF0YVJlcG9ydCA9IF8ucmVwb3J0KGRhdGEpO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0fVxyXG5cdGRhdGFSZXBvcnQ6IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0TmFtZTogc3RyaW5nO1xyXG5cdElzQWN0aXZlOiBib29sZWFuO1xyXG5cdERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRCb3g6IHtcclxuXHRcdE51bWJlck9mQ29sdW1uczogbnVtYmVyO1xyXG5cdFx0T3JkZXI6IG51bWJlcjtcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdH07XHJcblx0U291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRXaWRnZXQ6IHtcclxuXHRcdFwiYm9vbGVhbm9cIjoge1xyXG5cdFx0XHRcIlN1Y2Nlc3NNZXNzYWdlXCI6IHN0cmluZztcclxuXHRcdFx0XCJGYWlsdXJlTWVzc2FnZVwiOiBzdHJpbmc7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdENoYXJ0OiB7XHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdHR5cGU6IFwicGllXCIgfCBcImxpbmVhclwiIHwgXCJzY2F0dGVyXCIgfCBcImJhclwiIHwgXCJsaW5lXCI7XHJcblx0XHRcdHR5cGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0XHRjb2x1bW5zOiBhbnlbXTtcclxuXHRcdFx0Y29sb3JzOiBhbnlbXTtcclxuXHRcdH07XHJcblx0XHRGbG93OiBib29sZWFuO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHtcclxuXHRcdFx0TmFtZVBhdGg6IHN0cmluZztcclxuXHRcdFx0VmFsdWVQYXRoOiBzdHJpbmc7XHJcblx0XHR9W107XHJcblx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0c2hvdzogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRzaG93OiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHpvb206IHtcclxuXHRcdFx0ZW5hYmxlZDogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHR0b29sdGlwOiB7XHJcblx0XHRcdGdyb3VwZWQ6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRBRERfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1cIixcclxuXHRBRERfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlRcIixcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRFwiLFxyXG5cdEFERF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUXCIsXHJcblx0SEFWRV9FTkRQT0lOVCA9IFwiW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkVcIixcclxuXHREQVRBX0xPQURFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORFwiLFxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRFwiLFxyXG5cdERBVEFfQ0FMQ1VMQVRFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEXCIsXHJcblx0Q09MVU1OX0FEREVEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERURcIixcclxuXHRHRU5FUkFURV9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuXHR8IEhhdmVFbmRwb2ludEFjdGlvblxyXG5cdHwgRGF0YUxvYWRlZEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuXHR8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG5cdHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuXHR8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG5cdHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCJyeGpzL29wZXJhdG9yL3B1Ymxpc2hcIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IGFkZERpYWdyYW1SZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2FkZC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRIYXZlRW5kcG9pbnRBY3Rpb24sXHJcblx0Q29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uLFxyXG5cdERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1hZGRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI2MFwiPlxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiU291cmNlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJyb3V0ZUVudGVyZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNvdXJjZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW0uRW5kcG9pbnR9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJzeW5jIHRpbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJTeW5jXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCIgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+w5nChsOZwojDmMK5IMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAoY2hhbmdlKT1cInR5cGVDaGFuZ2VkKClcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiIGNsYXNzPVwiZm9ybS1lbGVtZW50LW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JvdXBzXCIgZm9ybUNvbnRyb2xOYW1lPVwiR3JvdXBzXCIgbXVsdGlwbGU+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIHt7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZSA/IGZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWVbMF0gOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImZvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWU/Lmxlbmd0aCA+IDFcIj5cclxuICAgICAgICAgICAgICAgICAgKCt7e2Zvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWUubGVuZ3RoIC0gMX19IG90aGVycylcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3QtdHJpZ2dlcj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncm91cHMgfCBhc3luY1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IgKENvbmZpZ0NoYW5nZWQpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2RhdGFdPVwiZGlhZ3JhbVBhcnRpYWxDb25maWdcIj48L2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgaWQ9XCJtb2RpZnktZGlhZ3JhbVwiIGZ4RmxleD1cIjQwXCIgW2RhdGFdPVwiZGlhZ3JhbU1vZGVsXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+IMOYwrPDmMKnw5jCrsOYwqrDmMKnw5jCsSDDmMKvw5vCjMOYwqrDmMKnIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5nChsOawq/DmMKnw5jCtMOYwqogw5jCr8OYwqfDmMKvw5nChzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zTWFwcGluZ3M7IGxldCBpPWluZGV4XCIgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJjb2x1bW5zTWFwcGluZ3NbaV1cIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0LnhzPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNDVcIiBmeEZsZXgueHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI0NVwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwoXDmcKCw5jCr8OYwqfDmMKxIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJWYWx1ZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiIFtkaXNhYmxlZF09XCIhaXRlbS5pc0xhc3ROb2RlXCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnBhdGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUNvbHVtbihpKVwiIGZ4RmxleCBtYXQtaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5jCs8OYwqrDmcKIw5nChjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOZwobDmMKqw5jCp8ObwozDmMKsIMOYwq/DmMKnw5jCr8OZwocgw5nCh8OYwqc8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgZnhMYXlvdXQ9XCJyb3dcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZTsgbGV0IGk9aW5kZXhcIlxyXG4gICAgICAgICAgICBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gZnhGbGV4PVwiNDBcIj57e2l0ZW1bMF19fSA6IHt7aXRlbVsxXX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBmeEZsZXggW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiw5jCscOZwobDmsKvIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsVwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjMwXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuVHlwZXNcIiAqbmdJZj1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gPGlucHV0IHBsYWNlaG9sZGVyPVwidGlwb1wiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgPiAtLT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cInRpcG9cIiBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW1bMF1cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlhZ3JhbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqrDmcKGw5jCuMObwozDmcKFw5jCp8OYwqogw5jCuMOYwqfDmcKHw5jCscObwow8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCt8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJDb2xzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKzw5jCqsOZwojDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm93c1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+w5jCscOZwobDmsKvIMOZwoXDmMKqw5nChiA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUZXh0Q29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7DmMKxw5nChsOawq8gw5nCvsOYwrMgw5jCssOZwoXDm8KMw5nChsOZwocgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIkJhY2tncm91bmRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQoJGV2ZW50KVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY2hhcnR7d2lkdGg6MzAwcHg7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9Lml0ZW0tbWFyZ2lue21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja31tYXQtb3B0aW9uLmRlcHRoXzJ7cGFkZGluZy1yaWdodDozMHB4fW1hdC1vcHRpb24uZGVwdGhfM3twYWRkaW5nLXJpZ2h0OjUwcHh9bWF0LW9wdGlvbi5kZXB0aF80e3BhZGRpbmctcmlnaHQ6NzBweH0ubWF0LWNhcmR7bWFyZ2luOjEyLjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0ZGF0YTogYW55O1xyXG5cdGNvbHVtbnM6IGFueTtcclxuXHRjaGFydDtcclxuXHRkaWFncmFtVHlwZXM6IHN0cmluZ1tdO1xyXG5cdHBhdGhPcHRpb25zOiB7XHJcblx0XHRwYXRoOiBzdHJpbmc7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHR0eXBlOiBzdHJpbmc7XHJcblx0XHRjb2xvcjogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRjb2x1bW5zTWFwcGluZ3M6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkaWFncmFtTW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRjb21wb25lbnRNb2RlbDogeyBjb21wb25lbnQ6IGFueTsgaW5wdXRzOiBvYmplY3QgfTtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHRkaWFncmFtUGFydGlhbENvbmZpZzogeyB0eXBlOiBzdHJpbmc7IGlucHV0czogeyBmb3JtR3JvdXA6IEZvcm1Hcm91cDsgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlIH0gfTtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0c291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtTW9kZWwgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0aGlzLmNvbHVtbnNNYXBwaW5ncyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdFx0X2lkOiBkYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0TmFtZTogZGF0YS5OYW1lLFxyXG5cdFx0XHRcdFx0XHRJc0FjdGl2ZTogZGF0YS5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRcdFx0R3JvdXBzOiBkYXRhLkdyb3VwcyxcclxuXHRcdFx0XHRcdFx0VHlwZTogZGF0YS5DaGFydC5kYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdExlZ2VuZDogZGF0YS5DaGFydC5sZWdlbmQuc2hvdyxcclxuXHRcdFx0XHRcdFx0U3ViY2hhcnQ6IGRhdGEuQ2hhcnQuc3ViY2hhcnQuc2hvdyxcclxuXHRcdFx0XHRcdFx0Wm9vbTogZGF0YS5DaGFydC56b29tLmVuYWJsZWQsXHJcblx0XHRcdFx0XHRcdFRvb2x0aXA6IGRhdGEuQ2hhcnQudG9vbHRpcC5ncm91cGVkLFxyXG5cdFx0XHRcdFx0XHRTeW5jOiBkYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0U291cmNlOiBkYXRhLlNvdXJjZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogZGF0YS5DaGFydC5kYXRhLmNvbHVtbnMsXHJcblx0XHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiBkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0XHRDb2xzOiBkYXRhLkJveC5Db2xzLFxyXG5cdFx0XHRcdFx0XHRGbG93OiBkYXRhLkNoYXJ0LkZsb3csXHJcblx0XHRcdFx0XHRcdFJvd3M6IGRhdGEuQm94LlJvd3MsXHJcblx0XHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yLFxyXG5cdFx0XHRcdFx0XHRUZXh0Q29sb3I6IGRhdGEuQm94LlRleHRDb2xvclxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY29sb3JzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2xvcnNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEuY29sb3JzIHx8IHt9KS5mb3JFYWNoKGNvbHVtbktleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLmNvbG9yc1tjb2x1bW5LZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhkYXRhLkNoYXJ0LmRhdGEudHlwZXMgfHwge30pLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2woZGF0YS5DaGFydC5kYXRhLnR5cGVzW2tleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncy5mb3JFYWNoKG1hcHBpbmcgPT4gdGhpcy5hZGRDb2x1bW4obWFwcGluZy5OYW1lUGF0aCwgbWFwcGluZy5WYWx1ZVBhdGgpKTtcclxuXHRcdFx0XHRcdHRoaXMuc291cmNlID0gZGF0YS5Tb3VyY2U7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5kaWFncmFtVHlwZXMgPSBbXHJcblx0XHRcdFwiYmFyXCIsXHJcblx0XHRcdFwiZG9udXRcIixcclxuXHRcdFx0XCJwaWVcIixcclxuXHRcdFx0XCJzY2F0dGVyXCIsXHJcblx0XHRcdFwibGluZVwiLFxyXG5cdFx0XHRcImFyZWFcIixcclxuXHRcdFx0XCJhcmVhLXNwbGluZVwiLFxyXG5cdFx0XHRcIm51bWVyb1wiLFxyXG5cdFx0XHRcImJvb2xlYW5vXCIsXHJcblx0XHRcdFwidGVtcG9cIlxyXG5cdFx0XTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncy5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0c3RhdHVzID09IFwiVkFMSURcIiAmJlxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmxlbmd0aCA+IDAgJiZcclxuXHRcdFx0XHR0aGlzLmRhdGFcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5kYXRhU3Vic2NyaXB0aW9uKSB0aGlzLmRhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHQvLyBnZXREYXRhKCkge1xyXG5cdC8vICAgY29uc3QgbyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5zb3VyY2UpO1xyXG5cdC8vICAgdGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gbyQuc3Vic2NyaWJlKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24odGhpcykpXHJcblx0Ly8gICByZXR1cm4gbyQ7XHJcblx0Ly8gfVxyXG5cdGdldERhdGFTdHJ1Y3R1cmUoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHsgLi4udGhpcy5zb3VyY2UsIEludGVydmFsOiAwIH0sIHRoaXMudW5zdWJzY3JpYmUsIERhdGUubm93KCkgLSAxMDAwMCk7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvYnNlcnZlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdFx0dGhpcy5wYXRoT3B0aW9ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0X2RhdGFfcmVwb3J0KGRhdGEuRGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlcjtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0dHlwZUNoYW5nZWQoKSB7XHJcblx0XHRjb25zdCB0eXBlc0Zvcm1Hcm91cCA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UeXBlcyBhcyBGb3JtR3JvdXApLmNvbnRyb2xzO1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcblx0XHRmb3IgKGNvbnN0IGNiIGluIHR5cGVzRm9ybUdyb3VwKSB7XHJcblx0XHRcdHR5cGVzRm9ybUdyb3VwW2NiXS5zZXRWYWx1ZSh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0YWRkQ29sdW1uKE5hbWVQYXRoOiBzdHJpbmcgPSBcIlwiLCBWYWx1ZVBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0XHRcdE5hbWVQYXRoOiBbTmFtZVBhdGhdLFxyXG5cdFx0XHRcdFZhbHVlUGF0aDogW1ZhbHVlUGF0aCwgVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJvdXRlRW50ZXJlZChldmVudCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnNvdXJjZSA9IGV2ZW50LnZhbHVlO1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IFNvdXJjZTogZXZlbnQudmFsdWUgfSk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBIYXZlRW5kcG9pbnRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRyZW1vdmVDb2x1bW4oaTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbHVtbk1hcHBpbmdzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblx0Y2FsY3VsYXRlQ29sdW1ucygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlciA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbHVtbnNNQXBwaW5nID0ge1xyXG5cdFx0XHRcdC8vIE5hbWVWQWx1ZTogICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLnZhbHVlc1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YSxcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS52YWx1ZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnNldFZhbHVlKGNvbHVtbnMpO1xyXG5cdFx0XHQvLyBhZGQgbmV3IGl0ZW0gdG8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sb3JzIGZvcm0gY29udHJvbFxyXG5cdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29sdW1uS2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChcIiMxMjM0NTZcIikpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Y29uc3Qga2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0dHlwZXNDb250cm9sLmFkZENvbnRyb2woa2V5LCBuZXcgRm9ybUNvbnRyb2wodGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0b2JzZXIubmV4dCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdlbmVyYXRlRGlhZ3JhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgdGVtcCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRlbXAuX2lkID0gXCJ0ZW1wbGF0ZV9pZFwiO1xyXG5cdFx0dGVtcC5OYW1lID0gdGhpcy5mb3JtR3JvdXAudmFsdWUuTmFtZTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGVtcC5Tb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdHRlbXAuQm94ID0ge1xyXG5cdFx0XHROdW1iZXJPZkNvbHVtbnM6IDEsXHJcblx0XHRcdE9yZGVyOiAxLFxyXG5cdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkJhY2tncm91bmRDb2xvclxyXG5cdFx0fTtcclxuXHRcdHRlbXAuV2lkZ2V0ID0ge1xyXG5cdFx0XHRib29sZWFubzogdGhpcy5mb3JtR3JvdXAudmFsdWUuYm9vbGVhbm9cclxuXHRcdH07XHJcblx0XHR0ZW1wLkNoYXJ0ID0ge1xyXG5cdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5mb3JtR3JvdXAudmFsdWUuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlLFxyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0dHlwZXM6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGVzLFxyXG5cdFx0XHRcdGNvbG9yczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdEZsb3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkZsb3csXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkxlZ2VuZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlN1YmNoYXJ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ab29tXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRncm91cGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Ub29sdGlwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdG9vbHRpcDoge1xyXG5cdFx0XHQvLyAgICAgICAgIGZvcm1hdDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIGNvbG9yOiB7XHJcblx0XHRcdC8vICAgICAgICAgcGF0dGVybjogWycjNjBCMDQ0JywgJyNGNkM2MDAnLCAnI0Y5NzYwMCcsICcjRkYwMDAwJ10sXHJcblx0XHRcdC8vICAgICAgICAgdGhyZXNob2xkOiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAvLyAgdW5pdDogJ3ZhbHVlJywgLy8gcGVyY2VudGFnZSBpcyBkZWZhdWx0XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZXM6IFszMCwgNjAsIDkwLCAxMDBdXHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0fTtcclxuXHRcdC8vIHRoaXMuY29tcG9uZW50TW9kZWwgPSB7XHJcblx0XHQvLyAgIGNvbXBvbmVudDogdGhpcy50eXBlTWFwVG9EaWFncmFtW3RlbXAuQ2hhcnQuZGF0YS50eXBlXSxcclxuXHRcdC8vICAgaW5wdXRzOiB7IGRhdGE6IHRlbXAgfVxyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5kaWFncmFtTW9kZWwgPSB0ZW1wO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHR9XHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGlhZ3JhbURhdGEkIHwgYXN5bmNcIiBbc3R5bGUuY29sb3JdPVwiKGRpYWdyYW1EYXRhJCB8IGFzeW5jKT8uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYylcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBkaWFncmFtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblxyXG5cdGRpYWdyYW1EYXRhJDogYW55O1xyXG5cdEBJbnB1dChcImlkXCIpIGRpYWdyYW1JZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kaWFncmFtRGF0YSQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0odGhpcy5kaWFncmFtSWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtc1wiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1ncmlkLWxpc3QgY29scz1cIjEyXCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cclxuICA8bWF0LWdyaWQtdGlsZSAqbmdGb3I9XCJsZXQgZGlhZ3JhbSBvZiAoZGlhZ3JhbXMgfCBhc3luYyk/LlJlc3VsdFwiIFxyXG4gIFtjb2xzcGFuXT1cImRpYWdyYW0uQm94LkNvbHNcIiBcclxuICBbcm93c3Bhbl09XCJkaWFncmFtLkJveC5Sb3dzXCIgXHJcbiAgW3N0eWxlLmNvbG9yXT1cImRpYWdyYW0uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cImRpYWdyYW1cIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvbWF0LWdyaWQtdGlsZT5cclxuPC9tYXQtZ3JpZC1saXN0PlxyXG48YnIgLz5cclxuPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuPC9kaXY+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj0nZW5kIGNlbnRlcic+XHJcbiAgPGJ1dHRvbiBtYXQtZmFiIHJvdXRlckxpbms9XCIuLi9kaWFncmFtcy9hZGRcIiBjbGFzcz1cImFkZC1idG5cIj5cclxuICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kaWFncmFtc1xyXG5cdFx0Ly8gICAgICAgICAuZGVsYXkoMTAwKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRpYWdyYW1zID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgZGlhZ3JhbXMuUmVzdWx0LmZvckVhY2goZGlhZ3JhbSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oZGlhZ3JhbS5DaGFydCwgZGlhZ3JhbS5faWQsIGRpYWdyYW0uU291cmNlLlJvdXRlLCBkaWFncmFtLlNvdXJjZS5TeW5jKSkpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2UuaW5pdFNvY2tldCgpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbmQoXCJhZGQtbWVzc2FnZVwiKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5vbk1lc3NhZ2UoKS5zdWJzY3JpYmUobXNnPT57XHJcblx0XHQvLyAgICAgICAgIGRlYnVnZ2VyXHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZWRpdC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiNDAwcHhcIj5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbicgKG5nU3VibWl0KT1cImFkZCgkZXZlbnQpXCI+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCosOYwq/DmMKxw5jCsyDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3V0ZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcblxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGZ4RmxleD0nbm9ncm93JyBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9kaWFncmFtcyc+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9mb3JtPlxyXG48L21hdC1jYXJkPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHRsZXQgUm91dGUgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0RGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJDaGFuZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdmVyXCIgZnhsYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7dGltZSB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJlbmRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cIm1vZGVsSXNDb3JyZWN0IHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0gd2lkZ2V0XCIgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfW1hdC1zbGlkZXJ7d2lkdGg6MTAwJX0uZGF0YS10aW1le2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92ZXJ7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozNXB4O2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjM7dHJhbnNpdGlvbjouNHMgZWFzZS1pbi1vdXR9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRtb2RlbElzQ29ycmVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X21vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YSh2YWx1ZTogRGlhZ3JhbU1vZGVsKSB7XHJcblx0XHRpZiAoISh2YWx1ZS5DaGFydCAmJiB2YWx1ZS5faWQpKSByZXR1cm47XHJcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbDtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0dGltZTogbnVtYmVyO1xyXG5cdG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gSW50ZXJ2YWxPYnNlcnZhYmxlXHJcblx0XHQvLyAgICAgICAgIC8vIC5jcmVhdGUodGhpcy5tb2RlbC5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLmNyZWF0ZSg5OTkpXHJcblx0XHQvLyAgICAgICAgIC5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6ICcwJ1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pXHJcblx0XHQvLyAgICAgICAgIClcclxuXHRcdC8vICAgICAgICAgLy8gLnN3aXRjaE1hcCgocmVzOiBhbnkpID0+IG9mKHJlcy5SZXN1bHQuRGF0YSkpXHJcblx0XHQvLyAgICAgICAgIC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0LkRhdGEpXHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0LmRlbGF5KDMwMCkuZmlsdGVyKGRhdGEgPT4gZGF0YSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0XHQuLi50aGlzLmRhdGEuQ2hhcnQsXHJcblx0XHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHt0aGlzLmRhdGEuX2lkfWBcclxuXHRcdFx0XHQvLyBzaXplOiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICBoZWlnaHQ6IDE1MFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCB0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0XHRcdC5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSwgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLkNoYXJ0LkZsb3cpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5mbG93KHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuQ2hhcnQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuX2lkLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuU3luY1xyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdHRpbWVDaGFuZ2UoZTogTWF0U2xpZGVyQ2hhbmdlKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKCgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKSwgdHJ1ZSlcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0LmdldERhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLlNvdXJjZSxcclxuXHRcdFx0XHR0aGlzLnVuc3Vic2NyaWJlLFxyXG5cdFx0XHRcdERhdGUubm93KCkgLSAoMTAwMCAtIGUudmFsdWUpICogdGhpcy5kYXRhLlNvdXJjZS5JbnRlcnZhbCxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0Ly8gICAgICAgICAuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHQvLyAgICAgICAgIC5tYXAoY29sdW1uID0+IHtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGNvbHVtblswXSArPSAnX2hpc3RvcmljJztcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuXHRcdFx0XHQvLyAgICAgICAgIH0pO1xyXG5cdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRJbnB1dCxcclxuXHRBZnRlclZpZXdJbml0LFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhY2tncm91bmRDb2xvclwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gc3RyZXRjaFwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIwIDAgYXV0b1wiICpuZ0lmPVwiX2RhdGFcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCIgY2xhc3M9XCJ3aWRnZXQtdGl0bGVcIj5cclxuICAgICAgICAgICAge3tfZGF0YS5OYW1lfX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycuLi9kaWFncmFtcy9lZGl0JyAsICBfZGF0YS5faWRdXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBkaWFncmFtXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDxtYXQtY2FyZC1jb250ZW50PiAtLT5cclxuICAgIDwhLS0gPG1hdC1zbGlkZXIgaW52ZXJ0IFsobmdNb2RlbCldPVwidGltZVwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPiAtLT5cclxuICAgIDxtYXQtc2xpZGVyIGNsYXNzPVwib3ZlclwiIGZ4RmxleD1cIjAgMCBhdXRvXCIgaW52ZXJ0IG1pbj0nMScgbWF4PScxMDAwJyB2YWx1ZT1cIjEwMDBcIiAoY2hhbmdlKT1cInRpbWVDaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXNsaWRlcj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMSAxIGF1dG9cIiBjbGFzcz1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIDwvbWF0LWNhcmQtY29udGVudD4gLS0+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTttYXJnaW46MTIuNXB4fS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9LndpZGdldC10aXRsZXtmb250OjEuM2VtIElSQU5TYW5zLHRhaG9tYX0ub3Zlcnt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjYwcHg7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6Mzt0cmFuc2l0aW9uOi40cyBlYXNlLWluLW91dH1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0ZG9udXQ6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRwaWU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRzY2F0dGVyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bGluZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGFyZWE6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRcImFyZWEtc3BsaW5lXCI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRudW1lcm86IE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0dGVtcG86IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGJvb2xlYW5vOiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBWaWV3Q2hpbGQoRGlhZ3JhbUNvbXBvbmVudCkgd2lkZ2V0Q29tcG9uZW50OiBEaWFncmFtQ29tcG9uZW50O1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0X2RhdGE6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcjtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0bGV0IHJhdyA9IHsgZGF0YSB9O1xyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS5DaGFydC5kYXRhLnR5cGVdO1xyXG5cdFx0bGV0IGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMocmF3KS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogcmF3W2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0YmFja2dyb3VuZENvbG9yOiBTdHJpbmcgPSBcIlwiO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50Ll9jb21wb25lbnQudGltZUNoYW5nZShlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRhcmVhOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0cGllOiBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGxpbmU6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IGRhdGEuaW5wdXRzW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0aWYgKCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuQ29uZmlnQ2hhbmdlZClcclxuXHRcdFx0KDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNTdWNjZWVkLCBHZXREaWFncmFtc0ZhaWxlZCwgR2V0RGlhZ3JhbXNTdGFydCB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKCkucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldERpYWdyYW1zU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0RGlhZ3JhbXMoKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgR2V0RGlhZ3JhbXNTdWNjZWVkKHJlcykpLCBjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXREaWFncmFtc0ZhaWxlZCgpKSkpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0QWRkRGlhZ3JhbUFjdGlvblR5cGVzLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdGFydCxcclxuXHRBZGREaWFncmFtQWN0aW9uU3VjY2VlZCxcclxuXHRBZGREaWFncmFtQWN0aW9uRmFpbGVkLFxyXG5cdERhdGFMb2FkZWRBY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uLFxyXG5cdEdlbmVyYXRlRGlhZ3JhbUFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdC5hZGREaWFncmFtKGRhdGEpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEFkZERpYWdyYW1BY3Rpb25GYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9TVUNDRUVEKS5waXBlKFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRtYXAoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJkaWFncmFtc1wiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRIQVZFX0VORFBPSU5UJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0REFUQV9MT0FERUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5nZXREYXRhU3RydWN0dXJlKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQpXHJcblx0XHQvLyAuc2tpcFVudGlsKHRoaXMuYWN0aW9ucyQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRCkpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuY2FsY3VsYXRlQ29sdW1ucygpLm1hcCgoKSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRHZW5lcmF0ZURpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuR0VORVJBVEVfRElBR1JBTSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBkYXRhLmdlbmVyYXRlRGlhZ3JhbSgpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG5cdHtcclxuXHRcdHBhdGg6IFwiZGlhZ3JhbXNcIixcclxuXHRcdGNvbXBvbmVudDogRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRGlhZ3JhbXNDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOmlkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBBZGREaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIm51bWVyb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogTnVtZXJpY0RpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwidGVtcG9cIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJib29sZWFub1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgSUdyaWRJdGVtQ29tcG9uZW50IH0gZnJvbSBcIkBzb3VzaGlhbnMvZ3JpZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtbiB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxNXB4XCI+XHJcbjxoND7DmcKEw5vCjMOYwrPDmMKqIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCscOZwofDmMKnPC9oND5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjEwMFwiPlxyXG4gIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOZwofDmMKnXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZERpYWdyYW1JZFwiIG5hbWU9XCJzZWxlY3RlZERpYWdyYW1JZFwiPlxyXG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkaWFncmFtcyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS5OYW1lfX1cclxuICA8L21hdC1vcHRpb24+XHJcbjwvbWF0LXNlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8eyBkaWFncmFtSWQ6IHN0cmluZyB9PiB7XHJcblx0ZGlhZ3JhbXMkOiBPYnNlcnZhYmxlPERpYWdyYW1Nb2RlbFtdPjtcclxuXHRzZWxlY3RlZERpYWdyYW1JZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kaWFncmFtSWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGlhZ3JhbUlkOiB0aGlzLnNlbGVjdGVkRGlhZ3JhbUlkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCkucGlwZShtYXAocmVzID0+IHJlcy5SZXN1bHQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdEdyaWRMaXN0TW9kdWxlLFxyXG5cdE1hdFNsaWRlck1vZHVsZSxcclxuXHRNYXRBdXRvY29tcGxldGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnL251bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWVkaXQtZGlhZ3JhbS9udW1lcmljLWVkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci9kaWFncmFtLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFNYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGRpYWdyYW1WaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9lZGl0LWRpYWdyYW0vZWRpdC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9kaWFncmFtcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hZGQtZGlhZ3JhbS5lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdFNsaWRlck1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0VG9vbHRpcE1vZHVsZSxcclxuXHRcdE1hdEdyaWRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFkZERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtc0NvbXBvbmVudCxcclxuXHRcdGRpYWdyYW1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RWRpdERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhdGFNYXBwZXJDb21wb25lbnQsXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHREaWFncmFtU2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQsIGRpYWdyYW1WaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgXSxcclxuXHRwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NEaWFncmFtTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBEaWFncmFtTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0RpYWdyYW1Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImRpYWdyYW1cIiwgRGlhZ3JhbVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIERpYWdyYW1FZmZlY3RzLCBBZGREaWFncmFtRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRGlhZ3JhbU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRGlhZ3JhbU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyIiwiZnJvbUVkaXREaWFncmFtLlJlZHVjZXIiLCJwYXJlbnRHdWFyZFJlZHVjZXIuUGFyZW50R3VhcmRSZWR1Y2VyIiwiQmVoYXZpb3JTdWJqZWN0IiwiU3ViamVjdCIsIk9ic2VydmFibGUiLCJvZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVUEsSUFBYSxxQkFBcUIsR0FBd0I7SUFDekQsU0FBUyxFQUFFLEVBQUU7SUFDYixHQUFHLEVBQUU7UUFDSixVQUFVLEVBQUUsS0FBSztRQUNqQixlQUFlLEVBQUUsNkJBQTZCO0tBQzlDO0NBQ0QsQ0FBQzs7QUFFRixJQUFhLG1CQUFtQixHQUFHLElBQUksY0FBYyxDQUFzQixxQkFBcUIsQ0FBQzs7Ozs7O0FDaEJqRyxJQUFpQixtQkFBbUI7QUFBcEMsV0FBaUIsbUJBQW1CO0lBQ25DLElBQUE7UUFHQyxpQkFBWSxTQUEwRTtZQUExRSwwQkFBQSxFQUFBLDhCQUF5QyxFQUFpQyxDQUFBO1lBQXRGLGlCQUVDO1lBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQztTQUNwRTs7OztR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
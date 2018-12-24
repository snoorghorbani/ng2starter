import { __decorate, __metadata, __assign } from 'tslib';
import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@soushians/shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
var SourceSubmit = /** @class */ (function () {
    function SourceSubmit(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
    return SourceSubmit;
}());
var SourceSubmitSucceed = /** @class */ (function () {
    function SourceSubmitSucceed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
    return SourceSubmitSucceed;
}());
var SourceSubmitFailed = /** @class */ (function () {
    function SourceSubmitFailed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
    return SourceSubmitFailed;
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
    switch (action.type) {
        case SourceActionTypes.SOURCE_SUBMIT:
            return __assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return __assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return __assign({}, state);
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var SourceReducers = {
    sources: Reducer
};
/** @type {?} */
var selectSourceState = createFeatureSelector("source");
/** @type {?} */
var getSourceList = createSelector(selectSourceState, function (state) { return state.list; });
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GetSourcesApiModel;
(function (GetSourcesApiModel) {
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
    GetSourcesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetSourcesApiModel.Response = Response;
})(GetSourcesApiModel || (GetSourcesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
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
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: /**
             * @return {?}
             */
            function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    Endpoint: new FormControl("", [Validators.required]),
                    Interval: new FormControl("", [Validators.required]),
                    IsActive: new FormControl("false", [Validators.required]),
                    Thresholds: new FormArray([])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    UpsertSourceApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertSourceApiModel.Response = Response;
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SourceService = /** @class */ (function () {
    function SourceService(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    SourceService.prototype.getSources = /**
     * @return {?}
     */
    function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SourceService.prototype.getSourceById = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.http
            .get("http://localhost:3000/api/source/" + id)
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} body
     * @return {?}
     */
    SourceService.prototype.upsertSource = /**
     * @param {?} body
     * @return {?}
     */
    function (body) {
        /** @type {?} */
        var model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return Observable.throw(err);
        });
    };
    /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    SourceService.prototype.getData = /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    function (source, time) {
        if (time === void 0) { time = 0; }
        return this.http
            .get("http://localhost:3000/api/data", {
            params: {
                sourceId: source._id,
                time: null
            }
        })
            .map(function (res) { return res.Result; });
    };
    SourceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SourceService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ SourceService.ngInjectableDef = defineInjectable({ factory: function SourceService_Factory() { return new SourceService(inject(HttpClient)); }, token: SourceService, providedIn: "root" });
    return SourceService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SourceModuleContainerComponent = /** @class */ (function () {
    function SourceModuleContainerComponent(service) {
        this.service = service;
    }
    /**
     * @return {?}
     */
    SourceModuleContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SourceModuleContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    SourceModuleContainerComponent.ctorParameters = function () { return [
        { type: SourceService }
    ]; };
    return SourceModuleContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SourceListComponent = /** @class */ (function () {
    function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService;
        this.sources = this.sourceService.getSources();
        // this.sources.subscribe(data => { debugger})
        //this.configs.subscribe(data => {
        //        debugger;
        //        this.store.dispatch(new ConfigLoaded(data.Result));
        //});
    }
    /**
     * @return {?}
     */
    SourceListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    SourceListComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-list",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\n        \n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\n        </a>\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\n      </mat-card-title>\n    \n  </mat-card>\n\n  <div fxLayoutAlign='end center'>\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</div>\n\n\n",
                    styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                },] },
    ];
    /** @nocollapse */
    SourceListComponent.ctorParameters = function () { return [
        { type: SourceService }
    ]; };
    return SourceListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SourceUpsertComponent = /** @class */ (function () {
    function SourceUpsertComponent(sourceService, formBuilder, route, store) {
        var _this = this;
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = (/** @type {?} */ (this.formGroup.controls["Thresholds"])).controls;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(function (mapping) {
                        return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                    });
                });
        });
    }
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    SourceUpsertComponent.prototype.addItem = /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    function (Name, Formula, Message, Type) {
        if (Name === void 0) { Name = ""; }
        if (Formula === void 0) { Formula = ""; }
        if (Message === void 0) { Message = ""; }
        if (Type === void 0) { Type = "critical"; }
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.push(new FormGroup({
            Name: new FormControl(Name, [Validators.required]),
            Formula: new FormControl(Formula, [Validators.required]),
            Message: new FormControl(Message, [Validators.required]),
            Type: new FormControl(Type, [Validators.required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SourceUpsertComponent.prototype.removeItem = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(function (data) {
            _this.data = data.Data;
        });
        return o$;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SourceUpsertComponent.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    };
    SourceUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-source-upsert",
                    template: "<div fxLayout=\"column\">\n  <div fxFlex=\"100\">\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\n          </mat-form-field>\n          <div>\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\n      <mat-card-content fxLayout=\"column\">\n        <div>\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\n        </div>\n        <div class=\"item-margin\">\n          <!-- TODO: -->\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\n      <mat-card-content fxLayout=\"column\">\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\n                </mat-form-field>\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\n                  <label>\u0646\u0648\u0639 :</label>\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\n                    {{item}}\n                  </mat-radio-button>\n                </mat-radio-group>\n\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div class=\"item-margin\">\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\">\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n",
                    styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                },] },
    ];
    /** @nocollapse */
    SourceUpsertComponent.ctorParameters = function () { return [
        { type: SourceService },
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return SourceUpsertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    {
        path: "source",
        component: SourceModuleContainerComponent,
        children: [
            {
                path: "",
                component: SourceListComponent
            },
            {
                path: "edit/:id",
                component: SourceUpsertComponent
            },
            {
                path: "add",
                component: SourceUpsertComponent
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
var SourceEffects = /** @class */ (function () {
    function SourceEffects(actions$, router, sourceService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(function (action) { return action.payload; }), switchMap(function (data) {
            return _this.sourceService
                .upsertSource(data)
                .pipe(map(function (res) { return new SourceSubmitSucceed(); }), catchError(function () { return of(new SourceSubmitFailed()); }));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(function () {
            _this.router.navigate(["source"]);
            return Observable$1.empty();
        }));
    }
    SourceEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SourceEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: SourceService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SourceEffects.prototype, "afterSubmitSource$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], SourceEffects.prototype, "SigninSucceed$", void 0);
    return SourceEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SourceModule = /** @class */ (function () {
    function SourceModule() {
    }
    SourceModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        FlexLayoutModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatSnackBarModule,
                        MatSidenavModule,
                        MatExpansionModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatMenuModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatInputModule,
                        MatToolbarModule,
                        MatDatepickerModule,
                        MatProgressBarModule,
                        BrowserModule,
                        StoreModule.forFeature("source", SourceReducers),
                        BrowserAnimationsModule,
                        RoutingModule,
                        EffectsModule.forFeature([SourceEffects]),
                        SharedModule
                    ],
                    declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                    exports: []
                },] },
    ];
    return SourceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
//services
//actions
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SourceModule, SourceEffects as ɵi, SourceReducers as ɵa, Reducer as ɵb, SourceService as ɵe, SourceListComponent as ɵf, SourceModuleContainerComponent as ɵd, SourceUpsertComponent as ɵg, RoutingModule as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvdXJjZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL21vZGVscy9nZXQtc291cmNlcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9tb2RlbHMvdXBzZXJ0LXNvdXJjZS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLW1vZHVsZS1jb250YWluZXIvc291cmNlLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zb3VyY2Uucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc291cmNlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU291cmNlQWN0aW9uVHlwZXMge1xyXG5cdFNPVVJDRV9TVUJNSVQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXRcIixcclxuXHRTT1VSQ0VfU1VCTUlUX1NVQ0NFRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgc3VjY2VlZFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfRkFJTEVEID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0IGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gU291cmNlU3VibWl0IHwgU291cmNlU3VibWl0U3VjY2VlZCB8IFNvdXJjZVN1Ym1pdEZhaWxlZDtcclxuIiwiaW1wb3J0ICogYXMgc291cmNlIGZyb20gXCIuLi9hY3Rpb25zL3NvdXJjZS5hY3Rpb25cIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogU291cmNlTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogc291cmNlLkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBzb3VyY2UuU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBzb3VyY2UuU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX0ZBSUxFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0RGF0YSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBzb3VyY2VMaXN0IGZyb20gJy4vc291cmNlLWxpc3QucmVkdWNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZVN0YXRlIHtcclxuICAgICAgICBsaXN0OiBzb3VyY2VMaXN0LlN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb3VyY2VSZWR1Y2VycyA9IHtcclxuICAgICAgc291cmNlczogc291cmNlTGlzdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcbiAgICAgICAgJ3NvdXJjZXMnOiBTb3VyY2VTdGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U291cmNlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U291cmNlU3RhdGU+KFwic291cmNlXCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICAgIHNlbGVjdFNvdXJjZVN0YXRlLFxyXG4gICAgICAgIChzdGF0ZTogU291cmNlU3RhdGUpID0+IHN0YXRlLmxpc3RcclxuKTtcclxuLy9leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdERhdGEgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgICAgIGdldFNvdXJjZUxpc3QsXHJcbi8vICAgICAgICBzb3VyY2VMaXN0LmdldFNvdXJjZUxpc3REYXRhXHJcbi8vKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0U291cmNlc0FwaU1vZGVsIHtcclxuXHQvLyBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldFNvdXJjZXNBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0U291cmNlc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogU291cmNlTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0U291cmNlQXBpTW9kZWwge1xyXG5cdC8vIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0RW5kcG9pbnQ6IHN0cmluZztcclxuXHRcdEludGVydmFsOiBudW1iZXI7XHJcblx0XHRJc0FjdGl2ZTogYm9vbGVhbjtcclxuXHRcdFRocmVzaG9sZHM6IHtcclxuXHRcdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0XHRGb3JtdWxhOiBzdHJpbmc7XHJcblx0XHRcdE1lc3NhZ2U6IHN0cmluZztcclxuXHRcdFx0VHlwZTogYm9vbGVhbjtcclxuXHRcdH1bXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdEVuZHBvaW50OiB0aGlzLkVuZHBvaW50LFxyXG5cdFx0XHRcdEludGVydmFsOiB0aGlzLkludGVydmFsLFxyXG5cdFx0XHRcdElzQWN0aXZlOiB0aGlzLklzQWN0aXZlLFxyXG5cdFx0XHRcdFRocmVzaG9sZHM6IHRoaXMuVGhyZXNob2xkc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0RW5kcG9pbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SW50ZXJ2YWw6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SXNBY3RpdmU6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUaHJlc2hvbGRzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFNvdXJjZU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBHZXRTb3VyY2VzQXBpTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXJ2aWNlIHtcclxuXHRyZXNwb25zZUNhY2hlOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NvdXJjZVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cHNlcnRTb3VyY2UoYm9keTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHsgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSB9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNvdXJjZS1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNvdXJjZVNlcnZpY2UpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2V0U291cmNlc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbi8vaW1wb3J0IHsgU291cmNlVXBzZXJ0QWN0aW9uIH0gZnJvbSAnYXBwL2FjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLWxpc3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICA8bWF0LWNhcmQgY2xhc3M9XCJzb3VyY2UtYm94XCIgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiAoc291cmNlcyB8IGFzeW5jKT8uUmVzdWx0XCIgW2Z4RmxleF09XCIzMlwiPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGUgZnhGbGV4TGF5b3V0PVwicm93XCIgZmxleExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIHNvdXJjZS5faWRdXCIgZnhGbGV4PVwiNDBweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBhcmlhLWxhYmVsPVwiZWRpdCBzb3VyY2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHNwYW4gZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIj57e3NvdXJjZS5FbmRwb2ludH19PC9zcGFuPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgXHJcbiAgPC9tYXQtY2FyZD5cclxuXHJcbiAgPGRpdiBmeExheW91dEFsaWduPSdlbmQgY2VudGVyJz5cclxuICAgIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vc291cmNlL2FkZFwiIGNsYXNzPVwiYWRkLWJ0blwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5zb3VyY2UtYm94e21hcmdpbjo1cHh9LnNvdXJjZS1ib3ggYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlIC8vIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMuc3Vic2NyaWJlKGRhdGEgPT4geyBkZWJ1Z2dlcn0pXHJcblx0XHQvL3RoaXMuY29uZmlncy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29uZmlnTG9hZGVkKGRhdGEuUmVzdWx0KSk7XHJcblx0XHQvL30pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU291cmNlU3VibWl0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2Utc291cmNlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCosOYwq/DmMKxw5jCs1wiIGZvcm1Db250cm9sTmFtZT1cIkVuZHBvaW50XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCr8OYwqogw5jCssOZwoXDmMKnw5nChiDDmMKow5nChyDDmMKxw5nCiMOYwrIgw5jCscOYwrPDmMKnw5nChsObwowgw5jCr8OYwqfDmMKvw5nCh1wiIGZvcm1Db250cm9sTmFtZT1cIkludGVydmFsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZ2V0RGF0YSgpXCI+w5jCs8OYwqfDmMKuw5jCqsOYwqfDmMKxIMOYwq/Dm8KMw5jCqsOYwqc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDwhLS0gVE9ETzogLS0+XHJcbiAgICAgICAgICA8IS0tIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjMwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0aHJlc2hvbGQgb2YgdGhyZXNob2xkczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBjbGFzcz1cImFkZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwidGhyZXNob2xkc1tpXVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsdHJcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoHDmMKxw5nChcOZwojDmcKEXCIgZm9ybUNvbnRyb2xOYW1lPVwiRm9ybXVsYVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5nCiMOYwrbDm8KMw5jCrVwiIGZvcm1Db250cm9sTmFtZT1cIk1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+w5nChsOZwojDmMK5IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0eXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpKVwiIGZ4RmxleCBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmcK+w5jCp8Oawqkgw5rCqcOYwrHDmMKvw5nChjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5jCosOYwrPDmMKqw5jCp8OZwobDmcKHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4IGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGQoJGV2ZW50KVwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9Jy9zb3VyY2UnICBmeExheW91dEdhcD1cIjVweFwiPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgbWF0LWNhcmR7bWFyZ2luOjVweH0uYWRkLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO3BhZGRpbmc6MTBweDttYXJnaW46NXB4IDB9Lml0ZW0tbWFyZ2lue21hcmdpbi10b3A6MTBweH1idXR0b25bdHlwZT1zdWJtaXRde21hcmdpbi1sZWZ0OjVweH0ubHRye2RpcmVjdGlvbjpsdHJ9LmZvcm0tZWxlbWVudC1tYXJnaW57bWFyZ2luOjVweCAxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdC8vY29uZmlnSW5mb3JhbWF0aW9uO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHR0aHJlc2hvbGRzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhOiBhbnk7XHJcblx0dHlwZXMgPSBbIFwiY3JpdGljYWxcIiwgXCJnb2FsXCIgXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy50aHJlc2hvbGRzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlRocmVzaG9sZHMgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBzb3VyY2VJZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHNvdXJjZUlkICYmXHJcblx0XHRcdFx0dGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZUJ5SWQoc291cmNlSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHRFbmRwb2ludDogZGF0YS5FbmRwb2ludCxcclxuXHRcdFx0XHRcdFx0SW50ZXJ2YWw6IGRhdGEuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlIHx8IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRUaHJlc2hvbGRzOiBkYXRhLlRocmVzaG9sZHNcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGRhdGEuVGhyZXNob2xkcy5mb3JFYWNoKG1hcHBpbmcgPT5cclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKG1hcHBpbmcuTmFtZSwgbWFwcGluZy5Gb3JtdWxhLCBtYXBwaW5nLk1lc3NhZ2UsIG1hcHBpbmcuVHlwZSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0YWRkSXRlbShOYW1lOiBzdHJpbmcgPSBcIlwiLCBGb3JtdWxhOiBzdHJpbmcgPSBcIlwiLCBNZXNzYWdlOiBzdHJpbmcgPSBcIlwiLCBUeXBlOiBzdHJpbmcgPSBcImNyaXRpY2FsXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKE5hbWUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRGb3JtdWxhOiBuZXcgRm9ybUNvbnRyb2woRm9ybXVsYSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdE1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChNZXNzYWdlLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFR5cGUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8vICAgIGNvbnRyb2wucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdC8vICAgICAgTmFtZTogW05hbWVdLFxyXG5cdFx0Ly8gICAgICBGb3JtdWxhOiBbRm9ybXVsYV0sXHJcblx0XHQvLyAgICAgIE1lc3NhZ2U6IFtNZXNzYWdlXVxyXG5cdFx0Ly8gICAgfSkpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCkge1xyXG5cdFx0Y29uc3QgbyQgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRvJC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG8kO1xyXG5cdH1cclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdC8vaWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU291cmNlU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLWxpc3Qvc291cmNlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNvdXJjZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLXVwc2VydC9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJzb3VyY2VcIixcclxuXHRcdGNvbXBvbmVudDogU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VMaXN0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOmlkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvdXJjZUFjdGlvblR5cGVzLCBTb3VyY2VTdWJtaXQsIFNvdXJjZVN1Ym1pdFN1Y2NlZWQsIFNvdXJjZVN1Ym1pdEZhaWxlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU291cmNlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFmdGVyU3VibWl0U291cmNlJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTZXJ2aWNlXHJcblx0XHRcdFx0LnVwc2VydFNvdXJjZShkYXRhKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IFNvdXJjZVN1Ym1pdFN1Y2NlZWQoKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IFNvdXJjZVN1Ym1pdEZhaWxlZCgpKSkpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW5TdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfU1VDQ0VFRCkucGlwZShcclxuXHRcdHN3aXRjaE1hcCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJzb3VyY2VcIiBdKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHRcdH0pXHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlLCBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRMaXN0TW9kdWxlLFxyXG5cdE1hdE1lbnVNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdE1hdFByb2dyZXNzQmFyTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgU291cmNlUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc291cmNlLnJvdXRpbmctbW9kdWxlXCI7XHJcbmltcG9ydCB7IFNvdXJjZUVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1saXN0L3NvdXJjZS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VVcHNlcnRDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0U2lkZW5hdk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdExpc3RNb2R1bGUsXHJcblx0XHRNYXRNZW51TW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0VG9vbGJhck1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRQcm9ncmVzc0Jhck1vZHVsZSxcclxuXHRcdEJyb3dzZXJNb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwic291cmNlXCIsIFNvdXJjZVJlZHVjZXJzKSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG5cdFx0Um91dGluZ01vZHVsZSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIFNvdXJjZUVmZmVjdHMgXSksXHJcblx0XHRTaGFyZWRNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogWyBTb3VyY2VMaXN0Q29tcG9uZW50LCBTb3VyY2VVcHNlcnRDb21wb25lbnQsIFNvdXJjZU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VNb2R1bGUge31cclxuIl0sIm5hbWVzIjpbInNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcyIsInNvdXJjZUxpc3QuUmVkdWNlciIsIk9ic2VydmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlDLGVBQWdCLHdCQUF3QjtJQUN4Qyx1QkFBd0IsZ0NBQWdDO0lBQ3hELHNCQUF1QiwrQkFBK0I7O0FBR3ZELElBQUE7SUFFQyxzQkFBbUIsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFEeEQsWUFBZ0IsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0tBQ1k7dUJBWDdEO0lBWUMsQ0FBQTtBQUhELEFBSUEsSUFBQTs7UUFDQyxZQUFnQixpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQzs7OEJBZHpEO0lBZUMsQ0FBQTtBQUZELEFBR0EsSUFBQTs7UUFDQyxZQUFnQixpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQzs7NkJBakJ4RDtJQWtCQyxDQUFBOzs7Ozs7U0NWTSxFQUFFOztBQURULElBQU0sWUFBWSxHQUFVO0lBQzNCLElBQUksSUFBSTtD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
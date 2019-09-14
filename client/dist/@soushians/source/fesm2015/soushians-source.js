import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { createFeatureSelector, createSelector, Store, StoreModule } from '@ngrx/store';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@soushians/shared';
import { Observable } from 'rxjs/Rx';
import { __decorate, __metadata } from 'tslib';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { pluck, switchMap, map, catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
class SourceSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmit.prototype.type;
    /** @type {?} */
    SourceSubmit.prototype.payload;
}
class SourceSubmitSucceed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmitSucceed.prototype.type;
}
class SourceSubmitFailed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function State() { }
if (false) {
    /** @type {?} */
    State.prototype.data;
}
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function Reducer(state = initialState, action) {
    switch (action.type) {
        case SourceActionTypes.SOURCE_SUBMIT:
            return Object.assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return Object.assign({}, state);
        case SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return Object.assign({}, state);
        default:
            return state;
    }
}
/** @type {?} */
const getSourceListData = (/**
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
function SourceState() { }
if (false) {
    /** @type {?} */
    SourceState.prototype.list;
}
/** @type {?} */
const SourceReducers = {
    sources: Reducer
};
/**
 * @record
 */
function FeatureState() { }
if (false) {
    /** @type {?} */
    FeatureState.prototype.sources;
}
//#region selectors
/** @type {?} */
const selectSourceState = createFeatureSelector("source");
//#endregion
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.list;
/** @type {?} */
const getSourceList = createSelector(selectSourceState, (ɵ0$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceModel {
    /**
     * @param {?=} initValue
     */
    constructor(initValue = (/** @type {?} */ ({}))) {
        Object.keys(initValue).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => this[key] = initValue[key]));
    }
}
if (false) {
    /** @type {?} */
    SourceModel.prototype._id;
    /** @type {?} */
    SourceModel.prototype.Endpoint;
    /** @type {?} */
    SourceModel.prototype.Interval;
    /** @type {?} */
    SourceModel.prototype.IsActive;
    /** @type {?} */
    SourceModel.prototype.Thresholds;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GetSourcesApiModel;
(function (GetSourcesApiModel) {
    // export class Request implements HttpRequestBaseModel<Request> {
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
    GetSourcesApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetSourcesApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(GetSourcesApiModel || (GetSourcesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
    // export class Request implements HttpRequestBaseModel<Request> {
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
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                _id: new FormControl("", [Validators.required]),
                Endpoint: new FormControl("", [Validators.required]),
                Interval: new FormControl("", [Validators.required]),
                IsActive: new FormControl("false", [Validators.required]),
                Thresholds: new FormArray([])
            });
        }
    }
    UpsertSourceApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype._id;
        /** @type {?} */
        Request.prototype.Endpoint;
        /** @type {?} */
        Request.prototype.Interval;
        /** @type {?} */
        Request.prototype.IsActive;
        /** @type {?} */
        Request.prototype.Thresholds;
    }
    class Response {
        constructor() { }
    }
    UpsertSourceApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    getSources() {
        return this.http
            .get("http://localhost:3000/api/source")
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            return response;
        }))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSourceById(id) {
        return this.http
            .get(`http://localhost:3000/api/source/${id}`)
            .map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => response.Result))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    upsertSource(body) {
        /** @type {?} */
        var model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map((/**
         * @param {?} response
         * @return {?}
         */
        response => response))
            .catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} source
     * @param {?=} time
     * @return {?}
     */
    getData(source, time = 0) {
        return this.http
            .get(`http://localhost:3000/api/data`, {
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
}
SourceService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
SourceService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SourceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SourceService_Factory() { return new SourceService(ɵɵinject(HttpClient)); }, token: SourceService, providedIn: "root" });
if (false) {
    /** @type {?} */
    SourceService.prototype.responseCache;
    /**
     * @type {?}
     * @private
     */
    SourceService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceModuleContainerComponent {
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
SourceModuleContainerComponent.decorators = [
    { type: Component, args: [{
                selector: "source-module-container",
                template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
SourceModuleContainerComponent.ctorParameters = () => [
    { type: SourceService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceModuleContainerComponent.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { SourceUpsertAction } from 'app/actions';
class SourceListComponent {
    /**
     * @param {?} sourceService
     */
    constructor(sourceService // private store: Store<FeatureReducer.FeatureState>
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
    ngOnInit() { }
}
SourceListComponent.decorators = [
    { type: Component, args: [{
                selector: "source-list",
                template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\r\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\r\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\r\n        \r\n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\r\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\r\n        </a>\r\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\r\n      </mat-card-title>\r\n    \r\n  </mat-card>\r\n\r\n  <div fxLayoutAlign='end center'>\r\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
            }] }
];
/** @nocollapse */
SourceListComponent.ctorParameters = () => [
    { type: SourceService }
];
if (false) {
    /** @type {?} */
    SourceListComponent.prototype.sources;
    /**
     * @type {?}
     * @private
     */
    SourceListComponent.prototype.sourceService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceUpsertComponent {
    /**
     * @param {?} sourceService
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} store
     */
    constructor(sourceService, formBuilder, route, store) {
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = ((/** @type {?} */ (this.formGroup.controls.Thresholds))).controls;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const sourceId = params["id"];
            sourceId &&
                this.sourceService.getSourceById(sourceId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach((/**
                     * @param {?} mapping
                     * @return {?}
                     */
                    mapping => this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type)));
                }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    addItem(Name = "", Formula = "", Message = "", Type = "critical") {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
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
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeItem(i) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    getData() {
        /** @type {?} */
        const o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data.Data;
        }));
        return o$;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    }
}
SourceUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "source-source-upsert",
                template: "<div fxLayout=\"column\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div>\r\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <!-- TODO: -->\r\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\r\n                </mat-form-field>\r\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\r\n                  <label>\u0646\u0648\u0639 :</label>\r\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\r\n                    {{item}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\r\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n",
                styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
            }] }
];
/** @nocollapse */
SourceUpsertComponent.ctorParameters = () => [
    { type: SourceService },
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Store }
];
if (false) {
    /** @type {?} */
    SourceUpsertComponent.prototype.formGroup;
    /** @type {?} */
    SourceUpsertComponent.prototype.sources;
    /** @type {?} */
    SourceUpsertComponent.prototype.thresholds;
    /** @type {?} */
    SourceUpsertComponent.prototype.data;
    /** @type {?} */
    SourceUpsertComponent.prototype.types;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.sourceService;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
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
const RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} sourceService
     */
    constructor(actions$, router, sourceService) {
        this.actions$ = actions$;
        this.router = router;
        this.sourceService = sourceService;
        this.afterSubmitSource$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT), pluck("payload"), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            return this.sourceService
                .upsertSource(data)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => new SourceSubmitSucceed())), catchError((/**
             * @return {?}
             */
            () => of(new SourceSubmitFailed()))));
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), switchMap((/**
         * @return {?}
         */
        () => {
            this.router.navigate(["source"]);
            return Observable$1.empty();
        })));
    }
}
SourceEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: SourceService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], SourceEffects.prototype, "afterSubmitSource$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], SourceEffects.prototype, "SigninSucceed$", void 0);
if (false) {
    /** @type {?} */
    SourceEffects.prototype.afterSubmitSource$;
    /** @type {?} */
    SourceEffects.prototype.SigninSucceed$;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SourceEffects.prototype.sourceService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SourceModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.source = "8.0.10";
    }
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
            },] }
];
/** @nocollapse */
SourceModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SourceModule, SourceReducers as ɵa, Reducer as ɵb, RoutingModule as ɵc, SourceModuleContainerComponent as ɵd, SourceService as ɵe, SourceListComponent as ɵf, SourceUpsertComponent as ɵg, SourceEffects as ɵi };
//# sourceMappingURL=soushians-source.js.map

import { createSelector, createFeatureSelector, Store, StoreModule } from '@ngrx/store';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { __decorate, __metadata } from 'tslib';
import { Observable as Observable$1 } from 'rxjs/Observable';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@soushians/shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class SourceSubmitSucceed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
}
class SourceSubmitFailed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ SourceReducers = {
    sources: Reducer
};
//#region selectors
const /** @type {?} */ selectSourceState = createFeatureSelector("source");
//#endregion
const /** @type {?} */ getSourceList = createSelector(selectSourceState, (state) => state.list);
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GetSourcesApiModel;
(function (GetSourcesApiModel) {
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
    GetSourcesApiModel.Request = Request;
    class Response {
        constructor() { }
    }
    GetSourcesApiModel.Response = Response;
})(GetSourcesApiModel || (GetSourcesApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
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
    class Response {
        constructor() { }
    }
    UpsertSourceApiModel.Response = Response;
})(UpsertSourceApiModel || (UpsertSourceApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
            .map(response => {
            return response;
        })
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSourceById(id) {
        return this.http
            .get(`http://localhost:3000/api/source/${id}`)
            .map((response) => response.Result)
            .catch(err => {
            return Observable.throw(err);
        });
    }
    /**
     * @param {?} body
     * @return {?}
     */
    upsertSource(body) {
        var /** @type {?} */ model = new UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(response => response)
            .catch(err => {
            return Observable.throw(err);
        });
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
            .map((res) => res.Result);
    }
}
SourceService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
SourceService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SourceService.ngInjectableDef = defineInjectable({ factory: function SourceService_Factory() { return new SourceService(inject(HttpClient)); }, token: SourceService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SourceListComponent {
    /**
     * @param {?} sourceService
     */
    constructor(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService;
        debugger;
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
                template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="start center">
  <mat-card class="source-box" *ngFor="let source of (sources | async)?.Result" [fxFlex]="32">
      <mat-card-title fxFlexLayout="row" flexLayoutAlign="space-between center">
        
        <a [routerLink]="['edit' ,  source._id]" fxFlex="40px">
          <mat-icon fxLayoutAlign="start center" aria-label="edit source">edit</mat-icon>
        </a>
        <span fxFlex fxLayoutAlign="end center" fxFlexAlign="center">{{source.Endpoint}}</span>
      </mat-card-title>
    
  </mat-card>

  <div fxLayoutAlign='end center'>
    <button mat-fab routerLink="../source/add" class="add-btn">
      <mat-icon>add</mat-icon>
    </button>
  </div>
</div>


`,
                styles: [`:host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}`]
            },] },
];
/** @nocollapse */
SourceListComponent.ctorParameters = () => [
    { type: SourceService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
                template: `<div fxLayoutAlign="" fxflex="100" fxLayout="column">
    <router-outlet></router-outlet>
</div>
`
            },] },
];
/** @nocollapse */
SourceModuleContainerComponent.ctorParameters = () => [
    { type: SourceService }
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
        this.thresholds = (/** @type {?} */ (this.formGroup.controls["Thresholds"])).controls;
        this.route.params.subscribe(params => {
            const /** @type {?} */ sourceId = params["id"];
            sourceId &&
                this.sourceService.getSourceById(sourceId).subscribe(data => {
                    this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(mapping => this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type));
                });
        });
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
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
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
        const /** @type {?} */ control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    getData() {
        const /** @type {?} */ o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(data => {
            debugger;
            this.data = data.Data;
        });
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
                template: `<div fxLayout="column">
  <div fxFlex="100">
    <mat-card fxLayout="column" fxFlex="50">
      <form [formGroup]="formGroup" fxLayout='column'>

        <mat-card-header>
          <mat-card-title>افزودن نمودار جدید</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field fxFlexFill>
            <input matInput placeholder="آدرس" formControlName="Endpoint">
          </mat-form-field>

          <mat-form-field fxFlexFill>
            <input matInput placeholder="مدت زمان به روز رسانی داده" formControlName="Interval">
          </mat-form-field>
          <div>
            <mat-checkbox formControlName="IsActive" fxFlexFill>وضعیت</mat-checkbox>
          </div>
        </mat-card-content>
      </form>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="20">
      <mat-card-content fxLayout="column">
        <div>
          <button fxFlex mat-raised-button color="primary" (click)="getData()">ساختار دیتا</button>
        </div>
        <div class="item-margin">
          <!-- TODO: -->
          <!-- <data-mapper destination="value" [data]="data"></data-mapper> -->
        </div>
      </mat-card-content>
    </mat-card>

    <mat-card fxLayout="column" fxFlex="30">
      <mat-card-content fxLayout="column">
        <div fxLayout="column" fxLayoutGap="5px">
          <div *ngFor="let threshold of thresholds; let i=index" fxFlex="100" class="add-item">
            <div fxLayout="column">
              <div [formGroup]="thresholds[i]" fxLayout="column">
                <mat-form-field fxFlexFill>
                  <input matInput placeholder="نام" formControlName="Name">
                </mat-form-field>
                <mat-form-field fxFlexFill>
                  <input class="ltr" matInput placeholder="فرمول" formControlName="Formula">
                </mat-form-field>
                <mat-form-field fxFlexFill>
                  <input matInput placeholder="توضیح" formControlName="Message">
                </mat-form-field>
                <mat-radio-group formControlName="Type" fxFlexFill>
                  <label>نوع :</label>
                  <mat-radio-button *ngFor="let item of types" [value]="item" class="form-element-margin">
                    {{item}}
                  </mat-radio-button>
                </mat-radio-group>

                <button (click)="removeItem(i)" fxFlex mat-button color="primary" type="button">پاک کردن</button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div class="item-margin">
          <button (click)="addItem()" fxFlex mat-raised-button color="primary" type="button">افزودن آستانه</button>
        </div>
      </mat-card-content>
    </mat-card>
  </div>
  <div fxFlex="100">
    <mat-card fxLayoutAlign="end center" fxLayout="row" fxFlex="100">
      <mat-card-content>
        <button mat-raised-button fxFlex color="primary" (click)="add($event)">ثبت</button>
        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap="5px">انصراف</button>
      </mat-card-content>
    </mat-card>
  </div>
</div>
`,
                styles: [`mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}`]
            },] },
];
/** @nocollapse */
SourceUpsertComponent.ctorParameters = () => [
    { type: SourceService },
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Store }
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
const /** @type {?} */ routes = [
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
const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(map(action => action.payload), switchMap((data) => {
            return this.sourceService
                .upsertSource(data)
                .pipe(map(res => new SourceSubmitSucceed()), catchError(() => Observable$1.of(new SourceSubmitFailed())));
        }));
        this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(switchMap(() => {
            this.router.navigate(["source"]);
            return Observable$1.empty();
        }));
    }
}
SourceEffects.decorators = [
    { type: Injectable },
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SourceModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//services
//actions
//components

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { SourceModule, SourceEffects as ɵf, SourceReducers as ɵa, SourceService as ɵg, SourceListComponent as ɵd, SourceModuleContainerComponent as ɵc, SourceUpsertComponent as ɵe, SourceListComponent as ɵh, SourceModuleContainerComponent as ɵk, SourceUpsertComponent as ɵi, RoutingModule as ɵb };
//# sourceMappingURL=soushians-source.js.map

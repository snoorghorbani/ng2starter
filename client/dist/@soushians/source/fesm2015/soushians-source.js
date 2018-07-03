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

export { SourceModule, SourceEffects as ɵi, SourceReducers as ɵa, Reducer as ɵb, SourceService as ɵe, SourceListComponent as ɵf, SourceModuleContainerComponent as ɵd, SourceUpsertComponent as ɵg, RoutingModule as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvdXJjZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL21vZGVscy9nZXQtc291cmNlcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9tb2RlbHMvdXBzZXJ0LXNvdXJjZS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLW1vZHVsZS1jb250YWluZXIvc291cmNlLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zb3VyY2Uucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc291cmNlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU291cmNlQWN0aW9uVHlwZXMge1xyXG5cdFNPVVJDRV9TVUJNSVQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXRcIixcclxuXHRTT1VSQ0VfU1VCTUlUX1NVQ0NFRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgc3VjY2VlZFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfRkFJTEVEID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0IGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gU291cmNlU3VibWl0IHwgU291cmNlU3VibWl0U3VjY2VlZCB8IFNvdXJjZVN1Ym1pdEZhaWxlZDtcclxuIiwiaW1wb3J0ICogYXMgc291cmNlIGZyb20gXCIuLi9hY3Rpb25zL3NvdXJjZS5hY3Rpb25cIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0ZGF0YTogU291cmNlTW9kZWxbXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogc291cmNlLkFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBzb3VyY2UuU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cdFx0Y2FzZSBzb3VyY2UuU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX0ZBSUxFRDpcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0RGF0YSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBzb3VyY2VMaXN0IGZyb20gJy4vc291cmNlLWxpc3QucmVkdWNlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvdXJjZVN0YXRlIHtcclxuICAgICAgICBsaXN0OiBzb3VyY2VMaXN0LlN0YXRlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTb3VyY2VSZWR1Y2VycyA9IHtcclxuICAgICAgc291cmNlczogc291cmNlTGlzdC5SZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVTdGF0ZSB7XHJcbiAgICAgICAgJ3NvdXJjZXMnOiBTb3VyY2VTdGF0ZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyNyZWdpb24gc2VsZWN0b3JzXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0U291cmNlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U291cmNlU3RhdGU+KFwic291cmNlXCIpO1xyXG5cclxuLy8jZW5kcmVnaW9uXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdCA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgICAgIHNlbGVjdFNvdXJjZVN0YXRlLFxyXG4gICAgICAgIChzdGF0ZTogU291cmNlU3RhdGUpID0+IHN0YXRlLmxpc3RcclxuKTtcclxuLy9leHBvcnQgY29uc3QgZ2V0U291cmNlTGlzdERhdGEgPSBjcmVhdGVTZWxlY3RvcihcclxuLy8gICAgICAgIGdldFNvdXJjZUxpc3QsXHJcbi8vICAgICAgICBzb3VyY2VMaXN0LmdldFNvdXJjZUxpc3REYXRhXHJcbi8vKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgR2V0U291cmNlc0FwaU1vZGVsIHtcclxuXHQvLyBleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IEdldFNvdXJjZXNBcGlNb2RlbC5SZXF1ZXN0ID0ge30gYXMgR2V0U291cmNlc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogU291cmNlTW9kZWxbXTtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0U291cmNlQXBpTW9kZWwge1xyXG5cdC8vIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0RW5kcG9pbnQ6IHN0cmluZztcclxuXHRcdEludGVydmFsOiBudW1iZXI7XHJcblx0XHRJc0FjdGl2ZTogYm9vbGVhbjtcclxuXHRcdFRocmVzaG9sZHM6IHtcclxuXHRcdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0XHRGb3JtdWxhOiBzdHJpbmc7XHJcblx0XHRcdE1lc3NhZ2U6IHN0cmluZztcclxuXHRcdFx0VHlwZTogYm9vbGVhbjtcclxuXHRcdH1bXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdEVuZHBvaW50OiB0aGlzLkVuZHBvaW50LFxyXG5cdFx0XHRcdEludGVydmFsOiB0aGlzLkludGVydmFsLFxyXG5cdFx0XHRcdElzQWN0aXZlOiB0aGlzLklzQWN0aXZlLFxyXG5cdFx0XHRcdFRocmVzaG9sZHM6IHRoaXMuVGhyZXNob2xkc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0RW5kcG9pbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SW50ZXJ2YWw6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0SXNBY3RpdmU6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUaHJlc2hvbGRzOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IFNvdXJjZU1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBHZXRTb3VyY2VzQXBpTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXJ2aWNlIHtcclxuXHRyZXNwb25zZUNhY2hlOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cclxuXHJcblx0Z2V0U291cmNlcygpOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NvdXJjZVwiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VCeUlkKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlLyR7aWR9YClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cHNlcnRTb3VyY2UoYm9keTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgbW9kZWwgPSBuZXcgVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHsgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSB9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNvdXJjZS1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJcIiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNvdXJjZVNlcnZpY2UpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2V0U291cmNlc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbi8vaW1wb3J0IHsgU291cmNlVXBzZXJ0QWN0aW9uIH0gZnJvbSAnYXBwL2FjdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLWxpc3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICA8bWF0LWNhcmQgY2xhc3M9XCJzb3VyY2UtYm94XCIgKm5nRm9yPVwibGV0IHNvdXJjZSBvZiAoc291cmNlcyB8IGFzeW5jKT8uUmVzdWx0XCIgW2Z4RmxleF09XCIzMlwiPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGUgZnhGbGV4TGF5b3V0PVwicm93XCIgZmxleExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIHNvdXJjZS5faWRdXCIgZnhGbGV4PVwiNDBweFwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBhcmlhLWxhYmVsPVwiZWRpdCBzb3VyY2VcIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHNwYW4gZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIj57e3NvdXJjZS5FbmRwb2ludH19PC9zcGFuPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgXHJcbiAgPC9tYXQtY2FyZD5cclxuXHJcbiAgPGRpdiBmeExheW91dEFsaWduPSdlbmQgY2VudGVyJz5cclxuICAgIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vc291cmNlL2FkZFwiIGNsYXNzPVwiYWRkLWJ0blwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5zb3VyY2UtYm94e21hcmdpbjo1cHh9LnNvdXJjZS1ib3ggYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPEdldFNvdXJjZXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlIC8vIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMuc3Vic2NyaWJlKGRhdGEgPT4geyBkZWJ1Z2dlcn0pXHJcblx0XHQvL3RoaXMuY29uZmlncy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29uZmlnTG9hZGVkKGRhdGEuUmVzdWx0KSk7XHJcblx0XHQvL30pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU291cmNlU3VibWl0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2Utc291cmNlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCosOYwq/DmMKxw5jCs1wiIGZvcm1Db250cm9sTmFtZT1cIkVuZHBvaW50XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCr8OYwqogw5jCssOZwoXDmMKnw5nChiDDmMKow5nChyDDmMKxw5nCiMOYwrIgw5jCscOYwrPDmMKnw5nChsObwowgw5jCr8OYwqfDmMKvw5nCh1wiIGZvcm1Db250cm9sTmFtZT1cIkludGVydmFsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZ2V0RGF0YSgpXCI+w5jCs8OYwqfDmMKuw5jCqsOYwqfDmMKxIMOYwq/Dm8KMw5jCqsOYwqc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDwhLS0gVE9ETzogLS0+XHJcbiAgICAgICAgICA8IS0tIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjMwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0aHJlc2hvbGQgb2YgdGhyZXNob2xkczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBjbGFzcz1cImFkZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwidGhyZXNob2xkc1tpXVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsdHJcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoHDmMKxw5nChcOZwojDmcKEXCIgZm9ybUNvbnRyb2xOYW1lPVwiRm9ybXVsYVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKqw5nCiMOYwrbDm8KMw5jCrVwiIGZvcm1Db250cm9sTmFtZT1cIk1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+w5nChsOZwojDmMK5IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0eXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpKVwiIGZ4RmxleCBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmcK+w5jCp8Oawqkgw5rCqcOYwrHDmMKvw5nChjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbSgpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5jCosOYwrPDmMKqw5jCp8OZwobDmcKHPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZnhGbGV4IGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGQoJGV2ZW50KVwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9Jy9zb3VyY2UnICBmeExheW91dEdhcD1cIjVweFwiPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgbWF0LWNhcmR7bWFyZ2luOjVweH0uYWRkLWl0ZW17Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO3BhZGRpbmc6MTBweDttYXJnaW46NXB4IDB9Lml0ZW0tbWFyZ2lue21hcmdpbi10b3A6MTBweH1idXR0b25bdHlwZT1zdWJtaXRde21hcmdpbi1sZWZ0OjVweH0ubHRye2RpcmVjdGlvbjpsdHJ9LmZvcm0tZWxlbWVudC1tYXJnaW57bWFyZ2luOjVweCAxMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdC8vY29uZmlnSW5mb3JhbWF0aW9uO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0c291cmNlczogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPjtcclxuXHR0aHJlc2hvbGRzOiBBYnN0cmFjdENvbnRyb2xbXTtcclxuXHRkYXRhOiBhbnk7XHJcblx0dHlwZXMgPSBbIFwiY3JpdGljYWxcIiwgXCJnb2FsXCIgXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlUmVkdWNlci5GZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHQvLyB0aGlzLnNvdXJjZXMgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy50aHJlc2hvbGRzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlRocmVzaG9sZHMgYXMgRm9ybUFycmF5KS5jb250cm9scztcclxuXHRcdHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBzb3VyY2VJZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHNvdXJjZUlkICYmXHJcblx0XHRcdFx0dGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZUJ5SWQoc291cmNlSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHRFbmRwb2ludDogZGF0YS5FbmRwb2ludCxcclxuXHRcdFx0XHRcdFx0SW50ZXJ2YWw6IGRhdGEuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlIHx8IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRUaHJlc2hvbGRzOiBkYXRhLlRocmVzaG9sZHNcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGRhdGEuVGhyZXNob2xkcy5mb3JFYWNoKG1hcHBpbmcgPT5cclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRJdGVtKG1hcHBpbmcuTmFtZSwgbWFwcGluZy5Gb3JtdWxhLCBtYXBwaW5nLk1lc3NhZ2UsIG1hcHBpbmcuVHlwZSlcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0YWRkSXRlbShOYW1lOiBzdHJpbmcgPSBcIlwiLCBGb3JtdWxhOiBzdHJpbmcgPSBcIlwiLCBNZXNzYWdlOiBzdHJpbmcgPSBcIlwiLCBUeXBlOiBzdHJpbmcgPSBcImNyaXRpY2FsXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKE5hbWUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRGb3JtdWxhOiBuZXcgRm9ybUNvbnRyb2woRm9ybXVsYSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdE1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChNZXNzYWdlLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFR5cGUsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8vICAgIGNvbnRyb2wucHVzaCh0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdC8vICAgICAgTmFtZTogW05hbWVdLFxyXG5cdFx0Ly8gICAgICBGb3JtdWxhOiBbRm9ybXVsYV0sXHJcblx0XHQvLyAgICAgIE1lc3NhZ2U6IFtNZXNzYWdlXVxyXG5cdFx0Ly8gICAgfSkpO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVGhyZXNob2xkc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cclxuXHRnZXREYXRhKCkge1xyXG5cdFx0Y29uc3QgbyQgPSB0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRvJC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG8kO1xyXG5cdH1cclxuXHJcblx0YWRkKGRhdGEpIHtcclxuXHRcdC8vaWYgKCF0aGlzLmZvcm1Hcm91cC52YWxpZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU291cmNlU3VibWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci9zb3VyY2UtbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLWxpc3Qvc291cmNlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNvdXJjZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLXVwc2VydC9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJzb3VyY2VcIixcclxuXHRcdGNvbXBvbmVudDogU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VMaXN0Q29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImVkaXQvOmlkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYWRkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTb3VyY2VVcHNlcnRDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvdXJjZUFjdGlvblR5cGVzLCBTb3VyY2VTdWJtaXQsIFNvdXJjZVN1Ym1pdFN1Y2NlZWQsIFNvdXJjZVN1Ym1pdEZhaWxlZCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsLCBVcHNlcnRTb3VyY2VBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU291cmNlRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFmdGVyU3VibWl0U291cmNlJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdHN3aXRjaE1hcCgoZGF0YTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTZXJ2aWNlXHJcblx0XHRcdFx0LnVwc2VydFNvdXJjZShkYXRhKVxyXG5cdFx0XHRcdC5waXBlKG1hcChyZXMgPT4gbmV3IFNvdXJjZVN1Ym1pdFN1Y2NlZWQoKSksIGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgU291cmNlU3VibWl0RmFpbGVkKCkpKSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcInNvdXJjZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUsIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBTb3VyY2VSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zb3VyY2Uucm91dGluZy1tb2R1bGVcIjtcclxuaW1wb3J0IHsgU291cmNlRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc291cmNlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLWxpc3Qvc291cmNlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNvdXJjZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLXVwc2VydC9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb3VyY2VcIiwgU291cmNlUmVkdWNlcnMpLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgU291cmNlRWZmZWN0cyBdKSxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFNvdXJjZUxpc3RDb21wb25lbnQsIFNvdXJjZVVwc2VydENvbXBvbmVudCwgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsic291cmNlLlNvdXJjZUFjdGlvblR5cGVzIiwic291cmNlTGlzdC5SZWR1Y2VyIiwiT2JzZXJ2YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBSWlCLHdCQUF3QjsyQkFDaEIsZ0NBQWdDOzBCQUNqQywrQkFBK0I7Ozs7OztJQUt0RCxZQUFtQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtvQkFEeEMsaUJBQWlCLENBQUMsYUFBYTtLQUNhO0NBQzVEOzs7b0JBRWdCLGlCQUFpQixDQUFDLHFCQUFxQjs7Q0FDdkQ7OztvQkFFZ0IsaUJBQWlCLENBQUMsb0JBQW9COztDQUN0RDs7Ozs7O0FDbEJELFdBUU8sRUFBRTtBQURULHVCQUFNLFlBQVksR0FBVTtJQUMzQixJQUFJLElBQUk7Q0FDUixDQUFDOzs7Ozs7QUFFRixpQkFBd0IsS0FBSyxHQUFHLFlBQVksRUFBRSxNQUFzQjtJQUNuRSxRQUFRLE1BQU0sQ0FBQyxJQUFJO1FBQ2xCLEtBQUtBLGlCQUF3QixD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
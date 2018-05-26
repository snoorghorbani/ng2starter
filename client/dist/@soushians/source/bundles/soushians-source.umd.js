(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/forms'), require('@angular/core'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/router'), require('tslib'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/operators'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@soushians/shared')) :
    typeof define === 'function' && define.amd ? define('@soushians/source', ['exports', '@ngrx/store', '@angular/forms', '@angular/core', '@angular/common/http', 'rxjs/Rx', '@angular/router', 'tslib', 'rxjs/Observable', '@ngrx/effects', 'rxjs/operators', '@angular/common', '@angular/flex-layout', '@angular/material', '@angular/platform-browser', '@angular/platform-browser/animations', '@soushians/shared'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.source = {}),null,global.ng.forms,global.ng.core,global.ng.common.http,global.Rx,global.ng.router,global.tslib,global.Rx,null,global.Rx.Observable.prototype,global.ng.common,global.ng['flex-layout'],global.ng.material,global.ng.platformBrowser,global.ng.platformBrowser.animations,null));
}(this, (function (exports,store,forms,core,http,Rx,router,tslib,Observable,effects,operators,common,flexLayout,material,platformBrowser,animations,shared) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var SourceActionTypes = {
        SOURCE_SUBMIT: "[SOURCE] source submit",
        SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
        SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
    };
    var SourceSubmit = (function () {
        /**
         * @param {?} payload
         */
        function SourceSubmit(payload) {
            this.payload = payload;
            this.type = SourceActionTypes.SOURCE_SUBMIT;
        }
        return SourceSubmit;
    }());
    var SourceSubmitSucceed = (function () {
        function SourceSubmitSucceed() {
            this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
        }
        return SourceSubmitSucceed;
    }());
    var SourceSubmitFailed = (function () {
        function SourceSubmitFailed() {
            this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
        }
        return SourceSubmitFailed;
    }());
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ɵ0 = [];
    var /** @type {?} */ initialState = {
        data: ɵ0
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function Reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
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
    var /** @type {?} */ SourceReducers = {
        sources: Reducer
    };
    //#region selectors
    var /** @type {?} */ selectSourceState = store.createFeatureSelector("source");
    //#endregion
    var /** @type {?} */ getSourceList = store.createSelector(selectSourceState, function (state) { return state.list; });
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
        var Request = (function () {
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
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
        GetSourcesApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        GetSourcesApiModel.Response = Response;
    })(GetSourcesApiModel || (GetSourcesApiModel = {}));
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UpsertSourceApiModel;
    (function (UpsertSourceApiModel) {
        var Request = (function () {
            /**
             * @param {?=} initValue
             */
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = function () {
                return {
                    _id: this._id,
                    Endpoint: this.Endpoint,
                    Interval: this.Interval,
                    IsActive: this.IsActive,
                    Thresholds: this.Thresholds
                };
            };
            Object.defineProperty(Request, "formGroup", {
                /**
                 * @return {?}
                 */
                get: function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        Endpoint: new forms.FormControl("", [forms.Validators.required]),
                        Interval: new forms.FormControl("", [forms.Validators.required]),
                        IsActive: new forms.FormControl("false", [forms.Validators.required]),
                        Thresholds: new forms.FormArray([])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        UpsertSourceApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
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
    var SourceService = (function () {
        /**
         * @param {?} http
         */
        function SourceService(http$$1) {
            this.http = http$$1;
        }
        /**
         * @return {?}
         */
        SourceService.prototype.getSources = function () {
            return this.http
                .get("http://localhost:3000/api/source")
                .map(function (response) {
                return response;
            })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        /**
         * @param {?} id
         * @return {?}
         */
        SourceService.prototype.getSourceById = function (id) {
            return this.http
                .get("http://localhost:3000/api/source/" + id)
                .map(function (response) { return response.Result; })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        /**
         * @param {?} body
         * @return {?}
         */
        SourceService.prototype.upsertSource = function (body) {
            var /** @type {?} */ model = new UpsertSourceApiModel.Request(body);
            return this.http
                .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
                .map(function (response) { return response; })
                .catch(function (err) {
                return Rx.Observable.throw(err);
            });
        };
        /**
         * @param {?} source
         * @param {?=} time
         * @return {?}
         */
        SourceService.prototype.getData = function (source, time) {
            if (time === void 0) {
                time = 0;
            }
            return this.http
                .get("http://localhost:3000/api/data", {
                params: {
                    sourceId: source._id,
                    time: null
                }
            })
                .map(function (res) { return res.Result; });
        };
        return SourceService;
    }());
    SourceService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SourceService.ctorParameters = function () {
        return [
            { type: http.HttpClient }
        ];
    };
    /** @nocollapse */ SourceService.ngInjectableDef = core.defineInjectable({ factory: function SourceService_Factory() { return new SourceService(core.inject(http.HttpClient)); }, token: SourceService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SourceListComponent = (function () {
        /**
         * @param {?} sourceService
         */
        function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
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
        SourceListComponent.prototype.ngOnInit = function () { };
        return SourceListComponent;
    }());
    SourceListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "source-list",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\n        \n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\n        </a>\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\n      </mat-card-title>\n    \n  </mat-card>\n\n  <div fxLayoutAlign='end center'>\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</div>\n\n\n",
                    styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                },] },
    ];
    /** @nocollapse */
    SourceListComponent.ctorParameters = function () {
        return [
            { type: SourceService }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SourceModuleContainerComponent = (function () {
        /**
         * @param {?} service
         */
        function SourceModuleContainerComponent(service) {
            this.service = service;
        }
        /**
         * @return {?}
         */
        SourceModuleContainerComponent.prototype.ngOnInit = function () { };
        return SourceModuleContainerComponent;
    }());
    SourceModuleContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "source-module-container",
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                },] },
    ];
    /** @nocollapse */
    SourceModuleContainerComponent.ctorParameters = function () {
        return [
            { type: SourceService }
        ];
    };
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
    var SourceUpsertComponent = (function () {
        /**
         * @param {?} sourceService
         * @param {?} formBuilder
         * @param {?} route
         * @param {?} store
         */
        function SourceUpsertComponent(sourceService, formBuilder, route, store$$1) {
            var _this = this;
            this.sourceService = sourceService;
            this.formBuilder = formBuilder;
            this.route = route;
            this.store = store$$1;
            //configInforamation;
            this.formGroup = UpsertSourceApiModel.Request.formGroup;
            this.types = ["critical", "goal"];
            // this.sources = this.sourceService.getSources();
            this.thresholds = ((this.formGroup.controls["Thresholds"])).controls;
            this.route.params.subscribe(function (params) {
                var /** @type {?} */ sourceId = params["id"];
                sourceId &&
                    _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                        _this.formGroup.patchValue({
                            _id: data._id,
                            Endpoint: data.Endpoint,
                            Interval: data.Interval,
                            IsActive: data.IsActive || false,
                            Thresholds: data.Thresholds
                        });
                        data.Thresholds.forEach(function (mapping) { return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type); });
                    });
            });
        }
        /**
         * @return {?}
         */
        SourceUpsertComponent.prototype.ngOnInit = function () { };
        /**
         * @param {?=} Name
         * @param {?=} Formula
         * @param {?=} Message
         * @param {?=} Type
         * @return {?}
         */
        SourceUpsertComponent.prototype.addItem = function (Name, Formula, Message, Type) {
            if (Name === void 0) {
                Name = "";
            }
            if (Formula === void 0) {
                Formula = "";
            }
            if (Message === void 0) {
                Message = "";
            }
            if (Type === void 0) {
                Type = "critical";
            }
            var /** @type {?} */ control = (this.formGroup.controls["Thresholds"]);
            control.push(new forms.FormGroup({
                Name: new forms.FormControl(Name, [forms.Validators.required]),
                Formula: new forms.FormControl(Formula, [forms.Validators.required]),
                Message: new forms.FormControl(Message, [forms.Validators.required]),
                Type: new forms.FormControl(Type, [forms.Validators.required])
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
        SourceUpsertComponent.prototype.removeItem = function (i) {
            var /** @type {?} */ control = (this.formGroup.controls["Thresholds"]);
            control.removeAt(i);
        };
        /**
         * @return {?}
         */
        SourceUpsertComponent.prototype.getData = function () {
            var _this = this;
            var /** @type {?} */ o$ = this.sourceService.getData(this.formGroup.value);
            o$.subscribe(function (data) {
                debugger;
                _this.data = data.Data;
            });
            return o$;
        };
        /**
         * @param {?} data
         * @return {?}
         */
        SourceUpsertComponent.prototype.add = function (data) {
            //if (!this.formGroup.valid) return;
            this.store.dispatch(new SourceSubmit(this.formGroup.value));
        };
        return SourceUpsertComponent;
    }());
    SourceUpsertComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "source-source-upsert",
                    template: "<div fxLayout=\"column\">\n  <div fxFlex=\"100\">\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\n          </mat-form-field>\n          <div>\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\n      <mat-card-content fxLayout=\"column\">\n        <div>\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\n        </div>\n        <div class=\"item-margin\">\n          <!-- TODO: -->\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\n      <mat-card-content fxLayout=\"column\">\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\n                </mat-form-field>\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\n                  <label>\u0646\u0648\u0639 :</label>\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\n                    {{item}}\n                  </mat-radio-button>\n                </mat-radio-group>\n\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div class=\"item-margin\">\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\">\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n",
                    styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                },] },
    ];
    /** @nocollapse */
    SourceUpsertComponent.ctorParameters = function () {
        return [
            { type: SourceService },
            { type: forms.FormBuilder },
            { type: router.ActivatedRoute },
            { type: store.Store }
        ];
    };
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
    var /** @type {?} */ routes = [
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
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SourceEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} sourceService
         */
        function SourceEffects(actions$, router$$1, sourceService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.sourceService = sourceService;
            this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.sourceService
                    .upsertSource(data)
                    .pipe(operators.map(function (res) { return new SourceSubmitSucceed(); }), operators.catchError(function () { return Observable.Observable.of(new SourceSubmitFailed()); }));
            }));
            this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(operators.switchMap(function () {
                _this.router.navigate(["source"]);
                return Observable.Observable.empty();
            }));
        }
        return SourceEffects;
    }());
    SourceEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    SourceEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: SourceService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], SourceEffects.prototype, "afterSubmitSource$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], SourceEffects.prototype, "SigninSucceed$", void 0);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SourceModule = (function () {
        function SourceModule() {
        }
        return SourceModule;
    }());
    SourceModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        http.HttpClientModule,
                        flexLayout.FlexLayoutModule,
                        material.MatIconModule,
                        material.MatButtonModule,
                        material.MatCardModule,
                        material.MatSnackBarModule,
                        material.MatSidenavModule,
                        material.MatExpansionModule,
                        material.MatSelectModule,
                        material.MatFormFieldModule,
                        material.MatListModule,
                        material.MatMenuModule,
                        material.MatCheckboxModule,
                        material.MatRadioModule,
                        material.MatInputModule,
                        material.MatToolbarModule,
                        material.MatDatepickerModule,
                        material.MatProgressBarModule,
                        platformBrowser.BrowserModule,
                        store.StoreModule.forFeature("source", SourceReducers),
                        animations.BrowserAnimationsModule,
                        RoutingModule,
                        effects.EffectsModule.forFeature([SourceEffects]),
                        shared.SharedModule
                    ],
                    declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                    exports: []
                },] },
    ];

    exports.SourceModule = SourceModule;
    exports.ɵf = SourceEffects;
    exports.ɵa = SourceReducers;
    exports.ɵg = SourceService;
    exports.ɵd = SourceListComponent;
    exports.ɵc = SourceModuleContainerComponent;
    exports.ɵe = SourceUpsertComponent;
    exports.ɵh = SourceListComponent;
    exports.ɵk = SourceModuleContainerComponent;
    exports.ɵi = SourceUpsertComponent;
    exports.ɵb = RoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-source.umd.js.map

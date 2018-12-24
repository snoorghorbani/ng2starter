(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('@angular/forms'), require('@angular/core'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/router'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/operators'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@soushians/shared')) :
    typeof define === 'function' && define.amd ? define('@soushians/source', ['exports', '@ngrx/store', '@angular/forms', '@angular/core', '@angular/common/http', 'rxjs/Rx', '@angular/router', 'rxjs/Observable', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/operators', '@angular/common', '@angular/flex-layout', '@angular/material', '@angular/platform-browser', '@angular/platform-browser/animations', '@soushians/shared'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.source = {}),null,global.ng.forms,global.ng.core,global.ng.common.http,global.rxjs.Rx,global.ng.router,global.rxjs.Observable,null,global.rxjs['observable/of'],global.rxjs.operators,global.ng.common,global.ng['flex-layout'],global.ng.material,global.ng.platformBrowser,global.ng.platformBrowser.animations,null));
}(this, (function (exports,store,forms,i0,i1,Rx,router,Observable,effects,of,operators,common,flexLayout,material,platformBrowser,animations,shared) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

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
        if (state === void 0) {
            state = initialState;
        }
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
    var selectSourceState = store.createFeatureSelector("source");
    /** @type {?} */
    var getSourceList = store.createSelector(selectSourceState, function (state) { return state.list; });
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
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
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
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
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
                 */ function () {
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
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
        SourceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        SourceService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SourceService.ngInjectableDef = i0.defineInjectable({ factory: function SourceService_Factory() { return new SourceService(i0.inject(i1.HttpClient)); }, token: SourceService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.Component, args: [{
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
            this.thresholds = ( /** @type {?} */(this.formGroup.controls["Thresholds"])).controls;
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
                /** @type {?} */
                var control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
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
            { type: i0.Component, args: [{
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
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SourceEffects = /** @class */ (function () {
        function SourceEffects(actions$, router$$1, sourceService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.sourceService = sourceService;
            this.afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.sourceService
                    .upsertSource(data)
                    .pipe(operators.map(function (res) { return new SourceSubmitSucceed(); }), operators.catchError(function () { return of.of(new SourceSubmitFailed()); }));
            }));
            this.SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(operators.switchMap(function () {
                _this.router.navigate(["source"]);
                return Observable.Observable.empty();
            }));
        }
        SourceEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        SourceEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: SourceService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], SourceEffects.prototype, "afterSubmitSource$", void 0);
        __decorate([
            effects.Effect(),
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            i1.HttpClientModule,
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

    exports.SourceModule = SourceModule;
    exports.ɵi = SourceEffects;
    exports.ɵa = SourceReducers;
    exports.ɵb = Reducer;
    exports.ɵe = SourceService;
    exports.ɵf = SourceListComponent;
    exports.ɵd = SourceModuleContainerComponent;
    exports.ɵg = SourceUpsertComponent;
    exports.ɵc = RoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLXNvdXJjZS51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3JlZHVjZXJzL3NvdXJjZS1saXN0LnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL21vZGVscy9nZXQtc291cmNlcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9tb2RlbHMvdXBzZXJ0LXNvdXJjZS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9zb3VyY2UvbGliL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLW1vZHVsZS1jb250YWluZXIvc291cmNlLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9zb3VyY2Uucm91dGluZy1tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvc291cmNlL2xpYi9lZmZlY3RzL3NvdXJjZS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS9saWIvc291cmNlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTb3VyY2VBY3Rpb25UeXBlcyB7XHJcblx0U09VUkNFX1NVQk1JVCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfU1VDQ0VFRCA9IFwiW1NPVVJDRV0gc291cmNlIHN1Ym1pdCBzdWNjZWVkXCIsXHJcblx0U09VUkNFX1NVQk1JVF9GQUlMRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgZmFpbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdFN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFNvdXJjZVN1Ym1pdEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEO1xyXG59XHJcbmV4cG9ydCB0eXBlIEFjdGlvbnMgPSBTb3VyY2VTdWJtaXQgfCBTb3VyY2VTdWJtaXRTdWNjZWVkIHwgU291cmNlU3VibWl0RmFpbGVkO1xyXG4iLCJpbXBvcnQgKiBhcyBzb3VyY2UgZnJvbSBcIi4uL2FjdGlvbnMvc291cmNlLmFjdGlvblwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCwgVXBzZXJ0U291cmNlQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRkYXRhOiBTb3VyY2VNb2RlbFtdO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG5cdGRhdGE6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBzb3VyY2UuQWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblx0XHRjYXNlIHNvdXJjZS5Tb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX1NVQ0NFRUQ6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGVcclxuXHRcdFx0fTtcclxuXHRcdGNhc2Ugc291cmNlLlNvdXJjZUFjdGlvblR5cGVzLlNPVVJDRV9TVUJNSVRfRkFJTEVEOlxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlXHJcblx0XHRcdH07XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvdXJjZUxpc3REYXRhID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZUZlYXR1cmVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCAqIGFzIHNvdXJjZUxpc3QgZnJvbSAnLi9zb3VyY2UtbGlzdC5yZWR1Y2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlU3RhdGUge1xyXG4gICAgICAgIGxpc3Q6IHNvdXJjZUxpc3QuU3RhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNvdXJjZVJlZHVjZXJzID0ge1xyXG4gICAgICBzb3VyY2VzOiBzb3VyY2VMaXN0LlJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVN0YXRlIHtcclxuICAgICAgICAnc291cmNlcyc6IFNvdXJjZVN0YXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RTb3VyY2VTdGF0ZSA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxTb3VyY2VTdGF0ZT4oXCJzb3VyY2VcIik7XHJcblxyXG4vLyNlbmRyZWdpb25cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0ID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgICAgc2VsZWN0U291cmNlU3RhdGUsXHJcbiAgICAgICAgKHN0YXRlOiBTb3VyY2VTdGF0ZSkgPT4gc3RhdGUubGlzdFxyXG4pO1xyXG4vL2V4cG9ydCBjb25zdCBnZXRTb3VyY2VMaXN0RGF0YSA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4vLyAgICAgICAgZ2V0U291cmNlTGlzdCxcclxuLy8gICAgICAgIHNvdXJjZUxpc3QuZ2V0U291cmNlTGlzdERhdGFcclxuLy8pO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXRTb3VyY2VzQXBpTW9kZWwge1xyXG5cdC8vIGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogR2V0U291cmNlc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXRTb3VyY2VzQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBTb3VyY2VNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy8gaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBVcHNlcnRTb3VyY2VBcGlNb2RlbCB7XHJcblx0Ly8gZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0X2lkOiBzdHJpbmc7XHJcblx0XHRFbmRwb2ludDogc3RyaW5nO1xyXG5cdFx0SW50ZXJ2YWw6IG51bWJlcjtcclxuXHRcdElzQWN0aXZlOiBib29sZWFuO1xyXG5cdFx0VGhyZXNob2xkczoge1xyXG5cdFx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRcdEZvcm11bGE6IHN0cmluZztcclxuXHRcdFx0TWVzc2FnZTogc3RyaW5nO1xyXG5cdFx0XHRUeXBlOiBib29sZWFuO1xyXG5cdFx0fVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0RW5kcG9pbnQ6IHRoaXMuRW5kcG9pbnQsXHJcblx0XHRcdFx0SW50ZXJ2YWw6IHRoaXMuSW50ZXJ2YWwsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0VGhyZXNob2xkczogdGhpcy5UaHJlc2hvbGRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRFbmRwb2ludDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJbnRlcnZhbDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRocmVzaG9sZHM6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogU291cmNlTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0U291cmNlQXBpTW9kZWwsIEdldFNvdXJjZXNBcGlNb2RlbCwgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVNlcnZpY2Uge1xyXG5cdHJlc3BvbnNlQ2FjaGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQ8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc291cmNlXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldFNvdXJjZUJ5SWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8U291cmNlTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2UvJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogVXBzZXJ0U291cmNlQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHVwc2VydFNvdXJjZShib2R5OiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KGJvZHkpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIiwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSwgeyB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlIH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB0aW1lOiBudW1iZXIgPSAwKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHR0aW1lOiBudWxsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQubWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLW1vZHVsZS1jb250YWluZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXRBbGlnbj1cIlwiIGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogU291cmNlU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHZXRTb3VyY2VzQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuLy9pbXBvcnQgeyBTb3VyY2VVcHNlcnRBY3Rpb24gfSBmcm9tICdhcHAvYWN0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2UtbGlzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxyXG4gIDxtYXQtY2FyZCBjbGFzcz1cInNvdXJjZS1ib3hcIiAqbmdGb3I9XCJsZXQgc291cmNlIG9mIChzb3VyY2VzIHwgYXN5bmMpPy5SZXN1bHRcIiBbZnhGbGV4XT1cIjMyXCI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZSBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmbGV4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgc291cmNlLl9pZF1cIiBmeEZsZXg9XCI0MHB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiIGFyaWEtbGFiZWw9XCJlZGl0IHNvdXJjZVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8c3BhbiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeEZsZXhBbGlnbj1cImNlbnRlclwiPnt7c291cmNlLkVuZHBvaW50fX08L3NwYW4+XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICBcclxuICA8L21hdC1jYXJkPlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gICAgPGJ1dHRvbiBtYXQtZmFiIHJvdXRlckxpbms9XCIuLi9zb3VyY2UvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LnNvdXJjZS1ib3h7bWFyZ2luOjVweH0uc291cmNlLWJveCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hZGQtYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTo1MHB4O2xlZnQ6MjVweDt6LWluZGV4OjF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8R2V0U291cmNlc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UgLy8gcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdC8vIHRoaXMuc291cmNlcy5zdWJzY3JpYmUoZGF0YSA9PiB7IGRlYnVnZ2VyfSlcclxuXHRcdC8vdGhpcy5jb25maWdzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb25maWdMb2FkZWQoZGF0YS5SZXN1bHQpKTtcclxuXHRcdC8vfSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0U291cmNlQXBpTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VTdWJtaXQgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNvdXJjZS1zb3VyY2UtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKiw5jCr8OYwrHDmMKzXCIgZm9ybUNvbnRyb2xOYW1lPVwiRW5kcG9pbnRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKvw5jCqiDDmMKyw5nChcOYwqfDmcKGIMOYwqjDmcKHIMOYwrHDmcKIw5jCsiDDmMKxw5jCs8OYwqfDmcKGw5vCjCDDmMKvw5jCp8OYwq/DmcKHXCIgZm9ybUNvbnRyb2xOYW1lPVwiSW50ZXJ2YWxcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjIwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJnZXREYXRhKClcIj7DmMKzw5jCp8OYwq7DmMKqw5jCp8OYwrEgw5jCr8ObwozDmMKqw5jCpzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPCEtLSBUT0RPOiAtLT5cclxuICAgICAgICAgIDwhLS0gPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMzBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHRocmVzaG9sZCBvZiB0aHJlc2hvbGRzOyBsZXQgaT1pbmRleFwiIGZ4RmxleD1cIjEwMFwiIGNsYXNzPVwiYWRkLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ0aHJlc2hvbGRzW2ldXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImx0clwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nCgcOYwrHDmcKFw5nCiMOZwoRcIiBmb3JtQ29udHJvbE5hbWU9XCJGb3JtdWxhXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmcKIw5jCtsObwozDmMKtXCIgZm9ybUNvbnRyb2xOYW1lPVwiTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwiVHlwZVwiIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD7DmcKGw5nCiMOYwrkgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIiBjbGFzcz1cImZvcm0tZWxlbWVudC1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmVJdGVtKGkpXCIgZnhGbGV4IG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOZwr7DmMKnw5rCqSDDmsKpw5jCscOYwq/DmcKGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRJdGVtKClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmMKiw5jCs8OYwqrDmMKnw5nChsOZwoc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXggY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZCgkZXZlbnQpXCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz0nL3NvdXJjZScgIGZ4TGF5b3V0R2FwPVwiNXB4XCI+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2BtYXQtY2FyZHttYXJnaW46NXB4fS5hZGQtaXRlbXtib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7cGFkZGluZzoxMHB4O21hcmdpbjo1cHggMH0uaXRlbS1tYXJnaW57bWFyZ2luLXRvcDoxMHB4fWJ1dHRvblt0eXBlPXN1Ym1pdF17bWFyZ2luLWxlZnQ6NXB4fS5sdHJ7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Ly9jb25maWdJbmZvcmFtYXRpb247XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdHRocmVzaG9sZHM6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGE6IGFueTtcclxuXHR0eXBlcyA9IFsgXCJjcml0aWNhbFwiLCBcImdvYWxcIiBdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdC8vIHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLnRocmVzaG9sZHMgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVGhyZXNob2xkcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0c291cmNlSWQgJiZcclxuXHRcdFx0XHR0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlQnlJZChzb3VyY2VJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdEVuZHBvaW50OiBkYXRhLkVuZHBvaW50LFxyXG5cdFx0XHRcdFx0XHRJbnRlcnZhbDogZGF0YS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUgfHwgZmFsc2UsXHJcblx0XHRcdFx0XHRcdFRocmVzaG9sZHM6IGRhdGEuVGhyZXNob2xkc1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0ZGF0YS5UaHJlc2hvbGRzLmZvckVhY2gobWFwcGluZyA9PlxyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0obWFwcGluZy5OYW1lLCBtYXBwaW5nLkZvcm11bGEsIG1hcHBpbmcuTWVzc2FnZSwgbWFwcGluZy5UeXBlKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRhZGRJdGVtKE5hbWU6IHN0cmluZyA9IFwiXCIsIEZvcm11bGE6IHN0cmluZyA9IFwiXCIsIE1lc3NhZ2U6IHN0cmluZyA9IFwiXCIsIFR5cGU6IHN0cmluZyA9IFwiY3JpdGljYWxcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woTmFtZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEZvcm11bGE6IG5ldyBGb3JtQ29udHJvbChGb3JtdWxhLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TWVzc2FnZTogbmV3IEZvcm1Db250cm9sKE1lc3NhZ2UsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woVHlwZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0Ly8gICAgY29udHJvbC5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0Ly8gICAgICBOYW1lOiBbTmFtZV0sXHJcblx0XHQvLyAgICAgIEZvcm11bGE6IFtGb3JtdWxhXSxcclxuXHRcdC8vICAgICAgTWVzc2FnZTogW01lc3NhZ2VdXHJcblx0XHQvLyAgICB9KSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKSB7XHJcblx0XHRjb25zdCBvJCA9IHRoaXMuc291cmNlU2VydmljZS5nZXREYXRhKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdG8kLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbyQ7XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0Ly9pZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb3VyY2VTdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtbGlzdC9zb3VyY2UtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU291cmNlVXBzZXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9zb3VyY2UtdXBzZXJ0L3NvdXJjZS11cHNlcnQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcInNvdXJjZVwiLFxyXG5cdFx0Y29tcG9uZW50OiBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZUxpc3RDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86aWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZVVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNvdXJjZVVwc2VydENvbXBvbmVudFxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRpbmdNb2R1bGU6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU291cmNlQWN0aW9uVHlwZXMsIFNvdXJjZVN1Ym1pdCwgU291cmNlU3VibWl0U3VjY2VlZCwgU291cmNlU3VibWl0RmFpbGVkIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VFZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc291cmNlU2VydmljZTogU291cmNlU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWZ0ZXJTdWJtaXRTb3VyY2UkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0c3dpdGNoTWFwKChkYXRhOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVNlcnZpY2VcclxuXHRcdFx0XHQudXBzZXJ0U291cmNlKGRhdGEpXHJcblx0XHRcdFx0LnBpcGUobWFwKHJlcyA9PiBuZXcgU291cmNlU3VibWl0U3VjY2VlZCgpKSwgY2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgU291cmNlU3VibWl0RmFpbGVkKCkpKSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEKS5waXBlKFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcInNvdXJjZVwiIF0pO1xyXG5cdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdFx0fSlcclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUsIFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdExpc3RNb2R1bGUsXHJcblx0TWF0TWVudU1vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0TWF0UHJvZ3Jlc3NCYXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBTb3VyY2VSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9zb3VyY2Uucm91dGluZy1tb2R1bGVcIjtcclxuaW1wb3J0IHsgU291cmNlRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvc291cmNlLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgU291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLWxpc3Qvc291cmNlLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNvdXJjZVVwc2VydENvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvc291cmNlLXVwc2VydC9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyL3NvdXJjZS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRTaWRlbmF2TW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0TGlzdE1vZHVsZSxcclxuXHRcdE1hdE1lbnVNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRUb29sYmFyTW9kdWxlLFxyXG5cdFx0TWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuXHRcdE1hdFByb2dyZXNzQmFyTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJzb3VyY2VcIiwgU291cmNlUmVkdWNlcnMpLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcblx0XHRSb3V0aW5nTW9kdWxlLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgU291cmNlRWZmZWN0cyBdKSxcclxuXHRcdFNoYXJlZE1vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbIFNvdXJjZUxpc3RDb21wb25lbnQsIFNvdXJjZVVwc2VydENvbXBvbmVudCwgU291cmNlTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsic291cmNlLlNvdXJjZUFjdGlvblR5cGVzIiwic291cmNlTGlzdC5SZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJGb3JtQXJyYXkiLCJPYnNlcnZhYmxlIiwiSW5qZWN0YWJsZSIsIkh0dHBDbGllbnQiLCJDb21wb25lbnQiLCJzdG9yZSIsIkZvcm1CdWlsZGVyIiwiQWN0aXZhdGVkUm91dGUiLCJTdG9yZSIsIlJvdXRlck1vZHVsZSIsInJvdXRlciIsIm1hcCIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJvZiIsIkFjdGlvbnMiLCJSb3V0ZXIiLCJFZmZlY3QiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIkVmZmVjdHNNb2R1bGUiLCJTaGFyZWRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxR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
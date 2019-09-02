(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/flex-layout'), require('@angular/material'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('@soushians/shared'), require('@angular/common/http'), require('rxjs/Rx'), require('@angular/forms'), require('@ngrx/store'), require('@angular/core'), require('rxjs/Observable'), require('@ngrx/effects'), require('rxjs/observable/of'), require('rxjs/operators'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@soushians/source', ['exports', '@angular/common', '@angular/flex-layout', '@angular/material', '@angular/platform-browser', '@angular/platform-browser/animations', '@soushians/shared', '@angular/common/http', 'rxjs/Rx', '@angular/forms', '@ngrx/store', '@angular/core', 'rxjs/Observable', '@ngrx/effects', 'rxjs/observable/of', 'rxjs/operators', '@angular/router'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.source = {}),global.ng.common,global.ng['flex-layout'],global.ng.material,global.ng.platformBrowser,global.ng.platformBrowser.animations,global.shared,global.ng.common.http,global.rxjs.Rx,global.ng.forms,global.store,global.ng.core,global.rxjs.Observable,global.effects,global.rxjs['observable/of'],global.rxjs.operators,global.ng.router));
}(this, (function (exports,common,flexLayout,material,platformBrowser,animations,shared,i1,Rx,forms,store,i0,Observable,effects,of,operators,router) { 'use strict';

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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SourceReducers = {
        sources: Reducer
    };
    //#region selectors
    /** @type {?} */
    var selectSourceState = store.createFeatureSelector("source");
    //#endregion
    /** @type {?} */
    var getSourceList = store.createSelector(selectSourceState, function (state) { return state.list; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GetSourcesApiModel;
    (function (GetSourcesApiModel) {
        // export class Request implements HttpRequestBaseModel<Request> {
        var 
        // export class Request implements HttpRequestBaseModel<Request> {
        Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ( /** @type {?} */({}));
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UpsertSourceApiModel;
    (function (UpsertSourceApiModel) {
        // export class Request implements HttpRequestBaseModel<Request> {
        var 
        // export class Request implements HttpRequestBaseModel<Request> {
        Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = ( /** @type {?} */({}));
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //import { SourceUpsertAction } from 'app/actions';
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
                        template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">\r\n  <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">\r\n      <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">\r\n        \r\n        <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">\r\n          <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>\r\n        </a>\r\n        <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>\r\n      </mat-card-title>\r\n    \r\n  </mat-card>\r\n\r\n  <div fxLayoutAlign='end center'>\r\n    <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n",
                        styles: [":host{width:100%}.source-box{margin:5px}.source-box a{text-decoration:none}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.thresholds = (( /** @type {?} */(this.formGroup.controls.Thresholds))).controls;
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
                var control = ( /** @type {?} */(this.formGroup.controls["Thresholds"]));
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
                var control = ( /** @type {?} */(this.formGroup.controls["Thresholds"]));
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
                        template: "<div fxLayout=\"column\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div>\r\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <!-- TODO: -->\r\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\r\n                </mat-form-field>\r\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\r\n                  <label>\u0646\u0648\u0639 :</label>\r\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\r\n                    {{item}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\r\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n",
                        styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                    }] }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SourceEffects = /** @class */ (function () {
        function SourceEffects(actions$, router$$1, sourceService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.sourceService = sourceService;
            this.afterSubmitSource$ = this.actions$.pipe(effects.ofType(SourceActionTypes.SOURCE_SUBMIT), operators.pluck("payload"), operators.switchMap(function (data) {
                return _this.sourceService
                    .upsertSource(data)
                    .pipe(operators.map(function (res) { return new SourceSubmitSucceed(); }), operators.catchError(function () { return of.of(new SourceSubmitFailed()); }));
            }));
            this.SigninSucceed$ = this.actions$.pipe(effects.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED), operators.switchMap(function () {
                _this.router.navigate(["source"]);
                return Observable.Observable.empty();
            }));
        }
        SourceEffects.decorators = [
            { type: i0.Injectable }
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    },] }
        ];
        return SourceModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

//# sourceMappingURL=soushians-source.umd.js.map
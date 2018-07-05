(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngrx/store'), require('rxjs'), require('rxjs/BehaviorSubject'), require('@angular/common/http'), require('rxjs/Rx'), require('rxjs/Observable'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/operators'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/diagram', ['exports', '@angular/core', '@angular/forms', '@ngrx/store', 'rxjs', 'rxjs/BehaviorSubject', '@angular/common/http', 'rxjs/Rx', 'rxjs/Observable', '@angular/router', '@ngrx/effects', 'rxjs/operators', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.diagram = {}),global.ng.core,global.ng.forms,null,global.rxjs,global.rxjs.BehaviorSubject,global.ng.common.http,global.rxjs.Rx,global.rxjs.Observable,global.ng.router,null,global.rxjs.operators,global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material));
}(this, (function (exports,i0,forms,i2,rxjs,BehaviorSubject,i1,Rx,Observable,router,effects,operators,common,flexLayout,animations,material) { 'use strict';

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
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("DiagramModuleConfig");

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
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
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
     * @suppress {checkTypes} checked by tsc
     */
    var GetDiagramsApiModel;
    (function (GetDiagramsApiModel) {
        var Request = (function () {
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
        GetDiagramsApiModel.Request = Request;
        var Response = (function () {
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
    var GetDiagramsStart = (function () {
        function GetDiagramsStart() {
            this.type = DiagramsActionTypes.GET_DIAGRAM_START;
        }
        return GetDiagramsStart;
    }());
    var GetDiagramsSucceed = (function () {
        function GetDiagramsSucceed(payload) {
            this.payload = payload;
            this.type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
        }
        return GetDiagramsSucceed;
    }());
    var GetDiagramsFailed = (function () {
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
        if (state === void 0) {
            state = initialState;
        }
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
        var Request = (function () {
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
                 */ function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        IsActive: new forms.FormControl("true", [forms.Validators.required]),
                        Route: new forms.FormControl("", [forms.Validators.required])
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditDiagramApiModel.Request = Request;
        var Response = (function () {
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
    var EditDiagramAction = (function () {
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
        if (state === void 0) {
            state = initialState$1;
        }
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
        if (state === void 0) {
            state = initialState$2;
        }
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
    var /** @type {?} */ selectFeatureState = i2.createFeatureSelector("diagram");
    // export const getDiagramInformationStatus = createSelector(
    //   selectFeatureState,
    //   (state: DiagramState) => state.diagram
    // );
    //#region edit diagram
    var /** @type {?} */ selectEditDiagramState = i2.createSelector(selectFeatureState, function (state) { return state.editDiagram; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ServerStatusDiagramComponent = (function () {
        function ServerStatusDiagramComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new rxjs.BehaviorSubject(false);
            this.data = this.injector.get("data");
        }
        Object.defineProperty(ServerStatusDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "diagram-server-status",
                        template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <mat-icon [ngClass]=\"dataStatus$ ? 'connected' : 'disconnected'\">\n    fiber_manual_record\n  </mat-icon> -->\n  <!-- <span *ngIf=\"dataStatus$\">{{data.Widget.booleano.SuccessMessage}}</span>\n  <span *ngIf=\"!dataStatus$\">{{data.Widget.booleano.FailureMessage}}</span> -->\n</div>",
                        styles: [".disconnected{color:#ba3030}.connected{color:#30ae1c}.numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
                    },] },
        ];
        /** @nocollapse */
        ServerStatusDiagramComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        ServerStatusDiagramComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return ServerStatusDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramPartialConfigEditComponent = (function () {
        function DiagramPartialConfigEditComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
        }
        Object.defineProperty(DiagramPartialConfigEditComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "diagram-partial-config-edit",
                        template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n</form>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        DiagramPartialConfigEditComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        DiagramPartialConfigEditComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return DiagramPartialConfigEditComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PieDiagramPartialConfigComponent = (function () {
        function PieDiagramPartialConfigComponent(injector) {
            this.injector = injector;
            this.ConfigChanged = new i0.EventEmitter();
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
        }
        Object.defineProperty(PieDiagramPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "pie-diagram-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"formGroup\" fxLayout='column'>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n    </div>\n    <div>\n      <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n    </div>\n  </form>\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        PieDiagramPartialConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        PieDiagramPartialConfigComponent.propDecorators = {
            ConfigChanged: [{ type: i0.Output }],
            formGroup: [{ type: i0.Input }]
        };
        return PieDiagramPartialConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BooleanoWidgetPartialConfigComponent = (function () {
        function BooleanoWidgetPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.booleanoFormGroup = /** @type {?} */ (this.formGroup.controls["booleano"]);
        }
        Object.defineProperty(BooleanoWidgetPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "booleano-widget-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"booleanoFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"SuccessMessage\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"FailureMessage\">\n    </mat-form-field>\n  </form>\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        BooleanoWidgetPartialConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        BooleanoWidgetPartialConfigComponent.propDecorators = {
            formGroup: [{ type: i0.Input }]
        };
        return BooleanoWidgetPartialConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NumericWidgetPartialConfigComponent = (function () {
        function NumericWidgetPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
            this.donutFormGroup = /** @type {?} */ (this.formGroup.controls["donut"]);
        }
        Object.defineProperty(NumericWidgetPartialConfigComponent.prototype, "formGroup", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataLoaded;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "numeric-widget-partial-config",
                        template: "<div *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <form [formGroup]=\"donutFormGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646\" formControlName=\"title\">\n    </mat-form-field>\n  </form>\n</div>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        NumericWidgetPartialConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        NumericWidgetPartialConfigComponent.propDecorators = {
            formGroup: [{ type: i0.Input }]
        };
        return NumericWidgetPartialConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var LinearDiagramPartialConfigComponent = (function () {
        function LinearDiagramPartialConfigComponent(injector) {
            this.injector = injector;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.ConfigChanged = new i0.EventEmitter();
            this.formGroup = this.injector.get("formGroup");
            this.diagramService = this.injector.get("diagramService");
        }
        Object.defineProperty(LinearDiagramPartialConfigComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "linear-diagram-partial-config",
                        template: "<form [formGroup]=\"formGroup\" fxLayout='column'>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Legend\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Zoom\" fxFlexFill>\u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Subchart\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u0628\u0632\u0631\u06AF\u0646\u0645\u0627\u06CC\u06CC \u062F\u0631 \u0632\u06CC\u0631 \u0646\u0645\u0648\u062F\u0627\u0631</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Tooltip\" fxFlexFill>\u0646\u0645\u0627\u06CC\u0634 \u062A\u0648\u0636\u06CC\u062D\u0627\u062A \u0628\u0647 \u0635\u0648\u0631\u062A \u06AF\u0631\u0648\u0647\u06CC</mat-checkbox>\n  </div>\n  <div>\n    <mat-checkbox (change)=\"configChanged()\" formControlName=\"Flow\" fxFlexFill>Flow</mat-checkbox>\n  </div>\n</form>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        LinearDiagramPartialConfigComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        LinearDiagramPartialConfigComponent.propDecorators = {
            data: [{ type: i0.Input }],
            ConfigChanged: [{ type: i0.Output }]
        };
        return LinearDiagramPartialConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ServerConnectingTimeDiagramComponent = (function () {
        function ServerConnectingTimeDiagramComponent(injector) {
            var _this = this;
            this.injector = injector;
            this.time = 0;
            this.dataLoaded = new rxjs.BehaviorSubject(false);
            this.data = this.injector.get("data");
            setInterval(function () {
                _this.time = _this.time + 1;
            }, 1000);
        }
        Object.defineProperty(ServerConnectingTimeDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "diagram-server-connecting-time",
                        template: "<div *ngIf=\"dataLoaded | async\">\n  <div fxLayoutAlign=\"center center\" class=\"numeric title\">{{data.Description}}</div>\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{time | timeCounter}}</div> -->\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                        styles: [".numeric{font-size:2.4em;line-height:1.8}.numeric.title{font-family:iran-sans-bold,Tahoma;font-size:1.1em}"]
                    },] },
        ];
        /** @nocollapse */
        ServerConnectingTimeDiagramComponent.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        ServerConnectingTimeDiagramComponent.propDecorators = {
            time: [{ type: i0.Input }],
            data: [{ type: i0.Input }]
        };
        return ServerConnectingTimeDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramConfigurationService = (function () {
        function DiagramConfigurationService(config) {
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
        }
        Object.defineProperty(DiagramConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        DiagramConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        DiagramConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] }
            ];
        };
        /** @nocollapse */ DiagramConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function DiagramConfigurationService_Factory() { return new DiagramConfigurationService(i0.inject(MODULE_CONFIG_TOKEN)); }, token: DiagramConfigurationService, providedIn: "root" });
        return DiagramConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddDiagramApiModel;
    (function (AddDiagramApiModel) {
        var Request = (function () {
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
                 */ function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", []),
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Sync: new forms.FormControl(0, [forms.Validators.required]),
                        IsActive: new forms.FormControl("true", [forms.Validators.required]),
                        Type: new forms.FormControl("pie", [forms.Validators.required]),
                        Groups: new forms.FormControl("", [forms.Validators.required]),
                        Legend: new forms.FormControl("true", [forms.Validators.required]),
                        Subchart: new forms.FormControl("false", [forms.Validators.required]),
                        Zoom: new forms.FormControl("false", [forms.Validators.required]),
                        Tooltip: new forms.FormControl("false", [forms.Validators.required]),
                        Route: new forms.FormControl("", [forms.Validators.required]),
                        Source: new forms.FormControl({}, [forms.Validators.required]),
                        columns: new forms.FormControl("", [forms.Validators.required]),
                        Cols: new forms.FormControl(1, [forms.Validators.required]),
                        Rows: new forms.FormControl(1, [forms.Validators.required]),
                        TextColor: new forms.FormControl("#000000", [forms.Validators.required]),
                        BackgroundColor: new forms.FormControl("#ffffff", [forms.Validators.required]),
                        Colors: new forms.FormGroup({}),
                        Types: new forms.FormGroup({}),
                        ColumnMappings: new forms.FormArray([]),
                        Flow: new forms.FormControl(true),
                        donut: new forms.FormGroup({
                            title: new forms.FormControl("Default Title")
                        }),
                        booleano: new forms.FormGroup({
                            SuccessMessage: new forms.FormControl("SuccessMessage"),
                            FailureMessage: new forms.FormControl("FailureMessage")
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        AddDiagramApiModel.Request = Request;
        var Response = (function () {
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
    var DiagramService = (function () {
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
                    return Rx.Observable.throw(err);
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
                    .map(function (response) { return ((response)).Result; })
                    .catch(function (err) {
                    return Rx.Observable.throw(err);
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
                    .map(function (response) { return ((response)).Result; })
                    .catch(function (err) {
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
                    return Rx.Observable.throw(err);
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
                if (time === void 0) {
                    time = 0;
                }
                if (once === void 0) {
                    once = false;
                }
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
                    return Rx.Observable.timer(0, source.Interval).switchMap(function (i) {
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
                return ((_.report(data))).filter(function (item) { return item.isLastNode; });
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
                if (precision === void 0) {
                    precision = 60 * 1000;
                }
                if (time === void 0) {
                    time = 0;
                }
                return Math.floor((time || Date.now()) / precision);
            };
        DiagramService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        DiagramService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: DiagramConfigurationService }
            ];
        };
        /** @nocollapse */ DiagramService.ngInjectableDef = i0.defineInjectable({ factory: function DiagramService_Factory() { return new DiagramService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(DiagramConfigurationService)); }, token: DiagramService, providedIn: "root" });
        return DiagramService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NumericEditDiagramComponent = (function () {
        function NumericEditDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.data = this.injector.get("data");
        }
        Object.defineProperty(NumericEditDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "numeric-edit-diagram",
                        template: "<mat-card *ngIf=\"dataLoaded | async\" class=\"diagram-box\">\n  <mat-card-header>\n    <mat-card-title fxLayoutAlign=\"space-between center\">\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  </mat-card-content>\n</mat-card>",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}"]
                    },] },
        ];
        /** @nocollapse */
        NumericEditDiagramComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: DiagramService }
            ];
        };
        NumericEditDiagramComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return NumericEditDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NumericDiagramComponent = (function () {
        function NumericDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.dataLoaded = new BehaviorSubject.BehaviorSubject(false);
            this.data = this.injector.get("data");
            this.counter = 0;
        }
        Object.defineProperty(NumericDiagramComponent.prototype, "data", {
            get: /**
             * @return {?}
             */ function () {
                return this._data;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "diagram-numeric",
                        template: "<div *ngIf=\"dataLoaded | async\">\n  <!-- <div fxLayoutAlign=\"center center\" class=\"numeric\">{{data.Source.Data | json}}</div> -->\n  <div fxLayoutAlign=\"center center\" class=\"numeric\">{{counter}}</div>\n  <div [id]=\"'diagram_' + data._id\"></div>\n</div>",
                        styles: [":host{width:100%}.numeric{font-size:3em;line-height:1.8;font-family:iran-sans-bold,Tahoma}.numeric.title{font-size:1.5em}.mat-card{padding:0}"]
                    },] },
        ];
        /** @nocollapse */
        NumericDiagramComponent.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: DiagramService }
            ];
        };
        NumericDiagramComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return NumericDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramModuleContainerComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "diagram-module-container",
                        template: "<div fxflex=\"100\" fxLayout=\"column\">\n    <router-outlet></router-outlet>\n</div>\n"
                    },] },
        ];
        /** @nocollapse */
        DiagramModuleContainerComponent.ctorParameters = function () {
            return [
                { type: DiagramService }
            ];
        };
        return DiagramModuleContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DataMapperComponent = (function () {
        function DataMapperComponent(diagramService, store) {
            this.diagramService = diagramService;
            this.store = store;
            this.dataReport = [];
        }
        Object.defineProperty(DataMapperComponent.prototype, "data", {
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
            { type: i0.Component, args: [{
                        selector: "data-mapper",
                        template: "<div fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        <b>\n            Key\n        </b>\n    </div>\n    <div fxFlex=\"nogrow\">\n        <b>\n            Type\n        </b>\n    </div>\n</div>\n<div *ngFor=\"let item of dataReport\" [class]=\"'depts_' + item.depts\" fxLayout=\"row\">\n    <div fxFlex=\"grow\">\n        {{item.name}}\n    </div>\n    <div fxFlex=\"nogrow\">\n        {{item.type}}\n    </div>\n</div>\n",
                        styles: ["mat-radio-button{width:100%;display:block}div.depts_2{margin-right:25px}div.depts_3{margin-right:50px}"]
                    },] },
        ];
        /** @nocollapse */
        DataMapperComponent.ctorParameters = function () {
            return [
                { type: DiagramService },
                { type: i2.Store }
            ];
        };
        DataMapperComponent.propDecorators = {
            destination: [{ type: i0.Input }],
            data: [{ type: i0.Input }]
        };
        return DataMapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramModel = (function () {
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
    var AddDiagramAction = (function () {
        function AddDiagramAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM;
        }
        return AddDiagramAction;
    }());
    var AddDiagramActionStart = (function () {
        function AddDiagramActionStart(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_START;
        }
        return AddDiagramActionStart;
    }());
    var AddDiagramActionSucceed = (function () {
        function AddDiagramActionSucceed(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
        }
        return AddDiagramActionSucceed;
    }());
    var AddDiagramActionFailed = (function () {
        function AddDiagramActionFailed() {
            this.type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
        }
        return AddDiagramActionFailed;
    }());
    var DiagramConfigChangedAction = (function () {
        function DiagramConfigChangedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
        }
        return DiagramConfigChangedAction;
    }());
    var HaveEndpointAction = (function () {
        function HaveEndpointAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.HAVE_ENDPOINT;
        }
        return HaveEndpointAction;
    }());
    var DataLoadedAction = (function () {
        function DataLoadedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.DATA_LOADED;
        }
        return DataLoadedAction;
    }());
    var StructureDefinitionStartAction = (function () {
        function StructureDefinitionStartAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
        }
        return StructureDefinitionStartAction;
    }());
    var StructureDefinitionFinishedAction = (function () {
        function StructureDefinitionFinishedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
        }
        return StructureDefinitionFinishedAction;
    }());
    var ColumnsMappingChangedAction = (function () {
        function ColumnsMappingChangedAction(payload) {
            this.payload = payload;
            this.type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
        }
        return ColumnsMappingChangedAction;
    }());
    var GenerateDiagramAction = (function () {
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
    var AddDiagramComponent = (function () {
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
                                colorsControl.addControl(columnKey, new forms.FormControl(data.Chart.data.colors[columnKey]));
                        });
                        var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
                        Object.keys(data.Chart.data.types || {}).forEach(function (key) {
                            if (!(key in typesControl.controls))
                                typesControl.addControl(key, new forms.FormControl(data.Chart.data.types[key]));
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
                        ((_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
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
                var /** @type {?} */ typesFormGroup = ((this.formGroup.controls["Types"])).controls;
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
                if (NamePath === void 0) {
                    NamePath = "";
                }
                if (ValuePath === void 0) {
                    ValuePath = "";
                }
                var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
                control.push(this.formBuilder.group({
                    NamePath: [NamePath],
                    ValuePath: [ValuePath, forms.Validators.required]
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
                var /** @type {?} */ control = (this.formGroup.controls["ColumnMappings"]);
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
                return Observable.Observable.create(function (obser) {
                    var /** @type {?} */ columns = _this.diagramService.extract_columns_from_data(_this.data, ((_this.formGroup.controls["ColumnMappings"])).value);
                    _this.formGroup.controls["columns"].setValue(columns);
                    //add new item to this.formGroup.controls.colors form control
                    var /** @type {?} */ colorsControl = (_this.formGroup.controls["Colors"]);
                    columns.forEach(function (column) {
                        var /** @type {?} */ columnKey = column[0];
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new forms.FormControl("#123456"));
                    });
                    var /** @type {?} */ typesControl = (_this.formGroup.controls["Types"]);
                    columns.forEach(function (column) {
                        var /** @type {?} */ key = column[0];
                        if (!(key in typesControl.controls))
                            typesControl.addControl(key, new forms.FormControl(_this.formGroup.value.Type));
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
                return Observable.Observable.empty();
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
            { type: i0.Component, args: [{
                        selector: "diagram-add",
                        template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (change)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"50\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\" fxLayoutAlign=\"space-between center\">\n            <span>{{item[0]}} : {{item[1]}}</span>\n            <span [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div>\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
                        styles: ["#chart{width:300px;direction:ltr}.form-element-margin{margin:5px 10px}.item-margin{margin:10px 0;display:block}mat-option.depth_2{padding-right:30px}mat-option.depth_3{padding-right:50px}mat-option.depth_4{padding-right:70px}.mat-card{margin:12.5px}"]
                    },] },
        ];
        /** @nocollapse */
        AddDiagramComponent.ctorParameters = function () {
            return [
                { type: DiagramService },
                { type: forms.FormBuilder },
                { type: i2.Store },
                { type: router.ActivatedRoute }
            ];
        };
        return AddDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var diagramViewComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "diagram-view",
                        template: "<div *ngIf=\"diagramData$ | async\" [style.color]=\"(diagramData$ | async)?.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"(diagramData$ | async)\"></dynamic-component-selector>\n</div>",
                        styles: [":host{width:100%;margin:12.5px}.diagram-box{margin:15px}.diagram-box .c3{direction:ltr}.widget-title{font:1.3em IRANSans,tahoma}"]
                    },] },
        ];
        /** @nocollapse */
        diagramViewComponent.ctorParameters = function () {
            return [
                { type: DiagramService }
            ];
        };
        diagramViewComponent.propDecorators = {
            diagramId: [{ type: i0.Input, args: ["id",] }]
        };
        return diagramViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramsComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "diagrams",
                        template: "<mat-grid-list cols=\"12\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let diagram of (diagrams | async)?.Result\" \n  [colspan]=\"diagram.Box.Cols\" \n  [rowspan]=\"diagram.Box.Rows\" \n  [style.color]=\"diagram.Box.Color\">\n    <dynamic-component-selector class=\"diagram-box\" [data]=\"diagram\"></dynamic-component-selector>\n  </mat-grid-tile>\n</mat-grid-list>\n<br />\n<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n</div>\n<div fxLayoutAlign='end center'>\n  <button mat-fab routerLink=\"../diagrams/add\" class=\"add-btn\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n  </button>\n</div>\n",
                        styles: [":host{width:100%}.diagram-box{margin:15px}.add-btn{position:fixed;bottom:50px;left:25px;z-index:1}"]
                    },] },
        ];
        /** @nocollapse */
        DiagramsComponent.ctorParameters = function () {
            return [
                { type: DiagramService }
            ];
        };
        return DiagramsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditDiagramComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "diagram-edit",
                        template: "<mat-card fxLayout=\"column\" fxFlex=\"400px\">\n    <form [formGroup]=\"formGroup\" fxLayout='column' (ngSubmit)=\"add($event)\">\n\n        <mat-card-header>\n            <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n\n        <mat-card-content>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n            </mat-form-field>\n            <mat-form-field fxFlexFill>\n                <input matInput placeholder=\"\u0622\u062F\u0631\u0633 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Route\">\n            </mat-form-field>\n\n            <mat-checkbox formControlName=\"IsActive\">\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n\n        </mat-card-content>\n        <mat-card-actions>\n            <button fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n            <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n        </mat-card-actions>\n    </form>\n</mat-card>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        EditDiagramComponent.ctorParameters = function () {
            return [
                { type: DiagramService },
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return EditDiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramComponent = (function () {
        function DiagramComponent(store, diagramService, http, injector, route) {
            var _this = this;
            this.store = store;
            this.diagramService = diagramService;
            this.http = http;
            this.injector = injector;
            this.route = route;
            this.modelIsCorrect = new BehaviorSubject.BehaviorSubject(false);
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
             */ function () {
                return this._model;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: i0.Component, args: [{
                        selector: "diagram",
                        template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n</div>\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                        styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:all .4s ease-in-out}"]
                    },] },
        ];
        /** @nocollapse */
        DiagramComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: DiagramService },
                { type: i1.HttpClient },
                { type: i0.Injector },
                { type: router.ActivatedRoute }
            ];
        };
        DiagramComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return DiagramComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicComponentSelectorComponent = (function () {
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
             */ function (data) {
                if (!data || Object.keys(data).length == 0)
                    return;
                this.backgroundColor = data.Box.BackgroundColor;
                this._data = data;
                var /** @type {?} */ raw = { data: data };
                var /** @type {?} */ _component = this.typeMapToDiagram[data.Chart.data.type];
                var /** @type {?} */ inputProviders = Object.keys(raw).map(function (inputName) {
                    return { provide: inputName, useValue: raw[inputName] };
                });
                var /** @type {?} */ resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                var /** @type {?} */ injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
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
            { type: i0.Component, args: [{
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
        DynamicComponentSelectorComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        DynamicComponentSelectorComponent.propDecorators = {
            dynamicComponentContainer: [{ type: i0.ViewChild, args: ["dynamicComponentContainer", { read: i0.ViewContainerRef },] }],
            widgetComponent: [{ type: i0.ViewChild, args: [DiagramComponent,] }],
            data: [{ type: i0.Input }]
        };
        return DynamicComponentSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DynamicConfigComponentSelectorComponent = (function () {
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
            this.ConfigChanged = new i0.EventEmitter();
            this.currentComponent = null;
        }
        Object.defineProperty(DynamicConfigComponentSelectorComponent.prototype, "data", {
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
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
                var /** @type {?} */ resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                var /** @type {?} */ injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                var /** @type {?} */ factory = this.resolver.resolveComponentFactory(_component);
                var /** @type {?} */ component = factory.create(injector);
                if (((component.instance)).ConfigChanged)
                    ((component.instance)).ConfigChanged.subscribe(function () {
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
            { type: i0.Component, args: [{
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
        DynamicConfigComponentSelectorComponent.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver }
            ];
        };
        DynamicConfigComponentSelectorComponent.propDecorators = {
            dynamicComponentContainer: [{ type: i0.ViewChild, args: ["dynamicComponentContainer", { read: i0.ViewContainerRef },] }],
            ConfigChanged: [{ type: i0.Output }],
            data: [{ type: i0.Input }]
        };
        return DynamicConfigComponentSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramEffects = (function () {
        function DiagramEffects(actions$, router$$1, diagramService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.diagramService = diagramService;
            this.DiagramRequest$ = this.actions$.ofType().pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new GetDiagramsStart(); }));
            this.getDiagram$ = this.actions$
                .ofType()
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.diagramService
                    .getDiagrams()
                    .pipe(operators.map(function (res) { return new GetDiagramsSucceed(res); }), operators.catchError(function () { return Observable.Observable.of(new GetDiagramsFailed()); }));
            }));
        }
        DiagramEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        DiagramEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: DiagramService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DiagramEffects.prototype, "DiagramRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], DiagramEffects.prototype, "getDiagram$", void 0);
        return DiagramEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddDiagramEffects = (function () {
        function AddDiagramEffects(actions$, router$$1, diagramService) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.diagramService = diagramService;
            this.addDiagramRequest$ = this.actions$
                .ofType(AddDiagramActionTypes.ADD_DIAGRAM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new AddDiagramActionStart(data); }));
            this.addDiagram$ = this.actions$
                .ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) {
                return _this.diagramService
                    .addDiagram(data)
                    .pipe(operators.map(function (res) { return new AddDiagramActionSucceed(res); }), operators.catchError(function () { return Observable.Observable.of(new AddDiagramActionFailed()); }));
            }));
            this.ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) {
                _this.router.navigate(["diagrams"]);
                return Observable.Observable.empty();
            }));
            this.HAVE_ENDPOINT$ = this.actions$
                .ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new DataLoadedAction(data); }));
            this.DATA_LOADED$ = this.actions$
                .ofType(AddDiagramActionTypes.DATA_LOADED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new StructureDefinitionStartAction(data); }));
            this.DIAGRAM_CONFIG_CHANGED$ = this.actions$
                .ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new GenerateDiagramAction(data); }));
            this.STRUCTURE_DEFINITION_START$ = this.actions$
                .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return data.getDataStructure().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
            this.COLUMNS_MAPPING_CHANGED$ = this.actions$
                .ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return data.calculateColumns().map(function () { return new StructureDefinitionFinishedAction(data); }); }));
            this.STRUCTURE_DEFINITION_END$ = this.actions$
                .ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return data.calculateColumns().map(function () { return new GenerateDiagramAction(data); }); }));
            this.GenerateDiagram$ = this.actions$
                .ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return data.generateDiagram(); }));
        }
        AddDiagramEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AddDiagramEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: DiagramService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "addDiagramRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "addDiagram$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "ADD_DIAGRAM_SUCCEED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "HAVE_ENDPOINT$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "DATA_LOADED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "DIAGRAM_CONFIG_CHANGED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_START$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "COLUMNS_MAPPING_CHANGED$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddDiagramEffects.prototype, "STRUCTURE_DEFINITION_END$", void 0);
        __decorate([
            effects.Effect({ dispatch: false }),
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
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DiagramSelectorComponent = (function () {
        function DiagramSelectorComponent(diagramService) {
            this.diagramService = diagramService;
            this.diagrams$ = this.diagramService.getDiagrams().pipe(operators.map(function (res) { return res.Result; }));
        }
        Object.defineProperty(DiagramSelectorComponent.prototype, "valid", {
            get: /**
             * @return {?}
             */ function () {
                return this.config.diagramId != undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DiagramSelectorComponent.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Component, args: [{
                        template: "<mat-select placeholder=\"Diagrams\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\n    {{item._id}}\n  </mat-option>\n</mat-select>"
                    },] },
        ];
        /** @nocollapse */
        DiagramSelectorComponent.ctorParameters = function () {
            return [
                { type: DiagramService }
            ];
        };
        return DiagramSelectorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsDiagramModule = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            material.MatInputModule,
                            material.MatCheckboxModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatTooltipModule,
                            material.MatGridListModule,
                            material.MatAutocompleteModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule
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
    var RootNgsDiagramModule = (function () {
        function RootNgsDiagramModule() {
        }
        RootNgsDiagramModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsDiagramModule,
                            i2.StoreModule.forFeature("diagram", DiagramReducers),
                            effects.EffectsModule.forFeature([DiagramEffects, AddDiagramEffects]),
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

    exports.DiagramSelectorComponent = DiagramSelectorComponent;
    exports.diagramViewComponent = diagramViewComponent;
    exports.NgsDiagramModule = NgsDiagramModule;
    exports.RootNgsDiagramModule = RootNgsDiagramModule;
    exports.ɵbb = RoutingModule;
    exports.ɵe = MODULE_CONFIG_TOKEN;
    exports.ɵl = BooleanoWidgetPartialConfigComponent;
    exports.ɵi = DiagramPartialConfigEditComponent;
    exports.ɵk = LinearDiagramPartialConfigComponent;
    exports.ɵo = NumericDiagramComponent;
    exports.ɵu = NumericEditDiagramComponent;
    exports.ɵt = NumericWidgetPartialConfigComponent;
    exports.ɵj = PieDiagramPartialConfigComponent;
    exports.ɵp = ServerConnectingTimeDiagramComponent;
    exports.ɵq = ServerStatusDiagramComponent;
    exports.ɵba = AddDiagramEffects;
    exports.ɵz = DiagramEffects;
    exports.ɵw = diagramReducer;
    exports.ɵx = Reducer;
    exports.ɵv = DiagramReducers;
    exports.ɵy = ParentGuardReducer;
    exports.ɵd = DiagramConfigurationService;
    exports.ɵb = DiagramService;
    exports.ɵa = AddDiagramComponent;
    exports.ɵs = DataMapperComponent;
    exports.ɵr = DiagramModuleContainerComponent;
    exports.ɵm = DiagramComponent;
    exports.ɵf = DiagramsComponent;
    exports.ɵn = DynamicComponentSelectorComponent;
    exports.ɵh = DynamicConfigComponentSelectorComponent;
    exports.ɵg = EditDiagramComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2RpYWdyYW0uY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZGlhZ3JhbS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM6IHt9O1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXREaWFncmFtc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRkaWFncmFtOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHQvLyByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHQvLyAgIGRpYWdyYW06IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdC8vIH0pXHJcblx0XHQvL31cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpYWdyYW1zQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9ESUFHUkFNID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1cIixcclxuXHRHRVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0R0VUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRHRVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaWFncmFtc0FjdGlvbiA9IEdldERpYWdyYW1zIHwgR2V0RGlhZ3JhbXNTdGFydCB8IEdldERpYWdyYW1zU3VjY2VlZCB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQWN0aW9uVHlwZXMsIERpYWdyYW1zQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coR2V0RGlhZ3JhbXNBcGlNb2RlbCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGlhZ3JhbTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2FkZWQ6IGZhbHNlLFxyXG5cdGRpYWdyYW06IHtcclxuXHRcdFJlc3VsdDogW11cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZ3JhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGlhZ3JhbXNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyAgZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtO1xyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBSZXF1ZXN0KSB7fVxyXG5cdFx0Z2V0UmVxdWVzdFF1ZXJ5UGFyYW1zKCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0RJQUdSQU0gPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1cIixcclxuXHRFRElUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1RBUlRcIixcclxuXHRFRElUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RURJVF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uVHlwZXMsIEVkaXREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhFZGl0RGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH0gYXMgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0RGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgUGFyZW50R3VhcmRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9wYXJlbnQtZ3VhcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0cm91dGU6IHN0cmluZztcclxuXHRyZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0cm91dGU6IFwiXCIsXHJcblx0cmVzdWx0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcmVudEd1YXJkUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQYXJlbnRHdWFyZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0UGFyZW50Um91dGluZ0d1YXJkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIERpYWdyYW1zUmVkdWNlciBmcm9tIFwiLi9kaWFncmFtcy5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21FZGl0RGlhZ3JhbSBmcm9tIFwiLi9lZGl0LWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBwYXJlbnRHdWFyZFJlZHVjZXIgZnJvbSBcIi4vcGFyZW50LWd1YXJkLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ3JhbVN0YXRlIHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLlN0YXRlO1xyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uU3RhdGU7XHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1SZWR1Y2VycyA9IHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyLFxyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uUmVkdWNlcixcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZGlhZ3JhbVwiOiBEaWFncmFtU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGlhZ3JhbVN0YXRlPihcImRpYWdyYW1cIik7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGlhZ3JhbUluZm9ybWF0aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgc2VsZWN0RmVhdHVyZVN0YXRlLFxyXG4vLyAgIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtXHJcbi8vICk7XHJcblxyXG4vLyNyZWdpb24gZWRpdCBkaWFncmFtXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFZGl0RGlhZ3JhbVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZWRpdERpYWdyYW0pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLXN0YXR1c1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1pY29uIFtuZ0NsYXNzXT1cImRhdGFTdGF0dXMkID8gJ2Nvbm5lY3RlZCcgOiAnZGlzY29ubmVjdGVkJ1wiPlxyXG4gICAgZmliZXJfbWFudWFsX3JlY29yZFxyXG4gIDwvbWF0LWljb24+IC0tPlxyXG4gIDwhLS0gPHNwYW4gKm5nSWY9XCJkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uU3VjY2Vzc01lc3NhZ2V9fTwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cIiFkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uRmFpbHVyZU1lc3NhZ2V9fTwvc3Bhbj4gLS0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5kaXNjb25uZWN0ZWR7Y29sb3I6I2JhMzAzMH0uY29ubmVjdGVke2NvbG9yOiMzMGFlMWN9Lm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuX2lkLCB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyXHJcblx0XHQvLyAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgfSk7XHJcblx0XHQvLyAgIH0pXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPsOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjCDDmMKvw5jCsSDDmMKyw5vCjMOYwrEgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqIMOYwqjDmcKHIMOYwrXDmcKIw5jCscOYwqogw5rCr8OYwrHDmcKIw5nCh8Obwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwaWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIiBmeEZsZXhGaWxsPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGRvbnV0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0XHR0aGlzLmRvbnV0Rm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZG9udXQgYXMgRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuQ29uZmlnQ2hhbmdlZC5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImJvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImJvb2xlYW5vRm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3VjY2Vzc01lc3NhZ2VcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwiRmFpbHVyZU1lc3NhZ2VcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0Ym9vbGVhbm9Gb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0XHR0aGlzLmJvb2xlYW5vRm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuYm9vbGVhbm8gYXMgRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJkb251dEZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cInRpdGxlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YUxvYWRlZDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBmb3JtR3JvdXAoZGF0YTogRm9ybUdyb3VwKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuX2RhdGFMb2FkZWQgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YUxvYWRlZDtcclxuXHR9XHJcblx0ZG9udXRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHRcdHRoaXMuZG9udXRGb3JtR3JvdXAgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5kb251dCBhcyBGb3JtR3JvdXA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHQvLyAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsaW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZ1wiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkxlZ2VuZFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiWm9vbVwiIGZ4RmxleEZpbGw+w5jCqMOYwrLDmMKxw5rCr8OZwobDmcKFw5jCp8ObwozDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJTdWJjaGFydFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqMOYwrLDmMKxw5rCr8OZwobDmcKFw5jCp8ObwozDm8KMIMOYwq/DmMKxIMOYwrLDm8KMw5jCsSDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrE8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlRvb2x0aXBcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqogw5jCqMOZwocgw5jCtcOZwojDmMKxw5jCqiDDmsKvw5jCscOZwojDmcKHw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiRmxvd1wiIGZ4RmxleEZpbGw+RmxvdzwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuQ29uZmlnQ2hhbmdlZC5lbWl0KCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLWNvbm5lY3RpbmctdGltZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWMgdGl0bGVcIj57e2RhdGEuRGVzY3JpcHRpb259fTwvZGl2PlxyXG4gIDwhLS0gPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7dGltZSB8IHRpbWVDb3VudGVyfX08L2Rpdj4gLS0+XHJcbiAgPGRpdiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5udW1lcmlje2ZvbnQtc2l6ZToyLjRlbTtsaW5lLWhlaWdodDoxLjh9Lm51bWVyaWMudGl0bGV7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hO2ZvbnQtc2l6ZToxLjFlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSB0aW1lOiBudW1iZXIgPSAwO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRoaXMudGltZSA9IHRoaXMudGltZSArIDE7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUsIHRoaXMuZGF0YS5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KTtcclxuXHRcdC8vICAgICAgICAgfSlcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIERpYWdyYW1Nb2R1bGVDb25maWcsIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9kaWFncmFtLmNvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5cdHByaXZhdGUgX2NvbmZpZzogRGlhZ3JhbU1vZHVsZUNvbmZpZztcclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZztcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnKSB7XHJcblx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBNT0RVTEVfREVGQVVMVF9DT05GSUcsIGNvbmZpZyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi9zb3VyY2UubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRGlhZ3JhbUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0TmFtZTogc3RyaW5nO1xyXG5cdFx0SXNBY3RpdmU6IEJvb2xlYW47XHJcblx0XHRUeXBlOiBzdHJpbmc7XHJcblx0XHRUeXBlczogeyBbY29sdW1uTGFiZWw6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0TGVnZW5kOiBCb29sZWFuO1xyXG5cdFx0U3ViY2hhcnQ6IEJvb2xlYW47XHJcblx0XHRab29tOiBCb29sZWFuO1xyXG5cdFx0VG9vbHRpcDogQm9vbGVhbjtcclxuXHRcdFJvdXRlOiBzdHJpbmc7XHJcblx0XHRTeW5jOiBudW1iZXI7XHJcblx0XHRDb2xvcnM6IHN0cmluZ1tdO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHsgTmFtZVBhdGg6IHN0cmluZzsgVmFsdWVQYXRoOiBzdHJpbmcgfVtdO1xyXG5cdFx0Rmxvdzogc3RyaW5nO1xyXG5cdFx0Y29sdW1uczogYW55W107XHJcblx0XHRDb2xzOiBudW1iZXI7XHJcblx0XHRSb3dzOiBudW1iZXI7XHJcblx0XHRUZXh0Q29sb3I6IFN0cmluZztcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdFx0Ym9vbGVhbm86IGFueTtcclxuXHRcdFNvdXJjZTogU291cmNlTW9kZWw7XHJcblx0XHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCA9IHt9IGFzIEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogdGhpcy5Jc0FjdGl2ZSxcclxuXHRcdFx0XHRTb3VyY2U6IHRoaXMuU291cmNlLFxyXG5cdFx0XHRcdFR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRHcm91cHM6IHRoaXMuR3JvdXBzLFxyXG5cdFx0XHRcdFdpZGdldDoge1xyXG5cdFx0XHRcdFx0Ym9vbGVhbm86IHRoaXMuYm9vbGVhbm9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdENoYXJ0OiB7XHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMuVHlwZSxcclxuXHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRjb2xvcnM6IHRoaXMuQ29sb3JzLFxyXG5cdFx0XHRcdFx0XHR0eXBlczogdGhpcy5UeXBlc1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRcdFx0RmxvdzogdGhpcy5GbG93LFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuTGVnZW5kXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdGhpcy5TdWJjaGFydFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5ab29tXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdFx0XHRncm91cGVkOiB0aGlzLlRvb2x0aXBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdEJveDoge1xyXG5cdFx0XHRcdFx0Q29sczogdGhpcy5Db2xzLFxyXG5cdFx0XHRcdFx0Um93czogdGhpcy5Sb3dzLFxyXG5cdFx0XHRcdFx0VGV4dENvbG9yOiB0aGlzLlRleHRDb2xvcixcclxuXHRcdFx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRfaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbXSksXHJcblx0XHRcdFx0TmFtZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTeW5jOiBuZXcgRm9ybUNvbnRyb2woMCwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woXCJwaWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEdyb3VwczogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRMZWdlbmQ6IG5ldyBGb3JtQ29udHJvbChcInRydWVcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFN1YmNoYXJ0OiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Wm9vbTogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRvb2x0aXA6IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTb3VyY2U6IG5ldyBGb3JtQ29udHJvbCh7fSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGNvbHVtbnM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sczogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3dzOiBuZXcgRm9ybUNvbnRyb2woMSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFRleHRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiIzAwMDAwMFwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBuZXcgRm9ybUNvbnRyb2woXCIjZmZmZmZmXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRDb2xvcnM6IG5ldyBGb3JtR3JvdXAoe30pLFxyXG5cdFx0XHRcdFR5cGVzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRDb2x1bW5NYXBwaW5nczogbmV3IEZvcm1BcnJheShbXSksXHJcblx0XHRcdFx0RmxvdzogbmV3IEZvcm1Db250cm9sKHRydWUpLFxyXG5cdFx0XHRcdGRvbnV0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJEZWZhdWx0IFRpdGxlXCIpXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Ym9vbGVhbm86IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0U3VjY2Vzc01lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIlN1Y2Nlc3NNZXNzYWdlXCIpLFxyXG5cdFx0XHRcdFx0RmFpbHVyZU1lc3NhZ2U6IG5ldyBGb3JtQ29udHJvbChcIkZhaWx1cmVNZXNzYWdlXCIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2RpYWdyYW0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgdXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGdldERpYWdyYW1zKCk6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtXCIpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zb3VyY2VcIilcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRHcm91cHMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtL2dyb3Vwc1wiKVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IChyZXNwb25zZSBhcyBhbnkpLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoIWlkKSBkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW0vJHtpZH1gKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0YWRkRGlhZ3JhbShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kaWFncmFtXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cGRhdGVEaWFncmFtKGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGlhZ3JhbVwiLCBib2R5KS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZGVsZXRlRGlhZ3JhbShpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RpYWdyYW0vJHtpZH1gKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0RGF0YShzb3VyY2U6IFNvdXJjZU1vZGVsLCB0aW1lOiBudW1iZXIgPSAwLCBvbmNlOiBCb29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0aWYgKG9uY2UgJiYgdGltZSAhPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSBpZiAoc291cmNlLkludGVydmFsID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGltZSA9IHRpbWUgfHwgRGF0ZS5ub3coKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGltZXIoMCwgc291cmNlLkludGVydmFsKS5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0LmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGE6IGFueSwgY29sdW1uc01hcHBpbmdzKSB7XHJcblx0XHRsZXQgcmVzID0gW107XHJcblxyXG5cdFx0Y29sdW1uc01hcHBpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdHZhciBWYWx1ZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uVmFsdWVQYXRoKTtcclxuXHJcblx0XHRcdGlmICghaXRlbS5OYW1lUGF0aCkge1xyXG5cdFx0XHRcdHJldHVybiByZXMucHVzaChbIGl0ZW0uVmFsdWVQYXRoLnNwbGl0KFwiLlwiKS5wb3AoKSBdLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoaXRlbSwgaSkgPT4gWyBpdGVtIF0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFsgTmFtZURhdGEgXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Z2V0X2RhdGFfcmVwb3J0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIF8ucmVwb3J0KGRhdGEpO1xyXG5cdH1cclxuXHRnZXRfbGFzdF9ub2RlX29mX2RhdGEoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gKF8ucmVwb3J0KGRhdGEpIGFzIGFueVtdKS5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzTGFzdE5vZGUpO1xyXG5cdH1cclxuXHRidWlsZENoYXJ0Q29uZmlnKGNvbHVtbnMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zXHJcblx0XHRcdH0sXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0Ly8gVE9ETzogaW1wbGVtZW50IGludGVyZmFjZSBvZiBjMyBjb25maWdcclxuXHRjaGFydHMgPSB7fTtcclxuXHRnZW5lcmF0ZURpYWdyYW0oY29uZmlnOiBhbnksIGlkOiBzdHJpbmcsIHJvdXRlOiBzdHJpbmcsIHN5bmM6IG51bWJlcik6IFN1YnNjcmlwdGlvbiB7XHJcblx0XHR0aGlzLmNoYXJ0c1tpZF0gPSBjMy5nZW5lcmF0ZSh7XHJcblx0XHRcdC4uLmNvbmZpZyxcclxuXHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHtpZH1gXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXREYXRhKHt9IGFzIFNvdXJjZU1vZGVsLCBzeW5jKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuY2hhcnRzW2lkXS5sb2FkKHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCBjb25maWcuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldEZsb29yVGltZShwcmVjaXNpb24gPSA2MCAqIDEwMDAsIHRpbWU6IG51bWJlciA9IDApIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKCh0aW1lIHx8IERhdGUubm93KCkpIC8gcHJlY2lzaW9uKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibnVtZXJpYy1lZGl0LWRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIj5cclxuICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuUm91dGUpXHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbnVtZXJpY1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7ZGF0YS5Tb3VyY2UuRGF0YSB8IGpzb259fTwvZGl2PiAtLT5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3tjb3VudGVyfX08L2Rpdj5cclxuICA8ZGl2IFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfS5tYXQtY2FyZHtwYWRkaW5nOjB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRjb3VudGVyOiBudW1iZXI7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0XHR0aGlzLmNvdW50ZXIgPSAwO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRsZXQgY291bnRlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyk7XHJcblx0XHRcdHRoaXMuY291bnRlciA9IGNvdW50ZXJbMF1bMV07XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICdhcHAvbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgYXBwUmVkdWNlciBmcm9tICdhcHAvcmVkdWNlcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgXzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGF0YS1tYXBwZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBLZXlcclxuICAgICAgICA8L2I+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIFR5cGVcclxuICAgICAgICA8L2I+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVJlcG9ydFwiIFtjbGFzc109XCInZGVwdHNfJyArIGl0ZW0uZGVwdHNcIiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgbWF0LXJhZGlvLWJ1dHRvbnt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2t9ZGl2LmRlcHRzXzJ7bWFyZ2luLXJpZ2h0OjI1cHh9ZGl2LmRlcHRzXzN7bWFyZ2luLXJpZ2h0OjUwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFNYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGRlc3RpbmF0aW9uOiBzdHJpbmc7XHJcblx0X2RhdGE6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5kYXRhUmVwb3J0ID0gXy5yZXBvcnQoZGF0YSk7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHR9XHJcblx0ZGF0YVJlcG9ydDogYW55W10gPSBbXTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbU1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0SXNBY3RpdmU6IGJvb2xlYW47XHJcblx0RGVzY3JpcHRpb246IHN0cmluZztcclxuXHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdEJveDoge1xyXG5cdFx0TnVtYmVyT2ZDb2x1bW5zOiBudW1iZXI7XHJcblx0XHRPcmRlcjogbnVtYmVyO1xyXG5cdFx0QmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0fTtcclxuXHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFdpZGdldDoge1xyXG5cdFx0XCJib29sZWFub1wiOiB7XHJcblx0XHRcdFwiU3VjY2Vzc01lc3NhZ2VcIjogc3RyaW5nO1xyXG5cdFx0XHRcIkZhaWx1cmVNZXNzYWdlXCI6IHN0cmluZztcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Q2hhcnQ6IHtcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0dHlwZTogXCJwaWVcIiB8IFwibGluZWFyXCIgfCBcInNjYXR0ZXJcIiB8IFwiYmFyXCIgfCBcImxpbmVcIjtcclxuXHRcdFx0dHlwZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblx0XHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0XHRjb2xvcnM6IGFueVtdO1xyXG5cdFx0fTtcclxuXHRcdEZsb3c6IGJvb2xlYW47XHJcblx0XHRDb2x1bW5NYXBwaW5nczoge1xyXG5cdFx0XHROYW1lUGF0aDogc3RyaW5nO1xyXG5cdFx0XHRWYWx1ZVBhdGg6IHN0cmluZztcclxuXHRcdH1bXTtcclxuXHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRzaG93OiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdHNob3c6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdFx0em9vbToge1xyXG5cdFx0XHRlbmFibGVkOiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0Z3JvdXBlZDogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0fTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGREaWFncmFtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTVwiLFxyXG5cdEFERF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBESUFHUkFNX0NPTkZJR19DSEFOR0VEXCIsXHJcblx0QUREX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9GQUlMRURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlRcIixcclxuXHRIQVZFX0VORFBPSU5UID0gXCJbRElBR1JBTV1bQUREXSBIQVZFX1NUUlVDVFVSRVwiLFxyXG5cdERBVEFfTE9BREVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0xPQURFRFwiLFxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EXCIsXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTlNfTUFQUElOR19DSEFOR0VEXCIsXHJcblx0REFUQV9DQUxDVUxBVEVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0NBTENVTEFURURcIixcclxuXHRDT0xVTU5fQURERUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTl9BRERFRFwiLFxyXG5cdEdFTkVSQVRFX0RJQUdSQU0gPSBcIltESUFHUkFNXVtBRERdIEdFTkVSQVRFX0RJQUdSQU1cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIYXZlRW5kcG9pbnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhQ2FsY3VsYXRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0NBTENVTEFURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVEaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbkFkZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTl9BRERFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRGlhZ3JhbUFjdGlvbnMgPVxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBBZGREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZFxyXG5cdHwgSGF2ZUVuZHBvaW50QWN0aW9uXHJcblx0fCBEYXRhTG9hZGVkQWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb25cclxuXHR8IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG5cdHwgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uXHJcblx0fCBEYXRhQ2FsY3VsYXRlZEFjdGlvblxyXG5cdHwgR2VuZXJhdGVEaWFncmFtQWN0aW9uXHJcblx0fCBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEhhdmVFbmRwb2ludEFjdGlvbixcclxuXHRDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24sXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0QWRkRGlhZ3JhbUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0Lmx0LW1kPVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiNjBcIj5cclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlNvdXJjZVwiIChjaGFuZ2UpPVwicm91dGVFbnRlcmVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzb3VyY2VzIHwgYXN5bmNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLkVuZHBvaW50fX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwic3luYyB0aW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3luY1wiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgKGNoYW5nZSk9XCJ0eXBlQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVHlwZVwiIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPsOZwobDmcKIw5jCuSDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKGNoYW5nZSk9XCJ0eXBlQ2hhbmdlZCgpXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlhZ3JhbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIiBjbGFzcz1cImZvcm0tZWxlbWVudC1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyb3Vwc1wiIGZvcm1Db250cm9sTmFtZT1cIkdyb3Vwc1wiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICB7e2Zvcm1Hcm91cC5jb250cm9scy5Hcm91cHMudmFsdWUgPyBmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlWzBdIDogJyd9fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlPy5sZW5ndGggPiAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICgre3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlLmxlbmd0aCAtIDF9fSBvdGhlcnMpXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JvdXBzIHwgYXN5bmNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yIChDb25maWdDaGFuZ2VkKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtkYXRhXT1cImRpYWdyYW1QYXJ0aWFsQ29uZmlnXCI+PC9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGlkPVwibW9kaWZ5LWRpYWdyYW1cIiBmeEZsZXg9XCI0MFwiIFtkYXRhXT1cImRpYWdyYW1Nb2RlbFwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPiDDmMKzw5jCp8OYwq7DmMKqw5jCp8OYwrEgw5jCr8ObwozDmMKqw5jCpyA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8ZGF0YS1tYXBwZXIgZGVzdGluYXRpb249XCJ2YWx1ZVwiIFtkYXRhXT1cImRhdGFcIj48L2RhdGEtbWFwcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOZwobDmsKvw5jCp8OYwrTDmMKqIMOYwq/DmMKnw5jCr8OZwoc8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc01hcHBpbmdzOyBsZXQgaT1pbmRleFwiIGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiY29sdW1uc01hcHBpbmdzW2ldXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC54cz1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCIgZnhGbGV4LnhzPVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lUGF0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBhdGhPcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0ucGF0aFwiIFtjbGFzc109XCInbWF0LW9wdGlvbiBkZXB0aF8nICsgaXRlbS5kZXB0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIiBbZGlzYWJsZWRdPVwiIWl0ZW0uaXNMYXN0Tm9kZVwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5wYXRofX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiNTBcIiBmeEZsZXgueHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKFw5nCgsOYwq/DmMKnw5jCsSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiVmFsdWVQYXRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIiBbZGlzYWJsZWRdPVwiIWl0ZW0uaXNMYXN0Tm9kZVwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS5wYXRofX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJyZW1vdmVDb2x1bW4oaSlcIiBmeEZsZXggbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+w5nCvsOYwqfDmsKpIMOawqnDmMKxw5jCr8OZwoY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkQ29sdW1uKClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmMKzw5jCqsOZwojDmcKGPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5nChsOYwqrDmMKnw5vCjMOYwqwgw5jCr8OYwqfDmMKvw5nChyDDmcKHw5jCpzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZTsgbGV0IGk9aW5kZXhcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtWzBdfX0gOiB7e2l0ZW1bMV19fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiw5jCscOZwobDmsKvIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsVwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzXCIgKm5nSWY9XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5UeXBlcykuY29udHJvbHNbaXRlbVswXV1cIj5cclxuICAgICAgICAgICAgICA8IS0tIDxpbnB1dCBwbGFjZWhvbGRlcj1cInRpcG9cIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiID4gLS0+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgW2Zvcm1Db250cm9sTmFtZV09XCJpdGVtWzBdXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKqw5nChsOYwrjDm8KMw5nChcOYwqfDmMKqIMOYwrjDmMKnw5nCh8OYwrHDm8KMPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5jCs8OYwrfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiQ29sc1wiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5jCs8OYwqrDmcKIw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIlJvd3NcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7DmMKxw5nChsOawq8gw5nChcOYwqrDmcKGIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlRleHRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7DmMKxw5nChsOawq8gw5nCvsOYwrMgw5jCssOZwoXDm8KMw5nChsOZwocgOjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIkJhY2tncm91bmRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGQoJGV2ZW50KVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AjY2hhcnR7d2lkdGg6MzAwcHg7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9Lml0ZW0tbWFyZ2lue21hcmdpbjoxMHB4IDA7ZGlzcGxheTpibG9ja31tYXQtb3B0aW9uLmRlcHRoXzJ7cGFkZGluZy1yaWdodDozMHB4fW1hdC1vcHRpb24uZGVwdGhfM3twYWRkaW5nLXJpZ2h0OjUwcHh9bWF0LW9wdGlvbi5kZXB0aF80e3BhZGRpbmctcmlnaHQ6NzBweH0ubWF0LWNhcmR7bWFyZ2luOjEyLjVweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRkYXRhOiBhbnk7XHJcblx0Y29sdW1uczogYW55O1xyXG5cdGNoYXJ0O1xyXG5cdGRpYWdyYW1UeXBlczogc3RyaW5nW107XHJcblx0cGF0aE9wdGlvbnM6IHtcclxuXHRcdHBhdGg6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdHR5cGU6IHN0cmluZztcclxuXHRcdGNvbG9yOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdGNvbHVtbnNNYXBwaW5nczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRpYWdyYW1Nb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdGNvbXBvbmVudE1vZGVsOiB7IGNvbXBvbmVudDogYW55OyBpbnB1dHM6IG9iamVjdCB9O1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cdGRpYWdyYW1QYXJ0aWFsQ29uZmlnOiB7IHR5cGU6IHN0cmluZzsgaW5wdXRzOiB7IGZvcm1Hcm91cDogRm9ybUdyb3VwOyBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UgfSB9O1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRzb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1Nb2RlbCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRoaXMuY29sdW1uc01hcHBpbmdzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdE5hbWU6IGRhdGEuTmFtZSxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUsXHJcblx0XHRcdFx0XHRcdEdyb3VwczogZGF0YS5Hcm91cHMsXHJcblx0XHRcdFx0XHRcdFR5cGU6IGRhdGEuQ2hhcnQuZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRMZWdlbmQ6IGRhdGEuQ2hhcnQubGVnZW5kLnNob3csXHJcblx0XHRcdFx0XHRcdFN1YmNoYXJ0OiBkYXRhLkNoYXJ0LnN1YmNoYXJ0LnNob3csXHJcblx0XHRcdFx0XHRcdFpvb206IGRhdGEuQ2hhcnQuem9vbS5lbmFibGVkLFxyXG5cdFx0XHRcdFx0XHRUb29sdGlwOiBkYXRhLkNoYXJ0LnRvb2x0aXAuZ3JvdXBlZCxcclxuXHRcdFx0XHRcdFx0U3luYzogZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsXHJcblx0XHRcdFx0XHRcdFNvdXJjZTogZGF0YS5Tb3VyY2UsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IGRhdGEuQ2hhcnQuZGF0YS5jb2x1bW5zLFxyXG5cdFx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdFx0Q29sczogZGF0YS5Cb3guQ29scyxcclxuXHRcdFx0XHRcdFx0RmxvdzogZGF0YS5DaGFydC5GbG93LFxyXG5cdFx0XHRcdFx0XHRSb3dzOiBkYXRhLkJveC5Sb3dzLFxyXG5cdFx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcixcclxuXHRcdFx0XHRcdFx0VGV4dENvbG9yOiBkYXRhLkJveC5UZXh0Q29sb3JcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLmNvbG9ycyB8fCB7fSkuZm9yRWFjaChjb2x1bW5LZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnNbY29sdW1uS2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoZGF0YS5DaGFydC5kYXRhLnR5cGVzIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICghKGtleSBpbiB0eXBlc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKGRhdGEuQ2hhcnQuZGF0YS50eXBlc1trZXldKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MuZm9yRWFjaChtYXBwaW5nID0+IHRoaXMuYWRkQ29sdW1uKG1hcHBpbmcuTmFtZVBhdGgsIG1hcHBpbmcuVmFsdWVQYXRoKSk7XHJcblx0XHRcdFx0XHR0aGlzLnNvdXJjZSA9IGRhdGEuU291cmNlO1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0XHRcdGRpYWdyYW1TZXJ2aWNlOiB0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRpbnB1dHM6IHtcclxuXHRcdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZGlhZ3JhbVR5cGVzID0gW1xyXG5cdFx0XHRcImJhclwiLFxyXG5cdFx0XHRcImRvbnV0XCIsXHJcblx0XHRcdFwicGllXCIsXHJcblx0XHRcdFwic2NhdHRlclwiLFxyXG5cdFx0XHRcImxpbmVcIixcclxuXHRcdFx0XCJhcmVhXCIsXHJcblx0XHRcdFwiYXJlYS1zcGxpbmVcIixcclxuXHRcdFx0XCJudW1lcm9cIixcclxuXHRcdFx0XCJib29sZWFub1wiLFxyXG5cdFx0XHRcInRlbXBvXCJcclxuXHRcdF07XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3Muc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHN0YXR1cyA9PSBcIlZBTElEXCIgJiZcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS5jb250cm9scy5sZW5ndGggPiAwICYmXHJcblx0XHRcdFx0dGhpcy5kYXRhXHJcblx0XHRcdClcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuZGF0YVN1YnNjcmlwdGlvbikgdGhpcy5kYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdC8vIGdldERhdGEoKSB7XHJcblx0Ly8gICBjb25zdCBvJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLnNvdXJjZSk7XHJcblx0Ly8gICB0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvJC5zdWJzY3JpYmUoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbih0aGlzKSlcclxuXHQvLyAgIHJldHVybiBvJDtcclxuXHQvLyB9XHJcblx0Z2V0RGF0YVN0cnVjdHVyZSgpIHtcclxuXHRcdGNvbnN0IG9ic2VydmVyID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHsgLi4udGhpcy5zb3VyY2UsIEludGVydmFsOiAwIH0sIERhdGUubm93KCkgLSAxMDAwMCk7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvYnNlcnZlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGRhdGEuRGF0YTtcclxuXHRcdFx0dGhpcy5wYXRoT3B0aW9ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0X2RhdGFfcmVwb3J0KGRhdGEuRGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlcjtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0dHlwZUNoYW5nZWQoKSB7XHJcblx0XHRjb25zdCB0eXBlc0Zvcm1Hcm91cCA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UeXBlcyBhcyBGb3JtR3JvdXApLmNvbnRyb2xzO1xyXG5cdFx0Zm9yIChsZXQgY2IgaW4gdHlwZXNGb3JtR3JvdXApIHtcclxuXHRcdFx0dHlwZXNGb3JtR3JvdXBbY2JdLnNldFZhbHVlKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRhZGRDb2x1bW4oTmFtZVBhdGg6IHN0cmluZyA9IFwiXCIsIFZhbHVlUGF0aDogc3RyaW5nID0gXCJcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0dGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdFx0TmFtZVBhdGg6IFsgTmFtZVBhdGggXSxcclxuXHRcdFx0XHRWYWx1ZVBhdGg6IFsgVmFsdWVQYXRoLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF1cclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJvdXRlRW50ZXJlZChldmVudCkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBldmVudC52YWx1ZTtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBTb3VyY2U6IGV2ZW50LnZhbHVlIH0pO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgSGF2ZUVuZHBvaW50QWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0cmVtb3ZlQ29sdW1uKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucmVtb3ZlQXQoaSk7XHJcblx0fVxyXG5cdGNhbGN1bGF0ZUNvbHVtbnMoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXIgPT4ge1xyXG5cdFx0XHR2YXIgY29sdW1uc01BcHBpbmcgPSB7XHJcblx0XHRcdFx0Ly8gTmFtZVZBbHVlOiAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMudmFsdWVzXHJcblx0XHRcdH07XHJcblx0XHRcdGxldCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdHRoaXMuZGF0YSxcclxuXHRcdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sdW1uTWFwcGluZ3MgYXMgRm9ybUFycmF5KS52YWx1ZVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnNldFZhbHVlKGNvbHVtbnMpO1xyXG5cdFx0XHQvL2FkZCBuZXcgaXRlbSB0byB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2xvcnMgZm9ybSBjb250cm9sXHJcblx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRsZXQgY29sdW1uS2V5ID0gY29sdW1uWzBdO1xyXG5cdFx0XHRcdGlmICghKGNvbHVtbktleSBpbiBjb2xvcnNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChcIiMxMjM0NTZcIikpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0bGV0IGtleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdHR5cGVzQ29udHJvbC5hZGRDb250cm9sKGtleSwgbmV3IEZvcm1Db250cm9sKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG9ic2VyLm5leHQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZW5lcmF0ZURpYWdyYW0oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciB0ZW1wID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGVtcC5faWQgPSBcInRlbXBsYXRlX2lkXCI7XHJcblx0XHR0ZW1wLk5hbWUgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZS5OYW1lO1xyXG5cdFx0dGVtcC5Tb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdHRlbXAuQm94ID0ge1xyXG5cdFx0XHROdW1iZXJPZkNvbHVtbnM6IDEsXHJcblx0XHRcdE9yZGVyOiAxLFxyXG5cdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkJhY2tncm91bmRDb2xvclxyXG5cdFx0fTtcclxuXHRcdHRlbXAuV2lkZ2V0ID0ge1xyXG5cdFx0XHRib29sZWFubzogdGhpcy5mb3JtR3JvdXAudmFsdWUuYm9vbGVhbm9cclxuXHRcdH07XHJcblx0XHR0ZW1wLkNoYXJ0ID0ge1xyXG5cdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5mb3JtR3JvdXAudmFsdWUuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRjb2x1bW5zOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlLFxyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0dHlwZXM6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGVzLFxyXG5cdFx0XHRcdGNvbG9yczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdEZsb3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkZsb3csXHJcblx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkxlZ2VuZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRcdHNob3c6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlN1YmNoYXJ0XHJcblx0XHRcdH0sXHJcblx0XHRcdHpvb206IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ab29tXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRncm91cGVkOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Ub29sdGlwXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdG9vbHRpcDoge1xyXG5cdFx0XHQvLyAgICAgICAgIGZvcm1hdDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHRcdC8vIGNvbG9yOiB7XHJcblx0XHRcdC8vICAgICAgICAgcGF0dGVybjogWycjNjBCMDQ0JywgJyNGNkM2MDAnLCAnI0Y5NzYwMCcsICcjRkYwMDAwJ10sXHJcblx0XHRcdC8vICAgICAgICAgdGhyZXNob2xkOiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAvLyAgdW5pdDogJ3ZhbHVlJywgLy8gcGVyY2VudGFnZSBpcyBkZWZhdWx0XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZXM6IFszMCwgNjAsIDkwLCAxMDBdXHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0fTtcclxuXHRcdC8vIHRoaXMuY29tcG9uZW50TW9kZWwgPSB7XHJcblx0XHQvLyAgIGNvbXBvbmVudDogdGhpcy50eXBlTWFwVG9EaWFncmFtW3RlbXAuQ2hhcnQuZGF0YS50eXBlXSxcclxuXHRcdC8vICAgaW5wdXRzOiB7IGRhdGE6IHRlbXAgfVxyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5kaWFncmFtTW9kZWwgPSB0ZW1wO1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHR9XHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGlhZ3JhbURhdGEkIHwgYXN5bmNcIiBbc3R5bGUuY29sb3JdPVwiKGRpYWdyYW1EYXRhJCB8IGFzeW5jKT8uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYylcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBkaWFncmFtVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblxyXG5cdGRpYWdyYW1EYXRhJDogYW55O1xyXG5cdEBJbnB1dChcImlkXCIpIGRpYWdyYW1JZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kaWFncmFtRGF0YSQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0odGhpcy5kaWFncmFtSWQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtc1wiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1ncmlkLWxpc3QgY29scz1cIjEyXCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cclxuICA8bWF0LWdyaWQtdGlsZSAqbmdGb3I9XCJsZXQgZGlhZ3JhbSBvZiAoZGlhZ3JhbXMgfCBhc3luYyk/LlJlc3VsdFwiIFxyXG4gIFtjb2xzcGFuXT1cImRpYWdyYW0uQm94LkNvbHNcIiBcclxuICBbcm93c3Bhbl09XCJkaWFncmFtLkJveC5Sb3dzXCIgXHJcbiAgW3N0eWxlLmNvbG9yXT1cImRpYWdyYW0uQm94LkNvbG9yXCI+XHJcbiAgICA8ZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IgY2xhc3M9XCJkaWFncmFtLWJveFwiIFtkYXRhXT1cImRpYWdyYW1cIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvbWF0LWdyaWQtdGlsZT5cclxuPC9tYXQtZ3JpZC1saXN0PlxyXG48YnIgLz5cclxuPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuPC9kaXY+XHJcbjxkaXYgZnhMYXlvdXRBbGlnbj0nZW5kIGNlbnRlcic+XHJcbiAgPGJ1dHRvbiBtYXQtZmFiIHJvdXRlckxpbms9XCIuLi9kaWFncmFtcy9hZGRcIiBjbGFzcz1cImFkZC1idG5cIj5cclxuICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPmFkZDwvbWF0LWljb24+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uYWRkLWJ0bntwb3NpdGlvbjpmaXhlZDtib3R0b206NTBweDtsZWZ0OjI1cHg7ei1pbmRleDoxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGlhZ3JhbXM6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT47XHJcblx0d2lkdGggPSAxMDA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kaWFncmFtc1xyXG5cdFx0Ly8gICAgICAgICAuZGVsYXkoMTAwKVxyXG5cdFx0Ly8gICAgICAgICAuc3Vic2NyaWJlKGRpYWdyYW1zID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgZGlhZ3JhbXMuUmVzdWx0LmZvckVhY2goZGlhZ3JhbSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oZGlhZ3JhbS5DaGFydCwgZGlhZ3JhbS5faWQsIGRpYWdyYW0uU291cmNlLlJvdXRlLCBkaWFncmFtLlNvdXJjZS5TeW5jKSkpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2UuaW5pdFNvY2tldCgpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLnNlbmQoXCJhZGQtbWVzc2FnZVwiKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5vbk1lc3NhZ2UoKS5zdWJzY3JpYmUobXNnPT57XHJcblx0XHQvLyAgICAgICAgIGRlYnVnZ2VyXHJcblx0XHQvLyB9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvZWRpdC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tZWRpdFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiNDAwcHhcIj5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbicgKG5nU3VibWl0KT1cImFkZCgkZXZlbnQpXCI+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCosOYwq/DmMKxw5jCsyDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3V0ZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiPsOZwojDmMK2w5jCucObwozDmMKqPC9tYXQtY2hlY2tib3g+XHJcblxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGZ4RmxleD0nbm9ncm93JyBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9kaWFncmFtcyc+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9mb3JtPlxyXG48L21hdC1jYXJkPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gRWRpdERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+XHJcblx0KSB7XHJcblx0XHRsZXQgUm91dGUgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxuXHJcblx0YWRkKGV2ZW50KSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0RGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBNYXRTbGlkZXJDaGFuZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJvdmVyXCIgZnhsYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cInN0YXJ0XCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7dGltZSB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJlbmRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cIm1vZGVsSXNDb3JyZWN0IHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0gd2lkZ2V0XCIgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfW1hdC1zbGlkZXJ7d2lkdGg6MTAwJX0uZGF0YS10aW1le2RpcmVjdGlvbjpsdHI7dGV4dC1hbGlnbjpjZW50ZXJ9Lm92ZXJ7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDozNXB4O2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2UtaW4tb3V0fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHRtb2RlbElzQ29ycmVjdDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X21vZGVsOiBEaWFncmFtTW9kZWw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YSh2YWx1ZTogRGlhZ3JhbU1vZGVsKSB7XHJcblx0XHRpZiAoISh2YWx1ZS5DaGFydCAmJiB2YWx1ZS5faWQpKSByZXR1cm47XHJcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG5cdFx0dGhpcy5tb2RlbElzQ29ycmVjdC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbDtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNoYXJ0OiBhbnk7XHJcblx0dGltZTogbnVtYmVyO1xyXG5cdG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuZGF0YSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGF0YVwiKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0ZGlhZ3JhbUlkICYmXHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKGRpYWdyYW1JZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gSW50ZXJ2YWxPYnNlcnZhYmxlXHJcblx0XHQvLyAgICAgICAgIC8vIC5jcmVhdGUodGhpcy5tb2RlbC5Tb3VyY2UuU3luYylcclxuXHRcdC8vICAgICAgICAgLmNyZWF0ZSg5OTkpXHJcblx0XHQvLyAgICAgICAgIC5zd2l0Y2hNYXAoaSA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGF0YWAsIHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6ICcwJ1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIH0pXHJcblx0XHQvLyAgICAgICAgIClcclxuXHRcdC8vICAgICAgICAgLy8gLnN3aXRjaE1hcCgocmVzOiBhbnkpID0+IE9ic2VydmFibGUub2YocmVzLlJlc3VsdC5EYXRhKSlcclxuXHRcdC8vICAgICAgICAgLm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQuRGF0YSlcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QuZGVsYXkoMzAwKS5maWx0ZXIoZGF0YSA9PiBkYXRhKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHRcdC4uLnRoaXMuZGF0YS5DaGFydCxcclxuXHRcdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke3RoaXMuZGF0YS5faWR9YFxyXG5cdFx0XHRcdC8vIHNpemU6IHtcclxuXHRcdFx0XHQvLyAgICAgICAgIGhlaWdodDogMTUwXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpXHJcblx0XHRcdFx0LmZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWUgPSBkYXRhLlRpbWU7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRhLkNoYXJ0LkZsb3cpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5mbG93KHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxNTAwXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdFx0XHRjb2x1bW5zOiB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLkRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3NcclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZW5lcmF0ZURpYWdyYW0oXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuQ2hhcnQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuX2lkLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuU3luY1xyXG5cdFx0Ly8gKTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0dGltZUNoYW5nZShlOiBNYXRTbGlkZXJDaGFuZ2UpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIERhdGUubm93KCkgLSAoKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwpLCB0cnVlKVxyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwsIHRydWUpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBjb2x1bW5zID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC8vICAgICAgICAgLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHRcdFx0Ly8gICAgICAgICAubWFwKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBjb2x1bW5bMF0gKz0gJ19oaXN0b3JpYyc7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcblx0XHRcdFx0Ly8gICAgICAgICB9KTtcclxuXHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0SW5wdXQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE9uRGVzdHJveVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvclwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kQ29sb3JcIiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIHN0cmV0Y2hcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiMCAwIGF1dG9cIiAqbmdJZj1cIl9kYXRhXCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgPHNwYW4gZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiIGNsYXNzPVwid2lkZ2V0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgIHt7X2RhdGEuTmFtZX19XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgX2RhdGEuX2lkXVwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgZGlhZ3JhbVwiPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSA8bWF0LWNhcmQtY29udGVudD4gLS0+XHJcbiAgICA8IS0tIDxtYXQtc2xpZGVyIGludmVydCBbKG5nTW9kZWwpXT1cInRpbWVcIiAoY2hhbmdlKT1cInRpbWVDaGFuZ2UoJGV2ZW50KVwiPjwvbWF0LXNsaWRlcj4gLS0+XHJcbiAgICA8bWF0LXNsaWRlciBjbGFzcz1cIm92ZXJcIiBmeEZsZXg9XCIwIDAgYXV0b1wiIGludmVydCBtaW49JzEnIG1heD0nMTAwMCcgdmFsdWU9XCIxMDAwXCIgKGNoYW5nZSk9XCJ0aW1lQ2hhbmdlKCRldmVudClcIj48L21hdC1zbGlkZXI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjEgMSBhdXRvXCIgY2xhc3M9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiAjZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSA8L21hdC1jYXJkLWNvbnRlbnQ+IC0tPlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCU7bWFyZ2luOjEyLjVweH0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfS53aWRnZXQtdGl0bGV7Zm9udDoxLjNlbSBJUkFOU2Fucyx0YWhvbWF9Lm92ZXJ7dmlzaWJpbGl0eTpoaWRkZW47b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo2MHB4O2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGVhc2UtaW4tb3V0fWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHBpZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRsaW5lOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0YXJlYTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdG51bWVybzogTnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHR0ZW1wbzogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QFZpZXdDaGlsZChEaWFncmFtQ29tcG9uZW50KSB3aWRnZXRDb21wb25lbnQ6IERpYWdyYW1Db21wb25lbnQ7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHRsZXQgcmF3ID0geyBkYXRhIH07XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLkNoYXJ0LmRhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhyYXcpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiByYXdbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyA9IFwiXCI7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuX2NvbXBvbmVudC50aW1lQ2hhbmdlKGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE9uRGVzdHJveSxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGFyZWE6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRwaWU6IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0bGluZTogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRib29sZWFubzogQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0aWYgKCEoZGF0YS50eXBlIGluIHRoaXMudHlwZU1hcFRvRGlhZ3JhbSkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkgdGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogZGF0YS5pbnB1dHNbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblx0XHRpZiAoKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkKVxyXG5cdFx0XHQoPGFueT5jb21wb25lbnQuaW5zdGFuY2UpLkNvbmZpZ0NoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc1N1Y2NlZWQsIEdldERpYWdyYW1zRmFpbGVkLCBHZXREaWFncmFtc1N0YXJ0IH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERpYWdyYW1SZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKCkucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEdldERpYWdyYW1zU3RhcnQoKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEdldERpYWdyYW1zQXBpTW9kZWwuUmVxdWVzdCkgPT5cclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlXHJcblx0XHRcdFx0XHQuZ2V0RGlhZ3JhbXMoKVxyXG5cdFx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRcdG1hcChyZXMgPT4gbmV3IEdldERpYWdyYW1zU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBHZXREaWFncmFtc0ZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRBZGREaWFncmFtQWN0aW9uVHlwZXMsXHJcblx0QWRkRGlhZ3JhbUFjdGlvblN0YXJ0LFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25GYWlsZWQsXHJcblx0RGF0YUxvYWRlZEFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24sXHJcblx0R2VuZXJhdGVEaWFncmFtQWN0aW9uLFxyXG5cdFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0LmFkZERpYWdyYW0oZGF0YSlcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBBZGREaWFncmFtQWN0aW9uRmFpbGVkKCkpKVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0QUREX0RJQUdSQU1fU1VDQ0VFRCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRCkucGlwZShcclxuXHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0bWFwKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiZGlhZ3JhbXNcIiBdKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0SEFWRV9FTkRQT0lOVCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5IQVZFX0VORFBPSU5UKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBEYXRhTG9hZGVkQWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERBVEFfTE9BREVEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5ESUFHUkFNX0NPTkZJR19DSEFOR0VEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcChkYXRhID0+IGRhdGEuZ2V0RGF0YVN0cnVjdHVyZSgpLm1hcCgoKSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uKGRhdGEpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTlNfTUFQUElOR19DSEFOR0VEKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EKVxyXG5cdFx0Ly8gLnNraXBVbnRpbCh0aGlzLmFjdGlvbnMkLm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9MT0FERUQpKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmNhbGN1bGF0ZUNvbHVtbnMoKS5tYXAoKCkgPT4gbmV3IEdlbmVyYXRlRGlhZ3JhbUFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0R2VuZXJhdGVEaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gZGF0YS5nZW5lcmF0ZURpYWdyYW0oKSkpO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci9kaWFncmFtLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtcy9kaWFncmFtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImRpYWdyYW1zXCIsXHJcblx0XHRjb21wb25lbnQ6IERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IERpYWdyYW1zQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImFkZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQWRkRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJlZGl0LzppZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQWRkRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJudW1lcm9cIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IE51bWVyaWNEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcInRlbXBvXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiYm9vbGVhbm9cIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IElHcmlkSXRlbUNvbXBvbmVudCB9IGZyb20gXCJAc291c2hpYW5zL2dyaWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiRGlhZ3JhbXNcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRGlhZ3JhbUlkXCIgbmFtZT1cInNlbGVjdGVkRGlhZ3JhbUlkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGRpYWdyYW1zJCB8IGFzeW5jKVwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPlxyXG4gICAge3tpdGVtLl9pZH19XHJcbiAgPC9tYXQtb3B0aW9uPlxyXG48L21hdC1zZWxlY3Q+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJR3JpZEl0ZW1Db21wb25lbnQ8eyBkaWFncmFtSWQ6IHN0cmluZyB9PiB7XHJcblx0ZGlhZ3JhbXMkOiBPYnNlcnZhYmxlPERpYWdyYW1Nb2RlbFtdPjtcclxuXHRzZWxlY3RlZERpYWdyYW1JZDogc3RyaW5nO1xyXG5cdGdldCB2YWxpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5kaWFncmFtSWQgIT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGlhZ3JhbUlkOiB0aGlzLnNlbGVjdGVkRGlhZ3JhbUlkXHJcblx0XHR9O1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCkucGlwZShtYXAocmVzID0+IHJlcy5SZXN1bHQpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdEdyaWRMaXN0TW9kdWxlLFxyXG5cdE1hdFNsaWRlck1vZHVsZSxcclxuXHRNYXRBdXRvY29tcGxldGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOIH0gZnJvbSBcIi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1SZWR1Y2VycyB9IGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnL251bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWVkaXQtZGlhZ3JhbS9udW1lcmljLWVkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci9kaWFncmFtLW1vZHVsZS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERhdGFNYXBwZXJDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvYWRkLWRpYWdyYW0vYWRkLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IGRpYWdyYW1WaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9lZGl0LWRpYWdyYW0vZWRpdC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtL2RpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9kaWFncmFtcy5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1FZmZlY3RzIH0gZnJvbSBcIi4vZWZmZWN0cy9hZGQtZGlhZ3JhbS5lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlLFxyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdFx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0XHRNYXRJY29uTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdFNsaWRlck1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0VG9vbHRpcE1vZHVsZSxcclxuXHRcdE1hdEdyaWRMaXN0TW9kdWxlLFxyXG5cdFx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEFkZERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtc0NvbXBvbmVudCxcclxuXHRcdGRpYWdyYW1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RWRpdERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdERhdGFNYXBwZXJDb21wb25lbnQsXHJcblx0XHROdW1lcmljRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHREaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHREaWFncmFtU2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogWyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQsIGRpYWdyYW1WaWV3Q29tcG9uZW50IF0sXHJcblx0ZXhwb3J0czogWyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgXSxcclxuXHRwcm92aWRlcnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NEaWFncmFtTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBEaWFncmFtTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0RpYWdyYW1Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImRpYWdyYW1cIiwgRGlhZ3JhbVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIERpYWdyYW1FZmZlY3RzLCBBZGREaWFncmFtRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRGlhZ3JhbU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRGlhZ3JhbU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJpbml0aWFsU3RhdGUiLCJEaWFncmFtc1JlZHVjZXIuZGlhZ3JhbVJlZHVjZXIiLCJmcm9tRWRpdERpYWdyYW0uUmVkdWNlciIsInBhcmVudEd1YXJkUmVkdWNlci5QYXJlbnRHdWFyZFJlZHVjZXIiLCJjcmVhdGVGZWF0dXJlU2VsZWN0b3IiLCJjcmVhdGVTZWxlY3RvciIsIkJlaGF2aW9yU3ViamVjdCIsIkNvbXBvbmVudCIsIkluamVjdG9yIiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiRm9ybUFycmF5IiwiT2JzZXJ2YWJsZSIsIkh0dHBDbGllbnQiLCJTdG9yZSIsIkZvcm1CdWlsZGVyIiwiQWN0aXZhdGVkUm91dGUiLCJSZWZsZWN0aXZlSW5qZWN0b3IiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwicm91dGVyIiwibWFwIiwic3dpdGNoTWFwIiwiY2F0Y2hFcnJvciIsIkFjdGlvbnMiLCJSb3V0ZXIiLCJFZmZlY3QiLCJSb3V0ZXJNb2R1bGUiLCJOZ01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRTbGlkZXJNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJNYXRHcmlkTGlzdE1vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJCcm93c2VyQW5pbWF0aW9uc01vZHVsZSIsIlN0b3JlTW9kdWxlIiwiRWZmZWN0c01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBU08scUJBQU0scUJBQXFCLEdBQXdCO1FBQ3pELFNBQVMsRUFBRSxFQUFFO1FBQ2IsR0FBRyxFQUFFO1lBQ0osVUFBVSxFQUFFLEtBQUs7U0FDakI7S0FDRCxDQUFDO0FBRUYseUJBQWEs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
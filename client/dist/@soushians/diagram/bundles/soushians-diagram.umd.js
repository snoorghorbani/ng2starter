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
            production: false,
            frontend_server: "frontend/server/did/not/set"
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
                    .get(this.config.env.frontend_server + '/api/diagram')
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
                    .get(this.config.env.frontend_server + '/api/source')
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
                    .get(this.config.env.frontend_server + '/api/diagram/groups')
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
                return this.http
                    .get(this.config.env.frontend_server + ("/api/diagram/" + id))
                    .map(function (response) { return response; })
                    .catch(function (err) {
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
                    .post(this.config.env.frontend_server + '/api/diagram', model.getRequestBody())
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
                return this.http
                    .put(this.config.env.frontend_server + '/api/diagram', body)
                    .map(function (response) { return response; })
                    .catch(function (err) {
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
                return this.http
                    .delete(this.config.env.frontend_server + "/api/diagram/" + id)
                    .map(function (response) { return response; })
                    .catch(function (err) {
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
                    return Rx.Observable.timer(0, source.Interval).switchMap(function (i) {
                        return _this.http
                            .get(_this.config.env.frontend_server + "/api/data", {
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
                        return res.push([item.ValuePath.split('.').pop()].concat(ValueData));
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
                        providedIn: 'root'
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
                        template: "<mat-card class=\"diagram-box\" [style.background]=\"backgroundColor\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n    <div fxFlex=\"0 0 auto\" *ngIf=\"_data\" fxLayoutAlign=\"space-between center\">\n        <span fxLayoutAlign=\"start center\" class=\"widget-title\">\n            {{_data.Name}}\n        </span>\n        <a [routerLink]=\"['../diagrams/edit' ,  _data._id]\" fxLayoutAlign=\"center center\" mat-icon-button color=\"primary\">\n            <mat-icon aria-label=\"edit diagram\">edit</mat-icon>\n        </a>\n    </div>\n    <!-- <mat-card-content> -->\n    <!-- <mat-slider invert [(ngModel)]=\"time\" (change)=\"timeChange($event)\"></mat-slider> -->\n    <mat-slider class=\"over\" fxFlex=\"0 0 auto\" invert min='1' max='1000' value=\"1000\" (change)=\"timeChange($event)\"></mat-slider>\n    <div fxFlex=\"1 1 auto\" class=\"widget-container\">\n        <div #dynamicComponentContainer></div>\n    </div>\n    <!-- </mat-card-content> -->\n</mat-card>",
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
    exports.ɵa = MODULE_CONFIG_TOKEN;
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
    exports.ɵe = DiagramConfigurationService;
    exports.ɵc = DiagramService;
    exports.ɵb = AddDiagramComponent;
    exports.ɵs = DataMapperComponent;
    exports.ɵr = DiagramModuleContainerComponent;
    exports.ɵm = DiagramComponent;
    exports.ɵf = DiagramsComponent;
    exports.ɵn = DynamicComponentSelectorComponent;
    exports.ɵh = DynamicConfigComponentSelectorComponent;
    exports.ɵg = EditDiagramComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2RpYWdyYW0uY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZGlhZ3JhbS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXREaWFncmFtc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRkaWFncmFtOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHQvLyByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHQvLyAgIGRpYWdyYW06IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdC8vIH0pXHJcblx0XHQvL31cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpYWdyYW1zQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9ESUFHUkFNID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1cIixcclxuXHRHRVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0R0VUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRHRVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaWFncmFtc0FjdGlvbiA9IEdldERpYWdyYW1zIHwgR2V0RGlhZ3JhbXNTdGFydCB8IEdldERpYWdyYW1zU3VjY2VlZCB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQWN0aW9uVHlwZXMsIERpYWdyYW1zQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coR2V0RGlhZ3JhbXNBcGlNb2RlbCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGlhZ3JhbTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2FkZWQ6IGZhbHNlLFxyXG5cdGRpYWdyYW06IHtcclxuXHRcdFJlc3VsdDogW11cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZ3JhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGlhZ3JhbXNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyAgZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtO1xyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBSZXF1ZXN0KSB7fVxyXG5cdFx0Z2V0UmVxdWVzdFF1ZXJ5UGFyYW1zKCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0RJQUdSQU0gPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1cIixcclxuXHRFRElUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1RBUlRcIixcclxuXHRFRElUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RURJVF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uVHlwZXMsIEVkaXREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhFZGl0RGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH0gYXMgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0RGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgUGFyZW50R3VhcmRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9wYXJlbnQtZ3VhcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0cm91dGU6IHN0cmluZztcclxuXHRyZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0cm91dGU6IFwiXCIsXHJcblx0cmVzdWx0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcmVudEd1YXJkUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQYXJlbnRHdWFyZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0UGFyZW50Um91dGluZ0d1YXJkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIERpYWdyYW1zUmVkdWNlciBmcm9tIFwiLi9kaWFncmFtcy5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21FZGl0RGlhZ3JhbSBmcm9tIFwiLi9lZGl0LWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBwYXJlbnRHdWFyZFJlZHVjZXIgZnJvbSBcIi4vcGFyZW50LWd1YXJkLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ3JhbVN0YXRlIHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLlN0YXRlO1xyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uU3RhdGU7XHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1SZWR1Y2VycyA9IHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyLFxyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uUmVkdWNlcixcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZGlhZ3JhbVwiOiBEaWFncmFtU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGlhZ3JhbVN0YXRlPihcImRpYWdyYW1cIik7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGlhZ3JhbUluZm9ybWF0aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgc2VsZWN0RmVhdHVyZVN0YXRlLFxyXG4vLyAgIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtXHJcbi8vICk7XHJcblxyXG4vLyNyZWdpb24gZWRpdCBkaWFncmFtXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFZGl0RGlhZ3JhbVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZWRpdERpYWdyYW0pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLXN0YXR1c1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1pY29uIFtuZ0NsYXNzXT1cImRhdGFTdGF0dXMkID8gJ2Nvbm5lY3RlZCcgOiAnZGlzY29ubmVjdGVkJ1wiPlxyXG4gICAgZmliZXJfbWFudWFsX3JlY29yZFxyXG4gIDwvbWF0LWljb24+IC0tPlxyXG4gIDwhLS0gPHNwYW4gKm5nSWY9XCJkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uU3VjY2Vzc01lc3NhZ2V9fTwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cIiFkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uRmFpbHVyZU1lc3NhZ2V9fTwvc3Bhbj4gLS0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5kaXNjb25uZWN0ZWR7Y29sb3I6I2JhMzAzMH0uY29ubmVjdGVke2NvbG9yOiMzMGFlMWN9Lm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuX2lkLCB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyXHJcblx0XHQvLyAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgfSk7XHJcblx0XHQvLyAgIH0pXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJab29tXCIgZnhGbGV4RmlsbD7DmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlN1YmNoYXJ0XCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwowgw5jCr8OYwrEgw5jCssObwozDmMKxIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqiDDmMKow5nChyDDmMK1w5nCiMOYwrHDmMKqIMOawq/DmMKxw5nCiMOZwofDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGllLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImRvbnV0Rm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRkb251dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5kb251dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRvbnV0IGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJib29sZWFub0Zvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIlN1Y2Nlc3NNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIkZhaWx1cmVNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGJvb2xlYW5vRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5ib29sZWFub0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmJvb2xlYW5vIGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGRvbnV0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0XHR0aGlzLmRvbnV0Rm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZG9udXQgYXMgRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPsOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjCDDmMKvw5jCsSDDmMKyw5vCjMOYwrEgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqIMOYwqjDmcKHIMOYwrXDmcKIw5jCscOYwqogw5rCr8OYwrHDmcKIw5nCh8Obwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkZsb3dcIiBmeEZsZXhGaWxsPkZsb3c8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1jb25uZWN0aW5nLXRpbWVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljIHRpdGxlXCI+e3tkYXRhLkRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e3RpbWUgfCB0aW1lQ291bnRlcn19PC9kaXY+IC0tPlxyXG4gIDxkaXYgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AubnVtZXJpY3tmb250LXNpemU6Mi40ZW07bGluZS1oZWlnaHQ6MS44fS5udW1lcmljLnRpdGxle2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYTtmb250LXNpemU6MS4xZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgdGltZTogbnVtYmVyID0gMDtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyAxO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlLCB0aGlzLmRhdGEuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSk7XHJcblx0XHQvLyAgICAgICAgIH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IERpYWdyYW1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZykge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdElzQWN0aXZlOiBCb29sZWFuO1xyXG5cdFx0VHlwZTogc3RyaW5nO1xyXG5cdFx0VHlwZXM6IHsgW2NvbHVtbkxhYmVsOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRcdExlZ2VuZDogQm9vbGVhbjtcclxuXHRcdFN1YmNoYXJ0OiBCb29sZWFuO1xyXG5cdFx0Wm9vbTogQm9vbGVhbjtcclxuXHRcdFRvb2x0aXA6IEJvb2xlYW47XHJcblx0XHRSb3V0ZTogc3RyaW5nO1xyXG5cdFx0U3luYzogbnVtYmVyO1xyXG5cdFx0Q29sb3JzOiBzdHJpbmdbXTtcclxuXHRcdENvbHVtbk1hcHBpbmdzOiB7IE5hbWVQYXRoOiBzdHJpbmc7IFZhbHVlUGF0aDogc3RyaW5nIH1bXTtcclxuXHRcdEZsb3c6IHN0cmluZztcclxuXHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0Q29sczogbnVtYmVyO1xyXG5cdFx0Um93czogbnVtYmVyO1xyXG5cdFx0VGV4dENvbG9yOiBTdHJpbmc7XHJcblx0XHRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRcdGJvb2xlYW5vOiBhbnk7XHJcblx0XHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHROYW1lOiB0aGlzLk5hbWUsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0U291cmNlOiB0aGlzLlNvdXJjZSxcclxuXHRcdFx0XHRUeXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0R3JvdXBzOiB0aGlzLkdyb3VwcyxcclxuXHRcdFx0XHRXaWRnZXQ6IHtcclxuXHRcdFx0XHRcdGJvb2xlYW5vOiB0aGlzLmJvb2xlYW5vXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRDaGFydDoge1xyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiB0aGlzLkNvbG9ycyxcclxuXHRcdFx0XHRcdFx0dHlwZXM6IHRoaXMuVHlwZXNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdEZsb3c6IHRoaXMuRmxvdyxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLkxlZ2VuZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuU3ViY2hhcnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuWm9vbVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRcdFx0Z3JvdXBlZDogdGhpcy5Ub29sdGlwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRCb3g6IHtcclxuXHRcdFx0XHRcdENvbHM6IHRoaXMuQ29scyxcclxuXHRcdFx0XHRcdFJvd3M6IHRoaXMuUm93cyxcclxuXHRcdFx0XHRcdFRleHRDb2xvcjogdGhpcy5UZXh0Q29sb3IsXHJcblx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuQmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW10pLFxyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3luYzogbmV3IEZvcm1Db250cm9sKDAsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFwicGllXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRHcm91cHM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TGVnZW5kOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTdWJjaGFydDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFpvb206IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUb29sdGlwOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U291cmNlOiBuZXcgRm9ybUNvbnRyb2woe30sIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRjb2x1bW5zOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbHM6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um93czogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUZXh0Q29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiMwMDAwMDBcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEJhY2tncm91bmRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiI2ZmZmZmZlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sb3JzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRUeXBlczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IG5ldyBGb3JtQXJyYXkoW10pLFxyXG5cdFx0XHRcdEZsb3c6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0XHRkb251dDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiRGVmYXVsdCBUaXRsZVwiKVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGJvb2xlYW5vOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFN1Y2Nlc3NNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJTdWNjZXNzTWVzc2FnZVwiKSxcclxuXHRcdFx0XHRcdEZhaWx1cmVNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJGYWlsdXJlTWVzc2FnZVwiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9kaWFncmFtLWNvbmZpZ3VyYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gJy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsJztcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvc291cmNlLm1vZGVsJztcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbCc7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb25maWcgfSBmcm9tICcuLi9kaWFncmFtLmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBfOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VydmljZSB7XHJcblx0Y29uZmlnOiBEaWFncmFtTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZztcclxuXHR9XHJcblxyXG5cdGdldERpYWdyYW1zKCk6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyAnL2FwaS9kaWFncmFtJylcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRTb3VyY2VzKCk6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyAnL2FwaS9zb3VyY2UnKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlIGFzIGFueSkuUmVzdWx0KVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRnZXRHcm91cHMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyAnL2FwaS9kaWFncmFtL2dyb3VwcycpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoIWlkKSBkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgYC9hcGkvZGlhZ3JhbS8ke2lkfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0YWRkRGlhZ3JhbShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdDxBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyAnL2FwaS9kaWFncmFtJywgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxyXG5cdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHR1cGRhdGVEaWFncmFtKGJvZHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArICcvYXBpL2RpYWdyYW0nLCBib2R5KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZURpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5kZWxldGUoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdGltZTogbnVtYmVyID0gMCwgb25jZTogQm9vbGVhbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGlmIChvbmNlICYmIHRpbWUgIT09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IHRoaXMuZ2V0Rmxvb3JUaW1lKHNvdXJjZS5JbnRlcnZhbCwgdGltZSkudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIGlmIChzb3VyY2UuSW50ZXJ2YWwgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvZGF0YWAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0dGltZTogbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGltZSA9IHRpbWUgfHwgRGF0ZS5ub3coKTtcclxuXHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGltZXIoMCwgc291cmNlLkludGVydmFsKS5zd2l0Y2hNYXAoKGkpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwXHJcblx0XHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VJZDogc291cmNlLl9pZCxcclxuXHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGE6IGFueSwgY29sdW1uc01hcHBpbmdzKSB7XHJcblx0XHRsZXQgcmVzID0gW107XHJcblxyXG5cdFx0Y29sdW1uc01hcHBpbmdzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0dmFyIFZhbHVlRGF0YSA9IF8uZ2V0VmFsdWUoZGF0YSwgaXRlbS5WYWx1ZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKCFpdGVtLk5hbWVQYXRoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFsgaXRlbS5WYWx1ZVBhdGguc3BsaXQoJy4nKS5wb3AoKSBdLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgTmFtZURhdGEgPSBfLmdldFZhbHVlKGRhdGEsIGl0ZW0uTmFtZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKF8uaXMuYXJyYXkoTmFtZURhdGEpKSB7XHJcblx0XHRcdFx0cmV0dXJuIChyZXMgPSByZXMuY29uY2F0KE5hbWVEYXRhLm1hcCgoaXRlbSwgaSkgPT4gWyBpdGVtIF0uY29uY2F0KFZhbHVlRGF0YVtpXSkpKSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFsgTmFtZURhdGEgXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Z2V0X2RhdGFfcmVwb3J0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIF8ucmVwb3J0KGRhdGEpO1xyXG5cdH1cclxuXHRnZXRfbGFzdF9ub2RlX29mX2RhdGEoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gKF8ucmVwb3J0KGRhdGEpIGFzIGFueVtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXNMYXN0Tm9kZSk7XHJcblx0fVxyXG5cdGJ1aWxkQ2hhcnRDb25maWcoY29sdW1ucykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnNcclxuXHRcdFx0fSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHQvLyBUT0RPOiBpbXBsZW1lbnQgaW50ZXJmYWNlIG9mIGMzIGNvbmZpZ1xyXG5cdGNoYXJ0cyA9IHt9O1xyXG5cdGdlbmVyYXRlRGlhZ3JhbShjb25maWc6IGFueSwgaWQ6IHN0cmluZywgcm91dGU6IHN0cmluZywgc3luYzogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuXHRcdHRoaXMuY2hhcnRzW2lkXSA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0Li4uY29uZmlnLFxyXG5cdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke2lkfWBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoe30gYXMgU291cmNlTW9kZWwsIHN5bmMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0c1tpZF0ubG9hZCh7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgY29uZmlnLkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRGbG9vclRpbWUocHJlY2lzaW9uID0gNjAgKiAxMDAwLCB0aW1lOiBudW1iZXIgPSAwKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGltZSB8fCBEYXRlLm5vdygpKSAvIHByZWNpc2lvbik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtZWRpdC1kaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLW51bWVyaWNcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e2RhdGEuU291cmNlLkRhdGEgfCBqc29ufX08L2Rpdj4gLS0+XHJcbiAgPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7Y291bnRlcn19PC9kaXY+XHJcbiAgPGRpdiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX0ubWF0LWNhcmR7cGFkZGluZzowfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0Y291bnRlcjogbnVtYmVyO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0dGhpcy5jb3VudGVyID0gMDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0bGV0IGNvdW50ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXIgPSBjb3VudGVyWzBdWzFdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuLy8gaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnYXBwL21vZGVscy9hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbi8vIGltcG9ydCAqIGFzIGFwcFJlZHVjZXIgZnJvbSAnYXBwL3JlZHVjZXJzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbW9kdWxlLWNvbnRhaW5lclwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeGZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L2Rpdj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIF86IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRhdGEtbWFwcGVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICA8Yj5cclxuICAgICAgICAgICAgS2V5XHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBUeXBlXHJcbiAgICAgICAgPC9iPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFSZXBvcnRcIiBbY2xhc3NdPVwiJ2RlcHRzXycgKyBpdGVtLmRlcHRzXCIgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICB7e2l0ZW0udHlwZX19XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYG1hdC1yYWRpby1idXR0b257d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrfWRpdi5kZXB0c18ye21hcmdpbi1yaWdodDoyNXB4fWRpdi5kZXB0c18ze21hcmdpbi1yaWdodDo1MHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRhTWFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBkZXN0aW5hdGlvbjogc3RyaW5nO1xyXG5cdF9kYXRhOiBhbnk7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdHRoaXMuZGF0YVJlcG9ydCA9IF8ucmVwb3J0KGRhdGEpO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0fVxyXG5cdGRhdGFSZXBvcnQ6IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT4pIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuL3NvdXJjZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0TmFtZTogc3RyaW5nO1xyXG5cdElzQWN0aXZlOiBib29sZWFuO1xyXG5cdERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRCb3g6IHtcclxuXHRcdE51bWJlck9mQ29sdW1uczogbnVtYmVyO1xyXG5cdFx0T3JkZXI6IG51bWJlcjtcclxuXHRcdEJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cdH07XHJcblx0U291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRXaWRnZXQ6IHtcclxuXHRcdFwiYm9vbGVhbm9cIjoge1xyXG5cdFx0XHRcIlN1Y2Nlc3NNZXNzYWdlXCI6IHN0cmluZztcclxuXHRcdFx0XCJGYWlsdXJlTWVzc2FnZVwiOiBzdHJpbmc7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdENoYXJ0OiB7XHJcblx0XHRkYXRhOiB7XHJcblx0XHRcdHR5cGU6IFwicGllXCIgfCBcImxpbmVhclwiIHwgXCJzY2F0dGVyXCIgfCBcImJhclwiIHwgXCJsaW5lXCI7XHJcblx0XHRcdHR5cGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdFx0XHRjb2x1bW5zOiBhbnlbXTtcclxuXHRcdFx0Y29sb3JzOiBhbnlbXTtcclxuXHRcdH07XHJcblx0XHRGbG93OiBib29sZWFuO1xyXG5cdFx0Q29sdW1uTWFwcGluZ3M6IHtcclxuXHRcdFx0TmFtZVBhdGg6IHN0cmluZztcclxuXHRcdFx0VmFsdWVQYXRoOiBzdHJpbmc7XHJcblx0XHR9W107XHJcblx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0c2hvdzogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHRzdWJjaGFydDoge1xyXG5cdFx0XHRzaG93OiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHpvb206IHtcclxuXHRcdFx0ZW5hYmxlZDogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0XHR0b29sdGlwOiB7XHJcblx0XHRcdGdyb3VwZWQ6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRBRERfRElBR1JBTSA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1cIixcclxuXHRBRERfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fU1RBUlRcIixcclxuXHRBRERfRElBR1JBTV9TVUNDRUVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RElBR1JBTV9DT05GSUdfQ0hBTkdFRCA9IFwiW0RJQUdSQU1dW0FERF0gRElBR1JBTV9DT05GSUdfQ0hBTkdFRFwiLFxyXG5cdEFERF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0FERF0gQUREX0RJQUdSQU1fRkFJTEVEXCIsXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUXCIsXHJcblx0SEFWRV9FTkRQT0lOVCA9IFwiW0RJQUdSQU1dW0FERF0gSEFWRV9TVFJVQ1RVUkVcIixcclxuXHREQVRBX0xPQURFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9MT0FERURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9FTkQgPSBcIltESUFHUkFNXVtBRERdIFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORFwiLFxyXG5cdENPTFVNTlNfTUFQUElOR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRFwiLFxyXG5cdERBVEFfQ0FMQ1VMQVRFRCA9IFwiW0RJQUdSQU1dW0FERF0gREFUQV9DQUxDVUxBVEVEXCIsXHJcblx0Q09MVU1OX0FEREVEID0gXCJbRElBR1JBTV1bQUREXSBDT0xVTU5fQURERURcIixcclxuXHRHRU5FUkFURV9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBHRU5FUkFURV9ESUFHUkFNXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBBZGREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2UpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTV9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRJQUdSQU1fQ09ORklHX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgSGF2ZUVuZHBvaW50QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkhBVkVfRU5EUE9JTlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUxvYWRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkZpbmlzaGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQ09MVU1OU19NQVBQSU5HX0NIQU5HRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRGF0YUNhbGN1bGF0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuREFUQV9DQUxDVUxBVEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5BZGRlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5fQURERUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25cclxuXHR8IEFkZERpYWdyYW1BY3Rpb25TdGFydFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEFkZERpYWdyYW1BY3Rpb25GYWlsZWRcclxuXHR8IEhhdmVFbmRwb2ludEFjdGlvblxyXG5cdHwgRGF0YUxvYWRlZEFjdGlvblxyXG5cdHwgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxuXHR8IENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvblxyXG5cdHwgRGF0YUNhbGN1bGF0ZWRBY3Rpb25cclxuXHR8IEdlbmVyYXRlRGlhZ3JhbUFjdGlvblxyXG5cdHwgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgUm91dGUsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9TdWJzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCJyeGpzL29wZXJhdG9yL3B1Ymxpc2hcIjtcclxuaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuZGVjbGFyZSB2YXIgYzM6IGFueTtcclxuXHJcbmltcG9ydCB7IGFkZERpYWdyYW1SZWR1Y2VyIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL2FkZC1kaWFncmFtLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zb3VyY2UubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRIYXZlRW5kcG9pbnRBY3Rpb24sXHJcblx0Q29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uLFxyXG5cdERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25cclxufSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWFkZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjYwXCI+XHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJTb3VyY2VcIiAoY2hhbmdlKT1cInJvdXRlRW50ZXJlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5FbmRwb2ludH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInN5bmMgdGltZVwiIGZvcm1Db250cm9sTmFtZT1cIlN5bmNcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD7DmcKGw5nCiMOYwrkgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcm91cHNcIiBmb3JtQ29udHJvbE5hbWU9XCJHcm91cHNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAge3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlID8gZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZVswXSA6ICcnfX1cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAoK3t7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZS5sZW5ndGggLSAxfX0gb3RoZXJzKVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAoQ29uZmlnQ2hhbmdlZCk9XCJjb25maWdDaGFuZ2VkKClcIiBbZGF0YV09XCJkaWFncmFtUGFydGlhbENvbmZpZ1wiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBpZD1cIm1vZGlmeS1kaWFncmFtXCIgZnhGbGV4PVwiNDBcIiBbZGF0YV09XCJkaWFncmFtTW9kZWxcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT4gw5jCs8OYwqfDmMKuw5jCqsOYwqfDmMKxIMOYwq/Dm8KMw5jCqsOYwqcgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmcKGw5rCr8OYwqfDmMK0w5jCqiDDmMKvw5jCp8OYwq/DmcKHPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNNYXBwaW5nczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbHVtbnNNYXBwaW5nc1tpXVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI1MFwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjUwXCIgZnhGbGV4LnhzPVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChcOZwoLDmMKvw5jCp8OYwrEgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlZhbHVlUGF0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlQ29sdW1uKGkpXCIgZnhGbGV4IG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOZwr7DmMKnw5rCqSDDmsKpw5jCscOYwq/DmcKGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5jCs8OYwqrDmcKIw5nChjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjI1XCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOZwobDmMKqw5jCp8ObwozDmMKsIMOYwq/DmMKnw5jCr8OZwocgw5nCh8OYwqc8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWU7IGxldCBpPWluZGV4XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbVswXX19IDoge3tpdGVtWzFdfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9yc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuQ29sb3JzKS5jb250cm9sc1tpdGVtWzBdXVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrHDmcKGw5rCryDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5UeXBlc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuVHlwZXMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiA+IC0tPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwidGlwb1wiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmMK4w5jCp8OZwofDmMKxw5vCjDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMK3w5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbHNcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMKqw5nCiMOZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3dzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+w5jCscOZwobDmsKvIMOZwoXDmMKqw5nChiA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUZXh0Q29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGZ4RmxleD1cIjUwXCI+w5jCscOZwobDmsKvIMOZwr7DmMKzIMOYwrLDmcKFw5vCjMOZwobDmcKHIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJCYWNrZ3JvdW5kQ29sb3JcIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkKCRldmVudClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PSdub2dyb3cnIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2RpYWdyYW1zJz7DmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgI2NoYXJ0e3dpZHRoOjMwMHB4O2RpcmVjdGlvbjpsdHJ9LmZvcm0tZWxlbWVudC1tYXJnaW57bWFyZ2luOjVweCAxMHB4fS5pdGVtLW1hcmdpbnttYXJnaW46MTBweCAwO2Rpc3BsYXk6YmxvY2t9bWF0LW9wdGlvbi5kZXB0aF8ye3BhZGRpbmctcmlnaHQ6MzBweH1tYXQtb3B0aW9uLmRlcHRoXzN7cGFkZGluZy1yaWdodDo1MHB4fW1hdC1vcHRpb24uZGVwdGhfNHtwYWRkaW5nLXJpZ2h0OjcwcHh9Lm1hdC1jYXJke21hcmdpbjoxMi41cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0ZGF0YTogYW55O1xyXG5cdGNvbHVtbnM6IGFueTtcclxuXHRjaGFydDtcclxuXHRkaWFncmFtVHlwZXM6IHN0cmluZ1tdO1xyXG5cdHBhdGhPcHRpb25zOiB7XHJcblx0XHRwYXRoOiBzdHJpbmc7XHJcblx0XHRuYW1lOiBzdHJpbmc7XHJcblx0XHR0eXBlOiBzdHJpbmc7XHJcblx0XHRjb2xvcjogc3RyaW5nO1xyXG5cdH1bXTtcclxuXHRjb2x1bW5zTWFwcGluZ3M6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkaWFncmFtTW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRjb21wb25lbnRNb2RlbDogeyBjb21wb25lbnQ6IGFueTsgaW5wdXRzOiBvYmplY3QgfTtcclxuXHR0eXBlTWFwVG9EaWFncmFtOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfTtcclxuXHRkaWFncmFtUGFydGlhbENvbmZpZzogeyB0eXBlOiBzdHJpbmc7IGlucHV0czogeyBmb3JtR3JvdXA6IEZvcm1Hcm91cDsgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlIH0gfTtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdGdyb3VwczogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblx0c291cmNlOiBTb3VyY2VNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuXHQpIHtcclxuXHRcdHRoaXMuc291cmNlcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0U291cmNlcygpO1xyXG5cdFx0dGhpcy5ncm91cHMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldEdyb3VwcygpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtTW9kZWwgPSBuZXcgRGlhZ3JhbU1vZGVsKCk7XHJcblx0XHR0aGlzLmNvbHVtbnNNYXBwaW5ncyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHROYW1lOiBkYXRhLk5hbWUsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRHcm91cHM6IGRhdGEuR3JvdXBzLFxyXG5cdFx0XHRcdFx0XHRUeXBlOiBkYXRhLkNoYXJ0LmRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0TGVnZW5kOiBkYXRhLkNoYXJ0LmxlZ2VuZC5zaG93LFxyXG5cdFx0XHRcdFx0XHRTdWJjaGFydDogZGF0YS5DaGFydC5zdWJjaGFydC5zaG93LFxyXG5cdFx0XHRcdFx0XHRab29tOiBkYXRhLkNoYXJ0Lnpvb20uZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0VG9vbHRpcDogZGF0YS5DaGFydC50b29sdGlwLmdyb3VwZWQsXHJcblx0XHRcdFx0XHRcdFN5bmM6IGRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRTb3VyY2U6IGRhdGEuU291cmNlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLkNoYXJ0LmRhdGEuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRcdENvbHM6IGRhdGEuQm94LkNvbHMsXHJcblx0XHRcdFx0XHRcdEZsb3c6IGRhdGEuQ2hhcnQuRmxvdyxcclxuXHRcdFx0XHRcdFx0Um93czogZGF0YS5Cb3guUm93cyxcclxuXHRcdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0XHRcdFRleHRDb2xvcjogZGF0YS5Cb3guVGV4dENvbG9yXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnMgfHwge30pLmZvckVhY2goY29sdW1uS2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEuY29sb3JzW2NvbHVtbktleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS50eXBlcyB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEudHlwZXNba2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLmZvckVhY2gobWFwcGluZyA9PiB0aGlzLmFkZENvbHVtbihtYXBwaW5nLk5hbWVQYXRoLCBtYXBwaW5nLlZhbHVlUGF0aCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3VyY2UgPSBkYXRhLlNvdXJjZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRpYWdyYW1UeXBlcyA9IFtcclxuXHRcdFx0XCJiYXJcIixcclxuXHRcdFx0XCJkb251dFwiLFxyXG5cdFx0XHRcInBpZVwiLFxyXG5cdFx0XHRcInNjYXR0ZXJcIixcclxuXHRcdFx0XCJsaW5lXCIsXHJcblx0XHRcdFwiYXJlYVwiLFxyXG5cdFx0XHRcImFyZWEtc3BsaW5lXCIsXHJcblx0XHRcdFwibnVtZXJvXCIsXHJcblx0XHRcdFwiYm9vbGVhbm9cIixcclxuXHRcdFx0XCJ0ZW1wb1wiXHJcblx0XHRdO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGF0dXMgPT0gXCJWQUxJRFwiICYmXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRoaXMuZGF0YVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGFTdWJzY3JpcHRpb24pIHRoaXMuZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHQvLyBnZXREYXRhKCkge1xyXG5cdC8vICAgY29uc3QgbyQgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5zb3VyY2UpO1xyXG5cdC8vICAgdGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gbyQuc3Vic2NyaWJlKGRhdGEgPT4gbmV3IERhdGFMb2FkZWRBY3Rpb24odGhpcykpXHJcblx0Ly8gICByZXR1cm4gbyQ7XHJcblx0Ly8gfVxyXG5cdGdldERhdGFTdHJ1Y3R1cmUoKSB7XHJcblx0XHRjb25zdCBvYnNlcnZlciA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh7IC4uLnRoaXMuc291cmNlLCBJbnRlcnZhbDogMCB9LCBEYXRlLm5vdygpIC0gMTAwMDApO1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaXB0aW9uID0gb2JzZXJ2ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHRcdHRoaXMucGF0aE9wdGlvbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldF9kYXRhX3JlcG9ydChkYXRhLkRhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXI7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHR5cGVDaGFuZ2VkKCkge1xyXG5cdFx0Y29uc3QgdHlwZXNGb3JtR3JvdXAgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVHlwZXMgYXMgRm9ybUdyb3VwKS5jb250cm9scztcclxuXHRcdGZvciAobGV0IGNiIGluIHR5cGVzRm9ybUdyb3VwKSB7XHJcblx0XHRcdHR5cGVzRm9ybUdyb3VwW2NiXS5zZXRWYWx1ZSh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZGlhZ3JhbVBhcnRpYWxDb25maWcgPSB7XHJcblx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdGlucHV0czoge1xyXG5cdFx0XHRcdGZvcm1Hcm91cDogdGhpcy5mb3JtR3JvdXAsXHJcblx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERpYWdyYW1Db25maWdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHR9XHJcblx0YWRkQ29sdW1uKE5hbWVQYXRoOiBzdHJpbmcgPSBcIlwiLCBWYWx1ZVBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0XHRcdE5hbWVQYXRoOiBbIE5hbWVQYXRoIF0sXHJcblx0XHRcdFx0VmFsdWVQYXRoOiBbIFZhbHVlUGF0aCwgVmFsaWRhdG9ycy5yZXF1aXJlZCBdXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyb3V0ZUVudGVyZWQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc291cmNlID0gZXZlbnQudmFsdWU7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgU291cmNlOiBldmVudC52YWx1ZSB9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHJlbW92ZUNvbHVtbihpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHRjYWxjdWxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VyID0+IHtcclxuXHRcdFx0dmFyIGNvbHVtbnNNQXBwaW5nID0ge1xyXG5cdFx0XHRcdC8vIE5hbWVWQWx1ZTogICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLnZhbHVlc1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRsZXQgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEsXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkudmFsdWVcclxuXHRcdFx0KTtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy5zZXRWYWx1ZShjb2x1bW5zKTtcclxuXHRcdFx0Ly9hZGQgbmV3IGl0ZW0gdG8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sb3JzIGZvcm0gY29udHJvbFxyXG5cdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcblx0XHRcdFx0bGV0IGNvbHVtbktleSA9IGNvbHVtblswXTtcclxuXHRcdFx0XHRpZiAoIShjb2x1bW5LZXkgaW4gY29sb3JzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHRjb2xvcnNDb250cm9sLmFkZENvbnRyb2woY29sdW1uS2V5LCBuZXcgRm9ybUNvbnRyb2woXCIjMTIzNDU2XCIpKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0eXBlc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiVHlwZXNcIl07XHJcblx0XHRcdGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvYnNlci5uZXh0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2VuZXJhdGVEaWFncmFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHR2YXIgdGVtcCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRlbXAuX2lkID0gXCJ0ZW1wbGF0ZV9pZFwiO1xyXG5cdFx0dGVtcC5OYW1lID0gdGhpcy5mb3JtR3JvdXAudmFsdWUuTmFtZTtcclxuXHRcdHRlbXAuU291cmNlID0gdGhpcy5zb3VyY2U7XHJcblx0XHR0ZW1wLkJveCA9IHtcclxuXHRcdFx0TnVtYmVyT2ZDb2x1bW5zOiAxLFxyXG5cdFx0XHRPcmRlcjogMSxcclxuXHRcdFx0QmFja2dyb3VuZENvbG9yOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5CYWNrZ3JvdW5kQ29sb3JcclxuXHRcdH07XHJcblx0XHR0ZW1wLldpZGdldCA9IHtcclxuXHRcdFx0Ym9vbGVhbm86IHRoaXMuZm9ybUdyb3VwLnZhbHVlLmJvb2xlYW5vXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5DaGFydCA9IHtcclxuXHRcdFx0Q29sdW1uTWFwcGluZ3M6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLkNvbHVtbk1hcHBpbmdzLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuY29sdW1ucy52YWx1ZSxcclxuXHRcdFx0XHR0eXBlOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlLFxyXG5cdFx0XHRcdHR5cGVzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlcyxcclxuXHRcdFx0XHRjb2xvcnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycy52YWx1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRGbG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5GbG93LFxyXG5cdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5MZWdlbmRcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViY2hhcnQ6IHtcclxuXHRcdFx0XHRzaG93OiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5TdWJjaGFydFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0ZW5hYmxlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuWm9vbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0Z3JvdXBlZDogdGhpcy5mb3JtR3JvdXAudmFsdWUuVG9vbHRpcFxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHRvb2x0aXA6IHtcclxuXHRcdFx0Ly8gICAgICAgICBmb3JtYXQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB9XHJcblx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHQvLyBjb2xvcjoge1xyXG5cdFx0XHQvLyAgICAgICAgIHBhdHRlcm46IFsnIzYwQjA0NCcsICcjRjZDNjAwJywgJyNGOTc2MDAnLCAnI0ZGMDAwMCddLFxyXG5cdFx0XHQvLyAgICAgICAgIHRocmVzaG9sZDoge1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgLy8gIHVuaXQ6ICd2YWx1ZScsIC8vIHBlcmNlbnRhZ2UgaXMgZGVmYXVsdFxyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgdmFsdWVzOiBbMzAsIDYwLCA5MCwgMTAwXVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdH07XHJcblx0XHQvLyB0aGlzLmNvbXBvbmVudE1vZGVsID0ge1xyXG5cdFx0Ly8gICBjb21wb25lbnQ6IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVt0ZW1wLkNoYXJ0LmRhdGEudHlwZV0sXHJcblx0XHQvLyAgIGlucHV0czogeyBkYXRhOiB0ZW1wIH1cclxuXHRcdC8vIH1cclxuXHRcdHRoaXMuZGlhZ3JhbU1vZGVsID0gdGVtcDtcclxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0fVxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRGlhZ3JhbUFjdGlvbih0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRpYWdyYW1EYXRhJCB8IGFzeW5jXCIgW3N0eWxlLmNvbG9yXT1cIihkaWFncmFtRGF0YSQgfCBhc3luYyk/LkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCIoZGlhZ3JhbURhdGEkIHwgYXN5bmMpXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTttYXJnaW46MTIuNXB4fS5kaWFncmFtLWJveHttYXJnaW46MTVweH0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9LndpZGdldC10aXRsZXtmb250OjEuM2VtIElSQU5TYW5zLHRhaG9tYX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgZGlhZ3JhbVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cclxuXHRkaWFncmFtRGF0YSQ6IGFueTtcclxuXHRASW5wdXQoXCJpZFwiKSBkaWFncmFtSWQ6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW1zKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbURhdGEkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtKHRoaXMuZGlhZ3JhbUlkKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbXNcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZ3JpZC1saXN0IGNvbHM9XCIxMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XHJcbiAgPG1hdC1ncmlkLXRpbGUgKm5nRm9yPVwibGV0IGRpYWdyYW0gb2YgKGRpYWdyYW1zIHwgYXN5bmMpPy5SZXN1bHRcIiBcclxuICBbY29sc3Bhbl09XCJkaWFncmFtLkJveC5Db2xzXCIgXHJcbiAgW3Jvd3NwYW5dPVwiZGlhZ3JhbS5Cb3guUm93c1wiIFxyXG4gIFtzdHlsZS5jb2xvcl09XCJkaWFncmFtLkJveC5Db2xvclwiPlxyXG4gICAgPGR5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yIGNsYXNzPVwiZGlhZ3JhbS1ib3hcIiBbZGF0YV09XCJkaWFncmFtXCI+PC9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvcj5cclxuICA8L21hdC1ncmlkLXRpbGU+XHJcbjwvbWF0LWdyaWQtbGlzdD5cclxuPGJyIC8+XHJcbjxkaXYgZnhGbGV4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbjwvZGl2PlxyXG48ZGl2IGZ4TGF5b3V0QWxpZ249J2VuZCBjZW50ZXInPlxyXG4gIDxidXR0b24gbWF0LWZhYiByb3V0ZXJMaW5rPVwiLi4vZGlhZ3JhbXMvYWRkXCIgY2xhc3M9XCJhZGQtYnRuXCI+XHJcbiAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gIDwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmFkZC1idG57cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjUwcHg7bGVmdDoyNXB4O3otaW5kZXg6MX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRpYWdyYW1zOiBPYnNlcnZhYmxlPEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+O1xyXG5cdHdpZHRoID0gMTAwO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cclxuXHRcdC8vIHRoaXMuZGlhZ3JhbXNcclxuXHRcdC8vICAgICAgICAgLmRlbGF5KDEwMClcclxuXHRcdC8vICAgICAgICAgLnN1YnNjcmliZShkaWFncmFtcyA9PlxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgIGRpYWdyYW1zLlJlc3VsdC5mb3JFYWNoKGRpYWdyYW0gPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKGRpYWdyYW0uQ2hhcnQsIGRpYWdyYW0uX2lkLCBkaWFncmFtLlNvdXJjZS5Sb3V0ZSwgZGlhZ3JhbS5Tb3VyY2UuU3luYykpKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLmluaXRTb2NrZXQoKTtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5zZW5kKFwiYWRkLW1lc3NhZ2VcIik7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uub25NZXNzYWdlKCkuc3Vic2NyaWJlKG1zZz0+e1xyXG5cdFx0Ly8gICAgICAgICBkZWJ1Z2dlclxyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZWRpdC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFjdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjQwMHB4XCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nIChuZ1N1Ym1pdCk9XCJhZGQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8OZwoHDmMKyw5nCiMOYwq/DmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqLDmMKvw5jCscOYwrMgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiUm91dGVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiSXNBY3RpdmVcIj7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBmeEZsZXg9J25vZ3JvdycgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvZGlhZ3JhbXMnPsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvZm9ybT5cclxuPC9tYXQtY2FyZD5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEVkaXREaWFncmFtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0bGV0IFJvdXRlID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZChldmVudCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhZ3JhbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwib3ZlclwiIGZ4bGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCIgZnhGbGV4QWxpZ249XCJzdGFydFwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3tub3cgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e3RpbWUgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwiZW5kXCIgY2xhc3M9XCJkYXRhLXRpbWVcIj57e25vdyB8IGRhdGUgOiAneS9NL2QgaDptOnMnfX08L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJtb2RlbElzQ29ycmVjdCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtIHdpZGdldFwiIFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1tYXQtc2xpZGVye3dpZHRoOjEwMCV9LmRhdGEtdGltZXtkaXJlY3Rpb246bHRyO3RleHQtYWxpZ246Y2VudGVyfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzVweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblx0bW9kZWxJc0NvcnJlY3Q6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9tb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEodmFsdWU6IERpYWdyYW1Nb2RlbCkge1xyXG5cdFx0aWYgKCEodmFsdWUuQ2hhcnQgJiYgdmFsdWUuX2lkKSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fbW9kZWwgPSB2YWx1ZTtcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XHJcblx0fVxyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRjaGFydDogYW55O1xyXG5cdHRpbWU6IG51bWJlcjtcclxuXHRub3c6IG51bWJlciA9IERhdGUubm93KCk7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcblx0KSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IEludGVydmFsT2JzZXJ2YWJsZVxyXG5cdFx0Ly8gICAgICAgICAvLyAuY3JlYXRlKHRoaXMubW9kZWwuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5jcmVhdGUoOTk5KVxyXG5cdFx0Ly8gICAgICAgICAuc3dpdGNoTWFwKGkgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RhdGFgLCB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMCdcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdC8vICAgICAgICAgICAgICAgICB9KVxyXG5cdFx0Ly8gICAgICAgICApXHJcblx0XHQvLyAgICAgICAgIC8vIC5zd2l0Y2hNYXAoKHJlczogYW55KSA9PiBPYnNlcnZhYmxlLm9mKHJlcy5SZXN1bHQuRGF0YSkpXHJcblx0XHQvLyAgICAgICAgIC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0LkRhdGEpXHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0LmRlbGF5KDMwMCkuZmlsdGVyKGRhdGEgPT4gZGF0YSkuc3Vic2NyaWJlKHN0YXRlID0+IHtcclxuXHRcdFx0dGhpcy5jaGFydCA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0XHQuLi50aGlzLmRhdGEuQ2hhcnQsXHJcblx0XHRcdFx0YmluZHRvOiBgI2RpYWdyYW1fJHt0aGlzLmRhdGEuX2lkfWBcclxuXHRcdFx0XHQvLyBzaXplOiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICBoZWlnaHQ6IDE1MFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlKVxyXG5cdFx0XHRcdC5maWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZClcclxuXHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5ub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lID0gZGF0YS5UaW1lO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0YS5DaGFydC5GbG93KSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQuZmxvdyh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMTUwMFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnQubG9hZCh7XHJcblx0XHRcdFx0XHRcdFx0Y29sdW1uczogdGhpcy5kaWFncmFtU2VydmljZS5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS5EYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2VuZXJhdGVEaWFncmFtKFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLkNoYXJ0LFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLl9pZCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5Tb3VyY2UuUm91dGUsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlN5bmNcclxuXHRcdC8vICk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdHRpbWVDaGFuZ2UoZTogTWF0U2xpZGVyQ2hhbmdlKSB7XHJcblx0XHR0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLCBEYXRlLm5vdygpIC0gKCgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKSwgdHJ1ZSlcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0LmdldERhdGEodGhpcy5kYXRhLlNvdXJjZSwgRGF0ZS5ub3coKSAtICgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsLCB0cnVlKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQvLyAgICAgICAgIC5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdC8vICAgICAgICAgLm1hcChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgY29sdW1uWzBdICs9ICdfaGlzdG9yaWMnO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG5cdFx0XHRcdC8vICAgICAgICAgfSk7XHJcblx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cImRpYWdyYW0tYm94XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZENvbG9yXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdHJldGNoXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgKm5nSWY9XCJfZGF0YVwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e19kYXRhLk5hbWV9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL2RpYWdyYW1zL2VkaXQnICwgIF9kYXRhLl9pZF1cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGRpYWdyYW1cIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPG1hdC1jYXJkLWNvbnRlbnQ+IC0tPlxyXG4gICAgPCEtLSA8bWF0LXNsaWRlciBpbnZlcnQgWyhuZ01vZGVsKV09XCJ0aW1lXCIgKGNoYW5nZSk9XCJ0aW1lQ2hhbmdlKCRldmVudClcIj48L21hdC1zbGlkZXI+IC0tPlxyXG4gICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJvdmVyXCIgZnhGbGV4PVwiMCAwIGF1dG9cIiBpbnZlcnQgbWluPScxJyBtYXg9JzEwMDAnIHZhbHVlPVwiMTAwMFwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxIDEgYXV0b1wiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPC9tYXQtY2FyZC1jb250ZW50PiAtLT5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjBweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246YWxsIC40cyBlYXNlLWluLW91dH1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Db21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0ZG9udXQ6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRwaWU6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRzY2F0dGVyOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0bGluZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGFyZWE6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRcImFyZWEtc3BsaW5lXCI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRudW1lcm86IE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0dGVtcG86IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdGJvb2xlYW5vOiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBWaWV3Q2hpbGQoRGlhZ3JhbUNvbXBvbmVudCkgd2lkZ2V0Q29tcG9uZW50OiBEaWFncmFtQ29tcG9uZW50O1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0X2RhdGE6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGE6IGFueSkge1xyXG5cdFx0aWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblx0XHR0aGlzLmJhY2tncm91bmRDb2xvciA9IGRhdGEuQm94LkJhY2tncm91bmRDb2xvcjtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0bGV0IHJhdyA9IHsgZGF0YSB9O1xyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS5DaGFydC5kYXRhLnR5cGVdO1xyXG5cdFx0bGV0IGlucHV0UHJvdmlkZXJzID0gT2JqZWN0LmtleXMocmF3KS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogcmF3W2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblxyXG5cdFx0bGV0IGNvbXBvbmVudCA9IGZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0YmFja2dyb3VuZENvbG9yOiBTdHJpbmcgPSBcIlwiO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG5cdHRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50Ll9jb21wb25lbnQudGltZUNoYW5nZShlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3ksXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlclxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICNkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyPjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn1gXSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnRcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHR0eXBlTWFwVG9EaWFncmFtID0ge1xyXG5cdFx0YmFyOiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRhcmVhOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0cGllOiBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGxpbmU6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdH07XHJcblx0QFZpZXdDaGlsZChcImR5bmFtaWNDb21wb25lbnRDb250YWluZXJcIiwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXHJcblx0ZHluYW1pY0NvbXBvbmVudENvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjdXJyZW50Q29tcG9uZW50OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdGlmICghKGRhdGEudHlwZSBpbiB0aGlzLnR5cGVNYXBUb0RpYWdyYW0pKSB7XHJcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCBfY29tcG9uZW50ID0gdGhpcy50eXBlTWFwVG9EaWFncmFtW2RhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhkYXRhLmlucHV0cykubWFwKGlucHV0TmFtZSA9PiB7XHJcblx0XHRcdHJldHVybiB7IHByb3ZpZGU6IGlucHV0TmFtZSwgdXNlVmFsdWU6IGRhdGEuaW5wdXRzW2lucHV0TmFtZV0gfTtcclxuXHRcdH0pO1xyXG5cdFx0bGV0IHJlc29sdmVkSW5wdXRzID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmUoaW5wdXRQcm92aWRlcnMpO1xyXG5cclxuXHRcdGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5mcm9tUmVzb2x2ZWRQcm92aWRlcnMoXHJcblx0XHRcdHJlc29sdmVkSW5wdXRzLFxyXG5cdFx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuXHRcdCk7XHJcblx0XHRsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoX2NvbXBvbmVudCk7XHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cdFx0aWYgKCg8YW55PmNvbXBvbmVudC5pbnN0YW5jZSkuQ29uZmlnQ2hhbmdlZClcclxuXHRcdFx0KDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5Db25maWdDaGFuZ2VkLmVtaXQoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5keW5hbWljQ29tcG9uZW50Q29udGFpbmVyLmluc2VydChjb21wb25lbnQuaG9zdFZpZXcpO1xyXG5cclxuXHRcdGlmICh0aGlzLmN1cnJlbnRDb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge31cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNTdWNjZWVkLCBHZXREaWFncmFtc0ZhaWxlZCwgR2V0RGlhZ3JhbXNTdGFydCB9IGZyb20gXCIuLi9hY3Rpb25zL2RpYWdyYW1zLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZSgpLnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBHZXREaWFncmFtc1N0YXJ0KCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0RGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0LmdldERpYWdyYW1zKClcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBHZXREaWFncmFtc1N1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgR2V0RGlhZ3JhbXNGYWlsZWQoKSkpXHJcblx0XHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7XHJcblx0QWRkRGlhZ3JhbUFjdGlvblR5cGVzLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdGFydCxcclxuXHRBZGREaWFncmFtQWN0aW9uU3VjY2VlZCxcclxuXHRBZGREaWFncmFtQWN0aW9uRmFpbGVkLFxyXG5cdERhdGFMb2FkZWRBY3Rpb24sXHJcblx0U3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uLFxyXG5cdEdlbmVyYXRlRGlhZ3JhbUFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9hZGQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0YWRkRGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEFkZERpYWdyYW1BY3Rpb25TdGFydChkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdC5hZGREaWFncmFtKGRhdGEpXHJcblx0XHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdFx0bWFwKHJlcyA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQocmVzKSksXHJcblx0XHRcdFx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImRpYWdyYW1zXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEhBVkVfRU5EUE9JTlQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREQVRBX0xPQURFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmdldERhdGFTdHJ1Y3R1cmUoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORClcclxuXHRcdC8vIC5za2lwVW50aWwodGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEdlbmVyYXRlRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IGRhdGEuZ2VuZXJhdGVEaWFncmFtKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJkaWFncmFtc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEaWFncmFtc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86aWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibnVtZXJvXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ0ZW1wb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImJvb2xlYW5vXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkRpYWdyYW1zXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZERpYWdyYW1JZFwiIG5hbWU9XCJzZWxlY3RlZERpYWdyYW1JZFwiPlxyXG4gIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkaWFncmFtcyQgfCBhc3luYylcIiBbdmFsdWVdPVwiaXRlbS5faWRcIj5cclxuICAgIHt7aXRlbS5faWR9fVxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSUdyaWRJdGVtQ29tcG9uZW50PHsgZGlhZ3JhbUlkOiBzdHJpbmcgfT4ge1xyXG5cdGRpYWdyYW1zJDogT2JzZXJ2YWJsZTxEaWFncmFtTW9kZWxbXT47XHJcblx0c2VsZWN0ZWREaWFncmFtSWQ6IHN0cmluZztcclxuXHRnZXQgdmFsaWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuZGlhZ3JhbUlkICE9IHVuZGVmaW5lZDtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRpYWdyYW1JZDogdGhpcy5zZWxlY3RlZERpYWdyYW1JZFxyXG5cdFx0fTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuZGlhZ3JhbXMkID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpLnBpcGUobWFwKHJlcyA9PiByZXMuUmVzdWx0KSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRUb29sdGlwTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlRGV2dG9vbHNNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmUtZGV2dG9vbHNcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiB9IGZyb20gXCIuL2RpYWdyYW0uY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcvcGllLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcvbGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1lZGl0LWRpYWdyYW0vbnVtZXJpYy1lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWVyaWNEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZGlhZ3JhbS9udW1lcmljLWRpYWdyYW0uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRhTWFwcGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kYXRhLW1hcHBlci9kYXRhLW1hcHBlci5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBkaWFncmFtVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS12aWV3L2RpYWdyYW0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbXNDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZWRpdC1kaWFncmFtL2VkaXQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEeW5hbWljQ29uZmlnQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtRWZmZWN0cyB9IGZyb20gXCIuL2VmZmVjdHMvYWRkLWRpYWdyYW0uZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2RpYWdyYW0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXNlbGVjdG9yL2RpYWdyYW0tc2VsZWN0b3IuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRTbGlkZXJNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFRvb2x0aXBNb2R1bGUsXHJcblx0XHRNYXRHcmlkTGlzdE1vZHVsZSxcclxuXHRcdE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBZGREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbXNDb21wb25lbnQsXHJcblx0XHRkaWFncmFtVmlld0NvbXBvbmVudCxcclxuXHRcdEVkaXREaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Nb2R1bGVDb250YWluZXJDb21wb25lbnQsXHJcblx0XHREYXRhTWFwcGVyQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHROdW1lcmljV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50LCBkaWFncmFtVmlld0NvbXBvbmVudCBdLFxyXG5cdGV4cG9ydHM6IFsgRGlhZ3JhbVNlbGVjdG9yQ29tcG9uZW50IF0sXHJcblx0cHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRGlhZ3JhbU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRGlhZ3JhbU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NEaWFncmFtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRGlhZ3JhbU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJkaWFncmFtXCIsIERpYWdyYW1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBEaWFncmFtRWZmZWN0cywgQWRkRGlhZ3JhbUVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0RpYWdyYW1Nb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0RpYWdyYW1Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkluamVjdGlvblRva2VuIiwiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJWYWxpZGF0b3JzIiwiaW5pdGlhbFN0YXRlIiwiRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyIiwiZnJvbUVkaXREaWFncmFtLlJlZHVjZXIiLCJwYXJlbnRHdWFyZFJlZHVjZXIuUGFyZW50R3VhcmRSZWR1Y2VyIiwiY3JlYXRlRmVhdHVyZVNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJCZWhhdmlvclN1YmplY3QiLCJDb21wb25lbnQiLCJJbmplY3RvciIsIklucHV0IiwiRXZlbnRFbWl0dGVyIiwiT3V0cHV0IiwiSW5qZWN0YWJsZSIsIkluamVjdCIsIkZvcm1BcnJheSIsIk9ic2VydmFibGUiLCJIdHRwQ2xpZW50IiwiU3RvcmUiLCJGb3JtQnVpbGRlciIsIkFjdGl2YXRlZFJvdXRlIiwiUmVmbGVjdGl2ZUluamVjdG9yIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiVmlld0NoaWxkIiwiVmlld0NvbnRhaW5lclJlZiIsInJvdXRlciIsIm1hcCIsInN3aXRjaE1hcCIsImNhdGNoRXJyb3IiLCJBY3Rpb25zIiwiUm91dGVyIiwiRWZmZWN0IiwiUm91dGVyTW9kdWxlIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0U2xpZGVyTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJGbGV4TGF5b3V0TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiTWF0R3JpZExpc3RNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUiLCJTdG9yZU1vZHVsZSIsIkVmZmVjdHNNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQVVPLHFCQUFNLHFCQUFxQixHQUF3QjtRQUN6RCxTQUFTLEVBQUUsRUFBRTtRQUNiLEdBQUcsRUFBRTtZQUNKLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7U0FDOUM7S0FDRCxDQUFDO0FBRUYseUJBQWEsbUJBQW1CLEdBQUcsSUFBSUEsaUJBQWMsQ0FBc0IscUJBQXFCLENBQUM7O0lDbEJqRzs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUks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
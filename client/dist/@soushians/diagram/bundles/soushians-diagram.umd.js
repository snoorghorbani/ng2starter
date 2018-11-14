(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngrx/store'), require('rxjs'), require('rxjs/BehaviorSubject'), require('@angular/common/http'), require('rxjs/Rx'), require('rxjs/operators'), require('rxjs/Observable'), require('@angular/router'), require('@ngrx/effects'), require('rxjs/observable/of'), require('@angular/common'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/diagram', ['exports', '@angular/core', '@angular/forms', '@ngrx/store', 'rxjs', 'rxjs/BehaviorSubject', '@angular/common/http', 'rxjs/Rx', 'rxjs/operators', 'rxjs/Observable', '@angular/router', '@ngrx/effects', 'rxjs/observable/of', '@angular/common', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.diagram = {}),global.ng.core,global.ng.forms,null,global.rxjs,global.rxjs.BehaviorSubject,global.ng.common.http,global.rxjs.Rx,global.rxjs.operators,global.rxjs.Observable,global.ng.router,null,global.rxjs['observable/of'],global.ng.common,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material));
}(this, (function (exports,i0,forms,i2,rxjs,BehaviorSubject,i1,Rx,operators,Observable,router,effects,of,common,flexLayout,animations,material) { 'use strict';

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
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("DiagramModuleConfig");

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
    var GetDiagramsApiModel;
    (function (GetDiagramsApiModel) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DiagramReducers = {
        diagrams: diagramReducer,
        editDiagram: Reducer,
        parentGuard: ParentGuardReducer
    };
    /** @type {?} */
    var selectFeatureState = i2.createFeatureSelector("diagram");
    /** @type {?} */
    var selectEditDiagramState = i2.createSelector(selectFeatureState, function (state) { return state.editDiagram; });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ServerStatusDiagramComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DiagramPartialConfigEditComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PieDiagramPartialConfigComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var BooleanoWidgetPartialConfigComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumericWidgetPartialConfigComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LinearDiagramPartialConfigComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ServerConnectingTimeDiagramComponent = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DiagramConfigurationService = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddDiagramApiModel;
    (function (AddDiagramApiModel) {
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
                    .get(this.config.env.frontend_server + "/api/source")
                    .map(function (response) { return ( /** @type {?} */(response)).Result; })
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
                    .get(this.config.env.frontend_server + "/api/diagram/groups")
                    .map(function (response) { return ( /** @type {?} */(response)).Result; })
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
                /** @type {?} */
                var model = new AddDiagramApiModel.Request(data);
                return this.http
                    .post(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
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
                    .put(this.config.env.frontend_server + "/api/diagram", body)
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
                    return Rx.Observable.timer(0, source.Interval).pipe(operators.takeUntil(unsubscribe), operators.switchMap(function (i) {
                        return _this.http
                            .get(_this.config.env.frontend_server + "/api/data", {
                            params: {
                                sourceId: source._id,
                                time: _this.getFloorTime(source.Interval, time).toString()
                            }
                        }).pipe(operators.map(function (res) { return res.Result; }));
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
                return ( /** @type {?} */(_.report(data))).filter(function (item) { return item.isLastNode; });
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
                return this.getData(/** @type {?} */ ({}), new Rx.Subject(), sync).subscribe(function (data) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumericEditDiagramComponent = /** @class */ (function () {
        function NumericEditDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.unsubscribe = new rxjs.Subject();
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
                this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(operators.filter(function (data) { return data != undefined; }), operators.takeUntil(this.unsubscribe)).subscribe(function (data) {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumericDiagramComponent = /** @class */ (function () {
        function NumericDiagramComponent(injector, diagramService) {
            this.injector = injector;
            this.diagramService = diagramService;
            this.unsubscribe = new rxjs.Subject();
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
                this.dataSubscribtion = this.diagramService.getData(this.data.Source, this.unsubscribe).pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (data) {
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
            this.unsubscribe = new rxjs.Subject();
            this.formGroup = AddDiagramApiModel.Request.formGroup;
            this.sources = this.diagramService.getSources();
            this.groups = this.diagramService.getGroups();
            // this.diagramModel = new DiagramModel();
            this.columnsMappings = ( /** @type {?} */(this.formGroup.controls["ColumnMappings"])).controls;
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
                                colorsControl.addControl(columnKey, new forms.FormControl(data.Chart.data.colors[columnKey]));
                        });
                        /** @type {?} */
                        var typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
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
                        ( /** @type {?} */(_this.formGroup.controls["ColumnMappings"])).controls.length > 0 &&
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
                var typesFormGroup = ( /** @type {?} */(this.formGroup.controls["Types"])).controls;
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
                if (NamePath === void 0) {
                    NamePath = "";
                }
                if (ValuePath === void 0) {
                    ValuePath = "";
                }
                /** @type {?} */
                var control = /** @type {?} */ (this.formGroup.controls["ColumnMappings"]);
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
                return Observable.Observable.create(function (obser) {
                    /** @type {?} */
                    var columns = _this.diagramService.extract_columns_from_data(_this.data, ( /** @type {?} */(_this.formGroup.controls["ColumnMappings"])).value);
                    _this.formGroup.controls["columns"].setValue(columns);
                    /** @type {?} */
                    var colorsControl = /** @type {?} */ (_this.formGroup.controls["Colors"]);
                    columns.forEach(function (column) {
                        /** @type {?} */
                        var columnKey = column[0];
                        if (!(columnKey in colorsControl.controls))
                            colorsControl.addControl(columnKey, new forms.FormControl("#123456"));
                    });
                    /** @type {?} */
                    var typesControl = /** @type {?} */ (_this.formGroup.controls["Types"]);
                    columns.forEach(function (column) {
                        /** @type {?} */
                        var key = column[0];
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
                        template: "<div fxLayout=\"column\" fxFlex=\"100\">\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"60\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput placeholder=\"\u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0648\u062F\u0627\u0631\" formControlName=\"Name\">\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"Source\" (selectionChange)=\"routeEntered($event)\">\n              <mat-option *ngFor=\"let item of sources | async\" [value]=\"item\">\n                {{item.Endpoint}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"sync time\" formControlName=\"Sync\">\n          </mat-form-field>\n          <div>\n            <mat-radio-group (change)=\"typeChanged()\" formControlName=\"Type\" fxFlexFill>\n              <label>\u0646\u0648\u0639 \u0646\u0645\u0648\u062F\u0627\u0631 :</label>\n              <mat-radio-button (change)=\"typeChanged()\" *ngFor=\"let item of diagramTypes\" [value]=\"item\" class=\"form-element-margin\">\n                {{item}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <mat-form-field>\n            <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>\n              <mat-select-trigger>\n                {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}\n                <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">\n                  (+{{formGroup.controls.Groups.value.length - 1}} others)\n                </span>\n              </mat-select-trigger>\n              <mat-option *ngFor=\"let item of groups | async\" [value]=\"item\">{{item}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div>\n            <mat-checkbox (change)=\"configChanged()\" formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n          <dynamic-config-component-selector (ConfigChanged)=\"configChanged()\" [data]=\"diagramPartialConfig\"></dynamic-config-component-selector>\n        </mat-card-content>\n      </form>\n    </mat-card>\n    <dynamic-component-selector id=\"modify-diagram\" fxFlex=\"40\" [data]=\"diagramModel\"></dynamic-component-selector>\n  </div>\n\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\">\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title> \u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627 </mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <data-mapper destination=\"value\" [data]=\"data\"></data-mapper>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u06AF\u0627\u0634\u062A \u062F\u0627\u062F\u0647</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let column of columnsMappings; let i=index\" fxFlex=\"100\" fxLayout=\"column\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"columnsMappings[i]\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0646\u0627\u0645 \u0645\u0633\u06CC\u0631\" formControlName=\"NamePath\">\n                    <mat-option>--</mat-option>\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <mat-form-field fxFlex=\"45\" fxFlex.xs=\"100\">\n                  <mat-select placeholder=\"\u0645\u0642\u062F\u0627\u0631 \u0645\u0633\u06CC\u0631\" formControlName=\"ValuePath\">\n                    <mat-option>--</mat-option>\n                    <!-- <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\" [disabled]=\"!item.isLastNode\"> -->\n                    <mat-option *ngFor=\"let item of pathOptions\" [value]=\"item.path\" [class]=\"'mat-option depth_' + item.depts\">\n                      {{item.path}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n                <button (click)=\"removeColumn(i)\" fxFlex mat-icon-button>\n                  <mat-icon>delete</mat-icon>\n                </button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div>\n          <button (click)=\"addColumn()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0633\u062A\u0648\u0646</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u0646\u062A\u0627\u06CC\u062C \u062F\u0627\u062F\u0647 \u0647\u0627</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"item-margin\">\n          <div class=\"list-item\" fxLayout=\"row\" *ngFor=\"let item of formGroup.controls.columns.value; let i=index\"\n            fxLayoutAlign=\"space-between center\">\n            <span fxFlex=\"40\">{{item[0]}} : {{item[1]}}</span>\n            <span fxFlex [formGroup]=\"formGroup.controls.Colors\" *ngIf=\"$any(formGroup.controls.Colors).controls[item[0]]\">\n              <input placeholder=\"\u0631\u0646\u06AF \u0646\u0645\u0648\u062F\u0627\u0631\" (change)=\"configChanged()\" [formControlName]=\"item[0]\" type=\"color\">\n            </span>\n            <mat-form-field fxFlex=\"30\" [formGroup]=\"formGroup.controls.Types\" *ngIf=\"$any(formGroup.controls.Types).controls[item[0]]\">\n              <!-- <input placeholder=\"tipo\" (change)=\"configChanged()\" > -->\n              <mat-select placeholder=\"tipo\" [formControlName]=\"item[0]\">\n                <mat-option>--</mat-option>\n                <mat-option *ngFor=\"let item of diagramTypes\" [value]=\"item\">\n                  {{item}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card fxLayout=\"column\" fxFlex=\"25\">\n      <mat-card-header>\n        <mat-card-title>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0638\u0627\u0647\u0631\u06CC</mat-card-title>\n      </mat-card-header>\n      <mat-card-content [formGroup]=\"formGroup\">\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u0637\u0631\" formControlName=\"Cols\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"\u062A\u0639\u062F\u0627\u062F \u0633\u062A\u0648\u0646\" formControlName=\"Rows\">\n        </mat-form-field>\n        <div fxLayout=\"row\">\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u0645\u062A\u0646 :</label>\n          <span>\n            <input (change)=\"configChanged()\" formControlName=\"TextColor\" type=\"color\">\n          </span>\n        </div>\n        <div fxLayout=\"row\">\n          <label fxFlex=\"50\">\u0631\u0646\u06AF \u067E\u0633 \u0632\u0645\u06CC\u0646\u0647 :</label>\n          <span>\n            <input formControlName=\"BackgroundColor\" type=\"color\">\n          </span>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button (click)=\"add($event)\" fxFlex mat-raised-button color=\"primary\" type=\"submit\">\u062B\u0628\u062A</button>\n        <button fxFlex='nogrow' mat-button routerLink='/diagrams'>\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>",
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
            this.unsubscribe = new rxjs.Subject();
            this.modelIsCorrect = new BehaviorSubject.BehaviorSubject(false);
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
                //         // .switchMap((res: any) => of(res.Result.Data))
                //         .map((res: any) => res.Result.Data)
                this.modelIsCorrect.delay(300).filter(function (data) { return data; }).subscribe(function (state) {
                    _this.chart = c3.generate(__assign({}, _this.data.Chart, { bindto: "#diagram_" + _this.data._id }));
                    _this.dataSubscribtion = _this.diagramService
                        .getData(_this.data.Source, _this.unsubscribe)
                        .pipe(operators.filter(function (data) { return data != undefined; }), operators.takeUntil(_this.unsubscribe))
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
            { type: i0.Component, args: [{
                        selector: "diagram",
                        template: "<div class=\"over\" fxlayout=\"row\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"start\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"center\" class=\"data-time\">{{time | date : 'y/M/d h:m:s'}}</div>\n    <div fxFlex=\"nogrow\" fxFlexAlign=\"end\" class=\"data-time\">{{now | date : 'y/M/d h:m:s'}}</div>\n</div>\n<div *ngIf=\"modelIsCorrect | async\" class=\"diagram widget\" [id]=\"'diagram_' + data._id\"></div>",
                        styles: [":host{width:100%}.diagram-box .c3{direction:ltr}mat-slider{width:100%}.data-time{direction:ltr;text-align:center}.over{visibility:hidden;opacity:0;position:absolute;top:35px;left:0;right:0;background:#fff;z-index:3;transition:.4s ease-in-out}"]
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
             */ function (data) {
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
                var resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                /** @type {?} */
                var injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
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
            { type: i0.Component, args: [{
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
                /** @type {?} */
                var _component = this.typeMapToDiagram[data.type];
                /** @type {?} */
                var inputProviders = Object.keys(data.inputs).map(function (inputName) {
                    return { provide: inputName, useValue: data.inputs[inputName] };
                });
                /** @type {?} */
                var resolvedInputs = i0.ReflectiveInjector.resolve(inputProviders);
                /** @type {?} */
                var injector = i0.ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(_component);
                /** @type {?} */
                var component = factory.create(injector);
                if (( /** @type {?} */(component.instance)).ConfigChanged)
                    ( /** @type {?} */(component.instance)).ConfigChanged.subscribe(function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DiagramEffects = /** @class */ (function () {
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
                    .pipe(operators.map(function (res) { return new GetDiagramsSucceed(res); }), operators.catchError(function () { return rxjs.of(new GetDiagramsFailed()); }));
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddDiagramEffects = /** @class */ (function () {
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
                    .pipe(operators.map(function (res) { return new AddDiagramActionSucceed(res); }), operators.catchError(function () { return of.of(new AddDiagramActionFailed()); }));
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
                // .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
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
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DiagramSelectorComponent = /** @class */ (function () {
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
                        template: "<div fxLayout=\"column wrap\" fxLayoutGap=\"15px\">\n<h4>\u0644\u06CC\u0633\u062A \u0646\u0645\u0648\u062F\u0627\u0631\u0647\u0627</h4>\n      <mat-form-field fxFlex=\"100\">\n  <mat-select placeholder=\"\u0646\u0645\u0648\u062F\u0627\u0631 \u0647\u0627\" [(ngModel)]=\"selectedDiagramId\" name=\"selectedDiagramId\">\n  <mat-option *ngFor=\"let item of (diagrams$ | async)\" [value]=\"item._id\">\n    {{item.Name}}\n  </mat-option>\n</mat-select>\n</mat-form-field>\n</div>"
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
    var RootNgsDiagramModule = /** @class */ (function () {
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgsDiagramModule = NgsDiagramModule;
    exports.DiagramSelectorComponent = DiagramSelectorComponent;
    exports.diagramViewComponent = diagramViewComponent;
    exports.ɵbc = RoutingModule;
    exports.ɵb = MODULE_CONFIG_TOKEN;
    exports.ɵa = RootNgsDiagramModule;
    exports.ɵm = BooleanoWidgetPartialConfigComponent;
    exports.ɵj = DiagramPartialConfigEditComponent;
    exports.ɵl = LinearDiagramPartialConfigComponent;
    exports.ɵp = NumericDiagramComponent;
    exports.ɵv = NumericEditDiagramComponent;
    exports.ɵu = NumericWidgetPartialConfigComponent;
    exports.ɵk = PieDiagramPartialConfigComponent;
    exports.ɵq = ServerConnectingTimeDiagramComponent;
    exports.ɵr = ServerStatusDiagramComponent;
    exports.ɵbb = AddDiagramEffects;
    exports.ɵba = DiagramEffects;
    exports.ɵx = diagramReducer;
    exports.ɵy = Reducer;
    exports.ɵw = DiagramReducers;
    exports.ɵz = ParentGuardReducer;
    exports.ɵf = DiagramConfigurationService;
    exports.ɵd = DiagramService;
    exports.ɵc = AddDiagramComponent;
    exports.ɵt = DataMapperComponent;
    exports.ɵs = DiagramModuleContainerComponent;
    exports.ɵn = DiagramComponent;
    exports.ɵg = DiagramsComponent;
    exports.ɵo = DynamicComponentSelectorComponent;
    exports.ɵi = DynamicConfigComponentSelectorComponent;
    exports.ɵh = EditDiagramComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWRpYWdyYW0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2RpYWdyYW0uY29uZmlnLnRzIixudWxsLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9kaWFncmFtcy5hY3Rpb25zLnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3JlZHVjZXJzL2RpYWdyYW1zLnJlZHVjZXIudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9lZGl0LWRpYWdyYW0ucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9wYXJlbnQtZ3VhcmQucmVkdWNlci50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9yZWR1Y2Vycy9pbmRleC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9waWUtZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2R1bWItY29tcG9uZW50cy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9udW1lcmljLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc2VydmljZXMvZGlhZ3JhbS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RhdGEtbWFwcGVyL2RhdGEtbWFwcGVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9tb2RlbHMvZGlhZ3JhbS5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvc21hcnQtY29tcG9uZW50cy9kaWFncmFtLXZpZXcvZGlhZ3JhbS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW1zL2RpYWdyYW1zLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yL2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2R5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2RpYWdyYW0vbGliL2VmZmVjdHMvZGlhZ3JhbXMuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9kaWFncmFtL2xpYi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tc2VsZWN0b3IvZGlhZ3JhbS1zZWxlY3Rvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZGlhZ3JhbS9saWIvZGlhZ3JhbS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFncmFtTW9kdWxlQ29uZmlnIHtcclxuXHRlbmRwb2ludHM/OiB7fTtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRGlhZ3JhbU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbmRwb2ludHM6IHt9LFxyXG5cdGVudjoge1xyXG5cdFx0cHJvZHVjdGlvbjogZmFsc2UsXHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IFwiZnJvbnRlbmQvc2VydmVyL2RpZC9ub3Qvc2V0XCJcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxEaWFncmFtTW9kdWxlQ29uZmlnPihcIkRpYWdyYW1Nb2R1bGVDb25maWdcIik7XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4vZGlhZ3JhbS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBHZXREaWFncmFtc0FwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRkaWFncmFtOiBzdHJpbmc7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBHZXREaWFncmFtc0FwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vc3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHQvLyByZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHQvLyAgIGRpYWdyYW06IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdC8vIH0pXHJcblx0XHQvL31cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpYWdyYW1zQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9ESUFHUkFNID0gXCJbRElBR1JBTV0gR0VUX0RJQUdSQU1cIixcclxuXHRHRVRfRElBR1JBTV9TVEFSVCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NUQVJUXCIsXHJcblx0R0VUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dIEdFVF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRHRVRfRElBR1JBTV9GQUlMRUQgPSBcIltESUFHUkFNXSBHRVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc1N0YXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVEFSVDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0RGlhZ3JhbXNTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRGlhZ3JhbXNBY3Rpb25UeXBlcy5HRVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXREaWFncmFtc0ZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEaWFncmFtc0FjdGlvbiA9IEdldERpYWdyYW1zIHwgR2V0RGlhZ3JhbXNTdGFydCB8IEdldERpYWdyYW1zU3VjY2VlZCB8IEdldERpYWdyYW1zRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQWN0aW9uVHlwZXMsIERpYWdyYW1zQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5cclxuY29uc29sZS5sb2coR2V0RGlhZ3JhbXNBcGlNb2RlbCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRsb2FkZWQ6IGJvb2xlYW47XHJcblx0ZGlhZ3JhbTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRsb2FkZWQ6IGZhbHNlLFxyXG5cdGRpYWdyYW06IHtcclxuXHRcdFJlc3VsdDogW11cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlhZ3JhbVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGlhZ3JhbXNBY3Rpb24pOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBEaWFncmFtc0FjdGlvblR5cGVzLkdFVF9ESUFHUkFNOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGVkOiB0cnVlXHJcblx0XHRcdFx0Ly8gZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIERpYWdyYW1zQWN0aW9uVHlwZXMuR0VUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRsb2FkZWQ6IHRydWVcclxuXHRcdFx0XHQvLyAgZGlhZ3JhbTogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGlhZ3JhbUluZm8gPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtO1xyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2RlbCB9IGZyb20gXCIuL2RpYWdyYW0ubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Y29uc3RydWN0b3IocGFyYW1zOiBSZXF1ZXN0KSB7fVxyXG5cdFx0Z2V0UmVxdWVzdFF1ZXJ5UGFyYW1zKCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdElzQWN0aXZlOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRSb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IERpYWdyYW1Nb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0RJQUdSQU0gPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1cIixcclxuXHRFRElUX0RJQUdSQU1fU1RBUlQgPSBcIltESUFHUkFNXVtFRElUXSBFRElUX0RJQUdSQU1fU1RBUlRcIixcclxuXHRFRElUX0RJQUdSQU1fU1VDQ0VFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9TVUNDRUVEXCIsXHJcblx0RURJVF9ESUFHUkFNX0ZBSUxFRCA9IFwiW0RJQUdSQU1dW0VESVRdIEVESVRfRElBR1JBTV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdERpYWdyYW1BY3Rpb25TdGFydCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUFjdGlvbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXREaWFncmFtQWN0aW9uVHlwZXMuRURJVF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdERpYWdyYW1BY3Rpb25zID1cclxuXHR8IEVkaXREaWFncmFtQWN0aW9uXHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBFZGl0RGlhZ3JhbUFjdGlvblN1Y2NlZWRcclxuXHR8IEVkaXREaWFncmFtQWN0aW9uRmFpbGVkO1xyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0RGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9lZGl0LWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQWN0aW9uVHlwZXMsIEVkaXREaWFncmFtQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zL2VkaXQtZGlhZ3JhbS5hY3Rpb25zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhFZGl0RGlhZ3JhbUFwaU1vZGVsKTtcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0c3RhdHVzOiByZXNwb25zZVN0YXR1c1R5cGVzO1xyXG5cdGRhdGE6IEVkaXREaWFncmFtQXBpTW9kZWwuUmVzcG9uc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogeyBSZXN1bHQ6IHt9IH0gYXMgRWRpdERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBFZGl0RGlhZ3JhbUFjdGlvbnMpOiBTdGF0ZSB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBFZGl0RGlhZ3JhbUFjdGlvblR5cGVzLkVESVRfRElBR1JBTToge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiLFxyXG5cdFx0XHRcdGRhdGE6IG5ldyBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKClcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRWRpdERpYWdyYW1BY3Rpb25UeXBlcy5FRElUX0RJQUdSQU1fRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRWRpdERpYWdyYW1JbmZvID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuZGF0YTtcclxuIiwiaW1wb3J0IHsgUGFyZW50R3VhcmRBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9wYXJlbnQtZ3VhcmQuYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XHJcblx0cm91dGU6IHN0cmluZztcclxuXHRyZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0cm91dGU6IFwiXCIsXHJcblx0cmVzdWx0OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcmVudEd1YXJkUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQYXJlbnRHdWFyZEFjdGlvbik6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZ2V0UGFyZW50Um91dGluZ0d1YXJkID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCAqIGFzIERpYWdyYW1zUmVkdWNlciBmcm9tIFwiLi9kaWFncmFtcy5yZWR1Y2VyXCI7XHJcbmltcG9ydCAqIGFzIGZyb21FZGl0RGlhZ3JhbSBmcm9tIFwiLi9lZGl0LWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgKiBhcyBwYXJlbnRHdWFyZFJlZHVjZXIgZnJvbSBcIi4vcGFyZW50LWd1YXJkLnJlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhZ3JhbVN0YXRlIHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLlN0YXRlO1xyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uU3RhdGU7XHJcblx0cGFyZW50R3VhcmQ6IHBhcmVudEd1YXJkUmVkdWNlci5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERpYWdyYW1SZWR1Y2VycyA9IHtcclxuXHRkaWFncmFtczogRGlhZ3JhbXNSZWR1Y2VyLmRpYWdyYW1SZWR1Y2VyLFxyXG5cdGVkaXREaWFncmFtOiBmcm9tRWRpdERpYWdyYW0uUmVkdWNlcixcclxuXHRwYXJlbnRHdWFyZDogcGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlclxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlU3RhdGUge1xyXG5cdFwiZGlhZ3JhbVwiOiBEaWFncmFtU3RhdGU7XHJcbn1cclxuXHJcbi8vI3JlZ2lvbiBzZWxlY3RvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RGZWF0dXJlU3RhdGUgPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8RGlhZ3JhbVN0YXRlPihcImRpYWdyYW1cIik7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0RGlhZ3JhbUluZm9ybWF0aW9uU3RhdHVzID0gY3JlYXRlU2VsZWN0b3IoXHJcbi8vICAgc2VsZWN0RmVhdHVyZVN0YXRlLFxyXG4vLyAgIChzdGF0ZTogRGlhZ3JhbVN0YXRlKSA9PiBzdGF0ZS5kaWFncmFtXHJcbi8vICk7XHJcblxyXG4vLyNyZWdpb24gZWRpdCBkaWFncmFtXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RFZGl0RGlhZ3JhbVN0YXRlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IERpYWdyYW1TdGF0ZSkgPT4gc3RhdGUuZWRpdERpYWdyYW0pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tc2VydmVyLXN0YXR1c1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPG1hdC1pY29uIFtuZ0NsYXNzXT1cImRhdGFTdGF0dXMkID8gJ2Nvbm5lY3RlZCcgOiAnZGlzY29ubmVjdGVkJ1wiPlxyXG4gICAgZmliZXJfbWFudWFsX3JlY29yZFxyXG4gIDwvbWF0LWljb24+IC0tPlxyXG4gIDwhLS0gPHNwYW4gKm5nSWY9XCJkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uU3VjY2Vzc01lc3NhZ2V9fTwvc3Bhbj5cclxuICA8c3BhbiAqbmdJZj1cIiFkYXRhU3RhdHVzJFwiPnt7ZGF0YS5XaWRnZXQuYm9vbGVhbm8uRmFpbHVyZU1lc3NhZ2V9fTwvc3Bhbj4gLS0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5kaXNjb25uZWN0ZWR7Y29sb3I6I2JhMzAzMH0uY29ubmVjdGVke2NvbG9yOiMzMGFlMWN9Lm51bWVyaWN7Zm9udC1zaXplOjIuNGVtO2xpbmUtaGVpZ2h0OjEuOH0ubnVtZXJpYy50aXRsZXtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWE7Zm9udC1zaXplOjEuMWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHR0aW1lQ2hhbmdlKGUpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UuX2lkLCB0aGlzLmRhdGEuU291cmNlLkludGVydmFsKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyXHJcblx0XHQvLyAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgfSk7XHJcblx0XHQvLyAgIH0pXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJab29tXCIgZnhGbGV4RmlsbD7DmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlN1YmNoYXJ0XCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKow5jCssOYwrHDmsKvw5nChsOZwoXDmMKnw5vCjMObwowgw5jCr8OYwrEgw5jCssObwozDmMKxIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsTwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiVG9vbHRpcFwiIGZ4RmxleEZpbGw+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOZwojDmMK2w5vCjMOYwq3DmMKnw5jCqiDDmMKow5nChyDDmMK1w5nCiMOYwrHDmMKqIMOawq/DmMKxw5nCiMOZwofDm8KMPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRhdGFMb2FkZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfZGF0YTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX2RhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5kYXRhTG9hZGVkLm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGE7XHJcblx0fVxyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0Y29uZmlnQ2hhbmdlZCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwicGllLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7DmcKIw5jCtsOYwrnDm8KMw5jCqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiTGVnZW5kXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqPC9tYXQtY2hlY2tib3g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cImRvbnV0Rm9ybUdyb3VwXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGXCIgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfS5kaWFncmFtLWJveHttYXJnaW46MTVweH0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWVEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhTG9hZGVkO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGZvcm1Hcm91cChkYXRhOiBGb3JtR3JvdXApIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5fZGF0YUxvYWRlZCA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhTG9hZGVkO1xyXG5cdH1cclxuXHRkb251dEZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5kb251dEZvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRvbnV0IGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJib29sZWFub0Zvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIlN1Y2Nlc3NNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiIGZvcm1Db250cm9sTmFtZT1cIkZhaWx1cmVNZXNzYWdlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9Lm51bWVyaWN7Zm9udC1zaXplOjNlbTtsaW5lLWhlaWdodDoxLjg7Zm9udC1mYW1pbHk6aXJhbi1zYW5zLWJvbGQsVGFob21hfS5udW1lcmljLnRpdGxle2ZvbnQtc2l6ZToxLjVlbX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGJvb2xlYW5vRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImZvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChcImRpYWdyYW1TZXJ2aWNlXCIpO1xyXG5cdFx0dGhpcy5ib29sZWFub0Zvcm1Hcm91cCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmJvb2xlYW5vIGFzIEZvcm1Hcm91cDtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtd2lkZ2V0LXBhcnRpYWwtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YUxvYWRlZCB8IGFzeW5jXCIgY2xhc3M9XCJkaWFncmFtLWJveFwiPlxyXG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwiZG9udXRGb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Zvcm0+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNXaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGFMb2FkZWQ7XHJcblx0QElucHV0KClcclxuXHRzZXQgZm9ybUdyb3VwKGRhdGE6IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XHJcblx0XHR0aGlzLl9kYXRhTG9hZGVkID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2RhdGFMb2FkZWQ7XHJcblx0fVxyXG5cdGRvbnV0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0ZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiZGlhZ3JhbVNlcnZpY2VcIik7XHJcblx0XHR0aGlzLmRvbnV0Rm9ybUdyb3VwID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMuZG9udXQgYXMgRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0Ly8gICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0Ly8gICAgIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gICB9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibGluZWFyLWRpYWdyYW0tcGFydGlhbC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJMZWdlbmRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmcKIw5jCtsObwozDmMKtw5jCp8OYwqo8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlpvb21cIiBmeEZsZXhGaWxsPsOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjDwvbWF0LWNoZWNrYm94PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiU3ViY2hhcnRcIiBmeEZsZXhGaWxsPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqjDmMKyw5jCscOawq/DmcKGw5nChcOYwqfDm8KMw5vCjCDDmMKvw5jCsSDDmMKyw5vCjMOYwrEgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxPC9tYXQtY2hlY2tib3g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJUb29sdGlwXCIgZnhGbGV4RmlsbD7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5nCiMOYwrbDm8KMw5jCrcOYwqfDmMKqIMOYwqjDmcKHIMOYwrXDmcKIw5jCscOYwqogw5rCr8OYwrHDmcKIw5nCh8Obwow8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuICA8ZGl2PlxyXG4gICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIkZsb3dcIiBmeEZsZXhGaWxsPkZsb3c8L21hdC1jaGVja2JveD5cclxuICA8L2Rpdj5cclxuPC9mb3JtPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdGRhdGFTdWJzY3JpYnRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgQ29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2U7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJmb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkaWFncmFtU2VydmljZVwiKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEodGhpcy5kYXRhLlNvdXJjZS5Sb3V0ZSlcclxuXHRcdC8vICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdC8vICAgICBkZWJ1Z2dlcjtcclxuXHRcdC8vICAgfSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cdGNvbmZpZ0NoYW5nZWQoKSB7XHJcblx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXNlcnZlci1jb25uZWN0aW5nLXRpbWVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIj5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljIHRpdGxlXCI+e3tkYXRhLkRlc2NyaXB0aW9ufX08L2Rpdj5cclxuICA8IS0tIDxkaXYgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBjbGFzcz1cIm51bWVyaWNcIj57e3RpbWUgfCB0aW1lQ291bnRlcn19PC9kaXY+IC0tPlxyXG4gIDxkaXYgW2lkXT1cIidkaWFncmFtXycgKyBkYXRhLl9pZFwiPjwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2AubnVtZXJpY3tmb250LXNpemU6Mi40ZW07bGluZS1oZWlnaHQ6MS44fS5udW1lcmljLnRpdGxle2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYTtmb250LXNpemU6MS4xZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbm5lY3RpbmdUaW1lRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgdGltZTogbnVtYmVyID0gMDtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHRcdHRoaXMuZGF0YUxvYWRlZC5uZXh0KHRydWUpO1xyXG5cdH1cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRpbWUgPSB0aGlzLnRpbWUgKyAxO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlLCB0aGlzLmRhdGEuU291cmNlLlN5bmMpXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSk7XHJcblx0XHQvLyAgICAgICAgIH0pXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBEaWFncmFtTW9kdWxlQ29uZmlnLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IERpYWdyYW1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZykge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWcpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZERpYWdyYW1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdElzQWN0aXZlOiBCb29sZWFuO1xyXG5cdFx0VHlwZTogc3RyaW5nO1xyXG5cdFx0VHlwZXM6IHsgW2NvbHVtbkxhYmVsOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRcdExlZ2VuZDogQm9vbGVhbjtcclxuXHRcdFN1YmNoYXJ0OiBCb29sZWFuO1xyXG5cdFx0Wm9vbTogQm9vbGVhbjtcclxuXHRcdFRvb2x0aXA6IEJvb2xlYW47XHJcblx0XHRSb3V0ZTogc3RyaW5nO1xyXG5cdFx0U3luYzogbnVtYmVyO1xyXG5cdFx0Q29sb3JzOiBzdHJpbmdbXTtcclxuXHRcdENvbHVtbk1hcHBpbmdzOiB7IE5hbWVQYXRoOiBzdHJpbmc7IFZhbHVlUGF0aDogc3RyaW5nIH1bXTtcclxuXHRcdEZsb3c6IHN0cmluZztcclxuXHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0Q29sczogbnVtYmVyO1xyXG5cdFx0Um93czogbnVtYmVyO1xyXG5cdFx0VGV4dENvbG9yOiBTdHJpbmc7XHJcblx0XHRCYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuXHRcdGJvb2xlYW5vOiBhbnk7XHJcblx0XHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFx0R3JvdXBzOiBzdHJpbmdbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QgPSB7fSBhcyBBZGREaWFncmFtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHROYW1lOiB0aGlzLk5hbWUsXHJcblx0XHRcdFx0SXNBY3RpdmU6IHRoaXMuSXNBY3RpdmUsXHJcblx0XHRcdFx0U291cmNlOiB0aGlzLlNvdXJjZSxcclxuXHRcdFx0XHRUeXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0R3JvdXBzOiB0aGlzLkdyb3VwcyxcclxuXHRcdFx0XHRXaWRnZXQ6IHtcclxuXHRcdFx0XHRcdGJvb2xlYW5vOiB0aGlzLmJvb2xlYW5vXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRDaGFydDoge1xyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiB0aGlzLlR5cGUsXHJcblx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Y29sb3JzOiB0aGlzLkNvbG9ycyxcclxuXHRcdFx0XHRcdFx0dHlwZXM6IHRoaXMuVHlwZXNcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRDb2x1bW5NYXBwaW5nczogdGhpcy5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0XHRcdEZsb3c6IHRoaXMuRmxvdyxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0aGlzLkxlZ2VuZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRoaXMuU3ViY2hhcnRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR6b29tOiB7XHJcblx0XHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuWm9vbVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRcdFx0Z3JvdXBlZDogdGhpcy5Ub29sdGlwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRCb3g6IHtcclxuXHRcdFx0XHRcdENvbHM6IHRoaXMuQ29scyxcclxuXHRcdFx0XHRcdFJvd3M6IHRoaXMuUm93cyxcclxuXHRcdFx0XHRcdFRleHRDb2xvcjogdGhpcy5UZXh0Q29sb3IsXHJcblx0XHRcdFx0XHRCYWNrZ3JvdW5kQ29sb3I6IHRoaXMuQmFja2dyb3VuZENvbG9yXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW10pLFxyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U3luYzogbmV3IEZvcm1Db250cm9sKDAsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRJc0FjdGl2ZTogbmV3IEZvcm1Db250cm9sKFwidHJ1ZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0VHlwZTogbmV3IEZvcm1Db250cm9sKFwicGllXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRHcm91cHM6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TGVnZW5kOiBuZXcgRm9ybUNvbnRyb2woXCJ0cnVlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRTdWJjaGFydDogbmV3IEZvcm1Db250cm9sKFwiZmFsc2VcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFpvb206IG5ldyBGb3JtQ29udHJvbChcImZhbHNlXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUb29sdGlwOiBuZXcgRm9ybUNvbnRyb2woXCJmYWxzZVwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0U291cmNlOiBuZXcgRm9ybUNvbnRyb2woe30sIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRjb2x1bW5zOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbHM6IG5ldyBGb3JtQ29udHJvbCgxLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Um93czogbmV3IEZvcm1Db250cm9sKDEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUZXh0Q29sb3I6IG5ldyBGb3JtQ29udHJvbChcIiMwMDAwMDBcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEJhY2tncm91bmRDb2xvcjogbmV3IEZvcm1Db250cm9sKFwiI2ZmZmZmZlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29sb3JzOiBuZXcgRm9ybUdyb3VwKHt9KSxcclxuXHRcdFx0XHRUeXBlczogbmV3IEZvcm1Hcm91cCh7fSksXHJcblx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IG5ldyBGb3JtQXJyYXkoW10pLFxyXG5cdFx0XHRcdEZsb3c6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcclxuXHRcdFx0XHRkb251dDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiRGVmYXVsdCBUaXRsZVwiKVxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGJvb2xlYW5vOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFN1Y2Nlc3NNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJTdWNjZXNzTWVzc2FnZVwiKSxcclxuXHRcdFx0XHRcdEZhaWx1cmVNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woXCJGYWlsdXJlTWVzc2FnZVwiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBEaWFncmFtTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9kaWFncmFtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvc291cmNlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb25maWcgfSBmcm9tIFwiLi4vZGlhZ3JhbS5jb25maWdcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgXzogYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VydmljZSB7XHJcblx0Y29uZmlnOiBEaWFncmFtTW9kdWxlQ29uZmlnO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IERpYWdyYW1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZztcclxuXHR9XHJcblxyXG5cdGdldERpYWdyYW1zKCk6IE9ic2VydmFibGU8R2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQuZ2V0PEdldERpYWdyYW1zQXBpTW9kZWwuUmVzcG9uc2U+KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldFNvdXJjZXMoKTogT2JzZXJ2YWJsZTxTb3VyY2VNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9zb3VyY2VcIilcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2UpID0+IChyZXNwb25zZSBhcyBhbnkpLlJlc3VsdClcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0Z2V0R3JvdXBzKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgXCIvYXBpL2RpYWdyYW0vZ3JvdXBzXCIpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UgYXMgYW55KS5SZXN1bHQpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAoIWlkKSBkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldCh0aGlzLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgYC9hcGkvZGlhZ3JhbS8ke2lkfWApXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0YWRkRGlhZ3JhbShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wb3N0PEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZT4odGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIFwiL2FwaS9kaWFncmFtXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlKSA9PiByZXNwb25zZSlcclxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0dXBkYXRlRGlhZ3JhbShib2R5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucHV0KHRoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBcIi9hcGkvZGlhZ3JhbVwiLCBib2R5KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGRlbGV0ZURpYWdyYW0oaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5kZWxldGUoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RpYWdyYW0vJHtpZH1gKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZSkgPT4gcmVzcG9uc2UpXHJcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdGdldERhdGEoc291cmNlOiBTb3VyY2VNb2RlbCwgdW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4sIHRpbWU6IG51bWJlciA9IDAsIG9uY2U6IEJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRpZiAob25jZSAmJiB0aW1lICE9PSAwKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdHNvdXJjZUlkOiBzb3VyY2UuX2lkLFxyXG5cdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSBpZiAoc291cmNlLkludGVydmFsID09IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHRcdC5nZXQoYCR7dGhpcy5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2RhdGFgLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdHRpbWU6IG51bGxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5tYXAoKHJlczogYW55KSA9PiByZXMuUmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbWUgPSB0aW1lIHx8IERhdGUubm93KCk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRpbWVyKDAsIHNvdXJjZS5JbnRlcnZhbCkucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodW5zdWJzY3JpYmUpLFxyXG5cdFx0XHRcdHN3aXRjaE1hcCgoaSkgPT5cclxuXHRcdFx0XHRcdHRoaXMuaHR0cFxyXG5cdFx0XHRcdFx0XHQuZ2V0KGAke3RoaXMuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9kYXRhYCwge1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0c291cmNlSWQ6IHNvdXJjZS5faWQsXHJcblx0XHRcdFx0XHRcdFx0XHR0aW1lOiB0aGlzLmdldEZsb29yVGltZShzb3VyY2UuSW50ZXJ2YWwsIHRpbWUpLnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pLnBpcGUoXHJcblx0XHRcdFx0XHRcdFx0bWFwKChyZXM6IGFueSkgPT4gcmVzLlJlc3VsdClcclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhOiBhbnksIGNvbHVtbnNNYXBwaW5ncykge1xyXG5cdFx0bGV0IHJlcyA9IFtdO1xyXG5cclxuXHRcdGNvbHVtbnNNYXBwaW5ncy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdGNvbnN0IFZhbHVlRGF0YSA9IF8uZ2V0VmFsdWUoZGF0YSwgaXRlbS5WYWx1ZVBhdGgpO1xyXG5cclxuXHRcdFx0aWYgKCFpdGVtLk5hbWVQYXRoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5wdXNoKFtpdGVtLlZhbHVlUGF0aC5zcGxpdChcIi5cIikucG9wKCldLmNvbmNhdChWYWx1ZURhdGEpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBOYW1lRGF0YSA9IF8uZ2V0VmFsdWUoZGF0YSwgaXRlbS5OYW1lUGF0aCk7XHJcblxyXG5cdFx0XHRpZiAoXy5pcy5hcnJheShOYW1lRGF0YSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gKHJlcyA9IHJlcy5jb25jYXQoTmFtZURhdGEubWFwKChfaXRlbSwgaSkgPT4gW19pdGVtXS5jb25jYXQoVmFsdWVEYXRhW2ldKSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnB1c2goW05hbWVEYXRhXS5jb25jYXQoVmFsdWVEYXRhKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Z2V0X2RhdGFfcmVwb3J0KGRhdGE6IGFueSkge1xyXG5cdFx0cmV0dXJuIF8ucmVwb3J0KGRhdGEpO1xyXG5cdH1cclxuXHRnZXRfbGFzdF9ub2RlX29mX2RhdGEoZGF0YTogYW55KSB7XHJcblx0XHRyZXR1cm4gKF8ucmVwb3J0KGRhdGEpIGFzIGFueVtdKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXNMYXN0Tm9kZSk7XHJcblx0fVxyXG5cdGJ1aWxkQ2hhcnRDb25maWcoY29sdW1ucykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnNcclxuXHRcdFx0fSxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHQvLyBUT0RPOiBpbXBsZW1lbnQgaW50ZXJmYWNlIG9mIGMzIGNvbmZpZ1xyXG5cdGNoYXJ0cyA9IHt9O1xyXG5cdGdlbmVyYXRlRGlhZ3JhbShjb25maWc6IGFueSwgaWQ6IHN0cmluZywgcm91dGU6IHN0cmluZywgc3luYzogbnVtYmVyKTogU3Vic2NyaXB0aW9uIHtcclxuXHRcdHRoaXMuY2hhcnRzW2lkXSA9IGMzLmdlbmVyYXRlKHtcclxuXHRcdFx0Li4uY29uZmlnLFxyXG5cdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke2lkfWBcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmdldERhdGEoe30gYXMgU291cmNlTW9kZWwsIG5ldyBTdWJqZWN0PHZvaWQ+KCksIHN5bmMpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0c1tpZF0ubG9hZCh7XHJcblx0XHRcdFx0Y29sdW1uczogdGhpcy5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgY29uZmlnLkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRGbG9vclRpbWUocHJlY2lzaW9uID0gNjAgKiAxMDAwLCB0aW1lOiBudW1iZXIgPSAwKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcigodGltZSB8fCBEYXRlLm5vdygpKSAvIHByZWNpc2lvbik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm51bWVyaWMtZWRpdC1kaWFncmFtXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgKm5nSWY9XCJkYXRhTG9hZGVkIHwgYXN5bmNcIiBjbGFzcz1cImRpYWdyYW0tYm94XCI+XHJcbiAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5udW1lcmlje2ZvbnQtc2l6ZTozZW07bGluZS1oZWlnaHQ6MS44O2ZvbnQtZmFtaWx5OmlyYW4tc2Fucy1ib2xkLFRhaG9tYX0ubnVtZXJpYy50aXRsZXtmb250LXNpemU6MS41ZW19YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0ZGF0YUxvYWRlZCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cdF9kYXRhO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbiA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmRhdGEuU291cmNlLlJvdXRlKVxyXG5cdFx0dGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIHRoaXMudW5zdWJzY3JpYmUpLnBpcGUoXHJcblx0XHRcdGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW0tbnVtZXJpY1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cImRhdGFMb2FkZWQgfCBhc3luY1wiPlxyXG4gIDwhLS0gPGRpdiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGNsYXNzPVwibnVtZXJpY1wiPnt7ZGF0YS5Tb3VyY2UuRGF0YSB8IGpzb259fTwvZGl2PiAtLT5cclxuICA8ZGl2IGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJudW1lcmljXCI+e3tjb3VudGVyfX08L2Rpdj5cclxuICA8ZGl2IFtpZF09XCInZGlhZ3JhbV8nICsgZGF0YS5faWRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0ubnVtZXJpY3tmb250LXNpemU6M2VtO2xpbmUtaGVpZ2h0OjEuODtmb250LWZhbWlseTppcmFuLXNhbnMtYm9sZCxUYWhvbWF9Lm51bWVyaWMudGl0bGV7Zm9udC1zaXplOjEuNWVtfS5tYXQtY2FyZHtwYWRkaW5nOjB9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNEaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRkYXRhTG9hZGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblx0X2RhdGE7XHJcblx0Y291bnRlcjogbnVtYmVyO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLmRhdGFMb2FkZWQubmV4dCh0cnVlKTtcclxuXHR9XHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcclxuXHR9XHJcblx0ZGF0YVN1YnNjcmlidGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kYXRhID0gdGhpcy5pbmplY3Rvci5nZXQoXCJkYXRhXCIpO1xyXG5cdFx0dGhpcy5jb3VudGVyID0gMDtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIHRoaXMudW5zdWJzY3JpYmUpLnBpcGUoXHJcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvdW50ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoZGF0YS5EYXRhLCB0aGlzLmRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MpO1xyXG5cdFx0XHR0aGlzLmNvdW50ZXIgPSBjb3VudGVyWzBdWzFdO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG4vLyBpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICdhcHAvbW9kZWxzL2F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgYXBwUmVkdWNlciBmcm9tICdhcHAvcmVkdWNlcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4ZmxleD1cIjEwMFwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbjwvZGl2PlxyXG5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZGVjbGFyZSB2YXIgXzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGF0YS1tYXBwZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgIDxkaXYgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAgICBLZXlcclxuICAgICAgICA8L2I+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgPGI+XHJcbiAgICAgICAgICAgIFR5cGVcclxuICAgICAgICA8L2I+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVJlcG9ydFwiIFtjbGFzc109XCInZGVwdHNfJyArIGl0ZW0uZGVwdHNcIiBmeExheW91dD1cInJvd1wiPlxyXG4gICAgPGRpdiBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuXHRzdHlsZXM6IFtgbWF0LXJhZGlvLWJ1dHRvbnt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2t9ZGl2LmRlcHRzXzJ7bWFyZ2luLXJpZ2h0OjI1cHh9ZGl2LmRlcHRzXzN7bWFyZ2luLXJpZ2h0OjUwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGFNYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGRlc3RpbmF0aW9uOiBzdHJpbmc7XHJcblx0X2RhdGE6IGFueTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5kYXRhUmVwb3J0ID0gXy5yZXBvcnQoZGF0YSk7XHJcblx0XHR0aGlzLl9kYXRhID0gZGF0YTtcclxuXHR9XHJcblx0ZGF0YVJlcG9ydDogYW55W10gPSBbXTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4vc291cmNlLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbU1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHROYW1lOiBzdHJpbmc7XHJcblx0SXNBY3RpdmU6IGJvb2xlYW47XHJcblx0RGVzY3JpcHRpb246IHN0cmluZztcclxuXHRHcm91cHM6IHN0cmluZ1tdO1xyXG5cdEJveDoge1xyXG5cdFx0TnVtYmVyT2ZDb2x1bW5zOiBudW1iZXI7XHJcblx0XHRPcmRlcjogbnVtYmVyO1xyXG5cdFx0QmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblx0fTtcclxuXHRTb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdFdpZGdldDoge1xyXG5cdFx0XCJib29sZWFub1wiOiB7XHJcblx0XHRcdFwiU3VjY2Vzc01lc3NhZ2VcIjogc3RyaW5nO1xyXG5cdFx0XHRcIkZhaWx1cmVNZXNzYWdlXCI6IHN0cmluZztcclxuXHRcdH07XHJcblx0fTtcclxuXHJcblx0Q2hhcnQ6IHtcclxuXHRcdGRhdGE6IHtcclxuXHRcdFx0dHlwZTogXCJwaWVcIiB8IFwibGluZWFyXCIgfCBcInNjYXR0ZXJcIiB8IFwiYmFyXCIgfCBcImxpbmVcIjtcclxuXHRcdFx0dHlwZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblx0XHRcdGNvbHVtbnM6IGFueVtdO1xyXG5cdFx0XHRjb2xvcnM6IGFueVtdO1xyXG5cdFx0fTtcclxuXHRcdEZsb3c6IGJvb2xlYW47XHJcblx0XHRDb2x1bW5NYXBwaW5nczoge1xyXG5cdFx0XHROYW1lUGF0aDogc3RyaW5nO1xyXG5cdFx0XHRWYWx1ZVBhdGg6IHN0cmluZztcclxuXHRcdH1bXTtcclxuXHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRzaG93OiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdHNob3c6IGJvb2xlYW47XHJcblx0XHR9O1xyXG5cdFx0em9vbToge1xyXG5cdFx0XHRlbmFibGVkOiBib29sZWFuO1xyXG5cdFx0fTtcclxuXHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0Z3JvdXBlZDogYm9vbGVhbjtcclxuXHRcdH07XHJcblx0fTtcclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEFkZERpYWdyYW1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvYWRkLWRpYWdyYW0tYXBpLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGREaWFncmFtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9ESUFHUkFNID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTVwiLFxyXG5cdEFERF9ESUFHUkFNX1NUQVJUID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9TVEFSVFwiLFxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQgPSBcIltESUFHUkFNXVtBRERdIEFERF9ESUFHUkFNX1NVQ0NFRURcIixcclxuXHRESUFHUkFNX0NPTkZJR19DSEFOR0VEID0gXCJbRElBR1JBTV1bQUREXSBESUFHUkFNX0NPTkZJR19DSEFOR0VEXCIsXHJcblx0QUREX0RJQUdSQU1fRkFJTEVEID0gXCJbRElBR1JBTV1bQUREXSBBRERfRElBR1JBTV9GQUlMRURcIixcclxuXHRTVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fU1RBUlRcIixcclxuXHRIQVZFX0VORFBPSU5UID0gXCJbRElBR1JBTV1bQUREXSBIQVZFX1NUUlVDVFVSRVwiLFxyXG5cdERBVEFfTE9BREVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0xPQURFRFwiLFxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX0VORCA9IFwiW0RJQUdSQU1dW0FERF0gU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EXCIsXHJcblx0Q09MVU1OU19NQVBQSU5HX0NIQU5HRUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTlNfTUFQUElOR19DSEFOR0VEXCIsXHJcblx0REFUQV9DQUxDVUxBVEVEID0gXCJbRElBR1JBTV1bQUREXSBEQVRBX0NBTENVTEFURURcIixcclxuXHRDT0xVTU5fQURERUQgPSBcIltESUFHUkFNXVtBRERdIENPTFVNTl9BRERFRFwiLFxyXG5cdEdFTkVSQVRFX0RJQUdSQU0gPSBcIltESUFHUkFNXVtBRERdIEdFTkVSQVRFX0RJQUdSQU1cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uU3RhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEFkZERpYWdyYW1BcGlNb2RlbC5SZXNwb25zZSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRGlhZ3JhbUFjdGlvblN1Y2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlc3BvbnNlKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQWN0aW9uRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIYXZlRW5kcG9pbnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhTG9hZGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5TVFJVQ1RVUkVfREVGSU5JVElPTl9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGREaWFncmFtQWN0aW9uVHlwZXMuU1RSVUNUVVJFX0RFRklOSVRJT05fRU5EO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvbHVtbnNNYXBwaW5nQ2hhbmdlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXRhQ2FsY3VsYXRlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0NBTENVTEFURUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVEaWFncmFtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkdFTkVSQVRFX0RJQUdSQU07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbkFkZGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkNPTFVNTl9BRERFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRGlhZ3JhbUFjdGlvbnMgPVxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0XHJcblx0fCBBZGREaWFncmFtQWN0aW9uU3VjY2VlZFxyXG5cdHwgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZFxyXG5cdHwgSGF2ZUVuZHBvaW50QWN0aW9uXHJcblx0fCBEYXRhTG9hZGVkQWN0aW9uXHJcblx0fCBTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb25cclxuXHR8IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG5cdHwgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uXHJcblx0fCBEYXRhQ2FsY3VsYXRlZEFjdGlvblxyXG5cdHwgR2VuZXJhdGVEaWFncmFtQWN0aW9uXHJcblx0fCBEaWFncmFtQ29uZmlnQ2hhbmdlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcInJ4anMvb3BlcmF0b3IvcHVibGlzaFwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuaW1wb3J0IHsgYWRkRGlhZ3JhbVJlZHVjZXIgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvYWRkLWRpYWdyYW0ucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBBZGREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2FkZC1kaWFncmFtLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NvdXJjZS5tb2RlbFwiO1xyXG5pbXBvcnQge1xyXG5cdEhhdmVFbmRwb2ludEFjdGlvbixcclxuXHRDb2x1bW5zTWFwcGluZ0NoYW5nZWRBY3Rpb24sXHJcblx0RGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24sXHJcblx0QWRkRGlhZ3JhbUFjdGlvblxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLWFkZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dC5sdC1tZD1cImNvbHVtblwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjYwXCI+XHJcbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgZnhMYXlvdXQ9J2NvbHVtbic+XHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5nCgcOYwrLDmcKIw5jCr8OZwoYgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoXDmMKzw5vCjMOYwrFcIiBmb3JtQ29udHJvbE5hbWU9XCJTb3VyY2VcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInJvdXRlRW50ZXJlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgIHt7aXRlbS5FbmRwb2ludH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInN5bmMgdGltZVwiIGZvcm1Db250cm9sTmFtZT1cIlN5bmNcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD7DmcKGw5nCiMOYwrkgw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxIDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIChjaGFuZ2UpPVwidHlwZUNoYW5nZWQoKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpYWdyYW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcm91cHNcIiBmb3JtQ29udHJvbE5hbWU9XCJHcm91cHNcIiBtdWx0aXBsZT5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAge3tmb3JtR3JvdXAuY29udHJvbHMuR3JvdXBzLnZhbHVlID8gZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZVswXSA6ICcnfX1cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZT8ubGVuZ3RoID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAoK3t7Zm9ybUdyb3VwLmNvbnRyb2xzLkdyb3Vwcy52YWx1ZS5sZW5ndGggLSAxfX0gb3RoZXJzKVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyb3VwcyB8IGFzeW5jXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGR5bmFtaWMtY29uZmlnLWNvbXBvbmVudC1zZWxlY3RvciAoQ29uZmlnQ2hhbmdlZCk9XCJjb25maWdDaGFuZ2VkKClcIiBbZGF0YV09XCJkaWFncmFtUGFydGlhbENvbmZpZ1wiPjwvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBpZD1cIm1vZGlmeS1kaWFncmFtXCIgZnhGbGV4PVwiNDBcIiBbZGF0YV09XCJkaWFncmFtTW9kZWxcIj48L2R5bmFtaWMtY29tcG9uZW50LXNlbGVjdG9yPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQubHQtbWQ9XCJjb2x1bW5cIj5cclxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT4gw5jCs8OYwqfDmMKuw5jCqsOYwqfDmMKxIMOYwq/Dm8KMw5jCqsOYwqcgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIyNVwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmcKGw5rCr8OYwqfDmMK0w5jCqiDDmMKvw5jCp8OYwq/DmcKHPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGNvbHVtbnNNYXBwaW5nczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImNvbHVtbnNNYXBwaW5nc1tpXVwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCI0NVwiIGZ4RmxleC54cz1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKFw5jCs8ObwozDmMKxXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVBhdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbj4tLTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwYXRoT3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnBhdGhcIiBbY2xhc3NdPVwiJ21hdC1vcHRpb24gZGVwdGhfJyArIGl0ZW0uZGVwdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cIjQ1XCIgZnhGbGV4LnhzPVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiw5nChcOZwoLDmMKvw5jCp8OYwrEgw5nChcOYwrPDm8KMw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlZhbHVlUGF0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uPi0tPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCIgW2Rpc2FibGVkXT1cIiFpdGVtLmlzTGFzdE5vZGVcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgcGF0aE9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS5wYXRoXCIgW2NsYXNzXT1cIidtYXQtb3B0aW9uIGRlcHRoXycgKyBpdGVtLmRlcHRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ucGF0aH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlQ29sdW1uKGkpXCIgZnhGbGV4IG1hdC1pY29uLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkQ29sdW1uKClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmMKzw5jCqsOZwojDmcKGPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5nChsOYwqrDmMKnw5vCjMOYwqwgw5jCr8OYwqfDmMKvw5nChyDDmcKHw5jCpzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBmeExheW91dD1cInJvd1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm1Hcm91cC5jb250cm9scy5jb2x1bW5zLnZhbHVlOyBsZXQgaT1pbmRleFwiXHJcbiAgICAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBmeEZsZXg9XCI0MFwiPnt7aXRlbVswXX19IDoge3tpdGVtWzFdfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGZ4RmxleCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5Db2xvcnNcIiAqbmdJZj1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLkNvbG9ycykuY29udHJvbHNbaXRlbVswXV1cIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKxw5nChsOawq8gw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiBbZm9ybUNvbnRyb2xOYW1lXT1cIml0ZW1bMF1cIiB0eXBlPVwiY29sb3JcIj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMzBcIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5jb250cm9scy5UeXBlc1wiICpuZ0lmPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuVHlwZXMpLmNvbnRyb2xzW2l0ZW1bMF1dXCI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0aXBvXCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkKClcIiA+IC0tPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwidGlwb1wiIFtmb3JtQ29udHJvbE5hbWVdPVwiaXRlbVswXVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkaWFncmFtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjVcIj5cclxuICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCqsOZwobDmMK4w5vCjMOZwoXDmMKnw5jCqiDDmMK4w5jCp8OZwofDmMKxw5vCjDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMK3w5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIkNvbHNcIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwqrDmMK5w5jCr8OYwqfDmMKvIMOYwrPDmMKqw5nCiMOZwoZcIiBmb3JtQ29udHJvbE5hbWU9XCJSb3dzXCI+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZnhGbGV4PVwiNTBcIj7DmMKxw5nChsOawq8gw5nChcOYwqrDmcKGIDo8L2xhYmVsPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cIlRleHRDb2xvclwiIHR5cGU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIj5cclxuICAgICAgICAgIDxsYWJlbCBmeEZsZXg9XCI1MFwiPsOYwrHDmcKGw5rCryDDmcK+w5jCsyDDmMKyw5nChcObwozDmcKGw5nChyA6PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiQmFja2dyb3VuZENvbG9yXCIgdHlwZT1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dEFsaWduPVwiZW5kIGNlbnRlclwiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZCgkZXZlbnQpXCIgZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleD0nbm9ncm93JyBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9kaWFncmFtcyc+w5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYCNjaGFydHt3aWR0aDozMDBweDtkaXJlY3Rpb246bHRyfS5mb3JtLWVsZW1lbnQtbWFyZ2lue21hcmdpbjo1cHggMTBweH0uaXRlbS1tYXJnaW57bWFyZ2luOjEwcHggMDtkaXNwbGF5OmJsb2NrfW1hdC1vcHRpb24uZGVwdGhfMntwYWRkaW5nLXJpZ2h0OjMwcHh9bWF0LW9wdGlvbi5kZXB0aF8ze3BhZGRpbmctcmlnaHQ6NTBweH1tYXQtb3B0aW9uLmRlcHRoXzR7cGFkZGluZy1yaWdodDo3MHB4fS5tYXQtY2FyZHttYXJnaW46MTIuNXB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGREaWFncmFtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IEFkZERpYWdyYW1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRkYXRhOiBhbnk7XHJcblx0Y29sdW1uczogYW55O1xyXG5cdGNoYXJ0O1xyXG5cdGRpYWdyYW1UeXBlczogc3RyaW5nW107XHJcblx0cGF0aE9wdGlvbnM6IHtcclxuXHRcdHBhdGg6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdHR5cGU6IHN0cmluZztcclxuXHRcdGNvbG9yOiBzdHJpbmc7XHJcblx0fVtdO1xyXG5cdGNvbHVtbnNNYXBwaW5nczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdGRpYWdyYW1Nb2RlbDogRGlhZ3JhbU1vZGVsO1xyXG5cdGNvbXBvbmVudE1vZGVsOiB7IGNvbXBvbmVudDogYW55OyBpbnB1dHM6IG9iamVjdCB9O1xyXG5cdHR5cGVNYXBUb0RpYWdyYW06IHsgW3R5cGU6IHN0cmluZ106IGFueSB9O1xyXG5cdGRpYWdyYW1QYXJ0aWFsQ29uZmlnOiB7IHR5cGU6IHN0cmluZzsgaW5wdXRzOiB7IGZvcm1Hcm91cDogRm9ybUdyb3VwOyBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UgfSB9O1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0Z3JvdXBzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHRzb3VyY2U6IFNvdXJjZU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5zb3VyY2VzID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLmdyb3VwcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0R3JvdXBzKCk7XHJcblx0XHQvLyB0aGlzLmRpYWdyYW1Nb2RlbCA9IG5ldyBEaWFncmFtTW9kZWwoKTtcclxuXHRcdHRoaXMuY29sdW1uc01hcHBpbmdzID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3QgZGlhZ3JhbUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblx0XHRcdGRpYWdyYW1JZCAmJlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbShkaWFncmFtSWQpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRfaWQ6IGRhdGEuX2lkLFxyXG5cdFx0XHRcdFx0XHROYW1lOiBkYXRhLk5hbWUsXHJcblx0XHRcdFx0XHRcdElzQWN0aXZlOiBkYXRhLklzQWN0aXZlLFxyXG5cdFx0XHRcdFx0XHRHcm91cHM6IGRhdGEuR3JvdXBzLFxyXG5cdFx0XHRcdFx0XHRUeXBlOiBkYXRhLkNoYXJ0LmRhdGEudHlwZSxcclxuXHRcdFx0XHRcdFx0TGVnZW5kOiBkYXRhLkNoYXJ0LmxlZ2VuZC5zaG93LFxyXG5cdFx0XHRcdFx0XHRTdWJjaGFydDogZGF0YS5DaGFydC5zdWJjaGFydC5zaG93LFxyXG5cdFx0XHRcdFx0XHRab29tOiBkYXRhLkNoYXJ0Lnpvb20uZW5hYmxlZCxcclxuXHRcdFx0XHRcdFx0VG9vbHRpcDogZGF0YS5DaGFydC50b29sdGlwLmdyb3VwZWQsXHJcblx0XHRcdFx0XHRcdFN5bmM6IGRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRTb3VyY2U6IGRhdGEuU291cmNlLFxyXG5cdFx0XHRcdFx0XHRjb2x1bW5zOiBkYXRhLkNoYXJ0LmRhdGEuY29sdW1ucyxcclxuXHRcdFx0XHRcdFx0Q29sdW1uTWFwcGluZ3M6IGRhdGEuQ2hhcnQuQ29sdW1uTWFwcGluZ3MsXHJcblx0XHRcdFx0XHRcdENvbHM6IGRhdGEuQm94LkNvbHMsXHJcblx0XHRcdFx0XHRcdEZsb3c6IGRhdGEuQ2hhcnQuRmxvdyxcclxuXHRcdFx0XHRcdFx0Um93czogZGF0YS5Cb3guUm93cyxcclxuXHRcdFx0XHRcdFx0QmFja2dyb3VuZENvbG9yOiBkYXRhLkJveC5CYWNrZ3JvdW5kQ29sb3IsXHJcblx0XHRcdFx0XHRcdFRleHRDb2xvcjogZGF0YS5Cb3guVGV4dENvbG9yXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjb2xvcnNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIkNvbG9yc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS5jb2xvcnMgfHwge30pLmZvckVhY2goY29sdW1uS2V5ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yc0NvbnRyb2wuYWRkQ29udHJvbChjb2x1bW5LZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEuY29sb3JzW2NvbHVtbktleV0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IHR5cGVzQ29udHJvbCA9IDxGb3JtR3JvdXA+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUeXBlc1wiXTtcclxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKGRhdGEuQ2hhcnQuZGF0YS50eXBlcyB8fCB7fSkuZm9yRWFjaChrZXkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoIShrZXkgaW4gdHlwZXNDb250cm9sLmNvbnRyb2xzKSlcclxuXHRcdFx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbChkYXRhLkNoYXJ0LmRhdGEudHlwZXNba2V5XSkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRkYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzLmZvckVhY2gobWFwcGluZyA9PiB0aGlzLmFkZENvbHVtbihtYXBwaW5nLk5hbWVQYXRoLCBtYXBwaW5nLlZhbHVlUGF0aCkpO1xyXG5cdFx0XHRcdFx0dGhpcy5zb3VyY2UgPSBkYXRhLlNvdXJjZTtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1QYXJ0aWFsQ29uZmlnID0ge1xyXG5cdFx0XHRcdHR5cGU6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUsXHJcblx0XHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0XHRmb3JtR3JvdXA6IHRoaXMuZm9ybUdyb3VwLFxyXG5cdFx0XHRcdFx0ZGlhZ3JhbVNlcnZpY2U6IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmRpYWdyYW1UeXBlcyA9IFtcclxuXHRcdFx0XCJiYXJcIixcclxuXHRcdFx0XCJkb251dFwiLFxyXG5cdFx0XHRcInBpZVwiLFxyXG5cdFx0XHRcInNjYXR0ZXJcIixcclxuXHRcdFx0XCJsaW5lXCIsXHJcblx0XHRcdFwiYXJlYVwiLFxyXG5cdFx0XHRcImFyZWEtc3BsaW5lXCIsXHJcblx0XHRcdFwibnVtZXJvXCIsXHJcblx0XHRcdFwiYm9vbGVhbm9cIixcclxuXHRcdFx0XCJ0ZW1wb1wiXHJcblx0XHRdO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRzdGF0dXMgPT0gXCJWQUxJRFwiICYmXHJcblx0XHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMubGVuZ3RoID4gMCAmJlxyXG5cdFx0XHRcdHRoaXMuZGF0YVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ29sdW1uc01hcHBpbmdDaGFuZ2VkQWN0aW9uKHRoaXMpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmRhdGFTdWJzY3JpcHRpb24pIHRoaXMuZGF0YVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdC8vIGdldERhdGEoKSB7XHJcblx0Ly8gICBjb25zdCBvJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGF0YSh0aGlzLnNvdXJjZSk7XHJcblx0Ly8gICB0aGlzLmRhdGFTdWJzY3JpcHRpb24gPSBvJC5zdWJzY3JpYmUoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbih0aGlzKSlcclxuXHQvLyAgIHJldHVybiBvJDtcclxuXHQvLyB9XHJcblx0Z2V0RGF0YVN0cnVjdHVyZSgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERhdGEoeyAuLi50aGlzLnNvdXJjZSwgSW50ZXJ2YWw6IDAgfSwgdGhpcy51bnN1YnNjcmliZSwgRGF0ZS5ub3coKSAtIDEwMDAwKTtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlwdGlvbiA9IG9ic2VydmVyLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0XHR0aGlzLnBhdGhPcHRpb25zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXRfZGF0YV9yZXBvcnQoZGF0YS5EYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyO1xyXG5cdH1cclxuXHRjb25maWdDaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHR0eXBlQ2hhbmdlZCgpIHtcclxuXHRcdGNvbnN0IHR5cGVzRm9ybUdyb3VwID0gKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLlR5cGVzIGFzIEZvcm1Hcm91cCkuY29udHJvbHM7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuXHRcdGZvciAoY29uc3QgY2IgaW4gdHlwZXNGb3JtR3JvdXApIHtcclxuXHRcdFx0dHlwZXNGb3JtR3JvdXBbY2JdLnNldFZhbHVlKHRoaXMuZm9ybUdyb3VwLnZhbHVlLlR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaWFncmFtUGFydGlhbENvbmZpZyA9IHtcclxuXHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0aW5wdXRzOiB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwOiB0aGlzLmZvcm1Hcm91cCxcclxuXHRcdFx0XHRkaWFncmFtU2VydmljZTogdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGlhZ3JhbUNvbmZpZ0NoYW5nZWRBY3Rpb24odGhpcykpO1xyXG5cdH1cclxuXHRhZGRDb2x1bW4oTmFtZVBhdGg6IHN0cmluZyA9IFwiXCIsIFZhbHVlUGF0aDogc3RyaW5nID0gXCJcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJDb2x1bW5NYXBwaW5nc1wiXTtcclxuXHRcdGNvbnRyb2wucHVzaChcclxuXHRcdFx0dGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHRcdFx0TmFtZVBhdGg6IFtOYW1lUGF0aF0sXHJcblx0XHRcdFx0VmFsdWVQYXRoOiBbVmFsdWVQYXRoLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cm91dGVFbnRlcmVkKGV2ZW50KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuc291cmNlID0gZXZlbnQudmFsdWU7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgU291cmNlOiBldmVudC52YWx1ZSB9KTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEhhdmVFbmRwb2ludEFjdGlvbih0aGlzKSk7XHJcblx0fVxyXG5cdHJlbW92ZUNvbHVtbihpOiBudW1iZXIpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sdW1uTWFwcGluZ3NcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHRjYWxjdWxhdGVDb2x1bW5zKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG5cdFx0cmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VyID0+IHtcclxuXHRcdFx0Y29uc3QgY29sdW1uc01BcHBpbmcgPSB7XHJcblx0XHRcdFx0Ly8gTmFtZVZBbHVlOiAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLkNvbHVtbk1hcHBpbmdzIGFzIEZvcm1BcnJheSkuY29udHJvbHMudmFsdWVzXHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGNvbHVtbnMgPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmV4dHJhY3RfY29sdW1uc19mcm9tX2RhdGEoXHJcblx0XHRcdFx0dGhpcy5kYXRhLFxyXG5cdFx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2x1bW5NYXBwaW5ncyBhcyBGb3JtQXJyYXkpLnZhbHVlXHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMuc2V0VmFsdWUoY29sdW1ucyk7XHJcblx0XHRcdC8vIGFkZCBuZXcgaXRlbSB0byB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5jb2xvcnMgZm9ybSBjb250cm9sXHJcblx0XHRcdGNvbnN0IGNvbG9yc0NvbnRyb2wgPSA8Rm9ybUdyb3VwPnRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW1wiQ29sb3JzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb2x1bW5LZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoY29sdW1uS2V5IGluIGNvbG9yc0NvbnRyb2wuY29udHJvbHMpKVxyXG5cdFx0XHRcdFx0Y29sb3JzQ29udHJvbC5hZGRDb250cm9sKGNvbHVtbktleSwgbmV3IEZvcm1Db250cm9sKFwiIzEyMzQ1NlwiKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgdHlwZXNDb250cm9sID0gPEZvcm1Hcm91cD50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlR5cGVzXCJdO1xyXG5cdFx0XHRjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuXHRcdFx0XHRjb25zdCBrZXkgPSBjb2x1bW5bMF07XHJcblx0XHRcdFx0aWYgKCEoa2V5IGluIHR5cGVzQ29udHJvbC5jb250cm9scykpXHJcblx0XHRcdFx0XHR0eXBlc0NvbnRyb2wuYWRkQ29udHJvbChrZXksIG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvcm1Hcm91cC52YWx1ZS5UeXBlKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvYnNlci5uZXh0KCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2VuZXJhdGVEaWFncmFtKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCB0ZW1wID0gbmV3IERpYWdyYW1Nb2RlbCgpO1xyXG5cdFx0dGVtcC5faWQgPSBcInRlbXBsYXRlX2lkXCI7XHJcblx0XHR0ZW1wLk5hbWUgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZS5OYW1lO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0ZW1wLlNvdXJjZSA9IHRoaXMuc291cmNlO1xyXG5cdFx0dGVtcC5Cb3ggPSB7XHJcblx0XHRcdE51bWJlck9mQ29sdW1uczogMSxcclxuXHRcdFx0T3JkZXI6IDEsXHJcblx0XHRcdEJhY2tncm91bmRDb2xvcjogdGhpcy5mb3JtR3JvdXAudmFsdWUuQmFja2dyb3VuZENvbG9yXHJcblx0XHR9O1xyXG5cdFx0dGVtcC5XaWRnZXQgPSB7XHJcblx0XHRcdGJvb2xlYW5vOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5ib29sZWFub1xyXG5cdFx0fTtcclxuXHRcdHRlbXAuQ2hhcnQgPSB7XHJcblx0XHRcdENvbHVtbk1hcHBpbmdzOiB0aGlzLmZvcm1Hcm91cC52YWx1ZS5Db2x1bW5NYXBwaW5ncyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNvbHVtbnM6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmNvbHVtbnMudmFsdWUsXHJcblx0XHRcdFx0dHlwZTogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZSxcclxuXHRcdFx0XHR0eXBlczogdGhpcy5mb3JtR3JvdXAudmFsdWUuVHlwZXMsXHJcblx0XHRcdFx0Y29sb3JzOiB0aGlzLmZvcm1Hcm91cC5jb250cm9scy5Db2xvcnMudmFsdWVcclxuXHRcdFx0fSxcclxuXHRcdFx0RmxvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuRmxvdyxcclxuXHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuTGVnZW5kXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YmNoYXJ0OiB7XHJcblx0XHRcdFx0c2hvdzogdGhpcy5mb3JtR3JvdXAudmFsdWUuU3ViY2hhcnRcclxuXHRcdFx0fSxcclxuXHRcdFx0em9vbToge1xyXG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlpvb21cclxuXHRcdFx0fSxcclxuXHRcdFx0dG9vbHRpcDoge1xyXG5cdFx0XHRcdGdyb3VwZWQ6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLlRvb2x0aXBcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0b29sdGlwOiB7XHJcblx0XHRcdC8vICAgICAgICAgZm9ybWF0OiB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwiJVwiO1xyXG5cdFx0XHQvLyAgICAgICAgICAgICAgICAgfVxyXG5cdFx0XHQvLyAgICAgICAgIH1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Ly8gY29sb3I6IHtcclxuXHRcdFx0Ly8gICAgICAgICBwYXR0ZXJuOiBbJyM2MEIwNDQnLCAnI0Y2QzYwMCcsICcjRjk3NjAwJywgJyNGRjAwMDAnXSxcclxuXHRcdFx0Ly8gICAgICAgICB0aHJlc2hvbGQ6IHtcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIC8vICB1bml0OiAndmFsdWUnLCAvLyBwZXJjZW50YWdlIGlzIGRlZmF1bHRcclxuXHRcdFx0Ly8gICAgICAgICAgICAgICAgIHZhbHVlczogWzMwLCA2MCwgOTAsIDEwMF1cclxuXHRcdFx0Ly8gICAgICAgICB9XHJcblx0XHRcdC8vIH0sXHJcblx0XHR9O1xyXG5cdFx0Ly8gdGhpcy5jb21wb25lbnRNb2RlbCA9IHtcclxuXHRcdC8vICAgY29tcG9uZW50OiB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bdGVtcC5DaGFydC5kYXRhLnR5cGVdLFxyXG5cdFx0Ly8gICBpbnB1dHM6IHsgZGF0YTogdGVtcCB9XHJcblx0XHQvLyB9XHJcblx0XHR0aGlzLmRpYWdyYW1Nb2RlbCA9IHRlbXA7XHJcblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xyXG5cdH1cclxuXHRhZGQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZERpYWdyYW1BY3Rpb24odGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc0FwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9nZXQtZGlhZ3JhbXMtYXBpLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkaWFncmFtLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJkaWFncmFtRGF0YSQgfCBhc3luY1wiIFtzdHlsZS5jb2xvcl09XCIoZGlhZ3JhbURhdGEkIHwgYXN5bmMpPy5Cb3guQ29sb3JcIj5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBjbGFzcz1cImRpYWdyYW0tYm94XCIgW2RhdGFdPVwiKGRpYWdyYW1EYXRhJCB8IGFzeW5jKVwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCU7bWFyZ2luOjEyLjVweH0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfS53aWRnZXQtdGl0bGV7Zm9udDoxLjNlbSBJUkFOU2Fucyx0YWhvbWF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIGRpYWdyYW1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkaWFncmFtczogT2JzZXJ2YWJsZTxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHJcblx0ZGlhZ3JhbURhdGEkOiBhbnk7XHJcblx0QElucHV0KFwiaWRcIikgZGlhZ3JhbUlkOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zID0gdGhpcy5kaWFncmFtU2VydmljZS5nZXREaWFncmFtcygpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1EYXRhJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbSh0aGlzLmRpYWdyYW1JZCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEdldERpYWdyYW1zQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2dldC1kaWFncmFtcy1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImRpYWdyYW1zXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMTJcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxyXG4gIDxtYXQtZ3JpZC10aWxlICpuZ0Zvcj1cImxldCBkaWFncmFtIG9mIChkaWFncmFtcyB8IGFzeW5jKT8uUmVzdWx0XCIgXHJcbiAgW2NvbHNwYW5dPVwiZGlhZ3JhbS5Cb3guQ29sc1wiIFxyXG4gIFtyb3dzcGFuXT1cImRpYWdyYW0uQm94LlJvd3NcIiBcclxuICBbc3R5bGUuY29sb3JdPVwiZGlhZ3JhbS5Cb3guQ29sb3JcIj5cclxuICAgIDxkeW5hbWljLWNvbXBvbmVudC1zZWxlY3RvciBjbGFzcz1cImRpYWdyYW0tYm94XCIgW2RhdGFdPVwiZGlhZ3JhbVwiPjwvZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3I+XHJcbiAgPC9tYXQtZ3JpZC10aWxlPlxyXG48L21hdC1ncmlkLWxpc3Q+XHJcbjxiciAvPlxyXG48ZGl2IGZ4RmxleExheW91dD1cInJvd1wiIGZ4TGF5b3V0V3JhcCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG48L2Rpdj5cclxuPGRpdiBmeExheW91dEFsaWduPSdlbmQgY2VudGVyJz5cclxuICA8YnV0dG9uIG1hdC1mYWIgcm91dGVyTGluaz1cIi4uL2RpYWdyYW1zL2FkZFwiIGNsYXNzPVwiYWRkLWJ0blwiPlxyXG4gICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5hZGQtYnRue3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTo1MHB4O2xlZnQ6MjVweDt6LWluZGV4OjF9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWdyYW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRkaWFncmFtczogT2JzZXJ2YWJsZTxHZXREaWFncmFtc0FwaU1vZGVsLlJlc3BvbnNlPjtcclxuXHR3aWR0aCA9IDEwMDtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge1xyXG5cdFx0dGhpcy5kaWFncmFtcyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKTtcclxuXHJcblx0XHQvLyB0aGlzLmRpYWdyYW1zXHJcblx0XHQvLyAgICAgICAgIC5kZWxheSgxMDApXHJcblx0XHQvLyAgICAgICAgIC5zdWJzY3JpYmUoZGlhZ3JhbXMgPT5cclxuXHRcdC8vICAgICAgICAgICAgICAgICBkaWFncmFtcy5SZXN1bHQuZm9yRWFjaChkaWFncmFtID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShkaWFncmFtLkNoYXJ0LCBkaWFncmFtLl9pZCwgZGlhZ3JhbS5Tb3VyY2UuUm91dGUsIGRpYWdyYW0uU291cmNlLlN5bmMpKSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuc29ja2V0U2VydmljZS5pbml0U29ja2V0KCk7XHJcblx0XHQvLyB0aGlzLnNvY2tldFNlcnZpY2Uuc2VuZChcImFkZC1tZXNzYWdlXCIpO1xyXG5cdFx0Ly8gdGhpcy5zb2NrZXRTZXJ2aWNlLm9uTWVzc2FnZSgpLnN1YnNjcmliZShtc2c9PntcclxuXHRcdC8vICAgICAgICAgZGVidWdnZXJcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXREaWFncmFtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2VkaXQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1BY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9lZGl0LWRpYWdyYW0uYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbS1lZGl0XCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCI0MDBweFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJyAobmdTdWJtaXQpPVwiYWRkKCRldmVudClcIj5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDmcKBw5jCssOZwojDmMKvw5nChiDDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOYwrnDmcKGw5nCiMOYwqfDmcKGIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIk5hbWVcIj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKiw5jCr8OYwrHDmMKzIMOZwobDmcKFw5nCiMOYwq/DmMKnw5jCsVwiIGZvcm1Db250cm9sTmFtZT1cIlJvdXRlXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCI+w5nCiMOYwrbDmMK5w5vCjMOYwqo8L21hdC1jaGVja2JveD5cclxuXHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gZnhGbGV4PSdub2dyb3cnIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2RpYWdyYW1zJz7DmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICA8L2Zvcm0+XHJcbjwvbWF0LWNhcmQ+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0RGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBFZGl0RGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBkaWFncmFtU2VydmljZTogRGlhZ3JhbVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdGxldCBSb3V0ZSA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHRjb25zdCBkaWFncmFtSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRhZGQoZXZlbnQpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXREaWFncmFtQWN0aW9uKHRoaXMuZm9ybUdyb3VwLnZhbHVlKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE1hdFNsaWRlckNoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5kZWNsYXJlIHZhciBjMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZGlhZ3JhbVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm92ZXJcIiBmeGxheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwic3RhcnRcIiBjbGFzcz1cImRhdGEtdGltZVwiPnt7bm93IHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cImNlbnRlclwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3t0aW1lIHwgZGF0ZSA6ICd5L00vZCBoOm06cyd9fTwvZGl2PlxyXG4gICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIiBmeEZsZXhBbGlnbj1cImVuZFwiIGNsYXNzPVwiZGF0YS10aW1lXCI+e3tub3cgfCBkYXRlIDogJ3kvTS9kIGg6bTpzJ319PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwibW9kZWxJc0NvcnJlY3QgfCBhc3luY1wiIGNsYXNzPVwiZGlhZ3JhbSB3aWRnZXRcIiBbaWRdPVwiJ2RpYWdyYW1fJyArIGRhdGEuX2lkXCI+PC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3ggLmMze2RpcmVjdGlvbjpsdHJ9bWF0LXNsaWRlcnt3aWR0aDoxMDAlfS5kYXRhLXRpbWV7ZGlyZWN0aW9uOmx0cjt0ZXh0LWFsaWduOmNlbnRlcn0ub3Zlcnt2aXNpYmlsaXR5OmhpZGRlbjtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjM1cHg7bGVmdDowO3JpZ2h0OjA7YmFja2dyb3VuZDojZmZmO3otaW5kZXg6Mzt0cmFuc2l0aW9uOi40cyBlYXNlLWluLW91dH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblx0dW5zdWJzY3JpYmUgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cdG1vZGVsSXNDb3JyZWN0OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHRfbW9kZWw6IERpYWdyYW1Nb2RlbDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBkYXRhKHZhbHVlOiBEaWFncmFtTW9kZWwpIHtcclxuXHRcdGlmICghKHZhbHVlLkNoYXJ0ICYmIHZhbHVlLl9pZCkpIHJldHVybjtcclxuXHRcdHRoaXMuX21vZGVsID0gdmFsdWU7XHJcblx0XHR0aGlzLm1vZGVsSXNDb3JyZWN0Lm5leHQodHJ1ZSk7XHJcblx0fVxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsO1xyXG5cdH1cclxuXHRkYXRhU3Vic2NyaWJ0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0Y2hhcnQ6IGFueTtcclxuXHR0aW1lOiBudW1iZXI7XHJcblx0bm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG5cdCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmRhdGEgPSB0aGlzLmluamVjdG9yLmdldChcImRhdGFcIik7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IGRpYWdyYW1JZDogc3RyaW5nID0gcGFyYW1zW1wiaWRcIl07XHJcblx0XHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0XHRkaWFncmFtSWQgJiZcclxuXHRcdFx0XHR0aGlzLmRpYWdyYW1TZXJ2aWNlLmdldERpYWdyYW0oZGlhZ3JhbUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSBJbnRlcnZhbE9ic2VydmFibGVcclxuXHRcdC8vICAgICAgICAgLy8gLmNyZWF0ZSh0aGlzLm1vZGVsLlNvdXJjZS5TeW5jKVxyXG5cdFx0Ly8gICAgICAgICAuY3JlYXRlKDk5OSlcclxuXHRcdC8vICAgICAgICAgLnN3aXRjaE1hcChpID0+XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgdGhpcy5odHRwLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kYXRhYCwge1xyXG5cdFx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlOiB0aGlzLm1vZGVsLlNvdXJjZS5Sb3V0ZSxcclxuXHRcdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogJzAnXHJcblx0XHQvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHQvLyAgICAgICAgICAgICAgICAgfSlcclxuXHRcdC8vICAgICAgICAgKVxyXG5cdFx0Ly8gICAgICAgICAvLyAuc3dpdGNoTWFwKChyZXM6IGFueSkgPT4gb2YocmVzLlJlc3VsdC5EYXRhKSlcclxuXHRcdC8vICAgICAgICAgLm1hcCgocmVzOiBhbnkpID0+IHJlcy5SZXN1bHQuRGF0YSlcclxuXHRcdHRoaXMubW9kZWxJc0NvcnJlY3QuZGVsYXkoMzAwKS5maWx0ZXIoZGF0YSA9PiBkYXRhKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xyXG5cdFx0XHR0aGlzLmNoYXJ0ID0gYzMuZ2VuZXJhdGUoe1xyXG5cdFx0XHRcdC4uLnRoaXMuZGF0YS5DaGFydCxcclxuXHRcdFx0XHRiaW5kdG86IGAjZGlhZ3JhbV8ke3RoaXMuZGF0YS5faWR9YFxyXG5cdFx0XHRcdC8vIHNpemU6IHtcclxuXHRcdFx0XHQvLyAgICAgICAgIGhlaWdodDogMTUwXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdC5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIHRoaXMudW5zdWJzY3JpYmUpXHJcblx0XHRcdFx0LnBpcGUoZmlsdGVyKGRhdGEgPT4gZGF0YSAhPSB1bmRlZmluZWQpLCB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubm93ID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGEuQ2hhcnQuRmxvdykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmZsb3coe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDE1MDBcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNoYXJ0LmxvYWQoe1xyXG5cdFx0XHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuRGF0YSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5nc1xyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyB0aGlzLmRhdGFTdWJzY3JpYnRpb24gPSB0aGlzLmRpYWdyYW1TZXJ2aWNlLmdlbmVyYXRlRGlhZ3JhbShcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5DaGFydCxcclxuXHRcdC8vICAgICAgICAgdGhpcy5tb2RlbC5faWQsXHJcblx0XHQvLyAgICAgICAgIHRoaXMubW9kZWwuU291cmNlLlJvdXRlLFxyXG5cdFx0Ly8gICAgICAgICB0aGlzLm1vZGVsLlNvdXJjZS5TeW5jXHJcblx0XHQvLyApO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdC8vIHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuXHR9XHJcblx0dGltZUNoYW5nZShlOiBNYXRTbGlkZXJDaGFuZ2UpIHtcclxuXHRcdHRoaXMuZGF0YVN1YnNjcmlidGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5kaWFncmFtU2VydmljZS5nZXREYXRhKHRoaXMuZGF0YS5Tb3VyY2UsIERhdGUubm93KCkgLSAoKDEwMDAgLSBlLnZhbHVlKSAqIHRoaXMuZGF0YS5Tb3VyY2UuSW50ZXJ2YWwpLCB0cnVlKVxyXG5cdFx0dGhpcy5kYXRhU3Vic2NyaWJ0aW9uID0gdGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHQuZ2V0RGF0YShcclxuXHRcdFx0XHR0aGlzLmRhdGEuU291cmNlLFxyXG5cdFx0XHRcdHRoaXMudW5zdWJzY3JpYmUsXHJcblx0XHRcdFx0RGF0ZS5ub3coKSAtICgxMDAwIC0gZS52YWx1ZSkgKiB0aGlzLmRhdGEuU291cmNlLkludGVydmFsLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMudGltZSA9IGRhdGEuVGltZTtcclxuXHRcdFx0XHR0aGlzLm5vdyA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgY29sdW1ucyA9IHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHQvLyAgICAgICAgIC5leHRyYWN0X2NvbHVtbnNfZnJvbV9kYXRhKGRhdGEuRGF0YSwgdGhpcy5kYXRhLkNoYXJ0LkNvbHVtbk1hcHBpbmdzKVxyXG5cdFx0XHRcdC8vICAgICAgICAgLm1hcChjb2x1bW4gPT4ge1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICAgICAgY29sdW1uWzBdICs9ICdfaGlzdG9yaWMnO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uO1xyXG5cdFx0XHRcdC8vICAgICAgICAgfSk7XHJcblx0XHRcdFx0dGhpcy5jaGFydC5sb2FkKHtcclxuXHRcdFx0XHRcdGNvbHVtbnM6IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZXh0cmFjdF9jb2x1bW5zX2Zyb21fZGF0YShkYXRhLkRhdGEsIHRoaXMuZGF0YS5DaGFydC5Db2x1bW5NYXBwaW5ncylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdElucHV0LFxyXG5cdEFmdGVyVmlld0luaXQsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9kaWFncmFtLm1vZGVsXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RpYWdyYW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy1kaWFncmFtL251bWVyaWMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItY29ubmVjdGluZy10aW1lLWRpYWdyYW0vc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS9kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZHluYW1pYy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cImRpYWdyYW0tYm94XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZENvbG9yXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBzdHJldGNoXCI+XHJcbiAgICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgKm5nSWY9XCJfZGF0YVwiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgIDxzcGFuIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIiBjbGFzcz1cIndpZGdldC10aXRsZVwiPlxyXG4gICAgICAgICAgICB7e19kYXRhLk5hbWV9fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy4uL2RpYWdyYW1zL2VkaXQnICwgIF9kYXRhLl9pZF1cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGRpYWdyYW1cIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPG1hdC1jYXJkLWNvbnRlbnQ+IC0tPlxyXG4gICAgPCEtLSA8bWF0LXNsaWRlciBpbnZlcnQgWyhuZ01vZGVsKV09XCJ0aW1lXCIgKGNoYW5nZSk9XCJ0aW1lQ2hhbmdlKCRldmVudClcIj48L21hdC1zbGlkZXI+IC0tPlxyXG4gICAgPG1hdC1zbGlkZXIgY2xhc3M9XCJvdmVyXCIgZnhGbGV4PVwiMCAwIGF1dG9cIiBpbnZlcnQgbWluPScxJyBtYXg9JzEwMDAnIHZhbHVlPVwiMTAwMFwiIChjaGFuZ2UpPVwidGltZUNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtc2xpZGVyPlxyXG4gICAgPGRpdiBmeEZsZXg9XCIxIDEgYXV0b1wiIGNsYXNzPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gPC9tYXQtY2FyZC1jb250ZW50PiAtLT5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21hcmdpbjoxMi41cHh9LmRpYWdyYW0tYm94e21hcmdpbjoxNXB4fS5kaWFncmFtLWJveCAuYzN7ZGlyZWN0aW9uOmx0cn0ud2lkZ2V0LXRpdGxle2ZvbnQ6MS4zZW0gSVJBTlNhbnMsdGFob21hfS5vdmVye3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NjBweDtsZWZ0OjA7cmlnaHQ6MDtiYWNrZ3JvdW5kOiNmZmY7ei1pbmRleDozO3RyYW5zaXRpb246LjRzIGVhc2UtaW4tb3V0fWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0TnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHRTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0RGlhZ3JhbUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRkb251dDogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHBpZTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdHNjYXR0ZXI6IERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRsaW5lOiBEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0YXJlYTogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdFwiYXJlYS1zcGxpbmVcIjogRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdG51bWVybzogTnVtZXJpY0RpYWdyYW1Db21wb25lbnQsXHJcblx0XHR0ZW1wbzogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0Ym9vbGVhbm86IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnRcclxuXHR9O1xyXG5cdEBWaWV3Q2hpbGQoXCJkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyXCIsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxyXG5cdGR5bmFtaWNDb21wb25lbnRDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcblx0QFZpZXdDaGlsZChEaWFncmFtQ29tcG9uZW50KSB3aWRnZXRDb21wb25lbnQ6IERpYWdyYW1Db21wb25lbnQ7XHJcblx0Y3VycmVudENvbXBvbmVudDogYW55ID0gbnVsbDtcclxuXHRfZGF0YTogYW55O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09IDApIHJldHVybjtcclxuXHRcdHRoaXMuYmFja2dyb3VuZENvbG9yID0gZGF0YS5Cb3guQmFja2dyb3VuZENvbG9yO1xyXG5cdFx0dGhpcy5fZGF0YSA9IGRhdGE7XHJcblx0XHRsZXQgcmF3ID0geyBkYXRhIH07XHJcblx0XHRsZXQgX2NvbXBvbmVudCA9IHRoaXMudHlwZU1hcFRvRGlhZ3JhbVtkYXRhLkNoYXJ0LmRhdGEudHlwZV07XHJcblx0XHRsZXQgaW5wdXRQcm92aWRlcnMgPSBPYmplY3Qua2V5cyhyYXcpLm1hcChpbnB1dE5hbWUgPT4ge1xyXG5cdFx0XHRyZXR1cm4geyBwcm92aWRlOiBpbnB1dE5hbWUsIHVzZVZhbHVlOiByYXdbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gZmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xyXG5cclxuXHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5pbnNlcnQoY29tcG9uZW50Lmhvc3RWaWV3KTtcclxuXHJcblx0XHRpZiAodGhpcy5jdXJyZW50Q29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY3VycmVudENvbXBvbmVudC5kZXN0cm95KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cdH1cclxuXHRiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZyA9IFwiXCI7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcblx0dGltZUNoYW5nZShlKSB7XHJcblx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuX2NvbXBvbmVudC50aW1lQ2hhbmdlKGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0QWZ0ZXJWaWV3SW5pdCxcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE9uRGVzdHJveSxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9kdW1iLWNvbXBvbmVudHMvZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy1lZGl0L2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vZHVtYi1jb21wb25lbnRzL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy9ib29sZWFuby13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2R1bWItY29tcG9uZW50cy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy9saW5lYXItZGlhZ3JhbS1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGMzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJkeW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgI2R5bmFtaWNDb21wb25lbnRDb250YWluZXI+PC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX0uZGlhZ3JhbS1ib3h7bWFyZ2luOjE1cHh9LmRpYWdyYW0tYm94IC5jM3tkaXJlY3Rpb246bHRyfWBdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0RGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0UGllRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdEJvb2xlYW5vV2lkZ2V0UGFydGlhbENvbmZpZ0NvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cdHR5cGVNYXBUb0RpYWdyYW0gPSB7XHJcblx0XHRiYXI6IERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdGFyZWE6IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0XCJhcmVhLXNwbGluZVwiOiBMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdGRvbnV0OiBEaWFncmFtUGFydGlhbENvbmZpZ0VkaXRDb21wb25lbnQsXHJcblx0XHRwaWU6IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0c2NhdHRlcjogRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50LFxyXG5cdFx0bGluZTogTGluZWFyRGlhZ3JhbVBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRib29sZWFubzogQm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50XHJcblx0fTtcclxuXHRAVmlld0NoaWxkKFwiZHluYW1pY0NvbXBvbmVudENvbnRhaW5lclwiLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcclxuXHRkeW5hbWljQ29tcG9uZW50Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cdEBPdXRwdXQoKSBDb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGN1cnJlbnRDb21wb25lbnQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KClcclxuXHRzZXQgZGF0YShkYXRhOiBhbnkpIHtcclxuXHRcdGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cdFx0aWYgKCEoZGF0YS50eXBlIGluIHRoaXMudHlwZU1hcFRvRGlhZ3JhbSkpIHtcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkgdGhpcy5jdXJyZW50Q29tcG9uZW50LmRlc3Ryb3koKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bGV0IF9jb21wb25lbnQgPSB0aGlzLnR5cGVNYXBUb0RpYWdyYW1bZGF0YS50eXBlXTtcclxuXHRcdGxldCBpbnB1dFByb3ZpZGVycyA9IE9iamVjdC5rZXlzKGRhdGEuaW5wdXRzKS5tYXAoaW5wdXROYW1lID0+IHtcclxuXHRcdFx0cmV0dXJuIHsgcHJvdmlkZTogaW5wdXROYW1lLCB1c2VWYWx1ZTogZGF0YS5pbnB1dHNbaW5wdXROYW1lXSB9O1xyXG5cdFx0fSk7XHJcblx0XHRsZXQgcmVzb2x2ZWRJbnB1dHMgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZShpbnB1dFByb3ZpZGVycyk7XHJcblxyXG5cdFx0bGV0IGluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhcclxuXHRcdFx0cmVzb2x2ZWRJbnB1dHMsXHJcblx0XHRcdHRoaXMuZHluYW1pY0NvbXBvbmVudENvbnRhaW5lci5wYXJlbnRJbmplY3RvclxyXG5cdFx0KTtcclxuXHRcdGxldCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShfY29tcG9uZW50KTtcclxuXHRcdGxldCBjb21wb25lbnQgPSBmYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XHJcblx0XHRpZiAoKDxhbnk+Y29tcG9uZW50Lmluc3RhbmNlKS5Db25maWdDaGFuZ2VkKVxyXG5cdFx0XHQoPGFueT5jb21wb25lbnQuaW5zdGFuY2UpLkNvbmZpZ0NoYW5nZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkNvbmZpZ0NoYW5nZWQuZW1pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmR5bmFtaWNDb21wb25lbnRDb250YWluZXIuaW5zZXJ0KGNvbXBvbmVudC5ob3N0Vmlldyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VycmVudENvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRDb21wb25lbnQuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VycmVudENvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RGlhZ3JhbXNBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2V0LWRpYWdyYW1zLWFwaS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHZXREaWFncmFtc1N1Y2NlZWQsIEdldERpYWdyYW1zRmFpbGVkLCBHZXREaWFncmFtc1N0YXJ0IH0gZnJvbSBcIi4uL2FjdGlvbnMvZGlhZ3JhbXMuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRpYWdyYW1TZXJ2aWNlOiBEaWFncmFtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RGlhZ3JhbVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoKS5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0RGlhZ3JhbXNTdGFydCgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldERpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZSgpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogR2V0RGlhZ3JhbXNBcGlNb2RlbC5SZXF1ZXN0KSA9PlxyXG5cdFx0XHRcdHRoaXMuZGlhZ3JhbVNlcnZpY2VcclxuXHRcdFx0XHRcdC5nZXREaWFncmFtcygpXHJcblx0XHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBHZXREaWFncmFtc1N1Y2NlZWQocmVzKSksIGNhdGNoRXJyb3IoKCkgPT4gb2YobmV3IEdldERpYWdyYW1zRmFpbGVkKCkpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kaWFncmFtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9hZGQtZGlhZ3JhbS1hcGkubW9kZWxcIjtcclxuaW1wb3J0IHtcclxuXHRBZGREaWFncmFtQWN0aW9uVHlwZXMsXHJcblx0QWRkRGlhZ3JhbUFjdGlvblN0YXJ0LFxyXG5cdEFkZERpYWdyYW1BY3Rpb25TdWNjZWVkLFxyXG5cdEFkZERpYWdyYW1BY3Rpb25GYWlsZWQsXHJcblx0RGF0YUxvYWRlZEFjdGlvbixcclxuXHRTdHJ1Y3R1cmVEZWZpbml0aW9uU3RhcnRBY3Rpb24sXHJcblx0R2VuZXJhdGVEaWFncmFtQWN0aW9uLFxyXG5cdFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvblxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2FkZC1kaWFncmFtLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkZERpYWdyYW1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGREaWFncmFtUmVxdWVzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5BRERfRElBR1JBTSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgQWRkRGlhZ3JhbUFjdGlvblN0YXJ0KGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGFkZERpYWdyYW0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuQUREX0RJQUdSQU1fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogQWRkRGlhZ3JhbUFwaU1vZGVsLlJlcXVlc3QpID0+XHJcblx0XHRcdFx0dGhpcy5kaWFncmFtU2VydmljZVxyXG5cdFx0XHRcdFx0LmFkZERpYWdyYW0oZGF0YSlcclxuXHRcdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0XHRtYXAocmVzID0+IG5ldyBBZGREaWFncmFtQWN0aW9uU3VjY2VlZChyZXMpKSxcclxuXHRcdFx0XHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgQWRkRGlhZ3JhbUFjdGlvbkZhaWxlZCgpKSlcclxuXHRcdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEFERF9ESUFHUkFNX1NVQ0NFRUQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkFERF9ESUFHUkFNX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdG1hcChkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImRpYWdyYW1zXCIgXSk7XHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLmVtcHR5KCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEhBVkVfRU5EUE9JTlQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuSEFWRV9FTkRQT0lOVClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRGF0YUxvYWRlZEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREQVRBX0xPQURFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5EQVRBX0xPQURFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvblN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERJQUdSQU1fQ09ORklHX0NIQU5HRUQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGREaWFncmFtQWN0aW9uVHlwZXMuRElBR1JBTV9DT05GSUdfQ0hBTkdFRClcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2VuZXJhdGVEaWFncmFtQWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoZGF0YSA9PiBkYXRhLmdldERhdGFTdHJ1Y3R1cmUoKS5tYXAoKCkgPT4gbmV3IFN0cnVjdHVyZURlZmluaXRpb25GaW5pc2hlZEFjdGlvbihkYXRhKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRDT0xVTU5TX01BUFBJTkdfQ0hBTkdFRCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5DT0xVTU5TX01BUFBJTkdfQ0hBTkdFRClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uRmluaXNoZWRBY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0U1RSVUNUVVJFX0RFRklOSVRJT05fRU5EJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLlNUUlVDVFVSRV9ERUZJTklUSU9OX0VORClcclxuXHRcdC8vIC5za2lwVW50aWwodGhpcy5hY3Rpb25zJC5vZlR5cGUoQWRkRGlhZ3JhbUFjdGlvblR5cGVzLkRBVEFfTE9BREVEKSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGRhdGEgPT4gZGF0YS5jYWxjdWxhdGVDb2x1bW5zKCkubWFwKCgpID0+IG5ldyBHZW5lcmF0ZURpYWdyYW1BY3Rpb24oZGF0YSkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdEdlbmVyYXRlRGlhZ3JhbSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZERpYWdyYW1BY3Rpb25UeXBlcy5HRU5FUkFURV9ESUFHUkFNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IGRhdGEuZ2VuZXJhdGVEaWFncmFtKCkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtLW1vZHVsZS1jb250YWluZXIvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEaWFncmFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbXMvZGlhZ3JhbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2FkZC1kaWFncmFtL2FkZC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9zZXJ2ZXItc3RhdHVzLWRpYWdyYW0vc2VydmVyLXN0YXR1cy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJkaWFncmFtc1wiLFxyXG5cdFx0Y29tcG9uZW50OiBEaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBEaWFncmFtc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86aWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZERpYWdyYW1Db21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwibnVtZXJvXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJ0ZW1wb1wiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogU2VydmVyQ29ubmVjdGluZ1RpbWVEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImJvb2xlYW5vXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBTZXJ2ZXJTdGF0dXNEaWFncmFtQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiQHNvdXNoaWFucy9ncmlkXCI7XHJcblxyXG5pbXBvcnQgeyBEaWFncmFtTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWdyYW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGlhZ3JhbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uIHdyYXBcIiBmeExheW91dEdhcD1cIjE1cHhcIj5cclxuPGg0PsOZwoTDm8KMw5jCs8OYwqogw5nChsOZwoXDmcKIw5jCr8OYwqfDmMKxw5nCh8OYwqc8L2g0PlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiMTAwXCI+XHJcbiAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCLDmcKGw5nChcOZwojDmMKvw5jCp8OYwrEgw5nCh8OYwqdcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkRGlhZ3JhbUlkXCIgbmFtZT1cInNlbGVjdGVkRGlhZ3JhbUlkXCI+XHJcbiAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGRpYWdyYW1zJCB8IGFzeW5jKVwiIFt2YWx1ZV09XCJpdGVtLl9pZFwiPlxyXG4gICAge3tpdGVtLk5hbWV9fVxyXG4gIDwvbWF0LW9wdGlvbj5cclxuPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEaWFncmFtU2VsZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElHcmlkSXRlbUNvbXBvbmVudDx7IGRpYWdyYW1JZDogc3RyaW5nIH0+IHtcclxuXHRkaWFncmFtcyQ6IE9ic2VydmFibGU8RGlhZ3JhbU1vZGVsW10+O1xyXG5cdHNlbGVjdGVkRGlhZ3JhbUlkOiBzdHJpbmc7XHJcblx0Z2V0IHZhbGlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRpYWdyYW1JZCAhPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkaWFncmFtSWQ6IHRoaXMuc2VsZWN0ZWREaWFncmFtSWRcclxuXHRcdH07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhZ3JhbVNlcnZpY2U6IERpYWdyYW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmRpYWdyYW1zJCA9IHRoaXMuZGlhZ3JhbVNlcnZpY2UuZ2V0RGlhZ3JhbXMoKS5waXBlKG1hcChyZXMgPT4gcmVzLlJlc3VsdCkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0VG9vbHRpcE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0R3JpZExpc3RNb2R1bGUsXHJcblx0TWF0U2xpZGVyTW9kdWxlLFxyXG5cdE1hdEF1dG9jb21wbGV0ZU1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IERpYWdyYW1Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4gfSBmcm9tIFwiLi9kaWFncmFtLmNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbVJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZlclN0YXR1c0RpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLXN0YXR1cy1kaWFncmFtL3NlcnZlci1zdGF0dXMtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGlhZ3JhbVBhcnRpYWxDb25maWdFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2RpYWdyYW0tcGFydGlhbC1jb25maWctZWRpdC9kaWFncmFtLXBhcnRpYWwtY29uZmlnLWVkaXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnL3BpZS1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBCb29sZWFub1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvYm9vbGVhbm8td2lkZ2V0LXBhcnRpYWwtY29uZmlnL2Jvb2xlYW5vLXdpZGdldC1wYXJ0aWFsLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvbnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcvbnVtZXJpYy13aWRnZXQtcGFydGlhbC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpbmVhckRpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnL2xpbmVhci1kaWFncmFtLXBhcnRpYWwtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9kdW1iLWNvbXBvbmVudHMvc2VydmVyLWNvbm5lY3RpbmctdGltZS1kaWFncmFtL3NlcnZlci1jb25uZWN0aW5nLXRpbWUtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtZXJpY0VkaXREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vZHVtYi1jb21wb25lbnRzL251bWVyaWMtZWRpdC1kaWFncmFtL251bWVyaWMtZWRpdC1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1lcmljRGlhZ3JhbUNvbXBvbmVudCB9IGZyb20gXCIuL2R1bWItY29tcG9uZW50cy9udW1lcmljLWRpYWdyYW0vbnVtZXJpYy1kaWFncmFtLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbU1vZHVsZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1tb2R1bGUtY29udGFpbmVyL2RpYWdyYW0tbW9kdWxlLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0YU1hcHBlckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGF0YS1tYXBwZXIvZGF0YS1tYXBwZXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBBZGREaWFncmFtQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9hZGQtZGlhZ3JhbS9hZGQtZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZGlhZ3JhbVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0tdmlldy9kaWFncmFtLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9kaWFncmFtcy9kaWFncmFtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2VkaXQtZGlhZ3JhbS9lZGl0LWRpYWdyYW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERpYWdyYW1Db21wb25lbnQgfSBmcm9tIFwiLi9zbWFydC1jb21wb25lbnRzL2RpYWdyYW0vZGlhZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci9keW5hbWljLWNvbXBvbmVudC1zZWxlY3Rvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHluYW1pY0NvbmZpZ0NvbXBvbmVudFNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vc21hcnQtY29tcG9uZW50cy9keW5hbWljLWNvbmZpZy1jb21wb25lbnQtc2VsZWN0b3IvZHluYW1pYy1jb25maWctY29tcG9uZW50LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGlhZ3JhbUVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2RpYWdyYW1zLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgQWRkRGlhZ3JhbUVmZmVjdHMgfSBmcm9tIFwiLi9lZmZlY3RzL2FkZC1kaWFncmFtLmVmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kaWFncmFtLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCB9IGZyb20gXCIuL3NtYXJ0LWNvbXBvbmVudHMvZGlhZ3JhbS1zZWxlY3Rvci9kaWFncmFtLXNlbGVjdG9yLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVyTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRUb29sdGlwTW9kdWxlLFxyXG5cdFx0TWF0R3JpZExpc3RNb2R1bGUsXHJcblx0XHRNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3NlckFuaW1hdGlvbnNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QWRkRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1zQ29tcG9uZW50LFxyXG5cdFx0ZGlhZ3JhbVZpZXdDb21wb25lbnQsXHJcblx0XHRFZGl0RGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdER5bmFtaWNDb25maWdDb21wb25lbnRTZWxlY3RvckNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1Db21wb25lbnQsXHJcblx0XHREeW5hbWljQ29tcG9uZW50U2VsZWN0b3JDb21wb25lbnQsXHJcblx0XHREaWFncmFtTW9kdWxlQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RGF0YU1hcHBlckNvbXBvbmVudCxcclxuXHRcdE51bWVyaWNEaWFncmFtQ29tcG9uZW50LFxyXG5cdFx0U2VydmVyU3RhdHVzRGlhZ3JhbUNvbXBvbmVudCxcclxuXHRcdERpYWdyYW1QYXJ0aWFsQ29uZmlnRWRpdENvbXBvbmVudCxcclxuXHRcdFBpZURpYWdyYW1QYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0Qm9vbGVhbm9XaWRnZXRQYXJ0aWFsQ29uZmlnQ29tcG9uZW50LFxyXG5cdFx0TnVtZXJpY1dpZGdldFBhcnRpYWxDb25maWdDb21wb25lbnQsXHJcblx0XHRTZXJ2ZXJDb25uZWN0aW5nVGltZURpYWdyYW1Db21wb25lbnQsXHJcblx0XHROdW1lcmljRWRpdERpYWdyYW1Db21wb25lbnQsXHJcblx0XHRMaW5lYXJEaWFncmFtUGFydGlhbENvbmZpZ0NvbXBvbmVudCxcclxuXHRcdERpYWdyYW1TZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbIERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCwgZGlhZ3JhbVZpZXdDb21wb25lbnQgXSxcclxuXHRleHBvcnRzOiBbIERpYWdyYW1TZWxlY3RvckNvbXBvbmVudCBdLFxyXG5cdHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5nc0RpYWdyYW1Nb2R1bGUge1xyXG5cdHN0YXRpYyBmb3JSb290KGNvbmZpZz86IERpYWdyYW1Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBSb290TmdzRGlhZ3JhbU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogTU9EVUxFX0NPTkZJR19UT0tFTiwgdXNlVmFsdWU6IGNvbmZpZyB9IF1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdE5nc0RpYWdyYW1Nb2R1bGUsXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFwiZGlhZ3JhbVwiLCBEaWFncmFtUmVkdWNlcnMpLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFsgRGlhZ3JhbUVmZmVjdHMsIEFkZERpYWdyYW1FZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NEaWFncmFtTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NEaWFncmFtTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIkZvcm1Hcm91cCIsIkZvcm1Db250cm9sIiwiVmFsaWRhdG9ycyIsImluaXRpYWxTdGF0ZSIsIkRpYWdyYW1zUmVkdWNlci5kaWFncmFtUmVkdWNlciIsImZyb21FZGl0RGlhZ3JhbS5SZWR1Y2VyIiwicGFyZW50R3VhcmRSZWR1Y2VyLlBhcmVudEd1YXJkUmVkdWNlciIsImNyZWF0ZUZlYXR1cmVTZWxlY3RvciIsImNyZWF0ZVNlbGVjdG9yIiwiQmVoYXZpb3JTdWJqZWN0IiwiQ29tcG9uZW50IiwiSW5qZWN0b3IiLCJJbnB1dCIsIkV2ZW50RW1pdHRlciIsIk91dHB1dCIsIkluamVjdGFibGUiLCJJbmplY3QiLCJGb3JtQXJyYXkiLCJPYnNlcnZhYmxlIiwidGFrZVVudGlsIiwic3dpdGNoTWFwIiwibWFwIiwiU3ViamVjdCIsIkh0dHBDbGllbnQiLCJTdG9yZSIsImZpbHRlciIsIkZvcm1CdWlsZGVyIiwiQWN0aXZhdGVkUm91dGUiLCJSZWZsZWN0aXZlSW5qZWN0b3IiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q2hpbGQiLCJWaWV3Q29udGFpbmVyUmVmIiwicm91dGVyIiwiY2F0Y2hFcnJvciIsIm9mIiwiQWN0aW9ucyIsIlJvdXRlciIsIkVmZmVjdCIsIlJvdXRlck1vZHVsZSIsIk5nTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdFNsaWRlck1vZHVsZSIsIk1hdElucHV0TW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0VG9vbHRpcE1vZHVsZSIsIk1hdEdyaWRMaXN0TW9kdWxlIiwiTWF0QXV0b2NvbXBsZXRlTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFVQSxRQUFhLHFCQUFxQixHQUF3QjtRQUN6RCxTQUFTLEVBQUUsRUFBRTtRQUNiLEdBQUcsRUFBRTtZQUNKLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGVBQWUsRUFBRSw2QkFBNkI7U0FDOUM7S0FDRCxDQUFDOztBQUVGLFFBQWEsbUJBQW1CLEdBQUcsSUFBSUEsaUJBQWMsQ0FBc0IscUJBQXFCLENBQUM7O0lDbEJqRzs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxDQUFDLENBQUM7U0FDWixDQUFBO1FBQ0QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUE7QUFFRCx3QkFVMkIsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7QUFFRCx3QkFJMkIsV0FBVyxFQUFFLGFBQWE7UUFDakQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25JLENBQUM7Ozs7OztBQzdERCxRQUFpQixtQkFBbUI7SUFBcEMsV0FBaUIsbUJBQW1CO1FBQ25DLElBQUE7WUFHQyxpQkFBWSxTQUEwRTtnQkFBMUUsMEJBQUE7b0JBQUEsOEJBQXlDLEVBQWlDLENBQUE7O2dCQUF0RixpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3BFOzs7O1lBRUQsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPLEVBQUUsQ0FBQztpQkFDVjswQkFaSDtZQW1CRSxDQUFBO1FBaEJZLDJCQUFPO1FBa0JwQixJQUFBO1lBRUM7YUFBZ0I7MkJBdkJsQjtZQXdCRSxDQUFBO1FBSFksNEJBQVE7T0FuQkwsbUJBQW1CLEtBQW5CLG1CQUFtQixRQXVCbkM7Ozs7Ozs7O1FDcEJBLGFBQWMsdUJBQXVCO1FBQ3JDLG1CQUFvQiw2QkFBNkI7UUFDakQscUJBQXNCLCtCQUErQjtRQUNyRCxvQkFBcUIsOEJBQThCOztJQU1wRCxJQUFBOzt3QkFDaUIsbUJBQW1CLENBQUMsaUJBQWlCOzsrQkFmdEQ7UUFnQkMsQ0FBQTtBQUZELElBR0EsSUFBQTtRQUVDLDRCQUFtQixPQUFxQztZQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4Qjt3QkFEeEMsbUJBQW1CLENBQUMsbUJBQW1CO1NBQ0s7aUNBbkI3RDtRQW9CQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDaUIsbUJBQW1CLENBQUMsa0JBQWtCOztnQ0F0QnZEO1FBdUJDLENBQUE7Ozs7OztJQ3BCRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBTWpDLFFBQWEsWUFBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTyxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDVjtLQUNELENBQUM7Ozs7OztBQUVGLDRCQUErQixLQUFvQixFQUFFLE1BQXNCO1FBQTVDLHNCQUFBO1lBQUEsb0JBQW9COztRQUNsRCxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssbUJBQW1CLENBQUMsV0FBVyxFQUFFO2dCQUNyQyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLElBQUksSUFFWDthQUNGO1lBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDM0Msb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxJQUFJLElBRVg7YUFDRjtZQUVELFNBQVM7Z0JBQ1IsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO0tBQ0Q7Ozs7OztBQ3JDRCxRQU9pQixtQkFBbUI7SUFBcEMsV0FBaUIsbUJBQW1CO1FBQ25DLElBQUE7WUFDQyxpQkFBWSxNQUFlO2FBQUk7Ozs7WUFDL0IsdUNBQXFCOzs7Z0JBQXJCO29CQUNDLE9BQU8sRUFBRSxDQUFDO2lCQUNWO1lBRUQsc0JBQVcsb0JBQVM7Ozs7b0JBQXBCO29CQUNDLE9BQU8sSUFBSUMsZUFBUyxDQUFDO3dCQUNwQixJQUFJLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDbEQsUUFBUSxFQUFFLElBQUlELGlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3FCQUNuRCxDQUFDLENBQUM7aUJBQ0g7OztlQUFBOzBCQXBCSDtZQXFCRSxDQUFBO1FBYlksMkJBQU87UUFlcEIsSUFBQTtZQUVDO2FBQWdCOzJCQXpCbEI7WUEwQkUsQ0FBQTtRQUhZLDRCQUFRO09BaEJMLG1CQUFtQixLQUFuQixtQkFBbUIsUUFvQm5DOzs7Ozs7OztRQ3RCQSxjQUFlLDhCQUE4QjtRQUM3QyxvQkFBcUIsb0NBQW9DO1FBQ3pELHNCQUF1QixzQ0FBc0M7UUFDN0QscUJBQXNCLHFDQUFxQzs7SUFHNUQsSUFBQTtRQUVDLDJCQUFtQixPQUFxQztZQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4Qjt3QkFEeEMsc0JBQXNCLENBQUMsWUFBWTtTQUNTO2dDQWI3RDtRQWNDLENBQUE7Ozs7OztJQ1RELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7QUFLakMsUUFBYUMsY0FBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksb0JBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFrQyxDQUFBO0tBQ3BELENBQUM7Ozs7OztBQUNGLHFCQUF3QixLQUFvQixFQUFFLE1BQTBCO1FBQWhELHNCQUFBO1lBQUEsc0JBQW9COztRQUMzQyxRQUFRLE1BQU0sQ0FBQyxJQUFJO1lBQ2xCLEtBQUssc0JBQXNCLENBQUMsWUFBWSxFQUFFO2dCQUN6QyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLE9BQU8sRUFDZixJQUFJLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFDdkM7YUFDRjtZQUNELEtBQUssc0JBQXNCLENBQUMsa0JBQWtCLEVBQUU7Z0JBQy9DLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxFQUNqQixJQUFJLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFDdkM7YUFDRjtZQUNELEtBQUssc0JBQXNCLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ2pELG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsU0FBUyxJQUNoQjthQUNGO1lBQ0QsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDaEQsb0JBQ0ksS0FBSyxJQUNSLE1BQU0sRUFBRSxRQUFRLElBQ2Y7YUFDRjtZQUVELFNBQVM7Z0JBQ1IsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO0tBQ0Q7Ozs7Ozs7QUN6Q0QsUUFBYUEsY0FBWSxHQUFVO1FBQ2xDLEtBQUssRUFBRSxFQUFFO1FBQ1QsTUFBTSxFQUFFLEtBQUs7S0FDYixDQUFDOzs7Ozs7QUFFRixnQ0FBbUMsS0FBb0IsRUFBRSxNQUF5QjtRQUEvQyxzQkFBQTtZQUFBLHNCQUFvQjs7UUFDdEQsUUFBUSxNQUFNLENBQUMsSUFBSTtZQUNsQixTQUFTO2dCQUNSLE9BQU8sS0FBSyxDQUFDO2FBQ2I7U0FDRDtLQUNEOzs7Ozs7QUNqQkQ7QUFZQSxRQUFhLGVBQWUsR0FBRztRQUM5QixRQUFRLEVBQUVDLGNBQThCO1FBQ3hDLFdBQVcsRUFBRUMsT0FBdUI7UUFDcEMsV0FBVyxFQUFFQyxrQkFBcUM7S0FDbEQsQ0FBQzs7QUFRRixRQUFhLGtCQUFrQixHQUFHQyx3QkFBcUIsQ0FBZSxTQUFTLENBQUMsQ0FBQzs7QUFRakYsUUFBYSxzQkFBc0IsR0FBR0MsaUJBQWMsQ0FBQyxrQkFBa0IsRUFBRSxVQUFDLEtBQW1CLElBQUssT0FBQSxLQUFLLENBQUMsV0FBVyxHQUFBLENBQUMsQ0FBQzs7Ozs7O0FDaENySDtRQTRCQyxzQ0FBb0IsUUFBa0I7WUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs4QkFYekIsSUFBSUMsb0JBQWUsQ0FBQyxLQUFLLENBQUM7WUFZdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQVhELHNCQUNJLDhDQUFJOzs7Z0JBSVI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCOzs7O2dCQVBELFVBQ1MsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7OztRQVNELGlEQUFVOzs7O1lBQVYsVUFBVyxDQUFDOzs7Ozs7Ozs7YUFTWDs7OztRQUNELCtDQUFROzs7WUFBUixlQUFhOztvQkF0Q2JDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxRQUFRLEVBQUUsMFVBTUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsaUtBQWlLLENBQUM7cUJBQzNLOzs7Ozt3QkFkd0RDLFdBQVE7Ozs7MkJBbUIvREMsUUFBSzs7MkNBbkJQOzs7Ozs7O0FDQUE7UUF5Q0MsMkNBQW9CLFFBQWtCO1lBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7OEJBWnpCLElBQUlILCtCQUFlLENBQUMsS0FBSyxDQUFDO1lBYXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzFEO1FBYkQsc0JBQ0ksbURBQUk7OztnQkFJUjtnQkFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbEI7Ozs7Z0JBUEQsVUFDUyxJQUFJO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjs7O1dBQUE7Ozs7UUFVRCxvREFBUTs7O1lBQVI7Ozs7O2FBS0M7Ozs7UUFDRCx1REFBVzs7O1lBQVg7O2FBRUM7Ozs7UUFDRCx5REFBYTs7O1lBQWIsZUFBa0I7O29CQTdDbEJDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsNkJBQTZCO3dCQUN2QyxRQUFRLEVBQUUseThCQWFIO3dCQUNQLE1BQU0sRUFBRSxDQUFDLG9KQUFvSixDQUFDO3FCQUM5Sjs7Ozs7d0JBMUJ3REMsV0FBUTs7OzsyQkErQi9EQyxRQUFLOztnREEvQlA7Ozs7Ozs7QUNBQTtRQWlEQywwQ0FBb0IsUUFBa0I7WUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtpQ0FmWixJQUFJQyxlQUFZLEVBQUU7OEJBRS9CLElBQUlKLCtCQUFlLENBQUMsS0FBSyxDQUFDO1lBY3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxjQUFjLHFCQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxTQUFtQixDQUFBLENBQUM7U0FDakU7UUFmRCxzQkFDSSx1REFBUzs7O2dCQUtiO2dCQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN4Qjs7OztnQkFSRCxVQUNjLElBQWU7Z0JBQzVCLElBQUksQ0FBQyxJQUFJO29CQUFFLE9BQU87Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjs7O1dBQUE7Ozs7UUFXRCxtREFBUTs7O1lBQVI7Ozs7O2FBS0M7Ozs7UUFDRCxzREFBVzs7O1lBQVg7O2FBRUM7Ozs7UUFDRCx3REFBYTs7O1lBQWI7Z0JBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQjs7b0JBekREQyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLDRCQUE0Qjt3QkFDdEMsUUFBUSxFQUFFLG1oQ0FvQko7d0JBQ04sTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7cUJBQzlKOzs7Ozt3QkFoQ3dEQyxXQUFROzs7O29DQWtDL0RHLFNBQU07Z0NBSU5GLFFBQUs7OytDQXRDUDs7Ozs7OztBQ0FBO1FBc0NDLDhDQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzhCQWR6QixJQUFJSCwrQkFBZSxDQUFDLEtBQUssQ0FBQztZQWV0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLHFCQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxZQUFzQixDQUFBLENBQUM7U0FDdkU7UUFoQkQsc0JBQ0ksMkRBQVM7OztnQkFLYjtnQkFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7Ozs7Z0JBUkQsVUFDYyxJQUFlO2dCQUM1QixJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7O1FBWUQsdURBQVE7OztZQUFSOzs7OzthQUtDOzs7O1FBQ0QsMERBQVc7OztZQUFYOzthQUVDOztvQkEzQ0RDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsZ0NBQWdDO3dCQUMxQyxRQUFRLEVBQUUsdWFBU0o7d0JBQ04sTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7cUJBQzlKOzs7Ozt3QkFyQndEQyxXQUFROzs7O2dDQTBCL0RDLFFBQUs7O21EQTFCUDs7Ozs7OztBQ0FBO1FBcUNDLDZDQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzhCQWJ6QixJQUFJSCwrQkFBZSxDQUFDLEtBQUssQ0FBQztZQWN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsY0FBYyxxQkFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsU0FBbUIsQ0FBQSxDQUFDO1NBQ2pFO1FBZkQsc0JBQ0ksMERBQVM7OztnQkFLYjtnQkFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDeEI7Ozs7Z0JBUkQsVUFDYyxJQUFlO2dCQUM1QixJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7O1FBV0Qsc0RBQVE7OztZQUFSOzs7OzthQUtDOzs7O1FBQ0QseURBQVc7OztZQUFYOzthQUVDOztvQkExQ0RDLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsK0JBQStCO3dCQUN6QyxRQUFRLEVBQUUsa1pBU0o7d0JBQ04sTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7cUJBQzlKOzs7Ozt3QkFyQndEQyxXQUFROzs7O2dDQTBCL0RDLFFBQUs7O2tEQTFCUDs7Ozs7OztBQ0FBO1FBNENDLDZDQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzhCQWJ6QixJQUFJSCwrQkFBZSxDQUFDLEtBQUssQ0FBQztpQ0FVYixJQUFJSSxlQUFZLEVBQUU7WUFJM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFkRCxzQkFDSSxxREFBSTs7O2dCQUlSO2dCQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsQjs7OztnQkFQRCxVQUNTLElBQUk7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCOzs7V0FBQTs7OztRQVdELHNEQUFROzs7WUFBUjs7Ozs7YUFLQzs7OztRQUNELHlEQUFXOzs7WUFBWDs7YUFFQzs7OztRQUNELDJEQUFhOzs7WUFBYjtnQkFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCOztvQkFuRERILFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsK0JBQStCO3dCQUN6QyxRQUFRLEVBQUUsb2tDQWdCSDt3QkFDUCxNQUFNLEVBQUUsQ0FBQyxvSkFBb0osQ0FBQztxQkFDOUo7Ozs7O3dCQTVCd0RDLFdBQVE7Ozs7MkJBaUMvREMsUUFBSztvQ0FRTEUsU0FBTTs7a0RBekNSOzs7Ozs7O0FDQUE7UUF5QkMsOENBQW9CLFFBQWtCO1lBQXRDLGlCQUtDO1lBTG1CLGFBQVEsR0FBUixRQUFRLENBQVU7d0JBWGQsQ0FBQzs4QkFDWixJQUFJTCxvQkFBZSxDQUFDLEtBQUssQ0FBQztZQVd0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLFdBQVcsQ0FBQztnQkFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQzFCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVDtRQWJELHNCQUNJLHNEQUFJOzs7Z0JBSVI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCOzs7O2dCQVBELFVBQ1MsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7O1FBV0QsdURBQVE7OztZQUFSLGVBQWE7Ozs7O1FBQ2IseURBQVU7Ozs7WUFBVixVQUFXLENBQUM7Ozs7Ozs7O2FBUVg7O29CQXJDREMsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7d0JBQzFDLFFBQVEsRUFBRSxxUkFJSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyw0R0FBNEcsQ0FBQztxQkFDdEg7Ozs7O3dCQVp3REMsV0FBUTs7OzsyQkFjL0RDLFFBQUs7MkJBR0xBLFFBQUs7O21EQWpCUDs7Ozs7OztBQ0FBO1FBYUMscUNBQXlDLE1BQU07WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoRTtRQU5ELHNCQUFJLCtDQUFNOzs7Z0JBQVY7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BCOzs7V0FBQTs7b0JBUERHLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dEQU9hQyxTQUFNLFNBQUMsbUJBQW1COzs7OzBDQWJ4Qzs7Ozs7OztBQ0FBLFFBT2lCLGtCQUFrQjtJQUFuQyxXQUFpQixrQkFBa0I7UUFDbEMsSUFBQTtZQXVCQyxpQkFBWSxTQUF3RTtnQkFBeEUsMEJBQUE7b0JBQUEsOEJBQXdDLEVBQWdDLENBQUE7O2dCQUFwRixpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3BFOzs7O1lBQ0QsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPO3dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07d0JBQ25CLE1BQU0sRUFBRTs0QkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7eUJBQ3ZCO3dCQUNELEtBQUssRUFBRTs0QkFDTixJQUFJLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dDQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQ0FDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dDQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7NkJBQ2pCOzRCQUNELGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYzs0QkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzRCQUNmLE1BQU0sRUFBRTtnQ0FDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07NkJBQ2pCOzRCQUNELFFBQVEsRUFBRTtnQ0FDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7NkJBQ25COzRCQUNELElBQUksRUFBRTtnQ0FDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2xCOzRCQUNELE9BQU8sRUFBRTtnQ0FDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87NkJBQ3JCO3lCQUNEO3dCQUNELEdBQUcsRUFBRTs0QkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJOzRCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUzs0QkFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO3lCQUNyQztxQkFDRCxDQUFDO2lCQUNGO1lBRUQsc0JBQVcsb0JBQVM7OztvQkFBcEI7b0JBQ0MsT0FBTyxJQUFJaEIsZUFBUyxDQUFDO3dCQUNwQixHQUFHLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO3dCQUM1QixJQUFJLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDbEQsSUFBSSxFQUFFLElBQUlELGlCQUFXLENBQUMsQ0FBQyxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELFFBQVEsRUFBRSxJQUFJRCxpQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUMxRCxJQUFJLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDckQsTUFBTSxFQUFFLElBQUlELGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ3BELE1BQU0sRUFBRSxJQUFJRCxpQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUN4RCxRQUFRLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDM0QsSUFBSSxFQUFFLElBQUlELGlCQUFXLENBQUMsT0FBTyxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ3ZELE9BQU8sRUFBRSxJQUFJRCxpQkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUMxRCxLQUFLLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDbkQsTUFBTSxFQUFFLElBQUlELGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ3BELE9BQU8sRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNyRCxJQUFJLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDakQsSUFBSSxFQUFFLElBQUlELGlCQUFXLENBQUMsQ0FBQyxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELFNBQVMsRUFBRSxJQUFJRCxpQkFBVyxDQUFDLFNBQVMsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUM5RCxlQUFlLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDcEUsTUFBTSxFQUFFLElBQUlGLGVBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ3pCLEtBQUssRUFBRSxJQUFJQSxlQUFTLENBQUMsRUFBRSxDQUFDO3dCQUN4QixjQUFjLEVBQUUsSUFBSWlCLGVBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ2pDLElBQUksRUFBRSxJQUFJaEIsaUJBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQzNCLEtBQUssRUFBRSxJQUFJRCxlQUFTLENBQUM7NEJBQ3BCLEtBQUssRUFBRSxJQUFJQyxpQkFBVyxDQUFDLGVBQWUsQ0FBQzt5QkFDdkMsQ0FBQzt3QkFDRixRQUFRLEVBQUUsSUFBSUQsZUFBUyxDQUFDOzRCQUN2QixjQUFjLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs0QkFDakQsY0FBYyxFQUFFLElBQUlBLGlCQUFXLENBQUMsZ0JBQWdCLENBQUM7eUJBQ2pELENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkEzR0g7WUE0R0UsQ0FBQTtRQXBHWSwwQkFBTztRQXFHcEIsSUFBQTtZQUVDO2FBQWdCOzJCQS9HbEI7WUFnSEUsQ0FBQTtRQUhZLDJCQUFRO09BdEdMLGtCQUFrQixLQUFsQixrQkFBa0IsUUEwR2xDOzs7Ozs7O1FDNUZBLHdCQUNTLE1BQ0EsT0FDQTtZQUZBLFNBQUksR0FBSixJQUFJO1lBQ0osVUFBSyxHQUFMLEtBQUs7WUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9COzswQkF3SXBCLEVBQUU7WUF0SVYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1NBQy9DOzs7O1FBRUQsb0NBQVc7OztZQUFYO2dCQUNDLE9BQU8sSUFBSSxDQUFDLElBQUk7cUJBQ2QsR0FBRyxDQUErQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO3FCQUNuRixHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLEdBQUEsQ0FBQztxQkFDM0IsS0FBSyxDQUFDLFVBQUMsR0FBRztvQkFDVixPQUFPaUIsYUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7Ozs7UUFDRCxtQ0FBVTs7O1lBQVY7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSTtxQkFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztxQkFDcEQsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsbUJBQUMsUUFBZSxHQUFFLE1BQU0sR0FBQSxDQUFDO3FCQUMzQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNWLE9BQU9BLGFBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUNKOzs7O1FBQ0Qsa0NBQVM7OztZQUFUO2dCQUNDLE9BQU8sSUFBSSxDQUFDLElBQUk7cUJBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztxQkFDNUQsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsbUJBQUMsUUFBZSxHQUFFLE1BQU0sR0FBQSxDQUFDO3FCQUMzQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNWLE9BQU9BLGFBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUNKOzs7OztRQUNELG1DQUFVOzs7O1lBQVYsVUFBVyxFQUFVO2dCQUNwQixJQUFJLENBQUMsRUFBRTtvQkFBRSxTQUFTO2dCQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJO3FCQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUcsa0JBQWdCLEVBQUksQ0FBQSxDQUFDO3FCQUMzRCxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLEdBQUEsQ0FBQztxQkFDM0IsS0FBSyxDQUFDLFVBQUMsR0FBRztvQkFDVixPQUFPQSxhQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjs7Ozs7UUFDRCxtQ0FBVTs7OztZQUFWLFVBQVcsSUFBUzs7Z0JBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJO3FCQUNkLElBQUksQ0FBOEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7cUJBQzNHLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsR0FBQSxDQUFDO3FCQUMzQixLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNWLE9BQU9BLGFBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQzthQUNKOzs7OztRQUNELHNDQUFhOzs7O1lBQWIsVUFBYyxJQUFTO2dCQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJO3FCQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsY0FBYyxFQUFFLElBQUksQ0FBQztxQkFDM0QsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxHQUFBLENBQUM7cUJBQzNCLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1YsT0FBT0EsYUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7Ozs7O1FBQ0Qsc0NBQWE7Ozs7WUFBYixVQUFjLEVBQVU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUk7cUJBQ2QsTUFBTSxDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUscUJBQWdCLEVBQUksQ0FBQztxQkFDOUQsR0FBRyxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxHQUFBLENBQUM7cUJBQzNCLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1YsT0FBT0EsYUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O1FBQ0QsZ0NBQU87Ozs7Ozs7WUFBUCxVQUFRLE1BQW1CLEVBQUUsV0FBMEIsRUFBRSxJQUFnQixFQUFFLElBQXFCO2dCQUFoRyxpQkFvQ0M7Z0JBcEN3RCxxQkFBQTtvQkFBQSxRQUFnQjs7Z0JBQUUscUJBQUE7b0JBQUEsWUFBcUI7O2dCQUMvRixJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJO3lCQUNkLEdBQUcsQ0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLGNBQVcsRUFBRTt3QkFDbkQsTUFBTSxFQUFFOzRCQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRzs0QkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7eUJBQ3pEO3FCQUNELENBQUM7eUJBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sR0FBQSxDQUFDLENBQUM7aUJBQ2hDO3FCQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUk7eUJBQ2QsR0FBRyxDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsY0FBVyxFQUFFO3dCQUNuRCxNQUFNLEVBQUU7NEJBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHOzRCQUNwQixJQUFJLEVBQUUsSUFBSTt5QkFDVjtxQkFDRCxDQUFDO3lCQUNELEdBQUcsQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDTixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsT0FBT0EsYUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDL0NDLG1CQUFTLENBQUMsV0FBVyxDQUFDLEVBQ3RCQyxtQkFBUyxDQUFDLFVBQUMsQ0FBQzt3QkFDWCxPQUFBLEtBQUksQ0FBQyxJQUFJOzZCQUNQLEdBQUcsQ0FBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLGNBQVcsRUFBRTs0QkFDbkQsTUFBTSxFQUFFO2dDQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRztnQ0FDcEIsSUFBSSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7NkJBQ3pEO3lCQUNELENBQUMsQ0FBQyxJQUFJLENBQ05DLGFBQUcsQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUM3QjtxQkFBQSxDQUNGLENBQ0QsQ0FBQztpQkFDRjthQUNEOzs7Ozs7UUFDRCxrREFBeUI7Ozs7O1lBQXpCLFVBQTBCLElBQVMsRUFBRSxlQUFlOztnQkFDbkQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUViLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOztvQkFDNUIsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDbkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDckU7O29CQUNELElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFakQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDekIsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQyxFQUFFO3FCQUNwRjt5QkFBTTt3QkFDTixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztxQkFDOUM7aUJBQ0QsQ0FBQyxDQUFDO2dCQUNILE9BQU8sR0FBRyxDQUFDO2FBQ1g7Ozs7O1FBQ0Qsd0NBQWU7Ozs7WUFBZixVQUFnQixJQUFTO2dCQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEI7Ozs7O1FBQ0QsOENBQXFCOzs7O1lBQXJCLFVBQXNCLElBQVM7Z0JBQzlCLE9BQU8sbUJBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQVUsR0FBRSxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsVUFBVSxHQUFBLENBQUMsQ0FBQzthQUNuRTs7Ozs7UUFDRCx5Q0FBZ0I7Ozs7WUFBaEIsVUFBaUIsT0FBTztnQkFDdkIsT0FBTztvQkFDTixJQUFJLEVBQUU7d0JBQ0wsT0FBTyxTQUFBO3FCQUNQO29CQUNELE1BQU0sRUFBRTt3QkFDUCxJQUFJLEVBQUUsSUFBSTtxQkFDVjtpQkFDRCxDQUFDO2FBQ0Y7Ozs7Ozs7O1FBR0Qsd0NBQWU7Ozs7Ozs7WUFBZixVQUFnQixNQUFXLEVBQUUsRUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZO2dCQUFwRSxpQkFXQztnQkFWQSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLGNBQ3pCLE1BQU0sSUFDVCxNQUFNLEVBQUUsY0FBWSxFQUFJLElBQ3ZCLENBQUM7Z0JBRUgsT0FBTyxJQUFJLENBQUMsT0FBTyxtQkFBQyxFQUFpQixHQUFFLElBQUlDLFVBQU8sRUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7b0JBQ2hGLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNwQixPQUFPLEVBQUUsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQztxQkFDekUsQ0FBQyxDQUFDO2lCQUNILENBQUMsQ0FBQzthQUNIOzs7Ozs7UUFDRCxxQ0FBWTs7Ozs7WUFBWixVQUFhLFNBQXFCLEVBQUUsSUFBZ0I7Z0JBQXZDLDBCQUFBO29CQUFBLFlBQVksRUFBRSxHQUFHLElBQUk7O2dCQUFFLHFCQUFBO29CQUFBLFFBQWdCOztnQkFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxTQUFTLENBQUMsQ0FBQzthQUNwRDs7b0JBL0pEUCxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFqQlFRLGFBQVU7d0JBRVZDLFFBQUs7d0JBR0wsMkJBQTJCOzs7OzZCQU5wQzs7Ozs7OztBQ0FBO1FBZ0NDLHFDQUFvQixRQUFrQixFQUFVLGNBQThCO1lBQTFELGFBQVEsR0FBUixRQUFRLENBQVU7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7K0JBWGhFLElBQUlGLFlBQU8sRUFBUTs4QkFDcEIsSUFBSWIsK0JBQWUsQ0FBQyxLQUFLLENBQUM7WUFXdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQVZELHNCQUNJLDZDQUFJOzs7Z0JBSVI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCOzs7O2dCQVBELFVBQ1MsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7O1FBUUQsOENBQVE7OztZQUFSOztnQkFFQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNuRWdCLGdCQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLElBQUksU0FBUyxHQUFBLENBQUMsRUFDakNOLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7b0JBQ2YsU0FBUztpQkFDVCxDQUFDLENBQUM7YUFDSDs7OztRQUNELGlEQUFXOzs7WUFBWDs7Z0JBRUMsU0FBUztnQkFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCOztvQkExQ0RULFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxRQUFRLEVBQUUsd1BBT0M7d0JBQ1gsTUFBTSxFQUFFLENBQUMsb0pBQW9KLENBQUM7cUJBQzlKOzs7Ozt3QkFuQndEQyxXQUFRO3dCQUl4RCxjQUFjOzs7OzJCQW9CckJDLFFBQUs7OzBDQXhCUDs7Ozs7OztBQ0FBO1FBK0JDLGlDQUFvQixRQUFrQixFQUFVLGNBQThCO1lBQTFELGFBQVEsR0FBUixRQUFRLENBQVU7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7K0JBYmhFLElBQUlVLFlBQU8sRUFBUTs4QkFDcEIsSUFBSWIsK0JBQWUsQ0FBQyxLQUFLLENBQUM7WUFhdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNqQjtRQVpELHNCQUNJLHlDQUFJOzs7Z0JBSVI7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xCOzs7O2dCQVBELFVBQ1MsSUFBSTtnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7OztXQUFBOzs7O1FBVUQsMENBQVE7OztZQUFSO2dCQUFBLGlCQU9DO2dCQU5BLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMzRlUsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTs7b0JBQ2YsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUN6RyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDO2FBQ0g7Ozs7UUFDRCw2Q0FBVzs7O1lBQVg7Z0JBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCOztvQkF4Q0RULFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsMlFBSUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsK0lBQStJLENBQUM7cUJBQ3pKOzs7Ozt3QkFoQndEQyxXQUFRO3dCQUt4RCxjQUFjOzs7OzJCQWlCckJDLFFBQUs7O3NDQXRCUDs7Ozs7OztBQ0FBO1FBaUJDLHlDQUFvQixPQUF1QjtZQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtTQUFJOzs7O1FBRS9DLGtEQUFROzs7WUFBUixlQUFhOztvQkFWYkYsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSwwQkFBMEI7d0JBQ3BDLFFBQVEsRUFBRSx5RkFHVjtxQkFDQTs7Ozs7d0JBVlEsY0FBYzs7OzhDQUx2Qjs7Ozs7OztBQ0FBO1FBNkNDLDZCQUFvQixjQUE4QixFQUFVLEtBQXlDO1lBQWpGLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUFVLFVBQUssR0FBTCxLQUFLLENBQW9DOzhCQURqRixFQUFFO1NBQ21GO1FBUHpHLHNCQUNJLHFDQUFJOzs7O2dCQURSLFVBQ1MsSUFBSTtnQkFDWixJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2xCOzs7V0FBQTs7OztRQUlELHNDQUFROzs7WUFBUixlQUFhOztvQkFyQ2JBLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDZhQW9CVjt3QkFDQSxNQUFNLEVBQUUsQ0FBQyx3R0FBd0csQ0FBQztxQkFDbEg7Ozs7O3dCQTdCUSxjQUFjO3dCQUhkYyxRQUFLOzs7O2tDQWtDWlosUUFBSzsyQkFFTEEsUUFBSzs7a0NBdENQOzs7Ozs7O0lDRUEsSUFBQTs7OzJCQUZBO1FBOENDLENBQUE7Ozs7Ozs7O1FDekNBLGFBQWMsNEJBQTRCO1FBQzFDLG1CQUFvQixrQ0FBa0M7UUFDdEQscUJBQXNCLG9DQUFvQztRQUMxRCx3QkFBeUIsdUNBQXVDO1FBQ2hFLG9CQUFxQixtQ0FBbUM7UUFDeEQsNEJBQTZCLDJDQUEyQztRQUN4RSxlQUFnQiwrQkFBK0I7UUFDL0MsYUFBYyw0QkFBNEI7UUFDMUMsMEJBQTJCLHlDQUF5QztRQUNwRSx5QkFBMEIsd0NBQXdDO1FBQ2xFLGlCQUFrQixnQ0FBZ0M7UUFDbEQsY0FBZSw2QkFBNkI7UUFDNUMsa0JBQW1CLGlDQUFpQzs7SUFHckQsSUFBQTtRQUVDLDBCQUFtQixPQUFvQztZQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2Qjt3QkFEdkMscUJBQXFCLENBQUMsV0FBVztTQUNVOytCQXRCNUQ7UUF1QkMsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLCtCQUFtQixPQUFvQztZQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUE2Qjt3QkFEdkMscUJBQXFCLENBQUMsaUJBQWlCO1NBQ0k7b0NBMUI1RDtRQTJCQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsaUNBQW1CLE9BQW9DO1lBQXBDLFlBQU8sR0FBUCxPQUFPLENBQTZCO3dCQUR2QyxxQkFBcUIsQ0FBQyxtQkFBbUI7U0FDRTtzQ0E5QjVEO1FBK0JDLENBQUE7QUFIRCxJQUlBLElBQUE7O3dCQUNpQixxQkFBcUIsQ0FBQyxrQkFBa0I7O3FDQWpDekQ7UUFrQ0MsQ0FBQTtBQUZELElBR0EsSUFBQTtRQUVDLG9DQUFtQixPQUFZO1lBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzt3QkFEZixxQkFBcUIsQ0FBQyxzQkFBc0I7U0FDekI7eUNBckNwQztRQXNDQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsNEJBQW1CLE9BQVk7WUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO3dCQURmLHFCQUFxQixDQUFDLGFBQWE7U0FDaEI7aUNBekNwQztRQTBDQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMsMEJBQW1CLE9BQVk7WUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO3dCQURmLHFCQUFxQixDQUFDLFdBQVc7U0FDZDsrQkE3Q3BDO1FBOENDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyx3Q0FBbUIsT0FBWTtZQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7d0JBRGYscUJBQXFCLENBQUMsMEJBQTBCO1NBQzdCOzZDQWpEcEM7UUFrREMsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLDJDQUFtQixPQUFZO1lBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSzt3QkFEZixxQkFBcUIsQ0FBQyx3QkFBd0I7U0FDM0I7Z0RBckRwQztRQXNEQyxDQUFBO0FBSEQsSUFJQSxJQUFBO1FBRUMscUNBQW1CLE9BQVk7WUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO3dCQURmLHFCQUFxQixDQUFDLHVCQUF1QjtTQUMxQjswQ0F6RHBDO1FBMERDLENBQUE7QUFIRCxJQVFBLElBQUE7UUFFQywrQkFBbUIsT0FBWTtZQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7d0JBRGYscUJBQXFCLENBQUMsZ0JBQWdCO1NBQ25CO29DQWpFcEM7UUFrRUMsQ0FBQTs7Ozs7OztRQ29KQSw2QkFDUyxnQkFDQSxhQUNBLE9BQ0E7WUFKVCxpQkFnRkM7WUEvRVEsbUJBQWMsR0FBZCxjQUFjO1lBQ2QsZ0JBQVcsR0FBWCxXQUFXO1lBQ1gsVUFBSyxHQUFMLEtBQUs7WUFDTCxVQUFLLEdBQUwsS0FBSzsrQkF6QkEsSUFBSVUsWUFBTyxFQUFROzZCQUNWLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBMEIxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDOztZQUU5QyxJQUFJLENBQUMsZUFBZSxHQUFHLG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxrQkFBNEIsR0FBRSxRQUFRLENBQUM7WUFDdEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTs7Z0JBQ2pDLElBQU0sU0FBUyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBRXZDLFNBQVM7b0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDdkQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7NEJBQ3pCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzs0QkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFROzRCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzRCQUMxQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs0QkFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7NEJBQ2xDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPOzRCQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs0QkFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTs0QkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTzs0QkFDaEMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYzs0QkFDekMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTs0QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs0QkFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTs0QkFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZTs0QkFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUzt5QkFDN0IsQ0FBQyxDQUFDOzt3QkFFSCxJQUFNLGFBQWEscUJBQWMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7d0JBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7NEJBQzFELElBQUksRUFBRSxTQUFTLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQztnQ0FDekMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSXJCLGlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDekYsQ0FBQyxDQUFDOzt3QkFFSCxJQUFNLFlBQVkscUJBQWMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUM7d0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7NEJBQ25ELElBQUksRUFBRSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzRSxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBQSxDQUFDLENBQUM7d0JBQ2xHLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUVsRCxLQUFJLENBQUMsb0JBQW9CLEdBQUc7NEJBQzNCLElBQUksRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJOzRCQUMvQixNQUFNLEVBQUU7Z0NBQ1AsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTO2dDQUN6QixjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWM7NkJBQ25DO3lCQUNELENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxvQkFBb0IsR0FBRztvQkFDM0IsSUFBSSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQy9CLE1BQU0sRUFBRTt3QkFDUCxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVM7d0JBQ3pCLGNBQWMsRUFBRSxLQUFJLENBQUMsY0FBYztxQkFDbkM7aUJBQ0QsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ25CLEtBQUs7Z0JBQ0wsT0FBTztnQkFDUCxLQUFLO2dCQUNMLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE9BQU87YUFDUCxDQUFDO1NBQ0Y7Ozs7UUFDRCxzQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBU0M7Z0JBUkEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLG1CQUFnQixhQUFhLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtvQkFDcEUsSUFDQyxNQUFNLElBQUksT0FBTzt3QkFDakIsbUJBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLGtCQUE0QixHQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFDekUsS0FBSSxDQUFDLElBQUk7d0JBRVQsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM1RCxDQUFDLENBQUM7YUFDSDs7OztRQUNELHlDQUFXOzs7WUFBWDtnQkFDQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7b0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzVCOzs7Ozs7Ozs7UUFNRCw4Q0FBZ0I7OztZQUFoQjtnQkFBQSxpQkFRQztnQkFQQSxTQUFTOztnQkFDVCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sY0FBTSxJQUFJLENBQUMsTUFBTSxJQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3BILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFDOUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEUsQ0FBQyxDQUFDO2dCQUNILE9BQU8sUUFBUSxDQUFDO2FBQ2hCOzs7O1FBQ0QsMkNBQWE7OztZQUFiO2dCQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxRDs7OztRQUNELHlDQUFXOzs7WUFBWDs7Z0JBQ0MsSUFBTSxjQUFjLEdBQUcsbUJBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFNBQW1CLEdBQUUsUUFBUSxDQUFDOztnQkFFN0UsS0FBSyxJQUFNLEVBQUUsSUFBSSxjQUFjLEVBQUU7b0JBQ2hDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRztvQkFDM0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQy9CLE1BQU0sRUFBRTt3QkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7d0JBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztxQkFDbkM7aUJBQ0QsQ0FBQztnQkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDMUQ7Ozs7OztRQUNELHVDQUFTOzs7OztZQUFULFVBQVUsUUFBcUIsRUFBRSxTQUFzQjtnQkFBN0MseUJBQUE7b0JBQUEsYUFBcUI7O2dCQUFFLDBCQUFBO29CQUFBLGNBQXNCOzs7Z0JBQ3RELElBQU0sT0FBTyxxQkFBYyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO2dCQUNyRSxPQUFPLENBQUMsSUFBSSxDQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO29CQUN0QixRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUM7aUJBQzNDLENBQUMsQ0FDRixDQUFDO2FBQ0Y7Ozs7O1FBQ0QsMENBQVk7Ozs7WUFBWixVQUFhLEtBQUs7Z0JBQ2pCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xEOzs7OztRQUNELDBDQUFZOzs7O1lBQVosVUFBYSxDQUFTOztnQkFDckIsSUFBTSxPQUFPLHFCQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUM7Z0JBQ3JFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEI7Ozs7UUFDRCw4Q0FBZ0I7OztZQUFoQjtnQkFBQSxpQkEwQkM7Z0JBekJBLE9BQU9nQixxQkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUs7O29CQUk3QixJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUM1RCxLQUFJLENBQUMsSUFBSSxFQUNULG1CQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxrQkFBNEIsR0FBRSxLQUFLLENBQzNELENBQUM7b0JBQ0YsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFlBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztvQkFFbEQsSUFBTSxhQUFhLHFCQUFjLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDO29CQUNuRSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTs7d0JBQ3JCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxFQUFFLFNBQVMsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDOzRCQUN6QyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJakIsaUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUNqRSxDQUFDLENBQUM7O29CQUVILElBQU0sWUFBWSxxQkFBYyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQztvQkFDakUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07O3dCQUNyQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLElBQUksRUFBRSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSUEsaUJBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUMxRSxDQUFDLENBQUM7b0JBQ0gsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNiLENBQUMsQ0FBQzthQUNIOzs7O1FBQ0QsNkNBQWU7OztZQUFmOztnQkFDQyxJQUFNLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ3RDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHO29CQUNWLGVBQWUsRUFBRSxDQUFDO29CQUNsQixLQUFLLEVBQUUsQ0FBQztvQkFDUixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZTtpQkFDckQsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHO29CQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO2lCQUN2QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLEdBQUc7b0JBQ1osY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWM7b0JBQ25ELElBQUksRUFBRTt3QkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFlBQVMsS0FBSzt3QkFDOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7d0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLO3dCQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFdBQVEsS0FBSztxQkFDNUM7b0JBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7b0JBQy9CLE1BQU0sRUFBRTt3QkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTTtxQkFDakM7b0JBQ0QsUUFBUSxFQUFFO3dCQUNULElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO3FCQUNuQztvQkFDRCxJQUFJLEVBQUU7d0JBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUk7cUJBQ2xDO29CQUNELE9BQU8sRUFBRTt3QkFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTztxQkFDckM7aUJBZUQsQ0FBQzs7Ozs7Z0JBS0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU9pQixxQkFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzFCOzs7OztRQUNELGlDQUFHOzs7O1lBQUgsVUFBSSxLQUFLO2dCQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2hFOztvQkFyYURSLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLGs5UUFpS0o7d0JBQ04sTUFBTSxFQUFFLENBQUMsMlBBQTJQLENBQUM7cUJBQ3JROzs7Ozt3QkFwTFEsY0FBYzt3QkFWaUNnQixpQkFBVzt3QkFFMURGLFFBQUs7d0JBQ0VHLHFCQUFjOzs7a0NBSjlCOzs7Ozs7O0FDQUE7UUFvQkMsOEJBQW9CLGNBQThCO1lBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjt5QkFMMUMsR0FBRztZQU1WLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRDs7OztRQUVELHVDQUFROzs7WUFBUjtnQkFDQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuRTs7b0JBcEJEakIsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUseU5BRUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsa0lBQWtJLENBQUM7cUJBQzVJOzs7Ozt3QkFUUSxjQUFjOzs7O2dDQWVyQkUsUUFBSyxTQUFDLElBQUk7O21DQWxCWjs7Ozs7OztBQ0FBO1FBNkJDLDJCQUFvQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7eUJBRDFDLEdBQUc7WUFFVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7OztTQU9sRDs7OztRQUVELG9DQUFROzs7WUFBUjs7Ozs7O2FBTUM7O29CQXhDREYsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsK3BCQWdCVjt3QkFDQSxNQUFNLEVBQUUsQ0FBQyxvR0FBb0csQ0FBQztxQkFDOUc7Ozs7O3dCQXJCUSxjQUFjOzs7Z0NBSnZCOzs7Ozs7O0FDQUE7UUEwQ0MsOEJBQ1MsZ0JBQ0EsT0FDQTtZQUhULGlCQVNDO1lBUlEsbUJBQWMsR0FBZCxjQUFjO1lBQ2QsVUFBSyxHQUFMLEtBQUs7WUFDTCxVQUFLLEdBQUwsS0FBSzs2QkFKUyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsU0FBUzs7WUFNM0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTs7Z0JBQzdDLElBQU0sU0FBUyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQzdGLENBQUMsQ0FBQztTQUNIOzs7O1FBRUQsdUNBQVE7OztZQUFSLGVBQWE7Ozs7O1FBRWIsa0NBQUc7Ozs7WUFBSCxVQUFJLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakU7O29CQTlDREEsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsa3RDQXdCVjt3QkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ1o7Ozs7O3dCQWpDUSxjQUFjO3dCQU5kaUIscUJBQWM7d0JBR2RILFFBQUs7OzttQ0FIZDs7Ozs7Ozs7UUMwQ0MsMEJBQ1MsT0FDQSxnQkFDQSxNQUNBLFVBQ0E7WUFMVCxpQkFrQkM7WUFqQlEsVUFBSyxHQUFMLEtBQUs7WUFDTCxtQkFBYyxHQUFkLGNBQWM7WUFDZCxTQUFJLEdBQUosSUFBSTtZQUNKLGFBQVEsR0FBUixRQUFRO1lBQ1IsVUFBSyxHQUFMLEtBQUs7K0JBckJBLElBQUlGLFlBQU8sRUFBUTtrQ0FDVSxJQUFJYiwrQkFBZSxDQUFDLEtBQUssQ0FBQzt1QkFjdkQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQVF2QixTQUFTO1lBQ1QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNOztnQkFDakMsSUFBTSxTQUFTLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFFdkMsU0FBUztvQkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO3dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNsQixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSDtRQS9CRCxzQkFDSSxrQ0FBSTs7O2dCQUtSO2dCQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuQjs7OztnQkFSRCxVQUNTLEtBQW1CO2dCQUMzQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUFFLE9BQU87Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjs7O1dBQUE7Ozs7UUEyQkQsMENBQWU7OztZQUFmO2dCQUFBLGlCQXFEQzs7Ozs7Ozs7Ozs7Ozs7Z0JBdkNBLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksR0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztvQkFDbEUsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxjQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFDbEIsTUFBTSxFQUFFLGNBQVksS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFLLElBSWxDLENBQUM7b0JBQ0gsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxjQUFjO3lCQUN6QyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDM0MsSUFBSSxDQUFDZ0IsZ0JBQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksSUFBSSxTQUFTLEdBQUEsQ0FBQyxFQUFFTixtQkFBUyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt5QkFDcEUsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDZCxLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN0QixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQ3JELElBQUksQ0FBQyxJQUFJLEVBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUM5QjtnQ0FDRCxRQUFRLEVBQUUsSUFBSTs2QkFDZCxDQUFDLENBQUM7eUJBQ0g7NkJBQU07NEJBQ04sS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQ3JELElBQUksQ0FBQyxJQUFJLEVBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUM5Qjs2QkFDRCxDQUFDLENBQUM7eUJBQ0g7cUJBQ0QsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQzs7Ozs7OzthQVFIOzs7O1FBQ0Qsc0NBQVc7OztZQUFYOztnQkFFQyxTQUFTO2dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7Ozs7O1FBQ0QscUNBQVU7Ozs7WUFBVixVQUFXLENBQWtCO2dCQUE3QixpQkF3QkM7Z0JBdkJBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Z0JBRXBDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYztxQkFDekMsT0FBTyxDQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQ3pELElBQUksQ0FDSjtxQkFDQSxTQUFTLENBQUMsVUFBQSxJQUFJO29CQUNkLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztvQkFRdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2YsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7cUJBQ2pHLENBQUMsQ0FBQztpQkFDSCxDQUFDLENBQUM7YUFDSjs7b0JBbElEVCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxzZkFLb0Y7d0JBQzlGLE1BQU0sRUFBRSxDQUFDLG9QQUFvUCxDQUFDO3FCQUM5UDs7Ozs7d0JBcEJRYyxRQUFLO3dCQUlMLGNBQWM7d0JBTmRELGFBQVU7d0JBRjBDWixXQUFRO3dCQU01RGdCLHFCQUFjOzs7OzJCQXVCckJmLFFBQUs7OytCQTdCUDs7Ozs7OztBQ0FBO1FBNEZDLDJDQUFvQixRQUFrQztZQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtvQ0E5Q25DO2dCQUNsQixHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixHQUFHLEVBQUUsZ0JBQWdCO2dCQUNyQixPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixhQUFhLEVBQUUsZ0JBQWdCO2dCQUMvQixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsb0NBQW9DO2dCQUMzQyxRQUFRLEVBQUUsNEJBQTRCO2FBQ3RDO29DQUl1QixJQUFJO21DQThCRixFQUFFO1NBQzhCO1FBN0IxRCxzQkFDSSxtREFBSTs7OztnQkFEUixVQUNTLElBQVM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFBRSxPQUFPO2dCQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7Z0JBQ2xCLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQzs7Z0JBQ25CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBQzdELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsU0FBUztvQkFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2lCQUN4RCxDQUFDLENBQUM7O2dCQUNILElBQUksY0FBYyxHQUFHZ0IscUJBQWtCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztnQkFFaEUsSUFBSSxRQUFRLEdBQUdBLHFCQUFrQixDQUFDLHFCQUFxQixDQUN0RCxjQUFjLEVBQ2QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FDN0MsQ0FBQzs7Z0JBQ0YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Z0JBRWhFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRXpDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUxRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQztnQkFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO2FBQ2xDOzs7V0FBQTs7OztRQUdELDJEQUFlOzs7WUFBZixlQUFvQjs7Ozs7UUFDcEIsc0RBQVU7Ozs7WUFBVixVQUFXLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0M7O29CQTlFRGxCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsNEJBQTRCO3dCQUN0QyxRQUFRLEVBQUUsaytCQWdCQzt3QkFDWCxNQUFNLEVBQUUsQ0FBQyxtUUFBbVEsQ0FBQzt3QkFDN1EsZUFBZSxFQUFFOzRCQUNoQix1QkFBdUI7NEJBQ3ZCLG9DQUFvQzs0QkFDcEMsNEJBQTRCOzRCQUM1QixnQkFBZ0I7eUJBQ2hCO3FCQUNEOzs7Ozt3QkF4Q0FtQiwyQkFBd0I7Ozs7Z0RBc0R2QkMsWUFBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFQyxtQkFBZ0IsRUFBRTtzQ0FFakVELFlBQVMsU0FBQyxnQkFBZ0I7MkJBRzFCbEIsUUFBSzs7Z0RBL0RQOzs7Ozs7O0FDQUE7UUFtRkMsaURBQW9CLFFBQWtDO1lBQWxDLGFBQVEsR0FBUixRQUFRLENBQTBCO29DQTlDbkM7Z0JBQ2xCLEdBQUcsRUFBRSxpQ0FBaUM7Z0JBQ3RDLElBQUksRUFBRSxtQ0FBbUM7Z0JBQ3pDLGFBQWEsRUFBRSxtQ0FBbUM7Z0JBQ2xELEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLEdBQUcsRUFBRSxnQ0FBZ0M7Z0JBQ3JDLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLElBQUksRUFBRSxtQ0FBbUM7Z0JBQ3pDLFFBQVEsRUFBRSxvQ0FBb0M7YUFDOUM7aUNBR3lCLElBQUlDLGVBQVksRUFBRTtvQ0FDcEIsSUFBSTtTQWlDOEI7UUFoQzFELHNCQUNJLHlEQUFJOzs7O2dCQURSLFVBQ1MsSUFBUztnQkFEbEIsaUJBK0JDO2dCQTdCQSxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUM7b0JBQUUsT0FBTztnQkFDbkQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQzFDLElBQUksSUFBSSxDQUFDLGdCQUFnQjt3QkFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzNELE9BQU87aUJBQ1A7O2dCQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUNsRCxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTO29CQUMxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO2lCQUNoRSxDQUFDLENBQUM7O2dCQUNILElBQUksY0FBYyxHQUFHZSxxQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUVoRSxJQUFJLFFBQVEsR0FBR0EscUJBQWtCLENBQUMscUJBQXFCLENBQ3RELGNBQWMsRUFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUM3QyxDQUFDOztnQkFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDOztnQkFDaEUsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekMsSUFBSSxtQkFBTSxTQUFTLENBQUMsUUFBUSxHQUFFLGFBQWE7b0JBQzFDLG1CQUFNLFNBQVMsQ0FBQyxRQUFRLEdBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQzt3QkFDakQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDMUIsQ0FBQyxDQUFDO2dCQUVKLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUUxRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQztnQkFFRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO2FBQ2xDOzs7V0FBQTs7OztRQUVELGlFQUFlOzs7WUFBZixlQUFvQjs7b0JBM0RwQmxCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsbUNBQW1DO3dCQUM3QyxRQUFRLEVBQUUsd0NBQXdDO3dCQUNsRCxNQUFNLEVBQUUsQ0FBQywyRUFBMkUsQ0FBQzt3QkFDckYsZUFBZSxFQUFFOzRCQUNoQixpQ0FBaUM7NEJBQ2pDLGdDQUFnQzs0QkFDaEMsbUNBQW1DOzRCQUNuQyxvQ0FBb0M7eUJBQ3BDO3FCQUNEOzs7Ozt3QkE5QkFtQiwyQkFBd0I7Ozs7Z0RBMEN2QkMsWUFBUyxTQUFDLDJCQUEyQixFQUFFLEVBQUUsSUFBSSxFQUFFQyxtQkFBZ0IsRUFBRTtvQ0FFakVqQixTQUFNOzJCQUVORixRQUFLOztzREFuRFA7Ozs7Ozs7O1FDZUMsd0JBQW9CLFFBQXNCLEVBQVVvQixTQUFjLEVBQVUsY0FBOEI7WUFBMUcsaUJBQThHO1lBQTFGLGFBQVEsR0FBUixRQUFRLENBQWM7WUFBVSxXQUFNLEdBQU5BLFNBQU0sQ0FBUTtZQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjttQ0FHeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUNYLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGdCQUFnQixFQUFFLEdBQUEsQ0FBQyxDQUFDOytCQUduRyxJQUFJLENBQUMsUUFBUTtpQkFDekIsTUFBTSxFQUFFO2lCQUNSLElBQUksQ0FDSkEsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCRCxtQkFBUyxDQUFDLFVBQUMsSUFBaUM7Z0JBQzNDLE9BQUEsS0FBSSxDQUFDLGNBQWM7cUJBQ2pCLFdBQVcsRUFBRTtxQkFDYixJQUFJLENBQUNDLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUFFWSxvQkFBVSxDQUFDLGNBQU0sT0FBQUMsT0FBRSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUFBLENBQzlGLENBQ0Q7U0FmNEc7O29CQUY5R25CLGFBQVU7Ozs7O3dCQVRGb0IsZUFBTzt3QkFIUEMsYUFBTTt3QkFPTixjQUFjOzs7O1lBU3JCQyxjQUFNLEVBQUU7Ozs7WUFHUkEsY0FBTSxFQUFFOzs7NkJBcEJWOzs7Ozs7OztRQ3dCQywyQkFBb0IsUUFBc0IsRUFBVUwsU0FBYyxFQUFVLGNBQThCO1lBQTFHLGlCQUE4RztZQUExRixhQUFRLEdBQVIsUUFBUSxDQUFjO1lBQVUsV0FBTSxHQUFOQSxTQUFNLENBQVE7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7c0NBR3JGLElBQUksQ0FBQyxRQUFRO2lCQUNoQyxNQUFNLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDO2lCQUN6QyxJQUFJLENBQUNYLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQzsrQkFHckUsSUFBSSxDQUFDLFFBQVE7aUJBQ3pCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDL0MsSUFBSSxDQUNKQSxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JELG1CQUFTLENBQUMsVUFBQyxJQUFnQztnQkFDMUMsT0FBQSxLQUFJLENBQUMsY0FBYztxQkFDakIsVUFBVSxDQUFDLElBQUksQ0FBQztxQkFDaEIsSUFBSSxDQUNKQyxhQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsRUFDNUNZLG9CQUFVLENBQUMsY0FBTSxPQUFBQyxLQUFFLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUNsRDthQUFBLENBQ0YsQ0FDRDt3Q0FHcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQzFGYixhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JBLGFBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxVQUFVLENBQUUsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPSCxxQkFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzFCLENBQUMsQ0FDRjtrQ0FHZ0IsSUFBSSxDQUFDLFFBQVE7aUJBQzVCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQUM7aUJBQzNDLElBQUksQ0FBQ0csYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUVBLGFBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dDQUcvRCxJQUFJLENBQUMsUUFBUTtpQkFDMUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztpQkFDekMsSUFBSSxDQUFDQSxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFBRUEsYUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7MkNBR2xFLElBQUksQ0FBQyxRQUFRO2lCQUNyQyxNQUFNLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BELElBQUksQ0FBQ0EsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUVBLGFBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDOytDQUdyRCxJQUFJLENBQUMsUUFBUTtpQkFDekMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLDBCQUEwQixDQUFDO2lCQUN4RCxJQUFJLENBQ0pBLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUM3QkQsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUNqRzs0Q0FHeUIsSUFBSSxDQUFDLFFBQVE7aUJBQ3RDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDckQsSUFBSSxDQUNKQyxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JELG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLElBQUksaUNBQWlDLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxHQUFBLENBQUMsQ0FDakc7NkNBRzBCLElBQUksQ0FBQyxRQUFRO2lCQUN2QyxNQUFNLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7O2lCQUV0RCxJQUFJLENBQ0pDLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUM3QkQsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUNyRjtvQ0FHaUIsSUFBSSxDQUFDLFFBQVE7aUJBQzlCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDOUMsSUFBSSxDQUFDQyxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFBRUEsYUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFBLENBQUMsQ0FBQztTQTFFb0M7O29CQUY5R04sYUFBVTs7Ozs7d0JBbEJGb0IsZUFBTzt3QkFIUEMsYUFBTTt3QkFRTixjQUFjOzs7O1lBaUJyQkMsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OztZQWVSQSxjQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7WUFTM0JBLGNBQU0sRUFBRTs7OztZQUtSQSxjQUFNLEVBQUU7Ozs7WUFLUkEsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OztZQVFSQSxjQUFNLEVBQUU7Ozs7WUFRUkEsY0FBTSxFQUFFOzs7O1lBU1JBLGNBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7O2dDQS9GN0I7Ozs7Ozs7QUNDQTtJQVNBLElBQU0sTUFBTSxHQUFXO1FBQ3RCO1lBQ0MsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxRQUFRLEVBQUU7Z0JBQ1Q7b0JBQ0MsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsU0FBUyxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0Q7b0JBQ0MsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsU0FBUyxFQUFFLG1CQUFtQjtpQkFDOUI7Z0JBQ0Q7b0JBQ0MsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxtQkFBbUI7aUJBQzlCO2dCQUNEO29CQUNDLElBQUksRUFBRSxRQUFRO29CQUNkLFNBQVMsRUFBRSx1QkFBdUI7aUJBQ2xDO2dCQUNEO29CQUNDLElBQUksRUFBRSxPQUFPO29CQUNiLFNBQVMsRUFBRSxvQ0FBb0M7aUJBQy9DO2dCQUNEO29CQUNDLElBQUksRUFBRSxVQUFVO29CQUNoQixTQUFTLEVBQUUsNEJBQTRCO2lCQUN2QzthQUNEO1NBQ0Q7S0FDRCxDQUFDOztBQUVGLFFBQWEsYUFBYSxHQUF3QkMsbUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7QUMzQy9FO1FBZ0NDLGtDQUFvQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQ2pCLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDLENBQUM7U0FDaEY7UUFWRCxzQkFBSSwyQ0FBSzs7O2dCQUFUO2dCQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO2FBQzFDOzs7V0FBQTtRQUNELHNCQUFJLDRDQUFNOzs7Z0JBQVY7Z0JBQ0MsT0FBTztvQkFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtpQkFDakMsQ0FBQzthQUNGOzs7V0FBQTs7OztRQUlELDJDQUFROzs7WUFBUixlQUFhOztvQkExQmJYLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsNmRBU0o7cUJBQ047Ozs7O3dCQWRRLGNBQWM7Ozt1Q0FOdkI7Ozs7Ozs7QUNBQTs7Ozs7OztRQWdIUSx3QkFBTzs7OztZQUFkLFVBQWUsTUFBNEI7Z0JBQzFDLE9BQU87b0JBQ04sUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFFO2lCQUNqRSxDQUFDO2FBQ0Y7O29CQXhERDZCLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFnQjs0QkFDaEJDLGlCQUFXOzRCQUNYSCxtQkFBWTs0QkFDWkksbUJBQVk7NEJBQ1pDLDJCQUFrQjs0QkFDbEJDLDBCQUFpQjs0QkFDakJDLHNCQUFhOzRCQUNiQyx3QkFBZTs0QkFDZkMsc0JBQWE7NEJBQ2JDLHdCQUFlOzRCQUNmQyx3QkFBZTs0QkFDZkMsdUJBQWM7NEJBQ2RDLDBCQUFpQjs0QkFDakJDLDJCQUFrQjs0QkFDbEJDLHNCQUFhOzRCQUNiQywyQkFBZ0I7NEJBQ2hCQyx1QkFBYzs0QkFDZEMseUJBQWdCOzRCQUNoQkMsMEJBQWlCOzRCQUNqQkMsOEJBQXFCOzRCQUNyQkMseUJBQW1COzRCQUNuQkMsa0NBQXVCO3lCQUN2Qjt3QkFDRCxZQUFZLEVBQUU7NEJBQ2IsbUJBQW1COzRCQUNuQixpQkFBaUI7NEJBQ2pCLG9CQUFvQjs0QkFDcEIsb0JBQW9COzRCQUNwQix1Q0FBdUM7NEJBQ3ZDLGdCQUFnQjs0QkFDaEIsaUNBQWlDOzRCQUNqQywrQkFBK0I7NEJBQy9CLG1CQUFtQjs0QkFDbkIsdUJBQXVCOzRCQUN2Qiw0QkFBNEI7NEJBQzVCLGlDQUFpQzs0QkFDakMsZ0NBQWdDOzRCQUNoQyxvQ0FBb0M7NEJBQ3BDLG1DQUFtQzs0QkFDbkMsb0NBQW9DOzRCQUNwQywyQkFBMkI7NEJBQzNCLG1DQUFtQzs0QkFDbkMsd0JBQXdCO3lCQUN4Qjt3QkFDRCxlQUFlLEVBQUUsQ0FBRSx3QkFBd0IsRUFBRSxvQkFBb0IsQ0FBRTt3QkFDbkUsT0FBTyxFQUFFLENBQUUsd0JBQXdCLENBQUU7d0JBQ3JDLFNBQVMsRUFBRSxFQUFFO3FCQUNiOzsrQkE5R0Q7Ozs7OztvQkF3SENyQixXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSLGdCQUFnQjs0QkFDaEJzQixjQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUM7NEJBQ2xEQyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBRSxDQUFDOzRCQUMvRCxhQUFhO3lCQUNiO3dCQUNELE9BQU8sRUFBRSxDQUFFLGdCQUFnQixDQUFFO3FCQUM3Qjs7bUNBaElEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
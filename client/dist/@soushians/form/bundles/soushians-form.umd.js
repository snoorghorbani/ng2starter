(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('@soushians/shared'), require('@angular/material'), require('@angular/cdk/collections'), require('@angular/router'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/switchMap'), require('rxjs/Observable'), require('@ngrx/effects'), require('@angular/common'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/form', ['exports', '@angular/forms', '@angular/core', 'rxjs', '@ngrx/store', '@soushians/config', '@angular/common/http', 'rxjs/BehaviorSubject', 'rxjs/operators', '@soushians/shared', '@angular/material', '@angular/cdk/collections', '@angular/router', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/switchMap', 'rxjs/Observable', '@ngrx/effects', '@angular/common', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.form = {}),global.ng.forms,global.ng.core,global.rxjs,null,null,global.ng.common.http,global.rxjs.BehaviorSubject,global.rxjs.operators,null,global.ng.material,global.ng.cdk.collections,global.ng.router,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/switchMap'],global.rxjs.Observable,null,global.ng.common,global.ng['flex-layout']));
}(this, (function (exports,forms,i0,rxjs,i2,config,i1,BehaviorSubject,operators,shared,material,collections,router,map,mergeMap,switchMap,Observable,effects,common,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (AddFormApiModel) {
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
                        name: this.name,
                        form: this.form,
                        events: this.events
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        title: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        AddFormApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        AddFormApiModel.Response = Response;
    })(exports.AddFormApiModel || (exports.AddFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (EditFormApiModel) {
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
                        name: this.name,
                        form: this.form,
                        events: this.events
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditFormApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        EditFormApiModel.Response = Response;
    })(exports.EditFormApiModel || (exports.EditFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    (function (FormListApiModel) {
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
                        Name: this.Name,
                        Controls: this.Controls
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Controls: new forms.FormGroup({})
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        FormListApiModel.Request = Request;
        var Response = (function () {
            function Response() {
            }
            return Response;
        }());
        FormListApiModel.Response = Response;
    })(exports.FormListApiModel || (exports.FormListApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Validator = (function () {
        function Validator() {
            this.required = {
                active: false,
                message: "این فیلد الزامی است"
            };
            this.minlength = {
                active: false,
                message: "حداقل تعداد کارکترها",
                value: 5
            };
            this.email = {
                active: false,
                message: "لطفا ایمیل صحیح وارد نمایید"
            };
        }
        return Validator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FieldConfig = (function () {
        function FieldConfig(type) {
            this.type = type;
            if (type != "control")
                this.fields = [];
            this.width = 3;
            this.validator = new Validator();
        }
        return FieldConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormSchemaModel = (function () {
        function FormSchemaModel() {
            this.events = {
                accept: {
                    show: false,
                    text: "ثبت"
                },
                cancel: {
                    show: false,
                    text: "انصراف"
                }
            };
            this.form = new FieldConfig("group");
        }
        /**
         * @return {?}
         */
        FormSchemaModel.prototype.init = /**
         * @return {?}
         */
            function () {
                this._id = (Math.random() * 10).toString();
            };
        return FormSchemaModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend/server/did/not/set"
        },
        endpoints: {
            addForm: "",
            editForm: "",
            getForm: "",
            getList: "",
            deleteForm: ""
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new i0.InjectionToken("FormModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormConfigurationService = (function () {
        function FormConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getFormModuleConfig).subscribe(function (userConfig) {
                if (!userConfig)
                    return;
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(FormConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        FormConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        FormConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ FormConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: FormConfigurationService, providedIn: "root" });
        return FormConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormService = (function () {
        function FormService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.add = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                var /** @type {?} */ model = new exports.AddFormApiModel.Request(data);
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.addForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) { return _this.http.post(config$$1.endpoints.addForm, model.getRequestBody()); })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.get = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.getForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) { return _this.http.get(shared.stringTemplate(config$$1.endpoints.getForm, { _id: _id })); })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @return {?}
         */
        FormService.prototype.getList = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.getList != ""; })
                    .switchMap(function (config$$1) { return _this.http.get(config$$1.endpoints.getList); })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                var /** @type {?} */ model = new exports.EditFormApiModel.Request(data);
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.editForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) { return _this.http.put(config$$1.endpoints.editForm, model.getRequestBody()); })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.delete = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.deleteForm != ""; })
                    .switchMap(function (config$$1) { return _this.http.get(config$$1.endpoints.deleteForm); });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.selectFormById = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var /** @type {?} */ subject = new BehaviorSubject.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.form.list.data; })
                    .pipe(operators.filter(function (forms$$1) { return forms$$1 != null; }), operators.map(function (forms$$1) { return forms$$1.find(function (form) { return form._id == _id; }); }))
                    .subscribe(function (FormSchemaModel$$1) { return subject.next(FormSchemaModel$$1); });
                return subject.asObservable();
            };
        FormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: FormConfigurationService }
            ];
        };
        /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(FormConfigurationService)); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectComponent = (function () {
        function SelectComponent() {
        }
        SelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-select",
                        template: "<div  [formGroup]=\"group\">\n<mat-form-field>\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\n    </mat-select>\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CheckboxComponent = (function () {
        function CheckboxComponent() {
        }
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-checkbox",
                        template: "<div [formGroup]=\"group\">\n    <mat-checkbox [formControlName]=\"config.name\">\n        {{config.title}}\n    </mat-checkbox>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EmailComponent = (function () {
        function EmailComponent() {
        }
        /**
         * @return {?}
         */
        EmailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        EmailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-email",
                        template: "<div  [formGroup]=\"group\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        EmailComponent.ctorParameters = function () { return []; };
        return EmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ColorComponent = (function () {
        function ColorComponent() {
        }
        /**
         * @return {?}
         */
        ColorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ColorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-color",
                        template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        ColorComponent.ctorParameters = function () { return []; };
        ColorComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return ColorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableComponent = (function () {
        function TableComponent(http) {
            this.http = http;
            this.selection = new collections.SelectionModel(true, []);
            this.ready = false;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.http.get(this.schema.dataEndpoint).subscribe(function (data) {
                    _this.ready = true;
                    _this.displayedColumns = data.displayedColumns;
                    _this.filedDisplayedColumns = data.filedDisplayedColumns;
                    _this.dataSource = new material.MatTableDataSource(data.dataSource);
                });
            };
        /** Whether the number of selected elements matches the total number of rows. */
        /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        TableComponent.prototype.isAllSelected = /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
            function () {
                var /** @type {?} */ numSelected = this.selection.selected.length;
                this.form.patchValue((_a = {},
                    _a[this.schema.name] = this.selection.selected,
                    _a));
                var /** @type {?} */ numRows = this.dataSource.data.length;
                return numSelected === numRows;
                var _a;
            };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        TableComponent.prototype.masterToggle = /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
            function () {
                var _this = this;
                this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
            };
        TableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-table",
                        template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        TableComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NumberComponent = (function () {
        function NumberComponent() {
        }
        /**
         * @return {?}
         */
        NumberComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        NumberComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-number",
                        template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        NumberComponent.ctorParameters = function () { return []; };
        NumberComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return NumberComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TextComponent = (function () {
        function TextComponent() {
        }
        TextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-text",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        TextComponent.ctorParameters = function () { return []; };
        return TextComponent;
    }());

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
    /** @enum {string} */
    var FormsListActionTypes = {
        FORMS_LIST: "[FORM][LIST] FORMS_LIST",
        FORMS_LIST_START: "[FORM][LIST] FORMS_LIST_START",
        FORMS_LIST_SUCCEED: "[FORM][LIST] FORMS_LIST_SUCCEED",
        FORMS_LIST_FAILED: "[FORM][LIST] FORMS_LIST_FAILED",
        ADD_FORM_SCHEMA: "[FORM][LIST] ADD_FORM_SCHEMA",
        FORM_SCHEMA_UPDATE: "[FORM][LIST] FORM_SCHEMA_UPDATE",
        GET_FORM_SCHEMA: "[FORM][LIST] GET_FORM_SCHEMA",
        FORM_SCHEMA_FETCHED: "[FORM][LIST] FORM_SCHEMA_FETCHED",
    };
    var FormsListAction = (function () {
        function FormsListAction() {
            this.type = FormsListActionTypes.FORMS_LIST;
        }
        return FormsListAction;
    }());
    var FormsListStartAction = (function () {
        function FormsListStartAction() {
            this.type = FormsListActionTypes.FORMS_LIST_START;
        }
        return FormsListStartAction;
    }());
    var FormsListSucceedAction = (function () {
        function FormsListSucceedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
        }
        return FormsListSucceedAction;
    }());
    var FormsListFailedAction = (function () {
        function FormsListFailedAction() {
            this.type = FormsListActionTypes.FORMS_LIST_FAILED;
        }
        return FormsListFailedAction;
    }());
    var UpdateFormSchemaAction = (function () {
        function UpdateFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
        }
        return UpdateFormSchemaAction;
    }());
    var AddFormSchemaAction = (function () {
        function AddFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
        }
        return AddFormSchemaAction;
    }());
    var GetFormSchemaAction = (function () {
        function GetFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.GET_FORM_SCHEMA;
        }
        return GetFormSchemaAction;
    }());
    var FormSchemaFechedAction = (function () {
        function FormSchemaFechedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
        }
        return FormSchemaFechedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateFormInputControlComponent = (function () {
        function DateFormInputControlComponent() {
        }
        DateFormInputControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-date",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\n  <input matInput [id]=\"config.name\" [matDatepicker]=\"_datepicker\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n  <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #_datepicker></mat-datepicker>\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>\n\n<!-- \n\n<div [formGroup]=\"formGroup\">\n    <div class=\"field-wrapper\">\n      <div [@filedAnimation]=\"mode\">\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #_datepicker></mat-datepicker>\n            \n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\n        </mat-form-field>\n        <div class=\"value-box\"> \n          <span class=\"name\">\n            {{ placeholder }} :\n          </span>\n          <span class=\"value\">\n            {{(DisplayValue$ | async | persianDate)}} \n          </span>\n          </div>\n      </div>\n    </div>\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        DateFormInputControlComponent.ctorParameters = function () { return []; };
        return DateFormInputControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FileFormInputControlComponent = (function () {
        function FileFormInputControlComponent() {
        }
        FileFormInputControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-file",
                        template: "<div fxFlexFill [formGroup]=\"group\">\n\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\n  <input [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</div>\n\n<!-- \n\n<div [formGroup]=\"formGroup\">\n    <div class=\"field-wrapper\">\n      <div [@filedAnimation]=\"mode\">\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #_datepicker></mat-datepicker>\n            \n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\n        </mat-form-field>\n        <div class=\"value-box\"> \n          <span class=\"name\">\n            {{ placeholder }} :\n          </span>\n          <span class=\"value\">\n            {{(DisplayValue$ | async | persianDate)}} \n          </span>\n          </div>\n      </div>\n    </div>\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        FileFormInputControlComponent.ctorParameters = function () { return []; };
        return FileFormInputControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormViewComponent = (function () {
        function FormViewComponent(service, compiler, resolver, store) {
            var _this = this;
            this.service = service;
            this.compiler = compiler;
            this.resolver = resolver;
            this.store = store;
            this.unsubscribe = new rxjs.Subject();
            this.accept = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
            this.card = false;
            this.formGroupCreated = false;
            this.schema$ = new BehaviorSubject.BehaviorSubject(undefined);
            this.schema$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (schema) {
                if (!schema)
                    return;
                _this.formGroup = /** @type {?} */ (_this.createFrom(schema.form));
                if (!schema.form.name)
                    return;
                _this.formGroupCreated = true;
            });
        }
        Object.defineProperty(FormViewComponent.prototype, "id", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                var _this = this;
                if (!this.local)
                    this.store.dispatch(new GetFormSchemaAction(id));
                this.service
                    .selectFormById(id)
                    .pipe(operators.takeUntil(this.unsubscribe))
                    .subscribe(function (schema) { return _this.schema$.next(schema); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormViewComponent.prototype, "schema", {
            set: /**
             * @param {?} schema
             * @return {?}
             */ function (schema) {
                this.schema$.next(schema);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormViewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
            };
        /**
         * @param {?} schema
         * @return {?}
         */
        FormViewComponent.prototype.generate = /**
         * @param {?} schema
         * @return {?}
         */
            function (schema) {
                this.schema$.next(schema);
            };
        /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
        FormViewComponent.prototype.createFrom = /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
            function (data, parentPath) {
                var _this = this;
                if (parentPath === void 0) {
                    parentPath = "";
                }
                if (data.type == "control") {
                    if (data.parentType == "array") ;
                    else if (data.parentType == "group") {
                        var /** @type {?} */ formGroupPath = parentPath;
                        parentPath = parentPath + ".controls." + (((data))).name;
                    }
                    var /** @type {?} */ validators = [];
                    if (data.validator.required && data.validator.required.active) {
                        validators.push(forms.Validators.required);
                    }
                    if (data.validator.minlength && data.validator.minlength.active) {
                        validators.push(forms.Validators.minLength(data.validator.minlength.value));
                    }
                    if (data.validator.email && data.validator.email.active) {
                        validators.push(forms.Validators.email);
                    }
                    var /** @type {?} */ ctr = new forms.FormControl(data.value, validators);
                    ((ctr)).schema = data;
                    ((ctr)).schema.path = parentPath;
                    ((ctr)).schema.formGroupPath = formGroupPath;
                    return ctr;
                }
                else if (data.type == "group") {
                    var /** @type {?} */ formGroup = new forms.FormGroup({});
                    if (data.parentType == undefined) {
                        parentPath = ((data)).name;
                    }
                    else if (data.parentType == "array") {
                        parentPath = parentPath + ".controls[" + (((data))).name + "]";
                    }
                    else if (data.parentType == "group") {
                        parentPath = parentPath + ".controls." + (((data))).name;
                    }
                    ((formGroup)).schema = data;
                    ((formGroup)).schema.path = parentPath;
                    data.fields.forEach(function (item) {
                        item.parentType = "group";
                        formGroup.addControl(item.name, _this.createFrom(item, parentPath));
                    });
                    return formGroup;
                }
                else {
                    var /** @type {?} */ formArray = new forms.FormArray([]);
                    parentPath =
                        parentPath == "" ? ((data)).name : parentPath + ".controls." + (((data))).name;
                    ((formArray)).schema = data;
                    ((formArray)).schema.path = parentPath;
                    data.fields.forEach(function (item, idx) {
                        item.parentType = "array";
                        item.name = idx.toString();
                        formArray.controls.push(_this.createFrom(item, parentPath));
                    });
                    return formArray;
                }
            };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.accepted = /**
         * @return {?}
         */
            function () {
                this.accept.emit(this.formGroup);
            };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.canceled = /**
         * @return {?}
         */
            function () {
                this.cancel.emit(this.formGroup);
            };
        FormViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-view",
                        template: "<form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <mat-card>\n    <mat-card-title>\n      {{(schema$ | async)?.name}}\n    </mat-card-title>\n    <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n      </mat-card-actions>\n  </mat-card>\n</form>\n\n<form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <div>\n    <h3>\n      {{(schema$ | async)?.name}}\n    </h3>\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </div>\n    <div>\n      <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}}</button>\n      <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n    </div>\n  </div>\n</form>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        FormViewComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: i0.Compiler },
                { type: i0.ComponentFactoryResolver },
                { type: i2.Store }
            ];
        };
        FormViewComponent.propDecorators = {
            accept: [{ type: i0.Output }],
            cancel: [{ type: i0.Output }],
            local: [{ type: i0.Input }],
            card: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return FormViewComponent;
    }());
    var /** @type {?} */ components = {
        checkbox: CheckboxComponent,
        text: TextComponent,
        date: DateFormInputControlComponent,
        file: FileFormInputControlComponent,
        table: TableComponent,
        color: ColorComponent,
        email: EmailComponent,
        select: SelectComponent
    };
    var DynamicFieldDirective = (function () {
        function DynamicFieldDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                debugger;
                if (this.component) {
                    this.component.instance.config = this.config;
                    this.component.instance.group = this.group;
                }
            };
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                debugger;
                if (!components[this.config.inputType]) {
                    var /** @type {?} */ supportedTypes = Object.keys(components).join(", ");
                    throw new Error("Trying to use an unsupported type (" + this.config.inputType + ").\n\t\t  Supported types: " + supportedTypes);
                }
                var /** @type {?} */ component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
                this.component = this.container.createComponent(component);
                this.component.instance.config = this.config;
                this.component.instance.group = this.group;
            };
        DynamicFieldDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[dynamicField]"
                    },] },
        ];
        /** @nocollapse */
        DynamicFieldDirective.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        DynamicFieldDirective.propDecorators = {
            config: [{ type: i0.Input }],
            group: [{ type: i0.Input }]
        };
        return DynamicFieldDirective;
    }());

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
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
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
    var /** @type {?} */ initialState = {
        status: "pristine",
        data: []
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case FormsListActionTypes.FORMS_LIST: {
                return __assign({}, state, { status: "dirty" });
            }
            case FormsListActionTypes.FORMS_LIST_START: {
                return __assign({}, state, { status: "pending" });
            }
            case FormsListActionTypes.FORMS_LIST_SUCCEED: {
                return __assign({}, state, { data: action.payload, status: "succeed" });
            }
            case FormsListActionTypes.FORMS_LIST_FAILED: {
                return __assign({}, state, { status: "failed" });
            }
            case FormsListActionTypes.FORM_SCHEMA_UPDATE: {
                var /** @type {?} */ data = state.data.concat();
                var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.ADD_FORM_SCHEMA: {
                var /** @type {?} */ data = state.data.concat();
                var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
                var /** @type {?} */ data = state.data.concat();
                var /** @type {?} */ entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
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
    var /** @type {?} */ FormReducers = {
        list: reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormGroupComponent = (function () {
        function FormGroupComponent() {
            this.noHeader = false;
            this.changes = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormGroupComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.changes.emit();
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                this.schema.id = this.schema.id + 1;
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        /**
         * @param {?} idx
         * @return {?}
         */
        FormGroupComponent.prototype.deleteFormGroup = /**
         * @param {?} idx
         * @return {?}
         */
            function (idx) {
                this.schema.fields.splice(idx, 1);
            };
        FormGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-group",
                        template: "<mat-card>\n  <mat-card-content>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n    </mat-form-field>\n\n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n      <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n    </div>\n\n    <div *ngFor=\"let field of schema.fields;let i = index\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n        <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\n        <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>"
                    },] },
        ];
        /** @nocollapse */
        FormGroupComponent.ctorParameters = function () { return []; };
        FormGroupComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            noHeader: [{ type: i0.Input }],
            changes: [{ type: i0.Output }],
            delete: [{ type: i0.Output }]
        };
        return FormGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormArrayComponent = (function () {
        function FormArrayComponent() {
            this.changes = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormArrayComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.changes.emit();
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        FormArrayComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-array",
                        template: "<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n      \n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\n    </div>\n    \n    <div *ngFor=\"let field of schema.fields\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>"
                    },] },
        ];
        /** @nocollapse */
        FormArrayComponent.ctorParameters = function () { return []; };
        FormArrayComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            changes: [{ type: i0.Output }]
        };
        return FormArrayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormControlComponent = (function () {
        function FormControlComponent() {
            this.changes = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
            this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.options = new forms.FormArray([
                new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                })
            ]);
            this.tableOptions = new forms.FormGroup({
                dataEndpoint: new forms.FormControl("")
            });
        }
        /**
         * @return {?}
         */
        FormControlComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                if ([this.schema.name, this.schema.title, this.schema.inputType].some(function (item) { return !item; }))
                    return true;
                if (this.schema.inputType == "table") {
                    this.schema.options = this.tableOptions.value;
                }
                else if (this.schema.inputType == "select") {
                    this.schema.options = this.options.value;
                }
                this.changes.emit();
            };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.addOption = /**
         * @return {?}
         */
            function () {
                this.options.push(new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                }));
            };
        /**
         * @param {?} i
         * @return {?}
         */
        FormControlComponent.prototype.removeOption = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.options.controls.splice(i, 1);
            };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.insertOptions = /**
         * @return {?}
         */
            function () {
                this.schema.options = this.options.value;
            };
        FormControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-control",
                        template: "  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <button mat-icon-button (click)=\"delete.emit()\">\n            <mat-icon aria-label=\" icon-button\">delete_forever</mat-icon>\n          </button>\n        {{schema.name}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\"/>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n          <mat-option value=\"table\">table</mat-option>\n          <mat-option value=\"select\">select</mat-option>\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"email\">email</mat-option>\n          <mat-option value=\"color\">color</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"checkbox\">checkbox</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>\n      </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n            <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\"/>\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"schema.inputType=='select'\">\n        [options]\n        <button (click)=\"addOption()\">+</button>\n        <button (click)=\"insertOptions()\">insert</button>\n        <div *ngFor=\"let option of options.controls;index as i\">\n          {{i}}\n          <div [formGroup]=\"options.controls[i]\">\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <br/>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\"  placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\"/>\n        </mat-form-field>\n    </div>\n      \n  </mat-expansion-panel>"
                    },] },
        ];
        /** @nocollapse */
        FormControlComponent.ctorParameters = function () { return []; };
        FormControlComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            changes: [{ type: i0.Output }],
            delete: [{ type: i0.Output }]
        };
        return FormControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var EditFormActionTypes = {
        EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
        EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
        EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
        EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
    };
    var EditFormAction = (function () {
        function EditFormAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM;
        }
        return EditFormAction;
    }());
    var EditFormStartAction = (function () {
        function EditFormStartAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_START;
        }
        return EditFormStartAction;
    }());
    var EditFormSucceedAction = (function () {
        function EditFormSucceedAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
        }
        return EditFormSucceedAction;
    }());
    var EditFormFailedAction = (function () {
        function EditFormFailedAction() {
            this.type = EditFormActionTypes.EDIT_FORM_FAILED;
        }
        return EditFormFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var AddFormActionTypes = {
        ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
        ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
        ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
        ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
    };
    var AddFormAction = (function () {
        function AddFormAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM;
        }
        return AddFormAction;
    }());
    var AddFormStartAction = (function () {
        function AddFormStartAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM_START;
        }
        return AddFormStartAction;
    }());
    var AddFormSucceedAction = (function () {
        function AddFormSucceedAction() {
            this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
        }
        return AddFormSucceedAction;
    }());
    var AddFormFailedAction = (function () {
        function AddFormFailedAction() {
            this.type = AddFormActionTypes.ADD_FORM_FAILED;
        }
        return AddFormFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddFormContainerComponent = (function () {
        function AddFormContainerComponent(store, service) {
            this.store = store;
            this.service = service;
        }
        /**
         * @return {?}
         */
        AddFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.schema = new FormSchemaModel();
                this.schema.init();
                this.store.dispatch(new AddFormSchemaAction(this.schema));
            };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.add = /**
         * @param {?} form
         * @return {?}
         */
            function (form) {
                this.store.dispatch(new AddFormAction(form));
            };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.update_schema = /**
         * @param {?} form
         * @return {?}
         */
            function (form) {
                this.store.dispatch(new UpdateFormSchemaAction(form));
            };
        AddFormContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                    },] },
        ];
        /** @nocollapse */
        AddFormContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: FormService }
            ];
        };
        return AddFormContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormContainerComponent = (function (_super) {
        __extends(EditFormContainerComponent, _super);
        function EditFormContainerComponent(service, route, store) {
            var _this = _super.call(this, store, service) || this;
            _this.service = service;
            _this.route = route;
            _this.store = store;
            _this.formGroup = exports.EditFormApiModel.Request.formGroup;
            return _this;
        }
        /**
         * @return {?}
         */
        EditFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.route.params
                    .map(function (params) { return params["_id"]; })
                    .subscribe(function (id) { return _this.store.dispatch(new GetFormSchemaAction(id)); });
                this.route.params
                    .map(function (params) { return params["_id"]; })
                    .switchMap(function (id) { return _this.service.selectFormById(id); })
                    .filter(function (data) { return data != null; })
                    .take(1)
                    .subscribe(function (formSchema) {
                    _this.schema = formSchema;
                    _this.formGroup.patchValue(formSchema);
                });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        EditFormContainerComponent.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this.store.dispatch(new EditFormAction(data));
            };
        EditFormContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                    },] },
        ];
        /** @nocollapse */
        EditFormContainerComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return EditFormContainerComponent;
    }(AddFormContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddFormComponent = (function () {
        function AddFormComponent() {
            this.formGroup = exports.AddFormApiModel.Request.formGroup;
            this.submited = new i0.EventEmitter();
            this.changes = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        AddFormComponent.prototype.emit = /**
         * @return {?}
         */
            function () {
                this.formGroup.patchValue({ form: this.schema.form });
                this.submited.emit(this.formGroup.value);
            };
        /**
         * @return {?}
         */
        AddFormComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.formGroup.patchValue({ form: this.schema.form });
                this.changes.emit(this.formGroup.value);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        AddFormComponent.prototype.changeOrder = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) { };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                var /** @type {?} */ control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        AddFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-add",
                        template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                    },] },
        ];
        AddFormComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }],
            submited: [{ type: i0.Output }],
            changes: [{ type: i0.Output }]
        };
        return AddFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormComponent = (function (_super) {
        __extends(EditFormComponent, _super);
        function EditFormComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        EditFormComponent.prototype.emit = /**
         * @return {?}
         */
            function () {
                if (!this.formGroup.valid)
                    return;
                return this.submited.emit(this.formGroup.value);
            };
        EditFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "edit-form",
                        template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                    },] },
        ];
        EditFormComponent.propDecorators = {
            schema: [{ type: i0.Input }]
        };
        return EditFormComponent;
    }(AddFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormListContainerComponent = (function () {
        function FormListContainerComponent(store) {
            this.store = store;
            this.data$ = this.store.select(function (state) { return state.form.list.data; });
        }
        /**
         * @return {?}
         */
        FormListContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new FormsListAction());
            };
        FormListContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                    },] },
        ];
        /** @nocollapse */
        FormListContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return FormListContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormListComponent = (function () {
        function FormListComponent() {
        }
        FormListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "form-list",
                        template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  item._id]\">\n          <mat-icon aria-label=\"edit form\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
                    },] },
        ];
        FormListComponent.propDecorators = {
            data$: [{ type: i0.Input, args: ["data",] }]
        };
        return FormListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MainContainerComponent = (function () {
        function MainContainerComponent(route, store) {
            this.route = route;
            this.store = store;
        }
        MainContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<router-outlet></router-outlet>"
                    },] },
        ];
        /** @nocollapse */
        MainContainerComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return MainContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddFormEffects = (function () {
        function AddFormEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.AddForm$ = this.actions$
                .ofType(AddFormActionTypes.ADD_FORM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new AddFormStartAction(data); }));
            this.AddFormStart$ = this.actions$
                .ofType(AddFormActionTypes.ADD_FORM_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.add(data); }), operators.map(function (res) { return new AddFormSucceedAction(); }), operators.catchError(function () { return Observable.Observable.of(new AddFormFailedAction()); }));
        }
        AddFormEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AddFormEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddFormStart$", void 0);
        return AddFormEffects;
    }());

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
    var FormsListEffects = (function () {
        function FormsListEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(function (data) { return new FormsListStartAction(); });
            this.GetForm$ = this.actions$
                .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (id) { return _this.service.get(id); }), operators.map(function (formSchema) { return new FormSchemaFechedAction(formSchema); }));
            this.get_forms_list$ = this.actions$
                .ofType(FormsListActionTypes.FORMS_LIST_START)
                .pipe(operators.switchMap(function (data) { return _this.service.getList(); }), operators.map(function (res) { return new FormsListSucceedAction(res); }), operators.catchError(function () { return Observable.Observable.of(new FormsListFailedAction()); }));
        }
        FormsListEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        FormsListEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "GetForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "get_forms_list$", void 0);
        return FormsListEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormEffects = (function () {
        function EditFormEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.EditForm$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new EditFormStartAction(data); }));
            this.EditFormStart$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.update(data); }), operators.map(function (formSchema) { return new EditFormSucceedAction(formSchema); }), operators.catchError(function () { return Observable.Observable.of(new EditFormFailedAction()); }));
            this.UpdateFormsListStart$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (formSchema) { return new UpdateFormSchemaAction(formSchema); }));
        }
        EditFormEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        EditFormEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditFormStart$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
        return EditFormEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: "form",
            component: MainContainerComponent,
            children: [
                {
                    path: "add",
                    component: AddFormContainerComponent
                },
                {
                    path: "edit/:_id",
                    component: EditFormContainerComponent
                },
                {
                    path: "",
                    component: FormListContainerComponent
                }
            ]
        }
    ];
    var /** @type {?} */ RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgsFormModule = (function () {
        function NgsFormModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsFormModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config$$1) {
                return {
                    ngModule: RootNgsFormModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
                };
            };
        NgsFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatDatepickerModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: [
                            EditFormContainerComponent,
                            EditFormComponent,
                            FormListContainerComponent,
                            FormListComponent,
                            AddFormContainerComponent,
                            MainContainerComponent,
                            AddFormComponent,
                            FormGroupComponent,
                            FormArrayComponent,
                            FormControlComponent,
                            FormViewComponent,
                            DynamicFieldDirective,
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent
                        ],
                        entryComponents: [
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent
                        ],
                        exports: [FormViewComponent]
                    },] },
        ];
        return NgsFormModule;
    }());
    var RootNgsFormModule = (function () {
        function RootNgsFormModule() {
        }
        RootNgsFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsFormModule,
                            i2.StoreModule.forFeature("form", FormReducers),
                            effects.EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
                            RoutingModule
                        ],
                        exports: [NgsFormModule]
                    },] },
        ];
        return RootNgsFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.FormService = FormService;
    exports.FormViewComponent = FormViewComponent;
    exports.DynamicFieldDirective = DynamicFieldDirective;
    exports.FormSchemaModel = FormSchemaModel;
    exports.FieldConfig = FieldConfig;
    exports.NgsFormModule = NgsFormModule;
    exports.RootNgsFormModule = RootNgsFormModule;
    exports.ɵi = AddFormComponent;
    exports.ɵg = AddFormContainerComponent;
    exports.ɵl = AddFormContainerComponent;
    exports.ɵbb = AddFormEffects;
    exports.ɵn = AddFormComponent;
    exports.ɵp = FormArrayComponent;
    exports.ɵq = FormControlComponent;
    exports.ɵo = FormGroupComponent;
    exports.ɵf = EditFormContainerComponent;
    exports.ɵbc = EditFormEffects;
    exports.ɵh = EditFormComponent;
    exports.ɵbe = RoutingModule;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵj = FormListContainerComponent;
    exports.ɵk = FormListComponent;
    exports.ɵbd = FormsListEffects;
    exports.ɵba = reducer;
    exports.ɵm = MainContainerComponent;
    exports.ɵb = FormReducers;
    exports.ɵd = FormConfigurationService;
    exports.ɵs = CheckboxComponent;
    exports.ɵu = ColorComponent;
    exports.ɵv = DateFormInputControlComponent;
    exports.ɵt = EmailComponent;
    exports.ɵw = FileFormInputControlComponent;
    exports.ɵy = NumberComponent;
    exports.ɵr = SelectComponent;
    exports.ɵz = TableComponent;
    exports.ɵx = TextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL21vZGVscy9hZGQtZm9ybS5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2VkaXQtZm9ybS5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tbGlzdC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tZmllbGQtdmFsaWRhdG9yLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL21vZGVscy9maWVsZC1jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tc2NoZW1hLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0uY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3NlcnZpY2VzL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3NlcnZpY2VzL2Zvcm0uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZW1haWwvZW1haWwuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvbnVtYmVyL251bWJlci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9saXN0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLXZpZXcvZm9ybS12aWV3LmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9mb3JtLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRm9ybUxpc3RBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRDb250cm9sczogb2JqZWN0W107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBGb3JtTGlzdEFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb250cm9sczogdGhpcy5Db250cm9sc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbnRyb2xzOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIHZhbGlkYXRpb24ge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dmFsdWU/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblx0cmVxdWlyZWQ6IHZhbGlkYXRpb247XHJcblx0bWlubGVuZ3RoOiB2YWxpZGF0aW9uO1xyXG5cdGVtYWlsOiB2YWxpZGF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVxdWlyZWQgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCp8ObwozDmcKGIMOZwoHDm8KMw5nChMOYwq8gw5jCp8OZwoTDmMKyw5jCp8OZwoXDm8KMIMOYwqfDmMKzw5jCqlwiXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5taW5sZW5ndGggPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5rCqcOYwqrDmMKxw5nCh8OYwqdcIixcclxuXHRcdFx0dmFsdWU6IDVcclxuXHRcdH07XHJcblx0XHR0aGlzLmVtYWlsID0ge1xyXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRtZXNzYWdlOiBcIsOZwoTDmMK3w5nCgcOYwqcgw5jCp8ObwozDmcKFw5vCjMOZwoQgw5jCtcOYwq3Dm8KMw5jCrSDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCr1wiXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9mb3JtLWZpZWxkLXZhbGlkYXRvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29uZmlnIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdWJ0eXBlOiBzdHJpbmc7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cGFyZW50VHlwZT86IFwiYXJyYXlcIiB8IFwiZ3JvdXBcIjtcclxuXHRmb3JtR3JvdXBQYXRoPzogc3RyaW5nO1xyXG5cdHBhdGg/OiBzdHJpbmc7XHJcblx0aW5wdXRUeXBlOiBcInNlbGVjdFwiIHwgXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJlbWFpbFwiIHwgXCJjb2xvclwiIHwgXCJjaGVja2JveFwiIHwgXCJ0YWJsZVwiO1xyXG5cdHZhbHVlPzogYW55O1xyXG5cdG9yZGVyPzogbnVtYmVyO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblx0fVtdO1xyXG5cdGRhdGFFbmRwb2ludD86IHN0cmluZztcclxuXHRvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHRmaWVsZHM/OiBGaWVsZENvbmZpZ1tdO1xyXG5cdHZhbGlkYXRvcjogVmFsaWRhdG9yO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgIT0gXCJjb250cm9sXCIpIHRoaXMuZmllbGRzID0gW107XHJcblx0XHR0aGlzLndpZHRoID0gMztcclxuXHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybTogRmllbGRDb25maWc7XHJcblx0ZXZlbnRzID0ge1xyXG5cdFx0YWNjZXB0OiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqvDmMKow5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0Y2FuY2VsOiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHR9XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuX2lkID0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRhZGRGb3JtOiBzdHJpbmc7XHJcblx0XHRlZGl0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0TGlzdDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlRm9ybTogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRm9ybU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdGFkZEZvcm06IFwiXCIsXHJcblx0XHRlZGl0Rm9ybTogXCJcIixcclxuXHRcdGdldEZvcm06IFwiXCIsXHJcblx0XHRnZXRMaXN0OiBcIlwiLFxyXG5cdFx0ZGVsZXRlRm9ybTogXCJcIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Rm9ybU1vZHVsZUNvbmZpZz4oXCJGb3JtTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Rm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBGb3JtTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Rm9ybU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGFkZChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5hZGRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbmRwb2ludHMuYWRkRm9ybSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBBZGRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0Rm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbmRwb2ludHMuZ2V0Rm9ybSwgeyBfaWQgfSkpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCAhPSBcIlwiKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHR1cGRhdGUoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5lZGl0Rm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAucHV0KGNvbmZpZy5lbmRwb2ludHMuZWRpdEZvcm0sIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpKVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQuc3dpdGNoTWFwKGNvbmZpZyA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdH1cclxuXHRzZWxlY3RGb3JtQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZm9ybS5saXN0LmRhdGEpXHJcblx0XHRcdC5waXBlKGZpbHRlcihmb3JtcyA9PiBmb3JtcyAhPSBudWxsKSwgbWFwKGZvcm1zID0+IGZvcm1zLmZpbmQoZm9ybSA9PiBmb3JtLl9pZCA9PSBfaWQpKSlcclxuXHRcdFx0LnN1YnNjcmliZShGb3JtU2NoZW1hTW9kZWwgPT4gc3ViamVjdC5uZXh0KEZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXNlbGVjdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiPlxyXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7b3B0aW9uLmtleX19PC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY2hlY2tib3hcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbiAgICAgICAge3tjb25maWcudGl0bGV9fVxyXG4gICAgPC9tYXQtY2hlY2tib3g+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1lbWFpbFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY29sb3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRhYmxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiICpuZ0lmPVwicmVhZHlcIj5cclxuICAgIDxtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cclxuICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cclxuICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXHJcbiAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWNlbGw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sIG9mIGZpbGVkRGlzcGxheWVkQ29sdW1uc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgIFttYXRDb2x1bW5EZWZdPVwiY29sXCI+XHJcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbH19IDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbF19fSA8L21hdC1jZWxsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj48L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgY2xhc3M9J2xlZnQtYWxpZ24nICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiw5jCp8OZwobDmMKqw5jCrsOYwqfDmMKoXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxyXG4gICAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIiAoY2xpY2spPVwic2VsZWN0aW9uLnRvZ2dsZShyb3cpXCI+PC9tYXQtcm93PlxyXG5cclxuICAgIDwvbWF0LXRhYmxlPlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbjwhLS0gPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJzY2hlbWEubmFtZVwiIFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gIFxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5yZXF1aXJlZFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbjwvbWF0LWZvcm0tZmllbGQ+IC0tPlxyXG4gIFxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChzY2hlbWEubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoc2NoZW1hLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0cmVhZHk6IGJvb2xlYW47XHJcblx0ZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZmlsZWREaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHRkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PjtcclxuXHJcblx0c2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWEuZGF0YUVuZHBvaW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGF0YS5kaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmZpbGVkRGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZmlsZWREaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oZGF0YS5kYXRhU291cmNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cclxuXHRpc0FsbFNlbGVjdGVkKCkge1xyXG5cdFx0Y29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XHJcblx0XHR0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFt0aGlzLnNjaGVtYS5uYW1lXTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcclxuXHRcdHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcclxuXHR9XHJcblxyXG5cdC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXHJcblx0bWFzdGVyVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDogdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1udW1iZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtdGV4dFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGb3Jtc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0Rk9STVNfTElTVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RcIixcclxuXHRGT1JNU19MSVNUX1NUQVJUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVEFSVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1VDQ0VFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdEZPUk1TX0xJU1RfRkFJTEVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9GQUlMRURcIixcclxuXHRBRERfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBBRERfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9VUERBVEUgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9VUERBVEVcIixcclxuXHRHRVRfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBHRVRfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9GRVRDSEVEID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybXNMaXN0QWN0aW9ucyA9XHJcblx0fCBGb3Jtc0xpc3RBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEFkZEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEdldEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1kYXRlXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPCEtLSBcclxuXHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgW0BmaWxlZEFuaW1hdGlvbl09XCJtb2RlXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCIgWyhuZ0NsYXNzKV09XCJtb2RlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJfZGF0ZXBpY2tlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbE5hbWVcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJfZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbHRpcCBtZC0xOFwiICpuZ0lmPVwidG9vbHRpcFwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBcIj5oZWxwPC9tYXQtaWNvbj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1ib3hcIj4gXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX0gOlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICB7eyhEaXNwbGF5VmFsdWUkIHwgYXN5bmMgfCBwZXJzaWFuRGF0ZSl9fSBcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWZpbGVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gXHJcblxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IFtAZmlsZWRBbmltYXRpb25dPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiIFsobmdDbGFzcyldPVwibW9kZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2x0aXAgbWQtMThcIiAqbmdJZj1cInRvb2x0aXBcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtYm94XCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IDpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3soRGlzcGxheVZhbHVlJCB8IGFzeW5jIHwgcGVyc2lhbkRhdGUpfX0gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRWaWV3Q2hpbGQsXHJcblx0Vmlld0NvbnRhaW5lclJlZixcclxuXHRDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0Q29tcGlsZXIsXHJcblx0UmVmbGVjdGl2ZUluamVjdG9yLFxyXG5cdE5nTW9kdWxlLFxyXG5cdElucHV0LFxyXG5cdE91dHB1dCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcblx0T25DaGFuZ2VzLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRUeXBlLFxyXG5cdE9uRGVzdHJveVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1BcnJheSwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdEVtYWlsQ29tcG9uZW50LFxyXG5cdENvbG9yQ29tcG9uZW50LFxyXG5cdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFRleHRDb21wb25lbnQsXHJcblx0VGFibGVDb21wb25lbnRcclxufSBmcm9tIFwiLi4vZm9ybS1jb250cm9sc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEdldEZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmllbGQsIEZpZWxkQ29uZmlnLCBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxmb3JtICpuZ0lmPVwiZm9ybUdyb3VwQ3JlYXRlZCAmJiBjYXJkXCIgY2xhc3M9XCJuZ3MtZHluYW1pYy1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiYWNjZXB0ZWQoKVwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAge3soc2NoZW1hJCB8IGFzeW5jKT8ubmFtZX19XHJcbiAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICA8ZGl2ICAqbmdGb3I9XCJsZXQgZmllbGQgb2YgKHNjaGVtYSQgfCBhc3luYyk/LmZvcm0uZmllbGRzO1wiIFtmeEZsZXhdPVwiZmllbGQud2lkdGggKiAxMFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgZHluYW1pY0ZpZWxkICBbY29uZmlnXT1cImZpZWxkXCIgW2dyb3VwXT1cImZvcm1Hcm91cFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC5zaG93XCIgKGNsaWNrKT1cImNhbmNlbC5lbWl0KClcIiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwudGV4dH19PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZm9ybT5cclxuXHJcbjxmb3JtICpuZ0lmPVwiZm9ybUdyb3VwQ3JlYXRlZCAmJiAhY2FyZFwiIGNsYXNzPVwibmdzLWR5bmFtaWMtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFjY2VwdGVkKClcIj5cclxuICA8ZGl2PlxyXG4gICAgPGgzPlxyXG4gICAgICB7eyhzY2hlbWEkIHwgYXN5bmMpPy5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgPGRpdiAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIGR5bmFtaWNGaWVsZCAgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnNob3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnRleHR9fTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZm9ybT5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRAT3V0cHV0KCkgYWNjZXB0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBJbnB1dCgpIGxvY2FsO1xyXG5cdEBJbnB1dCgpIGNhcmQgPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpZChpZDogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXRoaXMubG9jYWwpIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKTtcclxuXHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHQuc2VsZWN0Rm9ybUJ5SWQoaWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2hlbWEgPT4gdGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHNjaGVtYShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Zm9ybUdyb3VwQ3JlYXRlZCA9IGZhbHNlO1xyXG5cdHNjaGVtYSQ6IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbXBpbGVyOiBDb21waWxlcixcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc2NoZW1hJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc2NoZW1hJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSkuc3Vic2NyaWJlKHNjaGVtYSA9PiB7XHJcblx0XHRcdGlmICghc2NoZW1hKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5jcmVhdGVGcm9tKHNjaGVtYS5mb3JtKSBhcyBGb3JtR3JvdXA7XHJcblx0XHRcdGlmICghc2NoZW1hLmZvcm0ubmFtZSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cENyZWF0ZWQgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdGdlbmVyYXRlKHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRnJvbShkYXRhOiBGaWVsZENvbmZpZywgcGFyZW50UGF0aCA9IFwiXCIpOiBBYnN0cmFjdENvbnRyb2wge1xyXG5cdFx0aWYgKGRhdGEudHlwZSA9PSBcImNvbnRyb2xcIikge1xyXG5cdFx0XHRpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdC8vIHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHR2YXIgZm9ybUdyb3VwUGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdmFsaWRhdG9ycyA9IFtdO1xyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IucmVxdWlyZWQgJiYgZGF0YS52YWxpZGF0b3IucmVxdWlyZWQuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGggJiYgZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aChkYXRhLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWUpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IuZW1haWwgJiYgZGF0YS52YWxpZGF0b3IuZW1haWwuYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMuZW1haWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBjdHIgPSBuZXcgRm9ybUNvbnRyb2woZGF0YS52YWx1ZSwgdmFsaWRhdG9ycyk7XHJcblx0XHRcdChjdHIgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hLmZvcm1Hcm91cFBhdGggPSBmb3JtR3JvdXBQYXRoO1xyXG5cdFx0XHRyZXR1cm4gY3RyO1xyXG5cdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdHZhciBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImdyb3VwXCI7XHJcblx0XHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woaXRlbS5uYW1lLCB0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1Hcm91cDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBmb3JtQXJyYXk6IEZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG5cdFx0XHRwYXJlbnRQYXRoID1cclxuXHRcdFx0XHRwYXJlbnRQYXRoID09IFwiXCIgPyAoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZSA6IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0ucGFyZW50VHlwZSA9IFwiYXJyYXlcIjtcclxuXHRcdFx0XHRpdGVtLm5hbWUgPSBpZHgudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRmb3JtQXJyYXkuY29udHJvbHMucHVzaCh0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1BcnJheTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFjY2VwdGVkKCkge1xyXG5cdFx0dGhpcy5hY2NlcHQuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG5cdGNhbmNlbGVkKCkge1xyXG5cdFx0dGhpcy5jYW5jZWwuZW1pdCh0aGlzLmZvcm1Hcm91cCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzOiB7IFt0eXBlOiBzdHJpbmddOiBUeXBlPEZpZWxkPiB9ID0ge1xyXG5cdGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcclxuXHR0ZXh0OiBUZXh0Q29tcG9uZW50LFxyXG5cdGRhdGU6IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdGZpbGU6IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdHRhYmxlOiBUYWJsZUNvbXBvbmVudCxcclxuXHRjb2xvcjogQ29sb3JDb21wb25lbnQsXHJcblx0ZW1haWw6IEVtYWlsQ29tcG9uZW50LFxyXG5cdHNlbGVjdDogU2VsZWN0Q29tcG9uZW50XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogXCJbZHluYW1pY0ZpZWxkXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBGaWVsZCwgT25DaGFuZ2VzLCBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWc7XHJcblxyXG5cdEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEZpZWxkPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cclxuXHJcblx0bmdPbkNoYW5nZXMoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGlmICghY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0aGlzLmNvbmZpZy5pbnB1dFR5cGV9KS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8RmllbGQ+KGNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0fVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEFjdGlvblR5cGVzLCBGb3Jtc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogRm9ybVNjaGVtYU1vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRm9ybXNMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURToge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCAqIGFzIGxpc3QgZnJvbSBcIi4uL2xpc3QvbGlzdC5yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3RhdGUge1xyXG5cdGxpc3Q6IGxpc3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtUmVkdWNlcnMgPSB7XHJcblx0bGlzdDogbGlzdC5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1haW5Db250YWluZXJTdGF0ZSB7XHJcblx0XCJmb3JtXCI6IEZvcm1TdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tZ3JvdXBcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhbm9IZWFkZXJcIj5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIW5vSGVhZGVyXCI+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS50aXRsZVwiIHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hKVwiPiBhZGRGb3JtR3JvdXAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYSlcIj4gYWRkRm9ybUFycmF5IDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYSlcIj5hZGRGb3JtQ29udHJvbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygc2NoZW1hLmZpZWxkcztsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgIDwhLS0gPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT4gLS0+XHJcbiAgICAgICAgPGFwcC1mb3JtLWNvbnRyb2wgKm5nU3dpdGNoQ2FzZT1cIidjb250cm9sJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIiAoZGVsZXRlKT1cImRlbGV0ZUZvcm1Hcm91cChpKVwiPjwvYXBwLWZvcm0tY29udHJvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRASW5wdXQoKSBub0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZEZvcm1Hcm91cChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgZ3JvdXAgPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHRcdGdyb3VwLmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChncm91cCk7XHJcblx0XHR0aGlzLnNjaGVtYS5pZCA9IHRoaXMuc2NoZW1hLmlkICsgMTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxuXHRkZWxldGVGb3JtR3JvdXAoaWR4OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuc2NoZW1hLmZpZWxkcy5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tYXJyYXlcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEpXCI+YWRkRm9ybUdyb3VwPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYSlcIj5hZGRGb3JtQXJyYXk8L2J1dHRvbj5cclxuICAgICAgPCEtLSA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYSlcIj5hZGRGb3JtQ29udHJvbDwvYnV0dG9uPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzY2hlbWEuZmllbGRzXCI+XHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICA8IS0tIDxhcHAtZm9ybS1jb250cm9sICpuZ1N3aXRjaENhc2U9XCInY29udHJvbCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKCRldmVudClcIj48L2FwcC1mb3JtLWNvbnRyb2w+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1BcnJheUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tY29udHJvbFwiLFxyXG5cdHRlbXBsYXRlOiBgICA8bWF0LWV4cGFuc2lvbi1wYW5lbD5cclxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgICAgPG1hdC1wYW5lbC10aXRsZT5cclxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiZGVsZXRlLmVtaXQoKVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIiBpY29uLWJ1dHRvblwiPmRlbGV0ZV9mb3JldmVyPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHt7c2NoZW1hLm5hbWV9fVxyXG4gICAgICA8L21hdC1wYW5lbC10aXRsZT5cclxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIFxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCIvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2NoZW1hLmlucHV0VHlwZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBUeXBlXCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInRhYmxlXCI+dGFibGU8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNlbGVjdFwiPnNlbGVjdDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQ8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm51bWJlclwiPm51bWJlcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiZW1haWxcIj5lbWFpbDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY29sb3JcIj5jb2xvcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicmFkaW9cIj5yYWRpbzwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5jaGVja2JveDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsdWVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiVmFsdWVcIi8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIFxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2NoZW1hLndpZHRoXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIndpZHRoXCI+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHdpZHRoXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPGRpdiAqbmdJZj1cInNjaGVtYS5pbnB1dFR5cGU9PSd0YWJsZSdcIiBbZm9ybUdyb3VwXT1cInRhYmxlT3B0aW9uc1wiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cImRhdGFFbmRwb2ludFwiIHBsYWNlaG9sZGVyPVwiZGF0YUVuZHBvaW50XCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiAqbmdJZj1cInNjaGVtYS5pbnB1dFR5cGU9PSdzZWxlY3QnXCI+XHJcbiAgICAgICAgW29wdGlvbnNdXHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiYWRkT3B0aW9uKClcIj4rPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaW5zZXJ0T3B0aW9ucygpXCI+aW5zZXJ0PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnMuY29udHJvbHM7aW5kZXggYXMgaVwiPlxyXG4gICAgICAgICAge3tpfX1cclxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJvcHRpb25zLmNvbnRyb2xzW2ldXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJrZXlcIiBwbGFjZWhvbGRlcj1cImtleVwiLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiLz5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiICBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IucmVxdWlyZWQuYWN0aXZlXCI+w5jCp8OYwqzDmMKow5jCp8OYwrHDm8KMPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlXCIgIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiICBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwuYWN0aXZlXCI+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2VcIiAgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiICBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLmFjdGl2ZVwiPsOYwq3DmMKvw5jCp8OZwoLDmcKEIMOYwqrDmMK5w5jCr8OYwqfDmMKvIMOawqnDmMKnw5jCscOYwqfDmsKpw5jCqsOYwrE8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlXCIgIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLnZhbHVlXCIgIHBsYWNlaG9sZGVyPVwiw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5rCqcOYwqfDmMKxw5jCp8OawqnDmMKqw5jCsVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHR3aWR0aCA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAgXTtcclxuXHRvcHRpb25zID0gbmV3IEZvcm1BcnJheShbXHJcblx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0a2V5OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dmFsdWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHR9KVxyXG5cdF0pO1xyXG5cdHRhYmxlT3B0aW9ucyA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0ZGF0YUVuZHBvaW50OiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHRpZiAoWyB0aGlzLnNjaGVtYS5uYW1lLCB0aGlzLnNjaGVtYS50aXRsZSwgdGhpcy5zY2hlbWEuaW5wdXRUeXBlIF0uc29tZShpdGVtID0+ICFpdGVtKSkgcmV0dXJuIHRydWU7XHJcblx0XHRpZiAodGhpcy5zY2hlbWEuaW5wdXRUeXBlID09IFwidGFibGVcIikge1xyXG5cdFx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy50YWJsZU9wdGlvbnMudmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLmlucHV0VHlwZSA9PSBcInNlbGVjdFwiKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudmFsdWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkT3B0aW9uKCkge1xyXG5cdFx0dGhpcy5vcHRpb25zLnB1c2goXHJcblx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdGtleTogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0dmFsdWU6IG5ldyBGb3JtQ29udHJvbCgpXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHRyZW1vdmVPcHRpb24oaSkge1xyXG5cdFx0dGhpcy5vcHRpb25zLmNvbnRyb2xzLnNwbGljZShpLCAxKTtcclxuXHR9XHJcblx0aW5zZXJ0T3B0aW9ucygpIHtcclxuXHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudmFsdWU7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRWRpdEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0RURJVF9GT1JNID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNXCIsXHJcblx0RURJVF9GT1JNX1NUQVJUID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NUQVJUXCIsXHJcblx0RURJVF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEVESVRfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRGb3JtQWN0aW9ucyA9IEVkaXRGb3JtQWN0aW9uIHwgRWRpdEZvcm1TdGFydEFjdGlvbiB8IEVkaXRGb3JtU3VjY2VlZEFjdGlvbiB8IEVkaXRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZEZvcm1BY3Rpb25UeXBlcyB7XHJcblx0QUREX0ZPUk0gPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1BST0ZJTEVcIixcclxuXHRBRERfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1RBUlRcIixcclxuXHRBRERfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVUNDRUVEXCIsXHJcblx0QUREX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEFkZEZvcm1BY3Rpb25zID0gQWRkRm9ybUFjdGlvbiB8IEFkZEZvcm1TdGFydEFjdGlvbiB8IEFkZEZvcm1TdWNjZWVkQWN0aW9uIHwgQWRkRm9ybUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2FkZC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybVNjaGVtYUFjdGlvbiwgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG5ncy1mb3JtLWFkZCBcclxuXHRcdFx0XHRcdFtzY2hlbWFdPVwic2NoZW1hXCIgXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIiBcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9YWRkKCRldmVudClcclxuXHRcdFx0XHQ+PC9uZ3MtZm9ybS1hZGQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0c2NoZW1hOiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+LCBwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnNjaGVtYSA9IG5ldyBGb3JtU2NoZW1hTW9kZWwoKTtcclxuXHRcdHRoaXMuc2NoZW1hLmluaXQoKTtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZEZvcm1TY2hlbWFBY3Rpb24odGhpcy5zY2hlbWEpKTtcclxuXHR9XHJcblx0YWRkKGZvcm06IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRm9ybUFjdGlvbihmb3JtKSk7XHJcblx0fVxyXG5cdHVwZGF0ZV9zY2hlbWEoZm9ybTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uKGZvcm0pKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vLi4vZWRpdC9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybS1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgR2V0Rm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZWRpdC1mb3JtXHJcblx0XHRcdFx0XHRbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiXHJcblx0XHRcdFx0XHRbc2NoZW1hXT1cInNjaGVtYVwiXHJcblx0XHRcdFx0XHQoY2hhbmdlcyk9XCJ1cGRhdGVfc2NoZW1hKCRldmVudClcIlxyXG5cdFx0XHRcdFx0KHN1Ym1pdGVkKT1cInVwZGF0ZSgkZXZlbnQpXCI+XHJcblx0XHRcdFx0PC9lZGl0LWZvcm0+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRmb3JtR3JvdXAgPSBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0c3VwZXIoc3RvcmUsIHNlcnZpY2UpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQubWFwKChwYXJhbXMpID0+IHBhcmFtc1tcIl9pZFwiXSlcclxuXHRcdFx0LnN1YnNjcmliZSgoaWQpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKSk7XHJcblxyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcCgocGFyYW1zKSA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGlkKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0Rm9ybUJ5SWQoaWQpKVxyXG5cdFx0XHQuZmlsdGVyKChkYXRhKSA9PiBkYXRhICE9IG51bGwpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1TY2hlbWEpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNjaGVtYSA9IGZvcm1TY2hlbWE7XHJcblx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShmb3JtU2NoZW1hKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZGF0YSkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRWRpdEZvcm1BY3Rpb24oZGF0YSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwsIEFkZEZvcm1BcGlNb2RlbCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1hZGRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cInNjaGVtYVwiPlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKBw5jCscOZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImZvcm0uZ2VuZXJhdGUoc2NoZW1hKVwiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcblxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmFjY2VwdFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOYwqfDm8KMw5vCjMOYwq88L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCqsOYwqfDm8KMw5vCjMOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmNhbmNlbFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgW2xvY2FsXT0ndHJ1ZScgW2lkXT1cInNjaGVtYS5faWRcIj48L25ncy1mb3JtLXZpZXc+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cCA9IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGVtaXQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHsgZm9ybTogdGhpcy5zY2hlbWEuZm9ybSB9KTtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y2hhbmdlT3JkZXIoJGV2ZW50KSB7fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FkZC9hZGQtZm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZWRpdC1mb3JtXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJzY2hlbWFcIj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIj5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkYW55KGZvcm0pLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogYW55O1xyXG5cdGVtaXQoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHRyZXR1cm4gdGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxmb3JtLWxpc3RcclxuXHRcdFx0XHRcdFtkYXRhXT1cImRhdGEkXCI+XHJcblx0XHRcdFx0PC9mb3JtLWxpc3Q+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRm9ybXNMaXN0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImZvcm0tbGlzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0V3JhcCBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiID5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRzLWl0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGF0YSQgfCBhc3luYylcIiBmeEZsZXg9XCI1MVwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydlZGl0JyAsICBpdGVtLl9pZF1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiZWRpdCBmb3JtXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHt7aXRlbS5uYW1lfX1cclxuICAgICAgPC9oMz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtTGlzdENvbXBvbmVudCB7XHJcblx0QElucHV0KFwiZGF0YVwiKSBkYXRhJDogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWxbXT47XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgTWFpbkNvbnRhaW5lclJlZHVjZXIgZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db250YWluZXJDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyUmVkdWNlci5NYWluQ29udGFpbmVyU3RhdGU+KSB7fVxyXG59XHJcbiIsImltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BY3Rpb25UeXBlcywgQWRkRm9ybVN0YXJ0QWN0aW9uLCBBZGRGb3JtU3VjY2VlZEFjdGlvbiwgQWRkRm9ybUZhaWxlZEFjdGlvbiB9IGZyb20gXCIuL2FkZC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEFkZEZvcm1TdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRBZGRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS5hZGQoZGF0YSkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBBZGRGb3JtU3VjY2VlZEFjdGlvbigpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBPYnNlcnZhYmxlLm9mKG5ldyBBZGRGb3JtRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEZvcm1zTGlzdEFjdGlvbixcclxuXHRGb3Jtc0xpc3RBY3Rpb25UeXBlcyxcclxuXHRGb3Jtc0xpc3RBY3Rpb25zLFxyXG5cdEZvcm1zTGlzdEZhaWxlZEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdGFydEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uLFxyXG5cdEZvcm1TY2hlbWFGZWNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1QpLm1hcChkYXRhID0+IG5ldyBGb3Jtc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkdFVF9GT1JNX1NDSEVNQSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHRcdFx0bWFwKGZvcm1TY2hlbWEgPT4gbmV3IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24oZm9ybVNjaGVtYSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRfZm9ybXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEZvcm1zTGlzdEZhaWxlZEFjdGlvbigpKSlcclxuXHRcdCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0RWRpdEZvcm1BY3Rpb25UeXBlcyxcclxuXHRFZGl0Rm9ybVN0YXJ0QWN0aW9uLFxyXG5cdEVkaXRGb3JtU3VjY2VlZEFjdGlvbixcclxuXHRFZGl0Rm9ybUZhaWxlZEFjdGlvblxyXG59IGZyb20gXCIuL2VkaXQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vbGlzdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zPGFueT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk0pXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGRhdGEgPT4gbmV3IEVkaXRGb3JtU3RhcnRBY3Rpb24oZGF0YSkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NUQVJUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLnVwZGF0ZShkYXRhKSksXHJcblx0XHRcdG1hcChmb3JtU2NoZW1hID0+IG5ldyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24oZm9ybVNjaGVtYSkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEVkaXRGb3JtRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0VXBkYXRlRm9ybXNMaXN0U3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVUNDRUVEKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChmb3JtU2NoZW1hID0+IG5ldyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uKGZvcm1TY2hlbWEpKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLmNvbXBvbmVudC9tYWluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS1jb250YWluZXIvZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS1jb250YWluZXIvYWRkLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvZm9ybS1saXN0LWNvbnRhaW5lci9mb3JtLWxpc3QuY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogXCJmb3JtXCIsXHJcblx0XHRjb21wb25lbnQ6IE1haW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJhZGRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFkZEZvcm1Db250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6IFwiZWRpdC86X2lkXCIsXHJcblx0XHRcdFx0Y29tcG9uZW50OiBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGluZ01vZHVsZTogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpO1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmVEZXZ0b29sc01vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZS1kZXZ0b29sc1wiO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlLCBtZXJnZUVmZmVjdHMgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybU1vZHVsZUNvbmZpZywgTU9EVUxFX0NPTkZJR19UT0tFTiwgTU9EVUxFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSBcIi4vZm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgRm9ybVJlZHVjZXJzIH0gZnJvbSBcIi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cENvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9mb3JtLWdyb3VwL2Zvcm0tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1BcnJheUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9mb3JtLWFycmF5L2Zvcm0tYXJyYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tY29udHJvbC9mb3JtLWNvbnRyb2wuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1WaWV3Q29tcG9uZW50LCBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tIFwiLi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvdGV4dC90ZXh0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW1haWxDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvZW1haWwvZW1haWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2NvbG9yL2NvbG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvbnVtYmVyL251bWJlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvdGFibGUvdGFibGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvZm9ybS1saXN0LWNvbnRhaW5lci9mb3JtLWxpc3QuY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS1jb250YWluZXIvYWRkLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50L21haW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtL2FkZC1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtRWZmZWN0cyB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtRWZmZWN0cyB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0RWZmZWN0cyB9IGZyb20gXCIuL2xpc3QvbGlzdC5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9mb3JtLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXREYXRlcGlja2VyTW9kdWxlLFxyXG5cdFx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdFx0TWF0Q2FyZE1vZHVsZSxcclxuXHRcdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdFx0TWF0VGFibGVNb2R1bGUsXHJcblx0XHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0XHRNYXRJbnB1dE1vZHVsZSxcclxuXHRcdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRcdE1hdFRhYnNNb2R1bGUsXHJcblx0XHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdFx0RmxleExheW91dE1vZHVsZSxcclxuXHRcdE1hdFJhZGlvTW9kdWxlLFxyXG5cdFx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0RWRpdEZvcm1Db21wb25lbnQsXHJcblx0XHRGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEZvcm1MaXN0Q29tcG9uZW50LFxyXG5cdFx0QWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdE1haW5Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRBZGRGb3JtQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUdyb3VwQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUFycmF5Q29tcG9uZW50LFxyXG5cdFx0Rm9ybUNvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGb3JtVmlld0NvbXBvbmVudCxcclxuXHRcdER5bmFtaWNGaWVsZERpcmVjdGl2ZSxcclxuXHRcdFNlbGVjdENvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0RW1haWxDb21wb25lbnQsXHJcblx0XHRDb2xvckNvbXBvbmVudCxcclxuXHRcdERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0RmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRUZXh0Q29tcG9uZW50LFxyXG5cdFx0TnVtYmVyQ29tcG9uZW50LFxyXG5cdFx0VGFibGVDb21wb25lbnRcclxuXHRcdC8vIE5nc0Zvcm1TZWxlY3RvckNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRTZWxlY3RDb21wb25lbnQsXHJcblx0XHRDaGVja2JveENvbXBvbmVudCxcclxuXHRcdEVtYWlsQ29tcG9uZW50LFxyXG5cdFx0Q29sb3JDb21wb25lbnQsXHJcblx0XHREYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0VGV4dENvbXBvbmVudCxcclxuXHRcdE51bWJlckNvbXBvbmVudCxcclxuXHRcdFRhYmxlQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50IF1cclxuXHQvLyBleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50LCBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRm9ybU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRm9ybU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmb3JtXCIsIEZvcm1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBBZGRGb3JtRWZmZWN0cywgRWRpdEZvcm1FZmZlY3RzLCBGb3Jtc0xpc3RFZmZlY3RzIF0pLFxyXG5cdFx0Um91dGluZ01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogWyBOZ3NGb3JtTW9kdWxlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJvb3ROZ3NGb3JtTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJGb3JtR3JvdXAiLCJGb3JtQ29udHJvbCIsIlZhbGlkYXRvcnMiLCJBZGRGb3JtQXBpTW9kZWwiLCJFZGl0Rm9ybUFwaU1vZGVsIiwiRm9ybUxpc3RBcGlNb2RlbCIsIkluamVjdGlvblRva2VuIiwiQmVoYXZpb3JTdWJqZWN0IiwiZ2V0Rm9ybU1vZHVsZUNvbmZpZyIsIkluamVjdGFibGUiLCJJbmplY3QiLCJTdG9yZSIsImNvbmZpZyIsInN0cmluZ1RlbXBsYXRlIiwiZmlsdGVyIiwiZm9ybXMiLCJtYXAiLCJGb3JtU2NoZW1hTW9kZWwiLCJIdHRwQ2xpZW50IiwiQ29tcG9uZW50IiwiSW5wdXQiLCJTZWxlY3Rpb25Nb2RlbCIsIk1hdFRhYmxlRGF0YVNvdXJjZSIsIlN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJ0YWtlVW50aWwiLCJGb3JtQXJyYXkiLCJDb21waWxlciIsIkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciIsIk91dHB1dCIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJsaXN0LnJlZHVjZXIiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkFjdGl2YXRlZFJvdXRlIiwicm91dGVyIiwic3dpdGNoTWFwIiwiY2F0Y2hFcnJvciIsIk9ic2VydmFibGUiLCJBY3Rpb25zIiwiUm91dGVyIiwiRWZmZWN0IiwiUm91dGVyTW9kdWxlIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsSUFHQSxXQUFpQixlQUFlO1FBQy9CLElBQUE7WUFLQyxpQkFBWSxTQUF5QztnQkFBekMsMEJBQUE7b0JBQUEsOEJBQVksRUFBNkIsQ0FBQTs7Z0JBQXJELGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7YUFDcEU7Ozs7WUFFRCxnQ0FBYzs7O2dCQUFkO29CQUNDLE9BQU87d0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ25CLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlBLGVBQVMsQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDbkQsSUFBSSxFQUFFLElBQUlELGlCQUFXLENBQUMsRUFBRSxDQUFDO3dCQUN6QixNQUFNLEVBQUUsSUFBSUQsZUFBUyxDQUFDOzRCQUNyQixNQUFNLEVBQUUsSUFBSUEsZUFBUyxDQUFDO2dDQUNyQixJQUFJLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQzVCLElBQUksRUFBRSxJQUFJQSxpQkFBVyxDQUFDLEtBQUssQ0FBQzs2QkFDNUIsQ0FBQzs0QkFDRixNQUFNLEVBQUUsSUFBSUQsZUFBUyxDQUFDO2dDQUNyQixJQUFJLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQzVCLElBQUksRUFBRSxJQUFJQSxpQkFBVyxDQUFDLFFBQVEsQ0FBQzs2QkFDL0IsQ0FBQzt5QkFDRixDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDSDs7O2VBQUE7MEJBdkNIO1lBd0NFLENBQUE7UUFsQ1ksdUJBQU87UUFvQ3BCLElBQUE7WUFFQzthQUFnQjsyQkE1Q2xCO1lBNkNFLENBQUE7UUFIWSx3QkFBUTtPQXJDTEUsdUJBQWUsS0FBZkEsdUJBQWUsUUF5Qy9COzs7Ozs7QUM1Q0QsSUFHQSxXQUFpQixnQkFBZ0I7UUFDaEMsSUFBQTtZQUtDLGlCQUFZLFNBQTBDO2dCQUExQywwQkFBQTtvQkFBQSw4QkFBWSxFQUE4QixDQUFBOztnQkFBdEQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTzt3QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ25CLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlILGVBQVMsQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNsRCxJQUFJLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxFQUFFLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxJQUFJRCxlQUFTLENBQUM7NEJBQ3JCLE1BQU0sRUFBRSxJQUFJQSxlQUFTLENBQUM7Z0NBQ3JCLElBQUksRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEtBQUssQ0FBQztnQ0FDNUIsSUFBSSxFQUFFLElBQUlBLGlCQUFXLENBQUMsS0FBSyxDQUFDOzZCQUM1QixDQUFDOzRCQUNGLE1BQU0sRUFBRSxJQUFJRCxlQUFTLENBQUM7Z0NBQ3JCLElBQUksRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEtBQUssQ0FBQztnQ0FDNUIsSUFBSSxFQUFFLElBQUlBLGlCQUFXLENBQUMsUUFBUSxDQUFDOzZCQUMvQixDQUFDO3lCQUNGLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkF2Q0g7WUF3Q0UsQ0FBQTtRQWxDWSx3QkFBTztRQW9DcEIsSUFBQTtZQUVDO2FBQWdCOzJCQTVDbEI7WUE2Q0UsQ0FBQTtRQUhZLHlCQUFRO09BckNMRyx3QkFBZ0IsS0FBaEJBLHdCQUFnQixRQXlDaEM7Ozs7OztBQzVDRCxJQUdBLFdBQWlCLGdCQUFnQjtRQUNoQyxJQUFBO1lBR0MsaUJBQVksU0FBMEM7Z0JBQTFDLDBCQUFBO29CQUFBLDhCQUFZLEVBQThCLENBQUE7O2dCQUF0RCxpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3RFOzs7O1lBRUQsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPO3dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3ZCLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlKLGVBQVMsQ0FBQzt3QkFDcEIsSUFBSSxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2xELFFBQVEsRUFBRSxJQUFJRixlQUFTLENBQUMsRUFBRSxDQUFDO3FCQUMzQixDQUFDLENBQUM7aUJBQ0g7OztlQUFBOzBCQXhCSDtZQXlCRSxDQUFBO1FBbkJZLHdCQUFPO1FBcUJwQixJQUFBO1lBRUM7YUFBZ0I7MkJBN0JsQjtZQThCRSxDQUFBO1FBSFkseUJBQVE7T0F0QkxLLHdCQUFnQixLQUFoQkEsd0JBQWdCLFFBMEJoQzs7Ozs7O0lDMUJELElBQUE7UUFLQztZQUNDLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLHFCQUFxQjthQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsS0FBSyxFQUFFLENBQUM7YUFDUixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsNkJBQTZCO2FBQ3RDLENBQUM7U0FDRjt3QkF4QkY7UUF5QkMsQ0FBQTs7Ozs7O0FDekJELFFBRUE7UUFxQkMscUJBQVksSUFBbUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxJQUFJLElBQUksU0FBUztnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNqQzswQkE1QkY7UUE2QkM7Ozs7OztBQzdCRCxRQUVBO1FBZ0JDOzBCQVhTO2dCQUNSLE1BQU0sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFDRCxNQUFNLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsSUFBSSxFQUFFLFFBQVE7aUJBQ2Q7YUFDRDtZQUdBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7Ozs7UUFDRCw4QkFBSTs7O1lBQUo7Z0JBQ0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDM0M7OEJBdkJGO1FBd0JDOzs7Ozs7Ozs7OztBQ3hCRCxJQWVPLHFCQUFNLHFCQUFxQixHQUFxQjtRQUN0RCxHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsS0FBSztZQUNqQixlQUFlLEVBQUUsNkJBQTZCO1NBQzlDO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNkO0tBQ0QsQ0FBQztBQUNGLHlCQUFhLG1CQUFtQixHQUFHLElBQUlDLGlCQUFjLENBQW1CLGtCQUFrQixDQUFDOzs7Ozs7QUM1QjNGO1FBb0JDLGtDQUF5QyxVQUFVLEVBQVUsS0FBZ0M7WUFBN0YsaUJBUUM7WUFSNEQsVUFBSyxHQUFMLEtBQUssQ0FBMkI7MkJBRm5GLElBQUlDLG9CQUFlLENBQUMscUJBQXFCLENBQUM7WUFHbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUNDLDBCQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsVUFBVTtnQkFDMUQsSUFBSSxDQUFDLFVBQVU7b0JBQUUsT0FBTztnQkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDLENBQUMsQ0FBQztTQUNIO1FBYkQsc0JBQUksNENBQU07OztnQkFBVjtnQkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDcEI7OztXQUFBOztvQkFQREMsYUFBVSxTQUFDO3dCQUNYLFVBQVUsRUFBRSxNQUFNO3FCQUNsQjs7Ozs7d0RBUWFDLFNBQU0sU0FBQyxtQkFBbUI7d0JBbEIvQkMsUUFBSzs7Ozt1Q0FGZDs7Ozs7OztBQ0FBO1FBa0JDLHFCQUNTLE1BQ0EsT0FDQTtZQUZBLFNBQUksR0FBSixJQUFJO1lBQ0osVUFBSyxHQUFMLEtBQUs7WUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1NBQ3pCOzs7OztRQUVKLHlCQUFHOzs7O1lBQUgsVUFBSSxJQUE2QjtnQkFBakMsaUJBT0M7Z0JBTkEscUJBQU0sS0FBSyxHQUFHLElBQUlSLHVCQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO3FCQUN0QyxNQUFNLENBQUMsVUFBQVMsU0FBTSxJQUFJLE9BQUFBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsR0FBQSxDQUFDO3FCQUNoRCxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNQLFNBQVMsQ0FBQyxVQUFBQSxTQUFNLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0EsU0FBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUEsQ0FBQztxQkFDckYsR0FBRyxDQUFDLFVBQUMsUUFBa0MsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDO2FBQy9EOzs7OztRQUNELHlCQUFHOzs7O1lBQUgsVUFBSSxHQUFXO2dCQUFmLGlCQU1DO2dCQUxBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87cUJBQ3RDLE1BQU0sQ0FBQyxVQUFBQSxTQUFNLElBQUksT0FBQUEsU0FBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxHQUFBLENBQUM7cUJBQ2hELElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ1AsU0FBUyxDQUFDLFVBQUFBLFNBQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDQyxxQkFBYyxDQUFDRCxTQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUM7cUJBQ3JGLEdBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQzthQUNoRTs7OztRQUNELDZCQUFPOzs7WUFBUDtnQkFBQSxpQkFLQztnQkFKQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO3FCQUN0QyxNQUFNLENBQUMsVUFBQUEsU0FBTSxJQUFJLE9BQUFBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsR0FBQSxDQUFDO3FCQUNoRCxTQUFTLENBQUMsVUFBQUEsU0FBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUEsQ0FBQztxQkFDNUQsR0FBRyxDQUFDLFVBQUMsUUFBbUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDO2FBQ2hFOzs7OztRQUNELDRCQUFNOzs7O1lBQU4sVUFBTyxJQUE4QjtnQkFBckMsaUJBT0M7Z0JBTkEscUJBQU0sS0FBSyxHQUFHLElBQUlSLHdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTztxQkFDdEMsTUFBTSxDQUFDLFVBQUFRLFNBQU0sSUFBSSxPQUFBQSxTQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxFQUFFLEdBQUEsQ0FBQztxQkFDakQsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDUCxTQUFTLENBQUMsVUFBQUEsU0FBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFBLENBQUM7cUJBQ3JGLEdBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQzthQUNoRTs7Ozs7UUFDRCw0QkFBTTs7OztZQUFOLFVBQU8sR0FBVztnQkFBbEIsaUJBSUM7Z0JBSEEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTztxQkFDdEMsTUFBTSxDQUFDLFVBQUFBLFNBQU0sSUFBSSxPQUFBQSxTQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxFQUFFLEdBQUEsQ0FBQztxQkFDbkQsU0FBUyxDQUFDLFVBQUFBLFNBQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDQSxTQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNsRTs7Ozs7UUFDRCxvQ0FBYzs7OztZQUFkLFVBQWUsR0FBVztnQkFDekIscUJBQU0sT0FBTyxHQUFHLElBQUlMLCtCQUFlLENBQWtCLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsS0FBSztxQkFDUixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQztxQkFDckMsSUFBSSxDQUFDTyxnQkFBTSxDQUFDLFVBQUFDLFFBQUssSUFBSSxPQUFBQSxRQUFLLElBQUksSUFBSSxHQUFBLENBQUMsRUFBRUMsYUFBRyxDQUFDLFVBQUFELFFBQUssSUFBSSxPQUFBQSxRQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUEsQ0FBQyxHQUFBLENBQUMsQ0FBQztxQkFDdkYsU0FBUyxDQUFDLFVBQUFFLGtCQUFlLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDQSxrQkFBZSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2dCQUM5RCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUM5Qjs7b0JBbkREUixhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7Ozt3QkFmUVMsYUFBVTt3QkFFVlAsUUFBSzt3QkFPTCx3QkFBd0I7Ozs7MEJBVmpDOzs7Ozs7O0FDQUE7UUFrQkM7U0FBZ0I7O29CQWRoQlEsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSxpU0FNSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7OEJBZEQ7Ozs7Ozs7Ozs7OztBQ0FBO1FBa0JDO1NBQWdCOztvQkFiaEJBLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxRQUFRLEVBQUUsMElBSUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7O2dDQWJEOzs7Ozs7Ozs7Ozs7QUNBQTtRQWtCQztTQUFnQjs7OztRQUVoQixpQ0FBUTs7O1lBQVIsZUFBYTs7b0JBZmJBLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUseU1BSUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzZCQWJEOzs7Ozs7Ozs7Ozs7QUNBQTtRQW9CQztTQUFnQjs7OztRQUVoQixpQ0FBUTs7O1lBQVIsZUFBYTs7b0JBakJiQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLHdNQUlKO3dCQUNOLE1BQU0sRUFBRSxDQUFDLGlEQUFpRCxDQUFDO3FCQUMzRDs7Ozs7MkJBS0NDLFFBQUs7NkJBQ0xBLFFBQUs7OzZCQW5CUDs7Ozs7Ozs7Ozs7O0FDQUE7UUFpRkMsd0JBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7NkJBRHhCLElBQUlDLDBCQUFjLENBQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUU1QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNuQjs7OztRQUNELGlDQUFROzs7WUFBUjtnQkFBQSxpQkFPQztnQkFOQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVM7b0JBQzNELEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUM5QyxLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO29CQUN4RCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUlDLDJCQUFrQixDQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0QsQ0FBQyxDQUFDO2FBQ0g7Ozs7OztRQUdELHNDQUFhOzs7O1lBQWI7Z0JBQ0MscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUNuQixHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTt3QkFDMUMsQ0FBQztnQkFDSCxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7O2FBQy9COzs7Ozs7UUFHRCxxQ0FBWTs7OztZQUFaO2dCQUFBLGlCQUVDO2dCQURBLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNoSDs7b0JBbEdESCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDA0RUF5REU7d0JBQ1osTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7Ozt3QkFqRVFELGFBQVU7Ozs7MkJBcUVqQkUsUUFBSzs2QkFDTEEsUUFBSzs7NkJBMUVQOzs7Ozs7Ozs7Ozs7QUNBQTtRQWlCQztTQUFnQjs7OztRQUVoQixrQ0FBUTs7O1lBQVIsZUFBYTs7b0JBZGJELFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUseUJBQXlCO3dCQUNuQyxRQUFRLEVBQUUsb05BSUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzsyQkFFQ0MsUUFBSzs2QkFDTEEsUUFBSzs7OEJBaEJQOzs7Ozs7Ozs7Ozs7QUNBQTtRQStCQztTQUFnQjs7b0JBMUJoQkQsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLFFBQVEsRUFBRSxtdkJBaUJPO3dCQUNqQixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7NEJBMUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0tjLHlCQUF5QjswQkFDbkIsK0JBQStCOzRCQUM3QixpQ0FBaUM7MkJBQ2xDLGdDQUFnQzt5QkFDbEMsOEJBQThCOzRCQUMzQixpQ0FBaUM7eUJBQ3BDLDhCQUE4Qjs2QkFDMUIsa0NBQWtDOztJQUd6RCxJQUFBOzt3QkFDaUIsb0JBQW9CLENBQUMsVUFBVTs7OEJBaEJoRDtRQWlCQyxDQUFBO0FBRkQsSUFHQSxJQUFBOzt3QkFDaUIsb0JBQW9CLENBQUMsZ0JBQWdCOzttQ0FuQnREO1FBb0JDLENBQUE7QUFGRCxJQUdBLElBQUE7UUFFQyxnQ0FBbUIsT0FBMEI7WUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7d0JBRDdCLG9CQUFvQixDQUFDLGtCQUFrQjtTQUNOO3FDQXZCbEQ7UUF3QkMsQ0FBQTtBQUhELElBSUEsSUFBQTs7d0JBQ2lCLG9CQUFvQixDQUFDLGlCQUFpQjs7b0NBMUJ2RDtRQTJCQyxDQUFBO0FBRkQsSUFHQSxJQUFBO1FBRUMsZ0NBQW1CLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO3dCQUQzQixvQkFBb0IsQ0FBQyxrQkFBa0I7U0FDUjtxQ0E5QmhEO1FBK0JDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG9CQUFvQixDQUFDLGVBQWU7U0FDTDtrQ0FsQ2hEO1FBbUNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7d0JBRGxCLG9CQUFvQixDQUFDLGVBQWU7U0FDZDtrQ0F0Q3ZDO1FBdUNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyxnQ0FBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG9CQUFvQixDQUFDLG1CQUFtQjtTQUNUO3FDQTFDaEQ7UUEyQ0MsQ0FBQTs7Ozs7O0FDM0NEO1FBMERDO1NBQWdCOztvQkFyRGhCQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLHE0REE0Q0E7d0JBQ1YsTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzRDQXJERDs7Ozs7OztBQ0FBO1FBd0RDO1NBQWdCOztvQkFuRGhCQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLDZ0REEwQ0E7d0JBQ1YsTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzRDQW5ERDs7Ozs7OztBQ0FBO1FBb0dDLDJCQUNTLFNBQ0EsVUFDQSxVQUNBO1lBSlQsaUJBYUM7WUFaUSxZQUFPLEdBQVAsT0FBTztZQUNQLGFBQVEsR0FBUixRQUFRO1lBQ1IsYUFBUSxHQUFSLFFBQVE7WUFDUixVQUFLLEdBQUwsS0FBSzsrQkExQkEsSUFBSUksWUFBTyxFQUFROzBCQUNkLElBQUlDLGVBQVksRUFBYTswQkFDN0IsSUFBSUEsZUFBWSxFQUFhO3dCQUVoQyxLQUFLO29DQWVGLEtBQUs7WUFTdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJakIsK0JBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQ2tCLG1CQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDOUQsSUFBSSxDQUFDLE1BQU07b0JBQUUsT0FBTztnQkFDcEIsS0FBSSxDQUFDLFNBQVMscUJBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFjLENBQUEsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtvQkFBRSxPQUFPO2dCQUM5QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQzdCLENBQUMsQ0FBQztTQUNIO1FBOUJELHNCQUNJLGlDQUFFOzs7O2dCQUROLFVBQ08sRUFBVTtnQkFEakIsaUJBT0M7Z0JBTEEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLE9BQU87cUJBQ1YsY0FBYyxDQUFDLEVBQUUsQ0FBQztxQkFDbEIsSUFBSSxDQUFDQSxtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDakMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ2pEOzs7V0FBQTtRQUNELHNCQUNJLHFDQUFNOzs7O2dCQURWLFVBQ1csTUFBdUI7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCOzs7V0FBQTs7OztRQW9CRCx1Q0FBVzs7O1lBQVg7Z0JBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM1Qjs7Ozs7UUFDRCxvQ0FBUTs7OztZQUFSLFVBQVMsTUFBdUI7Z0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCOzs7Ozs7UUFFRCxzQ0FBVTs7Ozs7WUFBVixVQUFXLElBQWlCLEVBQUUsVUFBZTtnQkFBN0MsaUJBcURDO2dCQXJENkIsMkJBQUE7b0JBQUEsZUFBZTs7Z0JBQzVDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUU7b0JBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUUsQ0FFL0I7eUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDdEMscUJBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQzt3QkFDL0IsVUFBVSxHQUFNLFVBQVUsa0JBQWEsR0FBQyxJQUFtQixJQUFFLElBQU0sQ0FBQztxQkFDcEU7b0JBQ0QscUJBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7d0JBQzlELFVBQVUsQ0FBQyxJQUFJLENBQUN2QixnQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTt3QkFDaEUsVUFBVSxDQUFDLElBQUksQ0FBQ0EsZ0JBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDdEU7b0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUNBLGdCQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2xDO29CQUNELHFCQUFJLEdBQUcsR0FBRyxJQUFJRCxpQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ2xELEVBQUMsR0FBVSxHQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzNCLEVBQUMsR0FBVSxHQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29CQUN0QyxFQUFDLEdBQVUsR0FBRSxNQUFNLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztvQkFDbEQsT0FBTyxHQUFHLENBQUM7aUJBQ1g7cUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBRTtvQkFDaEMscUJBQUksU0FBUyxHQUFHLElBQUlELGVBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTt3QkFDakMsVUFBVSxHQUFHLEVBQUMsSUFBbUIsR0FBRSxJQUFJLENBQUM7cUJBQ3hDO3lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUU7d0JBQ3RDLFVBQVUsR0FBTSxVQUFVLGtCQUFhLEdBQUMsSUFBbUIsSUFBRSxJQUFJLE1BQUcsQ0FBQztxQkFDckU7eUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDdEMsVUFBVSxHQUFNLFVBQVUsa0JBQWEsR0FBQyxJQUFtQixJQUFFLElBQU0sQ0FBQztxQkFDcEU7b0JBRUQsRUFBQyxTQUFnQixHQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEVBQUMsU0FBZ0IsR0FBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO3dCQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzt3QkFDMUIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ25FLENBQUMsQ0FBQztvQkFDSCxPQUFPLFNBQVMsQ0FBQztpQkFDakI7cUJBQU07b0JBQ04scUJBQUksU0FBUyxHQUFjLElBQUkwQixlQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLFVBQVU7d0JBQ1QsVUFBVSxJQUFJLEVBQUUsR0FBRyxFQUFDLElBQW1CLEdBQUUsSUFBSSxHQUFNLFVBQVUsa0JBQWEsR0FBQyxJQUFtQixJQUFFLElBQU0sQ0FBQztvQkFDeEcsRUFBQyxTQUFnQixHQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2pDLEVBQUMsU0FBZ0IsR0FBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRzt3QkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7d0JBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUMzQixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUMzRCxDQUFDLENBQUM7b0JBQ0gsT0FBTyxTQUFTLENBQUM7aUJBQ2pCO2FBQ0Q7Ozs7UUFFRCxvQ0FBUTs7O1lBQVI7Z0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2pDOzs7O1FBQ0Qsb0NBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQzs7b0JBOUlEUCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx5eERBZ0NIO3dCQUNQLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDWjs7Ozs7d0JBM0NRLFdBQVc7d0JBM0JuQlEsV0FBUTt3QkFEUkMsMkJBQXdCO3dCQWtCaEJqQixRQUFLOzs7OzZCQXdEWmtCLFNBQU07NkJBQ05BLFNBQU07NEJBQ05ULFFBQUs7MkJBQ0xBLFFBQUs7eUJBQ0xBLFFBQUs7NkJBUUxBLFFBQUs7O2dDQTNGUDs7SUF5TEEscUJBQU0sVUFBVSxHQUFvQztRQUNuRCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLElBQUksRUFBRSxhQUFhO1FBQ25CLElBQUksRUFBRSw2QkFBNkI7UUFDbkMsSUFBSSxFQUFFLDZCQUE2QjtRQUNuQyxLQUFLLEVBQUUsY0FBYztRQUNyQixLQUFLLEVBQUUsY0FBYztRQUNyQixLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLEVBQUUsZUFBZTtLQUN2QixDQUFDOztRQVlELCtCQUFvQixRQUFrQyxFQUFVLFNBQTJCO1lBQXZFLGFBQVEsR0FBUixRQUFRLENBQTBCO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7U0FBSTs7OztRQUUvRiwyQ0FBVzs7O1lBQVg7Z0JBQ0MsU0FBUztnQkFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0M7YUFDRDs7OztRQUVELHdDQUFROzs7WUFBUjtnQkFDQyxTQUFTO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDdkMscUJBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxRCxNQUFNLElBQUksS0FBSyxDQUNkLHdDQUFzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsbUNBQ3hDLGNBQWdCLENBQ25DLENBQUM7aUJBQ0Y7Z0JBQ0QscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQVEsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzNDOztvQkFqQ0RVLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3FCQUMxQjs7Ozs7d0JBak1BRiwyQkFBd0I7d0JBRHhCRyxtQkFBZ0I7Ozs7NkJBb01mWCxRQUFLOzRCQUVMQSxRQUFLOztvQ0ExTVA7OztJQ0FBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7U0FDcEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFL0UsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0FBRUQsSUFBTyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDO1FBQ3RELEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFBO0FBRUQsd0JBVTJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7O1lBQzFILEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBRUQsd0JBSTJCLFdBQVcsRUFBRSxhQUFhO1FBQ2pELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUUsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuSSxDQUFDOzs7Ozs7SUNqRE0scUJBQU0sWUFBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxFQUFFO0tBQ1IsQ0FBQzs7Ozs7O0FBQ0YscUJBQXdCLEtBQW9CLEVBQUUsTUFBd0I7UUFBOUMsc0JBQUE7WUFBQSxvQkFBb0I7O1FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDbEIsS0FBSyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsT0FBTyxJQUNkO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO2dCQUMzQyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7YUFDRjtZQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzdDLG9CQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFDaEI7YUFDRjtZQUNELEtBQUssb0JBQW9CLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzVDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUNmO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFO2dCQUM3QyxxQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakMscUJBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7Z0JBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckU7cUJBQU07b0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFCO2dCQUNELG9CQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGVBQWUsRUFBRTtnQkFDMUMscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLElBQUksSUFDVDthQUNGO1lBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDOUMscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pDLHFCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLElBQUksSUFDVDthQUNGO1lBRUQsU0FBUztnQkFDUixPQUFPLEtBQUssQ0FBQzthQUNiO1NBQ0Q7S0FDRDs7Ozs7O0FDbkZELHlCQU1hLFlBQVksR0FBRztRQUMzQixJQUFJLEVBQUVZLE9BQVk7S0FDbEI7Ozs7OztBQ1JEO1FBc0NDOzRCQUg2QixLQUFLOzJCQUNkLElBQUlSLGVBQVksRUFBRTswQkFDbkIsSUFBSUEsZUFBWSxFQUFFO1NBQ3JCOzs7O1FBRWhCLG9DQUFPOzs7WUFBUDtnQkFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCOzs7OztRQUVELHlDQUFZOzs7O1lBQVosVUFBYSxJQUFpQjtnQkFDN0IscUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDYjs7Ozs7UUFDRCx5Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7Z0JBQzdCLHFCQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNiOzs7OztRQUNELDJDQUFjOzs7O1lBQWQsVUFBZSxJQUFpQjtnQkFDL0IscUJBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjs7Ozs7UUFDRCw0Q0FBZTs7OztZQUFmLFVBQWdCLEdBQVc7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEM7O29CQTdEREwsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSx5dENBMEJDO3FCQUNYOzs7Ozs2QkFFQ0MsUUFBSzsrQkFDTEEsUUFBSzs4QkFDTFMsU0FBTTs2QkFDTkEsU0FBTTs7aUNBckNSOzs7Ozs7O0FDQUE7UUErQkM7MkJBRG9CLElBQUlMLGVBQVksRUFBRTtTQUN0Qjs7OztRQUVoQixvQ0FBTzs7O1lBQVA7Z0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjs7Ozs7UUFFRCx5Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7Z0JBQzdCLHFCQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNiOzs7OztRQUNELHlDQUFZOzs7O1lBQVosVUFBYSxJQUFpQjtnQkFDN0IscUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7Ozs7O1FBQ0QsMkNBQWM7Ozs7WUFBZCxVQUFlLElBQWlCO2dCQUMvQixxQkFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQixPQUFPLE9BQU8sQ0FBQzthQUNmOztvQkFsRERMLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMGdDQXFCQztxQkFDWDs7Ozs7NkJBRUNDLFFBQUs7OEJBQ0xTLFNBQU07O2lDQTlCUjs7Ozs7OztBQ0FBO1FBNEdDOzJCQWJvQixJQUFJTCxlQUFZLEVBQUU7MEJBQ25CLElBQUlBLGVBQVksRUFBRTt5QkFFN0IsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUU7MkJBQy9CLElBQUlFLGVBQVMsQ0FBQztnQkFDdkIsSUFBSTFCLGVBQVMsQ0FBQztvQkFDYixHQUFHLEVBQUUsSUFBSUMsaUJBQVcsRUFBRTtvQkFDdEIsS0FBSyxFQUFFLElBQUlBLGlCQUFXLEVBQUU7aUJBQ3hCLENBQUM7YUFDRixDQUFDO2dDQUNhLElBQUlELGVBQVMsQ0FBQztnQkFDNUIsWUFBWSxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxDQUFDO2FBQ2pDLENBQUM7U0FDYzs7OztRQUVoQixzQ0FBTzs7O1lBQVA7Z0JBQ0MsSUFBSSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLEdBQUEsQ0FBQztvQkFBRSxPQUFPLElBQUksQ0FBQztnQkFDcEcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUM5QztxQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVEsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ3pDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7Ozs7UUFFRCx3Q0FBUzs7O1lBQVQ7Z0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ2hCLElBQUlELGVBQVMsQ0FBQztvQkFDYixHQUFHLEVBQUUsSUFBSUMsaUJBQVcsRUFBRTtvQkFDdEIsS0FBSyxFQUFFLElBQUlBLGlCQUFXLEVBQUU7aUJBQ3hCLENBQUMsQ0FDRixDQUFDO2FBQ0Y7Ozs7O1FBQ0QsMkNBQVk7Ozs7WUFBWixVQUFhLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuQzs7OztRQUNELDRDQUFhOzs7WUFBYjtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUN6Qzs7b0JBaklEa0IsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSwrbklBcUZjO3FCQUN4Qjs7Ozs7NkJBRUNDLFFBQUs7OEJBQ0xTLFNBQU07NkJBQ05BLFNBQU07O21DQWhHUjs7Ozs7Ozs7O21CQ0thLHdCQUF3Qjt5QkFDbEIsOEJBQThCOzJCQUM1QixnQ0FBZ0M7MEJBQ2pDLCtCQUErQjs7SUFHbkQsSUFBQTtRQUVDLHdCQUFtQixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjt3QkFEM0IsbUJBQW1CLENBQUMsU0FBUztTQUNFOzZCQWJoRDtRQWNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG1CQUFtQixDQUFDLGVBQWU7U0FDSjtrQ0FqQmhEO1FBa0JDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQywrQkFBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG1CQUFtQixDQUFDLGlCQUFpQjtTQUNOO29DQXJCaEQ7UUFzQkMsQ0FBQTtBQUhELElBSUEsSUFBQTs7d0JBQ2lCLG1CQUFtQixDQUFDLGdCQUFnQjs7bUNBeEJyRDtRQXlCQyxDQUFBOzs7Ozs7OztrQkNwQlcsOEJBQThCO3dCQUN4Qiw0QkFBNEI7MEJBQzFCLDhCQUE4Qjt5QkFDL0IsNkJBQTZCOztJQUdoRCxJQUFBO1FBRUMsdUJBQW1CLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO3dCQUQzQixrQkFBa0IsQ0FBQyxRQUFRO1NBQ0k7NEJBYmhEO1FBY0MsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLDRCQUFtQixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjt3QkFEM0Isa0JBQWtCLENBQUMsY0FBYztTQUNGO2lDQWpCaEQ7UUFrQkMsQ0FBQTtBQUhELElBSUEsSUFBQTs7d0JBQ2lCLGtCQUFrQixDQUFDLGdCQUFnQjs7bUNBcEJwRDtRQXFCQyxDQUFBO0FBRkQsSUFHQSxJQUFBOzt3QkFDaUIsa0JBQWtCLENBQUMsZUFBZTs7a0NBdkJuRDtRQXdCQyxDQUFBOzs7Ozs7QUN4QkQ7UUFvQkMsbUNBQW1CLEtBQWdDLEVBQVMsT0FBb0I7WUFBN0QsVUFBSyxHQUFMLEtBQUssQ0FBMkI7WUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFhO1NBQUk7Ozs7UUFDcEYsNENBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxRDs7Ozs7UUFDRCx1Q0FBRzs7OztZQUFILFVBQUksSUFBcUI7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0M7Ozs7O1FBQ0QsaURBQWE7Ozs7WUFBYixVQUFjLElBQXFCO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEQ7O29CQXBCRFYsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSw0SkFJVTtxQkFDcEI7Ozs7O3dCQWRRUixRQUFLO3dCQU1MLFdBQVc7Ozt3Q0FUcEI7Ozs7Ozs7Ozs7Ozs7UUNvQmdEc0IsOENBQXlCO1FBRXhFLG9DQUFtQixPQUFvQixFQUFVLEtBQXFCLEVBQVMsS0FBZ0M7WUFBL0csWUFDQyxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3JCO1lBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7WUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFnQjtZQUFTLFdBQUssR0FBTCxLQUFLLENBQTJCOzhCQURuRzdCLHdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTOztTQUc3Qzs7OztRQUVELDZDQUFROzs7WUFBUjtnQkFBQSxpQkFjQztnQkFiQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07cUJBQ2YsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7Z0JBRXRFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtxQkFDZixHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQztxQkFDbEQsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksR0FBQSxDQUFDO3FCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNQLFNBQVMsQ0FBQyxVQUFDLFVBQVU7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO29CQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7O1FBRUQsMkNBQU07Ozs7WUFBTixVQUFPLElBQUk7Z0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5Qzs7b0JBaENEZSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLCtMQUtNO3FCQUNoQjs7Ozs7d0JBWlEsV0FBVzt3QkFOWGUscUJBQWM7d0JBRWR2QixRQUFLOzs7eUNBSGQ7TUFvQmdELHlCQUF5Qjs7Ozs7O0FDcEJ6RTs7NkJBMERzQlIsdUJBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUzs0QkFDakMsSUFBSXFCLGVBQVksRUFBRTsyQkFDbkIsSUFBSUEsZUFBWSxFQUFFOzs7OztRQUV0QywrQkFBSTs7O1lBQUo7Z0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDOzs7O1FBQ0Qsa0NBQU87OztZQUFQO2dCQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qzs7Ozs7UUFDRCxzQ0FBVzs7OztZQUFYLFVBQVksTUFBTSxLQUFJOzs7OztRQUV0Qix1Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7Z0JBQzdCLHFCQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNiOzs7OztRQUNELHVDQUFZOzs7O1lBQVosVUFBYSxJQUFpQjtnQkFDN0IscUJBQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7Ozs7O1FBQ0QseUNBQWM7Ozs7WUFBZCxVQUFlLElBQWlCO2dCQUMvQixxQkFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQixPQUFPLE9BQU8sQ0FBQzthQUNmOztvQkFuRkRMLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHF2RkErQ0o7cUJBQ047Ozs2QkFFQ0MsUUFBSztnQ0FDTEEsUUFBSzsrQkFDTFMsU0FBTTs4QkFDTkEsU0FBTTs7K0JBNURSOzs7Ozs7Ozs7Ozs7O1FDd0R1Q0kscUNBQWdCOzs7Ozs7O1FBRXRELGdDQUFJOzs7WUFBSjtnQkFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDs7b0JBeEREZCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwydkZBK0NKO3FCQUNOOzs7NkJBRUNDLFFBQUs7O2dDQXpEUDtNQXdEdUMsZ0JBQWdCOzs7Ozs7QUN4RHZEO1FBZUMsb0NBQW1CLEtBQWdDO1lBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDO1NBQzlEOzs7O1FBQ0QsNkNBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMzQzs7b0JBWkRELFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsK0RBRU07cUJBQ2hCOzs7Ozt3QkFWUVIsUUFBSzs7O3lDQUZkOzs7Ozs7O0FDQUE7Ozs7b0JBS0NRLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLHNXQVNKO3FCQUNOOzs7NEJBRUNDLFFBQUssU0FBQyxNQUFNOztnQ0FuQmQ7Ozs7Ozs7QUNBQTtRQVdDLGdDQUFvQixLQUFxQixFQUFVLEtBQXFEO1lBQXBGLFVBQUssR0FBTCxLQUFLLENBQWdCO1lBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7U0FBSTs7b0JBSjVHRCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztxQkFDM0M7Ozs7O3dCQUxRZSxxQkFBYzt3QkFEZHZCLFFBQUs7OztxQ0FIZDs7Ozs7Ozs7UUNtQkMsd0JBQW9CLFFBQXNCLEVBQVV3QixTQUFjLEVBQVUsT0FBb0I7WUFBaEcsaUJBQW9HO1lBQWhGLGFBQVEsR0FBUixRQUFRLENBQWM7WUFBVSxXQUFNLEdBQU5BLFNBQU0sQ0FBUTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQWE7NEJBR3JGLElBQUksQ0FBQyxRQUFRO2lCQUN0QixNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO2lCQUNuQyxJQUFJLENBQUNuQixhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFBRUEsYUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLENBQUM7aUNBR2hFLElBQUksQ0FBQyxRQUFRO2lCQUMzQixNQUFNLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2lCQUN6QyxJQUFJLENBQ0pBLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUM3Qm9CLG1CQUFTLENBQUMsVUFBQyxJQUE2QixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxFQUNwRXBCLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksb0JBQW9CLEVBQUUsR0FBQSxDQUFDLEVBQ3RDcUIsb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDMUQ7U0Fma0c7O29CQUZwRzdCLGFBQVU7Ozs7O3dCQVRGOEIsZUFBTzt3QkFIUEMsYUFBTTt3QkFPTixXQUFXOzs7O1lBU2xCQyxjQUFNLEVBQUU7Ozs7WUFLUkEsY0FBTSxFQUFFOzs7NkJBMUJWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUN1QkMsMEJBQW9CLFFBQXNCLEVBQVVOLFNBQWMsRUFBVSxPQUFvQjtZQUFoRyxpQkFBb0c7WUFBaEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUFVLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTt1Q0FHMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxvQkFBb0IsRUFBRSxHQUFBLENBQUM7NEJBR3hHLElBQUksQ0FBQyxRQUFRO2lCQUN0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDO2lCQUM1QyxJQUFJLENBQ0puQixhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JvQixtQkFBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxFQUNyQ3BCLGFBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLEdBQUEsQ0FBQyxDQUN6RDttQ0FHZ0IsSUFBSSxDQUFDLFFBQVE7aUJBQzdCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDN0MsSUFBSSxDQUNKb0IsbUJBQVMsQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUEsQ0FBQyxFQUNoRHBCLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxFQUMzQ3FCLG9CQUFVLENBQUMsY0FBTSxPQUFBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsR0FBQSxDQUFDLENBQzVEO1NBckJrRzs7b0JBRnBHN0IsYUFBVTs7Ozs7d0JBakJGOEIsZUFBTzt3QkFIUEMsYUFBTTt3QkFRTixXQUFXOzs7O1lBZ0JsQkMsY0FBTSxFQUFFOzs7O1lBR1JBLGNBQU0sRUFBRTs7OztZQVNSQSxjQUFNLEVBQUU7OzsrQkFyQ1Y7Ozs7Ozs7Ozs7Ozs7UUNxQkMseUJBQW9CLFFBQXNCLEVBQVVOLFNBQWMsRUFBVSxPQUFvQjtZQUFoRyxpQkFBb0c7WUFBaEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUFVLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTs2QkFHcEYsSUFBSSxDQUFDLFFBQVE7aUJBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7aUJBQ3JDLElBQUksQ0FBQ25CLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztrQ0FHaEUsSUFBSSxDQUFDLFFBQVE7aUJBQzVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7aUJBQzNDLElBQUksQ0FDSkEsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCb0IsbUJBQVMsQ0FBQyxVQUFDLElBQThCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDLEVBQ3hFcEIsYUFBRyxDQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsR0FBQSxDQUFDLEVBQ3hEcUIsb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLHFCQUFVLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDM0Q7eUNBR3NCLElBQUksQ0FBQyxRQUFRO2lCQUNuQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUM7aUJBQzdDLElBQUksQ0FBQ3RCLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FBQztTQXBCSTs7b0JBRnBHUCxhQUFVOzs7Ozt3QkFmRjhCLGVBQU87d0JBSFBDLGFBQU07d0JBT04sV0FBVzs7OztZQWVsQkMsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OztZQVVSQSxjQUFNLEVBQUU7Ozs4QkF0Q1Y7Ozs7Ozs7QUNDQSxJQU9BLHFCQUFNLE1BQU0sR0FBVztRQUN0QjtZQUNDLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxRQUFRLEVBQUU7Z0JBQ1Q7b0JBQ0MsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsU0FBUyxFQUFFLHlCQUF5QjtpQkFDcEM7Z0JBQ0Q7b0JBQ0MsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFNBQVMsRUFBRSwwQkFBMEI7aUJBQ3JDO2dCQUNEO29CQUNDLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSwwQkFBMEI7aUJBQ3JDO2FBQ0Q7U0FDRDtLQUNELENBQUM7QUFFRix5QkFBYSxhQUFhLEdBQXdCQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Ozs7OztBQzdCL0U7Ozs7Ozs7UUFxSFEscUJBQU87Ozs7WUFBZCxVQUFlOUIsU0FBeUI7Z0JBQ3ZDLE9BQU87b0JBQ04sUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUUsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFQSxTQUFNLEVBQUUsQ0FBRTtpQkFDakUsQ0FBQzthQUNGOztvQkFwRUQrQixXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyxtQkFBZ0I7NEJBQ2hCQyxpQkFBVzs0QkFDWEgsbUJBQVk7NEJBQ1pJLG1CQUFZOzRCQUNaQywyQkFBa0I7NEJBQ2xCQywwQkFBaUI7NEJBQ2pCQyxzQkFBYTs0QkFDYkMsNEJBQW1COzRCQUNuQkMsd0JBQWU7NEJBQ2ZDLHNCQUFhOzRCQUNiQywwQkFBaUI7NEJBQ2pCQyx1QkFBYzs0QkFDZEMsd0JBQWU7NEJBQ2ZDLHVCQUFjOzRCQUNkQywyQkFBa0I7NEJBQ2xCQyxzQkFBYTs0QkFDYkMseUJBQWdCOzRCQUNoQkMsMkJBQWdCOzRCQUNoQkMsdUJBQWM7NEJBQ2RDLDZCQUFvQjs0QkFDcEJDLHlCQUFtQjt5QkFDbkI7d0JBQ0QsWUFBWSxFQUFFOzRCQUNiLDBCQUEwQjs0QkFDMUIsaUJBQWlCOzRCQUNqQiwwQkFBMEI7NEJBQzFCLGlCQUFpQjs0QkFDakIseUJBQXlCOzRCQUN6QixzQkFBc0I7NEJBQ3RCLGdCQUFnQjs0QkFDaEIsa0JBQWtCOzRCQUNsQixrQkFBa0I7NEJBQ2xCLG9CQUFvQjs0QkFDcEIsaUJBQWlCOzRCQUNqQixxQkFBcUI7NEJBQ3JCLGVBQWU7NEJBQ2YsaUJBQWlCOzRCQUNqQixjQUFjOzRCQUNkLGNBQWM7NEJBQ2QsNkJBQTZCOzRCQUM3Qiw2QkFBNkI7NEJBQzdCLGFBQWE7NEJBQ2IsZUFBZTs0QkFDZixjQUFjO3lCQUVkO3dCQUNELGVBQWUsRUFBRTs0QkFDaEIsZUFBZTs0QkFDZixpQkFBaUI7NEJBQ2pCLGNBQWM7NEJBQ2QsY0FBYzs0QkFDZCw2QkFBNkI7NEJBQzdCLDZCQUE2Qjs0QkFDN0IsYUFBYTs0QkFDYixlQUFlOzRCQUNmLGNBQWM7eUJBQ2Q7d0JBQ0QsT0FBTyxFQUFFLENBQUUsaUJBQWlCLENBQUU7cUJBRTlCOzs0QkFuSEQ7Ozs7OztvQkE2SENwQixXQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSLGFBQWE7NEJBQ2JxQixjQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7NEJBQzVDQyxxQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUUsQ0FBQzs0QkFDL0UsYUFBYTt5QkFDYjt3QkFDRCxPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7cUJBQzFCOztnQ0FySUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('@soushians/shared'), require('@angular/material'), require('@angular/cdk/collections'), require('tslib'), require('@angular/router'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/switchMap'), require('rxjs/Observable'), require('@ngrx/effects'), require('@angular/common'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/form', ['exports', '@angular/core', '@angular/forms', 'rxjs', '@ngrx/store', '@soushians/config', '@angular/common/http', 'rxjs/BehaviorSubject', 'rxjs/operators', '@soushians/shared', '@angular/material', '@angular/cdk/collections', 'tslib', '@angular/router', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/switchMap', 'rxjs/Observable', '@ngrx/effects', '@angular/common', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.form = {}),global.ng.core,global.ng.forms,null,null,null,global.ng.common.http,global.Rx,global.Rx.Observable.prototype,null,global.ng.material,global.ng.cdk.collections,global.tslib,global.ng.router,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx,null,global.ng.common,global.ng['flex-layout']));
}(this, (function (exports,core,forms,rxjs,store,config,http,BehaviorSubject,operators,shared,material,collections,tslib,router,map,mergeMap,switchMap,Observable,effects,common,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ MODULE_DEFAULT_CONFIG = {
        endpoints: {
            addForm: "",
            editForm: "",
            getForm: "",
            getList: "",
            deleteForm: ""
        }
    };
    var /** @type {?} */ MODULE_CONFIG_TOKEN = new core.InjectionToken("FormModuleConfig");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    (function (AddFormApiModel) {
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
                    name: this.name,
                    form: this.form,
                    events: this.events
                };
            };
            Object.defineProperty(Request, "formGroup", {
                /**
                 * @return {?}
                 */
                get: function () {
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
                    name: this.name,
                    form: this.form,
                    events: this.events
                };
            };
            Object.defineProperty(Request, "formGroup", {
                /**
                 * @return {?}
                 */
                get: function () {
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
                    Name: this.Name,
                    Controls: this.Controls
                };
            };
            Object.defineProperty(Request, "formGroup", {
                /**
                 * @return {?}
                 */
                get: function () {
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
        /**
         * @param {?} type
         */
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
        FormSchemaModel.prototype.init = function () {
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
    var FormConfigurationService = (function () {
        /**
         * @param {?} configFile
         * @param {?} store
         */
        function FormConfigurationService(configFile, store$$1) {
            var _this = this;
            this.store = store$$1;
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
            /**
             * @return {?}
             */
            get: function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        return FormConfigurationService;
    }());
    FormConfigurationService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormConfigurationService.ctorParameters = function () {
        return [
            { type: undefined, decorators: [{ type: core.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
            { type: store.Store }
        ];
    };
    /** @nocollapse */ FormConfigurationService.ngInjectableDef = core.defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(core.inject(MODULE_CONFIG_TOKEN), core.inject(store.Store)); }, token: FormConfigurationService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormService = (function () {
        /**
         * @param {?} http
         * @param {?} store
         * @param {?} configurationService
         */
        function FormService(http$$1, store$$1, configurationService) {
            this.http = http$$1;
            this.store = store$$1;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.add = function (data) {
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
        FormService.prototype.get = function (_id) {
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
        FormService.prototype.getList = function () {
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
        FormService.prototype.update = function (data) {
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
        FormService.prototype.delete = function (_id) {
            var _this = this;
            return this.configurationService.config$
                .filter(function (config$$1) { return config$$1.endpoints.deleteForm != ""; })
                .switchMap(function (config$$1) { return _this.http.get(config$$1.endpoints.deleteForm); });
        };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.selectFormById = function (_id) {
            var /** @type {?} */ subject = new BehaviorSubject.BehaviorSubject(undefined);
            this.store
                .select(function (state) { return state.form.list.data; })
                .pipe(operators.filter(function (forms$$1) { return forms$$1 != null; }), operators.map(function (forms$$1) { return forms$$1.find(function (form) { return form._id == _id; }); }))
                .subscribe(function (FormSchemaModel$$1) { return subject.next(FormSchemaModel$$1); });
            return subject.asObservable();
        };
        return FormService;
    }());
    FormService.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () {
        return [
            { type: http.HttpClient },
            { type: store.Store },
            { type: FormConfigurationService }
        ];
    };
    /** @nocollapse */ FormService.ngInjectableDef = core.defineInjectable({ factory: function FormService_Factory() { return new FormService(core.inject(http.HttpClient), core.inject(store.Store), core.inject(FormConfigurationService)); }, token: FormService, providedIn: "root" });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectComponent = (function () {
        function SelectComponent() {
        }
        return SelectComponent;
    }());
    SelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-select",
                    template: "<div  [formGroup]=\"group\">\n<mat-form-field>\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\n    </mat-select>\n</mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
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
        return CheckboxComponent;
    }());
    CheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-checkbox",
                    template: "<div [formGroup]=\"group\">\n    <mat-checkbox [formControlName]=\"config.name\">\n        {{config.title}}\n    </mat-checkbox>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
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
        EmailComponent.prototype.ngOnInit = function () { };
        return EmailComponent;
    }());
    EmailComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-email",
                    template: "<div  [formGroup]=\"group\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n</mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    EmailComponent.ctorParameters = function () { return []; };
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
        ColorComponent.prototype.ngOnInit = function () { };
        return ColorComponent;
    }());
    ColorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-color",
                    template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return []; };
    ColorComponent.propDecorators = {
        form: [{ type: core.Input }],
        schema: [{ type: core.Input }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TableComponent = (function () {
        /**
         * @param {?} http
         */
        function TableComponent(http$$1) {
            this.http = http$$1;
            this.selection = new collections.SelectionModel(true, []);
            this.ready = false;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.http.get(this.schema.dataEndpoint).subscribe(function (data) {
                debugger;
                _this.ready = true;
                _this.displayedColumns = data.displayedColumns;
                _this.filedDisplayedColumns = data.filedDisplayedColumns;
                _this.dataSource = new material.MatTableDataSource(data.dataSource);
            });
        };
        /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        TableComponent.prototype.isAllSelected = function () {
            var /** @type {?} */ numSelected = this.selection.selected.length;
            this.form.patchValue((_a = {},
                _a[this.schema.name] = this.selection.selected,
                _a));
            var /** @type {?} */ numRows = this.dataSource.data.length;
            return numSelected === numRows;
            var _a;
        };
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        TableComponent.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        };
        return TableComponent;
    }());
    TableComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-table",
                    template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () {
        return [
            { type: http.HttpClient }
        ];
    };
    TableComponent.propDecorators = {
        form: [{ type: core.Input }],
        schema: [{ type: core.Input }]
    };
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
        NumberComponent.prototype.ngOnInit = function () { };
        return NumberComponent;
    }());
    NumberComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-number",
                    template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return []; };
    NumberComponent.propDecorators = {
        form: [{ type: core.Input }],
        schema: [{ type: core.Input }]
    };
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
        return TextComponent;
    }());
    TextComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-control-text",
                    template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    TextComponent.ctorParameters = function () { return []; };
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
        /**
         * @param {?} payload
         */
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
        /**
         * @param {?} payload
         */
        function UpdateFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
        }
        return UpdateFormSchemaAction;
    }());
    var AddFormSchemaAction = (function () {
        /**
         * @param {?} payload
         */
        function AddFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
        }
        return AddFormSchemaAction;
    }());
    var GetFormSchemaAction = (function () {
        /**
         * @param {?} payload
         */
        function GetFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.GET_FORM_SCHEMA;
        }
        return GetFormSchemaAction;
    }());
    var FormSchemaFechedAction = (function () {
        /**
         * @param {?} payload
         */
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
    var FormViewComponent = (function () {
        /**
         * @param {?} service
         * @param {?} compiler
         * @param {?} resolver
         * @param {?} store
         */
        function FormViewComponent(service, compiler, resolver, store$$1) {
            var _this = this;
            this.service = service;
            this.compiler = compiler;
            this.resolver = resolver;
            this.store = store$$1;
            this.unsubscribe = new rxjs.Subject();
            this.accept = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
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
            /**
             * @param {?} id
             * @return {?}
             */
            set: function (id) {
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
            /**
             * @param {?} schema
             * @return {?}
             */
            set: function (schema) {
                this.schema$.next(schema);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormViewComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        /**
         * @param {?} schema
         * @return {?}
         */
        FormViewComponent.prototype.generate = function (schema) {
            this.schema$.next(schema);
        };
        /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
        FormViewComponent.prototype.createFrom = function (data, parentPath) {
            var _this = this;
            if (parentPath === void 0) {
                parentPath = "";
            }
            if (data.type == "control") {
                if (data.parentType == "array")
                    ;
                else if (data.parentType == "group") {
                    var /** @type {?} */ formGroupPath = parentPath;
                    parentPath = parentPath + ".controls." + (((data))).name;
                }
                var /** @type {?} */ validators = [];
                if (data.validator.required.active) {
                    validators.push(forms.Validators.required);
                }
                if (data.validator.minlength.active) {
                    validators.push(forms.Validators.minLength(data.validator.minlength.value));
                }
                if (data.validator.email.active) {
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
        FormViewComponent.prototype.accepted = function () {
            this.accept.emit(this.formGroup);
        };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.canceled = function () {
            this.cancel.emit(this.formGroup);
        };
        return FormViewComponent;
    }());
    FormViewComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-view",
                    template: "<form *ngIf=\"formGroupCreated\" class=\"dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <mat-card>\n    <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </mat-card-content>\n    <mat-card-actions>\n      <button fxFlex type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n      <button fxFlex type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"
                },] },
    ];
    /** @nocollapse */
    FormViewComponent.ctorParameters = function () {
        return [
            { type: FormService },
            { type: core.Compiler },
            { type: core.ComponentFactoryResolver },
            { type: store.Store }
        ];
    };
    FormViewComponent.propDecorators = {
        accept: [{ type: core.Output }],
        cancel: [{ type: core.Output }],
        local: [{ type: core.Input }],
        id: [{ type: core.Input }],
        schema: [{ type: core.Input }]
    };
    var /** @type {?} */ components = {
        checkbox: CheckboxComponent,
        text: TextComponent,
        table: TableComponent,
        color: ColorComponent,
        email: EmailComponent,
        select: SelectComponent
    };
    var DynamicFieldDirective = (function () {
        /**
         * @param {?} resolver
         * @param {?} container
         */
        function DynamicFieldDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnChanges = function () {
            if (this.component) {
                this.component.instance.config = this.config;
                this.component.instance.group = this.group;
            }
        };
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnInit = function () {
            if (!components[this.config.subtype]) {
                var /** @type {?} */ supportedTypes = Object.keys(components).join(", ");
                throw new Error("Trying to use an unsupported type (" + this.config.subtype + ").\n\t\t  Supported types: " + supportedTypes);
            }
            var /** @type {?} */ component = this.resolver.resolveComponentFactory(components[this.config.subtype]);
            this.component = this.container.createComponent(component);
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        };
        return DynamicFieldDirective;
    }());
    DynamicFieldDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: "[dynamicField]"
                },] },
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () {
        return [
            { type: core.ComponentFactoryResolver },
            { type: core.ViewContainerRef }
        ];
    };
    DynamicFieldDirective.propDecorators = {
        config: [{ type: core.Input }],
        group: [{ type: core.Input }]
    };
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
                return Object.assign({}, state, { status: "dirty" });
            }
            case FormsListActionTypes.FORMS_LIST_START: {
                return Object.assign({}, state, { status: "pending" });
            }
            case FormsListActionTypes.FORMS_LIST_SUCCEED: {
                return Object.assign({}, state, { data: action.payload, status: "succeed" });
            }
            case FormsListActionTypes.FORMS_LIST_FAILED: {
                return Object.assign({}, state, { status: "failed" });
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
                return Object.assign({}, state, { data: data });
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
                return Object.assign({}, state, { data: data });
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
                return Object.assign({}, state, { data: data });
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
            this.changes = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            debugger;
        }
        /**
         * @return {?}
         */
        FormGroupComponent.prototype.changed = function () {
            this.changes.emit();
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormGroup = function (root) {
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
        FormGroupComponent.prototype.addFormArray = function (root) {
            var /** @type {?} */ array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormControl = function (root) {
            var /** @type {?} */ control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        /**
         * @param {?} idx
         * @return {?}
         */
        FormGroupComponent.prototype.deleteFormGroup = function (idx) {
            this.schema.fields.splice(idx, 1);
        };
        return FormGroupComponent;
    }());
    FormGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "app-form-group",
                    template: "<mat-card>\n  <mat-card-content>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n    </mat-form-field>\n\n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n      <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n    </div>\n\n    <div *ngFor=\"let field of schema.fields;let i = index\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array>\n        <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return []; };
    FormGroupComponent.propDecorators = {
        schema: [{ type: core.Input }],
        noHeader: [{ type: core.Input }],
        changes: [{ type: core.Output }],
        delete: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormArrayComponent = (function () {
        function FormArrayComponent() {
            this.changes = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormArrayComponent.prototype.changed = function () {
            this.changes.emit();
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormGroup = function (root) {
            var /** @type {?} */ group = new FieldConfig("group");
            group.fields = [];
            root.fields.push(group);
            return group;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormArray = function (root) {
            var /** @type {?} */ array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormControl = function (root) {
            var /** @type {?} */ control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        return FormArrayComponent;
    }());
    FormArrayComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "app-form-array",
                    template: "<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n      \n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\n    </div>\n    \n    <div *ngFor=\"let field of schema.fields\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return []; };
    FormArrayComponent.propDecorators = {
        schema: [{ type: core.Input }],
        changes: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormControlComponent = (function () {
        function FormControlComponent() {
            this.changes = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.options = new forms.FormArray([
                new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                })
            ]);
            this.tableOptions = new forms.FormGroup({
                dataEndpoint: new forms.FormControl("http://localhost:3000/api/fake/packgeCompareSimpleList")
            });
            debugger;
        }
        /**
         * @return {?}
         */
        FormControlComponent.prototype.changed = function () {
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
        FormControlComponent.prototype.addOption = function () {
            this.options.push(new forms.FormGroup({
                key: new forms.FormControl(),
                value: new forms.FormControl()
            }));
        };
        /**
         * @param {?} i
         * @return {?}
         */
        FormControlComponent.prototype.removeOption = function (i) {
            this.options.controls.splice(i, 1);
        };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.insertOptions = function () {
            this.schema.options = this.options.value;
        };
        return FormControlComponent;
    }());
    FormControlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "app-form-control",
                    template: "  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <button mat-icon-button (click)=\"delete.emit()\">\n            <mat-icon aria-label=\" icon-button\">delete_forever</mat-icon>\n          </button>\n        {{schema.name}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\"/>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n          <mat-option value=\"table\">table</mat-option>\n          <mat-option value=\"select\">select</mat-option>\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"email\">email</mat-option>\n          <mat-option value=\"color\">color</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"checkbox\">checkbox</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>\n      </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n            <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\"/>\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"schema.inputType=='select'\">\n        [options]\n        <button (click)=\"addOption()\">+</button>\n        <button (click)=\"insertOptions()\">insert</button>\n        <div *ngFor=\"let option of options.controls;index as i\">\n          {{i}}\n          <div [formGroup]=\"options.controls[i]\">\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <br/>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\"  placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\"/>\n        </mat-form-field>\n    </div>\n      \n  </mat-expansion-panel>"
                },] },
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return []; };
    FormControlComponent.propDecorators = {
        schema: [{ type: core.Input }],
        changes: [{ type: core.Output }],
        delete: [{ type: core.Output }]
    };
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
        /**
         * @param {?} payload
         */
        function EditFormAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM;
        }
        return EditFormAction;
    }());
    var EditFormStartAction = (function () {
        /**
         * @param {?} payload
         */
        function EditFormStartAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_START;
        }
        return EditFormStartAction;
    }());
    var EditFormSucceedAction = (function () {
        /**
         * @param {?} payload
         */
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
        /**
         * @param {?} payload
         */
        function AddFormAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM;
        }
        return AddFormAction;
    }());
    var AddFormStartAction = (function () {
        /**
         * @param {?} payload
         */
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
        /**
         * @param {?} store
         * @param {?} service
         */
        function AddFormContainerComponent(store$$1, service) {
            this.store = store$$1;
            this.service = service;
        }
        /**
         * @return {?}
         */
        AddFormContainerComponent.prototype.ngOnInit = function () {
            debugger;
            this.schema = new FormSchemaModel();
            this.schema.init();
            this.store.dispatch(new AddFormSchemaAction(this.schema));
        };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.add = function (form) {
            this.store.dispatch(new AddFormAction(form));
        };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.update_schema = function (form) {
            this.store.dispatch(new UpdateFormSchemaAction(form));
        };
        return AddFormContainerComponent;
    }());
    AddFormContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                },] },
    ];
    /** @nocollapse */
    AddFormContainerComponent.ctorParameters = function () {
        return [
            { type: store.Store },
            { type: FormService }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormContainerComponent = (function (_super) {
        tslib.__extends(EditFormContainerComponent, _super);
        /**
         * @param {?} service
         * @param {?} route
         * @param {?} store
         */
        function EditFormContainerComponent(service, route, store$$1) {
            var _this = _super.call(this, store$$1, service) || this;
            _this.service = service;
            _this.route = route;
            _this.store = store$$1;
            _this.formGroup = exports.EditFormApiModel.Request.formGroup;
            return _this;
        }
        /**
         * @return {?}
         */
        EditFormContainerComponent.prototype.ngOnInit = function () {
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
                debugger;
                _this.schema = formSchema;
                _this.formGroup.patchValue(formSchema);
            });
        };
        /**
         * @param {?} data
         * @return {?}
         */
        EditFormContainerComponent.prototype.update = function (data) {
            this.store.dispatch(new EditFormAction(data));
        };
        return EditFormContainerComponent;
    }(AddFormContainerComponent));
    EditFormContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                },] },
    ];
    /** @nocollapse */
    EditFormContainerComponent.ctorParameters = function () {
        return [
            { type: FormService },
            { type: router.ActivatedRoute },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddFormComponent = (function () {
        function AddFormComponent() {
            this.formGroup = exports.AddFormApiModel.Request.formGroup;
            this.submited = new core.EventEmitter();
            this.changes = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        AddFormComponent.prototype.emit = function () {
            this.formGroup.patchValue({ form: this.schema.form });
            this.submited.emit(this.formGroup.value);
        };
        /**
         * @return {?}
         */
        AddFormComponent.prototype.changed = function () {
            this.formGroup.patchValue({ form: this.schema.form });
            this.changes.emit(this.formGroup.value);
        };
        /**
         * @param {?} $event
         * @return {?}
         */
        AddFormComponent.prototype.changeOrder = function ($event) {
            debugger;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormGroup = function (root) {
            var /** @type {?} */ group = new FieldConfig("group");
            group.fields = [];
            root.fields.push(group);
            return group;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormArray = function (root) {
            var /** @type {?} */ array = new FieldConfig("array");
            array.fields = [];
            root.fields.push(array);
            return array;
        };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormControl = function (root) {
            var /** @type {?} */ control = new FieldConfig("control");
            root.fields.push(control);
            return control;
        };
        return AddFormComponent;
    }());
    AddFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "ngs-form-add",
                    template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                },] },
    ];
    AddFormComponent.propDecorators = {
        schema: [{ type: core.Input }],
        formGroup: [{ type: core.Input }],
        submited: [{ type: core.Output }],
        changes: [{ type: core.Output }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormComponent = (function (_super) {
        tslib.__extends(EditFormComponent, _super);
        function EditFormComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        EditFormComponent.prototype.emit = function () {
            if (!this.formGroup.valid)
                return;
            return this.submited.emit(this.formGroup.value);
        };
        return EditFormComponent;
    }(AddFormComponent));
    EditFormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "edit-form",
                    template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                },] },
    ];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormListContainerComponent = (function () {
        /**
         * @param {?} store
         */
        function FormListContainerComponent(store$$1) {
            this.store = store$$1;
            this.data$ = this.store.select(function (state) { return state.form.list.data; });
        }
        /**
         * @return {?}
         */
        FormListContainerComponent.prototype.ngOnInit = function () {
            this.store.dispatch(new FormsListAction());
        };
        return FormListContainerComponent;
    }());
    FormListContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                },] },
    ];
    /** @nocollapse */
    FormListContainerComponent.ctorParameters = function () {
        return [
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var FormListComponent = (function () {
        function FormListComponent() {
        }
        return FormListComponent;
    }());
    FormListComponent.decorators = [
        { type: core.Component, args: [{
                    selector: "form-list",
                    template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  item._id]\">\n          <mat-icon aria-label=\"edit form\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
                },] },
    ];
    FormListComponent.propDecorators = {
        data$: [{ type: core.Input, args: ["data",] }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MainContainerComponent = (function () {
        /**
         * @param {?} route
         * @param {?} store
         */
        function MainContainerComponent(route, store$$1) {
            this.route = route;
            this.store = store$$1;
        }
        return MainContainerComponent;
    }());
    MainContainerComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    MainContainerComponent.ctorParameters = function () {
        return [
            { type: router.ActivatedRoute },
            { type: store.Store }
        ];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AddFormEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} service
         */
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
        return AddFormEffects;
    }());
    AddFormEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    AddFormEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], AddFormEffects.prototype, "AddForm$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], AddFormEffects.prototype, "AddFormStart$", void 0);
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
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} service
         */
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
        return FormsListEffects;
    }());
    FormsListEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    FormsListEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], FormsListEffects.prototype, "GetForm$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], FormsListEffects.prototype, "get_forms_list$", void 0);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EditFormEffects = (function () {
        /**
         * @param {?} actions$
         * @param {?} router
         * @param {?} service
         */
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
        return EditFormEffects;
    }());
    EditFormEffects.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    EditFormEffects.ctorParameters = function () {
        return [
            { type: effects.Actions },
            { type: router.Router },
            { type: FormService }
        ];
    };
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditForm$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditFormStart$", void 0);
    tslib.__decorate([
        effects.Effect(),
        tslib.__metadata("design:type", Object)
    ], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
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
    // export * from "./edit-form.reducer";
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
        NgsFormModule.forRoot = function (config$$1) {
            return {
                ngModule: RootNgsFormModule,
                providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
            };
        };
        return NgsFormModule;
    }());
    NgsFormModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        http.HttpClientModule,
                        forms.FormsModule,
                        router.RouterModule,
                        common.CommonModule,
                        material.MatExpansionModule,
                        material.MatSnackBarModule,
                        material.MatIconModule,
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
                        TextComponent,
                        NumberComponent,
                        TableComponent
                    ],
                    entryComponents: [
                        SelectComponent,
                        CheckboxComponent,
                        EmailComponent,
                        ColorComponent,
                        TextComponent,
                        NumberComponent,
                        TableComponent
                    ],
                    exports: [FormViewComponent]
                },] },
    ];
    var RootNgsFormModule = (function () {
        function RootNgsFormModule() {
        }
        return RootNgsFormModule;
    }());
    RootNgsFormModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        NgsFormModule,
                        store.StoreModule.forFeature("form", FormReducers),
                        effects.EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
                        RoutingModule
                    ],
                    exports: [NgsFormModule]
                },] },
    ];

    exports.MODULE_DEFAULT_CONFIG = MODULE_DEFAULT_CONFIG;
    exports.MODULE_CONFIG_TOKEN = MODULE_CONFIG_TOKEN;
    exports.FormService = FormService;
    exports.FormViewComponent = FormViewComponent;
    exports.DynamicFieldDirective = DynamicFieldDirective;
    exports.FormSchemaModel = FormSchemaModel;
    exports.FieldConfig = FieldConfig;
    exports.NgsFormModule = NgsFormModule;
    exports.RootNgsFormModule = RootNgsFormModule;
    exports.ɵh = AddFormComponent;
    exports.ɵf = AddFormContainerComponent;
    exports.ɵk = AddFormContainerComponent;
    exports.ɵy = AddFormEffects;
    exports.ɵm = AddFormComponent;
    exports.ɵo = FormArrayComponent;
    exports.ɵp = FormControlComponent;
    exports.ɵn = FormGroupComponent;
    exports.ɵbc = EditFormContainerComponent;
    exports.ɵe = EditFormContainerComponent;
    exports.ɵz = EditFormEffects;
    exports.ɵg = EditFormComponent;
    exports.ɵbb = RoutingModule;
    exports.ɵbd = FormListContainerComponent;
    exports.ɵi = FormListContainerComponent;
    exports.ɵj = FormListComponent;
    exports.ɵba = FormsListEffects;
    exports.ɵx = reducer;
    exports.ɵl = MainContainerComponent;
    exports.ɵa = FormReducers;
    exports.ɵc = FormConfigurationService;
    exports.ɵr = CheckboxComponent;
    exports.ɵt = ColorComponent;
    exports.ɵs = EmailComponent;
    exports.ɵv = NumberComponent;
    exports.ɵq = SelectComponent;
    exports.ɵw = TableComponent;
    exports.ɵu = TextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=soushians-form.umd.js.map

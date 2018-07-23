import { FormGroup, FormControl, Validators, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken, Inject, Injectable, Component, Input, Output, EventEmitter, NgModule, ViewContainerRef, ComponentFactoryResolver, Compiler, Directive, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { getFormModuleConfig } from '@soushians/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject as BehaviorSubject$1 } from 'rxjs/BehaviorSubject';
import { filter, map, takeUntil, switchMap, catchError } from 'rxjs/operators';
import { stringTemplate } from '@soushians/shared';
import { MatTableDataSource, MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatDatepickerModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { __decorate, __metadata, __extends, __assign } from 'tslib';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import { Actions, Effect, EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormApiModel;
(function (AddFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
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
             */
            function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    name: new FormControl("", [Validators.required]),
                    title: new FormControl("", [Validators.required]),
                    form: new FormControl({}),
                    events: new FormGroup({
                        accept: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("ثبت")
                        }),
                        cancel: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("انصراف")
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
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    AddFormApiModel.Response = Response;
})(AddFormApiModel || (AddFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditFormApiModel;
(function (EditFormApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
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
             */
            function () {
                return new FormGroup({
                    _id: new FormControl("", [Validators.required]),
                    name: new FormControl("", [Validators.required]),
                    form: new FormControl({}),
                    events: new FormGroup({
                        accept: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("ثبت")
                        }),
                        cancel: new FormGroup({
                            show: new FormControl(false),
                            text: new FormControl("انصراف")
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
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    EditFormApiModel.Response = Response;
})(EditFormApiModel || (EditFormApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListApiModel;
(function (FormListApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = /** @type {?} */ ({}); }
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
             */
            function () {
                return new FormGroup({
                    Name: new FormControl("", [Validators.required]),
                    Controls: new FormGroup({})
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    FormListApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    FormListApiModel.Response = Response;
})(FormListApiModel || (FormListApiModel = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Validator = /** @class */ (function () {
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
var FieldConfig = /** @class */ (function () {
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
var FormSchemaModel = /** @class */ (function () {
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
var /** @type {?} */ MODULE_CONFIG_TOKEN = new InjectionToken("FormModuleConfig");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormConfigurationService = /** @class */ (function () {
    function FormConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject(MODULE_DEFAULT_CONFIG);
        this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(getFormModuleConfig).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(FormConfigurationService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    FormConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MODULE_CONFIG_TOKEN,] }] },
        { type: Store }
    ]; };
    /** @nocollapse */ FormConfigurationService.ngInjectableDef = defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(inject(MODULE_CONFIG_TOKEN), inject(Store)); }, token: FormConfigurationService, providedIn: "root" });
    return FormConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormService = /** @class */ (function () {
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
        var /** @type {?} */ model = new AddFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.addForm != ""; })
            .take(1)
            .switchMap(function (config) {
            return _this.http.post(config.env.frontend_server + config.endpoints.addForm, model.getRequestBody());
        })
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
            .filter(function (config) { return config.endpoints.getForm != ""; })
            .take(1)
            .switchMap(function (config) {
            return _this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.getForm, { _id: _id }));
        })
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
            .filter(function (config) { return config.endpoints.getList != ""; })
            .switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.getList); })
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
        var /** @type {?} */ model = new EditFormApiModel.Request(data);
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.editForm != ""; })
            .take(1)
            .switchMap(function (config) {
            return _this.http.put(config.env.frontend_server + config.endpoints.editForm, model.getRequestBody());
        })
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
            .filter(function (config) { return config.endpoints.deleteForm != ""; })
            .switchMap(function (config) { return _this.http.get(config.env.frontend_server + config.endpoints.deleteForm); });
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
        var /** @type {?} */ subject = new BehaviorSubject$1(undefined);
        this.store
            .select(function (state) { return state.form.list.data; })
            .pipe(filter(function (forms) { return forms != null; }), map(function (forms) { return forms.find(function (form) { return form._id == _id; }); }))
            .subscribe(function (formSchemaModel) { return subject.next(formSchemaModel); });
        return subject.asObservable();
    };
    FormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: FormConfigurationService }
    ]; };
    /** @nocollapse */ FormService.ngInjectableDef = defineInjectable({ factory: function FormService_Factory() { return new FormService(inject(HttpClient), inject(Store), inject(FormConfigurationService)); }, token: FormService, providedIn: "root" });
    return FormService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.decorators = [
        { type: Component, args: [{
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
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.decorators = [
        { type: Component, args: [{
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
var EmailComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var ColorComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: "ngs-form-control-color",
                    template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return []; };
    ColorComponent.propDecorators = {
        form: [{ type: Input }],
        schema: [{ type: Input }]
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
var TableComponent = /** @class */ (function () {
    function TableComponent(http) {
        this.http = http;
        this.selection = new SelectionModel(true, []);
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
            _this.dataSource = new MatTableDataSource(data.dataSource);
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
        { type: Component, args: [{
                    selector: "ngs-form-control-table",
                    template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    TableComponent.propDecorators = {
        form: [{ type: Input }],
        schema: [{ type: Input }]
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
var NumberComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: "ngs-form-control-number",
                    template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return []; };
    NumberComponent.propDecorators = {
        form: [{ type: Input }],
        schema: [{ type: Input }]
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
var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.decorators = [
        { type: Component, args: [{
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
var FormsListAction = /** @class */ (function () {
    function FormsListAction() {
        this.type = FormsListActionTypes.FORMS_LIST;
    }
    return FormsListAction;
}());
var FormsListStartAction = /** @class */ (function () {
    function FormsListStartAction() {
        this.type = FormsListActionTypes.FORMS_LIST_START;
    }
    return FormsListStartAction;
}());
var FormsListSucceedAction = /** @class */ (function () {
    function FormsListSucceedAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
    }
    return FormsListSucceedAction;
}());
var FormsListFailedAction = /** @class */ (function () {
    function FormsListFailedAction() {
        this.type = FormsListActionTypes.FORMS_LIST_FAILED;
    }
    return FormsListFailedAction;
}());
var UpdateFormSchemaAction = /** @class */ (function () {
    function UpdateFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
    }
    return UpdateFormSchemaAction;
}());
var AddFormSchemaAction = /** @class */ (function () {
    function AddFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
    }
    return AddFormSchemaAction;
}());
var GetFormSchemaAction = /** @class */ (function () {
    function GetFormSchemaAction(payload) {
        this.payload = payload;
        this.type = FormsListActionTypes.GET_FORM_SCHEMA;
    }
    return GetFormSchemaAction;
}());
var FormSchemaFechedAction = /** @class */ (function () {
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
var DateFormInputControlComponent = /** @class */ (function () {
    function DateFormInputControlComponent() {
    }
    DateFormInputControlComponent.decorators = [
        { type: Component, args: [{
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
var FileFormInputControlComponent = /** @class */ (function () {
    function FileFormInputControlComponent() {
    }
    FileFormInputControlComponent.decorators = [
        { type: Component, args: [{
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
var FormViewComponent = /** @class */ (function () {
    function FormViewComponent(service, compiler, resolver, store) {
        var _this = this;
        this.service = service;
        this.compiler = compiler;
        this.resolver = resolver;
        this.store = store;
        this.unsubscribe = new Subject();
        this.accept = new EventEmitter();
        this.cancel = new EventEmitter();
        this.card = false;
        this.formGroupCreated = false;
        this.schema$ = new BehaviorSubject$1(undefined);
        this.schema$.pipe(takeUntil(this.unsubscribe)).subscribe(function (schema) {
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
         */
        function (id) {
            var _this = this;
            if (!this.local)
                this.store.dispatch(new GetFormSchemaAction(id));
            this.service
                .selectFormById(id)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(function (schema) { return _this.schema$.next(schema); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormViewComponent.prototype, "schema", {
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
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
        if (parentPath === void 0) { parentPath = ""; }
        if (data.type == "control") {
            if (data.parentType == "array") ;
            else if (data.parentType == "group") {
                var /** @type {?} */ formGroupPath = parentPath;
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            var /** @type {?} */ validators = [];
            if (data.validator.required && data.validator.required.active) {
                validators.push(Validators.required);
            }
            if (data.validator.minlength && data.validator.minlength.active) {
                validators.push(Validators.minLength(data.validator.minlength.value));
            }
            if (data.validator.email && data.validator.email.active) {
                validators.push(Validators.email);
            }
            var /** @type {?} */ ctr = new FormControl(data.value, validators);
            (/** @type {?} */ (ctr)).schema = data;
            (/** @type {?} */ (ctr)).schema.path = parentPath;
            (/** @type {?} */ (ctr)).schema.formGroupPath = formGroupPath;
            return ctr;
        }
        else if (data.type == "group") {
            var /** @type {?} */ formGroup = new FormGroup({});
            if (data.parentType == undefined) {
                parentPath = (/** @type {?} */ (data)).name;
            }
            else if (data.parentType == "array") {
                parentPath = parentPath + ".controls[" + ((/** @type {?} */ (data))).name + "]";
            }
            else if (data.parentType == "group") {
                parentPath = parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            }
            (/** @type {?} */ (formGroup)).schema = data;
            (/** @type {?} */ (formGroup)).schema.path = parentPath;
            data.fields.forEach(function (item) {
                item.parentType = "group";
                formGroup.addControl(item.name, _this.createFrom(item, parentPath));
            });
            return formGroup;
        }
        else {
            var /** @type {?} */ formArray = new FormArray([]);
            parentPath =
                parentPath == "" ? (/** @type {?} */ (data)).name : parentPath + ".controls." + ((/** @type {?} */ (data))).name;
            (/** @type {?} */ (formArray)).schema = data;
            (/** @type {?} */ (formArray)).schema.path = parentPath;
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
        { type: Component, args: [{
                    selector: "ngs-form-view",
                    template: "<form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <mat-card>\n    <mat-card-title>\n      {{(schema$ | async)?.name}}\n    </mat-card-title>\n    <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </mat-card-content>\n    <mat-card-actions align=\"end\">\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n      </mat-card-actions>\n  </mat-card>\n</form>\n\n<form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n  <div>\n    <h3>\n      {{(schema$ | async)?.name}}\n    </h3>\n    <div fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n      <div  *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n        <ng-container dynamicField  [config]=\"field\" [group]=\"formGroup\"></ng-container>\n      </div>\n    </div>\n    <div>\n      <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$ | async)?.events.cancel.text}}</button>\n      <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$ | async)?.events.accept.text}}</button>\n    </div>\n  </div>\n</form>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FormViewComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: Compiler },
        { type: ComponentFactoryResolver },
        { type: Store }
    ]; };
    FormViewComponent.propDecorators = {
        accept: [{ type: Output }],
        cancel: [{ type: Output }],
        local: [{ type: Input }],
        card: [{ type: Input }],
        id: [{ type: Input }],
        schema: [{ type: Input }]
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
var DynamicFieldDirective = /** @class */ (function () {
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
        { type: Directive, args: [{
                    selector: "[dynamicField]"
                },] },
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        config: [{ type: Input }],
        group: [{ type: Input }]
    };
    return DynamicFieldDirective;
}());

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
    if (state === void 0) { state = initialState; }
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
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.noHeader = false;
        this.changes = new EventEmitter();
        this.delete = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "app-form-group",
                    template: "<mat-card>\n  <mat-card-content>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"!noHeader\">\n      <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n    </mat-form-field>\n\n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n      <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n    </div>\n\n    <div *ngFor=\"let field of schema.fields;let i = index\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n        <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\n        <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n      </div>\n    </div>\n\n  </mat-card-content>\n</mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return []; };
    FormGroupComponent.propDecorators = {
        schema: [{ type: Input }],
        noHeader: [{ type: Input }],
        changes: [{ type: Output }],
        delete: [{ type: Output }]
    };
    return FormGroupComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent() {
        this.changes = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "app-form-array",
                    template: "<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n      \n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\n    </div>\n    \n    <div *ngFor=\"let field of schema.fields\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>"
                },] },
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return []; };
    FormArrayComponent.propDecorators = {
        schema: [{ type: Input }],
        changes: [{ type: Output }]
    };
    return FormArrayComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.changes = new EventEmitter();
        this.delete = new EventEmitter();
        this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.options = new FormArray([
            new FormGroup({
                key: new FormControl(),
                value: new FormControl()
            })
        ]);
        this.tableOptions = new FormGroup({
            dataEndpoint: new FormControl("")
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
        this.options.push(new FormGroup({
            key: new FormControl(),
            value: new FormControl()
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
        { type: Component, args: [{
                    selector: "app-form-control",
                    template: "  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        <button mat-icon-button (click)=\"delete.emit()\">\n            <mat-icon aria-label=\" icon-button\">delete_forever</mat-icon>\n          </button>\n        {{schema.name}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\"/>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n          <mat-option value=\"table\">table</mat-option>\n          <mat-option value=\"select\">select</mat-option>\n          <mat-option value=\"text\">text</mat-option>\n          <mat-option value=\"number\">number</mat-option>\n          <mat-option value=\"email\">email</mat-option>\n          <mat-option value=\"color\">color</mat-option>\n          <mat-option value=\"radio\">radio</mat-option>\n          <mat-option value=\"checkbox\">checkbox</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n          <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\"/>\n      </mat-form-field>\n      \n        <mat-form-field>\n          <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n            <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n      <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\"/>\n        </mat-form-field>\n      </div>\n\n      <div *ngIf=\"schema.inputType=='select'\">\n        [options]\n        <button (click)=\"addOption()\">+</button>\n        <button (click)=\"insertOptions()\">insert</button>\n        <div *ngFor=\"let option of options.controls;index as i\">\n          {{i}}\n          <div [formGroup]=\"options.controls[i]\">\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\"/>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\"/>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n      <br/>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-slide-toggle (change)=\"changed()\"  [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\"  placeholder=\"\u067E\u06CC\u063A\u0627\u0645\"/>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\"  placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\"/>\n        </mat-form-field>\n    </div>\n      \n  </mat-expansion-panel>"
                },] },
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return []; };
    FormControlComponent.propDecorators = {
        schema: [{ type: Input }],
        changes: [{ type: Output }],
        delete: [{ type: Output }]
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
var EditFormAction = /** @class */ (function () {
    function EditFormAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM;
    }
    return EditFormAction;
}());
var EditFormStartAction = /** @class */ (function () {
    function EditFormStartAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_START;
    }
    return EditFormStartAction;
}());
var EditFormSucceedAction = /** @class */ (function () {
    function EditFormSucceedAction(payload) {
        this.payload = payload;
        this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    }
    return EditFormSucceedAction;
}());
var EditFormFailedAction = /** @class */ (function () {
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
var AddFormAction = /** @class */ (function () {
    function AddFormAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM;
    }
    return AddFormAction;
}());
var AddFormStartAction = /** @class */ (function () {
    function AddFormStartAction(payload) {
        this.payload = payload;
        this.type = AddFormActionTypes.ADD_FORM_START;
    }
    return AddFormStartAction;
}());
var AddFormSucceedAction = /** @class */ (function () {
    function AddFormSucceedAction() {
        this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
    }
    return AddFormSucceedAction;
}());
var AddFormFailedAction = /** @class */ (function () {
    function AddFormFailedAction() {
        this.type = AddFormActionTypes.ADD_FORM_FAILED;
    }
    return AddFormFailedAction;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormContainerComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                },] },
    ];
    /** @nocollapse */
    AddFormContainerComponent.ctorParameters = function () { return [
        { type: Store },
        { type: FormService }
    ]; };
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
var EditFormContainerComponent = /** @class */ (function (_super) {
    __extends(EditFormContainerComponent, _super);
    function EditFormContainerComponent(service, route, store) {
        var _this = _super.call(this, store, service) || this;
        _this.service = service;
        _this.route = route;
        _this.store = store;
        _this.formGroup = EditFormApiModel.Request.formGroup;
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
        { type: Component, args: [{
                    template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                },] },
    ];
    /** @nocollapse */
    EditFormContainerComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return EditFormContainerComponent;
}(AddFormContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormComponent = /** @class */ (function () {
    function AddFormComponent() {
        this.formGroup = AddFormApiModel.Request.formGroup;
        this.submited = new EventEmitter();
        this.changes = new EventEmitter();
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
        { type: Component, args: [{
                    selector: "ngs-form-add",
                    template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                },] },
    ];
    AddFormComponent.propDecorators = {
        schema: [{ type: Input }],
        formGroup: [{ type: Input }],
        submited: [{ type: Output }],
        changes: [{ type: Output }]
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
var EditFormComponent = /** @class */ (function (_super) {
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
        { type: Component, args: [{
                    selector: "edit-form",
                    template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                },] },
    ];
    EditFormComponent.propDecorators = {
        schema: [{ type: Input }]
    };
    return EditFormComponent;
}(AddFormComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListContainerComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                },] },
    ];
    /** @nocollapse */
    FormListContainerComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return FormListContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FormListComponent = /** @class */ (function () {
    function FormListComponent() {
    }
    FormListComponent.decorators = [
        { type: Component, args: [{
                    selector: "form-list",
                    template: "<div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\" >\n    <mat-card class=\"cards-item\" *ngFor=\"let item of (data$ | async)\" fxFlex=\"51\">\n      <h3>\n        <a [routerLink]=\"['edit' ,  item._id]\">\n          <mat-icon aria-label=\"edit form\">edit</mat-icon>\n        </a>\n        {{item.name}}\n      </h3>\n  </mat-card>\n</div>"
                },] },
    ];
    FormListComponent.propDecorators = {
        data$: [{ type: Input, args: ["data",] }]
    };
    return FormListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MainContainerComponent = /** @class */ (function () {
    function MainContainerComponent(route, store) {
        this.route = route;
        this.store = store;
    }
    MainContainerComponent.decorators = [
        { type: Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    MainContainerComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return MainContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AddFormEffects = /** @class */ (function () {
    function AddFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.AddForm$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new AddFormStartAction(data); }));
        this.AddFormStart$ = this.actions$
            .ofType(AddFormActionTypes.ADD_FORM_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.add(data); }), map(function (res) { return new AddFormSucceedAction(); }), catchError(function () { return Observable.of(new AddFormFailedAction()); }));
    }
    AddFormEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AddFormEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], AddFormEffects.prototype, "AddForm$", void 0);
    __decorate([
        Effect(),
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
var FormsListEffects = /** @class */ (function () {
    function FormsListEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(function (data) { return new FormsListStartAction(); });
        this.GetForm$ = this.actions$
            .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (id) { return _this.service.get(id); }), map(function (formSchema) { return new FormSchemaFechedAction(formSchema); }));
        this.get_forms_list$ = this.actions$
            .ofType(FormsListActionTypes.FORMS_LIST_START)
            .pipe(switchMap(function (data) { return _this.service.getList(); }), map(function (res) { return new FormsListSucceedAction(res); }), catchError(function () { return Observable.of(new FormsListFailedAction()); }));
    }
    FormsListEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FormsListEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], FormsListEffects.prototype, "GetForm$", void 0);
    __decorate([
        Effect(),
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
var EditFormEffects = /** @class */ (function () {
    function EditFormEffects(actions$, router, service) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.EditForm$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM)
            .pipe(map(function (action) { return action.payload; }), map(function (data) { return new EditFormStartAction(data); }));
        this.EditFormStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_START)
            .pipe(map(function (action) { return action.payload; }), switchMap(function (data) { return _this.service.update(data); }), map(function (formSchema) { return new EditFormSucceedAction(formSchema); }), catchError(function () { return Observable.of(new EditFormFailedAction()); }));
        this.UpdateFormsListStart$ = this.actions$
            .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
            .pipe(map(function (action) { return action.payload; }), map(function (formSchema) { return new UpdateFormSchemaAction(formSchema); }));
    }
    EditFormEffects.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EditFormEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: FormService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditForm$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], EditFormEffects.prototype, "EditFormStart$", void 0);
    __decorate([
        Effect(),
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
var /** @type {?} */ RoutingModule = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgsFormModule = /** @class */ (function () {
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
    function (config) {
        return {
            ngModule: RootNgsFormModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    };
    NgsFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatDatepickerModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatSelectModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatDividerModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule
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
var RootNgsFormModule = /** @class */ (function () {
    function RootNgsFormModule() {
    }
    RootNgsFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        NgsFormModule,
                        StoreModule.forFeature("form", FormReducers),
                        EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects]),
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

export { FormService, FormViewComponent, DynamicFieldDirective, AddFormApiModel, EditFormApiModel, FormListApiModel, FormSchemaModel, FieldConfig, NgsFormModule, RootNgsFormModule, AddFormComponent as ɵi, AddFormContainerComponent as ɵg, AddFormContainerComponent as ɵl, AddFormEffects as ɵbb, AddFormComponent as ɵn, FormArrayComponent as ɵp, FormControlComponent as ɵq, FormGroupComponent as ɵo, EditFormContainerComponent as ɵf, EditFormEffects as ɵbc, EditFormComponent as ɵh, RoutingModule as ɵbe, MODULE_CONFIG_TOKEN as ɵa, FormListContainerComponent as ɵj, FormListComponent as ɵk, FormsListEffects as ɵbd, reducer as ɵba, MainContainerComponent as ɵm, FormReducers as ɵb, FormConfigurationService as ɵd, CheckboxComponent as ɵs, ColorComponent as ɵu, DateFormInputControlComponent as ɵv, EmailComponent as ɵt, FileFormInputControlComponent as ɵw, NumberComponent as ɵy, SelectComponent as ɵr, TableComponent as ɵz, TextComponent as ɵx };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0uanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2FkZC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZWRpdC1mb3JtLmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1saXN0LmFwaS1tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1maWVsZC12YWxpZGF0b3IubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2ZpZWxkLWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tb2RlbHMvZm9ybS1zY2hlbWEubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS5jb25maWcudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvdGV4dC90ZXh0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tdmlldy9mb3JtLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vycy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0tY29udGFpbmVyL2VkaXQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZWRpdC9lZGl0LWZvcm0vZWRpdC1mb3JtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2FkZC9hZGQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvbGlzdC5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmVmZmVjdHMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvZm9ybS1yb3V0aW5nLm1vZHVsZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9mb3JtLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFkZEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRWRpdEZvcm1BcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHRfaWQ6IHN0cmluZztcclxuXHRcdG5hbWU6IHN0cmluZztcclxuXHRcdGZvcm06IGFueVtdO1xyXG5cdFx0ZXZlbnRzOiBhbnlbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goa2V5ID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF9pZDogdGhpcy5faWQsXHJcblx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRcdGZvcm06IHRoaXMuZm9ybSxcclxuXHRcdFx0XHRldmVudHM6IHRoaXMuZXZlbnRzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdGZvcm06IG5ldyBGb3JtQ29udHJvbCh7fSksXHJcblx0XHRcdFx0ZXZlbnRzOiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdGFjY2VwdDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqvDmMKow5jCqlwiKVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYW5jZWw6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0XHRzaG93OiBuZXcgRm9ybUNvbnRyb2woZmFsc2UpLFxyXG5cdFx0XHRcdFx0XHR0ZXh0OiBuZXcgRm9ybUNvbnRyb2woXCLDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIilcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgRm9ybUxpc3RBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3QgaW1wbGVtZW50cyBIdHRwUmVxdWVzdEJhc2VNb2RlbDxSZXF1ZXN0PiB7XHJcblx0XHROYW1lOiBzdHJpbmc7XHJcblx0XHRDb250cm9sczogb2JqZWN0W107XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWUgPSB7fSBhcyBGb3JtTGlzdEFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKChrZXkpID0+ICh0aGlzW2tleV0gPSBpbml0VmFsdWVba2V5XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdE5hbWU6IHRoaXMuTmFtZSxcclxuXHRcdFx0XHRDb250cm9sczogdGhpcy5Db250cm9sc1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0c3RhdGljIGdldCBmb3JtR3JvdXAoKSB7XHJcblx0XHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdENvbnRyb2xzOiBuZXcgRm9ybUdyb3VwKHt9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbFtdO1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7fVxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIHZhbGlkYXRpb24ge1xyXG5cdGFjdGl2ZTogYm9vbGVhbjtcclxuXHRtZXNzYWdlOiBzdHJpbmc7XHJcblx0dmFsdWU/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcblx0cmVxdWlyZWQ6IHZhbGlkYXRpb247XHJcblx0bWlubGVuZ3RoOiB2YWxpZGF0aW9uO1xyXG5cdGVtYWlsOiB2YWxpZGF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVxdWlyZWQgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCp8ObwozDmcKGIMOZwoHDm8KMw5nChMOYwq8gw5jCp8OZwoTDmMKyw5jCp8OZwoXDm8KMIMOYwqfDmMKzw5jCqlwiXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5taW5sZW5ndGggPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5rCqcOYwqrDmMKxw5nCh8OYwqdcIixcclxuXHRcdFx0dmFsdWU6IDVcclxuXHRcdH07XHJcblx0XHR0aGlzLmVtYWlsID0ge1xyXG5cdFx0XHRhY3RpdmU6IGZhbHNlLFxyXG5cdFx0XHRtZXNzYWdlOiBcIsOZwoTDmMK3w5nCgcOYwqcgw5jCp8ObwozDmcKFw5vCjMOZwoQgw5jCtcOYwq3Dm8KMw5jCrSDDmcKIw5jCp8OYwrHDmMKvIMOZwobDmcKFw5jCp8ObwozDm8KMw5jCr1wiXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9mb3JtLWZpZWxkLXZhbGlkYXRvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29uZmlnIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdWJ0eXBlOiBzdHJpbmc7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cGFyZW50VHlwZT86IFwiYXJyYXlcIiB8IFwiZ3JvdXBcIjtcclxuXHRmb3JtR3JvdXBQYXRoPzogc3RyaW5nO1xyXG5cdHBhdGg/OiBzdHJpbmc7XHJcblx0aW5wdXRUeXBlOiBcInNlbGVjdFwiIHwgXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJlbWFpbFwiIHwgXCJjb2xvclwiIHwgXCJjaGVja2JveFwiIHwgXCJ0YWJsZVwiO1xyXG5cdHZhbHVlPzogYW55O1xyXG5cdG9yZGVyPzogbnVtYmVyO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblx0fVtdO1xyXG5cdGRhdGFFbmRwb2ludD86IHN0cmluZztcclxuXHRvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHRmaWVsZHM/OiBGaWVsZENvbmZpZ1tdO1xyXG5cdHZhbGlkYXRvcjogVmFsaWRhdG9yO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgIT0gXCJjb250cm9sXCIpIHRoaXMuZmllbGRzID0gW107XHJcblx0XHR0aGlzLndpZHRoID0gMztcclxuXHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFNb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0Zm9ybTogRmllbGRDb25maWc7XHJcblx0ZXZlbnRzID0ge1xyXG5cdFx0YWNjZXB0OiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqvDmMKow5jCqlwiXHJcblx0XHR9LFxyXG5cdFx0Y2FuY2VsOiB7XHJcblx0XHRcdHNob3c6IGZhbHNlLFxyXG5cdFx0XHR0ZXh0OiBcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm0gPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHR9XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuX2lkID0gKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtTW9kdWxlQ29uZmlnIHtcclxuXHRlbnY/OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBib29sZWFuO1xyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBzdHJpbmc7XHJcblx0fTtcclxuXHRlbmRwb2ludHM/OiB7XHJcblx0XHRhZGRGb3JtOiBzdHJpbmc7XHJcblx0XHRlZGl0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0Rm9ybTogc3RyaW5nO1xyXG5cdFx0Z2V0TGlzdDogc3RyaW5nO1xyXG5cdFx0ZGVsZXRlRm9ybTogc3RyaW5nO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9ERUZBVUxUX0NPTkZJRzogRm9ybU1vZHVsZUNvbmZpZyA9IHtcclxuXHRlbnY6IHtcclxuXHRcdHByb2R1Y3Rpb246IGZhbHNlLFxyXG5cdFx0ZnJvbnRlbmRfc2VydmVyOiBcImZyb250ZW5kL3NlcnZlci9kaWQvbm90L3NldFwiXHJcblx0fSxcclxuXHRlbmRwb2ludHM6IHtcclxuXHRcdGFkZEZvcm06IFwiXCIsXHJcblx0XHRlZGl0Rm9ybTogXCJcIixcclxuXHRcdGdldEZvcm06IFwiXCIsXHJcblx0XHRnZXRMaXN0OiBcIlwiLFxyXG5cdFx0ZGVsZXRlRm9ybTogXCJcIlxyXG5cdH1cclxufTtcclxuZXhwb3J0IGNvbnN0IE1PRFVMRV9DT05GSUdfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48Rm9ybU1vZHVsZUNvbmZpZz4oXCJGb3JtTW9kdWxlQ29uZmlnXCIpO1xyXG4iLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Rm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCJAc291c2hpYW5zL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybU1vZHVsZUNvbmZpZyB9IGZyb20gXCIuLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi4vZm9ybS5jb25maWdcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB7XHJcblx0cHJpdmF0ZSBfY29uZmlnOiBGb3JtTW9kdWxlQ29uZmlnO1xyXG5cdGdldCBjb25maWcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnO1xyXG5cdH1cclxuXHRjb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChNT0RVTEVfREVGQVVMVF9DT05GSUcpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KE1PRFVMRV9DT05GSUdfVE9LRU4pIGNvbmZpZ0ZpbGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRywgY29uZmlnRmlsZSk7XHJcblx0XHR0aGlzLmNvbmZpZyQubmV4dCh0aGlzLl9jb25maWcpO1xyXG5cdFx0dGhpcy5zdG9yZS5zZWxlY3QoZ2V0Rm9ybU1vZHVsZUNvbmZpZykuc3Vic2NyaWJlKHVzZXJDb25maWcgPT4ge1xyXG5cdFx0XHRpZiAoIXVzZXJDb25maWcpIHJldHVybjtcclxuXHRcdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB1c2VyQ29uZmlnLkNvbmZpZyk7XHJcblx0XHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBFZGl0Rm9ybUFwaU1vZGVsLCBGb3JtTGlzdEFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9mb3JtLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHt9XHJcblxyXG5cdGFkZChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5hZGRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBBZGRGb3JtQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdGdldChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRGb3JtLCB7IF9pZCB9KSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0ICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZ2V0TGlzdCkpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBGb3JtTGlzdEFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHR1cGRhdGUoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtICE9IFwiXCIpXHJcblx0XHRcdC50YWtlKDEpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucHV0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5lZGl0Rm9ybSwgbW9kZWwuZ2V0UmVxdWVzdEJvZHkoKSlcclxuXHRcdFx0KVxyXG5cdFx0XHQubWFwKChyZXNwb25zZTogRWRpdEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0ZGVsZXRlKF9pZDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckXHJcblx0XHRcdC5maWx0ZXIoKGNvbmZpZykgPT4gY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtICE9IFwiXCIpXHJcblx0XHRcdC5zd2l0Y2hNYXAoKGNvbmZpZykgPT4gdGhpcy5odHRwLmdldChjb25maWcuZW52LmZyb250ZW5kX3NlcnZlciArIGNvbmZpZy5lbmRwb2ludHMuZGVsZXRlRm9ybSkpO1xyXG5cdH1cclxuXHRzZWxlY3RGb3JtQnlJZChfaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsPiB7XHJcblx0XHRjb25zdCBzdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSlcclxuXHRcdFx0LnBpcGUoZmlsdGVyKChmb3JtcykgPT4gZm9ybXMgIT0gbnVsbCksIG1hcCgoZm9ybXMpID0+IGZvcm1zLmZpbmQoKGZvcm0pID0+IGZvcm0uX2lkID09IF9pZCkpKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtU2NoZW1hTW9kZWwpID0+IHN1YmplY3QubmV4dChmb3JtU2NoZW1hTW9kZWwpKTtcclxuXHRcdHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1zZWxlY3RcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIj5cclxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb25maWcub3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57e29wdGlvbi5rZXl9fTwvbWF0LW9wdGlvbj5cclxuICAgIDwvbWF0LXNlbGVjdD5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNoZWNrYm94XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gICAgICAgIHt7Y29uZmlnLnRpdGxlfX1cclxuICAgIDwvbWF0LWNoZWNrYm94PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZW1haWxcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWNvbG9yXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwic2NoZW1hLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJzY2hlbWEudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cInNjaGVtYS5uYW1lXCI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2xsZWN0aW9uc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC10YWJsZVwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIiAqbmdJZj1cInJlYWR5XCI+XHJcbiAgICA8bWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XHJcbiAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+XHJcbiAgICAgICAgICA8bWF0LWNoZWNrYm94IChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IHNlbGVjdGlvbi50b2dnbGUocm93KSA6IG51bGxcIlxyXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XHJcbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbCBvZiBmaWxlZERpc3BsYXllZENvbHVtbnNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICBbbWF0Q29sdW1uRGVmXT1cImNvbFwiPlxyXG4gICAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x9fSA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2xdfX0gPC9tYXQtY2VsbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC9tYXQtaGVhZGVyLWNlbGw+XHJcbiAgICAgICAgPG1hdC1jZWxsIGNsYXNzPSdsZWZ0LWFsaWduJyAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cIsOYwqfDmcKGw5jCqsOYwq7DmMKnw5jCqFwiPmFycm93X2JhY2s8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2VsbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cclxuICAgICAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgKGNsaWNrKT1cInNlbGVjdGlvbi50b2dnbGUocm93KVwiPjwvbWF0LXJvdz5cclxuXHJcbiAgICA8L21hdC10YWJsZT5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48IS0tIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gIFxyXG4gIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwic2NoZW1hLm5hbWVcIiBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICBcclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZW1haWw/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLmVtYWlsLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG48L21hdC1mb3JtLWZpZWxkPiAtLT5cclxuICBcclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoc2NoZW1hLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KHNjaGVtYS5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdHJlYWR5OiBib29sZWFuO1xyXG5cdGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cdGZpbGVkRGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcblxyXG5cdHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMuc2NoZW1hLmRhdGFFbmRwb2ludCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5maWxlZERpc3BsYXllZENvbHVtbnMgPSBkYXRhLmZpbGVkRGlzcGxheWVkQ29sdW1ucztcclxuXHRcdFx0dGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+KGRhdGEuZGF0YVNvdXJjZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXHJcblx0aXNBbGxTZWxlY3RlZCgpIHtcclxuXHRcdGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xyXG5cdFx0dGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xyXG5cdFx0XHRbdGhpcy5zY2hlbWEubmFtZV06IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXHJcblx0XHR9KTtcclxuXHRcdGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XHJcblx0XHRyZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XHJcblx0fVxyXG5cclxuXHQvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xyXG5cdG1hc3RlclRvZ2dsZSgpIHtcclxuXHRcdHRoaXMuaXNBbGxTZWxlY3RlZCgpID8gdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtbnVtYmVyXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2ICBbZm9ybUdyb3VwXT1cImZvcm1cIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRleHRcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cclxuXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9tYXQtZm9ybS1maWVsZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gRm9ybXNMaXN0QWN0aW9uVHlwZXMge1xyXG5cdEZPUk1TX0xJU1QgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUXCIsXHJcblx0Rk9STVNfTElTVF9TVEFSVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1RBUlRcIixcclxuXHRGT1JNU19MSVNUX1NVQ0NFRUQgPSBcIltGT1JNXVtMSVNUXSBGT1JNU19MSVNUX1NVQ0NFRURcIixcclxuXHRGT1JNU19MSVNUX0ZBSUxFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfRkFJTEVEXCIsXHJcblx0QUREX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gQUREX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfVVBEQVRFID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfVVBEQVRFXCIsXHJcblx0R0VUX0ZPUk1fU0NIRU1BID0gXCJbRk9STV1bTElTVF0gR0VUX0ZPUk1fU0NIRU1BXCIsXHJcblx0Rk9STV9TQ0hFTUFfRkVUQ0hFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1fU0NIRU1BX0ZFVENIRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDtcclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0U3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWxbXSkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9VUERBVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkFERF9GT1JNX1NDSEVNQTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBHZXRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1zTGlzdEFjdGlvbnMgPVxyXG5cdHwgRm9ybXNMaXN0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdGFydEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0U3VjY2VlZEFjdGlvblxyXG5cdHwgRm9ybXNMaXN0RmFpbGVkQWN0aW9uXHJcblx0fCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBBZGRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBHZXRGb3JtU2NoZW1hQWN0aW9uXHJcblx0fCBGb3JtU2NoZW1hRmVjaGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtZGF0ZVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8IS0tIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj4gLS0+XHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFttYXREYXRlcGlja2VyXT1cIl9kYXRlcGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cIl9kYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjwhLS0gXHJcblxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IFtAZmlsZWRBbmltYXRpb25dPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiIFsobmdDbGFzcyldPVwibW9kZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2x0aXAgbWQtMThcIiAqbmdJZj1cInRvb2x0aXBcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtYm94XCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IDpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3soRGlzcGxheVZhbHVlJCB8IGFzeW5jIHwgcGVyc2lhbkRhdGUpfX0gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1maWxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8IS0tIDxpbnB1dCBtYXRJbnB1dCBbaWRdPVwiY29uZmlnLm5hbWVcIiBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj4gLS0+XHJcbiAgPGlucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/LnJlcXVpcmVkXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IucmVxdWlyZWQubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPCEtLSA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e2NvbmZpZy52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+IC0tPlxyXG5cclxuICA8IS0tIDxkaXYgKm5nSWY9XCJmb3JtLmdldChjb25maWcubmFtZSkuaW52YWxpZCAmJiAoZm9ybS5nZXQoY29uZmlnLm5hbWUpLmRpcnR5IHx8IGZvcm0uZ2V0KGNvbmZpZy5uYW1lKS50b3VjaGVkKVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgPC9kaXY+IC0tPlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tIFxyXG5cclxuPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBbQGZpbGVkQW5pbWF0aW9uXT1cIm1vZGVcIj5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJmaXRcIiBbKG5nQ2xhc3MpXT1cIm1vZGVcIj5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cIl9kYXRlcGlja2VyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sTmFtZVwiPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cIl9kYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjX2RhdGVwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJ0b29sdGlwIG1kLTE4XCIgKm5nSWY9XCJ0b29sdGlwXCIgW21hdFRvb2x0aXBdPVwidG9vbHRpcFwiPmhlbHA8L21hdC1pY29uPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLWJveFwiPiBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgICAgICB7eyBwbGFjZWhvbGRlciB9fSA6XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgIHt7KERpc3BsYXlWYWx1ZSQgfCBhc3luYyB8IHBlcnNpYW5EYXRlKX19IFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiAtLT5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Vmlld0NoaWxkLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdENvbXBpbGVyLFxyXG5cdFJlZmxlY3RpdmVJbmplY3RvcixcclxuXHROZ01vZHVsZSxcclxuXHRJbnB1dCxcclxuXHRPdXRwdXQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdE9uQ2hhbmdlcyxcclxuXHREaXJlY3RpdmUsXHJcblx0VHlwZSxcclxuXHRPbkRlc3Ryb3lcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3JtQXJyYXksIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNlbGVjdENvbXBvbmVudCxcclxuXHRFbWFpbENvbXBvbmVudCxcclxuXHRDb2xvckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRUZXh0Q29tcG9uZW50LFxyXG5cdFRhYmxlQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZywgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgY2FyZFwiIGNsYXNzPVwibmdzLWR5bmFtaWMtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cImFjY2VwdGVkKClcIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgIHt7KHNjaGVtYSQgfCBhc3luYyk/Lm5hbWV9fVxyXG4gICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjI1cHhcIj5cclxuICAgICAgPGRpdiAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIGR5bmFtaWNGaWVsZCAgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnRleHR9fTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQuc2hvd1wiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7KHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5hY2NlcHQudGV4dH19PC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcblxyXG48Zm9ybSAqbmdJZj1cImZvcm1Hcm91cENyZWF0ZWQgJiYgIWNhcmRcIiBjbGFzcz1cIm5ncy1keW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgPGRpdj5cclxuICAgIDxoMz5cclxuICAgICAge3soc2NoZW1hJCB8IGFzeW5jKT8ubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCI+XHJcbiAgICAgIDxkaXYgICpuZ0Zvcj1cImxldCBmaWVsZCBvZiAoc2NoZW1hJCB8IGFzeW5jKT8uZm9ybS5maWVsZHM7XCIgW2Z4RmxleF09XCJmaWVsZC53aWR0aCAqIDEwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBkeW5hbWljRmllbGQgIFtjb25maWddPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybUdyb3VwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuY2FuY2VsLnNob3dcIiAoY2xpY2spPVwiY2FuY2VsLmVtaXQoKVwiIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgKm5nSWY9XCIoc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC5zaG93XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3soc2NoZW1hJCB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+YCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHR1bnN1YnNjcmliZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblx0QE91dHB1dCgpIGFjY2VwdCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1Hcm91cD4oKTtcclxuXHRASW5wdXQoKSBsb2NhbDtcclxuXHRASW5wdXQoKSBjYXJkID0gZmFsc2U7XHJcblx0QElucHV0KClcclxuXHRzZXQgaWQoaWQ6IHN0cmluZykge1xyXG5cdFx0aWYgKCF0aGlzLmxvY2FsKSB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSk7XHJcblx0XHR0aGlzLnNlcnZpY2VcclxuXHRcdFx0LnNlbGVjdEZvcm1CeUlkKGlkKVxyXG5cdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoc2NoZW1hID0+IHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKVxyXG5cdHNldCBzY2hlbWEoc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc2NoZW1hJC5uZXh0KHNjaGVtYSk7XHJcblx0fVxyXG5cdF9pZDogc3RyaW5nO1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdGZvcm1Hcm91cENyZWF0ZWQgPSBmYWxzZTtcclxuXHRzY2hlbWEkOiBCZWhhdmlvclN1YmplY3Q8Rm9ybVNjaGVtYU1vZGVsPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+XHJcblx0KSB7XHJcblx0XHR0aGlzLnNjaGVtYSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHVuZGVmaW5lZCk7XHJcblx0XHR0aGlzLnNjaGVtYSQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpLnN1YnNjcmliZShzY2hlbWEgPT4ge1xyXG5cdFx0XHRpZiAoIXNjaGVtYSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuY3JlYXRlRnJvbShzY2hlbWEuZm9ybSkgYXMgRm9ybUdyb3VwO1xyXG5cdFx0XHRpZiAoIXNjaGVtYS5mb3JtLm5hbWUpIHJldHVybjtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXBDcmVhdGVkID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG5cdH1cclxuXHRnZW5lcmF0ZShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUZyb20oZGF0YTogRmllbGRDb25maWcsIHBhcmVudFBhdGggPSBcIlwiKTogQWJzdHJhY3RDb250cm9sIHtcclxuXHRcdGlmIChkYXRhLnR5cGUgPT0gXCJjb250cm9sXCIpIHtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHQvLyBwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0dmFyIGZvcm1Hcm91cFBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHZhbGlkYXRvcnMgPSBbXTtcclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLnJlcXVpcmVkICYmIGRhdGEudmFsaWRhdG9yLnJlcXVpcmVkLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoICYmIGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgoZGF0YS52YWxpZGF0b3IubWlubGVuZ3RoLnZhbHVlKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLmVtYWlsICYmIGRhdGEudmFsaWRhdG9yLmVtYWlsLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHZhbGlkYXRvcnMucHVzaChWYWxpZGF0b3JzLmVtYWlsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgY3RyID0gbmV3IEZvcm1Db250cm9sKGRhdGEudmFsdWUsIHZhbGlkYXRvcnMpO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5mb3JtR3JvdXBQYXRoID0gZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0cmV0dXJuIGN0cjtcclxuXHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHR2YXIgZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcblx0XHRcdGlmIChkYXRhLnBhcmVudFR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYSA9IGRhdGE7XHJcblx0XHRcdChmb3JtR3JvdXAgYXMgYW55KS5zY2hlbWEucGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdGRhdGEuZmllbGRzLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJncm91cFwiO1xyXG5cdFx0XHRcdGZvcm1Hcm91cC5hZGRDb250cm9sKGl0ZW0ubmFtZSwgdGhpcy5jcmVhdGVGcm9tKGl0ZW0sIHBhcmVudFBhdGgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmb3JtR3JvdXA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgZm9ybUFycmF5OiBGb3JtQXJyYXkgPSBuZXcgRm9ybUFycmF5KFtdKTtcclxuXHRcdFx0cGFyZW50UGF0aCA9XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9PSBcIlwiID8gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWUgOiBgJHtwYXJlbnRQYXRofS5jb250cm9scy4keyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfWA7XHJcblx0XHRcdChmb3JtQXJyYXkgYXMgYW55KS5zY2hlbWEgPSBkYXRhO1xyXG5cdFx0XHQoZm9ybUFycmF5IGFzIGFueSkuc2NoZW1hLnBhdGggPSBwYXJlbnRQYXRoO1xyXG5cdFx0XHRkYXRhLmZpZWxkcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImFycmF5XCI7XHJcblx0XHRcdFx0aXRlbS5uYW1lID0gaWR4LnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0Zm9ybUFycmF5LmNvbnRyb2xzLnB1c2godGhpcy5jcmVhdGVGcm9tKGl0ZW0sIHBhcmVudFBhdGgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBmb3JtQXJyYXk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhY2NlcHRlZCgpIHtcclxuXHRcdHRoaXMuYWNjZXB0LmVtaXQodGhpcy5mb3JtR3JvdXApO1xyXG5cdH1cclxuXHRjYW5jZWxlZCgpIHtcclxuXHRcdHRoaXMuY2FuY2VsLmVtaXQodGhpcy5mb3JtR3JvdXApO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgY29tcG9uZW50czogeyBbdHlwZTogc3RyaW5nXTogVHlwZTxGaWVsZD4gfSA9IHtcclxuXHRjaGVja2JveDogQ2hlY2tib3hDb21wb25lbnQsXHJcblx0dGV4dDogVGV4dENvbXBvbmVudCxcclxuXHRkYXRlOiBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRmaWxlOiBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHR0YWJsZTogVGFibGVDb21wb25lbnQsXHJcblx0Y29sb3I6IENvbG9yQ29tcG9uZW50LFxyXG5cdGVtYWlsOiBFbWFpbENvbXBvbmVudCxcclxuXHRzZWxlY3Q6IFNlbGVjdENvbXBvbmVudFxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6IFwiW2R5bmFtaWNGaWVsZF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgRmllbGQsIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuXHRASW5wdXQoKSBjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cclxuXHRASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb21wb25lbnQ6IENvbXBvbmVudFJlZjxGaWVsZD47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG5cdG5nT25DaGFuZ2VzKCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpZiAoIWNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSkge1xyXG5cdFx0XHRjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmpvaW4oXCIsIFwiKTtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dGhpcy5jb25maWcuaW5wdXRUeXBlfSkuXHJcblx0XHQgIFN1cHBvcnRlZCB0eXBlczogJHtzdXBwb3J0ZWRUeXBlc31gXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PEZpZWxkPihjb21wb25lbnRzW3RoaXMuY29uZmlnLmlucHV0VHlwZV0pO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxuXHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyByZXNwb25zZVN0YXR1c1R5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0QWN0aW9uVHlwZXMsIEZvcm1zTGlzdEFjdGlvbnMgfSBmcm9tIFwiLi9saXN0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHN0YXR1czogcmVzcG9uc2VTdGF0dXNUeXBlcztcclxuXHRkYXRhOiBGb3JtU2NoZW1hTW9kZWxbXTtcclxufVxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRzdGF0dXM6IFwicHJpc3RpbmVcIixcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBGb3Jtc0xpc3RBY3Rpb25zKTogU3RhdGUge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdHN0YXR1czogXCJkaXJ0eVwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwicGVuZGluZ1wiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1VDQ0VFRDoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHRcdHN0YXR1czogXCJzdWNjZWVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9GQUlMRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZmFpbGVkXCJcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STV9TQ0hFTUFfVVBEQVRFOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5BRERfRk9STV9TQ0hFTUE6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ6IHtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdHZhciBlbnRpdHlJZHggPSBzdGF0ZS5kYXRhLmZpbmRJbmRleChmb3JtID0+IGZvcm0uX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmIChlbnRpdHlJZHggPiAtMSkge1xyXG5cdFx0XHRcdGRhdGFbZW50aXR5SWR4XSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGFbZW50aXR5SWR4XSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBkYXRhXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdldFN0YXR1cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnN0YXR1cztcclxuIiwiaW1wb3J0ICogYXMgbGlzdCBmcm9tIFwiLi4vbGlzdC9saXN0LnJlZHVjZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1TdGF0ZSB7XHJcblx0bGlzdDogbGlzdC5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1SZWR1Y2VycyA9IHtcclxuXHRsaXN0OiBsaXN0LnJlZHVjZXJcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFpbkNvbnRhaW5lclN0YXRlIHtcclxuXHRcImZvcm1cIjogRm9ybVN0YXRlO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1ncm91cFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhbm9IZWFkZXJcIj5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnRpdGxlXCIgcGxhY2Vob2xkZXI9XCLDmMK5w5nChsOZwojDmMKnw5nChlwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEpXCI+IGFkZEZvcm1Hcm91cCA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPiBhZGRGb3JtQXJyYXkgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzY2hlbWEuZmllbGRzO2xldCBpID0gaW5kZXhcIj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgPCEtLSA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PiAtLT5cclxuICAgICAgICA8YXBwLWZvcm0tY29udHJvbCAqbmdTd2l0Y2hDYXNlPVwiJ2NvbnRyb2wnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiIChkZWxldGUpPVwiZGVsZXRlRm9ybUdyb3VwKGkpXCI+PC9hcHAtZm9ybS1jb250cm9sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBJbnB1dCgpIG5vSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHRoaXMuc2NoZW1hLmlkID0gdGhpcy5zY2hlbWEuaWQgKyAxO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG5cdGRlbGV0ZUZvcm1Hcm91cChpZHg6IG51bWJlcikge1xyXG5cdFx0dGhpcy5zY2hlbWEuZmllbGRzLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1hcnJheVwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkPlxyXG4gIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYSlcIj5hZGRGb3JtR3JvdXA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hKVwiPmFkZEZvcm1BcnJheTwvYnV0dG9uPlxyXG4gICAgICA8IS0tIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+IC0tPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNjaGVtYS5maWVsZHNcIj5cclxuICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgIDwhLS0gPGFwcC1mb3JtLWNvbnRyb2wgKm5nU3dpdGNoQ2FzZT1cIidjb250cm9sJ1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoJGV2ZW50KVwiPjwvYXBwLWZvcm0tY29udHJvbD4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbjwvbWF0LWNhcmQ+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5Q29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRGb3JtR3JvdXAocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGdyb3VwID0gbmV3IEZpZWxkQ29uZmlnKFwiZ3JvdXBcIik7XHJcblx0XHRncm91cC5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goZ3JvdXApO1xyXG5cdFx0cmV0dXJuIGdyb3VwO1xyXG5cdH1cclxuXHRhZGRGb3JtQXJyYXkocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGFycmF5ID0gbmV3IEZpZWxkQ29uZmlnKFwiYXJyYXlcIik7XHJcblx0XHRhcnJheS5maWVsZHMgPSBbXTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goYXJyYXkpO1xyXG5cdFx0cmV0dXJuIGFycmF5O1xyXG5cdH1cclxuXHRhZGRGb3JtQ29udHJvbChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IG5ldyBGaWVsZENvbmZpZyhcImNvbnRyb2xcIik7XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGNvbnRyb2wpO1xyXG5cdFx0cmV0dXJuIGNvbnRyb2w7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtZm9ybS1jb250cm9sXCIsXHJcblx0dGVtcGxhdGU6IGAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxyXG4gICAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgICA8bWF0LXBhbmVsLXRpdGxlPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJkZWxldGUuZW1pdCgpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiIGljb24tYnV0dG9uXCI+ZGVsZXRlX2ZvcmV2ZXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge3tzY2hlbWEubmFtZX19XHJcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxyXG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS5uYW1lXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEudGl0bGVcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIi8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIFxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIklucHV0IFR5cGVcIj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGFibGVcIj50YWJsZTwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+c2VsZWN0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0ZXh0XCI+dGV4dDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwibnVtYmVyXCI+bnVtYmVyPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbWFpbFwiPmVtYWlsPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjb2xvclwiPmNvbG9yPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyYWRpb1wiPnJhZGlvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPmNoZWNrYm94PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEud2lkdGhcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwid2lkdGhcIj5cclxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygd2lkdGhcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3RhYmxlJ1wiIFtmb3JtR3JvdXBdPVwidGFibGVPcHRpb25zXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF0YUVuZHBvaW50XCIgcGxhY2Vob2xkZXI9XCJkYXRhRW5kcG9pbnRcIi8+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmlucHV0VHlwZT09J3NlbGVjdCdcIj5cclxuICAgICAgICBbb3B0aW9uc11cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRPcHRpb24oKVwiPis8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJpbnNlcnRPcHRpb25zKClcIj5pbnNlcnQ8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9ucy5jb250cm9scztpbmRleCBhcyBpXCI+XHJcbiAgICAgICAgICB7e2l9fVxyXG4gICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm9wdGlvbnMuY29udHJvbHNbaV1cIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cImtleVwiIHBsYWNlaG9sZGVyPVwia2V5XCIvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIiBwbGFjZWhvbGRlcj1cInZhbHVlXCIvPlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmVcIj7DmMKnw5jCrMOYwqjDmMKnw5jCscObwow8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2VcIiAgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5lbWFpbC5hY3RpdmVcIj7DmMKnw5vCjMOZwoXDm8KMw5nChDwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZVwiICBwbGFjZWhvbGRlcj1cIsOZwr7Dm8KMw5jCusOYwqfDmcKFXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlXCI+w5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5jCp8OawqnDmMKqw5jCsTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IubWlubGVuZ3RoLm1lc3NhZ2VcIiAgcGxhY2Vob2xkZXI9XCLDmcK+w5vCjMOYwrrDmMKnw5nChVwiLz5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgudmFsdWVcIiAgcGxhY2Vob2xkZXI9XCLDmMKqw5jCucOYwq/DmMKnw5jCryDDmMKtw5jCr8OYwqfDmcKCw5nChCDDmsKpw5jCp8OYwrHDmMKnw5rCqcOYwqrDmMKxXCIvPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZpZWxkQ29uZmlnO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHdpZHRoID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCBdO1xyXG5cdG9wdGlvbnMgPSBuZXcgRm9ybUFycmF5KFtcclxuXHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdH0pXHJcblx0XSk7XHJcblx0dGFibGVPcHRpb25zID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRkYXRhRW5kcG9pbnQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdH0pO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdGlmIChbIHRoaXMuc2NoZW1hLm5hbWUsIHRoaXMuc2NoZW1hLnRpdGxlLCB0aGlzLnNjaGVtYS5pbnB1dFR5cGUgXS5zb21lKGl0ZW0gPT4gIWl0ZW0pKSByZXR1cm4gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJ0YWJsZVwiKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hLm9wdGlvbnMgPSB0aGlzLnRhYmxlT3B0aW9ucy52YWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5zY2hlbWEuaW5wdXRUeXBlID09IFwic2VsZWN0XCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2hhbmdlcy5lbWl0KCk7XHJcblx0fVxyXG5cclxuXHRhZGRPcHRpb24oKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMucHVzaChcclxuXHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0a2V5OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHR2YWx1ZTogbmV3IEZvcm1Db250cm9sKClcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cdHJlbW92ZU9wdGlvbihpKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMuY29udHJvbHMuc3BsaWNlKGksIDEpO1xyXG5cdH1cclxuXHRpbnNlcnRPcHRpb25zKCkge1xyXG5cdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMub3B0aW9ucy52YWx1ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBFZGl0Rm9ybUFjdGlvblR5cGVzIHtcclxuXHRFRElUX0ZPUk0gPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1cIixcclxuXHRFRElUX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtFRElUXSBFRElUX0ZPUk1fU1RBUlRcIixcclxuXHRFRElUX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVUNDRUVEXCIsXHJcblx0RURJVF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9GQUlMRURcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRWRpdEZvcm1BY3Rpb25zID0gRWRpdEZvcm1BY3Rpb24gfCBFZGl0Rm9ybVN0YXJ0QWN0aW9uIHwgRWRpdEZvcm1TdWNjZWVkQWN0aW9uIHwgRWRpdEZvcm1GYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gQWRkRm9ybUFjdGlvblR5cGVzIHtcclxuXHRBRERfRk9STSA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fUFJPRklMRVwiLFxyXG5cdEFERF9GT1JNX1NUQVJUID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9TVEFSVFwiLFxyXG5cdEFERF9GT1JNX1NVQ0NFRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NVQ0NFRURcIixcclxuXHRBRERfRk9STV9GQUlMRUQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU3VjY2VlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX0ZBSUxFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWRkRm9ybUFjdGlvbnMgPSBBZGRGb3JtQWN0aW9uIHwgQWRkRm9ybVN0YXJ0QWN0aW9uIHwgQWRkRm9ybVN1Y2NlZWRBY3Rpb24gfCBBZGRGb3JtRmFpbGVkQWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi8uLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vYWRkLWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBBZGRGb3JtU2NoZW1hQWN0aW9uLCBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bmdzLWZvcm0tYWRkIFxyXG5cdFx0XHRcdFx0W3NjaGVtYV09XCJzY2hlbWFcIiBcclxuXHRcdFx0XHRcdChjaGFuZ2VzKT1cInVwZGF0ZV9zY2hlbWEoJGV2ZW50KVwiIFxyXG5cdFx0XHRcdFx0KHN1Ym1pdGVkKT1hZGQoJGV2ZW50KVxyXG5cdFx0XHRcdD48L25ncy1mb3JtLWFkZD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sIHB1YmxpYyBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc2NoZW1hID0gbmV3IEZvcm1TY2hlbWFNb2RlbCgpO1xyXG5cdFx0dGhpcy5zY2hlbWEuaW5pdCgpO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkRm9ybVNjaGVtYUFjdGlvbih0aGlzLnNjaGVtYSkpO1xyXG5cdH1cclxuXHRhZGQoZm9ybTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRGb3JtQWN0aW9uKGZvcm0pKTtcclxuXHR9XHJcblx0dXBkYXRlX3NjaGVtYShmb3JtOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24oZm9ybSkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQXBpTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFjdGlvbiB9IGZyb20gXCIuLi8uLi9lZGl0L2VkaXQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBHZXRGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxlZGl0LWZvcm1cclxuXHRcdFx0XHRcdFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuXHRcdFx0XHRcdFtzY2hlbWFdPVwic2NoZW1hXCJcclxuXHRcdFx0XHRcdChjaGFuZ2VzKT1cInVwZGF0ZV9zY2hlbWEoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHQoc3VibWl0ZWQpPVwidXBkYXRlKCRldmVudClcIj5cclxuXHRcdFx0XHQ8L2VkaXQtZm9ybT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEFkZEZvcm1Db250YWluZXJDb21wb25lbnQge1xyXG5cdGZvcm1Hcm91cCA9IEVkaXRGb3JtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHVibGljIHN0b3JlOiBTdG9yZTxNYWluQ29udGFpbmVyU3RhdGU+KSB7XHJcblx0XHRzdXBlcihzdG9yZSwgc2VydmljZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucm91dGUucGFyYW1zXHJcblx0XHRcdC5tYXAoKHBhcmFtcykgPT4gcGFyYW1zW1wiX2lkXCJdKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChpZCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Rm9ybVNjaGVtYUFjdGlvbihpZCkpKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtc1xyXG5cdFx0XHQubWFwKChwYXJhbXMpID0+IHBhcmFtc1tcIl9pZFwiXSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoaWQpID0+IHRoaXMuc2VydmljZS5zZWxlY3RGb3JtQnlJZChpZCkpXHJcblx0XHRcdC5maWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gbnVsbClcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN1YnNjcmliZSgoZm9ybVNjaGVtYSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2NoZW1hID0gZm9ybVNjaGVtYTtcclxuXHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGZvcm1TY2hlbWEpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShkYXRhKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0Rm9ybUFjdGlvbihkYXRhKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCwgQWRkRm9ybUFwaU1vZGVsLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWFkZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiICpuZ0lmPVwic2NoZW1hXCI+XHJcbiAgPGRpdiBbZnhGbGV4XT1cIjUwXCIgKm5nSWY9XCJmb3JtR3JvdXBcIj5cclxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgIDxtYXQtY2FyZD5cclxuICAgICAgICA8bWF0LWNhcmQtdGl0bGU+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5nCgcOYwrHDmcKFIMOYwqzDmMKvw5vCjMOYwq88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwiw5nChsOYwqfDmcKFIMOZwoHDmMKxw5nChVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXR0b24tcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQXJyYXkoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gYXJyYXk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gY29udHJvbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZD5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxkaXYgW25nU3dpdGNoXT1cInNjaGVtYS5mb3JtPy50eXBlXCI+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiBub0hlYWRlcj1cInRydWVcIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZm9ybS5nZW5lcmF0ZShzY2hlbWEpXCI+w5jCp8ObwozDmMKsw5jCp8OYwq8gw5nCgcOYwrHDmcKFPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZW1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPsOYwqvDmMKow5jCqjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuXHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuYWNjZXB0XCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5jCp8ObwozDm8KMw5jCrzwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKqw5jCp8ObwozDm8KMw5jCr1wiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybUdyb3VwLmNvbnRyb2xzLmV2ZW50cykuY29udHJvbHMuY2FuY2VsXCI+XHJcbiAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoE8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBbZnhGbGV4XT1cIjUwXCI+XHJcbiAgICA8bmdzLWZvcm0tdmlldyBbbG9jYWxdPSd0cnVlJyBbaWRdPVwic2NoZW1hLl9pZFwiPjwvbmdzLWZvcm0tdmlldz5cclxuICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGb3JtU2NoZW1hTW9kZWw7XHJcblx0QElucHV0KCkgZm9ybUdyb3VwID0gQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdEBPdXRwdXQoKSBzdWJtaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0ZW1pdCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBmb3JtOiB0aGlzLnNjaGVtYS5mb3JtIH0pO1xyXG5cdFx0dGhpcy5zdWJtaXRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y2hhbmdlZCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoeyBmb3JtOiB0aGlzLnNjaGVtYS5mb3JtIH0pO1xyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHRjaGFuZ2VPcmRlcigkZXZlbnQpIHt9XHJcblxyXG5cdGFkZEZvcm1Hcm91cChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgZ3JvdXAgPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHRcdGdyb3VwLmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChncm91cCk7XHJcblx0XHRyZXR1cm4gZ3JvdXA7XHJcblx0fVxyXG5cdGFkZEZvcm1BcnJheShyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgYXJyYXkgPSBuZXcgRmllbGRDb25maWcoXCJhcnJheVwiKTtcclxuXHRcdGFycmF5LmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChhcnJheSk7XHJcblx0XHRyZXR1cm4gYXJyYXk7XHJcblx0fVxyXG5cdGFkZEZvcm1Db250cm9sKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gbmV3IEZpZWxkQ29uZmlnKFwiY29udHJvbFwiKTtcclxuXHRcdHJvb3QuZmllbGRzLnB1c2goY29udHJvbCk7XHJcblx0XHRyZXR1cm4gY29udHJvbDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWRkL2FkZC1mb3JtXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJlZGl0LWZvcm1cIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cInNjaGVtYVwiPlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChSDDmMKsw5jCr8ObwozDmMKvPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIsOZwobDmMKnw5nChSDDmcKBw5jCscOZwoVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hLmZvcm0pXCI+QWRkIGZvcm0gZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGFycmF5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgICA8bWF0LWNhcmQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiPlxyXG4gICAgICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cInNjaGVtYS5mb3JtXCIgbm9IZWFkZXI9XCJ0cnVlXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWFycmF5ICpuZ1N3aXRjaENhc2U9XCInYXJyYXknXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgICAgICA8IS0tIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIiRhbnkoZm9ybSkuZ2VuZXJhdGUoc2NoZW1hKVwiPsOYwqfDm8KMw5jCrMOYwqfDmMKvIMOZwoHDmMKxw5nChTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcblxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmFjY2VwdFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCqsOYwqfDm8KMw5vCjMOYwq88L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmcKFw5jCqsOZwoYgw5jCqsOYwqfDm8KMw5vCjMOYwq9cIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmNhbmNlbFwiPlxyXG4gICAgICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBmb3JtQ29udHJvbE5hbWU9XCJzaG93XCI+w5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgW2Z4RmxleF09XCI1MFwiPlxyXG4gICAgPG5ncy1mb3JtLXZpZXcgW2xvY2FsXT0ndHJ1ZScgW2lkXT1cInNjaGVtYS5faWRcIj48L25ncy1mb3JtLXZpZXc+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQ29tcG9uZW50IGV4dGVuZHMgQWRkRm9ybUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBhbnk7XHJcblx0ZW1pdCgpIHtcclxuXHRcdGlmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHJldHVybiB0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGZvcm0tbGlzdFxyXG5cdFx0XHRcdFx0W2RhdGFdPVwiZGF0YSRcIj5cclxuXHRcdFx0XHQ8L2Zvcm0tbGlzdD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtTGlzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0ZGF0YSQ6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+O1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0dGhpcy5kYXRhJCA9IHRoaXMuc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm0ubGlzdC5kYXRhKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBGb3Jtc0xpc3RBY3Rpb24oKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiZm9ybS1saXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRXcmFwIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZHMtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIChkYXRhJCB8IGFzeW5jKVwiIGZ4RmxleD1cIjUxXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ2VkaXQnICwgIGl0ZW0uX2lkXVwiPlxyXG4gICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJlZGl0IGZvcm1cIj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1MaXN0Q29tcG9uZW50IHtcclxuXHRASW5wdXQoXCJkYXRhXCIpIGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBNYWluQ29udGFpbmVyUmVkdWNlciBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJSZWR1Y2VyLk1haW5Db250YWluZXJTdGF0ZT4pIHt9XHJcbn1cclxuIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFjdGlvblR5cGVzLCBBZGRGb3JtU3RhcnRBY3Rpb24sIEFkZEZvcm1TdWNjZWVkQWN0aW9uLCBBZGRGb3JtRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vYWRkLWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgQWRkRm9ybVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmFkZChkYXRhKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEFkZEZvcm1TdWNjZWVkQWN0aW9uKCkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IE9ic2VydmFibGUub2YobmV3IEFkZEZvcm1GYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7XHJcblx0Rm9ybXNMaXN0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdEFjdGlvblR5cGVzLFxyXG5cdEZvcm1zTGlzdEFjdGlvbnMsXHJcblx0Rm9ybXNMaXN0RmFpbGVkQWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN0YXJ0QWN0aW9uLFxyXG5cdEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24sXHJcblx0Rm9ybVNjaGVtYUZlY2hlZEFjdGlvblxyXG59IGZyb20gXCIuL2xpc3QuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybXNMaXN0RWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0UHJvZmlsZVJlcXVlc3QkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVCkubWFwKGRhdGEgPT4gbmV3IEZvcm1zTGlzdFN0YXJ0QWN0aW9uKCkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRHZXRGb3JtJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuR0VUX0ZPUk1fU0NIRU1BKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoaWQgPT4gdGhpcy5zZXJ2aWNlLmdldChpZCkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbihmb3JtU2NoZW1hKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldF9mb3Jtc19saXN0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRm9ybXNMaXN0QWN0aW9uVHlwZXMuRk9STVNfTElTVF9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4gdGhpcy5zZXJ2aWNlLmdldExpc3QoKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24ocmVzKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgRm9ybXNMaXN0RmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRFZGl0Rm9ybUFjdGlvblR5cGVzLFxyXG5cdEVkaXRGb3JtU3RhcnRBY3Rpb24sXHJcblx0RWRpdEZvcm1TdWNjZWVkQWN0aW9uLFxyXG5cdEVkaXRGb3JtRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZWRpdC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi9saXN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdEZvcm0kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgRWRpdEZvcm1TdGFydEFjdGlvbihkYXRhKSkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybVN0YXJ0JCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRcdHN3aXRjaE1hcCgoZGF0YTogRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSA9PiB0aGlzLnNlcnZpY2UudXBkYXRlKGRhdGEpKSxcclxuXHRcdFx0bWFwKGZvcm1TY2hlbWEgPT4gbmV3IEVkaXRGb3JtU3VjY2VlZEFjdGlvbihmb3JtU2NoZW1hKSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKCkgPT4gT2JzZXJ2YWJsZS5vZihuZXcgRWRpdEZvcm1GYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcGRhdGVGb3Jtc0xpc3RTdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGZvcm1TY2hlbWEgPT4gbmV3IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24oZm9ybVNjaGVtYSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50L21haW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImZvcm1cIixcclxuXHRcdGNvbXBvbmVudDogTWFpbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImFkZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJlZGl0LzpfaWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRm9ybUxpc3RDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2ZsZXgtbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0RGF0ZXBpY2tlck1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZURldnRvb2xzTW9kdWxlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlLWRldnRvb2xzXCI7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUsIG1lcmdlRWZmZWN0cyB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnLCBNT0RVTEVfQ09ORklHX1RPS0VOLCBNT0RVTEVfREVGQVVMVF9DT05GSUcgfSBmcm9tIFwiLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGb3JtUmVkdWNlcnMgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybVZpZXdDb21wb25lbnQsIER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL3ZpZXcvZm9ybS12aWV3L2Zvcm0tdmlldy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90ZXh0L3RleHQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbWFpbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9lbWFpbC9lbWFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29sb3JDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY29sb3IvY29sb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9udW1iZXIvbnVtYmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy90YWJsZS90YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS1jb250YWluZXIvZWRpdC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QvZm9ybS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1haW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5jb21wb25lbnQvbWFpbi1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1FZmZlY3RzIH0gZnJvbSBcIi4vZWRpdC9lZGl0LWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGb3Jtc0xpc3RFZmZlY3RzIH0gZnJvbSBcIi4vbGlzdC9saXN0LmVmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2Zvcm0tcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9maWxlL2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRFZGl0Rm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb21wb25lbnQsXHJcblx0XHRBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db21wb25lbnQsXHJcblx0XHRGb3JtR3JvdXBDb21wb25lbnQsXHJcblx0XHRGb3JtQXJyYXlDb21wb25lbnQsXHJcblx0XHRGb3JtQ29udHJvbENvbXBvbmVudCxcclxuXHRcdEZvcm1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0RGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudFxyXG5cdFx0Ly8gTmdzRm9ybVNlbGVjdG9yQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdFNlbGVjdENvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0RW1haWxDb21wb25lbnQsXHJcblx0XHRDb2xvckNvbXBvbmVudCxcclxuXHRcdERhdGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50LFxyXG5cdFx0RmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRUZXh0Q29tcG9uZW50LFxyXG5cdFx0TnVtYmVyQ29tcG9uZW50LFxyXG5cdFx0VGFibGVDb21wb25lbnRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgRm9ybVZpZXdDb21wb25lbnQgXVxyXG5cdC8vIGV4cG9ydHM6IFsgRm9ybVZpZXdDb21wb25lbnQsIE5nc0Zvcm1TZWxlY3RvckNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3NGb3JtTW9kdWxlIHtcclxuXHRzdGF0aWMgZm9yUm9vdChjb25maWc/OiBGb3JtTW9kdWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogUm9vdE5nc0Zvcm1Nb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IE1PRFVMRV9DT05GSUdfVE9LRU4sIHVzZVZhbHVlOiBjb25maWcgfSBdXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0U3RvcmVNb2R1bGUuZm9yRmVhdHVyZShcImZvcm1cIiwgRm9ybVJlZHVjZXJzKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbIEFkZEZvcm1FZmZlY3RzLCBFZGl0Rm9ybUVmZmVjdHMsIEZvcm1zTGlzdEVmZmVjdHMgXSksXHJcblx0XHRSb3V0aW5nTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbIE5nc0Zvcm1Nb2R1bGUgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdE5nc0Zvcm1Nb2R1bGUge31cclxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsImxpc3QucmVkdWNlciIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFHaUIsZUFBZTtBQUFoQyxXQUFpQixlQUFlO0lBQy9CLElBQUE7UUFLQyxpQkFBWSxTQUF5QztZQUF6QywwQkFBQSxFQUFBLDhCQUFZLEVBQTZCLENBQUE7WUFBckQsaUJBRUM7WUFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO1NBQ3BFOzs7O1FBRUQsZ0NBQWM7OztRQUFkO1lBQ0MsT0FBTztnQkFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNuQixDQUFDO1NBQ0Y7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